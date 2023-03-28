import Observer from "./Observer.js";

const instance = null
export default class ResizeObserver extends Observer {

    constructor() {
        if(instance)
            return instance
        super()

        // this.subscribedMethods = []
        window.addEventListener('resize', this.notify)
    }

    stopResizeListener() {
        window.removeEventListener('resize', this.notify)
    }

}

