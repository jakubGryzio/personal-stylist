import React, { Fragment } from "react";
import Wardrobe from "./Wardrobe";
import Style from "./Style";
import Styling from "./CapsuleWardrobe";
import CapsuleWardrobe from "./Styling";
import Subscription from "./Subscription";

const Services = () => {
  return (
    <Fragment>
      <Wardrobe />
      <Style />
      <Styling />
      <CapsuleWardrobe />
      <Subscription />
    </Fragment>
  );
};

export default Services;
