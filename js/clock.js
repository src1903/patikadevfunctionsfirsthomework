
let isim = document.querySelector("#myName");

isim.innerHTML = prompt("Adınız nedir?");

function showTime() {
    var date = new Date().toLocaleString("tr");
    document.getElementById("myClock").innerHTML = date; 
}

setInterval(showTime, 1000);

function showDay() {
    var gun =  new Date();
    var gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    document.getElementById("day").innerHTML = gunler[gun.getDay()]; 
}
setInterval(showDay, 1000);
