import Experience from "./Experience.js";
import * as THREE from 'three'

export default class Renderer {
    constructor() {
        this.experience = new Experience()
        this.canvas = this.experience.canvas
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.camera = this.experience.camera
        this.debug = this.experience.debug
        this.setInstance()
    }

    setInstance() {
        this.instance = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true
        })
        this.instance.physicallyCorrectLights = true
        this.instance.outputEncoding = THREE.sRGBEncoding
        this.instance.toneMapping = THREE.CineonToneMapping
        this.instance.toneMappingExposure = 1.75
        this.instance.shadowMap.enabled = true
        this.instance.shadowMap.type = THREE.PCFSoftShadowMap
        this.instance.setClearColor('#A7CB54')
        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(this.getPixelRatio())

        if (this.debug.active) {
            let debugOptions = {}
            debugOptions.clearColor = '#A7CB54'
            this.debugFolder = this.debug.ui.addFolder('renderer')
            this.debugFolder.addColor(debugOptions, 'clearColor').name('clearColor').onChange(()=>this.instance.setClearColor(debugOptions.clearColor))
        }
    }
    getPixelRatio(){
        return Math.min(this.sizes.pixelRatio, 2)
    }

    onResize = () => {
        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2))
    }

    onUpdate = () => {
        this.instance.render(this.scene, this.camera.instance)
        // this.instance.setClearColor(this.debugOptions.clearColor)
    }
}