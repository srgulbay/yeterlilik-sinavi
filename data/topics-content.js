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
    }
];

// Global export for dock.js
window.topicsData = topicsData;
