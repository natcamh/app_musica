import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/api';

const Home = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await api.get('/songs');
        setSongs(response.data);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchSongs();
  }, []);

  return (
    <div>
      <h1>Lista de Canciones</h1>
      <ul>
        {songs.map(song => (
          <li key={song.id}>
            <Link to={`/songs/${song.id}`}>{song.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
