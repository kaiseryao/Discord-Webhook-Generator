function sendMessage() {
  var request = new XMLHttpRequest();
  var input = document.getElementById("textinput").value;
  var username = document.getElementById("username").value;
  var avatar = document.getElementById("avatar").value;
  var weburl = document.getElementById("weburl").value;

  request.open("POST", weburl);

  request.setRequestHeader('Content-type', 'application/json');

  var params = {
    username: username,
    avatar_url: avatar,
    content: input
  }

  request.send(JSON.stringify(params));
}
