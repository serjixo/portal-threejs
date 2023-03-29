import Model from "./Model.js";
import * as  THREE from "three";

import portalVertexShader from './shaders/portal/PortalVertex.glsl'
import portalFragmentShader from './shaders/portal/PortalFragment.glsl'

export default class Portal extends Model {
    constructor() {
        super('portal')
        if (this.debug.active) {
            this.debugFolder = this.debug.ui.addFolder('Portallight')
        }
        this.setEmissionTextures()
    }

    setEmissionTextures() {
        const poleLightMaterial = new THREE.MeshBasicMaterial({color: 0xffffe5})
        this.portalLightMaterial = new THREE.ShaderMaterial({
            uniforms:
                {
                    uTime: {value: 0},

                    uBigWavesElevation: {value: 0.08},
                    uBigWavesFrequency: {value: new THREE.Vector2(4, 1.5)},
                    uBigWavesSpeed: {value: 0.75},

                    uSmallWavesElevation: {value: 0.2},
                    uSmallWavesFrequency: {value: 5},
                    uSmallWavesSpeed: {value: 0.7},
                    uSmallWavesIterations: {value: 4},

                    uColorStart: {value: new THREE.Color('#259d5f')},
                    uColorEnd: {value: new THREE.Color('#5CAD4A')}
                }
            ,
            vertexShader: portalVertexShader,
            fragmentShader: portalFragmentShader,
        })

        const meshesToModify = new Map()
        this.model.children.filter(child => {
            if (child.name === 'pol-Left' || child.name === 'pole-right' || child.name === 'portal' || child.name === 'floor')
                meshesToModify.set(child.name, child)
        })

        meshesToModify.get('pol-Left').material = poleLightMaterial
        meshesToModify.get('pole-right').material = poleLightMaterial
        meshesToModify.get('portal').material = this.portalLightMaterial
        meshesToModify.get('portal').material.side = THREE.DoubleSide
        meshesToModify.get('floor').material.side = THREE.DoubleSide

        if (this.debug.active) {
            this.debugFolder.addColor(this.portalLightMaterial.uniforms.uColorStart, 'value').name('size')
            this.debugFolder.addColor(this.portalLightMaterial.uniforms.uColorEnd, 'value').name('size')
        }

    }

    onUpdate = (time) => {
        this.portalLightMaterial.uniforms.uTime.value = time.elapsedTime
    }

}