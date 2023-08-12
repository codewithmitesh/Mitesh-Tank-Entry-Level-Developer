import axios from 'axios';

export const register = async (email, password) => {
    try {
        console.log("this is register data")
        console.log(email, password)
        const res = await axios.post('http://localhost/auth/register.php', {
            'email': email,
            'password': password
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        console.log(res)
        return res
    }
    catch (err) {
        console.log(err);
    }
}

export default register;
