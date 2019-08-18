import './dataEntryTest.css';
import React from 'react';
import useForm from 'react-hook-form';

function sendData(data) {
	fetch(`/api/greeting?ProductName=${data.ProductName}`)
	fetch(`/api/greeting?CompanyName=${data.CompanyName}`)
	fetch(`/api/greeting?HaverstDate=${data.HaverstDate}`)
	fetch(`/api/greeting?Type=${data.Type}`)
	fetch(`/api/greeting?NumberOfUnits=${data.NumberofUnits}`)
	fetch(`/api/greeting?THC=${data.THC}`)
	fetch(`/api/greeting?THCa=${data.THCa}`)
	.then(response => response.json());
}


 export default function Form() {

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => sendData(data);
  console.log(errors);
  
  return (
	  <div class="growerClient">
    
	<form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Product Name" name="ProductName" ref={register} />
      <input type="text" placeholder="Company Name" name="CompanyName" ref={register} />
      <input type="text" placeholder="Havest Date" name="HaverstDate" ref={register({max: 0})} />
      <input type="text" placeholder="Type" name="Type" ref={register} />
      <input type="number" placeholder="Number of Units" name="NumberofUnits" ref={register({min: 0})} />
      <input type="number" placeholder="THC" name="THC" ref={register({max: 100, min: 0})} />
      <input type="number" placeholder="THCa" name="THCa" ref={register({max: 100, min: 0})} />
      <input type="number" placeholder="CBD" name="CBD" ref={register({max: 100, min: 0})} />
      <input type="email" placeholder="Email" name="Email" ref={register} />

      <input type="submit" />
    </form>
	</div>
  );
}
