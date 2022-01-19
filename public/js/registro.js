async function registro() {
    const contraseña = document.getElementById("contraseña").value
    const email = document.getElementById("email").value
    const apellidos = document.getElementById("apellidos").value
    const fechaNacimiento = document.getElementById("fecha_nac").value
    console.log(contraseña, email, apellidos, fechaNacimiento)
    try { 
      const makeRegistro = await fetch('http://localhost:3001/usuario', {
        method: 'POST',
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify({
             nombres: nombres,
             contraseña: contraseña,
             email: email,
             apellidos,
             fecha_nac
        })
      });
      const parsedRegistro = await makeRegistro.json()
      console.log(parsedRegistro)
      if (parsedRegistro.token) {
        return window.location.href = '/inicio.html'
      } else {
        alert("Registro exitoso")
      }
    } catch(err) {
      console.log(err)
      throw new Error("Registro exitoso'nt")
    }
  }