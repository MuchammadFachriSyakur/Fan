const button = document.querySelectorAll(".container .buttons button");
const pictureKipas = document.querySelector(".container .kipasAngin");

button.forEach(function (e){
  e.addEventListener("click", (e)=>{
    if(e.target.value === 'on'){
      pictureKipas.style.animationDuration = `3s`;
    }else if(e.target.value === 'of'){
      pictureKipas.style.animationDuration = `0s`;
    }else if(e.target.value === '1'){
      pictureKipas.style.animationDuration = `1s`;
    }else if(e.target.value === '2'){
      pictureKipas.style.animationDuration = `0.5s`;
    }else if(e.target.value === '3'){
      pictureKipas.style.animationDuration = `0.3s`;
    }
    console.log(e.target.value);
  });
});