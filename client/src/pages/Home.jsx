import { useRef, useEffect } from 'react';
// import { Container } from 'react-bootstrap';
import lottie from 'lottie-web';

function Home() {
    const spaceContainer = useRef(null);
    const space = useRef(null);

    useEffect(() => {
        if (spaceContainer.current) {
            space.current = lottie.loadAnimation({
                container: spaceContainer.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: require('../greeting.json'),
            });
        }
        
    }, [])
    return (
        <div>
            {/* <h1 className="text-center m-4">Welcome Home!</h1> */}
            <div ref={spaceContainer} />
        </div>
    )
}

export default Home;