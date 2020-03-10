let count = 0;

function postFunction() {
  let post1 = document.getElementById("post1");
  let reply1 = document.getElementById("reply1");
  let reply2 = document.getElementById("reply2");
  let text = document.getElementById("text1");
  switch (count) {
    case 0:
      post1.innerHTML = "<h1>" + text.value + "</h1>";
      break;
    case 1:
      reply1.innerHTML = "<h2>" + text.value + "</h2>";
      break;
    case 2:
      reply2.innerHTML = "<h3>" + text.value + "</h3>";
      break;
    default:
      break;
  }
  count++;
}

function clearFunction() {
  post1.innerHTML = "";
  reply1.innerHTML = "";
  reply2.innerHTML = "";
  count = 0;
}
