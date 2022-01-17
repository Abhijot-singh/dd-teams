// import React from 'react'
// import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

// const containerStyle = {
//   width: '400px',
//   height: '400px'
// };

// const center = {
//   lat: 23.1630,
//   lng: 79.9588
// };

// function MyComponent() {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: "AIzaSyCb2QadfeVIvVFW0ECQDxDCY-tFk1pCcDY"
//   })

//   const [map, setMap] = React.useState(null)

//   const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds();
//     map.fitBounds(bounds);
//     setMap(map)
//   }, [])

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null)
//   }, [])

//   return isLoaded ? (
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={19}
//         onLoad={onLoad}
//         onUnmount={onUnmount}
//       > 
//         <Marker position={center} />
//       </GoogleMap>
//   ) : <></>
// }

// export default React.memo(MyComponent)



import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
function MyComponent() {
  return (
    <div>
           <LoadScript googleMapsApiKey="AIzaSyCb2QadfeVIvVFW0ECQDxDCY-tFk1pCcDY">
              <GoogleMap
                id="smaple-map"
                mapContainerStyle={{
                  height: "400px",
                  width: "400px"
                }}
                center={{  lat: 23.1630, lng: 79.9588 }}
                zoom={18}
              >
                <Marker position={{  lat: 23.1630, lng: 79.9588 }} draggable={false}></Marker>
              </GoogleMap>
            </LoadScript>
    </div>
  );
}

export default MyComponent;