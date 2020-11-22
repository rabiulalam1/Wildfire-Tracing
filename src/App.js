import { useState, useEffect } from "react";
import Map from "./components/Map";
import Loader from "./components/Loader";
import axios from "axios";

function App() {
  console.log("hello");
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     setLoading(true);
  //     const res = await fetch(
  //       "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
  //     );
  //     const { events } = await res.json();
  //     setEventData(events);
  //     setLoading(false);
  //   };
  //   fetchEvents();
  //   console.log(eventData);
  // }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      let res = await axios.get(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      setEventData(res.data.events);
      setLoading(false);
    };
    fetchEvents();
    console.log(eventData);
  }, []);

  return (
    <div>
      <h1>Welcome</h1>
      {!loading ? <Map eventData={eventData} /> : <Loader />}
    </div>
  );
}

export default App;
