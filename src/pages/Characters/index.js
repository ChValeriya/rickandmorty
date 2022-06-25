import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from 'antd';
const { Meta } = Card;

const Characters = () => {
    const [characters, setCharacters] = useState(null);

    useEffect(() => {
        if (!characters) {
            fetch('https://rickandmortyapi.com/api/character/?page=2')
            .then(res => res.json())
            .then(data => setCharacters(data.results))
        }
    }, []);

    const ourCharacters = characters && characters.map(item => 
        <h5 className="card" key={item.id}>
            <Link to={`/characters/${item.id}`}>
                <Card hoverable style={{ width: 240}} cover={<img alt={item.name} src={item.image} />}>
                    <Meta title={item.name} description={item.species} />
                </Card>
            </Link>
        </h5>
        
    )
    return (
        <>
            {characters ? <h1 className="cards">{ourCharacters}</h1> : <h1>Loading</h1>}
        </>
    )
}

export default Characters;