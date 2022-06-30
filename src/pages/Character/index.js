import DateService from '../../API';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Card, Descriptions } from 'antd';
import './styles.css';
const { Meta } = Card;


const Character = () => {
    const [character, setCharacter] = useState({});

    const params = useParams();
    const current = params.characterId;   

    useEffect(() => {
        DateService.getCharacterById(current)
            .then(data => setCharacter(data))
    }, [params])
    
    return (
        <>
            <h1 className = "characterTitle">Character {current}</h1>
            <Card id = "characterCard" hoverable style={{ width: 240}} cover={<img alt={character.name} src={character.image} />}>
                <Meta title={character.name} />
            </Card>
            <Descriptions title="Character Info" >
                <Descriptions.Item label="status">{character.status}</Descriptions.Item>
                <Descriptions.Item label="species">{character.species}</Descriptions.Item>
                <Descriptions.Item label="gender">{character.gender}</Descriptions.Item>
            </Descriptions>
        </>
        )
}

export default Character;