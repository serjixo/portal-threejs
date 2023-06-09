import Experience from "../Experience.js";
import * as THREE from "three";

export default class Model {
    constructor(modelName) {

        this.modelName = modelName
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.resource = this.resources.items[modelName]
        this.debug = this.experience.debug

        if (this.debug.active) {
            this.debugFolder = this.debug.ui.addFolder(this.resource.name)
        }

        this.setModel()
        // this.setAnimation()
    }

    setModel() {
        this.model = this.resource.scene
        const textures = this.resources.items[this.modelName + 'Textures']
        textures.flipY = false
        textures.encoding = THREE.sRGBEncoding

        const bakedMaterial = new THREE.MeshBasicMaterial({map: textures})

        // this.resources.items.
        // this.model.scale.set(0.02, 0.02, 0.02)
        this.model.traverse((child) => {
            child.material = bakedMaterial

        })

        this.scene.add(this.model)
        //
        // this.model.traverse((child) => {
        //     if (child instanceof THREE.Mesh) {
        //         child.castShadow = true
        //     }
        // })
    }

//     setAnimation() {
//         this.animation = {}
//         this.animation.mixer = new THREE.AnimationMixer(this.model)
//
//         this.animation.actions = {}
//
//         this.animation.actions.idle = this.animation.mixer.clipAction(this.resource.animations[0])
//         this.animation.actions.walking = this.animation.mixer.clipAction(this.resource.animations[1])
//         this.animation.actions.running = this.animation.mixer.clipAction(this.resource.animations[2])
//
//         this.animation.actions.current = this.animation.actions.running
//         this.animation.actions.current.play()
//
//         this.animation.play = (name) => {
//             const newAction = this.animation.actions[name]
//             const oldAction = this.animation.actions.current
//             newAction.reset()
//             newAction.play()
//             newAction.crossFadeFrom(oldAction, 1)
//
//             this.animation.actions.current = newAction
//         }
//
//         if (this.debug.active) {
//             const debugObject = {
//                 playIdle: () => {
//                     this.animation.play('idle')
//                 },
//                 playWalking: () => {
//                     this.animation.play('walking')
//                 },
//                 playRunning: () => {
//                     this.animation.play('running')
//                 }
//             }
//             this.debugFolder.add(debugObject, 'playIdle')
//             this.debugFolder.add(debugObject, 'playWalking')
//             this.debugFolder.add(debugObject, 'playRunning')
//         }
//         /*this.animation.action = this.animation.mixer.clipAction(this.resource.animations[0])
//         this.animation.action.play()
// */
//     }
//
//     onUpdate = (time) => {
//         this.animation.mixer.update(time.delta * 0.001)
//     }
}