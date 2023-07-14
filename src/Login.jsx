import { IonContent, IonInput, IonButton } from "@ionic/react";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
// import "./Login.scss";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

const Login = () => {
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors([]);
    const formData = new FormData(event.currentTarget);
    try {
      const response = await axios.post("/sessions.json", formData);
      axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.jwt}`;
      localStorage.setItem("jwt", response.data.jwt);
      localStorage.setItem("user_id", response.data.user_id);
      event.currentTarget.reset();
      history.push("/car_washes"); // Redirect to a specific page in your Ionic app
    } catch (error) {
      console.log(error.response.data.errors);
      setErrors(["Invalid email or password"]);
    }
  };

  return (
    <IonContent className="user-login">
      <div className="login-box">
        <form onSubmit={handleSubmit} className="form text-center">
          <h1>Can't Touch This</h1>
          <p>Find Touchless Car Washes In Your Area!</p>
          {errors.map((error) => (
            <p key={error}>{error}</p>
          ))}

          <IonInput type="email" name="email" className="box" placeholder="Email" required />
          <IonInput type="password" name="password" className="box" placeholder="Password" required />
          <IonButton type="submit" expand="block">
            Login
          </IonButton>
        </form>
        <IonButton onClick={() => props.onSignup(true)} expand="block">
          Sign Up
        </IonButton>
      </div>
    </IonContent>
  );
};

export default Login;
