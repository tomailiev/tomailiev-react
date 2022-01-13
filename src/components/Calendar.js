import { useEffect, useState } from "react";
import { Container } from "react-bootstrap"
import { getItems } from "../utils/firebaseDB";
import EventModal from "./EventModal";
import EventsTable from "./EventsTable";
import Spacer from "./Spacer";


const Calendar = () => {
    const [events, setEvents] = useState(null);

    useEffect(() => {
        getItems('events', ['dateTime', '>=', new Date()], 10, ['dateTime', 'asc'])
            .then(items => {
                setEvents(items);
            })
            .catch(console.error);
    }, []);

    return (
        <>
            <Spacer height={4} />
            <Container id="eventHolder" className="py-5">
                <h1 className="py-2">Performances</h1>
                {events && events?.length
                    ? <EventsTable events={events} theme={"light"} />
                    : <h4 className="py-2">No events found. Please check back later.</h4>}
            </Container>
            <EventModal />
        </>
    );
};

export default Calendar;