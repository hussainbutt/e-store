import React from 'react'
import EventCard from '../components/Route/Events/EventCard'
import Header from '../components/Layout/Header';
function EventPage() {
  return (
    <div>
        <Header activeHeading = {4} />
        <EventCard active ={true}/>
        <EventCard active ={true}/>
    </div>
  )
}

export default EventPage 