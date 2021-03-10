gsap.config({ nullTargetWarn: false });

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
  // .to(".line", {
  //     y: "100%",
  //     stagger: 0.25,
  //     duration: 1,
  //     ease: "Expo.easeInOut"
  //     // onComplete: () => {
  //     //   setTimeout(() => {
  //     //     changeTextNav();
  //     //   }, 1000);
  //     // }
  //   })
  tl.to(".loading", {
    duration: 1.2,
    height: "100%",
    ease: "Expo.easeInOut"
  })
    .to(".loading", {
      bottom: "100%"
    })
    .set(".loading", {
      bottom: "0%",
      height: "0%"
    });
}

// page loads for the first time
function contentAnimation() {
  let tl = gsap.timeline();
  let tl2 = gsap.timeline();

  tl.to(".nav-line", {
    duration: 0.65,
    y: 0,
    stagger: 0.25,
    delay: 1,
    ease: "expo.easeInOut"
  })
    .to(
      ".line",
      {
        duration: 0.95,
        y: 0,
        stagger: 0.25,
        ease: "expo.easeInOut"
      },
      "-=1.5"
    )
    .to(
      ".home-line",
      {
        duration: 0.95,
        y: 0,
        stagger: 0.25,
        ease: "expo.easeInOut"
      },
      "-=1.5"
    );

  tl2.to(".about-line", {
    duration: 0.95,
    y: 0,
    stagger: 0.25,
    ease: "expo.easeInOut"
  });
}

function onLoad() {
  let tl = gsap.timeline();

  tl.to(".nav-line", {
    duration: 0.65,
    y: 0,
    stagger: 0.25,
    delay: 0.5,
    ease: "expo.easeInOut"
  })
    .to(
      ".line",
      {
        duration: 0.95,
        y: 0,
        stagger: 0.25,
        ease: "expo.easeInOut"
      },
      "-=0.25"
    )
    .to(".arrow-line", {
      duration: 0.65,
      y: 0,
      ease: "expo.easeInOut"
    })
    .to(".arrow", {
      duration: 0.4,
      x: 0,
      opacity: 1,
      ease: "expo.easeInOut"
    })
    .to(
      ".home-line",
      {
        duration: 0.65,
        y: 0,
        stagger: 0.25,
        ease: "expo.easeInOut"
      },
      "-=1.5"
    )
    .to(
      ".about-line",
      {
        duration: 0.95,
        y: 0,
        stagger: 0.25,
        ease: "expo.easeInOut"
      },
      "-=1.5"
    );
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
  // let line__text = document.querySelector(".line__text");
  // if (line__text.innerHTML == "About") {
  //   line__text.innerHTML = "Home";
  // } else {
  //   line__text.innerHTML = "About";
  // }
}
