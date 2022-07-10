import DateService from '../../API';
import NavBar from "../../components/NavBar";
import { getLastStrItem } from '../../utils';
import "./styles.css";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { Card } from 'antd';
const { Meta } = Card;

const Characters = () => {
    const episodeId = useSelector((state) => state.menuItem);
    const [characters, setCharacters] = useState(null);
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        DateService.getEpisodeById(episodeId)
            .then(data => {
                const ids = data.characters.map(item => getLastStrItem(item, '/'));
                DateService.getCharacterById(ids)
                    .then(res => setCharacters(res))
        })

        if(!episodes.length) {
            DateService.getEpisode()
                .then(res => setEpisodes(res.results))
        }

    }, [episodeId]);

    const ourCharacters = characters && characters.map(item => 
        <div className="card" key={item.id}>
            <Link to={`/characters/${item.id}`}>
                <Card hoverable style={{ width: 240}} cover={<img alt={item.name} src={item.image} />}>
                    <Meta title={item.name} description={item.species} />
                </Card>
            </Link>
        </div>
        
    )

    return (
        <div className="charactersContainer">
            <NavBar items={episodes} />
            <div>
                {characters ? <h1 className="cards">{ourCharacters}</h1> : <h1>Loading</h1>}
            </div>
        </div>
    )
}

export default Characters;