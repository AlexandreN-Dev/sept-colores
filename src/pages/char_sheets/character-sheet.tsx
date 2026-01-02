import React from 'react';
import { getColorPalette, rgbString } from '@site/src/css/color-palette';

interface PersonnageData {
  nom: string;
  chance: number;
  equipe: string;
  origine: string;
  traitsParticuliers: string;
  essence: string;
  excentricite: string;
  donColore?: string;
  donNom?: string;
  imagePath: string;
  couleur: string;
}

interface PersonnageFicheProps {
  personnage: PersonnageData;
}

const generateStyles = (palette: ReturnType<typeof getColorPalette>) => `
  @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital@0;1&family=Playfair+Display:wght@700&display=swap');
  /* ... tout le CSS identique ... */
`;

export default function PersonnageFiche({ personnage }: PersonnageFicheProps) {
  const palette = getColorPalette(personnage.couleur);

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
      <style>{generateStyles(palette)}</style>

      <div className="fiche-container">
        <div className="fiche-bg">
          <div className="header">
            <div className="header-content">
              <h1 className="nom">{personnage.nom}</h1>
              <div className="chance-box">
                <div className="chance-label">Chance</div>
                <div className="chance-value">{personnage.chance}</div>
              </div>
            </div>
          </div>

          <div className="body">
            <div className="traits-wrapper">
              <div className="traits-container">
                <div className="trait">
                  <div className="trait-label">✦ Équipe</div>
                  <div className="trait-value">{personnage.equipe}</div>
                </div>

                <div className="trait">
                  <div className="trait-label">◆ Origine</div>
                  <div className="trait-value">
                    {personnage.origine === 'XXX' ? (
                      <span className="placeholder">{personnage.origine}</span>
                    ) : (
                      personnage.origine
                    )}
                  </div>
                </div>

                <div className="trait">
                  <div className="trait-label">✦ Traits particuliers</div>
                  <div className="trait-value">
                    {personnage.traitsParticuliers === 'XXX' ? (
                      <span className="placeholder">{personnage.traitsParticuliers}</span>
                    ) : (
                      personnage.traitsParticuliers
                    )}
                  </div>
                </div>

                <div className="trait">
                  <div className="trait-label">◆ Essence</div>
                  <div className="trait-value italic">
                    {personnage.essence === 'XXX' ? (
                      <span className="placeholder">{personnage.essence}</span>
                    ) : (
                      personnage.essence
                    )}
                  </div>
                </div>

                <div className="trait">
                  <div className="trait-label">✦ Excentricité</div>
                  <div className="trait-value">
                    {personnage.excentricite === 'XXX' ? (
                      <span className="placeholder">{personnage.excentricite}</span>
                    ) : (
                      personnage.excentricite
                    )}
                  </div>
                </div>

                <div className="trait">
                  <div className="trait-label">✦ Don Coloré</div>
                  <div className="trait-value">
                    {personnage.donColore && (
                      <div className="trait don-colore">
                        <div className="trait-label">✨ {personnage.donNom}</div>
                        <div className="trait-value">
                          {personnage.donColore}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="image-section">
                <div 
                  className="image-container"
                  style={{
                    backgroundImage: `url('${personnage.imagePath}')`
                  }}
                />
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