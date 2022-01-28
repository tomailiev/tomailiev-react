import { useContext } from "react";
import { Table } from "react-bootstrap";
import LanguageContext from "../context/languageContext";
import Event from "./Event";

const EventsTable = ({ events, theme }) => {
    const {language:{eventTable}} = useContext(LanguageContext);

    return (
        <Table hover variant={theme || "dark"}>
            <thead>
                <tr>
                    <th scope="col">{eventTable.date}</th>
                    <th scope="col">{eventTable.event}</th>
                    <th scope="col" className="d-none d-md-table-cell">{eventTable.location}</th>
                    <th scope="col" className="d-none d-md-table-cell">{eventTable.venue}</th>
                    {theme && <th scope="col" className="d-none d-md-table-cell">{eventTable.tickets}</th>}
                    <th scope="col">{eventTable.more}</th>
                </tr>
            </thead>
            <tbody>
                {events.map(x => <Event key={x.id} event={x} theme={theme} />)}
            </tbody>
        </Table>
    );
};

export default EventsTable;