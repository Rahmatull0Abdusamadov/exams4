import React from 'react'
import img from '../../assets/Group 990.png'
import { useTranslation } from 'react-i18next';
import img1 from '../../assets/image 29.png'
import img2 from '../../assets/photo_2025-03-01_22-19-23.jpg'
import img3 from '../../assets/Group 385.png'
import img4 from '../../assets/verified-account 1.png'
import img5 from '../../assets/Group 408.png'
import img6 from '../../assets/wifi 1.png'
import img7 from '../../assets/Group 775.png'
import img8 from '../../assets/Group 370.png'
import img9   from '../../assets/1231242112 1 (1).png'
import img10 from '../../assets/Ellipse 311 (1).png'
import img11 from '../../assets/information 1.png'
const Buyaccount = () => {
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
      <div className="main3">
        <h1>{t("Home.9")}</h1>
      </div>
      <div className="main4">
        <div className="main5">
            <h1>Americas</h1>
            <img src={img1} alt="" />
            <p>Amazon.com</p>
            <p>Amazon.ca</p>
            <p>Amazon.com.mx</p>
            <p>Amazon.com.br</p>
        </div>
        <div className="main5">
            <h1>Europe</h1>
            <img src={img1} alt="" />
            <p>Amazon.com</p>
            <p>Amazon.ca</p>
            <p>Amazon.com.mx</p>
            <p>Amazon.com.br</p>
        </div>
        <div className="main5">
            <h1>Asia-Pacific</h1>
            <img src={img1} alt="" />
            <p>Amazon.com</p>
            <p>Amazon.ca</p>
            <p>Amazon.com.mx</p>
            <p>Amazon.com.br</p>
        </div>
      </div>
      <div className="main6">
        <div className="main7">
            <h1>13</h1>
            <p>{t("Home.10")}</p>
        </div>
        <div className="main7">
            <h1>175+</h1>
            <p>{t("Home.10")}</p>
        </div>
        <div className="main7">
            <h1>180+</h1>
            <p>{t("Home.10")}</p>
        </div>
        <div className="main7">
            <h1>30+</h1>
            <p>{t("Home.10")}</p>
        </div>
      </div>
   <div className='img'>
   <h1>List of aged accounts for sale</h1>
   <img src={img2} alt="" />
   </div>
   <div className="main8">
    <img className='img1' src={img3} alt="" /> 
    <div className="main9">
      <h1 className='h1'>{t("Home.12")}</h1>
       <div className="main10">
        <img src={img4} alt="" />
        <div className="main11">
          <h1>{t("Home.13")}</h1>
          <p>{t("Home.14")}</p>
        </div>
      </div>
      <div className="main10">
        <img src={img4} alt="" />
        <div className="main11">
          <h1>{t("Home.13")}</h1>
          <p>{t("Home.14")}</p>
        </div>
      </div>
      <div className="main10">
        <img src={img4} alt="" />
        <div className="main11">
          <h1>{t("Home.13")}</h1>
          <p>{t("Home.14")}</p>
        </div>
      </div>
    </div>
   </div>
   <div className="main14">
    <div className="main12">
      <h1 className='h1'>{t("Home.15")}</h1>
      <p className='p'>{t("Home.16")}</p>
       <div className="main13">
        <img src={img6} alt="" />
        <div className="main11">
          <h1>{t("Home.17")}</h1>
          <p>{t("Home.14")}</p>
        </div>
      </div>
      <div className="main13">
        <img src={img6} alt="" />
        <div className="main11">
          <h1>{t("Home.17")}</h1>
          <p>{t("Home.14")}</p>
        </div>
      </div>
      <div className="main13">
        <img src={img6} alt="" />
        <div className="main11">
          <h1>{t("Home.17")}</h1>
          <p>{t("Home.14")}</p>
        </div>
      </div>
    </div>
    <img className='img1' src={img5} alt="" /> 
   </div>
   <div className="main15">
    <img src={img7} alt="" />
    <div className="main16">
      <h1 className='h2'>{t("Home.18")}</h1>
      <h3 className='h3'>{t("Home.19")}</h3>
      <p className='p1'>{t("Home.20")}</p>
      <h3 className='h3'>{t("Home.19")}</h3>
      <p className='p1'>{t("Home.20")}</p>
    </div>
   </div>
   <div className="main17">
    <h1>{t("Home.21")}</h1>
    <select name="" id="">
      <option value="">{t("Home.22")}</option>
    </select>
    <select name="" id="">
      <option value="">{t("Home.23")}</option>
    </select>
   </div>
   <div className="main18">
     <h1>{t("Home.24")}</h1>
     <div className="main19">
      <div className="main20">
        <img src={img8} alt="" />
        <h1>{t("Home.25")}</h1>
        <p>{t("Home.26")}</p>
      </div>
      <div className="main20">
        <img src={img8} alt="" />
        <h1>{t("Home.25")}</h1>
        <p>{t("Home.26")}</p>
      </div>
      <div className="main20">
        <img src={img8} alt="" />
        <h1>{t("Home.25")}</h1>
        <p>{t("Home.26")}</p>
      </div>  
      <div className="main20">
        <img src={img8} alt="" />
        <h1>{t("Home.25")}</h1>
        <p>{t("Home.26")}</p>
      </div>
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
   <div className="m4">
    <h1>FAQ</h1>
    <div className="m6">
      <select className='select' name="" id="">
        <img src={img11} alt="" />
        <option value="">{t("Home.37")}</option>
      </select>
      <select className='select' name="" id="">
        <img src={img11} alt="" />
        <option value="">{t("Home.37")}</option>
      </select>
      <select className='select' name="" id="">
        <img src={img11} alt="" />
        <option value="">{t("Home.37")}</option>
      </select>
      <select className='select' name="" id="">
        <img src={img11} alt="" />
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

export default Buyaccount
