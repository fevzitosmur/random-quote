import React, { useState } from 'react';

const cities = [
  'Adana', 'Ankara', 'İstanbul', 'İzmir', 'Antalya', 'Bursa', 'Çanakkale', 
  'Diyarbakır', 'Erzurum', 'Gaziantep', 'Hatay', 'Konya', 'Malatya', 'Muğla', 
  'Samsun', 'Trabzon', 'Van', 'Şanlıurfa'
];

const Quote = () => {
  const [city, setCity] = useState('');

  const fetchCity = () => {
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    setCity(randomCity);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Rastgele Şehir Üretici</h1>
      <p style={{ fontSize: '24px', fontStyle: 'italic' }}>{city}</p>
      <button onClick={fetchCity} style={{ padding: '10px 20px', fontSize: '16px' }}>Yeni Şehir</button>
    </div>
  );
};

export default Quote;
