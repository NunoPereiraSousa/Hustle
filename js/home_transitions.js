gsap.registerPlugin(ScrollTrigger);

let timeline = gsap.timeline();

gsap.to(".home-desktop-line", {
  scrollTrigger: {
    trigger: ".home-desktop-line",
    start: "-50% center"
  },
  y: 0,
  stagger: 0.25,
  duration: 0.65
});

gsap.to(".home__second", {
  scrollTrigger: {
    trigger: ".home-line",
    start: "bottom center",
    end: "bottom"
  },
  margin: "0 0",
  duration: 0.65
});

let fe = document.querySelector(".fe");
let be = document.querySelector(".be");
let tt = document.querySelector(".tt");
let uiux = document.querySelector(".uiux");

gsap.to([fe, be, tt, uiux], {
  scrollTrigger: {
    trigger: ".home__second__content",
    scrub: 1,
    start: "top center",
    end: "bottom"
  },
  xPercent: -100,
  stagger: 0.25,
  duration: 0.65
});

gsap.to(".home__second", {
  scrollTrigger: {
    trigger: ".home__second",
    start: "top top",
    end: "top top",
    onEnterBack: () => {
      document.querySelector(".home__second").classList.remove("green");
    }
  },
  duration: 0.65
});

// background change when passes FE
gsap.to(".home__second", {
  scrollTrigger: {
    trigger: ".counter__fe",
    start: "center center",
    onEnter: () => {
      document.querySelector(".home__second").classList.add("green");
    },
    onEnterBack: () => {
      document.querySelector(".home__second").classList.remove("blue");
      document.querySelector(".home__second").classList.add("green");
    },
    onLeave: () => {
      document.querySelector(".home__second").classList.remove("green");
      document.querySelector(".home__second").classList.add("blue");
    }
  },
  duration: 0.65
});

// background change when passes BE
gsap.to(".home__second", {
  scrollTrigger: {
    trigger: ".counter__be",
    start: "center center",
    markers: true,
    onEnter: () => {
      document.querySelector(".home__second").classList.add("blue");
    },
    onEnterBack: () => {
      document.querySelector(".home__second").classList.add("blue");
      document.querySelector(".home__second").classList.remove("yellow");
    },
    onLeave: () => {
      document.querySelector(".home__second").classList.remove("blue");
      document.querySelector(".home__second").classList.add("yellow");
    }
  },
  duration: 0.65
});

// background change when passes TT
gsap.to(".home__second", {
  scrollTrigger: {
    trigger: ".counter__tt",
    start: "center center",
    markers: true,
    onEnter: () => {
      document.querySelector(".home__second").classList.add("yellow");
    },
    onEnterBack: () => {
      document.querySelector(".home__second").classList.add("yellow");
      document.querySelector(".home__second").classList.remove("purple");
    },
    onLeave: () => {
      document.querySelector(".home__second").classList.remove("yellow");
      document.querySelector(".home__second").classList.add("purple");
    }
  },
  duration: 0.65
});

// background change when passes UIUX
gsap.to(".home__second", {
  scrollTrigger: {
    trigger: ".counter__uiux",
    start: "center center",
    markers: true,
    onEnter: () => {
      document.querySelector(".home__second").classList.add("purple");
    },
    onEnterBack: () => {
      document.querySelector(".home__second").classList.add("purple");
    },
    onLeave: () => {
      document.querySelector(".home__second").classList.remove("purple");
    }
  },
  duration: 0.65
});
