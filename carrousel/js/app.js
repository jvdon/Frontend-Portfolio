let items = [...document.querySelectorAll(".item")];

let currentId = 0;

items.map(item => {
      item.addEventListener("animationend", (e) => {
            cycle();
      })
})

function cycle() {
      if (currentId < items.length - 1) {
            currentId++;
      } else {
            currentId = 0;
      }

      [...items].forEach(item => {
            item.classList.remove("active");
      });

      items[currentId].classList.add("active");

}

// function moveLeft() {
//       [...items].forEach(item => {
//             item.classList.remove("active");
//       });

//       if (currentId > 0) currentId--;


//       items[currentId].classList.toggle("active");
// }

// function moveRight() {
//       [...items].forEach(item => {
//             item.classList.remove("active");
//       });
//       if (currentId < items.length - 1) currentId++;
//       items[currentId].classList.toggle("active");

// }