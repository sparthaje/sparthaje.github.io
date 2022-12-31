let inView = false;

const slideup = () => {
    const x = document.getElementById("nav-section").querySelectorAll("*");
    if (inView) {
        inView = false;
        // document.getElementById("listview").animate({
        //     transform: `translate(100vw, 0%)`
        // }, { duration: 600, fill: "forwards" });
        
        [...document.getElementsByClassName("list-fill-animation")].forEach(e => {
            e.animate({
                transform: `translate(${e.dataset.position})`
            }, { duration: 600, fill: "forwards" });
        })

        document.getElementById("slide-button").innerText = ":= list view"

        setTimeout(function() {
            x.forEach((e) => { 
                if (e.innerText !== "•") e.style.color = "#cc0000";
            }) 
            document.getElementById("slide-button").style.color = "#555555"
        }, 550);
          
        return;
    }

    inView = true;
    // document.getElementById("listview").animate({
    //     transform: `translate(0%, 0%)`
    // }, { duration: 600, fill: "forwards" });

    setTimeout(function() {
        x.forEach((e) => { 
            if (e.innerText !== "•") e.style.color = "white";
        }) 
        document.getElementById("slide-button").style.color = "#aaaaaa"
    }, 10);

    [...document.getElementsByClassName("list-fill-animation")].forEach(e => {
        e.animate({
            transform: `translate(0%, 0%)`
        }, { duration: 600, fill: "forwards" });
    })
      
    document.getElementById("slide-button").innerText = "X show gallery view"
}