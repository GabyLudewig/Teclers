const app = document.querySelector('.containerArray')
   const url = 'https://jsonplaceholder.typicode.com/users';
   
    fetch(url)
    .then (res => res.json())
    .then (resultado=> {
        
        resultado.forEach(usuario => {
            console.log(usuario.name)
            const p = document.createElement('p')
            p.innerHTML = usuario.name
            app.appendChild(p)
        });
        
        
     })
        .catch (error => console.log('No hay respuesta'))
      