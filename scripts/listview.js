let inView = false;

const slideup = () => {
    const x = document.getElementById("test2").querySelectorAll("*");
    if (inView) {
        inView = false;
        document.getElementById("listview").animate({
            transform: `translate(100vw, 0%)`
        }, { duration: 600, fill: "forwards" });
    

        document.getElementById("slide-button").innerText = ":= list view"
        setTimeout(function() {
            x.forEach((e) => { 
                if (e.innerText !== "•") e.style.color = "#cc0000";
            }) 
        }, 10);
          
        return;
    }

    inView = true;
    document.getElementById("listview").animate({
        transform: `translate(0%, 0%)`
    }, { duration: 600, fill: "forwards" });

    setTimeout(function() {
        x.forEach((e) => { 
            if (e.innerText !== "•") e.style.color = "white";
        }) 
    }, 550);
      
    document.getElementById("slide-button").innerText = "X show gallery view"
}