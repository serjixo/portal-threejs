import Observer from "./Observer.js";

export default class ResizeObserver extends Observer {

    constructor() {
        super()
        // this.subscribedMethods = []
        window.addEventListener('resize', this.notify)
    }

    stopResizeListener() {
        window.removeEventListener('resize', this.notify)
    }

}

