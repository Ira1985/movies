import axios from "axios";

export const _axios = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

_axios.defaults.params = {
    "api_key": "00a1e64ecaa38fff3a8cdeab46c62451",
    "language": "ru-RU"
}
