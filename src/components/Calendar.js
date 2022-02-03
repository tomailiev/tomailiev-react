import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap"
import LanguageContext from "../context/languageContext";
import LoadingContext from "../context/loadingContext";
import NotificationContext from "../context/notificationContext";
import { getItems } from "../utils/firebaseDB";
import EventModal from "./EventModal";
import EventsTable from "./EventsTable";
import Spacer from "./Spacer";


const Calendar = () => {
    const { isLoading, setIsLoading } = useContext(LoadingContext);
    const { setNotification } = useContext(NotificationContext);
    const { language: { titles, negatives, messages } } = useContext(LanguageContext);

    const [events, setEvents] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        getItems('events', ['dateTime', '>=', new Date()], 10, ['dateTime', 'asc'])
            .then(items => {
                setIsLoading(false);
                setEvents(items);
            })
            .catch(err => {
                setIsLoading(false);
                console.log(err.code);
                setNotification({ type: 'warning', message: messages.warning });
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setIsLoading, setNotification]);

    return (
        <>
            <Spacer height={4} />
            <Container id="eventHolder" className="py-5">
                <h1 className="py-2">{titles.calendar}</h1>
                {!isLoading && (events?.length
                    ? <EventsTable events={events} theme={"light"} />
                    : <h4 className="py-2">{negatives.events}</h4>)}
            </Container>
            <EventModal />
        </>
    );
};

export default Calendar;