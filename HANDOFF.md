# Handoff

## Tasarım sistemi

- Zemin: `#F7F3ED` warm ivory
- Ana metin / koyu alan: `#352B28` espresso
- Vurgu: `#B9A084` antique champagne
- Başlık: sistem Georgia serif; metin: sistem sans. Haricî font isteği olmadığı için font dosyası yüklenmez ve FOIT oluşmaz.

## Kolay revizyon alanları

- İşletme, adres, telefon, hizmet, saat, randevu: `src/data/business.js`
- FAQ ve güvenli yanıt politikası: `src/data/knowledge-base.js`
- Fotoğraflar ve lisans bilgisi: `src/data/assets.js`
- Renkler ve aralıklar: `styles.css` içindeki `:root`

## Chatbot entegrasyonu

`src/components/SynqrixChatbotMount.js` varsayılan olarak kapalıdır. `enabled`, kişisel veri ve event aktarımı müşteri onayı, KVKK metni ve gerçek istemci entegrasyonu olmadan açılmamalıdır. Bilgi tabanı sağlık teşhisi, tedavi vaadi veya kişiye özel uygunluk değerlendirmesi yapmaz; bilinmeyen sorularda telefonu önerir.

## Yayın öncesi zorunlu onaylar

- Yerel salon fotoğrafının kullanım hakkı
- Resmî sosyal medya hesapları
- WhatsApp kanal yetkilendirmesi
- Haftalık çalışma saatleri ve tatil istisnaları
- Güncel ekip listesi, unvanlar ve portre izinleri
- Fiyat, iptal ve randevu değiştirme politikaları
- Google Business API veya yetkili yorum sağlayıcısı

Bu onaylar gelene kadar demo resmî site gibi yayımlanmamalı; “Synqrix sunum demosu” bandı kaldırılmamalıdır.

## Doğrulama sonucu

13 Ekim 2026 tarihinde buildless mobil Lighthouse ölçümü:

- Performance: **93**
- Accessibility: **100**
- Best Practices: **100**
- SEO: **100**
- FCP: **1,1 sn**
- LCP: **3,2 sn** — 2,5 sn hedefi bu laboratuvar koşulunda karşılanmadı
- TBT: **0 ms**
- CLS: **0**

360 ve 390 px özel Lighthouse emülasyonları ile 768, 1024 ve 1440 px ekran görüntüsü kontrolleri yapıldı. INP gerçek kullanıcı alan verisi olmadan ölçülemedi; TBT laboratuvar vekili olarak raporlandı. Son rapor `.qa/lighthouse-final-verified.report.html` dosyasındadır.
