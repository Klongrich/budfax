import './dataEntryTest.css';
import React from 'react';
import useForm from 'react-hook-form';

export default function Form() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Product Name" name="Product Name" ref={register} />
      <input type="text" placeholder="Company Name" name="Company Name" ref={register} />
      <input type="text" placeholder="Havest Date" name="Havest Date" ref={register({max: 0})} />
      <input type="text" placeholder="Type" name="Type" ref={register} />
      <input type="number" placeholder="Number of Units" name="Number of Units" ref={register} />
      <input type="text" placeholder="THC" name="THC" ref={register} />
      <input type="text" placeholder="THCa" name="THCa" ref={register} />
      <input type="number" placeholder="CBD" name="CBD" ref={register} />
      <input type="email" placeholder="Email" name="Email" ref={register} />

      <input type="submit" />
    </form>
  );
}