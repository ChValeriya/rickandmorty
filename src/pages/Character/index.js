import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Card, Descriptions } from 'antd';

const { Meta } = Card;

const Character = () => {
    const [character, setCharacter] = useState(null);

    const params = useParams();
    const current = params.characterId;
   

    useEffect(() => {
        if (!character) {
            fetch(`https://rickandmortyapi.com/api/character/${current}`)
            .then(res => res.json())
            .then(data => setCharacter(data))
        }
    }, [])
    
    const name = character && character.name;
    const image = character && character.image;
    const species = character && character.species;
    const status = character && character.status;
    const gender = character && character.gender;
    return (
        <>
            <Card className = "characterCard" hoverable style={{ width: 240}} cover={<img alt={name} src={image} />}>
                <Meta title={name} />
            </Card>
            <Descriptions title="Character Info">
                <Descriptions.Item label="status">{status}</Descriptions.Item>
                <Descriptions.Item label="species">{species}</Descriptions.Item>
                <Descriptions.Item label="gender">{gender}</Descriptions.Item>
            </Descriptions>
        </>
        )
}

export default Character;