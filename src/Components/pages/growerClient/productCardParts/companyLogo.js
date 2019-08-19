import React from 'react';
import 'w3-css';
import './companyLogo.css';

function CompanyLogo(prop) {
	return <img className="w3-image company-logo" alt="Logo" src={prop.logo}/>;
}
export default CompanyLogo;