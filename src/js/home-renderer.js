import Highway from '@dogstudio/highway';
import { homeInit, homeRepeat } from './index.js';

class HomeRenderer extends Highway.Renderer {
    onEnterCompleted() {
        if (!window.homeInit) {
            homeInit();
            homeRepeat();
        } else {
            console.log('home already initialised')
            homeRepeat();
        }
    }
}

export default HomeRenderer;