/**
 * Centralized information for KBZÓN HAUNDI Gastrobar
 * Donostia–San Sebastián (Barrio de Gros)
 */

export interface RestaurantInfo {
  name: string;
  tagline: string;
  claim: string;
  neighborhood: string;
  city: string;
  address: string;
  addressNote: string;
  phone: string;
  phoneDisplay: string;
  theForkUrl: string;
  googleMapsUrl: string;
  logoUrl: string;
  hours: {
    days: string;
    shifts: string;
  }[];
  hoursNotice: string;
}

export const RESTAURANT_INFO: RestaurantInfo = {
  name: "KBZÓN HAUNDI",
  tagline: "Gastrobar · Cocina vasca de fusión",
  claim: "Cocina con carácter. Una mesa para disfrutarla.",
  neighborhood: "Gros",
  city: "Donostia–San Sebastián",
  address: "Gran Vía, 30",
  addressNote: "Dirección postal provisional en el barrio de Gros. Se recomienda confirmar por teléfono o reserva antes de la visita.",
  phone: "+34943142717",
  phoneDisplay: "+34 943 14 27 17",
  theForkUrl: "https://www.thefork.es/restaurante/kbzon-haundi-r823366",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=KBZON+HAUNDI+Gran+Via+30+Gros+Donostia+San+Sebastian",
  logoUrl: "/assets/aistudio/images_b47eea4e.jpg",
  hours: [
    {
      days: "Martes a Jueves",
      shifts: "13:00 – 16:00 · 20:00 – 23:00",
    },
    {
      days: "Viernes y Sábado",
      shifts: "13:00 – 16:30 · 20:00 – 23:45",
    },
    {
      days: "Domingo",
      shifts: "13:00 – 16:30 (Tarde cerrado)",
    },
    {
      days: "Lunes",
      shifts: "Cerrado por descanso semanal",
    },
  ],
  hoursNotice: "Cocina non-stop de barra para pintxos fríos durante los turnos. Para sala y reservas se aconseja consultar con antelación.",
};
