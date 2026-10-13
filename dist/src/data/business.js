/** @typedef {'confirmed'|'third-party'|'conflicting'|'unknown'} TrustStatus */
/** @typedef {{url:string, checkedAt:string, dataType:string, status:TrustStatus, note:string}} SourceRecord */

export const business = Object.freeze({
  name: "Cicim Güzellik Salonu",
  locale: "tr-TR",
  timeZone: "Europe/Istanbul",
  isOfficialWebsite: false,
  demoNotice: "Synqrix satış demosu; işletmenin onaylı resmî sitesi değildir.",
  address: {
    street: "Ahmetpaşa Mahallesi, Fevzi Çakmak Caddesi No:69, Kat:1 Daire:101",
    district: "Osmangazi",
    city: "Bursa",
    postalCode: "16050",
    country: "TR",
    status: "confirmed"
  },
  phone: { display: "0506 155 50 50", e164: "+905061555050", status: "confirmed" },
  whatsapp: { enabled: false, status: "unknown", reason: "İşletme tarafından yetkilendirilmiş WhatsApp kanalı doğrulanamadı." },
  booking: {
    url: "https://www.kolayrandevu.com/isletme/cicim-guzellik-salonu",
    provider: "KolayRandevu",
    status: "third-party"
  },
  mapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=Cicim%20G%C3%BCzellik%20Salonu%20Ahmetpa%C5%9Fa%20Fevzi%20%C3%87akmak%20Caddesi%2069%20Osmangazi%20Bursa",
  hours: {
    status: "conflicting",
    publicMessage: "Kaynaklar arasında saat farkı bulunuyor. Güncel saatler için lütfen arayın.",
    variants: [
      { source: "Randevu Takvimim / harita derlemesi", value: "Pzt–Cum 09:00–20:00, Cmt 09:00–19:00, Paz kapalı" },
      { source: "KolayRandevu", value: "Pzt–Per 08:30–20:00, Cum 08:30–19:00, Cmt 08:30–20:00, Paz kapalı" }
    ]
  },
  services: [
    { id: "tirnak", title: "Tırnak & El Bakımı", summary: "Manikür, pedikür, kalıcı oje ve protez tırnak seçenekleri.", status: "third-party" },
    { id: "cilt", title: "Cilt Bakımı", summary: "Platformda listelenen bakım seçenekleri; içerik ve uygunluk salon görüşmesinde netleşir.", status: "third-party" },
    { id: "epilasyon", title: "Epilasyon", summary: "Lazer epilasyon ve ağda başlıkları. Seans bilgisi için salonla görüşülür.", status: "third-party" },
    { id: "kirpik-makyaj", title: "Kirpik, Kaş & Makyaj", summary: "Kirpik lifting, kaş bakımı ve profesyonel makyaj seçenekleri.", status: "third-party" }
  ],
  prices: { status: "unknown", published: false },
  reviews: { status: "conflicting", published: false, note: "Kaynaklar farklı puan ve değerlendirme sayıları gösteriyor; canlı API yok." },
  social: { instagram: null, facebook: null, status: "unknown" }
});

/** @type {SourceRecord[]} */
export const sources = [
  { url: "https://www.kolayrandevu.com/isletme/cicim-guzellik-salonu", checkedAt: "2026-10-13", dataType: "adres, saatler, hizmetler, randevu, yorum metadatası", status: "third-party", note: "Aktif randevu profili; saatler diğer kaynakla çelişiyor." },
  { url: "https://randevutakvimim.com/isletme/cicim-guzellik-salonu-bursa", checkedAt: "2026-10-13", dataType: "telefon, adres, saatler, hizmetler, yorum metadatası", status: "third-party", note: "Açık kaynak derlemesi olduğunu ve online randevu almadığını belirtiyor." },
  { url: "https://cicimstore.com/", checkedAt: "2026-10-13", dataType: "adres, telefon", status: "third-party", note: "Cicim Store altbilgisindeki iletişim bilgileri brief ile örtüşüyor; salonla kurumsal bağ ayrıca onaylanmalı." },
  { url: "user-brief://2026-10-13", checkedAt: "2026-10-13", dataType: "marka, adres, telefon, saat çelişkisi", status: "confirmed", note: "Müşteri tarafından bu demo için sağlanan brief." }
];
