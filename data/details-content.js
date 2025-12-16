/**
 * Details Content - Ayrıntılı Dosyalar Veri Dosyası
 * Seçme konularda spot bilgiler
 */

const detailsData = [
    // ==================== BAKTERİYOLOJİ ====================
    {
        id: 1,
        category: "bakteriyoloji",
        title: "Lizojenik Konversiyon & Faj Kaynaklı Toksinler",
        coreInfo: "Bakteriyofaj (virüs) genomu bakteri kromozomuna profaj olarak entegre olur ve bakteriye yeni virülans faktörü kazandırır. <b>Faj yoksa toksin de yoktur!</b>",
        spotPoints: [
            "<b>C. diphtheriae:</b> β-faj → <i>tox</i> geni → Difteri toksini (A-B toksini, EF-2 inhibisyonu)",
            "<b>V. cholerae:</b> CTXϕ fajı → Kolera toksini (cAMP↑, sıvı sekresyonu)",
            "<b>E. coli O157:H7:</b> Shiga-toksin profajı → Stx1/Stx2 (HUS nedeni)",
            "<b>S. pyogenes:</b> Eritrojenik toksinler (SpeA, SpeC) → Kızıl hastalığı döküntüsü",
            "<b>C. botulinum:</b> Bazı suşlarda toksin geni faj kaynaklı (C, D tipleri)",
            "<b>S. aureus:</b> Stafilokokal enterotoksin A, TSST-1 bazı suşlarda faj ile taşınır"
        ],
        alert: "Antraks toksini (pXO1 plazmidi), tetanoz toksini (plazmid) ve botulinum A/B/E (kromozomal) faj kaynaklı DEĞİLDİR!",
        mnemonic: {
            text: "DiKoŞiKı",
            hint: "Difteri - Kolera - Shiga - Kızıl"
        },
        tags: ["TUS Klasik", "Virülans", "Genetik Transfer", "Toksin"],
        extraInfo: `
            <p><b>Transdüksiyon vs Lizojenik Konversiyon:</b></p>
            <ul class="spot-list">
                <li class="spot-item">Transdüksiyon: Fajın DNA taşıma mekanizması (genel terim)</li>
                <li class="spot-item">Lizojenik konversiyon: Profajın bakteriye yeni fenotip kazandırması (spesifik sonuç)</li>
                <li class="spot-item">Sınav sorusu "toksin kazanım mekanizması" derse → Lizojenik konversiyon</li>
            </ul>
        `
    },
    {
        id: 2,
        category: "bakteriyoloji",
        title: "Gram Boyama - Kritik Noktalar",
        coreInfo: "Gram boyama hücre duvarı peptidoglikan kalınlığına bağlıdır. <b>Kristal viyole + İyot kompleksi</b> kalın peptidoglikanda tutulur (Gram+), ince duvarlı bakterilerden alkol ile yıkanır (Gram-).",
        spotPoints: [
            "<b>Sıra:</b> Kristal viyole → İyot (mordanlama) → Alkol/Aseton (dekolorizasyon) → Safranin",
            "<b>Gram+:</b> Mor/mavi, kalın peptidoglikan (20-80 nm), teikoik asit içerir",
            "<b>Gram-:</b> Pembe/kırmızı, ince peptidoglikan (2-7 nm), dış membran + LPS",
            "<b>Kritik basamak:</b> Dekolorizasyon - fazla alkol Gram+'ı pembeye çevirir!",
            "<b>Gram boyama yapılamaz:</b> Mycoplasma (duvarsız), Mycobacterium (aside dirençli), Chlamydia/Rickettsia (hücre içi)"
        ],
        table: `
            <table>
                <tr><th>Özellik</th><th>Gram (+)</th><th>Gram (-)</th></tr>
                <tr><td>Renk</td><td>Mor/Mavi</td><td>Pembe/Kırmızı</td></tr>
                <tr><td>Peptidoglikan</td><td>Kalın (20-80 nm)</td><td>İnce (2-7 nm)</td></tr>
                <tr><td>Dış membran</td><td>Yok</td><td>Var (LPS)</td></tr>
                <tr><td>Teikoik asit</td><td>Var</td><td>Yok</td></tr>
                <tr><td>Endotoksin</td><td>Yok</td><td>LPS (Lipid A)</td></tr>
            </table>
        `,
        tags: ["Temel", "Laboratuvar", "Boyama"],
        alert: "Yaşlı kültürler (>24 saat) ve aşırı dekolorizasyon yalancı Gram(-) sonuç verir!"
    },
    {
        id: 3,
        category: "bakteriyoloji",
        title: "Staph aureus vs Strep pyogenes Karşılaştırması",
        coreInfo: "Her ikisi de Gram (+) kok, deri/yumuşak doku enfeksiyonları yapar. <b>Katalaz testi</b> ayırt edicidir: S. aureus (+), S. pyogenes (-).",
        spotPoints: [
            "<b>S. aureus:</b> Küme, katalaz +, koagülaz +, mannitol +, altın sarısı pigment",
            "<b>S. pyogenes:</b> Zincir, katalaz -, PYR +, basitrasin duyarlı, β-hemolitik",
            "<b>S. aureus toksinleri:</b> TSST-1 (toksik şok), Enterotoksin (gıda zehiri), PVL (nekrotizan pnömoni)",
            "<b>S. pyogenes toksinleri:</b> Streptolysin O/S, Pirojenik ekzotoksin (kızıl), Hyaluronidaz",
            "<b>S. pyogenes komplikasyonlar:</b> ARA (kalp), APSGN (böbrek) - S. aureus'ta YOK!"
        ],
        table: `
            <table>
                <tr><th>Test</th><th>S. aureus</th><th>S. pyogenes</th></tr>
                <tr><td>Katalaz</td><td><b>Pozitif</b></td><td>Negatif</td></tr>
                <tr><td>Koagülaz</td><td>Pozitif</td><td>Negatif</td></tr>
                <tr><td>Hemoliz</td><td>β (değişken)</td><td>β (kesin)</td></tr>
                <tr><td>PYR</td><td>Negatif</td><td><b>Pozitif</b></td></tr>
                <tr><td>Basitrasin</td><td>Dirençli</td><td><b>Duyarlı</b></td></tr>
            </table>
        `,
        mnemonic: {
            text: "KOK = Katalaz ayırır",
            hint: "Staph = Katalaz (+), Strep = Katalaz (-)"
        },
        tags: ["Gram Pozitif", "Deri Enfeksiyonu", "TUS Klasik"]
    },
    {
        id: 4,
        category: "bakteriyoloji",
        title: "Enterobacteriaceae - Laktoz Fermentasyonu",
        coreInfo: "MacConkey agarda <b>laktoz fermente edenler pembe</b>, etmeyenler renksiz koloni yapar. Önemli patojenler genellikle laktoz NEGATİF'tir!",
        spotPoints: [
            "<b>Laktoz (+) Pembe:</b> E. coli, Klebsiella, Enterobacter, Citrobacter",
            "<b>Laktoz (-) Renksiz:</b> Salmonella, Shigella, Proteus, Yersinia",
            "<b>Geç Laktoz (+):</b> Serratia, bazı Citrobacter (24 saat sonra pembe)",
            "<b>H2S (+):</b> Salmonella (TSI'da siyah), Proteus, Citrobacter",
            "<b>Üreaz (+):</b> Proteus (çok güçlü), Klebsiella, Yersinia"
        ],
        table: `
            <table>
                <tr><th>Bakteri</th><th>Laktoz</th><th>H2S</th><th>Üreaz</th><th>Motilite</th></tr>
                <tr><td>E. coli</td><td>+</td><td>-</td><td>-</td><td>+</td></tr>
                <tr><td>Salmonella</td><td>-</td><td>+</td><td>-</td><td>+</td></tr>
                <tr><td>Shigella</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
                <tr><td>Proteus</td><td>-</td><td>+</td><td>++</td><td>++ (sürünme)</td></tr>
                <tr><td>Klebsiella</td><td>+</td><td>-</td><td>+</td><td>-</td></tr>
            </table>
        `,
        mnemonic: {
            text: "Pembe = Kolit değil",
            hint: "Laktoz (+) → genelde bağırsak florası; Laktoz (-) patojenler → Salmonella, Shigella"
        },
        tags: ["Enterobacteriaceae", "MacConkey", "Biyokimya"]
    },
    {
        id: 5,
        category: "bakteriyoloji",
        title: "Pseudomonas aeruginosa - Hastane Patojeni",
        coreInfo: "Non-fermentatif, oksidaz (+), zorunlu aerob, <b>meyve/üzüm kokusu</b>, yeşil pigment (piyosiyanin + pioverdin). <b>Sıcak küvet foliküliti</b> ve <b>malign otitis eksterna</b> (diyabetik) patognomiktir.",
        spotPoints: [
            "<b>Pigmentler:</b> Piyosiyanin (mavi-yeşil), Pioverdin/Floresein (sarı-yeşil), Piyorubin (kırmızı)",
            "<b>Oksidaz:</b> Kuvvetli POZİTİF (Enterobacteriaceae'den ayırır)",
            "<b>Doğal Direnç:</b> Ampisilin, 1-2. kuşak sefalosporin, tigesiklin, ertapenem",
            "<b>Antipseudomonal:</b> Piperasilin-tazobaktam, seftazidim, sefepim, meropenem, siprofloksasin",
            "<b>Risk faktörleri:</b> Nötropeni, yanık, kistik fibrozis, YBÜ, kateter, ventilatör"
        ],
        alert: "P. aeruginosa intrinsik olarak birçok antibiyotiğe dirençlidir. Ampirik tedavide mutlaka antipseudomonal ajan seçilmeli!",
        tags: ["Non-fermentatif", "Hastane Enfeksiyonu", "Antibiyotik Direnci"]
    },

    // ==================== VİROLOJİ ====================
    {
        id: 6,
        category: "viroloji",
        title: "Hepatit Virusları Karşılaştırması",
        coreInfo: "Hepatit A/E fekal-oral bulaşır, kronikleşmez. Hepatit B/C/D kan yoluyla bulaşır. <b>HBV</b> DNA virusudur (tek istisna!), diğerleri RNA.",
        spotPoints: [
            "<b>HAV:</b> RNA, Picornavirus, fekal-oral, IgM anti-HAV (akut), kronikleşmez",
            "<b>HBV:</b> DNA (parsiyel çift sarmal), Hepadnavirus, HBsAg (taşıyıcı), anti-HBs (bağışıklık)",
            "<b>HCV:</b> RNA, Flavivirus, %80 kronikleşir, HCV-RNA PCR tanı, aşı YOK",
            "<b>HDV:</b> Defektif RNA, sadece HBV (+) kişilerde, HBsAg'ı zarf olarak kullanır",
            "<b>HEV:</b> RNA, Hepevirus, fekal-oral, hamilelerde %20 mortalite, kronikleşmez"
        ],
        table: `
            <table>
                <tr><th>Virus</th><th>Genom</th><th>Bulaş</th><th>Kronikleşme</th><th>Aşı</th></tr>
                <tr><td>HAV</td><td>RNA</td><td>Fekal-oral</td><td>Hayır</td><td>Var</td></tr>
                <tr><td>HBV</td><td><b>DNA</b></td><td>Kan/cinsel</td><td>%5-10</td><td>Var</td></tr>
                <tr><td>HCV</td><td>RNA</td><td>Kan</td><td><b>%80</b></td><td>Yok</td></tr>
                <tr><td>HDV</td><td>RNA</td><td>Kan</td><td>HBV ile</td><td>HBV aşısı</td></tr>
                <tr><td>HEV</td><td>RNA</td><td>Fekal-oral</td><td>Hayır</td><td>Var*</td></tr>
            </table>
        `,
        alert: "HBV'nin DNA virusu olduğu sık sorulan bir tuzaktır. 'Hepatit → RNA' genellemesi yanlıştır!",
        tags: ["Hepatit", "Kan Yoluyla Bulaş", "Aşı"]
    },
    {
        id: 7,
        category: "viroloji",
        title: "HIV Yaşam Döngüsü & İlaç Hedefleri",
        coreInfo: "HIV bir Retrovirus'tur. RNA genomunu <b>Revers Transkriptaz (RT)</b> ile DNA'ya çevirir, <b>İntegraz</b> ile konağa entegre olur, <b>Proteaz</b> ile olgun virion üretir.",
        spotPoints: [
            "<b>gp120:</b> CD4 ve koreseptör (CCR5/CXCR4) bağlanması → Maravirok (CCR5 inhibitörü)",
            "<b>gp41:</b> Membran füzyonu → Enfuvirtid (füzyon inhibitörü)",
            "<b>Revers Transkriptaz:</b> RNA→DNA → NRTI (zidovudin, tenofovir), NNRTI (efavirenz)",
            "<b>İntegraz:</b> Viral DNA entegrasyonu → INSTI (dolutegravir, raltegravir)",
            "<b>Proteaz:</b> Polipeptid kesimi → PI (ritonavir, darunavir)"
        ],
        mnemonic: {
            text: "Bağlan-Gir-Yaz-Entegre-Kes",
            hint: "gp120 → gp41 → RT → Integraz → Proteaz"
        },
        tags: ["HIV", "Antiretroviral", "Yaşam Döngüsü"],
        extraInfo: `
            <p><b>CD4 Sayısı ve Fırsatçı Enfeksiyonlar:</b></p>
            <ul class="spot-list">
                <li class="spot-item"><b><500:</b> Tüberküloz, Kaposi sarkomu</li>
                <li class="spot-item"><b><200:</b> PCP (P. jirovecii), Kandida özofajiti, Kriptokokoz</li>
                <li class="spot-item"><b><100:</b> Toksoplazmoz, Kriptosporidyoz</li>
                <li class="spot-item"><b><50:</b> CMV retiniti, MAC, PML</li>
            </ul>
        `
    },
    {
        id: 8,
        category: "viroloji",
        title: "Influenza - Antijenik Değişim",
        coreInfo: "<b>Antijenik drift:</b> Nokta mutasyonları, küçük değişiklik, mevsimsel salgın. <b>Antijenik shift:</b> Gen segmenti değişimi (reassortment), büyük değişiklik, PANDEMİ!",
        spotPoints: [
            "<b>Drift:</b> Her yıl olur, aşı güncellenmesi gerektirir, epidemi yapar",
            "<b>Shift:</b> Nadir, yeni subtip oluşur (H ve N kombinasyonu), pandemi yapar",
            "<b>Reassortment:</b> İki farklı virus aynı hücreyi enfekte edince gen segmentleri karışır",
            "<b>Domuz:</b> İnsan, kuş ve domuz virusları için 'karıştırma kabı' rolü oynar",
            "<b>H antijeni:</b> Hemaglütinin - hücreye bağlanma; <b>N antijeni:</b> Nöraminidaz - hücreden salınım"
        ],
        table: `
            <table>
                <tr><th>Özellik</th><th>Drift</th><th>Shift</th></tr>
                <tr><td>Mekanizma</td><td>Nokta mutasyon</td><td>Reassortment</td></tr>
                <tr><td>Değişim boyutu</td><td>Küçük</td><td>Büyük</td></tr>
                <tr><td>Sonuç</td><td>Epidemi</td><td><b>Pandemi</b></td></tr>
                <tr><td>Sıklık</td><td>Sürekli</td><td>Nadir</td></tr>
                <tr><td>Aşı etkisi</td><td>Kısmi koruma</td><td>Koruma yok</td></tr>
            </table>
        `,
        alert: "Shift sadece Influenza A'da olur (hayvan rezervuarı var). Influenza B'de sadece drift görülür.",
        tags: ["Influenza", "Pandemi", "Aşı"]
    },

    // ==================== MİKOLOJİ ====================
    {
        id: 9,
        category: "mikoloji",
        title: "Dimorfik Mantarlar",
        coreInfo: "Sıcaklığa bağlı form değiştirir: <b>25°C'de küf (miselyal)</b>, <b>37°C'de maya</b>. 'Küf soğukta, maya sıcakta' - Vücut sıcaklığında patojen form maya!",
        spotPoints: [
            "<b>Histoplasma capsulatum:</b> Yarasa/kuş gübresi, Ohio/Mississippi vadisi, makrofaj içi, kalsifiye granülom",
            "<b>Blastomyces dermatitidis:</b> Geniş tabanlı tomurcuklanma, akciğer + deri, ABD güneydoğu",
            "<b>Coccidioides immitis:</b> Artrokonidia (enfektif), sferül + endospor (dokuda), Güneybatı ABD",
            "<b>Paracoccidioides brasiliensis:</b> 'Gemi dümeni' görünümü, Güney Amerika, mukokütanöz",
            "<b>Sporothrix schenckii:</b> Bahçıvan hastalığı, lenfokütanöz yayılım, puro şeklinde konidi"
        ],
        mnemonic: {
            text: "Maya sıcakta, Küf soğukta",
            hint: "Mold in the Cold, Yeast in the Heat"
        },
        table: `
            <table>
                <tr><th>Mantar</th><th>Coğrafya</th><th>Karakteristik</th></tr>
                <tr><td>Histoplasma</td><td>ABD Midwest</td><td>Makrofaj içi maya</td></tr>
                <tr><td>Blastomyces</td><td>ABD SE</td><td>Geniş tabanlı tomurcuk</td></tr>
                <tr><td>Coccidioides</td><td>ABD SW</td><td>Sferül + endospor</td></tr>
                <tr><td>Paracoccidioides</td><td>Güney Amerika</td><td>Gemi dümeni</td></tr>
                <tr><td>Sporothrix</td><td>Dünya geneli</td><td>Puro şeklinde konidi</td></tr>
            </table>
        `,
        tags: ["Sistemik Mikoz", "Dimorfizm", "Coğrafi Dağılım"]
    },
    {
        id: 10,
        category: "mikoloji",
        title: "Candida Türleri & C. auris Tehlikesi",
        coreInfo: "Candida albicans en sık izole edilen tür. <b>C. auris</b> çoklu ilaca dirençli, hastane salgınları yapan, yüksek mortaliteli yeni bir tehdittir.",
        spotPoints: [
            "<b>C. albicans:</b> Germ tüp (+), klamidospor (+), en sık kandidemi etkeni",
            "<b>C. glabrata:</b> Flukonazol direnci sık, germ tüp (-), yaşlılarda artan",
            "<b>C. krusei:</b> Doğal flukonazol dirençli, lösemi hastalarında",
            "<b>C. parapsilosis:</b> Kateter ilişkili, neonatal kandidemi, biyofilm",
            "<b>C. auris:</b> Çoklu direnç (azol + AmB + ekinokandin olabilir), MALDI-TOF ile tanı, temas izolasyonu şart"
        ],
        alert: "C. auris konvansiyonel yöntemlerle (API, VITEK 2) yanlış tanımlanabilir! MALDI-TOF veya moleküler yöntem gereklidir.",
        table: `
            <table>
                <tr><th>Tür</th><th>Flukonazol</th><th>Özellik</th></tr>
                <tr><td>C. albicans</td><td>Duyarlı</td><td>Germ tüp (+)</td></tr>
                <tr><td>C. glabrata</td><td>↓ Duyarlı</td><td>Yaşlı, doz-bağımlı</td></tr>
                <tr><td>C. krusei</td><td><b>Doğal dirençli</b></td><td>Lösemi</td></tr>
                <tr><td>C. auris</td><td>Dirençli</td><td>Salgın, çoklu direnç</td></tr>
            </table>
        `,
        tags: ["Kandidoz", "Antifungal Direnç", "C. auris"]
    },

    // ==================== PARAZİTOLOJİ ====================
    {
        id: 11,
        category: "parazitoloji",
        title: "Sıtma (Malaria) - Plasmodium Türleri",
        coreInfo: "Dişi <i>Anopheles</i> sivrisineği ile bulaşır. <b>P. falciparum</b> en ağır seyirli (serebral sıtma, %40 parazitemi). <b>P. vivax/ovale</b> hipnozoit yapar → relaps!",
        spotPoints: [
            "<b>P. falciparum:</b> Tropika sıtma, tüm evreleri kanda, muz şekilli gametozit, relaps YOK",
            "<b>P. vivax:</b> Benign tersiyan, hipnozoit (karaciğerde uyur) → primakin gerekir",
            "<b>P. ovale:</b> P. vivax'a benzer, hipnozoit (+), Afrika",
            "<b>P. malariae:</b> Kuartan sıtma (72 saat ateş siklusu), nefrotik sendrom, relaps YOK",
            "<b>P. knowlesi:</b> Maymun sıtması, Güneydoğu Asya, günlük ateş"
        ],
        table: `
            <table>
                <tr><th>Tür</th><th>Ateş siklusu</th><th>Hipnozoit</th><th>Özellik</th></tr>
                <tr><td>P. falciparum</td><td>Düzensiz</td><td>Yok</td><td>En ağır, muz gametozit</td></tr>
                <tr><td>P. vivax</td><td>48 saat</td><td><b>Var</b></td><td>Schüffner granülleri</td></tr>
                <tr><td>P. ovale</td><td>48 saat</td><td><b>Var</b></td><td>Oval eritrosit</td></tr>
                <tr><td>P. malariae</td><td>72 saat</td><td>Yok</td><td>Bant trofozoit</td></tr>
            </table>
        `,
        mnemonic: {
            text: "VİVAX & OVALE = Primakin Ver",
            hint: "Hipnozoit yapanlar → Karaciğer eradikasyonu için primakin şart"
        },
        alert: "Primakin G6PD eksikliğinde hemoliz yapar! Tedaviden önce G6PD düzeyi kontrol edilmeli.",
        tags: ["Sıtma", "Kan Paraziti", "Primakin"]
    },
    {
        id: 12,
        category: "parazitoloji",
        title: "Bağırsak Protozoonları",
        coreInfo: "Dışkıda kist/trofozoit aranır. <b>Entamoeba histolytica</b> invaziv (flask ülser, karaciğer absesi), <b>Giardia</b> non-invaziv (steatore, çinko eksikliği).",
        spotPoints: [
            "<b>E. histolytica:</b> 4 çekirdekli kist, eritrofagositoz, ançuez sos abse, metronidazol + paromomisin",
            "<b>Giardia lamblia:</b> 'Gülen yüz' trofozoit, 4 çekirdekli kist, IgA eksikliğinde kronik",
            "<b>Cryptosporidium:</b> Aside dirençli (Kinyoun), AIDS'te kronik ishal, nitazoksanid",
            "<b>Cyclospora:</b> Aside dirençli, UV ile otofloresan, TMP-SMX",
            "<b>Cystoisospora (Isospora):</b> Aside dirençli, immünsüprese, eozinofili, TMP-SMX"
        ],
        alert: "E. histolytica morfolojik olarak non-patojen E. dispar'dan ayırt edilemez! ELISA veya PCR gerekir.",
        tags: ["Bağırsak Paraziti", "Dışkı İncelemesi", "Aside Dirençli"]
    },

    // ==================== İMMUNOLOJİ ====================
    {
        id: 13,
        category: "immunoloji",
        title: "Hipersensitivite Reaksiyonları (Gell-Coombs)",
        coreInfo: "4 tip aşırı duyarlılık. <b>Tip I:</b> IgE (anafilaksi), <b>Tip II:</b> IgG/IgM sitotoksik, <b>Tip III:</b> İmmün kompleks, <b>Tip IV:</b> Gecikmiş tip, T hücre aracılı.",
        spotPoints: [
            "<b>Tip I (Anlık):</b> IgE → Mast hücre degranülasyonu → Histamin → Anafilaksi, astım, atopi",
            "<b>Tip II (Sitotoksik):</b> IgG/IgM hücre yüzeyine bağlanır → Otoimmün hemolitik anemi, Goodpasture, MG",
            "<b>Tip III (İmmün kompleks):</b> Antijen-antikor birikimi → SLE, serum hastalığı, PSGN",
            "<b>Tip IV (Gecikmiş):</b> T hücre (CD4/CD8) → Tüberkülin testi, kontakt dermatit, transplant reddi"
        ],
        table: `
            <table>
                <tr><th>Tip</th><th>Aracı</th><th>Süre</th><th>Örnek</th></tr>
                <tr><td>I</td><td>IgE, mast hücre</td><td>Dakikalar</td><td>Anafilaksi</td></tr>
                <tr><td>II</td><td>IgG/IgM</td><td>Saatler</td><td>Transfüzyon rxn</td></tr>
                <tr><td>III</td><td>İmmün kompleks</td><td>Saatler-günler</td><td>Serum hastalığı</td></tr>
                <tr><td>IV</td><td>T hücre</td><td>24-72 saat</td><td>PPD, kontakt dermatit</td></tr>
            </table>
        `,
        mnemonic: {
            text: "ACID",
            hint: "Anaphylactic - Cytotoxic - Immune complex - Delayed"
        },
        tags: ["Hipersensitivite", "Otoimmünite", "Alerji"]
    },
    {
        id: 14,
        category: "immunoloji",
        title: "Primer İmmün Yetmezlikler",
        coreInfo: "B hücre defekti → Antikor eksikliği → Tekrarlayan bakteriyel enfeksiyonlar. T hücre defekti → Viral, fungal, fırsatçı enfeksiyonlar.",
        spotPoints: [
            "<b>X-linked Agammaglobulinemi (Bruton):</b> BTK mutasyonu, erkek çocuk, B hücre YOK, Ig tüm sınıflar ↓",
            "<b>CVID:</b> En sık semptomatik PID, erişkin, B hücre var ama Ig üretimi ↓",
            "<b>DiGeorge:</b> 22q11 delesyon, timus hipoplazisi, T hücre ↓, hipoKa, kalp anomalisi, yüz dismorfizmi",
            "<b>SCID:</b> T ve B hücre ↓↓, en ağır, kemik iliği nakli şart",
            "<b>CGD:</b> NADPH oksidaz defekti, nötrofil patlayıcı defekt, katalaz (+) bakterilerle enfeksiyon"
        ],
        alert: "CGD'de katalaz (-) bakteriler (Streptococcus) sorun YAPMAZ çünkü kendi H2O2'lerini üretirler ve nötrofil bunu kullanır!",
        tags: ["PID", "İmmün Yetmezlik", "Enfeksiyon Yatkınlığı"]
    },

    // ==================== LABORATUVAR ====================
    {
        id: 15,
        category: "laboratuvar",
        title: "Sterilizasyon Yöntemleri & Biyolojik İndikatörler",
        coreInfo: "Her sterilizasyon yöntemi için <b>en dirençli organizma</b> biyolojik indikatör olarak kullanılır. Biyolojik indikatör negatif = sterilizasyon başarılı.",
        spotPoints: [
            "<b>Otoklav (Nemli ısı):</b> 121°C, 15 dk → G. stearothermophilus (termofilik)",
            "<b>Kuru ısı (Pastör fırını):</b> 160-180°C, 1-2 saat → B. atrophaeus (subtilis)",
            "<b>Etilen oksit:</b> Isıya duyarlı malzeme → B. atrophaeus",
            "<b>Hidrojen peroksit plazma:</b> Düşük ısı, hızlı → G. stearothermophilus",
            "<b>Gama radyasyon:</b> Tek kullanımlık malzeme → B. pumilus"
        ],
        table: `
            <table>
                <tr><th>Yöntem</th><th>Biyolojik İndikatör</th><th>Kullanım</th></tr>
                <tr><td>Otoklav</td><td><i>G. stearothermophilus</i></td><td>Besiyeri, tekstil, cerrahi alet</td></tr>
                <tr><td>Kuru ısı</td><td><i>B. atrophaeus</i></td><td>Toz, yağ, cam</td></tr>
                <tr><td>EtO</td><td><i>B. atrophaeus</i></td><td>Plastik, elektronik</td></tr>
                <tr><td>H2O2 plazma</td><td><i>G. stearothermophilus</i></td><td>Endoskop, hassas alet</td></tr>
            </table>
        `,
        alert: "Bowie-Dick testi sterilite testi DEĞİLDİR! Sadece ön-vakumlu otoklavlarda hava tahliyesini kontrol eder.",
        tags: ["Sterilizasyon", "Biyolojik İndikatör", "Enfeksiyon Kontrol"]
    },
    {
        id: 16,
        category: "laboratuvar",
        title: "Kan Kültürü - Kritik Noktalar",
        coreInfo: "Kan kültürü şişeleri <b>SPS (Sodyum Polianetol Sülfonat)</b> içerir. EDTA bakterisidal olduğundan ASLA kullanılmaz! Kontaminasyon en sık <b>KNS</b>'dir.",
        spotPoints: [
            "<b>Minimum 2 set:</b> Farklı venlerden, her set aerob + anaerob şişe",
            "<b>Hacim:</b> Yetişkin 20-30 mL/set, çocuk 1-3 mL",
            "<b>Alım sırası:</b> Önce kültür şişesi, sonra diğer tüpler",
            "<b>Kontaminasyon kriterleri:</b> Tek set pozitif, 48 saatten sonra üreme, KNS/deri florası",
            "<b>Gerçek pozitiflik:</b> ≥2 set aynı bakteri, <24 saatte üreme, klinik uyum"
        ],
        alert: "EDTA'lı tüpe alınan kan kültür şişesine aktarılırsa yalancı negatif sonuç çıkar - bakteriler ölür!",
        tags: ["Pre-Analitik", "Bakteriyemi", "Kontaminasyon"]
    },
    {
        id: 17,
        category: "laboratuvar",
        title: "BOS İncelemesi - Menenjit Ayırıcı Tanı",
        coreInfo: "BOS bulguları menenjit etyolojisini ayırt etmede kritiktir. <b>Bakteriyel:</b> Bulanık, PMN↑, protein↑↑, glukoz↓↓. <b>Viral:</b> Berrak, lenfosit↑, protein hafif↑, glukoz N.",
        spotPoints: [
            "<b>Bakteriyel:</b> Glukoz <40 mg/dL (veya BOS/serum <0.4), protein >100, PMN >1000",
            "<b>Viral:</b> Glukoz normal, protein 50-100, lenfosit 10-500, PCR tanı",
            "<b>TB/Fungal:</b> Glukoz ↓, protein ↑↑, lenfosit, fibrin ağı/örümcek ağı",
            "<b>Kriptokokal:</b> India ink ile kapsül, antijen testi, AIDS'te sık",
            "<b>Numunenin taşınması:</b> Oda sıcaklığında, 15 dk içinde - SOĞUTULMAZ!"
        ],
        table: `
            <table>
                <tr><th>Parametre</th><th>Normal</th><th>Bakteriyel</th><th>Viral</th><th>TB</th></tr>
                <tr><td>Görünüm</td><td>Berrak</td><td>Bulanık</td><td>Berrak</td><td>Hafif bulanık</td></tr>
                <tr><td>Hücre</td><td><5</td><td>>1000 PMN</td><td>10-500 L</td><td>100-500 L</td></tr>
                <tr><td>Protein</td><td>15-45</td><td>>100</td><td>50-100</td><td>>100</td></tr>
                <tr><td>Glukoz</td><td>45-80</td><td><b><40</b></td><td>Normal</td><td>↓</td></tr>
            </table>
        `,
        alert: "N. meningitidis ve H. influenzae soğuğa duyarlıdır (soğuk şoku). BOS asla buzdolabına konmaz!",
        tags: ["BOS", "Menenjit", "Pre-Analitik"]
    },
    {
        id: 18,
        category: "laboratuvar",
        title: "Antibiyotik Duyarlılık Testleri",
        coreInfo: "Disk difüzyon (Kirby-Bauer) en yaygın yöntem. <b>MİK</b> (Minimum İnhibitör Konsantrasyon) altın standarttır. E-test MİK değerini disk difüzyon kolaylığıyla verir.",
        spotPoints: [
            "<b>Disk difüzyon:</b> Zon çapı ölçülür → S/I/R, Mueller-Hinton agar, CLSI/EUCAST kriterleri",
            "<b>MİK:</b> Bakteriyi inhibe eden en düşük antibiyotik konsantrasyonu",
            "<b>MBC:</b> Bakterisidal konsantrasyon, MİK'ten ≥4 kat yüksekse → tolerans",
            "<b>E-test:</b> Gradiyent şerit, elips şeklinde zon, kesişim noktası = MİK",
            "<b>Otomatize sistemler:</b> VITEK 2, Phoenix, Microscan - MİK + identifikasyon"
        ],
        alert: "Bazı bakterilerde disk difüzyon güvenilmez: N. gonorrhoeae, H. influenzae, S. pneumoniae → MİK önerilir.",
        tags: ["ADT", "MİK", "CLSI"]
    }
];

// Global export for dock.js
window.detailsData = detailsData;
