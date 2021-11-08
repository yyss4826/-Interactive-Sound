
let interactable = document.getElementById("interactable")
let player = document.getElementById("player")

interactable.addEventListener('mouseenter', () => {
    player.play();
  })

  interactable.addEventListener('mouseleave', () => {
    player.pause();
  })

  interactable.addEventListener('mouseleave', () => {
    player.pause();
  })
  
  player.addEventListener('pause', () => {
    document.body.style.backgroundColor = "white";
  })
  
player.addEventListener('play', () => {
    document.body.style.backgroundColor = "black";
  })

  player.addEventListener('timeupdate', () => {
    console.log("the current time is:", player.currentTime)
  
    if(player.currentTime > 2){
      interactable.style.borderRadius = "100px";
    }
  })
  