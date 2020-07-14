window.addEventListener('load', function () {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200){
            var respuesta = JSON.parse(xhttp.responseText);
            var personas = respuesta.personas;
            var salida = '';
            var index = 0;

            personas.forEach(persona =>{

                salida += `<li>${personas[index].nickname}</li>`;
                index++;
            });


            document.getElementById('rellenar').innerHTML = salida;

        }
    }
    xhttp.open("GET","personas.json",true);
    xhttp.send();



})