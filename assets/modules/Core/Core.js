import {AppModule} from "AppModule";

import './Core.scss';


export class Core extends AppModule {

    constructor() {
        super();

        // Ref to this
        let self = this;

        // on DOMContentLoaded, publish DOMReady
        document.addEventListener("DOMContentLoaded", function () {
            self.publish('DOMReady');
        });
    }
}


