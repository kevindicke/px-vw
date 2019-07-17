console.log("Contact me at k.dicke7@gmail.com");
function show(){
		var pxValue = jQuery('#pixel').val();
		var vpwidth = jQuery('#vpwidth').val();
		var vwValue = String(parseFloat(pxValue / vpwidth) * 100).split(".");
    vwValue[1] = vwValue[1].substring(0,2)
		vwValue = vwValue.join(".")
    $('.output label').text(vwValue + "vw");
		$('.output').show();
}
function copyToClipboard(element) {
  $("button").hide()
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  $("#copied").show()
  $("#copied").fadeOut(1500)
}
