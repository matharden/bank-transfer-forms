
var getParameterByName = function(name){
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};


// Hijack form action to summary view when JavaScript is available

var form = document.querySelector('#transfer');

if (form) {
  form.setAttribute('action', '../summary.html');
}
