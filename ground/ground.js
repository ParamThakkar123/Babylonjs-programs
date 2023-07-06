import * as BABYLON from 'babylonjs'

const canvas = document.getElementById('renderCanvas');

const engine = new BABYLON.Engine(canvas);

const createScene = function() {
    const scene = new BABYLON.Scene(engine);

    scene.createDefaultCameraOrLight(true, false, true);

    const ground = BABYLON.MeshBuilder.CreateGround('h', {
        height: 10,
        width: 10,
        subdivisions: 30,
    })

    return scene;
}

const scene = createScene();

engine.runRenderLoop(function() {
    scene.render();
});

window.addEventListener('resize', function() {
    engine.resize();
})
