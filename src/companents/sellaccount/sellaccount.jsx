import React from 'react'
import { useTranslation } from 'react-i18next';
import img from '../../assets/Group 990.png'
import img1 from '../../assets/Group 1015.png'
import img2 from '../../assets/message 1.png'
import img3 from '../../assets/Group 410.png'
import img4 from '../../assets/Group 1013.png'
import img5 from '../../assets/Group 509.png' 
import img6 from '../../assets/Group 413.png'
import img7 from '../../assets/Group 414.png'
import img8 from '../../assets/Group 415.png'
import img9 from '../../assets/Group 416.png'
import img10 from '../../assets/Group 509.png'
import img21   from '../../assets/1231242112 1 (1).png'
import img22 from '../../assets/Ellipse 311 (1).png'
import img23 from '../../assets/information 1.png'
const Sellaccount = () => {
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
      <div className="a">
        <div className="b">
         <img src={img1} alt="" />
        </div>
        <div className="n">
        <h1 >{t("Home.38")}</h1>
         <div className="a1">
          <img src={img2} alt="" />
            <div className="a2">
              <h1>{t("Home.39")}</h1>
              <p>{t("Home.40")}</p> 
            </div>
         </div>
         <div className="a1">
          <img src={img2} alt="" />
          <div className="a2">
            <h1>{t("Home.39")}</h1>
            <p>{t("Home.40")}</p>
          </div>
         </div>
         <div className="a1">
          <img src={img2} alt="" />
          <div className="a2">
            <h1>{t("Home.39")}</h1>
            <p>{t("Home.40")}</p>
          </div>
         </div>
        </div>
        
      </div>
      <div className="ab2">
        <div className="ab3">
              <h1>{t("Home.41")}</h1>
              <p>{t("Home.42")}</p>
              <h3>1 :{t("Home.43")}</h3>
              <h3>2:{t("Home.46")}</h3>
              <h3>3:{t("Home.45")}</h3>
              <h3>4:{t("Home.44")}</h3>
        </div>
        <img className='imgs' src={img3} alt="" />
      </div>
      <div className="ab5">
      <img className='imgs' src={img4} alt="" />
        <div className="ab3">
              <h1>{t("Home.47")}</h1>
              <h3>1 :{t("Home.48")}</h3>
              <h3>2:{t("Home.49")}</h3>
              <h3>3:{t("Home.50")}</h3>
              <h3>4:{t("Home.51")}</h3>
              <h3>5:{t("Home.52")}</h3>
              <h3>6:{t("Home.53")}</h3>
        </div>
      </div>
      <div className="ba1">
        <h1>{t("Home.54")}</h1>
        <p>{t("Home.55")}</p>
        <div className="ba2">
            <div className="ba3">
               <img src={img5} alt="" />
               <h3>{t("Home.56")}</h3>
            </div>
            <div className="ba3">
               <img src={img6} alt="" />
               <h3>{t("Home.56")}</h3>
            </div>
            <div className="ba3">
               <img src={img7} alt="" />
               <h3>{t("Home.56")}</h3>
            </div>
            <div className="ba3">
               <img src={img8} alt="" />
               <h3>{t("Home.56")}</h3>
            </div>
            <div className="ba3">
               <img src={img9} alt="" />
               <h3>{t("Home.56")}</h3>
            </div>
            <div className="ba3">
               <img src={img10} alt="" />
               <h3>{t("Home.56")}</h3>
            </div>
        </div>
      </div>
      <div className="main23">
    <img src={img21} alt="" />
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
      <img src={img22} alt="" />
     <div className="m2">
     <p>{t("Home.34")}</p>
     <h4>Steven Cody</h4>
     </div>
    </div>
    <div className="m5">
      <img src={img22} alt="" />
     <div className="m2">
     <p>{t("Home.34")}</p>
     <h4>Steven Cody</h4>
     </div>
    </div>
</div>
   </div>
   <div className="m4">
    <h1>FAQ</h1>
    <div className="m6">
      <select className='select' name="" id="">
        <img src={img23} alt="" />
        <option value="">{t("Home.37")}</option>
      </select> 
    </div>
   </div>
   <div className="x1">
    <h3>{t("Home.84")}</h3>
   </div>
    </div>
  )
}

export default Sellaccount
