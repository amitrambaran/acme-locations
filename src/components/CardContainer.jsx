import React from "react";
import LocationCard from "./LocationCard";

function CardContainer(props) {
  //show error on page if fetch was unsuccessful
  if (props.locationData.length === 0) {
    return <p>Loading...</p>;
  }
  //populate LocationCard components with data from API
  return props.locationData.map((locationData) => {
    return (
      <LocationCard
        key={locationData.id}
        locationData={locationData}
        showModalHandler={props.showModalHandler}
      />
    );
  });
}

export default CardContainer;
