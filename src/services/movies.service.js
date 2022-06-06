import {_axios} from "../utils/axios";

export const movieService = {
    getMovieList,
    getGenreList,
    createRequestToken,
    validateWithLogin,
    createSession,
    getUser
}

function getMovieList(payload) {
    return _axios.get('/discover/movie', {
        params: payload
    })
        .then(response => {
            if (response && response.status === 200) {
                return response.data
            }
        })
}
function getGenreList() {
    return _axios.get('/genre/movie/list')
        .then(response => {
            if (response && response.status === 200) {
                return response.data
            }
        })
}
function createRequestToken() {
    return _axios.get('/authentication/token/new')
        .then(response => {
            if (response && response.status === 200) {
                return response.data
            }
        })
}
function validateWithLogin(payload) {
    return _axios.post('/authentication/token/validate_with_login', payload)
        .then(response => {
            if (response && response.status === 200) {
                return response.data
            }
        })
}
function createSession(payload) {
    return _axios.post('/authentication/session/new', payload)
        .then(response => {
            if (response && response.status === 200) {
                return response.data
            }
        })
}
function getUser(payload) {
    return _axios.get('/account', {
        params: payload
    })
        .then(response => {
            if (response && response.status === 200) {
                return response.data
            }
        })
}
