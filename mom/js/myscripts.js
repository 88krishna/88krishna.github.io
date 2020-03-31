$("#clickaction").click(function (e) {
  e.preventDefault();
  $("#celebration").toggle();
});

function hideCelebrationContent() {
  $("#celebration").hide();
}