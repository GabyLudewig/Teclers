async function registro() {
  const nombres = document.getElementById("nombres").value
  const contraseña = document.getElementById("contraseña").value
  const email = document.getElementById("email").value
  const apellidos = document.getElementById("apellidos").value
  const fecha_nac = document.getElementById("fecha_nac").value
  console.log(contraseña, email, apellidos, fecha_nac)

  try { 
    const makeRegistro = await fetch(`http://localhost:3001/usuario`, {
      method: 'POST',
      headers: {"Content-type": "application/json;charset=UTF-8"},
      body: JSON.stringify({
           nombres: nombres,
           contraseña: contraseña,
           email: email,
           apellidos: apellidos,
           fecha_nac: fecha_nac
      })
    });

    const parsedRegistro = await makeRegistro.json()
    console.log(parsedRegistro.usuarioNuevo.result)

    if (parsedRegistro.usuarioNuevo.result == 'ok' ) {

     alert("Registro exitoso")
     return window.location.href = './inicio.html'
    } else {
      alert("Usuario ya registrado")
    }
  } catch(err) {
    console.log(err)
    throw new Error("Registro exitoso'nt")

  }
}