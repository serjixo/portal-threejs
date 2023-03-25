import * as THREE from 'three'
import Experience from "../Experience.js";

import firefliesVertexShader from './shaders/fireflies/firefliesVertex.glsl'
import firefliesFragmentShader from './shaders/fireflies/firefliesFragment.glsl'

export default class FireFlies {
    constructor() {
        this.experience = new Experience();
        this.createGeometries();
    }

    createGeometries() {
        const firefliesGeometry = new THREE.BufferGeometry()
        const numberFireflies = 40
        this.positionGeometries(numberFireflies, firefliesGeometry);

        const firefliesMaterial = new THREE.ShaderMaterial({
            vertexShader: firefliesVertexShader,
            fragmentShader: firefliesFragmentShader
        })
        const firefliesMesh = new THREE.Points(firefliesGeometry, firefliesMaterial)

        this.experience.scene.add(firefliesMesh)
    }

    positionGeometries(numberFireflies, fireflies) {
        const positions = new Float32Array(numberFireflies * 3)

        for (let i = 0; i < positions.length; i += 3) {
            positions[i + 0] = (Math.random() - 0.5) * 5
            positions[i + 1] = Math.random() * 3
            positions[i + 2] = (Math.random() - 0.5) * 5
        }
        fireflies.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    }
}