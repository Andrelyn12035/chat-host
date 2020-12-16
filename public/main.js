var socket = io();

const enviar = document.getElementById('enviar');

enviar.addEventListener('click', ()=>{
    var mensaje = document.getElementById('mensaje');
    var nombre = document.getElementById('nombre');
    var objMss = {
        mensaje: mensaje.value,
        nombre: nombre.value
    }
    if(mensaje.value != '' && nombre.value != ''){
        socket.emit('nuevo mensaje', objMss);
        mensaje.value = '';
    }else if(mensaje.value = ''){
        alert('No puede enviar un mensaje vacio');
    }else if (nombre.value = '') {
        alert('Favor de escribir un nombre');
    }
});

socket.on('nuevo mensaje servidor', data => {
    var lista_mensajes = document.getElementById('hol');
    var mensaje = data.mensaje;
    var nombre = data.nombre;
    var card = document.createElement("div");
    card.className += "card w-70";
    var body = document.createElement("div");
    body.className += "card-body";
    var title = document.createElement("h6");
    title.className += "card-title";
    title.innerHTML = nombre;
    var text = document.createElement("p");
    text.className += "card-text";
    text.innerHTML = mensaje;
    body.appendChild(title);
    body.appendChild(text);
    card.appendChild(body);
    lista_mensajes.appendChild(card);
})