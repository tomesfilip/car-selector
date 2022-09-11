import { useState } from 'react';

const Create = () => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [price, setPrice] = useState(null);
  const [year, setYear] = useState(null);

  // implement usehook form

  return <div className="create-page">Create</div>;
};

export default Create;
