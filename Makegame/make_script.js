//var txt = "";

function get_text(){
  var txt = "";
  alert('get');
  txt = document.getElementById("code_txt").value;
  alert(txt);
}

function main(){
  alert('hey');
  setTimeout(()=>{
    alert('3秒');
  },3000);
}

window.onload = function() {
  main()
}
