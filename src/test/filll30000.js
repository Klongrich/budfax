import React from 'react';
import dataEntryTest from '../Components/pages/growerClient/growerEntryForum.js';


function submitIt(prop) {
				fetch(`/api/growerData?productName=${encodeURIComponent(prop.productName)}\
										&companyName=${encodeURIComponent(prop.companyName)}\
										&email=${encodeURIComponent(prop.email)}\
										&haverstDate=${encodeURIComponent(prop.havestDate)}\
										&strand=${encodeURIComponent(prop.strand)}\
										&numberofUnits=${encodeURIComponent(prop.numberOfUnit)}\
										&thc=${encodeURIComponent(prop.thc)}\
										&thca=${encodeURIComponent(prop.thca)}\
										&cbd=${encodeURIComponent(prop.cbd)}\
										&uniqueID=${encodeURIComponent(prop.uniqueID)}`)
				.then(response => response.json())
				
				console.log(prop);
		}

function fill30000() {
			var item = {
					productName: 'dank vapes',
					companyName: 'budfaxs',
					email: 'loud@budfaxs.com',
					havestDate: '2017-07-07',
					strand: '99',
					numberOfUnit: '99',
					thc: '99',
					thca: '99',
					cbd: '99',
					uniqueID: ''
				};


			for (var i = 0; i < 30000; i++) {
				item.uniqueID = i;
				//sumbitIt(item)
			}

		}

export default fill30000;