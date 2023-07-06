import * as BABYLON from 'babylonjs'

const canvas = document.getElementById('renderCanvas');

const engine = new BABYLON.Engine(canvas);

const createScene = function() {
    const scene = new BABYLON.Scene(engine);

    scene.createDefaultCameraOrLight(true, false, true);
    const box = BABYLON.MeshBuilder.CreateBox('myBox', {
        size: 0.1,
        width: 2,
        height: 0.05,
        depth: 0.5,
        faceColors: [
            new BABYLON.Color4(1, 0, 0, 1),
            BABYLON.Color3.Green()
        ]
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
