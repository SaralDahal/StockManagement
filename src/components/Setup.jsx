import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Setup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Update form data on input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //   const printName = () => console.warn("saral");

  // Submit form data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords don't match");
      // return;
    }

    try {
      const response = await fetch("http://localhost/apiTest/register.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage("Registration successful");
        setTimeout(() => navigate("/"), 2000);
        // setName(printName);
      } else {
        setMessage(data.message || "Registration failed");
      }
    } catch (error) {
      // console.error(error.message);
      setMessage("An error occurred during registration");
    }
  };
  return {
    formData,
    setFormData,
    message,
    setMessage,
    handleChange,
    handleSubmit,
  };
}
