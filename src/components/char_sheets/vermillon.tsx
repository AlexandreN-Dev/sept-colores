import React from 'react';
import { getColorPalette } from '@site/src/css/color-palette';
import { generateFicheStyles } from '@site/src/css/character-sheet';

interface Personnage {
  nom: string;
  chance: number;
  equipe: string;
  origine: string;
  traitsParticuliers: string;
  essence: string;
  excentricite: string;
  donColore?: string;
  couleur?: string;
}

export default function VermillonContent() {
  const couleur = 'rouge';
  const palette = getColorPalette(couleur);

  const pnj: Personnage = {
    nom: "Charles Vermillon",
    chance: 4,
    equipe: "Maire de Septcolores",
    origine: "Ancien psychiatre, il a perdu ses couleurs suite au suicide de l'un de ses patients",
    traitsParticuliers: "S'inquiète de tout, tout le temps",
    essence: "Franc - Direct",
    excentricite: "Préfère l'honnêté brutale à une gentillesse mensongère",
    donColore: "A la capacité de faire apparaître le journal de demain, dans ses mains.",
    couleur,
  };

  return (
    <div style={{
      minHeight: '100vh',
      height: '100vh',
      width: '100vw',
      margin: 0,
      padding: 0,
      background: palette.background,
      fontFamily: '"Garamond", "Georgia", serif',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
      <style>{generateFicheStyles(palette)}</style>

      <div className="fiche-container">
<div className="fiche-bg">
          <div className="header">
            <div className="header-content">
              <h1 className="nom">{pnj.nom}</h1>
              <div className="chance-box">
                <div className="chance-label">Chance</div>
                <div className="chance-value">{pnj.chance}</div>
              </div>
            </div>
          </div>

          <div className="body">
            <div className="traits-wrapper">
              <div className="traits-container">
                <div className="trait">
                  <div className="trait-label">✦ Équipe</div>
                  <div className="trait-value">{pnj.equipe}</div>
                </div>

                <div className="trait">
                  <div className="trait-label">◆ Origine</div>
                  <div className="trait-value">
                    {pnj.origine === 'XXX' ? (
                      <span className="placeholder">{pnj.origine}</span>
                    ) : (
                      pnj.origine
                    )}
                  </div>
                </div>

                <div className="trait">
                  <div className="trait-label">✦ Traits particuliers</div>
                  <div className="trait-value">
                    {pnj.traitsParticuliers === 'XXX' ? (
                      <span className="placeholder">{pnj.traitsParticuliers}</span>
                    ) : (
                      pnj.traitsParticuliers
                    )}
                  </div>
                </div>

                <div className="trait">
                  <div className="trait-label">◆ Essence</div>
                  <div className="trait-value italic">
                    {pnj.essence === 'XXX' ? (
                      <span className="placeholder">{pnj.essence}</span>
                    ) : (
                      pnj.essence
                    )}
                  </div>
                </div>

                <div className="trait">
                  <div className="trait-label">✦ Excentricité</div>
                  <div className="trait-value">
                    {pnj.excentricite === 'XXX' ? (
                      <span className="placeholder">{pnj.excentricite}</span>
                    ) : (
                      pnj.excentricite
                    )}
                  </div>
                </div>

                <div className="trait">
                  <div className="trait-label">✦ Don Coloré</div>
                  <div className="trait-value">
                    {pnj.donColore && (
                      <div className="trait don-colore">
                        <div className="trait-label">✨ Demain à la Une</div>
                        <div className="trait-value">
                          {pnj.donColore}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="image-section">
                <div className="image-container" style={{
                  backgroundImage: "url('/img/Persos/PNJs/Vermillon.png')"
                }} />
              </div>
            </div>

            <div className="footer">
              Fiche de personnage · JDR
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}