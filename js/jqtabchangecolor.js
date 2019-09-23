$(document).ready(function () {
  var color = "#eee";
  $('table tr:odd td').css("backgroundColor",color);
  /*把背景色保存到属性中*/
  $('table tr:odd').attr("bg",color);
  $('table tr:even').attr("bg","#fff");

  $('table tr td').mouseover(function () {
      $(this).parent().find("td").css("backgroundColor","#d5f4fe");
  });
  $('table tr td').mouseout(function () {
    var bgc = $(this).parent().attr("bg");
    $(this).parent().find("td").css("backgroundColor",bgc);
  });
});