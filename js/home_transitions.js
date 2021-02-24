gsap.registerPlugin(ScrollTrigger);

let timeline = gsap.timeline();

gsap.to(".home-desktop-line", {
  scrollTrigger: {
    trigger: ".home-desktop-line",
    start: "center center",
    markers: true
  },
  y: 0,
  stagger: 0.25,
  duration: 0.65
});

let fe = document.querySelector(".fe");
let be = document.querySelector(".be");

gsap.to(fe, {
  scrollTrigger: {
    trigger: fe,
    scrub: true,
    start: "center center"
    // markers: true
  },
  x: -750,
  stagger: 0.25,
  duration: 0.65
});

// background change when passes BE
gsap.to(".home__second", {
  scrollTrigger: {
    trigger: ".counter__be",
    start: "center center",
    markers: true
  },
  backgroundColor: "#259b69",
  duration: 0.65
});

// background change when passes TT
gsap.to(".home__second", {
  scrollTrigger: {
    trigger: ".counter__tt",
    start: "center center",
    end: "center center",
    markers: true
  },
  backgroundColor: "#133a74",
  duration: 0.65
});

// background change when passes UIUX
gsap.to(".home__second", {
  scrollTrigger: {
    trigger: ".counter__uiux",
    start: "center center",
    end: "center center",
    markers: true
  },
  backgroundColor: "#7c44f1",
  duration: 0.65
});
