// STILL IN PROGRESS
//
//For creating a dynamic ball


var ball = document.getElementById('animating-ball');
var STYLES = {
    SCALE_UP: 'ball--scale-up',
    SCALE_DOWN: 'ball--scale-down',
    CIRCLING: 'ball--circling',
};

ball.addEventListener('animationend', function () {
    if (ball.classList.contains(STYLES.SCALE_DOWN)) {
        ball.classList.remove(STYLES.SCALE_DOWN)
        ball.classList.remove(STYLES.SCALE_UP)
        ball.classList.remove(STYLES.CIRCLING);
    } else if (ball.classList.contains(STYLES.CIRCLING)) {
        ball.classList.add(STYLES.SCALE_DOWN);
    } else if (ball.classList.contains(STYLES.SCALE_UP)) {
        ball.classList.add(STYLES.CIRCLING);
    }
});

ball.onclick = function () {
    ball.classList.add(STYLES.SCALE_UP);
}
