// create container inside body
var container = document.createElement("div");
container.setAttribute(
  "class",
  "container vh-100 d-flex align-items-center flex-column justify-content-center"
);
document.body.appendChild(container);

// create h1 inside row
var h1 = document.createElement("h1");
h1.setAttribute("class", "headingH1 my-5");
h1.append("items");

// create row inside container
var row = document.createElement("div");
row.setAttribute("class", "row");
row.setAttribute("id", "demo");
container.append(h1, row);

// create input inside container
var input = document.createElement("input");
input.setAttribute("class", "form-control my-5");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "enter your name");
container.append(h1, row, input);

// create 3 columns inside row
for (var i = 0; i < 3; i++) {
  var cols = document.createElement("div");
  cols.setAttribute("class", "col-md-6 col-lg-4 text-center");

  // create h2 inside col
  var h2 = document.createElement("h2");
  h2.append("item");

  // create img inside col
  var myImage = document.createElement("img");
  myImage.setAttribute("src", "images/img1.jpg");
  myImage.setAttribute("class", "w-100 mb-4");

  cols.append(myImage, h2);
  document.querySelector("#demo").append(cols);
}

// event on h1
var headingH1 = document.querySelector(".headingH1");
headingH1.addEventListener("mouseenter", function () {
  headingH1.style.backgroundColor = "red";
  headingH1.style.color = "white";
});
headingH1.addEventListener("mouseleave", function () {
  headingH1.style.backgroundColor = "";
  headingH1.style.color = "";
});




var users = [
  { name: "mariem", age: 21 },
  { name: "menna", age: 25 },
  { name: "hala", age: 20 },
];
// event on input
var inputForm = document.querySelector("input");

inputForm.addEventListener("input", function (e) {
  var flag = false;
  console.log(e.target.value);
  for (var i = 0; i < users.length; i++) {
    if (e.target.value.toLowerCase() == users[i].name.toLowerCase()) {
      flag = true;
      break;
    }
  }
  if (flag) console.log("user exits");
  else console.log("user not exit");
});
