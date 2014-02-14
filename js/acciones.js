// JavaScript Document
$(document).ready(function() {
	document.addEventListener("deviceready",function() {
	 $('#B1').tap(function()  {
	navigator.notification.beep(1);
   	}); //	tap b1
	   }); // cierre de deviceready
   }); // cierre de ready