import React, { useState, useEffect } from "react";
import axios from "axios";
import Products_container from "./FeedAPIstore.module.css";
import Products__img from "./FeedAPIstore.module.css";
import Products__card from "./FeedAPIstore.module.css";
import Products__cardesc from "./FeedAPIstore.module.css";
import Products_h3 from "./FeedAPIstore.module.css";

const FeedAPIstore = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      <h3 className={Products_h3.products_h3}>TRENDING PRODUCTS</h3>
      <div className={Products_container.products_container}>
        {loading && (
          <div>
            {""}
            <h2>Loading...</h2>
          </div>
        )}
        {data.map((product) => (
          <div key={product.id} className={Products__card.products__card}>
            <div>
              <img
                className={Products__img.products__img}
                src={product.image}
                alt=""
              />
            </div>

            <div className={Products__cardesc.products__cardesc}>
              <h6>{product.title}</h6>
              <h6>{`Price: ${product.price}`}</h6>
            </div>
          </div>
        ))}
      </div>
      {/* <div className={footer__img.footer1__img}>
        <img
          className={footer__img1.footer1__img1}
          src="https://www.karobargain.com/wp-content/uploads/2021/12/Snapdeal-Changes-Its-Logo-And-Tagline.jpg"
          alt=""
        />
        <img
          className={footer__img2.footer1__img2}
          src="https://ogimgs.apkcombo.org/eyJsb2dvIjoiaHR0cHM6Ly9wbGF5LWxoLmdvb2dsZXVzZXJjb250ZW50LmNvbS9tdXMzTG1ETktIaWtET0pISW95YU91WU9fS19UZ2FzckhLS0tXTFFDdmtzbjZ2Uk4zMnJOTjlQWWh3cHRyRld3bW5jPXMyMDAiLCJ0aXRsZSI6ICJEb3dubG9hZCBTbmFwZGVhbDogT25saW5lIFNob3BwaW5nIEFwcCBBUEsifQ==/download-snapdeal-online-shopping-app-apk"
          alt=""
        />
      </div> */}
    </>
  );
};

export default FeedAPIstore;
