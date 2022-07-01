const els = {
    num_paths: document.querySelector('#num-paths'),
    speed: document.querySelector('#speed'),
    path_radius: document.querySelector('#path-radius'),
    offset_radius: document.querySelector('#offset-radius'),
};
let path_size;
let paths = [];

function setup(){
    createCanvas(windowWidth, windowHeight);
    let size = min(windowWidth, windowHeight);
    els.path_radius.value = size / 4;
    els.offset_radius.value = size / 5;
    colorMode(HSL);
    reset();
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    reset();
}

function draw(){
    background(0);
    translate(windowWidth / 2, windowHeight / 2);
    for(let path of paths){
        path.draw_line();
    }
    for(let path of paths){
        path.draw_dot();
        path.update(els.speed.valueAsNumber / 100);
    }
}

function set_up_paths(){
    paths.length = 0;
    let radius = 100;
    for(let i = 0; i < els.num_paths.valueAsNumber; i++){
        let theta = i / els.num_paths.valueAsNumber * TWO_PI;
        paths[i] = new Path(
            TWO_PI - theta,
            createVector(
                cos(theta) * els.offset_radius.valueAsNumber,
                sin(theta) * els.offset_radius.valueAsNumber,
            ),
            els.path_radius.valueAsNumber,
            color(i / els.num_paths.valueAsNumber * 360, 100, 50)
        );
    }
}

function reset(){
    set_up_paths();
}
