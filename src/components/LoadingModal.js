import { useContext } from "react";
import { Spinner } from "react-bootstrap"
import LoadingContext from "../context/loadingContext";
import { overlayCSS, spinnerBGCSS, spinnerDefaultCSS } from '../styles-js';

const LoadingModal = () => {
    const { isLoading } = useContext(LoadingContext);

    return isLoading && (
        <div className="text-center" style={overlayCSS}>
            <div style={spinnerBGCSS}>
                <Spinner animation="border" role="status" variant="light" style={spinnerDefaultCSS}>
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        </div>
    )
};

export default LoadingModal;