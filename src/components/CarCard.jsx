const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <h2>
        {car.make} - <span>{car.model}</span>
      </h2>
      <p>year: {car.year}</p>
    </div>
  );
};

export default CarCard;
