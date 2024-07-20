import React from "react";

function IntroSection() {
  return (
    <div className="bg-blue-800 text-white py-20 text-center">
      <h1 className="text-5xl font-bold mb-4">
        Bienvenue à notre Application de Livraison
      </h1>
      <p className="text-xl">
        La meilleure solution pour vos livraisons rapides et sécurisées.
      </p>
      <button className="mt-8 px-6 py-3 bg-white text-black  font-semibold rounded-lg shadow-md hover:bg-secondary transition duration-300">
        En savoir plus
      </button>
    </div>
  );
}

export default IntroSection;
