import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api/api';

const MusicList = () => {
  const [music, setMusic] = useState([]);

  useEffect(() => {
    const fetchMusic = async () => {
      const response = await api.get('/music');
      setMusic(response.data);
    };

    fetchMusic();
  }, []);

  return (
    <div>
      <h1>Lista de Música</h1>
      <ul>
        {music.map((item) => (
          <li key={item.id}>
            <Link to={`/music/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicList;
