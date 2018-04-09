window.addEventListener('keydown', function(e){
    //console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    console.log(key);
    key.classList.toggle('playing');

    function removeTransition(e){
        if(e.propertyName !== 'tranform') return;
        console.log(e.propertyName);
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionned', removeTransition));
    
});