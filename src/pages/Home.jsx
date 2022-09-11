import { useEffect, useState } from 'react';
import supabase from '../api/supabaseClient';
import CarCard from '../components/CarCard';

const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      const { data, error } = await supabase.from('cars').select();

      if (error) {
        setFetchError('Could not fetch cars');
        setCars(null);
        console.log(error);
      }
      if (data) {
        setCars(data);
        setFetchError(null);
      }
      setLoading(false);
    };

    fetchCars();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {loading && <p>Loading...</p>}
      {fetchError && <p>{fetchError}</p>}
      {cars && (
        <div className="cars">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
