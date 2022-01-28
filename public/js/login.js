 

async function login() {

  const email = document.getElementById("email").value
  const contraseña = document.getElementById("contraseña").value
  console.log(email, contraseña)
  try {
    const makeLogin = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: { "Content-type": "application/json;charset=UTF-8" },
      body: JSON.stringify({
        email: email,
        contraseña: contraseña
      })
    });
    
    const parsedLogin = await makeLogin.json()
    if (parsedLogin.usuarioExistente.result == 'ok') {
      localStorage.setItem('email', parsedLogin.usuario.email);
      return window.location.href = './perfil.html'
    } else {
      alert("Nombre o contraseña incorrectos")
    }
  } catch (err) {
    console.log(err)
    throw new Error("Login no exitoso")
  }

}