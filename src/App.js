import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Modal from "./components/Modal";
import CardContainer from "./components/CardContainer";
import { CardWrapper } from "./components/Stylesheet";

//API endpoint
const fetchUrl = "https://6033c4d8843b15001793194e.mockapi.io/api/locations";

function App() {
  const [modalState, setModalState] = useState(false);
  const [modalData, setModalData] = useState({ data: [], views: 0 });
  const [locationData, setLocationData] = useState([]);

  //fetch API data asyncrhonously, throw error if there is a network/fetch issue
  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setLocationData(request.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  //handle show/hide of modal element
  function showModal(id, views) {
    setModalData({ locationData: locationData[id - 1], views: views });
    document.body.style.overflow = "hidden";
    setModalState(true);
  }

  function hideModal() {
    setModalState(false);
    document.body.style.overflow = "auto";
  }

  //conditionally render modal based on state
  return (
    <React.Fragment>
      {modalState && (
        <Modal hideModalFunction={hideModal} modalData={modalData} />
      )}
      <Header />
      <CardWrapper>
        <CardContainer
          showModalFunction={showModal}
          locationData={locationData}
        />
      </CardWrapper>
    </React.Fragment>
  );
}

export default App;
