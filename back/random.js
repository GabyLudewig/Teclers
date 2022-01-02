   
   const app = document.querySelector('.container')
   const url = 'https://randomuser.me/api/'
   function amigosRandom () {
    fetch(url)
    .then (response => response.json())
    .then (json => {
        
        console.log(json)
        resultado = json
        console.log(resultado.results[0].picture.large)
        
        const img = document.createElement('img')    
        img.src = resultado.results[0].picture.large
        app.appendChild(img)
        
        const p = document.createElement('p')    
        p.innerHTML = (resultado.results[0].name.title) + "<br> " +(resultado.results[0].name.first) + " " + (resultado.results[0].name.last)
        app.appendChild(p)

        const c = document.createElement('c')    
        c.innerHTML = "Email: " + (resultado.results[0].email) + "<br>" + "<br>"+ "Celular: " + (resultado.results[0].cell)
        app.appendChild(c)

     })
        .catch (error => console.log('No hay respuesta'));
   }
            
    
    
    
    
    
    
