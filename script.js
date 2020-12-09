"use strict";
var f = 0;
var bsktStack = new Array();
var clssNamsVeg = [
  "potato",
  "tomato",
  "brinjal",
  "cabbage",
  "califlower",
  "bittergaurd",
  "ridgegaurd",
  "bottlegaurd",
  "DrumStricks",
  "Onion",
  "Chilly",
];
var starVeg = [3, 4, 5, 2, 3, 4, 5, 2, 3, 5, 2];
var b = $(".vegetables").html();
var a;
//makes product css border 3d
window.onload = function boxProduct() {
  for (var i = 0; i < clssNamsVeg.length; i++) {
    $(`.${clssNamsVeg[i]}`).css({
      boxShadow: "0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)",
    });
  }
};
//this functions returns stars as you give num b/w 1-5
var n;
function swth(n) {
  switch (n) {
    case 1:
      return "<p>&#9733;</p>";
    case 2:
      return "<p>&#9733;&#9733;</p>";
    case 3:
      return "<p>&#9733;&#9733;&#9733;</p>";
    case 4:
      return "<p>&#9733;&#9733;&#9733;&#9733;</p>";
    case 5:
      return "<p>&#9733;&#9733;&#9733;&#9733;&#9733;</p>";
  }
}
//function sets stars to star paragaraph tag

window.onload = function editVeg(delBtn) {
  for (var i = 0; i < clssNamsVeg.length; i++) {
    var clsStar = `.${clssNamsVeg[i]} .star`;
    var nstrs = `${swth(starVeg[i])}`;
    $(`${clsStar}`).html(nstrs);
  }
};

//increases basket count when add to basket button is clicked
function increaseCount() {
  let count = 0;
  if (!$(".addToBasket").val()) {
    count = 1;
  } else {
    count = Number($(".addToBasket").val()) + 1;
  }
  $(".addToBasket").val(count);
  $(".count_basket").text($(".addToBasket").val());
}
//function checks which vegetable add to basket button is clicked
a = document.getElementsByClassName("addToBasket");
for (let i = 0, l = a.length; i < l; i++) {
  a[i].onclick = function IndexBasket() {
    bsktStack.push(i);
    increaseCount();
  };
}
//function gets us back to the home page
document.querySelector(".logo").onclick = function retrieveData() {
  $(".basket_items").empty();
  $(".vegetables").css("display", "block");
  $(".basket_items").css("visibility", "hidden");
};
//function clear the home page and displays the products added to the basket
document.querySelector(".basket").onclick = function clearData() {
  $(".vegetables").css("display", "none");
  $(".basketTle").css("fontSize", "35px");
  $(".basket_items").css("visibility", "visible");

  for (let i = bsktStack.length - 1; i >= 0; i--) {
    $(`.${clssNamsVeg[bsktStack[i]]} .addToBasket`).hide();
    $(`.${clssNamsVeg[bsktStack[i]]} .veg_info`).append(
      `<button class="delVeg">Delete</button>`
    );
    var prdHtml = $(`.${clssNamsVeg[bsktStack[i]]}`).html();
    var prdClsNme = `product${i}`;
    $(".basket_items").append(`<div class=${prdClsNme}></div>`);
    $(`.${prdClsNme}`).append(`${prdHtml}`);
    $(`.${clssNamsVeg[bsktStack[i]]} .addToBasket`).show();
  }
};
