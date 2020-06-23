import React from 'react';
import { Data } from '../FetchData/Data';
import CardView from '../CardView/CardView';

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
           return <CardView image={character.image} title={character.name} />
        })
    }

    render() {
        return (
            < div>
                {renderCharacters()}
            </div>

        );
    }

}

export default Characters;
