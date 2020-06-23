import React from 'react';
import { Data } from '../FetchData/Data';
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
        const characters = new Data();

        characters.get()
            .then(info => this.setState({ characters: info.results }))
    }

    renderCharacters() {
        return this.state.characters.map((character, i) => {
            return <CardView key={i} image={character.image} title={character.name} />
        })
    }

    render() {
        return (
            <div>
                <div className='Characters__pagination_wrapper' >
                    <ul className='Characters__pagination'>
                        <li><button id='firstChild'>&#60;</button></li>
                        <li><button>1</button></li>
                        <li><button>2</button></li>
                        <li><button>3</button></li>
                        <li><button>4</button></li>
                        <li><button>5</button></li>
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
