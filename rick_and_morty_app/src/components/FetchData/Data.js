export class Data {
    get() {
        return fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
    }
}