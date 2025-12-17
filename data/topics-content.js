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
    },
    {
        id: 2,
        category: "viroloji",
        title: "Ortomiksovirüsler",
        subtitle: "İnfluenza (Grip) Virüsleri",
        summary: "Segmentli, negatif iplikli RNA genomuna sahip, zarflı virüslerdir. Antijenik shift ve drift mekanizmalarıyla epidemi ve pandemilere neden olurlar. İnfluenza A, B ve C türlerini içerir.",
        tags: ["RNA Virüsü", "Segmentli Genom", "Zarflı", "İnfluenza", "Pandemi", "Antijenik Varyasyon"],
        sections: [
            {
                title: "Genel Özellikler",
                icon: "fas fa-virus",
                content: `
                    <p><strong>Ortomiksovirüsler</strong> (Orthomyxoviridae), solunum yolu enfeksiyonlarının en önemli viral etkenlerinden biridir. "Ortho" (düz) ve "myxo" (mukus) kelimelerinden türetilmiştir - mukus zarına afinitelerini yansıtır.</p>
                    
                    <div class="highlight-box">
                        <p class="highlight-box__title">Tanımlayıcı Özellikler</p>
                        <p class="highlight-box__content">
                            <strong>Segmentli Genom:</strong> 7-8 segmentli negatif polariteli ssRNA genomu. Bu yapı <strong>genetik reassortment (antijenik shift)</strong> için temel oluşturur ve pandemi potansiyeli yaratır.
                        </p>
                    </div>

                    <ul class="feature-list">
                        <li class="feature-item"><b>Genom:</b> (-) ssRNA, segmentli (İnfluenza A ve B: 8 segment, İnfluenza C: 7 segment)</li>
                        <li class="feature-item"><b>Boyut:</b> 80-120 nm, pleomorfik (yuvarlak veya filamentöz)</li>
                        <li class="feature-item"><b>Zarf:</b> Var - Konak hücre membranından köken alır</li>
                        <li class="feature-item"><b>Replikasyon:</b> <strong>ÇEKIRDEKTE</strong> (RNA virüsleri için istisna!)</li>
                        <li class="feature-item"><b>Simetri:</b> Helikal nükleokapsid</li>
                    </ul>

                    <div class="alert-box alert-box--warning">
                        <span class="alert-box__icon">⚠️</span>
                        <p class="alert-box__text"><strong>Dikkat:</strong> İnfluenza virüsü çekirdekte replike olan nadir RNA virüslerindendir! Diğerleri: Retrovirüsler, Bornavirüs, Hepatit D. Çoğu RNA virüsü sitoplazmada çoğalır.</p>
                    </div>
                `
            },
            {
                title: "Yapısal Proteinler ve Antijenik Yapı",
                icon: "fas fa-dna",
                content: `
                    <p>Virüs yüzeyinde iki kritik glikoprotein bulunur. Bunlar hem virülans hem de aşı/ilaç hedefi olarak önemlidir:</p>

                    <table class="article-table">
                        <tr>
                            <th>Protein</th>
                            <th>Fonksiyon</th>
                            <th>Klinik Önemi</th>
                        </tr>
                        <tr>
                            <td><b>Hemaglütinin (HA)</b></td>
                            <td>Sialik asit reseptörüne bağlanma, membran füzyonu</td>
                            <td>Nötralizan antikor hedefi, H1-H18 alt tipleri</td>
                        </tr>
                        <tr>
                            <td><b>Nöraminidaz (NA)</b></td>
                            <td>Sialik asidi keser, virüs salınımı, mukus penetrasyonu</td>
                            <td>Antiviral hedef (Oseltamivir), N1-N11 alt tipleri</td>
                        </tr>
                        <tr>
                            <td><b>M1 (Matriks)</b></td>
                            <td>Kapsid yapısı, virüs tomurcuklanması</td>
                            <td>En bol protein, tip spesifik antijen</td>
                        </tr>
                        <tr>
                            <td><b>M2 (İyon kanalı)</b></td>
                            <td>Proton kanalı, uncoating için pH düşürme</td>
                            <td>Amantadin hedefi (sadece İnfluenza A)</td>
                        </tr>
                        <tr>
                            <td><b>NP (Nükleoprotein)</b></td>
                            <td>RNA'yı sarar, tip spesifik</td>
                            <td>A, B, C ayrımında kullanılır</td>
                        </tr>
                    </table>

                    <div class="sub-section">
                        <h4 class="sub-section__title">İnfluenza Türleri Karşılaştırması</h4>
                        <table class="article-table">
                            <tr>
                                <th>Özellik</th>
                                <th>İnfluenza A</th>
                                <th>İnfluenza B</th>
                                <th>İnfluenza C</th>
                            </tr>
                            <tr>
                                <td>Konak</td>
                                <td>İnsan, kuş, domuz, at, deniz memelileri</td>
                                <td>Sadece insan</td>
                                <td>İnsan, domuz</td>
                            </tr>
                            <tr>
                                <td>Segment sayısı</td>
                                <td>8</td>
                                <td>8</td>
                                <td>7</td>
                            </tr>
                            <tr>
                                <td>Antijenik shift</td>
                                <td><b>VAR (Pandemi!)</b></td>
                                <td>Yok</td>
                                <td>Yok</td>
                            </tr>
                            <tr>
                                <td>Hastalık şiddeti</td>
                                <td>Ağır</td>
                                <td>Orta</td>
                                <td>Hafif</td>
                            </tr>
                            <tr>
                                <td>M2 proteini</td>
                                <td>Var</td>
                                <td>Yok (NB var)</td>
                                <td>Yok</td>
                            </tr>
                        </table>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Antijen Adlandırma Sistemi</p>
                        <p class="highlight-box__content">
                            <strong>A/California/7/2009 (H1N1)</strong><br>
                            A = Tip | California = İzolasyon yeri | 7 = Suş no | 2009 = Yıl | (H1N1) = Alt tip
                        </p>
                    </div>
                `
            },
            {
                title: "Antijenik Varyasyon Mekanizmaları",
                icon: "fas fa-random",
                content: `
                    <p>İnfluenza virüsünün sürekli değişimi, tekrarlayan enfeksiyonların ve aşı güncellemelerinin temel nedenidir:</p>

                    <div class="sub-section">
                        <h4 class="sub-section__title">1. Antijenik Drift (Kayma)</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Mekanizma:</b> RNA polimerazın düzeltme (proofreading) aktivitesinin olmaması → Nokta mutasyonlar birikimi</li>
                            <li class="feature-item"><b>Etkilenen genler:</b> Özellikle HA ve NA genleri</li>
                            <li class="feature-item"><b>Sonuç:</b> Mevcut antikorlardan kısmi kaçış</li>
                            <li class="feature-item"><b>Epidemiyoloji:</b> Yıllık <strong>EPİDEMİLER</strong></li>
                            <li class="feature-item"><b>Görüldüğü tipler:</b> İnfluenza A ve B</li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">2. Antijenik Shift (Sıçrama)</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Mekanizma:</b> Farklı türlerden gelen virüslerin <strong>genetik reassortment</strong>'ı (segment değişimi)</li>
                            <li class="feature-item"><b>Gereksinim:</b> Aynı hücrede iki farklı virüsün ko-enfeksiyonu</li>
                            <li class="feature-item"><b>Sonuç:</b> Tamamen yeni HA veya NA alt tipi → Toplumda bağışıklık yok</li>
                            <li class="feature-item"><b>Epidemiyoloji:</b> <strong>PANDEMİLER</strong></li>
                            <li class="feature-item"><b>Görüldüğü tipler:</b> <strong>SADECE İnfluenza A</strong> (zoonotik rezervuar nedeniyle)</li>
                        </ul>
                    </div>

                    <div class="alert-box alert-box--info">
                        <span class="alert-box__icon">ℹ️</span>
                        <p class="alert-box__text"><strong>Sınav Notu:</strong> Shift = Segment değişimi = Sadece A = Pandemi<br>
                        Drift = Nokta mutasyon = A ve B = Epidemi<br>
                        <strong>"Shift" kelimesinde "S" harfi = "Segment" ve "Sadece A"</strong></p>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Domuz "Karıştırma Kabı" (Mixing Vessel)</p>
                        <p class="highlight-box__content">
                            Domuz solunum epiteli hem α2,3 (kuş tipi) hem α2,6 (insan tipi) sialik asit reseptörü taşır. Bu nedenle kuş ve insan virüsleri domuzda aynı anda çoğalıp reassortment yapabilir → Yeni pandemik suşlar!
                        </p>
                    </div>
                `
            },
            {
                title: "Replikasyon Döngüsü",
                icon: "fas fa-sync-alt",
                content: `
                    <p>İnfluenza virüsünün yaşam döngüsü, antiviral ilaçların hedef noktalarını anlamak için kritiktir:</p>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Replikasyon Basamakları</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>1. Tutunma:</b> HA → Sialik asit reseptörü (α2,6 insan, α2,3 kuş)</li>
                            <li class="feature-item"><b>2. Giriş:</b> Reseptör aracılı endositoz</li>
                            <li class="feature-item"><b>3. Uncoating:</b> M2 iyon kanalı → Endozom asidifikasyonu → Viral RNA salınımı</li>
                            <li class="feature-item"><b>4. Çekirdek transportu:</b> vRNP kompleksleri çekirdeğe taşınır</li>
                            <li class="feature-item"><b>5. Transkripsiyon/Replikasyon:</b> Viral RNA polimeraz (PB1, PB2, PA) çekirdekte çalışır</li>
                            <li class="feature-item"><b>6. Protein sentezi:</b> mRNA → Sitoplazmada translasyon</li>
                            <li class="feature-item"><b>7. Montaj:</b> Yüzey proteinleri (HA, NA) Golgi'de glikozillenir</li>
                            <li class="feature-item"><b>8. Tomurcuklanma:</b> Hücre zarından çıkış</li>
                            <li class="feature-item"><b>9. Salınım:</b> NA sialik asidi keser → Virüs serbest kalır</li>
                        </ul>
                    </div>

                    <table class="article-table">
                        <tr>
                            <th>Basamak</th>
                            <th>Antiviral İlaç</th>
                            <th>Not</th>
                        </tr>
                        <tr>
                            <td>Uncoating (M2)</td>
                            <td>Amantadin, Rimantadin</td>
                            <td>Sadece A, yaygın direnç</td>
                        </tr>
                        <tr>
                            <td>Salınım (NA)</td>
                            <td>Oseltamivir, Zanamivir</td>
                            <td>A ve B, ilk seçenek</td>
                        </tr>
                        <tr>
                            <td>Cap-snatching</td>
                            <td>Baloxavir marboxil</td>
                            <td>Yeni, tek doz</td>
                        </tr>
                    </table>

                    <div class="alert-box alert-box--warning">
                        <span class="alert-box__icon">⚠️</span>
                        <p class="alert-box__text"><strong>Cap-Snatching:</strong> İnfluenza, konak mRNA'larından "cap" yapısını çalar (cap-snatching). Bu viral mRNA sentezi için gereklidir ve çekirdekte replikasyonun nedenlerinden biridir!</p>
                    </div>
                `
            },
            {
                title: "Klinik Tablolar",
                icon: "fas fa-user-injured",
                content: `
                    <p>İnfluenza enfeksiyonu asemptomatikten ölümcüle kadar geniş bir spektrumda seyredebilir:</p>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Klasik İnfluenza (Grip)</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>İnkübasyon:</b> 1-4 gün (ortalama 2 gün)</li>
                            <li class="feature-item"><b>Başlangıç:</b> ANİ, yüksek ateş (39-41°C), titreme</li>
                            <li class="feature-item"><b>Sistemik:</b> Şiddetli miyalji, artralji, baş ağrısı, halsizlik, iştahsızlık</li>
                            <li class="feature-item"><b>Solunum:</b> Kuru öksürük, boğaz ağrısı, rinore, göz yaşarması</li>
                            <li class="feature-item"><b>Süre:</b> Ateş 3-5 gün, öksürük 2-3 hafta sürebilir</li>
                        </ul>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Grip vs. Soğuk Algınlığı</p>
                        <p class="highlight-box__content">
                            <strong>Grip:</strong> Ani başlangıç, yüksek ateş, şiddetli miyalji, yatağa düşürür<br>
                            <strong>Soğuk algınlığı:</strong> Yavaş başlangıç, hafif ateş, rinore ön planda, günlük aktivite devam eder
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Komplikasyonlar</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Primer viral pnömoni:</b> Nadir ama ölümcül, bilateral interstisyel infiltrasyon, ARDS gelişebilir</li>
                            <li class="feature-item"><b>Sekonder bakteriyel pnömoni:</b> En sık komplikasyon. Etkenler: <strong>S. pneumoniae, S. aureus, H. influenzae</strong></li>
                            <li class="feature-item"><b>Reye sendromu:</b> Aspirinle birlikte → Ensefalopati + Karaciğer yağlanması (çocuklarda)</li>
                            <li class="feature-item"><b>Miyokardit/Perikardit:</b> Nadir</li>
                            <li class="feature-item"><b>Ensefalit:</b> Nadir</li>
                            <li class="feature-item"><b>Guillain-Barré sendromu:</b> Post-enfeksiyöz</li>
                        </ul>
                    </div>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>Reye Sendromu:</strong> 18 yaş altında grip veya suçiçeği + Aspirin kullanımı → Akut ensefalopati + Mikroveziküler karaciğer yağlanması. <strong>Çocuklarda aspirin kontrendike!</strong></p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Yüksek Risk Grupları</h4>
                        <ul class="feature-list">
                            <li class="feature-item">65 yaş üstü, 2 yaş altı</li>
                            <li class="feature-item">Gebeler (özellikle 2. ve 3. trimester)</li>
                            <li class="feature-item">Kronik hastalıklar (KOAH, astım, DM, kalp hastalığı)</li>
                            <li class="feature-item">İmmünsüpresifler</li>
                            <li class="feature-item">Morbid obezite (BMI ≥40)</li>
                            <li class="feature-item">Bakımevi sakinleri</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "Laboratuvar Tanısı",
                icon: "fas fa-flask",
                content: `
                    <p>Tanı klinik olarak konabilir ancak epidemiyolojik sürveyans ve antiviral tedavi kararı için laboratuvar doğrulaması önemlidir:</p>

                    <table class="article-table">
                        <tr>
                            <th>Yöntem</th>
                            <th>Avantaj</th>
                            <th>Dezavantaj</th>
                        </tr>
                        <tr>
                            <td><b>Hızlı Antijen Testi (RIDT)</b></td>
                            <td>15-30 dk sonuç, ucuz, kolay</td>
                            <td>Düşük duyarlılık (%50-70)</td>
                        </tr>
                        <tr>
                            <td><b>RT-PCR</b></td>
                            <td>Altın standart, yüksek duyarlılık/özgüllük, tiplendirme</td>
                            <td>Pahalı, uzun süre, ekipman gerektirir</td>
                        </tr>
                        <tr>
                            <td><b>DFA (Direkt Floresan Antikor)</b></td>
                            <td>Birkaç saat, panel tarama</td>
                            <td>Deneyimli personel gerektirir</td>
                        </tr>
                        <tr>
                            <td><b>Viral Kültür</b></td>
                            <td>Referans standart, izolasyon</td>
                            <td>3-7 gün, rutin tanıda kullanılmaz</td>
                        </tr>
                        <tr>
                            <td><b>Seroloji</b></td>
                            <td>Retrospektif tanı, epidemiyolojik çalışmalar</td>
                            <td>Akut tanıda faydasız (4 kat titre artışı gerekir)</td>
                        </tr>
                    </table>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Örnek Alma</p>
                        <p class="highlight-box__content">
                            <strong>Optimal örnek:</strong> Nazofaringeal sürüntü veya aspirat<br>
                            <strong>Zamanlama:</strong> Semptom başlangıcından sonraki ilk 3-4 gün (viral yük en yüksek)<br>
                            <strong>Transport:</strong> Viral transport besiyerinde, +4°C'de
                        </p>
                    </div>

                    <ul class="feature-list">
                        <li class="feature-item"><b>Hemaglütinasyon İnhibisyon (HAI):</b> Serotiplendirme için referans yöntem</li>
                        <li class="feature-item"><b>Kültür ortamı:</b> MDCK hücreleri (köpek böbrek), embriyonlu yumurta</li>
                        <li class="feature-item"><b>Sitopatik etki:</b> Belirgin değil, hemaglütinasyon ile tespit edilir</li>
                    </ul>
                `
            },
            {
                title: "Tedavi",
                icon: "fas fa-pills",
                content: `
                    <p>Antiviral tedavi <strong>semptom başlangıcından sonraki 48 saat içinde</strong> başlanırsa en etkilidir:</p>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Nöraminidaz İnhibitörleri (İlk Seçenek)</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Oseltamivir (Tamiflu):</b> Oral, 75 mg 2x1, 5 gün. Çocuklarda ve gebelerde kullanılabilir</li>
                            <li class="feature-item"><b>Zanamivir (Relenza):</b> İnhaler, 10 mg 2x1, 5 gün. Astım/KOAH'ta dikkatli</li>
                            <li class="feature-item"><b>Peramivir:</b> IV, tek doz. Hospitalize hastalarda</li>
                            <li class="feature-item"><b>Etki:</b> İnfluenza A ve B'ye etkili</li>
                            <li class="feature-item"><b>Mekanizma:</b> NA enzimini inhibe eder → Virüs hücreden çıkamaz</li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">M2 İnhibitörleri (Artık Önerilmez)</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Amantadin, Rimantadin:</b> Sadece İnfluenza A'ya etkili</li>
                            <li class="feature-item"><b>Mekanizma:</b> M2 iyon kanalını bloke eder → Uncoating engellenir</li>
                            <li class="feature-item"><b>Sorun:</b> Yaygın direnç (>%99), İnfluenza B'ye etkisiz</li>
                            <li class="feature-item"><b>Yan etkiler:</b> SSS toksisitesi (amantadin)</li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Yeni Antiviraller</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Baloxavir marboxil (Xofluza):</b> Cap-bağımlı endonükleaz inhibitörü. Tek doz oral. A ve B'ye etkili</li>
                            <li class="feature-item"><b>Favipiravir:</b> RNA polimeraz inhibitörü, geniş spektrum</li>
                        </ul>
                    </div>

                    <div class="alert-box alert-box--info">
                        <span class="alert-box__icon">ℹ️</span>
                        <p class="alert-box__text"><strong>Tedavi Endikasyonları:</strong><br>
                        • Hospitalize hastalar<br>
                        • Ağır veya komplike grip<br>
                        • Yüksek risk grupları<br>
                        • 48 saat içinde başvuran tüm doğrulanmış vakalar</p>
                    </div>
                `
            },
            {
                title: "Korunma ve Aşılama",
                icon: "fas fa-shield-virus",
                content: `
                    <p>İnfluenza aşısı her yıl güncellenir ve en etkili korunma yöntemidir:</p>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Aşı Tipleri</h4>
                        <table class="article-table">
                            <tr>
                                <th>Aşı Tipi</th>
                                <th>Özellik</th>
                                <th>Uygulama</th>
                            </tr>
                            <tr>
                                <td><b>IIV (İnaktive)</b></td>
                                <td>Ölü virüs, en yaygın</td>
                                <td>IM, 6 ay üstü herkese</td>
                            </tr>
                            <tr>
                                <td><b>LAIV (Canlı Atenüe)</b></td>
                                <td>Soğuğa adapte, zayıflatılmış</td>
                                <td>İntranazal, 2-49 yaş sağlıklı bireyler</td>
                            </tr>
                            <tr>
                                <td><b>Rekombinant (RIV)</b></td>
                                <td>Yumurta içermez</td>
                                <td>Yumurta alerjisinde</td>
                            </tr>
                            <tr>
                                <td><b>Yüksek Doz IIV</b></td>
                                <td>4x antijen içerir</td>
                                <td>65 yaş üstü</td>
                            </tr>
                        </table>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Aşı İçeriği (2024-2025 Örnek)</p>
                        <p class="highlight-box__content">
                            <strong>Kuadrivalan:</strong> 2 İnfluenza A (H1N1 ve H3N2) + 2 İnfluenza B (Victoria ve Yamagata soyları)<br>
                            Her yıl DSÖ önerisiyle güncellenir (Kuzey yarımküre: Şubat, Güney: Eylül)
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Aşı Kontrendikasyonları</h4>
                        <ul class="feature-list">
                            <li class="feature-item">Aşı bileşenlerine ciddi alerjik reaksiyon öyküsü</li>
                            <li class="feature-item"><b>LAIV kontrendike:</b> Gebeler, immünsüpresifler, 2 yaş altı, astımlılar, aspirin kullanan çocuklar</li>
                            <li class="feature-item">Ağır yumurta alerjisinde: Rekombinant aşı veya tıbbi gözetimde IIV</li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Kemoprofilaksi</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>İndikasyon:</b> Aşı kontrendike veya yetersiz kaldığında temas sonrası</li>
                            <li class="feature-item"><b>İlaç:</b> Oseltamivir 75 mg 1x1, 7-10 gün veya temas süresince</li>
                            <li class="feature-item"><b>Zanamivir:</b> 10 mg 1x1 inhaler, alternatif</li>
                        </ul>
                    </div>

                    <div class="alert-box alert-box--warning">
                        <span class="alert-box__icon">⚠️</span>
                        <p class="alert-box__text"><strong>LAIV (Canlı aşı):</strong> Canlı virüs içerdiğinden immünsüpresif hastalara, gebelere ve 2 yaş altına <strong>KESİNLİKLE YAPILMAZ!</strong> İnaktif aşı (IIV) bu gruplarda tercih edilir.</p>
                    </div>
                `
            },
            {
                title: "Epidemiyoloji ve Pandemiler",
                icon: "fas fa-globe",
                content: `
                    <p>İnfluenza, insanlık tarihinin en yıkıcı pandemilerine neden olmuştur:</p>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Önemli Pandemiler</h4>
                        <table class="article-table">
                            <tr>
                                <th>Pandemi</th>
                                <th>Yıl</th>
                                <th>Alt Tip</th>
                                <th>Ölüm</th>
                            </tr>
                            <tr>
                                <td><b>İspanyol Gribi</b></td>
                                <td>1918-1919</td>
                                <td>H1N1</td>
                                <td>50-100 milyon</td>
                            </tr>
                            <tr>
                                <td><b>Asya Gribi</b></td>
                                <td>1957-1958</td>
                                <td>H2N2</td>
                                <td>1-2 milyon</td>
                            </tr>
                            <tr>
                                <td><b>Hong Kong Gribi</b></td>
                                <td>1968-1969</td>
                                <td>H3N2</td>
                                <td>1 milyon</td>
                            </tr>
                            <tr>
                                <td><b>Domuz Gribi</b></td>
                                <td>2009-2010</td>
                                <td>H1N1pdm09</td>
                                <td>~284.000</td>
                            </tr>
                        </table>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Kuş Gribi Tehdidi</p>
                        <p class="highlight-box__content">
                            <strong>H5N1:</strong> Yüksek mortalite (%60), sınırlı insan-insan bulaşı<br>
                            <strong>H7N9:</strong> Çin'de sporadik vakalar, pandemi potansiyeli<br>
                            Kuş → İnsan bulaşı olur ancak etkin insan-insan bulaşı için mutasyon gerekir
                        </p>
                    </div>

                    <ul class="feature-list">
                        <li class="feature-item"><b>Mevsimsel dağılım:</b> Kuzey yarımkürede Kasım-Mart, güneyde Mayıs-Eylül</li>
                        <li class="feature-item"><b>Bulaş:</b> Damlacık (>5 μm, 1-2 m), aerosol (<5 μm), temas</li>
                        <li class="feature-item"><b>Bulaştırıcılık:</b> Semptom başlangıcından 1 gün önce - 5-7 gün sonra</li>
                        <li class="feature-item"><b>R0 (Mevsimsel):</b> 1.2-1.4</li>
                        <li class="feature-item"><b>R0 (Pandemik):</b> 1.5-2.5</li>
                    </ul>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Pandemi Şartları</p>
                        <p class="mnemonic-box__text">YEB</p>
                        <p class="mnemonic-box__hint">Yeni alt tip - Etkin insan-insan bulaşı - Bağışıklık yok</p>
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
                            1. <strong>Segmentli genom</strong> → Reassortment → Shift → Pandemi<br>
                            2. <strong>Çekirdekte replikasyon</strong> yapan RNA virüsü!<br>
                            3. Shift <strong>sadece İnfluenza A</strong>'da görülür<br>
                            4. <strong>Domuz = Mixing vessel</strong> (karıştırma kabı)<br>
                            5. M2 proteini <strong>sadece İnfluenza A</strong>'da var<br>
                            6. <strong>Reye sendromu:</strong> Grip/Suçiçeği + Aspirin (çocuk)<br>
                            7. Sekonder bakteriyel pnömoni: <strong>S. aureus, S. pneumoniae</strong>
                        </p>
                    </div>

                    <table class="article-table">
                        <tr>
                            <th>Karşılaştırma</th>
                            <th>Drift</th>
                            <th>Shift</th>
                        </tr>
                        <tr>
                            <td>Mekanizma</td>
                            <td>Nokta mutasyon</td>
                            <td>Reassortment</td>
                        </tr>
                        <tr>
                            <td>Hız</td>
                            <td>Kademeli</td>
                            <td>Ani</td>
                        </tr>
                        <tr>
                            <td>Sonuç</td>
                            <td>Epidemi</td>
                            <td><b>Pandemi</b></td>
                        </tr>
                        <tr>
                            <td>Tipler</td>
                            <td>A ve B</td>
                            <td><b>Sadece A</b></td>
                        </tr>
                    </table>

                    <ul class="feature-list">
                        <li class="feature-item"><b>Soru tipi:</b> "Segmentli genom, zarflı, çekirdekte çoğalan RNA virüsü?" → İnfluenza</li>
                        <li class="feature-item"><b>Soru tipi:</b> "Grip sonrası S. aureus pnömonisi?" → Sekonder bakteriyel pnömoni</li>
                        <li class="feature-item"><b>Soru tipi:</b> "Antijenik shift ile pandemi yapan virüs?" → İnfluenza A</li>
                        <li class="feature-item"><b>Soru tipi:</b> "Amantadin hangi virüse etkili?" → Sadece İnfluenza A (M2 proteini)</li>
                        <li class="feature-item"><b>Soru tipi:</b> "Oseltamivir hedefi?" → Nöraminidaz</li>
                        <li class="feature-item"><b>Soru tipi:</b> "Çocukta grip + aspirin sonrası ensefalopati?" → Reye sendromu</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 3,
        category: "bakteriyoloji",
        title: "Streptococcus agalactiae",
        subtitle: "Grup B Streptokok (GBS)",
        summary: "β-hemolitik, Lancefield Grup B antijeni taşıyan, Gram pozitif kok. Yenidoğan sepsis ve menenjitinin en sık etkeni olup, gebelikte tarama ve intrapartum profilaksi ile önlenebilir.",
        tags: ["Gram Pozitif", "β-Hemolitik", "Yenidoğan Sepsis", "GBS", "CAMP Testi"],
        sections: [
            {
                title: "Genel Özellikler",
                icon: "fas fa-microscope",
                content: `
                    <p><strong>Streptococcus agalactiae</strong>, Lancefield sınıflamasında <strong>Grup B</strong> antijeni taşıyan, β-hemolitik streptokoktur. Özellikle yenidoğan enfeksiyonlarındaki rolü nedeniyle klinik önemi büyüktür.</p>
                    
                    <div class="highlight-box">
                        <p class="highlight-box__title">Tanımlayıcı Özellikler</p>
                        <p class="highlight-box__content">
                            <strong>CAMP Testi Pozitif:</strong> S. aureus'un β-hemolizini ile sinerjistik etki → Ok ucu şeklinde hemoliz. GBS tanısında patognomonik test!
                        </p>
                    </div>

                    <ul class="feature-list">
                        <li class="feature-item"><b>Morfoloji:</b> Gram pozitif kok, zincir oluşturur</li>
                        <li class="feature-item"><b>Hemoliz:</b> β-hemolitik (tam hemoliz, berrak zon)</li>
                        <li class="feature-item"><b>Lancefield grubu:</b> Grup B (hücre duvarı karbonhidrat antijeni)</li>
                        <li class="feature-item"><b>Katalaz:</b> Negatif (tüm streptokoklar gibi)</li>
                        <li class="feature-item"><b>Oksidaz:</b> Negatif</li>
                        <li class="feature-item"><b>Fakültatif anaerob:</b> Evet</li>
                    </ul>

                    <div class="alert-box alert-box--info">
                        <span class="alert-box__icon">ℹ️</span>
                        <p class="alert-box__text"><strong>Kolonizasyon:</strong> Sağlıklı kadınların %15-30'unda vajinal ve rektal kolonizasyon bulunur. Asemptomatik taşıyıcılık klinik açıdan önemlidir!</p>
                    </div>
                `
            },
            {
                title: "Virülans Faktörleri",
                icon: "fas fa-biohazard",
                content: `
                    <p>GBS'nin patogenezi çeşitli virülans faktörlerine bağlıdır:</p>

                    <table class="article-table">
                        <tr>
                            <th>Virülans Faktörü</th>
                            <th>Fonksiyon</th>
                            <th>Klinik Önemi</th>
                        </tr>
                        <tr>
                            <td><b>Polisakkarit Kapsül</b></td>
                            <td>Antifagositik, kompleman inhibisyonu</td>
                            <td>Ana virülans faktörü, serotiplendirmede kullanılır (Ia, Ib, II-IX)</td>
                        </tr>
                        <tr>
                            <td><b>C5a Peptidaz</b></td>
                            <td>Kompleman C5a'yı parçalar</td>
                            <td>Nötrofil kemotaksisini engeller</td>
                        </tr>
                        <tr>
                            <td><b>β-Hemolizin/Sitoalizin</b></td>
                            <td>Hücre lizisi, pigment üretimi</td>
                            <td>Doku hasarı, CAMP faktörü</td>
                        </tr>
                        <tr>
                            <td><b>Sialik Asit</b></td>
                            <td>Moleküler benzerlik (mimetizm)</td>
                            <td>İmmün kaçış</td>
                        </tr>
                        <tr>
                            <td><b>Pili (Fimbriae)</b></td>
                            <td>Epitel hücrelere tutunma</td>
                            <td>Kolonizasyon</td>
                        </tr>
                    </table>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Serotiplendirme</p>
                        <p class="highlight-box__content">
                            Kapsüler polisakkarite göre 10 serotip: <strong>Ia, Ib, II, III, IV, V, VI, VII, VIII, IX</strong><br>
                            <strong>Serotip III:</strong> Yenidoğan menenjitinin en sık etkeni!<br>
                            <strong>Serotip V:</strong> Erişkin invaziv enfeksiyonlarda sık
                        </p>
                    </div>

                    <div class="alert-box alert-box--warning">
                        <span class="alert-box__icon">⚠️</span>
                        <p class="alert-box__text"><strong>CAMP Faktörü:</strong> GBS'nin ürettiği protein, S. aureus'un sfingomyelinaz C'si (β-toksin) ile sinerjistik etki gösterir. Bu etkileşim CAMP testinin temelini oluşturur.</p>
                    </div>
                `
            },
            {
                title: "Klinik Tablolar - Yenidoğan",
                icon: "fas fa-baby",
                content: `
                    <p>GBS, yenidoğan döneminde iki farklı klinik tablo ile karşımıza çıkar:</p>

                    <div class="sub-section">
                        <h4 class="sub-section__title">1. Erken Başlangıçlı Hastalık (Early-Onset Disease)</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Zamanlama:</b> Doğumdan sonraki ilk 7 gün içinde (genellikle ilk 24-48 saat)</li>
                            <li class="feature-item"><b>Bulaş:</b> Vertikal (doğum kanalından geçiş sırasında)</li>
                            <li class="feature-item"><b>Klinik:</b> Sepsis, pnömoni, menenjit</li>
                            <li class="feature-item"><b>Mortalite:</b> %5-10 (tedavi ile)</li>
                            <li class="feature-item"><b>Risk faktörleri:</b> Prematürite, uzamış membran rüptürü (>18 saat), maternal GBS kolonizasyonu, intrapartum ateş</li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">2. Geç Başlangıçlı Hastalık (Late-Onset Disease)</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Zamanlama:</b> 7 gün - 3 ay arası</li>
                            <li class="feature-item"><b>Bulaş:</b> Horizontal (hastane, toplum, anne)</li>
                            <li class="feature-item"><b>Klinik:</b> <strong>Menenjit</strong> daha sık (serotip III)</li>
                            <li class="feature-item"><b>Mortalite:</b> %2-6</li>
                            <li class="feature-item"><b>Sekel:</b> İşitme kaybı, nörolojik hasar (%25-50)</li>
                        </ul>
                    </div>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>Kritik:</strong> GBS, yenidoğan döneminde <strong>bakteriyel sepsis ve menenjitin en sık etkenidir!</strong> Erken tanı ve tedavi hayat kurtarıcıdır.</p>
                    </div>

                    <table class="article-table">
                        <tr>
                            <th>Özellik</th>
                            <th>Erken Başlangıç</th>
                            <th>Geç Başlangıç</th>
                        </tr>
                        <tr>
                            <td>Zaman</td>
                            <td>0-7 gün</td>
                            <td>7 gün - 3 ay</td>
                        </tr>
                        <tr>
                            <td>Bulaş</td>
                            <td>Vertikal</td>
                            <td>Horizontal</td>
                        </tr>
                        <tr>
                            <td>Ana klinik</td>
                            <td>Sepsis, pnömoni</td>
                            <td><b>Menenjit</b></td>
                        </tr>
                        <tr>
                            <td>Önlenebilir mi?</td>
                            <td><b>Evet (IAP)</b></td>
                            <td>Hayır</td>
                        </tr>
                    </table>
                `
            },
            {
                title: "Klinik Tablolar - Erişkin ve Gebeler",
                icon: "fas fa-user-injured",
                content: `
                    <p>GBS sadece yenidoğanlarda değil, gebelerde ve erişkinlerde de ciddi enfeksiyonlara neden olabilir:</p>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Gebelerde GBS Enfeksiyonları</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Asemptomatik bakteriüri:</b> En sık, tarama ile saptanır</li>
                            <li class="feature-item"><b>Üriner sistem enfeksiyonu:</b> Sistit, piyelonefrit</li>
                            <li class="feature-item"><b>Koryoamnionit:</b> İntrauterin enfeksiyon</li>
                            <li class="feature-item"><b>Endometrit:</b> Postpartum</li>
                            <li class="feature-item"><b>Bakteriyemi:</b> Nadiren</li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Erişkinlerde (Gebe Olmayan)</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Risk grupları:</b> Diyabet, kanser, karaciğer hastalığı, immünsüpresyon, >65 yaş</li>
                            <li class="feature-item"><b>Deri ve yumuşak doku:</b> Selülit, apse, nekrotizan fasiit (nadir)</li>
                            <li class="feature-item"><b>Kemik ve eklem:</b> Osteomiyelit, septik artrit</li>
                            <li class="feature-item"><b>Bakteriyemi:</b> Primer veya sekonder</li>
                            <li class="feature-item"><b>Pnömoni:</b> Özellikle yaşlılarda</li>
                            <li class="feature-item"><b>Endokardit:</b> Nadir ama ciddi</li>
                        </ul>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Artmakta Olan Sorun</p>
                        <p class="highlight-box__content">
                            Erişkin invaziv GBS enfeksiyonları son yıllarda artmaktadır. Özellikle <strong>diyabetik ayak enfeksiyonları</strong> ve <strong>yaşlılarda bakteriyemi</strong> önemli klinik tablolardır.
                        </p>
                    </div>
                `
            },
            {
                title: "Laboratuvar Tanısı",
                icon: "fas fa-flask",
                content: `
                    <p>GBS tanısında çeşitli laboratuvar yöntemleri kullanılır:</p>

                    <table class="article-table">
                        <tr>
                            <th>Yöntem</th>
                            <th>Sonuç</th>
                            <th>Kullanım</th>
                        </tr>
                        <tr>
                            <td><b>Gram boyama</b></td>
                            <td>Gram (+) koklar, zincir</td>
                            <td>Hızlı ön tanı</td>
                        </tr>
                        <tr>
                            <td><b>Kanlı agar kültürü</b></td>
                            <td>β-hemoliz (dar zon)</td>
                            <td>Altın standart</td>
                        </tr>
                        <tr>
                            <td><b>CAMP testi</b></td>
                            <td><strong>POZİTİF</strong> (ok ucu hemoliz)</td>
                            <td>Tanısal, S. aureus ile</td>
                        </tr>
                        <tr>
                            <td><b>Hipürat hidrolizi</b></td>
                            <td><strong>POZİTİF</strong></td>
                            <td>Diğer β-hemolitiklerden ayırım</td>
                        </tr>
                        <tr>
                            <td><b>Basitrasin duyarlılığı</b></td>
                            <td><strong>DİRENÇLİ</strong></td>
                            <td>GAS'tan ayırım (GAS duyarlı)</td>
                        </tr>
                        <tr>
                            <td><b>Lateks aglütinasyon</b></td>
                            <td>Grup B antijeni (+)</td>
                            <td>Hızlı gruplama</td>
                        </tr>
                        <tr>
                            <td><b>Kromojenik agar</b></td>
                            <td>Renkli koloniler</td>
                            <td>Tarama kolaylığı</td>
                        </tr>
                        <tr>
                            <td><b>PCR (NAAT)</b></td>
                            <td>GBS DNA</td>
                            <td>Hızlı intrapartum tarama</td>
                        </tr>
                    </table>

                    <div class="highlight-box">
                        <p class="highlight-box__title">CAMP Testi Prosedürü</p>
                        <p class="highlight-box__content">
                            Koyun kanlı agarda S. aureus çizgisine dik olarak GBS çizilir. 37°C'de inkübasyondan sonra kesişim noktasında <strong>ok başı şeklinde</strong> genişlemiş hemoliz zonu görülür. Bu sinerjistik hemoliz GBS için karakteristiktir.
                        </p>
                    </div>

                    <div class="alert-box alert-box--info">
                        <span class="alert-box__icon">ℹ️</span>
                        <p class="alert-box__text"><strong>Tarama Örneği:</strong> Vajinal ve rektal sürüntü birlikte alınmalı (vajino-rektal sürüntü). Tek başına vajinal sürüntü kolonizasyonun %10-20'sini kaçırır!</p>
                    </div>
                `
            },
            {
                title: "Tedavi",
                icon: "fas fa-pills",
                content: `
                    <p>GBS enfeksiyonlarında <strong>penisilin</strong> ilk seçenek tedavidir:</p>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Antibiyotik Tedavisi</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>İlk seçenek:</b> Penisilin G (IV)</li>
                            <li class="feature-item"><b>Alternatif:</b> Ampisilin</li>
                            <li class="feature-item"><b>Penisilin alerjisi:</b> Sefazolin (düşük risk), Klindamisin veya Vankomisin (yüksek risk)</li>
                            <li class="feature-item"><b>Menenjit:</b> Yüksek doz Penisilin G veya Ampisilin (± Gentamisin sinerjisi)</li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Direnç Durumu</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Penisilin:</b> Direnç bildirilmemiş (MIC artışı nadiren)</li>
                            <li class="feature-item"><b>Eritromisin:</b> %25-35 direnç</li>
                            <li class="feature-item"><b>Klindamisin:</b> %15-25 direnç</li>
                            <li class="feature-item"><b>Vankomisin:</b> Direnç yok</li>
                        </ul>
                    </div>

                    <table class="article-table">
                        <tr>
                            <th>Klinik Tablo</th>
                            <th>Tedavi</th>
                            <th>Süre</th>
                        </tr>
                        <tr>
                            <td>Neonatal sepsis</td>
                            <td>Ampisilin + Gentamisin</td>
                            <td>10-14 gün</td>
                        </tr>
                        <tr>
                            <td>Neonatal menenjit</td>
                            <td>Ampisilin (yüksek doz)</td>
                            <td>Minimum 14-21 gün</td>
                        </tr>
                        <tr>
                            <td>Erişkin bakteriyemi</td>
                            <td>Penisilin G</td>
                            <td>10-14 gün</td>
                        </tr>
                        <tr>
                            <td>Osteomiyelit</td>
                            <td>Penisilin G</td>
                            <td>4-6 hafta</td>
                        </tr>
                    </table>

                    <div class="alert-box alert-box--warning">
                        <span class="alert-box__icon">⚠️</span>
                        <p class="alert-box__text"><strong>Önemli:</strong> Penisilin alerjisi öyküsü varsa, alerji tipi sorgulanmalı. IgE aracılı (anafilaksi) değilse sefazolin güvenle kullanılabilir. Belirsiz veya ciddi alerjide duyarlılık testine göre klindamisin veya vankomisin tercih edilir.</p>
                    </div>
                `
            },
            {
                title: "Korunma - İntrapartum Antibiyotik Profilaksisi (IAP)",
                icon: "fas fa-shield-virus",
                content: `
                    <p>Erken başlangıçlı GBS hastalığı, <strong>intrapartum antibiyotik profilaksisi (IAP)</strong> ile önlenebilir:</p>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Tarama Stratejisi</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Zamanlama:</b> 36-37. gebelik haftasında (eski: 35-37 hafta)</li>
                            <li class="feature-item"><b>Örnek:</b> Vajino-rektal sürüntü</li>
                            <li class="feature-item"><b>Yöntem:</b> Kültür (altın standart) veya NAAT (hızlı sonuç)</li>
                            <li class="feature-item"><b>Sonuç geçerliliği:</b> 5 hafta</li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">IAP Endikasyonları</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Pozitif GBS taraması</b> (en sık endikasyon)</li>
                            <li class="feature-item"><b>GBS bakteriürisi</b> mevcut gebelikte (herhangi bir dönemde)</li>
                            <li class="feature-item"><b>Önceki bebekte invaziv GBS hastalığı</b></li>
                            <li class="feature-item"><b>Bilinmeyen GBS durumu</b> + risk faktörü:
                                <ul>
                                    <li>- <37 hafta doğum</li>
                                    <li>- Membran rüptüründen ≥18 saat geçmesi</li>
                                    <li>- İntrapartum ateş ≥38°C</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">IAP Rejimi</p>
                        <p class="highlight-box__content">
                            <strong>İlk seçenek:</strong> Penisilin G 5 milyon Ü IV yükleme, ardından 2.5-3 milyon Ü her 4 saatte doğuma kadar<br>
                            <strong>Alternatif:</strong> Ampisilin 2 g IV yükleme, ardından 1 g her 4 saatte<br>
                            <strong>Penisilin alerjisi:</strong> Sefazolin, klindamisin veya vankomisin<br>
                            <strong>Optimal süre:</strong> Doğumdan en az 4 saat önce başlanmalı
                        </p>
                    </div>

                    <div class="alert-box alert-box--success">
                        <span class="alert-box__icon">✅</span>
                        <p class="alert-box__text"><strong>Başarı:</strong> IAP uygulaması ile erken başlangıçlı GBS hastalığı insidansı %80 azalmıştır (1990'lardan bu yana). Ancak geç başlangıçlı hastalık üzerine etkisi yoktur.</p>
                    </div>
                `
            },
            {
                title: "Epidemiyoloji",
                icon: "fas fa-globe",
                content: `
                    <p>GBS dünya genelinde önemli bir perinatal patojendir:</p>

                    <ul class="feature-list">
                        <li class="feature-item"><b>Kolonizasyon oranı:</b> Gebe kadınların %15-30'u</li>
                        <li class="feature-item"><b>Vertikal geçiş:</b> Kolonize annelerin bebeklerinin %50'si kolonize olur</li>
                        <li class="feature-item"><b>Hastalık gelişimi:</b> Kolonize bebeklerin %1-2'sinde</li>
                        <li class="feature-item"><b>Erken başlangıçlı insidans:</b> 0.2-0.5/1000 canlı doğum (IAP sonrası)</li>
                        <li class="feature-item"><b>Geç başlangıçlı insidans:</b> 0.3-0.4/1000 canlı doğum</li>
                    </ul>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Risk Faktörleri</p>
                        <p class="highlight-box__content">
                            <strong>Yenidoğan için:</strong> Prematürite, düşük doğum ağırlığı, uzamış membran rüptürü, maternal ateş, yüksek maternal kolonizasyon<br>
                            <strong>Erişkin için:</strong> Diyabet, obezite, malignite, immünsüpresyon, ileri yaş
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Aşı Geliştirme Çalışmaları</h4>
                        <ul class="feature-list">
                            <li class="feature-item">Kapsüler polisakkarit konjuge aşılar deneme aşamasında</li>
                            <li class="feature-item">Hedef: Gebelikte maternal aşılama → Transplasental antikor transferi</li>
                            <li class="feature-item">Hem erken hem geç başlangıçlı hastalığı önleme potansiyeli</li>
                        </ul>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">GBS Özet</p>
                        <p class="mnemonic-box__text">CAMPing with Baby</p>
                        <p class="mnemonic-box__hint">CAMP (+), Baby (yenidoğan en sık etken)</p>
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
                            1. <strong>Yenidoğan sepsis ve menenjitinin EN SIK etkeni</strong><br>
                            2. <strong>CAMP testi POZİTİF</strong> (ok ucu hemoliz)<br>
                            3. <strong>Hipürat hidrolizi POZİTİF</strong><br>
                            4. <strong>Basitrasin DİRENÇLİ</strong> (GAS duyarlı)<br>
                            5. <strong>Serotip III</strong> = Menenjit<br>
                            6. Tarama: <strong>36-37. hafta</strong>, vajino-rektal sürüntü<br>
                            7. IAP ile <strong>erken başlangıçlı</strong> hastalık önlenir, geç başlangıçlı önlenmez
                        </p>
                    </div>

                    <table class="article-table">
                        <tr>
                            <th>Test</th>
                            <th>GBS (S. agalactiae)</th>
                            <th>GAS (S. pyogenes)</th>
                        </tr>
                        <tr>
                            <td>Hemoliz</td>
                            <td>β</td>
                            <td>β</td>
                        </tr>
                        <tr>
                            <td>CAMP</td>
                            <td><b>POZİTİF</b></td>
                            <td>Negatif</td>
                        </tr>
                        <tr>
                            <td>Hipürat</td>
                            <td><b>POZİTİF</b></td>
                            <td>Negatif</td>
                        </tr>
                        <tr>
                            <td>Basitrasin</td>
                            <td><b>DİRENÇLİ</b></td>
                            <td>Duyarlı</td>
                        </tr>
                        <tr>
                            <td>PYR</td>
                            <td>Negatif</td>
                            <td><b>POZİTİF</b></td>
                        </tr>
                        <tr>
                            <td>Lancefield</td>
                            <td>Grup B</td>
                            <td>Grup A</td>
                        </tr>
                    </table>

                    <ul class="feature-list">
                        <li class="feature-item"><b>Soru tipi:</b> "Yenidoğanda sepsis + menenjit etkeni?" → S. agalactiae (GBS)</li>
                        <li class="feature-item"><b>Soru tipi:</b> "CAMP testi pozitif streptokok?" → S. agalactiae</li>
                        <li class="feature-item"><b>Soru tipi:</b> "Gebelikte 36. hafta taraması hangi bakteri için?" → GBS</li>
                        <li class="feature-item"><b>Soru tipi:</b> "Basitrasin dirençli, β-hemolitik streptokok?" → GBS</li>
                        <li class="feature-item"><b>Soru tipi:</b> "İntrapartum profilaksi hangi etken için?" → GBS</li>
                        <li class="feature-item"><b>Soru tipi:</b> "Hipürat hidrolizi pozitif streptokok?" → S. agalactiae</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 4,
        category: "bakteriyoloji",
        title: "Bakteriyoloji Ayırıcı Testler",
        subtitle: "Biyokimyasal Testler ve Önemli Etkenler",
        summary: "Klinik mikrobiyolojide bakterilerin identifikasyonunda kullanılan temel biyokimyasal ve fenotipik testlerin kapsamlı özeti. CAMP, katalaz, oksidaz, koagülaz ve diğer kritik testler.",
        tags: ["Biyokimyasal Test", "Katalaz", "Oksidaz", "Koagülaz", "CAMP", "Tanısal Mikrobiyoloji"],
        sections: [
            {
                title: "Hemoliz ve CAMP Testleri",
                icon: "fas fa-tint",
                content: `
                    <p>Hemoliz paterni, özellikle <strong>Streptococcus</strong> ve <strong>Staphylococcus</strong> türlerinin ayırımında kritik öneme sahiptir.</p>
                    
                    <div class="sub-section">
                        <h4 class="sub-section__title">Hemoliz Tipleri</h4>
                        <table class="article-table">
                            <tr>
                                <th>Hemoliz Tipi</th>
                                <th>Görünüm</th>
                                <th>Önemli Etkenler</th>
                            </tr>
                            <tr>
                                <td><b>α-Hemoliz</b></td>
                                <td>Yeşilimsi zon (parsiyel)</td>
                                <td>S. pneumoniae, S. viridans grubu</td>
                            </tr>
                            <tr>
                                <td><b>β-Hemoliz</b></td>
                                <td>Berrak zon (tam)</td>
                                <td>S. pyogenes, S. agalactiae, S. aureus, L. monocytogenes</td>
                            </tr>
                            <tr>
                                <td><b>γ-Hemoliz</b></td>
                                <td>Hemoliz yok</td>
                                <td>Enterococcus spp., S. saprophyticus</td>
                            </tr>
                        </table>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">CAMP Testi</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Prensip:</b> S. aureus β-toksini ile sinerjistik hemoliz</li>
                            <li class="feature-item"><b>Görünüm:</b> Ok başı şeklinde genişlemiş hemoliz</li>
                            <li class="feature-item"><b>CAMP POZİTİF:</b> <strong>S. agalactiae (GBS)</strong></li>
                            <li class="feature-item"><b>Yanlış pozitiflik:</b> Bazı Listeria türleri (L. ivanovii)</li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Ters (Reverse) CAMP Testi</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Prensip:</b> S. agalactiae ile yapılır (CAMP faktör kaynağı)</li>
                            <li class="feature-item"><b>Görünüm:</b> Kesişim noktasında hemoliz <strong>İNHİBİSYONU</strong> (bumerang şekli)</li>
                            <li class="feature-item"><b>Ters CAMP POZİTİF:</b> <strong>Clostridium perfringens</strong>, <strong>Arcanobacterium haemolyticum</strong></li>
                        </ul>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Sınav İpucu</p>
                        <p class="highlight-box__content">
                            <strong>CAMP (+):</strong> GBS (ok ucu hemoliz)<br>
                            <strong>Ters CAMP (+):</strong> C. perfringens (hemoliz inhibisyonu)
                        </p>
                    </div>
                `
            },
            {
                title: "Katalaz ve Oksidaz Testleri",
                icon: "fas fa-flask",
                content: `
                    <p>Temel enzim testleri bakterilerin ilk ayrımında kullanılır.</p>
                    
                    <div class="sub-section">
                        <h4 class="sub-section__title">Katalaz Testi</h4>
                        <p><strong>Prensip:</strong> H₂O₂ → H₂O + O₂ (kabarcık oluşumu)</p>
                        <table class="article-table">
                            <tr>
                                <th>Katalaz POZİTİF</th>
                                <th>Katalaz NEGATİF</th>
                            </tr>
                            <tr>
                                <td>
                                    <b>Staphylococcus</b> tüm türleri<br>
                                    Enterobacteriaceae<br>
                                    Pseudomonas<br>
                                    Bacillus<br>
                                    Listeria<br>
                                    Corynebacterium<br>
                                    Mycobacterium<br>
                                    Neisseria<br>
                                    Haemophilus
                                </td>
                                <td>
                                    <b>Streptococcus</b> tüm türleri<br>
                                    <b>Enterococcus</b><br>
                                    Clostridium<br>
                                    Lactobacillus<br>
                                    Abiotrophia
                                </td>
                            </tr>
                        </table>
                    </div>

                    <div class="alert-box alert-box--info">
                        <span class="alert-box__icon">ℹ️</span>
                        <p class="alert-box__text"><strong>Klinik Kullanım:</strong> Katalaz testi Gram (+) kokların ilk ayrımında kritiktir:<br>
                        <strong>Katalaz (+) Gram (+) kok = Staphylococcus</strong><br>
                        <strong>Katalaz (-) Gram (+) kok = Streptococcus/Enterococcus</strong></p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Oksidaz Testi</h4>
                        <p><strong>Prensip:</strong> Sitokrom c oksidaz varlığını tespit eder (mor/mavi renk)</p>
                        <table class="article-table">
                            <tr>
                                <th>Oksidaz POZİTİF</th>
                                <th>Oksidaz NEGATİF</th>
                            </tr>
                            <tr>
                                <td>
                                    <b>Pseudomonas</b><br>
                                    <b>Neisseria</b><br>
                                    <b>Vibrio</b><br>
                                    <b>Campylobacter</b><br>
                                    <b>Helicobacter</b><br>
                                    Aeromonas<br>
                                    Plesiomonas<br>
                                    Alcaligenes<br>
                                    Moraxella<br>
                                    Pasteurella
                                </td>
                                <td>
                                    <b>Enterobacteriaceae</b> (tümü!)<br>
                                    Staphylococcus<br>
                                    Streptococcus<br>
                                    Acinetobacter<br>
                                    Stenotrophomonas
                                </td>
                            </tr>
                        </table>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Kritik Ayrım</p>
                        <p class="highlight-box__content">
                            <strong>Gram (-) basil, Oksidaz (+):</strong> Pseudomonas, Vibrio, Aeromonas düşün<br>
                            <strong>Gram (-) basil, Oksidaz (-):</strong> Enterobacteriaceae düşün<br>
                            <strong>İstisna:</strong> Acinetobacter oksidaz (-) non-fermentatif!
                        </p>
                    </div>
                `
            },
            {
                title: "Koagülaz Testleri",
                icon: "fas fa-vial",
                content: `
                    <p>Koagülaz testi <strong>Staphylococcus aureus</strong>'u diğer stafilokoklardan ayırmada altın standarttır.</p>
                    
                    <div class="sub-section">
                        <h4 class="sub-section__title">Serbest (Tüp) Koagülaz</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Prensip:</b> Protrombini trombine çevirir → Fibrinojen pıhtılaşır</li>
                            <li class="feature-item"><b>Süre:</b> 4-24 saat inkübasyon</li>
                            <li class="feature-item"><b>Altın standart:</b> En güvenilir yöntem</li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Bağlı (Lam/Slide) Koagülaz (Clumping Factor)</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Prensip:</b> Fibrinojene doğrudan bağlanma → Aglütinasyon</li>
                            <li class="feature-item"><b>Süre:</b> Saniyeler içinde sonuç</li>
                            <li class="feature-item"><b>Avantaj:</b> Hızlı tarama</li>
                            <li class="feature-item"><b>Dezavantaj:</b> Bazı suşlar negatif olabilir</li>
                        </ul>
                    </div>

                    <table class="article-table">
                        <tr>
                            <th>Tür</th>
                            <th>Tüp Koagülaz</th>
                            <th>Lam Koagülaz</th>
                            <th>Klinik Önemi</th>
                        </tr>
                        <tr>
                            <td><b>S. aureus</b></td>
                            <td><strong>POZİTİF</strong></td>
                            <td><strong>POZİTİF</strong></td>
                            <td>En önemli patojen stafilokok</td>
                        </tr>
                        <tr>
                            <td><b>S. lugdunensis</b></td>
                            <td>Negatif</td>
                            <td><strong>POZİTİF</strong></td>
                            <td>S. aureus gibi virülan KNS!</td>
                        </tr>
                        <tr>
                            <td><b>S. schleiferi</b></td>
                            <td>Negatif/Pozitif</td>
                            <td>Değişken</td>
                            <td>Köpek otit etkeni</td>
                        </tr>
                        <tr>
                            <td><b>S. intermedius</b></td>
                            <td><strong>POZİTİF</strong></td>
                            <td>Değişken</td>
                            <td>Köpek/kedi ısırığı</td>
                        </tr>
                        <tr>
                            <td><b>Diğer KNS</b></td>
                            <td>Negatif</td>
                            <td>Negatif</td>
                            <td>S. epidermidis, S. saprophyticus vb.</td>
                        </tr>
                    </table>

                    <div class="alert-box alert-box--warning">
                        <span class="alert-box__icon">⚠️</span>
                        <p class="alert-box__text"><strong>S. lugdunensis Tuzağı:</strong> Lam koagülaz POZİTİF olduğu için S. aureus ile karışabilir! Ancak tüp koagülaz NEGATİF'tir. PYR testi ile ayrılır (S. lugdunensis PYR +, S. aureus PYR -).</p>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">KNS Ayırımı</p>
                        <p class="highlight-box__content">
                            <strong>Novobiosin DİRENÇLİ:</strong> S. saprophyticus (ÜYE etkeni, genç kadınlarda)<br>
                            <strong>Novobiosin DUYARLI:</strong> S. epidermidis ve diğer KNS
                        </p>
                    </div>
                `
            },
            {
                title: "Antibiyotik Duyarlılık ile Ayırım",
                icon: "fas fa-pills",
                content: `
                    <p>Bazı bakterilerin identifikasyonunda spesifik antibiyotiklere duyarlılık/direnç kullanılır.</p>
                    
                    <table class="article-table">
                        <tr>
                            <th>Antibiyotik</th>
                            <th>Duyarlı</th>
                            <th>Dirençli</th>
                            <th>Kullanım</th>
                        </tr>
                        <tr>
                            <td><b>Optokin (P disk)</b></td>
                            <td><strong>S. pneumoniae</strong></td>
                            <td>S. viridans grubu</td>
                            <td>α-hemolitik streptokokların ayrımı</td>
                        </tr>
                        <tr>
                            <td><b>Basitrasin (A disk)</b></td>
                            <td><strong>S. pyogenes (GAS)</strong></td>
                            <td>S. agalactiae (GBS), diğer β-hemolitik</td>
                            <td>β-hemolitik streptokokların ayrımı</td>
                        </tr>
                        <tr>
                            <td><b>Novobiosin</b></td>
                            <td>S. epidermidis, diğer KNS</td>
                            <td><strong>S. saprophyticus</strong></td>
                            <td>KNS ayrımı</td>
                        </tr>
                        <tr>
                            <td><b>SXT (TMP-SMX)</b></td>
                            <td>S. agalactiae (GBS)</td>
                            <td><strong>S. pyogenes (GAS)</strong></td>
                            <td>GAS vs GBS ek test</td>
                        </tr>
                        <tr>
                            <td><b>Polimiksin B</b></td>
                            <td>Çoğu Gram (-)</td>
                            <td><strong>Proteus, Serratia, Burkholderia</strong></td>
                            <td>Doğal direnç paterni</td>
                        </tr>
                        <tr>
                            <td><b>Vankomisisn</b></td>
                            <td>Çoğu Gram (+)</td>
                            <td><strong>Leuconostoc, Pediococcus, Lactobacillus</strong></td>
                            <td>Doğal vanko-dirençli Gram (+)</td>
                        </tr>
                    </table>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Pnömokok Tanısı</p>
                        <p class="highlight-box__content">
                            <strong>S. pneumoniae:</strong><br>
                            • Optokin DUYARLI (≥14 mm)<br>
                            • Safrada ERİR (deoksikolat testi +)<br>
                            • α-hemolitik<br>
                            • Lancefield grup antijeni YOK
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Streptococcus Ayırıcı Testler Özeti</h4>
                        <table class="article-table">
                            <tr>
                                <th>Test</th>
                                <th>S. pyogenes (GAS)</th>
                                <th>S. agalactiae (GBS)</th>
                                <th>S. pneumoniae</th>
                                <th>Enterococcus</th>
                            </tr>
                            <tr>
                                <td>Hemoliz</td>
                                <td>β</td>
                                <td>β</td>
                                <td>α</td>
                                <td>α, β veya γ</td>
                            </tr>
                            <tr>
                                <td>Basitrasin</td>
                                <td><b>Duyarlı</b></td>
                                <td>Dirençli</td>
                                <td>-</td>
                                <td>Dirençli</td>
                            </tr>
                            <tr>
                                <td>CAMP</td>
                                <td>Negatif</td>
                                <td><b>POZİTİF</b></td>
                                <td>-</td>
                                <td>Negatif</td>
                            </tr>
                            <tr>
                                <td>PYR</td>
                                <td><b>POZİTİF</b></td>
                                <td>Negatif</td>
                                <td>Negatif</td>
                                <td><b>POZİTİF</b></td>
                            </tr>
                            <tr>
                                <td>Hipürat</td>
                                <td>Negatif</td>
                                <td><b>POZİTİF</b></td>
                                <td>Negatif</td>
                                <td>Değişken</td>
                            </tr>
                            <tr>
                                <td>Optokin</td>
                                <td>-</td>
                                <td>-</td>
                                <td><b>Duyarlı</b></td>
                                <td>Dirençli</td>
                            </tr>
                            <tr>
                                <td>Safra Eskulin</td>
                                <td>Negatif</td>
                                <td>Negatif</td>
                                <td>Negatif</td>
                                <td><b>POZİTİF</b></td>
                            </tr>
                            <tr>
                                <td>%6.5 NaCl</td>
                                <td>Üremez</td>
                                <td>Üremez</td>
                                <td>Üremez</td>
                                <td><b>Ürer</b></td>
                            </tr>
                        </table>
                    </div>
                `
            },
            {
                title: "Üreaz ve Fenilalanin Testleri",
                icon: "fas fa-atom",
                content: `
                    <p>Enterobacteriaceae ve diğer bakterilerin ayrımında önemli enzim testleridir.</p>
                    
                    <div class="sub-section">
                        <h4 class="sub-section__title">Üreaz Testi</h4>
                        <p><strong>Prensip:</strong> Üre → NH₃ + CO₂ (pH artışı, pembe renk)</p>
                        <table class="article-table">
                            <tr>
                                <th>Üreaz POZİTİF</th>
                                <th>Hız</th>
                            </tr>
                            <tr>
                                <td><b>Proteus</b> türleri</td>
                                <td><strong>HIZLI</strong> (2-4 saat)</td>
                            </tr>
                            <tr>
                                <td><b>Helicobacter pylori</b></td>
                                <td><strong>HIZLI</strong> (ÜRE-NEFES TESTİ!)</td>
                            </tr>
                            <tr>
                                <td><b>Brucella</b></td>
                                <td>Yavaş</td>
                            </tr>
                            <tr>
                                <td><b>Klebsiella</b></td>
                                <td>Yavaş</td>
                            </tr>
                            <tr>
                                <td><b>Cryptococcus neoformans</b></td>
                                <td>Yavaş (maya!)</td>
                            </tr>
                            <tr>
                                <td>Morganella, Providencia</td>
                                <td>Değişken</td>
                            </tr>
                        </table>
                    </div>

                    <div class="alert-box alert-box--info">
                        <span class="alert-box__icon">ℹ️</span>
                        <p class="alert-box__text"><strong>Proteus Özellikleri:</strong> Hızlı üreaz + Fenilalanin deaminaz + Swarming (kanlı agarda yayılma) → <strong>"PUF"</strong> (Proteus-Üreaz-Fenilalanin)</p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Fenilalanin Deaminaz Testi</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>POZİTİF:</b> Proteus, Morganella, Providencia (PMP grubu)</li>
                            <li class="feature-item"><b>NEGATİF:</b> Diğer Enterobacteriaceae</li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Lizin/Ornitin Dekarboksilaz</h4>
                        <table class="article-table">
                            <tr>
                                <th>Bakteri</th>
                                <th>LDC</th>
                                <th>ODC</th>
                                <th>ADH</th>
                            </tr>
                            <tr>
                                <td>Salmonella</td>
                                <td><b>+</b></td>
                                <td><b>+</b></td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Shigella</td>
                                <td>-</td>
                                <td><b>+</b></td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Klebsiella</td>
                                <td><b>+</b></td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Enterobacter</td>
                                <td><b>+</b></td>
                                <td><b>+</b></td>
                                <td><b>+</b></td>
                            </tr>
                            <tr>
                                <td>Proteus mirabilis</td>
                                <td>-</td>
                                <td><b>+</b></td>
                                <td>-</td>
                            </tr>
                        </table>
                    </div>
                `
            },
            {
                title: "IMViC ve Enterik Testler",
                icon: "fas fa-bacteria",
                content: `
                    <p><strong>IMViC testleri</strong> Enterobacteriaceae içinde özellikle E. coli ve Klebsiella ayrımında kullanılır.</p>
                    
                    <div class="sub-section">
                        <h4 class="sub-section__title">IMViC Testleri</h4>
                        <table class="article-table">
                            <tr>
                                <th>Test</th>
                                <th>Prensip</th>
                                <th>E. coli</th>
                                <th>Klebsiella</th>
                                <th>Enterobacter</th>
                            </tr>
                            <tr>
                                <td><b>İndol (I)</b></td>
                                <td>Triptofan → İndol</td>
                                <td><b>+</b></td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td><b>Metil Kırmızısı (M)</b></td>
                                <td>Karışık asit fermentasyonu</td>
                                <td><b>+</b></td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td><b>Voges-Proskauer (V)</b></td>
                                <td>Asetoin üretimi</td>
                                <td>-</td>
                                <td><b>+</b></td>
                                <td><b>+</b></td>
                            </tr>
                            <tr>
                                <td><b>Sitrat (C)</b></td>
                                <td>Tek C kaynağı olarak kullanım</td>
                                <td>-</td>
                                <td><b>+</b></td>
                                <td><b>+</b></td>
                            </tr>
                        </table>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">IMViC Paterni</p>
                        <p class="highlight-box__content">
                            <strong>E. coli:</strong> + + - - (İndol +, MR +, VP -, Sitrat -)<br>
                            <strong>Klebsiella:</strong> - - + + (İndol -, MR -, VP +, Sitrat +)<br>
                            <strong>Enterobacter:</strong> - - + + (Klebsiella ile benzer)
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">İndol Testi Pozitif Etkenler</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>E. coli</b> (en sık)</li>
                            <li class="feature-item"><b>Proteus vulgaris</b> (P. mirabilis İNDOL NEGATİF!)</li>
                            <li class="feature-item"><b>Klebsiella oxytoca</b> (K. pneumoniae indol -)</li>
                            <li class="feature-item"><b>Vibrio cholerae</b></li>
                            <li class="feature-item"><b>Bacteroides fragilis</b></li>
                            <li class="feature-item"><b>Porphyromonas</b></li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">TSI (Triple Sugar Iron) Testi</h4>
                        <table class="article-table">
                            <tr>
                                <th>Patern</th>
                                <th>Yüzey/Dip</th>
                                <th>H₂S</th>
                                <th>Gaz</th>
                                <th>Örnek Etken</th>
                            </tr>
                            <tr>
                                <td>A/A</td>
                                <td>Asit/Asit</td>
                                <td>-</td>
                                <td>+</td>
                                <td>E. coli, Klebsiella</td>
                            </tr>
                            <tr>
                                <td>K/A</td>
                                <td>Alkali/Asit</td>
                                <td><b>+</b></td>
                                <td>+</td>
                                <td><b>Salmonella</b></td>
                            </tr>
                            <tr>
                                <td>K/A</td>
                                <td>Alkali/Asit</td>
                                <td><b>+</b></td>
                                <td>+</td>
                                <td><b>Proteus</b> (swarming)</td>
                            </tr>
                            <tr>
                                <td>K/A</td>
                                <td>Alkali/Asit</td>
                                <td>-</td>
                                <td>-</td>
                                <td><b>Shigella</b></td>
                            </tr>
                            <tr>
                                <td>K/K</td>
                                <td>Alkali/Alkali</td>
                                <td>-</td>
                                <td>-</td>
                                <td>Pseudomonas (non-fermentatif)</td>
                            </tr>
                        </table>
                    </div>

                    <div class="alert-box alert-box--warning">
                        <span class="alert-box__icon">⚠️</span>
                        <p class="alert-box__text"><strong>H₂S Pozitif Enterik Bakteriler:</strong> Salmonella, Proteus, Citrobacter, Edwardsiella → <strong>"SPaCE"</strong></p>
                    </div>
                `
            },
            {
                title: "Özel Tanımlayıcı Testler",
                icon: "fas fa-microscope",
                content: `
                    <p>Belirli bakterilerin kesin tanısında kullanılan spesifik testler.</p>
                    
                    <table class="article-table">
                        <tr>
                            <th>Test</th>
                            <th>Pozitif Etken(ler)</th>
                            <th>Klinik Önemi</th>
                        </tr>
                        <tr>
                            <td><b>PYR (Pirrolidonil Arylamidaz)</b></td>
                            <td>S. pyogenes (GAS), Enterococcus, S. lugdunensis</td>
                            <td>GAS ve Enterococcus ayırımı</td>
                        </tr>
                        <tr>
                            <td><b>Safra Eskülin</b></td>
                            <td>Enterococcus, Strep. bovis grubu</td>
                            <td>Enterococcus tanısı</td>
                        </tr>
                        <tr>
                            <td><b>%6.5 NaCl Toleransı</b></td>
                            <td>Enterococcus, bazı Aerococcus</td>
                            <td>Strep'den ayrım</td>
                        </tr>
                        <tr>
                            <td><b>Safrada Erime</b></td>
                            <td>S. pneumoniae</td>
                            <td>Viridans'tan ayrım</td>
                        </tr>
                        <tr>
                            <td><b>X ve V Faktör Gereksinimi</b></td>
                            <td>H. influenzae (X+V), H. parainfluenzae (sadece V)</td>
                            <td>Haemophilus türlerinin ayrımı</td>
                        </tr>
                        <tr>
                            <td><b>Satellit Fenomeni</b></td>
                            <td>Haemophilus, Abiotrophia</td>
                            <td>NAD bağımlılığı</td>
                        </tr>
                        <tr>
                            <td><b>Nagler Reaksiyonu</b></td>
                            <td>C. perfringens (α-toksin = lesitinaz)</td>
                            <td>Gaz gangreni etkeni</td>
                        </tr>
                        <tr>
                            <td><b>Çift Zonlu Hemoliz</b></td>
                            <td>C. perfringens</td>
                            <td>θ ve α toksinler</td>
                        </tr>
                        <tr>
                            <td><b>Şemsiye (Umbrella) Motilite</b></td>
                            <td>Listeria monocytogenes</td>
                            <td>25°C'de hareketli, 37°C'de hareketsiz</td>
                        </tr>
                        <tr>
                            <td><b>Soğukta Zenginleştirme</b></td>
                            <td>Listeria, Yersinia</td>
                            <td>4°C'de üreme</td>
                        </tr>
                        <tr>
                            <td><b>String Test</b></td>
                            <td>Vibrio cholerae</td>
                            <td>%0.5 deoksikolatta mukoid iplik</td>
                        </tr>
                        <tr>
                            <td><b>Hippurate Hidrolizi</b></td>
                            <td>GBS, C. jejuni</td>
                            <td>Campylobacter türlerinin ayrımı</td>
                        </tr>
                    </table>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Listeria Özellikleri</p>
                        <p class="highlight-box__content">
                            <strong>Listeria monocytogenes:</strong><br>
                            • Gram (+) kısa basil, kokoid görünebilir<br>
                            • β-hemolitik (dar zon)<br>
                            • Katalaz (+), Oksidaz (-)<br>
                            • 25°C'de <b>hareketli</b> (tumbling), 37°C'de hareketsiz<br>
                            • Soğukta (4°C) ürer<br>
                            • Eskülin hidrolizi (+)
                        </p>
                    </div>
                `
            },
            {
                title: "Non-Fermentatif Gram (-) Basiller",
                icon: "fas fa-lungs-virus",
                content: `
                    <p>Glikoz fermente edemeyen, aerobik Gram (-) basillerin ayırımı.</p>
                    
                    <table class="article-table">
                        <tr>
                            <th>Özellik</th>
                            <th>P. aeruginosa</th>
                            <th>Acinetobacter</th>
                            <th>S. maltophilia</th>
                            <th>B. cepacia</th>
                        </tr>
                        <tr>
                            <td>Oksidaz</td>
                            <td><b>POZİTİF</b></td>
                            <td><b>NEGATİF</b></td>
                            <td><b>NEGATİF</b></td>
                            <td>POZİTİF</td>
                        </tr>
                        <tr>
                            <td>Hareket</td>
                            <td>Hareketli</td>
                            <td>Hareketsiz</td>
                            <td>Hareketli</td>
                            <td>Hareketli</td>
                        </tr>
                        <tr>
                            <td>Pigment</td>
                            <td>Piyosiyanin (mavi-yeşil)</td>
                            <td>Yok</td>
                            <td>Yok</td>
                            <td>Sarı</td>
                        </tr>
                        <tr>
                            <td>Koku</td>
                            <td>Üzüm/mısır</td>
                            <td>Yok</td>
                            <td>Amonyak</td>
                            <td>Yok</td>
                        </tr>
                        <tr>
                            <td>Önemli Direnç</td>
                            <td>Çoklu ilaç</td>
                            <td>Karbapenem</td>
                            <td>Karbapenem (doğal)</td>
                            <td>Aminoglikozid</td>
                        </tr>
                    </table>

                    <div class="alert-box alert-box--info">
                        <span class="alert-box__icon">ℹ️</span>
                        <p class="alert-box__text"><strong>P. aeruginosa Pigmentleri:</strong><br>
                            • <b>Piyosiyanin:</b> Mavi-yeşil (en karakteristik)<br>
                            • <b>Piyoverdin (Floresein):</b> Sarı-yeşil, floresan<br>
                            • <b>Piyorubin:</b> Kırmızı-kahverengi<br>
                            • <b>Piyomelanin:</b> Kahverengi-siyah</p>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Oksidaz (-) Non-Fermentatif</p>
                        <p class="highlight-box__content">
                            <strong>Acinetobacter:</strong> Kokobasil, hareketsiz<br>
                            <strong>Stenotrophomonas:</strong> TMP-SMX ile tedavi (karbapenem dirençli!)
                        </p>
                    </div>
                `
            },
            {
                title: "Sınav İçin Kritik Özet Tabloları",
                icon: "fas fa-graduation-cap",
                content: `
                    <div class="highlight-box">
                        <p class="highlight-box__title">Hızlı Ayırıcı Test Algoritması</p>
                        <p class="highlight-box__content">
                            <strong>Gram (+) Kok:</strong><br>
                            → Katalaz (+) = Staphylococcus → Koagülaz (+) = S. aureus<br>
                            → Katalaz (-) = Streptococcus/Enterococcus<br><br>
                            <strong>Gram (-) Basil:</strong><br>
                            → Oksidaz (+) = Non-Enterobacteriaceae (Pseudomonas, Vibrio)<br>
                            → Oksidaz (-) = Enterobacteriaceae
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">En Sık Sorulan Test-Bakteri Eşleşmeleri</h4>
                        <table class="article-table">
                            <tr>
                                <th>Test/Özellik</th>
                                <th>Pozitif Etken</th>
                                <th>Sınav İpucu</th>
                            </tr>
                            <tr>
                                <td>CAMP (+)</td>
                                <td>S. agalactiae</td>
                                <td>Ok ucu hemoliz</td>
                            </tr>
                            <tr>
                                <td>Ters CAMP (+)</td>
                                <td>C. perfringens</td>
                                <td>Hemoliz inhibisyonu</td>
                            </tr>
                            <tr>
                                <td>Optokin duyarlı</td>
                                <td>S. pneumoniae</td>
                                <td>α-hemolitik</td>
                            </tr>
                            <tr>
                                <td>Basitrasin duyarlı</td>
                                <td>S. pyogenes</td>
                                <td>β-hemolitik GAS</td>
                            </tr>
                            <tr>
                                <td>Novobiosin dirençli</td>
                                <td>S. saprophyticus</td>
                                <td>Genç kadın ÜYE</td>
                            </tr>
                            <tr>
                                <td>Lam koagülaz (+), Tüp (-)</td>
                                <td>S. lugdunensis</td>
                                <td>Virülan KNS</td>
                            </tr>
                            <tr>
                                <td>Hızlı üreaz (+)</td>
                                <td>Proteus, H. pylori</td>
                                <td>Üre nefes testi</td>
                            </tr>
                            <tr>
                                <td>H₂S (+)</td>
                                <td>Salmonella, Proteus</td>
                                <td>TSI'da siyahlaşma</td>
                            </tr>
                            <tr>
                                <td>İndol (+)</td>
                                <td>E. coli, P. vulgaris</td>
                                <td>P. mirabilis indol (-)</td>
                            </tr>
                            <tr>
                                <td>VP (+)</td>
                                <td>Klebsiella, Enterobacter</td>
                                <td>E. coli VP (-)</td>
                            </tr>
                            <tr>
                                <td>Şemsiye motilite</td>
                                <td>Listeria</td>
                                <td>25°C'de hareketli</td>
                            </tr>
                            <tr>
                                <td>Oksidaz (+) Gram (-)</td>
                                <td>Pseudomonas, Vibrio</td>
                                <td>Non-Enterobacteriaceae</td>
                            </tr>
                            <tr>
                                <td>Safra eskülin (+)</td>
                                <td>Enterococcus</td>
                                <td>%40 safrada üreme</td>
                            </tr>
                        </table>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Hafıza Kodları</p>
                        <p class="mnemonic-box__text">
                            <b>H₂S (+):</b> "SPaCE" → Salmonella, Proteus, Citrobacter, Edwardsiella<br>
                            <b>Üreaz (+):</b> "PUNCH-K" → Proteus, Ureaplasma, Nocardia, Cryptococcus, H. pylori, Klebsiella<br>
                            <b>PYR (+):</b> GAS + Enterococcus + S. lugdunensis
                        </p>
                    </div>

                    <ul class="feature-list">
                        <li class="feature-item"><b>Soru tipi:</b> "Katalaz (+), Koagülaz (+) Gram (+) kok?" → S. aureus</li>
                        <li class="feature-item"><b>Soru tipi:</b> "Optokin duyarlı, safrada eriyen α-hemolitik?" → S. pneumoniae</li>
                        <li class="feature-item"><b>Soru tipi:</b> "CAMP testi ok ucu hemoliz?" → S. agalactiae</li>
                        <li class="feature-item"><b>Soru tipi:</b> "Oksidaz (+), mavi-yeşil pigment?" → P. aeruginosa</li>
                        <li class="feature-item"><b>Soru tipi:</b> "İndol (+), laktoz (+), TSI A/A?" → E. coli</li>
                        <li class="feature-item"><b>Soru tipi:</b> "Novobiosin dirençli KNS?" → S. saprophyticus</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 5,
        title: "Moleküler Tanı Yöntemleri",
        subtitle: "PCR, RT-PCR, qPCR, NGS ve Uygulamaları",
        category: "laboratuvar",
        icon: "fa-dna",
        color: "#3b82f6",
        lastUpdated: "2024-01-10",
        readTime: "30 dk",
        summary: "Moleküler biyoloji tekniklerinin tanı amaçlı kullanımı. PCR, RT-PCR, qPCR, NGS yöntemlerinin prensipleri, uygulamaları ve yorumlanması.",
        tags: ["PCR", "Moleküler Tanı", "RT-PCR", "qPCR", "NGS", "DNA Amplifikasyonu"],
        sections: [
            {
                title: "PCR (Polimeraz Zincir Reaksiyonu)",
                content: `
                    <div class="highlight-box highlight-box--primary">
                        <h4><i class="fas fa-atom"></i> Temel Prensipler</h4>
                        <ul class="feature-list">
                            <li><strong>DNA Amplifikasyonu:</strong> Spesifik DNA bölgelerinin çoğaltılması</li>
                            <li><strong>Başlangıç Malzemeleri:</strong> DNA şablonu, primerler, dNTP'ler, Taq polimeraz</li>
                            <li><strong>Basamaklar:</strong> Denatürasyon, Annealing, Uzatma</li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">PCR Süreci</h4>
                        <ol class="feature-list">
                            <li><b>Denatürasyon:</b> DNA'nın 94-98°C'de ayrılması</li>
                            <li><b>Annealing:</b> Primerlerin 50-65°C'de DNA'ya bağlanması</li>
                            <li><b>Uzatma:</b> Taq polimeraz ile yeni DNA ipliklerinin sentezi (72°C)</li>
                            <li><b>Tekrarlama:</b> 25-35 döngü boyunca yukarıdaki adımların tekrarı</li>
                        </ol>
                    </div>

                    <div class="alert-box alert-box--warning">
                        <div class="alert-box__icon"><i class="fas fa-exclamation-triangle"></i></div>
                        <div class="alert-box__content">
                            <strong>Kontaminasyon Riski:</strong> PCR, kontaminasyona karşı hassastır. Negatif kontrollerle doğrulama yapılmalıdır.
                        </div>
                    </div>
                `
            },
            {
                title: "RT-PCR (Revers Transkriptaz PCR)",
                content: `
                    <div class="highlight-box highlight-box--secondary">
                        <h4><i class="fas fa-rna"></i> Temel Prensipler</h4>
                        <ul class="feature-list">
                            <li><strong>RNA Amplifikasyonu:</strong> Spesifik RNA bölgelerinin çoğaltılması</li>
                            <li><strong>Başlangıç Malzemeleri:</strong> RNA şablonu, primerler, dNTP'ler, Taq polimeraz, revers transkriptaz</li>
                            <li><strong>Basamaklar:</strong> Denatürasyon, Annealing, Uzatma</li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">RT-PCR Süreci</h4>
                        <ol class="feature-list">
                            <li><b>RNA'nın Ekstraksiyonu:</b> Hücrelerden RNA'nın izole edilmesi</li>
                            <li><b>Revers Transkripsiyon:</b> RNA'nın cDNA'ya dönüştürülmesi</li>
                            <li><b>PCR Amplifikasyonu:</b> cDNA'nın çoğaltılması</li>
                            <li><b>Teşhis:</b> Ampliconların elektroforez ile analizi</li>
                        </ol>
                    </div>

                    <div class="alert-box alert-box--info">
                        <div class="alert-box__icon"><i class="fas fa-lightbulb"></i></div>
                        <div class="alert-box__content">
                            <strong>COVID-19 Tanısında Kullanımı:</strong><br>
                            • Viral RNA'nın hızlı ve spesifik tespiti için kullanılır<br>
                            • Altın standart yöntemdir
                        </div>
                    </div>
                `
            },
            {
                title: "qPCR (Kantitatif PCR)",
                content: `
                    <div class="highlight-box highlight-box--primary">
                        <h4><i class="fas fa-calculator"></i> Temel Prensipler</h4>
                        <ul class="feature-list">
                            <li><strong>DNA Miktar Belirleme:</strong> PCR ile amplifiye edilen DNA'nın miktarının belirlenmesi</li>
                            <li><strong>Başlangıç Malzemeleri:</strong> DNA şablonu, primerler, dNTP'ler, Taq polimeraz, floresan boyalar</li>
                            <li><strong>Basamaklar:</strong> Denatürasyon, Annealing, Uzatma</li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">qPCR Süreci</h4>
                        <ol class="feature-list">
                            <li><b>Denatürasyon:</b> DNA'nın 94-98°C'de ayrılması</li>
                            <li><b>Annealing:</b> Primerlerin 50-65°C'de DNA'ya bağlanması</li>
                            <li><b>Uzatma:</b> Taq polimeraz ile yeni DNA ipliklerinin sentezi (72°C)</li>
                            <li><b>Floresan Sinyali:</b> Her döngüde floresan sinyalinin ölçülmesi</li>
                            <li><b>Teşhis:</b> Sinyal yoğunluğuna göre başlangıç DNA miktarının hesaplanması</li>
                        </ol>
                    </div>

                    <div class="alert-box alert-box--info">
                        <div class="alert-box__icon"><i class="fas fa-lightbulb"></i></div>
                        <div class="alert-box__content">
                            <strong>Gerçek Zamanlı İzleme:</strong><br>
                            • qPCR, amplifikasyonun her döngüsünde floresan sinyalını ölçerek gerçek zamanlı veri sağlar<br>
                            • Sonuçlar genellikle döngü eşiği (Ct) değeri ile raporlanır
                        </div>
                    </div>
                `
            },
            {
                title: "NGS (Next Generation Sequencing)",
                content: `
                    <div class="highlight-box highlight-box--secondary">
                        <h4><i class="fas fa-sequence"></i> Temel Prensipler</h4>
                        <ul class="feature-list">
                            <li><strong>Paralel Okuma:</strong> Milyonlarca DNA parçasının aynı anda dizilmesi</li>
                            <li><strong>Başlangıç Malzemeleri:</strong> DNA şablonu, dizileme adaptörleri, biyoinformatik analiz yazılımları</li>
                            <li><strong>Basamaklar:</strong> Kütüphane hazırlığı, dizileme, veri analizi</li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">NGS Süreci</h4>
                        <ol class="feature-list">
                            <li><b>Kütüphane Hazırlığı:</b> DNA'nın parçalanması ve dizileme adaptörleri ile birleştirilmesi</li>
                            <li><b>Dizileme:</b> Paralel olarak milyonlarca DNA parçasının dizilmesi</li>
                            <li><b>Veri Analizi:</b> Dizilen verilerin biyoinformatik araçlarla analizi</li>
                            <li><b>Raporlama:</b> Sonuçların yorumlanması ve raporlanması</li>
                        </ol>
                    </div>

                    <div class="alert-box alert-box--info">
                        <div class="alert-box__icon"><i class="fas fa-lightbulb"></i></div>
                        <div class="alert-box__content">
                            <strong>Uygulama Alanları:</strong><br>
                            • Genom dizilimi, hedefe yönelik dizilimi, RNA dizilimi<br>
                            • Kanser genetiği, mikrobiyom analizi, bulaşıcı hastalıkların tanısı
                        </div>
                    </div>
                `
            },
            {
                title: "Sınav İçin Kritik Noktalar",
                content: `
                    <div class="highlight-box">
                        <p class="highlight-box__title">TUS/Yeterlilik Klasikleri</p>
                        <p class="highlight-box__content">
                            1. <strong>PCR:</strong> DNA amplifikasyonu, kontaminasyona dikkat!<br>
                            2. <strong>RT-PCR:</strong> RNA'dan cDNA'ya, viral yük tayini<br>
                            3. <strong>qPCR:</strong> Kantitatif, gerçek zamanlı PCR<br>
                            4. <strong>NGS:</strong> Paralel dizileme, biyoinformatik analizi şart
                        </p>
                    </div>

                    <div class="alert-box alert-box--info">
                        <div class="alert-box__icon"><i class="fas fa-brain"></i></div>
                        <div class="alert-box__content">
                            <strong>Hafıza Kodları:</strong><br><br>
                            • <strong>"PCR = DNA, RT-PCR = RNA"</strong><br>
                            • <strong>"qPCR = Kantitatif, NGS = Paralel dizileme"</strong><br>
                            • <strong>"COVID-19 = RT-PCR ile tanı"</strong><br>
                            • <strong>"HIV = 4. nesil test ile tarama, RNA ile doğrulama"</strong>
                        </div>
                    </div>
                `
            }
        ]
    },
    {
        id: 6,
        title: "Serolojik Tanı Algoritmaları",
        subtitle: "Hepatitler, HIV, Sifiliz, TORCH ve Klinik Doğrulama Testleri",
        category: "laboratuvar",
        icon: "fa-vials",
        color: "#8b5cf6",
        lastUpdated: "2024-01-15",
        readTime: "25 dk",
        summary: "Klinik mikrobiyolojide serolojik tanı algoritmalarının kapsamlı özeti. Hepatit B/C serolojisi, HIV tanı algoritması, sifiliz tarama ve doğrulama, TORCH paneli yorumları.",
        tags: ["Hepatit B", "Hepatit C", "HIV", "Sifiliz", "TORCH", "Seroloji", "Tanı Algoritması"],
        sections: [
            {
                title: "Hepatit B Serolojisi",
                content: `
                    <div class="highlight-box highlight-box--primary">
                        <h4><i class="fas fa-star"></i> Temel Belirteçler</h4>
                        <ul class="feature-list">
                            <li><strong>HBsAg:</strong> Aktif enfeksiyon göstergesi (yüzey antijeni)</li>
                            <li><strong>Anti-HBs:</strong> Bağışıklık göstergesi (≥10 mIU/mL koruyucu)</li>
                            <li><strong>Anti-HBc IgM:</strong> Akut enfeksiyon / alevlenme</li>
                            <li><strong>Anti-HBc IgG:</strong> Geçirilmiş enfeksiyon (ömür boyu pozitif kalır)</li>
                            <li><strong>HBeAg:</strong> Aktif viral replikasyon, yüksek bulaştırıcılık</li>
                            <li><strong>Anti-HBe:</strong> Replikasyonun azalması, serokonversiyon</li>
                            <li><strong>HBV DNA:</strong> Viral yük, tedavi takibi</li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Kapsamlı Serolojik Yorumlama Tablosu</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>HBsAg</th>
                                    <th>Anti-HBs</th>
                                    <th>Anti-HBc IgM</th>
                                    <th>Anti-HBc IgG</th>
                                    <th>HBeAg</th>
                                    <th>HBV DNA</th>
                                    <th>Yorum</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td><b>Duyarlı (Aşı yapılmalı)</b></td>
                                </tr>
                                <tr>
                                    <td>-</td>
                                    <td><b>+</b></td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td><b>Aşı ile immün</b></td>
                                </tr>
                                <tr>
                                    <td>-</td>
                                    <td><b>+</b></td>
                                    <td>-</td>
                                    <td><b>+</b></td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td><b>Doğal enfeksiyon ile immün (iyileşmiş)</b></td>
                                </tr>
                                <tr>
                                    <td><b>+</b></td>
                                    <td>-</td>
                                    <td><b>+</b></td>
                                    <td>+</td>
                                    <td>+/-</td>
                                    <td>Yüksek</td>
                                    <td><b>Akut HBV enfeksiyonu</b></td>
                                </tr>
                                <tr>
                                    <td><b>+</b></td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td><b>+</b></td>
                                    <td><b>+</b></td>
                                    <td>Yüksek</td>
                                    <td><b>Kronik HBV - HBeAg pozitif (immün aktif)</b></td>
                                </tr>
                                <tr>
                                    <td><b>+</b></td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td><b>+</b></td>
                                    <td>-</td>
                                    <td>Düşük</td>
                                    <td><b>İnaktif taşıyıcı (<2000 IU/mL)</b></td>
                                </tr>
                                <tr>
                                    <td><b>+</b></td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td><b>+</b></td>
                                    <td>-</td>
                                    <td><b>Yüksek</b></td>
                                    <td><b>HBeAg(-) kronik hepatit (MUTANT!)</b></td>
                                </tr>
                                <tr>
                                    <td>-</td>
                                    <td>-</td>
                                    <td><b>+</b></td>
                                    <td>+</td>
                                    <td>-</td>
                                    <td>+/-</td>
                                    <td><b>Pencere dönemi (akut iyileşme)</b></td>
                                </tr>
                                <tr>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td><b>+</b></td>
                                    <td>-</td>
                                    <td>+/-</td>
                                    <td><b>İzole Anti-HBc (Okült HBV?)</b></td>
                                </tr>
                                <tr>
                                    <td><b>+</b></td>
                                    <td><b>+</b></td>
                                    <td>-</td>
                                    <td>+</td>
                                    <td>-</td>
                                    <td>+</td>
                                    <td><b>Atipik: Farklı subtip koinfeksiyonu</b></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--warning">
                        <div class="alert-box__icon"><i class="fas fa-exclamation-triangle"></i></div>
                        <div class="alert-box__content">
                            <strong>Pencere Dönemi:</strong> HBsAg kaybolmuş, Anti-HBs henüz oluşmamış dönem. Bu dönemde <strong>sadece Anti-HBc IgM pozitif</strong> bulunur! Kan bankası için kritik öneme sahiptir. <b>NAT (HBV DNA) testi ile saptanabilir!</b>
                        </div>
                    </div>

                    <div class="alert-box alert-box--info">
                        <div class="alert-box__icon"><i class="fas fa-lightbulb"></i></div>
                        <div class="alert-box__content">
                            <strong>Aşılı vs İyileşmiş Ayırımı:</strong><br>
                            • <strong>Aşılı:</strong> Sadece Anti-HBs (+) - HBsAg aşısı sadece yüzey antijenini içerir<br>
                            • <strong>İyileşmiş:</strong> Anti-HBs (+) VE Anti-HBc IgG (+) - Doğal enfeksiyon tüm antijenlere maruziyete neden olur
                        </div>
                    </div>
                `
            },
            {
                title: "HBV Mutasyonları ve Atipik Durumlar",
                content: `
                    <div class="sub-section">
                        <h4 class="sub-section__title">1. Precore / Basal Core Promoter (BCP) Mutasyonları</h4>
                        <p>HBeAg negatif kronik hepatit B'nin en sık nedenidir. Virüs çoğalmaya devam eder ancak HBeAg üretilmez!</p>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Mutasyon</th>
                                    <th>Lokalizasyon</th>
                                    <th>Mekanizma</th>
                                    <th>Coğrafi Dağılım</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Precore (G1896A)</b></td>
                                    <td>Precore bölgesi</td>
                                    <td>Erken stop kodonu → HBeAg üretilmez</td>
                                    <td>Akdeniz, Asya (Genotip D, C)</td>
                                </tr>
                                <tr>
                                    <td><b>BCP (A1762T/G1764A)</b></td>
                                    <td>Core promoter</td>
                                    <td>Transkripsiyon ↓ → HBeAg sentezi ↓</td>
                                    <td>Dünya geneli</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="alert-box alert-box--danger">
                            <div class="alert-box__icon"><i class="fas fa-exclamation-circle"></i></div>
                            <div class="alert-box__content">
                                <strong>TUZAK:</strong> HBeAg negatif = düşük viral yük DEĞİLDİR! Precore mutant hastalarda HBV DNA >2000 IU/mL olabilir ve siroz riski yüksektir. İnaktif taşıyıcıdan ayırt etmek için <b>HBV DNA takibi şart!</b>
                            </div>
                        </div>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">2. S Gen Mutasyonları (Escape Mutant - Aşı Kaçış)</h4>
                        <p>HBsAg'nin "a" determinant bölgesindeki mutasyonlar:</p>
                        <ul class="feature-list">
                            <li><b>G145R:</b> En sık escape mutasyonu</li>
                            <li><b>D144A, P120T:</b> Diğer sık mutasyonlar</li>
                        </ul>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Sonuç</th>
                                    <th>Klinik Önem</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Aşı antikorları virüsü nötralize edemez</td>
                                    <td><b>Aşılı kişilerde enfeksiyon!</b></td>
                                </tr>
                                <tr>
                                    <td>HBsAg test kitleri tanıyamaz</td>
                                    <td><b>Yalancı negatif HBsAg!</b></td>
                                </tr>
                                <tr>
                                    <td>HBIG tedavisi etkisiz</td>
                                    <td><b>Nakil sonrası profilaksi başarısız!</b></td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="highlight-box">
                            <p class="highlight-box__title">🎯 Escape Mutant Şüphesi Ne Zaman?</p>
                            <p class="highlight-box__content">
                                • Anti-HBs pozitif ama HBV DNA pozitif<br>
                                • Aşılı kişide hepatit B enfeksiyonu<br>
                                • HBsAg(-), Anti-HBc(+), HBV DNA(+) → <b>Okült HBV düşün!</b>
                            </p>
                        </div>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">3. Okült Hepatit B (OBI)</h4>
                        <p><b>Tanım:</b> HBsAg negatif + HBV DNA pozitif (serum ve/veya karaciğerde)</p>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>HBsAg</th>
                                    <th>Anti-HBc</th>
                                    <th>Anti-HBs</th>
                                    <th>HBV DNA</th>
                                    <th>Tip</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>-</td>
                                    <td><b>+</b></td>
                                    <td>+/-</td>
                                    <td><b>+ (düşük)</b></td>
                                    <td><b>Seropozitif OBI (%80)</b></td>
                                </tr>
                                <tr>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td><b>+ (düşük)</b></td>
                                    <td><b>Seronegatif OBI (%20)</b></td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="alert-box alert-box--danger">
                            <div class="alert-box__icon"><i class="fas fa-exclamation-circle"></i></div>
                            <div class="alert-box__content">
                                <strong>REAKTİVASYON RİSKİ:</strong> Okült HBV hastalarında immunsupresif tedavi (rituksimab, anti-TNF, kemoterapi) HBV reaktivasyonuna yol açabilir! <b>Anti-HBc pozitif tüm hastalarda profilaksi değerlendir.</b>
                            </div>
                        </div>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">4. İzole Anti-HBc Pozitifliği</h4>
                        <p>HBsAg (-), Anti-HBs (-), Anti-HBc (+) durumunda olası senaryolar:</p>
                        <ul class="feature-list">
                            <li><b>Okült HBV:</b> Karaciğerde düşük düzey replikasyon (HBV DNA iste!)</li>
                            <li><b>Pencere dönemi:</b> Akut enfeksiyon iyileşme fazı (IgM pozitif olur)</li>
                            <li><b>Geçmiş enfeksiyon:</b> Anti-HBs zamanla kaybolmuş</li>
                            <li><b>Yalancı pozitif:</b> Düşük riskli kişilerde (test tekrarı)</li>
                        </ul>
                        <div class="mnemonic-box">
                            <p class="mnemonic-box__label">İzole Anti-HBc Yaklaşımı</p>
                            <p class="mnemonic-box__text">
                                <b>1.</b> HBV DNA iste → Pozitifse okült HBV<br>
                                <b>2.</b> Anti-HBc IgM iste → Pozitifse pencere dönemi<br>
                                <b>3.</b> Risk faktörü yoksa → Test tekrarı (yalancı pozitif?)
                            </p>
                        </div>
                    </div>
                `
            },
            {
                title: "HBV Reaktivasyon ve Profilaksi",
                content: `
                    <div class="sub-section">
                        <h4 class="sub-section__title">Reaktivasyon Risk Sınıflaması</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Risk</th>
                                    <th>HBsAg Durumu</th>
                                    <th>İlaç/Durum</th>
                                    <th>Reaktivasyon Oranı</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>ÇOK YÜKSEK (>10%)</b></td>
                                    <td>HBsAg (+)</td>
                                    <td>Rituksimab, Ofatumumab, Anti-CD20</td>
                                    <td>%30-60</td>
                                </tr>
                                <tr>
                                    <td><b>ÇOK YÜKSEK</b></td>
                                    <td>Anti-HBc (+) alone</td>
                                    <td>Rituksimab ± Kemoterapi</td>
                                    <td>%10-20</td>
                                </tr>
                                <tr>
                                    <td><b>YÜKSEK (1-10%)</b></td>
                                    <td>HBsAg (+)</td>
                                    <td>TNF inhibitörleri, Tirozin kinaz inh.</td>
                                    <td>%5-10</td>
                                </tr>
                                <tr>
                                    <td><b>YÜKSEK</b></td>
                                    <td>HBsAg (+)</td>
                                    <td>Yüksek doz steroid (>20mg/gün, >4 hafta)</td>
                                    <td>%5-10</td>
                                </tr>
                                <tr>
                                    <td><b>ORTA (1-10%)</b></td>
                                    <td>HBsAg (+)</td>
                                    <td>Konvansiyonel kemoterapi</td>
                                    <td>%1-5</td>
                                </tr>
                                <tr>
                                    <td><b>DÜŞÜK (<1%)</b></td>
                                    <td>Anti-HBc (+) alone</td>
                                    <td>Konvansiyonel kemoterapi</td>
                                    <td><%1</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Profilaksi Önerileri</h4>
                        <div class="highlight-box">
                            <p class="highlight-box__title">🎯 Profilaksi Endikasyonları</p>
                            <p class="highlight-box__content">
                                <b>HBsAg (+):</b> TÜM immunsupresif tedavilerde profilaksi!<br>
                                <b>Anti-HBc (+) alone:</b><br>
                                • Rituksimab → Profilaksi ŞART<br>
                                • Diğer immunsupresifler → HBV DNA izlemi veya profilaksi<br><br>
                                <b>İlaç:</b> Entekavir veya Tenofovir (lamivudin direnci nedeniyle artık önerilmiyor)<br>
                                <b>Süre:</b> Tedavi bitiminden 6-12 ay sonrasına kadar (Rituksimab'da 12-18 ay)
                            </p>
                        </div>
                    </div>

                    <div class="alert-box alert-box--danger">
                        <div class="alert-box__icon"><i class="fas fa-exclamation-circle"></i></div>
                        <div class="alert-box__content">
                            <strong>KRİTİK:</strong> Rituksimab alan tüm hastalarda HBsAg ve Anti-HBc taranmalı! Anti-HBc pozitif hastalarda bile reaktivasyon %10-20 oranında görülebilir. Profilaksi olmadan ölümcül hepatit gelişebilir!
                        </div>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Hafıza: Reaktivasyon Tuzağı</p>
                        <p class="mnemonic-box__text">
                            <b>"RİTUKSİMAB = RİSK"</b> → Anti-CD20 en riskli<br>
                            <b>"Anti-HBc = Dikkat"</b> → HBsAg negatif bile olsa risk var<br>
                            <b>"Entekavir/Tenofovir = Koruma"</b> → Lamivudin artık önerilmiyor
                        </p>
                    </div>
                `
            },
            {
                title: "Hepatit C ve Delta Hepatiti",
                content: `
                    <h4><i class="fas fa-procedures"></i> Hepatit C Tanı Algoritması</h4>
                    <div class="highlight-box highlight-box--secondary">
                        <ol class="feature-list">
                            <li><strong>Tarama:</strong> Anti-HCV (EIA/ELISA)</li>
                            <li><strong>Doğrulama:</strong> HCV RNA (PCR) - altın standart</li>
                            <li><strong>Genotipleme:</strong> Tedavi planlaması için (6 majör genotip)</li>
                        </ol>
                    </div>

                    <table class="article-table">
                        <thead>
                            <tr>
                                <th>Anti-HCV</th>
                                <th>HCV RNA</th>
                                <th>Yorum</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Negatif</td>
                                <td>Negatif</td>
                                <td>Enfeksiyon yok</td>
                            </tr>
                            <tr>
                                <td><strong>Pozitif</strong></td>
                                <td><strong>Pozitif</strong></td>
                                <td><strong>Aktif HCV enfeksiyonu</strong></td>
                            </tr>
                            <tr>
                                <td>Pozitif</td>
                                <td>Negatif</td>
                                <td>Geçirilmiş/iyileşmiş VEYA yalancı (+)</td>
                            </tr>
                            <tr>
                                <td>Negatif</td>
                                <td>Pozitif</td>
                                <td>Erken akut enfeksiyon (serokonversiyon öncesi)</td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="sub-section">
                        <h4 class="sub-section__title">HCV Genotipleri ve Klinik Önem</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Genotip</th>
                                    <th>Türkiye Sıklığı</th>
                                    <th>Özellik</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>1b</b></td>
                                    <td>%80-90</td>
                                    <td>En yaygın, eskiden tedaviye dirençli</td>
                                </tr>
                                <tr>
                                    <td>1a</td>
                                    <td>%10-15</td>
                                    <td>IVDU ilişkili</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>%3-5</td>
                                    <td>Steatoz ve siroz riski EN YÜKSEK</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="alert-box alert-box--info">
                            <div class="alert-box__icon"><i class="fas fa-lightbulb"></i></div>
                            <div class="alert-box__content">
                                <strong>Güncel Tedavi:</strong> Pangenotipik DAA'lar (Sofosbuvir/Velpatasvir, Glecaprevir/Pibrentasvir) tüm genotiplere %95-99 SVR sağlar. Genotipleme artık tedavi kararında kritik değil.
                            </div>
                        </div>
                    </div>

                    <h4><i class="fas fa-project-diagram"></i> Hepatit Delta (HDV)</h4>
                    <div class="alert-box alert-box--danger">
                        <div class="alert-box__icon"><i class="fas fa-exclamation-circle"></i></div>
                        <div class="alert-box__content">
                            <strong>HDV = Defektif virüs:</strong> Replikasyon için HBV'nin HBsAg'sine ihtiyaç duyar. HBsAg (-) kişide HDV enfeksiyonu OLMAZ!
                        </div>
                    </div>

                    <table class="article-table">
                        <thead>
                            <tr>
                                <th>Durum</th>
                                <th>Tanım</th>
                                <th>Anti-HBc IgM</th>
                                <th>Prognoz</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Koinfeksiyon</strong></td>
                                <td>HBV + HDV aynı anda</td>
                                <td><strong>Pozitif</strong></td>
                                <td>Genellikle iyileşir (%90)</td>
                            </tr>
                            <tr>
                                <td><strong>Süperinfeksiyon</strong></td>
                                <td>Kronik HBV + HDV eklenmesi</td>
                                <td><strong>Negatif</strong></td>
                                <td>Kötü prognoz, hızlı siroz</td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="sub-section">
                        <h4 class="sub-section__title">HDV Tanı Algoritması</h4>
                        <ul class="feature-list">
                            <li><b>Tarama:</b> Tüm HBsAg (+) hastalarda Anti-HDV total</li>
                            <li><b>Doğrulama:</b> HDV RNA (PCR)</li>
                            <li><b>Genotipleme:</b> 8 genotip (Genotip 1 en yaygın, Genotip 3 en ağır)</li>
                        </ul>
                        <div class="mnemonic-box">
                            <p class="mnemonic-box__label">HDV Koinfeksiyon vs Süperinfeksiyon</p>
                            <p class="mnemonic-box__text">
                                <b>"IgM = Yeni HBV = Koinfeksiyon = İyi prognoz"</b><br>
                                <b>"IgM (-) = Kronik HBV = Süperinfeksiyon = Kötü prognoz"</b>
                            </p>
                        </div>
                    </div>
                `
            },
            {
                title: "HIV Tanı Algoritması",
                content: `
                    <div class="highlight-box highlight-box--primary">
                        <h4><i class="fas fa-microscope"></i> HIV Test Yöntemleri</h4>
                        <ul class="feature-list">
                            <li><strong>4. Nesil Combo Test:</strong> HIV-1/2 antikoru + p24 antijeni (tarama testi)</li>
                            <li><strong>HIV-1/HIV-2 Antikor Ayırımı:</strong> Tip tayini için</li>
                            <li><strong>HIV RNA (NAT):</strong> Viral yük, erken tanı, tedavi takibi</li>
                            <li><strong>Western Blot:</strong> Artık rutin doğrulamada kullanılmıyor (CDC 2014)</li>
                        </ul>
                    </div>

                    <h4><i class="fas fa-project-diagram"></i> CDC Önerisi: 3 Basamaklı Algoritma</h4>
                    <div class="highlight-box highlight-box--secondary">
                        <ol class="feature-list">
                            <li><strong>1. Basamak:</strong> 4. nesil Ag/Ab combo test</li>
                            <li><strong>2. Basamak:</strong> Pozitifse → HIV-1/HIV-2 antikor ayırım testi</li>
                            <li><strong>3. Basamak:</strong> Belirsizse → HIV-1 RNA (NAT)</li>
                        </ol>
                    </div>

                    <table class="article-table">
                        <thead>
                            <tr>
                                <th>4. Nesil Test</th>
                                <th>HIV-1/2 Ab Ayırım</th>
                                <th>HIV-1 RNA</th>
                                <th>Yorum</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Negatif</td>
                                <td>-</td>
                                <td>-</td>
                                <td>HIV negatif</td>
                            </tr>
                            <tr>
                                <td>Pozitif</td>
                                <td>HIV-1 (+)</td>
                                <td>-</td>
                                <td><strong>HIV-1 enfeksiyonu</strong></td>
                            </tr>
                            <tr>
                                <td>Pozitif</td>
                                <td>HIV-2 (+)</td>
                                <td>-</td>
                                <td><strong>HIV-2 enfeksiyonu</strong></td>
                            </tr>
                            <tr>
                                <td>Pozitif</td>
                                <td>Belirsiz</td>
                                <td><strong>Pozitif</strong></td>
                                <td><strong>Akut HIV-1</strong> (serokonversiyon öncesi)</td>
                            </tr>
                            <tr>
                                <td>Pozitif</td>
                                <td>Belirsiz</td>
                                <td>Negatif</td>
                                <td>Yalancı pozitif, takip</td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="alert-box alert-box--warning">
                        <div class="alert-box__icon"><i class="fas fa-clock"></i></div>
                        <div class="alert-box__content">
                            <strong>Pencere Dönemi Süreleri:</strong><br>
                            • <strong>4. nesil test:</strong> ~18 gün (p24 antijeni sayesinde kısaldı)<br>
                            • <strong>3. nesil test:</strong> ~22 gün (sadece antikor)<br>
                            • <strong>HIV RNA:</strong> ~10-12 gün (en erken pozitifleşen)
                        </div>
                    </div>
                `
            },
            {
                title: "Sifiliz Tanı Algoritması",
                content: `
                    <div class="highlight-box highlight-box--primary">
                        <h4><i class="fas fa-vial"></i> Test Kategorileri</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Non-Treponemal (NTT)</th>
                                    <th>Treponemal (TT)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>RPR, VDRL</td>
                                    <td>TPHA, TPPA, FTA-ABS, EIA/CIA</td>
                                </tr>
                                <tr>
                                    <td>Hastalık aktivitesi gösterir</td>
                                    <td>Maruziyeti gösterir (ömür boyu +)</td>
                                </tr>
                                <tr>
                                    <td>Tedavi ile titre düşer</td>
                                    <td>Tedavi ile değişmez</td>
                                </tr>
                                <tr>
                                    <td>Yalancı (+) sık</td>
                                    <td>Daha spesifik</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4><i class="fas fa-exchange-alt"></i> Geleneksel vs Ters Algoritma</h4>
                    <div class="highlight-box highlight-box--secondary">
                        <h5>Geleneksel Algoritma:</h5>
                        <p><strong>NTT (RPR/VDRL)</strong> → Pozitifse → <strong>TT (TPHA)</strong> ile doğrula</p>
                        
                        <h5>Ters (Reverse) Algoritma:</h5>
                        <p><strong>TT (EIA/CIA)</strong> → Pozitifse → <strong>NTT (RPR)</strong> ile aktivite değerlendir</p>
                    </div>

                    <table class="article-table">
                        <thead>
                            <tr>
                                <th>TT (EIA)</th>
                                <th>NTT (RPR)</th>
                                <th>TPPA</th>
                                <th>Yorum</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Pozitif</td>
                                <td>Pozitif</td>
                                <td>-</td>
                                <td><strong>Aktif sifiliz</strong> - tedavi gerekli</td>
                            </tr>
                            <tr>
                                <td>Pozitif</td>
                                <td>Negatif</td>
                                <td>Pozitif</td>
                                <td>Geçirilmiş tedavi edilmiş sifiliz</td>
                            </tr>
                            <tr>
                                <td>Pozitif</td>
                                <td>Negatif</td>
                                <td>Negatif</td>
                                <td>Yalancı pozitif EIA</td>
                            </tr>
                            <tr>
                                <td>Negatif</td>
                                <td>Pozitif</td>
                                <td>-</td>
                                <td>Yalancı pozitif RPR</td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="alert-box alert-box--info">
                        <div class="alert-box__icon"><i class="fas fa-list"></i></div>
                        <div class="alert-box__content">
                            <strong>RPR/VDRL Yalancı Pozitiflik Nedenleri:</strong><br>
                            • Gebelik, Otoimmün hastalıklar (SLE, APS)<br>
                            • IV ilaç kullanımı, İleri yaş<br>
                            • Diğer enfeksiyonlar: Tüberküloz, EBV, Hepatit, Malaria<br>
                            • <strong>Hafıza kodu: "GODA"</strong> - Gebelik, Otoimmün, Drugs, Age
                        </div>
                    </div>
                `
            },
            {
                title: "TORCH Paneli",
                content: `
                    <div class="highlight-box highlight-box--primary">
                        <h4><i class="fas fa-baby"></i> TORCH Etkenleri</h4>
                        <ul class="feature-list">
                            <li><strong>T</strong> - Toxoplasma gondii</li>
                            <li><strong>O</strong> - Other (Sifiliz, VZV, Parvovirus B19, Listeria)</li>
                            <li><strong>R</strong> - Rubella (Kızamıkçık)</li>
                            <li><strong>C</strong> - Cytomegalovirus (CMV)</li>
                            <li><strong>H</strong> - Herpes simplex virus (HSV)</li>
                        </ul>
                    </div>

                    <table class="article-table">
                        <thead>
                            <tr>
                                <th>IgM</th>
                                <th>IgG</th>
                                <th>Yorum</th>
                                <th>Gebelikte Yaklaşım</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Negatif</td>
                                <td>Negatif</td>
                                <td>Duyarlı (naif)</td>
                                <td>Korunma önerileri, takip</td>
                            </tr>
                            <tr>
                                <td><strong>Pozitif</strong></td>
                                <td>Negatif</td>
                                <td>Çok erken akut enfeksiyon</td>
                                <td>2 hafta sonra tekrar test</td>
                            </tr>
                            <tr>
                                <td><strong>Pozitif</strong></td>
                                <td><strong>Pozitif</strong></td>
                                <td>Akut veya yakın geçmiş</td>
                                <td><strong>IgG Avidite testi yap!</strong></td>
                            </tr>
                            <tr>
                                <td>Negatif</td>
                                <td><strong>Pozitif</strong></td>
                                <td>Geçirilmiş enfeksiyon / Bağışık</td>
                                <td>Risk yok (genellikle)</td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="alert-box alert-box--danger">
                        <div class="alert-box__icon"><i class="fas fa-exclamation-circle"></i></div>
                        <div class="alert-box__content">
                            <strong>IgG Avidite Testi - Kritik Önemi:</strong><br>
                            • <strong>Düşük avidite (&lt;30%):</strong> Son 3-4 ay içinde enfeksiyon → <strong>Fetal risk YÜKSEK</strong><br>
                            • <strong>Yüksek avidite (&gt;60%):</strong> 3-4 aydan eski enfeksiyon → Fetal risk düşük<br>
                            • IgM (+) IgG (+) durumunda enfeksiyonun zamanlamasını belirlemek için ŞART!
                        </div>
                    </div>

                    <h4><i class="fas fa-biohazard"></i> Konjenital Enfeksiyon Bulguları</h4>
                    <table class="article-table">
                        <thead>
                            <tr>
                                <th>Etken</th>
                                <th>Karakteristik Bulgular</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Toxoplasma</strong></td>
                                <td>Hidrosefali, intrakraniyal kalsifikasyon (yaygın), koryoretinit</td>
                            </tr>
                            <tr>
                                <td><strong>Rubella</strong></td>
                                <td>Katarakt, sağırlık, PDA, "blueberry muffin" döküntü</td>
                            </tr>
                            <tr>
                                <td><strong>CMV</strong></td>
                                <td>Periventriküler kalsifikasyon, mikrosefali, sensörinöral sağırlık</td>
                            </tr>
                            <tr>
                                <td><strong>HSV</strong></td>
                                <td>Vezikül, ensefalit, DIC (doğum kanalından bulaş)</td>
                            </tr>
                            <tr>
                                <td><strong>Sifiliz</strong></td>
                                <td>Hutchinson triadı, sabre tibia, saddle nose</td>
                            </tr>
                        </tbody>
                    </table>
                `
            },
            {
                title: "Bruselloz Serolojisi",
                content: `
                    <div class="highlight-box highlight-box--secondary">
                        <h4><i class="fas fa-flask"></i> Serolojik Testler</h4>
                        <ul class="feature-list">
                            <li><strong>Rose Bengal:</strong> Hızlı tarama testi (lam aglütinasyon)</li>
                            <li><strong>Standart Tüp Aglütinasyon (STA/Wright):</strong> Titre ≥1/160 anlamlı</li>
                            <li><strong>Coombs Testi:</strong> Blokan antikorları tespit eder (kronik bruselloz)</li>
                            <li><strong>2-Merkaptoetanol (2-ME):</strong> IgM'i inaktive eder, IgG kalır</li>
                        </ul>
                    </div>

                    <div class="alert-box alert-box--warning">
                        <div class="alert-box__icon"><i class="fas fa-search"></i></div>
                        <div class="alert-box__content">
                            <strong>Prozon Fenomeni:</strong><br>
                            Yüksek antikor konsantrasyonunda aglütinasyonun görülmemesi. Düşük dilüsyonlarda yalancı negatiflik yapar!<br>
                            <strong>Çözüm:</strong> Serumu daha fazla dilüe et veya Coombs testi kullan.
                        </div>
                    </div>

                    <table class="article-table">
                        <thead>
                            <tr>
                                <th>Test Sonucu</th>
                                <th>Yorum</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>STA ≥1/160</td>
                                <td>Aktif enfeksiyon düşündürür</td>
                            </tr>
                            <tr>
                                <td>STA (+), Coombs (+), STA &gt; Coombs titre</td>
                                <td>Akut bruselloz</td>
                            </tr>
                            <tr>
                                <td>STA (-/düşük), Coombs (+) yüksek titre</td>
                                <td><strong>Kronik bruselloz</strong> (blokan antikor)</td>
                            </tr>
                            <tr>
                                <td>2-ME sonrası titre ≥4 kat düşüş</td>
                                <td>IgM baskın (akut)</td>
                            </tr>
                            <tr>
                                <td>2-ME sonrası titre değişmez</td>
                                <td>IgG baskın (kronik veya tedavi görmüş)</td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="alert-box alert-box--info">
                        <div class="alert-box__icon"><i class="fas fa-lightbulb"></i></div>
                        <div class="alert-box__content">
                            <strong>Sınav İpucu - Çapraz Reaksiyon:</strong><br>
                            Brucella ile çapraz reaksiyon veren bakteriler: <strong>Yersinia enterocolitica O:9</strong>, Francisella tularensis, Vibrio cholerae<br>
                            Bu durumda kültür veya PCR ile doğrulama gerekir.
                        </div>
                    </div>
                `
            },
            {
                title: "EBV ve Heterofil Antikorlar",
                content: `
                    <div class="highlight-box highlight-box--primary">
                        <h4><i class="fas fa-virus"></i> EBV Serolojik Belirteçler</h4>
                        <ul class="feature-list">
                            <li><strong>Heterofil antikor (Monospot):</strong> Hızlı tarama, çocuklarda duyarlılık düşük</li>
                            <li><strong>VCA IgM:</strong> Akut enfeksiyon (4-8 hafta pozitif kalır)</li>
                            <li><strong>VCA IgG:</strong> Geçirilmiş enfeksiyon (ömür boyu pozitif)</li>
                            <li><strong>EA (Early Antigen):</strong> Akut/reaktivasyon (kronik aktif EBV'de yüksek)</li>
                            <li><strong>EBNA IgG:</strong> Geç dönem, iyileşme (6-12 hafta sonra pozitifleşir)</li>
                        </ul>
                    </div>

                    <table class="article-table">
                        <thead>
                            <tr>
                                <th>Klinik Durum</th>
                                <th>VCA IgM</th>
                                <th>VCA IgG</th>
                                <th>EBNA IgG</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Duyarlı (naif)</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td><strong>Akut enfeksiyon</strong></td>
                                <td><strong>+</strong></td>
                                <td>+/-</td>
                                <td><strong>-</strong></td>
                            </tr>
                            <tr>
                                <td>Yakın geçmiş enfeksiyon</td>
                                <td>+/-</td>
                                <td>+</td>
                                <td>+/-</td>
                            </tr>
                            <tr>
                                <td><strong>Geçirilmiş enfeksiyon</strong></td>
                                <td>-</td>
                                <td><strong>+</strong></td>
                                <td><strong>+</strong></td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="alert-box alert-box--danger">
                        <div class="alert-box__icon"><i class="fas fa-child"></i></div>
                        <div class="alert-box__content">
                            <strong>Pediatrik Dikkat:</strong><br>
                            4 yaş altı çocuklarda heterofil antikor testi %50'ye kadar yalancı negatif olabilir!<br>
                            <strong>Çözüm:</strong> Çocuklarda spesifik EBV serolojisi (VCA IgM/IgG, EBNA) kullan.
                        </div>
                    </div>
                `
            },
            {
                title: "Özel Durumlar ve İleri Testler",
                content: `
                    <h4><i class="fas fa-procedures"></i> Lyme Hastalığı - 2 Basamaklı Test</h4>
                    <div class="highlight-box highlight-box--secondary">
                        <ol class="feature-list">
                            <li><strong>1. Basamak:</strong> EIA veya IFA (tarama)</li>
                            <li><strong>2. Basamak:</strong> Western Blot ile doğrulama (IgM ve/veya IgG)</li>
                        </ol>
                        <p><strong>Not:</strong> Erken dönemde (eritema migrans) seroloji negatif olabilir - klinik tanı yeterli!</p>
                    </div>

                    <h4><i class="fas fa-lungs"></i> Q Ateşi (Coxiella burnetii) - Faz Antijenleri</h4>
                    <table class="article-table">
                        <thead>
                            <tr>
                                <th>Antijen</th>
                                <th>Yorum</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Faz II antikoru yüksek</strong></td>
                                <td>Akut Q ateşi</td>
                            </tr>
                            <tr>
                                <td><strong>Faz I IgG ≥1:800</strong></td>
                                <td>Kronik Q ateşi (endokardit)</td>
                            </tr>
                        </tbody>
                    </table>

                    <h4><i class="fas fa-baby"></i> HIV (+) Anne Bebeği Takibi</h4>
                    <div class="alert-box alert-box--warning">
                        <div class="alert-box__icon"><i class="fas fa-exclamation-triangle"></i></div>
                        <div class="alert-box__content">
                            <strong>Antikor testleri 18 aya kadar KULLANILAMAZ!</strong><br>
                            Maternal IgG antikorları plasentadan geçer ve 18 aya kadar bebekte pozitif kalabilir.<br><br>
                            <strong>Tanı:</strong> HIV DNA PCR veya HIV RNA<br>
                            • Doğumda, 14-21. gün, 1-2. ay, 4-6. ayda test<br>
                            • 2 negatif virolojik test = enfeksiyon dışlanır
                        </div>
                    </div>

                    <h4><i class="fas fa-procedures"></i> Konjenital Sifiliz Tanısı</h4>
                    <ul class="feature-list">
                        <li>Bebek RPR titresi anne titresinin <strong>≥4 kat</strong> yüksekse → Konjenital sifiliz</li>
                        <li>Bebekte <strong>IgM FTA-ABS (+)</strong> → Bebekte aktif enfeksiyon (IgM plasentayı geçmez)</li>
                        <li>BOS'ta <strong>VDRL (+)</strong> → Nörositiliz</li>
                    </ul>
                `
            },
            {
                title: "Sınav İçin Kritik Özet",
                icon: "fas fa-graduation-cap",
                content: `
                    <div class="highlight-box highlight-box--primary">
                        <h4><i class="fas fa-star"></i> En Sık Sorulan Eşleşmeler</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Antikor/Patern</th>
                                    <th>Hastalık</th>
                                    <th>Sınav İpucu</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>HBsAg (-), Anti-HBs (+), Anti-HBc (-)</td>
                                    <td><strong>Aşılı birey</strong></td>
                                </tr>
                                <tr>
                                    <td>HBsAg (-), Anti-HBs (-), Anti-HBc IgM (+)</td>
                                    <td><strong>Pencere dönemi</strong></td>
                                </tr>
                                <tr>
                                    <td>Anti-HCV (+), HCV RNA (-)</td>
                                    <td><strong>Geçirilmiş HCV veya yalancı (+)</strong></td>
                                </tr>
                                <tr>
                                    <td>HIV 4. nesil (+), Ayırım belirsiz, RNA (+)</td>
                                    <td><strong>Akut HIV (serokonversiyon)</strong></td>
                                </tr>
                                <tr>
                                    <td>EIA (+), RPR (-), TPPA (+)</td>
                                    <td><strong>Geçirilmiş tedavi edilmiş sifiliz</strong></td>
                                </tr>
                                <tr>
                                    <td>IgM (+), IgG (+), Düşük avidite</td>
                                    <td><strong>Son 3 ayda primer enfeksiyon</strong></td>
                                </tr>
                                <tr>
                                    <td>STA (-), Coombs (+)</td>
                                    <td><strong>Kronik bruselloz</strong></td>
                                </tr>
                                <tr>
                                    <td>VCA IgM (+), EBNA (-)</td>
                                    <td><strong>Akut EBV</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Mega Hafıza Kodları</p>
                        <p class="mnemonic-box__text">
                            <strong>"HoBeNüSePe"</strong> → ANA paternleri<br>
                            <strong>"c-PR3-Wegener, p-MPO-Mikro"</strong> → ANCA<br>
                            <strong>"Sm = SLE Marker"</strong> → En spesifik<br>
                            <strong>"dsDNA = Disease DNA"</strong> → Aktivite takibi<br>
                            <strong>"AMA = Always Means PBC Almost"</strong> → %95 özgül<br>
                            <strong>"CREST = Centromer"</strong> → 46 nokta
                        </p>
                    </div>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>TUZAK SORULAR:</strong><br><br>
                            • "ANA negatif SLE olabilir mi?" → <strong>EVET!</strong> Anti-SSA/Ro (+) iste<br>
                            • "p-ANCA pozitif ama MPO negatif?" → Atipik ANCA, İBH düşün<br>
                            • "Homojen ANA + dsDNA(-) + Histon(+)?" → <strong>İlaca bağlı lupus</strong><br>
                            • "46 ayrık nokta IIF'de?" → <strong>Anti-sentromer (CREST)</strong><br>
                            • "Crithidia luciliae ne için?" → <strong>Anti-dsDNA</strong> (en spesifik yöntem)
                        </p>
                    </div>

                    <div class="alert-box alert-box--info">
                        <span class="alert-box__icon">💡</span>
                        <p class="alert-box__text"><strong>Pratik Sınav Yaklaşımı:</strong><br><br>
                            <strong>Soru:</strong> "55 yaşında kadın, ANA 1:320 homojen patern, eklem ağrısı..."<br>
                            <strong>Düşün:</strong> Homojen = dsDNA veya Histon<br>
                            <strong>İste:</strong> Anti-dsDNA, Anti-Histon, C3, C4<br>
                            <strong>Değerlendir:</strong> dsDNA(+) + düşük kompleman = aktif SLE
                        </p>
                    </div>

                    <ul class="feature-list">
                        <li><b>Soru tipi:</b> "Homojen ANA + Anti-dsDNA (+)?" → SLE</li>
                        <li><b>Soru tipi:</b> "Benekli ANA + Anti-SSA (+)?" → Sjögren veya SLE</li>
                        <li><b>Soru tipi:</b> "Nükleolar ANA?" → Skleroderma</li>
                        <li><b>Soru tipi:</b> "c-ANCA + sinüzit + hemoptizi + hematüri?" → GPA</li>
                        <li><b>Soru tipi:</b> "p-ANCA + RPGN?" → MPA veya anti-GBM</li>
                        <li><b>Soru tipi:</b> "Kaşıntı + ALP yüksek + AMA (+)?" → PBC</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 7,
        title: "İndirekt İmmünfloresan (IIF) Testleri",
        subtitle: "ANA Paternleri, ANCA ve Klinik Korelasyonlar",
        category: "laboratuvar",
        icon: "fa-microscope",
        color: "#06b6d4",
        lastUpdated: "2024-01-20",
        readTime: "25 dk",
        summary: "İndirekt immünfloresan mikroskobi ile değerlendirilen otoantikor testleri. ANA paternleri ve hastalık korelasyonları, ANCA tipleri, anti-dsDNA ve diğer spesifik antikorların klinik yorumu.",
        tags: ["IIF", "ANA", "ANCA", "Otoantikor", "Floresan Mikroskopi", "Otoimmün Hastalık"],
        sections: [
            {
                title: "IIF Temel Prensipler",
                icon: "fas fa-lightbulb",
                content: `
                    <div class="highlight-box highlight-box--primary">
                        <h4><i class="fas fa-microscope"></i> İndirekt İmmünfloresan Yöntemi</h4>
                        <p>İki aşamalı antikor tespit yöntemidir:</p>
                        <ol class="feature-list">
                            <li><strong>1. Aşama:</strong> Hasta serumu + Substrat (HEp-2 hücresi, nötrofil vb.) → Antikor bağlanması</li>
                            <li><strong>2. Aşama:</strong> Floresan işaretli anti-human IgG eklenir → UV'de parlama</li>
                        </ol>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">IIF Avantajları ve Dezavantajları</h4>
                        <table class="article-table">
                            <tr>
                                <th>Avantajlar</th>
                                <th>Dezavantajlar</th>
                            </tr>
                            <tr>
                                <td>
                                    • Yüksek duyarlılık<br>
                                    • Patern analizi mümkün<br>
                                    • Titre tayini yapılabilir<br>
                                    • Tarama testi olarak ideal
                                </td>
                                <td>
                                    • Subjektif değerlendirme<br>
                                    • Deneyimli personel gerektirir<br>
                                    • Antijen spesifikliği düşük<br>
                                    • Doğrulama testleri gerekli
                                </td>
                            </tr>
                        </table>
                    </div>

                    <div class="alert-box alert-box--info">
                        <span class="alert-box__icon">ℹ️</span>
                        <p class="alert-box__text"><strong>Substrat Seçimi:</strong><br>
                            • <strong>HEp-2 hücreleri:</strong> ANA testi için altın standart (insan laringeal karsinom)<br>
                            • <strong>Etanol fikse nötrofiller:</strong> ANCA testi için<br>
                            • <strong>Crithidia luciliae:</strong> Anti-dsDNA için spesifik<br>
                            • <strong>Maymun özofagusu:</strong> Anti-düz kas, anti-mitokondriyal Ab
                        </p>
                    </div>
                `
            },
            {
                title: "ANA (Antinükleer Antikor) Testi",
                icon: "fas fa-atom",
                content: `
                    <div class="highlight-box highlight-box--primary">
                        <h4><i class="fas fa-star"></i> ANA Testi Genel Bilgiler</h4>
                        <ul class="feature-list">
                            <li><strong>Substrat:</strong> HEp-2 hücreleri (mitotik hücreler içerir - önemli!)</li>
                            <li><strong>Pozitiflik eşiği:</strong> Genellikle ≥1:80 veya ≥1:160 (laboratuvara göre değişir)</li>
                            <li><strong>Tarama testi:</strong> SLE için %95-99 duyarlılık, düşük özgüllük</li>
                            <li><strong>Sağlıklı popülasyonda:</strong> %5-15 düşük titrede pozitif olabilir</li>
                        </ul>
                    </div>

                    <div class="alert-box alert-box--warning">
                        <span class="alert-box__icon">⚠️</span>
                        <p class="alert-box__text"><strong>KRİTİK:</strong> ANA negatif ise SLE tanısı hemen hemen dışlanır! (%95-99 duyarlılık)<br>
                        Ancak ANA pozitif ise SLE demek DEĞİLDİR - özgüllük düşüktür, patern ve doğrulama testleri gerekir.
                        </p>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">ANA Yaklaşım Algoritması</p>
                        <p class="mnemonic-box__text">ANA → PATERN → DOĞRULAMA → KLİNİK</p>
                        <p class="mnemonic-box__hint">
                            1) ANA titre ve pozitiflik<br>
                            2) Patern tanımlama (Homojen, Benekli, vb.)<br>
                            3) Spesifik antikor doğrulama (ELISA, immunoblot)<br>
                            4) Klinik korelasyon
                        </p>
                    </div>
                `
            },
            {
                title: "ANA Paternleri ve Klinik Korelasyonlar",
                icon: "fas fa-th",
                content: `
                    <div class="highlight-box highlight-box--secondary">
                        <h4><i class="fas fa-eye"></i> Temel ANA Paternleri</h4>
                        <p>ICAP (International Consensus on ANA Patterns) sınıflamasına göre ana paternler:</p>
                    </div>

                    <table class="article-table">
                        <thead>
                            <tr>
                                <th>Patern</th>
                                <th>Görünüm</th>
                                <th>Hedef Antijenler</th>
                                <th>İlişkili Hastalıklar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Homojen (Diffüz)</strong></td>
                                <td>Tüm nükleus uniform boyalı, mitotik kromozomlar (+)</td>
                                <td>dsDNA, Histonlar, Nükleozom</td>
                                <td><strong>SLE</strong>, İlaca bağlı lupus</td>
                            </tr>
                            <tr>
                                <td><strong>Benekli (Speckled)</strong></td>
                                <td>Nükleus içinde benekler, mitotik kromozom (-)</td>
                                <td>Sm, RNP, SSA/Ro, SSB/La, Scl-70</td>
                                <td><strong>SLE, Sjögren, Skleroderma, MCTD</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Nükleolar</strong></td>
                                <td>Sadece nükleolus boyalı (1-5 parlak nokta)</td>
                                <td>PM-Scl, RNA polimeraz, Fibrillarin</td>
                                <td><strong>Skleroderma</strong>, Polimiyozit</td>
                            </tr>
                            <tr>
                                <td><strong>Sentromer</strong></td>
                                <td>46 ayrık nokta (kromozom sayısı kadar)</td>
                                <td>CENP-A, CENP-B, CENP-C</td>
                                <td><strong>Limitli Skleroderma (CREST)</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Periferik (Rim)</strong></td>
                                <td>Nükleer membran boyalı, halka şeklinde</td>
                                <td>dsDNA, Lamin, Nuclear pore</td>
                                <td><strong>SLE</strong> (yüksek özgüllük)</td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Patern Hafıza Kodu</p>
                        <p class="mnemonic-box__text">"HoBeNüSePe"</p>
                        <p class="mnemonic-box__hint">
                            <strong>Ho</strong>mojen → SLE (dsDNA, Histon)<br>
                            <strong>Be</strong>nekli → Karışık (Sm, RNP, SSA, SSB)<br>
                            <strong>Nü</strong>kleolar → Skleroderma<br>
                            <strong>Se</strong>ntromer → CREST (46 nokta!)<br>
                            <strong>Pe</strong>riferik → SLE (dsDNA, en özgül)
                        </p>
                    </div>

                    <div class="alert-box alert-box--info">
                        <span class="alert-box__icon">💡</span>
                        <p class="alert-box__text"><strong>Sınav İpucu - Mitotik Hücrelere Dikkat!</strong><br>
                            • <strong>Homojen:</strong> Mitotik kromozomlar BOYANIR<br>
                            • <strong>Benekli:</strong> Mitotik kromozomlar BOYANMAZ<br>
                            • <strong>Sentromer:</strong> Mitotik hücrelerde 46 AYRIK NOKTA görülür
                        </p>
                    </div>
                `
            },
            {
                title: "Spesifik Antikorlar ve Hastalık İlişkileri",
                icon: "fas fa-link",
                content: `
                    <div class="highlight-box highlight-box--primary">
                        <h4><i class="fas fa-bullseye"></i> SLE İlişkili Antikorlar</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Antikor</th>
                                    <th>Duyarlılık</th>
                                    <th>Özgüllük</th>
                                    <th>Klinik Önemi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Anti-dsDNA</strong></td>
                                    <td>%60-70</td>
                                    <td><strong>%95+</strong></td>
                                    <td>Hastalık aktivitesi, lupus nefriti</td>
                                </tr>
                                <tr>
                                    <td><strong>Anti-Sm</strong></td>
                                    <td>%25-30</td>
                                    <td><strong>%99+</strong></td>
                                    <td>SLE için EN SPESİFİK! Tanı koydurucu</td>
                                </tr>
                                <tr>
                                    <td><strong>Anti-Histon</strong></td>
                                    <td>%50-70</td>
                                    <td>Düşük</td>
                                    <td><strong>İlaca bağlı lupus</strong> (%95+)</td>
                                </tr>
                                <tr>
                                    <td><strong>Anti-RNP</strong></td>
                                    <td>%30-40</td>
                                    <td>Düşük</td>
                                    <td>MCTD (yüksek titrede)</td>
                                </tr>
                                <tr>
                                    <td><strong>Anti-SSA/Ro</strong></td>
                                    <td>%30-40</td>
                                    <td>Orta</td>
                                    <td>Neonatal lupus, kalp bloğu, ANA(-) SLE</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>KRİTİK - ANA Negatif SLE:</strong><br>
                            %5 SLE hastasında ANA negatif olabilir!<br>
                            Bunların çoğunda <strong>Anti-SSA/Ro (+)</strong> bulunur.<br>
                            Klinik şüphe yüksekse Anti-SSA/Ro mutlaka istenmelidir!
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Diğer Otoimmün Hastalıklarda Antikorlar</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Hastalık</th>
                                    <th>Karakteristik Antikor</th>
                                    <th>Not</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Sjögren Sendromu</strong></td>
                                    <td>Anti-SSA/Ro, Anti-SSB/La</td>
                                    <td>SSB daha spesifik</td>
                                </tr>
                                <tr>
                                    <td><strong>Diffüz Skleroderma</strong></td>
                                    <td>Anti-Scl-70 (Topoizomeraz I)</td>
                                    <td>Akciğer tutulumu riski</td>
                                </tr>
                                <tr>
                                    <td><strong>Limitli Skleroderma (CREST)</strong></td>
                                    <td>Anti-Sentromer</td>
                                    <td>Pulmoner HT riski</td>
                                </tr>
                                <tr>
                                    <td><strong>MCTD</strong></td>
                                    <td>Anti-U1 RNP (yüksek titre)</td>
                                    <td>İZOLE yüksek RNP</td>
                                </tr>
                                <tr>
                                    <td><strong>Polimiyozit</strong></td>
                                    <td>Anti-Jo-1 (Histidil-tRNA sentetaz)</td>
                                    <td>Antisendronik sendrom, ILD</td>
                                </tr>
                                <tr>
                                    <td><strong>Dermatomiyozit</strong></td>
                                    <td>Anti-Mi-2</td>
                                    <td>İyi prognoz</td>
                                </tr>
                                <tr>
                                    <td><strong>İlaca Bağlı Lupus</strong></td>
                                    <td>Anti-Histon</td>
                                    <td>dsDNA genellikle (-)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Özgüllük Sıralaması (SLE için)</p>
                        <p class="mnemonic-box__text">"Sm > dsDNA > RNP"</p>
                        <p class="mnemonic-box__hint">
                            Anti-Sm: EN SPESİFİK (%99), duyarlılık düşük<br>
                            Anti-dsDNA: Çok spesifik (%95), aktivite takibi<br>
                            Anti-RNP: Daha az spesifik, MCTD'de yüksek
                        </p>
                    </div>
                `
            },
            {
                title: "Anti-dsDNA Testi",
                icon: "fas fa-dna",
                content: `
                    <div class="highlight-box highlight-box--primary">
                        <h4><i class="fas fa-vial"></i> Anti-dsDNA Test Yöntemleri</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Yöntem</th>
                                    <th>Özellik</th>
                                    <th>Avantaj/Dezavantaj</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Crithidia luciliae IIF</strong></td>
                                    <td>Kinetoplast boyanır</td>
                                    <td>EN SPESİFİK (altın standart), düşük duyarlılık</td>
                                </tr>
                                <tr>
                                    <td><strong>Farr Assay</strong></td>
                                    <td>Radyoaktif dsDNA</td>
                                    <td>Yüksek özgüllük, radyasyon riski</td>
                                </tr>
                                <tr>
                                    <td><strong>ELISA</strong></td>
                                    <td>Rekombinant/native dsDNA</td>
                                    <td>Kolay, yalancı (+) olabilir</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--info">
                        <span class="alert-box__icon">💡</span>
                        <p class="alert-box__text"><strong>Crithidia luciliae Nedir?</strong><br>
                            Hemoflagelat bir protozoon. Kinetoplastı saf dsDNA içerir (histon içermez!).<br>
                            Bu nedenle anti-histon antikorları reaksiyon vermez → <strong>saf dsDNA antikorlarını tespit eder</strong>
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Anti-dsDNA Klinik Kullanımı</h4>
                        <ul class="feature-list">
                            <li><b>SLE Tanısı:</b> Yüksek özgüllük (%95+), tanı kriterlerinde yer alır</li>
                            <li><b>Hastalık Aktivitesi:</b> Titre ile aktivite paralel seyreder</li>
                            <li><b>Lupus Nefriti:</b> Anti-dsDNA (+) ve kompleman düşüklüğü → Nefrit riski ↑</li>
                            <li><b>Takip:</b> 3-6 ayda bir titre kontrolü</li>
                        </ul>
                    </div>

                    <div class="alert-box alert-box--warning">
                        <span class="alert-box__icon">⚠️</span>
                        <p class="alert-box__text"><strong>Anti-dsDNA Titre Yorumu:</strong><br>
                            • Titre ↑ + Kompleman ↓ → Aktif hastalık, nefrit riski<br>
                            • Titre ↑ + Klinik kötüleşme → Alevlenme<br>
                            • Düşük/stabil titre → Remisyon
                        </p>
                    </div>
                `
            },
            {
                title: "ANCA (Anti-Nötrofil Sitoplazmik Antikor)",
                icon: "fas fa-shield-virus",
                content: `
                    <div class="highlight-box highlight-box--primary">
                        <h4><i class="fas fa-microscope"></i> ANCA IIF Paternleri</h4>
                        <p>Etanol fikse nötrofiller üzerinde değerlendirilir:</p>
                    </div>

                    <table class="article-table">
                        <thead>
                            <tr>
                                <th>IIF Patern</th>
                                <th>Görünüm</th>
                                <th>Hedef Antijen</th>
                                <th>İlişkili Hastalık</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>c-ANCA (Sitoplazmik)</strong></td>
                                <td>Granüler sitoplazmik boyanma, merkezi yoğunluk</td>
                                <td><strong>PR3</strong> (Proteinaz 3)</td>
                                <td><strong>GPA (Wegener)</strong></td>
                            </tr>
                            <tr>
                                <td><strong>p-ANCA (Perinükleer)</strong></td>
                                <td>Nükleus çevresinde yoğunlaşma (artefakt)</td>
                                <td><strong>MPO</strong> (Miyeloperoksidaz)</td>
                                <td><strong>MPA, EGPA (Churg-Strauss), Renal vaskülit</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Atipik ANCA</strong></td>
                                <td>c ve p arası veya farklı patern</td>
                                <td>Elastaz, Laktoferrin, BPI vb.</td>
                                <td>İBH, Otoimmün hepatit, İlaç ilişkili</td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">ANCA Hafıza Kodu</p>
                        <p class="mnemonic-box__text">"c-PR3-Wegener" vs "p-MPO-Mikro"</p>
                        <p class="mnemonic-box__hint">
                            <strong>c-ANCA = PR3 = GPA (Wegener)</strong> → "C" harfi "Cytoplasmic" ve "PR3"<br>
                            <strong>p-ANCA = MPO = MPA/EGPA</strong> → "P" harfi "Perinuclear" ve "MPO"
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">ANCA-İlişkili Vaskülitler (AAV)</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Hastalık</th>
                                    <th>ANCA</th>
                                    <th>Karakteristik Bulgu</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>GPA (Wegener)</strong></td>
                                    <td>c-ANCA/PR3 (%90)</td>
                                    <td>Üst solunum + Alt solunum + Böbrek (triad)</td>
                                </tr>
                                <tr>
                                    <td><strong>MPA</strong></td>
                                    <td>p-ANCA/MPO (%60-70)</td>
                                    <td>Pulmoner-renal sendrom, palpable purpura</td>
                                </tr>
                                <tr>
                                    <td><strong>EGPA (Churg-Strauss)</strong></td>
                                    <td>p-ANCA/MPO (%40-60)</td>
                                    <td>Astım + Eozinofili + Vaskülit</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>ANCA Test Algoritması (ACR/EULAR 2017):</strong><br>
                            1. <strong>IIF ile tarama</strong> (c-ANCA veya p-ANCA paterni)<br>
                            2. <strong>ELISA/İmmunoblot ile doğrulama</strong> (PR3 veya MPO spesifik)<br>
                            <br>
                            <strong>YENİ ÖNERİ:</strong> Yüksek klinik şüphede <strong>direkt PR3/MPO ELISA</strong> ile başlanabilir (IIF atlanabilir)
                        </p>
                    </div>

                    <div class="alert-box alert-box--warning">
                        <span class="alert-box__icon">⚠️</span>
                        <p class="alert-box__text"><strong>p-ANCA Tuzağı:</strong><br>
                            p-ANCA paterni bir <strong>artefakttır</strong> - etanol fiksasyonu sırasında pozitif yüklü granül proteinleri negatif yüklü nükleusa çekilir.<br>
                            <strong>ANA pozitifliği p-ANCA'yı taklit edebilir!</strong><br>
                            Çözüm: Formalin fikse nötrofiller veya ELISA ile doğrulama
                        </p>
                    </div>
                `
            },
            {
                title: "Diğer IIF Testleri",
                icon: "fas fa-flask",
                content: `
                    <div class="sub-section">
                        <h4 class="sub-section__title">Anti-GBM (Glomerüler Bazal Membran)</h4>
                        <ul class="feature-list">
                            <li><b>Substrat:</b> Maymun/insan böbrek dokusu</li>
                            <li><b>Patern:</b> Glomerüler kapiller duvarında lineer IgG birikimi</li>
                            <li><b>İlişkili hastalık:</b> <strong>Goodpasture sendromu</strong> (anti-GBM hastalığı)</li>
                            <li><b>Hedef:</b> Tip IV kollajenin α3 zinciri</li>
                            <li><b>Klinik:</b> Hızlı ilerleyen GN + Pulmoner hemoraji</li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Anti-Mitokondriyal Antikor (AMA)</h4>
                        <ul class="feature-list">
                            <li><b>Substrat:</b> Fare böbrek/mide, HEp-2</li>
                            <li><b>Patern:</b> Sitoplazmik granüler (mitokondri lokalizasyonu)</li>
                            <li><b>İlişkili hastalık:</b> <strong>Primer Biliyer Kolanjit (PBC)</strong></li>
                            <li><b>Hedef:</b> PDC-E2 (piruvat dehidrojenaz kompleksi)</li>
                            <li><b>Özgüllük:</b> %95+ (PBC için tanı koydurucu)</li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Anti-Düz Kas Antikoru (ASMA)</h4>
                        <ul class="feature-list">
                            <li><b>Substrat:</b> Fare mide kesiti</li>
                            <li><b>Patern:</b> Düz kas lifleri boyalı (VGT: Vessel-Gut-Tubule)</li>
                            <li><b>İlişkili hastalık:</b> <strong>Otoimmün Hepatit Tip 1</strong></li>
                            <li><b>Hedef:</b> F-aktin (yüksek titrede)</li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Anti-LKM (Liver-Kidney Microsomal)</h4>
                        <ul class="feature-list">
                            <li><b>Substrat:</b> Fare karaciğer/böbrek</li>
                            <li><b>Patern:</b> Proksimal tübül ve hepatosit sitoplazması</li>
                            <li><b>İlişkili hastalık:</b> <strong>Otoimmün Hepatit Tip 2</strong></li>
                            <li><b>Hedef:</b> CYP2D6</li>
                        </ul>
                    </div>

                    <table class="article-table">
                        <thead>
                            <tr>
                                <th>Antikor</th>
                                <th>Hastalık</th>
                                <th>Kısa Not</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>AMA (Anti-M2)</td>
                                <td>Primer Biliyer Kolanjit</td>
                                <td>PDC-E2, %95 özgül</td>
                            </tr>
                            <tr>
                                <td>ASMA (Anti-aktin)</td>
                                <td>Otoimmün Hepatit Tip 1</td>
                                <td>F-aktin paterni</td>
                            </tr>
                            <tr>
                                <td>Anti-LKM1</td>
                                <td>Otoimmün Hepatit Tip 2</td>
                                <td>CYP2D6, çocuklarda</td>
                            </tr>
                            <tr>
                                <td>Anti-GBM</td>
                                <td>Goodpasture</td>
                                <td>Lineer GBM boyama</td>
                            </tr>
                            <tr>
                                <td>Anti-Endomysium (EMA)</td>
                                <td>Çölyak Hastalığı</td>
                                <td>tTG ile doğrula</td>
                            </tr>
                        </tbody>
                    </table>
                `
            },
            {
                title: "IIF Yorumlama Algoritması",
                icon: "fas fa-project-diagram",
                content: `
                    <div class="highlight-box highlight-box--primary">
                        <h4><i class="fas fa-sitemap"></i> ANA Pozitif Hasta - Yaklaşım Algoritması</h4>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">ANA Yorumlama: 5 Adım</p>
                        <p class="mnemonic-box__text">"TİPPD"</p>
                        <p class="mnemonic-box__hint">
                            <strong>T</strong>itre değerlendir (≥1:160 anlamlı)<br>
                            <strong>İ</strong>F paternini tanımla<br>
                            <strong>P</strong>aterne göre spesifik antikor iste<br>
                            <strong>P</strong>ozitiflik doğrula (ELISA/immunoblot)<br>
                            <strong>D</strong>iğer klinik/lab bulguları korelesyon
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Paterne Göre İstenecek Testler</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>ANA Paterni</th>
                                    <th>İstenecek Spesifik Antikorlar</th>
                                    <th>Düşünülecek Hastalık</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Homojen</strong></td>
                                    <td>Anti-dsDNA, Anti-Histon</td>
                                    <td>SLE, İlaca bağlı lupus</td>
                                </tr>
                                <tr>
                                    <td><strong>İnce Benekli</strong></td>
                                    <td>Anti-SSA/Ro, Anti-SSB/La</td>
                                    <td>Sjögren, SLE</td>
                                </tr>
                                <tr>
                                    <td><strong>Kaba Benekli</strong></td>
                                    <td>Anti-Sm, Anti-RNP, Anti-Scl-70</td>
                                    <td>SLE, MCTD, Skleroderma</td>
                                </tr>
                                <tr>
                                    <td><strong>Nükleolar</strong></td>
                                    <td>Anti-RNA polimeraz, Anti-PM-Scl</td>
                                    <td>Skleroderma, Polimiyozit</td>
                                </tr>
                                <tr>
                                    <td><strong>Sentromer</strong></td>
                                    <td>Anti-CENP-B (ELISA)</td>
                                    <td>Limitli Skleroderma (CREST)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--info">
                        <span class="alert-box__icon">💡</span>
                        <p class="alert-box__text"><strong>Klinik Korelasyon İlkeleri:</strong><br>
                            • Yüksek titre (≥1:640) → Otoimmün hastalık olasılığı ↑<br>
                            • Düşük titre (1:80-1:160) → Sağlıklı bireylerde de görülebilir<br>
                            • Yaşlılarda düşük titrede ANA pozitifliği sık (%15-25)<br>
                            • İlaçlar (TNF inhibitörleri) ANA indükleyebilir
                        </p>
                    </div>

                    <div class="highlight-box highlight-box--secondary">
                        <h4><i class="fas fa-exclamation-triangle"></i> ANA Pozitif, Spesifik Antikor Negatif - Ne Yapmalı?</h4>
                        <ul class="feature-list">
                            <li>Klinik değerlendirmeyi tekrarla</li>
                            <li>Titre düşükse → Non-spesifik pozitiflik olabilir</li>
                            <li>Takip öner (6-12 ay sonra tekrar)</li>
                            <li>Dense Fine Speckled (DFS70) antikorunu değerlendir → İZOLE DFS70 (+) ise otoimmün hastalık olasılığı çok düşük!</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "Sınav İçin Kritik Özet",
                icon: "fas fa-graduation-cap",
                content: `
                    <div class="highlight-box highlight-box--primary">
                        <h4><i class="fas fa-star"></i> En Sık Sorulan Eşleşmeler</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Antikor/Patern</th>
                                    <th>Hastalık</th>
                                    <th>Sınav İpucu</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Anti-Sm</td>
                                    <td>SLE</td>
                                    <td><strong>EN SPESİFİK</strong></td>
                                </tr>
                                <tr>
                                    <td>Anti-dsDNA (Crithidia)</td>
                                    <td>SLE + Lupus nefriti</td>
                                    <td>Aktivite takibi</td>
                                </tr>
                                <tr>
                                    <td>Anti-Histon</td>
                                    <td>İlaca bağlı lupus</td>
                                    <td>%95, dsDNA (-)</td>
                                </tr>
                                <tr>
                                    <td>Anti-SSA/Ro</td>
                                    <td>Sjögren, Neonatal lupus</td>
                                    <td>ANA (-) SLE!</td>
                                </tr>
                                <tr>
                                    <td>Anti-Scl-70</td>
                                    <td>Diffüz Skleroderma</td>
                                    <td>ILD riski</td>
                                </tr>
                                <tr>
                                    <td>Anti-Sentromer</td>
                                    <td>CREST / Limitli SSc</td>
                                    <td>46 nokta</td>
                                </tr>
                                <tr>
                                    <td>Anti-Jo-1</td>
                                    <td>Polimiyozit</td>
                                    <td>Antisentetaz sendrom</td>
                                </tr>
                                <tr>
                                    <td>c-ANCA (PR3)</td>
                                    <td>GPA (Wegener)</td>
                                    <td>Üst-alt solunum-böbrek</td>
                                </tr>
                                <tr>
                                    <td>p-ANCA (MPO)</td>
                                    <td>MPA, EGPA</td>
                                    <td>Pulmoner-renal</td>
                                </tr>
                                <tr>
                                    <td>AMA (Anti-M2)</td>
                                    <td>PBC</td>
                                    <td>PDC-E2</td>
                                </tr>
                                <tr>
                                    <td>ASMA</td>
                                    <td>OİH Tip 1</td>
                                    <td>F-aktin</td>
                                </tr>
                                <tr>
                                    <td>Anti-GBM</td>
                                    <td>Goodpasture</td>
                                    <td>Lineer boyama</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Mega Hafıza Kodları</p>
                        <p class="mnemonic-box__text">
                            <strong>"HoBeNüSePe"</strong> → ANA paternleri<br>
                            <strong>"c-PR3-Wegener, p-MPO-Mikro"</strong> → ANCA<br>
                            <strong>"Sm = SLE Marker"</strong> → En spesifik<br>
                            <strong>"dsDNA = Disease DNA"</strong> → Aktivite takibi<br>
                            <strong>"AMA = Always Means PBC Almost"</strong> → %95 özgül<br>
                            <strong>"CREST = Centromer"</strong> → 46 nokta
                        </p>
                    </div>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>TUZAK SORULAR:</strong><br><br>
                            • "ANA negatif SLE olabilir mi?" → <strong>EVET!</strong> Anti-SSA/Ro (+) iste<br>
                            • "p-ANCA pozitif ama MPO negatif?" → Atipik ANCA, İBH düşün<br>
                            • "Homojen ANA + dsDNA(-) + Histon(+)?" → <strong>İlaca bağlı lupus</strong><br>
                            • "46 ayrık nokta IIF'de?" → <strong>Anti-sentromer (CREST)</strong><br>
                            • "Crithidia luciliae ne için?" → <strong>Anti-dsDNA</strong> (en spesifik yöntem)
                        </p>
                    </div>

                    <div class="alert-box alert-box--info">
                        <span class="alert-box__icon">💡</span>
                        <p class="alert-box__text"><strong>Pratik Sınav Yaklaşımı:</strong><br><br>
                            <strong>Soru:</strong> "55 yaşında kadın, ANA 1:320 homojen patern, eklem ağrısı..."<br>
                            <strong>Düşün:</strong> Homojen = dsDNA veya Histon<br>
                            <strong>İste:</strong> Anti-dsDNA, Anti-Histon, C3, C4<br>
                            <strong>Değerlendir:</strong> dsDNA(+) + düşük kompleman = aktif SLE
                        </p>
                    </div>

                    <ul class="feature-list">
                        <li><b>Soru tipi:</b> "Homojen ANA + Anti-dsDNA (+)?" → SLE</li>
                        <li><b>Soru tipi:</b> "Benekli ANA + Anti-SSA (+)?" → Sjögren veya SLE</li>
                        <li><b>Soru tipi:</b> "Nükleolar ANA?" → Skleroderma</li>
                        <li><b>Soru tipi:</b> "c-ANCA + sinüzit + hemoptizi + hematüri?" → GPA</li>
                        <li><b>Soru tipi:</b> "p-ANCA + RPGN?" → MPA veya anti-GBM</li>
                        <li><b>Soru tipi:</b> "Kaşıntı + ALP yüksek + AMA (+)?" → PBC</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 8,
        category: "bakteriyoloji",
        title: "Fenotipik Direnç Testleri",
        subtitle: "β-laktamaz, Karbapenemaz ve ESBL Tespit Yöntemleri",
        summary: "Klinik mikrobiyolojide antibiyotik direnci tespitinde kullanılan fenotipik yöntemlerin kapsamlı özeti. MHT, CIM, mCIM, eCIM, EDTA, Boronic asit testleri, ESBL tarama ve doğrulama, disk difüzyon, MİK, E-test ve CLSI vs EUCAST farklılıkları.",
        tags: ["β-laktamaz", "Karbapenemaz", "ESBL", "MİK", "Disk Difüzyon", "CLSI", "EUCAST", "Direnç Testleri"],
        sections: [
            {
                title: "Fenotipik Yöntemlerin Genel Prensipleri",
                icon: "fas fa-microscope",
                content: `
                    <p><strong>Fenotipik yöntemler</strong>, bakterilerin antibiyotiklere karşı gösterdiği direnci <em>in vitro</em> ortamda gözlemlemeye dayanır. Genotipik testlerin aksine, gerçek direnç fenotipini değerlendirir.</p>
                    
                    <div class="highlight-box">
                        <p class="highlight-box__title">Fenotipik vs Genotipik Testler</p>
                        <p class="highlight-box__content">
                            <strong>Fenotipik:</strong> Direnci görsel/ölçümsel olarak saptar (disk, MİK)<br>
                            <strong>Genotipik:</strong> Direnç genlerini saptar (PCR, sekans)<br>
                            <strong>Avantaj:</strong> Fenotipik testler eksprese edilen direnci gösterir<br>
                            <strong>Dezavantaj:</strong> Heterodirençte düşük ekspresyon kaçırılabilir
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Temel Fenotipik Yöntemler</h4>
                        <table class="article-table">
                            <tr>
                                <th>Yöntem</th>
                                <th>Prensip</th>
                                <th>Sonuç Tipi</th>
                            </tr>
                            <tr>
                                <td><b>Disk Difüzyon</b></td>
                                <td>İnhibisyon zonu ölçümü</td>
                                <td>S/I/R (kalitatif)</td>
                            </tr>
                            <tr>
                                <td><b>MİK (Dilüsyon)</b></td>
                                <td>Üreme inhibe eden en düşük konsantrasyon</td>
                                <td>µg/mL (kantitatif)</td>
                            </tr>
                            <tr>
                                <td><b>E-test</b></td>
                                <td>Gradyan difüzyon</td>
                                <td>µg/mL (kantitatif)</td>
                            </tr>
                            <tr>
                                <td><b>Otomatize Sistemler</b></td>
                                <td>Türbidimetrik MİK</td>
                                <td>S/I/R + MİK</td>
                            </tr>
                        </table>
                    </div>

                    <div class="alert-box alert-box--info">
                        <span class="alert-box__icon">ℹ️</span>
                        <p class="alert-box__text"><strong>Sınav Notu:</strong> Fenotipik testlerin standardizasyonu için <strong>CLSI</strong> (ABD) veya <strong>EUCAST</strong> (Avrupa) kılavuzları kullanılır. Türkiye'de her ikisi de kabul görür ancak aynı hasta için tutarlılık önemlidir!</p>
                    </div>
                `
            },
            {
                title: "β-Laktamaz Tespit Testleri",
                icon: "fas fa-vial",
                content: `
                    <p><strong>β-laktamazlar</strong>, β-laktam halkasını hidrolize ederek antibiyotiği inaktive eden enzimlerdir. Sınıflandırma için <strong>Ambler (moleküler)</strong> ve <strong>Bush-Jacoby (fonksiyonel)</strong> sistemleri kullanılır.</p>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Ambler Moleküler Sınıflandırma</h4>
                        <table class="article-table">
                            <tr>
                                <th>Sınıf</th>
                                <th>Aktif Bölge</th>
                                <th>Enzim Örnekleri</th>
                                <th>İnhibitör</th>
                            </tr>
                            <tr>
                                <td><b>A</b></td>
                                <td>Serin</td>
                                <td>TEM, SHV, CTX-M, KPC</td>
                                <td>Klavulanik asit, Avibaktam</td>
                            </tr>
                            <tr>
                                <td><b>B</b></td>
                                <td>Metallo (Zn²⁺)</td>
                                <td>NDM, VIM, IMP</td>
                                <td>EDTA, Dipikolinik asit</td>
                            </tr>
                            <tr>
                                <td><b>C</b></td>
                                <td>Serin</td>
                                <td>AmpC (CMY, DHA)</td>
                                <td>Kloksasilin, Boronik asit</td>
                            </tr>
                            <tr>
                                <td><b>D</b></td>
                                <td>Serin</td>
                                <td>OXA (OXA-48, OXA-23)</td>
                                <td>Avibaktam (sınırlı)</td>
                            </tr>
                        </table>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">🎯 Ambler Sınıfları Hafıza Kodu</p>
                        <p class="highlight-box__content">
                            <strong>"A-Serin-TEM/KPC"</strong> → A sınıfı serin β-laktamaz<br>
                            <strong>"B-Metallo-NDM/VIM"</strong> → B sınıfı metalloenzim (Zn bağımlı)<br>
                            <strong>"C-Serin-AmpC"</strong> → Kromozomal/plazmid AmpC<br>
                            <strong>"D-Serin-OXA"</strong> → Oksasilinaz grubu
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Hızlı β-Laktamaz Testleri</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Nitrocefin Testi:</b> Kromojen sefalosporin, sarıdan kırmızıya renk değişimi = β-laktamaz (+)</li>
                            <li class="feature-item"><b>Asidometrik Test:</b> pH değişimi, penisilin hidrolizi = asit üretimi</li>
                            <li class="feature-item"><b>İyodometrik Test:</b> Nişasta-iyot kompleksi renk değişimi</li>
                        </ul>
                    </div>

                    <div class="alert-box alert-box--warning">
                        <span class="alert-box__icon">⚠️</span>
                        <p class="alert-box__text"><strong>Dikkat:</strong> Nitrocefin testi <strong>H. influenzae, N. gonorrhoeae, M. catarrhalis</strong> gibi zor üreyen bakterilerde hızlı β-laktamaz taraması için idealdir. Ancak ESBL, AmpC, karbapenemazları AYIRT EDEMEZ!</p>
                    </div>
                `
            },
            {
                title: "Karbapenemaz Tespit Testleri",
                icon: "fas fa-biohazard",
                content: `
                    <p><strong>Karbapenemazlar</strong>, karbapenemleri hidrolize edebilen geniş spektrumlu β-laktamazlardır. En kritik direnç mekanizmalarından biridir ve enfeksiyon kontrolü açısından erken tespit hayati öneme sahiptir.</p>

                    <div class="sub-section">
                        <h4 class="sub-section__title">1. Modified Hodge Test (MHT)</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Prensip:</b> Karbapenemaz üreten bakteri, ertapenem diskinin etrafındaki inhibisyon zonunu "yonca yaprağı" şeklinde daraltır</li>
                            <li class="feature-item"><b>İndikatör suş:</b> E. coli ATCC 25922</li>
                            <li class="feature-item"><b>Avantaj:</b> Tüm karbapenemaz sınıflarını saptar</li>
                            <li class="feature-item"><b>Dezavantaj:</b> Düşük duyarlılık, NDM için zayıf, AmpC ile yalancı pozitiflik</li>
                            <li class="feature-item"><b>Durum:</b> CLSI 2018'den itibaren ÖNERİLMİYOR</li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">2. Carba NP Test</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Prensip:</b> İmipenem hidrolizi → pH düşüşü → Fenol kırmızısı sarıya döner</li>
                            <li class="feature-item"><b>Süre:</b> 30 dakika - 2 saat</li>
                            <li class="feature-item"><b>Avantaj:</b> Hızlı, ucuz, tüm karbapenemaz sınıfları</li>
                            <li class="feature-item"><b>Dezavantaj:</b> OXA-48 için düşük duyarlılık, mukoid suşlarda sorun</li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">3. CIM / mCIM / eCIM Testleri</h4>
                        <table class="article-table">
                            <tr>
                                <th>Test</th>
                                <th>Tam Adı</th>
                                <th>Prensip</th>
                                <th>Sonuç</th>
                            </tr>
                            <tr>
                                <td><b>CIM</b></td>
                                <td>Carbapenem Inactivation Method</td>
                                <td>Meropenem diski bakteri süspansiyonunda inkübe</td>
                                <td>Zon ≤15 mm = (+)</td>
                            </tr>
                            <tr>
                                <td><b>mCIM</b></td>
                                <td>Modified CIM</td>
                                <td>TSB'de 4 saat inkübasyon, daha hassas</td>
                                <td>Zon 6-15 mm = (+), ≤6 mm kesin (+)</td>
                            </tr>
                            <tr>
                                <td><b>eCIM</b></td>
                                <td>EDTA-CIM</td>
                                <td>mCIM + EDTA (MBL ayrımı)</td>
                                <td>EDTA ile zon ≥5 mm artış = MBL (+)</td>
                            </tr>
                        </table>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">🎯 mCIM + eCIM Yorumlama</p>
                        <p class="highlight-box__content">
                            <strong>mCIM (+), eCIM (-):</strong> Serin karbapenemaz (KPC, OXA-48)<br>
                            <strong>mCIM (+), eCIM (+):</strong> Metallo-β-laktamaz (NDM, VIM, IMP)<br>
                            <strong>mCIM (-), eCIM (-):</strong> Karbapenemaz negatif (direnç başka mekanizma)
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">4. İnhibitör Bazlı Kombine Disk Testleri</h4>
                        <table class="article-table">
                            <tr>
                                <th>İnhibitör</th>
                                <th>Hedef Enzim</th>
                                <th>Pozitif Sonuç</th>
                            </tr>
                            <tr>
                                <td><b>EDTA / Dipikolinik Asit (DPA)</b></td>
                                <td>Metallo-β-laktamaz (Sınıf B)</td>
                                <td>Meropenem+EDTA zonu ≥5 mm artış</td>
                            </tr>
                            <tr>
                                <td><b>Fenilboronik Asit (PBA)</b></td>
                                <td>KPC + AmpC (Serin β-laktamaz)</td>
                                <td>Meropenem+PBA zonu ≥5 mm artış</td>
                            </tr>
                            <tr>
                                <td><b>Kloksasilin</b></td>
                                <td>AmpC (spesifik)</td>
                                <td>Sefoksitin+kloksasilin zonu artışı</td>
                            </tr>
                            <tr>
                                <td><b>Temosil (Temosilin)</b></td>
                                <td>OXA-48 tarama</td>
                                <td>Temosil zonu ≤11 mm = OXA-48 şüphesi</td>
                            </tr>
                        </table>
                    </div>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>KRİTİK:</strong> OXA-48 karbapenemaz, karbapenem MİK'lerini yalnızca hafif yükseltebilir! Meropenem MİK 1-4 µg/mL olabilir. Rutin testlerde <strong>ATLANIR!</strong> Temosil taraması veya PCR şarttır.</p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">5. Kromojenik Besiyerleri</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>ChromID CARBA:</b> Ertapenem içerir, Enterobacterales tarama</li>
                            <li class="feature-item"><b>SUPERCARBA:</b> Daha yüksek duyarlılık, OXA-48 için optimize</li>
                            <li class="feature-item"><b>CHROMagar mSuperCARBA:</b> Kloksasilin + ertapenem (AmpC'yi baskılar)</li>
                        </ul>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Karbapenemaz Test Seçimi Hafıza</p>
                        <p class="mnemonic-box__text">
                            <strong>"mCIM → eCIM → Tip"</strong><br>
                            Tarama: mCIM ile başla<br>
                            Tiplendirme: eCIM ile MBL/Serin ayrımı<br>
                            Doğrulama: PCR (blaKPC, blaNDM, blaOXA-48, blaVIM, blaIMP)
                        </p>
                    </div>
                `
            },
            {
                title: "ESBL Tespit Yöntemleri",
                icon: "fas fa-shield-virus",
                content: `
                    <p><strong>ESBL (Extended-Spectrum β-Lactamase)</strong>, geniş spektrumlu sefalosporinleri (seftazidim, sefotaksim, seftriakson) ve aztreonamı hidrolize eden ancak klavulanik asit ile inhibe edilen enzimlerdir.</p>

                    <div class="highlight-box">
                        <p class="highlight-box__title">ESBL Tanımlayıcı Özellikler</p>
                        <p class="highlight-box__content">
                            ✓ 3. kuşak sefalosporin direnci<br>
                            ✓ Aztreonam direnci<br>
                            ✓ Klavulanik asit ile inhibisyon<br>
                            ✓ Sefamisin (sefoksitin) ve karbapenem DUYARLI<br>
                            ✗ Sefoksitin dirençli ise → AmpC düşün!
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">ESBL Tarama Testleri</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Disk Difüzyon:</b> Seftazidim (CAZ) ≤22 mm VEYA Sefotaksim (CTX) ≤27 mm VEYA Aztreonam (ATM) ≤27 mm</li>
                            <li class="feature-item"><b>MİK:</b> Seftazidim ≥2 µg/mL VEYA Sefotaksim ≥2 µg/mL VEYA Aztreonam ≥2 µg/mL</li>
                            <li class="feature-item"><b>Otomatize Sistem:</b> "ESBL?" uyarısı</li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">ESBL Doğrulama Testleri</h4>
                        <table class="article-table">
                            <tr>
                                <th>Yöntem</th>
                                <th>Uygulama</th>
                                <th>Pozitif Kriter</th>
                            </tr>
                            <tr>
                                <td><b>Kombine Disk</b></td>
                                <td>CAZ vs CAZ/CLA, CTX vs CTX/CLA</td>
                                <td>Zon farkı ≥5 mm</td>
                            </tr>
                            <tr>
                                <td><b>Çift Disk Sinerji</b></td>
                                <td>AMC disk merkez, CAZ/CTX çevrede</td>
                                <td>"Anahtar deliği" genişleme</td>
                            </tr>
                            <tr>
                                <td><b>E-test ESBL</b></td>
                                <td>CAZ/CAZ+CLA gradient strip</td>
                                <td>MİK oranı ≥8 veya fantom zon</td>
                            </tr>
                            <tr>
                                <td><b>Sıvı Dilüsyon</b></td>
                                <td>MİK ± klavulanik asit</td>
                                <td>≥3 dilüsyon (8 kat) düşüş</td>
                            </tr>
                        </table>
                    </div>

                    <div class="alert-box alert-box--warning">
                        <span class="alert-box__icon">⚠️</span>
                        <p class="alert-box__text"><strong>ESBL + AmpC Birlikteliği:</strong> AmpC, klavulanik asiti inhibe ETMEZ ve ESBL testini maskeleyebilir! Kloksasilin (AmpC inhibitörü) eklenerek test tekrarlanmalıdır.<br><br>
                        <strong>Kural:</strong> Sefoksitin dirençli + 3. kuşak sefalosporin dirençli = AmpC ± ESBL</p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">ESBL Enzim Tipleri ve Özellikleri</h4>
                        <table class="article-table">
                            <tr>
                                <th>Enzim</th>
                                <th>Tercih Substrat</th>
                                <th>Epidemiyoloji</th>
                            </tr>
                            <tr>
                                <td><b>CTX-M</b></td>
                                <td>Sefotaksim > Seftazidim</td>
                                <td>En yaygın! Dünya genelinde</td>
                            </tr>
                            <tr>
                                <td><b>TEM mutantları</b></td>
                                <td>Değişken</td>
                                <td>TEM-1'den türemiş (>200 varyant)</td>
                            </tr>
                            <tr>
                                <td><b>SHV mutantları</b></td>
                                <td>Seftazidim > Sefotaksim</td>
                                <td>K. pneumoniae'de sık</td>
                            </tr>
                            <tr>
                                <td><b>PER, VEB, GES</b></td>
                                <td>Değişken</td>
                                <td>Bölgesel, P. aeruginosa'da</td>
                            </tr>
                        </table>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">ESBL vs AmpC Ayrımı</p>
                        <p class="mnemonic-box__text">
                            <strong>"ESBL = CAZ-CTX (+), FOX duyarlı, CLA inhibe"</strong><br>
                            <strong>"AmpC = FOX dirençli, CLA inhibe ETMEZ, Kloksasilin inhibe"</strong><br>
                            <strong>"KPC = Her şeye dirençli, PBA inhibe"</strong>
                        </p>
                    </div>
                `
            },
            {
                title: "Antibiyotik Duyarlılık Test Yöntemleri",
                icon: "fas fa-tablets",
                content: `
                    <p>Antibiyotik duyarlılık testleri (ADT), bakterinin antibiyotiğe <em>in vitro</em> yanıtını ölçer ve klinik tedavi kararlarını yönlendirir.</p>

                    <div class="sub-section">
                        <h4 class="sub-section__title">1. Disk Difüzyon (Kirby-Bauer)</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Prensip:</b> Antibiyotik emdirilmiş disk, agar yüzeyinde gradyan oluşturur</li>
                            <li class="feature-item"><b>Besiyeri:</b> Mueller-Hinton Agar (MHA), 4 mm kalınlık</li>
                            <li class="feature-item"><b>İnokulum:</b> 0.5 McFarland (≈1-2 × 10⁸ CFU/mL)</li>
                            <li class="feature-item"><b>İnkübasyon:</b> 35±2°C, 16-18 saat (aerob), CO₂ gerekirse %5</li>
                            <li class="feature-item"><b>Sonuç:</b> İnhibisyon zonu çapı (mm) → S/I/R</li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">2. Dilüsyon Yöntemleri (MİK)</h4>
                        <table class="article-table">
                            <tr>
                                <th>Yöntem</th>
                                <th>Ortam</th>
                                <th>Avantaj</th>
                                <th>Dezavantaj</th>
                            </tr>
                            <tr>
                                <td><b>Makrodilüsyon</b></td>
                                <td>Tüp (sıvı)</td>
                                <td>Altın standart</td>
                                <td>Zahmetli, çok malzeme</td>
                            </tr>
                            <tr>
                                <td><b>Mikrodilüsyon</b></td>
                                <td>96-kuyucuk plak</td>
                                <td>Çok antibiyotik, otomasyona uygun</td>
                                <td>Hazır plaklar pahalı</td>
                            </tr>
                            <tr>
                                <td><b>Agar Dilüsyon</b></td>
                                <td>Katı besiyeri</td>
                                <td>Çok izolat aynı anda</td>
                                <td>Her konsantrasyon ayrı plak</td>
                            </tr>
                        </table>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">3. Gradyan Difüzyon (E-test)</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Prensip:</b> Plastik şerit üzerinde antibiyotik gradyanı</li>
                            <li class="feature-item"><b>Okuma:</b> Elips şeklinde inhibisyon, MİK değeri şeritten okunur</li>
                            <li class="feature-item"><b>Avantaj:</b> Kolay, kantitatif MİK</li>
                            <li class="feature-item"><b>Dezavantaj:</b> Pahalı, tek antibiyotik/şerit</li>
                            <li class="feature-item"><b>Endikasyon:</b> Zor üreyen bakteriler, ESBL doğrulama, sinerji testi</li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">4. Otomatize Sistemler</h4>
                        <table class="article-table">
                            <tr>
                                <th>Sistem</th>
                                <th>Üretici</th>
                                <th>Prensip</th>
                            </tr>
                            <tr>
                                <td><b>VITEK 2</b></td>
                                <td>bioMérieux</td>
                                <td>Türbidimetri, kinetik analiz</td>
                            </tr>
                            <tr>
                                <td><b>BD Phoenix</b></td>
                                <td>BD</td>
                                <td>Türbidimetri + redoks</td>
                            </tr>
                            <tr>
                                <td><b>MicroScan</b></td>
                                <td>Beckman Coulter</td>
                                <td>Fluorometri</td>
                            </tr>
                            <tr>
                                <td><b>Sensititre</b></td>
                                <td>Thermo Fisher</td>
                                <td>Mikrodilüsyon, fluorometri</td>
                            </tr>
                        </table>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">MİK Yorumlama</p>
                        <p class="highlight-box__content">
                            <strong>MİK (Minimum İnhibitör Konsantrasyon):</strong> Görünür üremeyi inhibe eden en düşük antibiyotik konsantrasyonu<br><br>
                            <strong>Breakpoint:</strong> S/I/R ayıran eşik değerler (CLSI/EUCAST)<br>
                            <strong>Epidemiyolojik Cutoff (ECOFF):</strong> Wild-tip ve direnç ayrımı<br>
                            <strong>MBC:</strong> %99.9 öldüren konsantrasyon (MBC/MİK ≥32 = tolerans)
                        </p>
                    </div>

                    <div class="alert-box alert-box--info">
                        <span class="alert-box__icon">ℹ️</span>
                        <p class="alert-box__text"><strong>İnokulum Etkisi:</strong> Yüksek bakteri yükünde MİK artar! Özellikle β-laktamazlı suşlarda önemli. Abse, endokardit gibi yüksek bakteri yükü olan enfeksiyonlarda klinik başarısızlık nedeni olabilir.</p>
                    </div>
                `
            },
            {
                title: "CLSI vs EUCAST Kritik Farklılıklar",
                icon: "fas fa-balance-scale",
                content: `
                    <p><strong>CLSI</strong> (Clinical and Laboratory Standards Institute) ve <strong>EUCAST</strong> (European Committee on Antimicrobial Susceptibility Testing), dünya genelinde en yaygın kullanılan iki standardizasyon kuruluşudur.</p>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Temel Farklar</h4>
                        <table class="article-table">
                            <tr>
                                <th>Özellik</th>
                                <th>CLSI</th>
                                <th>EUCAST</th>
                            </tr>
                            <tr>
                                <td><b>Köken</b></td>
                                <td>ABD (1975'ten beri)</td>
                                <td>Avrupa (1997'den beri)</td>
                            </tr>
                            <tr>
                                <td><b>Erişim</b></td>
                                <td>Ücretli</td>
                                <td>Ücretsiz (online)</td>
                            </tr>
                            <tr>
                                <td><b>Güncelleme</b></td>
                                <td>Yıllık</td>
                                <td>Sürekli (online)</td>
                            </tr>
                            <tr>
                                <td><b>Breakpoint Felsefesi</b></td>
                                <td>Klinik + mikrobiyolojik</td>
                                <td>PK/PD ağırlıklı</td>
                            </tr>
                        </table>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Kritik Breakpoint Farklılıkları</h4>
                        <table class="article-table">
                            <tr>
                                <th>Organizma / Antibiyotik</th>
                                <th>CLSI S≤</th>
                                <th>EUCAST S≤</th>
                                <th>Klinik Önemi</th>
                            </tr>
                            <tr>
                                <td><b>S. aureus - Vankomisin</b></td>
                                <td>≤2 µg/mL</td>
                                <td>≤2 µg/mL</td>
                                <td>Aynı</td>
                            </tr>
                            <tr>
                                <td><b>Enterobacterales - Tigesiklin</b></td>
                                <td>Breakpoint yok</td>
                                <td>S≤0.5, R>0.5</td>
                                <td>EUCAST daha katı</td>
                            </tr>
                            <tr>
                                <td><b>S. pneumoniae - Penisilin (menenjit)</b></td>
                                <td>≤0.06 µg/mL</td>
                                <td>≤0.06 µg/mL</td>
                                <td>Aynı</td>
                            </tr>
                        </table>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">I (Intermediate) Kategorisi Farkı</p>
                        <p class="highlight-box__content">
                            <strong>CLSI:</strong> "I = Intermediate" → Belirsiz, yüksek doz veya alternatif düşün<br>
                            <strong>EUCAST:</strong> "I = Susceptible, Increased exposure" → Yüksek doz/uzun infüzyon ile TEDAVİ EDİLEBİLİR!<br><br>
                            <em>EUCAST'ta "I" kategorisi artık "kaçının" değil, "doz ayarla" anlamına gelir!</em>
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Önemli Algoritma Farklılıkları</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>ESBL:</b> CLSI doğrulama öneriyor, EUCAST klinik breakpoint kullanımını öneriyor (doğrulama opsiyonel)</li>
                            <li class="feature-item"><b>AmpC:</b> CLSI spesifik yöntem yok, EUCAST klinik breakpoint yeterli görüyor</li>
                            <li class="feature-item"><b>Karbapenemaz:</b> Her ikisi de tarama ve doğrulama öneriyor</li>
                            <li class="feature-item"><b>Kolistin:</b> Her ikisi de sadece MİK (disk difüzyon GEÇERSİZ)</li>
                        </ul>
                    </div>

                    <div class="alert-box alert-box--warning">
                        <span class="alert-box__icon">⚠️</span>
                        <p class="alert-box__text"><strong>CLSI vs EUCAST Seçimi:</strong><br>
                        • Aynı hasta için tutarlı standart kullanın<br>
                        • EUCAST genel olarak daha düşük breakpoint'ler (daha katı)<br>
                        • Kolistin için disk difüzyon HER İKİ STANDARTTA DA GEÇERSİZ!<br>
                        • Türkiye'de her ikisi kabul görür, laboratuvar politikası belirleyici</p>
                    </div>
                `
            },
            {
                title: "İstisnai Durumlar ve Tuzaklar",
                icon: "fas fa-exclamation-triangle",
                content: `
                    <p>Antibiyotik duyarlılık testlerinde dikkat edilmesi gereken <strong>kritik istisnalar</strong> ve <strong>sık yapılan hatalar</strong>:</p>

                    <div class="sub-section">
                        <h4 class="sub-section__title">1. İntrinsik (Doğal) Direnç</h4>
                        <table class="article-table">
                            <tr>
                                <th>Organizma</th>
                                <th>Doğal Dirençli Olduğu</th>
                                <th>Mekanizma</th>
                            </tr>
                            <tr>
                                <td><b>Enterococcus faecalis</b></td>
                                <td>Sefalosporinler, aminoglikozidler (düşük düzey)</td>
                                <td>PBP değişikliği</td>
                            </tr>
                            <tr>
                                <td><b>E. faecium</b></td>
                                <td>+ Ampisilin (çoğu suş)</td>
                                <td>PBP5 üretimi</td>
                            </tr>
                            <tr>
                                <td><b>Klebsiella spp.</b></td>
                                <td>Ampisilin, tikarsilin</td>
                                <td>Kromozomal β-laktamaz</td>
                            </tr>
                            <tr>
                                <td><b>P. aeruginosa</b></td>
                                <td>Ampisilin, 1-2. kuşak sefalosporin, trimetoprim</td>
                                <td>Porin kaybı, efflux</td>
                            </tr>
                            <tr>
                                <td><b>Stenotrophomonas</b></td>
                                <td>Karbapenemler!</td>
                                <td>L1, L2 metalloenzimler</td>
                            </tr>
                            <tr>
                                <td><b>Listeria</b></td>
                                <td>Sefalosporinler</td>
                                <td>PBP değişikliği</td>
                            </tr>
                        </table>
                    </div>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>ÖLÜMCÜL HATA:</strong> Listeria menenjitinde sefalosporin kullanmak! In vitro duyarlı görünse bile klinik BAŞARISIZ. Tedavi: Ampisilin ± Gentamisin</p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">2. Test Edilmemesi Gereken Kombinasyonlar</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Enterococcus + Sefalosporin:</b> Asla test etme, asla raporla</li>
                            <li class="feature-item"><b>Salmonella/Shigella + Aminoglikozid:</b> In vitro S, in vivo BAŞARISIZ</li>
                            <li class="feature-item"><b>S. pneumoniae + Gentamisin:</b> Doğal dirençli</li>
                            <li class="feature-item"><b>MRSA + Tüm β-laktamlar:</b> In vitro S olsa bile RESİSTAN raporla</li>
                            <li class="feature-item"><b>Kolistin + Disk difüzyon:</b> Geçersiz, sadece MİK!</li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">3. Heterodirenç</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Tanım:</b> Popülasyonun küçük bir kısmı dirençli (10⁻⁴ - 10⁻⁶)</li>
                            <li class="feature-item"><b>hVISA:</b> Hetero-vankomisin intermediate S. aureus</li>
                            <li class="feature-item"><b>Tespit:</b> Rutin testlerle ATLANIR! GRD E-test, PAP-AUC</li>
                            <li class="feature-item"><b>Klinik:</b> Vankomisin tedavi başarısızlığı, persistan bakteriyemi</li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">4. İndüklenebilir Direnç</h4>
                        <table class="article-table">
                            <tr>
                                <th>Mekanizma</th>
                                <th>Organizma</th>
                                <th>Test</th>
                                <th>Klinik</th>
                            </tr>
                            <tr>
                                <td><b>İndüklenebilir Klindamisin</b></td>
                                <td>S. aureus, Streptococcus</td>
                                <td>D-test (eritro+klinda)</td>
                                <td>D-zon (+) = Klindamisin RESİSTAN raporla</td>
                            </tr>
                            <tr>
                                <td><b>İndüklenebilir AmpC</b></td>
                                <td>"SPACE" organizmaları</td>
                                <td>Sefoksitin indüksiyon</td>
                                <td>3. kuşak sefalo riski</td>
                            </tr>
                        </table>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">SPACE Organizmaları (İndüklenebilir AmpC)</p>
                        <p class="highlight-box__content">
                            <strong>S</strong>erratia marcescens<br>
                            <strong>P</strong>seudomonas aeruginosa (düşük risk)<br>
                            <strong>A</strong>cinetobacter (bazı türler)<br>
                            <strong>C</strong>itrobacter freundii<br>
                            <strong>E</strong>nterobacter cloacae<br><br>
                            <em>Bu organizmalar 3. kuşak sefalosporin altında direnç geliştirebilir!</em>
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">5. Sinerji ve Antagonizma Testleri</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>E. faecalis endokardit:</b> Ampisilin + Gentamisin sinerji (Yüksek düzey GEN direnci yoksa)</li>
                            <li class="feature-item"><b>HLAR testi:</b> Gentamisin 500 µg, Streptomisin 1000 µg disk</li>
                            <li class="feature-item"><b>HLAR (+):</b> Aminoglikozid sinerjisi KAYIP!</li>
                        </ul>
                    </div>

                    <div class="alert-box alert-box--warning">
                        <span class="alert-box__icon">⚠️</span>
                        <p class="alert-box__text"><strong>Sık Sınav Tuzakları:</strong><br>
                        • MRSA'da sefazolin "S" çıksa bile → DİRENÇLİ raporla<br>
                        • VRE'de ampisilin "S" çıksa bile → klinik yanıt değerlendir<br>
                        • OXA-48 üreticisinde imipenem MİK 1-2 µg/mL olabilir → NORMAL GİBİ!<br>
                        • Kolistin disk difüzyon "S" → GEÇERSİZ, MİK yap!<br>
                        • E. coli'de fosfomisin oral formu sadece ÜYE için test edilir</p>
                    </div>
                `
            },
            {
                title: "Sınav İçin Kritik Özet",
                icon: "fas fa-graduation-cap",
                content: `
                    <div class="highlight-box">
                        <p class="highlight-box__title">🎯 En Sık Sorulan Konular</p>
                        <p class="highlight-box__content">
                            1. ESBL doğrulama: <strong>Zon farkı ≥5 mm</strong> (CAZ vs CAZ/CLA)<br>
                            2. MBL tespiti: <strong>EDTA/DPA sinerjisi</strong><br>
                            3. KPC tespiti: <strong>PBA (fenilboronik asit) sinerjisi</strong><br>
                            4. OXA-48 tarama: <strong>Temosil direnci</strong><br>
                            5. D-test: <strong>İndüklenebilir klindamisin direnci</strong>
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Hızlı Karar Algoritması</h4>
                        <table class="article-table">
                            <tr>
                                <th>Direnç Paterni</th>
                                <th>Düşün</th>
                                <th>Test</th>
                            </tr>
                            <tr>
                                <td>3. kuşak sefalo R, Sefoksitin S</td>
                                <td>ESBL</td>
                                <td>Kombine disk (≥5 mm)</td>
                            </tr>
                            <tr>
                                <td>3. kuşak sefalo R, Sefoksitin R</td>
                                <td>AmpC ± ESBL</td>
                                <td>Kloksasilin sinerjisi</td>
                            </tr>
                            <tr>
                                <td>Karbapenem R, EDTA (+)</td>
                                <td>MBL (NDM, VIM, IMP)</td>
                                <td>mCIM + eCIM</td>
                            </tr>
                            <tr>
                                <td>Karbapenem R, PBA (+)</td>
                                <td>KPC</td>
                                <td>mCIM, Carba NP</td>
                            </tr>
                            <tr>
                                <td>Karbapenem sınırda, Temosil R</td>
                                <td>OXA-48</td>
                                <td>PCR en güvenilir</td>
                            </tr>
                            <tr>
                                <td>Eritro R, Klinda S, D-test (+)</td>
                                <td>İndüklenebilir MLSB</td>
                                <td>Klinda RESİSTAN raporla</td>
                            </tr>
                        </table>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Mega Hafıza Kodları</p>
                        <p class="mnemonic-box__text">
                            <strong>"ESBL = 5 mm CAZ-CLA"</strong> → Zon farkı kriteri<br>
                            <strong>"MBL = EDTA Metal Bağlar"</strong> → Çinko şelasyonu<br>
                            <strong>"KPC = PBA Karbapenem"</strong> → Boronik asit inhibisyonu<br>
                            <strong>"SPACE = Sefalosporin Tehlikeli"</strong> → AmpC indüksiyonu<br>
                            <strong>"D-zon = Danger zone"</strong> → Klindamisin kullanma<br>
                            <strong>"Kolistin = sadece MİK"</strong> → Disk geçersiz<br>
                            <strong>"I = Increased dose (EUCAST)"</strong> → Tedavi edilebilir
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Kritik Sayısal Değerler</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>McFarland 0.5:</b> 1-2 × 10⁸ CFU/mL (standart inokulum)</li>
                            <li class="feature-item"><b>ESBL doğrulama:</b> ≥5 mm zon farkı</li>
                            <li class="feature-item"><b>mCIM pozitif:</b> ≤15 mm zon (kesin: 6-15 mm)</li>
                            <li class="feature-item"><b>eCIM pozitif (MBL):</b> ≥5 mm zon artışı</li>
                            <li class="feature-item"><b>MHT:</b> Yonca yaprağı şekli (artık önerilmiyor)</li>
                            <li class="feature-item"><b>İnkübasyon:</b> 35±2°C, 16-18 saat</li>
                            <li class="feature-item"><b>MHA kalınlığı:</b> 4 mm</li>
                        </ul>
                    </div>

                    <div class="alert-box alert-box--info">
                        <span class="alert-box__icon">💡</span>
                        <p class="alert-box__text"><strong>Son Dakika Hatırlatmaları:</strong><br><br>
                            • mCIM CLSI tarafından ÖNERİLEN standart karbapenemaz testidir<br>
                            • MHT artık ÖNERİLMİYOR (düşük duyarlılık, yalancı pozitiflik)<br>
                            • Carba NP OXA-48 için düşük duyarlılıklı<br>
                            • EUCAST'ta "I" = Yüksek dozla tedavi edilebilir<br>
                            • Kolistin için disk difüzyon ASLA kullanma<br>
                            • S. maltophilia karbapenem intrinsik dirençli (L1, L2)<br>
                            • Listeria sefalosporinlere doğal dirençli
                        </p>
                    </div>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>MUTLAKA BİLİNMESİ GEREKENLER:</strong><br><br>
                            1. <strong>MRSA =</strong> TÜM β-laktamlar dirençli (in vitro ne çıkarsa çıksın)<br>
                            2. <strong>VRE =</strong> Vankomisin dirençli enterokok, linezolid/daptomisin tercih<br>
                            3. <strong>CRE =</strong> Karbapenem dirençli Enterobacterales, kolistin/tigesiklin/yeni β-laktam kombinasyonları<br>
                            4. <strong>OXA-48 =</strong> Gizli karbapenemaz, MİK normal olabilir!<br>
                            5. <strong>hVISA =</strong> Rutin testle kaçar, tedavi başarısızlığında düşün
                        </p>
                    </div>

                    <ul class="feature-list">
                        <li><b>Soru tipi:</b> "ESBL şüphesi, doğrulama?" → Kombine disk, ≥5 mm</li>
                        <li><b>Soru tipi:</b> "Meropenem dirençli E. coli, EDTA sinerji (+)?" → MBL (NDM/VIM)</li>
                        <li><b>Soru tipi:</b> "Meropenem dirençli, PBA sinerji (+)?" → KPC</li>
                        <li><b>Soru tipi:</b> "Meropenem MİK 2, temosil dirençli?" → OXA-48</li>
                        <li><b>Soru tipi:</b> "D-test pozitif, klindamisin?" → Kullanma, RESİSTAN raporla</li>
                        <li><b>Soru tipi:</b> "Kolistin duyarlılık nasıl?" → Sadece MİK, disk geçersiz</li>
                        <li><b>Soru tipi:</b> "EUCAST'ta I ne demek?" → Yüksek dozla tedavi edilebilir</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 9,
        category: "mikoloji",
        title: "Candida Türleri ve C. auris",
        subtitle: "Kandidoz, Antifungal Direnç ve Enfeksiyon Kontrolü",
        summary: "Candida türlerinin tanı, tedavi ve antifungal direnç özelliklerinin kapsamlı özeti. C. auris'in çoklu ilaç direnci, tanı zorlukları ve enfeksiyon kontrol önlemleri.",
        tags: ["Candida", "C. auris", "Kandidemi", "Antifungal Direnç", "MALDI-TOF", "Ekinokandin", "Mikoloji"],
        sections: [
            {
                title: "Candida Türlerine Genel Bakış",
                icon: "fas fa-bacterium",
                content: `
                    <p><strong>Candida</strong> türleri en sık görülen invaziv fungal enfeksiyon etkenleridir. Maya mantarlarıdır ve normal insan florasında bulunurlar. İmmünsüpresyon, geniş spektrumlu antibiyotik kullanımı ve invaziv girişimler kandidoz riskini artırır.</p>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Candida Enfeksiyonları Spektrumu</p>
                        <p class="highlight-box__content">
                            <strong>Yüzeyel:</strong> Oral kandida (pamukçuk), vulvovajinal kandidoz, intertriginöz kandidoz<br>
                            <strong>İnvaziv:</strong> Kandidemi, dissemine kandidoz, hepatosplenik kandidoz, oküler kandidoz<br>
                            <strong>Biyofilm İlişkili:</strong> Kateter enfeksiyonları, protez enfeksiyonları
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Epidemiyoloji ve Sıklık</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Candida Türü</th>
                                    <th>Kandidemideki Oran</th>
                                    <th>Önemli Özellik</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>C. albicans</b></td>
                                    <td>%40-60</td>
                                    <td>En sık, azalan trend</td>
                                </tr>
                                <tr>
                                    <td><b>C. glabrata</b></td>
                                    <td>%15-25</td>
                                    <td>Artan, yaşlılarda sık</td>
                                </tr>
                                <tr>
                                    <td><b>C. parapsilosis</b></td>
                                    <td>%10-20</td>
                                    <td>Neonatal, kateter ilişkili</td>
                                </tr>
                                <tr>
                                    <td><b>C. tropicalis</b></td>
                                    <td>%5-10</td>
                                    <td>Hematolojik malignite</td>
                                </tr>
                                <tr>
                                    <td><b>C. krusei</b></td>
                                    <td>%2-5</td>
                                    <td>Lösemi, flukonazol profilaksisi</td>
                                </tr>
                                <tr>
                                    <td><b>C. auris</b></td>
                                    <td>Bölgesel salgınlar</td>
                                    <td>Çoklu direnç, hastane salgınları</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--info">
                        <span class="alert-box__icon">ℹ️</span>
                        <p class="alert-box__text"><strong>Trend:</strong> Son yıllarda non-albicans Candida türleri artmaktadır! Özellikle flukonazol profilaksisi alan hastalarda C. glabrata ve C. krusei sıklığı artar.</p>
                    </div>
                `
            },
            {
                title: "Candida Türlerinin Ayırıcı Özellikleri",
                icon: "fas fa-microscope",
                content: `
                    <div class="sub-section">
                        <h4 class="sub-section__title">Kapsamlı Tür Karşılaştırması</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Özellik</th>
                                    <th>C. albicans</th>
                                    <th>C. glabrata</th>
                                    <th>C. krusei</th>
                                    <th>C. parapsilosis</th>
                                    <th>C. tropicalis</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Germ Tüp</b></td>
                                    <td><strong>POZİTİF</strong></td>
                                    <td>Negatif</td>
                                    <td>Negatif</td>
                                    <td>Negatif</td>
                                    <td>Negatif</td>
                                </tr>
                                <tr>
                                    <td><b>Klamidospor</b></td>
                                    <td><strong>POZİTİF</strong></td>
                                    <td>Negatif</td>
                                    <td>Negatif</td>
                                    <td>Negatif</td>
                                    <td>Negatif</td>
                                </tr>
                                <tr>
                                    <td><b>CHROMagar Rengi</b></td>
                                    <td>Yeşil</td>
                                    <td>Pembe-mor</td>
                                    <td>Pembe (pürüzlü)</td>
                                    <td>Krem-beyaz</td>
                                    <td>Mavi-metalik</td>
                                </tr>
                                <tr>
                                    <td><b>Flukonazol</b></td>
                                    <td>Duyarlı</td>
                                    <td>Doz bağımlı (SDD)</td>
                                    <td><b>İntrinsik R!</b></td>
                                    <td>Duyarlı</td>
                                    <td>Duyarlı</td>
                                </tr>
                                <tr>
                                    <td><b>Ekinokandin</b></td>
                                    <td>Duyarlı</td>
                                    <td>Duyarlı (direnç ↑)</td>
                                    <td>Duyarlı</td>
                                    <td><b>Yüksek MİK!</b></td>
                                    <td>Duyarlı</td>
                                </tr>
                                <tr>
                                    <td><b>Klinik İlişki</b></td>
                                    <td>Tüm formlar</td>
                                    <td>Yaşlı, ÜYE</td>
                                    <td>Lösemi</td>
                                    <td>Neonatal, kateter</td>
                                    <td>Nötropeni</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">🔬 Germ Tüp Testi</p>
                        <p class="highlight-box__content">
                            <b>Prensip:</b> Serumda 2-3 saat, 37°C inkübasyonda hif uzantısı oluşumu<br>
                            <b>Pozitif:</b> C. albicans ve C. dubliniensis<br>
                            <b>Negatif:</b> Diğer tüm Candida türleri<br>
                            <b>Ayırım:</b> C. albicans vs C. dubliniensis → 42-45°C'de üreme (albicans +, dubliniensis -)
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">C. dubliniensis vs C. albicans</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>C. dubliniensis:</b> AIDS hastalarında oral kandidoz, germ tüp (+), 45°C'de üremez</li>
                            <li class="feature-item"><b>C. albicans:</b> En sık tür, germ tüp (+), 45°C'de ürer</li>
                            <li class="feature-item"><b>CHROMagar:</b> Her ikisi de yeşil, ayırt edilemez</li>
                            <li class="feature-item"><b>Flukonazol:</b> C. dubliniensis azol direnci geliştirmeye yatkın</li>
                        </ul>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Hafıza: Candida Türleri</p>
                        <p class="mnemonic-box__text">
                            <b>"ALBİCANS = ALtın standart, GERM (+)"</b><br>
                            <b>"GLABRATA = GLİKOZ sevmez (Trehaloz+), YAŞLI"</b><br>
                            <b>"KRUSEİ = KESİN flukonazol DİRENÇLİ"</b><br>
                            <b>"PARAPSİLOSİS = PEDİATRİ + KATETER"</b><br>
                            <b>"TROPİCALİS = TROMBOSİTOPENİ, lösemi"</b>
                        </p>
                    </div>
                `
            },
            {
                title: "Candida auris - Acil Tehdit",
                icon: "fas fa-biohazard",
                content: `
                    <p><strong>Candida auris</strong>, 2009'da Japonya'da bir hastanın kulak kanalından (auris = kulak) ilk kez izole edilen, küresel halk sağlığı tehdidi olarak kabul edilen çoklu ilaca dirençli bir maya mantarıdır.</p>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>CDC "Urgent Threat" Sınıflandırması:</strong> C. auris, ABD CDC tarafından en yüksek tehdit kategorisinde yer alır. Çoklu ilaç direnci, hastane yayılımı ve yüksek mortalite nedeniyle acil müdahale gerektiren bir patojendir!</p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">C. auris'in Ayırıcı Özellikleri</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Özellik</th>
                                    <th>C. auris</th>
                                    <th>Klinik Önemi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Çoklu İlaç Direnci</b></td>
                                    <td>Flukonazol %90, AmB %30, Ekinokandin %5-10</td>
                                    <td>Tedavi seçenekleri kısıtlı</td>
                                </tr>
                                <tr>
                                    <td><b>Çevresel Persistans</b></td>
                                    <td>Yüzeylerde haftalarca canlı kalır</td>
                                    <td>Hastane salgınları</td>
                                </tr>
                                <tr>
                                    <td><b>Tanı Zorluğu</b></td>
                                    <td>API/VITEK ile yanlış tanımlanır</td>
                                    <td>MALDI-TOF veya PCR gerekli</td>
                                </tr>
                                <tr>
                                    <td><b>Deri Kolonizasyonu</b></td>
                                    <td>Uzun süreli, eradikasyon zor</td>
                                    <td>Hastadan hastaya bulaş</td>
                                </tr>
                                <tr>
                                    <td><b>Mortalite</b></td>
                                    <td>%30-60 (kandidemide)</td>
                                    <td>Yüksek virülans</td>
                                </tr>
                                <tr>
                                    <td><b>Isı Toleransı</b></td>
                                    <td>42°C'de ürer</td>
                                    <td>Diğer Candida'lardan fark</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">C. auris Klad'ları (Coğrafi Köken)</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Klad</th>
                                    <th>Coğrafi Köken</th>
                                    <th>Direnç Profili</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Klad I</b></td>
                                    <td>Güney Asya (Hindistan, Pakistan)</td>
                                    <td>Yüksek azol direnci</td>
                                </tr>
                                <tr>
                                    <td><b>Klad II</b></td>
                                    <td>Doğu Asya (Japonya, Kore)</td>
                                    <td>Daha az dirençli</td>
                                </tr>
                                <tr>
                                    <td><b>Klad III</b></td>
                                    <td>Afrika (Güney Afrika)</td>
                                    <td>Yüksek azol direnci</td>
                                </tr>
                                <tr>
                                    <td><b>Klad IV</b></td>
                                    <td>Güney Amerika (Venezuela)</td>
                                    <td>Değişken</td>
                                </tr>
                                <tr>
                                    <td><b>Klad V</b></td>
                                    <td>İran</td>
                                    <td>Yeni tanımlanan</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">🔬 C. auris Tanı Yöntemleri</p>
                        <p class="highlight-box__content">
                            <b>❌ YANLIŞ TANIMLAMA:</b><br>
                            • API 20C AUX → C. haemulonii<br>
                            • VITEK 2 YST → C. haemulonii, C. lusitaniae<br>
                            • BD Phoenix → C. catenulata, C. famata<br><br>
                            <b>✅ DOĞRU TANIMLAMA:</b><br>
                            • MALDI-TOF MS (güncel veritabanı ile)<br>
                            • ITS/D1-D2 Sekanslaması<br>
                            • Spesifik PCR testleri
                        </p>
                    </div>
                `
            },
            {
                title: "C. auris Enfeksiyon Kontrolü",
                icon: "fas fa-shield-virus",
                content: `
                    <div class="sub-section">
                        <h4 class="sub-section__title">Temas İzolasyonu Önlemleri</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Tek oda:</b> İdeal olarak özel odalı banyo</li>
                            <li class="feature-item"><b>PPE:</b> Eldiven + önlük (odaya her girişte)</li>
                            <li class="feature-item"><b>El hijyeni:</b> Alkol bazlı dezenfektan veya su + sabun</li>
                            <li class="feature-item"><b>Özel ekipman:</b> Tansiyon aleti, stetoskop odada kalmalı</li>
                            <li class="feature-item"><b>Kolonize hastalar:</b> Enfekte olmasa bile izolasyon!</li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Çevresel Dezenfeksiyon</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Dezenfektan</th>
                                    <th>C. auris Etkinliği</th>
                                    <th>Kullanım</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Klor bazlı (1000 ppm)</b></td>
                                    <td><strong>ETKİLİ</strong></td>
                                    <td>Yüzey dezenfeksiyonu - önerilen</td>
                                </tr>
                                <tr>
                                    <td><b>Hidrojen peroksit</b></td>
                                    <td>Etkili</td>
                                    <td>Terminal dezenfeksiyon</td>
                                </tr>
                                <tr>
                                    <td><b>UV-C</b></td>
                                    <td>Etkili</td>
                                    <td>Terminal dezenfeksiyon ek olarak</td>
                                </tr>
                                <tr>
                                    <td><b>Kuaterner amonyum</b></td>
                                    <td><b>ETKİSİZ!</b></td>
                                    <td>Kullanılmamalı</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Aktif Sürveyans Taraması</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Tarama bölgeleri:</b> Aksilla VE kasık (birlikte swap)</li>
                            <li class="feature-item"><b>Ek bölgeler:</b> Nares, rektum, kronik yara bölgeleri</li>
                            <li class="feature-item"><b>Yöntem:</b> Selektif besiyeri (CHROMagar Candida + antifungal eklentili)</li>
                            <li class="feature-item"><b>Sıklık:</b> YBÜ'de haftalık, pozitif kontaklarda seri tarama</li>
                        </ul>
                    </div>

                    <div class="alert-box alert-box--warning">
                        <span class="alert-box__icon">⚠️</span>
                        <p class="alert-box__text"><strong>Kolonizasyon Eradikasyonu ZOR!</strong><br>
                        C. auris kolonizasyonu aylarca persiste edebilir. Klorheksidin banyosu yapılabilir ancak eradikasyon garantisi yoktur. Kolonize hastalar "ömür boyu" izolasyon gerektirebilir.</p>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">C. auris Kontrol - "AKTİF İZOLE KLOR"</p>
                        <p class="mnemonic-box__text">
                            <b>A</b>ktif sürveyans taraması<br>
                            <b>K</b>ontakt izolasyonu<br>
                            <b>T</b>emas önlemleri (eldiven + önlük)<br>
                            <b>İ</b>zole oda<br>
                            <b>F</b>ırsatçı tarama (kontak hastaları)<br>
                            <b>KLOR</b> bazlı dezenfektan (kuaterner amonyum ETKİSİZ!)
                        </p>
                    </div>
                `
            },
            {
                title: "Antifungal Direnç Mekanizmaları",
                icon: "fas fa-pills",
                content: `
                    <div class="sub-section">
                        <h4 class="sub-section__title">Azol Direnci</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Mekanizma</th>
                                    <th>Gen/Hedef</th>
                                    <th>Candida Türü</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>ERG11 mutasyonu</b></td>
                                    <td>Lanosterol 14α-demetilaz</td>
                                    <td>C. albicans, C. auris</td>
                                </tr>
                                <tr>
                                    <td><b>ERG11 upregülasyonu</b></td>
                                    <td>Hedef gen aşırı ekspresyonu</td>
                                    <td>Tüm türler</td>
                                </tr>
                                <tr>
                                    <td><b>Efflux pompası (CDR1/2)</b></td>
                                    <td>ABC transporter</td>
                                    <td>C. albicans, C. glabrata</td>
                                </tr>
                                <tr>
                                    <td><b>Efflux pompası (MDR1)</b></td>
                                    <td>MFS transporter</td>
                                    <td>C. albicans</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Ekinokandin Direnci</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>FKS1 mutasyonu:</b> 1,3-β-D-glukan sentaz hot-spot bölgelerinde mutasyon</li>
                            <li class="feature-item"><b>FKS2 mutasyonu:</b> C. glabrata'da önemli</li>
                            <li class="feature-item"><b>En sık:</b> C. glabrata'da direnç artışı (uzun tedavi sonrası)</li>
                            <li class="feature-item"><b>C. parapsilosis:</b> Doğal yüksek MİK (polimorfizm), klinik direnç değil</li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Amfoterisin B Direnci</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>ERG3/ERG6 mutasyonu:</b> Ergosterol sentez defekti</li>
                            <li class="feature-item"><b>Nadir:</b> Klinik direnç çok az görülür</li>
                            <li class="feature-item"><b>İstisna:</b> C. auris'te %30'a varan AmB direnci!</li>
                            <li class="feature-item"><b>C. lusitaniae:</b> İntrinsik AmB direnci olabilir</li>
                        </ul>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">🎯 Antifungal Duyarlılık Testi Ne Zaman?</p>
                        <p class="highlight-box__content">
                            • Tüm invaziv Candida enfeksiyonlarında<br>
                            • C. glabrata izole edildiğinde (her zaman)<br>
                            • C. auris şüphesi/izolasyonunda (acil)<br>
                            • Tedavi başarısızlığında<br>
                            • Uzun süreli antifungal kullanımı sonrası<br><br>
                            <b>Yöntem:</b> CLSI M27 (sıvı dilüsyon) veya EUCAST E.DEF 7.3
                        </p>
                    </div>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>İntrinsik Direnç - UNUTMA!</strong><br>
                        • <b>C. krusei:</b> Flukonazole doğal DİRENÇLİ<br>
                        • <b>C. glabrata:</b> Flukonazole doz-bağımlı duyarlı (SDD) veya dirençli<br>
                        • <b>C. lusitaniae:</b> AmB'ye doğal dirençli olabilir<br>
                        • <b>C. auris:</b> Çoklu intrinsik direnç!</p>
                    </div>
                `
            },
            {
                title: "Kandidemi Tedavi Yaklaşımı",
                icon: "fas fa-syringe",
                content: `
                    <div class="sub-section">
                        <h4 class="sub-section__title">Ampirik Tedavi Seçimi</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Hasta Grubu</th>
                                    <th>İlk Seçenek</th>
                                    <th>Alternatif</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Nötropenik olmayan</b></td>
                                    <td>Ekinokandin</td>
                                    <td>Flukonazol (stabil, duyarlı tür)</td>
                                </tr>
                                <tr>
                                    <td><b>Nötropenik</b></td>
                                    <td>Ekinokandin</td>
                                    <td>Lipozomal AmB</td>
                                </tr>
                                <tr>
                                    <td><b>C. auris şüphesi</b></td>
                                    <td>Ekinokandin</td>
                                    <td>Duyarlılık sonucuna göre</td>
                                </tr>
                                <tr>
                                    <td><b>SSS enfeksiyonu</b></td>
                                    <td>Lipozomal AmB + Flusitozin</td>
                                    <td>Flukonazol (step-down)</td>
                                </tr>
                                <tr>
                                    <td><b>Oküler tutulum</b></td>
                                    <td>Flukonazol veya Vorikonazol</td>
                                    <td>AmB (intravitreal ± sistemik)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Türe Göre Tedavi</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Candida Türü</th>
                                    <th>Önerilen Tedavi</th>
                                    <th>Kaçınılması Gereken</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>C. albicans</b></td>
                                    <td>Ekinokandin → Flukonazol step-down</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td><b>C. glabrata</b></td>
                                    <td>Ekinokandin (duyarlılık bekle)</td>
                                    <td>Flukonazol (duyarlılıksız)</td>
                                </tr>
                                <tr>
                                    <td><b>C. krusei</b></td>
                                    <td>Ekinokandin veya Vorikonazol</td>
                                    <td><b>FLUKONAZOL!</b></td>
                                </tr>
                                <tr>
                                    <td><b>C. parapsilosis</b></td>
                                    <td>Flukonazol tercih edilebilir</td>
                                    <td>Ekinokandin tek başına?</td>
                                </tr>
                                <tr>
                                    <td><b>C. auris</b></td>
                                    <td>Ekinokandin + duyarlılık testi</td>
                                    <td>Ampirik flukonazol</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Kandidemi Yönetim Kuralları</p>
                        <p class="highlight-box__content">
                            <b>1. Kateter çekimi:</b> Mümkünse 24-48 saat içinde<br>
                            <b>2. Kan kültürü takibi:</b> Negatifleşene kadar her gün<br>
                            <b>3. Fundoskopi:</b> Tüm kandidemi hastalarında (oküler tutulum?)<br>
                            <b>4. Tedavi süresi:</b> Son pozitif kültürden 14 gün sonrasına kadar<br>
                            <b>5. Ekokardiyografi:</b> Persistan bakteriyemi, kalp kapak hastalığı varsa
                        </p>
                    </div>

                    <div class="alert-box alert-box--warning">
                        <span class="alert-box__icon">⚠️</span>
                        <p class="alert-box__text"><strong>C. parapsilosis Paradoksu:</strong><br>
                        In vitro ekinokandin MİK'leri yüksek ancak klinik başarısızlık oranı düşüktür. Yine de flukonazole duyarlı ise flukonazol tercih edilebilir. <b>Kateter çekimi bu türde kritik!</b></p>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Kandidemi Tedavisi - "KAÇFET"</p>
                        <p class="mnemonic-box__text">
                            <b>K</b>ateter çek (24-48 saatte)<br>
                            <b>A</b>ntifungal başla (ekinokandin ilk seçenek)<br>
                            <b>Ç</b>ekilmiş kültür takibi (günlük)<br>
                            <b>F</b>undoskopi yaptır (oküler kandidoz?)<br>
                            <b>E</b>ko düşün (endokardit?)<br>
                            <b>T</b>edavi süresi: negatif kültürden 14 gün sonra
                        </p>
                    </div>
                `
            },
            {
                title: "Sınav İçin Kritik Özet",
                icon: "fas fa-graduation-cap",
                content: `
                    <div class="highlight-box">
                        <p class="highlight-box__title">🎯 En Sık Sorulan Konular</p>
                        <p class="highlight-box__content">
                            1. <b>Germ tüp pozitif:</b> C. albicans (ve C. dubliniensis)<br>
                            2. <b>Flukonazol intrinsik direnci:</b> C. krusei<br>
                            3. <b>MALDI-TOF gerektiren:</b> C. auris<br>
                            4. <b>Neonatal/Kateter ilişkili:</b> C. parapsilosis<br>
                            5. <b>Çoklu ilaç direnci + salgın:</b> C. auris
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Hızlı Karar Tablosu</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Klinik Senaryo</th>
                                    <th>Düşün</th>
                                    <th>Tedavi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Pamukçuk, germ tüp (+)</td>
                                    <td>C. albicans</td>
                                    <td>Flukonazol</td>
                                </tr>
                                <tr>
                                    <td>Yaşlı kadın, ÜYE, tekrarlayan</td>
                                    <td>C. glabrata</td>
                                    <td>Ekinokandin/Duyarlılık bekle</td>
                                </tr>
                                <tr>
                                    <td>Lösemi, flukonazol profilaksisi altında</td>
                                    <td>C. krusei</td>
                                    <td>Ekinokandin/Vorikonazol</td>
                                </tr>
                                <tr>
                                    <td>Neonatal YBÜ, TPN, kateter</td>
                                    <td>C. parapsilosis</td>
                                    <td>Flukonazol + Kateter çekimi</td>
                                </tr>
                                <tr>
                                    <td>YBÜ salgını, VITEK yanlış tanı</td>
                                    <td>C. auris</td>
                                    <td>Ekinokandin + İzolasyon</td>
                                </tr>
                                <tr>
                                    <td>AIDS, oral kandidoz, 45°C üremez</td>
                                    <td>C. dubliniensis</td>
                                    <td>Flukonazol</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Mega Hafıza Kodları</p>
                        <p class="mnemonic-box__text">
                            <b>"KRUSEİ = KENAN'A FLUKON VERMEZ!"</b> → İntrinsik flukonazol direnci<br>
                            <b>"AURİS = ACİL TEHDİT, MALDİ-TOF"</b> → Tanı ve çoklu direnç<br>
                            <b>"GERM TÜP = ALBİCANS"</b> → Hızlı tanı<br>
                            <b>"PARAPSİLOSİS = PEDİATRİ KATETER"</b> → Neonatal YBÜ<br>
                            <b>"GLABRATA = GRANDMA (yaşlı)"</b> → Yaşlı hastalarda artış<br>
                            <b>"KUATERNER = C.AURİS'E OLMAZ"</b> → Klor bazlı dezenfektan kullan
                        </p>
                    </div>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>MUTLAKA BİLİNMESİ GEREKENLER:</strong><br><br>
                            1. <b>C. krusei =</b> Flukonazole DOĞAL DİRENÇLİ (asla kullanma!)<br>
                            2. <b>C. auris =</b> API/VITEK ile YANLIŞ tanımlanır → MALDI-TOF şart<br>
                            3. <b>C. glabrata =</b> Flukonazole doz-bağımlı, ekinokandin direnci artıyor<br>
                            4. <b>C. parapsilosis =</b> Kateter çekimi kritik, el hijyeni yetersizliği<br>
                            5. <b>Kandidemi =</b> Kateter çek + Fundoskopi yap + Kültür negatifleşene kadar izle
                        </p>
                    </div>

                    <ul class="feature-list">
                        <li><b>Soru tipi:</b> "Germ tüp pozitif maya?" → C. albicans</li>
                        <li><b>Soru tipi:</b> "Doğal flukonazol dirençli?" → C. krusei</li>
                        <li><b>Soru tipi:</b> "MALDI-TOF ile tanımlanan, salgın yapan?" → C. auris</li>
                        <li><b>Soru tipi:</b> "Neonatal YBÜ salgını, kateter ilişkili?" → C. parapsilosis</li>
                        <li><b>Soru tipi:</b> "Yaşlı, ÜYE, azol direnci artan?" → C. glabrata</li>
                        <li><b>Soru tipi:</b> "Kuaterner amonyum etkisiz, klor gerekli?" → C. auris</li>
                        <li><b>Soru tipi:</b> "AIDS, oral kandidoz, 45°C üremez?" → C. dubliniensis</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 10,
        category: "parazitoloji",
        title: "Plasmodium ve Sıtma (Malaria)",
        subtitle: "Yaşam Döngüsü, Türler, Tanı ve Tedavi",
        summary: "Sıtma etkeni Plasmodium türlerinin kapsamlı özeti. P. falciparum, P. vivax, P. ovale, P. malariae ve P. knowlesi'nin karşılaştırması, yaşam döngüsü, tanı yöntemleri ve tedavi algoritmaları.",
        tags: ["Sıtma", "Malaria", "Plasmodium", "Anopheles", "Primakin", "Hipnozoit", "Parazitoloji"],
        sections: [
            {
                title: "Genel Bilgiler ve Epidemiyoloji",
                icon: "fas fa-globe-africa",
                content: `
                    <p><strong>Sıtma (Malaria)</strong>, <i>Plasmodium</i> türlerinin neden olduğu, dişi <i>Anopheles</i> sivrisineği ile bulaşan, potansiyel olarak ölümcül bir kan paraziti hastalığıdır.</p>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Epidemiyoloji</p>
                        <p class="highlight-box__content">
                            <b>Dünyada:</b> Yılda ~250 milyon vaka, ~600.000 ölüm (çoğu Afrika, 5 yaş altı çocuklar)<br>
                            <b>Türkiye:</b> GAP bölgesi (eski endemik), P. vivax dominant, yerli vakalar azaldı<br>
                            <b>İthal vakalar:</b> Afrika, Güneydoğu Asya seyahati sonrası P. falciparum riski
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Plasmodium Türleri - Genel Bakış</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Tür</th>
                                    <th>Coğrafi Dağılım</th>
                                    <th>Klinik Şiddet</th>
                                    <th>Önemli Özellik</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>P. falciparum</b></td>
                                    <td>Afrika (en sık), tropikal bölgeler</td>
                                    <td><strong>EN AĞIR</strong></td>
                                    <td>Serebral sıtma, yüksek mortalite</td>
                                </tr>
                                <tr>
                                    <td><b>P. vivax</b></td>
                                    <td>Asya, Latin Amerika, Türkiye</td>
                                    <td>Orta</td>
                                    <td>Hipnozoit → Relaps</td>
                                </tr>
                                <tr>
                                    <td><b>P. ovale</b></td>
                                    <td>Batı Afrika</td>
                                    <td>Hafif</td>
                                    <td>Hipnozoit → Relaps</td>
                                </tr>
                                <tr>
                                    <td><b>P. malariae</b></td>
                                    <td>Afrika, Asya</td>
                                    <td>Hafif</td>
                                    <td>Nefrotik sendrom, kronik</td>
                                </tr>
                                <tr>
                                    <td><b>P. knowlesi</b></td>
                                    <td>Güneydoğu Asya (Malezya)</td>
                                    <td>Değişken</td>
                                    <td>Zoonotik (maymun), günlük ateş</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>P. falciparum = ACİL!</strong><br>
                        Parazitemi %2-5'i geçerse ağır sıtma riski. %40'a kadar çıkabilir (diğer türlerde max %2). Serebral sıtma, ARDS, hipoglisemi, asidoz, böbrek yetmezliği yapabilir.</p>
                    </div>
                `
            },
            {
                title: "Yaşam Döngüsü",
                icon: "fas fa-sync-alt",
                content: `
                    <div class="sub-section">
                        <h4 class="sub-section__title">İnsandaki Evreler (Aseksüel Çoğalma = Şizogoni)</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Evre</th>
                                    <th>Lokalizasyon</th>
                                    <th>Süre</th>
                                    <th>Klinik Önemi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>1. Sporozoit</b></td>
                                    <td>Sivrisinek tükürük → Kan</td>
                                    <td>Dakikalar</td>
                                    <td>Enfektif form</td>
                                </tr>
                                <tr>
                                    <td><b>2. Karaciğer Şizogonisi</b></td>
                                    <td>Hepatosit</td>
                                    <td>5-16 gün</td>
                                    <td>Asemptomatik, tanı konulamaz</td>
                                </tr>
                                <tr>
                                    <td><b>3. Hipnozoit</b></td>
                                    <td>Hepatosit (dormant)</td>
                                    <td>Aylar-yıllar</td>
                                    <td>SADECE P. vivax & P. ovale!</td>
                                </tr>
                                <tr>
                                    <td><b>4. Merozoit</b></td>
                                    <td>Kana salınır</td>
                                    <td>-</td>
                                    <td>Eritrosit invazyonu</td>
                                </tr>
                                <tr>
                                    <td><b>5. Eritrosit Şizogonisi</b></td>
                                    <td>Eritrosit içi</td>
                                    <td>48-72 saat</td>
                                    <td>ATEŞ siklusu burada!</td>
                                </tr>
                                <tr>
                                    <td><b>6. Gametozit</b></td>
                                    <td>Eritrosit içi</td>
                                    <td>-</td>
                                    <td>Sivrisineğe bulaştırıcı form</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">🔄 Eritrosit Siklusu ve Ateş</p>
                        <p class="highlight-box__content">
                            Eritrosit içinde çoğalan parazitler hücreyi patlatınca → <b>Ateş nöbeti</b><br><br>
                            <b>48 saat (Tersiyan):</b> P. falciparum, P. vivax, P. ovale<br>
                            <b>72 saat (Kuartan):</b> P. malariae<br>
                            <b>24 saat (Kotidiyan):</b> P. knowlesi<br><br>
                            <i>Not: P. falciparum'da siklus düzensiz olabilir (asenkron)</i>
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Sivrisinekteki Evreler (Seksüel Çoğalma = Sporogoni)</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Gametozit alımı:</b> Sivrisinek kan emerken mikro/makrogametozit alır</li>
                            <li class="feature-item"><b>Fertilizasyon:</b> Mide içinde zigot oluşumu</li>
                            <li class="feature-item"><b>Ookinet → Ookist:</b> Mide duvarında gelişim</li>
                            <li class="feature-item"><b>Sporozoit:</b> Tükürük bezlerine göç → Yeni insana bulaş</li>
                        </ul>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Yaşam Döngüsü Hafıza</p>
                        <p class="mnemonic-box__text">
                            <b>"SPORozoitle BAŞLA, GAMETozoitle BİTİR"</b><br>
                            • Sivrisinek → İnsan: <b>SPORozoit</b> (enfektif)<br>
                            • İnsan → Sivrisinek: <b>GAMETozoit</b> (bulaştırıcı)<br><br>
                            <b>"HİPNOZİT = VİVAX-OVALE"</b> → Primakin gerektiren ikili!
                        </p>
                    </div>
                `
            },
            {
                title: "Plasmodium Türlerinin Karşılaştırması",
                icon: "fas fa-balance-scale",
                content: `
                    <div class="sub-section">
                        <h4 class="sub-section__title">Kapsamlı Tür Karşılaştırma Tablosu</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Özellik</th>
                                    <th>P. falciparum</th>
                                    <th>P. vivax</th>
                                    <th>P. ovale</th>
                                    <th>P. malariae</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Ateş siklusu</b></td>
                                    <td>Düzensiz/48 saat</td>
                                    <td>48 saat</td>
                                    <td>48 saat</td>
                                    <td>72 saat</td>
                                </tr>
                                <tr>
                                    <td><b>Hipnozoit</b></td>
                                    <td><span style="color:red">YOK</span></td>
                                    <td><span style="color:green"><b>VAR</b></span></td>
                                    <td><span style="color:green"><b>VAR</b></span></td>
                                    <td><span style="color:red">YOK</span></td>
                                </tr>
                                <tr>
                                    <td><b>Relaps</b></td>
                                    <td>Yok</td>
                                    <td><b>Evet</b> (aylar-yıllar)</td>
                                    <td><b>Evet</b></td>
                                    <td>Yok (rekrüdesans var)</td>
                                </tr>
                                <tr>
                                    <td><b>Max parazitemi</b></td>
                                    <td><b>%40</b> (tüm yaş eritrosit)</td>
                                    <td>%2 (retikülosit)</td>
                                    <td>%2 (retikülosit)</td>
                                    <td>%1 (yaşlı eritrosit)</td>
                                </tr>
                                <tr>
                                    <td><b>Enfekte eritrosit</b></td>
                                    <td>Normal boyut</td>
                                    <td>Büyümüş</td>
                                    <td>Oval, fimbriye</td>
                                    <td>Normal/küçük</td>
                                </tr>
                                <tr>
                                    <td><b>Schüffner granülleri</b></td>
                                    <td>Yok</td>
                                    <td><b>VAR</b></td>
                                    <td><b>VAR</b></td>
                                    <td>Yok</td>
                                </tr>
                                <tr>
                                    <td><b>Maurer lekesi</b></td>
                                    <td><b>VAR</b></td>
                                    <td>Yok</td>
                                    <td>Yok</td>
                                    <td>Yok</td>
                                </tr>
                                <tr>
                                    <td><b>Gametozit şekli</b></td>
                                    <td><b>MUZ/HİLAL</b></td>
                                    <td>Yuvarlak</td>
                                    <td>Yuvarlak</td>
                                    <td>Yuvarlak</td>
                                </tr>
                                <tr>
                                    <td><b>Trofozoit</b></td>
                                    <td>Küçük halka</td>
                                    <td>Ameboid</td>
                                    <td>Kompakt</td>
                                    <td>Bant şeklinde</td>
                                </tr>
                                <tr>
                                    <td><b>Komplikasyon</b></td>
                                    <td>Serebral, ARDS, ölüm</td>
                                    <td>Dalak rüptürü</td>
                                    <td>Nadir</td>
                                    <td>Nefrotik sendrom</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--warning">
                        <span class="alert-box__icon">⚠️</span>
                        <p class="alert-box__text"><strong>P. falciparum Mikroskopi İpuçları:</strong><br>
                        • Periferik yaymada sadece <b>halka formu</b> ve <b>gametozit</b> görülür<br>
                        • Şizont kanda görülmez (sekestre olur - dalak, beyin, plasenta)<br>
                        • Birden fazla halka/eritrosit (çift kromatin noktası)<br>
                        • <b>Muz/Hilal şekilli gametozit</b> = PATOGNOMONİK!</p>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">🔬 Eritrosit Tercihi</p>
                        <p class="highlight-box__content">
                            <b>P. vivax:</b> Duffy antijeni pozitif eritrositler (Duffy negatif Afrikalılar korumalı!)<br>
                            <b>P. falciparum:</b> TÜM eritrositler → Yüksek parazitemi<br>
                            <b>P. malariae:</b> Yaşlı eritrositler → Düşük parazitemi
                        </p>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Gametozit Şekli Hafıza</p>
                        <p class="mnemonic-box__text">
                            <b>"FALCİPARUM = FALLİK (muz şekli)"</b><br>
                            Diğer türler yuvarlak gametozit yapar, sadece P. falciparum muz/hilal şekilli!
                        </p>
                    </div>
                `
            },
            {
                title: "Klinik Bulgular",
                icon: "fas fa-thermometer-full",
                content: `
                    <div class="sub-section">
                        <h4 class="sub-section__title">Klasik Sıtma Ateş Nöbeti</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Evre</th>
                                    <th>Süre</th>
                                    <th>Bulgular</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>1. Soğuk Evresi</b></td>
                                    <td>15-60 dk</td>
                                    <td>Titreme, üşüme, diş gıcırdatma</td>
                                </tr>
                                <tr>
                                    <td><b>2. Sıcak Evresi</b></td>
                                    <td>2-6 saat</td>
                                    <td>Yüksek ateş (40-41°C), baş ağrısı, kusma</td>
                                </tr>
                                <tr>
                                    <td><b>3. Terleme Evresi</b></td>
                                    <td>2-4 saat</td>
                                    <td>Profüz terleme, ateş düşer, halsizlik</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Ağır/Komplike Sıtma (P. falciparum)</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Komplikasyon</th>
                                    <th>Mekanizma</th>
                                    <th>Klinik</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Serebral Sıtma</b></td>
                                    <td>Serebral mikrodamar tıkanıklığı</td>
                                    <td>Koma, konvülziyon, %20-30 mortalite</td>
                                </tr>
                                <tr>
                                    <td><b>Ağır Anemi</b></td>
                                    <td>Hemoliz + diseritropoez</td>
                                    <td>Hb <5 g/dL, transfüzyon gerekebilir</td>
                                </tr>
                                <tr>
                                    <td><b>Hipoglisemi</b></td>
                                    <td>Parazit glukoz tüketimi + kinin etkisi</td>
                                    <td>Bilinç değişikliği, nöbet</td>
                                </tr>
                                <tr>
                                    <td><b>Metabolik Asidoz</b></td>
                                    <td>Laktat birikimi</td>
                                    <td>Kussmaul solunumu</td>
                                </tr>
                                <tr>
                                    <td><b>ARDS</b></td>
                                    <td>Pulmoner ödem</td>
                                    <td>Hipoksi, mekanik ventilasyon</td>
                                </tr>
                                <tr>
                                    <td><b>Akut Böbrek Yetm.</b></td>
                                    <td>ATN, hemoglobinüri</td>
                                    <td>Oligüri, kreatinin ↑</td>
                                </tr>
                                <tr>
                                    <td><b>Blackwater Fever</b></td>
                                    <td>Masif intravasküler hemoliz</td>
                                    <td>Koyu idrar (hemoglobinüri)</td>
                                </tr>
                                <tr>
                                    <td><b>DİK</b></td>
                                    <td>Koagülopati</td>
                                    <td>Kanama, trombositopeni</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>AĞIR SITMA KRİTERLERİ (WHO):</strong><br>
                        • Serebral sıtma (GKS <11)<br>
                        • Parazitemi >%10<br>
                        • Hb <5 g/dL veya Hct <%15<br>
                        • Glukoz <40 mg/dL<br>
                        • Kreatinin >3 mg/dL<br>
                        • Bilirubin >3 mg/dL + parazitemi >%2<br>
                        • Pulmoner ödem/ARDS<br>
                        • Şok (sistolik <80 mmHg)</p>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Relaps vs Rekrüdesans vs Reenfeksiyon</p>
                        <p class="highlight-box__content">
                            <b>RELAPS:</b> Karaciğerdeki hipnozoitten reaktivasyon (P. vivax/ovale) - aylar sonra<br>
                            <b>REKRÜDESANS:</b> Kandaki düşük paraziteminin tekrar artması (yetersiz tedavi)<br>
                            <b>REENFEKSİYON:</b> Yeni sivrisinek ısırığı ile yeni enfeksiyon
                        </p>
                    </div>
                `
            },
            {
                title: "Tanı Yöntemleri",
                icon: "fas fa-microscope",
                content: `
                    <div class="sub-section">
                        <h4 class="sub-section__title">Tanı Yöntemleri Karşılaştırması</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Yöntem</th>
                                    <th>Avantaj</th>
                                    <th>Dezavantaj</th>
                                    <th>Kullanım</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Kalın Yayma</b></td>
                                    <td>Yüksek duyarlılık, az paraziti yakalar</td>
                                    <td>Tür tayini zor</td>
                                    <td>TARAMA - Altın standart</td>
                                </tr>
                                <tr>
                                    <td><b>İnce Yayma</b></td>
                                    <td>Tür tayini, parazitemi hesabı</td>
                                    <td>Düşük duyarlılık</td>
                                    <td>TÜR TAYİNİ</td>
                                </tr>
                                <tr>
                                    <td><b>RDT (Hızlı Test)</b></td>
                                    <td>Kolay, hızlı (15-20 dk)</td>
                                    <td>Tür sınırlı, parazitemi yok</td>
                                    <td>Saha, acil tarama</td>
                                </tr>
                                <tr>
                                    <td><b>PCR</b></td>
                                    <td>En duyarlı, miks enfeksiyon</td>
                                    <td>Pahalı, laboratuvar gerekli</td>
                                    <td>Düşük parazitemi, araştırma</td>
                                </tr>
                                <tr>
                                    <td><b>Seroloji</b></td>
                                    <td>Geçirilmiş enfeksiyon</td>
                                    <td>Akut tanıda işe yaramaz</td>
                                    <td>Epidemiyoloji, kan bankası</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">🔬 Giemsa Boyama İlkeleri</p>
                        <p class="highlight-box__content">
                            <b>Kalın yayma:</b> Eritrositler lizis olur, parazitler serbest kalır → <b>DUYARLI</b><br>
                            <b>İnce yayma:</b> Eritrosit yapısı korunur → <b>TÜR TAYİNİ</b><br><br>
                            <b>Parazitemi hesabı:</b> Enfekte eritrosit / 1000 eritrosit × 100 = %<br>
                            <b>Negatif raporlama:</b> En az 200-300 alan (kalın) incelenmeli
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Hızlı Tanı Testleri (RDT)</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Antijen</th>
                                    <th>Tespit Ettiği Tür</th>
                                    <th>Özellik</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>HRP-2</b></td>
                                    <td>P. falciparum</td>
                                    <td>Tedaviden sonra haftalarca pozitif kalabilir</td>
                                </tr>
                                <tr>
                                    <td><b>pLDH</b></td>
                                    <td>Tüm türler</td>
                                    <td>Canlı paraziti gösterir, tedavi takibi</td>
                                </tr>
                                <tr>
                                    <td><b>Aldolaz</b></td>
                                    <td>Tüm türler</td>
                                    <td>Pan-malarial marker</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--warning">
                        <span class="alert-box__icon">⚠️</span>
                        <p class="alert-box__text"><strong>RDT Yanılgıları:</strong><br>
                        • HRP-2 gen delesyonlu P. falciparum → <b>Yanlış negatif</b> (Afrika'da artıyor!)<br>
                        • Prozone etkisi (yüksek parazitemi) → <b>Yanlış negatif</b><br>
                        • Romatoid faktör → <b>Yanlış pozitif</b></p>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Tanı Algoritması</p>
                        <p class="mnemonic-box__text">
                            <b>Ateş + Seyahat öyküsü → HEMEN:</b><br>
                            1. Kalın + İnce yayma (Giemsa)<br>
                            2. RDT (sonuç beklerken veya yayma yoksa)<br>
                            3. Negatifse 12-24 saat arayla 3 kez tekrarla<br><br>
                            <b>"Negatif yayma sıtmayı ekarte ettirmez!"</b>
                        </p>
                    </div>
                `
            },
            {
                title: "Tedavi",
                icon: "fas fa-pills",
                content: `
                    <div class="sub-section">
                        <h4 class="sub-section__title">Komplike Olmayan Sıtma Tedavisi</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Tür</th>
                                    <th>İlk Seçenek</th>
                                    <th>Alternatif</th>
                                    <th>Ek Tedavi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>P. falciparum</b></td>
                                    <td>ACT (Artemisinin Kombinasyonu)</td>
                                    <td>Atovakon-proguanil</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td><b>P. vivax / P. ovale</b></td>
                                    <td>Klorokin* + Primakin</td>
                                    <td>ACT + Primakin</td>
                                    <td><b>PRİMAKİN ŞART!</b></td>
                                </tr>
                                <tr>
                                    <td><b>P. malariae</b></td>
                                    <td>Klorokin</td>
                                    <td>ACT</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td><b>P. knowlesi</b></td>
                                    <td>ACT</td>
                                    <td>Klorokin</td>
                                    <td>-</td>
                                </tr>
                            </tbody>
                        </table>
                        <p><i>*Klorokin dirençli P. vivax bölgelerinde ACT tercih edilir</i></p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">ACT Rejimleri (Artemisinin Kombinasyonları)</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Artemether-Lumefantrin (Coartem®):</b> En yaygın kullanılan</li>
                            <li class="feature-item"><b>Artesunate-Amodiaquine:</b> Afrika'da yaygın</li>
                            <li class="feature-item"><b>Artesunate-Mefloquine:</b> Güneydoğu Asya</li>
                            <li class="feature-item"><b>Dihydroartemisinin-Piperaquine:</b> Uzun etki süresi</li>
                        </ul>
                    </div>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>AĞIR SITMA TEDAVİSİ:</strong><br>
                        <b>İlk seçenek:</b> IV Artesunate (en az 24 saat, sonra oral ACT)<br>
                        <b>Alternatif:</b> IV Kinin (artesunate yoksa)<br>
                        <b>Destek:</b> Sıvı resüsitasyonu, hipoglisemi düzeltme, transfüzyon, dializ (gerekirse)<br>
                        <b>Exchange transfüzyon:</b> Parazitemi >%10 ve ağır komplikasyon varsa düşünülebilir</p>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">💊 Primakin - Kritik Bilgiler</p>
                        <p class="highlight-box__content">
                            <b>Endikasyon:</b> P. vivax ve P. ovale → Hipnozoit eradikasyonu (radikal kür)<br>
                            <b>Doz:</b> 0.25-0.5 mg/kg/gün × 14 gün<br>
                            <b>Kontrendikasyon:</b> G6PD eksikliği, gebelik, emzirme<br>
                            <b>G6PD eksikliğinde:</b> Haftalık 0.75 mg/kg × 8 hafta (alternatif)<br><br>
                            <b>🔴 PRİMAKİN VERMEDEN ÖNCE G6PD TESTİ YAPILMALI!</b>
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Gebelikte Sıtma Tedavisi</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Trimester</th>
                                    <th>Komplike Olmayan</th>
                                    <th>Ağır Sıtma</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>1. Trimester</b></td>
                                    <td>Kinin + Klindamisin (7 gün)</td>
                                    <td>IV Artesunate</td>
                                </tr>
                                <tr>
                                    <td><b>2-3. Trimester</b></td>
                                    <td>ACT</td>
                                    <td>IV Artesunate</td>
                                </tr>
                            </tbody>
                        </table>
                        <p><i>Primakin gebelikte kontrendike! P. vivax/ovale relapsı doğum sonrasına ertelenir.</i></p>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Tedavi Hafıza Kodları</p>
                        <p class="mnemonic-box__text">
                            <b>"VİVAX-OVALE = PRİMAKİN VER"</b> → Hipnozoit öldürmek için<br>
                            <b>"FALCİPARUM = ACT"</b> → Artemisinin kombinasyonu ilk seçenek<br>
                            <b>"AĞIR SITMA = IV ARTESUNATE"</b> → Parenteral, acil<br>
                            <b>"G6PD = PRİMAKİN TEHLİKE"</b> → Hemoliz riski, test et!
                        </p>
                    </div>
                `
            },
            {
                title: "Korunma ve Profilaksi",
                icon: "fas fa-shield-alt",
                content: `
                    <div class="sub-section">
                        <h4 class="sub-section__title">Kemoprofilaksi Rejimleri</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>İlaç</th>
                                    <th>Doz</th>
                                    <th>Başlangıç</th>
                                    <th>Süre</th>
                                    <th>Bölge</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Atovakon-Proguanil</b></td>
                                    <td>1 tb/gün</td>
                                    <td>1-2 gün önce</td>
                                    <td>Dönüşten 7 gün sonra</td>
                                    <td>Tüm bölgeler</td>
                                </tr>
                                <tr>
                                    <td><b>Doksisiklin</b></td>
                                    <td>100 mg/gün</td>
                                    <td>1-2 gün önce</td>
                                    <td>Dönüşten 4 hafta sonra</td>
                                    <td>Tüm bölgeler</td>
                                </tr>
                                <tr>
                                    <td><b>Meflokin</b></td>
                                    <td>250 mg/hafta</td>
                                    <td>2-3 hafta önce</td>
                                    <td>Dönüşten 4 hafta sonra</td>
                                    <td>Dirençsiz bölgeler</td>
                                </tr>
                                <tr>
                                    <td><b>Klorokin</b></td>
                                    <td>500 mg/hafta</td>
                                    <td>1-2 hafta önce</td>
                                    <td>Dönüşten 4 hafta sonra</td>
                                    <td>Sadece duyarlı bölge</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">🦟 Vektör Kontrol Önlemleri</p>
                        <p class="highlight-box__content">
                            <b>Kişisel korunma:</b><br>
                            • DEET içeren sivrisinek kovucu (%20-30)<br>
                            • Uzun kollu-paçalı açık renkli giysiler<br>
                            • Permetrin emdirilmiş cibinlik<br>
                            • Akşam-gece dışarı çıkmama (Anopheles gece ısırır)<br><br>
                            <b>Toplumsal önlemler:</b><br>
                            • İnsektisit emdirilmiş cibinlik (ITN)<br>
                            • İç mekan kalıcı spreyleme (IRS)<br>
                            • Larva kontrolü
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Özel Durumlar</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Gebelik:</b> Meflokin (2. trimesterden sonra), klorokin (duyarlı bölge). Doksisiklin kontrendike!</li>
                            <li class="feature-item"><b>Çocuklar:</b> Doz ayarlaması ile aynı ilaçlar</li>
                            <li class="feature-item"><b>Uzun süreli kalış:</b> Terminal profilaksi (primakin) P. vivax bölgelerinde</li>
                        </ul>
                    </div>

                    <div class="alert-box alert-box--info">
                        <span class="alert-box__icon">ℹ️</span>
                        <p class="alert-box__text"><strong>RTS,S/AS01 (Mosquirix) Aşısı:</strong><br>
                        İlk onaylı sıtma aşısı (2021). P. falciparum'a karşı. %30-40 koruma sağlar. Afrika'da 5 yaş altı çocuklara önerilir. Tam koruma sağlamaz, diğer önlemlerle birlikte kullanılmalı.</p>
                    </div>
                `
            },
            {
                title: "Sınav İçin Kritik Özet",
                icon: "fas fa-graduation-cap",
                content: `
                    <div class="highlight-box">
                        <p class="highlight-box__title">🎯 En Sık Sorulan Konular</p>
                        <p class="highlight-box__content">
                            1. <b>Hipnozoit yapan:</b> P. vivax ve P. ovale → Primakin gerekir<br>
                            2. <b>En ağır seyirli:</b> P. falciparum → Serebral sıtma<br>
                            3. <b>Muz/hilal gametozit:</b> P. falciparum<br>
                            4. <b>72 saatlik siklus:</b> P. malariae (kuartan)<br>
                            5. <b>G6PD kontrol gerektiren:</b> Primakin
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Hızlı Karar Tablosu</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Soru Tipi</th>
                                    <th>Cevap</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Relaps yapan Plasmodium?</td>
                                    <td><b>P. vivax, P. ovale</b> (hipnozoit)</td>
                                </tr>
                                <tr>
                                    <td>Serebral sıtma etkeni?</td>
                                    <td><b>P. falciparum</b></td>
                                </tr>
                                <tr>
                                    <td>Schüffner granülleri?</td>
                                    <td><b>P. vivax, P. ovale</b></td>
                                </tr>
                                <tr>
                                    <td>Bant trofozoit?</td>
                                    <td><b>P. malariae</b></td>
                                </tr>
                                <tr>
                                    <td>Türkiye'de endemik olan?</td>
                                    <td><b>P. vivax</b></td>
                                </tr>
                                <tr>
                                    <td>Tanıda altın standart?</td>
                                    <td><b>Kalın + ince yayma (Giemsa)</b></td>
                                </tr>
                                <tr>
                                    <td>Ağır sıtmada ilk tedavi?</td>
                                    <td><b>IV Artesunate</b></td>
                                </tr>
                                <tr>
                                    <td>Primakin kontrendikasyonu?</td>
                                    <td><b>G6PD eksikliği, gebelik</b></td>
                                </tr>
                                <tr>
                                    <td>Kanda sadece halka + gametozit?</td>
                                    <td><b>P. falciparum</b></td>
                                </tr>
                                <tr>
                                    <td>Nefrotik sendrom yapan?</td>
                                    <td><b>P. malariae</b></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Mega Hafıza Kodları</p>
                        <p class="mnemonic-box__text">
                            <b>"FALCİPARUM = FATAL"</b> → En ağır, en ölümcül<br>
                            <b>"VİVAX = VİVA (yaşa) ama TEKRAR GEL"</b> → Relaps yapar<br>
                            <b>"MALARİAE = MAL(kronik) + BÖBREK"</b> → Nefrotik sendrom<br>
                            <b>"OVALE = OVAL eritrosit"</b> → Eritrosit şekli değişir<br>
                            <b>"PRİMAKİN = PRİMER karaciğer temizliği"</b> → Hipnozoit öldürür<br>
                            <b>"G6PD + PRİMAKİN = PATLAMA (hemoliz)"</b> → Kontrendike!
                        </p>
                    </div>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>SINAV İÇİN KESİN BİL:</strong><br><br>
                            1. <b>P. vivax + P. ovale =</b> HİPNOZOİT yapar → PRİMAKİN şart (G6PD kontrol et!)<br>
                            2. <b>P. falciparum =</b> MUZ GAMETOZİT, serebral sıtma, %40 parazitemi<br>
                            3. <b>Kalın yayma =</b> TARAMA (duyarlı), İnce yayma = TÜR TAYİNİ<br>
                            4. <b>Ağır sıtma =</b> IV ARTESUNATE (IV Kinin alternatif)<br>
                            5. <b>Vektör =</b> Dişi Anopheles sivrisineği (gece ısırır)
                        </p>
                    </div>

                    <ul class="feature-list">
                        <li><b>Soru tipi:</b> "Afrika seyahati, ateş, muz gametozit?" → P. falciparum, ACT</li>
                        <li><b>Soru tipi:</b> "Tedavi sonrası 6 ay sonra tekrar ateş?" → Relaps (P. vivax/ovale), primakin eksik</li>
                        <li><b>Soru tipi:</b> "G6PD eksikliği, P. vivax tedavisi?" → Klorokin ver, primakin verme (veya haftalık düşük doz)</li>
                        <li><b>Soru tipi:</b> "Koma, parazitemi %15?" → Ağır sıtma, IV artesunate</li>
                        <li><b>Soru tipi:</b> "72 saat arayla ateş nöbeti?" → P. malariae (kuartan)</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 11,
        category: "parazitoloji",
        title: "Bağırsak Protozoonları",
        subtitle: "Amip, Giardia, Cryptosporidium ve Diğerleri",
        summary: "Bağırsak protozoonlarının kapsamlı özeti. İnvaziv (E. histolytica) ve non-invaziv (Giardia) türlerin karşılaştırması, aside dirençli parazitler, AIDS ilişkili fırsatçı enfeksiyonlar ve tedavi algoritmaları.",
        tags: ["Amip", "Giardia", "Cryptosporidium", "Aside Dirençli", "İshal", "Parazitoloji", "AIDS"],
        sections: [
            {
                title: "Genel Bakış ve Sınıflandırma",
                icon: "fas fa-sitemap",
                content: `
                    <p><strong>Bağırsak protozoonları</strong> fekal-oral yolla bulaşan, ishale neden olan tek hücreli parazitlerdir. Klinik önem açısından <b>invaziv</b> ve <b>non-invaziv</b> olarak ikiye ayrılırlar.</p>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Sınıflandırma</p>
                        <p class="highlight-box__content">
                            <b>İNVAZİV (Doku invazyonu yapar):</b><br>
                            • Entamoeba histolytica → Flask ülser, karaciğer absesi<br><br>
                            <b>NON-İNVAZİV (Mukozada kalır):</b><br>
                            • Giardia lamblia → Steatore, malabsorpsiyon<br>
                            • Cryptosporidium → AIDS'te kronik ishal<br>
                            • Cyclospora cayetanensis<br>
                            • Cystoisospora belli<br>
                            • Blastocystis hominis (tartışmalı patojen)
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Bağırsak Protozoonları - Genel Karşılaştırma</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Parazit</th>
                                    <th>Bulaş</th>
                                    <th>İshal Tipi</th>
                                    <th>Önemli Özellik</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>E. histolytica</b></td>
                                    <td>Kist (su/gıda)</td>
                                    <td>Kanlı-mukuslu (dizanteri)</td>
                                    <td>Karaciğer absesi</td>
                                </tr>
                                <tr>
                                    <td><b>Giardia</b></td>
                                    <td>Kist (su)</td>
                                    <td>Yağlı, kötü kokulu</td>
                                    <td>IgA eksikliği</td>
                                </tr>
                                <tr>
                                    <td><b>Cryptosporidium</b></td>
                                    <td>Ookist (su)</td>
                                    <td>Sulu, voluminöz</td>
                                    <td>AIDS, aside dirençli</td>
                                </tr>
                                <tr>
                                    <td><b>Cyclospora</b></td>
                                    <td>Ookist (gıda)</td>
                                    <td>Sulu, uzamış</td>
                                    <td>Otofloresan</td>
                                </tr>
                                <tr>
                                    <td><b>Cystoisospora</b></td>
                                    <td>Ookist (gıda)</td>
                                    <td>Sulu</td>
                                    <td>Eozinofili</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--info">
                        <span class="alert-box__icon">ℹ️</span>
                        <p class="alert-box__text"><strong>Enfektif Form:</strong> Çoğu bağırsak protozoonunda enfektif form <b>KİST</b> veya <b>OOKİST</b>'tir. Trofozoit çevreye dayanıksızdır ve genellikle enfektif değildir.</p>
                    </div>
                `
            },
            {
                title: "Entamoeba histolytica",
                icon: "fas fa-bug",
                content: `
                    <p><strong>Entamoeba histolytica</strong>, invaziv amebiasis etkenidir. Kolon ülserleri ve karaciğer absesi yapabilir. Morfolojik olarak non-patojen <i>E. dispar</i>'dan ayırt edilemez!</p>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Yaşam Döngüsü</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Form</th>
                                    <th>Özellik</th>
                                    <th>Lokalizasyon</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Kist</b></td>
                                    <td>4 çekirdekli (olgun), enfektif form</td>
                                    <td>Dışkıda, çevrede</td>
                                </tr>
                                <tr>
                                    <td><b>Trofozoit</b></td>
                                    <td>Tek çekirdekli, hareketli, patojen form</td>
                                    <td>Bağırsak duvarında</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">🔬 Tanısal Özellikler</p>
                        <p class="highlight-box__content">
                            <b>Trofozoit:</b><br>
                            • Tek çekirdek, santral karyozom<br>
                            • <b>Eritrofagositoz</b> → PATOGNOMONİK (yutulmuş eritrositler)<br>
                            • Psödopod ile tek yönlü hareket<br><br>
                            <b>Kist:</b><br>
                            • 4 çekirdek (olgun kist)<br>
                            • Kromatoid cisimler (sigara şeklinde)<br>
                            • Glikojen vakuolu
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Klinik Formlar</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Form</th>
                                    <th>Bulgular</th>
                                    <th>Komplikasyon</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Asemptomatik taşıyıcılık</b></td>
                                    <td>%90 enfekte kişi</td>
                                    <td>Bulaş kaynağı</td>
                                </tr>
                                <tr>
                                    <td><b>Amipli dizanteri</b></td>
                                    <td>Kanlı-mukuslu ishal, tenesmus, kramp</td>
                                    <td>Toksik megakolon, perforasyon</td>
                                </tr>
                                <tr>
                                    <td><b>Ameboma</b></td>
                                    <td>Granülomatöz kitle (çekum)</td>
                                    <td>Karsinom ile karışır</td>
                                </tr>
                                <tr>
                                    <td><b>Karaciğer absesi (AKA)</b></td>
                                    <td>Ateş, sağ üst kadran ağrısı, hepatomegali</td>
                                    <td>Rüptür → peritonit, plevra, perikard</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>Amip Karaciğer Absesi (AKA):</strong><br>
                        • Genç erkeklerde sık<br>
                        • Sağ lob, tek abse<br>
                        • <b>"Ançuez sosu/Çikolata"</b> renginde aspirat (nekrotik debris)<br>
                        • Aspiratta trofozoit nadiren görülür (abse duvarında)<br>
                        • Seroloji %95 pozitif (IHA, ELISA)</p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Tanı Yöntemleri</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Yöntem</th>
                                    <th>Bulgu</th>
                                    <th>Yorum</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Dışkı mikroskopi</b></td>
                                    <td>Kist veya trofozoit</td>
                                    <td>E. dispar'dan ayırt edemez!</td>
                                </tr>
                                <tr>
                                    <td><b>Dışkı antijen (ELISA)</b></td>
                                    <td>E. histolytica spesifik</td>
                                    <td>E. dispar'dan ayırır</td>
                                </tr>
                                <tr>
                                    <td><b>PCR</b></td>
                                    <td>Tür tayini</td>
                                    <td>En spesifik</td>
                                </tr>
                                <tr>
                                    <td><b>Seroloji (IHA, ELISA)</b></td>
                                    <td>Anti-amip antikor</td>
                                    <td>AKA'da %95+, bağırsakta düşük</td>
                                </tr>
                                <tr>
                                    <td><b>Kolonoskopi</b></td>
                                    <td>Flask ülser (dar ağız, geniş taban)</td>
                                    <td>Biyopsi → trofozoit</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Tedavi</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Klinik Form</th>
                                    <th>Tedavi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Asemptomatik taşıyıcı</b></td>
                                    <td>Paromomisin veya Diloksanid furoat (luminal ajan)</td>
                                </tr>
                                <tr>
                                    <td><b>İnvaziv amebiasis</b></td>
                                    <td>Metronidazol 750 mg × 3/gün × 10 gün<br>+ Paromomisin (lümen eradikasyonu)</td>
                                </tr>
                                <tr>
                                    <td><b>Karaciğer absesi</b></td>
                                    <td>Metronidazol + Paromomisin<br>± Perkütan drenaj (büyük, rüptür riski)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Amip Hafıza Kodları</p>
                        <p class="mnemonic-box__text">
                            <b>"4 ÇEKİRDEK = 4mip KİST"</b> → Olgun kist 4 çekirdekli<br>
                            <b>"ERİTROFAGOSİTOZ = HİSTOLYTİCA"</b> → Patojen amip kanı sever<br>
                            <b>"FLASK ÜLSER = DAR AĞIZ, GENİŞ TABAN"</b> → Kolonoskopi bulgusu<br>
                            <b>"ANÇUEZ SOSU = AMİP KARACİĞER"</b> → AKA aspiratı
                        </p>
                    </div>
                `
            },
            {
                title: "Giardia lamblia (G. duodenalis)",
                icon: "fas fa-grin-beam",
                content: `
                    <p><strong>Giardia lamblia</strong>, dünyada en sık görülen bağırsak protozoonudur. Non-invaziv olup duodenum ve jejunumda yaşar. Malabsorpsiyona ve kronik ishale neden olur.</p>

                    <div class="highlight-box">
                        <p class="highlight-box__title">🔬 Morfolojik Özellikler</p>
                        <p class="highlight-box__content">
                            <b>Trofozoit:</b><br>
                            • <b>"Gülen yüz / Baykuş yüzü"</b> görünümü<br>
                            • İki çekirdek, aksostil, median cisim<br>
                            • 4 çift flagella (8 toplam)<br>
                            • Ventral yapışma diski (emici disk)<br><br>
                            <b>Kist:</b><br>
                            • 4 çekirdek (olgun)<br>
                            • Oval şekilli<br>
                            • ENFEKTİF FORM
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Klinik Bulgular</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Form</th>
                                    <th>Bulgular</th>
                                    <th>Mekanizma</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Akut giardiasis</b></td>
                                    <td>Sulu ishal, kramp, bulantı, şişkinlik</td>
                                    <td>Villus atrofisi, malabsorpsiyon</td>
                                </tr>
                                <tr>
                                    <td><b>Kronik giardiasis</b></td>
                                    <td><b>Steatore</b> (yağlı, kötü kokulu dışkı)</td>
                                    <td>Yağ malabsorpsiyonu</td>
                                </tr>
                                <tr>
                                    <td><b>Çocuklarda</b></td>
                                    <td>Büyüme geriliği, kilo kaybı</td>
                                    <td>Kronik malabsorpsiyon</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--warning">
                        <span class="alert-box__icon">⚠️</span>
                        <p class="alert-box__text"><strong>Risk Grupları:</strong><br>
                        • <b>IgA eksikliği:</b> Kronik, tedaviye dirençli giardiasis<br>
                        • <b>Hipogamaglobulinemi:</b> Ağır seyir<br>
                        • <b>Kistik fibrozis:</b> Sık enfeksiyon<br>
                        • <b>Çocuklar:</b> Kreş, anaokulu salgınları<br>
                        • <b>Gezginler:</b> "Turist ishali"</p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Tanı ve Tedavi</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Tanı</th>
                                    <th>Tedavi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Dışkı mikroskopi (3 örnek)</td>
                                    <td rowspan="3"><b>Metronidazol</b> 250 mg × 3/gün × 5-7 gün<br>veya<br><b>Tinidazol</b> 2 g tek doz<br>veya<br><b>Nitazoksanid</b></td>
                                </tr>
                                <tr>
                                    <td>Dışkı antijen testi (ELISA)</td>
                                </tr>
                                <tr>
                                    <td>Duodenal aspirat/biyopsi (nadiren)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Giardia Hafıza</p>
                        <p class="mnemonic-box__text">
                            <b>"GÜLEN YÜZ = GİARDİA"</b> → Trofozoit morfolojisi<br>
                            <b>"IgA YOK = GİARDİA SEVİNÇ"</b> → Kronik enfeksiyon<br>
                            <b>"STEATORE = YAĞLI DIŞKI"</b> → Malabsorpsiyon<br>
                            <b>"ÇİNKO EKSİKLİĞİ"</b> → Giardia ilişkili
                        </p>
                    </div>
                `
            },
            {
                title: "Aside Dirençli Protozoonlar",
                icon: "fas fa-flask",
                content: `
                    <p><strong>Cryptosporidium, Cyclospora ve Cystoisospora</strong>, aside dirençli (asit-fast) boyanan, özellikle immünsüprese hastalarda ciddi ishale neden olan fırsatçı parazitlerdir.</p>

                    <div class="highlight-box">
                        <p class="highlight-box__title">🔬 Aside Dirençli Boyama</p>
                        <p class="highlight-box__content">
                            <b>Yöntem:</b> Modifiye Kinyoun, Ziehl-Neelsen (modifiye)<br>
                            <b>Sonuç:</b> Ookistler pembe-kırmızı boyanır, zemin mavi-yeşil<br>
                            <b>Neden önemli?</b> Rutin dışkı incelemesinde görülmezler!<br><br>
                            <i>"İshal + AIDS = Aside dirençli boyama iste!"</i>
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Aside Dirençli Protozoonlar Karşılaştırması</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Özellik</th>
                                    <th>Cryptosporidium</th>
                                    <th>Cyclospora</th>
                                    <th>Cystoisospora</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Ookist boyutu</b></td>
                                    <td>4-6 µm (küçük)</td>
                                    <td>8-10 µm (orta)</td>
                                    <td>20-30 µm (büyük)</td>
                                </tr>
                                <tr>
                                    <td><b>Sporulasyon</b></td>
                                    <td>İçeride (atıldığında enfektif)</td>
                                    <td>Dışarıda (1-2 hafta gerekir)</td>
                                    <td>Dışarıda</td>
                                </tr>
                                <tr>
                                    <td><b>Otofloresan</b></td>
                                    <td>Yok</td>
                                    <td><b>VAR (UV ile mavi)</b></td>
                                    <td>Yok</td>
                                </tr>
                                <tr>
                                    <td><b>Eozinofili</b></td>
                                    <td>Yok</td>
                                    <td>Yok</td>
                                    <td><b>VAR</b></td>
                                </tr>
                                <tr>
                                    <td><b>İlişkili durum</b></td>
                                    <td>AIDS (CD4 <100)</td>
                                    <td>Endemik bölge seyahati</td>
                                    <td>AIDS, HTLV-1</td>
                                </tr>
                                <tr>
                                    <td><b>Tedavi</b></td>
                                    <td>Nitazoksanid<br>(AIDS'te ART en önemli)</td>
                                    <td>TMP-SMX</td>
                                    <td>TMP-SMX</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Cryptosporidium Detayları</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Tür:</b> C. parvum (zoonotik), C. hominis (insandan insana)</li>
                            <li class="feature-item"><b>Bulaş:</b> Su kaynaklı salgınlar sık (klora dirençli!)</li>
                            <li class="feature-item"><b>İmmünkompetan:</b> Self-limitedir (1-2 hafta)</li>
                            <li class="feature-item"><b>AIDS (CD4 <100):</b> Kronik, voluminöz ishal, biliyer tutulum</li>
                            <li class="feature-item"><b>Tedavi:</b> ART ile CD4 yükseltmek en etkili! Nitazoksanid yardımcı</li>
                        </ul>
                    </div>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>Cryptosporidium - KLORA DİRENÇLİ!</strong><br>
                        Su arıtma tesislerinde standart klorlama ile öldürülmez. Filtrasyon veya UV gerekir. Bu nedenle su kaynaklı salgınlara neden olabilir.</p>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Aside Dirençli Parazitler Hafıza</p>
                        <p class="mnemonic-box__text">
                            <b>"CCC = Cryptosporidium, Cyclospora, Cystoisospora"</b><br>
                            <b>"CYCLO = CYcle + UV LIGHT (otofloresan)"</b><br>
                            <b>"CYSTO = CYSTO + EOZİNOFİLİ"</b><br>
                            <b>"CRYPTO = AIDS + KLORA DİRENÇ"</b><br>
                            <b>"TMP-SMX → Cyclo & Cysto (ikisi de SMX)"</b>
                        </p>
                    </div>
                `
            },
            {
                title: "Diğer Bağırsak Protozoonları",
                icon: "fas fa-bacteria",
                content: `
                    <div class="sub-section">
                        <h4 class="sub-section__title">Dientamoeba fragilis</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Özellik:</b> Kist formu YOK (trofozoit ile bulaşır - Enterobius yumurtası ile?)</li>
                            <li class="feature-item"><b>Klinik:</b> Kronik ishal, karın ağrısı, eozinofili</li>
                            <li class="feature-item"><b>Tanı:</b> Taze dışkıda trofozoit (2 çekirdekli)</li>
                            <li class="feature-item"><b>Tedavi:</b> Metronidazol, paromomisin</li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Blastocystis hominis</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Patojenite:</b> Tartışmalı! Fırsatçı patojen olabilir</li>
                            <li class="feature-item"><b>Morfoloji:</b> Vakuoler form (santral vakuol, periferik çekirdekler)</li>
                            <li class="feature-item"><b>Klinik:</b> Genellikle asemptomatik, bazen ishal</li>
                            <li class="feature-item"><b>Tedavi:</b> Semptomatikse metronidazol</li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Non-Patojen Amip Türleri</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Tür</th>
                                    <th>Kist Çekirdek Sayısı</th>
                                    <th>Önemli Not</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>E. dispar</b></td>
                                    <td>4</td>
                                    <td>E. histolytica ile morfolojik aynı, non-patojen</td>
                                </tr>
                                <tr>
                                    <td><b>E. coli</b></td>
                                    <td>8</td>
                                    <td>En sık görülen non-patojen amip</td>
                                </tr>
                                <tr>
                                    <td><b>E. hartmanni</b></td>
                                    <td>4</td>
                                    <td>Küçük boyutlu</td>
                                </tr>
                                <tr>
                                    <td><b>Endolimax nana</b></td>
                                    <td>4</td>
                                    <td>En küçük amip kisti</td>
                                </tr>
                                <tr>
                                    <td><b>Iodamoeba bütschlii</b></td>
                                    <td>1</td>
                                    <td>Glikojen vakuolü belirgin (iyot boyar)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">E. histolytica vs E. dispar</p>
                        <p class="highlight-box__content">
                            <b>Morfolojik olarak AYIRT EDİLEMEZ!</b><br><br>
                            <b>Ayırt etme yöntemleri:</b><br>
                            • Dışkı antijen ELISA (E. histolytica spesifik)<br>
                            • PCR<br>
                            • Seroloji (invaziv E. histolytica'da pozitif)<br>
                            • Eritrofagositoz (sadece E. histolytica)<br><br>
                            <i>E. dispar tedavi gerektirmez!</i>
                        </p>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Amip Kist Çekirdek Sayısı</p>
                        <p class="mnemonic-box__text">
                            <b>"HİSTOLYTİCA = 4"</b> (histolytica → histo → 4 harf sonra...)<br>
                            <b>"E. COLİ = 8"</b> (coli → sekiz ile kafiye)<br>
                            <b>"IODAMOEBA = 1"</b> (tek I harfi, tek çekirdek)
                        </p>
                    </div>
                `
            },
            {
                title: "Tanı Yöntemleri Özeti",
                icon: "fas fa-microscope",
                content: `
                    <div class="sub-section">
                        <h4 class="sub-section__title">Dışkı İnceleme Yöntemleri</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Yöntem</th>
                                    <th>Kullanım</th>
                                    <th>Tespit Ettiği</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Nativ-Lugol</b></td>
                                    <td>Rutin tarama</td>
                                    <td>Trofozoit, kist, yumurta</td>
                                </tr>
                                <tr>
                                    <td><b>Formol-etil asetat</b></td>
                                    <td>Yoğunlaştırma</td>
                                    <td>Düşük yoğunluklu kist/yumurta</td>
                                </tr>
                                <tr>
                                    <td><b>Trikrom boyama</b></td>
                                    <td>Kalıcı preparat</td>
                                    <td>Amip morfolojisi detayı</td>
                                </tr>
                                <tr>
                                    <td><b>Modifiye asit-fast</b></td>
                                    <td>Aside dirençli</td>
                                    <td>Cryptosporidium, Cyclospora, Cystoisospora</td>
                                </tr>
                                <tr>
                                    <td><b>UV floresan</b></td>
                                    <td>Otofloresan</td>
                                    <td>Cyclospora (mavi)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">📋 Dışkı Örneği Kuralları</p>
                        <p class="highlight-box__content">
                            <b>Sayı:</b> En az 3 örnek (farklı günlerde)<br>
                            <b>Taze örnek:</b> Trofozoit için (30 dk içinde)<br>
                            <b>Fiksatif:</b> SAF, PVA, formol (kist koruma)<br>
                            <b>İlaç kullanımı:</b> Antibiyotik, baryum, antasit → yanlış negatif<br>
                            <b>Bekleme:</b> İlaçlardan 2 hafta sonra örnek al
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Antijen ve Moleküler Testler</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Test</th>
                                    <th>Parazit</th>
                                    <th>Avantaj</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Dışkı antijen ELISA</b></td>
                                    <td>Giardia, E. histolytica, Cryptosporidium</td>
                                    <td>Hızlı, spesifik</td>
                                </tr>
                                <tr>
                                    <td><b>DFA (immunofloresan)</b></td>
                                    <td>Giardia, Cryptosporidium</td>
                                    <td>Yüksek duyarlılık</td>
                                </tr>
                                <tr>
                                    <td><b>PCR</b></td>
                                    <td>Tüm protozoonlar</td>
                                    <td>En duyarlı, tür tayini</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                `
            },
            {
                title: "Sınav İçin Kritik Özet",
                icon: "fas fa-graduation-cap",
                content: `
                    <div class="highlight-box">
                        <p class="highlight-box__title">🎯 En Sık Sorulan Konular</p>
                        <p class="highlight-box__content">
                            1. <b>Flask ülser:</b> E. histolytica<br>
                            2. <b>Eritrofagositoz:</b> E. histolytica (patognomik)<br>
                            3. <b>Gülen yüz trofozoit:</b> Giardia<br>
                            4. <b>IgA eksikliğinde kronik ishal:</b> Giardia<br>
                            5. <b>AIDS + ishal + aside dirençli:</b> Cryptosporidium<br>
                            6. <b>Otofloresan ookist:</b> Cyclospora<br>
                            7. <b>Eozinofili yapan:</b> Cystoisospora
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Hızlı Karar Tablosu</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Bulgu/Senaryo</th>
                                    <th>Parazit</th>
                                    <th>Tedavi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Kanlı-mukuslu ishal, flask ülser</td>
                                    <td>E. histolytica</td>
                                    <td>Metronidazol + Paromomisin</td>
                                </tr>
                                <tr>
                                    <td>Ançuez sosu karaciğer absesi</td>
                                    <td>E. histolytica (AKA)</td>
                                    <td>Metronidazol ± drenaj</td>
                                </tr>
                                <tr>
                                    <td>Steatore, yağlı ishal</td>
                                    <td>Giardia</td>
                                    <td>Metronidazol/Tinidazol</td>
                                </tr>
                                <tr>
                                    <td>AIDS, CD4<100, kronik ishal</td>
                                    <td>Cryptosporidium</td>
                                    <td>ART + Nitazoksanid</td>
                                </tr>
                                <tr>
                                    <td>UV ile mavi floresan ookist</td>
                                    <td>Cyclospora</td>
                                    <td>TMP-SMX</td>
                                </tr>
                                <tr>
                                    <td>İshal + eozinofili + aside dirençli</td>
                                    <td>Cystoisospora</td>
                                    <td>TMP-SMX</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Mega Hafıza Kodları</p>
                        <p class="mnemonic-box__text">
                            <b>"AMİP = ANÇUEZ KARACİĞER"</b> → E. histolytica AKA<br>
                            <b>"GİARDİA = GÜLEN YÜZ + IgA"</b> → Morfoloji + risk faktörü<br>
                            <b>"CRYPTO = AIDS + KLOR ETKİSİZ"</b> → Fırsatçı + su direnci<br>
                            <b>"CYclo = CYanotic (UV mavi)"</b> → Otofloresan<br>
                            <b>"CYSTo = eozinofili CYSTemi"</b> → Eozinofili yapan<br>
                            <b>"4 çekirdek = 4mip (histolytica)"</b> → Kist çekirdek sayısı
                        </p>
                    </div>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>SINAV İÇİN KESİN BİL:</strong><br><br>
                            1. <b>E. histolytica =</b> ERİTROFAGOSİTOZ, 4 çekirdekli kist, flask ülser, AKA<br>
                            2. <b>Giardia =</b> Gülen yüz, IgA eksikliği, steatore, non-invaziv<br>
                            3. <b>Aside dirençli =</b> Cryptosporidium, Cyclospora, Cystoisospora<br>
                            4. <b>E. dispar =</b> E. histolytica ile aynı görünür, NON-PATOJEN!<br>
                            5. <b>E. coli =</b> 8 çekirdekli kist, non-patojen
                        </p>
                    </div>

                    <ul class="feature-list">
                        <li><b>Soru tipi:</b> "Dışkıda eritrosit yutmuş amip?" → E. histolytica</li>
                        <li><b>Soru tipi:</b> "4 çekirdekli kist, non-patojen?" → E. dispar</li>
                        <li><b>Soru tipi:</b> "Kreş salgını, yağlı ishal?" → Giardia</li>
                        <li><b>Soru tipi:</b> "AIDS, aside dirençli, klora dirençli?" → Cryptosporidium</li>
                        <li><b>Soru tipi:</b> "Dışkıda UV ile mavi ookist?" → Cyclospora</li>
                        <li><b>Soru tipi:</b> "İmmünsüprese, ishal, eozinofili?" → Cystoisospora</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 12,
        category: "parazitoloji",
        title: "Toxoplasma gondii",
        subtitle: "Gebelik, Konjenital Toksoplazmoz ve AIDS",
        summary: "Toxoplasma gondii'nin kapsamlı özeti. Yaşam döngüsü, gebelikte tarama, avidite testi yorumu, konjenital toksoplazmoz ve AIDS hastalarında serebral toksoplazmoz.",
        tags: ["Toxoplasma", "Konjenital", "Gebelik", "Avidite", "AIDS", "TORCH", "Parazitoloji"],
        sections: [
            {
                title: "Genel Bilgiler",
                icon: "fas fa-cat",
                content: `
                    <p><strong>Toxoplasma gondii</strong>, zorunlu hücre içi parazit olup, dünyada en yaygın parazitik enfeksiyonlardan biridir. İmmünkompetan bireylerde genellikle asemptomatik seyreder, ancak gebelikte ve immünsüpresyonda ciddi hastalık yapar.</p>

                    <div class="highlight-box">
                        <p class="highlight-box__title">🐱 Yaşam Döngüsü - Temel Kavramlar</p>
                        <p class="highlight-box__content">
                            <b>Kesin konak:</b> KEDİ (Felidae ailesi) - Seksüel üreme<br>
                            <b>Ara konak:</b> İnsan, tüm sıcakkanlılar - Aseksüel üreme<br><br>
                            <b>Üç enfektif form:</b><br>
                            • <b>Ookist:</b> Kedi dışkısında, çevrede sporlanır (1-5 gün)<br>
                            • <b>Takizoit:</b> Hızlı çoğalan, akut enfeksiyon formu<br>
                            • <b>Bradizoit:</b> Yavaş çoğalan, doku kisti içinde (kronik)
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Bulaş Yolları</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Bulaş Yolu</th>
                                    <th>Form</th>
                                    <th>Kaynak</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Oral - Ookist</b></td>
                                    <td>Sporlanmış ookist</td>
                                    <td>Kedi dışkısı ile kontamine toprak, su, sebze</td>
                                </tr>
                                <tr>
                                    <td><b>Oral - Doku kisti</b></td>
                                    <td>Bradizoit</td>
                                    <td>Az pişmiş et (kuzu, domuz)</td>
                                </tr>
                                <tr>
                                    <td><b>Transplasental</b></td>
                                    <td>Takizoit</td>
                                    <td>Anne → Fetüs (primer enfeksiyon)</td>
                                </tr>
                                <tr>
                                    <td><b>Transplantasyon</b></td>
                                    <td>Bradizoit/Takizoit</td>
                                    <td>Enfekte organ (kalp, kemik iliği)</td>
                                </tr>
                                <tr>
                                    <td><b>Kan transfüzyonu</b></td>
                                    <td>Takizoit</td>
                                    <td>Nadir</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--info">
                        <span class="alert-box__icon">ℹ️</span>
                        <p class="alert-box__text"><strong>Kedi ve Toksoplazmoz:</strong><br>
                        Kediler hayatları boyunca genellikle <b>bir kez</b> ookist saçarlar (1-3 hafta). Ookistler dışkıda sporlanmadan önce (1-5 gün) enfektif değildir. Günlük kedi kumu temizliği riski azaltır!</p>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Formlar Hafıza</p>
                        <p class="mnemonic-box__text">
                            <b>"TAKİZOİT = TAKİP et (hızlı, akut)"</b><br>
                            <b>"BRADİZOİT = BRAKIN uyusun (yavaş, kronik kist)"</b><br>
                            <b>"OOKİST = KOK(u)İST (kedi kokusu)"</b>
                        </p>
                    </div>
                `
            },
            {
                title: "Klinik Formlar",
                icon: "fas fa-user-injured",
                content: `
                    <div class="sub-section">
                        <h4 class="sub-section__title">İmmünkompetan Bireylerde</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Form</th>
                                    <th>Sıklık</th>
                                    <th>Bulgular</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Asemptomatik</b></td>
                                    <td>%80-90</td>
                                    <td>Belirti yok, latent enfeksiyon</td>
                                </tr>
                                <tr>
                                    <td><b>Lenfadenopati</b></td>
                                    <td>%10-20</td>
                                    <td>Servikal LAP (ağrısız), ateş, halsizlik</td>
                                </tr>
                                <tr>
                                    <td><b>Oküler</b></td>
                                    <td>Nadir (akkiz)</td>
                                    <td>Retinokorioidit (genellikle konjenital reaktivasyon)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">İmmünsüprese Hastalarda (AIDS, Transplantasyon)</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Form</th>
                                    <th>Bulgular</th>
                                    <th>Not</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Serebral Toksoplazmoz</b></td>
                                    <td>Baş ağrısı, konfüzyon, fokal nörolojik defisit, nöbet</td>
                                    <td>AIDS'te en sık SSS kitle lezyonu!</td>
                                </tr>
                                <tr>
                                    <td><b>Pnömoni</b></td>
                                    <td>Dispne, ateş, interstisyel infiltrat</td>
                                    <td>Kemik iliği nakli sonrası</td>
                                </tr>
                                <tr>
                                    <td><b>Dissemine</b></td>
                                    <td>Çoklu organ tutulumu, sepsis benzeri</td>
                                    <td>Yüksek mortalite</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>AIDS + Serebral Toksoplazmoz:</strong><br>
                        • CD4 <100 hücre/µL'de risk artar<br>
                        • <b>Halka şeklinde kontrast tutan</b> multipl beyin lezyonları<br>
                        • Bazal ganglia tutulumu sık<br>
                        • Seroloji IgG (+) (reaktivasyon - IgM genellikle negatif)<br>
                        • Ampirik tedaviye yanıt tanıyı destekler<br>
                        • Ayırıcı tanı: Primer SSS lenfoma</p>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Serebral Toksoplazmoz vs Primer SSS Lenfoma</p>
                        <p class="highlight-box__content">
                            <table class="article-table">
                                <thead>
                                    <tr>
                                        <th>Özellik</th>
                                        <th>Toksoplazmoz</th>
                                        <th>Lenfoma</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Lezyon sayısı</td>
                                        <td>Multipl</td>
                                        <td>Genellikle tek</td>
                                    </tr>
                                    <tr>
                                        <td>Toxo IgG</td>
                                        <td>Pozitif</td>
                                        <td>Negatif olabilir</td>
                                    </tr>
                                    <tr>
                                        <td>Ampirik tedavi</td>
                                        <td>Yanıt var (2 hafta)</td>
                                        <td>Yanıt yok</td>
                                    </tr>
                                    <tr>
                                        <td>EBV PCR (BOS)</td>
                                        <td>Negatif</td>
                                        <td>Pozitif</td>
                                    </tr>
                                </tbody>
                            </table>
                        </p>
                    </div>
                `
            },
            {
                title: "Gebelikte Toksoplazmoz",
                icon: "fas fa-baby",
                content: `
                    <p>Gebelikte <b>primer enfeksiyon</b>, transplasental geçişle fetüsü enfekte edebilir. Daha önce bağışık olan (IgG+) gebelerde risk yoktur.</p>

                    <div class="highlight-box">
                        <p class="highlight-box__title">🤰 Trimestere Göre Risk</p>
                        <p class="highlight-box__content">
                            <table class="article-table">
                                <thead>
                                    <tr>
                                        <th>Trimester</th>
                                        <th>Geçiş Oranı</th>
                                        <th>Hastalık Şiddeti</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><b>1. Trimester</b></td>
                                        <td>%10-15</td>
                                        <td><b>EN AĞIR</b> (ölüm, ağır sekeller)</td>
                                    </tr>
                                    <tr>
                                        <td><b>2. Trimester</b></td>
                                        <td>%25-30</td>
                                        <td>Orta (klasik triad)</td>
                                    </tr>
                                    <tr>
                                        <td><b>3. Trimester</b></td>
                                        <td>%60-80</td>
                                        <td>Hafif/Subklinik</td>
                                    </tr>
                                </tbody>
                            </table>
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Gebelikte Tarama Algoritması</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>IgG</th>
                                    <th>IgM</th>
                                    <th>Yorum</th>
                                    <th>Yaklaşım</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>(-)</td>
                                    <td>(-)</td>
                                    <td>Duyarlı (seronegatif)</td>
                                    <td>Hijyen eğitimi, 3 ayda bir tekrar tarama</td>
                                </tr>
                                <tr>
                                    <td>(+)</td>
                                    <td>(-)</td>
                                    <td>Geçirilmiş enfeksiyon (bağışık)</td>
                                    <td>Risk yok, takip gerekmez</td>
                                </tr>
                                <tr>
                                    <td>(+)</td>
                                    <td>(+)</td>
                                    <td>Akut veya geçirilmiş?</td>
                                    <td><b>AVİDİTE TESTİ GEREK!</b></td>
                                </tr>
                                <tr>
                                    <td>(-)</td>
                                    <td>(+)</td>
                                    <td>Çok erken akut veya yanlış pozitif</td>
                                    <td>2-3 hafta sonra tekrar, referans lab</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--warning">
                        <span class="alert-box__icon">⚠️</span>
                        <p class="alert-box__text"><strong>IgM Yanlış Pozitiflikleri:</strong><br>
                        • IgM aylarca-yıllarca pozitif kalabilir<br>
                        • Romatoid faktör interferansı<br>
                        • Çapraz reaksiyon<br>
                        <b>Bu nedenle IgG+/IgM+ durumunda AVİDİTE testi şart!</b></p>
                    </div>
                `
            },
            {
                title: "Avidite Testi Yorumu",
                icon: "fas fa-vial",
                content: `
                    <p><strong>IgG Avidite testi</strong>, antikorun antijene bağlanma gücünü ölçer. Enfeksiyonun ne zaman geçirildiğini tahmin etmeye yardımcı olur.</p>

                    <div class="highlight-box">
                        <p class="highlight-box__title">🔬 Avidite Prensibi</p>
                        <p class="highlight-box__content">
                            • <b>Erken enfeksiyon:</b> Düşük aviditeli IgG (zayıf bağlanma)<br>
                            • <b>Geç enfeksiyon (>4 ay):</b> Yüksek aviditeli IgG (güçlü bağlanma)<br><br>
                            Avidite matürasyonu: Enfeksiyon → Hafta/aylar içinde → Yüksek avidite
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Avidite Yorumlama Tablosu</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Avidite</th>
                                    <th>Değer</th>
                                    <th>Anlam</th>
                                    <th>1. Trimesterde Yorum</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>YÜKSEK</b></td>
                                    <td>>%60-70</td>
                                    <td>Enfeksiyon >4 ay önce</td>
                                    <td><span style="color:green"><b>GEBELİK ÖNCESİ - RİSK DÜŞÜK</b></span></td>
                                </tr>
                                <tr>
                                    <td><b>DÜŞÜK</b></td>
                                    <td><%30</td>
                                    <td>Enfeksiyon <4 ay</td>
                                    <td><span style="color:red"><b>AKUT - FETÜS RİSKİ VAR!</b></span></td>
                                </tr>
                                <tr>
                                    <td><b>ORTA (Equivocal)</b></td>
                                    <td>%30-60</td>
                                    <td>Belirsiz</td>
                                    <td>Referans laboratuvar, PCR</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>KRİTİK KURAL:</strong><br>
                        1. Trimesterde <b>YÜKSEK AVİDİTE</b> = Gebelik öncesi enfeksiyon = Fetüs için risk ÇOK DÜŞÜK<br><br>
                        1. Trimesterde <b>DÜŞÜK AVİDİTE</b> = Yakın zamanda enfeksiyon = <b>FETÜS RİSKİ!</b><br>
                        → Spiramisin başla, amniyosentez planla (18. haftadan sonra)</p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Gebelikte Yönetim Algoritması</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Durum</th>
                                    <th>Yaklaşım</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>IgG+/IgM+, Yüksek Avidite</b></td>
                                    <td>Eski enfeksiyon, fetüs riski düşük, rutin takip</td>
                                </tr>
                                <tr>
                                    <td><b>IgG+/IgM+, Düşük Avidite (1. Tri)</b></td>
                                    <td>Spiramisin başla → Amniyosentez (>18 hafta) → PCR</td>
                                </tr>
                                <tr>
                                    <td><b>Amniyotik sıvı PCR (+)</b></td>
                                    <td>Pirimethamin + Sülfadiazin + Folinik asit</td>
                                </tr>
                                <tr>
                                    <td><b>Amniyotik sıvı PCR (-)</b></td>
                                    <td>Spiramisin devam, yakın USG takibi</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Avidite Hafıza</p>
                        <p class="mnemonic-box__text">
                            <b>"YÜKSEK AVİDİTE = YÜKSEK GÜVENLİK"</b> → Eski enfeksiyon, fetüs güvende<br>
                            <b>"DÜŞÜK AVİDİTE = DÜŞÜK GÜVENLİK"</b> → Yeni enfeksiyon, tehlike!<br>
                            <b>"4 AY KURALI"</b> → Avidite matürasyonu ~4 ay
                        </p>
                    </div>
                `
            },
            {
                title: "Konjenital Toksoplazmoz",
                icon: "fas fa-baby-carriage",
                content: `
                    <p><strong>Konjenital toksoplazmoz</strong>, annenin gebelikte geçirdiği primer enfeksiyonun fetüse transplasental geçişi sonucu oluşur. %90'ı doğumda asemptomatiktir ancak tedavisiz sekeller gelişir.</p>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Klasik Triad (Sabin Triadı)</p>
                        <p class="highlight-box__content">
                            <b>1. Koryoretinit</b> (en sık bulgu, %80)<br>
                            <b>2. Hidrosefali</b><br>
                            <b>3. İntrakraniyal kalsifikasyonlar</b> (yaygın, dağınık)
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Konjenital Toksoplazmoz Bulguları</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Sistem</th>
                                    <th>Bulgular</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>SSS</b></td>
                                    <td>Hidrosefali, intrakraniyal kalsifikasyon, mikrosefali, nöbet</td>
                                </tr>
                                <tr>
                                    <td><b>Göz</b></td>
                                    <td>Koryoretinit (sıklıkla bilateral), mikroftalmi, strabismus</td>
                                </tr>
                                <tr>
                                    <td><b>Hepatosplenomegali</b></td>
                                    <td>Sarılık, karaciğer fonksiyon bozukluğu</td>
                                </tr>
                                <tr>
                                    <td><b>Hematolojik</b></td>
                                    <td>Trombositopeni, anemi, peteşi ("blueberry muffin")</td>
                                </tr>
                                <tr>
                                    <td><b>Genel</b></td>
                                    <td>IUGR, prematürite, ateş</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--warning">
                        <span class="alert-box__icon">⚠️</span>
                        <p class="alert-box__text"><strong>İntrakraniyal Kalsifikasyon Paterni:</strong><br>
                        • <b>Toxoplasma:</b> Yaygın, diffüz, dağınık (tüm parankimde)<br>
                        • <b>CMV:</b> Periventriküler (ventriküller çevresinde)<br>
                        Bu ayrım sınavda sık sorulur!</p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Yenidoğanda Tanı</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Test</th>
                                    <th>Yorum</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Toxo IgM/IgA (bebek)</b></td>
                                    <td>Pozitif = Konjenital enfeksiyon (maternal IgM plasenta geçmez)</td>
                                </tr>
                                <tr>
                                    <td><b>Toxo IgG (bebek)</b></td>
                                    <td>Maternal antikor geçişi olabilir, 6-12 ayda kaybolmalı</td>
                                </tr>
                                <tr>
                                    <td><b>IgG persiste (>12 ay)</b></td>
                                    <td>Konjenital enfeksiyon (bebek kendi antikorunu yapıyor)</td>
                                </tr>
                                <tr>
                                    <td><b>BOS PCR</b></td>
                                    <td>SSS tutulumu varsa pozitif</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Tedavi</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Pirimethamin + Sülfadiazin + Folinik asit</b> → 1 yıl tedavi</li>
                            <li class="feature-item"><b>Folinik asit (leucovorin):</b> Pirimethaminin kemik iliği toksisitesini önler</li>
                            <li class="feature-item"><b>Aktif koryoretinit varsa:</b> Kortikosteroid eklenebilir</li>
                            <li class="feature-item"><b>Takip:</b> Oftalmolojik muayene (retina detaşmanı riski ömür boyu)</li>
                        </ul>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Konjenital TORCH Karşılaştırması</p>
                        <p class="mnemonic-box__text">
                            <b>Toxo:</b> Diffüz kalsifikasyon + Koryoretinit + Hidrosefali<br>
                            <b>CMV:</b> PERİVENTRİKÜLER kalsifikasyon + İşitme kaybı<br>
                            <b>Rubella:</b> Katarakt + Sağırlık + Kardiyak defekt (PDA)<br>
                            <b>HSV:</b> Cilt vezikülleri + Ensefalit + Disseminasyon
                        </p>
                    </div>
                `
            },
            {
                title: "Tanı ve Tedavi Özeti",
                icon: "fas fa-stethoscope",
                content: `
                    <div class="sub-section">
                        <h4 class="sub-section__title">Tanı Yöntemleri</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Yöntem</th>
                                    <th>Kullanım</th>
                                    <th>Not</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Seroloji (IgG, IgM)</b></td>
                                    <td>Tarama, tanı</td>
                                    <td>En sık kullanılan</td>
                                </tr>
                                <tr>
                                    <td><b>IgG Avidite</b></td>
                                    <td>Enfeksiyon zamanlaması</td>
                                    <td>Gebelikte kritik</td>
                                </tr>
                                <tr>
                                    <td><b>PCR (kan, BOS, amniyotik sıvı)</b></td>
                                    <td>Aktif enfeksiyon, konjenital tanı</td>
                                    <td>En spesifik</td>
                                </tr>
                                <tr>
                                    <td><b>Histopatoloji</b></td>
                                    <td>Doku biopsisi</td>
                                    <td>Takizoit/kist görülmesi</td>
                                </tr>
                                <tr>
                                    <td><b>BT/MR</b></td>
                                    <td>Serebral toksoplazmoz</td>
                                    <td>Halka tutan lezyonlar</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Tedavi Şemaları</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Durum</th>
                                    <th>Tedavi</th>
                                    <th>Süre</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>İmmünkompetan (semptomatik)</b></td>
                                    <td>Genellikle tedavi gerekmez</td>
                                    <td>Self-limited</td>
                                </tr>
                                <tr>
                                    <td><b>Gebelikte akut enfeksiyon</b></td>
                                    <td>Spiramisin (fetüs enfekte değilse)</td>
                                    <td>Doğuma kadar</td>
                                </tr>
                                <tr>
                                    <td><b>Fetal enfeksiyon (+)</b></td>
                                    <td>Pirimethamin + Sülfadiazin + Folinik asit</td>
                                    <td>Doğuma kadar</td>
                                </tr>
                                <tr>
                                    <td><b>Konjenital</b></td>
                                    <td>Pirimethamin + Sülfadiazin + Folinik asit</td>
                                    <td>1 yıl</td>
                                </tr>
                                <tr>
                                    <td><b>AIDS - Serebral</b></td>
                                    <td>Pirimethamin + Sülfadiazin + Folinik asit</td>
                                    <td>6 hafta, sonra idame</td>
                                </tr>
                                <tr>
                                    <td><b>AIDS - Profilaksi</b></td>
                                    <td>TMP-SMX (CD4 <100, IgG+)</td>
                                    <td>CD4 >200 olana kadar</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>Pirimethamin Toksisitesi:</strong><br>
                        • Folat antagonisti → Kemik iliği supresyonu (pansitopeni)<br>
                        • <b>Folinik asit (leucovorin)</b> mutlaka eklenmeli!<br>
                        • Folik asit DEĞİL → Etkinliği azaltır<br>
                        • Gebelikte 1. trimesterde kontrendike (teratojenik)</p>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">🏥 Profilaksi Endikasyonları</p>
                        <p class="highlight-box__content">
                            <b>AIDS (CD4 <100 + Toxo IgG+):</b> TMP-SMX (PCP profilaksisi aynı zamanda toxo profilaksisi)<br>
                            <b>Transplantasyon (D+/R-):</b> TMP-SMX veya Pirimethamin<br>
                            <b>D:</b> Donör, <b>R:</b> Alıcı
                        </p>
                    </div>
                `
            },
            {
                title: "Sınav İçin Kritik Özet",
                icon: "fas fa-graduation-cap",
                content: `
                    <div class="highlight-box">
                        <p class="highlight-box__title">🎯 En Sık Sorulan Konular</p>
                        <p class="highlight-box__content">
                            1. <b>Kesin konak:</b> Kedi<br>
                            2. <b>Avidite yorumu:</b> Yüksek = Eski, Düşük = Yeni<br>
                            3. <b>Klasik triad:</b> Koryoretinit + Hidrosefali + İntrakraniyal kalsifikasyon<br>
                            4. <b>Kalsifikasyon paterni:</b> Toxo = Diffüz, CMV = Periventriküler<br>
                            5. <b>AIDS'te en sık SSS lezyonu:</b> Serebral toksoplazmoz
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Hızlı Karar Tablosu</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Senaryo</th>
                                    <th>Tanı/Yaklaşım</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Gebe, IgG(-), IgM(-)</td>
                                    <td>Seronegatif, hijyen eğitimi, tarama devam</td>
                                </tr>
                                <tr>
                                    <td>Gebe, IgG(+), IgM(-)</td>
                                    <td>Eski enfeksiyon, risk yok</td>
                                </tr>
                                <tr>
                                    <td>Gebe, IgG(+), IgM(+)</td>
                                    <td>AVİDİTE iste!</td>
                                </tr>
                                <tr>
                                    <td>Gebe, IgG(+), IgM(+), Yüksek avidite</td>
                                    <td>Eski enfeksiyon, risk düşük</td>
                                </tr>
                                <tr>
                                    <td>Gebe, IgG(+), IgM(+), Düşük avidite</td>
                                    <td>Akut! Spiramisin + Amniyosentez</td>
                                </tr>
                                <tr>
                                    <td>AIDS, CD4<100, halka tutan beyin lezyonu</td>
                                    <td>Serebral toksoplazmoz, ampirik tedavi</td>
                                </tr>
                                <tr>
                                    <td>Yenidoğan, diffüz kalsifikasyon + koryoretinit</td>
                                    <td>Konjenital toksoplazmoz</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Mega Hafıza Kodları</p>
                        <p class="mnemonic-box__text">
                            <b>"KEDİ = KESİN KONAK"</b> → Seksüel üreme sadece kedide<br>
                            <b>"YÜKSEK AVİDİTE = YÜKSEK RAHATLAMA"</b> → Gebe için iyi haber<br>
                            <b>"DÜŞÜK AVİDİTE = DÜŞÜK ŞANS"</b> → Fetüs riski yüksek<br>
                            <b>"DİFFÜZ = TOXO, PERİVENTRİKÜLER = CMV"</b> → Kalsifikasyon<br>
                            <b>"SABİN TRİADI = Koryoretinit + Hidrosefali + Kalsifikasyon"</b><br>
                            <b>"FOLİNİK asit (leucovorin), FOLİK asit DEĞİL!"</b>
                        </p>
                    </div>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>SINAV İÇİN KESİN BİL:</strong><br><br>
                            1. <b>Gebelikte IgG+/IgM+ =</b> AVİDİTE testi yaptır!<br>
                            2. <b>Yüksek avidite (>%60) =</b> Eski enfeksiyon, fetüs güvende<br>
                            3. <b>AIDS + beyin lezyonu =</b> Toxo vs Lenfoma (PCR, ampirik tedavi)<br>
                            4. <b>Konjenital =</b> Diffüz kalsifikasyon (CMV periventriküler!)<br>
                            5. <b>Tedavi =</b> Pirimethamin + Sülfadiazin + FOLİNİK asit
                        </p>
                    </div>

                    <ul class="feature-list">
                        <li><b>Soru tipi:</b> "Gebe, IgG+/IgM+, ne yaparsın?" → Avidite testi</li>
                        <li><b>Soru tipi:</b> "1. trimester, düşük avidite?" → Spiramisin başla, amniyosentez planla</li>
                        <li><b>Soru tipi:</b> "AIDS, CD4=50, halka tutan lezyon?" → Serebral toxo, ampirik tedavi</li>
                        <li><b>Soru tipi:</b> "Yenidoğan, diffüz kalsifikasyon?" → Konjenital toxo</li>
                        <li><b>Soru tipi:</b> "Pirimethamin yan etkisi önlemi?" → Folinik asit</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 13,
        category: "parazitoloji",
        title: "Leishmania ve Leishmaniasis",
        subtitle: "Visseral, Kutanöz ve Mukokutanöz Formlar",
        summary: "Leishmania türlerinin kapsamlı özeti. Kala-azar (visseral), Şark çıbanı (kutanöz), Espundia (mukokutanöz) formlarının karşılaştırması, vektör, tanı ve tedavi yaklaşımları.",
        tags: ["Leishmania", "Kala-azar", "Şark Çıbanı", "Phlebotomus", "LD Cisimciği", "Parazitoloji"],
        sections: [
            {
                title: "Genel Bilgiler",
                icon: "fas fa-mosquito",
                content: `
                    <p><strong>Leishmaniasis</strong>, <i>Leishmania</i> türlerinin neden olduğu, dişi tatarcık (kum sineği - <i>Phlebotomus</i>) ile bulaşan, deri ve iç organları tutan bir protozoon hastalığıdır.</p>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Temel Kavramlar</p>
                        <p class="highlight-box__content">
                            <b>Vektör:</b> Dişi Phlebotomus (Eski Dünya), Lutzomyia (Yeni Dünya)<br>
                            <b>Rezervuar:</b> Köpekler, kemirgenler, insanlar (türe göre değişir)<br><br>
                            <b>İki morfolojik form:</b><br>
                            • <b>Promastigot:</b> Kamçılı form, vektör sindirim sisteminde, kültürde<br>
                            • <b>Amastigot:</b> Kamçısız form, insanda makrofaj içinde (LD cisimciği)
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Klinik Formlar ve Etkenler</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Klinik Form</th>
                                    <th>Etken</th>
                                    <th>Coğrafya</th>
                                    <th>Türkiye</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Visseral (Kala-azar)</b></td>
                                    <td>L. donovani, L. infantum</td>
                                    <td>Hindistan, Afrika, Akdeniz</td>
                                    <td>L. infantum (Ege, Akdeniz)</td>
                                </tr>
                                <tr>
                                    <td><b>Kutanöz (Şark çıbanı)</b></td>
                                    <td>L. tropica, L. major</td>
                                    <td>Ortadoğu, Akdeniz</td>
                                    <td><b>En sık form!</b> (GAP bölgesi)</td>
                                </tr>
                                <tr>
                                    <td><b>Mukokutanöz (Espundia)</b></td>
                                    <td>L. braziliensis</td>
                                    <td>Güney Amerika</td>
                                    <td>Görülmez</td>
                                </tr>
                                <tr>
                                    <td><b>Diffüz Kutanöz</b></td>
                                    <td>L. amazonensis</td>
                                    <td>Amerika</td>
                                    <td>Görülmez</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--info">
                        <span class="alert-box__icon">ℹ️</span>
                        <p class="alert-box__text"><strong>Türkiye'de Leishmaniasis:</strong><br>
                        • <b>Kutanöz:</b> En sık (Şanlıurfa, Diyarbakır, Adana) - L. tropica<br>
                        • <b>Visseral:</b> Nadir, çocuklarda - L. infantum (köpek rezervuar)<br>
                        • Suriye göçü ile vaka sayısı arttı!</p>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Leishmania Hafıza</p>
                        <p class="mnemonic-box__text">
                            <b>"TROPİCA = TROPİKAL DERİ"</b> → Kutanöz, Şark çıbanı<br>
                            <b>"DONOVANİ = DONA (iç organlar)"</b> → Visseral, Kala-azar<br>
                            <b>"BRAZİLİENSİS = BRAZİL BURNU"</b> → Mukokutanöz, Espundia
                        </p>
                    </div>
                `
            },
            {
                title: "Visseral Leishmaniasis (Kala-azar)",
                icon: "fas fa-lungs",
                content: `
                    <p><strong>Visseral leishmaniasis (VL)</strong>, Leishmania'nın retiküloendotelyal sistemi (dalak, karaciğer, kemik iliği) tuttuğu, tedavisiz ölümcül seyreden formudur. <b>"Kala-azar"</b> = Siyah hastalık (Hintçe, ciltte hiperpigmentasyon).</p>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Klinik Bulgular</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Bulgu</th>
                                    <th>Özellik</th>
                                    <th>Mekanizma</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Hepatosplenomegali</b></td>
                                    <td>Masif splenomegali (göbek altına iner)</td>
                                    <td>RES tutulumu</td>
                                </tr>
                                <tr>
                                    <td><b>Ateş</b></td>
                                    <td>Uzamış, düzensiz, çift tepe (double quotidian)</td>
                                    <td>Kronik enfeksiyon</td>
                                </tr>
                                <tr>
                                    <td><b>Pansitopeni</b></td>
                                    <td>Anemi, lökopeni, trombositopeni</td>
                                    <td>Kemik iliği infiltrasyonu, hipersplenizm</td>
                                </tr>
                                <tr>
                                    <td><b>Hipergamaglobulinemi</b></td>
                                    <td>Poliklonal IgG artışı</td>
                                    <td>Kronik antijenik stimülasyon</td>
                                </tr>
                                <tr>
                                    <td><b>Hipoalbuminemi</b></td>
                                    <td>Ödem, asit</td>
                                    <td>Karaciğer disfonksiyonu</td>
                                </tr>
                                <tr>
                                    <td><b>Kilo kaybı</b></td>
                                    <td>Kaşeksi</td>
                                    <td>Kronik hastalık</td>
                                </tr>
                                <tr>
                                    <td><b>Hiperpigmentasyon</b></td>
                                    <td>Koyu cilt (Kala-azar)</td>
                                    <td>Adrenal tutulum?</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">🔬 Tanı</p>
                        <p class="highlight-box__content">
                            <b>Altın standart:</b> Kemik iliği/dalak aspiratında amastigot (LD cisimciği)<br>
                            <b>LD cisimciği:</b> Makrofaj içinde 2-4 µm, çekirdek + kinetoplast<br><br>
                            <b>Seroloji:</b> rK39 antijen testi (hızlı, duyarlı)<br>
                            <b>PCR:</b> En duyarlı, tür tayini yapabilir<br>
                            <b>Formol-jel testi (Napier):</b> Eski, hipergamaglobulinemi gösterir
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Tedavi</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>İlaç</th>
                                    <th>Özellik</th>
                                    <th>Yan Etki</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Lipozomal Amfoterisin B</b></td>
                                    <td>İlk seçenek (çoğu bölgede)</td>
                                    <td>Nefrotoksisite (konvansiyonelden az)</td>
                                </tr>
                                <tr>
                                    <td><b>Miltefosin</b></td>
                                    <td>Oral, Hindistan'da tercih</td>
                                    <td>GI yan etkiler, teratojenik</td>
                                </tr>
                                <tr>
                                    <td><b>Antimon bileşikleri</b></td>
                                    <td>Sodyum stiboglukonat, Meglumin antimonat</td>
                                    <td>Kardiyotoksisite (QT uzaması), pankreatit</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>VL + HIV Koenfeksiyonu:</strong><br>
                        • Atipik prezentasyon (cilt, GI tutulum)<br>
                        • Seroloji yanlış negatif olabilir<br>
                        • Tedaviye yanıt kötü, relaps sık<br>
                        • ART başlanmalı</p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Post-Kala-azar Dermal Leishmaniasis (PKDL)</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Ne zaman?</b> VL tedavisinden aylar-yıllar sonra</li>
                            <li class="feature-item"><b>Bulgu:</b> Yüzde maküler, papüler, nodüler lezyonlar</li>
                            <li class="feature-item"><b>Önemi:</b> Bulaş kaynağı (rezervuar)</li>
                            <li class="feature-item"><b>Coğrafya:</b> Özellikle Sudan, Hindistan</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "Kutanöz Leishmaniasis (Şark Çıbanı)",
                icon: "fas fa-allergies",
                content: `
                    <p><strong>Kutanöz leishmaniasis (KL)</strong>, Leishmania'nın deriye sınırlı kaldığı formdur. Türkiye'de en sık görülen leishmaniasis formudur. Genellikle kendiliğinden iyileşir ancak skar bırakır.</p>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Türkiye'de Kutanöz Leishmaniasis</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Özellik</th>
                                    <th>L. tropica (Antroponotik)</th>
                                    <th>L. major (Zoonotik)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Rezervuar</b></td>
                                    <td>İnsan</td>
                                    <td>Kemirgenler (gerbil)</td>
                                </tr>
                                <tr>
                                    <td><b>Ortam</b></td>
                                    <td>Kentsel (şehir)</td>
                                    <td>Kırsal (çöl kenarı)</td>
                                </tr>
                                <tr>
                                    <td><b>Lezyon</b></td>
                                    <td>Kuru tip, tek, yavaş ilerler</td>
                                    <td>Yaş tip, multipl, hızlı ülserleşir</td>
                                </tr>
                                <tr>
                                    <td><b>İyileşme</b></td>
                                    <td>1-2 yıl</td>
                                    <td>6 ay - 1 yıl</td>
                                </tr>
                                <tr>
                                    <td><b>Türkiye dağılımı</b></td>
                                    <td>Daha yaygın</td>
                                    <td>GAP bölgesi</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Lezyon Evrimi</p>
                        <p class="highlight-box__content">
                            <b>1. Papül:</b> Isırık yerinde (1-4 hafta)<br>
                            <b>2. Nodül:</b> Büyür, sertleşir<br>
                            <b>3. Ülser:</b> Merkezi ülserasyon, volkanik krater<br>
                            <b>4. Kabuklanma:</b> Kuru krut<br>
                            <b>5. Skar:</b> Atrofik skar (kalıcı)
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Tanı</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Yöntem</th>
                                    <th>Materyal</th>
                                    <th>Bulgu</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Yayma</b></td>
                                    <td>Lezyon kenarından kazıntı</td>
                                    <td>Amastigot (Giemsa)</td>
                                </tr>
                                <tr>
                                    <td><b>Biyopsi</b></td>
                                    <td>Deri punch biyopsi</td>
                                    <td>Granülom, amastigot</td>
                                </tr>
                                <tr>
                                    <td><b>Kültür</b></td>
                                    <td>NNN besiyeri</td>
                                    <td>Promastigot</td>
                                </tr>
                                <tr>
                                    <td><b>Montenegro testi</b></td>
                                    <td>İntradermal</td>
                                    <td>Gecikmiş tip hipersensitivite (aktif hastalıkta negatif)</td>
                                </tr>
                                <tr>
                                    <td><b>PCR</b></td>
                                    <td>Deri örneği</td>
                                    <td>Tür tayini</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Tedavi</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Yöntem</th>
                                    <th>Endikasyon</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>İzlem (bekle-gör)</b></td>
                                    <td>Tek, küçük (<5 cm), komplike olmayan</td>
                                </tr>
                                <tr>
                                    <td><b>Lokal tedavi</b></td>
                                    <td>İntralezyonel antimon, kriyoterapi, ısı tedavisi</td>
                                </tr>
                                <tr>
                                    <td><b>Sistemik tedavi</b></td>
                                    <td>Multipl, büyük, yüz/eklem, immünsüprese</td>
                                </tr>
                            </tbody>
                        </table>
                        <p><i>Sistemik: Antimon bileşikleri, Lipozomal AmB, Miltefosin</i></p>
                    </div>

                    <div class="alert-box alert-box--warning">
                        <span class="alert-box__icon">⚠️</span>
                        <p class="alert-box__text"><strong>Tedavi Endikasyonları:</strong><br>
                        • Yüz, kulak, eklem yakınında (skar riski)<br>
                        • Multipl/büyük lezyon (>5 cm)<br>
                        • 6 aydan uzun süren<br>
                        • İmmünsüprese hasta<br>
                        • L. braziliensis (mukokutanöz risk)</p>
                    </div>
                `
            },
            {
                title: "Mukokutanöz Leishmaniasis",
                icon: "fas fa-head-side-mask",
                content: `
                    <p><strong>Mukokutanöz leishmaniasis (ML)</strong>, Yeni Dünya'da (Güney Amerika) görülen, cilt lezyonundan yıllar sonra mukozaları (burun, ağız, farenks) tahrip eden, deforme edici bir formdur.</p>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Espundia Özellikleri</p>
                        <p class="highlight-box__content">
                            <b>Etken:</b> L. braziliensis (en sık), L. panamensis<br>
                            <b>Coğrafya:</b> Güney ve Orta Amerika (Brezilya, Peru, Bolivya)<br>
                            <b>Patogenez:</b> Primer kutanöz lezyondan lenfatik/hematojen yayılım<br>
                            <b>Latent periyod:</b> Aylar-yıllar (ortalama 2-3 yıl)
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Klinik Bulgular</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Tutulum</th>
                                    <th>Bulgular</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Nazal</b></td>
                                    <td>Burun tıkanıklığı, epistaksis, septum perforasyonu</td>
                                </tr>
                                <tr>
                                    <td><b>Oral</b></td>
                                    <td>Damak, dudak, dil ülserleri</td>
                                </tr>
                                <tr>
                                    <td><b>Farenks/Larenks</b></td>
                                    <td>Ses kısıklığı, yutma güçlüğü</td>
                                </tr>
                                <tr>
                                    <td><b>İleri evre</b></td>
                                    <td>"Tapir burnu" (burun çökmesi), yüz deformitesi</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>Önemli:</strong><br>
                        • L. braziliensis enfeksiyonu MUTLAKA tedavi edilmeli<br>
                        • Kutanöz lezyon iyileşse bile mukokutanöz gelişebilir<br>
                        • Self-limitasyon OLMAZ (KL'den farklı olarak)<br>
                        • Tedavi: Sistemik antimon veya Lipozomal AmB</p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Diffüz Kutanöz Leishmaniasis (DCL)</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Etken:</b> L. amazonensis, L. aethiopica</li>
                            <li class="feature-item"><b>Patogenez:</b> T hücre anerji (hücresel immün yanıt yok)</li>
                            <li class="feature-item"><b>Bulgular:</b> Yaygın nodüller (lepramatöz lepra benzeri)</li>
                            <li class="feature-item"><b>Özellik:</b> Montenegro testi negatif</li>
                            <li class="feature-item"><b>Prognoz:</b> Tedaviye dirençli, kronik</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "Tanı ve Laboratuvar",
                icon: "fas fa-microscope",
                content: `
                    <div class="sub-section">
                        <h4 class="sub-section__title">Tanı Yöntemleri Özeti</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Yöntem</th>
                                    <th>VL</th>
                                    <th>KL</th>
                                    <th>Not</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Mikroskopi</b></td>
                                    <td>Kİ, dalak aspirat</td>
                                    <td>Lezyon kazıntı/biyopsi</td>
                                    <td>Amastigot (LD cisimciği)</td>
                                </tr>
                                <tr>
                                    <td><b>Kültür</b></td>
                                    <td>NNN besiyeri</td>
                                    <td>NNN besiyeri</td>
                                    <td>Promastigot ürer</td>
                                </tr>
                                <tr>
                                    <td><b>Seroloji</b></td>
                                    <td><b>rK39 (en iyi)</b></td>
                                    <td>Genellikle negatif</td>
                                    <td>VL için duyarlı</td>
                                </tr>
                                <tr>
                                    <td><b>Montenegro (LST)</b></td>
                                    <td>Negatif (aktif)</td>
                                    <td>Pozitif (genellikle)</td>
                                    <td>Gecikmiş tip aşırı duyarlılık</td>
                                </tr>
                                <tr>
                                    <td><b>PCR</b></td>
                                    <td>Kan, Kİ</td>
                                    <td>Deri</td>
                                    <td>En duyarlı, tür tayini</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">🔬 LD Cisimciği (Leishman-Donovan Cisimciği)</p>
                        <p class="highlight-box__content">
                            <b>Görünüm:</b> Makrofaj içinde 2-4 µm yuvarlak/oval yapılar<br>
                            <b>İçerik:</b> Çekirdek + Kinetoplast (rod şeklinde, çekirdeğe bitişik)<br>
                            <b>Boyama:</b> Giemsa, Wright<br>
                            <b>Benzer:</b> Histoplasma (ama kinetoplastı yok!)
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Montenegro (Leishmanin) Testi</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Durum</th>
                                    <th>Sonuç</th>
                                    <th>Yorum</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Aktif VL</b></td>
                                    <td>NEGATİF</td>
                                    <td>Hücresel immünite baskılanmış</td>
                                </tr>
                                <tr>
                                    <td><b>İyileşmiş VL</b></td>
                                    <td>POZİTİF</td>
                                    <td>İmmünite gelişmiş</td>
                                </tr>
                                <tr>
                                    <td><b>Aktif KL</b></td>
                                    <td>POZİTİF (genellikle)</td>
                                    <td>Lokal immün yanıt var</td>
                                </tr>
                                <tr>
                                    <td><b>DCL</b></td>
                                    <td>NEGATİF</td>
                                    <td>T hücre anerji</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--info">
                        <span class="alert-box__icon">ℹ️</span>
                        <p class="alert-box__text"><strong>VL'de Laboratuvar Bulguları:</strong><br>
                        • Pansitopeni (hipersplenizm + Kİ infiltrasyonu)<br>
                        • <b>Hipergamaglobulinemi</b> (poliklonal) + <b>Hipoalbuminemi</b><br>
                        • Albumin/Globulin oranı tersine döner (<1)<br>
                        • Yüksek sedimentasyon</p>
                    </div>
                `
            },
            {
                title: "Sınav İçin Kritik Özet",
                icon: "fas fa-graduation-cap",
                content: `
                    <div class="highlight-box">
                        <p class="highlight-box__title">🎯 En Sık Sorulan Konular</p>
                        <p class="highlight-box__content">
                            1. <b>Vektör:</b> Phlebotomus (tatarcık/kum sineği)<br>
                            2. <b>LD cisimciği:</b> Makrofaj içi amastigot<br>
                            3. <b>Kala-azar triadı:</b> Ateş + Splenomegali + Pansitopeni<br>
                            4. <b>Türkiye'de en sık:</b> Kutanöz leishmaniasis (Şark çıbanı)<br>
                            5. <b>VL tanısı:</b> rK39 seroloji, Kİ aspiratında amastigot
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Formlar Karşılaştırma Tablosu</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Özellik</th>
                                    <th>Visseral (VL)</th>
                                    <th>Kutanöz (KL)</th>
                                    <th>Mukokutanöz (ML)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Etken</b></td>
                                    <td>L. donovani/infantum</td>
                                    <td>L. tropica/major</td>
                                    <td>L. braziliensis</td>
                                </tr>
                                <tr>
                                    <td><b>Tutulum</b></td>
                                    <td>RES (dalak, KC, Kİ)</td>
                                    <td>Deri</td>
                                    <td>Mukoza (burun, ağız)</td>
                                </tr>
                                <tr>
                                    <td><b>Prognoz</b></td>
                                    <td>Tedavisiz ölümcül</td>
                                    <td>Self-limited (skar kalır)</td>
                                    <td>Destrüktif, kronik</td>
                                </tr>
                                <tr>
                                    <td><b>Montenegro</b></td>
                                    <td>Negatif (aktif)</td>
                                    <td>Pozitif</td>
                                    <td>Pozitif</td>
                                </tr>
                                <tr>
                                    <td><b>Seroloji</b></td>
                                    <td>Pozitif (rK39)</td>
                                    <td>Genellikle negatif</td>
                                    <td>Değişken</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Mega Hafıza Kodları</p>
                        <p class="mnemonic-box__text">
                            <b>"KALA-AZAR = KARA + SİYAH + ÖLÜM"</b> → Visseral, ölümcül<br>
                            <b>"ŞARK ÇIBANI = TROPİKA + ŞANLIURFA"</b> → Kutanöz, Türkiye<br>
                            <b>"ESPUNDİA = ESPANYA değil BREZİLYA"</b> → Mukokutanöz<br>
                            <b>"LD CİSİMCİĞİ = LEİSHMAN-DONOVAN"</b> → Amastigot<br>
                            <b>"rK39 = VL tarama KRALI"</b> → Seroloji<br>
                            <b>"PHLEBOTOMUS = FLEB (damar) = KAN EMEN"</b> → Vektör
                        </p>
                    </div>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>SINAV İÇİN KESİN BİL:</strong><br><br>
                            1. <b>Vektör =</b> Phlebotomus (Lutzomyia - Yeni Dünya)<br>
                            2. <b>VL =</b> Splenomegali + Pansitopeni + Hipergamaglobulinemi<br>
                            3. <b>KL =</b> Şark çıbanı, skar bırakır, self-limited (genellikle)<br>
                            4. <b>ML =</b> L. braziliensis, MUTLAKA tedavi, burun çöker<br>
                            5. <b>Tanı =</b> Mikroskopide amastigot (LD cisimciği)
                        </p>
                    </div>

                    <ul class="feature-list">
                        <li><b>Soru tipi:</b> "Splenomegali + pansitopeni + hipergamaglobulinemi?" → Visseral leishmaniasis</li>
                        <li><b>Soru tipi:</b> "Şanlıurfa, yüzde ülsere lezyon?" → Kutanöz leishmaniasis (Şark çıbanı)</li>
                        <li><b>Soru tipi:</b> "Brezilya seyahati, burun septum perforasyonu?" → Mukokutanöz (Espundia)</li>
                        <li><b>Soru tipi:</b> "Makrofaj içinde kinetoplastlı parazit?" → Leishmania (LD cisimciği)</li>
                        <li><b>Soru tipi:</b> "VL taramasında kullanılan serolojik test?" → rK39</li>
                        <li><b>Soru tipi:</b> "Türkiye'de en sık leishmaniasis formu?" → Kutanöz</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 14,
        category: "parazitoloji",
        title: "Nematodlar (Yuvarlak Solucanlar)",
        subtitle: "Bağırsak ve Doku Nematodları",
        summary: "Nematodların (yuvarlak solucanlar) kapsamlı özeti. Bağırsak nematodları (Ascaris, Enterobius, Trichuris, Strongyloides, kancalı solucanlar) ve doku nematodları (Trichinella, Toxocara). Löffler sendromu, otoenfeksiyon ve tedavi yaklaşımları.",
        tags: ["Nematod", "Ascaris", "Enterobius", "Strongyloides", "Trichinella", "Löffler", "Helmint", "Parazitoloji"],
        sections: [
            {
                title: "Genel Bilgiler ve Sınıflandırma",
                icon: "fas fa-worm",
                content: `
                    <p><strong>Nematodlar</strong>, silindirik şekilli, segmentsiz, tam sindirim sistemine sahip yuvarlak solucanlardır. İnsanda enfeksiyon yapan nematodlar bağırsak ve doku nematodları olarak ikiye ayrılır.</p>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Nematod Özellikleri</p>
                        <p class="highlight-box__content">
                            <b>Şekil:</b> Silindirik, yuvarlak kesitli<br>
                            <b>Simetri:</b> Bilateral<br>
                            <b>Sindirim:</b> Tam (ağız + anüs)<br>
                            <b>Üreme:</b> Ayrı eşeyli (dişi genellikle daha büyük)<br>
                            <b>Vücut boşluğu:</b> Psödoselom (yalancı vücut boşluğu)
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Bağırsak Nematodları Sınıflandırması</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Parazit</th>
                                    <th>Bulaş Yolu</th>
                                    <th>Enfektif Form</th>
                                    <th>Önemli Özellik</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Ascaris lumbricoides</b></td>
                                    <td>Oral (toprak)</td>
                                    <td>Embriyonlu yumurta</td>
                                    <td>En büyük bağırsak nematodu</td>
                                </tr>
                                <tr>
                                    <td><b>Enterobius vermicularis</b></td>
                                    <td>Oral (el-ağız)</td>
                                    <td>Embriyonlu yumurta</td>
                                    <td>Perianal kaşıntı, gece</td>
                                </tr>
                                <tr>
                                    <td><b>Trichuris trichiura</b></td>
                                    <td>Oral (toprak)</td>
                                    <td>Embriyonlu yumurta</td>
                                    <td>Kırbaç solucanı, rektal prolapsus</td>
                                </tr>
                                <tr>
                                    <td><b>Strongyloides stercoralis</b></td>
                                    <td>Deriden (larva)</td>
                                    <td>Filariform larva</td>
                                    <td>OTOENFEKSİYON!</td>
                                </tr>
                                <tr>
                                    <td><b>Ancylostoma/Necator</b></td>
                                    <td>Deriden (larva)</td>
                                    <td>Filariform larva</td>
                                    <td>Kancalı solucan, anemi</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--info">
                        <span class="alert-box__icon">ℹ️</span>
                        <p class="alert-box__text"><strong>Larva Formları:</strong><br>
                        • <b>Rabditiform larva:</b> Non-enfektif, beslenen form (kısa özofagus)<br>
                        • <b>Filariform larva:</b> ENFEKTİF form (uzun özofagus) - Strongyloides, kancalı solucan</p>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Bulaş Yolu Hafıza</p>
                        <p class="mnemonic-box__text">
                            <b>"ORAL = AET"</b> → Ascaris, Enterobius, Trichuris (yumurta ile)<br>
                            <b>"DERİ = Strongyloides, Kancalı"</b> → Filariform larva ile<br>
                            <b>"FİLARİFORM = FİLTRE (deriden geçer)"</b>
                        </p>
                    </div>
                `
            },
            {
                title: "Ascaris lumbricoides",
                icon: "fas fa-bacon",
                content: `
                    <p><strong>Ascaris lumbricoides</strong>, en büyük ve en sık görülen bağırsak nematodudur. Dünyada ~1 milyar kişi enfektedir. Topraktan oral yolla bulaşır.</p>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Ascaris Özellikleri</p>
                        <p class="highlight-box__content">
                            <b>Boyut:</b> Dişi 20-40 cm, erkek 15-30 cm (EN BÜYÜK bağırsak nematodu)<br>
                            <b>Lokalizasyon:</b> İnce bağırsak (jejunum)<br>
                            <b>Ömür:</b> 1-2 yıl<br>
                            <b>Günlük yumurta:</b> ~200.000 (en fazla yumurta üreten)
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Yaşam Döngüsü</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Evre</th>
                                    <th>Lokalizasyon</th>
                                    <th>Olay</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>1. Yumurta alımı</b></td>
                                    <td>Ağız</td>
                                    <td>Embriyonlu yumurta yutulur</td>
                                </tr>
                                <tr>
                                    <td><b>2. Larva çıkışı</b></td>
                                    <td>İnce bağırsak</td>
                                    <td>Larva duvarı deler</td>
                                </tr>
                                <tr>
                                    <td><b>3. Karaciğer geçişi</b></td>
                                    <td>Portal sistem → KC</td>
                                    <td>Hepatomegali (nadir)</td>
                                </tr>
                                <tr>
                                    <td><b>4. Akciğer geçişi</b></td>
                                    <td>Pulmoner kapiller → Alveol</td>
                                    <td><b>LÖFFLER SENDROMU!</b></td>
                                </tr>
                                <tr>
                                    <td><b>5. Yutulma</b></td>
                                    <td>Bronş → Trakea → Farenks</td>
                                    <td>Öksürük ile yutulur</td>
                                </tr>
                                <tr>
                                    <td><b>6. Olgunlaşma</b></td>
                                    <td>İnce bağırsak</td>
                                    <td>Erişkin solucan, yumurtlama</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>Löffler Sendromu (Pulmoner Eozinofili):</strong><br>
                        • Larvanın akciğer geçişi sırasında<br>
                        • <b>Kuru öksürük, wheezing, dispne</b><br>
                        • <b>Eozinofili</b> + Geçici pulmoner infiltratlar (uçucu)<br>
                        • Self-limited (1-2 hafta)<br>
                        • Löffler yapan parazitler: <b>ANSAT</b> - Ascaris, Necator/Ancylostoma, Strongyloides, (Ascaris), Toxocara</p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Klinik Bulgular</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Komplikasyon</th>
                                    <th>Mekanizma</th>
                                    <th>Bulgu</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Bağırsak obstrüksiyonu</b></td>
                                    <td>Solucan yumağı</td>
                                    <td>Çocuklarda sık, akut karın</td>
                                </tr>
                                <tr>
                                    <td><b>Biliyer ascariasis</b></td>
                                    <td>Koledok/pankreas kanalına göç</td>
                                    <td>Kolik, kolanjit, pankreatit</td>
                                </tr>
                                <tr>
                                    <td><b>Apandisit</b></td>
                                    <td>Apendikse göç</td>
                                    <td>Akut apandisit</td>
                                </tr>
                                <tr>
                                    <td><b>Malnutrisyon</b></td>
                                    <td>Besin emilimi azalması</td>
                                    <td>Çocuklarda büyüme geriliği</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Tanı ve Tedavi</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Tanı:</b> Dışkıda yumurta (dekortike/kortike), erişkin solucan görülebilir</li>
                            <li class="feature-item"><b>Löffler döneminde:</b> Dışkı negatif! (henüz yumurtlama yok), balgamda larva</li>
                            <li class="feature-item"><b>Tedavi:</b> Albendazol 400 mg tek doz veya Mebendazol 500 mg tek doz</li>
                            <li class="feature-item"><b>Obstrüksiyon:</b> Piperazin (felç yapar, canlı çıkarır) veya cerrahi</li>
                        </ul>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Ascaris Hafıza</p>
                        <p class="mnemonic-box__text">
                            <b>"ASCARİS = AŞIRI BÜYÜK"</b> → En büyük bağırsak nematodu<br>
                            <b>"LÖFFLER = LARVAnın AKCİĞER GEÇİŞİ"</b> → Pulmoner eozinofili<br>
                            <b>"BİLİYER GÖÇ = BİLİYER KOLİK"</b> → Solucan kanal tıkar
                        </p>
                    </div>
                `
            },
            {
                title: "Enterobius vermicularis (Kıl Kurdu)",
                icon: "fas fa-moon",
                content: `
                    <p><strong>Enterobius vermicularis</strong> (kıl kurdu, oxiür), en sık görülen helmint enfeksiyonudur. Özellikle çocuklarda sık görülür. Perianal kaşıntı karakteristiktir.</p>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Enterobius Özellikleri</p>
                        <p class="highlight-box__content">
                            <b>Boyut:</b> Dişi 8-13 mm, erkek 2-5 mm (küçük, beyaz, iplik gibi)<br>
                            <b>Lokalizasyon:</b> Çekum, apendiks<br>
                            <b>Özellik:</b> Dişi GECE perianal bölgeye göç eder ve yumurtlar<br>
                            <b>Yumurta:</b> Asimetrik, D şeklinde, bir tarafı düz
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Yaşam Döngüsü ve Bulaş</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Özellik</th>
                                    <th>Açıklama</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Enfektif form</b></td>
                                    <td>Embriyonlu yumurta (6 saat içinde enfektif)</td>
                                </tr>
                                <tr>
                                    <td><b>Bulaş</b></td>
                                    <td>El-ağız (otoenfeksiyon), inhalasyon, fomit</td>
                                </tr>
                                <tr>
                                    <td><b>Retroenfeksiyon</b></td>
                                    <td>Perianal larvalar geriye göç eder</td>
                                </tr>
                                <tr>
                                    <td><b>Akciğer geçişi</b></td>
                                    <td><b>YOK!</b> (Löffler yapmaz)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Klinik Bulgular</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Perianal kaşıntı (pruritis ani):</b> GECE artar (dişi yumurtlamaya çıkar)</li>
                            <li class="feature-item"><b>Huzursuzluk, uyku bozukluğu:</b> Kaşıntıdan</li>
                            <li class="feature-item"><b>Vulvovajinit:</b> Kız çocuklarında göç</li>
                            <li class="feature-item"><b>Apandisit:</b> Nadir</li>
                            <li class="feature-item"><b>Eozinofili:</b> Genellikle YOK (doku invazyonu yok)</li>
                        </ul>
                    </div>

                    <div class="alert-box alert-box--warning">
                        <span class="alert-box__icon">⚠️</span>
                        <p class="alert-box__text"><strong>Tanı - Selofan Bant (Graham) Testi:</strong><br>
                        • Sabah, tuvalet ve banyo ÖNCESİ<br>
                        • Selofan bant perianal bölgeye yapıştırılır<br>
                        • Lam üzerine konur, mikroskopide yumurta aranır<br>
                        • <b>3 ardışık gün yapılmalı</b> (tek test %50 duyarlı)<br>
                        • Dışkı incelemesi YANLIŞ (yumurtalar dışkıda değil!)</p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Tedavi</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>İlaç</th>
                                    <th>Doz</th>
                                    <th>Not</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Mebendazol</b></td>
                                    <td>100 mg tek doz, 2 hafta sonra tekrar</td>
                                    <td>İlk seçenek</td>
                                </tr>
                                <tr>
                                    <td><b>Albendazol</b></td>
                                    <td>400 mg tek doz, 2 hafta sonra tekrar</td>
                                    <td>Alternatif</td>
                                </tr>
                                <tr>
                                    <td><b>Pirantel pamoat</b></td>
                                    <td>11 mg/kg tek doz</td>
                                    <td>Gebelikte tercih</td>
                                </tr>
                            </tbody>
                        </table>
                        <p><i>Tüm aile bireylerinin tedavisi + Yatak çarşafı/iç çamaşır yıkama önerilir</i></p>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Enterobius Hafıza</p>
                        <p class="mnemonic-box__text">
                            <b>"GECE KAŞINTI = ENTEROBİUS"</b> → Dişi gece yumurtlar<br>
                            <b>"SELOFAN BANT = SABAH ERKEN"</b> → Graham testi<br>
                            <b>"AİLE TEDAVİSİ"</b> → Herkes tedavi edilmeli<br>
                            <b>"LÖFFLER YOK"</b> → Akciğer geçişi yok
                        </p>
                    </div>
                `
            },
            {
                title: "Strongyloides stercoralis",
                icon: "fas fa-exclamation-triangle",
                content: `
                    <p><strong>Strongyloides stercoralis</strong>, otoenfeksiyon yapabilen, immünsüprese hastalarda hiperenfeksiyon sendromuna neden olabilen tehlikeli bir nematodtur.</p>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>Strongyloides Neden Önemli?</strong><br>
                        • <b>OTOENFEKSİYON:</b> Vücudu hiç terk etmeden yeniden enfekte eder<br>
                        • <b>HİPERENFEKSİYON:</b> İmmünsüpresyonda masif larva yükü → Sepsis, ölüm<br>
                        • <b>KRONİK:</b> Tedavisiz onlarca yıl devam eder<br>
                        • <b>HTLV-1:</b> Tedaviye dirençli strongyloidiasis</p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Yaşam Döngüsü</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Evre</th>
                                    <th>Açıklama</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>1. Deriden giriş</b></td>
                                    <td>Filariform larva (enfektif) topraktan deriye girer</td>
                                </tr>
                                <tr>
                                    <td><b>2. Akciğer geçişi</b></td>
                                    <td>Kan → AC → Alveol → Bronş (Löffler yapabilir)</td>
                                </tr>
                                <tr>
                                    <td><b>3. Bağırsak</b></td>
                                    <td>Yutulur → İnce bağırsak mukozasına gömülür</td>
                                </tr>
                                <tr>
                                    <td><b>4. Yumurtlama</b></td>
                                    <td>Dişi partenogenez ile yumurtlar (erkek yok insanda)</td>
                                </tr>
                                <tr>
                                    <td><b>5. Rabditiform larva</b></td>
                                    <td>Dışkıda atılır (tanı burada!)</td>
                                </tr>
                                <tr>
                                    <td><b>6. OTOENFEKSİYON</b></td>
                                    <td>Bağırsakta filariforme dönüşüm → Duvarı deler → Yeniden enfeksiyon</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">🔬 Otoenfeksiyon Mekanizması</p>
                        <p class="highlight-box__content">
                            <b>İnternal otoenfeksiyon:</b> Bağırsakta larva → Filariform → Duvar penetrasyonu → Akciğer → Bağırsak<br>
                            <b>Eksternal otoenfeksiyon:</b> Perianal deriden larva girişi<br><br>
                            <b>Sonuç:</b> Parazit asla vücudu terk etmeden çoğalır → Tedavisiz ONLARCA YIL enfeksiyon!
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Klinik Formlar</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Form</th>
                                    <th>Hasta Grubu</th>
                                    <th>Bulgular</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Asemptomatik</b></td>
                                    <td>İmmünkompetan</td>
                                    <td>Sadece eozinofili</td>
                                </tr>
                                <tr>
                                    <td><b>Kronik enfeksiyon</b></td>
                                    <td>İmmünkompetan</td>
                                    <td>GI semptomlar, larva currens (cilt)</td>
                                </tr>
                                <tr>
                                    <td><b>Hiperenfeksiyon</b></td>
                                    <td>İmmünsüprese (steroid!)</td>
                                    <td>Masif larva, pnömoni, ileus</td>
                                </tr>
                                <tr>
                                    <td><b>Dissemine</b></td>
                                    <td>İmmünsüprese</td>
                                    <td>Sepsis, menenjit, çoklu organ</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--warning">
                        <span class="alert-box__icon">⚠️</span>
                        <p class="alert-box__text"><strong>Larva Currens:</strong><br>
                        Strongyloides'e özgü dermatit. Perianal/kalça bölgesinden başlar, saatte 5-10 cm hızla ilerleyen ürtiker benzeri çizgiler. "Racing larva" (yarışan larva). Otoenfeksiyonun dermatolojik bulgusu.</p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Hiperenfeksiyon Risk Faktörleri</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Kortikosteroid tedavisi:</b> EN ÖNEMLİ risk faktörü!</li>
                            <li class="feature-item"><b>HTLV-1 enfeksiyonu:</b> Tedaviye direnç, relaps</li>
                            <li class="feature-item"><b>Hematolojik malignite</b></li>
                            <li class="feature-item"><b>Transplantasyon</b></li>
                            <li class="feature-item"><b>Malnutrisyon</b></li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Tanı ve Tedavi</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Tanı</th>
                                    <th>Tedavi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Dışkıda rabditiform larva (3-7 örnek gerekebilir)</td>
                                    <td rowspan="3"><b>İvermektin</b> 200 µg/kg × 2 gün<br>(ilk seçenek)<br><br>Alternatif: Albendazol<br><br>Hiperenfeksiyon: İvermektin uzatılmış</td>
                                </tr>
                                <tr>
                                    <td>Seroloji (ELISA) - tarama için</td>
                                </tr>
                                <tr>
                                    <td>Hiperenfeksiyonda: Balgam, BOS'ta larva</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Strongyloides Hafıza</p>
                        <p class="mnemonic-box__text">
                            <b>"STRONG = GÜÇLÜ OTOENFEKSİYON"</b> → Vücudu terk etmez<br>
                            <b>"STEROİD = STRONGYLOİDES TEHLİKE"</b> → Hiperenfeksiyon riski<br>
                            <b>"HTLV-1 = DİRENÇLİ"</b> → Tedaviye yanıtsız<br>
                            <b>"İVERMEKTİN = İLK SEÇİM"</b> → Tedavi
                        </p>
                    </div>
                `
            },
            {
                title: "Kancalı Solucanlar (Ancylostoma/Necator)",
                icon: "fas fa-tint",
                content: `
                    <p><strong>Kancalı solucanlar</strong> deriden giren, kan emen, demir eksikliği anemisine neden olan nematodlardır. Dünyada önemli morbidite nedenidir.</p>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Türler Karşılaştırması</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Özellik</th>
                                    <th>Ancylostoma duodenale</th>
                                    <th>Necator americanus</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Coğrafya</b></td>
                                    <td>Eski Dünya (Akdeniz, Asya)</td>
                                    <td>Yeni Dünya (Amerika), Afrika</td>
                                </tr>
                                <tr>
                                    <td><b>Ağız yapısı</b></td>
                                    <td>2 çift kesici diş</td>
                                    <td>Kesici plaklar</td>
                                </tr>
                                <tr>
                                    <td><b>Günlük kan kaybı</b></td>
                                    <td>0.2 mL/solucan</td>
                                    <td>0.03 mL/solucan</td>
                                </tr>
                                <tr>
                                    <td><b>Bulaş</b></td>
                                    <td>Deri + Oral</td>
                                    <td>Sadece deri</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Yaşam Döngüsü</p>
                        <p class="highlight-box__content">
                            <b>1.</b> Dışkıda yumurta → Toprakta embriyone → Rabditiform larva → <b>Filariform larva</b><br>
                            <b>2.</b> Filariform larva DERİDEN GİRER (yalın ayak)<br>
                            <b>3.</b> Kan → Akciğer → Alveol → Bronş → Yutma (Löffler yapabilir)<br>
                            <b>4.</b> İnce bağırsak → Mukozaya tutunma → KAN EMME
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Klinik Bulgular</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Evre</th>
                                    <th>Bulgu</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Deri girişi</b></td>
                                    <td>"Ground itch" - ayak tabanında kaşıntılı papüller</td>
                                </tr>
                                <tr>
                                    <td><b>Akciğer geçişi</b></td>
                                    <td>Löffler sendromu (hafif)</td>
                                </tr>
                                <tr>
                                    <td><b>Bağırsak</b></td>
                                    <td>Karın ağrısı, ishal, GI kanama</td>
                                </tr>
                                <tr>
                                    <td><b>Kronik</b></td>
                                    <td><b>Demir eksikliği anemisi</b> (hipokrom mikrositer)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>Kancalı Solucan = ANEMİ!</strong><br>
                        • Kronik kan kaybı → Demir eksikliği anemisi<br>
                        • Çocuklarda: Büyüme-gelişme geriliği, kognitif bozukluk<br>
                        • Gebelerde: Düşük doğum ağırlığı, maternal mortalite<br>
                        • Ağır enfeksiyonlarda: Protein kaybı, ödem, hipoalbuminemi</p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Kutanöz Larva Migrans (CLM)</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Etken:</b> Ancylostoma braziliense/caninum (köpek/kedi kancalısı)</li>
                            <li class="feature-item"><b>Patojenez:</b> İnsan yanlış konak, larva epidermiste ilerler ama derini geçemez</li>
                            <li class="feature-item"><b>Bulgu:</b> Serpentin (yılan gibi kıvrılan) kırmızı, kaşıntılı tünel</li>
                            <li class="feature-item"><b>Tedavi:</b> İvermektin veya Albendazol</li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Tanı ve Tedavi</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Tanı:</b> Dışkıda yumurta (ince kabuklu, 2-8 hücreli embriyolu)</li>
                            <li class="feature-item"><b>Not:</b> A. duodenale ve N. americanus yumurtaları birbirinden ayırt edilemez</li>
                            <li class="feature-item"><b>Tedavi:</b> Albendazol 400 mg tek doz veya Mebendazol 500 mg tek doz</li>
                            <li class="feature-item"><b>Ek:</b> Demir replasmanı (anemi düzeltimi)</li>
                        </ul>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Kancalı Solucan Hafıza</p>
                        <p class="mnemonic-box__text">
                            <b>"KANCALI = KAN EMİCİ"</b> → Anemi yapıcı<br>
                            <b>"GROUND ITCH = TOPRAK KAŞINTISI"</b> → Ayaktan giriş<br>
                            <b>"YALIN AYAK = YAKALANIRSIN"</b> → Bulaş yolu<br>
                            <b>"ANCYLOSTOMA = ANEMI"</b> → Ana komplikasyon
                        </p>
                    </div>
                `
            },
            {
                title: "Doku Nematodları - Trichinella ve Toxocara",
                icon: "fas fa-drumstick-bite",
                content: `
                    <div class="sub-section">
                        <h4 class="sub-section__title">Trichinella spiralis (Trişinelloz)</h4>
                        <p>Az pişmiş <b>domuz/yaban domuzu</b> eti ile bulaşan, kas tutulumu yapan nematod.</p>
                        
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Özellik</th>
                                    <th>Bilgi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Bulaş</b></td>
                                    <td>Az pişmiş et içindeki kist (larva)</td>
                                </tr>
                                <tr>
                                    <td><b>Yaşam döngüsü</b></td>
                                    <td>Bağırsakta erişkin → Larva doğurur → Kas dokusuna göç → KİST oluşumu</td>
                                </tr>
                                <tr>
                                    <td><b>Hedef doku</b></td>
                                    <td>Çizgili kaslar (diyafram, dil, masseter, interkostal, ekstraoküler)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Trichinella Klinik Triadı</p>
                        <p class="highlight-box__content">
                            <b>1. Periorbital ödem</b> (göz çevresinde şişlik)<br>
                            <b>2. Miyalji</b> (kas ağrısı)<br>
                            <b>3. Eozinofili</b><br><br>
                            + Ateş, başağrısı<br>
                            + Subungual/subkonjunktival kanama (splinter hemorrhage)
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Trichinella Tanı ve Tedavi</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Laboratuvar:</b> Eozinofili + Kas enzimleri ↑ (CK, LDH)</li>
                            <li class="feature-item"><b>Seroloji:</b> ELISA (1-2 hafta sonra pozitifleşir)</li>
                            <li class="feature-item"><b>Kesin tanı:</b> Kas biyopsisinde kapsüllü larva</li>
                            <li class="feature-item"><b>Tedavi:</b> Albendazol + Kortikosteroid (ağır vakalarda)</li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Toxocara (Visseral/Oküler Larva Migrans)</h4>
                        <p><b>Toxocara canis</b> (köpek) ve <b>T. cati</b> (kedi) askaridleri. İnsan yanlış konaktır, larvalar olgunlaşamaz ve dokularda göç eder.</p>
                        
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Form</th>
                                    <th>Yaş</th>
                                    <th>Bulgular</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>VLM (Visseral)</b></td>
                                    <td>Çocuklar (1-5 yaş)</td>
                                    <td>Ateş, hepatomegali, pulmoner infiltrat, <b>aşırı eozinofili (%50-90)</b></td>
                                </tr>
                                <tr>
                                    <td><b>OLM (Oküler)</b></td>
                                    <td>Büyük çocuk/erişkin</td>
                                    <td>Tek taraflı görme kaybı, strabismus, lökokori (retinoblastom ayırıcı tanı)</td>
                                </tr>
                                <tr>
                                    <td><b>Gizli (Covert)</b></td>
                                    <td>Tüm yaşlar</td>
                                    <td>Hafif semptomlar, kronik eozinofili</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--warning">
                        <span class="alert-box__icon">⚠️</span>
                        <p class="alert-box__text"><strong>Toxocara OLM vs VLM:</strong><br>
                        • <b>OLM'de</b> eozinofili ve seroloji düşük/negatif olabilir<br>
                        • <b>VLM'de</b> çok yüksek eozinofili tipik<br>
                        • OLM tek taraflı → Retinoblastom ekarte edilmeli<br>
                        • Bulaş: Köpek/kedi dışkısı ile kontamine toprakta oynama (Pica öyküsü)</p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Toxocara Tanı ve Tedavi</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Tanı:</b> Seroloji (ELISA), dışkıda yumurta YOKTUR (insan yanlış konak)</li>
                            <li class="feature-item"><b>VLM Tedavi:</b> Albendazol + Kortikosteroid</li>
                            <li class="feature-item"><b>OLM Tedavi:</b> Kortikosteroid (antihelmintik tartışmalı - inflamasyon artırabilir)</li>
                        </ul>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Doku Nematodları Hafıza</p>
                        <p class="mnemonic-box__text">
                            <b>"TRİSHİNELLA = TRİAD: Periorbital ödem + Miyalji + Eozinofili"</b><br>
                            <b>"DOMUZ ETİ = TRİSHİNELLA"</b><br>
                            <b>"TOXOCARA = TOY (çocuk) + KÖPEK"</b> → VLM<br>
                            <b>"OLM = Oküler = TEK GÖZ"</b>
                        </p>
                    </div>
                `
            },
            {
                title: "Löffler Sendromu ve Pulmoner Eozinofili",
                icon: "fas fa-lungs-virus",
                content: `
                    <p><strong>Löffler sendromu</strong>, parazit larvalarının akciğer geçişi sırasında oluşan, eozinofili ve geçici pulmoner infiltratlarla karakterize klinik tablodur.</p>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Löffler Sendromu Özellikleri</p>
                        <p class="highlight-box__content">
                            <b>Semptomlar:</b> Kuru öksürük, wheezing, hafif dispne, göğüs ağrısı<br>
                            <b>Laboratuvar:</b> Periferik EOZİNOFİLİ<br>
                            <b>Radyoloji:</b> Geçici pulmoner infiltratlar ("uçucu" - migratory)<br>
                            <b>Süre:</b> Self-limited, 1-2 hafta<br>
                            <b>Tedavi:</b> Genellikle gerekmez, ağır vakalarda steroid
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Löffler Yapan Parazitler</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Parazit</th>
                                    <th>Löffler Şiddeti</th>
                                    <th>Not</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Ascaris lumbricoides</b></td>
                                    <td>EN SIK ve EN ŞİDDETLİ</td>
                                    <td>Yoğun enfeksiyonda belirgin</td>
                                </tr>
                                <tr>
                                    <td><b>Strongyloides stercoralis</b></td>
                                    <td>Orta</td>
                                    <td>Hiperenfeksiyonda yaygın AC tutulumu</td>
                                </tr>
                                <tr>
                                    <td><b>Ancylostoma/Necator</b></td>
                                    <td>Hafif</td>
                                    <td>Genellikle subklinik</td>
                                </tr>
                                <tr>
                                    <td><b>Toxocara</b></td>
                                    <td>Değişken</td>
                                    <td>VLM'de AC tutulumu olabilir</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>Löffler Döneminde Tanı Zorluğu:</strong><br>
                        • Larvalar henüz bağırsakta erişkin olmamış<br>
                        • <b>Dışkıda yumurta YOKTUR!</b><br>
                        • Balgamda larva görülebilir (nadiren)<br>
                        • Tanı: Klinik şüphe + eozinofili + geçici infiltrat<br>
                        • 6-8 hafta sonra dışkı kontrolü</p>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Löffler Yapan Parazitler - "ANSAT"</p>
                        <p class="mnemonic-box__text">
                            <b>A</b> - Ascaris<br>
                            <b>N</b> - Necator (kancalı)<br>
                            <b>S</b> - Strongyloides<br>
                            <b>A</b> - Ancylostoma (kancalı)<br>
                            <b>T</b> - Toxocara<br><br>
                            <i>Enterobius ve Trichuris AKCİĞER GEÇİŞİ YAPMAZ!</i>
                        </p>
                    </div>
                `
            },
            {
                title: "Sınav İçin Kritik Özet",
                icon: "fas fa-graduation-cap",
                content: `
                    <div class="highlight-box">
                        <p class="highlight-box__title">🎯 En Sık Sorulan Konular</p>
                        <p class="highlight-box__content">
                            1. <b>Löffler sendromu:</b> Ascaris, Strongyloides, kancalı (akciğer geçişi)<br>
                            2. <b>Otoenfeksiyon:</b> Strongyloides (tehlikeli!)<br>
                            3. <b>Gece kaşıntısı:</b> Enterobius (selofan bant ile tanı)<br>
                            4. <b>Demir eksikliği anemisi:</b> Kancalı solucan<br>
                            5. <b>Periorbital ödem + miyalji + eozinofili:</b> Trichinella
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Nematodlar Hızlı Karşılaştırma</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Parazit</th>
                                    <th>Bulaş</th>
                                    <th>Tanı</th>
                                    <th>Ayırıcı Özellik</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Ascaris</b></td>
                                    <td>Oral (yumurta)</td>
                                    <td>Dışkıda yumurta</td>
                                    <td>En büyük, biliyer göç</td>
                                </tr>
                                <tr>
                                    <td><b>Enterobius</b></td>
                                    <td>Oral (yumurta)</td>
                                    <td>Selofan bant</td>
                                    <td>Gece kaşıntı</td>
                                </tr>
                                <tr>
                                    <td><b>Strongyloides</b></td>
                                    <td>Deri (larva)</td>
                                    <td>Dışkıda larva</td>
                                    <td>Otoenfeksiyon</td>
                                </tr>
                                <tr>
                                    <td><b>Kancalı</b></td>
                                    <td>Deri (larva)</td>
                                    <td>Dışkıda yumurta</td>
                                    <td>Anemi</td>
                                </tr>
                                <tr>
                                    <td><b>Trichinella</b></td>
                                    <td>Oral (et)</td>
                                    <td>Seroloji, biyopsi</td>
                                    <td>Periorbital ödem</td>
                                </tr>
                                <tr>
                                    <td><b>Toxocara</b></td>
                                    <td>Oral (yumurta)</td>
                                    <td>Seroloji</td>
                                    <td>VLM, OLM</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Mega Hafıza Kodları</p>
                        <p class="mnemonic-box__text">
                            <b>"ASCARİS = EN AŞIRI BÜYÜK"</b><br>
                            <b>"ENTEROBİUS = GECE ENTRİKASI (kaşıntı)"</b><br>
                            <b>"STRONGYLOİDES = STRONG OTOENFEKSİYON"</b><br>
                            <b>"KANCALI = KAN + ANEMİ"</b><br>
                            <b>"TRİSHİNELLA = TRİAD (ödem-miyalji-eozinofili)"</b><br>
                            <b>"LÖFFLER = ANSAT (Ascaris-Necator-Strongyloides-Ancylostoma-Toxocara)"</b>
                        </p>
                    </div>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>SINAV İÇİN KESİN BİL:</strong><br><br>
                            1. <b>Strongyloides + Steroid =</b> HİPERENFEKSİYON → Sepsis, ölüm<br>
                            2. <b>Enterobius tanısı =</b> Selofan bant (Graham), dışkı DEĞİL<br>
                            3. <b>Löffler =</b> Akciğer geçişi, geçici infiltrat, eozinofili<br>
                            4. <b>Kancalı solucan =</b> Demir eksikliği anemisi, deriden giriş<br>
                            5. <b>Tedavi =</b> Albendazol/Mebendazol (çoğu), İvermektin (Strongyloides)
                        </p>
                    </div>

                    <ul class="feature-list">
                        <li><b>Soru tipi:</b> "Çocuk, gece perianal kaşıntı?" → Enterobius, selofan bant testi</li>
                        <li><b>Soru tipi:</b> "Pulmoner infiltrat + eozinofili + dışkı negatif?" → Löffler, Ascaris</li>
                        <li><b>Soru tipi:</b> "Steroid başlanacak hasta, hangi parazit taranmalı?" → Strongyloides</li>
                        <li><b>Soru tipi:</b> "Hipokrom mikrositer anemi, eozinofili, yalın ayak?" → Kancalı solucan</li>
                        <li><b>Soru tipi:</b> "Domuz eti, periorbital ödem, miyalji?" → Trichinella</li>
                        <li><b>Soru tipi:</b> "Köpekle oynayan çocuk, hepatomegali, aşırı eozinofili?" → Toxocara VLM</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 15,
        category: "parazitoloji",
        title: "Cestodlar (Şerit Solucanlar)",
        subtitle: "Taenia, Echinococcus, Diphyllobothrium",
        summary: "Cestodların (şerit solucanlar) kapsamlı özeti. Taenia saginata ve solium (tenya, nörosistiserkoz), Echinococcus granulosus (kist hidatik), Diphyllobothrium latum (B12 eksikliği), Hymenolepis nana. Yaşam döngüleri, tanı ve tedavi yaklaşımları.",
        tags: ["Cestod", "Taenia", "Tenya", "Echinococcus", "Kist Hidatik", "Nörosistiserkoz", "Diphyllobothrium", "Parazitoloji"],
        sections: [
            {
                title: "Genel Bilgiler ve Sınıflandırma",
                icon: "fas fa-tape",
                content: `
                    <p><strong>Cestodlar</strong> (şerit solucanlar), yassı, segmentli, sindirim sistemi OLMAYAN helmintlerdir. Besinleri tegüment (dış yüzey) aracılığıyla emerler.</p>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Cestod Genel Anatomisi</p>
                        <p class="highlight-box__content">
                            <b>Skoleks:</b> Baş kısmı, tutunma organları (vantuz, kanca)<br>
                            <b>Boyun:</b> Proglottid üretim bölgesi<br>
                            <b>Strobila:</b> Proglottid zinciri (vücut)<br>
                            <b>Proglottid:</b> Her segment hermafrodit (hem erkek hem dişi)<br>
                            <b>Gravid proglottid:</b> Yumurta dolu olgun segment
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">İnsanda Önemli Cestodlar</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Parazit</th>
                                    <th>Ara Konak</th>
                                    <th>Bulaş</th>
                                    <th>Hastalık</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Taenia saginata</b></td>
                                    <td>Sığır</td>
                                    <td>Az pişmiş sığır eti</td>
                                    <td>Bağırsak tenyası</td>
                                </tr>
                                <tr>
                                    <td><b>Taenia solium</b></td>
                                    <td>Domuz</td>
                                    <td>Az pişmiş domuz eti / Yumurta</td>
                                    <td>Bağırsak tenyası / <b>Sistiserkoz</b></td>
                                </tr>
                                <tr>
                                    <td><b>Echinococcus granulosus</b></td>
                                    <td>İnsan (ara konak!)</td>
                                    <td>Köpek dışkısı (yumurta)</td>
                                    <td><b>Kist Hidatik</b></td>
                                </tr>
                                <tr>
                                    <td><b>Diphyllobothrium latum</b></td>
                                    <td>Balık</td>
                                    <td>Çiğ/az pişmiş tatlı su balığı</td>
                                    <td>B12 eksikliği</td>
                                </tr>
                                <tr>
                                    <td><b>Hymenolepis nana</b></td>
                                    <td>Yok (direkt)</td>
                                    <td>Oral (yumurta)</td>
                                    <td>Cüce tenya</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--info">
                        <span class="alert-box__icon">ℹ️</span>
                        <p class="alert-box__text"><strong>Önemli Kavramlar:</strong><br>
                        • <b>Sistiserkus:</b> Larva formu (tek skoleksli kist) - T. solium<br>
                        • <b>Hidatik kist:</b> Larva formu (çok skoleksli kist) - Echinococcus<br>
                        • <b>Pleroserkoid:</b> Larva formu - Diphyllobothrium<br>
                        • <b>Korasidyum:</b> Suda yüzen larva - Diphyllobothrium</p>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Cestod Hafıza</p>
                        <p class="mnemonic-box__text">
                            <b>"CESTOD = SİNDİRİM YOK"</b> → Besin tegümentten emilir<br>
                            <b>"SAGİNATA = SIĞIR"</b> (S harfi)<br>
                            <b>"SOLİUM = SUCULUK (domuz)"</b> → Sistiserkoz!<br>
                            <b>"ECHİNOCOCCUS = KÖPEK + KİST"</b>
                        </p>
                    </div>
                `
            },
            {
                title: "Taenia saginata ve Taenia solium",
                icon: "fas fa-bacon",
                content: `
                    <p><strong>Taenia</strong> türleri en sık görülen şerit solucanlardır. T. saginata sığır, T. solium domuz ile bulaşır. T. solium ayrıca sistiserkoz yapabilir.</p>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Taenia Türleri Karşılaştırması</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Özellik</th>
                                    <th>T. saginata</th>
                                    <th>T. solium</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Ara konak</b></td>
                                    <td>Sığır</td>
                                    <td>Domuz</td>
                                </tr>
                                <tr>
                                    <td><b>Boyut</b></td>
                                    <td>4-12 metre (daha uzun)</td>
                                    <td>2-8 metre</td>
                                </tr>
                                <tr>
                                    <td><b>Skoleks</b></td>
                                    <td>4 vantuz, KANCA YOK</td>
                                    <td>4 vantuz + KANCALAR (rostellum)</td>
                                </tr>
                                <tr>
                                    <td><b>Proglottid</b></td>
                                    <td>>13 uterus dalı</td>
                                    <td><13 uterus dalı</td>
                                </tr>
                                <tr>
                                    <td><b>Gravid proglottid</b></td>
                                    <td>Aktif olarak çıkar</td>
                                    <td>Pasif olarak çıkar</td>
                                </tr>
                                <tr>
                                    <td><b>Sistiserkoz</b></td>
                                    <td><b>YAPMAZ</b></td>
                                    <td><b>YAPAR!</b></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Taenia Yaşam Döngüsü</p>
                        <p class="highlight-box__content">
                            <b>1.</b> İnsan (kesin konak) → Gravid proglottid/yumurta dışkıda<br>
                            <b>2.</b> Sığır/Domuz (ara konak) → Yumurtayı yer<br>
                            <b>3.</b> Onkosfer → Kasa göç → <b>Sistiserkus</b> (larva)<br>
                            <b>4.</b> İnsan az pişmiş et yer → Sistiserkus<br>
                            <b>5. </b> Bağırsakta skoleks açılır → Erişkin solucan
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Bağırsak Tenyası Kliniği</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Çoğu asemptomatik</b></li>
                            <li class="feature-item">Karın ağrısı, bulantı, iştahsızlık</li>
                            <li class="feature-item">Dışkıda/iç çamaşırda proglottid görme (hasta şikayeti)</li>
                            <li class="feature-item">T. saginata: Proglottidler hareket eder (aktif çıkış)</li>
                            <li class="feature-item">Hafif eozinofili olabilir</li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Tanı ve Tedavi</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Tanı</th>
                                    <th>Tedavi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Dışkıda yumurta (iki tür ayırt edilemez)</td>
                                    <td rowspan="3"><b>Prazikuantel</b> 10 mg/kg tek doz<br>(ilk seçenek)<br><br>Alternatif: Niklozamid<br><br><b>Skoleks aranmalı!</b></td>
                                </tr>
                                <tr>
                                    <td>Proglottid incelemesi (uterus dalı sayısı)</td>
                                </tr>
                                <tr>
                                    <td>Selofan bant (yumurta perianal)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Taenia Hafıza</p>
                        <p class="mnemonic-box__text">
                            <b>"SAGİNATA = Safe (sistiserkoz yapmaz)"</b><br>
                            <b>"SOLİUM = Sinister (sistiserkoz YAPAR)"</b><br>
                            <b>"KANCA = SOLİUM"</b> (saginata kancasız)<br>
                            <b>"UTERUS DALI: Saginata >13, Solium <13"</b>
                        </p>
                    </div>
                `
            },
            {
                title: "Nörosistiserkoz (T. solium)",
                icon: "fas fa-brain",
                content: `
                    <p><strong>Sistiserkoz</strong>, T. solium yumurtalarının insana bulaşması sonucu oluşan doku enfeksiyonudur. En tehlikeli formu <b>nörosistiserkoz</b>'dur.</p>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>Sistiserkoz Nasıl Oluşur?</strong><br>
                        • İnsan <b>YUMURTA</b> yutar (et DEĞİL!)<br>
                        • Kaynaklar: Kontamine gıda/su, el-ağız, otoenfeksiyon<br>
                        • Onkosfer bağırsak duvarını deler → Kan → Dokulara<br>
                        • <b>En sık yerleşim:</b> SSS, göz, kas, deri altı<br><br>
                        ⚠️ <b>T. saginata sistiserkoz YAPMAZ!</b></p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Nörosistiserkoz Klinik</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Bulgu</th>
                                    <th>Sıklık</th>
                                    <th>Açıklama</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Epileptik nöbet</b></td>
                                    <td>%70-90</td>
                                    <td>EN SIK semptom, fokal veya jeneralize</td>
                                </tr>
                                <tr>
                                    <td><b>Başağrısı</b></td>
                                    <td>%40</td>
                                    <td>Kronik, intermittan</td>
                                </tr>
                                <tr>
                                    <td><b>Hidrosefali</b></td>
                                    <td>Değişken</td>
                                    <td>Ventriküler kist, BOS akışı tıkanır</td>
                                </tr>
                                <tr>
                                    <td><b>Fokal defisit</b></td>
                                    <td>Değişken</td>
                                    <td>Lokalizasyona göre</td>
                                </tr>
                                <tr>
                                    <td><b>Menenjit</b></td>
                                    <td>Nadir</td>
                                    <td>Bazal araknoidit</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">🔬 Sistiserkoz Evreleri (Görüntüleme)</p>
                        <p class="highlight-box__content">
                            <b>1. Veziküler:</b> Canlı larva, minimal ödem, asemptomatik olabilir<br>
                            <b>2. Kolloidal:</b> Larva ölüyor, ödem ↑, semptomlar başlar<br>
                            <b>3. Granüler-nodüler:</b> Kist çöküyor, kalsifikasyon başlıyor<br>
                            <b>4. Kalsifiye:</b> Tamamen kalsifiye, "ölü" kist<br><br>
                            <i>Kalsifiye lezyonlar bile nöbet odağı olabilir!</i>
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Tanı</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Görüntüleme:</b> MR > BT (kist, skoleks "dot sign", kalsifikasyon)</li>
                            <li class="feature-item"><b>Seroloji:</b> EITB (Enzyme-linked immunoelectrotransfer blot) - en spesifik</li>
                            <li class="feature-item"><b>BOS:</b> Lenfositik pleositoz, protein ↑, glukoz ↓/normal, eozinofili olabilir</li>
                            <li class="feature-item"><b>Dışkı:</b> Bağırsak enfeksiyonu varsa yumurta/proglottid</li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Tedavi</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Durum</th>
                                    <th>Tedavi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Canlı kist (veziküler)</b></td>
                                    <td>Albendazol ± Prazikuantel + Kortikosteroid + Antiepileptik</td>
                                </tr>
                                <tr>
                                    <td><b>Kalsifiye kist</b></td>
                                    <td>Sadece antiepileptik (antihelmintik gereksiz)</td>
                                </tr>
                                <tr>
                                    <td><b>Ventriküler kist</b></td>
                                    <td>Endoskopik/cerrahi çıkarım</td>
                                </tr>
                                <tr>
                                    <td><b>Subaraknoid kist</b></td>
                                    <td>Uzun süreli antihelmintik + steroid</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--warning">
                        <span class="alert-box__icon">⚠️</span>
                        <p class="alert-box__text"><strong>Tedavi Uyarıları:</strong><br>
                        • Antihelmintik → Larva ölümü → İnflamasyon ↑ → <b>Nöbet/ödem artabilir</b><br>
                        • <b>KORTİKOSTEROİD</b> mutlaka verilmeli (antihelmintikten 1-2 gün önce başla)<br>
                        • Göz tutulumunda antihelmintik VERİLMEZ (inflamasyon körlük yapabilir)</p>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Nörosistiserkoz Hafıza</p>
                        <p class="mnemonic-box__text">
                            <b>"NÖBET = NÖROSİSTİSERKOZ #1"</b> → En sık semptom<br>
                            <b>"YUMURTA = SİSTİSERKOZ"</b> (et değil!)<br>
                            <b>"DOT SIGN = SKOLEKS"</b> → MR'da kist içinde nokta<br>
                            <b>"STEROİD ÖNCE"</b> → Antihelmintikten önce başla
                        </p>
                    </div>
                `
            },
            {
                title: "Echinococcus (Kist Hidatik)",
                icon: "fas fa-disease",
                content: `
                    <p><strong>Echinococcus granulosus</strong>, köpeklerin bağırsak paraziti olup insanda <b>kist hidatik</b> (hidatidoz) yapar. Türkiye'de endemiktir (hayvancılık bölgeleri).</p>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Echinococcus Yaşam Döngüsü</p>
                        <p class="highlight-box__content">
                            <b>Kesin konak:</b> KÖPEK (bağırsakta erişkin solucan)<br>
                            <b>Ara konak:</b> Koyun, keçi, sığır, İNSAN<br><br>
                            <b>1.</b> Köpek dışkısında yumurta<br>
                            <b>2.</b> İnsan/koyun yumurta yutar<br>
                            <b>3.</b> Onkosfer → Kan → Organ (KC %70, AC %20)<br>
                            <b>4.</b> Hidatik kist gelişir (yıllar içinde büyür)<br>
                            <b>5.</b> Köpek enfekte organ yerse → Döngü tamamlanır
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Kist Hidatik Anatomisi</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Yapı</th>
                                    <th>Özellik</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Perikist (adventisya)</b></td>
                                    <td>Konak reaksiyonu, fibröz kapsül</td>
                                </tr>
                                <tr>
                                    <td><b>Laminer (ektokist)</b></td>
                                    <td>Parazit kaynaklı, aselüler, beyaz tabaka</td>
                                </tr>
                                <tr>
                                    <td><b>Germinal (endokist)</b></td>
                                    <td>En iç tabaka, ÜRETİCİ tabaka</td>
                                </tr>
                                <tr>
                                    <td><b>Hidatik sıvı</b></td>
                                    <td>Berrak, su gibi, antijenik</td>
                                </tr>
                                <tr>
                                    <td><b>Protoskoleks</b></td>
                                    <td>Kum tanesi görünümü (hidatik kum)</td>
                                </tr>
                                <tr>
                                    <td><b>Kız kistler</b></td>
                                    <td>Ana kist içinde yeni kistler</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Klinik Bulgular</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Lokalizasyon</th>
                                    <th>Bulgular</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Karaciğer (%70)</b></td>
                                    <td>Sağ üst kadran ağrısı, hepatomegali, sarılık (biliyer bası/rüptür)</td>
                                </tr>
                                <tr>
                                    <td><b>Akciğer (%20)</b></td>
                                    <td>Öksürük, göğüs ağrısı, hemoptizi, "tuzlu su" balgam (rüptür)</td>
                                </tr>
                                <tr>
                                    <td><b>Diğer (%10)</b></td>
                                    <td>Dalak, böbrek, beyin, kemik, kalp</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>Kist Rüptürü Komplikasyonları:</strong><br>
                        • <b>ANAFİLAKSİ:</b> Hidatik sıvı son derece antijenik → Şok, ölüm<br>
                        • <b>Sekonder ekinokokkoz:</b> Protoskoleksler yayılır → Yeni kistler<br>
                        • <b>Biliyer rüptür:</b> Kolanjit, sarılık<br>
                        • <b>Bronşiyal rüptür:</b> Tuzlu su tadında balgam, membran ekspektorasyonu<br><br>
                        ⚠️ <b>Kiste ASPİRASYON/BİYOPSİ yapılmadan önce görüntüleme ile hidatik kist ekarte edilmeli!</b></p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Tanı</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Görüntüleme:</b> USG/BT - kız kistler, membran ayrılması, kalsifikasyon</li>
                            <li class="feature-item"><b>USG WHO Sınıflaması:</b> CE1-CE5 (aktiften inaktife)</li>
                            <li class="feature-item"><b>Seroloji:</b> ELISA, indirekt hemaglütinasyon (duyarlılık değişken)</li>
                            <li class="feature-item"><b>Eozinofili:</b> Rüptür olmadıkça genellikle YOKTUR</li>
                            <li class="feature-item"><b>Casoni testi:</b> Artık kullanılmıyor (anamnestik değer)</li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Tedavi - PAIR ve Cerrahi</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Yöntem</th>
                                    <th>Endikasyon</th>
                                    <th>Açıklama</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>PAIR</b></td>
                                    <td>CE1, CE3a kistler</td>
                                    <td><b>P</b>unksiyon, <b>A</b>spirasyon, <b>I</b>njeksiyon (skolisidal), <b>R</b>easpirasyon</td>
                                </tr>
                                <tr>
                                    <td><b>Cerrahi</b></td>
                                    <td>Büyük, komplike kist</td>
                                    <td>Kistektomi, perikistektomi, hepatektomi</td>
                                </tr>
                                <tr>
                                    <td><b>Watch & Wait</b></td>
                                    <td>CE4, CE5 (inaktif)</td>
                                    <td>İzlem yeterli</td>
                                </tr>
                                <tr>
                                    <td><b>Medikal</b></td>
                                    <td>Tüm vakalarda</td>
                                    <td>Albendazol (PAIR/cerrahi öncesi-sonrası)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--info">
                        <span class="alert-box__icon">ℹ️</span>
                        <p class="alert-box__text"><strong>Echinococcus multilocularis (Alveolar Ekinokokkoz):</strong><br>
                        • Tilki, köpek → İnsan<br>
                        • KARACİĞERDE infiltratif büyüme (malignite gibi)<br>
                        • Metastaz yapabilir (AC, beyin)<br>
                        • Çok daha agresif ve kötü prognozlu<br>
                        • Tedavi: Geniş rezeksiyon + uzun süreli Albendazol</p>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Kist Hidatik Hafıza</p>
                        <p class="mnemonic-box__text">
                            <b>"KÖPEK = KESİN KONAK"</b> → Echinococcus<br>
                            <b>"KC > AC"</b> → %70 karaciğer, %20 akciğer<br>
                            <b>"TUZLU SU = RÜPTÜR"</b> → Bronşa açılma<br>
                            <b>"PAIR = 4 ADIM"</b> → Punksiyon-Aspirasyon-İnjeksiyon-Reaspirasyon<br>
                            <b>"DOKUNMAdan ÖNCE GÖR"</b> → Aspirasyondan önce hidatik ekarte et
                        </p>
                    </div>
                `
            },
            {
                title: "Diphyllobothrium latum (Balık Tenyası)",
                icon: "fas fa-fish",
                content: `
                    <p><strong>Diphyllobothrium latum</strong>, en uzun insan paraziti olup çiğ/az pişmiş tatlı su balığı ile bulaşır. B12 vitamini eksikliğine neden olabilir.</p>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Diphyllobothrium Özellikleri</p>
                        <p class="highlight-box__content">
                            <b>Boyut:</b> 10-15 metre (EN UZUN insan helminti)<br>
                            <b>Skoleks:</b> Vantuz yok, 2 yarık şeklinde tutunma organı (bothria)<br>
                            <b>Bulaş:</b> Çiğ/az pişmiş TATLI SU balığı (alabalık, somon, turna)<br>
                            <b>Coğrafya:</b> İskandinav ülkeleri, Baltık, Japonya, Şili<br>
                            <b>Türkiye'de:</b> Nadir
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Yaşam Döngüsü</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Evre</th>
                                    <th>Konak</th>
                                    <th>Form</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>1</b></td>
                                    <td>Su</td>
                                    <td>Yumurta → Korasidyum (silli larva)</td>
                                </tr>
                                <tr>
                                    <td><b>2</b></td>
                                    <td>Kopepod (1. ara konak)</td>
                                    <td>Proserkoid</td>
                                </tr>
                                <tr>
                                    <td><b>3</b></td>
                                    <td>Balık (2. ara konak)</td>
                                    <td>Pleroserkoid (kas içinde)</td>
                                </tr>
                                <tr>
                                    <td><b>4</b></td>
                                    <td>İnsan (kesin konak)</td>
                                    <td>Erişkin solucan (bağırsakta)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Klinik Bulgular</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Çoğu asemptomatik</b></li>
                            <li class="feature-item">Karın ağrısı, ishal, bulantı</li>
                            <li class="feature-item">Dışkıda proglottid</li>
                        </ul>
                    </div>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>B12 Vitamini Eksikliği (Difilobotriasis Anemisi):</strong><br>
                        • Solucan B12'yi bağırsaktan absorbe eder (kompetisyon)<br>
                        • <b>Megaloblastik anemi</b> gelişebilir<br>
                        • Pernisiyöz anemi benzeri tablo<br>
                        • Nörolojik bulgular: Subakut kombine dejenerasyon<br>
                        • Tedavi ile düzelir<br><br>
                        <i>Diphyllobothrium = B12 eksikliği yapan TEK parazit!</i></p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Tanı ve Tedavi</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Tanı:</b> Dışkıda operkulum (kapak) taşıyan yumurta</li>
                            <li class="feature-item"><b>Tedavi:</b> Prazikuantel 10-25 mg/kg tek doz</li>
                            <li class="feature-item"><b>Ek:</b> B12 replasmanı (eksiklik varsa)</li>
                        </ul>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Diphyllobothrium Hafıza</p>
                        <p class="mnemonic-box__text">
                            <b>"BALIK = B12 EKSİKLİĞİ"</b> → Diphyllobothrium<br>
                            <b>"EN UZUN"</b> → 10-15 metre<br>
                            <b>"OPERKULUM = KAPAKLI YUMURTA"</b> → Tanı<br>
                            <b>"TATLI SU"</b> → Deniz balığı değil!
                        </p>
                    </div>
                `
            },
            {
                title: "Hymenolepis nana (Cüce Tenya)",
                icon: "fas fa-compress-alt",
                content: `
                    <p><strong>Hymenolepis nana</strong>, en küçük ve en sık görülen insan tenyasıdır. ARA KONAK GEREKTİRMEZ, direkt insan-insan bulaşır. Otoenfeksiyon yapabilir.</p>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Hymenolepis nana Özellikleri</p>
                        <p class="highlight-box__content">
                            <b>Boyut:</b> 2-4 cm (EN KÜÇÜK insan tenyası)<br>
                            <b>Skoleks:</b> 4 vantuz + rostellum (kancalı)<br>
                            <b>Ara konak:</b> GEREKMİYOR (direkt yaşam döngüsü)<br>
                            <b>Bulaş:</b> Fekal-oral (yumurta ile)<br>
                            <b>Risk grubu:</b> Çocuklar, kalabalık ortamlar
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Yaşam Döngüsü</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>1.</b> Yumurta yutulur</li>
                            <li class="feature-item"><b>2.</b> İnce bağırsak villuslarına penetre → Sistiserkoid larva</li>
                            <li class="feature-item"><b>3.</b> Villus içinde gelişim (4-5 gün)</li>
                            <li class="feature-item"><b>4.</b> Lümene çıkış → Erişkin solucan</li>
                            <li class="feature-item"><b>5.</b> Yumurtlama → Dışkıda yumurta VEYA otoenfeksiyon</li>
                        </ul>
                    </div>

                    <div class="alert-box alert-box--warning">
                        <span class="alert-box__icon">⚠️</span>
                        <p class="alert-box__text"><strong>Hymenolepis nana ve Otoenfeksiyon:</strong><br>
                        • Yumurtalar bağırsak içinde açılabilir<br>
                        • Larva aynı konakta gelişir → YENİ SOLUCAN<br>
                        • Tedavisiz enfeksiyon YILLARca sürebilir<br>
                        • İmmünsüprese hastalarda masif enfeksiyon<br><br>
                        <i>Strongyloides gibi otoenfeksiyon yapar!</i></p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Klinik, Tanı ve Tedavi</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Özellik</th>
                                    <th>Bilgi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Klinik</b></td>
                                    <td>Çoğu asemptomatik; karın ağrısı, ishal, iştahsızlık</td>
                                </tr>
                                <tr>
                                    <td><b>Tanı</b></td>
                                    <td>Dışkıda yumurta (ince kabuklu, polar filamentli)</td>
                                </tr>
                                <tr>
                                    <td><b>Tedavi</b></td>
                                    <td>Prazikuantel 25 mg/kg tek doz (doku larvalarını da öldürür)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Hymenolepis Hafıza</p>
                        <p class="mnemonic-box__text">
                            <b>"NANA = NİNİ (küçük)"</b> → En küçük tenya<br>
                            <b>"DİREKT = ARA KONAK YOK"</b><br>
                            <b>"OTOENFEKSİYON = Strongyloides GİBİ"</b><br>
                            <b>"POLAR FİLAMENT"</b> → Yumurta özelliği
                        </p>
                    </div>
                `
            },
            {
                title: "Sınav İçin Kritik Özet",
                icon: "fas fa-graduation-cap",
                content: `
                    <div class="highlight-box">
                        <p class="highlight-box__title">🎯 En Sık Sorulan Konular</p>
                        <p class="highlight-box__content">
                            1. <b>Nörosistiserkoz:</b> T. solium yumurtası ile, NÖBETler<br>
                            2. <b>Kist hidatik:</b> Echinococcus, köpek, KC en sık<br>
                            3. <b>B12 eksikliği:</b> Diphyllobothrium latum, balık<br>
                            4. <b>Otoenfeksiyon:</b> H. nana (Strongyloides gibi)<br>
                            5. <b>Kanca:</b> T. solium var, T. saginata YOK
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Cestodlar Hızlı Karşılaştırma</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Parazit</th>
                                    <th>Bulaş</th>
                                    <th>Önemli Hastalık</th>
                                    <th>Ayırıcı Özellik</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>T. saginata</b></td>
                                    <td>Sığır eti</td>
                                    <td>Bağırsak tenyası</td>
                                    <td>Kancasız, sistiserkoz YOK</td>
                                </tr>
                                <tr>
                                    <td><b>T. solium</b></td>
                                    <td>Domuz eti/yumurta</td>
                                    <td>NÖROSİSTİSERKOZ</td>
                                    <td>Kancalı, yumurta tehlikeli</td>
                                </tr>
                                <tr>
                                    <td><b>Echinococcus</b></td>
                                    <td>Köpek dışkısı</td>
                                    <td>KİST HİDATİK</td>
                                    <td>KC>AC, anafilaksi riski</td>
                                </tr>
                                <tr>
                                    <td><b>D. latum</b></td>
                                    <td>Tatlı su balığı</td>
                                    <td>B12 eksikliği</td>
                                    <td>En uzun, operkulum</td>
                                </tr>
                                <tr>
                                    <td><b>H. nana</b></td>
                                    <td>Direkt (oral)</td>
                                    <td>Bağırsak enfeksiyonu</td>
                                    <td>En küçük, otoenfeksiyon</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Mega Hafıza Kodları</p>
                        <p class="mnemonic-box__text">
                            <b>"SOLİUM = SİNSİ (sistiserkoz)"</b><br>
                            <b>"SAGİNATA = SAFE (sadece bağırsak)"</b><br>
                            <b>"KÖPEK + KİST = ECHİNOCOCCUS"</b><br>
                            <b>"BALIK + B12 = DİPHYLLOBOTHRİUM"</b><br>
                            <b>"NANA = NİNİ = KÜÇÜK"</b><br>
                            <b>"PAIR = KC KİST TEDAVİSİ"</b>
                        </p>
                    </div>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>SINAV İÇİN KESİN BİL:</strong><br><br>
                            1. <b>T. solium yumurtası =</b> SİSTİSERKOZ → Nöbet<br>
                            2. <b>T. saginata =</b> Sistiserkoz YAPMAZ<br>
                            3. <b>Kist hidatike dokunma =</b> ANAFİLAKSİ riski<br>
                            4. <b>Nörosistiserkoz tedavisi =</b> Steroid ÖNCE, sonra antihelmintik<br>
                            5. <b>B12 eksikliği yapan tek parazit =</b> D. latum<br>
                            6. <b>Ara konaksız cestod =</b> H. nana<br>
                            7. <b>Tüm cestodlarda tedavi =</b> Prazikuantel
                        </p>
                    </div>

                    <ul class="feature-list">
                        <li><b>Soru tipi:</b> "Epileptik nöbet, beyin MR'da kistik lezyon + nokta?" → Nörosistiserkoz</li>
                        <li><b>Soru tipi:</b> "KC'de kist, köpek teması, anafilaksi riski?" → Kist hidatik</li>
                        <li><b>Soru tipi:</b> "Çiğ balık, megaloblastik anemi?" → Diphyllobothrium</li>
                        <li><b>Soru tipi:</b> "Dışkıda hareket eden segment?" → T. saginata (aktif proglottid)</li>
                        <li><b>Soru tipi:</b> "Nörosistiserkoz tedavisinde steroid ne zaman?" → Antihelmintikten ÖNCE</li>
                        <li><b>Soru tipi:</b> "Kist hidatik tanısında kullanılmayan test?" → Casoni (artık kullanılmıyor)</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 16,
        category: "parazitoloji",
        title: "Trematodlar (Yaprak Solucanlar)",
        subtitle: "Schistosoma, Fasciola, Paragonimus, Clonorchis",
        summary: "Trematodların (yaprak solucanlar, flukes) kapsamlı özeti. Kan trematodları (Schistosoma türleri), karaciğer trematodları (Fasciola hepatica, Clonorchis sinensis), akciğer trematodu (Paragonimus westermani). Yaşam döngüleri, ara konaklar ve tedavi yaklaşımları.",
        tags: ["Trematod", "Schistosoma", "Fasciola", "Paragonimus", "Clonorchis", "Salyangoz", "Helmint", "Parazitoloji"],
        sections: [
            {
                title: "Genel Bilgiler ve Sınıflandırma",
                icon: "fas fa-leaf",
                content: `
                    <p><strong>Trematodlar</strong> (yaprak solucanlar, flukes), yassı, segmentsiz, yaprak şeklinde helmintlerdir. Schistosoma hariç tümü hermafrodittir. Tüm trematodların yaşam döngüsünde <b>SALYANGOZ</b> ara konak olarak bulunur.</p>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Trematod Genel Özellikleri</p>
                        <p class="highlight-box__content">
                            <b>Şekil:</b> Yassı, yaprak benzeri (Schistosoma silindirik)<br>
                            <b>Üreme:</b> Hermafrodit (Schistosoma HARİÇ - ayrı eşeyli)<br>
                            <b>Ara konak:</b> SALYANGOZ (tüm trematodlarda)<br>
                            <b>Sindirim:</b> Kör sonlanan bağırsak (anüs yok)<br>
                            <b>Tutunma:</b> Oral ve ventral vantuz
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Trematod Sınıflandırması</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Grup</th>
                                    <th>Parazit</th>
                                    <th>Hedef Organ</th>
                                    <th>2. Ara Konak</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowspan="3"><b>Kan Trematodları</b></td>
                                    <td>Schistosoma mansoni</td>
                                    <td>Mezenterik venler</td>
                                    <td>YOK (serbest serkarya)</td>
                                </tr>
                                <tr>
                                    <td>Schistosoma japonicum</td>
                                    <td>Mezenterik venler</td>
                                    <td>YOK</td>
                                </tr>
                                <tr>
                                    <td>Schistosoma haematobium</td>
                                    <td>Mesane venleri</td>
                                    <td>YOK</td>
                                </tr>
                                <tr>
                                    <td rowspan="2"><b>Karaciğer Trematodları</b></td>
                                    <td>Fasciola hepatica</td>
                                    <td>Safra yolları</td>
                                    <td>Su bitkisi</td>
                                </tr>
                                <tr>
                                    <td>Clonorchis sinensis</td>
                                    <td>Safra yolları</td>
                                    <td>Tatlı su balığı</td>
                                </tr>
                                <tr>
                                    <td><b>Akciğer Trematodu</b></td>
                                    <td>Paragonimus westermani</td>
                                    <td>Akciğer</td>
                                    <td>Yengeç/kerevit</td>
                                </tr>
                                <tr>
                                    <td><b>Bağırsak Trematodu</b></td>
                                    <td>Fasciolopsis buski</td>
                                    <td>İnce bağırsak</td>
                                    <td>Su bitkisi</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--info">
                        <span class="alert-box__icon">ℹ️</span>
                        <p class="alert-box__text"><strong>Trematod Larva Evreleri:</strong><br>
                        • <b>Mirasidyum:</b> Silli larva, suya bırakılır, salyangoz bulur<br>
                        • <b>Sporokist → Redya:</b> Salyangoz içinde aseksüel çoğalma<br>
                        • <b>Serkarya:</b> Kuyruklu larva, salyangozdan çıkar<br>
                        • <b>Metaserkarya:</b> Enkiste form (2. ara konakta veya bitkide)</p>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Trematod Hafıza</p>
                        <p class="mnemonic-box__text">
                            <b>"TREMATOD = SALYANGOZ ŞAT"</b> → Tüm trematodlarda salyangoz var<br>
                            <b>"SCHİSTOSOMA = AYRI EŞEYLİ"</b> → Tek istisna<br>
                            <b>"SERKARYA = SERBEST YÜZER"</b> → Deriye girer veya 2. ara konağa
                        </p>
                    </div>
                `
            },
            {
                title: "Schistosoma (Kan Trematodları)",
                icon: "fas fa-tint",
                content: `
                    <p><strong>Schistosoma</strong> türleri (şistozomlár), kan damarlarında yaşayan, ayrı eşeyli trematodlardır. Dünyada ~200 milyon enfekte. Kronik hastalık önemli morbidite nedenidir.</p>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Schistosoma Türleri Karşılaştırması</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Özellik</th>
                                    <th>S. mansoni</th>
                                    <th>S. japonicum</th>
                                    <th>S. haematobium</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Coğrafya</b></td>
                                    <td>Afrika, G. Amerika, Karayipler</td>
                                    <td>Uzak Doğu (Çin, Filipinler)</td>
                                    <td>Afrika, Orta Doğu</td>
                                </tr>
                                <tr>
                                    <td><b>Lokalizasyon</b></td>
                                    <td>İnferior mezenterik ven</td>
                                    <td>Süperior mezenterik ven</td>
                                    <td>MESANE venleri</td>
                                </tr>
                                <tr>
                                    <td><b>Yumurta</b></td>
                                    <td>Lateral diken</td>
                                    <td>Küçük, rudimenter diken</td>
                                    <td>TERMİNAL diken</td>
                                </tr>
                                <tr>
                                    <td><b>Ana patoloji</b></td>
                                    <td>KC fibrozisi (Symmers)</td>
                                    <td>KC fibrozisi (en ağır)</td>
                                    <td>MESANE CA riski</td>
                                </tr>
                                <tr>
                                    <td><b>Tanı</b></td>
                                    <td>Dışkıda yumurta</td>
                                    <td>Dışkıda yumurta</td>
                                    <td>İDRARDA yumurta</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Schistosoma Yaşam Döngüsü</p>
                        <p class="highlight-box__content">
                            <b>1.</b> Yumurtalar dışkı/idrar ile suya → Mirasidyum çıkar<br>
                            <b>2.</b> Mirasidyum SALYANGOZ'a girer → Sporokist → Serkarya<br>
                            <b>3.</b> Serkarya sudan çıkar → <b>DERİDEN GİRER</b> (yüzme, su işleri)<br>
                            <b>4.</b> Şistosomül → Kan → Akciğer → Portal sistem<br>
                            <b>5.</b> Mezenterik/mesane venlerinde erişkin çift oluşumu<br>
                            <b>6.</b> Dişi yumurtlar → Yumurtalar doku/lümene göç
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Klinik Evreler</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Evre</th>
                                    <th>Süre</th>
                                    <th>Bulgular</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Serkaryal dermatit</b></td>
                                    <td>Saatler-günler</td>
                                    <td>"Yüzücü kaşıntısı" - makülopapüler döküntü</td>
                                </tr>
                                <tr>
                                    <td><b>Akut (Katayama)</b></td>
                                    <td>3-8 hafta</td>
                                    <td>Ateş, ürtiker, öksürük, hepatosplenomegali, EOZİNOFİLİ</td>
                                </tr>
                                <tr>
                                    <td><b>Kronik</b></td>
                                    <td>Aylar-yıllar</td>
                                    <td>Yumurta granülomları → Fibrozis</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>Kronik Şistozomiyazis Komplikasyonları:</strong><br>
                        <b>S. mansoni/japonicum:</b><br>
                        • Periportal fibrozis (Symmers pipestem fibrozis)<br>
                        • Portal hipertansiyon → Özofagus varisleri → Kanama<br>
                        • Hepatosplenomegali (siroz DEĞİL - hepatosit korunur)<br><br>
                        <b>S. haematobium:</b><br>
                        • Mesane fibrozisi, kalsifikasyonu<br>
                        • <b>SKUAMÖZ HÜCRELİ MESANE KANSERİ</b> (SCC) riski ↑<br>
                        • Hidronefroz, kronik böbrek hastalığı</p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Tanı ve Tedavi</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Tanı:</b> Dışkı/idrarda yumurta (diken yapısına göre tür tayini)</li>
                            <li class="feature-item"><b>Kato-Katz:</b> Dışkıda yumurta sayımı (kantitatif)</li>
                            <li class="feature-item"><b>Seroloji:</b> Akut dönemde (yumurta henüz yok)</li>
                            <li class="feature-item"><b>Rektal/mesane biyopsisi:</b> Kronik vakalarda</li>
                            <li class="feature-item"><b>Tedavi:</b> <b>Prazikuantel</b> 40-60 mg/kg (türe göre), tek gün</li>
                        </ul>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Schistosoma Hafıza</p>
                        <p class="mnemonic-box__text">
                            <b>"S. haematobium = HEMATÜRİ + MESANE CA"</b><br>
                            <b>"TERMİNAL DİKEN = haemaTobium"</b> (T harfi)<br>
                            <b>"LATERAL DİKEN = manSoni"</b> (S harfi yana bakar)<br>
                            <b>"KATAYAMA = AKUT + EOZİNOFİLİ"</b><br>
                            <b>"DERİDEN GİRİŞ = SERKARYA"</b>
                        </p>
                    </div>
                `
            },
            {
                title: "Fasciola hepatica (Karaciğer Kelebeği)",
                icon: "fas fa-leaf",
                content: `
                    <p><strong>Fasciola hepatica</strong>, en büyük trematod olup safra yollarında yaşar. Su teresi gibi su bitkileri ile bulaşır. Türkiye'de görülür (hayvancılık bölgeleri).</p>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Fasciola hepatica Özellikleri</p>
                        <p class="highlight-box__content">
                            <b>Boyut:</b> 2-3 cm × 1 cm (EN BÜYÜK trematod)<br>
                            <b>Şekil:</b> Yaprak şeklinde, konik baş<br>
                            <b>Kesin konak:</b> Koyun, sığır, insan<br>
                            <b>Ara konak:</b> Tatlı su salyangozu (Lymnaea)<br>
                            <b>Enfektif form:</b> Metaserkarya (su bitkisinde)
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Yaşam Döngüsü</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Evre</th>
                                    <th>Lokalizasyon</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Metaserkarya alımı</b></td>
                                    <td>Su teresi, marul, su bitkisi ile oral</td>
                                </tr>
                                <tr>
                                    <td><b>İnce bağırsak</b></td>
                                    <td>Ekskistasyon</td>
                                </tr>
                                <tr>
                                    <td><b>Karaciğer parankimi</b></td>
                                    <td>Duodenumdan periton → KC kapsülünü deler → Parankim içinden göç</td>
                                </tr>
                                <tr>
                                    <td><b>Safra yolları</b></td>
                                    <td>Erişkin solucan yerleşir, yumurtlar</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Klinik Evreler</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Evre</th>
                                    <th>Patoloji</th>
                                    <th>Bulgular</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Akut (Hepatik)</b></td>
                                    <td>KC parankiminde göç</td>
                                    <td>Ateş, sağ üst kadran ağrısı, hepatomegali, <b>yüksek EOZİNOFİLİ</b></td>
                                </tr>
                                <tr>
                                    <td><b>Kronik (Biliyer)</b></td>
                                    <td>Safra yollarında yerleşim</td>
                                    <td>Biliyer kolik, kolanjit, kolestaz</td>
                                </tr>
                                <tr>
                                    <td><b>Ektopik</b></td>
                                    <td>Aberran göç</td>
                                    <td>Subkutan nodül, AC, göz, beyin (nadir)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--warning">
                        <span class="alert-box__icon">⚠️</span>
                        <p class="alert-box__text"><strong>Akut Fasioliazis'te Tanı Zorluğu:</strong><br>
                        • Akut dönemde larvalar henüz safra yollarına ulaşmamış<br>
                        • <b>Dışkıda yumurta YOKTUR!</b> (8-12 hafta sonra pozitifleşir)<br>
                        • Tanı: Klinik + Eozinofili + Seroloji (ELISA)<br>
                        • BT'de KC'de hipodens tünel benzeri lezyonlar</p>
                    </div>

                    <div class="alert-box alert-box--info">
                        <span class="alert-box__icon">ℹ️</span>
                        <p class="alert-box__text"><strong>Halzoun (Faringeal Fasioliazis):</strong><br>
                        • Çiğ KC yiyen kişilerde (Orta Doğu, Türkiye)<br>
                        • Erişkin solucan farenkse yapışır<br>
                        • Boğazda takılma hissi, ödem, dispne<br>
                        • Tedavi: Manuel çıkarma</p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Tanı ve Tedavi</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Dışkıda yumurta:</b> Büyük, operkullü (kronik dönemde)</li>
                            <li class="feature-item"><b>Seroloji:</b> Akut dönemde en değerli</li>
                            <li class="feature-item"><b>ERCP:</b> Safra yollarında solucan görülebilir</li>
                            <li class="feature-item"><b>Tedavi:</b> <b>Triklabendazol</b> 10 mg/kg (tek doz veya 2 gün) - İLK SEÇİM</li>
                            <li class="feature-item"><b>Alternatif:</b> Nitazoksanid (Prazikuantel ETKİSİZ!)</li>
                        </ul>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Fasciola Hafıza</p>
                        <p class="mnemonic-box__text">
                            <b>"FASCİOLA = FAT (büyük) + LEAF (yaprak)"</b> → En büyük trematod<br>
                            <b>"SU TERESİ = FASCİOLA"</b> → Bulaş kaynağı<br>
                            <b>"AKUT = EOZİNOFİLİ + YUMURTA YOK"</b><br>
                            <b>"TRİKLABENDAZOL = TEDAVİ"</b> (Prazikuantel işe yaramaz!)
                        </p>
                    </div>
                `
            },
            {
                title: "Clonorchis sinensis (Çin Karaciğer Kelebeği)",
                icon: "fas fa-fish",
                content: `
                    <p><strong>Clonorchis sinensis</strong>, Uzak Doğu'da yaygın olan, çiğ tatlı su balığı ile bulaşan karaciğer trematodudur. Kolanjiokarsinoma riski artırır.</p>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Clonorchis sinensis Özellikleri</p>
                        <p class="highlight-box__content">
                            <b>Coğrafya:</b> Çin, Kore, Japonya, Vietnam<br>
                            <b>Ara konak:</b> 1. Salyangoz, 2. Tatlı su balığı<br>
                            <b>Bulaş:</b> Çiğ/az pişmiş tatlı su balığı (metaserkarya)<br>
                            <b>Lokalizasyon:</b> Safra yolları (intrahepatik)<br>
                            <b>Ömür:</b> 20-30 yıl!
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Klinik Bulgular</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Hafif enfeksiyon:</b> Asemptomatik veya dispepsi</li>
                            <li class="feature-item"><b>Orta-ağır:</b> Sağ üst kadran ağrısı, hepatomegali</li>
                            <li class="feature-item"><b>Kronik:</b> Tekrarlayan kolanjit, safra taşı</li>
                            <li class="feature-item"><b>Komplikasyon:</b> Piyojenik kolanjit, pankreatit</li>
                        </ul>
                    </div>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>Clonorchis ve Kolanjiokarsinoma:</strong><br>
                        • Kronik enfeksiyon → Safra yolu epitel proliferasyonu<br>
                        • <b>KOLANJİOKARSİNOMA</b> riski 5-10 kat artmış<br>
                        • Endemik bölgelerde önemli kanser nedeni<br>
                        • IARC Grup 1 karsinojen olarak sınıflandırılmış</p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Tanı ve Tedavi</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Tanı:</b> Dışkıda yumurta (küçük, operkullü, omuzlu)</li>
                            <li class="feature-item"><b>Görüntüleme:</b> USG/MRCP - safra yolu dilatasyonu</li>
                            <li class="feature-item"><b>Tedavi:</b> Prazikuantel 25 mg/kg × 3 doz × 1-2 gün</li>
                        </ul>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Clonorchis Hafıza</p>
                        <p class="mnemonic-box__text">
                            <b>"CLONORCHİS = CANCER (kolanjio) + ÇİN"</b><br>
                            <b>"ÇİĞ BALIK = CLONORCHİS"</b><br>
                            <b>"20-30 YIL YAŞAR"</b> → Kronik enfeksiyon
                        </p>
                    </div>
                `
            },
            {
                title: "Paragonimus westermani (Akciğer Kelebeği)",
                icon: "fas fa-lungs",
                content: `
                    <p><strong>Paragonimus westermani</strong>, akciğerde yaşayan trematod olup çiğ yengeç/kerevit ile bulaşır. Tüberküloz ile karışabilir.</p>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Paragonimus Özellikleri</p>
                        <p class="highlight-box__content">
                            <b>Coğrafya:</b> Uzak Doğu, Afrika, G. Amerika<br>
                            <b>Ara konak:</b> 1. Salyangoz, 2. Yengeç/Kerevit<br>
                            <b>Bulaş:</b> Çiğ/az pişmiş yengeç, kerevit (metaserkarya)<br>
                            <b>Lokalizasyon:</b> AKCİĞER parankimi (kist oluşturur)<br>
                            <b>Şekil:</b> Kahve çekirdeği gibi
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Yaşam Döngüsü</h4>
                        <ul class="feature-list">
                            <li class="feature-item">Metaserkarya (yengeç/kerevit) yutulur</li>
                            <li class="feature-item">Duodenum → Periton boşluğu → Diyafram → Plevra → AKCİĞER</li>
                            <li class="feature-item">Akciğerde kist (kapsül) içinde erişkin solucan</li>
                            <li class="feature-item">Yumurtalar balgam/dışkı ile atılır</li>
                        </ul>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Klinik Bulgular</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Bulgu</th>
                                    <th>Özellik</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Kronik öksürük</b></td>
                                    <td>Aylar-yıllar süren</td>
                                </tr>
                                <tr>
                                    <td><b>Hemoptizi</b></td>
                                    <td>Paslı/kahverengi balgam</td>
                                </tr>
                                <tr>
                                    <td><b>Göğüs ağrısı</b></td>
                                    <td>Plevral tutulum</td>
                                </tr>
                                <tr>
                                    <td><b>Radyoloji</b></td>
                                    <td>Nodül, kavite, infiltrat (TB benzeri!)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>Paragonimiazis vs Tüberküloz:</strong><br>
                        Paragonimiazis sıklıkla TB ile KARIŞIR:<br>
                        • Kronik öksürük, hemoptizi, kaviter lezyon<br>
                        • TB yanlış tanısı → Gereksiz TB tedavisi<br><br>
                        <b>Ayırıcı ipuçları:</b><br>
                        • Yengeç/kerevit yeme öyküsü<br>
                        • Eozinofili (TB'de yok)<br>
                        • ARB negatif, balgamda yumurta<br>
                        • Endemik bölge öyküsü</p>
                    </div>

                    <div class="alert-box alert-box--warning">
                        <span class="alert-box__icon">⚠️</span>
                        <p class="alert-box__text"><strong>Serebral Paragonimiazis:</strong><br>
                        • Erişkin solucan/yumurta beyne göç edebilir<br>
                        • Nöbet, başağrısı, fokal defisit<br>
                        • Görüntülemede: "Sabun köpüğü" kalsifikasyon paterni<br>
                        • Özellikle Uzak Doğu'da önemli</p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Tanı ve Tedavi</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Tanı:</b> Balgam/dışkıda yumurta (büyük, operkullü, kalın kabuklu)</li>
                            <li class="feature-item"><b>Seroloji:</b> ELISA (yumurta bulunamazsa)</li>
                            <li class="feature-item"><b>Eozinofili:</b> Sık</li>
                            <li class="feature-item"><b>Tedavi:</b> Prazikuantel 25 mg/kg × 3 doz × 2-3 gün</li>
                        </ul>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Paragonimus Hafıza</p>
                        <p class="mnemonic-box__text">
                            <b>"PARAGONİMUS = PARAZİT TB'sİ"</b> → TB ile karışır<br>
                            <b>"YENGEÇ/KEREVİT = PARAGONIMUS"</b><br>
                            <b>"AKCİĞER TREMATODU = TEK"</b><br>
                            <b>"SABUN KÖPÜĞÜ = SEREBRAL"</b>
                        </p>
                    </div>
                `
            },
            {
                title: "Sınav İçin Kritik Özet",
                icon: "fas fa-graduation-cap",
                content: `
                    <div class="highlight-box">
                        <p class="highlight-box__title">🎯 En Sık Sorulan Konular</p>
                        <p class="highlight-box__content">
                            1. <b>Schistosoma haematobium:</b> Mesane CA (SCC) riski, idrar yumurta<br>
                            2. <b>Fasciola hepatica:</b> Su teresi, akutta yumurta yok, Triklabendazol<br>
                            3. <b>Clonorchis:</b> Çiğ balık, kolanjiokarsinoma riski<br>
                            4. <b>Paragonimus:</b> Yengeç, TB ile karışır, hemoptizi<br>
                            5. <b>Tüm trematodlarda:</b> SALYANGOZ ara konak
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Trematodlar Hızlı Karşılaştırma</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Parazit</th>
                                    <th>Bulaş</th>
                                    <th>Hedef</th>
                                    <th>Önemli Komplikasyon</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>S. haematobium</b></td>
                                    <td>Deriden (su)</td>
                                    <td>Mesane</td>
                                    <td>MESANE SCC</td>
                                </tr>
                                <tr>
                                    <td><b>S. mansoni/japonicum</b></td>
                                    <td>Deriden (su)</td>
                                    <td>Bağırsak/KC</td>
                                    <td>Portal HT, varis</td>
                                </tr>
                                <tr>
                                    <td><b>Fasciola</b></td>
                                    <td>Su bitkisi</td>
                                    <td>Safra yolları</td>
                                    <td>Kolanjit</td>
                                </tr>
                                <tr>
                                    <td><b>Clonorchis</b></td>
                                    <td>Çiğ balık</td>
                                    <td>Safra yolları</td>
                                    <td>KOLANJİOKARSİNOMA</td>
                                </tr>
                                <tr>
                                    <td><b>Paragonimus</b></td>
                                    <td>Yengeç/kerevit</td>
                                    <td>Akciğer</td>
                                    <td>TB ile karışır</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Tedavi Özeti</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Parazit</th>
                                    <th>İlaç</th>
                                    <th>Not</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Schistosoma</b></td>
                                    <td>Prazikuantel</td>
                                    <td>40-60 mg/kg</td>
                                </tr>
                                <tr>
                                    <td><b>Fasciola</b></td>
                                    <td><b>TRİKLABENDAZOL</b></td>
                                    <td>Prazikuantel ETKİSİZ!</td>
                                </tr>
                                <tr>
                                    <td><b>Clonorchis</b></td>
                                    <td>Prazikuantel</td>
                                    <td>25 mg/kg × 3</td>
                                </tr>
                                <tr>
                                    <td><b>Paragonimus</b></td>
                                    <td>Prazikuantel</td>
                                    <td>25 mg/kg × 3 × 2-3 gün</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Mega Hafıza Kodları</p>
                        <p class="mnemonic-box__text">
                            <b>"SALYANGOZ = TÜM TREMATODLAR"</b><br>
                            <b>"haemaTobium = Terminal diken + Mesane CA"</b><br>
                            <b>"FASCİOLA = TRİKLABENDAZOL"</b> (Prazikuantel yok!)<br>
                            <b>"CLONORCHİS = CANCER + ÇİN BALIĞI"</b><br>
                            <b>"PARAGONİMUS = PARAZİT TB"</b> → Yengeç<br>
                            <b>"DERİDEN = SCHİSTOSOMA"</b> (serkarya)
                        </p>
                    </div>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>SINAV İÇİN KESİN BİL:</strong><br><br>
                            1. <b>Mesane SCC =</b> S. haematobium (terminal dikenli yumurta)<br>
                            2. <b>Kolanjiokarsinoma =</b> Clonorchis sinensis<br>
                            3. <b>Su teresi =</b> Fasciola hepatica<br>
                            4. <b>Fasciola tedavisi =</b> Triklabendazol (Prazikuantel ETKİSİZ)<br>
                            5. <b>TB ile karışan parazit =</b> Paragonimus<br>
                            6. <b>Katayama sendromu =</b> Akut şistozomiyazis (ateş, eozinofili)<br>
                            7. <b>Tüm trematodlarda 1. ara konak =</b> SALYANGOZ
                        </p>
                    </div>

                    <ul class="feature-list">
                        <li><b>Soru tipi:</b> "Ağrısız hematüri, mesanede kalsifikasyon?" → S. haematobium</li>
                        <li><b>Soru tipi:</b> "Su teresi yedikten sonra sağ üst kadran ağrısı, eozinofili, yumurta yok?" → Akut fasioliazis</li>
                        <li><b>Soru tipi:</b> "Çiğ balık, kronik kolanjit, kanser riski?" → Clonorchis</li>
                        <li><b>Soru tipi:</b> "Hemoptizi, kaviter lezyon, ARB negatif, yengeç yeme?" → Paragonimus</li>
                        <li><b>Soru tipi:</b> "Fasciola tedavisinde kullanılan ilaç?" → Triklabendazol</li>
                        <li><b>Soru tipi:</b> "Schistosoma yumurtasında terminal diken?" → S. haematobium</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 17,
        category: "parazitoloji",
        title: "Parazitoloji Tanı Yöntemleri ve Antiparaziter İlaçlar",
        subtitle: "Laboratuvar Tanı, İlaç Seçimi ve Yan Etkiler",
        summary: "Paraziter enfeksiyonların tanı yöntemleri (direkt mikroskopi, konsantrasyon, boyama, seroloji, moleküler) ve antiparaziter ilaçların kapsamlı özeti. İlaç-parazit eşleşmeleri, etki mekanizmaları, yan etkiler ve özel durumlarda tedavi seçimi.",
        tags: ["Tanı", "Antiparaziter", "Albendazol", "Prazikuantel", "İvermektin", "Metronidazol", "Mikroskopi", "Parazitoloji"],
        sections: [
            {
                title: "Dışkı İnceleme Yöntemleri",
                icon: "fas fa-microscope",
                content: `
                    <p>Bağırsak parazitlerinin tanısında <strong>dışkı incelemesi</strong> temel yöntemdir. Farklı teknikler farklı parazit formlarını göstermede avantajlıdır.</p>

                    <div class="highlight-box">
                        <p class="highlight-box__title">Dışkı Toplama Kuralları</p>
                        <p class="highlight-box__content">
                            <b>Miktar:</b> Yeterli örnek (en az ceviz büyüklüğünde)<br>
                            <b>Sayı:</b> En az 3 örnek, farklı günlerde (gün aşırı)<br>
                            <b>Süre:</b> 1-2 saat içinde incelenmeli (trofozoit için)<br>
                            <b>Kap:</b> Temiz, ağzı kapalı, idrar/su bulaşmamış<br>
                            <b>Fikzatif:</b> Gecikecekse SAF, PVA, formalin
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Dışkı İnceleme Teknikleri</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Yöntem</th>
                                    <th>Prensip</th>
                                    <th>Avantaj</th>
                                    <th>Dezavantaj</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Direkt (Native)</b></td>
                                    <td>SF/Lugol ile preparat</td>
                                    <td>Hızlı, trofozoit hareketi görülür</td>
                                    <td>Duyarlılık düşük</td>
                                </tr>
                                <tr>
                                    <td><b>Formol-eter (Ritchie)</b></td>
                                    <td>Konsantrasyon</td>
                                    <td>Yumurta, kist için altın standart</td>
                                    <td>Trofozoitleri öldürür</td>
                                </tr>
                                <tr>
                                    <td><b>Çinko sülfat flotasyon</b></td>
                                    <td>Yoğunluk farkı</td>
                                    <td>Giardia kisti için iyi</td>
                                    <td>Operkullü yumurtalar batar</td>
                                </tr>
                                <tr>
                                    <td><b>Kato-Katz</b></td>
                                    <td>Kantitatif</td>
                                    <td>Yumurta sayımı, şiddet değerlendirme</td>
                                    <td>Kancalı yumurta çabuk bozulur</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--warning">
                        <span class="alert-box__icon">⚠️</span>
                        <p class="alert-box__text"><strong>Özel Durumlar:</strong><br>
                        • <b>Enterobius:</b> Dışkıda yumurta YOK → SELOFAN BANT (Graham) testi<br>
                        • <b>Strongyloides:</b> Dışkıda LARVA (yumurta değil) → Baermann, agar kültür<br>
                        • <b>Cryptosporidium:</b> ASİT-FAST boyama (Kinyoun, mZN)<br>
                        • <b>Giardia:</b> 3 negatif dışkıdan sonra → Duodenal aspirat veya antijen testi</p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Asit-Fast (Aside Dirençli) Boyanan Parazitler</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Cryptosporidium</b> - En sık sorulan!</li>
                            <li class="feature-item"><b>Cyclospora cayetanensis</b></li>
                            <li class="feature-item"><b>Cystoisospora (Isospora) belli</b></li>
                            <li class="feature-item"><i>Mikrosporidya değişken boyanır (Modifiye trikrom tercih)</i></li>
                        </ul>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Dışkı Tanı Hafıza</p>
                        <p class="mnemonic-box__text">
                            <b>"3C = ASİT-FAST"</b> → Cryptosporidium, Cyclospora, Cystoisospora<br>
                            <b>"ENTEROBİUS = SELOFAN"</b> → Dışkıda değil, perianal<br>
                            <b>"STRONGYLOİDES = LARVA"</b> → Yumurta değil<br>
                            <b>"FORMOL-ETER = ALTIN STANDART"</b> → Konsantrasyon
                        </p>
                    </div>
                `
            },
            {
                title: "Kan ve Doku Parazitlerinin Tanısı",
                icon: "fas fa-tint",
                content: `
                    <p>Kan ve doku parazitlerinde <strong>periferik yayma</strong>, <strong>seroloji</strong> ve <strong>moleküler yöntemler</strong> kullanılır.</p>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Periferik Yayma (Giemsa Boyama)</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Parazit</th>
                                    <th>Yayma Tipi</th>
                                    <th>Görünüm</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Plasmodium</b></td>
                                    <td>İnce + Kalın yayma</td>
                                    <td>Eritrosit içi halka, şizont, gametosit</td>
                                </tr>
                                <tr>
                                    <td><b>Babesia</b></td>
                                    <td>İnce yayma</td>
                                    <td>Malta haçı (tetrad), halka</td>
                                </tr>
                                <tr>
                                    <td><b>Trypanosoma</b></td>
                                    <td>İnce/Kalın yayma</td>
                                    <td>Trypomastigot (dalgalı membran)</td>
                                </tr>
                                <tr>
                                    <td><b>Leishmania</b></td>
                                    <td>Kemik iliği, dalak aspirat</td>
                                    <td>Amastigot (LD cisimciği)</td>
                                </tr>
                                <tr>
                                    <td><b>Filarya</b></td>
                                    <td>Gece kanı (bazıları)</td>
                                    <td>Mikrofilarya</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">🔬 Kalın vs İnce Yayma (Sıtma)</p>
                        <p class="highlight-box__content">
                            <b>Kalın yayma:</b> Duyarlılık YÜKSEK, parazit arama<br>
                            <b>İnce yayma:</b> Tür tayini, morfoloji değerlendirme<br><br>
                            <b>İdeal:</b> Her ikisi de yapılmalı!<br>
                            <b>Zamanlama:</b> Ateş atağı sırasında (parazitemi pik)
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Serolojik Testler</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Parazit</th>
                                    <th>Test</th>
                                    <th>Kullanım</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Toxoplasma</b></td>
                                    <td>IgG, IgM, Avidite</td>
                                    <td>Gebelik taraması, akut/kronik ayrımı</td>
                                </tr>
                                <tr>
                                    <td><b>Echinococcus</b></td>
                                    <td>ELISA, IHA</td>
                                    <td>Kist hidatik tanısı</td>
                                </tr>
                                <tr>
                                    <td><b>Leishmania</b></td>
                                    <td>rK39 rapid test</td>
                                    <td>Visseral leishmaniasis tarama</td>
                                </tr>
                                <tr>
                                    <td><b>Toxocara</b></td>
                                    <td>ELISA</td>
                                    <td>VLM/OLM tanısı (dışkıda yumurta yok!)</td>
                                </tr>
                                <tr>
                                    <td><b>Trichinella</b></td>
                                    <td>ELISA</td>
                                    <td>Akut enfeksiyon (1-2 hafta sonra +)</td>
                                </tr>
                                <tr>
                                    <td><b>Sistiserkoz</b></td>
                                    <td>EITB (Immunoblot)</td>
                                    <td>Nörosistiserkoz</td>
                                </tr>
                                <tr>
                                    <td><b>Strongyloides</b></td>
                                    <td>ELISA</td>
                                    <td>Tarama (immunsupresyon öncesi)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--info">
                        <span class="alert-box__icon">ℹ️</span>
                        <p class="alert-box__text"><strong>Antijen Testleri:</strong><br>
                        • <b>Giardia/Cryptosporidium:</b> Dışkı antijen testi (EIA, DFA, rapid)<br>
                        • <b>E. histolytica:</b> Dışkı antijen (E. dispar'dan ayırır)<br>
                        • <b>Plasmodium:</b> Rapid Diagnostic Test (RDT) - HRP-2, pLDH<br>
                        • Duyarlı ve spesifik, mikroskopi gerektirmez</p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Moleküler Tanı (PCR)</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Avantaj:</b> Yüksek duyarlılık/özgüllük, tür tayini</li>
                            <li class="feature-item"><b>Plasmodium:</b> Düşük parazitemi, tür tayini, ilaç direnci</li>
                            <li class="feature-item"><b>Leishmania:</b> Tür tayini, tedavi takibi</li>
                            <li class="feature-item"><b>Toxoplasma:</b> Konjenital enfeksiyon (amniyotik sıvı PCR)</li>
                            <li class="feature-item"><b>Strongyloides:</b> Düşük larva yükünde</li>
                        </ul>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Seroloji Hafıza</p>
                        <p class="mnemonic-box__text">
                            <b>"rK39 = KALA-AZAR"</b> → Visseral leishmaniasis<br>
                            <b>"EITB = EN İYİ SİSTİSERKOZ"</b><br>
                            <b>"AVİDİTE = AKUT/KRONİK TOXO"</b><br>
                            <b>"TOXOCARA SERİLOJİ = DIŞKIDA YOK"</b> → İnsan yanlış konak
                        </p>
                    </div>
                `
            },
            {
                title: "Antiprotozoal İlaçlar",
                icon: "fas fa-pills",
                content: `
                    <p>Protozoonlara karşı kullanılan ilaçlar ve endikasyonları.</p>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Sıtma İlaçları</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>İlaç</th>
                                    <th>Etki Yeri</th>
                                    <th>Kullanım</th>
                                    <th>Önemli Not</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Klorokin</b></td>
                                    <td>Eritrositer şizont</td>
                                    <td>Duyarlı P. falciparum, diğer türler</td>
                                    <td>Retinopati (uzun süreli)</td>
                                </tr>
                                <tr>
                                    <td><b>Artemisinin (ACT)</b></td>
                                    <td>Eritrositer şizont</td>
                                    <td>Dirençli P. falciparum (ilk seçim)</td>
                                    <td>Kombinasyon şart</td>
                                </tr>
                                <tr>
                                    <td><b>Atovakon-Proguanil</b></td>
                                    <td>Eritrositer + Karaciğer</td>
                                    <td>Tedavi ve profilaksi</td>
                                    <td>Gebelikte dikkat</td>
                                </tr>
                                <tr>
                                    <td><b>Primakin</b></td>
                                    <td>Karaciğer (hipnozoit)</td>
                                    <td>P. vivax/ovale radikal kür</td>
                                    <td><b>G6PD eksikliğinde hemoliz!</b></td>
                                </tr>
                                <tr>
                                    <td><b>Meflokin</b></td>
                                    <td>Eritrositer şizont</td>
                                    <td>Profilaksi</td>
                                    <td>Psikiyatrik yan etki</td>
                                </tr>
                                <tr>
                                    <td><b>Doksisiklin</b></td>
                                    <td>Eritrositer şizont</td>
                                    <td>Profilaksi</td>
                                    <td>Çocuk/gebelikte yasak</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>Primakin ve G6PD:</strong><br>
                        • Primakin → Oksidatif stres → G6PD eksikliğinde <b>HEMOLİZ</b><br>
                        • P. vivax/ovale tedavisinde primakin vermeden önce <b>G6PD testi ZORUNLU</b><br>
                        • Eksiklik varsa: Haftalık primakin (8 hafta) veya Tafenoquine alternatif</p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Diğer Antiprotozoal İlaçlar</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>İlaç</th>
                                    <th>Endikasyon</th>
                                    <th>Önemli Yan Etki</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Metronidazol</b></td>
                                    <td>E. histolytica (invaziv), Giardia, T. vaginalis</td>
                                    <td>Disülfiram reaksiyonu (alkol yasak)</td>
                                </tr>
                                <tr>
                                    <td><b>Tinidazol</b></td>
                                    <td>Metronidazol gibi</td>
                                    <td>Daha iyi tolere edilir</td>
                                </tr>
                                <tr>
                                    <td><b>Paromomisin</b></td>
                                    <td>E. histolytica (lümen), Cryptosporidium</td>
                                    <td>Gebelikte kullanılabilir</td>
                                </tr>
                                <tr>
                                    <td><b>Nitazoksanid</b></td>
                                    <td>Cryptosporidium, Giardia</td>
                                    <td>Geniş spektrum antiprotozoal</td>
                                </tr>
                                <tr>
                                    <td><b>Spiramisin</b></td>
                                    <td>Gebelikte toxoplasmosis</td>
                                    <td>Fetusa geçişi azaltır</td>
                                </tr>
                                <tr>
                                    <td><b>Primetamin-Sülfadiazin</b></td>
                                    <td>Toxoplasmosis (aktif)</td>
                                    <td>Folat antagonisti → Folinik asit ekle</td>
                                </tr>
                                <tr>
                                    <td><b>TMP-SMX</b></td>
                                    <td>Cyclospora, Cystoisospora</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td><b>Pentamidin</b></td>
                                    <td>Leishmaniasis, Trypanosomiasis</td>
                                    <td>Hipoglisemi, pankreatit</td>
                                </tr>
                                <tr>
                                    <td><b>Amfoterisin B</b></td>
                                    <td>Visseral leishmaniasis</td>
                                    <td>Nefrotoksisite</td>
                                </tr>
                                <tr>
                                    <td><b>Miltefosin</b></td>
                                    <td>Leishmaniasis (oral)</td>
                                    <td>Teratojen</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Antiprotozoal Hafıza</p>
                        <p class="mnemonic-box__text">
                            <b>"PRİMAKİN = P. vivax/ovale + G6PD kontrol"</b><br>
                            <b>"METRONIDAZOL = AMİP + GİARDİA + TRİKOMONAS"</b><br>
                            <b>"SPİRAMİSİN = GEBE + TOXO"</b><br>
                            <b>"TMP-SMX = CYCLOSPORA + CYSTOİSOSPORA"</b><br>
                            <b>"LİPOZOMAL AMFOTERİSİN = VİSSERAL LEİSHMANİASİS"</b>
                        </p>
                    </div>
                `
            },
            {
                title: "Antihelmintik İlaçlar",
                icon: "fas fa-capsules",
                content: `
                    <p>Helmintlere (solucanlar) karşı kullanılan ilaçlar ve endikasyonları.</p>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Benzimidazoller</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>İlaç</th>
                                    <th>Mekanizma</th>
                                    <th>Spektrum</th>
                                    <th>Doz</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Albendazol</b></td>
                                    <td>β-tübülin inhibisyonu → Glukoz alımı ↓</td>
                                    <td>Nematod, Cestod, Trematod (bazı), Echinococcus</td>
                                    <td>400 mg tek doz (bağırsak); uzun süreli (doku)</td>
                                </tr>
                                <tr>
                                    <td><b>Mebendazol</b></td>
                                    <td>Aynı</td>
                                    <td>Bağırsak nematodları</td>
                                    <td>100-500 mg</td>
                                </tr>
                                <tr>
                                    <td><b>Tiabendazol</b></td>
                                    <td>Aynı</td>
                                    <td>Strongyloides (eski), kutanöz larva migrans</td>
                                    <td>Yan etki fazla, artık nadir kullanılır</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--warning">
                        <span class="alert-box__icon">⚠️</span>
                        <p class="alert-box__text"><strong>Albendazol Kontrendikasyonları:</strong><br>
                        • <b>Gebelik:</b> Teratojen (kategori C/D)<br>
                        • <b>Karaciğer hastalığı:</b> Hepatotoksisite<br>
                        • Uzun süreli kullanımda: KC enzimleri, tam kan sayımı takibi</p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Diğer Antihelmintikler</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>İlaç</th>
                                    <th>Mekanizma</th>
                                    <th>Endikasyon</th>
                                    <th>Not</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>İvermektin</b></td>
                                    <td>Glutamat-gated Cl⁻ kanal → Paralizi</td>
                                    <td><b>Strongyloides</b>, Onchocerca, Scabies, Pedikuloz</td>
                                    <td>Strongyloides ilk seçim</td>
                                </tr>
                                <tr>
                                    <td><b>Prazikuantel</b></td>
                                    <td>Ca²⁺ geçirgenliği ↑ → Kas spazmı</td>
                                    <td><b>TÜM CESTODLAR</b>, Schistosoma, Clonorchis, Paragonimus</td>
                                    <td>Fasciola'da ETKİSİZ!</td>
                                </tr>
                                <tr>
                                    <td><b>Triklabendazol</b></td>
                                    <td>β-tübülin</td>
                                    <td><b>Fasciola hepatica</b> (TEK ETKİLİ!)</td>
                                    <td>10 mg/kg tek/çift doz</td>
                                </tr>
                                <tr>
                                    <td><b>Pirantel pamoat</b></td>
                                    <td>Nöromusküler blok</td>
                                    <td>Ascaris, Enterobius, kancalı</td>
                                    <td>Gebelikte tercih edilebilir</td>
                                </tr>
                                <tr>
                                    <td><b>Niklozamid</b></td>
                                    <td>Oksidatif fosforilasyon inhibisyonu</td>
                                    <td>Taenia (alternatif)</td>
                                    <td>Absorbe olmaz, sistemik etki yok</td>
                                </tr>
                                <tr>
                                    <td><b>Dietilkarbamazin (DEC)</b></td>
                                    <td>Mikrofilarya öldürür</td>
                                    <td>Lenfatik filaryazis</td>
                                    <td>Onchocerca'da KONTRENDİKE (Mazzotti)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="highlight-box">
                        <p class="highlight-box__title">📋 Parazit-İlaç Eşleştirmesi</p>
                        <p class="highlight-box__content">
                            <b>Strongyloides →</b> İVERMEKTİN (ilk seçim)<br>
                            <b>Fasciola →</b> TRİKLABENDAZOL (tek etkili)<br>
                            <b>Tüm cestodlar →</b> PRAZİKUANTEL<br>
                            <b>Schistosoma →</b> PRAZİKUANTEL<br>
                            <b>Bağırsak nematodları →</b> ALBENDAZOL/MEBENDAZOL<br>
                            <b>Kist hidatik →</b> ALBENDAZOL (cerrahi/PAIR ile)<br>
                            <b>Nörosistiserkoz →</b> ALBENDAZOL + Steroid
                        </p>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Antihelmintik Hafıza</p>
                        <p class="mnemonic-box__text">
                            <b>"İVERMEKTİN = İNVİNCİBLE STRONGYLOİDES"</b><br>
                            <b>"PRAZİKUANTEL = PLATYHELMINTHES (yassı)"</b> → Cestod + Trematod (Fasciola hariç)<br>
                            <b>"TRİKLABENDAZOL = TRİCKY FASCİOLA"</b> → Tek etkili ilaç<br>
                            <b>"ALBENDAZOL = ALL-PURPOSE NEMATOD"</b>
                        </p>
                    </div>
                `
            },
            {
                title: "Özel Durumlarda Tedavi",
                icon: "fas fa-exclamation-circle",
                content: `
                    <div class="sub-section">
                        <h4 class="sub-section__title">Gebelikte Antiparaziter Kullanımı</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Durum</th>
                                    <th>Güvenli</th>
                                    <th>Kontrendike/Dikkatli</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Sıtma</b></td>
                                    <td>Klorokin, Kinin, Artemisinin (2-3. trimester)</td>
                                    <td>Primakin, Doksisiklin, Meflokin</td>
                                </tr>
                                <tr>
                                    <td><b>Toksoplazmoz</b></td>
                                    <td>Spiramisin (1. trimester)</td>
                                    <td>Primetamin (1. trimester yasak)</td>
                                </tr>
                                <tr>
                                    <td><b>Bağırsak helmint</b></td>
                                    <td>Pirantel pamoat</td>
                                    <td>Albendazol, Mebendazol (1. trimester)</td>
                                </tr>
                                <tr>
                                    <td><b>Amip/Giardia</b></td>
                                    <td>Paromomisin</td>
                                    <td>Metronidazol (1. trimester dikkat)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">İmmünsüprese Hastalarda Dikkat</h4>
                        <ul class="feature-list">
                            <li class="feature-item"><b>Strongyloides:</b> Steroid öncesi tarama ZORUNLU (hiperenfeksiyon riski)</li>
                            <li class="feature-item"><b>Toxoplasma:</b> CD4 <100'de profilaksi (TMP-SMX)</li>
                            <li class="feature-item"><b>Cryptosporidium:</b> AIDS'te ciddi ishal, ART ile immün restorasyon</li>
                            <li class="feature-item"><b>Leishmania:</b> Visseral form reaktivasyon riski</li>
                        </ul>
                    </div>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>Nörosistiserkoz Tedavi Uyarısı:</strong><br>
                        • Antihelmintik → Larva ölümü → İNFLAMASYON ARTI!<br>
                        • <b>Kortikosteroid</b> antihelmintikten 1-2 gün ÖNCE başlanmalı<br>
                        • Antiepileptik eklenmeli<br>
                        • Göz tutulumunda antihelmintik VERİLMEZ</p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">İlaç Etkileşimleri</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>İlaç</th>
                                    <th>Etkileşim</th>
                                    <th>Sonuç</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Metronidazol</b></td>
                                    <td>Alkol</td>
                                    <td>Disülfiram reaksiyonu</td>
                                </tr>
                                <tr>
                                    <td><b>Metronidazol</b></td>
                                    <td>Warfarin</td>
                                    <td>Antikoagülan etki ↑</td>
                                </tr>
                                <tr>
                                    <td><b>Prazikuantel</b></td>
                                    <td>CYP3A4 indükleyiciler</td>
                                    <td>Prazikuantel düzeyi ↓</td>
                                </tr>
                                <tr>
                                    <td><b>Albendazol</b></td>
                                    <td>Yağlı yemek</td>
                                    <td>Absorpsiyon ↑ (doku enfeksiyonunda iyi)</td>
                                </tr>
                                <tr>
                                    <td><b>İvermektin</b></td>
                                    <td>Loa loa koenfeksiyonu</td>
                                    <td>Ensefalopati riski</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Özel Durum Hafıza</p>
                        <p class="mnemonic-box__text">
                            <b>"GEBE + TOXO = SPİRAMİSİN"</b><br>
                            <b>"GEBE + HELMİNT = PİRANTEL"</b><br>
                            <b>"STEROİD ÖNCE = NÖROSİSTİSERKOZ"</b><br>
                            <b>"STEROİD BAŞLAMADAN = STRONGYLOİDES TARA"</b><br>
                            <b>"METRONIDAZOL + ALKOL = DİSÜLFİRAM"</b>
                        </p>
                    </div>
                `
            },
            {
                title: "Sınav İçin Kritik Özet",
                icon: "fas fa-graduation-cap",
                content: `
                    <div class="highlight-box">
                        <p class="highlight-box__title">🎯 En Sık Sorulan İlaç Soruları</p>
                        <p class="highlight-box__content">
                            1. <b>Primakin + G6PD =</b> Hemoliz<br>
                            2. <b>Strongyloides =</b> İvermektin<br>
                            3. <b>Fasciola =</b> Triklabendazol (Prazikuantel ETKİSİZ)<br>
                            4. <b>Tüm cestodlar =</b> Prazikuantel<br>
                            5. <b>Gebelik + Toxo =</b> Spiramisin
                        </p>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">Tanı Yöntemleri Hızlı Tablo</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>Parazit</th>
                                    <th>Tanı Yöntemi</th>
                                    <th>Özellik</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Enterobius</b></td>
                                    <td>Selofan bant</td>
                                    <td>Dışkıda DEĞİL</td>
                                </tr>
                                <tr>
                                    <td><b>Cryptosporidium</b></td>
                                    <td>Asit-fast boyama</td>
                                    <td>mZN, Kinyoun</td>
                                </tr>
                                <tr>
                                    <td><b>Plasmodium</b></td>
                                    <td>Kalın/ince yayma</td>
                                    <td>Giemsa</td>
                                </tr>
                                <tr>
                                    <td><b>Toxoplasma</b></td>
                                    <td>IgG/IgM, Avidite</td>
                                    <td>Gebelikte önemli</td>
                                </tr>
                                <tr>
                                    <td><b>Leishmania VL</b></td>
                                    <td>rK39, kemik iliği</td>
                                    <td>Amastigot (LD body)</td>
                                </tr>
                                <tr>
                                    <td><b>Toxocara</b></td>
                                    <td>Seroloji</td>
                                    <td>Dışkıda yumurta YOK</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="sub-section">
                        <h4 class="sub-section__title">İlaç-Parazit Mega Tablosu</h4>
                        <table class="article-table">
                            <thead>
                                <tr>
                                    <th>İlaç</th>
                                    <th>Ana Endikasyonlar</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Albendazol</b></td>
                                    <td>Bağırsak nematodları, Echinococcus, Nörosistiserkoz, Toxocara</td>
                                </tr>
                                <tr>
                                    <td><b>Mebendazol</b></td>
                                    <td>Enterobius, Ascaris, Trichuris, kancalı</td>
                                </tr>
                                <tr>
                                    <td><b>İvermektin</b></td>
                                    <td>Strongyloides, Onchocerca, skabies, bit</td>
                                </tr>
                                <tr>
                                    <td><b>Prazikuantel</b></td>
                                    <td>Taenia, Schistosoma, Clonorchis, Paragonimus, H. nana</td>
                                </tr>
                                <tr>
                                    <td><b>Triklabendazol</b></td>
                                    <td>Fasciola (TEK ETKİLİ)</td>
                                </tr>
                                <tr>
                                    <td><b>Metronidazol</b></td>
                                    <td>E. histolytica (invaziv), Giardia, T. vaginalis</td>
                                </tr>
                                <tr>
                                    <td><b>Primakin</b></td>
                                    <td>P. vivax/ovale (hipnozoit) - G6PD kontrol!</td>
                                </tr>
                                <tr>
                                    <td><b>Spiramisin</b></td>
                                    <td>Gebelikte toxoplasmosis</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="mnemonic-box">
                        <p class="mnemonic-box__label">Mega Hafıza Kodları</p>
                        <p class="mnemonic-box__text">
                            <b>"3C = ASİT-FAST"</b> → Crypto, Cyclo, Cystoisospora<br>
                            <b>"PRİMAKİN = P. vivax + G6PD"</b><br>
                            <b>"İVERMEKTİN = STRONG İLAÇ"</b> (Strongyloides)<br>
                            <b>"TRİKLA = TRİCKY FASCİOLA"</b><br>
                            <b>"PRAZİ = YASSIYA PRASA"</b> (Cestod + Schistosoma)<br>
                            <b>"METRO = AMİP + GİARDİA"</b>
                        </p>
                    </div>

                    <div class="alert-box alert-box--danger">
                        <span class="alert-box__icon">🚨</span>
                        <p class="alert-box__text"><strong>SINAV İÇİN KESİN BİL:</strong><br><br>
                            1. <b>Primakin vermeden önce =</b> G6PD testi<br>
                            2. <b>Fasciola'da Prazikuantel =</b> ETKİSİZ<br>
                            3. <b>Strongyloides tedavisi =</b> İvermektin (Albendazol değil)<br>
                            4. <b>Nörosistiserkozda steroid =</b> Antihelmintikten ÖNCE<br>
                            5. <b>Enterobius tanısı =</b> Selofan bant (dışkı değil)<br>
                            6. <b>Asit-fast parazitler =</b> Cryptosporidium, Cyclospora, Cystoisospora<br>
                            7. <b>Steroid başlamadan önce =</b> Strongyloides taraması<br>
                            8. <b>Gebelikte toxo =</b> Spiramisin
                        </p>
                    </div>

                    <ul class="feature-list">
                        <li><b>Soru tipi:</b> "P. vivax tedavisinde primakin vermeden önce?" → G6PD testi</li>
                        <li><b>Soru tipi:</b> "Fasciola hepatica tedavisinde kullanılan ilaç?" → Triklabendazol</li>
                        <li><b>Soru tipi:</b> "Steroid başlanacak hastada hangi parazit taranmalı?" → Strongyloides</li>
                        <li><b>Soru tipi:</b> "AIDS hastasında ishal, asit-fast boyama pozitif?" → Cryptosporidium</li>
                        <li><b>Soru tipi:</b> "Nörosistiserkoz tedavisinde kortikosteroid ne zaman başlanır?" → Antihelmintikten ÖNCE</li>
                        <li><b>Soru tipi:</b> "Gebelikte toxoplasmosis tedavisi?" → Spiramisin</li>
                        <li><b>Soru tipi:</b> "Enterobius tanısında kullanılan yöntem?" → Selofan bant (Graham)</li>
                    </ul>
                `
            }
        ]
    }
];

// Global export
window.topicsData = topicsData;
