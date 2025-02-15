import { useState } from "react";
import envelopeImg from "/images/envelope.png"; // Assure-toi que le chemin est correct
import "./Mail.css";

const Mail = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLetter = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mail-container" onClick={toggleLetter}>
      {/* Enveloppe */}
      <div className={`envelope ${isOpen ? "open" : ""}`}>
        <img src={envelopeImg} alt="Enveloppe" className="envelope-img" />
      </div>

      {/* Lettre */}
      <div className={`letter ${isOpen ? "visible" : ""}`}>
        <p><strong>Mon amour,</strong></p>
        <p>
          Si tu es ici, c’est que quelque chose ne va pas trop, que tu as besoin de réconfort, ou que je te manque plus que d’habitude.
          Alors, avant tout, respire un grand coup et souviens-toi d’une chose essentielle : je suis là, avec toi, même si tu ne peux pas me voir ou me toucher à cet instant.
        </p>
        <p>
          Il y aura des jours compliqués, des moments où tout semble lourd, où le doute s’invite sans prévenir. Peut-être qu’on aura des petits accrochages,
          peut-être que la distance sera pesante, peut-être que le monde autour te fatiguera. Mais à travers tout ça, une seule chose restera inébranlable : mon amour pour toi.
        </p>
        <p>
          Si je pouvais être là en ce moment, je te prendrais dans mes bras, je te regarderais droit dans les yeux et je te rappellerais à quel point tu comptes pour moi.
          Mais comme cette lettre est mon messager, laisse-moi te dire ceci :
        </p>
        <p style={{ fontStyle: "italic", fontWeight: "bold" }}>
          Tu es forte. Tu es incroyable. Tu es la plus belle chose qui me soit arrivée.
        </p>
        <p>
          Quand ça ne va pas, souviens-toi de nos rires, de nos moments à deux, de tout ce qu’on construit jour après jour. Rien ne peut effacer ça. Rien ne peut briser ce lien qui nous unit.
        </p>
        <p>
          Alors, sèche tes larmes si elles sont là, repose ton cœur s'il est fatigué, et rappelle-toi que chaque difficulté est passagère. Moi, je reste, toujours.
        </p>
        <p style={{ textAlign: "right", marginTop: "20px", fontStyle: "italic" }}>
          Ton R, toujours avec toi
        </p>
      </div>
    </div>
  );
};

export default Mail;
