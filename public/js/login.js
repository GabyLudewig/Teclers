async function login() {
    const email = document.getElementById("email").value
    const contraseña = document.getElementById("contraseña").value
    console.log(email, contraseña)
    try { 
      const makeLogin = await fetch('http://localhost:3001/ingresar', {
        method: 'POST',
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify({
          email,
          contraseña: contraseña
        })
      });
      const parsedLogin = await makeLogin.json()
      console.log(parsedLogin)
      if (parsedLogin.token) {
        return window.location.href = '/inicio'
      } else {
        alert("Nombre o contraseña incorrectos")
      }
    } catch(err) {
      console.log(err)
      throw new Error("Nombre o contraseña incorrectos")
    }
  }