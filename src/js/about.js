const aboutInit = () => {
  console.log('about page initialised');
  window.aboutInit = true;
}

const aboutRepeat = () => {
  console.log('running about repeat code');

  let controller = new ScrollMagic.Controller({
    refreshInterval: 1,
  });

  let timeline = new TimelineMax();

  timeline
    .to('.scroll-luke', {y: -300, duration: 3})
    .to('.about-title', {y: -250, duration: 3}, '-=3')
    .to('.scroll-machu-pichu', {y: -200, duration: 3}, '-=3')
    .to('.scroll-mountain', {y: -100, duration: 3}, '-=3')
    .fromTo('.scroll-background', {y: -25}, {y: 0, duration: 3}, '-=3')
    .fromTo('.about-arrow', {bottom: '2%'}, {bottom: '102%', duration: 3}, '-=3')
    .fromTo('.about-content', {top: '100%'}, {top: '0%', duration: 3 }, '-=3');


  let scene = new ScrollMagic.Scene({
    triggerElement: ".about", 
    duration: "100%",
    triggerHook: 0,
  }).setTween(timeline)
  .setPin('.about')
  .addTo(controller);

  let y = 0;

  let isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

  if(isChrome){
    controller.scrollPos(function () {
      return y;
    });
  }

  let scroll = Scrollbar.init(
    document.querySelector(".about")
  );

  scroll.addListener(function(status) {
    y = status.offset.y;
    
    if(isChrome){ 
      controller.update();
    } else {
      scene.refresh();       
    }
  });
}

export { aboutInit, aboutRepeat };
