new TypeIt("#logotype", {
    speed: 225,
    loop: true,
    cursorSpeed: 1500
  })
  .type("rooo", {delay:300}) 
  .pause(2000) 
  .delete(2)
  .type("haaan", {delay:500})
  .pause(1000) 
  .delete(3)
  .type("n")
  .pause(2000)
  .delete(5)
  .type("brooohan")
  .go();

  new TypeIt("#footertext", {
    speed: 125,
    loop: true,
    cursorSpeed: 1500
  })
  .type("Let's talk over ☕️", {delay:300}) 
  .pause(1000) 
  .go();

// GSAP Animations
var controller = new ScrollMagic.Controller();
var workcard = gsap.fromTo(".work-card", {opacity: 0, y: 50, scale:0.9 }, {duration: 0.8, opacity: 1, y:0, scale: 1, ease: "back", stagger: 0.2,});

var scene = new ScrollMagic.Scene({
    triggerElement: "#work",
    triggerHook: 'onCenter'
  })
    .setTween(workcard)
    .addTo(controller);
