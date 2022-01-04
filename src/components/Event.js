import { Button } from "react-bootstrap";

const Event = ({ event }) => {
    return (
        <tr>
            <th scope="row"><span>{event.date}</span><br /><span>{event.time}</span></th>
            <td><span
                class="font-italic">{event.eventName}</span><br /><span>{event.groupName}</span>
            </td>
            <td class="d-none d-md-table-cell">{event.location}</td>
            <td class="d-none d-md-table-cell">{event.venue}</td>
            <td>
                <Button size="sm" variant="outline-dark" className="lite-text">
                    Details
                </Button>
            </td>
        </tr>
    );
};

export default Event;