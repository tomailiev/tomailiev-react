import { useContext } from "react";
import { Button } from "react-bootstrap";
import EventContext from "../context/eventContext";

const Event = ({ event }) => {
    const { setEvent } = useContext(EventContext);

    function handleClick() {
        setEvent(event);
    }

    return (
        <tr>
            <th scope="row"><span>{event.date}</span><br /><span>{event.time}</span></th>
            <td><span
                className="font-italic">{event.eventName}</span><br /><span>{event.groupName}</span>
            </td>
            <td className="d-none d-md-table-cell">{event.location}</td>
            <td className="d-none d-md-table-cell">{event.venue}</td>
            <td>
                <Button size="sm" variant="outline-dark" className="lite-text" onClick={handleClick}>
                    Details
                </Button>
            </td>
        </tr>
    );
};

export default Event;