export const Video = () => {
    const video = document.querySelectorAll('video') 
    const play =  document.querySelectorAll('img[alt=play]')
    const pause =  document.querySelectorAll('img[alt=pause]')
    video.forEach(item => {
        item.addEventListener('click' , () => {
            if(item.paused){
                item.play()
                pause.forEach(item => item.style.display = 'block')
                play.forEach(item => item.style.display = 'none')
            } else {
                item.pause()
                pause.forEach(item => item.style.display = 'none')
                play.forEach(item => item.style.display = 'block')
            }
        })
    })
}