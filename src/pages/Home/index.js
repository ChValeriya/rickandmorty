import React from 'react';
import DateService from '../../API';
import '../Characters';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Pagination, Tooltip, Button } from 'antd';
import { StarOutlined } from '@ant-design/icons';
const { Meta } = Card;

const Home = () => {
  const [characters, setCharacters] = useState(null);
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState([]);


  useEffect(() => {
    if (!characters || currentPage) {
      DateService.getCharacters(currentPage)
        .then(data => {
          setCharacters(data.results);
          setPages(data.info.pages);
        });
    }
  }, [currentPage]);

  const onStarClick = (fav) => {
    setFavorites([...favorites, fav]);
  };

  console.log(favorites);
  const ourCharacters = characters && characters.map(item => 
    <div className="card" key={item.id}>
      <Tooltip className='favorites' title="favorites">
        <Button shape="circle" icon={<StarOutlined />} onClick={() => onStarClick(item.id)} />
      </Tooltip>
      <Link to={`/characters/${item.id}`}>
        <Card hoverable style={{ width: 240}} cover={<img alt={item.name} src={item.image} />}>
          <Meta title={item.name} description={item.species} />
        </Card>
      </Link>
    </div>
        
  );

  const onPageChange = (val) => {
    setCurrentPage(val);
  };

  return (
    <div className="charactersContainer">
      <div>
        {characters ? <h1 className="cards">{ourCharacters}</h1> : <h1>Loading</h1>}
        <Pagination className="pagination" defaultCurrent={currentPage} total={pages} onChange={onPageChange}  />
      </div>
    </div>
  );
};

export default Home;