import { business } from "./business.js";

export const faqs = Object.freeze([
  { id: "services", question: "Hangi hizmetler sunuluyor?", answer: "Randevu profillerinde tırnak ve el bakımı, cilt bakımı, epilasyon ile kirpik, kaş ve makyaj hizmetleri listeleniyor. Alt hizmetler ve güncel uygunluk için randevu kanalını inceleyin veya salonu arayın.", tags: ["hizmet", "bakım", "tırnak", "cilt", "epilasyon"] },
  { id: "hours", question: "Çalışma saatleri nedir?", answer: business.hours.publicMessage, tags: ["saat", "açık", "kapalı", "pazar"] },
  { id: "location", question: "Salon nerede?", answer: "Ahmetpaşa Mahallesi, Fevzi Çakmak Caddesi No:69, Kat:1 Daire:101, Osmangazi / Bursa adresinde.", tags: ["adres", "konum", "ulaşım"] },
  { id: "change", question: "Randevumu nasıl değiştirebilirim?", answer: "Değişiklik ve iptal koşulları doğrulanmadı. Randevu aldığınız platformdaki seçenekleri kullanın; çözülmezse salonu 0506 155 50 50 numarasından arayın.", tags: ["randevu", "iptal", "değişiklik"] },
  { id: "price", question: "Fiyat ve işlem süresi nedir?", answer: "Fiyat ve süre hizmete göre değişebilir; doğrulanmış sabit bir liste yayımlamıyoruz. Güncel bilgi için randevu kanalını kontrol edin veya salonu arayın.", tags: ["fiyat", "süre"] }
]);

export const knowledgeBase = Object.freeze({
  businessName: business.name,
  verifiedServices: business.services,
  contact: { phone: business.phone, address: business.address, booking: business.booking },
  weeklyHours: business.hours,
  unknownFields: ["WhatsApp yetkilendirmesi", "resmî sosyal medya hesapları", "fiyatların kalıcılığı", "ekip listesi ve unvanları", "iptal/değişiklik politikası"],
  safetyPolicy: {
    fallback: "Yanıtı doğrulanmış veride yoksa tahminde bulunma; kullanıcıyı telefonla salon temsilcisine yönlendir.",
    health: "Teşhis, tedavi vaadi veya kişiye özel uygunluk değerlendirmesi yapma.",
    privacy: "Kişisel veri isteme veya kaydetme. Lead ve rezervasyon aktarımı varsayılan olarak kapalıdır."
  },
  faqs
});

/** @typedef {{type:'lead_intent', serviceId?:string, source:'website'}} LeadIntentEvent */
/** @typedef {{type:'booking_intent', serviceId?:string, channel:'phone'|'external-booking'}} BookingIntentEvent */
// Bunlar gelecek entegrasyon için yalnızca veri sözleşmeleridir; bu demoda event veya kişisel veri aktarılmaz.
