var timeupSound = new Audio("./assets/sounds/time-up.mp3")

var contador = document.getElementById("contador");
var execucao = document.getElementById("execucao");

var pauseBtn = document.getElementById("pauseBtn");
var comecarBtn = document.getElementById("comecarBtn");

var digito4 = document.getElementById("minDec");
var digito3 = document.getElementById("minUni");
var digito2 = document.getElementById("segDec");
var digito1 = document.getElementById("segUni");

var counting = false;
var clockInterval;

resetar();

function resetar(){
    clearInterval(clockInterval);
    
    digito1.value = 0;
    digito2.value = 0;
    digito3.value = 0;
    digito4.value = 0;
    
    counting = false;
    pauseBtn.innerText = "Pausar";
    pauseBtn.style.display = "none";
    comecarBtn.disabled = true;
    comecarBtn.style.display = "inline";
}

function pausar(){
    
    if(counting == true){
        pauseBtn.innerText = "Continuar";
        counting = false;
        clearInterval(clockInterval);
    }
    else if (counting == false) {
        pauseBtn.innerText = "Pausar";
        counting = true;
        clock();
    }
}

function comecar(){

    if (digito1.value > 9) {
        digito1.value = 9;
    }
    if (digito2.value > 5) {
        digito2.value = 5;
    }
    if (digito3.value > 9) {
        digito3.value = 9;
    }
    if (digito4.value >= 6) {
        digito4.value = 6;
        digito1.value = 0;
        digito2.value = 0;
        digito3.value = 0;
    }

    pauseBtn.disabled = false;
    counting = true;
    clock();
    pauseBtn.style.display = "inline";
    comecarBtn.style.display = "none";
}



function clock(){
    
    clockInterval = setInterval(() => {
        
        if(counting == true){
                        
            if (digito1.value >= 0) {
                digito1.value--;             
            }
            if(digito1.value < 0 && digito2.value >= 0){
                digito1.value = 9
                digito2.value--;
            }
            
            if(digito2.value < 0 && digito3.value >= 0){
                digito2.value = 5
                digito3.value--;
            }
            
            if (digito3.value < 0 && digito4.value >= 0){
                digito3.value = 9;
                digito4.value--;
            }


            if((digito1.value + digito2.value + digito3.value + digito4.value) == 0){
                clearInterval(clockInterval);
                timeupSound.play();
                counting = false;
                alert("Acabou o tempo!");
                console.log("STOP RUNNING");
            }
        }
        
        console.log(digito1.value);
        console.log(counting);
        
    }, 1000);
}

setInterval(() => {
    if((digito1.value + digito2.value + digito3.value + digito4.value) == 0){
        comecarBtn.disabled = true;
    }
    else if((digito1.value + digito2.value + digito3.value + digito4.value) != 0){
        comecarBtn.disabled = false;
    }
    
}, 200);