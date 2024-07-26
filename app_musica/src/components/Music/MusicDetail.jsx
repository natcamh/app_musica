import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/api';

const MusicDetail = () => {
  const { id } = useParams();
  const [music, setMusic] = useState(null);

  useEffect(() => {
    const fetchMusicDetail = async () => {
      const response = await api.get(`/music/${id}`);
      setMusic(response.data);
    };

    fetchMusicDetail();
  }, [id]);

  if (!music) return <div>Cargando...</div>;

  return (
    <div>
      <h1>{music.title}</h1>
      <p>{music.artist}</p>
      <p>{music.album}</p>
    </div>
  );
};

export default MusicDetail;
