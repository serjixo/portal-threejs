import Model from "./Model.js";
import * as  THREE from "three";

export default class Portal extends Model {
    constructor() {
        super('portal')
        this.setEmissionTextures()
        // this.experiencce = new Experience()
        // this.resources = this.experiencce.resources.items
    }

    setEmissionTextures() {
        const poleLightMaterial = new THREE.MeshBasicMaterial({color: 0xffffe5})
        const portalLightMaterial = new THREE.MeshBasicMaterial({color: 0x00A651})
        // this.model.traverse((child) => {
        //     if (child.userData.name === 'pol-left' || child.userData.name === 'pole-right') {
        //         child.material = poleLightMaterial
        //     }
        // })
        const meshesToModify = new Map()
        this.model.children.filter(child => {
            if (child.name === 'pol-Left' || child.name === 'pole-right' || child.name === 'portal' || child.name === 'Plane')
                meshesToModify.set(child.name, child)
        })

        meshesToModify.get('pol-Left').material = poleLightMaterial
        meshesToModify.get('pole-right').material = poleLightMaterial
        meshesToModify.get('portal').material = portalLightMaterial
        meshesToModify.get('portal').material.side = THREE.DoubleSide
        // meshesToModify.get('Plane').material.side = THREE.DoubleSide

    }
}