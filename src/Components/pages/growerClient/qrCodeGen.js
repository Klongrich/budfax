import React from 'react';
import QRCode from 'qrcode';

function QRCodeGenerator(prop) {
		var qrcode = require('qrcode-generator');
		var typeNumber = 4;
		var errorCorrectionLevel = 'L';
		var qr = qrcode(typeNumber, errorCorrectionLevel);
		qr.addData(prop.uniqueID);
		qr.make();
		return (
			<div>
				CODE
				<img src={qr.createDataURL}/>
			</div>
		);

}

export default QRCodeGenerator;