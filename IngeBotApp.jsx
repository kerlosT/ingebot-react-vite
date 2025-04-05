import React, { useState } from 'react';

export default function IngeBotApp() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleQuery = () => {
    const lower = query.toLowerCase();
    if (lower.includes("calculadora") && lower.includes("neumatica")) {
      const presion = 6;
      const diametro = 63;
      const area = Math.PI * Math.pow((diametro / 1000) / 2, 2);
      const fuerza = presion * 100000 * area;
      setResponse(`Con una presión de ${presion} bar y un cilindro de ${diametro} mm, se genera una fuerza de ${fuerza.toFixed(2)} N.`);
    } else {
      setResponse("Lo siento, aún no tengo una respuesta programada para eso. ¡Pronto agregaré más funciones!");
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1 style={{ fontSize: '2rem', color: '#1e40af' }}>🤖 IngeBot 1.0</h1>
      <input
        type="text"
        placeholder="Escribe tu pregunta de ingeniería aquí..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
      />
      <button onClick={handleQuery} style={{ padding: '0.5rem 1rem', background: '#1e40af', color: 'white', border: 'none' }}>
        Consultar
      </button>
      {response && (
        <div style={{ marginTop: '1rem', background: '#f3f4f6', padding: '1rem', borderRadius: '0.5rem' }}>
          {response}
        </div>
      )}
    </div>
  );
}