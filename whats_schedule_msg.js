





let msg = prompt("Ingrese mensaje a enviar");
let hour = prompt("Ingrese hora a enviar el mensaje");

let curDate = new Date();
let appDate = new Date();

let h = hour.split(':')[0];
let m = hour.split(':')[1];

appDate.setHours(h);
appDate.setMinutes(m);

let miliseconds = appDate.getTime() - curDate.getTime();

let msByDay = 1000 * 60 * 60 * 24; // milisegundos en un dia

if (miliseconds < 0) {

      appDate = new Date(appDate.getTime() + msByDay);
      
      miliseconds = appDate.getTime() - curDate.getTime();
}


let sendMsg = () => {
   alert('test');
   // se calcula la nueva fecha
   appDate = new Date(appDate.getTime() + msByDay);
   // se programa el siguiente mensaje para el siguiente dia
   schedule(msByDay);
};


let schedule = (ms) => {

  setTimeout(sendMsg, ms);
  console.log('Mensaje programado para ' + appDate);

};

// se programa el primer mensaje
schedule(miliseconds);
