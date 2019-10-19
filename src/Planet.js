import * as THREE from "three";

class Planet {
    constructor(color, radius, distance, orbitalPeriod, rotationPeriod) {
        this.color = color;
        this.radius = radius;
        this.distance = distance;
        this.orbitalPeriod = orbitalPeriod;
        this.rotationPeriod = rotationPeriod;

        const geometry = new THREE.SphereGeometry(this.radius, 128, 128);
        const material = new THREE.MeshPhongMaterial({
            color: 0x156289,
            emissive: 0x072534,
            side: THREE.DoubleSide,
            flatShading: true
        });

        this.mesh = new THREE.Mesh(geometry, material);
    }

    move(delta) {
        // 1 second = 1 day
       const rotation = delta / this.rotationPeriod;

        // This should eventually take into account the axis the planet spins on.
       this.mesh.rotateOnAxis(new THREE.Vector3(0, 1, 0), rotation);
    }

    addToScene = (scene) => {
        scene.add(this.mesh);
    }

    static generate(parameters) {
        // Some calculations should go here eventually.
        parameters = parameters || {radius: 5};
        return new Planet("#FF0000", parameters.radius, 100, 365, 1);
    }
}

export default Planet;