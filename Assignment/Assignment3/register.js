window.onload = pageLoad;
function pageLoad() {
  var form = document.getElementById("myForm");

  form.onsubmit = validateForm;
}

function validateForm() {
  //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
  var x = document.forms["myForm"];
  if (x["password"].value != x["password2"].value) {
    var errormsg = (document.getElementById("errormsg").innerHTML =
      "Password not matched");
    alert("Password not matched");
    return false;
  }
}
