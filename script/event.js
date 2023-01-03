function makeRed() {
    document.body.style.backgroundColor = 'red'
}

const blueback = document.getElementById('Make_Blue_Back');
blueback.onclick = backblue;
function backblue() {
    document.body.style.background = 'blue'
}




const pinkBack = document.getElementById('pink_btn');
pinkBack.addEventListener('click', makePink);

function makePink() {
    document.body.style.background = 'pink';
}





const golden_bg = document.getElementById('golden_rod').addEventListener('click', function () {
    document.body.style.background = 'goldenrod';
})