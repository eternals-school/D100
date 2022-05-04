// var count = 0;
// var stringName = "My name is Nivenda";

// function printOnScreen() {
//   console.log(stringName);
// }

// for (var i = 0; i < 10; i++) {
//   console.log(i);
//   if (i % 2) console.log("even number");
// }

// var myData = {
//   favBook: "H.potter",
//   favGame: "Marrio",
//   favPlace: "India",
// };

// var listItems = [1, 2, 3, "hi", myData];

// ;


window.onload = function () {
  console.log("## Window loaded ##");
};

window.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded");
  var clickMeBtn = document.getElementById("clickMeBtn");
  var count = 1;
  clickMeBtn.onclick = function () {
    var headerDOMList = document.getElementsByClassName("header");
    for (var i = 0; i < headerDOMList.length; i++)
      headerDOMList[i].innerText = headerDOMList[i].innerText + " " + count;
  };
});

var myReq = new XMLHttpRequest();
myReq.open("GET", "/todos/1");
myReq.addEventListener('load',function(res){
    if(myReq.readyState == 4)
    console.log(res)
})
myReq.send()
