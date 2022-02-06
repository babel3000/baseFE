const allWords = Array.from(document.querySelectorAll('.about-content span'))
let length = allWords.length, activeIndex

console.log(document.querySelectorAll('.about-content span'))

setInterval(()=>{
    allWords.forEach(word => {
        if(word.classList.contains('is-active'))
            activeIndex = allWords.indexOf(word)

        word.classList.remove('is-active')
    })

    if(activeIndex < length - 1) 
        allWords[activeIndex + 1].classList.add('is-active')
    else 
        allWords[0].classList.add('is-active')
}, 5000)
