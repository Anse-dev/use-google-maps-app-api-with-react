import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function Map() {
  return (
    <div className="py-20">
      <LoadScript googleMapsApiKey="AIzaSyBAS5z_Rv7Jpb_ZfH3RPjbila6jEYdHNpU">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {/* Child components, such as markers, info windows, etc. */}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default React.memo(Map);
