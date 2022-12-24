let inView = false;

const slideup = () => {
    if (inView) {
        inView = false;
        document.getElementById("listview").animate({
            transform: `translate(0%, 100vh)`
        }, { duration: 600, fill: "forwards" });
    
        document.getElementById("slide-button").animate({
            transform: `translate(40vw, 90vh)`
        }, { duration: 600, fill: "forwards" });
        document.getElementById("slide-button").innerText = "<< expand list view >>"
        return;
    }

    inView = true;
    document.getElementById("listview").animate({
        transform: `translate(0%, 17vh)`
    }, { duration: 600, fill: "forwards" });

    document.getElementById("slide-button").animate({
        transform: `translate(40vw, 14vh)`
    }, { duration: 600, fill: "forwards" });
    document.getElementById("slide-button").innerText = "X show gallery view"
}