import Experience from "../Experience.js";
import LoadingOverlay from "../utils/LoadingOverlay.js";
import Raycaster from "../utils/Raycaster.js";
import SceneReady from "../utils/SceneReady.js";
import Portal from "./Portal.js";
import FireFlies from "./FireFlies.js";
import ResizeObserver from "../utils/ResizeObserver.js";

let worldInstance = null
export default class World {
    constructor() {
        if (worldInstance) {
            return worldInstance
        }
        worldInstance = this
        this.loadingOverlay = new LoadingOverlay()
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resizeObserver = new ResizeObserver()
    }


    onResourcesLoaded = () => {


        this.raycaster = new Raycaster()

        // this.square = new SquareTest()
        this.portal = new Portal()
        this.fireFlies = new FireFlies()
        // this.environment = new Environment()
        this.resizeObserver.subscribe(this.fireFlies.onResize)

        this.sceneReady = new SceneReady()
        this.loadingOverlay.setTransparencyAnimated(0)
        // this.pointsOfInterest = new PointsOfInterest()
    }

    onUpdate = (time) => {
        // if (this.fox)
        //     this.fox.onUpdate(time)
        // if (this.pointsOfInterest)
        //     this.pointsOfInterest.updatePointsPositions()
    }
}