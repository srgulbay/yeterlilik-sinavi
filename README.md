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

## Firebase (GitHub Pages) Kurulumu

Bu proje statik olduğu için Firebase Auth + Firestore doğrudan GitHub Pages üzerinde çalışır.

1) Firebase Console → Project Settings → Web App oluşturun ve config’i alın.
2) [theme/firebase-config.js](theme/firebase-config.js) içindeki `window.FIREBASE_CONFIG = null;` satırını kendi config objeniz ile değiştirin.
3) Firebase Console → Authentication → Sign-in method: Google’ı etkinleştirin.
4) Firebase Console → Authentication → Settings → Authorized domains listesine `localhost` ve GitHub Pages domaininizi ekleyin.
5) Firestore’u etkinleştirip security rules’u kullanıcı bazlı (users/{uid}/...) olacak şekilde ayarlayın.

Örnek kurallar: [firestore.rules](firestore.rules)

## Firebase CLI (isteğe bağlı)

Bu repo için Firebase Hosting kullanacaksan:

1) `firebase login`
2) [./.firebaserc](.firebaserc) içindeki `YOUR_FIREBASE_PROJECT_ID` alanını kendi project id’n ile değiştir (Firebase Console → Project Settings).
3) `firebase deploy` (Hosting + Firestore rules)
