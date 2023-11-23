const btnOn = document.getElementById ('btnOn');
const btnOff = document.getElementById ('btnOff');
const lamp = document.getElementById ('lamp');


function isLampBroken() {
    return lamp.src.indexOf ('quebrada') > -0
}
function lampOn() {
    if ( !isLampBroken() ) {
        lamp.src = './img/ligada.jpg';
    }
}
function lampOff() {
    if ( !isLampBroken() ) {
        lamp.src = './img/desligada.jpg';
    }
}
function brokenLamp() {
    lamp.src = './img/quebrada.jpg';
}


btnOn.addEventListener ('click', lampOn);
btnOff.addEventListener ('click', lampOff);
lamp.addEventListener ('mouseover', lampOn)
lamp.addEventListener ('mouseout', lampOff )
lamp.addEventListener ('dblclick', brokenLamp)


