import React from 'react'
import { useTranslation } from 'react-i18next';
import img1 from '../../../assets/Group 97.png'
import img from '../../../assets/MYbhN8KaaEc (6).png'

const Aboutblog = () => {
    const {t, i18n} = useTranslation();
    function TranslateClick(lang) {
        i18n.changeLanguage(lang);
    }
  return (  
    <div>
        <div className="r2">
        <h1>{t("Home.63")}</h1>
        <div className="navig2">
            <img src={img1} alt="" />
            <div className="navig3">
              <h4>AMAZMARKETS</h4>
              <p>October 2, 2019</p>
            </div>
          </div>
          <h1 className='l1'>{t("Home.70")}</h1>
        </div>
      <div className="r1">
          <img src={img} alt="" />
      </div>
      <div className="r4">
        <h1>{t("Home.71")}</h1>
        <p>{t("Home.72")}</p>
        <h1>{t("Home.73")}</h1>
        <p>{t("Home.74")}</p>
        <button>{t("Home.75")}</button>
      </div>
      <div className="x1">
    <h3>{t("Home.84")}</h3>
   </div>
    </div>
  )
}

export default Aboutblog
