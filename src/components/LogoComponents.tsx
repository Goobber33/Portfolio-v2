import React from 'react';
import { Image } from 'react-bootstrap';
import logo from '../images/logo.png';

const LogoComponent = () => {
  return (
    <div className="mt-3 mt-md-0">
      <Image src={logo} alt="Kyle Parks Portfolio" height={180} />
    </div>
  );
};

export default LogoComponent;
