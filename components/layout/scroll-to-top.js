import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { useAnimationControls, motion, useScroll } from "framer-motion";
import { useEffect } from "react";

const isBrowser = () => typeof window !== 'undefined';

const ScrollToTopContainerVariants = {
    hide: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
};

function scrollToTop() {
    if(!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function ScrollToTopButton() {
    const { scrollYProgress } = useScroll();
    const controls = useAnimationControls();

    useEffect(() => {
        return scrollYProgress.on('change', (latestValue) => {
            if (latestValue > 0.5) {
                controls.start('show');
            } else {
                controls.start('hide');
            }
        });
    });

    return(
        <div className="bottom-0 right-0 fixed">
            <motion.button 
                className="p-[0.8em] bg-almost-black bg-opacity-70 hover:bg-opacity-100 m-[2em] rounded-sm" 
                onClick={scrollToTop}
                variants={ScrollToTopContainerVariants}
                initial="hide"
                animate={controls}
            >
                <ChevronUpIcon className="w-8 h-8 text-off-white"/>
            </motion.button>
        </div>
    )
}

export default ScrollToTopButton;