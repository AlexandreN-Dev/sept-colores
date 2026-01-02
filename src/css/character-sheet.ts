import { rgbString } from '@site/src/css/color-palette';

export const generateFicheStyles = (palette: ReturnType<typeof getColorPalette>) => `
  @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital@0;1&family=Playfair+Display:wght@700&display=swap');
  
  .fiche-container {
    width: 100%;
    height: 100%;
    max-width: none;
    max-height: 100vh;
    margin: 0;
    perspective: 1000px;
    animation: slideUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .fiche-bg {
    background: linear-gradient(135deg, ${palette.bgLight} 0%, ${palette.bgDark} 50%, ${palette.bgLight} 100%);
    border: 4px solid ${palette.primary};
    box-shadow: 
      0 30px 80px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.8),
      inset 0 -2px 4px rgba(0, 0, 0, 0.05);
    position: relative;
    overflow: hidden;
    width: 95vw;
    height: 95vh;
    max-width: 900px;
    display: flex;
    flex-direction: column;
  }

  .fiche-bg::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      repeating-linear-gradient(90deg, transparent, transparent 2px, ${rgbString(palette.primary, 0.03)} 2px, ${rgbString(palette.primary, 0.03)} 4px),
      url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" seed="2"/></filter><rect width="100" height="100" fill="${palette.bgLight.replace('#', '%23')}" filter="url(%23noise)" opacity="0.25"/></svg>');
    pointer-events: none;
    mix-blend-mode: multiply;
  }

  .fiche-bg::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 15% 25%, ${rgbString(palette.primary, 0.08)} 0%, transparent 50%),
      radial-gradient(circle at 85% 75%, ${rgbString(palette.primary, 0.06)} 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.008) 100%);
    pointer-events: none;
  }

  .header {
    background: ${palette.gradient};
    color: #ffffff;
    padding: 18px 16px;
    position: relative;
    border-bottom: 2px solid ${palette.primary};
    overflow: hidden;
    box-shadow: inset 0 1px 3px rgba(255, 255, 255, 0.3);
    flex-shrink: 0;
  }

  .header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
  }

  .header::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 10%;
    right: 10%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 15px;
    position: relative;
    z-index: 2;
  }

  .nom {
    font-family: 'Playfair Display', serif;
    font-size: 28px;
    font-weight: 700;
    margin: 0;
    color: #ffffff;
    letter-spacing: 1px;
    line-height: 1.1;
    flex: 1;
    text-shadow: 
      1px 1px 0 rgba(0, 0, 0, 0.3),
      0 0 15px rgba(0, 0, 0, 0.2);
    position: relative;
  }

  .nom::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 80%;
    height: 2px;
    background: linear-gradient(90deg, ${palette.secondary}, transparent);
    opacity: 0.8;
  }

  .chance-box {
    background: ${rgbString(palette.primary, 0.2)};
    border: 2px solid ${palette.accent};
    border-radius: 8px;
    padding: 9px 14px;
    text-align: center;
    backdrop-filter: blur(10px);
    box-shadow: inset 0 1px 3px rgba(255, 255, 255, 0.6);
    position: relative;
    flex-shrink: 0;
  }

  .chance-label {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: #ffffff;
    margin-bottom: 3px;
    text-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
    font-weight: 700;
  }

  .chance-value {
    font-family: 'Playfair Display', serif;
    font-size: 32px;
    font-weight: 700;
    color: ${palette.secondary};
    line-height: 1;
    text-shadow: 
      0 2px 4px rgba(0, 0, 0, 0.15),
      1px 1px 0 rgba(0, 0, 0, 0.1);
    position: relative;
  }

  .body {
    padding: 16px 12px;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
    background: linear-gradient(135deg, ${rgbString(palette.primary, 0.02)} 0%, transparent 100%);
    gap: 12px;
  }

  .traits-wrapper {
    flex: 1;
    display: flex;
    gap: 12px;
    overflow: hidden;
    min-height: 0;
  }

  .traits-container {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px 16px;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
    z-index: 1;
    padding-right: 4px;
  }

  .traits-container::-webkit-scrollbar {
    width: 6px;
  }

  .traits-container::-webkit-scrollbar-track {
    background: ${rgbString(palette.border, 0.1)};
    border-radius: 3px;
  }

  .traits-container::-webkit-scrollbar-thumb {
    background: ${rgbString(palette.border, 0.3)};
    border-radius: 3px;
  }

  .traits-container::-webkit-scrollbar-thumb:hover {
    background: ${rgbString(palette.border, 0.5)};
  }

  .image-section {
    flex-shrink: 0;
    width: 360px;
    height: 400px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 8px 0;
  }

  .image-container {
    width: 340px;
    height: 440px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    opacity: 0.55;
    pointer-events: none;
  }

  .trait {
    margin-bottom: 12px;
    padding-bottom: 10px;
    border-bottom: 1px dashed ${palette.border};
    animation: fadeIn 0.6s ease-out;
    animation-fill-mode: both;
    position: relative;
  }

  .trait::before {
    content: '';
    position: absolute;
    left: 0;
    top: -1px;
    width: 100%;
    height: 0.5px;
    background: linear-gradient(90deg, transparent, ${rgbString(palette.primary, 0.25)}, transparent);
    opacity: 0.4;
  }

  .trait::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, ${palette.border}, ${rgbString(palette.primary, 0.4)}, ${palette.border});
    opacity: 0.5;
  }

  .trait:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .trait:last-child::after {
    display: none;
  }

  .trait:nth-child(1) { animation-delay: 0.1s; }
  .trait:nth-child(2) { animation-delay: 0.2s; }
  .trait:nth-child(3) { animation-delay: 0.3s; }
  .trait:nth-child(4) { animation-delay: 0.4s; }
  .trait:nth-child(5) { animation-delay: 0.5s; }
  .trait:nth-child(6) { animation-delay: 0.6s; }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(-10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .trait-label {
    font-family: 'Playfair Display', serif;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    color: ${palette.secondary};
    margin-bottom: 3px;
    font-weight: 700;
    text-shadow: 0 1px 1px rgba(255, 255, 255, 0.6);
    position: relative;
    z-index: 2;
  }

  .personnage-image {
    display: none;
  }

  .image-frame {
    width: 120px;
    height: 120px;
    border: 3px solid ${palette.secondary};
    border-radius: 8px;
    background: linear-gradient(135deg, ${rgbString(palette.primary, 0.1)}, ${rgbString(palette.secondary, 0.05)});
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    box-shadow: 
      inset 0 2px 4px rgba(255, 255, 255, 0.4),
      0 4px 8px rgba(0, 0, 0, 0.1);
    position: relative;
  }

  .image-frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .image-placeholder {
    color: ${palette.border};
    font-size: 40px;
    opacity: 0.5;
  }

  .trait-value {
    font-family: 'Crimson Text', serif;
    font-size: 13px;
    color: ${palette.text};
    line-height: 1.4;
    font-style: normal;
    position: relative;
    z-index: 2;
    font-weight: 500;
  }

  .trait-value.italic {
    font-style: italic;
    color: #333333;
  }

  .placeholder {
    color: #999999;
    font-style: italic;
  }

  .footer {
    background: ${palette.gradient};
    color: #ffffff;
    text-align: center;
    font-size: 10px;
    letter-spacing: 0.5px;
    padding: 10px 12px;
    margin: 0 -12px -16px -12px;
    border-top: 2px solid ${palette.primary};
    position: relative;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    font-weight: 500;
    box-shadow: inset 0 -1px 3px rgba(0, 0, 0, 0.1);
    flex-shrink: 0;
  }

  .footer::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  }

  .footer::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  }

  .don-colore {
    grid-column: span 2;
    background: linear-gradient(135deg, ${rgbString(palette.accent, 0.12)} 0%, ${rgbString(palette.secondary, 0.08)} 100%);
    padding: 10px 12px !important;
    border-radius: 6px;
    border: 1.5px solid ${rgbString(palette.accent, 0.3)} !important;
    border-bottom: 1.5px solid ${rgbString(palette.accent, 0.3)} !important;
    margin-bottom: 8px !important;
    padding-bottom: 10px !important;
    position: relative;
    animation: glowIn 0.7s ease-out 0.6s both;
  }

  .don-colore::before {
    content: '';
    position: absolute;
    left: 0;
    top: -1px;
    width: 100%;
    height: 0.5px;
    background: linear-gradient(90deg, transparent, ${rgbString(palette.accent, 0.4)}, transparent);
    opacity: 0.6;
  }

  .don-colore::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, ${palette.accent}, ${rgbString(palette.accent, 0.5)}, ${palette.accent});
    opacity: 0.7;
  }

  .don-colore .trait-label {
    color: ${palette.accent};
    font-weight: 700;
  }

  .don-colore .trait-value {
    color: ${palette.primary};
    font-weight: 500;
  }

  @keyframes glowIn {
    from {
      opacity: 0;
      transform: translateX(-10px);
      background: linear-gradient(135deg, ${rgbString(palette.accent, 0)}, ${rgbString(palette.secondary, 0)});
    }
    to {
      opacity: 1;
      transform: translateX(0);
      background: linear-gradient(135deg, ${rgbString(palette.accent, 0.12)} 0%, ${rgbString(palette.secondary, 0.08)} 100%);
    }
  }

  /* Responsive pour tablets et petits écrans */
  @media (max-width: 768px) {
    .fiche-container {
      padding: 5px;
    }

    .fiche-bg {
      width: 100vw;
      height: 100vh;
      max-width: none;
      max-height: 100vh;
      border-radius: 0;
    }

    .header {
      padding: 15px 12px;
    }

    .header-content {
      gap: 10px;
    }

    .nom {
      font-size: 24px;
    }

    .chance-box {
      padding: 8px 12px;
    }

    .chance-label {
      font-size: 7px;
    }

    .chance-value {
      font-size: 28px;
    }

    .body {
      padding: 12px 10px;
    }

    .traits-wrapper {
      gap: 10px;
    }

    .traits-container {
      grid-template-columns: 1fr 1fr;
      gap: 10px 12px;
    }

    .image-section {
      width: 240px;
    }

    .image-container {
      width: 220px;
      height: 280px;
    }

    .trait {
      margin-bottom: 0;
      padding-bottom: 8px;
    }

    .trait-label {
      font-size: 10px;
    }

    .trait-value {
      font-size: 12px;
    }

    .footer {
      padding: 10px 10px;
      font-size: 9px;
      margin: 0 -10px -12px -10px;
    }
  }

  /* Responsive pour smartphone */
  @media (max-width: 480px) {
    .fiche-container {
      padding: 0;
    }

    .fiche-bg {
      width: 100vw;
      height: 100vh;
      max-width: 100vw;
      max-height: 100vh;
      border-radius: 0;
      border-width: 2px;
    }

    .header {
      padding: 14px 10px;
    }

    .header-content {
      flex-direction: column;
      gap: 6px;
    }

    .nom {
      font-size: 22px;
      margin-bottom: 3px;
      line-height: 1;
    }

    .nom::after {
      width: 100%;
    }

    .chance-box {
      align-self: flex-start;
      padding: 6px 10px;
    }

    .chance-label {
      font-size: 7px;
      letter-spacing: 0.8px;
    }

    .chance-value {
      font-size: 24px;
    }

    .body {
      padding: 10px 8px;
    }

    .traits-wrapper {
      flex-direction: column;
      gap: 0;
    }

    .traits-container {
      grid-template-columns: 1fr;
      gap: 0;
    }

    .image-section {
      width: 100%;
      height: 160px;
      border-top: 1px dashed ${palette.border};
      padding-top: 8px;
      margin-top: 8px;
    }

    .image-container {
      width: 140px;
      height: 160px;
      opacity: 0.4;
    }

    .trait {
      margin-bottom: 8px;
      padding-bottom: 6px;
    }

    .trait-label {
      font-size: 9px;
      letter-spacing: 0.8px;
      margin-bottom: 2px;
    }

    .trait-value {
      font-size: 11px;
      line-height: 1.3;
    }

    .footer {
      padding: 8px 8px;
      font-size: 8px;
      margin: 0 -8px -12px -8px;
    }

    .don-colore {
      grid-column: span 1;
    }
  }

  /* Très petit écran */
  @media (max-width: 360px) {
    .nom {
      font-size: 20px;
    }

    .chance-value {
      font-size: 22px;
    }

    .trait-label {
      font-size: 8px;
    }

    .trait-value {
      font-size: 10px;
    }

    .image-container {
      width: 120px;
      height: 150px;
    }
  }
`;