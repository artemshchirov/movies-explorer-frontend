import { useState } from 'react';
import i18next from 'i18next';
import './SelectLang.css';

function SelectLang({ languageLocal }) {
  const { lng } = languageLocal.load();
  const [currentLang, setCurrentLang] = useState(lng);

  const handleChangeLang = (evt) => {
    const { value } = evt.target;
    i18next.changeLanguage(value);
    languageLocal.save({ lng: value });
    setCurrentLang(value);
  };

  return (
    <select value={currentLang} onChange={(evt) => handleChangeLang(evt)}>
      <option value="en">EN</option>
      <option value="ru">RU</option>
    </select>
  );
}

export default SelectLang;
