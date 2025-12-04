import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./Contacts.module.css";
import { FaEnvelope, FaPhone, FaTelegram } from "react-icons/fa";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

export default function Contacts() {
  const officePosition = [50.4501, 30.5234];

  const contacts = [
    { icon: <FaEnvelope />, text: "info@defri.com", link: "mailto:info@defri.com" },
    { icon: <FaPhone />, text: "+380 12 345 67 89", link: "tel:+380123456789" },
    { icon: <FaTelegram />, text: "Telegram", link: "https://t.me/defri" },
  ];

  return (
    <div className={styles.contacts}>
      <div className={styles.innerContainer}>
        <h2 className={styles.title}>Свяжитесь с нами</h2>
        <p className={styles.subtitle}>
          Мы всегда на связи! Пишите, звоните или находите нас в Telegram.
        </p>

        <div className={styles.mapContainer}>
          <MapContainer center={officePosition} zoom={13} scrollWheelZoom={false} style={{ width: "100%", height: "100%" }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={officePosition}>
              <Popup>Офис Defri</Popup>
            </Marker>
          </MapContainer>
        </div>

        <div className={styles.contactList}>
          {contacts.map((c, i) => (
            <a className={styles.contactCard} key={i} href={c.link} target="_blank" rel="noopener noreferrer">
              {c.icon} <span>{c.text}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
