search = () => {
    window.location = "https://google.com/search?q=" + encodeURI(document.getElementById("input").value);
    return false;
}
    let background = ["doodles", "tic-tac-toe", "geometry2", "weather", "food", "restaurant", "school"].map(c => "Backgrounds/" + c + ".png");
setByRandom = () => {
    let currentBackground = background[Math.floor(Math.random() * background.length)];document.body.style.backgroundImage = "url('" + currentBackground + "')"
};
setByDatetime = () => {
    let date = new Date();
    let currentBackground = background[date.getSeconds() % background.length];document.body.style.backgroundImage = "url('" + currentBackground + "')"
};
setByDatetime();
showGuildLine = () => {
    document.getElementById("guild-line").style.display = "flex";
}
hideGuildLine = () => {
    document.getElementById("guild-line").style.display = "none";
}
document.onkeydown = event => {
    event = (event || window.event);
    if (event.keyCode === 77 && event.altKey) {
        let elem = document.getElementById("hide");
        let style = window.getComputedStyle(elem).getPropertyValue("display");
        elem.style.display = style == "flex" ? "none" : "flex";
        return false;
    }
}