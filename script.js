const letras ='^[a-z !ñ]+$';
const inputResultado = document.getElementById('textarea-AreaResultado');
const $content = document.getElementById('textarea-AreaResultado');


function encriptar(){
                    
    var texto = document.querySelector("#textarea-AreaEscribir").value;

    if(texto.match(letras)!=null){
        let palabras = texto.split(" ");
        let reemplazoPalabras = [];

        for(let palabra of palabras){
            palabra = palabra.replaceAll('e','enter');
            palabra = palabra.replaceAll('i','imes');
            palabra = palabra.replaceAll('a','ai');
            palabra = palabra.replaceAll('o','ober');
            palabra = palabra.replaceAll('u','ufat');   

            reemplazoPalabras.push(palabra);
        }

        var textoEncriptado = reemplazoPalabras.join(" ");
        document.querySelector(".textarea-AreaResultado").value = textoEncriptado;
        //document.querySelector("#textarea-AreaEscribir").value = "";

    }else{
        mensajeError("SOLO ESCRIBIR LETRAS MINÚSCULAS, SIN ACENTOS")
    }

}

function desencriptar(){
                    
    var texto = document.querySelector("#textarea-AreaEscribir").value;

    if(texto.match(letras)!=null){
        let palabras = texto.split(" ");
        let reemplazoPalabras = [];

        for(let palabra of palabras){
            palabra = palabra.replaceAll('enter','e');
            palabra = palabra.replaceAll('imes','i');
            palabra = palabra.replaceAll('ai','a');
            palabra = palabra.replaceAll('ober','o');
            palabra = palabra.replaceAll('ufat','u');   

            reemplazoPalabras.push(palabra);
        }

        var textoDesencriptado = reemplazoPalabras.join(" ");
        document.querySelector(".textarea-AreaResultado").value = textoDesencriptado;
        //document.querySelector("#textarea-AreaEscribir").value = "";

    }else{
        mensajeError("SOLO ESCRIBIR LETRAS MINÚSCULAS, SIN ACENTOS")
    }

}

function copiarTexto(){
    $content.select();
    document.execCommand("copy");

}

function mensajeError(mensaje){
    alert(mensaje);
    document.querySelector("#textarea-AreaEscribir").value = "";
}

var boton_encriptar = document.querySelector("#btn-encriptador"); 
boton_encriptar.onclick = encriptar;

var boton_desencriptar = document.querySelector("#btn-desencriptador"); 
boton_desencriptar.onclick = desencriptar;

var boton_copiar = document.querySelector("#btn-copiar"); 
boton_copiar.onclick = copiarTexto;