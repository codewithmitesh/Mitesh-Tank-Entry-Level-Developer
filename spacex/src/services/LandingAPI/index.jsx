import React, { useState, useEffect } from 'react';

function RocketInfo() {
    const [rocketData, setRocketData] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/rockets')
            .then(response => response.json())
            .then(data => {
                setRocketData(data);
            })
            .catch(error => {
                console.error('Error fetching rocket data:', error);
            });
    }, []);

    return (
        <div>
            <h2>Rocket Information</h2>
            {rocketData.length > 0 ? (
                <div>
                    {rocketData.map(rocket => (
                        <div key={rocket.id}>
                            <h3>{rocket.rocket_name}</h3>
                            <p>{rocket.description}</p>
                            <p>Country: {rocket.country}</p>
                            <p>Company: {rocket.company}</p>
                            <p>First Flight: {rocket.first_flight}</p>
                            { }
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading rocket information...</p>
            )}
        </div>
    );
}

export default RocketInfo;
