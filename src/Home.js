import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Footer from "./Footer";
import Productcom from "./Productcom";
const Home = () => {
  return (
    <>
      <div className="home">
        <Carousel>
          <div className="home-img">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_FT_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB408004054_.jpg" />
          </div>
          <img
            className="home-img"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/N2IxYThmYzAt/N2IxYThmYzAt-MjVlNmIyZTUt-w1500._CB407941419_.jpg"
            alt=""
          />
          <img
            className="home-img"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/NjczMzc2MmQt/NjczMzc2MmQt-MjY1NzgwODYt-w1500._CB431876561_.jpg"
            alt=""
          />
          <img
            className="home-img"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/Amazon-co-uk-hq/2018/img/Prime/XCM_Manual_1133281_gatewayRedesignAcq_1500x600_Prime_1133280_30free-1x_1534769204-jpg._CB484986347_.jpg"
            alt=""
          />
        </Carousel>
        <Productcom />
        <Footer />
      </div>
    </>
  );
};
export default Home;
