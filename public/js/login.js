
async function login(usuario) {
  const email = document.getElementById("email").value
  const contraseña = document.getElementById("contraseña").value
  console.log(email, contraseña)

  const login = async (event) =>{
    let newLogin = {
        email: event.target[0].value,
        pass: event.target[1].value
    }
    

  const makeLogin = await fetch(`http://${process.env.HOST}:${process.env.PORT}`, {
    method: 'POST',
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify({
      email: email,
      contraseña: contraseña
    })})
      .then(res => res.json())
  
    .catch(err => console.log(err))
  }}


 



