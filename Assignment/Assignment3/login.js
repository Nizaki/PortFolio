function getParams() {
  var idx = document.URL.indexOf("?");
  var params = new Array();
  if (idx != -1) {
    var pairs = document.URL.substring(idx + 1, document.URL.length).split("&");
    for (var i = 0; i < pairs.length; i++) {
      nameVal = pairs[i].split("=");
      params[nameVal[0]] = nameVal[1];
    }
  }
  return params;
}

window.onload = loginLoad;
function loginLoad() {
  // วิธีใช้ getParams()

  var form = document.getElementById("myLogin");

  form.onsubmit = checkLogin;
}

function checkLogin() {
  //ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
  var parameter = getParams();
  var x = document.forms["myLogin"];
  if (
    x["username"].value == parameter["username"] &&
    x["password"].value == parameter["password"]
  ) {
    alert("Success");
  } else {
    alert("Username or password not matche.");
    return false;
  }
}
