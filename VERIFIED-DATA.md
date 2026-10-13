# Doğrulanmış Veri Kaydı

Kontrol tarihi: **13 Ekim 2026**  
Saat dilimi: **Europe/Istanbul**

| Veri | Değer | Statü | Kaynak / Not |
|---|---|---|---|
| Marka | Cicim Güzellik Salonu | confirmed | Kullanıcı brief’i |
| Adres | Ahmetpaşa Mah., Fevzi Çakmak Cd. No:69, Kat:1 D:101, Osmangazi/Bursa | confirmed | Brief; KolayRandevu ve Cicim Store ile örtüşüyor |
| Telefon | +90 506 155 50 50 | confirmed | Brief; Randevu Takvimim ve Cicim Store ile örtüşüyor |
| Randevu | KolayRandevu işletme profili | third-party | Aktif dış platform; site kendi takvimini taklit etmez |
| Hizmet grupları | Tırnak/el bakımı, cilt bakımı, epilasyon, kirpik/kaş/makyaj | third-party | KolayRandevu ve Randevu Takvimim listeleri |
| Saatler | Kaynaklar farklı | conflicting | Tek bir çizelge kesinleştirilmedi; kullanıcı aramaya yönlendirilir |
| WhatsApp | Etkin değil | unknown | Rehberde bağlantı görülse de işletme yetkilendirmesi doğrulanmadı |
| Google puanı / sayı | Yayımlanmıyor | conflicting | Brief yaklaşık 4.6 / 429, rehber 4.6 / 411; gerçek API yok |
| Platform puanı / sayı | Yayımlanmıyor | third-party | KolayRandevu farklı ve daha yüksek hacim gösteriyor; Google ile karıştırılmadı |
| Fiyatlar | Yayımlanmıyor | unknown | Platform listesi değişebilir; müşteri onayı ve güncellik garantisi yok |
| Sosyal hesaplar | Yayımlanmıyor | unknown | İşletmeye ait resmî hesap kullanıcı adı doğrulanamadı |

## Kaynaklar

- https://www.kolayrandevu.com/isletme/cicim-guzellik-salonu — adres, çalışma saatleri, hizmet ve haricî randevu; `third-party`
- https://randevutakvimim.com/isletme/cicim-guzellik-salonu-bursa — telefon, adres, hizmet ve saat derlemesi; `third-party`, kaydın kendisi açık kaynak derlemesi olduğunu belirtiyor
- https://cicimstore.com/ — adres ve telefon örtüşmesi; salonla kurumsal bağ müşteri tarafından ayrıca onaylanmalı
- Kullanıcı brief’i — marka, adres, telefon ve saat çelişkisi; bu demo kapsamında `confirmed`

Google Business profiline doğrudan doğrulanmış işletme API erişimi sağlanmadı. Instagram/Facebook işletme hesapları güvenilir biçimde eşleştirilemedi. Uzun kullanıcı yorumları kopyalanmadı.
