$("#clickaction1").click(function (e) {
  e.preventDefault();
  $("#celebration").toggle();
  $("#pillu-normal").toggle();
  $("#pillu-clicked").toggle();
});

$("#clickaction2").click(function (e) {
  e.preventDefault();
  $("#celebration").toggle();
  $("#pillu-normal").toggle();
  $("#pillu-clicked").toggle();
});

function hideCelebrationContent() {
  $("#celebration").hide();
  $("#pillu-normal").toggle();
  $("#pillu-clicked").toggle();
}