import { useState, useEffect } from "react";

// Components
import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    <Loader />;
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  const personalDetails = {
    name: "Rayyand Kananda",
    location: "Batam, Indonesia",
    tagline: "Junior Frontend Developer",
    email: "rayydna14@gmail.com",
    availability: "Open for work",
    brand:
      "Im Rayyand Kananda Syahputra, a Junior Frontend Developer, i love making cool and interactive websites. Im always down for something chalenging and also i like to improve my coding skills by making a projects.",
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <AnimatedRoutes personalDetails={personalDetails} />
        </>
      )}
    </>
  );
}

export default App;
