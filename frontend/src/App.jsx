import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);


  useEffect(() => {
    // Fetch data from your backend
    axios.get(`${import.meta.env.VITE_API_URL}/api/data`)
      .then(res => {
        console.log('API response:', res.data);
        setData(res.data);
      })
      .catch(err => console.error(err));
  }, []);


  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">🔔 MERN PWA Dashboard</h1>
      <h1 className="text-2xl font-bold mb-4">Welcom To The Dark Wolrd</h1>
      <h2 className="text-lg font-semibold mt-8 mb-4">📦 API Data</h2>
      <ul className="mt-2">
        {data.map(item => (
          <li key={item.id} className="border p-2 my-2 rounded">{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const raw = atob(base64);
  return new Uint8Array([...raw].map(char => char.charCodeAt(0)));
}

export default App;
