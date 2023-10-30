const nelo_angelo = document.getElementById("biografia_title_nelo")
const botao_troca = document.getElementById("troca_bio")
const dante = document.getElementById("biografia_title_dante")

let som_menu = new Audio("audio/audio_togle.mp3");

nelo_angelo.style.display = "none";

botao_troca.addEventListener("click", () =>  {
dante.style.display = "none";
som_menu.play();
    
  if (nelo_angelo.style.display === "none" || nelo_angelo.style.display === " "){
    nelo_angelo.style.display = "block";
    document.querySelector("title2");
    document.querySelector("biografia_text2");   
    } else {
    nelo_angelo.style.display = "none";
    dante.style.display = "block";
    document.querySelector("title1");
    document.querySelector("biografia_text2");
  }
});

