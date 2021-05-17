import Highway from '@dogstudio/highway';
import { aboutInit, aboutRepeat } from './about.js';

class AboutRenderer extends Highway.Renderer {
    onEnterCompleted() {
        if (!window.aboutInit) {
            aboutInit();
            aboutRepeat();
        } else {
            console.log('about already initialised')
            aboutRepeat();
        }
    }
}

export default AboutRenderer;