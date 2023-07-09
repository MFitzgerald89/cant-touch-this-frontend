import React, { useEffect, useState } from "react";
import { IonContent } from "@ionic/react";
import axios from "axios";

// import "./MapContainer.scss";

const MapContainer = () => {
  // const [location, setLocation] = useState({});
  const [carWashes, setCarWashes] = useState([]);

  useEffect(() => {
    // fetchLocationData();
    fetchCarWashes();
  }, []);

  // const fetchLocationData = async () => {
  //   try {
  //     const response = await axios.get("http://localhost3000/users.json"); // Replace with your backend endpoint for fetching location data
  //     setLocation(response.data);
  //   } catch (error) {
  //     console.error("Error fetching location data:", error);
  //   }
  // };

  const fetchCarWashes = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/carwashes/1.json`); // Replace with your backend endpoint for fetching car washes data
      setCarWashes(response.data);
    } catch (error) {
      console.error("Error fetching car washes:", error);
    }
  };

  return (
    <IonContent>
      <div className="map-container">
        <div id="car_washes" data-latitude={location.latitude} data-longitude={location.longitude}>
          <h2>Car Washes in {location.name}</h2>
          <ol>
            {carWashes.map((carWash) => (
              <li
                key={carWash.id}
                className="carwash-list-item"
                data-latitude={carWash.latitude}
                data-longitude={carWash.longitude}
              >
                <h4>{carWash.name}</h4>
                <p>{carWash.address}</p>
              </li>
            ))}
          </ol>
        </div>
        <div id="map"></div>
      </div>
    </IonContent>
  );
};

export default MapContainer;
