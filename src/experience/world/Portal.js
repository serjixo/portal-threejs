import Model from "./Model.js";
import * as  THREE from "three";

import portalVertexShader from './shaders/portal/PortalVertex.glsl'
import portalFragmentShader from './shaders/portal/PortalFragment.glsl'

export default class Portal extends Model {
    constructor() {
        super('portal')
        this.setEmissionTextures()
    }

    setEmissionTextures() {
        const poleLightMaterial = new THREE.MeshBasicMaterial({color: 0xffffe5})
        const portalLightMaterial = new THREE.ShaderMaterial({
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
        meshesToModify.get('portal').material = portalLightMaterial
        meshesToModify.get('portal').material.side = THREE.DoubleSide
        meshesToModify.get('floor').material.side = THREE.DoubleSide

    }
}