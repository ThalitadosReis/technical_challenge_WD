import "./App.css";
import { Routes, Route } from "react-router-dom";
import PhoneDetails from "./components/PhoneDetails";
import Homepage from "./components/Homepage";
import PhonesList from "./components/PhonesList";
import Navbar from "./components/Navbar";

import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [phonesList, setPhonesList] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getAllPhones = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/phones`)
      .then((response) => {
        setPhonesList(response.data);
        setIsLoading(false);
      })
      .catch((error) =>
        console.log("Error getting phones list from API", error)
      );
  };

  useEffect(() => {
    getAllPhones();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route 
          exact 
          path="/" 
          element={<Homepage />} />

        <Route
          path="/phones"
          element={<PhonesList 
          phonesList={phonesList} />}
        />

        <Route
          path="/phones/:phoneId"
          element={<PhoneDetails 
          phonesList={phonesList} />}
        />
      </Routes>
    </div>
  );
}

export default App;
