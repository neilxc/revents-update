import React, {Component, Fragment} from 'react';
import EventListItem from "./EventListItem";

class EventList extends Component {
    render() {
        const {events, handleEventOpen, deleteEvent} = this.props;
        return (
            <Fragment>
                <h1>Event List</h1>
                {events.map((event) => (
                    <EventListItem key={event.id} event={event} handleEventOpen={handleEventOpen}
                                   deleteEvent={deleteEvent}/>
                ))}
            </Fragment>
        );
    }
}

export default EventList;