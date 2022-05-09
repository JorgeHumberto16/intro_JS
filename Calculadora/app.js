function teclea(tecla) { 
    let pantalla = document.getElementById('resultado').innerHTML
    if (pantalla!='0') document.getElementById('resultado').innerHTML = pantalla + tecla;
    else document.getElementById('resultado').innerHTML = tecla;
}

function calcular() {
    let resultado = eval(document.getElementById('resultado').innerHTML); 
    document.getElementById('resultado').innerHTML = resultado;
}

function borrar() { 
    document.getElementById('resultado').innerHTML = 0;
}

function retroceder() { 
    if (document.getElementById('resultado').innerHTML!='0'){
        if (document.getElementById('resultado').innerHTML.length == 1) document.getElementById('resultado').innerHTML = 0;
        else {
            let borrado = document.getElementById('resultado').innerHTML.slice(0, document.getElementById('resultado').innerHTML.length-1)
            document.getElementById('resultado').innerHTML = borrado
        }
    }
}