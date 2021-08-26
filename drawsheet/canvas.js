console.log('heio');

window.addEventListener("load"), () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getcontext("2d");

    canvas.Height = window.innerHeight;
    canvas.width = innerWidth;

    ctx.fillrect(100, 100, 200, 500);


}
let pg;

function setup() {
    createCanvas(100, 100);
    pg = createGraphics(100, 100);
}