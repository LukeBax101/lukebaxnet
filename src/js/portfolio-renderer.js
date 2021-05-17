import Highway from '@dogstudio/highway';
import { portfolioInit, portfolioRepeat } from './portfolio';

class PortfolioRenderer extends Highway.Renderer {
    onEnterCompleted() {
        if (!window.portfolioInit) {
            portfolioInit();
            portfolioRepeat();
        } else {
            console.log('portfolio already initialised')
            portfolioRepeat();
        }
    }
}

export default PortfolioRenderer;