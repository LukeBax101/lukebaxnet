let selectedCard = null;

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




