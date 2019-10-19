import React, { Component } from "react";
import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";

const style = {
    height: 250 // we can control scene size by setting container dimensions
};

class SolarSystem extends Component {
    componentDidMount() {
        this.sceneSetup();
        this.addCustomSceneObjects();
        this.requestID = window.requestAnimationFrame(this.animationLoop);
        window.addEventListener("resize", this.handleWindowResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleWindowResize);
        window.cancelAnimationFrame(this.requestID);
        this.controls.dispose();
    }

    // Standard scene setup in Three.js. Check "Creating a scene" manual for more information
    // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene
    sceneSetup = () => {
        // get container dimensions and use them for scene sizing
        const width = this.el.clientWidth;
        const height = this.el.clientHeight;

        this.lastTime = 0.0;
        this.planets = [];
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
            75, // fov = field of view
            width / height, // aspect ratio
            0.1, // near plane
            1000 // far plane
        );
        this.camera.position.z = 10; // is used here to set some distance from a cube that is located at z = 0
        // OrbitControls allow a camera to orbit around the object
        // https://threejs.org/docs/#examples/controls/OrbitControls
        this.controls = new OrbitControls(this.camera, this.el);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.25;
        this.controls.minDistance = 7;
        this.controls.maxDistance = 50;

        const loader = new THREE.TextureLoader();

        // https://www.nasa.gov/image-feature/goddard/2018/hubble-spots-a-green-cosmic-arc
        const bgTexture = loader.load('skybox.jpg');
        this.scene.background = bgTexture;

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(width, height);
        this.el.appendChild(this.renderer.domElement); // mount using React ref
    };

    // Here should come custom code.
    // Code below is taken from Three.js BoxGeometry example
    // https://threejs.org/docs/#api/en/geometries/BoxGeometry
    addCustomSceneObjects = () => {
        this.props.planets.forEach(planet => {
            planet.addToScene(this.scene);
        });

        const lights = [];
        lights[0] = new THREE.PointLight(0xffffff, 1, 0);
        lights[1] = new THREE.PointLight(0xffffff, 1, 0);
        lights[2] = new THREE.PointLight(0xffffff, 1, 0);

        lights[0].position.set(0, 200, 0);
        lights[1].position.set(100, 200, 100);
        lights[2].position.set(-100, -200, -100);

        this.scene.add(lights[0]);
        this.scene.add(lights[1]);
        this.scene.add(lights[2]);
    };

    animationLoop = (now) => {
        let delta = now * 0.001 - this.lastTime;
        this.lastTime = now * 0.001;

        this.props.planets.forEach(planet => {
            planet.move(delta);
        });
        
        this.renderer.render(this.scene, this.camera);
        this.requestID = window.requestAnimationFrame(this.animationLoop);
    };

    handleWindowResize = () => {
        const width = this.el.clientWidth;
        const height = this.el.clientHeight;

        this.renderer.setSize(width, height);
        this.camera.aspect = width / height;

        // Note that after making changes to most of camera properties you have to call
        // .updateProjectionMatrix for the changes to take effect.
        this.camera.updateProjectionMatrix();
    };

    render() {
        return <div style={style} ref={ref => (this.el = ref)} />;
    }
}

class Container extends React.Component {
    state = { isMounted: true };

    render() {
        const { isMounted = true } = this.state;
        return (
            <>
                {isMounted && <SolarSystem {...this.props} />}
                {isMounted && <div>Scroll to zoom, drag to rotate</div>}
            </>
        );
    }
}

export default Container