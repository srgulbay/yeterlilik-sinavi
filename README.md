# Mikrobiyoloji Yeterlilik Asistanı

Tarayıcı üzerinden çalışan, mikrobiyoloji yeterlilik soruları için etkileşimli bir uzman paneli.

## Nasıl Çalıştırılır?

```bash
cd /Users/sr/Desktop/App-Yeterlilik
open index.html
```

Bu komut, varsayılan tarayıcıda uygulamayı açar (macOS).

## Özellikler
- Konu bazlı filtreleme (Genel Mikrobiyoloji, Sterilizasyon, Pre-Analitik, Klinik Bakteriyoloji, Mikrobiyota)
- Arama kutusu ile soru, konu ve açıklama içinde arama
- Her soru için doğru cevap, uzman analizi, kritik notlar ve sık yapılan hatalar
- Modern, responsive masaüstü arayüz

## Yapı
- `index.html` – Uygulama iskeleti
- `theme/style.css` – Tema ve bileşen stilleri
- `data/enriched_content.js` – Zenginleştirilmiş soru/analiz verisi
- `theme/app.js` – Kartların render edilmesi, filtreleme ve arama mantığı
