import React from 'react';
import { CharactersService } from '../FetchData/Data';
import CardView from '../CardView/CardView';
import './Characters.css';



class Characters extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: []
        }
    }

    componentDidMount() {
        const characters = new CharactersService();

        characters.get()
            // fetch('https://rickandmortyapi.com/api/character')
            //     .then(response => response.json())
            .then(info => this.setState({ characters: info.results }))
    }

    renderCharacters() {
        return this.state.characters.map((character, i) => {
            return <CardView key={i} image={character.image} title={character.name} />
        })
    }

    onPageChange = (e) => {
        const chars = new CharactersService();

        chars.getPage(e.target.textContent)
            .then(page => this.setState({ characters: page.results }))

    }


    render() {
        return (
            <div>
                <div className='Characters__pagination_wrapper' >
                    <ul className='Characters__pagination'>
                        <li><button id='firstChild'>&#60;</button></li>
                        <li><button onClick={this.onPageChange}>1</button></li>
                        <li><button onClick={this.onPageChange}>2</button></li>
                        <li><button onClick={this.onPageChange}>3</button></li>
                        <li><button onClick={this.onPageChange}>4</button></li>
                        <li><button onClick={this.onPageChange}>5</button></li>
                        <li><button id='lastChild'>&#62;</button></li>

                    </ul>
                </div>
                <div className="Characters__wrapper">
                    {this.renderCharacters()}
                </div>
            </div>

        );
    }

}

export default Characters;
