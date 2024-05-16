window.onload = function () {
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    let inputTitulo = document.querySelector('#titulo')
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');


    function random(){
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return `#${randomColor}`
    }

    titulo.addEventListener("mouseenter",function(){
        titulo.style.color = random()
    })

    let estadoSecreto = 0
    inputTitulo.addEventListener('keydown',(e) => {
       console.log(e.key)
       switch (true) {
        case estadoSecreto === 0 && e.key === 's':
            estadoSecreto = 1
          break;
  
        case estadoSecreto=== 1  && e.key === 'e':
            estadoSecreto = 2
          break;
  
        case estadoSecreto === 2 && e.key === 'c':
            estadoSecreto = 3
          break;

        case estadoSecreto === 3 && e.key === 'r':
            estadoSecreto = 4
          break;
  
        case estadoSecreto === 4 && e.key === 'e':
            estadoSecreto = 5
          break;

        case estadoSecreto === 5 && e.key === 't':
            estadoSecreto = 6
          break;

        case estadoSecreto === 6 && e.key === 'o':
            estadoSecreto = 0
            alert('SECRETO MAGICO')
          break;
        
        default: estadoSecreto = 0
          break;
      }
    })
}