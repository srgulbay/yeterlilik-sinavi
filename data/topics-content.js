/**
 * Topics Content - Konu Özetleri Veri Dosyası
 * Kapsamlı konu anlatımları
 */

const topicsData = [
    {
        id: 1,
        category: "bakteriyoloji",
        title: "Bacillus anthracis",
        subtitle: "Şarbon (Antraks) Etkeni",
        summary: "Gram pozitif, spor oluşturan, aerob, hareketsiz, kapsüllü basil. Biyolojik silah potansiyeli olan, üç klinik formda (deri, solunum, gastrointestinal) hastalık yapan önemli bir patojendir.",
        tags: ["Gram Pozitif", "Spor Yapan", "Biyolojik Silah", "Toksin", "Zoonoz"],
        sections: [
            {
                title: "Genel Özellikler",
                icon: "fas fa-microscope",
                content: `
                    <p><strong>Bacillus anthracis</strong>, Bacillus cinsinin en önemli insan patojenidir. Gram pozitif, aerob, hareketsiz, büyük (1-1.5 × 3-10 μm), uçları köşeli basil morfolojisindedir.</p>
                    
                    <div class="highlight-box">
                        <p class="highlight-box__title">Tanımlayıcı Özellikler</p>
                        <p class="highlight-box__content">
                            <strong>"Bambu Kamışı" veya "Vagon Dizisi"</strong> görünümü - Zincirlerde uç uca dizilmiş basiller karakteristiktir. Boyama ile metakromatik granüller görülebilir.
                        </p>
                    </div>

                    <ul class="feature-list">
                        <li class="feature-item"><b>Spor:</b> Merkezi veya submerkezi, hücreyi şişirmez (subterminal), eliptik</li>
                        <li class="feature-item"><b>Kapsül:</b> Poly-D-glutamik asit (protein yapıda, antifagositik) - pXO2 plazmidi kodlar</li>
                        <li class="feature-item"><b>Hareket:</b> HAREKETSİZ (diğer Bacillus türlerinden ayırıcı!)</li>
                        <li class="feature-item"><b>Hemoliz:</b> Non-hemolitik veya zayıf hemolitik (B. cereus güçlü β-hemolitik)</li>
                        <li class="feature-item"><b>Katalaz:</b> Pozitif</li>
                    </ul>

                    <div class="alert-box alert-box--warning">
                        <span class="alert-box__icon">⚠️</span>
                        <p class="alert-box__text"><strong>Dikkat:</strong> B. anthracis HAREKETSİZ, NON-HEMOLİTİK'tir. B. cereus ise hareketli ve β-hemolitik. Bu özellikler ayırıcı tanıda kritiktir!</p>
                    </div>
                `
            },
            {
                title: "Virülans Faktörleri",
                icon: "fas fa-biohazard",
                content: `
                    <p>B. anthracis'in virülansı <strong>iki büyük plazmide</strong> bağlıdır. Her iki plazmid de tam virülans için gereklidir:</p>

                    <table class="article-table">
                        <tr>
                            <th>Plazmid</th>
                            <th>Kodladığı</th>
                            <th>Fonksiyon</th>
                        </tr>
                        <tr>
                            <td><b>pXO1</b> (182 kb)</td>
                            <td>Toksin genleri (pagA, lef, cya)</td>
                            <td>Antraks toksini üretimi</td>
                        </tr>
                        <tr>
                            <td><b>pXO2</b> (96 kb)</td>
                            <td>Kapsül genleri (capBCAD)</td>
                            <td>Antifagositik kapsül</td>
                        </tr>
                    </table>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Antraks Toksini (A-B Toksin Modeli)</h4>
                        <p>Üç ayrı protein birlikte çalışarak toksin etkisi oluşturur:</p>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Protective Antigen (PA):</b> B komponenti - Hücre yüzeyine bağlanır, diğer iki komponentin girişini sağlar</li>
                            <li class="feature-item"><b>Edema Factor (EF):</b> Adenilat siklaz aktivitesi - cAMP↑ → Masif ödem</li>
                            <li class="feature-item"><b>Lethal Factor (LF):</b> Çinko metaloproteaz - MAPK yolağını keser → Makrofaj ölümü, sitokin fırtınası</li>
                        </ul>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Toksin Kombinasyonları</p>
                        <p class="highlight-box__content">
                            <strong>PA + EF = Ödem Toksini</strong> (lokal ödem)<br>
                            <strong>PA + LF = Letal Toksin</strong> (şok, ölüm)
                        </p>
                    </div>

                    <div class="alert-box alert-box--info">
                        <span class="alert-box__icon">ℹ️</span>
                        <p class="alert-box__text"><strong>Sınav Notu:</strong> Antraks toksin genleri <strong>plazmid (pXO1)</strong> kaynaklıdır, FAJ KAYNAKLI DEĞİLDİR! Difteri, kolera, shiga toksinleri faj kaynaklıyken, antraks toksini plazmid kodlar.</p>
                    </div>
                `
            },
            {
                title: "Klinik Formlar",
                icon: "fas fa-user-injured",
                content: `
                    <p>Antraks üç ana klinik formda karşımıza çıkar. Bulaş yoluna göre form değişir:</p>

                    <div class="sub-section">
                        <h4 class="sub-section__title">1. Deri Antraksi (%95)</h4>
                        <ul class="feature-list">
                            <li class="feature-item">En sık form, en iyi prognoz (%1 mortalite tedavisiz, %20 tedavisiz)</li>
                            <li class="feature-item"><b>Bulaş:</b> Sporların deriye teması (kesik, sıyrık)</li>
                            <li class="feature-item"><b>Lezyon:</b> Papül → Vezikül → <b>ESKİRAR (siyah kabuk)</b> - Ağrısız!</li>
                            <li class="feature-item"><b>"Malignant pustule"</b> veya <b>"Charbon" (kömür)</b> adı lezyondan gelir</li>
                            <li class="feature-item">Çevresinde jelatinöz ödem (toksin etkisi)</li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">2. Solunum (Pulmoner/İnhalasyon) Antraksi</h4>
                        <ul class="feature-list">
                            <li class="feature-item">En ağır form, %90-100 mortalite (geç tanı)</li>
                            <li class="feature-item"><b>Bulaş:</b> Spor inhalasyonu (yün, deri işçileri - "Woolsorter's disease")</li>
                            <li class="feature-item"><b>Başlangıç:</b> Grip benzeri (ateş, öksürük, miyalji)</li>
                            <li class="feature-item"><b>İlerleme:</b> Hemorajik mediastinit, <b>mediastinal genişleme (PA akciğer grafisi)</b></li>
                            <li class="feature-item"><b>Son dönem:</b> Dispne, siyanoz, şok, ölüm (24-36 saat içinde)</li>
                        </ul>
                        <div class="alert-box">
                            <span class="alert-box__icon">🚨</span>
                            <p class="alert-box__text">Akciğer grafisinde <strong>mediastinal genişleme</strong> görülmesi pulmoner antraksı düşündürür! (Hemorajik lenfadenit)</p>
                        </div>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">3. Gastrointestinal Antraks</h4>
                        <ul class="feature-list">
                            <li class="feature-item">Nadir, %25-60 mortalite</li>
                            <li class="feature-item"><b>Bulaş:</b> Kontamine et tüketimi (az pişmiş)</li>
                            <li class="feature-item"><b>Orofaringeal form:</b> Boğazda ülser, ödem, lenfadenopati</li>
                            <li class="feature-item"><b>İntestinal form:</b> Karın ağrısı, kanlı ishal, asit, şok</li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">4. Enjeksiyon Antraksi (Yeni tanımlanan)</h4>
                        <ul class="feature-list">
                            <li class="feature-item">IV uyuşturucu kullanıcılarında (kontamine eroin)</li>
                            <li class="feature-item">Derin yumuşak doku enfeksiyonu, nekrotizan fasiit benzeri</li>
                            <li class="feature-item">Avrupa'da salgınlar bildirilmiş</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "Laboratuvar Tanısı",
                icon: "fas fa-flask",
                content: `
                    <p>Tanı klinik şüphe ile başlar. <strong>Biyogüvenlik düzey 3 (BSL-3)</strong> laboratuvar şartları önerilir ancak rutin işlemler BSL-2'de yapılabilir.</p>

                    <table class="article-table">
                        <tr>
                            <th>Yöntem</th>
                            <th>Bulgu</th>
                            <th>Not</th>
                        </tr>
                        <tr>
                            <td>Gram boyama</td>
                            <td>Gram (+) büyük basil, zincir</td>
                            <td>"Bambu kamışı" görünümü</td>
                        </tr>
                        <tr>
                            <td>Polisöm kapsül boyama</td>
                            <td>India ink, M'Fadyean</td>
                            <td>Pembe kapsül (metilen mavisi)</td>
                        </tr>
                        <tr>
                            <td>Kültür</td>
                            <td>Koyun kanlı agar, 37°C</td>
                            <td>"Medusa başı" koloni</td>
                        </tr>
                        <tr>
                            <td>Motilite</td>
                            <td>Hareketsiz</td>
                            <td>Kritik ayırıcı özellik</td>
                        </tr>
                        <tr>
                            <td>PCR</td>
                            <td>pXO1, pXO2 genleri</td>
                            <td>Hızlı ve spesifik</td>
                        </tr>
                    </table>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Koloni Morfolojisi</p>
                        <p class="highlight-box__content">
                            <strong>"Medusa başı"</strong> veya <strong>"Aslan yelesi"</strong> görünümü - Koloniden dışa doğru uzanan, kıvrık zincirler halinde oluşum. Koloni kenarları düzensiz, mat, yapışkan olmayan, gri-beyaz renkte.
                        </p>
                    </div>

                    <ul class="feature-list">
                        <li class="feature-item"><b>Gamma faj lizis testi:</b> B. anthracis'i lizogenik faj tanır (pozitif = B. anthracis)</li>
                        <li class="feature-item"><b>String of pearls testi:</b> Penisilin varlığında sferik formlar ("inci dizisi")</li>
                        <li class="feature-item"><b>Bicarbonate agar:</b> CO₂ varlığında kapsül üretimi artar (mukoid koloni)</li>
                    </ul>
                `
            },
            {
                title: "Tedavi ve Profilaksi",
                icon: "fas fa-pills",
                content: `
                    <p>Tedavi hızlı başlamalıdır. <strong>Antibiyotik + Antitoksin</strong> kombinasyonu ağır vakalarda kullanılır.</p>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Antibiyotik Tedavisi</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>İlk seçenek:</b> Siprofloksasin veya Doksisiklin (ampirik)</li>
                            <li class="feature-item"><b>Sistemik hastalık:</b> IV Siprofloksasin + Meropenem + Linezolid (üçlü kombinasyon)</li>
                            <li class="feature-item"><b>Penisilin:</b> Duyarlılık kanıtlanırsa kullanılabilir (β-laktamaz nadir)</li>
                            <li class="feature-item"><b>Süre:</b> Deri antraksi 7-10 gün, sistemik 60 gün (spor germinasyonu)</li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Antitoksin Tedavisi</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Raxibacumab:</b> Anti-PA monoklonal antikor, FDA onaylı</li>
                            <li class="feature-item"><b>Obiltoxaximab:</b> Anti-PA monoklonal antikor</li>
                            <li class="feature-item"><b>Antraks immün globülin (AIG):</b> İnsan kaynaklı poliklonal</li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Aşı</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>AVA (Anthrax Vaccine Adsorbed):</b> PA içeren aselüler aşı</li>
                            <li class="feature-item"><b>Endikasyon:</b> Yüksek riskli meslek grupları, askeri personel</li>
                            <li class="feature-item"><b>Şema:</b> 0, 1, 6 ay + yıllık rapel</li>
                        </ul>
                    </div>

                    <div class="alert-box alert-box--warning">
                        <span class="alert-box__icon">⚠️</span>
                        <p class="alert-box__text"><strong>Post-exposure profilaksi:</strong> 60 gün antibiyotik + 3 doz aşı (0, 2, 4 hafta). Sporlar akciğerlerde haftalarca canlı kalıp germinasyon yapabilir!</p>
                    </div>
                `
            },
            {
                title: "Epidemiyoloji ve Biyoterörizm",
                icon: "fas fa-globe",
                content: `
                    <p>B. anthracis <strong>CDC Kategori A biyoterörizm ajanıdır</strong>. Sporların stabilite, üretim kolaylığı ve aerosol yayılım potansiyeli kritik tehdit oluşturur.</p>

                    <ul class="feature-list">
                        <li class="feature-item"><b>Doğal bulaş:</b> Hayvan teması, hayvansal ürünler (deri, yün, kemik unu)</li>
                        <li class="feature-item"><b>Endemik bölgeler:</b> Türkiye, Orta Asya, Afrika, Güney Amerika</li>
                        <li class="feature-item"><b>Risk meslekler:</b> Veteriner, kasap, çiftçi, deri/yün işçisi</li>
                        <li class="feature-item"><b>2001 ABD saldırısı:</b> Mektupla yayılan sporlar, 22 vaka, 5 ölüm</li>
                    </ul>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Spor Dayanıklılığı</p>
                        <p class="highlight-box__content">
                            Antraks sporları toprakta <strong>40+ yıl</strong> canlı kalabilir. Kaynatma, çoğu dezenfektan etkisizdir. <strong>Otoklav (121°C, 15 dk)</strong> veya <strong>sporisidal ajanlar</strong> gerekir.
                        </p>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Ayırıcı Özellikler Özeti</p>
                        <p class="mnemonic-box__text">HNK</p>
                        <p class="mnemonic-box__hint">Hareketsiz - Non-hemolitik - Kapsüllü</p>
                    </div>
                `
            },
            {
                title: "Sınav İçin Kritik Noktalar",
                icon: "fas fa-graduation-cap",
                content: `
                    <div class="highlight-box">
                        <p class="highlight-box__title">TUS/Yeterlilik Klasikleri</p>
                        <p class="highlight-box__content">
                            1. Antraks toksini <strong>PLAZMID (pXO1)</strong> kaynaklıdır, faj değil!<br>
                            2. B. anthracis <strong>HAREKETSİZ</strong> (diğer Bacillus hareketli)<br>
                            3. Deri lezyonu <strong>AĞRISIZ</strong>, siyah eskar<br>
                            4. Pulmoner antraksta <strong>mediastinal genişleme</strong><br>
                            5. Kapsül <strong>protein yapıda</strong> (poli-D-glutamik asit), polisakkarit değil!
                        </p>
                    </div>

                    <table class="article-table">
                        <tr>
                            <th>Özellik</th>
                            <th>B. anthracis</th>
                            <th>B. cereus</th>
                        </tr>
                        <tr>
                            <td>Hareket</td>
                            <td><b>Hareketsiz</b></td>
                            <td>Hareketli</td>
                        </tr>
                        <tr>
                            <td>Hemoliz</td>
                            <td>Non-hemolitik</td>
                            <td><b>β-hemolitik</b></td>
                        </tr>
                        <tr>
                            <td>Kapsül</td>
                            <td><b>Var</b></td>
                            <td>Yok</td>
                        </tr>
                        <tr>
                            <td>Gamma faj</td>
                            <td>Duyarlı</td>
                            <td>Dirençli</td>
                        </tr>
                        <tr>
                            <td>Penisilin</td>
                            <td>Duyarlı</td>
                            <td>Dirençli</td>
                        </tr>
                    </table>

                    <ul class="feature-list">
                        <li class="feature-item"><b>Soru tipi:</b> "Spor oluşturan, hareketsiz, kapsüllü patojen?" → B. anthracis</li>
                        <li class="feature-item"><b>Soru tipi:</b> "Siyah eskar + jelatinöz ödem?" → Deri antraksi</li>
                        <li class="feature-item"><b>Soru tipi:</b> "Mediastinal genişleme + solunum sıkıntısı?" → Pulmoner antraks</li>
                        <li class="feature-item"><b>Soru tipi:</b> "pXO1 ve pXO2 plazmidleri hangi bakteride?" → B. anthracis</li>
                    </ul>
                `
            }
        ]
    }
];

// Global export for dock.js
window.topicsData = topicsData;
