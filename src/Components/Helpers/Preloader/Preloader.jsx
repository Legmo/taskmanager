import React from 'react';
import preloader from '../../../Assets/Images/preloader.svg';

const Preloader = () => (
  <div className="text-center mx-auto mt-5">
    <img src={preloader} alt="Preloader" />
  </div>
);

export default Preloader;
