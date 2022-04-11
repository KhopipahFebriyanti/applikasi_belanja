window.addEventListener("load", () => {
  //chek session
  let lastUser = localStorage.getItem("isFirstTime");

  if (lastUser) {
    return (window.location.href = "/login.html");
  }
});
