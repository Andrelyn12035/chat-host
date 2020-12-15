var socket = io();

const enviar = document.getElementById('enviar');

enviar.addEventListener('click', ()=>{
    var mensaje = document.getElementById('mensaje');
    
    var objMss = {
        mensaje: mensaje.value,
    }
    if(mensaje.value != ''){
        socket.emit('nuevo mensaje', objMss);
        mensaje.value = '';
    }else{
        alert('No puede enviar un mensaje vacio');
    }
});

socket.on('nuevo mensaje servidor', data => {
    var lista_mensajes = document.getElementById('hol');
    var html = data.mensaje;
    var div = document.createElement("div");
    div.innerHTML = html;
    lista_mensajes.appendChild(div);
})