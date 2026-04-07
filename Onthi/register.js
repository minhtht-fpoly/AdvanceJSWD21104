function registerAccount() {
  axios
    .post("http://localhost:3000/register", {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    })
    .then((res) => {
      console.log(res);
    });
}
