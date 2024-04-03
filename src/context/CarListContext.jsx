import React, { createContext, useContext, useState } from 'react';

// Create a context
const CarListContext = createContext();

// Create a provider component
export const CarListProvider = ({ children }) => {
  // State to manage the list of cars
  const [carList, setCarList] = useState([]);

  // Function to add a new car to the list
  const addCar = (newCar) => {
    setCarList([...carList, newCar]);
  };

  // Function to delete a car from the list
  const deleteCar = (carId) => {
    setCarList(carList.filter(car => car.id !== carId));
  };

  // Function to update a car in the list
  const updateCar = (updatedCar) => {
    setCarList(carList.map(car => (car.id === updatedCar.id ? updatedCar : car)));
  };

  // Value to be provided by the context
  const carListContextValue = {
    carList,
    addCar,
    deleteCar,
    updateCar
  };

  // Provide the context value to its children
  return (
    <CarListContext.Provider value={carListContextValue}>
      {children}
    </CarListContext.Provider>
  );
};

// Custom hook to use the CarListContext
export const useCarList = () => {
  // Use useContext hook to access the CarListContext
  return useContext(CarListContext);
};

export default CarListContext; // Export CarListContext for useContext usa