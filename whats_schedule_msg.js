


let msg = prompt("Ingrese mensaje a enviar");
let hour = prompt("Ingrese hora a enviar el mensaje");

let currentDate = new Date();
let msgDate = new Date();

let h = hour.split(':')[0];
let m = hour.split(':')[1];

msgDate.setHours(h);
msgDate.setMinutes(m);
msgDate.setSeconds(0);

let miliseconds = msgDate.getTime() - currentDate.getTime();

if (miliseconds < 0) {
    let msByDay = 1000 * 60 * 60 * 24; // milisegundos en un dia
    msgDate = new Date(msgDate.getTime() + msByDay);
    miliseconds = msgDate.getTime() - currentDate.getTime();
}


const sendMessage = () => {
    let messageBox = document.querySelectorAll("[contenteditable='true']")[1];
    let event = document.createEvent("UIEvents");
    event.initUIEvent("input", true, true, window, 1);
    messageBox.innerHTML = msg;
    messageBox.dispatchEvent(event);
    document.querySelector('span[data-icon="send"]').click();
    console.log(`${new Date()} Mensaje enviado`);
    document.getElementsByTagName('html')[0].innerHTML=''
 }


// se programa el primer mensaje
setTimeout(sendMessage, miliseconds);
console.log('Mensaje programado para ' + msgDate);
