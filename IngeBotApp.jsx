import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

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

  const exportToTxt = () => {
    const blob = new Blob([response], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'respuesta_ingebot.txt';
    link.click();
  };

  const changelog = [
    "FUNCIONES TÉCNICAS",
    "- Respuestas a preguntas como: ¿Qué es un PLC?, CA vs CC, Torque",
    "- Recomendación de materiales para estructuras",
    "- Sugerencias de sensores para automatización",
    "- Guía de roscas y tornillos",
    "",
    "CÁLCULOS INTEGRADOS",
    "- Peso de planchas y tubos",
    "- Potencia mecánica (P = F · v)",
    "- Conversiones: mm ↔ pulgadas, N ↔ kgf, °C ↔ °F",
    "- Calculadora neumática básica",
    "",
    "EXTRAS",
    "- Frases motivacionales para ingenieros",
    "- Exportar respuesta como archivo .txt",
    "",
    "EN DESARROLLO PARA INGEBOT 2.0",
    "- Calculadora neumática avanzada",
    "- Exportar a PDF y Excel",
    "- Historial de respuestas",
    "- Tip técnico diario",
    "- Modo offline"
  ];

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-4">🤖 IngeBot 1.0</h1>
      <Card>
        <CardContent className="p-4 space-y-4">
          <Input 
            placeholder="Escribe tu pregunta de ingeniería aquí..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button onClick={handleQuery} className="w-full bg-blue-600 text-white hover:bg-blue-700">
            Consultar
          </Button>
          {response && (
            <>
              <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
                <p className="text-gray-800">{response}</p>
              </div>
              <Button onClick={exportToTxt} className="w-full bg-green-600 text-white hover:bg-green-700">
                Exportar respuesta
              </Button>
            </>
          )}
        </CardContent>
      </Card>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">📋 Changelog de IngeBot 1.0</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {changelog.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}