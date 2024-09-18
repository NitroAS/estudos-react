import React from 'react';
import { useTranslation } from 'react-i18next';

function IdiomaComponente() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Altera o idioma
  };

  return (
    <div>
      <h1>{t('welcome')}</h1> 
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('pt')}>Português</button>
    </div>
  );
}

export default IdiomaComponente;
