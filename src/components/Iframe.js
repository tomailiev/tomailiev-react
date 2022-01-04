import { Ratio, Spinner } from "react-bootstrap";

const Iframe = ({ media }) => {
    return (
        <Ratio aspectRatio="16x9">
            {media.audioUrl || media.videoUrl
                ? <iframe allow="autoplay" title={media.title} src={media.audioUrl || media.videoUrl}></iframe>
                : <div>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            }
        </Ratio>
    );
};

export default Iframe;