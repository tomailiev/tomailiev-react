import { useContext } from "react";
import { Spinner } from "react-bootstrap"
import LoadingContext from "../context/loadingContext";

const LoadingModal = () => {
    const { isLoading } = useContext(LoadingContext);

    return isLoading && (
        <div className="text-center" style={{ width: '100vw', height: '100vh', position: 'fixed', zIndex: '999', backgroundColor: 'rgba(0,0,0,0.4' }}>
            <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', }}>
                <Spinner animation="border" role="status" variant="light" style={{ display: 'block', position: 'fixed', top: 'calc(50% - (58px / 2))', right: 'calc(50% - (58px / 2))' }}>
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        </div>
    )
};

export default LoadingModal;