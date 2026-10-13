# Cicim Güzellik Salonu — Synqrix Demo

Cicim Güzellik Salonu için hazırlanmış, tek sayfalık ve mobil öncelikli satış demosudur. İşletmenin onaylı resmî sitesi değildir ve onay alınmadan canlı/resmî kanal olarak yayımlanmamalıdır.

## Çalıştırma

Node.js 22+ ile ek bağımlılık gerekmez.

```bash
npm run dev
npm run lint
npm test
npm run build
```

Build çıktısı `dist/` klasörüne yazılır. İçerik Türkçe, zaman dilimi `Europe/Istanbul` olarak yapılandırılmıştır.

## Mimari

- `index.html`: semantik tek sayfa yapı ve yalnız doğrulanmış alanları içeren JSON-LD yuvası
- `styles.css`: responsive tasarım sistemi, görünür focus ve reduced-motion desteği
- `src/data/business.js`: tek merkezî typed (JSDoc) işletme verisi ve kaynak statüleri
- `src/data/knowledge-base.js`: FAQ, chatbot bilgi tabanı ve güvenlik politikası
- `src/data/assets.js`: görsel manifesti ve lisans/izin statüleri
- `src/components/SynqrixChatbotMount.js`: varsayılan kapalı entegrasyon noktası
- `src/app.js`: veri renderı, mobil menü, erişilebilir etkileşimler ve schema.org çıktısı

Son kullanıcı brief’inin “HTML CSS JS” talebi, önceki Next.js/TypeScript yönlendirmesini açıkça ezdiği için proje buildless ES Modules olarak uygulanmıştır.
