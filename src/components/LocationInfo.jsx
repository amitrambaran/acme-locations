import React from "react";
import UsersSvg from "../assets/Users.svg";
import TimezoneSvg from "../assets/Timezone.svg";
import ViewsSvg from "../assets/Views.svg";
import moment from "moment-timezone";
import {
  CardList,
  CardListItem,
  CardListIcon,
  CardListText,
} from "./Stylesheet";

//construct LocationInfo list (used in LocationCard and Modal)
function LocationInfo(props) {
  return (
    <CardList>
      <CardListItem>
        <CardListIcon src={UsersSvg} alt="users svg" />
        <CardListText>{props.locationData.userCount} Users</CardListText>
      </CardListItem>
      <CardListItem>
        <CardListIcon src={TimezoneSvg} alt="timezone svg" />
        <CardListText>
          {moment(props.locationData.createdAt).format("hh:mma ([GMT]Z)")}
        </CardListText>
      </CardListItem>
      <CardListItem>
        <CardListIcon src={ViewsSvg} alt="views svg" />
        <CardListText>{props.views} Views</CardListText>
      </CardListItem>
    </CardList>
  );
}

export default LocationInfo;
