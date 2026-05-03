import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { companyPresenceLocations } from "../data/companyPresenceLocations";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function AboutPresenceMap() {
  const mapRef = useRef(null);

  useEffect(() => {
    const el = mapRef.current;
    if (!el) return undefined;

    const map = L.map(el, { scrollWheelZoom: false }).setView([22.5, 79], 5);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map);

    const bounds = L.latLngBounds([]);
    companyPresenceLocations.forEach((loc) => {
      L.marker([loc.lat, loc.lon])
        .addTo(map)
        .bindPopup(
          `<strong>${loc.name}</strong><br>${loc.role}<br><small>${loc.lat.toFixed(
            4,
          )}, ${loc.lon.toFixed(4)}</small>`,
        );
      bounds.extend([loc.lat, loc.lon]);
    });

    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [36, 36], maxZoom: 6 });
    }

    return () => {
      map.remove();
      /* React StrictMode remount: allow Leaflet to re-bind the same div */
      if (Object.prototype.hasOwnProperty.call(el, "_leaflet_id")) {
        Reflect.deleteProperty(el, "_leaflet_id");
      }
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className="equbal-leaflet-map rounded-4 border shadow-sm"
      style={{ height: "380px", minHeight: "260px", zIndex: 1 }}
      role="application"
      aria-label="Equbal presence and coordination points across India"
    />
  );
}

export default AboutPresenceMap;
