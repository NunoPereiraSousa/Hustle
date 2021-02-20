barba.init({
  sync: true,
  transitions: [
    {
      async leave(data) {
        const done = this.async();

        pageTransition();

        await delay(1000);
        done();
      },

      async enter(data) {
        // onLoad();
        contentAnimation();
      },

      async once(data) {
        onLoad();
      }
    }
  ]
});

function delay(n) {
  n = n || 2000;
  return new Promise(done => {
    setTimeout(() => {
      done();
    }, n);
  });
}

function pageTransition() {
  let tl = gsap.timeline();

  tl.to(".line", {
    y: "100%",
    stagger: 0.25,
    duration: 1,
    ease: "Expo.easeInOut",
    onComplete: () => {
      setTimeout(() => {
        changeTextNav();
      }, 1000);
    }
  })
    .to(
      ".loading",
      {
        duration: 1.2,
        height: "100%",
        ease: "Expo.easeInOut"
      },
      "-=1"
    )
    .to(".loading", {
      bottom: "100%"
    })
    .set(".loading", {
      bottom: "0%",
      height: "0%"
    });
}

function contentAnimation() {
  let tl = gsap.timeline();

  tl.to(".line", {
    duration: 0.65,
    y: 0,
    stagger: 0.25,
    delay: 1,
    ease: "expo.easeInOut"
  });
}

function onLoad() {
  let tl = gsap.timeline();

  tl.to(".line", {
    duration: 0.65,
    y: 0,
    stagger: 0.25,
    delay: 0.5,
    ease: "expo.easeInOut"
  });
}

// window.onload = () => {
//   gsap.to(".line", {
//     duration: 0.65,
//     y: 0,
//     stagger: 0.25,
//     ease: "expo.easeinout"
//   });
// };

function changeTextNav() {
  let line__text = document.querySelector(".line__text");

  if (line__text.innerHTML == "About") {
    line__text.innerHTML = "Home";
  } else {
    line__text.innerHTML = "About";
  }
}
