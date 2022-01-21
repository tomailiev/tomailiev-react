import { Ratio, Spinner } from "react-bootstrap";
import { useState } from "react";

const Iframe = ({ media, size }) => {
    const [hasLoaded, setHasLoaded] = useState(false);
    return (
        <>
            <Ratio aspectRatio={size || '16x9'}>
                <div>
                    <iframe onLoad={() => setHasLoaded(true)} title={media.title} src={media.audioUrl || media.videoUrl} style={{width: '100%', height: '100%'}} />
                    {!hasLoaded && <Spinner variant="dark" animation="border" role="status" style={{ zIndex: 800, position: 'absolute', top: 'calc(50% - (58px / 2))', right: 'calc(50% - (58px / 2))' }}>
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>}
                </div>
            </Ratio>
        </>
    );
};

export default Iframe;