import { Ratio, Spinner } from "react-bootstrap";
import { useState } from "react";
import {iframeSpinnerCSS} from '../styles-js';

const Iframe = ({ media, size }) => {
    const [hasLoaded, setHasLoaded] = useState(false);
    return (
        <>
            <Ratio aspectRatio={size || '16x9'}>
                <div>
                    <iframe onLoad={() => setHasLoaded(true)} title={media.title} src={media.audioUrl || media.videoUrl} className="h-100 w-100" />
                    {!hasLoaded && <Spinner variant="dark" animation="border" role="status" style={iframeSpinnerCSS}>
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>}
                </div>
            </Ratio>
        </>
    );
};

export default Iframe;