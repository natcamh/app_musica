import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Perfil de Usuario</h1>
      {user ? (
        <div>
          <p><strong>Nombre:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          {/* Otros datos del usuario */}
        </div>
      ) : (
        <p>No estás autenticado.</p>
      )}
    </div>
  );
};

export default Profile;
