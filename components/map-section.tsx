"use client"

export default function MapSection() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.6592830192483!2d-5.5372!3d33.8883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda044e2951b3789%3A0x44332e86bf81cda1!2sFacult%C3%A9%20des%20Sciences%2C%20Mekn%C3%A8s!5e0!3m2!1sfr!2sma!4v1714866982!5m2!1sfr!2sma"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Carte de la Faculté des Sciences de Meknès"
    />
  )
}
