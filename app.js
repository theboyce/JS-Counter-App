let add = document.getElementById("increment");

let remove = document.getElementById("decrement");

let reset = document.getElementById("reset");

let count = document.getElementById("number");

let integer = 0;



add.addEventListener("mouseenter", function () {
  this.style.backgroundColor = "yellow";
});
add.addEventListener("mouseleave", function () {
this.style.backgroundColor = "white";
});

add.addEventListener("click", function () {
  integer += 1;
  count.innerHTML = integer;
});

remove.addEventListener("click", function () {
  integer -= 1;
  count.innerHTML = integer;
});

reset.addEventListener("click", function () {
  integer = 0;
  count.innerHTML = integer;
});
