// var allDivs = document.getElementsByTagName("div");
// var prev = false;

// for(i= 0; i < allDivs.length; i++) {
//     allDivs[i].onclick = function() {
// 		this.style.position = 'absolute';
//         if (prev) { prev.style.zIndex = 1; }
//         this.style.zIndex = 1000;
//         prev = this;
//     }
// }

function bringFront(box) {
  var all = document.querySelectorAll("div");
  console.log(all);
  for (i = 0; i < all.length; i++) {
    all[i].style.zIndex = 0;
  }
  box.style.zIndex = 1;
  //   console.log(box.style.zIndex);
}

// Using for each loop
// function bringFront(box) {
//   var all = document.querySelectorAll("div");
//   console.log(all);
//   all.forEach(function(key) {
//     //Takes in an element and index
//     console.log(key);
//     key.style.zIndex = 0;
//   });
//   box.style.zIndex = 1;
// }

//     function bringFront(box) {
//     var hello = getComputedStyle(box1);
//     box1.addEventListener("click", function() {
//         box1.style.top = parseInt(hello.top) + 10 + "px";
//     });
// }

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  var info = ev.target.className;
  // console.log(info);
  ev.dataTransfer.setData("text", info);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  console.log(data);
  ev.target.appendChild(document.getElementsByClassName(data)[0]);
}

upkey = document.querySelectorAll(".fa-caret-up");
downkey = document.querySelectorAll(".fa-caret-down");
leftkey = document.querySelectorAll(".fa-caret-left");
rightkey = document.querySelectorAll(".fa-caret-right");

upkey.forEach(function(node) {
  node.addEventListener("click", function() {
    var target = this.parentNode;
    var curTop = getComputedStyle(target).top; // "123px"
    var newTop = parseInt(curTop) - 10 + "px";
    target.style.top = newTop;
  });
});
downkey.forEach(function(node) {
  node.addEventListener("click", function() {
    var target = this.parentNode;
    var curTop = getComputedStyle(target).top; // "123px"
    var newTop = parseInt(curTop) + 10 + "px";
    target.style.top = newTop;
  });
});

leftkey.forEach(function(node) {
  node.addEventListener("click", function() {
    var target = this.parentNode;
    var curTop = getComputedStyle(target).left; // "123px"
    var newTop = parseInt(curTop) - 10 + "px";
    target.style.left = newTop;
  });
});
rightkey.forEach(function(node) {
  node.addEventListener("click", function() {
    var target = this.parentNode;
    var curTop = getComputedStyle(target).left; // "123px"
    var newTop = parseInt(curTop) + 10 + "px";
    target.style.left = newTop;
  });
});
