import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="1"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            rating={3}
            img="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
          <Product
            id="2"
            title="Kenwood kMix Stand Mixer for Baking with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl, Removable Splash Guard"
            price={239.99}
            rating={4}
            img="https://m.media-amazon.com/images/I/61etD4-IrPL._AC_SS350_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Samsung Galaxy Fit Black (Bluetooth), SM-R370NZKAXAR – US Version"
            price={199.99}
            rating={3}
            img="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="4"
            title="Echo Studio – High-fidelity smart speaker – Alexa smart home starter kit"
            price={98.99}
            rating={2}
            img="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="5"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            img="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED Computer Monitor, 3840 x 1080p Resolution, 1ms Response, FreeSync 2 with H"
            price={1094.99}
            rating={4}
            img="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
