import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Approach from "./Pages/Dev_Approach";
import LandingPage from "./Pages/landing_page";
import Our_Services from "./Pages/Our_Services";
import RecentProjects from "./Pages/Recent_project";
import AboutUs from "./Pages/AboutUs";
import FeedbackComponent from "./Pages/Feedback";
import Footer from "./Pages/footer";
import ContactUs from "./Pages/Contactus";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <LandingPage />
      <Approach />
      <Our_Services />
      <RecentProjects />
      <AboutUs/>
      <FeedbackComponent/>
      <ContactUs/>
      <Footer/>

    </div>
  );
}

export default App;
