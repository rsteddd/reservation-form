import React, { useState } from 'react';
import "../styles/ReservationForm.css"

function ReservationForm() {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(`Reservation made for ${name} on ${date} at ${time} for ${guests} guests.`);
    };

    return (
        <form onSubmit={handleSubmit} className="reservation-form">
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>
                Date:
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </label>
            <label>
                Time:
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
            </label>
            <label>
                Guests:
                <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} min="1" required />
            </label>
            <button type="submit">Reserve</button>
        </form>
    );
}

export default ReservationForm;
