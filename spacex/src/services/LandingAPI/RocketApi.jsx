import axios from 'axios';

const fetchRocketData = async () => {
    try {
        const response = await axios.get('https://api.spacexdata.com/v3/rockets');
        return response.data;
    } catch (error) {
        console.error('Error fetching rocket data:', error);
        return [];
    }
};

export { fetchRocketData };
