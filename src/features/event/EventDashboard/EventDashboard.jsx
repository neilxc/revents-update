import React, {Component} from 'react';
import {Button, Grid} from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import cuid from "cuid";

const events = [
    {
        id: '1',
        title: 'Trip to Tower of London',
        date: '2018-03-27',
        category: 'culture',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
        city: 'London, UK',
        venue: "Tower of London, St Katharine's & Wapping, London",
        hostedBy: 'Bob',
        hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
        attendees: [
            {
                id: 'a',
                name: 'Bob',
                photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
            },
            {
                id: 'b',
                name: 'Tom',
                photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
            }
        ]
    },
    {
        id: '2',
        title: 'Trip to Punch and Judy Pub',
        date: '2018-03-28',
        category: 'drinks',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
        city: 'London, UK',
        venue: 'Punch & Judy, Henrietta Street, London, UK',
        hostedBy: 'Tom',
        hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
        attendees: [
            {
                id: 'b',
                name: 'Tom',
                photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
            },
            {
                id: 'a',
                name: 'Bob',
                photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
            }
        ]
    }
];

class EventDashboard extends Component {
    state = {
        events,
        isOpen: false,
        selectedEvent: null
    };

    handleFormOpen = () => {
        this.setState({
            selectedEvent: null,
            isOpen: true
        })
    };

    handleUpdateEvent = (updatedEvent) => {
        this.setState({
            events: this.state.events.map(event => {
                if (event.id === updatedEvent.id) {
                    return Object.assign({}, updatedEvent)
                } else {
                    return event;
                }
            }),
            isOpen: false,
            selecetedEvent: null
        })
    };

    handleEventOpen = (eventToOpen) => () => {
        this.setState({
            selectedEvent: eventToOpen,
            isOpen: true
        })
    };

    handleCancel = () => {
        this.setState({
            isOpen: false
        })
    };

    handleCreateEvent = (newEvent) => {
        newEvent.id = cuid();
        newEvent.hostPhotoURL = '/assets/user.png';
        const updatedEvents = [...this.state.events, newEvent];
        this.setState({
            events: updatedEvents,
            isOpen: false
        })
    };

    handleDeleteEvent = (eventId) => () => {
        const updatedEvents = this.state.events.filter(e => e.id !== eventId);
        this.setState({
            events: updatedEvents
        })
    };

    render() {
        const {events, selectedEvent} = this.state;
        return (
            <Grid>
                <Grid.Column width={10}>
                    <EventList deleteEvent={this.handleDeleteEvent} handleEventOpen={this.handleEventOpen}
                               events={events}/>
                </Grid.Column>
                <Grid.Column width={6}>
                    <Button positive content='Create Event' onClick={this.handleFormOpen}/>
                    {this.state.isOpen &&
                    <EventForm updateEvent={this.handleUpdateEvent} createEvent={this.handleCreateEvent}
                               handleCancle={this.handleCancel} selectedEvent={selectedEvent}/>
                    }
                </Grid.Column>
            </Grid>
        );
    }
}

export default EventDashboard;