import { BASE_URL } from "./constants";

export default class DateService {
    static getCharacters(page=1) {
        return fetch (`${BASE_URL}character/?page=${page}`)
            .then(res => res.json())
            .then(data => data)
    }

    static getCharacterById(id=1) {
        return fetch (`${BASE_URL}character/${id}`)
            .then(res => res.json())
            .then(data => data)
    }

    static getEpisodeById(id=1) {
        return fetch (`${BASE_URL}episode/${id}`)
            .then(res => res.json())
            .then(data => data)
    }


    static getEpisode() {
        return fetch (`${BASE_URL}episode`)
            .then(res => res.json())
            .then(data => data)
    }
}