const step_size = 0.05;
const canvas_width = window.innerWidth * 0.3;
const canvas_height = window.innerHeight * 0.3

window.scrollBy({top: -document.documentElement.scrollTop})

let previousPosition = window.pageYOffset || document.documentElement.scrollTop;
const scene = new THREE.Scene({background: 0xffffff});
const camera = new THREE.PerspectiveCamera( 85, canvas_width / canvas_height , 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({ alpha: true });

renderer.setSize( canvas_width, canvas_height );

document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 6, 1.5, 2);
const material = new THREE.MeshLambertMaterial( { color: 0x0ffff0 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

cube.rotation.x = 2
cube.rotation.z = -0.5

var light = new THREE.DirectionalLight(0xffffff);
light.position.set(0, 2, 2);
light.target.position.set(0, 0, 0);
light.castShadow = true;
light.shadowDarkness = 0.5;
light.shadowCameraNear = 2;
light.shadowCameraFar = 5;
light.shadowCameraLeft = -0.5;
light.shadowCameraRight = 0.5;
light.shadowCameraTop = 0.5;
light.shadowCameraBottom = -0.5;
scene.add(light);

camera.position.z = 5;

let contentHeight = 0;

document.body.onload = () => {
    var content = document.getElementById("content");
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    contentHeight = content.offsetHeight*100/h
}

window.addEventListener("scroll", (event) => {
    let currentPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    let direction = currentPosition > previousPosition ? 1 : -1;
    // let delta = direction * (step_size);
    console.log(contentHeight)
    let delta = 3 * (currentPosition - previousPosition) / contentHeight;

    // if (cube.rotation.y + delta < 0) 
    //     cube.rotation.y = 0;
    // else if (cube.rotation.y + delta > 6.2918) 
    //     cube.rotation.y = 6.2918;
    // else
        cube.rotation.z += delta;

    console.log(cube.rotation.y)
    previousPosition = currentPosition;
})

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}

function scrollTest() {
    console.log("HI")
    window.scrollBy({top: 15})
}

animate();