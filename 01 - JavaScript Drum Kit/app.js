var keys = document.querySelectorAll('.key')
keys.forEach(key => {
    key.addEventListener('transitionend', endtransition)
})

function endtransition() {
    this.classList.remove('playing')
}

function playSound(event) {
    var {keyCode} = event
    var audio = document.querySelector(`audio[data-key="${keyCode}"]`)
    if (!audio) return
    audio.currentTime = 0
    audio.play()
    var key = document.querySelector(`.key[data-key="${keyCode}"`)
    key.classList.add('playing')
}

window.addEventListener('keydown', playSound)
