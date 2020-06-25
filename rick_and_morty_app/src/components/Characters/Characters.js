import React from 'react';
import { CharactersService } from '../FetchData/Data';
import CardView from '../CardView/CardView';
import './Characters.css';



class Characters extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: [],
            pages: [1, 2, 3, 4, 5, 6, 7],
            page: 1
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
        return
    }

    onPageChange = (PageNumber) => {
        const chars = new CharactersService();
        chars.getPage(PageNumber)
            .then(page => this.setState({ characters: page.results, page: PageNumber }))
    }

    nextPage = () => {
        let pageNum = JSON.parse(this.state.page) + 1;
        if (pageNum === 31) {
            pageNum = 0;
        }
        this.onPageChange(pageNum)
    }
    prevPage = (e) => {
        let pageNum = JSON.parse(this.state.page) - 1;
        this.onPageChange(pageNum)
    }
    render() {
        return (
            <div>
                <div className='Characters__pagination_wrapper' >
                    <ul className='Characters__pagination'>
                        <li><button id='firstChild' onClick={this.prevPage}>&#60;</button></li>
                        {this.state.pages.map((item, i) =>
                            <li key={i}><button onClick={(e) =>
                                this.onPageChange(e.target.textContent)}>{item}</button></li>)}
                        <li><button id='lastChild' onClick={this.nextPage}>&#62;</button></li>
                    </ul>
                </div>
                <div className="Characters__wrapper">
                    {this.state.characters.map((character, i) => (
                        <CardView key={i} image={character.image} title={character.name} />
                    ))}
                </div>
            </div>

        );
    }

}

export default Characters;
