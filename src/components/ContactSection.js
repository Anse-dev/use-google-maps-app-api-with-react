import React from "react";

function ContactSection() {
  return (
    <div className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-4">Contactez-nous</h2>
      <p className="text-lg mb-8">
        Pour plus d'informations, n'hésitez pas à nous contacter.
      </p>
      <form className="max-w-md mx-auto">
        <input
          type="text"
          placeholder="Votre nom"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Votre email"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Votre message"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default ContactSection;
