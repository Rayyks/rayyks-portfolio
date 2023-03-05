import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
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
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
