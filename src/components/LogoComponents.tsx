import React from 'react';
import { Image } from 'react-bootstrap';
import logo from '../images/logo.png';

const LogoComponent = () => {
  return (
    <div className="d-flex align-items-center">
      <Image src={logo} alt="Kyle Parks Portfolio" height={180} className="mr-3" />
    </div>
  );
};

export default LogoComponent;
