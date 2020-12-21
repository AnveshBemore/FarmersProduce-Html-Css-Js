"use strict";
var sum = 0,
  count = 0;
var prdClsNme;
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
var cost = [35, 50, 40, 30, 30, 30, 30, 30, 30, 30, 30];
var starVeg = [3, 4, 5, 2, 3, 4, 5, 2, 3, 5, 2];
var b = $(".vegetables").html();
var a,
  i = 0;
//function gets us back to the home page
document.querySelector(".logo").onclick = function retrieveData() {
  $(".total").hide();
  $(".basket_items").empty();
  $(".vegetables").css("display", "block");
  $(".basket_items").css("visibility", "hidden");
};
//function checks which vegetable add to basket button is clicked
a = document.getElementsByClassName("addToBasket");
for (let i = 0, l = a.length; i < l; i++) {
  a[i].onclick = function IndexBasket() {
    sum = sum + cost[i];
    bsktStack.unshift(i);
    /*     add in the front because getElementsbyclassname goes from
       0 to n-1
       */
    increaseCount();
  };
}
//increases basket count when add to basket button is clicked
function increaseCount() {
  count = 0;
  console.log(`${$(".count_basket").val()}`);
  if (!$(".count_basket").val()) {
    count = 1;
  } else {
    count = Number($(".count_basket").val()) + 1;
    console.log(`count${count}`);
  }
  // alert($(".addToBasket").val());
  $(".count_basket").val(count);
  $(".count_basket").text(count);
}

//function clear the home page and displays the products added to the basket
$(".basket").on("click", function () {
  $(".vegetables").css("display", "none");
  $(".basketTle").css("visibility", "visible");
  $(".basket_items").css("visibility", "visible");
  $(".total").css("visibility", "visible");
  $(`.basket_items`).append(`<p class="basketTle"><b>Basket Items</b></p>`);

  for (i = 0; i < bsktStack.length; i++) {
    $(`.${clssNamsVeg[bsktStack[i]]} .addToBasket`).hide();
    $(".total_amt").html(`&#8377;${sum}`); //bsktStack.length is top item
    /* product name is given form product0 to productn-1 to be equivalent with
    bsktStack*/
    var prdHtml = $(`.${clssNamsVeg[bsktStack[i]]}`).html();
    prdClsNme = `product${i}`;
    $(".basketTle").css("fontSize", "35px");
    $(".basket_items").append(`<div class=${prdClsNme}></div>`);
    $(`.${prdClsNme}`).append(`${prdHtml}`);
    $(`.${prdClsNme} .veg_info`).append(
      `<button class="delVeg">Delete</button>`
    );

    var d = document.getElementsByClassName(`delVeg`),
      l = d.length;
    console.log("hello Bro " + d.length);
    for (let j = l - 1; j >= 0; j--) {
      console.log("hello Bro j=" + j);
      d[j].onclick = function delEle(ev) {
        ev.preventDefault();
        console.log("hello Bro j==" + j);
        console.log(`.product${j}`);
        console.log(`integ${bsktStack[j]}`);
        var su = cost[bsktStack[j]];
        sum = sum - su;
        $(".total_amt").html(`&#8377;${sum}`);
        $(`.product${j}`).html("");
        var co = Number($(".count_basket").val()) - 1;
        $(".count_basket").val(co);
        // alert(bsktStack);
        $(".count_basket").text(co);
        bsktStack.splice(j, 1);
        // alert(bsktStack);
        console.log(bsktStack.length);
      };
    }

    $(`.${clssNamsVeg[bsktStack[i]]} .addToBasket`).show();
    $(`.${clssNamsVeg[bsktStack[i]]} .delVeg`).hide();
    $(`.${clssNamsVeg[bsktStack[i]]}`).show();
    // window.event.stopPropagation();
  }
});
//delete the product
function delEle() {}
//makes product css border 3d
window.onload = function boxProduct() {
  for (var i = 0; i < clssNamsVeg.length; i++) {
    $(`.${clssNamsVeg[i]}`).css({
      boxShadow: "0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)",
    });
    $(`.${clssNamsVeg[i]} .veg_info .price`).html(`&#8377;${cost[i]}/kg`);
    alert(`.${clssNamsVeg[i]} .price`);
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

// del basket item
