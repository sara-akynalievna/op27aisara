const music=document.querySelector("audio")
const btn=document.querySelector("button")
btn.innerHTML="play"
btn.onclick=()=>{
    if(music.paused){
        music.play()
        btn.style.background="green"
        btn.innerHTML="stop"
    }else {
        music.pause()
        btn.style.background="#c59055"
        btn.innerHTML="continue"
    }
}