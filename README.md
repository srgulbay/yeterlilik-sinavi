# AlgoSPOT

Tarayıcı/PWA üzerinden çalışan; konu özetleri, hafıza kartları ve SRS çalışma akışı sunan bir öğrenme asistanı.

## Nasıl Çalıştırılır?

> Not: Firebase Auth/Firestore için `file://` üzerinden açmak yerine local server kullanın.

```bash
cd /Users/sr/Desktop/App-Yeterlilik
python3 -m http.server 5173
```

Ardından `http://localhost:5173/index.html` adresine gidin.

## Özellikler
- Konu özetleri (tekrar/okunma takibi, favoriler, okuma ilerlemesi ve “kaldığın yerden devam et”)
- Hafıza kartları ve SRS (misafir: localStorage, giriş: Firestore senkron)
- Global arama, responsive arayüz, PWA (offline sayfa + service worker)
- Bildirim sistemi: in‑app inbox + (opsiyonel) push bildirimleri
- Admin paneli: kullanıcı seçip bildirim gönderme + temel istatistikler + admin yönetimi

## Yapı
- `index.html` – Uygulama iskeleti
- `theme/style.css` – Tema ve bileşen stilleri (import’lar dahil)
- `data/enriched_content.js` – Zenginleştirilmiş soru/analiz verisi
- `theme/topics.js` – Konu özetleri + okuma ilerlemesi + senkron
- `theme/firebase.js` – Auth/Firestore wrapper
- `admin.html` – Admin paneli
- `functions/` – Push bildirim backend (Cloud Functions)

## Firebase Kurulumu

1) Firebase Console → Authentication → Sign-in method: Google / Email / Phone etkinleştirin.
2) Firebase Console → Authentication → Settings → Authorized domains: kullandığınız domainleri ekleyin.
3) Firestore’u etkinleştirip kuralları deploy edin: `firestore.rules`.

> Proje config’i `theme/firebase-config.js` içinde (public) tutulur.

## Admin Yetkisi

Bir kullanıcıyı admin yapmak için Firestore’da `admins/{uid}` dokümanı oluşturun (dokümanın içeriği opsiyonel).

## Push Bildirimler (FCM)

1) Firebase Console → Project settings → Cloud Messaging → Web Push certificates → VAPID key alın.
2) `theme/firebase-config.js` içinde `FIREBASE_MESSAGING_VAPID_KEY` değerini doldurun.
3) Cloud Functions kurulum/deploy:
   - `cd functions && npm i`
   - `firebase deploy --only functions`

> Admin paneli in‑app inbox’a yazar; push için `functions/index.js` tetikleyicisi (`users/{uid}/inbox/*`) gerekir.
