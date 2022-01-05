import { Table } from "react-bootstrap";
import Event from "./Event";

const EventsTable = ({ events, theme }) => {
    return (
        <Table hover variant={theme || "dark"}>
            <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Event</th>
                    <th scope="col" className="d-none d-md-table-cell">Location</th>
                    <th scope="col" className="d-none d-md-table-cell">Venue</th>
                    <th scope="col">More</th>
                </tr>
            </thead>
            <tbody>
                {events.map(x => <Event key={x.id} event={x} />)}
            </tbody>
        </Table>
    );
};

export default EventsTable;