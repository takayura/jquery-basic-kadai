$(document).ready(function() {
  // 文字色変化
  $("#change-color").click(function() {
    $("#target").css("color", "blue");
  });

  // 文字内容変化
  $("#change-text").click(function() {
    $("#target").text("Hello！");
  });

  // フェードアウト
  $("#fade-out").click(function() {
    $("#target").fadeOut();
  });

  // フェードイン
  $("#fade-in").click(function() {
    $("#target").fadeIn();
  });
});