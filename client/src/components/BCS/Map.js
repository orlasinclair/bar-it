// import React from "react";
// import { GoogleMap, useLoadScript } from "@react-google-maps/api";
// import Search from "./Search";
// import usePlacesAutocomplete, {getGeocode, getLatLng } from "use-places-autocomplete";


// let service;
// const libraries = ["places"];

// const mapContainerStyle = {
//   height: "100vh",
//   width: "100vw"
// };
// const options = {
//   disableDefaultUI: true,
//   zoomControl: true
// };


export default function AppMM(props) {
    const center = {
        lat: props.lat,
        lng: props.long
      };
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "YOUR API KEY",
    libraries
  });
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback(map => {
    mapRef.current = map;
  }, []);

//   const panTo = React.useCallback(({ lat, lng }) => {
//     mapRef.current.panTo({ lat, lng });
//     mapRef.current.setZoom(12);
//     let map = mapRef.current;

//     let request = {
//       location: { lat, lng },
//       radius: "500",
//       type: ["hospital"]
//     };

//     const google = window.google = window.google ? window.google : {}
//     service = new google.maps.places.PlacesService(mapRef.current);
//     service.nearbySearch(request, callback);
//     function callback(results, status) {
//       if (status === google.maps.places.PlacesServiceStatus.OK) {
//         for (let i = 0; i < results.length; i++) {
//           let place = results[i];
//           new google.maps.Marker({
//             position: place.geometry.location,
//             map
//           });
//         }
//       }
//     }
//   }, []);

//   return (
//     <div>
//       <Search panTo={panTo} />
//       <GoogleMap
//         id="map"
//         mapContainerStyle={mapContainerStyle}
//         zoom={8}
//         center={center}
//         options={options}
//         onLoad={onMapLoad}
//       />
//     </div>
//   );
// }
