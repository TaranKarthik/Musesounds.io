window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
      ];
    //Lets get goin' with the sound here! -- Dev Ed the Graet
    pads.forEach((pad, index) =>{
        pad.addEventListener('click',function(){
            sounds[index].currentTime = 0;
            sounds[index].play();

            //yeah
            colorfulBalls(index);

        });

    });
    //BUBBLES WAHA
    const colorfulBalls = (index) => {
        const ball = document.createElement("div");
        visual.appendChild(ball);
        ball.style.backgroundColor = colors[index];
        ball.style.animation = 'jump 1s ease';
        ball.addEventListener('animationend',function(){
            visual.removeChild(this);
        })
    }
});


console.log("Summon A Sound! Jeez.")