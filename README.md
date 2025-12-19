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
- `theme/notifications.js` – In‑app bildirimler + Web Push aboneliği
- `workers/push-worker/` – Push bildirim gönderici (Cloudflare Workers)
- `functions/` – (Opsiyonel) Push backend (Firebase Cloud Functions, Blaze gerektirir)

## Firebase Kurulumu

1) Firebase Console → Authentication → Sign-in method: Google / Email / Phone etkinleştirin.
2) Firebase Console → Authentication → Settings → Authorized domains: kullandığınız domainleri ekleyin.
3) Firestore’u etkinleştirip kuralları deploy edin: `firestore.rules`.

> Proje config’i `theme/firebase-config.js` içinde (public) tutulur.

## Admin Yetkisi

Bir kullanıcıyı admin yapmak için Firestore’da `admins/{uid}` dokümanı oluşturun (dokümanın içeriği opsiyonel).

## Push Bildirimler

### Seçenek A (Ücretsiz): Cloudflare Workers Web Push (önerilen)

1) Cloudflare hesabı açın ve `wrangler` kurun:
   - `npm i -g wrangler`
   - `wrangler login`
2) VAPID anahtarlarını üretin:
   - `cd workers/push-worker`
   - `npm i`
   - `node scripts/generate-vapid.cjs`
3) `wrangler.toml` içinde `VAPID_PUBLIC_KEY` alanını doldurun.
4) Private key’i secret olarak girin:
   - `wrangler secret put VAPID_PRIVATE_KEY`
5) Deploy:
   - `wrangler deploy`
6) Uygulama tarafı config:
   - `theme/push-config.js` içine:
     - `CF_PUSH_WORKER_URL` (deploy sonrası worker URL)
     - `CF_WEBPUSH_PUBLIC_KEY` (VAPID public key)

> Kullanıcılar bildirim panelinden “Bildirimleri aç” diyerek abonelik oluşturur. Admin panelinden bildirim gönderince in‑app + push tetiklenir.

### Seçenek B: Firebase FCM + Cloud Functions (Blaze gerekir)

1) Firebase Console → Project settings → Cloud Messaging → Web Push certificates → VAPID key alın.
2) `theme/firebase-config.js` içinde `FIREBASE_MESSAGING_VAPID_KEY` değerini doldurun.
3) Cloud Functions kurulum/deploy:
   - `cd functions && npm i`
   - `firebase deploy --only functions`

> Not: Cloud Functions deploy’u için Firebase projesinin **Blaze** plana yükseltilmesi gerekir. (Ücretsiz planda çalışmaz.)
