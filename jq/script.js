$(function () {
  $(".gnb ul li:first-child").hover(function () {
    $(".lnb_wrap_one").css("opacity", "1");
    $(".lnb_wrap_two").css("opacity", "0");
    $(".lnb_wrap_three").css("opacity", "0");
    $(".lnb_wrap_four").css("opacity", "0");
    $(".lnb_wrap_five").css("opacity", "0");
    $(".lnb_wrap_six").css("opacity", "0");
    $(".lnb_wrap_seven").css("opacity", "0");
    $(".lnb").css("opacity", "1");
  });
  $(".gnb ul li:nth-child(2)").hover(function () {
    $(".lnb_wrap_one").css("opacity", "0");
    $(".lnb_wrap_two").css("opacity", "1");
    $(".lnb_wrap_three").css("opacity", "0");
    $(".lnb_wrap_four").css("opacity", "0");
    $(".lnb_wrap_five").css("opacity", "0");
    $(".lnb_wrap_six").css("opacity", "0");
    $(".lnb_wrap_seven").css("opacity", "0");
    $(".lnb").css("opacity", "1");
  });

  $(".gnb ul li:nth-child(3)").hover(function () {
    $(".lnb_wrap_one").css("opacity", "0");
    $(".lnb_wrap_two").css("opacity", "0");
    $(".lnb_wrap_three").css("opacity", "1");
    $(".lnb_wrap_four").css("opacity", "0");
    $(".lnb_wrap_five").css("opacity", "0");
    $(".lnb_wrap_six").css("opacity", "0");
    $(".lnb_wrap_seven").css("opacity", "0");
    $(".lnb").css("opacity", "1");
  });

  $(".gnb ul li:nth-child(4)").hover(function () {
    $(".lnb_wrap_one").css("opacity", "0");
    $(".lnb_wrap_two").css("opacity", "0");
    $(".lnb_wrap_three").css("opacity", "0");
    $(".lnb_wrap_four").css("opacity", "1");
    $(".lnb_wrap_five").css("opacity", "0");
    $(".lnb_wrap_six").css("opacity", "0");
    $(".lnb_wrap_seven").css("opacity", "0");
    $(".lnb").css("opacity", "1");
  });

  $(".gnb ul li:nth-child(5)").hover(function () {
    $(".lnb_wrap_one").css("opacity", "0");
    $(".lnb_wrap_two").css("opacity", "0");
    $(".lnb_wrap_three").css("opacity", "0");
    $(".lnb_wrap_four").css("opacity", "0");
    $(".lnb_wrap_five").css("opacity", "1");
    $(".lnb_wrap_six").css("opacity", "0");
    $(".lnb_wrap_seven").css("opacity", "0");
    $(".lnb").css("opacity", "1");
  });

  $(".gnb ul li:nth-child(6)").hover(function () {
    $(".lnb_wrap_one").css("opacity", "0");
    $(".lnb_wrap_two").css("opacity", "0");
    $(".lnb_wrap_three").css("opacity", "0");
    $(".lnb_wrap_four").css("opacity", "0");
    $(".lnb_wrap_five").css("opacity", "0");
    $(".lnb_wrap_six").css("opacity", "1");
    $(".lnb_wrap_seven").css("opacity", "0");
    $(".lnb").css("opacity", "1");
  });
  $(".gnb ul li:last-child").hover(function () {
    $(".lnb_wrap_one").css("opacity", "0");
    $(".lnb_wrap_two").css("opacity", "0");
    $(".lnb_wrap_three").css("opacity", "0");
    $(".lnb_wrap_four").css("opacity", "0");
    $(".lnb_wrap_five").css("opacity", "0");
    $(".lnb_wrap_six").css("opacity", "0");
    $(".lnb_wrap_six").css("opacity", "1");
    $(".lnb").css("opacity", "1");
  });
  $(".top_wrap").mouseleave(function () {
    $(".lnb").css("opacity", "0");
  });
  $(".mainbanner").bxSlider({
    mode: "horizontal",
    moveSlides: 1,
    slideMargin: 0,
    infiniteLoop: true,
    speed: 500,
    pause: 5000,
    slideWidth: 1980,
    auto: true,
    autoHover: true,
    controls: true,
    pager: true,
    pagerType: "short",
  });
});
