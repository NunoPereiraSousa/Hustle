let projects = document.querySelectorAll(".home__third__projects__item");
console.log(projects);

projects.forEach(project => {
  project.addEventListener("click", toggle, false);
});

function toggle() {
  let selected = this;

  let itemClass = this.className;

  for (let i = 0; i < projects.length; i++) {
    projects[i].className = "home__third__projects__item closed";
  }

  if (itemClass == "home__third__projects__item closed") {
    this.className = "home__third__projects__item open";
    // this.children[1].className = "home__third__projects__item__desc not-hidden";
  }

  //   if (
  //     selected.children[1].className == "home__third__projects__item__desc hidden"
  //   ) {
  //     setTimeout(() => {
  //       selected.children[1].className = "home__third__projects__item__desc";
  //     }, 150);
  //   } else {
  //     setTimeout(() => {
  //       selected.children[1].className =
  //         "home__third__projects__item__desc hidden";
  //     }, 100);
  //   }
}
