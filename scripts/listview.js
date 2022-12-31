let inView = false;

const slideup = () => {
    const x = document.getElementById("nav-section").querySelectorAll("*");
    if (inView) {
        inView = false;
        
        [...document.getElementsByClassName("list-fill-animation")].forEach(e => {
            e.animate({
                transform: `translate(${e.dataset.position})`
            }, { duration: 600, fill: "forwards" });
        });

        [...document.getElementsByClassName("list")].forEach(e => {
            e.animate({
                transform: `translate(${e.dataset.positionRest})`
            }, { duration: 400, fill: "forwards" });
        });

        document.getElementById("slide-button").innerText = ":= list view"
          
        return;
    }

    inView = true;

    [...document.getElementsByClassName("list-fill-animation")].forEach(e => {
        e.animate({
            transform: `translate(0%, 0%)`
        }, { duration: 600, fill: "forwards" });
    });

    [...document.getElementsByClassName("list")].forEach(e => {
        e.animate({
            transform: `translate(${e.dataset.position})`
        }, { duration: 400, fill: "forwards" });
    });
      
    document.getElementById("slide-button").innerText = "⛶ gallery view"
}