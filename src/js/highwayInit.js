import Highway from '@dogstudio/highway';
import Fade from './transition';
import PortfolioRenderer from './portfolio-renderer';
import HomeRenderer from './home-renderer';
import AboutRenderer from './about-renderer';

const highwayInit = () => {
    const H = new Highway.Core({
        transitions: {
            default: Fade,
        },
        renderers: {
            portfolio: PortfolioRenderer,
            home: HomeRenderer,
            about: AboutRenderer,
        }
    });

    console.log('highway initialised');
};

window.highwayInit = highwayInit;

export { highwayInit };