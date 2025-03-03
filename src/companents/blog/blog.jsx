import React from 'react'
import { useTranslation } from 'react-i18next';
import img from '../../assets/MYbhN8KaaEc.png'
import img1 from '../../assets/Group 97.png'
import img2 from '../../assets/MYbhN8KaaEc (2).png'
import img3 from '../../assets/MYbhN8KaaEc (1).png'
import img4 from '../../assets/MYbhN8KaaEc (5).png'
import img5 from '../../assets/MYbhN8KaaEc (4).png'
import img6 from '../../assets/MYbhN8KaaEc (4).png'
import img7 from '../../assets/MYbhN8KaaEc (3).png'
import { Link,Outlet  } from 'react-router-dom';
const Blog = () => {
  const {t, i18n} = useTranslation();
  function TranslateClick(lang) {
      i18n.changeLanguage(lang);
  }
  return (
    <div>
      <h1 className='button1'>{t('Home.61')}</h1>
      <div className="button">
     <Link to="/Aboutblog"> <button style={{backgroundColor:"#EB5F07",color:"white"}}>{t('Home.62')}</button></Link>
      <Link to="/Aboutblog"><button className='but1'>{t('Home.62')}</button></Link>
      <Link to="/Aboutblog"><button className='but1'>{t('Home.62')}</button></Link>
      <Link to="/Aboutblog"><button className='but1'>{t('Home.62')}</button></Link>
      <Link to="/Aboutblog"><button className='but1'>{t('Home.62')}</button></Link>
      <Link to="/Aboutblog"><button className='but1'>{t('Home.62')}</button></Link>
      </div>
      <Outlet/>
      <div className="navig">
        <img src={img} alt="" />
        <div className="navig1">
          <h1>{t("Home.63")}</h1>
          <p>{t("Home.64")}</p>
          <div className="navig2">
            <img src={img1} alt="" />
            <div className="navig3">
              <h4>AMAZMARKETS</h4>
              <p>October 2, 2019</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mus">
        <div className="mus1">
          <img src={img2} alt="" />
          <h1>{t("Home.65")}</h1>
          <p>{t("Home.66")}</p>
          <div className="navig2">
            <img src={img1} alt="" />
            <div className="navig3">
              <h4>AMAZMARKETS</h4>
              <p>October 2, 2019</p>
            </div>
          </div>
        </div>
        <div className="mus2">
           <img src={img3} alt="" />
           <h1>{t("Home.67")}</h1>
           <p>{t("Home.66")}</p>
           <div className="navig2">
            <img className='imh' src={img1} alt="" />
            <div className="navig3">
              <h4>AMAZMARKETS</h4>
              <p>October 2, 2019</p>
            </div>
          </div>
        </div>
      </div>
      <div className="k">
        <div className="k1">
          <img src={img4} alt="" />
          <h1>{t("Home.68")}</h1>
          <p>{t("Home.69")}</p>
          <div className="navig2">
            <img src={img1} alt="" />
            <div className="navig3">
              <h4>AMAZMARKETS</h4>
              <p>October 2, 2019</p>
            </div>
          </div>
        </div>
        <div className="k1">
          <img src={img6} alt="" />
          <h1>{t("Home.68")}</h1>
          <p>{t("Home.69")}</p>
          <div className="navig2">
            <img src={img1} alt="" />
            <div className="navig3">
              <h4>AMAZMARKETS</h4>
              <p>October 2, 2019</p>
            </div>
          </div>
        </div>
        <div className="k1">
          <img src={img7} alt="" />
          <h1>{t("Home.68")}</h1>
          <p>{t("Home.69")}</p>
          <div className="navig2">
            <img src={img1} alt="" />
            <div className="navig3">
              <h4>AMAZMARKETS</h4>
              <p>October 2, 2019</p>
            </div>
          </div>
        </div>
      </div>
      <div className="k2">
        <div className="k1">
          <img src={img4} alt="" />
          <h1>{t("Home.68")}</h1>
          <p>{t("Home.69")}</p>
          <div className="navig2">
            <img src={img1} alt="" />
            <div className="navig3">
              <h4>AMAZMARKETS</h4>
              <p>October 2, 2019</p>
            </div>
          </div>
        </div>
        <div className="k1">
          <img src={img6} alt="" />
          <h1>{t("Home.68")}</h1>
          <p>{t("Home.69")}</p>
          <div className="navig2">
            <img src={img1} alt="" />
            <div className="navig3">
              <h4>AMAZMARKETS</h4>
              <p>October 2, 2019</p>
            </div>
          </div>
        </div>
        <div className="k1">
          <img src={img7} alt="" />
          <h1>{t("Home.68")}</h1>
          <p>{t("Home.69")}</p>
          <div className="navig2">
            <img src={img1} alt="" />
            <div className="navig3">
              <h4>AMAZMARKETS</h4>
              <p>October 2, 2019</p>
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

export default Blog
