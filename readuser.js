window.addEventListener("load", () => {
  //tangkap user
  let user = JSON.parse(localStorage.getItem("isLogin"));

  //tangkap element user_name
  let user_name = document.getElementById("user_name");

  // inner user_name dari user
  user_name.innerHTML = user.username;
});
