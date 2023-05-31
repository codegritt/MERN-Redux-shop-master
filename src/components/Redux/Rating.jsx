import React, { useState } from "react";
import StarComp from "./StarComp";


const Rating = () => {
  const [rating, setRating] = useState(0);
//   const [rating2, setRating2] = useState(0);
  return (
    <>
  

      <div className="row">
        <div className="col text-center">
        
          <StarComp rating={rating} onRating={(rate) => setRating(rate)} />
          {/* <p>Rating - {rating}</p> */}
          {/* <StarComp rating={rating2} onRating={(rate) => setRating2(rate)} />
          <p>Rating - {rating2}</p> */}
        </div>
      </div>
    </>
  );
};
//color={{filled: "rgb(136 87 25)", unfilled: "rgb(214 184 147)"}}
//count={10}
export default Rating;