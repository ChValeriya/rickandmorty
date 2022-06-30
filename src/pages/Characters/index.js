import DateService from '../../API';
import NavBar from "../../components/NavBar";
import "./styles.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Pagination } from 'antd';
const { Meta } = Card;

const Characters = () => {
    const [characters, setCharacters] = useState(null);
    const [pages, setPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [episodes, setEpisodes] = useState([])

    useEffect(() => {
        if (!characters || currentPage) {
            DateService.getCharacters(currentPage)
                .then(data => {
                    setCharacters(data.results);
                    setPages(data.info.pages)
                })

            DateService.getEpisode()
                .then(data => setEpisodes(data.results))
        }
    }, [currentPage]);

    const ourCharacters = characters && characters.map(item => 
        <div className="card" key={item.id}>
            <Link to={`/characters/${item.id}`}>
                <Card hoverable style={{ width: 240}} cover={<img alt={item.name} src={item.image} />}>
                    <Meta title={item.name} description={item.species} />
                </Card>
            </Link>
        </div>
        
    )

    const onPageChange = (val) => {
        setCurrentPage(val)
    }

    return (
        <div className="charactersContainer">
            <NavBar items={episodes} />
            <div>
                {characters ? <h1 className="cards">{ourCharacters}</h1> : <h1>Loading</h1>}
                <Pagination className="pagination" defaultCurrent={currentPage} total={pages} onChange={onPageChange}  />
            </div>
        </div>
    )
}

export default Characters;