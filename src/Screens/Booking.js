import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Booking.module.css';

const Booking = () => {
    const [selectedTimes, setSelectedTimes] = useState({});
    const [reservedTimes, setReservedTimes] = useState({});

    const rooms = [
        {
            name: 'Sala 01',
            campus: 'Campus San Joaquin',
            capacity: 8,
            times: ['18:30 - 19:00, 5 septiembre, 2024', '19:00 - 19:30, 5 septiembre, 2024'],
        },
        {
            name: 'Sala 02',
            campus: 'Campus San Joaquin',
            capacity: 8,
            times: ['18:30 - 19:00, 5 septiembre, 2024', '19:00 - 19:30, 5 septiembre, 2024'],
        },
        {
            name: 'Sala 03',
            campus: 'Campus San Joaquin',
            capacity: 8,
            times: ['18:30 - 19:00, 5 septiembre, 2024', '19:00 - 19:30, 5 septiembre, 2024'],
        },
    ];

    // Manejar cambios en los checkboxes
    const handleCheckboxChange = (roomIndex, timeIndex) => {
        setSelectedTimes((prevSelectedTimes) => {
            if (prevSelectedTimes[roomIndex] === timeIndex) {
                const newSelectedTimes = { ...prevSelectedTimes };
                delete newSelectedTimes[roomIndex];
                return newSelectedTimes;
            } else {
                return {
                    ...prevSelectedTimes,
                    [roomIndex]: timeIndex,
                };
            }
        });
    };

    // Manejar la reserva
    const handleReserve = (roomIndex) => {
        setReservedTimes((prevReservedTimes) => ({
            ...prevReservedTimes,
            [roomIndex]: selectedTimes[roomIndex],
        }));
    };

    return (
        <div className={styles.bookingContainer}>
            <div>
                <div className={styles.miniDiv}></div>
                <Link to="/" className={`${styles.pathTo} ${styles.noUnderline}`}>Biblioteca Usm</Link> » <span>Reservar</span>
            </div>
            <div className={styles.filters}>
                <h1>Salas de Estudio</h1>
                <select className={styles.select}>
                    <option>Campus San Joaquin</option>
                    <option>Casa Central</option>
                    <option>Campus Vitacura</option>
                </select>
                <select className={styles.select}>
                    <option>5 septiembre, 2024</option>
                    <option>6 septiembre, 2024</option>
                    <option>7 septiembre, 2024</option>
                </select>
            </div>
            {rooms.map((room, roomIndex) => (
                <div key={roomIndex} className={styles.roomCard}>
                    <div className={styles.roomHeader}>
                        <h2>{room.name} <span>{room.campus}</span></h2>
                        <span className={styles.capacity}>Capacidad: {room.capacity}</span>
                    </div>
                    <ul className={styles.timeList}>
                        {room.times.map((time, timeIndex) => (
                            <li key={timeIndex} className={styles.timeSlot}>
                                <input
                                    type="checkbox"
                                    checked={selectedTimes[roomIndex] === timeIndex}
                                    onChange={() => handleCheckboxChange(roomIndex, timeIndex)}
                                    disabled={reservedTimes[roomIndex] === timeIndex}
                                />
                                <span>{time}</span>
                            </li>
                        ))}
                    </ul>
                    {selectedTimes[roomIndex] !== undefined && (
                        <button
                            className={styles.reserveButton}
                            onClick={() => handleReserve(roomIndex)}
                            disabled={reservedTimes[roomIndex] !== undefined}
                            style={{
                                backgroundColor: reservedTimes[roomIndex] !== undefined ? '#4CAF50' : '#007BFF',
                                color: '#FFF',
                                cursor: reservedTimes[roomIndex] !== undefined ? 'not-allowed' : 'pointer',
                            }}
                        >
                            {reservedTimes[roomIndex] !== undefined ? 'Reservado' : 'Reservar'}
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Booking;
