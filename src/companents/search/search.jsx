import React from 'react'
import img from '../../assets/Group 990.png'
import img1 from '../../assets/Group 762.png'
import img2 from '../../assets/photo_2020-01-21_19-07-40.png'
import img4 from '../../assets/Group 763.svg'
import img5 from '../../assets/image 20 (1).png'
import img6 from '../../assets/Group 1002.png'
import img7 from '../../assets/Group 1004.png'
import img8 from '../../assets/Group 1003.png'
import img9 from '../../assets/Group 1014.png'
import img10 from '../../assets/Group 324.png'
import img11   from '../../assets/1231242112 1 (1).png'
import img12 from '../../assets/Ellipse 311 (1).png'
import img13 from '../../assets/information 1.png'
import { useTranslation } from 'react-i18next';

const Search = () => {
    const {t, i18n} = useTranslation();
  function TranslateClick(lang) {
      i18n.changeLanguage(lang);
  }
  return (
    <div>
      <div className="main">
        <div className="main1">
           <h1>{t("Home.6")}</h1>
           <p>{t("Home.7")}</p>
           <button>{t("Home.8")}</button>
        </div>
        <div className="main2">
           <img src={img} alt="" />
        </div>
      </div>
      <div className="f1">
        <h1>{t("Home.85")}</h1>
        <img src={img1} alt="" />
      </div>
      <div className="f2">
    <img className='nv' src={img2} alt="" />
    <div className="main24">
     <h1>{t("Home.86")}</h1>
     <p>{t("Home.87")}</p>
     <p>{t("Home.29")}</p>
     <input type="text" placeholder='info@gmail.com' />
     <p>{t("Home.29")}</p>
     <input type="text" placeholder='info@gmail.com' />
     <button>{t("Home.32")}</button>
    </div>
   </div>
   <div className="f3">
    <div className="nv1">
    <div className="main24">
     <h1>{t("Home.86")}</h1>
     <p>{t("Home.87")}</p>
     <button>{t("Home.32")}</button>
    </div>
    </div>
    <img className='nv' src={img4} alt="" />
   </div>
   <div className="f10">
    <div className="nv1">
    <div className="main24">
     <h1>{t("Home.88")}</h1>
     <p>{t("Home.89")}</p>
    </div>
    </div>
    <img className='nv' src={img5} alt="" />
   </div>
   <div className="f11">
    <h1>{t("Home.90")}</h1>
    <p>{t("Home.91")}</p>
   </div>
   <div className="f12">
    <div className="f13">
        <img src={img6} alt="" />
        <p>{t("Home.92")}</p>
    </div>
    <div className="f13">
        <img src={img7} alt="" />
        <p>{t("Home.92")}</p>
    </div>
    <div className="f13">
        <img src={img8} alt="" />
        <p>{t("Home.92")}</p>
    </div>
   </div>
   <div className="f15">
    <img src={img9} alt="" />
    <div className="f16">
        <h1>{t("Home.93")}</h1>
        <p>{t("Home.94")}</p>
    </div>
   </div>
      <div className="f2">
    <div className="main24">
     <h1>{t("Home.86")}</h1>
     <p>{t("Home.87")}</p>
     <p>{t("Home.29")}</p>
     <input type="text" placeholder='info@gmail.com' />
     <p>{t("Home.29")}</p>
     <input type="text" placeholder='info@gmail.com' />
     <button>{t("Home.32")}</button>
    </div>
    <img className='nvs' src={img10} alt="" />
   </div>
   <div className="m">
    <h1>{t("Home.33")}</h1>
<div className="m3">
<div className="m1">
      <img src={img12} alt="" />
     <div className="m2">
     <p>{t("Home.34")}</p>
     <h4>Steven Cody</h4>
     </div>
    </div>
    <div className="m5">
      <img src={img12} alt="" />
     <div className="m2">
     <p>{t("Home.34")}</p>
     <h4>Steven Cody</h4>
     </div>
    </div>
</div>
   </div>
   <div className="x1">
    <h3>{t("Home.84")}</h3>
   </div>
    </div>
  )
}

export default Search
