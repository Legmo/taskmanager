import React from 'react';
import preloader from "../../../Assets/Images/preloader.svg";

const Preloader = (props) => {
  return <div className="text-center mx-auto mt-5">
    <img src={preloader} />
  </div>
}

export default Preloader;