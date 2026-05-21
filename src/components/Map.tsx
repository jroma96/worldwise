import { useSearchParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import styles from "./Map.module.css";
import { useEffect, useState } from "react";
import type { LatLngExpression } from "leaflet";
import useCitiesContext from "../contexts/useCitiesContext";
function Map() {
  const { cities } = useCitiesContext();
  const [useParams] = useSearchParams();
  const [mapPosition, setMapPosition] = useState<LatLngExpression>(() => [
    51.505, -0.09,
  ]);
  const lat = Number(useParams.get("lat"));
  const lng = Number(useParams.get("lng"));

  useEffect(() => {
    if (lat && lng) setMapPosition([lat, lng]);
  }, [lat, lng]);

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={8}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities?.map((city) => (
          <Marker position={city.position} key={city.id}>
            <Popup>
              {city.cityName} <br /> {city.notes}
            </Popup>
          </Marker>
        ))}
        <ChangePosition position={mapPosition} />
      </MapContainer>
    </div>
  );

  function ChangePosition({ position }: { position: LatLngExpression }) {
    const map = useMap();
    map.setView(position, 7);
    return null;
  }
}

export default Map;
