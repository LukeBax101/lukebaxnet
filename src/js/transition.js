import Highway from '@dogstudio/highway';
import { TimelineLite } from 'gsap';

class Fade extends Highway.Transition {
    in({from, to, done}) {
        const tl = new  TimelineLite();
        tl.fromTo(to, { opacity: 0 }, { opacity: 1, duration: 0.5, onComplete: () => {
            from.remove();
            done();
        }});
    }

    out({from, done}) {
        const tl = new  TimelineLite();
        tl.fromTo(from, { opacity: 1 }, { opacity: 0, duration: 0.5, onComplete: () => {
            done();
        }});
    }
}

export default Fade;