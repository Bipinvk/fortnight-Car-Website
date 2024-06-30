import React, { useState, useEffect } from "react";
import axios from "axios";
import CarForm from "./CarForm";

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [editingCar, setEditingCar] = useState(null);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/cars");
      setCars(response.data);
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/cars/${id}`);
      fetchCars();
    } catch (error) {
      console.error("Error deleting car:", error);
    }
  };

  const handleEdit = (car) => {
    setEditingCar(car);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Car Management</h1>
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cars.map((car) => (
          <div key={car._id} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold">{car.name}</h2>
            <p>Type: {car.type}</p>
            <p>Price: ${car.price}</p>
            <p>Manufacturer: {car.manufacturer}</p>
            {car.images && car.images.length > 0 && (
              <img src={car.images[0]} alt={car.name} className="w-full h-48 object-cover mb-2" />
            )}
            <div className="mt-2">
              <button
                onClick={() => handleEdit(car)}
                className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(car._id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <CarForm
        onCarAdded={fetchCars}
        editingCar={editingCar}
        setEditingCar={setEditingCar}
      />
    </div>
  );
};

export default CarList;