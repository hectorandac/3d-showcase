import { TweenLite } from "gsap/gsap-core";
import React, { useEffect, useState } from "react";
import * as THREE from "three";

class Scener {

    constructor(holderReference) {
        this.holderReference = holderReference;
        this.width = holderReference.offsetWidth;
        this.height = holderReference.offsetHeight;
        this.init();
    }

    init() {
        this.setup();
        this.hookListeners();
    }

    setup() {
        this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 1, 1100);
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer();

        this.camera.target = new THREE.Vector3(0, 0, 0);
        this.camera.fov = 70;
        this.camera.updateProjectionMatrix();

        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(this.width, this.height);
        this.holderReference.appendChild(this.renderer.domElement);
    }

    hookListeners() {
        let instace = this;

        let isUserInteracting = false;
        let onMouseDownMouseX = 0;
        let onMouseDownMouseY = 0;
        let onMouseDownLon = 0;
        let onMouseDownLat = 0;
        this.lat = 0;
        this.phi = 0;
        this.theta = 0;
        this.lon = 0;

        this.holderReference.addEventListener('mousedown', onDocumentMouseDown, false);
        this.holderReference.addEventListener('mousemove', onDocumentMouseMove, false);
        this.holderReference.addEventListener('mouseup', onDocumentMouseUp, false);
        this.holderReference.addEventListener('wheel', onDocumentMouseWheel, false);
        window.addEventListener('resize', onWindowResize, false);

        function onWindowResize() {
            console.log("Chnaged size")
            let width = instace.holderReference.offsetWidth
            let height = instace.holderReference.offsetHeight
            instace.camera.aspect = width / height;
            instace.camera.updateProjectionMatrix();
            instace.renderer.setSize(width, height);
        }

        function onDocumentMouseDown(event) {
            event.preventDefault();
            isUserInteracting = true;
            onMouseDownMouseX = event.clientX;
            onMouseDownMouseY = event.clientY;
            onMouseDownLon = instace.lon;
            onMouseDownLat = instace.lat;
        }

        function onDocumentMouseMove(event) {

            if (isUserInteracting === true) {
                instace.lon = (onMouseDownMouseX - event.clientX) * 0.1 + onMouseDownLon;
                instace.lat = (event.clientY - onMouseDownMouseY) * 0.1 + onMouseDownLat;
            }
        }

        function onDocumentMouseUp(_event) {
            isUserInteracting = false;
        }

        function onDocumentMouseWheel(event) {
            event.preventDefault();
            let targetFov = instace.camera.fov + event.deltaY * 0.05
            if (targetFov > 5 && targetFov < 80) {
                instace.camera.fov = targetFov;
                instace.camera.updateProjectionMatrix();
            }
        }

        function update() {
            instace.lat = Math.max(- 85, Math.min(85, instace.lat))
            instace.phi = THREE.Math.degToRad(90 - instace.lat)
            instace.theta = THREE.Math.degToRad(instace.lon)

            instace.camera.target.x = 500 * Math.sin(instace.phi) * Math.cos(instace.theta);
            instace.camera.target.y = 500 * Math.cos(instace.phi);
            instace.camera.target.z = 500 * Math.sin(instace.phi) * Math.sin(instace.theta);
            instace.camera.lookAt(instace.camera.target);
            instace.renderer.render(instace.scene, instace.camera);
        }

        function animate() {
            requestAnimationFrame(animate);
            update();
        }

        animate();
        console.log(instace)
    }
}

export default function SceneBuilder(props) {
    const canvasHolder = React.useRef(null)
    const [scener, setScener] = useState(null);
    const [texture, setTexture] = useState('http://0.0.0.0:8000/living.jpeg')

    useEffect(() => {
        setScener(new Scener(canvasHolder.current));
    }, [])

    let mesh = null;
    let mesh2 = null;

    if (scener) {

        var geometry = new THREE.SphereGeometry(500, 60, 40);
        geometry.scale(- 1, 1, 1);

        var material = new THREE.MeshBasicMaterial({
            map: new THREE.TextureLoader().load(texture)
        });

        mesh = new THREE.Mesh(geometry, material);



        var geometry2 = new THREE.SphereGeometry(500, 60, 40);
        geometry2.scale(- 1, 1, 1);

        var material2 = new THREE.MeshBasicMaterial({
            map: new THREE.TextureLoader().load('http://0.0.0.0:8000/dining.jpg')
        });

        mesh2 = new THREE.Mesh(geometry2, material2);


        scener.scene.add(mesh2);
        scener.scene.add(mesh);
        
        mesh2.material.transparent = true;
        mesh2.material.opacity = 0;
    }

    return <>
        <div {...props} ref={canvasHolder} />
    </>
}