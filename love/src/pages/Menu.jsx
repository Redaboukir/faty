import React from 'react';

const Menu = () => {
  const startDate = new Date('2025-01-02');
  const currentDate = new Date();
  const daysTogether = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      {/* Galerie */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 w-full max-w-xl">
        <div className="flex justify-center items-center bg-blue-500 p-4 rounded-full text-white text-lg">
          Icon 1
        </div>
        <div className="flex justify-center items-center bg-green-500 p-4 rounded-full text-white text-lg">
          Icon 2
        </div>
        <div className="flex justify-center items-center bg-red-500 p-4 rounded-full text-white text-lg">
          Icon 3
        </div>
        <div className="flex justify-center items-center bg-yellow-500 p-4 rounded-full text-white text-lg">
          Icon 4
        </div>
      </div>

      {/* Lettre */}
      <div className="bg-white p-6 mb-8 shadow rounded-lg w-full max-w-sm text-center">
        <p className="text-xl">Une lettre spéciale pour toi...</p>
      </div>

      {/* Compteur */}
      <div className="bg-white p-6 mb-8 shadow rounded-lg w-full max-w-sm text-center">
        <p className="text-xl">Nous sommes ensemble depuis {daysTogether} jours.</p>
      </div>

      {/* Section à définir */}
      <div className="bg-white p-6 shadow rounded-lg w-full max-w-sm text-center">
        <p>Section 4 - À définir !</p>
      </div>
    </div>
  );
};

export default Menu;
