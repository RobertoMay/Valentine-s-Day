function move() {
    var no = document.getElementById("no");
    var container = document.getElementById("container");
    var heart = document.querySelector(".heart");

    var containerWidth = container.offsetWidth;
    var containerHeight = container.offsetHeight;
    var buttonWidth = no.offsetWidth;
    var buttonHeight = no.offsetHeight;

    var maxX = containerWidth - buttonWidth;
    var maxY = containerHeight - buttonHeight;

    var x = Math.floor(Math.random() * maxX);
    var y = Math.floor(Math.random() * maxY);

    var heartRect = heart.getBoundingClientRect();
    var buttonRect = no.getBoundingClientRect();
    
    while (
        x < heartRect.right && 
        x + buttonWidth > heartRect.left &&
        y < heartRect.bottom &&
        y + buttonHeight > heartRect.top
    ) {
        x = Math.floor(Math.random() * maxX);
        y = Math.floor(Math.random() * maxY);
    }

    no.style.left = x + "px";
    no.style.top = y + "px";
}