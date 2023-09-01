import axios from "axios";

export default axios.create({
    baseURL: 'https://api-send-cell.onrender.com',
})