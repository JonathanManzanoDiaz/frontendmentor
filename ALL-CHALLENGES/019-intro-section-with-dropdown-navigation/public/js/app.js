// MENU HAMB OPEN START
$(".hamb").click(() => {
  $("#navMobile").removeClass("show");
  $("body").css("background-color", "rgba(0, 0, 0, 0.8)");
});

// MENU HAMB OPEN END

// MENU HAMB CLOSE START
$(".close").click(() => {
  $("#navMobile").addClass("show");
  $("body").css("background-color", "hsl(0, 0%, 98%)");
});
// MENU HAMB CLOSE END

// SUBMENU FEATURE OPEN  START
$(".features").click(() => {
  if ($(".submenu1").hasClass("show")) {
    $(".submenu1").removeClass("show");
    $(".imgArr").attr("src", "/public/images/icon-arrow-up.svg");
  }
  // SUBMENU FEATURE OPEN END

  // SUBMENU FEATURE CLOSE START
  else {
    $(".submenu1").addClass("show");
    $(".imgArr").attr("src", "/public/images/icon-arrow-down.svg");
  }
  // SUBMENU FEATURE CLOSE END
});

// SUBMENU COMNPANY OPEN START
$(".company").click(() => {
  if ($(".submenu2").hasClass("show")) {
    $(".submenu2").removeClass("show");

    $(".imgArr2").attr("src", "/public/images/icon-arrow-up.svg");
  }
  // SUBMENU COMNPANY OPEN END

  // SUBMENU COMNPANY CLOSE START
  else {
    $(".submenu2").addClass("show");
    $(".imgArr2").attr("src", "/public/images/icon-arrow-down.svg");
  }
  // SUBMENU COMNPANY CLOSE END
});

// DESKTOP

$(".featuresDesk").click(() => {
  if ($(".subDesk1").hasClass("show")) {
    $(".imgArr3").attr("src", "/public/images/icon-arrow-up.svg");
    $(".subDesk1").removeClass("show");
  } else {
    $(".imgArr3").attr("src", "/public/images/icon-arrow-down.svg");
    $(".subDesk1").addClass("show");
  }
});

$(".companyDesk").click(() => {
  if ($(".subDesk2").hasClass("show")) {
    $(".imgArr4").attr("src", "/public/images/icon-arrow-up.svg");
    $(".subDesk2").removeClass("show");
  } else {
    $(".imgArr4").attr("src", "/public/images/icon-arrow-down.svg");
    $(".subDesk2").addClass("show");
  }
});
