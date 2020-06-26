import React from 'react';
import { Link } from 'react-router-dom'
import { CharactersService } from '../FetchData/Data';
import style from './InfoCard.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

export class InfoCard extends React.Component {

    constructor() {
        super();

        this.state = {
            character: null
        }
    }

    componentDidMount() {
        const character = new CharactersService();
        character.getCharacter(this.props.match.params.id)
            .then(info => this.setState({ character: info }))
    }

    render() {
        if (!this.state.character) {
            return null;
        }

        return (
            <div className={style.infoCard}>
                <Link to="/"><Button variant="outline-dark">Back</Button></Link>
                <img className={style.image} src={this.state.character.image} alt='' />
                <div className={style.character_information}>
                    <h1 className={style.name}>Name:{this.state.character.name}</h1>
                    <h2 className={style.gender}>Gender:{this.state.character.gender}</h2>
                    <h2 className={style.species}>Species:{this.state.character.species}</h2>
                    <h2 className={style.status}>Status:{this.state.character.status}</h2>
                    <h2 className={style.location}>Location:{this.state.character.location.name}</h2>
                </div>
            </div>
        );


    }
}

//name--> results.name
//gender--> results.episode.gender
// species--> results.origin.species
//status ->> results.origin.status
// location -->> results.location.name

