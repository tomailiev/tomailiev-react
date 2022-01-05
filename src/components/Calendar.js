import { Button, Col, Container, Row } from "react-bootstrap"
import EventsTable from "./EventsTable";


const Calendar = () => {
    const events = [
        {
            dateTime: 'October 28, 2021 at 10: 30: 00 PM UTC- 4',
            date: 'Oct 1 2021',
            time: '10:30',
            eventName: "The No One's Rose",
            eventUrl: "https://philharmonia.org/2021-2022-season-2/the-no-ones-rose/#tickets",
            groupName: "Philharmonia Baroque Orchestra",
            id: "47o7Njn2Vz99KyrKU0de",
            location: "Stanford CA",
            venue: "Bing Concert Hall",
        },
        {
            dateTime: 'October 28, 2021 at 10: 30: 00 PM UTC- 4',
            date: 'Oct 2 2021',
            time: '10:30',
            eventName: "The No One's Rose",
            eventUrl: "https://philharmonia.org/2021-2022-season-2/the-no-ones-rose/#tickets",
            groupName: "Philharmonia Baroque Orchestra",
            id: "47o7Njn2Vz99KyrKU0d8hre",
            location: "Stanford CA",
            venue: "Bing Concert Hall",
        }
    ]

    return (
        // <div class="py-5"></div>
        <Container id="eventHolder" className="py-5">
            <h1 className="py-2">Performances</h1>
            <EventsTable events={events} theme={"light"} />
        </Container>
        // <div class="container p-5 h-75">
        //     <h1 class="py-2">Performances</h1>
        //     <h4 class="py-2">No events found. Please check back later.</h4>
        // </div>
    );
};

export default Calendar;