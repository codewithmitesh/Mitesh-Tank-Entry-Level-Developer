import React, { useState, useEffect } from 'react';
import { fetchRocketData } from '../services/LandingAPI/RocketApi';

function RocketList() {
    const [rocketData, setRocketData] = useState([]);

    useEffect(() => {
        const getRocketData = async () => {
            const data = await fetchRocketData();
            setRocketData(data);
        };

        getRocketData();
    }, []);

    return (
        <div>
            <h2>Rocket List</h2>
            {rocketData.length > 0 ? (
                <ul>
                    {rocketData.map(rocket => (
                        <li key={rocket.id}>
                            <h3>{rocket.rocket_name}</h3>
                            <p>{rocket.description}</p>
                            <p>Country: {rocket.country}</p>
                            <p>Company: {rocket.company}</p>
                            <p>First Flight: {rocket.first_flight}</p>

                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading rocket information...</p>
            )}
        </div>
    );
}

export default RocketList;
