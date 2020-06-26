import React from 'react';
import { CharactersService } from '../FetchData/Data';
import CardView from '../CardView/CardView';
import style from './Characters.module.css';
import { Link } from 'react-router-dom';


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
            <div className={style.characters_wrapper}>
                <div className={style.pagination_wrapper}>
                    <ul className={style.pagination}>
                        <li><button id={style.firstChild} onClick={this.prevPage}>&#60;</button></li>
                        {this.state.pages.map((item, i) =>
                            <li key={i}><button onClick={(e) =>
                                this.onPageChange(e.target.textContent)}>{item}</button></li>)}
                        <li><button id={style.lastChild} onClick={this.nextPage}>&#62;</button></li>
                    </ul>
                </div>
                <div className={style.wrapper}>
                    {this.state.characters.map((character, i) => (
                        <Link to={`/characters/${character.id}`} key={i}><CardView key={i} image={character.image} title={character.name} /></Link>
                    ))}
                </div>
            </div>

        );
    }

}

export default Characters;
