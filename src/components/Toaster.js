import { useContext, useEffect } from "react"
import { Toast, ToastContainer } from "react-bootstrap"
import NotificationContext from "../context/notificationContext"

const Toaster = () => {
    const { notification, setNotification } = useContext(NotificationContext);

    useEffect(() => {
        return () => setNotification(null);
    }, [setNotification]);

    return (
        <ToastContainer position="top-end" className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 800 }}>
            <Toast autohide={true} delay={5000} bg={'dark' || notification?.type} show={!!notification} onClose={() => setNotification(null)}>
                {/* <Toast.Header closeButton={true}>
                    <strong className="me-auto">Toma Iliev says:</strong>
                </Toast.Header> */}
                <Toast.Body className="text-white">
                    {notification?.message}
                </Toast.Body>
            </Toast>
        </ToastContainer>
    )
}

export default Toaster;