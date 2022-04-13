const handleLogin = (event) => {
  event.preventDefault();

  let email = event.target.email.value;
  password = event.target.password.value;

  if (!email || !password) {
    alert("Silahkan Lengkapi Data");
    return;
  }

  let users = JSON.parse(localStorage.getItem("_users"));

  //find User
  let findUser = users.filter((item) => {
    return item.email == email;
  });

  if (findUser.length == 0) {
    alert("Email tidak ditemukan");
    return;
  }

  //check password
  let checkPassword = users.filter((item) => {
    return item.password == password;
  });

  if (checkPassword.length == 0) {
    alert("Password Yang Anda Masukkan Salah");
    return;
  }

  //setstorage bernama login
  localStorage.setItem("isLogin", true);

  alert("Login Berhasil");

  window.location.href = "/dashboard";
};
