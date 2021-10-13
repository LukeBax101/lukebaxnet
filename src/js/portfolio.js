import portfolio from '../../public/portfolio.json'

let selectedCard = null;

const generatePortfolioItems = () => {
  const items = portfolio.portfolio.map((item, idx) => generateItem(idx, item));
  const list = document.getElementsByClassName('portfolio-list')[0];
  list.append(...items);
}

const generateItem = (idx, details) => {
  techList = details.stack.map(tech => {
    const techEl = document.createElement('li');
    techEl.append(tech);
    return techEl;
  })

  const stack = document.createElement('ul');
  stack.classList.add('stack')
  stack.append(...techList);

  const appLink = document.createElement('a');
  appLink.classList.add('app-link');
  appLink.setAttribute('href', details.appLink ?? '');
  appLink.setAttribute('target', '_blank');
  appLink.append('Try it out!');

  const gitIcon = document.createElement('i');
  gitIcon.classList.add('fa');
  gitIcon.classList.add('fa-github');
  gitIcon.setAttribute('aria-hidden', 'true');

  const gitLink = document.createElement('a');
  gitLink.classList.add('git-link');
  gitLink.setAttribute('href', details.gitLink);
  gitLink.setAttribute('target', '_blank');
  gitLink.appendChild(gitIcon);

  const expanded = document.createElement('div')
  expanded.classList.add('expanded');

  if (details.appLink) {
    expanded.append(stack, appLink, gitLink);
  } else {
    expanded.append(stack, gitLink);
  }

  const chevron = document.createElement('i');
  chevron.classList.add('fas');
  chevron.classList.add('fa-chevron-down');

  const short = document.createElement('p');
  short.classList.add('short');
  short.innerHTML = details.short;

  const long = document.createElement('p');
  long.classList.add('long');
  long.innerHTML = details.long;

  const description = document.createElement('div');
  description.classList.add('description');
  description.append(short, long);

  const title = document.createElement('h1');
  title.classList.add('title');
  title.append(details.title);

  const image = document.createElement('img');
  image.style.backgroundColor = details.color;
  image.src = `res/${details.img}`;

  const card = document.createElement("div");
  card.classList.add('card')
  card.append(image, title, description, chevron, expanded);

  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card-container');
  cardContainer.setAttribute('data-flip-key',`flip-${idx + 1}`)
  cardContainer.appendChild(card);

  return cardContainer;
}

const portfolioInit = () => {
  const body = document.querySelector('body');
  const cards = document.getElementsByClassName('card');

  const stretch = 1.1;
  body.addEventListener('mousemove', (e) => {
      let cardRect, card, normX, normY, rotY, rotX;
      for (let i=0; i< cards.length; i++) {
        card = cards[i];
        if (card !== selectedCard?.getElementsByClassName('card')[0]) {
          cardRect = card.getBoundingClientRect();
          normX = ((e.pageX - cardRect.x - (cardRect.width/2))/(cardRect.width/2));
          normY = ((e.pageY - cardRect.y - (cardRect.height/2))/(cardRect.height/2));
          if (Math.abs(normX) < stretch && Math.abs(normY) < stretch) {
            rotX = Math.sin(normX * (1 / stretch) * Math.PI) * 20;
            rotY = Math.sin(normY * (1 / stretch) * Math.PI) * 10;
            card.style.transition = 'box-shadow 0.2s ease';
            card.style.transform = `perspective(50rem) rotateY(${rotX}deg) rotateX(${-rotY}deg)`;
          } else {
            card.style.transition = 'transform 0.5s ease, box-shadow 0.2s ease';
            card.style.transform = `none`;
          }
        }
      }
  });

  generatePortfolioItems();

  console.log('portfolio page initialised');
  window.portfolioInit = true;
}

const portfolioRepeat = () => {
  console.log('running portfolio repeat code');

  const flipping = new Flipping();

  function initCard(card) {
    card.onclick = function(e)   {
      e.stopPropagation();
      if (selectedCard !== card) {
        flipping.read();
        if (selectedCard) {
          selectedCard.classList.remove("clicked")
        }
        card.classList.add("clicked")
        flipping.flip();
        selectedCard = card;
        card.getElementsByClassName('card')[0].style.transform = `perspective(50rem) rotateY(0deg) rotateX(0deg)`;
        }
    }
  }

  function initBody(body) {
    body.onclick = function() {
      if (selectedCard) {
        flipping.read();
        selectedCard.classList.remove("clicked")
        selectedCard = null;
        flipping.flip();
      }
    }
  }

  const body = document.querySelector('body');
  const cardContainers = document.getElementsByClassName('card-container');

  for (let i=0; i< cardContainers.length; i++) {
    initCard(cardContainers[i]);
  }

  initBody(body);
};

export { portfolioInit, portfolioRepeat };




