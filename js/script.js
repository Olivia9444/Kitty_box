var button = document.querySelector(".show-cat");
var cat = document.querySelector("cat");

//console.log(button);
//console.log(cat);

console.log("It's working");
button.addEventListener("click", function () {
  cat.classlist.add("show");
});
