import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
function Map() {
  const [useParams, setParams] = useSearchParams();
  const navigate = useNavigate();
  const lat = useParams.get("lat");
  const lng = useParams.get("lng");
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>
        Position: {lat}, {lng}
      </h1>
    </div>
  );
}

export default Map;
