var hungry = 50;
var clock1 = setInterval(depleteH, 5000); //untuk hungry
var sleep = 50;
var clock2 = setInterval(depleteT, 5000); //untuk sleep
var play = 50;
var clock3 = setInterval(depleteP, 5000); //untuk play
var study = 10;
var clock4 = setInterval(depleteS, 5000); //untuk study
var gameover = 0;
var naiksem = 0; //ini belom diapa apain
var jam = 0;

document.getElementById("btnHungry").onclick = fillHungry;
document.getElementById("btnSleep").onclick = fillSleep;
document.getElementById("btnPlay").onclick = fillPlay;
document.getElementById("btnStudy").onclick = fillStudy;

// $("#nama").keypress(function (event) {
//     if (event.which == 13) {
//         event.preventDefault();
//         $("#start").click();
//         event.currentTarget.value = "";
//     }
// });

// $("#start").click(function () {
//     var name = $("#other_people").val();

//     $(".ucapan")
//         .hide()
//         .append("<div style = 'margin: auto; padding: 16px; margin-bottom: 7px; text-align: center;'>" + '<span class = "nama">' + nama + "</span>" + "<br />" + pesan + "</div>")

//     $("#nama").val("");
// });

function gameovercheck() {
    if (hungry == 0 || tidur == 0 || play == 0 || study == 0 || gameover == 0) {
        alert("Game Over!");
        gameover++;
        spriteHandler();
    }
    else {
        spriteHandler();
    }
}

function spriteHandler() {
    if (hungry == 0 || sleep == 0 || play == 0 || study == 0) {
        document.getElementById("Sprite").append("<p>Game Over</p><p>Perhatikan Bar yang ada</p?");
    }
}

function cekjam() {
    if (jam >= 6 && jam <= 10) {
        return "Selamat Pagi";
    }
    else if (jam >= 11 && jam <= 14) {
        return "Selamat Siang";
    }
    else if (jam >= 15 && jam <= 17) {
        return "Selamat Sore";
    }
    else if (jam >= 18 && jam <= 22) {
        return "Selamat Malam";
    }
    else {
        return "Selamat Tidur";
    }
}

function fillHungry() {
    if (hungry <= 99 && hungry != 60) {
        hungry += 5;
        sleep -= 1;
    }
    else if (hungry <= 59 && hungry != 0) {
        alert("Kamu Lapar! Cepat Makan");
    }
    else if (hungry <= 19) {
        sleep += 2;
        play += 2;
        study += 0;
    }
    else if (hungry == 0) {
        hungry += 5;
    }
}

function fillSleep() {
    if (sleep <= 99 && sleep != 60) {
        sleep += 5;
        hungry -= 1;
        study -= 1;
    }
    else if (sleep <= 59 && sleep != 0) {
        alert("Kamu Mengantuk!");
    }
    else if (sleep == 0) {
        sleep += 5;
    }
}

function fillPlay() {
    if (play <= 99 && play != 60) {
        play += 5;
        hungry -= 1;
    }
    else if (play <= 59 && play != 0) {
        alert("Kamu Butuh Hiburan !");
    }
    else if (play == 0) {
        play += 5;
    }
}

function fillStudy() {
    if (study <= 99 && study != 60) {
        study += 5;
        hungry -= 2;
        play -= 1;
        sleep -= 2;
    }
    else if (study <= 59 && study != 0) {
        alert("Kamu Harus Belajar !");
    }
    else if (study == 0) {
        study += 5;
    }
}

function depleteH() {
    if (hungry == 0) {
        clearInterval(clock1);
        alert("Kamu Kelaparan !");
        gameovercheck();
    }
    else {
        hungry--;
        document.getElementById("HungryBar").value = hungry;
    }
}

function depleteT() {
    if (sleep == 0) {
        clearInterval(clock2);
        alert("Kamu Ngantuk !");
        gameovercheck();
    }
    else {
        sleep--;
        document.getElementById("SleepBar").value = sleep;
    }
}

function depleteP() {
    if (play == 0) {
        clearInterval(clock3);
        alert("Kamu Stress!");
        gameovercheck();
    }
    else {
        play--;
        document.getElementById("PlayBar").value = play;
    }
}

function depleteS() {
    if (study == 0) {
        clearInterval(clock4);
        alert("Cepat Belajar !!");
        gameovercheck();
    }
    else {
        study--;
        document.getElementById("StudyBar").value = study;
    }
}
window.setTimeout("waktu()", 1000);

function waktu(){
    var waktu = new Date();
    setTimeout("waktu()", 1000);
    document.getElementById("jam"). innerHTML = waktu.getHours();
    document.getElementById("menit"). innerHTML = waktu.getMinutes();
}