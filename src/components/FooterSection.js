import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function FooterSection() {
  return (
    <div className="bg-gray-800 text-white py-6 text-center">
      <div className="mb-4">
        <FaFacebook className="inline mx-2" />
        <FaTwitter className="inline mx-2" />
        <FaInstagram className="inline mx-2" />
      </div>
      <p>&copy; 2024 Livraison Rapide. Tous droits réservés.</p>
    </div>
  );
}

export default FooterSection;
