import * as THREE from 'three'
import Experience from "../Experience.js";

import firefliesVertexShader from './shaders/fireflies/firefliesVertex.glsl'
import firefliesFragmentShader from './shaders/fireflies/firefliesFragment.glsl'

export default class FireFlies {
    constructor() {
        this.experience = new Experience()
        this.debug = this.experience.debug
        this.pixelRatio = this.experience.renderer.getPixelRatio()
        if (this.debug.active) {
            this.debugFolder = this.debug.ui.addFolder('fireflies')
        }
        this.createGeometries();

    }

    createGeometries() {
        const firefliesGeometry = new THREE.BufferGeometry()
        const numberFireflies = 40
        this.positionGeometries(numberFireflies, firefliesGeometry);

/*        const firefliesMaterial = new THREE.ShaderMaterial({
            uniforms: {
                uPixelRatio: {value: this.pixelRatio},
                uSize:{value:100}
            },
            vertexShader: firefliesVertexShader,
            fragmentShader: firefliesFragmentShader,
        })*/
        // Material
        const firefliesMaterial = new THREE.ShaderMaterial({
            uniforms:
                {
                    uTime: { value: 0 },
                    uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
                    uSize: { value: 100 }
                },
            vertexShader: firefliesVertexShader,
            fragmentShader: firefliesFragmentShader,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        })
        // firefliesMaterial.transparent = true
        const firefliesMesh = new THREE.Points(firefliesGeometry, firefliesMaterial)

        if (this.debug.active) {
            this.debugFolder.add(firefliesMaterial.uniforms.uSize, 'value').name('size').min(0).max(100).step(1)
        }
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

    onResize = () => {
        this.pixelRatio = this.experience.renderer.getPixelRatio()
    }
}