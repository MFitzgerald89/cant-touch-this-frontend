import React, { useState } from "react";
import { IonButton, IonContent, IonInput, IonItem, IonLabel, IonList, IonSelect, IonSelectOption } from "@ionic/react";
import axios from "axios";
import "./Signup.scoped.scss";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors([]);

    try {
      const formData = new FormData(event.target);
      const response = await axios.post("/users.json", formData);
      event.target.reset();
      window.location.href = "/";
    } catch (error) {
      console.log(error.response.data.errors);
      setErrors(error.response.data.errors);
    }
  };

  return (
    <IonContent>
      <div className="signup">
        <h3 className="text-center">Signup</h3>
        <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <IonList>
              <IonItem>
                <IonLabel position="stacked">Name</IonLabel>
                <IonInput type="text" name="name" placeholder="First Name Last Name"></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Email</IonLabel>
                <IonInput type="email" name="email" placeholder="Email"></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Password</IonLabel>
                <IonInput type="password" name="password" placeholder="Password"></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Password Confirmation</IonLabel>
                <IonInput type="password" name="password_confirmation" placeholder="Password Confirmation"></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">City</IonLabel>
                <IonInput type="text" name="city" placeholder="City"></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">State</IonLabel>
                <IonSelect name="state" placeholder="State">
                  <>
                    <IonSelectOption value="Alabama">Alabama</IonSelectOption>
                    <IonSelectOption value="Alaska">Alaska</IonSelectOption>
                    <IonSelectOption value="Arizona">Arizona</IonSelectOption>
                    <IonSelectOption value="Arkansas">Arkansas</IonSelectOption>
                    <IonSelectOption value="California">California</IonSelectOption>
                    <IonSelectOption value="Colorado">Colorado</IonSelectOption>
                    <IonSelectOption value="Connecticut">Connecticut</IonSelectOption>
                    <IonSelectOption value="Delaware">Delaware</IonSelectOption>
                    <IonSelectOption value="Florida">Florida</IonSelectOption>
                    <IonSelectOption value="Georgia">Georgia</IonSelectOption>
                    <IonSelectOption value="Hawaii">Hawaii</IonSelectOption>
                    <IonSelectOption value="Idaho">Idaho</IonSelectOption>
                    <IonSelectOption value="Illinois">Illinois</IonSelectOption>
                    <IonSelectOption value="Indiana">Indiana</IonSelectOption>
                    <IonSelectOption value="Iowa">Iowa</IonSelectOption>
                    <IonSelectOption value="Kansas">Kansas</IonSelectOption>
                    <IonSelectOption value="Kentucky">Kentucky</IonSelectOption>
                    <IonSelectOption value="Louisiana">Louisiana</IonSelectOption>
                    <IonSelectOption value="Maine">Maine</IonSelectOption>
                    <IonSelectOption value="Maryland">Maryland</IonSelectOption>
                    <IonSelectOption value="Massachusetts">Massachusetts</IonSelectOption>
                    <IonSelectOption value="Michigan">Michigan</IonSelectOption>
                    <IonSelectOption value="Minnesota">Minnesota</IonSelectOption>
                    <IonSelectOption value="Mississippi">Mississippi</IonSelectOption>
                    <IonSelectOption value="Missouri">Missouri</IonSelectOption>
                    <IonSelectOption value="Montana">Montana</IonSelectOption>
                    <IonSelectOption value="Nebraska">Nebraska</IonSelectOption>
                    <IonSelectOption value="Nevada">Nevada</IonSelectOption>
                    <IonSelectOption value="New Hampshire">New Hampshire</IonSelectOption>
                    <IonSelectOption value="New Jersey">New Jersey</IonSelectOption>
                    <IonSelectOption value="New Mexico">New Mexico</IonSelectOption>
                    <IonSelectOption value="New York">New York</IonSelectOption>
                    <IonSelectOption value="North Carolina">North Carolina</IonSelectOption>
                    <IonSelectOption value="North Dakota">North Dakota</IonSelectOption>
                    <IonSelectOption value="Ohio">Ohio</IonSelectOption>
                    <IonSelectOption value="Oklahoma">Oklahoma</IonSelectOption>
                    <IonSelectOption value="Oregon">Oregon</IonSelectOption>
                    <IonSelectOption value="Pennsylvania">Pennsylvania</IonSelectOption>
                    <IonSelectOption value="Rhode Island">Rhode Island</IonSelectOption>
                    <IonSelectOption value="South Carolina">South Carolina</IonSelectOption>
                    <IonSelectOption value="South Dakota">South Dakota</IonSelectOption>
                    <IonSelectOption value="Tennessee">Tennessee</IonSelectOption>
                    <IonSelectOption value="Texas">Texas</IonSelectOption>
                    <IonSelectOption value="Utah">Utah</IonSelectOption>
                    <IonSelectOption value="Vermont">Vermont</IonSelectOption>
                    <IonSelectOption value="Virginia">Virginia</IonSelectOption>
                    <IonSelectOption value="Washington">Washington</IonSelectOption>
                    <IonSelectOption value="West Virginia">West Virginia</IonSelectOption>
                    <IonSelectOption value="Wisconsin">Wisconsin</IonSelectOption>
                    <IonSelectOption value="Wyoming">Wyoming</IonSelectOption>
                  </>

                  {/* Add other options for different states */}
                </IonSelect>
              </IonItem>
            </IonList>
            <div className="text-center">
              <IonButton expand="full" className="signup-submit" type="submit">
                Signup
              </IonButton>
            </div>
          </form>
        </div>
      </div>
    </IonContent>
  );
}
export default Signup;
