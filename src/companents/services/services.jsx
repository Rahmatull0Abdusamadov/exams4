import React from 'react'
import { useTranslation } from 'react-i18next';
import img from '../../assets/Group 991.png'
import img1 from '../../assets/analysis 1.png'
import img2 from '../../assets/Group 655.png'
import img3 from '../../assets/account 1.png'
import img4 from '../../assets/message 1.png'
import img9   from '../../assets/1231242112 1 (1).png'
import img10 from '../../assets/Ellipse 311 (1).png'
import img11 from '../../assets/information 1.png'
const Services = () => {
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
      <div className="g1">
        <h1>{t("Home.76")}</h1>
        <div className="g2">
         <div className="g3">
         <img src={img1} alt="" />
         <h1>{t("Home.77")}</h1>
         <p>{t("Home.78")}</p>
         <p>{t("Home.78")}</p>
         </div>
         <div className="g3">
         <img src={img1} alt="" />
         <h1>{t("Home.77")}</h1>
         <p>{t("Home.78")}</p>
         <p>{t("Home.78")}</p>
         </div>
         <div className="g3">
         <img src={img1} alt="" />
         <h1>{t("Home.77")}</h1>
         <p>{t("Home.78")}</p>
         <p>{t("Home.78")}</p>
         </div>
        </div>
        <div className="g2">
         <div className="g3">
         <img src={img1} alt="" />
         <h1>{t("Home.77")}</h1>
         <p>{t("Home.78")}</p>
         <p>{t("Home.78")}</p>
         </div>
         <div className="g3">
         <img src={img1} alt="" />
         <h1>{t("Home.77")}</h1>
         <p>{t("Home.78")}</p>
         <p>{t("Home.78")}</p>
         </div>
         <div className="g3">
         <img src={img1} alt="" />
         <h1>{t("Home.77")}</h1>
         <p>{t("Home.78")}</p>
         <p>{t("Home.78")}</p>
         </div>
        </div>
      </div>
      <div className="hk1">
        <img className='imk' src={img2}  alt="" />
        <div className="hk2">
          <h1>{t("Home.79")}</h1>
         <div className="hk4">
         <div className="hk3">
            <img src={img3} alt="" />
            <h4>{t("Home.80")}</h4>
          </div>
          <div className="hk3">
            <img src={img3} alt="" />
            <h4>{t("Home.80")}</h4>
          </div>
         </div>
         <div className="hk4">
         <div className="hk3">
            <img src={img3} alt="" />
            <h4>{t("Home.80")}</h4>
          </div>
          <div className="hk3">
            <img src={img3} alt="" />
            <h4>{t("Home.80")}</h4>
          </div>
         </div>
         <div className="hk4">
         <div className="hk3">
            <img src={img3} alt="" />
            <h4>{t("Home.80")}</h4>
          </div>
          <div className="hk3">
            <img src={img3} alt="" />
            <h4>{t("Home.80")}</h4>
          </div>
         </div>
         <div className="hk4">
         <div className="hk3">
            <img src={img3} alt="" />
            <h4>{t("Home.80")}</h4>
          </div>
          <div className="hk3">
            <img src={img3} alt="" />
            <h4>{t("Home.80")}</h4>
          </div>
         </div>
         <div className="hk4">
         <div className="hk3">
            <img src={img3} alt="" />
            <h4>{t("Home.80")}</h4>
          </div>
          <div className="hk3">
            <img src={img3} alt="" />
            <h4>{t("Home.80")}</h4>
          </div>
         </div>
        </div>
      </div>
      <div className="lk1">
        <h1>{t("Home.81")}</h1>
      </div>
      <div className="lk2">
          <div className="lk3">
            <img src={img4} alt="" />
            <h1>{t("Home.82")}</h1>
            <p>{t("Home.83")}</p>
          </div>
          <div className="lk3">
            <img src={img4} alt="" />
            <h1>{t("Home.82")}</h1>
            <p>{t("Home.83")}</p>
          </div>
          <div className="lk3">
            <img src={img4} alt="" />
            <h1>{t("Home.82")}</h1>
            <p>{t("Home.83")}</p>
          </div>
          <div className="lk3">
            <img src={img4} alt="" />
            <h1>{t("Home.82")}</h1>
            <p>{t("Home.83")}</p>
          </div>
      </div>
      <div className="main23">
    <img src={img9} alt="" />
    <div className="main24">
     <h1>{t("Home.27")}</h1>
     <p>{t("Home.28")}</p>
     <p>{t("Home.29")}</p>
     <input type="text" placeholder='info@gmail.com' />
     <p>{t("Home.29")}</p>
     <input type="text" placeholder='info@gmail.com' />
     <p>{t("Home.29")}</p>
     <input type="text" placeholder='info@gmail.com' />
     <button>{t("Home.32")}</button>
    </div>
   </div>
   <div className="m">
    <h1>{t("Home.33")}</h1>
<div className="m3">
<div className="m1">
      <img src={img10} alt="" />
     <div className="m2">
     <p>{t("Home.34")}</p>
     <h4>Steven Cody</h4>
     </div>
    </div>
    <div className="m5">
      <img src={img10} alt="" />
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

export default Services
