import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";

import OfferItem from "./OfferItem";

const OfferList = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [offers, setOffers] = useState({});

  useEffect(() => {
    async function fetchData() {
      let data = await fetch(
        "https://private-803503-digismoothietest.apiary-mock.com/offers"
      );

      if (data.status < 200 || data.status >= 300) {
        setError(new Error("Unable to load data."));
      } else {
        let response;
        try {
          response = await data.json();
          setOffers(response.offers);
        } catch (e) {
          setError(new Error("Unable to parse response."));
        }
        setIsLoaded(true);
      }
    }
    fetchData();
  }, [isLoaded]);

  const getOffers = () => {
    let offersArray = Object.entries(offers);
    return offersArray.map((offer) => {
      //return <li key={offer[1].id}>{offer[1].title}</li>
      return (
        <div>
          <hr />
          <OfferItem
            key={offer[1].id}
            id={offer[1].id}
            image={offer[1].image}
            title={offer[1].title}
            original_price={offer[1].original_price}
            discounted_price={offer[1].discounted_price}
            short_description={offer[1].short_description}
            currency="USD"
            setOfferIds={props.setOfferIds}
          />
          <hr />
        </div>
      );
    });
  };

  return (
    <div>
      {!isLoaded && !error && (
        <ReactLoading type="spinningBubbles" color="#444" />
      )}
      {error && "failed to load data"}
      {getOffers()}
    </div>
  );
};

export default OfferList;
