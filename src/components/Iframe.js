import { Ratio, Spinner } from "react-bootstrap";

const Iframe = ({ media }) => {
    return (
        <Ratio aspectRatio="16x9">
            <iframe allow="autoplay" title={media.title} src={media.audioUrl || media.videoUrl}></iframe>
            {/* <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner> */}
        </Ratio>
    );
};

export default Iframe;