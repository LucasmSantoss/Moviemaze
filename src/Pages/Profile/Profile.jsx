import React, { useState, useEffect } from 'react';

function Profile() {

    
  useEffect(() => {
    // let url = ;
    let token = localStorage.getItem('token');
    if (token) {
      let headers = { headers: { Authorization: `Bearer ${token}` } };
      axios.post(url, null, headers);
    }
  }, []);
    return (
        <main>
            {/* //Datos del Usuario  */}
            
            {/* //Peliculas agregadas a favoritos */}
        </main>
    );
}

export default Profile;