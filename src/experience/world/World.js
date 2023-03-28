import Experience from "../Experience.js";
import Environment from "./Environment.js";
import LoadingOverlay from "../utils/LoadingOverlay.js";
import Raycaster from "../utils/Raycaster.js";
import SceneReady from "../utils/SceneReady.js";
import Portal from "./Portal.js";
import SquareTest from "./SquareTest.js";
import FireFlies from "./FireFlies.js";

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
    }


    onResourcesLoaded = () => {


        this.raycaster = new Raycaster()

        // this.square = new SquareTest()
        this.portal = new Portal()
        this.fireFlies = new FireFlies()
        // this.environment = new Environment()


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