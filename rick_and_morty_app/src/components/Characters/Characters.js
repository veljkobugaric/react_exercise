import React from 'react';
import { Data } from '../FetchData/Data';

class Characters extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: []
        }
    }

    componentDidMount() {
        const characters = new Data();

        characters.get()
            .then(info => this.setState({ characters: info.results }))
    }

    renderCharacters() {
        return this.state.characters.map(character => {
            <
        })
    }

    render() {
        return (
            < div>



            </div>

        );
    }

}

export default Characters;
