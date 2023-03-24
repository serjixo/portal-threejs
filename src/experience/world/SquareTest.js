import * as THREE from "three";
import Experience from "../Experience.js";

export default class SquareTest{
    constructor() {
        this.experience = new Experience()

        const testMesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshStandardMaterial())
        // testMesh.material.reflectivity =1.0
        // testMesh.castShadow = true
        testMesh.receiveShadow = true
        this.experience.scene.add(testMesh)
    }
}