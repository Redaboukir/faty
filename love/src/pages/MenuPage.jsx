// src/pages/MenuPage.jsx
import React from "react";
import Menu from "../components/Menu"; // Importer le composant Menu

const MenuPage = () => {
  return (
    <div>
      <h1>Bienvenue dans votre espace</h1>
      <Menu /> {/* Afficher le menu ici */}
    </div>
  );
};

export default MenuPage;
