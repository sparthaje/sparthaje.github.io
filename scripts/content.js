let track = null;
let track2 = null;
let bg = null;

const LEFT_BLOCKS = [-60, -52];
const SCALER = 0.9;

window.onload = () => {
    track = document.getElementById("image-track");
    track2 = document.getElementById("image-track-2");
    bg = document.getElementById("bg");
    
    track.animate({
        transform: `translate(0%, -50%)`
    }, { duration: 300, fill: "forwards" });
    track2.animate({
        transform: `translate(0%, -50%)`
    }, { duration: 300, fill: "forwards" });

}

const handleOnDown = e => {
    track.dataset.mouseDownAt = e.clientX;
    track2.dataset.mouseDownAt = e.clientX;
}

const handleOnUp = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;

    track2.dataset.mouseDownAt = "0";
    track2.dataset.prevPercentage = track2.dataset.percentage;
}

const handleOnMove = e => {
    if (track.dataset.mouseDownAt === "0" || track2.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

    let percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), LEFT_BLOCKS[0]);

    const mouseDelta2 = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta2 = window.innerWidth / 2;
  
    let percentage2 = (mouseDelta2 / maxDelta2) * -100 * SCALER,
        nextPercentageUnconstrained2 = parseFloat(track2.dataset.prevPercentage) + percentage2,
        nextPercentage2 = Math.max(Math.min(nextPercentageUnconstrained2, 0), LEFT_BLOCKS[1]);

    if (isNaN(nextPercentage)) nextPercentage = 0;
    if (isNaN(nextPercentage2)) nextPercentage2 = 0;

    track.dataset.percentage = nextPercentage;
    track2.dataset.percentage = nextPercentage2;

    track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
    }, { duration: 1200, fill: "forwards" });

    bg.animate({
        transform: `translate(${nextPercentage}%, 0%)`
    }, { duration: 1200, fill: "forwards" });

    track2.animate({
        transform: `translate(${nextPercentage2}%, -50%)`
    }, { duration: 1200, fill: "forwards" });

  
}

/* -- Had to add extra lines for touch events -- */

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);