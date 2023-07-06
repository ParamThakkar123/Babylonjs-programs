import * as BABYLON from 'babylonjs'

const canvas = document.getElementById('renderCanvas');

const engine = new BABYLON.Engine(canvas);

var createScene = function () {
    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);

    engine.runRenderLoop(function(){
        scene.render();
    })

    scene.createDefaultCameraOrLight(true, false, true);
    const box = BABYLON.MeshBuilder.CreateBox();

    return scene;
};

const scene = createScene();

engine.runRenderLoop(function() {
    scene.render();
});
