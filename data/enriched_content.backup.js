const contentData = [
    {
        id: 1,
        category: "Genel Mikrobiyoloji",
        topic: "Lizojenik Konversiyon",
        question: "Aşağıdaki bakteri virülans faktörlerinden hangisinin sentezi doğrudan bakteriyofaja bağlıdır?",
        correctAnswer: "Corynebacterium diphtheriae toksini",
        details: {
            coreInfo: "<b>Lizojenik Konversiyon:</b> Bakteriyofaj genomunun bakteri kromozomuna profaj olarak entegre olup bakteriye yeni bir virülans faktörü kazandırmasıdır; faj yoksa toksin de yoktur.",
            keyPoints: [
                "<b>C. diphtheriae:</b> Beta-fajı taşırsa <i>tox</i> geni eklenir → Difteri toksini sentezlenir.",
                "<b>V. cholerae:</b> CTXϕ fajı ile kolera toksini genini kazanır.",
                "<b>E. coli O157:H7:</b> Shiga-benzeri toksin (STx) faj kökenlidir.",
                "<b>S. pyogenes:</b> Eritrojenik (pirojenik) ekzotoksinleri faj aracılıdır (kızıl döküntüsü)."
            ],
            pitfalls: "Antraks toksini, tetanoz toksini ve botulinum toksini faj değil, plazmid veya kromozomal genlerle kodlanır; lizojenik konversiyonla karıştırmayın.",
            relatedQuestions: [
                "<b>Aşağıdakilerden hangisi lizojenik konversiyonla ilişkilidir?</b> → Doğru cevap: <i>C. diphtheriae</i> toksin üretimi (faj kaynaklı)",
                "<b>Lizojenik faj kaybı durumunda hangi özellik kaybolur?</b> → Doğru cevap: Toksin üretimi (ör. difteri toksini)",
                "<b>Difteri toksin geninin bakteriye kazanımı hangi mekanizma ile açıklanır?</b> → Doğru cevap: Lizojenik konversiyon",
                "<b>Aşağıdaki toksinlerden hangisi faj aracılığıyla kazanılmaz?</b> → Doğru cevap: Tetanoz toksini (plazmid kaynaklıdır)"
            ]
        }
    },
    {
        id: 2,
        category: "Sterilizasyon",
        topic: "Biyolojik İndikatörler",
        question: "Nemli ısı (Otoklav) için uygun biyolojik indikatör hangisidir?",
        correctAnswer: "Geobacillus stearothermophilus",
        details: {
            coreInfo: "Sterilizasyon validasyonunda amaç, yönteme en dayanıklı mikroorganizmayı öldürebildiğini göstermektir; bu nedenle her yöntem için farklı spor türü biyolojik indikatör olarak seçilir.",
            table: `
                <table class="info-table">
                    <tr><th>Yöntem</th><th>İndikatör Spor</th><th>Mekanizma</th></tr>
                    <tr><td><b>Otoklav (Nemli Isı)</b></td><td><i>G. stearothermophilus</i></td><td>Protein Denatürasyonu</td></tr>
                    <tr><td>Kuru Isı (Pastör)</td><td><i>B. atrophaeus (subtilis)</i></td><td>Oksidasyon</td></tr>
                    <tr><td>Etilen Oksit</td><td><i>B. atrophaeus (subtilis)</i></td><td>Alkilasyon</td></tr>
                </table>
            `,
            keyPoints: [
                "Biyolojik indikatörler <b>spor şeritleri</b> veya ampuller şeklinde olup belirli bir log10 azaltımını gösterecek şekilde tasarlanır.",
                "Otoklavda <i>G. stearothermophilus</i> seçilmesinin nedeni nemli ısıya en dirençli sporları taşımasıdır.",
                "Kuru ısı ve etilen oksitte <i>Bacillus atrophaeus</i> kullanılır.",
                "Biyolojik indikatör negatifleşmeden yalnızca fiziksel/kimyasal indikatörlere bakarak steril kabul etmek hatalıdır."
            ],
            relatedQuestions: [
                "<b>Aşağıdakilerden hangisi etilen oksit sterilizasyonunun biyolojik indikatörüdür?</b> → Doğru cevap: <i>Bacillus atrophaeus</i> (subtilis)",
                "<b>Otoklav validasyonunda kullanılan biyolojik indikatör neden termofilik olmalıdır?</b> → Doğru cevap: Çünkü nemli ısıya en dirençli bakteri olmalıdır",
                "<b>Sterilizasyon sürecini en iyi gösteren indikatör tipi hangisidir?</b> → Doğru cevap: Biyolojik indikatör (mikroorganizma bazlı)",
                "<b>Biyolojik indikatör pozitif çıkarsa ne yapılmalıdır?</b> → Doğru cevap: Yük geri çağrılır, ekipman servis alır"
            ]
        }
    },
    {
        id: 3,
        category: "Sterilizasyon",
        topic: "Bowie-Dick Testi",
        question: "Bowie-Dick test paketi otoklava nasıl yerleştirilmelidir?",
        correctAnswer: "Boş otoklavın alt rafına, drenaj yakınına",
        details: {
            coreInfo: "Bowie-Dick testi, ön vakumlu buhar sterilizatörlerinde hava tahliyesi ve buhar penetrasyonunu değerlendiren bir <b>vakum performans testidir</b>; sterilite kanıtı değildir.",
            keyPoints: [
                "Test paketi boş otoklavın <b>alt rafına, drenaj yakınına</b> yerleştirilir (en zor koşul).",
                "Sadece <b>ön vakumlu</b> (pre-vacuum) otoklavlarda uygulanır.",
                "Desen homojen renk değişimi göstermezse hava cebinin varlığı ve vakum yetersizliği düşünülür.",
                "Bowie-Dick testi steriliteyi değil, hava uzaklaştırmayı değerlendirir."
            ],
            relatedQuestions: [
                "<b>Bowie-Dick testi neyi değerlendirir?</b> → Doğru cevap: Hava tahliyesi ve buhar penetrasyonu (vakum performansı)",
                "<b>Soğuk nokta (cold spot) neden drenaj çıkışına yakın kabul edilir?</b> → Doğru cevap: Hava buhardan yoğundur ve dibe çöker",
                "<b>Ön vakumlu otoklavlarda günlük olarak hangi test uygulanmalıdır?</b> → Doğru cevap: Bowie-Dick testi",
                "<b>Bowie-Dick testi başarısız olursa ne yapılmalıdır?</b> → Doğru cevap: Otoklav kullanıma kapatılır, servis çağrılır"
            ]
        }
    },
    {
        id: 4,
        category: "Sterilizasyon",
        topic: "Bowie-Dick Sıklığı",
        question: "Bowie-Dick test paketinin kullanım sıklığı nasıl olmalıdır?",
        correctAnswer: "Her gün (İlk kullanımdan önce, boşken)",
        details: {
            coreInfo: "Bowie-Dick testi, ön vakumlu otoklavlarda makinenin o gün için güvenle kullanılabileceğini gösteren günlük performans testidir; ilk boş çalışmada yapılmalıdır.",
            alert: "Bowie-Dick testi ile Biyolojik İndikatörü karıştırma! BD testi makineyi (günlük), Bİ testi ise yükü (özellikle implant içeren kritik yükleri) değerlendirir.",
            relatedQuestions: [
                "<b>Bowie-Dick testi hangi sıklıkla uygulanmalıdır?</b> → Doğru cevap: Her gün, ilk kullanım öncesi",
                "<b>Biyolojik indikatör testleri hangi yükler için yapılmalıdır?</b> → Doğru cevap: İmplant içeren kritik yükler (her yük), diğerleri haftalık",
                "<b>Fiziksel/kimyasal indikatörler ne zaman kullanılır?</b> → Doğru cevap: Her yükte (entegratör şeritler)"
            ]
        }
    },
    {
        id: 5,
        category: "Pre-Analitik",
        topic: "İdrar Kültürü (Yanlış Yapılan)",
        question: "Güvenilir bir idrar kültürü sonucu almak için en doğru uygulama hangisidir?",
        correctAnswer: "Tak-çıkar tipi düz sonda ile direkt mesaneden örnek almak",
        details: {
            coreInfo: "Amaç: Distal üretra ve vajina florasının örneği kontamine etmesini engellemektir.",
            keyPoints: [
                "<b>Sonda Torbası:</b> ASLA örnek alınmaz (Biyofilm ve durgun idrar).",
                "<b>Zaman Kuralı:</b> Oda ısısında 2 saat, buzdolabında 24 saat.",
                "<b>Antiseptik:</b> Temizlikte numuneye karışırsa bakteriyi öldürür (Yalancı Negatif)."
            ],
            alert: "Sonda torbasından örnek almak veya idrarı oda sıcaklığında 4 saat bekletmek en sık yapılan hatalardır.",
            relatedQuestions: [
                "<b>İdrar kültürü için sonda torbasından örnek alınır mı?</b> → Doğru cevap: Hayır, asla (biyofilm riski)",
                "<b>İdrar örneği oda ısısında en fazla kaç saat bekletilebilir?</b> → Doğru cevap: 2 saat",
                "<b>Antiseptik temizliğinde numuneye karışması hangi sonucu verir?</b> → Doğru cevap: Yalancı negatif (bakteriler ölür)",
                "<b>Kateterli hastada idrar kültürü nasıl alınır?</b> → Doğru cevap: Tek kullanımlık düz sondayla direkt mesaneden"
            ]
        }
    },
    {
        id: 7,
        category: "Mikrobiyota",
        topic: "Mikrobiyota Projeleri",
        question: "İnsan bağırsak gen kataloğunu ve fonksiyonel ilişkileri hedefleyen proje?",
        correctAnswer: "MetaHIT",
        details: {
            coreInfo: "<b>MetaHIT:</b> Metagenomics of the Human Intestinal Tract. Spesifik olarak <b>bağırsak</b> ve <b>gen kataloğu</b> odaklıdır.",
            pitfalls: "HMP (Human Microbiome Project) tüm vücut bölgelerine bakan daha genel bir ABD projesidir. MetaHIT ise 'İkinci Genom' kavramını ortaya atmıştır.",
            relatedQuestions: [
                "<b>Tüm vücut bölgelerinde mikrobiyota haritalayan proje hangisidir?</b> → Doğru cevap: HMP (Human Microbiome Project)",
                "<b>MetaHIT projesi hangi organa odaklanır?</b> → Doğru cevap: Bağırsak",
                "<b>'İkinci genom' kavramını ortaya atan proje hangisidir?</b> → Doğru cevap: MetaHIT"
            ]
        }
    },
    {
        id: 8,
        category: "Pre-Analitik",
        topic: "Tıbbi Atık & Bulaş",
        question: "Hangi sıvıyla kontamine materyal, kan yoksa dekontaminasyon gerektirmez?",
        correctAnswer: "İdrar",
        details: {
            coreInfo: "Standart Önlemler'e göre; Kan Yoluyla Bulaşan Patojenler (HIV, HBV, HCV) açısından riskli olmayan sıvılar: İdrar, Dışkı, Ter, Tükürük.",
            alert: "Bu kural sadece 'BBP Riski' içindir. İdrar yine de enfeksiyöz olabilir ama tıbbi atık prosedürü farklıdır.",
            relatedQuestions: [
                "<b>Kan yoluyla bulaşan patojenler açısından riskli vücut sıvıları hangileridir?</b> → Doğru cevap: Kan, BOS, plevral sıvı, periton sıvısı, amniyotik sıvı",
                "<b>Standart önlemler kapsamında idrar dekontaminasyon gerektirir mi?</b> → Doğru cevap: BBP riski açısından hayır, ama yine de atık prosedürü gerekir",
                "<b>Ter, tükürük ve dışkı BBP açısından riskli midir?</b> → Doğru cevap: Hayır (kan yoksa)"
            ]
        }
    },
    {
        id: 9,
        category: "Sterilizasyon",
        topic: "Endoskop Dezenfeksiyonu",
        question: "Endoskoplar için aktivasyon gerektirmeyen, stabil ve az korozif YDD ajanı?",
        correctAnswer: "Orto-fitalaldehit (OPA)",
        details: {
            coreInfo: "Glutaraldehitin yerini alan modern standarttır.",
            table: `
                <table class="info-table">
                    <tr><th>Özellik</th><th>Glutaraldehit</th><th>OPA (Orto-fitalaldehit)</th></tr>
                    <tr><td>Aktivasyon</td><td>Gerekir (Karıştırılmalı)</td><td><b>Gerekmez (Hazır)</b></td></tr>
                    <tr><td>Protein Etkisi</td><td>Fikse eder (Yapıştırır)</td><td>Boyar (Gri Leke)</td></tr>
                    <tr><td>Hız</td><td>Yavaş</td><td>Hızlı</td></tr>
                </table>
            `,
            relatedQuestions: [
                "<b>Glutaraldehit kullanımında aktivasyon gerekir mi?</b> → Doğru cevap: Evet, kullanımdan önce karıştırılmalı",
                "<b>OPA'nın dezavantajı nedir?</b> → Doğru cevap: Deri ve mukozayı gri renkle boyar",
                "<b>Yüksek düzey dezenfeksiyon süresi OPA için ne kadardır?</b> → Doğru cevap: 12 dakika (glutaraldehitten daha kısa)"
            ]
        }
    },
    {
        id: 12,
        category: "Pre-Analitik",
        topic: "BOS Taşıma",
        question: "Bakteriyel menenjit ön tanısıyla alınan BOS'un taşıma koşulları?",
        correctAnswer: "Oda sıcaklığında, 15 dakika içinde",
        details: {
            coreInfo: "Hedef bakteriler (<i>N. meningitidis, H. influenzae</i>) <b>Soğuk Şokuna</b> duyarlıdır. Buzdolabı bunları öldürür.",
            alert: "Viral menenjit (PCR) için olsaydı buzda taşırdık. Bakteriyel menenjit için numune ASLA soğutulmaz.",
            relatedQuestions: [
                "<b>BOS bakteriyel kültür için neden soğutulmaz?</b> → Doğru cevap: Menenjit etkenleri soğuğa çok duyarlıdır, ölürler",
                "<b>Viral menenjit şüphesinde BOS nasıl taşınır?</b> → Doğru cevap: Buzdolabında (PCR için)",
                "<b>BOS örneği laboratuvara kaç dakika içinde ulaşmalıdır?</b> → Doğru cevap: 15 dakika içinde",
                "<b>BOS'da en sık menenjit etkenleri hangileridir?</b> → Doğru cevap: <i>N. meningitidis, S. pneumoniae, H. influenzae</i>"
            ]
        }
    },
    {
        id: 14,
        category: "Sterilizasyon",
        topic: "Toz Madde Sterilizasyonu",
        question: "Toz halindeki bir maddeyi hangi yöntemle sterilize edebilirsiniz?",
        correctAnswer: "Pastör Fırını (Kuru Isı)",
        details: {
            coreInfo: "Toz maddeler ıslanamaz. Bu nedenle buhar (Otoklav) kullanılamaz.",
            keyPoints: [
                "<b>Otoklav:</b> Sıvılar, besiyerleri, tekstil, metal.",
                "<b>Pastör Fırını:</b> Tozlar, yağlar (vazelin), cam eşyalar."
            ],
            relatedQuestions: [
                "<b>Vazelin hangi yöntemle sterilize edilir?</b> → Doğru cevap: Kuru ısı (Pastör fırını)",
                "<b>Otoklav neden toz maddeler için uygun değildir?</b> → Doğru cevap: Buhar penetre edemez",
                "<b>Kuru ısı sterilizasyonu sıcaklık ve süresi nedir?</b> → Doğru cevap: 160-180°C, 60-120 dakika",
                "<b>Cam eşyalar hangi yöntemle sterilize edilir?</b> → Doğru cevap: Kuru ısı (Pastör fırını)"
            ]
        }
    },
    {
        id: 15,
        category: "Klinik Bakteriyoloji",
        topic: "Hemorajik Kolit (EHEC)",
        question: "Hemorajik kolit tanısı için besiyeri ve test eşleşmesi?",
        correctAnswer: "Sorbitol Mac Conkey -> Oksidaz Negatif",
        details: {
            coreInfo: "Etken <i>E. coli</i> O157:H7'dir. En önemli özelliği <b>Sorbitolü Fermente EDEMEMESİDİR</b>.",
            keyPoints: [
                "Normal E. coli: Sorbitol (+) -> Pembe Koloni",
                "EHEC O157: Sorbitol (-) -> Renksiz Koloni",
                "MUG Testi: EHEC O157 negatiftir."
            ],
            relatedQuestions: [
                "<b>E. coli O157:H7'nin Sorbitol MacConkey'deki görünümü nedir?</b> → Doğru cevap: Renksiz koloniler (sorbitol negatif)",
                "<b>EHEC'in MUG testi nasıl sonuçlanır?</b> → Doğru cevap: Negatif (normal E. coli pozitiftir)",
                "<b>Hemorajik kolit etkeni hangi toksini üretir?</b> → Doğru cevap: Shiga-benzeri toksin (Verotoksin)",
                "<b>HUS (Hemolitik Üremik Sendrom) hangi patojenle ilişkilidir?</b> → Doğru cevap: EHEC (E. coli O157:H7)"
            ]
        }
    },
    {
        id: 17,
        category: "Pre-Analitik",
        topic: "Kan Kültürü Hataları",
        question: "Kan kültürü örnek alma uygulamasında hangisi YANLIŞTIR?",
        correctAnswer: "Önerilen antikoagülan EDTA'dır (YANLIŞ)",
        details: {
            coreInfo: "Kan kültürü şişeleri <b>SPS (Sodyum Polianetol Sülfonat)</b> içerir. EDTA bakteriler için toksiktir.",
            alert: "Kanı önce mor kapaklı tüpe (EDTA) alıp sonra kültür şişesine aktarmak, bakterilerin ölmesine ve sonucun yalancı negatif çıkmasına neden olur.",
            relatedQuestions: [
                "<b>Kan kültürü şişelerinde hangi antikoagülan bulunur?</b> → Doğru cevap: SPS (Sodyum Polianetol Sülfonat)",
                "<b>EDTA'nın bakterilere etkisi nedir?</b> → Doğru cevap: Toksiktir, öldürür (yalancı negatif yapar)",
                "<b>Kan kültürü alımında tüp sırası nasıl olmalıdır?</b> → Doğru cevap: İlk önce kültür şişeleri, sonra diğer tüpler",
                "<b>Kan kültürü için kaç set alınmalıdır?</b> → Doğru cevap: Minimum 2 set (her set aerob + anaerob)"
            ]
        }
    },
    {
        id: 18,
        category: "Pre-Analitik",
        topic: "Dışkı Transportu",
        question: "Dışkı transportu için hangi besiyeri KULLANILMAZ?",
        correctAnswer: "Alkali Peptonlu Su (Kullanılmaz)",
        details: {
            coreInfo: "Soru 'Transport' (Taşıma) besiyerini soruyor. Alkali Peptonlu Su bir <b>Zenginleştirme</b> besiyeridir.",
            keyPoints: [
                "<b>Cary-Blair:</b> Dışkı taşıma için Altın Standarttır.",
                "<b>Alkali Peptonlu Su:</b> Vibrio cholerae'yi çoğaltmak (zenginleştirmek) için laboratuvarda kullanılır."
            ],
            relatedQuestions: [
                "<b>Dışkı transportu için altın standart besiyeri hangisidir?</b> → Doğru cevap: Cary-Blair",
                "<b>Alkali Peptonlu Su ne için kullanılır?</b> → Doğru cevap: Vibrio cholerae zenginleştirmesi",
                "<b>Dışkı örneği transport besiyeri olmadan kaç saat bekletilebilir?</b> → Doğru cevap: Maksimum 2 saat",
                "<b>Amies transport besiyeri hangi örnekler için kullanılır?</b> → Doğru cevap: Boğaz, yara, genital örnekler"
            ]
        }
    },
    {
        id: 20,
        category: "Pre-Analitik",
        topic: "Mantar Örneği Saklama",
        question: "Mantar şüpheli akciğer biyopsisi gecikecekse nerede saklanır?",
        correctAnswer: "Buzdolabında (+4°C)",
        details: {
            coreInfo: "<b>Mantık:</b> Biyopsi steril değildir, bakteri içerir. Oda ısısında bakteriler hızla üreyip mantarı baskılar (Overgrowth).",
            keyPoints: [
                "<b>+4°C:</b> Bakterileri durdurur, mantarlar canlı kalır. Doğrusu budur.",
                "<b>Oda Isısı:</b> Bakteriyel kontaminasyon riski çok yüksektir (Yalancı Negatif).",
                "<b>Dondurma:</b> Mantar hiflerini parçalar. Yasaktır."
            ],
            alert: "Sınav modülünüzde cevap hatalı (37°C) verilmiş olabilir. Doğrusu +4°C'dir. 37°C'de bakteriler mantarı örter.",
            relatedQuestions: [
                "<b>Mantar kültürü için biyopsi neden buzdolabında saklanır?</b> → Doğru cevap: Bakteriyel çoğalmayı önlemek için",
                "<b>Mantar örnekleri dondurulabilir mi?</b> → Doğru cevap: Hayır, hifler parçalanır",
                "<b>Kan kültürü şişelerine mantar ekimi neden yapılır?</b> → Doğru cevap: Kandidemi şüphesinde hızlı üreme sağlar",
                "<b>Derin mantar enfeksiyonu şüphesinde hangi örnek tipi tercih edilir?</b> → Doğru cevap: Biyopsi (sürüntü yetersizdir)"
            ]
        }
    },
    {
        id: 21,
        category: "Mikrobiyota",
        topic: "Alzheimer & Bakteri",
        question: "Oral mikrobiyota elemanı olup Alzheimer ile ilişkilendirilen?",
        correctAnswer: "Porphyromonas gingivalis",
        details: {
            coreInfo: "<b>Gingipain Hipotezi:</b> Periodontitis etkeni olan bu bakteri beyne geçerek amiloid plak oluşumunu tetikleyebilir.",
            keyPoints: [
                "Ağız-Beyin ekseninin en güçlü kanıtıdır.",
                "<i>P. gingivalis</i> kronik periodontitisin 'kilit taşı' patojenidir."
            ],
            relatedQuestions: [
                "<b>Gingipain nedir ve hangi patojen üretir?</b> → Doğru cevap: Proteaz enzimi, <i>Porphyromonas gingivalis</i> üretir",
                "<b>Oral-beyin ekseni hangi nörodejeneratif hastalıkla ilişkilendirilir?</b> → Doğru cevap: Alzheimer hastalığı",
                "<b>Periodontitis'in sistemik etkileri nelerdir?</b> → Doğru cevap: Kardiyovasküler hastalık, diyabet, Alzheimer riski",
                "<b>Kilit taşı patojen (keystone pathogen) ne demektir?</b> → Doğru cevap: Az sayıda olup tüm florayı disbiyozise yönlendirir"
            ]
        }
    },
    {
        id: 22,
        category: "Pre-Analitik",
        topic: "Su Analizi",
        question: "Su analizinde öncelikli uygulanan deklorasyon işleminde ne kullanılır?",
        correctAnswer: "Sodyum Tiyosülfat",
        details: {
            coreInfo: "Klorlu su (şebeke/havuz) alınırken klor nötralize edilmezse, numune laboratuvara gidene kadar bakteriler ölür.",
            keyPoints: [
                "Sonuç: <b>Yalancı Negatif</b> olur.",
                "Çözüm: Şişe içine önceden Sodyum Tiyosülfat konur."
            ],
            relatedQuestions: [
                "<b>Havuz suyu analizi için şişeye ne konulur?</b> → Doğru cevap: Sodyum tiyosülfat (klorun nötralizasyonu için)",
                "<b>Klor nötralize edilmezse su kültüründe ne olur?</b> → Doğru cevap: Bakteriler ölür, yalancı negatif sonuç alınır",
                "<b>Su örnekleri kaç saat içinde işleme alınmalıdır?</b> → Doğru cevap: 6-8 saat içinde (ideal 2 saat)",
                "<b>Koliform analizi için hangi yöntem kullanılır?</b> → Doğru cevap: Membran filtrasyon veya tüp dilüsyon (MPN)"
            ]
        }
    },
    {
        id: 23,
        category: "Mikoloji",
        topic: "Rinoorbitoserebral Zigomikoz",
        question: "Rinoorbitoserebral zigomikoz tablosunda en önemli predispozan faktör hangisidir?",
        correctAnswer: "Diyabetik ketoasidoz",
        details: {
            coreInfo: "<b>Zigomikoz (Mukormikoz):</b> <i>Rhizopus, Mucor, Lichtheimia</i> türlerinin neden olduğu hızlı ilerleyen, anjioinvaziv bir mantar enfeksiyonudur. Rinoorbitoserebral form sinüslerden başlayıp orbita ve beyne yayılır; mortalitesi çok yüksektir.",
            keyPoints: [
                "<b>Diyabetik ketoasidoz:</b> En önemli risk faktörüdür; asidik ortam mantarın üremesini kolaylaştırır.",
                "Diğer risk faktörleri: Nötropeni, hematolojik maligniteler, demir overload (deferoksamin kullanımı), organ nakli, kortikosteroid tedavisi.",
                "Klinik bulgular: Yüzde şişlik, siyah eskar (nekroz), göz kapağı ödemi, oftalmoloji, baş ağrısı; hızlı ilerler.",
                "Tanı: Biyopside geniş, açılı olmayan (90°) hifler ve anjioinvazyon; kültür bazen negatif olabilir.",
                "Tedavi: Derhal amfoterisin B + agresif cerrahi debridman + altta yatan hastalığın düzeltilmesi (asidoz tedavisi)."
            ],
            pitfalls: "Aspergilloz ile karıştırılabilir; ancak aspergillus hifler septate ve dar açılıdır (45°), zigomikoz hifler geniş ve septesizdir.",
            relatedQuestions: [
                "<b>Zigomikoz tablosunda histopatolojik olarak görülen hif özellikleri nelerdir?</b> → Doğru cevap: Geniş, septesiz, 90° açıyla dallanan hifler",
                "<b>Deferoksamin tedavisi hangi mantar enfeksiyonu riskini artırır?</b> → Doğru cevap: Zigomikoz (demir overload mantara büyüme avantajı sağlar)",
                "<b>Rinoserebral mukormikoz tedavisinde ilk seçenek ilaç hangisidir?</b> → Doğru cevap: Amfoterisin B (liposomal form tercih edilir)",
                "<b>Mantar enfeksiyonlarında anjioinvazyon hangi tablolarda görülür?</b> → Doğru cevap: Zigomikoz ve invaziv aspergilloz"
            ]
        }
    },
    {
        id: 24,
        category: "Mikoloji",
        topic: "Mantar Boyaları",
        question: "Aşağıdaki boyama yöntemlerinden hangisi mantar elemanlarının ışık mikroskobu ile direkt tanısında kullanılamaz?",
        correctAnswer: "Kalkoflor beyazı",
        details: {
            coreInfo: "Direkt mikroskobik tanıda mantar hif ve mayalarının görünür hale getirilmesi için çeşitli boyalar kullanılır. Ancak bazı yöntemler klasik ışık mikroskobuna değil, floresan mikroskobuna yöneliktir.",
            keyPoints: [
                "Laktofenol pamuk mavisi: Kültür kolonilerinin morfolojik incelenmesinde kullanılır.",
                "Çini mürekkebi: <i>Cryptococcus neoformans</i> gibi kapsüllü mayaların kapsülünü negatif kontrast ile gösterir.",
                "Gram boyama: Birçok maya türü Gram pozitif oval hücreler olarak izlenir.",
                "%10-30 KOH: Keratinli dokulardaki mantar elemanlarını açığa çıkarır (tırnak, saç, deri).",
                "Kalkoflor beyazı: Kitin ve selüloza bağlanan <b>floresan</b> boyadır; <b>floresan mikroskop</b> gerektirir, klasik ışık mikroskobunda kullanılamaz."
            ],
            relatedQuestions: [
                "<b>KOH preparatında mantar elemanlarının görünürlüğünü artırmak için hangi boyalar eklenebilir?</b> → Doğru cevap: Parker mavi mürekkep veya Kongo kırmızısı",
                "<b>Kriptokokal menenjitte BOS'ta kapsülü göstermek için hangi boyama kullanılır?</b> → Doğru cevap: Çini mürekkebi (India ink)",
                "<b>Mantar kültür kolonilerinin morfolojik incelenmesinde hangi boya kullanılır?</b> → Doğru cevap: Laktofenol pamuk mavisi",
                "<b>Floresan mikroskopi gerektiren mantar boyama yöntemi hangisidir?</b> → Doğru cevap: Kalkoflor beyazı"
            ]
        }
    },
    {
        id: 25,
        category: "Mikoloji",
        topic: "Blastomyces Prostatiti",
        question: "Mississippi Nehri boyunca gezi sonrası grip benzeri tablo ve haftalar sonra prostatitte geniş tabanla tomurcuklanan maya hücreleri görülüyor. En olası etken hangisidir?",
        correctAnswer: "Blastomyces dermatitidis",
        details: {
            coreInfo: "<b>Blastomyces dermatitidis:</b> Kuzey Amerika'da (özellikle Mississippi ve Ohio nehir havzaları) toprak ve organik materyalde bulunan dimorfik bir mantardır. Solunum yoluyla alınır, akciğer infeksiyonu sonrası kronik deri ve genitoüriner tutulum (prostat, epididim) yapabilir.",
            keyPoints: [
                "Dimorfiktir: 25°C'de küf, 37°C'de maya formu; histolojide <b>kalın duvarlı, geniş tabanla tomurcuklanan</b> maya hücreleri tipiktir.",
                "Erkeklerde genitoüriner tutulum sık olup özellikle prostatit ve epididimo-orşit tabloları ile karşımıza çıkar.",
                "ABD'de Mississippi, Ohio ve Great Lakes çevresi klasik endemik bölgeleridir; mağara, nehir, orman aktiviteleri öyküsü sık görülür.",
                "Tanıda doku biyopsisinde PAS/GMS boyalarla maya görüntüsü ve kültürde dimorfizm önemli ipuçlarıdır.",
                "Tedavide hafif-orta olgularda itrakonazol, ağır veya dissemine olgularda amfoterisin B tercih edilir."
            ],
            pitfalls: "Cryptococcus neoformans prostatı tutabilir ancak tipik histoloji dar tabanlı tomurcuklanan kapsüllü mayadır; Candida türleri ise geniş tabanlı tomurcuklanma göstermez.",
            relatedQuestions: [
                "<b>Blastomycosis olgularında en sık tutulan organ sistemleri hangileridir?</b> → Doğru cevap: Akciğer (primer), deri, kemik ve genitoüriner sistem",
                "<b>Histopatolojik olarak geniş tabanlı tomurcuklanan maya hücreleri hangi sistemik mikozda tipiktir?</b> → Doğru cevap: Blastomikoz",
                "<b>Genitoüriner blastomikozun klinik bulguları nelerdir?</b> → Doğru cevap: Prostatit, epididimit, testis absesi",
                "<b>Endemik dimorfik mantarların coğrafi dağılımı nasıldır?</b> → Doğru cevap: Blastomyces (Mississippi/Ohio), Histoplasma (aynı bölge), Coccidioides (güneybatı ABD)"
            ]
        }
    },
    {
        id: 26,
        category: "Mikoloji",
        topic: "Candida auris",
        question: "Çoklu ilaca dirençli, hastane ortamında hızla yayılan ve yüksek mortaliteye neden olan yeni Candida türü hangisidir?",
        correctAnswer: "Candida auris",
        details: {
            coreInfo: "<b>Candida auris:</b> 2009'da Japonya'da kulak kanalından ilk kez izole edilen, çoklu antifungal direnci ve hastane ortamında hızlı yayılma özelliği nedeniyle küresel halk sağlığı tehdidi olarak kabul edilen yeni bir Candida türüdür.",
            keyPoints: [
                "Çoklu ilaç direnci: Flukonazol, amfoterisin B ve ekinokandinlere dirençli suşlar sık görülür.",
                "Hastane ortamında kalıcılık: Yüzeylerde ve medikal cihazlarda uzun süre canlı kalır, çevresel kontaminasyon ve salgınlara yol açar.",
                "Tanıda zorluk: Konvansiyonel yöntemlerle (API, Vitek) genellikle yanlış tanımlanır; MALDI-TOF MS veya moleküler yöntemler gereklidir.",
                "Yüksek mortalite: Özellikle invaziv kandidiyazis formlarında %30-60 mortalite oranı bildirilmiştir.",
                "Risk faktörleri: Yoğun bakım yatışı, geniş spektrumlu antibiyotik ve antifungal kullanımı, invaziv girişimler, immünsüpresyon."
            ],
            pitfalls: "Diğer Candida türlerinden biyokimyasal testlerle ayrımı zor olabilir; mutlaka ileri tanı yöntemleri kullanılmalıdır.",
            relatedQuestions: [
                "<b>C. auris'in tanısında kullanılan altın standart yöntem hangisidir?</b> → Doğru cevap: MALDI-TOF MS veya sekans bazlı moleküler testler",
                "<b>Hastane ortamında C. auris bulaşını önlemek için hangi önlemler alınmalıdır?</b> → Doğru cevap: Temas izolasyonu, çevresel dezenfeksiyon (klor bazlı), aktif sürveyans",
                "<b>C. auris enfeksiyonunda tedavi seçenekleri nelerdir?</b> → Doğru cevap: Ekinokandinler (mikafungin, anidulafungin) ilk seçenek; duyarlılık testine göre amfoterisin B veya azol kombinasyonları",
                "<b>C. auris hangi vücut bölgelerinde kolonize olabilir?</b> → Doğru cevap: Deri, aksilla, kasık, rektum, nares (burun)"
            ]
        }
    },
    {
        id: 27,
        category: "Mikoloji",
        topic: "Histoplasma capsulatum",
        question: "Mağara keşfi sonrası akciğer infiltrasyonu ve yaygın lenfadenopati gelişen hastada BAL örneğinde küçük maya hücreleri görülüyor. En olası etken?",
        correctAnswer: "Histoplasma capsulatum",
        details: {
            coreInfo: "<b>Histoplasma capsulatum:</b> Yarasa ve kuş dışkısı ile kontamine toprakta bulunan dimorfik bir mantardır. İnhalasyon sonrası genellikle asemptomatik veya hafif pnömoni; immünsüprese hastalarda dissemine hastalık yapabilir.",
            keyPoints: [
                "Endemik bölge: Mississippi ve Ohio nehir havzaları (ABD); mağara, eski bina, köprü keşifleri risk faktörüdür.",
                "Dimorfik: Çevrede misel, 37°C'de küçük (<5 µm) maya formunda; makrofaj içinde çoğalır.",
                "Klinik formlar: Akut pulmoner (self-limited), kronik kaviter (tüberküloza benzer), dissemine (AIDS, malignite).",
                "Tanı: BAL, biyopsi, kemik iliği kültürü; histolojide küçük mayalar (Wright-Giemsa ile mor görünür); antijen testi (idrar/serum) hızlı ve duyarlıdır.",
                "Tedavi: Hafif olgularda itrakonazol; ağır/dissemine hastalıkta amfoterisin B ardından itrakonazol idame."
            ],
            pitfalls: "<i>Pneumocystis jirovecii</i> ile karıştırılabilir; ancak Pneumocystis kist yapısı gösterir ve Gomori methenamine silver (GMS) ile kist duvarı boyanır.",
            relatedQuestions: [
                "<b>Histoplasma capsulatum hangi hücre içinde çoğalır?</b> → Doğru cevap: Makrofajlar (intraselüler patojendir)",
                "<b>Histoplazmoz tanısında antijen testi hangi örneklerde kullanılır?</b> → Doğru cevap: İdrar ve serum (hızlı, duyarlı ve invaziv olmayan)",
                "<b>Kronik kaviter histoplazmoz hangi hastalıkla karıştırılabilir?</b> → Doğru cevap: Tüberküloz (radyolojik ve klinik benzerlik)",
                "<b>AIDS hastalarında dissemine histoplazmoz nasıl prezente olur?</b> → Doğru cevap: Ateş, hepatosplenomegali, pansitopeni, sistemik bulgular"
            ]
        }
    },
    {
        id: 28,
        category: "Mikoloji",
        topic: "Coccidioidomycosis",
        question: "Arizona'da yapı işinde çalışan hastada pnömoni, eritema nodosum ve eklem ağrıları gelişiyor. Kültürde barrel-shaped artrokonidiler görülüyor. Etken?",
        correctAnswer: "Coccidioides immitis/posadasii",
        details: {
            coreInfo: "<b>Coccidioides immitis/posadasii:</b> Güneybatı ABD (Arizona, California), Meksika ve Güney Amerika'da çöl toprağında bulunan dimorfik mantardır. İnhalasyon sonrası 'Valley Fever' tablosu yapar; %1 olguda dissemine hastalık gelişir.",
            keyPoints: [
                "Endemik bölge: Arizona, California, Nevada, New Mexico; toprak kazma, toz fırtınası, deprem gibi çevresel olaylar salgınlara yol açabilir.",
                "Dimorfik: Çevrede artrokonidiler (barrel-shaped, son derece enfeksiyöz), dokuda spherule (küresel yapı içinde endospor).",
                "Klinik: Akut pnömoni, eritema nodosum, artralji ('desert rheumatism'); %1'den azında menejit, kemik, deri tutulumu.",
                "Tanı: Kültür (laboratuvar tehlikesi!), seroloji (IgM/IgG, titer takibi), histopatolojide spherule.",
                "Tedavi: Hafif olgularda flukonazol/itrakonazol; ağır/dissemine hastalıkta amfoterisin B, menenjitte ömür boyu flukonazol."
            ],
            pitfalls: "Kültürde üreyen artrokonidiler son derece enfeksiyözdur (aerosol riski); biyogüvenlik kabini (BSC-3) gereklidir.",
            relatedQuestions: [
                "<b>Coccidioides'in dokuda görülen formu nedir?</b> → Doğru cevap: Spherule (içinde endospor içeren küresel yapı)",
                "<b>Valley Fever neden bu isimle anılır?</b> → Doğru cevap: San Joaquin Valley (California) endemik bölge olduğu için",
                "<b>Koksidiyoidomikoz menejiti tedavisi nasıl olmalıdır?</b> → Doğru cevap: Ömür boyu flukonazol (yüksek doz, ör. 800 mg/gün)",
                "<b>Laboratuvarda Coccidioides kültürü neden tehlikelidir?</b> → Doğru cevap: Artrokonidiler hava yoluyla kolayca yayılır ve son derece enfeksiyözdür"
            ]
        }
    },
    {
        id: 29,
        category: "Mikoloji",
        topic: "Cryptococcus neoformans",
        question: "AIDS hastasında baş ağrısı ve BOS'ta Çini mürekkebi ile pozitif kapsüllü mayalar görülüyor. Etken?",
        correctAnswer: "Cryptococcus neoformans",
        details: {
            coreInfo: "<b>Cryptococcus neoformans:</b> Çevrede (özellikle güvercin dışkısı) bulunan kapsüllü bir maya mantarıdır. İmmünsüprese hastalarda (AIDS, organ nakli, kortikosteroid tedavisi) menenjit ve dissemine hastalık yapar.",
            keyPoints: [
                "Kapsül: Kalın polisakkarit kapsül virülans faktörüdür; fagositoz ve kompleman aktivasyonunu engeller.",
                "Klinik: Subakut menenjit (baş ağrısı, ateş, boyun sertliği hafif olabilir), pulmoner nodüller, deri lezyonları.",
                "Tanı: BOS'ta çini mürekkebi (kapsül negatif kontrast ile görülür), kriptokokal antijen testi (lateks aglütinasyon/lateral flow, çok duyarlı), kültür.",
                "BOS bulguları: Lenfositik pleositoz, yüksek protein, düşük glukoz, yüksek açılış basıncı (>25 cmH2O).",
                "Tedavi: İndüksiyon (amfoterisin B + flusitozin 2 hafta), konsolidasyon (flukonazol 8 hafta), idame (flukonazol düşük doz, CD4 >200 olana kadar)."
            ],
            pitfalls: "Kriptokokal menenjitte BOS basıncı çok yüksek olabilir; seri lomber ponksiyonlar veya ventriküler drenaj gerekebilir (yüksek intrakraniyal basınç tedavide kritiktir).",
            relatedQuestions: [
                "<b>Kriptokokal menenjitte BOS açılış basıncı yüksek olursa ne yapılmalıdır?</b> → Doğru cevap: Seri lomber ponksiyonlar veya ventriküler şant (basıncı <20 cmH2O'ya düşürmek hedeflenir)",
                "<b>Kriptokokal antijen testi hangi vücut sıvılarında kullanılabilir?</b> → Doğru cevap: BOS, serum, idrar (duyarlılık >95%)",
                "<b>Cryptococcus gattii'nin C. neoformans'tan farkı nedir?</b> → Doğru cevap: İmmünkompetan hastalarda da hastalık yapar, endemik bölgeler farklıdır (tropik/subtropik)",
                "<b>Kriptokokal menenjit tedavisinde flusitozin neden önemlidir?</b> → Doğru cevap: Amfoterisin B ile sinerjistik etki gösterir, BOS penetrasyonu yüksektir"
            ]
        }
    },
    {
        id: 30,
        category: "Mikoloji",
        topic: "Paracoccidioides brasiliensis",
        question: "Brezilya'da çiftçi olan hastada kronik mukokütanöz lezyonlar ve 'gemi dümeni' şeklinde tomurcuklanan mayalar görülüyor. Etken?",
        correctAnswer: "Paracoccidioides brasiliensis",
        details: {
            coreInfo: "<b>Paracoccidioides brasiliensis:</b> Latin Amerika'da (özellikle Brezilya, Kolombiya) endemik olan dimorfik bir mantardır. Kronik granülomatöz hastalık yapar; mukokütanöz lezyonlar, lenfadenopati ve akciğer tutulumu tipiktir.",
            keyPoints: [
                "Endemik bölge: Latin Amerika (Brezilya, Kolombiya, Venezuela, Arjantin); toprak, bitkisel materyal ile temas öyküsü.",
                "Karakteristik görünüm: 'Gemi dümeni' veya 'Mickey Mouse' şeklinde tomurcuklanan maya hücreleri (pilot's wheel).",
                "Klinik formlar: Akut/subakut (juvenil, lenfatik), kronik (erişkin, mukokütanöz + pulmoner).",
                "Mukokütanöz lezyonlar: Ağız mukozası, dudak, burun, larinks; ülseratif, moriform (dut benzeri) lezyon.",
                "Tedavi: İtrakonazol (hafif-orta), amfoterisin B ardından itrakonazol (ağır hastalık); tedavi süresi uzundur (6-24 ay)."
            ],
            pitfalls: "Tüberküloz veya leishmaniasis ile karıştırılabilir; tanıda maya formunun karakteristik tomurcuklanma şekli ayırt edicidir.",
            relatedQuestions: [
                "<b>Paracoccidioidomycosis neden genellikle erkeklerde görülür?</b> → Doğru cevap: Östrojen mantarın dönüşümünü inhibe eder (koruyucu etki)",
                "<b>'Gemi dümeni' şeklinde tomurcuklanma hangi mantara özgüdür?</b> → Doğru cevap: <i>Paracoccidioides brasiliensis</i>",
                "<b>Paracoccidioidomycosis tedavisi ne kadar sürer?</b> → Doğru cevap: Genellikle 6-24 ay (nüks riski yüksektir)",
                "<b>Juvenil form paracoccidioidomycosis nasıl prezente olur?</b> → Doğru cevap: Yaygın lenfadenopati, hepatosplenomegali, kemik iliği tutulumu (akut lenfatik form)"
            ]
        }
    },
    {
        id: 31,
        category: "Mikoloji",
        topic: "Sporothrix schenckii",
        question: "Bahçıvan dikene batma sonrası el ve kolda lenfokütan yayılım gösteren nodüler lezyonlar gelişiyor. Etken?",
        correctAnswer: "Sporothrix schenckii",
        details: {
            coreInfo: "<b>Sporothrix schenckii:</b> Toprakta ve bitkisel materyalde bulunan dimorfik bir mantardır. Travmatik inokulasyon (diken, ahşap kıymık) sonrası lenfokütan sporotrikoz yapar; lenfatik yol boyunca nodüller zincir gibi dizilir.",
            keyPoints: [
                "Bulaş yolu: Travmatik inokulasyon (diken, gül dikeni, kedi tırmığı); bahçıvanlar, çiçekçiler, ormancılar risk altındadır.",
                "Lenfokütan form: En sık görülür; primer lezyon ardından lenfatik yol boyunca 'nodüler zincir' şeklinde lezyonlar.",
                "Diğer formlar: Sabit kutanöz (tek lezyon), mukokütanöz, osteoartiküler, pulmoner, dissemine (nadirdir, immünsüprese hastalarda).",
                "Tanı: Kültür (25°C'de misel, 37°C'de maya formu), biyopside sigar-shaped veya oval mayalar (PAS/GMS ile).",
                "Tedavi: İtrakonazol (hafif-orta), amfoterisin B (ağır/dissemine); ısı uygulaması (lokal sıcak kompres) yardımcı olabilir."
            ],
            pitfalls: "Lenfokütan form bakteriyel lenfanjit, atipik mikobakteri veya leishmaniasis ile karıştırılabilir; kültür tanıda kritiktir.",
            relatedQuestions: [
                "<b>Lenfokütan sporotrikoz hangi patojenlerle ayırıcı tanıda düşünülür?</b> → Doğru cevap: <i>Nocardia, Mycobacterium marinum, Leishmania</i>",
                "<b>Sporotrikozda 'cigar-shaped' maya görünümü ne anlama gelir?</b> → Doğru cevap: Dokuda maya formunun oval veya puro şeklinde görülmesi (elongated yeast)",
                "<b>Sporotrikoz tedavisinde itrakonazol ne kadar süre kullanılır?</b> → Doğru cevap: Minimum 3-6 ay (lenfokütan form için)",
                "<b>Kedi ile ilişkili sporotrikoz hangi ülkede yaygındır?</b> → Doğru cevap: Brezilya (Rio de Janeiro'da kedi kaynaklı salgın bildirilmiştir)"
            ]
        }
    },
    {
        id: 32,
        category: "Mikoloji",
        topic: "Pneumocystis jirovecii",
        question: "AIDS hastasında nefes darlığı, kuru öksürük ve yaygın interstisyel infiltrasyon; BAL'da Gomori methenamine silver ile kist yapıları görülüyor. Etken?",
        correctAnswer: "Pneumocystis jirovecii",
        details: {
            coreInfo: "<b>Pneumocystis jirovecii:</b> Önceden protozoa olarak sınıflandırılan ancak genetik olarak mantarlara yakın bir patojendir (fungus-like). AIDS ve immünsüprese hastalarda interstisyel pnömoni (PCP) yapar; tedavisiz mortalite çok yüksektir.",
            keyPoints: [
                "Risk faktörleri: AIDS (CD4 <200/μL), hematopoietik kök hücre/solid organ nakli, kortikosteroid tedavisi, anti-TNF ajanları.",
                "Klinik: Subakut başlangıç, nefes darlığı, kuru öksürük, ateş, hipoksi (egzersizle artar); akciğer grafi yaygın interstisyel infiltrasyon.",
                "Tanı: BAL veya biyopside GMS veya Giemsa/Wright boyası ile kist formları (top şeklinde, içinde sporozoit); immünfloresan (DFA) daha duyarlıdır; PCR yüksek duyarlılık.",
                "Laboratuvar: LDH yüksekliği, hipoksemi (PaO2 <70 mmHg), β-D-glukan pozitif (fungal biyobelirteç).",
                "Tedavi: Trimetoprim-sulfametoksazol (TMP-SMX) yüksek doz (15-20 mg/kg/gün TMP); alternatif: pentamidin, atovaquon, klindamisin + primakin. Orta-ağır olgularda kortikosteroid eklenir."
            ],
            pitfalls: "Pneumocystis kültürde üretilemez; tanı tamamen mikroskopi veya moleküler yöntemlerle konur. Profilaksi (TMP-SMX) CD4 <200 olan AIDS hastalarında zorunludur.",
            relatedQuestions: [
                "<b>Pneumocystis jirovecii profilaksisi ne zaman başlanmalıdır?</b> → Doğru cevap: AIDS'te CD4 <200/μL, organ nakli sonrası, uzun süreli kortikosteroid tedavisi",
                "<b>PCP tedavisinde kortikosteroid ne zaman eklenir?</b> → Doğru cevap: PaO2 <70 mmHg veya A-a gradiyenti >35 mmHg olan orta-ağır olgularda",
                "<b>Gomori methenamine silver (GMS) boyası Pneumocystis'te neyi boyar?</b> → Doğru cevap: Kist duvarını (siyah renk); içerideki sporozoit boyanmaz",
                "<b>β-D-glukan testi hangi mantar enfeksiyonlarında pozitif çıkar?</b> → Doğru cevap: Kandidiyazis, aspergiloz, Pneumocystis (kriptokokta negatif)"
            ]
        }
    },
    {
        id: 33,
        category: "Mikoloji",
        topic: "Aspergillus fumigatus",
        question: "Balgam örneğinin Gram boyalı preparatında dikotom dallanma gösteren septalı hif yapıları hangi mantara aittir?",
        correctAnswer: "Aspergillus fumigatus",
        details: {
            coreInfo: "<b>Aspergillus fumigatus:</b> En sık invaziv aspergilloz etkenidir. Septate (bölmeli), hiyalen, dar açı (45°) ile dallanan hifler ile karakterizedir. Gram boyamada görülebilir ancak GMS veya PAS boyaları daha belirgindir.",
            keyPoints: [
                "Dikotom (Y-şeklinde) dallanma: Dar açılı (45°), düzgün, septate hifler aspergilloz için tipiktir.",
                "Zigomikozdan ayırıcı tanı: Zigomikoz geniş açılı (90°), septesiz hiflere sahiptir.",
                "Konidyofor yapısı: Vezikül üzerinde fiyalidler ve konidya zincirleri (kültürde).",
                "Risk faktörleri: Nötropeni, kortikosteroid tedavisi, hematopoietik kök hücre nakli, kronik granülomatöz hastalık.",
                "Klinik formlar: İnvaziv pulmoner aspergilloz (IPA), aspergilloma (küre mantarı), alerjik bronkopulmoner aspergilloz (ABPA)."
            ],
            pitfalls: "Fusarium, Scedosporium gibi diğer hiyalen küfler de benzer hif yapısına sahip olabilir; kesin tanı kültür ve moleküler yöntemlerle konur.",
            relatedQuestions: [
                "<b>Aspergillus hiflerinin morfolojik özellikleri nelerdir?</b> → Doğru cevap: Septate, hiyalen, dar açı (45°) ile dikotom dallanma",
                "<b>İnvaziv aspergilloz tanısında galaktomannan testinin rolü nedir?</b> → Doğru cevap: Aspergillus hücre duvarı polisakkaridi; serum ve BAL'da erken tanı için kullanılır",
                "<b>Aspergilloma (küre mantarı) nedir?</b> → Doğru cevap: Aspergillus'un pre-existing kavite içinde saprofitik kolonizasyonu (örn. eski TB kavitesi)",
                "<b>İnvaziv aspergilloz tedavisinde ilk seçenek ilaç hangisidir?</b> → Doğru cevap: Vorikonazol (alternatif: amfoterisin B, izoavukonazol)"
            ]
        }
    },
    {
        id: 34,
        category: "Mikoloji",
        topic: "Trichophyton rubrum",
        question: "Tırnak kazıntı örneğinde 8. günde pamuğumsu beyaz renkli, ters çevrildiğinde şarap kırmızısı pigment gösteren koloni ve puro şeklinde makrokonidyalar görülüyor. Etken?",
        correctAnswer: "Trichophyton rubrum",
        details: {
            coreInfo: "<b>Trichophyton rubrum:</b> Dermatofit enfeksiyonlarının (tinea pedis, unguium, corporis) en sık etkenidir. Koloninin ters yüzünde karakteristik kırmızı pigment oluşturur.",
            keyPoints: [
                "Makrokonidya: Puro şeklinde (cigar-shaped), ince duvarlı, 3-8 hücreli, nadirdir.",
                "Mikrokonidya: Gözyaşı damlası veya dairesel şekilde, küçük, bol miktarda, hifler boyunca dizilir.",
                "Pigment: Koloni ters yüzünde şarap kırmızısı veya mahogany rengi (önce krem-sarı, zamanla kırmızımsı).",
                "Tanı: Üreaz negatif, in vitro saç perforasyonu negatif.",
                "Tedavi: Topikal (terbinafin, siklopiroks) veya sistemik (terbinafin, itrakonazol) antifungal; tırnak enfeksiyonu uzun tedavi gerektirir (3-6 ay)."
            ],
            pitfalls: "T. mentagrophytes de benzer klinik tablo yapar ancak ters yüz pigmenti yoktur veya açık sarıdır; in vitro saç perforasyonu pozitiftir.",
            relatedQuestions: [
                "<b>T. rubrum ile T. mentagrophytes ayırıcı tanısı nasıl yapılır?</b> → Doğru cevap: T. rubrum kırmızı pigment (+), saç perforasyonu (-); T. mentagrophytes pigmentsiz, saç perforasyonu (+)",
                "<b>Dermatofit enfeksiyonlarında KOH preparatı neyi gösterir?</b> → Doğru cevap: Septalı hifler ve artrosporlar (keratinli dokuda)",
                "<b>Onikomikoz tedavisi ne kadar sürer?</b> → Doğru cevap: Tırnak enfeksiyonunda 3-6 ay (oral terbinafin veya itrakonazol pulse tedavisi)",
                "<b>Dermatofitlerin tanımlanmasında kullanılan testler nelerdir?</b> → Doğru cevap: Üreaz, in vitro saç perforasyonu, pigment oluşumu, mikroskobik morfoloji"
            ]
        }
    },
    {
        id: 35,
        category: "Mikoloji",
        topic: "Candida parapsilosis",
        question: "Yenidoğan ünitesinde üreme sıklığının artması hastane enfeksiyonu kontrol önlemlerinin yetersizliğini gösteren Candida türü hangisidir?",
        correctAnswer: "Candida parapsilosis",
        details: {
            coreInfo: "<b>Candida parapsilosis:</b> El florasında bulunur, parenteral beslenme ve kateter ile yakından ilişkilidir. Yenidoğan ünitelerinde artış, el hijyeni ve kateter bakımının yetersizliğini gösterir.",
            keyPoints: [
                "Bulaş yolu: Sağlık çalışanlarının elleri, kontamine parenteral beslenme solüsyonları, intravasküler kateterler.",
                "Biyofilm: Plastik yüzeylerde (kateter, protez) güçlü biyofilm oluşturma kapasitesi.",
                "Yenidoğan risk faktörleri: Prematürite, düşük doğum ağırlığı, santral venöz kateter, total parenteral beslenme (TPN).",
                "Klinik: Kandidemi, endokardit (protez kapak), peritonit, endoftalmit.",
                "Tedavi: Flukonazol duyarlı (C. albicans'a benzer); ekinokandinlere in vitro duyarlılık daha düşük olabilir."
            ],
            alert: "C. parapsilosis üremesinin artışı enfeksiyon kontrol uygulamalarının (el hijyeni, aseptik kateter bakımı) gözden geçirilmesi gerektiğini gösterir.",
            relatedQuestions: [
                "<b>C. parapsilosis hangi durumlarda artış gösterir?</b> → Doğru cevap: Kateter kullanımı, TPN, yetersiz el hijyeni",
                "<b>Biyofilm oluşturan Candida türleri hangileridir?</b> → Doğru cevap: C. parapsilosis, C. albicans, C. tropicalis",
                "<b>Yenidoğanlarda kandidemi risk faktörleri nelerdir?</b> → Doğru cevap: Prematürite, düşük doğum ağırlığı, geniş spektrum antibiyotik, santral kateter, TPN",
                "<b>C. parapsilosis tedavisinde ilk seçenek nedir?</b> → Doğru cevap: Flukonazol (duyarlı suşlarda); ekinokandinler alternatiftir"
            ]
        }
    },
    {
        id: 36,
        category: "Mikoloji",
        topic: "Cryptococcus-Birdseed Agar",
        question: "Aşağıdaki mikolojik uygulama ilişkilerinden hangisinde doğru ilişki kurulamaz?",
        correctAnswer: "Birdseed agar-Cryptococcus neoformans-üreaz aktivitesi (YANLIŞ İLİŞKİ)",
        details: {
            coreInfo: "<b>Birdseed (Niger seed) agar:</b> Cryptococcus neoformans'ı tanımlamak için kullanılır; fenol oksidaz aktivitesi sayesinde koloniler kahverengi/siyah olur. Üreaz aktivitesi ayrı bir testtir.",
            keyPoints: [
                "Birdseed agar: Caffeic acid içerir; C. neoformans fenol oksidaz enzimi ile melanin üretir → kahverengi/siyah koloni.",
                "Üreaz testi: Ayrı bir tanımlama testidir; C. neoformans üreaz pozitiftir (üreyi amonyak ve CO2'ye parçalar).",
                "Germ tüp: C. albicans ve C. dubliniensis pozitif.",
                "Çini mürekkebi: Kapsülü negatif kontrast ile gösterir (Cryptococcus için).",
                "Cornmeal agar: C. albicans klamidospor oluşturur."
            ],
            pitfalls: "Birdseed agar ile üreaz testi aynı şey değildir; birdseed agar fenol oksidaz, üreaz testi üre hidroliz aktivitesini gösterir.",
            relatedQuestions: [
                "<b>Cryptococcus neoformans tanımlama testleri nelerdir?</b> → Doğru cevap: Üreaz (+), birdseed agar (melanin +), kapsül (çini mürekkebi +), 37°C'de üreme",
                "<b>Germ tüp testi hangi Candida türlerinde pozitiftir?</b> → Doğru cevap: C. albicans ve C. dubliniensis",
                "<b>Klamidospor hangi Candida türlerinde görülür?</b> → Doğru cevap: C. albicans (cornmeal agar'da terminal klamidospor kümeleri)",
                "<b>Cryptococcus'ta fenol oksidaz enziminin önemi nedir?</b> → Doğru cevap: Melanin üretimi ile virülans faktörü; birdseed agar'da tanıda kullanılır"
            ]
        }
    },
    {
        id: 37,
        category: "Mikoloji",
        topic: "Dermatofit Dışı Küfler - Duyarlılık Testi",
        question: "CLSI tarafından dermatofit dışı küflerin antifungal duyarlılık testleri için disk difüzyon yönteminde önerilen besiyeri hangisidir?",
        correctAnswer: "Mueller-Hinton agar",
        details: {
            coreInfo: "<b>CLSI M51 (disk difüzyon):</b> Dermatofit dışı küfler (Aspergillus, Fusarium, Scedosporium gibi) için Mueller-Hinton agar kullanılır; mayalar için RPMI 1640 agar kullanılır.",
            keyPoints: [
                "Dermatofit dışı küfler (küf-DFK): Mueller-Hinton agar + 2% glukoz + 0.5 µg/mL metilen mavisi (CLSI M51).",
                "Mayalar (Candida, Cryptococcus): RPMI 1640 agar + 2% glukoz (CLSI M44).",
                "Broth mikrodilüsyon (MIC): RPMI 1640 broth (CLSI M38 - küfler, M27 - mayalar).",
                "İnkübasyon: 35°C, 24-48 saat (küfler için daha uzun süre gerekebilir).",
                "Standart inokulum: 0.5 McFarland."
            ],
            pitfalls: "Mayalar ve küfler için farklı besiyerleri kullanılır; karıştırmamak önemlidir.",
            relatedQuestions: [
                "<b>Mayaların antifungal duyarlılık testinde hangi besiyeri kullanılır?</b> → Doğru cevap: RPMI 1640 agar (disk difüzyon) veya RPMI 1640 broth (MIC)",
                "<b>CLSI M51 hangi mikroorganizmalar için geliştirilmiştir?</b> → Doğru cevap: Dermatofit dışı küfler (disk difüzyon yöntemi)",
                "<b>Antifungal duyarlılık testinde standart inokulum yoğunluğu nedir?</b> → Doğru cevap: 0.5 McFarland",
                "<b>Küfler için broth mikrodilüsyon testinde hangi besiyeri kullanılır?</b> → Doğru cevap: RPMI 1640 broth (CLSI M38)"
            ]
        }
    },
    {
        id: 38,
        category: "Mikoloji",
        topic: "Candida dubliniensis - Klamidospor",
        question: "Mısırunlu agarda klamidospor kümeleri oluşturan Candida türü hangisidir?",
        correctAnswer: "Candida dubliniensis",
        details: {
            coreInfo: "<b>Candida dubliniensis:</b> C. albicans'a benzer ancak cornmeal agar'da daha bol klamidospor üretir. HIV/AIDS hastalarında oral kandidozda sık görülür. Flukonazol direnci gelişebilir.",
            keyPoints: [
                "Klamidospor: Cornmeal agar (mısırunlu agar) + Tween 80'de terminal klamidospor kümeleri oluşturur.",
                "C. albicans ile fark: C. dubliniensis 42-45°C'de üreyemez, daha bol klamidospor yapar.",
                "Germ tüp: Her iki tür de pozitif (3 saat içinde).",
                "Klinik: Oral-özofageal kandidoz (HIV/AIDS), flukonazol direnci C. albicans'a göre daha sık.",
                "Tanı: Kromojenik agar (koyu yeşil), MALDI-TOF MS, moleküler yöntemler."
            ],
            pitfalls: "C. albicans da klamidospor yapar ancak C. dubliniensis kadar bol değildir; 45°C test ayırıcı tanıda önemlidir.",
            relatedQuestions: [
                "<b>C. dubliniensis ile C. albicans ayırıcı tanısı nasıl yapılır?</b> → Doğru cevap: 45°C'de üreme testi (C. dubliniensis üreyemez), klamidospor miktarı, kromojenik agar",
                "<b>Cornmeal agar neden kullanılır?</b> → Doğru cevap: Klamidospor oluşumunu indüklemek ve Candida türlerini morfolojik olarak ayırt etmek",
                "<b>Germ tüp testi pozitif olan Candida türleri hangileridir?</b> → Doğru cevap: C. albicans ve C. dubliniensis",
                "<b>C. dubliniensis hangi hastalarda daha sık görülür?</b> → Doğru cevap: HIV/AIDS hastaları (oral-özofageal kandidoz)"
            ]
        }
    },
    {
        id: 39,
        category: "Mikoloji",
        topic: "Histoplasma-Lenfosit Karışıklığı",
        question: "Beyin omurilik sıvısındaki parçalanmış lenfositler hangi inceleme yönteminde hangi mantarla karıştırılabilir?",
        correctAnswer: "Çini mürekkebi - Cryptococcus neoformans",
        details: {
            coreInfo: "<b>Çini mürekkebi (India ink):</b> Cryptococcus neoformans'ın kapsülünü negatif kontrast ile gösterir. BOS'taki parçalanmış lenfositler kapsüllü maya ile karıştırılabilir.",
            keyPoints: [
                "Artefakt riski: BOS'taki hücre debrileri, yağ damlacıkları, lenfositler yanlışlıkla kapsül olarak yorumlanabilir.",
                "Çözüm: Kriptokokal antijen testi (lateks aglütinasyon/lateral flow) çok duyarlı ve özgüldür (>95%).",
                "Alternatif boyalar: Mucicarmine (kapsülü pembe boyar), Alcian blue.",
                "Histoplasma ile karışma: Histoplasma BOS'ta küçük (<5 µm) mayalar şeklinde görülür; Giemsa/Wright boyası ile lenfosit içinde olabilir.",
                "Doğru tanı: Kültür, antijen testi, PCR."
            ],
            alert: "Çini mürekkebi duyarlılığı düşüktür (%50-80); antijen testi her zaman tercih edilmelidir.",
            relatedQuestions: [
                "<b>Kriptokokal menenjit tanısında en duyarlı test hangisidir?</b> → Doğru cevap: Kriptokokal antijen testi (lateks aglütinasyon veya lateral flow)",
                "<b>Histoplasma capsulatum BOS'ta nasıl görülür?</b> → Doğru cevap: Küçük (<5 µm) maya hücreleri, makrofaj içinde (Wright-Giemsa ile)",
                "<b>Mucicarmine boyası ne için kullanılır?</b> → Doğru cevap: Cryptococcus neoformans kapsülünü pembe boyar",
                "<b>Çini mürekkebi testinin dezavantajları nelerdir?</b> → Doğru cevap: Düşük duyarlılık (%50-80), artefakt riski, deneyim gerektirir"
            ]
        }
    },
    {
        id: 40,
        category: "Mikoloji",
        topic: "Scytalidium (Neoscytalidium)",
        question: "Direkt mikroskobik incelemesinde hif görülen tırnak kazıntı örneğinde hangi küf etken olarak kabul edilmelidir?",
        correctAnswer: "Scytalidium dimidiatum (Neoscytalidium dimidiatum)",
        details: {
            coreInfo: "<b>Neoscytalidium (Scytalidium) dimidiatum:</b> Dermatofit dışı küf (DFK), tropikal/subtropikal bölgelerde onikomikoz ve tinea pedis yapar. KOH preparatında hif varsa primer patojen olarak kabul edilir.",
            keyPoints: [
                "Primer patojen: Direkt mikroskopta hif görülürse ve kültürde ürerse etken kabul edilir (kontaminan değil).",
                "Klinik: Tırnak enfeksiyonu (onikomikoz), ayak enfeksiyonu (tinea pedis benzeri), deri enfeksiyonu.",
                "Morfoloji: Kültürde siyah pigmentli koloniler (melanin); artrosporlar ve hifler.",
                "Tedavi zorluğu: Azollere dirençli; terbinafin kısmen etkili, topikal amorolfin denenebilir.",
                "Epidemiyoloji: Tropikal iklim, ahşap ve toprakla temas."
            ],
            pitfalls: "DFK'lar genellikle kontaminan olarak değerlendirilir; ancak direkt mikroskopta hif görülmesi ve tekrarlayan kültürlerde üreme etken olduğunu gösterir.",
            relatedQuestions: [
                "<b>Dermatofit dışı küfler (DFK) hangi durumlarda etken kabul edilir?</b> → Doğru cevap: Direkt mikroskopta hif görülmesi + en az 2 kültürde üreme + klinik korelasyon",
                "<b>Onikomikoz yapan DFK'lar hangileridir?</b> → Doğru cevap: Neoscytalidium (Scytalidium), Fusarium, Scopulariopsis, Acremonium",
                "<b>Neoscytalidium enfeksiyonu nasıl tedavi edilir?</b> → Doğru cevap: Azollere dirençli; terbinafin, amorolfin topikal, bazen cerrahi",
                "<b>Kontaminan küf ile etken küf ayrımı nasıl yapılır?</b> → Doğru cevap: Direkt mikroskop (+), tekrarlayan kültür (+), klinik tablo uyumu"
            ]
        }
    },
    {
        id: 41,
        category: "Mikoloji",
        topic: "Mukormikoz (Zigomikoz) Tanısı",
        question: "Diyabetik ketoasidozlu hastada burun kenarında nekrotik lezyon ve mukormikoz düşünülüyor. İlk yapılacak işlem hangisidir?",
        correctAnswer: "Direkt mikroskobik inceleme için nekrozun altından kazıntı örneği alınması",
        details: {
            coreInfo: "<b>Mukormikoz (Zigomikoz):</b> Hızla ilerleyen, anjioinvazif mantar enfeksiyonudur. Erken tanı ve agresif tedavi hayat kurtarıcıdır; direkt mikroskopi en hızlı yöntemdir.",
            keyPoints: [
                "İlk adım: Nekrotik dokunun altından kazıntı/biyopsi alarak direkt mikroskopi (KOH veya kalkoflor beyazı).",
                "Morfoloji: Geniş (6-25 µm), septesiz, düzensiz, 90° açı ile dallanan hifler.",
                "Kültür: Hassas, bazen negatif; biyopsi daha güvenilir.",
                "Serolojik testler: Mukormikoz için güvenilir antijen/antikor testi yoktur.",
                "Hızlı tanı kritiği: Her saat gecikme mortaliteyi artırır; direkt mikroskopi acil sonuç verir.",
                "Tedavi: Acil cerrahi debridman + amfoterisin B + altta yatan hastalığın düzeltilmesi."
            ],
            alert: "Kültür sonucu beklenilmez; direkt mikroskopide tipik hifler görülürse tedavi derhal başlanmalıdır.",
            relatedQuestions: [
                "<b>Mukormikoz tanısında en hızlı yöntem hangisidir?</b> → Doğru cevap: Direkt mikroskopi (KOH veya kalkoflor beyazı ile)",
                "<b>Mukormikoz histopatolojik bulguları nelerdir?</b> → Doğru cevap: Geniş, septesiz, 90° açıyla dallanan hifler + anjioinvazyon + nekroz",
                "<b>Mukormikoz tedavisinde ilk 24-48 saat neden kritiktir?</b> → Doğru cevap: Hızlı anjioinvazyon ve dokü nekrozu; erken cerrahi ve antifungal tedavi mortaliteyi düşürür",
                "<b>Mukormikozda serolojik testler kullanılabilir mi?</b> → Doğru cevap: Hayır, güvenilir antijen/antikor testi yok; tanı histopatoloji ve kültüre dayanır"
            ]
        }
    },
    {
        id: 42,
        category: "Mikoloji",
        topic: "Candida krusei - Flukonazol Direnci",
        question: "Flukonazole intrensek direnç gösteren Candida türü hangisidir?",
        correctAnswer: "Candida krusei",
        details: {
            coreInfo: "<b>Candida krusei:</b> Flukonazole doğal (intrensek) dirençli bir Candida türüdür. Flukonazol profilaksisi alan hastalarda (hematoloji-onkoloji) kolonizasyon ve enfeksiyon riski artar.",
            keyPoints: [
                "İntrensek direnç: C. krusei flukonazole doğal olarak dirençlidir (ERG11 gen mutasyonu).",
                "Epidemiyoloji: Flukonazol profilaksisi alan hastalarda (akut lösemi, kök hücre nakli) sıklığı artar.",
                "Klinik: Kandidemi, özofajit, üriner enfeksiyonlar.",
                "Tanı: Psödohif oluşturur (uzamış maya hücreleri), blastosporlar; kromojenik agarda pembe koloniler.",
                "Tedavi: Ekinokandinler (mikafungin, anidulafungin, kaspofungin), amfoterisin B, vorikonazol."
            ],
            pitfalls: "C. glabrata flukonazole doza bağlı duyarlı veya dirençlidir (kazanılmış direnç); C. krusei ise doğal dirençlidir.",
            relatedQuestions: [
                "<b>Flukonazol dirençli Candida türleri hangileridir?</b> → Doğru cevap: C. krusei (intrensek), C. auris (çoklu direnç), C. glabrata (doza bağlı/direnç)",
                "<b>C. krusei enfeksiyonu hangi hastalarda artar?</b> → Doğru cevap: Flukonazol profilaksisi alan hematoloji/onkoloji hastaları",
                "<b>C. krusei tedavisinde ilk seçenek nedir?</b> → Doğru cevap: Ekinokandinler (mikafungin, anidulafungin)",
                "<b>Psödohif oluşturan Candida türleri hangileridir?</b> → Doğru cevap: C. krusei, C. glabrata, C. tropicalis"
            ]
        }
    },
    {
        id: 43,
        category: "Mikoloji",
        topic: "Akciğer Biyopsisi - İlk İşlem",
        question: "Hematoloji servisinde yatan ve akciğer enfeksiyonu gelişen hastadan alınan akciğer biyopsi örneğinin mantar incelemesi için laboratuvara gönderilmesi durumunda ilk yapılacak işlem hangisidir?",
        correctAnswer: "%10-30 KOH ile direkt mikroskopi",
        details: {
            coreInfo: "<b>Mantar tanısında standart yaklaşım:</b> Direkt mikroskopi (KOH) → Kültür → Histopatoloji (GMS/PAS). Direkt mikroskopi hızlı ve ilk adımdır.",
            keyPoints: [
                "İlk adım: %10-30 KOH ile direkt mikroskopi; keratin ve hücre debris temizlenir, mantar elemanları görünür hale gelir.",
                "Hif tipleri: Septate hif (Aspergillus), septesiz hif (Mucorales), maya (Candida, Cryptococcus), dimorfik mantarlar.",
                "Kültür: Sabouraud dextrose agar, kanlı agar, 25-30°C ve 35-37°C'de inkübasyon.",
                "Histopatoloji: GMS (Gomori methenamine silver) veya PAS boyası; doğru tanı oranı yüksektir.",
                "Lam kültürü: Morfolojik tanımlama için yapılır (konidya yapısı)."
            ],
            pitfalls: "Wood lambası deri mantarları için kullanılır (Microsporum canis), akciğer biyopsisi için değil.",
            relatedQuestions: [
                "<b>KOH preparatında septate hif görülürse ne düşünülür?</b> → Doğru cevap: Aspergillus, Fusarium, Scedosporium gibi hiyalen küfler",
                "<b>Mantar kültürü için hangi besiyerleri kullanılır?</b> → Doğru cevap: Sabouraud dextrose agar (SDA), kanlı agar, antibiyotikli besiyerleri",
                "<b>GMS boyası ne için kullanılır?</b> → Doğru cevap: Histopatolojik preparatlarda mantar hücre duvarını siyah boyar (Pneumocystis, Aspergillus, Mucorales)",
                "<b>Wood lambası hangi mantar enfeksiyonlarında kullanılır?</b> → Doğru cevap: Dermatofit enfeksiyonları (saç, deri); Microsporum canis yeşil floresan verir"
            ]
        }
    },
    {
        id: 44,
        category: "Mikoloji",
        topic: "Penicillium marneffei",
        question: "HIV pozitif hastada Güneydoğu Asya gezisi sonrası akne benzeri lezyonlar, biyopside fizyonla bölünen maya hücreleri ve kültürde kırmızı pigmentli yeşil küf görülüyor. Etken?",
        correctAnswer: "Penicillium marneffei (Talaromyces marneffei)",
        details: {
            coreInfo: "<b>Talaromyces (Penicillium) marneffei:</b> Endemik (Güneydoğu Asya, Güney Çin) dimorfik mantardır. HIV/AIDS hastalarında dissemine enfeksiyon yapar; fizyonla bölünen maya formu özgüdür.",
            keyPoints: [
                "Endemik bölge: Tayland, Vietnam, Güney Çin, Myanmar; bambu ormanları.",
                "Dimorfik: Çevrede (25°C) küf, 37°C'de maya; ancak maya formu tomurcuklanmaz, fizyonla bölünür (sadece bu mantarda).",
                "Klinik: Akne benzeri papüler deri lezyonları, ateş, lenfadenopati, hepatosplenomegali, anemi; AIDS hastaları (CD4 <100).",
                "Kültür: Kırmızı pigment yayılımı (25°C'de), yeşil-gri kadifemsi koloni.",
                "Tedavi: Amfoterisin B (indüksiyon) → itrakonazol (idame); flukonazol etkisizdir."
            ],
            pitfalls: "Histoplasma capsulatum da küçük maya formu yapar ancak tomurcuklanır; Penicillium marneffei fizyonla bölünür (santral septum).",
            relatedQuestions: [
                "<b>Penicillium marneffei'nin benzersiz özelliği nedir?</b> → Doğru cevap: Maya formunda fizyonla bölünme (tomurcuklanma yok)",
                "<b>Penicillium marneffei hangi hastalarda görülür?</b> → Doğru cevap: HIV/AIDS (CD4 <100), Güneydoğu Asya'ya seyahat öyküsü",
                "<b>Penicillium marneffei tedavisi nasıl olur?</b> → Doğru cevap: Amfoterisin B (2 hafta) → itrakonazol (10 hafta) → idame itrakonazol (CD4 >100 olana kadar)",
                "<b>Kırmızı pigment oluşturan mantarlar hangileridir?</b> → Doğru cevap: Trichophyton rubrum, Penicillium marneffei"
            ]
        }
    },
    {
        id: 45,
        category: "Mikoloji",
        topic: "Aspergillus terreus - Amfoterisin B Direnci",
        question: "İleri derecede nötropenik hastanın akciğer biyopsisinde septate hifler ve sporlanmalar görülüyor; biyopsi ve kan kültüründe aynı Aspergillus türü ürüyor. Hangi tür beklenir?",
        correctAnswer: "Aspergillus terreus",
        details: {
            coreInfo: "<b>Aspergillus terreus:</b> Amfoterisin B'ye doğal dirençli olan bir Aspergillus türüdür. Dissemine enfeksiyonda kan kültüründe üreme nadir ancak A. terreus'ta görülebilir.",
            keyPoints: [
                "Amfoterisin B direnci: A. terreus doğal olarak amfoterisin B'ye dirençlidir (in vitro ve in vivo).",
                "Dissemine hastalık: Kan kültüründe üreme; A. terreus diğer türlere göre daha sık fungemiye neden olur.",
                "Mikroskobik morfoloji: Küçük aleuriospor zincirleri (kolonlar), mikrokonidyalar daha baskın.",
                "Risk faktörleri: Hematolojik maligniteler, kök hücre nakli, uzun süreli nötropeni.",
                "Tedavi: Vorikonazol veya izoavukonazol; amfoterisin B kullanılmamalıdır."
            ],
            alert: "A. terreus enfeksiyonunda amfoterisin B kullanımı tedavi başarısızlığına yol açar; vorikonazol veya izoavukonazol tercih edilmelidir.",
            relatedQuestions: [
                "<b>Aspergillus terreus'un klinik önemi nedir?</b> → Doğru cevap: Amfoterisin B direnci, dissemine hastalık ve fungemiye eğilim",
                "<b>Amfoterisin B dirençli Aspergillus türleri hangileridir?</b> → Doğru cevap: Aspergillus terreus",
                "<b>Aspergillus terreus enfeksiyonunda hangi antifungal kullanılmalıdır?</b> → Doğru cevap: Vorikonazol, izoavukonazol, posakonazol",
                "<b>Aspergillus türlerinde kan kültürü pozitifliği ne anlama gelir?</b> → Doğru cevap: Dissemine hastalık; A. terreus'ta daha sık görülür"
            ]
        }
    },
    {
        id: 46,
        category: "Mikoloji",
        topic: "Mukormikoz - Posakonazol",
        question: "İmmünsupresif tedavi alan olguda sinüs biyopsisinde septasız, düzensiz, dik açıyla dallanan hifler görülüyor. Hangi ilaç etkili olur?",
        correctAnswer: "Posakonazol",
        details: {
            coreInfo: "<b>Mukormikoz tedavisi:</b> Amfoterisin B (liposomal form) ilk seçenektir; posakonazol ikinci seçenek veya salvage tedavisidir. Vorikonazol ve ekinokandinler etkisizdir.",
            keyPoints: [
                "İlk seçenek: Liposomal amfoterisin B (5-10 mg/kg/gün).",
                "İkinci seçenek: Posakonazol (yükleme dozu + idame; in vitro aktivite değişkendir).",
                "İzoavukonazol: Bazı Mucorales türlerine etkili (yeni seçenek).",
                "Etkisiz ilaçlar: Vorikonazol, flukonazol, ekinokandinler mukormikozda etkisizdir.",
                "Kombine tedavi: Cerrahi debridman + antifungal + altta yatan hastalığın düzeltilmesi (DKA, nötropeni)."
            ],
            pitfalls: "Vorikonazol aspergillozda birinci seçenektir; ancak mukormikozda tamamen etkisizdir.",
            relatedQuestions: [
                "<b>Mukormikoz tedavisinde ilk seçenek ilaç hangisidir?</b> → Doğru cevap: Liposomal amfoterisin B (5-10 mg/kg/gün)",
                "<b>Mukormikozda vorikonazol neden kullanılmaz?</b> → Doğru cevap: Mucorales türlerine karşı in vitro ve in vivo etkisizdir",
                "<b>Posakonazol mukormikozda nasıl kullanılır?</b> → Doğru cevap: Salvage tedavisi veya amfoterisin B'ye yanıtsızlıkta; yükleme + idame dozu",
                "<b>Mukormikoz tedavisinde ekinokandinler etkili midir?</b> → Doğru cevap: Hayır, Mucorales türleri ekinokandinlere dirençlidir"
            ]
        }
    },
    {
        id: 47,
        category: "Mikoloji",
        topic: "Aspergillus Konidyofor Yapısı",
        question: "Konidyoforun ucunda kese şeklinde vezikül ve üzerinde fiyalidleri olan mantar hangisidir?",
        correctAnswer: "Aspergillus spp.",
        details: {
            coreInfo: "<b>Aspergillus morfolojisi:</b> Konidyofor ucunda şişkin vezikül, üzerinde fiyalidler (tek veya çift sıra) ve konidya zincirleri bulunur. Bu yapı Aspergillus için özgüdür.",
            keyPoints: [
                "Konidyofor: Septate, düz veya hafif kıvrımlı, hif yapısı.",
                "Vezikül: Konidyofor ucunda şişkin, kase veya küre şeklinde yapı.",
                "Fiyalid: Vezikül üzerinde konidya üreten hücreler; tek sıra (uniseriate) veya çift sıra (biseriate).",
                "Konidyalar: Zincir şeklinde, küçük, küresel veya oval sporlar.",
                "Türler: A. fumigatus (üniseriate), A. niger (biseriate, siyah konidyalar), A. flavus (biseriate, sarı-yeşil)."
            ],
            pitfalls: "Penicillium de fiyalid ve konidya zincirleri yapar ancak vezikül yoktur; konidyalar fırça şeklinde (penicillus) dizilir.",
            relatedQuestions: [
                "<b>Aspergillus fumigatus'un mikroskobik özellikleri nelerdir?</b> → Doğru cevap: Uniseriate (tek sıra fiyalid), küçük vezikül, mavi-yeşil koloniler",
                "<b>Aspergillus niger nasıl tanınır?</b> → Doğru cevap: Biseriate (çift sıra fiyalid), siyah konidyalar, büyük koloniler",
                "<b>Aspergillus ile Penicillium arasındaki fark nedir?</b> → Doğru cevap: Aspergillus'ta vezikül var, Penicillium'da fırça şeklinde (penicillus) yapı var",
                "<b>Lam kültürü ne için yapılır?</b> → Doğru cevap: Küflerin mikroskobik morfolojisini (konidyofor, fiyalid, konidya) tanımlamak için"
            ]
        }
    },
    {
        id: 48,
        category: "Mikoloji",
        topic: "Kandidemi - Tek Kan Kültürü",
        question: "Mantar enfeksiyonlarının tanısında kan kültürü ile ilgili hangisi yanlıştır?",
        correctAnswer: "Candida tanısı için farklı zamanda alınan en az iki kan kültüründe üreme olmalıdır (YANLIŞ)",
        details: {
            coreInfo: "<b>Kandidemi tanısı:</b> Tek kan kültüründe Candida üremesi bile kandidemi tanısı için yeterlidir. İki pozitif kültür şartı bakteremi için geçerlidir (kontaminasyon ayırımı), mantarlar için değil.",
            keyPoints: [
                "Tek pozitif kültür yeterli: Candida kan kültüründe üretiyorsa kontaminasyon riski çok düşüktür; tedavi başlanmalıdır.",
                "Duyarlılık: Akut dissemine kandidozda kan kültürü duyarlılığı %30-50'dir (düşük); β-D-glukan testi destek sağlar.",
                "Fusarium: Dissemine enfeksiyonda kan kültüründe sık ürür (küfler arasında nadirdir).",
                "Aspergillus: Kan kültüründe üremesi nadirdir; üreme neredeyse her zaman kontaminasyon değil, dissemine hastalıktır.",
                "Lizis-santrifügasyon: Mantar ve mikobakteri kan kültürü için en duyarlı yöntemdir."
            ],
            alert: "Kandidemide tek pozitif kan kültürü bile ciddi bir bulgudur; hasta değerlendirilmeli ve tedavi başlanmalıdır.",
            relatedQuestions: [
                "<b>Kandidemi tanısı için kaç kan kültürü gereklidir?</b> → Doğru cevap: Tek pozitif kan kültürü yeterlidir (kontaminasyon değil)",
                "<b>Kan kültüründe hangi küf mantarları ürer?</b> → Doğru cevap: Fusarium türleri (sık), Scedosporium (nadir), Aspergillus (çok nadir)",
                "<b>Lizis-santrifügasyon yöntemi ne için kullanılır?</b> → Doğru cevap: Mantar ve mikobakteri kan kültürü için en duyarlı yöntemdir",
                "<b>Kan kültüründe Aspergillus üremesi ne anlama gelir?</b> → Doğru cevap: Dissemine hastalık (kontaminasyon değil); çok nadir ancak ciddidir"
            ]
        }
    },
    {
        id: 49,
        category: "Mikoloji",
        topic: "Mantar Örneği Saklama Sıcaklığı",
        question: "Mantar enfeksiyonu kuşkusu ile alınan akciğer biyopsi örneğinin laboratuvara ulaştırılması 2 saatten uzun sürecekse hangi sıcaklıkta saklanmalıdır?",
        correctAnswer: "(+2)-(+8) ºC'de (Buzdolabı sıcaklığı)",
        details: {
            coreInfo: "<b>Mantar örneği saklama:</b> Akciğer biyopsisi gibi steril olmayan dokular buzdolabı sıcaklığında (+2 ile +8°C) saklanmalıdır. Oda sıcaklığında bakteriler hızla ürer ve mantarı baskılar.",
            keyPoints: [
                "+2 ile +8°C: Bakteriyel üreme yavaşlar, mantarlar canlı kalır; optimal saklama sıcaklığıdır.",
                "Oda sıcaklığı (25-37°C): Bakteriyel overgrowth riski yüksektir; mantar izolasyonu başarısız olabilir.",
                "Dondurma (-20°C): Mantar hiflerini ve hücre yapısını parçalar; ASLA kullanılmaz.",
                "Transport süresi: İdeal olarak 2 saat içinde laboratuvara ulaştırılmalı; gecikirse +4°C'de saklanmalı.",
                "Steril sıvılar (BOS, eklem sıvısı): Oda sıcaklığında veya 35-37°C'de taşınabilir (bakteriyel menenjit gibi)."
            ],
            alert: "Sınav modüllerinde bazen hatalı olarak 37°C cevabı verilir; ancak doğrusu +4°C'dir (bakteriyel overgrowth önlenir).",
            relatedQuestions: [
                "<b>Mantar kültürü için ideal transport süresi nedir?</b> → Doğru cevap: 2 saat içinde (gecikirse +4°C'de saklanmalı)",
                "<b>BOS örneği bakteriyel menenjit şüphesinde nasıl taşınır?</b> → Doğru cevap: Oda sıcaklığında veya 35-37°C'de (soğuk şoku önlemek için)",
                "<b>Mantar örnekleri neden dondurulmamalıdır?</b> → Doğru cevap: Hif ve hücre yapısını parçalar, kültür başarısızlığına yol açar",
                "<b>Steril olmayan doku örnekleri (deri, tırnak) nasıl saklanır?</b> → Doğru cevap: +4°C'de (bakteriyel kontaminasyonu önler)"
            ]
        }
    },
    {
        id: 56,
        category: "Viroloji",
        topic: "Hantavirüs Tanısı",
        question: "Akut böbrek yetmezliği, yüksek ateş ve trombositopeni bulguları ile yoğun bakıma yatırılan bir hastada hantavirüs enfeksiyonu düşünülmektedir. Hastalığın laboratuvar tanısı için öncelikli olarak hangisine bakılmalıdır?",
        correctAnswer: "Avrasya izolatlarına spesifik IgG ve IgM izotipindeki antikorları yakalayabilen EIA",
        details: {
            coreInfo: "<b>Hantavirüs Enfeksiyonu:</b> Kemirgenlerin idrar ve dışkısı ile bulaşan zoonotik bir enfeksiyondur. Avrasya izolatları (Puumala, Dobrava, Hantaan) böbrek sendromu ile epidemik hemorajik ateş (HFRS) yaparken, Amerika izolatları hantavirüs pulmoner sendromu (HPS) yapar.",
            keyPoints: [
                "<b>Türkiye'de Avrasya izolatları:</b> Coğrafi konumumuz nedeniyle öncelikle Avrasya tiplerini aramak mantıklıdır.",
                "<b>Seroloji önceliklidir:</b> IgM erken pozitifleşir (3-5 gün), IgG biraz gecikmeli (7-10 gün) gelir; EIA testi hızlı, duyarlı ve spesifiktir.",
                "<b>PCR kullanımı sınırlı:</b> Viremi kısa sürelidir (semptom başlangıcında 3-7 gün), bu nedenle akut fazda yakalamak zordur.",
                "<b>Klinik özellikler:</b> Ani başlangıçlı ateş, trombositopeni, proteinüri, hematüri, akut böbrek yetmezliği.",
                "<b>Tedavi:</b> Destekleyici (hemodiyaliz gerekebilir), erken dönemde ribavirin düşünülebilir."
            ],
            pitfalls: "Amerika izolatları Türkiye'de görülmez; yurt dışı seyahati yoksa öncelik Avrasya tiplerine verilmelidir.",
            relatedQuestions: [
                "<b>Hantavirüs enfeksiyonunda viremi süresi ne kadardır?</b> → Doğru cevap: 3-7 gün (kısa sürelidir, bu nedenle PCR tespiti zordur)",
                "<b>HFRS (Hemorajik Ateş Renal Sendrom) hangi coğrafyada görülür?</b> → Doğru cevap: Avrasya (Avrupa, Rusya, Türkiye, Uzak Doğu)",
                "<b>Hantavirüs pulmoner sendromu (HPS) hangi kıtada yaygındır?</b> → Doğru cevap: Amerika kıtası (Sin Nombre virüsü)",
                "<b>Hantavirüs enfeksiyonunda erken dönem tedavisi nedir?</b> → Doğru cevap: Ribavirin (ilk 4 gün içinde başlanırsa etkili)"
            ]
        }
    },
    {
        id: 57,
        category: "Viroloji",
        topic: "Batı Nil Virüsü Seroprevalans",
        question: "Bir yeni Batı Nil virüsü salgını bölgesinde risk gruplarının ve yaygınlığının saptanması için toplum içinde tabakalı grupların taranarak seroprevalansın araştırılması planlanmıştır. Bu amaçla kullanılacak en uygun laboratuvar tanı stratejisi hangisi olmalıdır?",
        correctAnswer: "Tüm bireylerin indirekt IgG EIA ile taranması pozitif bulunanların plak redüksiyon nötralizasyon testi ile doğrulanması",
        details: {
            coreInfo: "<b>Seroprevalans Çalışmaları:</b> Toplum genelinde geçmiş enfeksiyon sıklığını belirlemek için IgG antikorları araştırılır. Flavivirüsler arasında çapraz reaksiyon riski yüksek olduğundan doğrulama testi kritiktir.",
            keyPoints: [
                "<b>Tarama testi: IgG EIA</b> → Hızlı, ucuz, yüksek duyarlılık; ancak özgüllük sorunu var (Dengue, Sarı Humma, Kene Ensefaliti gibi diğer flavivirüslerle çapraz reaksiyon).",
                "<b>Doğrulama: PRNT (Plak Redüksiyon Nötralizasyon Testi)</b> → Altın standart, en spesifik test; hangi flavivirüse karşı nötralizan antikor var belirler.",
                "<b>IgM neden kullanılmaz?</b> → Seroprevalans geçmiş enfeksiyonu gösterir; IgM akut enfeksiyonu gösterir (kısa süreli pozitiftir).",
                "<b>PCR neden uygun değil?</b> → Viremi kısa sürelidir ve pahalıdır; seroprevalans için maliyet-etkin değildir.",
                "<b>İki aşamalı strateji:</b> Önce duyarlı test ile tara, sonra spesifik test ile doğrula (maliyet-etkinlik)."
            ],
            pitfalls: "Sadece EIA ile tarama yapmak yanlış pozitiflik verir; mutlaka nötralizasyon testi ile doğrulanmalıdır.",
            relatedQuestions: [
                "<b>Flavivirüsler arasında çapraz reaksiyon neden önemlidir?</b> → Doğru cevap: Dengue, Sarı Humma, Batı Nil, Kene Ensefaliti gibi virüsler benzer epitoplara sahiptir",
                "<b>PRNT testi ne işe yarar?</b> → Doğru cevap: Nötralizan antikorları ölçerek hangi flavivirüsün gerçek etken olduğunu belirler (altın standart)",
                "<b>Seroprevalans çalışmasında IgG mi IgM mi bakılır?</b> → Doğru cevap: IgG (geçmiş enfeksiyonu gösterir, IgM sadece akut dönemde pozitif)",
                "<b>Batı Nil virüsü bulaşma yolu nedir?</b> → Doğru cevap: Sivrisinek ısırığı (Culex türleri), kuşlar rezervuardır"
            ]
        }
    },
    {
        id: 58,
        category: "Viroloji",
        topic: "CMV Reaktivasyonu",
        question: "Böbrek transplantasyonu yapılan seropozitif bir hastada CMV reaktivasyonunun takibinde hangi yöntem anlamlı değildir?",
        correctAnswer: "Serumda CMV IgG belirlenmesi",
        details: {
            coreInfo: "<b>CMV Reaktivasyonu:</b> İmmünsüpresif tedavi altındaki transplant hastalarında latent CMV'nin yeniden aktifleşmesidir. Reaktivasyonda IgG zaten pozitiftir (geçmiş enfeksiyon), bu nedenle IgG takibi anlamsızdır.",
            keyPoints: [
                "<b>Viral yük (CMV DNA - PCR):</b> Altın standart; kantitatifldir, tedavi kararı ve yanıtı için takip edilir.",
                "<b>Antigenemi (pp65):</b> Hızlı sonuç verir, aktif replikasyonu gösterir (güncel kullanımı azalmıştır).",
                "<b>Virüs izolasyonu (kan/idrar):</b> Duyarlı ama yavaştır; kültür pozitifliği aktif enfeksiyonu gösterir.",
                "<b>IgG takibi neden anlamsız?</b> → Hasta zaten seropozitif; reaktivasyonda IgG titresinde anlamlı artış olmaz veya geç olur.",
                "<b>IgM neden bakılmaz?</b> → Reaktivasyonda IgM genellikle negatif veya düşük pozitif; primer enfeksiyonda yüksek olur."
            ],
            pitfalls: "CMV IgG pozitif donor → seropozitif alıcıya nakilde reaktivasyon riski yüksektir; preemptif tedavi (viral yük takibi) önemlidir.",
            relatedQuestions: [
                "<b>CMV preemptif tedavi stratejisi nedir?</b> → Doğru cevap: Viral yük takibi ile belirli eşik değerde tedavi başlamak (semptom beklemeden)",
                "<b>CMV pp65 antigenemi testi nedir?</b> → Doğru cevap: Lökositlerde CMV erken antijen (pp65) aranır, aktif replikasyonu gösterir",
                "<b>Transplant hastasında CMV en riskli durum hangisidir?</b> → Doğru cevap: D+/R- (donor pozitif, alıcı negatif - primer enfeksiyon riski)",
                "<b>CMV reaktivasyonunda IgM neden yükselmez?</b> → Doğru cevap: Reaktivasyon zaten bağışık kişide olur, IgM genellikle negatif veya düşük kalır"
            ]
        }
    },
    {
        id: 59,
        category: "Viroloji",
        topic: "Hücre Kültürü Bakteri Dekontaminasyonu",
        question: "Boğaz sürüntüsü, dışkı, idrar veya enfekte dokular gibi çok miktarda bakteri içeren örneklerin hücre dizisine inoküle edilmeden önce bakteri yoğunluğunun ortadan kaldırılması için bazı yöntemler uygulanır. Aşağıdaki seçeneklerden hangisi bu yöntemlerden değildir?",
        correctAnswer: "Örneğin belli bir ısıda soğutulması",
        details: {
            coreInfo: "<b>Hücre Kültürü Kontaminasyonu:</b> Bakteriyel kontaminasyon hücre kültürünü öldürür ve viral izolasyonu engeller. Örnekteki bakteriler fiziksel/kimyasal yöntemlerle azaltılmalıdır.",
            keyPoints: [
                "<b>Antibiyotikler:</b> Besiyerine penisilin, streptomisin, gentamisin eklenir; bakterileri inhibe eder ancak virüsleri etkilemez.",
                "<b>Filtrasyon:</b> 0.45-0.2 µm filtreler bakterileri tutar, virüsler geçer (virüsler çok küçüktür: 20-300 nm).",
                "<b>Santrifügasyon:</b> Düşük hızda santrifüj (1500-3000 rpm) bakterileri çöktürür, süpernatant alınır.",
                "<b>Fotodinamik inaktivasyon:</b> Metilen mavisi + ışık kombinasyonu bakterileri ve lipid zarflı virüsleri inaktive eder.",
                "<b>Soğutma neden yanlış?</b> → Soğutma bakterileri öldürmez, sadece üremelerini yavaşlatır; dekontaminasyon sağlamaz."
            ],
            pitfalls: "Yüksek doz antibiyotik hücre kültürüne toksik olabilir; uygun konsantrasyonlar kullanılmalıdır.",
            relatedQuestions: [
                "<b>Virüsler filtre kağıdından neden geçer?</b> → Doğru cevap: Virüsler çok küçüktür (20-300 nm), 0.2-0.45 µm filtre bakterileri tutar ama virüsleri geçirir",
                "<b>Hücre kültüründe kullanılan antibiyotikler hangileridir?</b> → Doğru cevap: Penisilin, streptomisin, gentamisin (virüsleri etkilemez)",
                "<b>Santrifüj ile bakteri eliminasyonu nasıl olur?</b> → Doğru cevap: Düşük hızda (1500-3000 rpm) bakteriler çöker, süpernatant (virüs içeren) alınır",
                "<b>Fotodinamik inaktivasyon ne yapar?</b> → Doğru cevap: Metilen mavisi + ışık ile bakteriler ve zarflı virüsler inaktive edilir"
            ]
        }
    },
    {
        id: 60,
        category: "Viroloji",
        topic: "Hepatit A ve B Serolojisi",
        question: "Çocukluğunda hepatit A virüs enfeksiyonu geçirmiş olan sağlıklı bir erişkine bir yıl önce hepatit B aşısı uygulanmıştır. Bu kişide tespit edilen serolojik profil hangisidir?",
        correctAnswer: "HBsAg (-), Anti-HBs(+), Anti-HBc total (-), Anti-HAV IgM (-), Anti-HAV IgG (+)",
        details: {
            coreInfo: "<b>Serolojik Profil Yorumu:</b> Geçmiş HAV enfeksiyonu ömür boyu IgG pozitifliği bırakır. HBV aşısı sadece Anti-HBs pozitifliği yaratır (Anti-HBc negatif kalır çünkü doğal enfeksiyon yok).",
            keyPoints: [
                "<b>Anti-HAV IgG (+):</b> Geçmiş HAV enfeksiyonu veya aşı (Türkiye'de HAV aşısı rutin takvimde değil, geçirme olasılığı yüksek).",
                "<b>Anti-HAV IgM (-):</b> Akut HAV enfeksiyonu yok (IgM 3-6 ay pozitif kalır).",
                "<b>Anti-HBs (+):</b> HBV aşısına yanıt (koruyucu antikor); >10 mIU/mL ise koruyucudur.",
                "<b>Anti-HBc total (-):</b> Doğal HBV enfeksiyonu geçirmemiş; aşı yaptırmış (aşı sadece HBsAg içerir, core antijeni yok).",
                "<b>HBsAg (-):</b> Aktif HBV enfeksiyonu veya taşıyıcılık yok."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Durum</th><th>HBsAg</th><th>Anti-HBs</th><th>Anti-HBc</th></tr>
                    <tr><td><b>HBV Aşılı</b></td><td>-</td><td>+</td><td>-</td></tr>
                    <tr><td>Geçirilmiş HBV</td><td>-</td><td>+</td><td>+</td></tr>
                    <tr><td>Akut HBV</td><td>+</td><td>-</td><td>+ (IgM)</td></tr>
                    <tr><td>Kronik HBV</td><td>+</td><td>-</td><td>+ (IgG)</td></tr>
                </table>
            `,
            pitfalls: "Anti-HBc pozitif ise hasta doğal enfeksiyon geçirmiştir; negatif ise sadece aşılıdır.",
            relatedQuestions: [
                "<b>HBV aşısı ile doğal enfeksiyon nasıl ayırt edilir?</b> → Doğru cevap: Anti-HBc: Aşılıda (-), geçirmişte (+)",
                "<b>Anti-HBs titresinin >10 mIU/mL olması ne anlama gelir?</b> → Doğru cevap: Koruyucu antikor düzeyi (bağışık)",
                "<b>HAV IgM pozitifliği ne kadar sürer?</b> → Doğru cevap: 3-6 ay (akut enfeksiyon belirteci)",
                "<b>Türkiye'de HAV enfeksiyonu neden sık görülür?</b> → Doğru cevap: Hijyen koşulları ve çocuklukta geçirme sıklığı yüksektir (aşı rutin takvimde yok)"
            ]
        }
    },
    {
        id: 61,
        category: "Viroloji",
        topic: "COVID-19 Bakteriyoloji Güvenliği",
        question: "COVID-19 pandemisi sırasında bakteriyoloji laboratuvarına gelen klinik örneklerin yönetimi için hangisi yanlıştır?",
        correctAnswer: "Genel yüzey dezenfeksiyonu için %1'lik çamaşır suyu uygun dezenfektan olarak kullanılabilmektedir (YANLIŞ - %0.1 olmalı)",
        details: {
            coreInfo: "<b>COVID-19 Laboratuvar Biyogüvenliği:</b> SARS-CoV-2 solunum damlacıkları ve aerosol ile bulaşabilir. Bakteriyoloji laboratuvarında standart önlemlere ek COVID-19 spesifik kurallar uygulanmalıdır.",
            keyPoints: [
                "<b>Tüm ekimler BGD-2 Kabinde:</b> Aerosol oluşumu riskli, kabin koruması zorunlu.",
                "<b>Kan kültürü şişeleri:</b> %70 etil alkol ile dış yüzey temizlenir, sonra cihaza yerleştirilir.",
                "<b>Dezenfeksiyon konsantrasyonu:</b> %0.1 çamaşır suyu (1000 ppm serbest klor) yeterli; %1 gereksiz yüksektir ve toksiktir.",
                "<b>Direkt bakı azaltılmalı:</b> Mümkün oldukça preparatlar kabinde hazırlanmalı.",
                "<b>Tespit işlemi:</b> Boyalı lamlar kabinde kimyasal tespit edilmeli (aerosol riski)."
            ],
            pitfalls: "%1 çamaşır suyu (10000 ppm) çok yüksek konsantrasyondur; malzemelere zarar verir ve gerekli değildir.",
            relatedQuestions: [
                "<b>COVID-19 için uygun yüzey dezenfektanı konsantrasyonu nedir?</b> → Doğru cevap: %0.1 çamaşır suyu (1000 ppm serbest klor) veya %70 alkol",
                "<b>BGD-2 Kabini ne zaman kullanılır?</b> → Doğru cevap: Aerosol oluşturabilecek tüm işlemler (ekim, karıştırma, vorteks)",
                "<b>Kan kültürü şişeleri neden alkol ile silinir?</b> → Doğru cevap: Dış yüzeydeki potansiyel virüs kontaminasyonunu inaktive etmek için",
                "<b>COVID-19 hastasından alınan örneklerde hangi BGD düzeyi gerekir?</b> → Doğru cevap: BGD-2 (tanısal çalışmalar için)"
            ]
        }
    },
    {
        id: 62,
        category: "Viroloji",
        topic: "COVID-19 Örnek Kabulü KKE",
        question: "COVID-19 pandemisinde örnek kabulü yapan çalışanın kullanması gereken asgari kişisel koruyucu ekipman hangisidir?",
        correctAnswer: "Önlük, tıbbi maske, eldiven",
        details: {
            coreInfo: "<b>Örnek Kabulü KKE:</b> Örnek kabul alanında aerosol oluşturucu işlem yapılmaz, sadece temas ve damlacık riski vardır. Bu nedenle N95 maske gereksizdir.",
            keyPoints: [
                "<b>Tıbbi maske yeterli:</b> Örnek kabul damlacık koruması sağlar; N95 sadece aerosol oluşturan işlemlerde (örnek açma, ekim) gerekir.",
                "<b>Eldiven:</b> Temas koruması için zorunlu.",
                "<b>Önlük:</b> Vücut koruması için gerekli (su geçirmez olabilir).",
                "<b>Gözlük:</b> Sıçrama riski varsa önerilir ancak asgari gereklilik değil.",
                "<b>N95/FFP2:</b> Sadece aerosol oluşturan işlemlerde (laboratuvar içi, sürüntü alma) gerekir."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Alan</th><th>Maske Tipi</th><th>Neden</th></tr>
                    <tr><td><b>Örnek Kabulü</b></td><td>Tıbbi maske</td><td>Damlacık koruması</td></tr>
                    <tr><td>Sürüntü Alma</td><td>N95/FFP2</td><td>Aerosol riski</td></tr>
                    <tr><td>Laboratuvar (Ekim)</td><td>N95/FFP2</td><td>Aerosol riski</td></tr>
                </table>
            `,
            relatedQuestions: [
                "<b>N95 maske ne zaman takılmalıdır?</b> → Doğru cevap: Aerosol oluşturan işlemlerde (nazofaringeal sürüntü, ekim, vorteks)",
                "<b>Tıbbi maske ile N95 arasındaki fark nedir?</b> → Doğru cevap: N95 aerosol filtreler (%95 ≥0.3 µm), tıbbi maske sadece damlacık tutar",
                "<b>Örnek kabul alanında gözlük zorunlu mu?</b> → Doğru cevap: Asgari değil ama sıçrama riski varsa önerilir",
                "<b>Su geçirmez önlük ne zaman gerekir?</b> → Doğru cevap: Kan veya sıvı sıçrama riski yüksek alanlarda"
            ]
        }
    },
    {
        id: 63,
        category: "Viroloji",
        topic: "COVID-19 Örnek Taşıma",
        question: "COVID-19 şüpheli örneklerin taşınması ile ilgili hangisi yanlıştır?",
        correctAnswer: "Sızdırmaz şekilde paketlenen örnekler pnömatik tüp taşıma sistemi ile nakledilmelidir (YANLIŞ)",
        details: {
            coreInfo: "<b>Üçlü Paketleme Sistemi:</b> COVID-19 örnekleri UN3373 (Biyolojik Madde, Kategori B) olarak sınıflandırılır ve üçlü paket zorunludur. Pnömatik tüp sistemi kırılma/sızıntı riski nedeniyle yasaktır.",
            keyPoints: [
                "<b>1. Katman (Primer):</b> Sızdırmaz tüp/kap (vida kapaklı, sızdırmaz).",
                "<b>2. Katman (Sekonder):</b> Sızdırmaz plastik torba + emici materyal (sızıntı durumunda emerek).",
                "<b>3. Katman (Dış):</b> Sert dış ambalaj (UN3373 etiketi, istem formu dışarıda).",
                "<b>Pnömatik tüp yasaktır:</b> Hızlı hareket ve çarpma nedeniyle kırılma/sızıntı riski yüksektir.",
                "<b>Dekontaminasyon:</b> Kabın dış yüzeyi %0.1 çamaşır suyu veya %70 alkol ile silinir."
            ],
            pitfalls: "Pnömatik tüp sistemi hızlı ama güvensizdir; COVID-19 örnekleri için yasaktır.",
            relatedQuestions: [
                "<b>UN3373 ne anlama gelir?</b> → Doğru cevap: Biyolojik Madde, Kategori B (enfeksiyöz ama büyük salgın riski düşük)",
                "<b>Üçlü paketleme neden zorunludur?</b> → Doğru cevap: Sızıntı durumunda çevreye yayılmayı önlemek ve güvenli taşımayı sağlamak",
                "<b>İstem formu nereye konulmalıdır?</b> → Doğru cevap: Dış ambalajın dışına (biyolojik materyal ile temas etmemeli)",
                "<b>Emici materyal neden kullanılır?</b> → Doğru cevap: İç kap kırılırsa sıvıyı emerek dış ambalaja sızmasını önler"
            ]
        }
    },
    {
        id: 64,
        category: "Viroloji",
        topic: "COVID-19 Laboratuvar BGD",
        question: "COVID-19 tanı laboratuvarlarının biyogüvenlik düzeyi (BGD) ile ilgili hangisi doğrudur?",
        correctAnswer: "Bulaştırıcı olmayan tanısal çalışmalar BGD-2 laboratuvarlarda yapılmalıdır",
        details: {
            coreInfo: "<b>SARS-CoV-2 Biyogüvenlik Sınıflandırması:</b> WHO ve CDC, tanısal PCR çalışmalarını BGD-2'de, virüs izolasyonu ve canlı kültür çalışmalarını BGD-3'te yapılmasını önerir.",
            keyPoints: [
                "<b>BGD-2 yeterli:</b> RNA ekstraksiyonu, PCR, seroloji gibi inaktivasyon sonrası çalışmalar için.",
                "<b>BGD-3 gerekli:</b> Canlı virüs kültürü, virüs izolasyonu, yüksek konsantrasyonlu virüs üretimi.",
                "<b>Sekanslama:</b> İnaktive edilmiş örneklerden yapılırsa BGD-2 yeterli.",
                "<b>İlk işleme (örnek açma):</b> BGD-2 kabinde yapılmalı (aerosol riski).",
                "<b>Banko çalışması yasak:</b> Hiçbir işlem açıkta yapılmamalı, tüm aerosol riski olan işlemler kabinde."
            ],
            table: `
                <table class="info-table">
                    <tr><th>İşlem</th><th>BGD Düzeyi</th><th>Neden</th></tr>
                    <tr><td><b>PCR (RNA ekstraksiyonu)</b></td><td>BGD-2</td><td>İnaktivasyon sonrası</td></tr>
                    <tr><td>Seroloji (Antikor)</td><td>BGD-2</td><td>Bulaştırıcı değil</td></tr>
                    <tr><td>Virüs izolasyonu</td><td>BGD-3</td><td>Canlı virüs</td></tr>
                </table>
            `,
            relatedQuestions: [
                "<b>BGD-2 ve BGD-3 arasındaki temel fark nedir?</b> → Doğru cevap: BGD-3'te HEPA filtreli havalandırma ve negatif basınç zorunlu",
                "<b>RNA ekstraksiyonu neden BGD-2'de yapılabilir?</b> → Doğru cevap: Liz bufferı virüsü inaktive eder, canlı virüs kalmaz",
                "<b>Sekanslama çalışması BGD-3 gerektirir mi?</b> → Doğru cevap: Hayır, inaktive edilmiş örnekten yapılırsa BGD-2 yeterli",
                "<b>Virüs kültürü neden BGD-3 gerektirir?</b> → Doğru cevap: Canlı ve yüksek konsantrasyonlu virüs üretimi aerosol riski oluşturur"
            ]
        }
    },
    {
        id: 65,
        category: "Viroloji",
        topic: "COVID-19 Laboratuvar Fiziki Koşullar",
        question: "COVID-19 tanı laboratuvarlarının fiziki koşulları ile ilgili hangisi yanlıştır?",
        correctAnswer: "Örnek kabulü laboratuvar içerisinde yapılmalıdır (YANLIŞ - Ayrı bir alan olmalı)",
        details: {
            coreInfo: "<b>Tek Yönlü İş Akışı (Unidirectional Workflow):</b> Kontaminasyon önlemek için örnek → ekstraksiyon → amplifikasyon → sonuç yönünde tek yönlü hareket zorunludur. Geriye dönüş yasaktır.",
            keyPoints: [
                "<b>Örnek kabulü ayrı:</b> Laboratuvar dışında ayrı bir alanda yapılmalı (kontaminasyon riski).",
                "<b>Minimum 3 oda:</b> (1) Ekstraksiyon, (2) Miks hazırlama, (3) Amplifikasyon (PCR cihazı).",
                "<b>Malzeme izolasyonu:</b> Her odanın ekipmanı o odaya özel olmalı, odalar arası taşıma yasak.",
                "<b>Giriş kısıtlaması:</b> Sadece yetkili personel girmeli, giriş-çıkış kayıtlı olmalı.",
                "<b>Sonuç odası temiz:</b> Amplifikasyon sonrası sonuçlar raporlama odasında değerlendirilir, buraya örnek girmez."
            ],
            pitfalls: "Örnek kabulünü laboratuvar içinde yapmak kontaminasyon riskini artırır; mutlaka ayrı bir alan gereklidir.",
            relatedQuestions: [
                "<b>Tek yönlü iş akışı neden önemlidir?</b> → Doğru cevap: Amplikon kontaminasyonunu önlemek için geriye dönüş yasaktır",
                "<b>PCR cihazı hangi odada olmalıdır?</b> → Doğru cevap: Amplifikasyon odasında (ekstraksiyondan ayrı)",
                "<b>Miks hazırlama neden ayrı odada yapılır?</b> → Doğru cevap: Amplikon kontaminasyonundan korunmak için",
                "<b>Laboratuvara malzeme girişi nasıl olmalı?</b> → Doğru cevap: Dekontamine edilerek ve tek yönde ilerleyerek"
            ]
        }
    },
    {
        id: 66,
        category: "Viroloji",
        topic: "Hepatit Delta Virüsü (HDV)",
        question: "Hepatit D Virüsü (HDV) hangi viral proteine ihtiyaç duyar?",
        correctAnswer: "HBsAg (Hepatit B yüzey antijeni)",
        details: {
            coreInfo: "<b>HDV = Defektif Virüs:</b> Kendi zarfını oluşturamaz, HBV'nin HBsAg'sini kullanarak hücreye girer. HDV enfeksiyonu ancak HBV varlığında (koenfeksiyon veya süperenfeksiyon) oluşabilir.",
            keyPoints: [
                "<b>Koenfeksiyon:</b> HBV + HDV aynı anda bulaşır → Genellikle akut, kendi kendini sınırlar.",
                "<b>Süperenfeksiyon:</b> Kronik HBV taşıyıcısına HDV eklenir → %70-90 kronikleşme, fulminan risk yüksek.",
                "<b>Tanı:</b> Anti-HDV IgM/IgG + HDV RNA (PCR).",
                "<b>Tedavi:</b> Pegile interferon (Nükleozid analogları HDV'ye etkisizdir).",
                "<b>Korunma:</b> HBV aşısı HDV'den de korur (HBV olmadan HDV olmaz)."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Durum</th><th>HBsAg</th><th>Anti-HDV</th><th>HDV RNA</th><th>Sonuç</th></tr>
                    <tr><td><b>Koenfeksiyon</b></td><td>Pozitif</td><td>IgM (+)</td><td>Pozitif</td><td>Akut (İyileşir)</td></tr>
                    <tr><td><b>Süperenfeksiyon</b></td><td>Pozitif</td><td>IgG yüksek</td><td>Yüksek viral yük</td><td>Kronik (%80)</td></tr>
                </table>
            `,
            pitfalls: "HDV için HBsAg şarttır. Anti-HBc veya HBeAg değil, mutlaka HBsAg gerekir.",
            relatedQuestions: [
                "<b>HDV tedavisinde neden nükleozid analogları kullanılmaz?</b> → Doğru cevap: HDV RNA virüsüdür, DNA polimeraz inhibitörleri etkisizdir",
                "<b>Süperenfeksiyon neden daha tehlikelidir?</b> → Doğru cevap: Kronikleşme oranı %70-90'dır ve fulminan hepatit riski yüksektir",
                "<b>HBV aşısı HDV'den korur mu?</b> → Doğru cevap: Evet, çünkü HDV ancak HBsAg varlığında çoğalabilir",
                "<b>Koenfeksiyonda prognoz nasıldır?</b> → Doğru cevap: Genellikle iyidir, %95 akut enfeksiyon kendi kendini sınırlar"
            ]
        }
    },
    {
        id: 67,
        category: "Viroloji",
        topic: "EBV Serolojisi (İnfeksiyöz Mononükleoz)",
        question: "Epstein-Barr Virüsü (EBV) tanısında hangi antikor akut enfeksiyonu gösterir?",
        correctAnswer: "VCA-IgM (Viral Capsid Antigen IgM)",
        details: {
            coreInfo: "<b>EBV = İnfeksiyöz Mononükleoz Etkeni:</b> B lenfositleri enfekte eder. Serolojik tanı kritik çünkü kültür yapılamaz.",
            keyPoints: [
                "<b>VCA-IgM:</b> Akut enfeksiyonun işareti (2-4 hafta pozitif kalır).",
                "<b>VCA-IgG:</b> Geçmiş enfeksiyon veya immünite (ömür boyu kalır).",
                "<b>EBNA-IgG:</b> Geç dönem antikoru (6-12 ay sonra pozitifleşir), geçmiş enfeksiyonu gösterir.",
                "<b>EA-IgG (Early Antigen):</b> Akut veya reaktivasyon (klinik önemi düşük).",
                "<b>Heterofil Antikor (Paul-Bunnell):</b> %90 pozitif ama spesifik değil (yalancı pozitif olabilir)."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Durum</th><th>VCA-IgM</th><th>VCA-IgG</th><th>EBNA-IgG</th><th>Yorum</th></tr>
                    <tr><td><b>Akut Enfeksiyon</b></td><td><b>Pozitif</b></td><td>Pozitif</td><td>Negatif</td><td>İlk enfeksiyon</td></tr>
                    <tr><td>Geçmiş Enfeksiyon</td><td>Negatif</td><td>Pozitif</td><td>Pozitif</td><td>İmmün</td></tr>
                    <tr><td>Duyarlı (Hiç Geçirmemiş)</td><td>Negatif</td><td>Negatif</td><td>Negatif</td><td>Risk var</td></tr>
                </table>
            `,
            alert: "Heterofil antikor testleri (Monospot) hızlı ama yalancı pozitif/negatif olabilir. Kesin tanı için VCA-IgM gerekir.",
            relatedQuestions: [
                "<b>EBNA-IgG ne zaman pozitifleşir?</b> → Doğru cevap: 6-12 ay sonra, geçmiş enfeksiyonu gösterir",
                "<b>Heterofil antikor testi neden tercih edilmez?</b> → Doğru cevap: Spesifik değildir, yalancı pozitif/negatif olabilir",
                "<b>VCA-IgG pozitif, EBNA negatif ne anlama gelir?</b> → Doğru cevap: Son 6 ay içinde akut enfeksiyon geçirilmiş",
                "<b>EBV hangi hücreleri enfekte eder?</b> → Doğru cevap: B lenfositleri (CD21 reseptörü üzerinden)"
            ]
        }
    },
    {
        id: 68,
        category: "Viroloji",
        topic: "ELISA Yöntemleri (Sandviç vs Kompetitif)",
        question: "ELISA yöntemlerinde 'Sandviç ELISA' hangi durumlarda tercih edilir?",
        correctAnswer: "Büyük moleküllü antijenler (birden fazla epitop taşıyan)",
        details: {
            coreInfo: "<b>ELISA Çeşitleri:</b> Antijen veya antikor saptamak için kullanılır. Sandviç ELISA en hassas yöntemdir ancak antijen büyüklüğü kritiktir.",
            keyPoints: [
                "<b>Sandviç ELISA:</b> İki farklı antikor antijeni 'sandviç' gibi yakalar (2 epitop gerekir) → Yüksek özgüllük.",
                "<b>Kompetitif ELISA:</b> Küçük moleküller (1 epitop) için kullanılır → Düşük duyarlılık ama haptenler için tek seçenek.",
                "<b>İndirekt ELISA:</b> Antikor tespiti için (örn: Anti-HIV IgG).",
                "<b>Direkt ELISA:</b> Antijen tespiti, tek adım, hızlı ama duyarlılığı düşük.",
                "<b>Avantaj:</b> Sandviç ELISA yıkama adımları ile spesifik olmayan bağlanmayı azaltır."
            ],
            table: `
                <table class="info-table">
                    <tr><th>ELISA Tipi</th><th>Kullanım</th><th>Molekül Boyutu</th><th>Örnek</th></tr>
                    <tr><td><b>Sandviç</b></td><td>Antijen tespiti</td><td>Büyük (>2 epitop)</td><td>Sitokinler, HBsAg</td></tr>
                    <tr><td>Kompetitif</td><td>Antijen tespiti</td><td>Küçük (1 epitop)</td><td>İlaçlar, hormonlar</td></tr>
                    <tr><td>İndirekt</td><td>Antikor tespiti</td><td>-</td><td>Anti-HIV, Anti-HCV</td></tr>
                </table>
            `,
            pitfalls: "Küçük moleküller (haptenler) için Sandviç ELISA kullanılamaz çünkü iki ayrı epitop yoktur.",
            relatedQuestions: [
                "<b>Kompetitif ELISA neden daha az hassastır?</b> → Doğru cevap: Sinyal azalması (inhibisyon) ölçülür, artış değil",
                "<b>HBsAg tespiti için hangi ELISA kullanılır?</b> → Doğru cevap: Sandviç ELISA (büyük antijen, yüksek özgüllük)",
                "<b>İndirekt ELISA'da ikinci antikor neden kullanılır?</b> → Doğru cevap: Sinyal amplifikasyonu ve maliyet düşürme",
                "<b>Hapten nedir ve neden kompetitif ELISA gerekir?</b> → Doğru cevap: Küçük molekül (tek epitop), sandviç yapılamaz"
            ]
        }
    },
    {
        id: 69,
        category: "Viroloji",
        topic: "İnfluenza Tedavi ve Direnç",
        question: "Oseltamivir dirençli influenza A (H1N1) suşlarında hangi mutasyon sorumludur?",
        correctAnswer: "H275Y mutasyonu (Nöraminidaz geninde)",
        details: {
            coreInfo: "<b>Nöraminidaz İnhibitörleri (NAI):</b> Oseltamivir (Tamiflu) ve Zanamivir, virüsün hücreden salınımını engeller. H275Y mutasyonu nöraminidaz enziminin 275. pozisyonunda histidin → tirozin değişimi ile dirençe neden olur.",
            keyPoints: [
                "<b>H275Y mutasyonu:</b> Oseltamivir'e yüksek direnç (>100 kat), Zanamivir'e duyarlı kalır.",
                "<b>2008-2009 Pandemisi:</b> H1N1 suşlarının %99'u H275Y taşıyordu.",
                "<b>Alternatif tedavi:</b> Zanamivir (inhale) veya Peramivir (IV) kullanılır.",
                "<b>M2 İnhibitörleri:</b> Amantadin/Rimantadin artık önerilmez (yaygın direnç).",
                "<b>Direnç testi:</b> Nöraminidaz inhibisyon assay veya PCR ile H275Y tespiti."
            ],
            table: `
                <table class="info-table">
                    <tr><th>İlaç</th><th>Hedef</th><th>H275Y Etkisi</th><th>Kullanım</th></tr>
                    <tr><td><b>Oseltamivir</b></td><td>Nöraminidaz</td><td><b>Dirençli</b></td><td>Oral</td></tr>
                    <tr><td>Zanamivir</td><td>Nöraminidaz</td><td>Duyarlı</td><td>İnhale</td></tr>
                    <tr><td>Amantadin</td><td>M2 proteini</td><td>Yaygın direnç</td><td>Artık kullanılmaz</td></tr>
                </table>
            `,
            alert: "H275Y direnci influenza B'de görülmez, sadece influenza A (özellikle H1N1) suşlarına özgüdür.",
            relatedQuestions: [
                "<b>Nöraminidaz inhibitörlerinin etki mekanizması nedir?</b> → Doğru cevap: Virüsün hücreden salınımını ve yayılımını engeller",
                "<b>M2 inhibitörleri neden artık kullanılmaz?</b> → Doğru cevap: Influenza A suşlarının >95'inde direnç gelişmiştir",
                "<b>Zanamivir neden H275Y mutasyonuna karşı etkilidir?</b> → Doğru cevap: Farklı bağlanma bölgesi kullanır, mutasyon etkilemez",
                "<b>İnfluenza tedavisi ne zaman başlatılmalıdır?</b> → Doğru cevap: Semptom başlangıcından 48 saat içinde (erken başlama kritik)"
            ]
        }
    },
    {
        id: 70,
        category: "Viroloji",
        topic: "Enterovirüs Menenjiti",
        question: "Aseptik menenjit etkeni enterovirüs tanısında hangi örnek ve yöntem tercih edilir?",
        correctAnswer: "BOS + RT-PCR",
        details: {
            coreInfo: "<b>Enterovirüsler (Coxsackie, Echovirus, Enterovirus 71):</b> Aseptik menenjit, el-ayak-ağız hastalığı, miyokardit etkeni. Hücre kültürü yavaş ve duyarsızdır, RT-PCR altın standarttır.",
            keyPoints: [
                "<b>RT-PCR:</b> 4-6 saat içinde sonuç, %95-100 duyarlılık, BOS'tan direkt çalışılır.",
                "<b>Hücre kültürü:</b> 3-8 gün sürer, bazı serotipleri üremez (Echovirus 22, 23).",
                "<b>BOS bulguları:</b> Lenfosit hakimiyeti, normal glukoz, hafif protein yüksekliği.",
                "<b>Dışkı kültürü:</b> Gastrointestinal atılım uzun sürer ama BOS'tan daha az spesifik.",
                "<b>Seroloji:</b> Fazla serotip olduğu için pratik değil (>70 serotip)."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Yöntem</th><th>Süre</th><th>Duyarlılık</th><th>Dezavantaj</th></tr>
                    <tr><td><b>RT-PCR (BOS)</b></td><td>4-6 saat</td><td>%95-100</td><td>Pahalı</td></tr>
                    <tr><td>Hücre Kültürü</td><td>3-8 gün</td><td>%65-75</td><td>Yavaş, bazı tipler üremez</td></tr>
                    <tr><td>Seroloji</td><td>1-2 gün</td><td>Düşük</td><td>Çok serotip, spesifik değil</td></tr>
                </table>
            `,
            pitfalls: "Dışkı kültürü pozitif olabilir ama BOS enfeksiyonunu kanıtlamaz (asemptomatik atılım olabilir).",
            relatedQuestions: [
                "<b>Neden hücre kültürü yerine RT-PCR tercih edilir?</b> → Doğru cevap: RT-PCR çok daha hızlı (4-6 saat) ve duyarlıdır (%95-100)",
                "<b>Enterovirüs menenjitinde BOS glukoz düşük müdür?</b> → Doğru cevap: Hayır, genellikle normaldir (bakteriyel menenjit ile ayırıcı tanı)",
                "<b>Seroloji neden kullanışlı değildir?</b> → Doğru cevap: 70'den fazla serotip vardır, spesifik antikor testi pratik değil",
                "<b>Dışkı örneği BOS'tan daha mı iyidir?</b> → Doğru cevap: Hayır, dışkıda uzun süre atılım olur ama BOS enfeksiyonunu kanıtlamaz"
            ]
        }
    },
    {
        id: 71,
        category: "Viroloji",
        topic: "HBV Mutasyonları (Precore/Core Promoter)",
        question: "Kronik HBV hastasında HBeAg negatif ama yüksek HBV DNA varsa hangi mutasyon sorumludur?",
        correctAnswer: "Precore mutasyonu (G1896A) veya Basal Core Promoter (BCP) mutasyonu",
        details: {
            coreInfo: "<b>HBeAg Negatif Kronik Hepatit B:</b> Precore (özellikle G1896A) veya BCP mutasyonları HBeAg üretimini durdurur ama virüs replikasyonu devam eder. Bu hastalar Anti-HBe pozitif olmasına rağmen yüksek viral yüke sahiptir.",
            keyPoints: [
                "<b>Precore Mutasyonu (G1896A):</b> Erken stop kodonu → HBeAg üretilmez ama virüs çoğalır.",
                "<b>BCP Mutasyonu:</b> Core promoter bölgesinde A1762T/G1764A → HBeAg transkripsiyonu azalır.",
                "<b>Klinik Önem:</b> Bu hastalar 'HBeAg negatif' görünse de aktif hepatit ve siroz riski yüksektir.",
                "<b>Tedavi:</b> Mutant suşlar da nükleozid analoglarına (entekavir, tenofovir) duyarlıdır.",
                "<b>Coğrafi Dağılım:</b> Precore mutasyonu Akdeniz, Asya'da sıktır."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Durum</th><th>HBsAg</th><th>HBeAg</th><th>Anti-HBe</th><th>HBV DNA</th><th>Yorum</th></tr>
                    <tr><td><b>Klasik Kronik</b></td><td>Pozitif</td><td>Pozitif</td><td>Negatif</td><td>Yüksek</td><td>Aktif replikasyon</td></tr>
                    <tr><td><b>Precore Mutant</b></td><td>Pozitif</td><td><b>Negatif</b></td><td>Pozitif</td><td><b>Yüksek</b></td><td>HBeAg üretilmiyor</td></tr>
                    <tr><td>İnaktif Taşıyıcı</td><td>Pozitif</td><td>Negatif</td><td>Pozitif</td><td>Düşük (<2000 IU/mL)</td><td>Minimal hastalık</td></tr>
                </table>
            `,
            pitfalls: "HBeAg negatif = düşük viral yük değildir! Mutasyon varsa hasta yüksek viral yükle serokonversiyon yapmış gibi görünür.",
            relatedQuestions: [
                "<b>Precore mutasyonu hangi coğrafyalarda sıktır?</b> → Doğru cevap: Akdeniz, Orta Doğu, Asya (genotip D ve C)",
                "<b>HBeAg negatif kronik hepatit tedavi edilir mi?</b> → Doğru cevap: Evet, viral yük >2000 IU/mL ise nükleozid analogları kullanılır",
                "<b>BCP mutasyonu neyi etkiler?</b> → Doğru cevap: Core promoter transkripsiyonunu azaltarak HBeAg sentezini düşürür",
                "<b>İnaktif taşıyıcı ile precore mutantı nasıl ayırt edilir?</b> → Doğru cevap: Viral yük takibi (mutant >2000, inaktif <2000 IU/mL)"
            ]
        }
    },
    {
        id: 72,
        category: "Viroloji",
        topic: "Hepatit C Genotipleri ve Tedavi",
        question: "Türkiye'de en sık görülen HCV genotipi hangisidir?",
        correctAnswer: "Genotip 1b",
        details: {
            coreInfo: "<b>HCV Genotip Dağılımı:</b> Türkiye'de %80-90 genotip 1b, %10-15 genotip 1a, %3-5 genotip 2-4'tür. Genotip tedavi süresi ve ilaç seçiminde önemliydi (eski tedaviler için), ancak yeni DAA'lar (Direkt Etkili Antiviraller) pangenotipiktir.",
            keyPoints: [
                "<b>Genotip 1b:</b> Türkiye'de dominant, önceden interferon tedavisine dirençliydi.",
                "<b>Genotip 3:</b> Steatoz ve siroz riski en yüksek.",
                "<b>Pangenotipik DAA'lar:</b> Sofosbuvir/Velpatasvir, Glecaprevir/Pibrentasvir tüm genotiplere etkili.",
                "<b>Tedavi Süresi:</b> 8-12 hafta, %95-99 SVR (Sustained Virologic Response).",
                "<b>Genotipleme:</b> Real-time PCR veya sekanslama ile yapılır."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Genotip</th><th>Coğrafi Dağılım</th><th>Türkiye'de Sıklık</th><th>Özellik</th></tr>
                    <tr><td><b>1b</b></td><td>Dünya çapında</td><td>%80-90</td><td>En yaygın</td></tr>
                    <tr><td>1a</td><td>Kuzey Amerika, Avrupa</td><td>%10-15</td><td>IVDU sık</td></tr>
                    <tr><td>3</td><td>Asya, Güney Asya</td><td>%3-5</td><td>Steatoz riski ↑</td></tr>
                    <tr><td>4</td><td>Orta Doğu, Afrika</td><td>%1-2</td><td>Nadir</td></tr>
                </table>
            `,
            alert: "Eski interferon tedavileri genotipe duyarlıydı. Yeni DAA'lar pangenotipik olduğu için genotipleme artık tedavi kararında kritik değil.",
            relatedQuestions: [
                "<b>Pangenotipik DAA nedir?</b> → Doğru cevap: Tüm HCV genotiplerinde etkili olan direkt etkili antiviraller (örn: SOF/VEL)",
                "<b>SVR ne anlama gelir?</b> → Doğru cevap: Sustained Virologic Response (tedavi bitiminden 12-24 hafta sonra HCV RNA negatif)",
                "<b>Genotip 3 neden risklidir?</b> → Doğru cevap: Steatoz, fibrozis ve siroz gelişimi diğer genotiplerden daha hızlıdır",
                "<b>HCV genotipleme hangi yöntemle yapılır?</b> → Doğru cevap: Real-time PCR (5' UTR bölgesi) veya NS5B gen sekanslama"
            ]
        }
    },
    {
        id: 73,
        category: "Viroloji",
        topic: "CMV Konjenital Enfeksiyonu",
        question: "Konjenital CMV enfeksiyonunda doğumda asemptomatik bebeklerin kaçında ilerleyen yaşlarda sekonder sekeli gelişir?",
        correctAnswer: "%10-15",
        details: {
            coreInfo: "<b>Konjenital CMV:</b> En sık konjenital viral enfeksiyondur (%0.5-2). Doğumda %90 asemptomatik ama bunların %10-15'inde sensorinöral işitme kaybı, gelişim geriliği gibi geç sekel görülür.",
            keyPoints: [
                "<b>Semptomatik Bebekler (%10):</b> Mikrosefali, hepatosplenomegali, trombositopeni, sarılık, koryoretinit.",
                "<b>Asemptomatik Bebekler (%90):</b> Doğumda normal ama %10-15'inde geç işitme kaybı.",
                "<b>En Sık Sekel:</b> Sensorinöral işitme kaybı (tek taraflı veya iki taraflı, ilerleyici).",
                "<b>Tanı:</b> İdrarda CMV DNA (PCR) veya salya kültürü (doğumdan 2-3 hafta içinde).",
                "<b>Tedavi:</b> Semptomatik bebeklerde Gansiklovir/Valgansiklovir (6 ay)."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Durum</th><th>Doğumda Semptom</th><th>Geç Sekel Riski</th><th>İşitme Kaybı</th></tr>
                    <tr><td><b>Semptomatik (%10)</b></td><td>Evet (Ağır)</td><td>%40-60</td><td>%50-60</td></tr>
                    <tr><td><b>Asemptomatik (%90)</b></td><td>Hayır</td><td>%10-15</td><td>%7-10</td></tr>
                </table>
            `,
            pitfalls: "Asemptomatik = güvenli değildir! Bebekler yıllarca izlenmeli, işitme testleri düzenli yapılmalıdır.",
            relatedQuestions: [
                "<b>Konjenital CMV tanısı nasıl konur?</b> → Doğru cevap: Doğumdan 2-3 hafta içinde idrarda CMV DNA (PCR) pozitifliği",
                "<b>En sık konjenital CMV sekel nedir?</b> → Doğru cevap: Sensorinöral işitme kaybı (ilerleyici olabilir)",
                "<b>Primer maternal CMV enfeksiyonu neden daha risklidir?</b> → Doğru cevap: Maternal antikor yoktur, fetal geçiş riski %30-40 (reaktivasyonda %1-2)",
                "<b>Konjenital CMV tedavisi ne zaman verilir?</b> → Doğru cevap: Semptomatik bebeklerde Gansiklovir/Valgansiklovir 6 ay süreyle"
            ]
        }
    },
    {
        id: 74,
        category: "Viroloji",
        topic: "HSV-1 ve HSV-2 Ayırıcı Tanısı",
        question: "Genital herpes vakasında HSV-1 ve HSV-2'yi ayırt etmek için hangi test kullanılır?",
        correctAnswer: "Tip-spesifik seroloji (gG1 ve gG2 antikorları) veya PCR sonrası sekanslama/Typing",
        details: {
            coreInfo: "<b>HSV-1 vs HSV-2:</b> İkisi de genital ve orolabiyal herpes yapabilir. Tip-spesifik glikoprotein G (gG) antikorları ile ayırt edilir. gG1 (HSV-1) ve gG2 (HSV-2) farklı proteinlerdir.",
            keyPoints: [
                "<b>gG-bazlı ELISA:</b> HSV-1 ve HSV-2'yi serolojik olarak ayırır (çapraz reaksiyon yoktur).",
                "<b>PCR + Sekanslama:</b> Lezyondan direkt virüs tipini belirler (en kesin yöntem).",
                "<b>Hücre Kültürü + IF:</b> Sitopatolojik etki + tip-spesifik monoklonal antikor.",
                "<b>Klinik Fark:</b> HSV-2 genital rekürrens daha sık (%90 vs %55), HSV-1 orolabiyal rekürrens daha sık.",
                "<b>Epidemiyoloji:</b> HSV-1 oral temas, HSV-2 cinsel temas ile bulaşır."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Yöntem</th><th>Materyal</th><th>Avantaj</th><th>Dezavantaj</th></tr>
                    <tr><td><b>Tip-spesifik ELISA (gG)</b></td><td>Serum</td><td>Epidemiyolojik, geçmiş enfeksiyon</td><td>Akut dönem seroloji negatif olabilir</td></tr>
                    <tr><td>PCR + Typing</td><td>Lezyon sürüntüsü</td><td>En kesin, hızlı</td><td>Pahalı</td></tr>
                    <tr><td>Kültür + IF</td><td>Veziküler sıvı</td><td>Canlı virüs izolasyonu</td><td>Yavaş (3-7 gün)</td></tr>
                </table>
            `,
            alert: "Standart HSV IgG testleri (non-spesifik) HSV-1 ve HSV-2'yi ayırt edemez. Mutlaka gG-bazlı test istenmelidir.",
            relatedQuestions: [
                "<b>gG1 ve gG2 nedir?</b> → Doğru cevap: Tip-spesifik glikoprotein G antikorları (HSV-1 = gG1, HSV-2 = gG2)",
                "<b>HSV-2 genital rekürrens neden daha sıktır?</b> → Doğru cevap: HSV-2 sakral gangliyonlarda daha iyi latent kalır ve reaktive olur",
                "<b>Akut genital herpes tanısında en hızlı yöntem?</b> → Doğru cevap: PCR (lezyon sürüntüsü, 24 saat içinde sonuç)",
                "<b>Tzanck testi HSV tipini ayırır mı?</b> → Doğru cevap: Hayır, sadece sitopatolojik değişiklik gösterir (multinükleer dev hücre)"
            ]
        }
    },
    {
        id: 75,
        category: "Viroloji",
        topic: "HIV Akut Retroviral Sendrom",
        question: "HIV akut retroviral sendromunda (ARS) hangi laboratuvar bulgusu en erken pozitifleşir?",
        correctAnswer: "p24 antijeni (2-4 hafta) veya HIV RNA (7-10 gün)",
        details: {
            coreInfo: "<b>HIV Serolojik Pencere:</b> Bulaştan 1-2 hafta sonra HIV RNA, 2-4 hafta sonra p24 antijeni, 3-12 hafta sonra antikorlar (Anti-HIV IgM/IgG) pozitifleşir. 4. kuşak testler p24 Ag + Ab birlikte tespit eder.",
            keyPoints: [
                "<b>HIV RNA (Viral Yük):</b> 7-10 günde pozitifleşir, en erken belirteç.",
                "<b>p24 Antijeni:</b> 2-4 hafta, ARS döneminde yüksek (sonra antikor gelişince azalır).",
                "<b>Anti-HIV Antikorlar:</b> 3-12 hafta (medyan 25 gün), serokonversiyon penceresi.",
                "<b>4. Kuşak ELISA:</b> p24 Ag + Anti-HIV Ab kombinasyonu → pencereyi 2 haftaya indirir.",
                "<b>ARS Semptomları:</b> Ateş, döküntü, farenjit, lenfadenopati (mononükleoz-benzeri)."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Test</th><th>Pozitifleşme Süresi</th><th>Kullanım</th></tr>
                    <tr><td><b>HIV RNA (NAT)</b></td><td>7-10 gün</td><td>En erken tanı (pahalı)</td></tr>
                    <tr><td>p24 Antijeni</td><td>2-4 hafta</td><td>4. kuşak ELISA'da var</td></tr>
                    <tr><td>Anti-HIV IgM/IgG</td><td>3-12 hafta</td><td>Standart tarama</td></tr>
                    <tr><td>4. Kuşak (Ag/Ab)</td><td>~2 hafta</td><td>Güncel tarama testi</td></tr>
                </table>
            `,
            pitfalls: "Akut maruziyetten 1-2 hafta sonra antibadi testleri negatif olabilir (pencere dönemi). Şüphe varsa HIV RNA bakılmalı.",
            relatedQuestions: [
                "<b>4. kuşak ELISA neden 3. kuşaktan üstündür?</b> → Doğru cevap: Hem p24 antijeni hem antikorları tespit eder, pencereyi kısaltır",
                "<b>Akut HIV enfeksiyonunda antikor testi neden negatif olabilir?</b> → Doğru cevap: Serokonversiyon 3-12 hafta sürer (pencere dönemi)",
                "<b>p24 antijeni neden daha sonra düşer?</b> → Doğru cevap: Anti-p24 antikorları gelişir ve antijeni nötralize eder",
                "<b>ARS döneminde viral yük neden çok yüksektir?</b> → Doğru cevap: İmmün sistem henüz yanıt vermemiş, virüs kontrolsüz çoğalır"
            ]
        }
    },
    {
        id: 76,
        category: "Viroloji",
        topic: "Hücre Kültürü Sitopatik Etki (CPE)",
        question: "Hücre kültüründe 'Balon Dejenerasyonu ve Multinükleer Dev Hücre' oluşumu hangi virüs ailesiyle ilişkilidir?",
        correctAnswer: "Herpesviridae (HSV, VZV, CMV)",
        details: {
            coreInfo: "<b>Sitopatik Etki (CPE):</b> Virüslerin hücre kültüründe neden olduğu morfolojik değişikliklerdir. Her virüs ailesi karakteristik CPE oluşturur.",
            keyPoints: [
                "<b>Herpes Virüsleri:</b> Balon dejenerasyonu + multinükleer dev hücre + intranükleer inklüzyon (Cowdry A).",
                "<b>Adenovirüs:</b> Üzüm salkımı (grape-like clustering) + intranükleer inklüzyon.",
                "<b>Enterovirüsler:</b> Hızlı hücre yuvarlaklaşması ve parçalanması (lysis).",
                "<b>Influenza:</b> Hemadsorpsiyon (eritrosit adsorbsiyonu).",
                "<b>CMV:</b> 'Baykuş gözü' inklüzyonları (owl's eye) + büyümüş hücreler."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Virüs</th><th>CPE Özelliği</th><th>Süre</th></tr>
                    <tr><td><b>HSV</b></td><td>Balon + Dev hücre</td><td>1-3 gün</td></tr>
                    <tr><td>CMV</td><td>Baykuş gözü</td><td>1-3 hafta</td></tr>
                    <tr><td>Adenovirüs</td><td>Üzüm salkımı</td><td>3-7 gün</td></tr>
                    <tr><td>Enterovirüs</td><td>Hızlı lysis</td><td>2-5 gün</td></tr>
                </table>
            `,
            alert: "CMV çok yavaş CPE oluşturur (1-3 hafta), bu nedenle Shell Vial (santrifügasyon + erken antijen testi) tercih edilir.",
            relatedQuestions: [
                "<b>Shell Vial yöntemi neden kullanılır?</b> → Doğru cevap: Yavaş üreyen virüsler (CMV) için erken tanı sağlar (24-48 saat)",
                "<b>Baykuş gözü inklüzyonu hangi virüse özgüdür?</b> → Doğru cevap: CMV (sitomegalovirüs)",
                "<b>Hemadsorpsiyon testi hangi virüs için kullanılır?</b> → Doğru cevap: Influenza ve parainfluenza (hemagglutinin proteini sayesinde)",
                "<b>Cowdry A inklüzyonu nedir?</b> → Doğru cevap: HSV/VZV'nin neden olduğu intranükleer inklüzyon (çevresi haleli)"
            ]
        }
    },
    {
        id: 77,
        category: "Viroloji",
        topic: "Adenovirüs Keratokonjonktiviti",
        question: "Adenovirüs keratokonjonktivit (EKC) tanısında hangi hızlı test kullanılır?",
        correctAnswer: "Lateral Flow Immunoassay (Hızlı Antijen Testi)",
        details: {
            coreInfo: "<b>Epidemik Keratokonjonktivit (EKC):</b> Adenovirüs tip 8, 19, 37 tarafından oluşur. Yüksek bulaşıcılık, su ve yüzeylerden temas yoluyla yayılır. Hızlı tanı hastane salgınlarını önlemek için kritiktir.",
            keyPoints: [
                "<b>Lateral Flow Test:</b> 10 dakikada sonuç, %89-95 duyarlılık, gözyaşı veya konjonktival sürüntü.",
                "<b>PCR:</b> Altın standart ama pahalı (tip belirleme de yapar).",
                "<b>Hücre Kültürü:</b> Yavaş (7-14 gün), üzüm salkımı CPE.",
                "<b>Klinik:</b> Subkonjonktival hemoraji + preauriküler lenfadenopati + korneal infiltratlar.",
                "<b>Tedavi:</b> Destekleyici (soğuk kompres, yapay gözyaşı), topikal steroid korneal infiltratlar için."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Yöntem</th><th>Süre</th><th>Duyarlılık</th><th>Kullanım</th></tr>
                    <tr><td><b>Lateral Flow (Hızlı Ag)</b></td><td>10 dakika</td><td>%89-95</td><td>Salgın kontrolü</td></tr>
                    <tr><td>PCR</td><td>4-6 saat</td><td>%95-100</td><td>Kesin tanı, tip belirleme</td></tr>
                    <tr><td>Hücre Kültürü</td><td>7-14 gün</td><td>%80-90</td><td>Artık az kullanılır</td></tr>
                </table>
            `,
            pitfalls: "EKC son derece bulaşıcıdır. Tonometreler, oftalmoskoplar mutlaka dezenfekte edilmeli (70% alkol veya %0.5 sodyum hipoklorit).",
            relatedQuestions: [
                "<b>EKC'ye en sık hangi adenovirüs tipleri neden olur?</b> → Doğru cevap: Tip 8, 19, 37 (D türü adenovirüsler)",
                "<b>Korneal infiltratlar ne zaman oluşur?</b> → Doğru cevap: Enfeksiyondan 7-10 gün sonra, immün reaksiyon sonucu",
                "<b>Adenovirüs dezenfeksiyonu neden zordur?</b> → Doğru cevap: Zarfsız virüs, alkole dayanıklı, hijyen önlemleri kritik",
                "<b>Preauriküler lenfadenopati neden önemlidir?</b> → Doğru cevap: Viral konjonktivit bulgusudur (bakteriyelde nadirdir)"
            ]
        }
    },
    {
        id: 78,
        category: "Viroloji",
        topic: "Rubella (Kızamıkçık) ve Konjenital Sendrom",
        question: "Gebelikte rubella IgM pozitif, IgG düşük avidite saptandı. Bu durum ne anlama gelir?",
        correctAnswer: "Primer akut rubella enfeksiyonu (ilk 3 ay ise konjenital rubella sendromu riski yüksek)",
        details: {
            coreInfo: "<b>IgG Avidite Testi:</b> IgG antikorlarının antijene bağlanma gücünü ölçer. Düşük avidite = yeni enfeksiyon (2-3 ay içinde), yüksek avidite = eski enfeksiyon (>3-4 ay önce).",
            keyPoints: [
                "<b>Düşük Avidite + IgM (+):</b> Primer akut enfeksiyon (ilk trimesterde %85 fetal enfeksiyon riski).",
                "<b>Yüksek Avidite + IgM (+):</b> IgM yalancı pozitif veya geç dönem enfeksiyon olabilir.",
                "<b>Konjenital Rubella Sendromu (CRS):</b> Katarakt, sağırlık, kalp defektleri (PDA), mikrosefali.",
                "<b>İlk Trimester:</b> %85 fetal tutulum, %35-60 ciddi malformasyon.",
                "<b>İkinci Trimester:</b> Risk azalır (%10-20), >20. hafta sonrası minimal risk."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Gebelik Haftası</th><th>Fetal Enfeksiyon Riski</th><th>CRS Riski</th></tr>
                    <tr><td><b><12 hafta</b></td><td>%85-90</td><td>%35-60 (Ağır malformasyon)</td></tr>
                    <tr><td>13-16 hafta</td><td>%50-60</td><td>%10-20 (Sağırlık)</td></tr>
                    <tr><td>>20 hafta</td><td>%10</td><td>Minimal</td></tr>
                </table>
            `,
            alert: "Gebelikte rubella şüphesinde MUTLAKA avidite testi yapılmalıdır. Sadece IgM pozitifliği yalancı pozitif olabilir.",
            relatedQuestions: [
                "<b>Yüksek avidite IgG ne anlama gelir?</b> → Doğru cevap: Enfeksiyon >3-4 ay önce geçirilmiş (gebelik öncesi), CRS riski yok",
                "<b>CRS'nin klasik triadı nedir?</b> → Doğru cevap: Katarakt, sağırlık, kalp defektleri (PDA)",
                "<b>Rubella aşısı gebelikte verilebilir mi?</b> → Doğru cevap: Hayır, canlı aşıdır, gebelikte kontrendikedir (gebelik öncesi 1 ay verilebilir)",
                "<b>İkinci trimesterde rubella enfeksiyonu ne yapar?</b> → Doğru cevap: Sağırlık riski var ama malformasyon riski düşüktür"
            ]
        }
    },
    {
        id: 79,
        category: "Viroloji",
        topic: "HPV (İnsan Papilloma Virüsü) ve Kanser",
        question: "Yüksek riskli HPV tiplerinde E6 ve E7 onkoproteinlerinin hedef molekülleri nelerdir?",
        correctAnswer: "E6 → p53'ü degrade eder, E7 → Rb (Retinoblastoma) proteinini inaktive eder",
        details: {
            coreInfo: "<b>HPV Onkogenezi:</b> Yüksek riskli HPV tipleri (16, 18, 31, 33, 45) E6 ve E7 onkoproteinleri ile hücre döngüsü kontrolünü bozar. p53 ve Rb tümör süpresör proteinlerdir.",
            keyPoints: [
                "<b>E6 Proteini:</b> p53'ü degrade eder → apoptoz engellenir → anormal hücreler çoğalır.",
                "<b>E7 Proteini:</b> Rb'yi inaktive eder → E2F serbest kalır → S fazına geçiş kontrolsüz olur.",
                "<b>Yüksek Riskli:</b> HPV 16, 18 (serviks kanserinin %70'i), 31, 33, 45, 52, 58.",
                "<b>Düşük Riskli:</b> HPV 6, 11 (genital siğiller, kondiloma).",
                "<b>Tanı:</b> HPV DNA testi (Hybrid Capture 2, PCR), sitoloji (Pap smear), p16 immünhistokimya."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Onkoprotein</th><th>Hedef</th><th>Etki</th><th>Sonuç</th></tr>
                    <tr><td><b>E6</b></td><td>p53</td><td>Degradasyon</td><td>Apoptoz engellenir</td></tr>
                    <tr><td><b>E7</b></td><td>Rb</td><td>İnaktivasyon</td><td>Hücre döngüsü kontrolsüz</td></tr>
                </table>
            `,
            pitfalls: "HPV 16 en sık orofaringeal kanserlere (tonsil, dil kökü) de neden olur. Servikse özgü değildir.",
            relatedQuestions: [
                "<b>p53'ün normal görevi nedir?</b> → Doğru cevap: Hücre döngüsünü durdurur ve hasarlı hücrelerde apoptozu tetikler (genom koruyucusu)",
                "<b>Rb proteininin rolü nedir?</b> → Doğru cevap: E2F'yi bağlar ve hücre bölünmesini engeller (G1/S checkpoint)",
                "<b>HPV 16 ve 18 neden daha risklidir?</b> → Doğru cevap: E6/E7 proteinleri p53 ve Rb'ye daha güçlü bağlanır",
                "<b>p16 immünhistokimya neden kullanılır?</b> → Doğru cevap: HPV ile ilişkili displazi ve kanserlerde p16 overekspresyonu olur (surrogate marker)"
            ]
        }
    },
    {
        id: 80,
        category: "Viroloji",
        topic: "Parainfluenza Virüsü (PIV) ve Krup",
        question: "Çocuklarda krup (laryngotracheobronchitis) etkeni olarak en sık görülen virüs hangisidir?",
        correctAnswer: "Parainfluenza virüsü tip 1 (PIV-1)",
        details: {
            coreInfo: "<b>Krup (Laringotrakeobronşit):</b> 6 ay - 3 yaş arası çocuklarda subglottik ödem ile karakterize. PIV-1 en sık neden (%60-75). Sonbahar mevsiminde epidemiler yapar.",
            keyPoints: [
                "<b>PIV-1:</b> En sık krup nedeni, sonbahar salgınları.",
                "<b>PIV-2:</b> Krup yapabilir ama daha az sık.",
                "<b>PIV-3:</b> Bronşiolit ve pnömoni (krup daha az).",
                "<b>Klinik:</b> Bariking öksürük (seal-like cough), inspiratuar stridor, ses kısıklığı.",
                "<b>Radyoloji:</b> 'Steeple sign' (kulesi işareti) boyun grafisinde."
            ],
            table: `
                <table class="info-table">
                    <tr><th>PIV Tipi</th><th>Klinik</th><th>Mevsim</th></tr>
                    <tr><td><b>PIV-1</b></td><td>Krup (en sık)</td><td>Sonbahar</td></tr>
                    <tr><td>PIV-2</td><td>Krup (az sık)</td><td>Sonbahar</td></tr>
                    <tr><td>PIV-3</td><td>Bronşiolit, pnömoni</td><td>İlkbahar/Yaz</td></tr>
                    <tr><td>PIV-4</td><td>Hafif ÜSYE</td><td>Değişken</td></tr>
                </table>
            `,
            alert: "RSV bronşiolit yapar ama krup yapma sıklığı düşüktür. Krup = PIV-1 düşünülmelidir.",
            relatedQuestions: [
                "<b>Krup tanısı nasıl konur?</b> → Doğru cevap: Klinik bulgular (bariking öksürük, stridor), PCR ile etken tespiti",
                "<b>Steeple sign nedir?</b> → Doğru cevap: Boyun ön-arka grafisinde subglottik daralma (kule gibi görünüm)",
                "<b>Krup tedavisi nedir?</b> → Doğru cevap: Dexametazone (tek doz), nebulize epinefrin (ağır vakalar), oksijen",
                "<b>PIV-3 neden kruptan çok bronşiolit yapar?</b> → Doğru cevap: Küçük hava yollarını (bronşioller) daha çok tutar, subglottik bölge daha az"
            ]
        }
    },
    {
        id: 81,
        category: "Viroloji",
        topic: "Hücre Kültüründe Antibiyotik Kullanımı",
        question: "Hücre kültürü besiyerine eklenen ve bakteriyel kontaminasyonu önleyen antibiyotik kombinasyonu hangisidir?",
        correctAnswer: "Penisilin + Streptomisin + Amfoterisin B (opsiyonel)",
        details: {
            coreInfo: "<b>Hücre Kültürü Antibiyotikleri:</b> Virüs izolasyonunda bakteri ve mantar kontaminasyonunu önlemek için besiyerine antibiyotikler eklenir. Ancak antibiyotikler viral üreme veya CPE'yi etkilememelidir.",
            keyPoints: [
                "<b>Penisilin:</b> Gram-pozitif bakterileri inhibe eder.",
                "<b>Streptomisin:</b> Gram-negatif bakterileri inhibe eder (aminoglikozid).",
                "<b>Amfoterisin B:</b> Mantar kontaminasyonunu önler (opsiyonel).",
                "<b>Gentamisin:</b> Alternatif geniş spektrumlu antibiyotik.",
                "<b>Dikkat:</b> Yüksek doz antibiyotik sitotoksik olabilir, optimize edilmeli."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Antibiyotik</th><th>Hedef</th><th>Standart Doz (μg/mL)</th></tr>
                    <tr><td><b>Penisilin G</b></td><td>Gram (+)</td><td>100 U/mL</td></tr>
                    <tr><td><b>Streptomisin</b></td><td>Gram (-)</td><td>100 μg/mL</td></tr>
                    <tr><td>Amfoterisin B</td><td>Mantar</td><td>2.5 μg/mL</td></tr>
                </table>
            `,
            pitfalls: "Antibiyotikler sadece kültür besiyerine eklenir, örnek işleme sırasında KULLANILMAZ (örneği dekontamine eder, virüsü de inaktive edebilir).",
            relatedQuestions: [
                "<b>Neden penisilin + streptomisin kombinasyonu kullanılır?</b> → Doğru cevap: Geniş spektrum sağlar (Gram + ve Gram -)",
                "<b>Antibiyotikler virüsleri etkiler mi?</b> → Doğru cevap: Hayır, virüslerin hücre duvarı yoktur, antibiyotikler sadece bakterileri etkiler",
                "<b>Hücre kültüründe mantar kontaminasyonu neden problemdir?</b> → Doğru cevap: Hızla yayılır ve hücreleri örtebilir, viral CPE gözlenemez",
                "<b>Örnek işleme sırasında antibiyotik kullanılır mı?</b> → Doğru cevap: Hayır, örneği dekontamine eder ve virüs inaktivasyonuna neden olabilir"
            ]
        }
    },
    {
        id: 82,
        category: "Viroloji",
        topic: "Virüs Boyutu ve Filtrasyon",
        question: "0.22 μm gözenek çaplı filtreden geçebilen en büyük boyutlu virüs ailesi hangisidir?",
        correctAnswer: "Picornaviridae (20-30 nm) - Tüm virüsler geçer, bakteriler geçemez",
        details: {
            coreInfo: "<b>Virüs Boyutu ve Filtrasyon:</b> Virüsler 20 nm (parvovirus) ile 300 nm (poxvirus) arasında değişir. 0.22 μm (220 nm) filtre bakterileri tutar ama tüm virüsleri geçirir.",
            keyPoints: [
                "<b>Parvoviridae:</b> 18-26 nm (en küçük).",
                "<b>Picornaviridae:</b> 20-30 nm (enterovirus, poliovirus).",
                "<b>Herpesviridae:</b> 150-200 nm (zarflı).",
                "<b>Poxviridae:</b> 220-300 nm (en büyük virüs).",
                "<b>0.22 μm Filtre:</b> Bakterileri (>500 nm) tutar, virüsleri geçirir (sterilizasyon için)."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Virüs Ailesi</th><th>Boyut (nm)</th><th>0.22 μm'den Geçer mi?</th></tr>
                    <tr><td>Parvoviridae</td><td>18-26</td><td>✓ Evet</td></tr>
                    <tr><td>Picornaviridae</td><td>20-30</td><td>✓ Evet</td></tr>
                    <tr><td>Herpesviridae</td><td>150-200</td><td>✓ Evet</td></tr>
                    <tr><td><b>Poxviridae</b></td><td>220-300</td><td>✓ Evet (zor)</td></tr>
                    <tr><td>Bakteriler</td><td>>500</td><td>✗ Hayır</td></tr>
                </table>
            `,
            alert: "Poxviridae en büyük virüstür (300 nm) ama yine de 0.22 μm filtresini geçer. Bakteriler geçemez.",
            relatedQuestions: [
                "<b>En küçük virüs ailesi hangisidir?</b> → Doğru cevap: Parvoviridae (18-26 nm, tek sarmallı DNA)",
                "<b>0.22 μm filtre neden kullanılır?</b> → Doğru cevap: Hücre kültürü besiyerini bakterilerden arındırmak için (steril filtrasyon)",
                "<b>Poxvirus neden en büyüktür?</b> → Doğru cevap: Kompleks yapı, kendi enzimlerini içerir (DNA polimeraz dahil)",
                "<b>Virüsleri filtrelemek için hangi boyut filtre gerekir?</b> → Doğru cevap: <20 nm (nanofiltre), pratikte kullanışsızdır"
            ]
        }
    },
    {
        id: 83,
        category: "Viroloji",
        topic: "Hücre Kültürü Santrifügasyon (Shell Vial)",
        question: "Shell Vial (santrifügasyon ile hızlandırılmış kültür) yöntemi hangi virüsler için tercih edilir?",
        correctAnswer: "CMV, HSV, VZV (yavaş üreyen herpesvirüsler)",
        details: {
            coreInfo: "<b>Shell Vial Tekniği:</b> Santrifügasyon ile virüsün hücreye hızlı adsorbsiyonunu sağlar (centrifugation-enhanced adsorption). 24-48 saat içinde erken viral antijen (immediate-early, early) immünofloresan ile tespit edilir.",
            keyPoints: [
                "<b>Avantaj:</b> Klasik kültür 1-3 hafta sürerken Shell Vial 24-48 saat.",
                "<b>Mekanizma:</b> Santrifügasyon (700g, 1 saat) → virüs hücreye zorla girer → erken antijen üretimi → IF ile tespit.",
                "<b>Kullanım:</b> CMV (pp65, IE antijen), HSV, VZV, Influenza.",
                "<b>Dezavantaj:</b> Pahalı monoklonal antikorlar gerekir.",
                "<b>Alternatif:</b> PCR daha hızlı ve duyarlı (Shell Vial yerini PCR'a bırakıyor)."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Yöntem</th><th>Süre</th><th>Avantaj</th><th>Dezavantaj</th></tr>
                    <tr><td><b>Shell Vial</b></td><td>24-48 saat</td><td>Klasik kültürden hızlı</td><td>Pahalı, teknik gerektirir</td></tr>
                    <tr><td>Klasik Kültür</td><td>1-3 hafta</td><td>Ucuz, canlı virüs</td><td>Çok yavaş</td></tr>
                    <tr><td>PCR</td><td>4-6 saat</td><td>En hızlı, duyarlı</td><td>Pahalı, canlı virüs gösterilmez</td></tr>
                </table>
            `,
            pitfalls: "Shell Vial CMV için geliştirildi. Hızlı üreyen virüsler (enterovirus) için gereksizdir.",
            relatedQuestions: [
                "<b>Santrifügasyon neden viral adsorbsiyonu artırır?</b> → Doğru cevap: Yerçekimi etkisi ile virüs hücre yüzeyine zorla bastırılır",
                "<b>Erken viral antijen (IE) nedir?</b> → Doğru cevap: Virüsün replikasyon döngüsünde ilk sentezlenen proteinler (CPE öncesi)",
                "<b>Shell Vial hangi durumlarda kullanılır?</b> → Doğru cevap: Yavaş üreyen virüsler ve acil tanı gereken durumlar (transplant)",
                "<b>PCR neden Shell Vial'den üstündür?</b> → Doğru cevap: Çok daha hızlı (4-6 saat) ve duyarlıdır, kültür gerektirmez"
            ]
        }
    },
    {
        id: 84,
        category: "Viroloji",
        topic: "Fotodinamik İnaktivasyon (Kan Ürünlerinde)",
        question: "Kan ürünlerinde virüslerin inaktivasyonu için fotodinamik yöntemde hangi madde kullanılır?",
        correctAnswer: "Metilen mavisi + Işık (veya Psoralen + UVA)",
        details: {
            coreInfo: "<b>Fotodinamik İnaktivasyon:</b> Fotosensitif bir boya (metilen mavisi, psoralen) + ışık ile viral nükleiik asitlere hasar verir. Kan ürünlerinde HIV, HBV, HCV, CMV gibi virüsleri inaktive eder ama kan hücrelerini korur.",
            keyPoints: [
                "<b>Metilen Mavisi + Görünür Işık:</b> Plazma ve trombosit süspansiyonlarında kullanılır.",
                "<b>Psoralen + UVA (PUVA):</b> Nükleiik asitlere çapraz bağ oluşturur (plazma, trombosit).",
                "<b>Mekanizma:</b> Singlet oksijen veya serbest radikaller → viral RNA/DNA hasarı.",
                "<b>Avantaj:</b> Zarflı ve zarfsız virüslere etkili, hücreleri korur.",
                "<b>Dezavantaj:</b> Eritrositlerde kullanılamaz (hemoliz riski)."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Yöntem</th><th>Madde</th><th>Kullanım</th><th>Etkili Olduğu Virüsler</th></tr>
                    <tr><td><b>Metilen Mavisi</b></td><td>Fotosensitif boya</td><td>Plazma, trombosit</td><td>HIV, HCV, HBV, CMV</td></tr>
                    <tr><td>Psoralen + UVA</td><td>Nükleiik asit bağlayıcı</td><td>Plazma, trombosit</td><td>Tüm virüsler</td></tr>
                </table>
            `,
            alert: "Fotodinamik inaktivasyon eritrositlerde KULLANILMAZ çünkü hemoglobin ışığı emerek hemolize neden olur.",
            relatedQuestions: [
                "<b>Psoralen + UVA nasıl çalışır?</b> → Doğru cevap: DNA/RNA'ya çapraz bağlar oluşturarak viral replikasyonu engeller",
                "<b>Neden eritrositlerde kullanılamaz?</b> → Doğru cevap: Hemoglobin ışığı emer ve fotodinamik reaksiyonlar hemolize neden olur",
                "<b>Singlet oksijen nedir?</b> → Doğru cevap: Yüksek enerjili oksijen türü, nükleiik asitlere zarar verir",
                "<b>Bu yöntem bakterilere de etkili midir?</b> → Doğru cevap: Evet, bakterileri ve parazitleri de inaktive eder"
            ]
        }
    },
    {
        id: 85,
        category: "Viroloji",
        topic: "Hepatit A ve B Serolojisi (Aşı Ayırımı)",
        question: "Anti-HBc pozitif, Anti-HBs pozitif, HBsAg negatif seroloji profili ne anlama gelir?",
        correctAnswer: "Geçirilmiş doğal HBV enfeksiyonu (iyileşme)",
        details: {
            coreInfo: "<b>Anti-HBc (Kor Antikoru):</b> Sadece doğal enfeksiyonda oluşur, aşıda oluşmaz. Bu yüzden aşı ile doğal enfeksiyonu ayırt eder.",
            keyPoints: [
                "<b>Aşı Sonrası:</b> Anti-HBs (+), Anti-HBc (-), HBsAg (-).",
                "<b>Doğal Enfeksiyon (İyileşme):</b> Anti-HBs (+), Anti-HBc (+), HBsAg (-).",
                "<b>Kronik Taşıyıcı:</b> HBsAg (+), Anti-HBc (+), Anti-HBs (-).",
                "<b>Akut Enfeksiyon:</b> HBsAg (+), Anti-HBc IgM (+), Anti-HBs (-).",
                "<b>İzole Anti-HBc:</b> Anti-HBc (+), diğerleri (-) → Okült HBV veya yalancı pozitif."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Durum</th><th>HBsAg</th><th>Anti-HBc</th><th>Anti-HBs</th><th>Yorum</th></tr>
                    <tr><td><b>Aşı</b></td><td>-</td><td><b>-</b></td><td>+</td><td>İmmün (aşı)</td></tr>
                    <tr><td><b>Doğal İyileşme</b></td><td>-</td><td><b>+</b></td><td>+</td><td>İmmün (enfeksiyon)</td></tr>
                    <tr><td>Kronik Taşıyıcı</td><td>+</td><td>+</td><td>-</td><td>Enfeksiyöz</td></tr>
                    <tr><td>Akut</td><td>+</td><td>IgM +</td><td>-</td><td>Akut enfeksiyon</td></tr>
                </table>
            `,
            pitfalls: "Anti-HBc olmadan Anti-HBs pozitifliği = aşı. Anti-HBc varlığı = doğal enfeksiyon (geçmiş veya kronik).",
            relatedQuestions: [
                "<b>Aşı ile doğal enfeksiyon nasıl ayırt edilir?</b> → Doğru cevap: Anti-HBc varlığı (doğal enfeksiyonda var, aşıda yok)",
                "<b>Anti-HBs koruyucu titer nedir?</b> → Doğru cevap: >10 mIU/mL (tercihen >100 mIU/mL)",
                "<b>Anti-HBc IgM ne anlama gelir?</b> → Doğru cevap: Akut HBV enfeksiyonu (son 6 ay içinde)",
                "<b>İzole Anti-HBc pozitifliği ne anlama gelir?</b> → Doğru cevap: Okült HBV (düşük viral yük), geçmiş enfeksiyon veya yalancı pozitif"
            ]
        }
    },
    {
        id: 86,
        category: "Viroloji",
        topic: "Hepatit A Epidemiyolojisi Türkiye",
        question: "Türkiye'de Hepatit A seroprevalansı yaş gruplarına göre nasıl bir dağılım gösterir?",
        correctAnswer: "Yüksek endemisite (>90% erişkinlerde Anti-HAV IgG pozitif)",
        details: {
            coreInfo: "<b>HAV Türkiye Epidemiyolojisi:</b> Türkiye orta-yüksek endemik bir bölgedir. Çocukluk yaşında asemptomatik/hafif geçirilir. Erişkinlerde %85-95 Anti-HAV IgG pozitiftir.",
            keyPoints: [
                "<b>Yüksek Endemisite:</b> Hijyen koşulları yetersiz bölgelerde çocuklukta geçirilir (%90-100 seropozitiflik).",
                "<b>Orta Endemisite:</b> Türkiye'nin durumu, erişkinlerde %85-95 immün.",
                "<b>Düşük Endemisite:</b> Gelişmiş ülkeler, erişkinlerde <%50 immün (aşı önemli).",
                "<b>Paradoks:</b> Hijyen iyileştikçe çocukluk enfeksiyonu azalır ama erişkinlerde semptomatik/ağır HAV artar.",
                "<b>Aşı Programı:</b> Türkiye'de 2012'den itibaren rutin aşı takviminde (18-24 ay, 2 doz)."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Endemisite</th><th>Erişkin Seroprevalans</th><th>Risk Grubu</th><th>Örnek Ülkeler</th></tr>
                    <tr><td>Yüksek</td><td>>90%</td><td>Çocuklar (asemptomatik)</td><td>Afrika, Orta Asya</td></tr>
                    <tr><td><b>Orta (Türkiye)</b></td><td>%85-95</td><td>Genç erişkinler</td><td>Türkiye, Doğu Avrupa</td></tr>
                    <tr><td>Düşük</td><td><50%</td><td>Tüm yaş grupları</td><td>ABD, Batı Avrupa</td></tr>
                </table>
            `,
            alert: "Hijyen iyileştikçe HAV enfeksiyonu yaşı ilerler, semptomatik ve fulminan hepatit riski artar (erişkin enfeksiyonu daha ağırdır).",
            relatedQuestions: [
                "<b>Türkiye'de HAV aşısı rutin takvimde var mı?</b> → Doğru cevap: Evet, 2012'den beri rutin (18. ve 24. ayda)",
                "<b>Neden çocukluk HAV daha hafiftir?</b> → Doğru cevap: İmmün sistem daha az agresif reaksiyon verir, çoğu asemptomatik geçirilir",
                "<b>Hijyen iyileşmesi neden paradoks yaratır?</b> → Doğru cevap: Çocuklukta bağışıklık kazanılmaz, erişkinlerde ağır enfeksiyon riski artar",
                "<b>Anti-HAV IgG pozitifliği ne anlama gelir?</b> → Doğru cevap: Geçmiş enfeksiyon veya aşı, ömür boyu bağışıklık"
            ]
        }
    },
    {
        id: 87,
        category: "Viroloji",
        topic: "HIV Direnç Testleri (Genotipik vs Fenotipik)",
        question: "HIV antiretroviral direnç tespitinde genotipik test hangi geni sekanslayarak çalışır?",
        correctAnswer: "Reverse Transcriptase (RT), Protease (PR) ve Integrase (IN) genleri",
        details: {
            coreInfo: "<b>Genotipik Direnç Testi:</b> HIV RNA'sından RT, PR, IN genlerini sekanslayarak bilinen direnç mutasyonlarını tespit eder. Fenotipik testte ise virüsün ilaçlara karşı direkt üreme kapasitesi ölçülür.",
            keyPoints: [
                "<b>Genotipik Test:</b> Sekanslama ile mutasyonları tespit eder (M184V, K103N vb.), hızlı ve ucuz.",
                "<b>Fenotipik Test:</b> Virüsü ilaç varlığında üreterek IC50 değerini ölçer, pahalı ve yavaş.",
                "<b>Kullanım:</b> Tedavi başarısızlığında (viral yük >1000 kopya/mL), dirençli virüs şüphesinde.",
                "<b>Dezavantaj (Genotipik):</b> Minör popülasyonlar (<20%) tespit edilemez.",
                "<b>Entegre Algoritm:</b> Genotipik test + biyoinformatik analiz (Stanford HIV DB)."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Test Tipi</th><th>Yöntem</th><th>Avantaj</th><th>Dezavantaj</th></tr>
                    <tr><td><b>Genotipik</b></td><td>Sekanslama (RT, PR, IN)</td><td>Hızlı, ucuz</td><td>Yorum gerektirir</td></tr>
                    <tr><td>Fenotipik</td><td>Viral üreme testi (IC50)</td><td>Direkt direnç ölçümü</td><td>Pahalı, yavaş (2-4 hafta)</td></tr>
                </table>
            `,
            pitfalls: "Genotipik test sadece %20'den fazla olan mutasyonları tespit eder. Minör varyantlar atlanabilir.",
            relatedQuestions: [
                "<b>M184V mutasyonu neye karşı direnç verir?</b> → Doğru cevap: Lamivudin (3TC) ve Emtricitabine (FTC), NRTI'lara direnç",
                "<b>K103N mutasyonu neye karşı direnç verir?</b> → Doğru cevap: NNRTI'lara (Efavirenz, Nevirapine)",
                "<b>Direnç testi ne zaman yapılır?</b> → Doğru cevap: Tedavi başarısızlığı (viral yük >1000), tedavi öncesi (baseline)",
                "<b>Fenotipik test neden tercih edilmez?</b> → Doğru cevap: Çok pahalı, yavaş ve teknik olarak zor"
            ]
        }
    },
    {
        id: 88,
        category: "Viroloji",
        topic: "Influenza Hızlı Antijen Testleri",
        question: "İnfluenza hızlı antijen testinin (RIDT) duyarlılığı neden düşüktür?",
        correctAnswer: "Viral yükün düşük olması ve testin analitik duyarlılık eşiğinin yüksek olması",
        details: {
            coreInfo: "<b>İnfluenza RIDT:</b> Nazofaringeal sürüntüden influenza A/B nükleokapsid proteinlerini tespit eder. 10-15 dakikada sonuç verir ama duyarlılığı %50-70'tir (düşük viral yükte yalancı negatif).",
            keyPoints: [
                "<b>Duyarlılık:</b> %50-70 (RT-PCR %95-100).",
                "<b>Özgüllük:</b> %90-95 (yüksek).",
                "<b>Nedenler:</b> Düşük viral yük (örnekleme zamanı önemli), testin duyarlılık eşiği yüksek (10^4-10^5 virüs/mL).",
                "<b>Kullanım:</b> Salgın dönemlerinde hızlı triyaj, tedavi kararı (oseltamivir).",
                "<b>Sınırlama:</b> Negatif sonuç influenzayı dışlamaz (PCR gerekebilir)."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Test</th><th>Duyarlılık</th><th>Özgüllük</th><th>Süre</th><th>Kullanım</th></tr>
                    <tr><td><b>RIDT</b></td><td>%50-70</td><td>%90-95</td><td>10-15 dakika</td><td>Hızlı triyaj</td></tr>
                    <tr><td>RT-PCR</td><td>%95-100</td><td>%95-100</td><td>4-6 saat</td><td>Kesin tanı</td></tr>
                </table>
            `,
            alert: "RIDT negatif ama klinik şüphe yüksekse PCR yapılmalıdır. RIDT influenza tip/subtipi belirlemez.",
            relatedQuestions: [
                "<b>RIDT negatif ama hasta influenza semptomları gösteriyorsa ne yapılır?</b> → Doğru cevap: RT-PCR yapılmalı (RIDT yalancı negatif olabilir)",
                "<b>Neden influenza A ve B ayrımı yapılır?</b> → Doğru cevap: Baloxavir sadece influenza A ve B'de etkili, C'de değil",
                "<b>Örnekleme zamanı neden önemlidir?</b> → Doğru cevap: Viral yük semptom başlangıcında en yüksektir (0-3 gün), sonra azalır",
                "<b>RIDT hangi proteinleri tespit eder?</b> → Doğru cevap: Nükleokapsid (NP) proteinleri (influenza A ve B)"
            ]
        }
    },
    {
        id: 89,
        category: "Viroloji",
        topic: "Norovirüs Gastroenteriti",
        question: "Norovirüs gastroenterit salgınlarında hangi moleküler yöntem en çok kullanılır?",
        correctAnswer: "Real-time RT-PCR (dışkı veya kusmuk örneği)",
        details: {
            coreInfo: "<b>Norovirüs:</b> En sık viral gastroenterit nedenidir (%50). Hücre kültüründe üremez, bu nedenle tanıda moleküler yöntemler (RT-PCR) kullanılır. Çok bulaşıcıdır (10-100 viryon yeterli).",
            keyPoints: [
                "<b>RT-PCR:</b> Altın standart, 4-6 saat, dışkı/kusmuktan çalışılır.",
                "<b>Antijen ELISA:</b> Duyarlılığı düşük (%50-70), salgınlarda hızlı triyaj için kullanılabilir.",
                "<b>Elektron Mikroskopi:</b> Artık kullanılmaz (pahalı, duyarlılık düşük).",
                "<b>Genotip:</b> GII.4 en sık (salgınların %60-80'i), GI ve GII ana gruplar.",
                "<b>Salgın Yönetimi:</b> İzolasyon, el hijyeni, %0.5 çamaşır suyu dezenfeksiyonu."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Yöntem</th><th>Duyarlılık</th><th>Kullanım</th></tr>
                    <tr><td><b>RT-PCR</b></td><td>%95-100</td><td>Altın standart, salgınlarda</td></tr>
                    <tr><td>Antijen ELISA</td><td>%50-70</td><td>Hızlı triyaj</td></tr>
                    <tr><td>Elektron Mikroskopi</td><td>%30-40</td><td>Artık kullanılmaz</td></tr>
                </table>
            `,
            pitfalls: "Norovirüs hücre kültüründe üretilemiyor, bu yüzden tanı moleküler yöntemlere bağımlıdır.",
            relatedQuestions: [
                "<b>Norovirüs neden hücre kültüründe üremez?</b> → Doğru cevap: Spesifik reseptör ve histo-kan grup antijeni gereksinimi (HBGA)",
                "<b>Norovirüs enfeksiyon dozu ne kadardır?</b> → Doğru cevap: 10-100 viryon (çok düşük, yüksek bulaşıcılık)",
                "<b>GII.4 genotipi neden önemlidir?</b> → Doğru cevap: Salgınların %60-80'inden sorumlu, sürekli mutasyon (immün kaçış)",
                "<b>Alkol norovirüsü inaktive eder mi?</b> → Doğru cevap: Hayır, zarfsız virüs, klorin bazlı dezenfektanlar gerekir (%0.5 hipoklorit)"
            ]
        }
    },
    {
        id: 90,
        category: "Viroloji",
        topic: "Rotavirüs Aşısı ve Serotipleri",
        question: "Türkiye'de kullanılan pentavalan rotavirüs aşısı (RotaTeq) hangi G ve P tiplerine karşı koruma sağlar?",
        correctAnswer: "G1, G2, G3, G4, G9 ve P[8]",
        details: {
            coreInfo: "<b>Rotavirüs Aşıları:</b> İki tip canlı aşı vardır: RotaTeq (pentavalan, 3 doz) ve Rotarix (monovalan, 2 doz). Her ikisi de ağır gastroenteriti %85-98 önler.",
            keyPoints: [
                "<b>RotaTeq (Pentavalan):</b> G1, G2, G3, G4, P[8] + G9-P[5] içerir, 3 doz (2-4-6 ay).",
                "<b>Rotarix (Monovalan):</b> G1P[8] içerir ama çapraz koruma sağlar, 2 doz (2-4 ay).",
                "<b>Türkiye Programı:</b> RotaTeq rutin takvimde (2019'dan beri).",
                "<b>Etkinlik:</b> Ağır gastroenterit %85-98, hastane yatışı %96 azaltır.",
                "<b>Kontrendikasyon:</b> İmmünyetmezlik (SCID), intestinal malformasyon (intussusepsiyon riski)."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Aşı</th><th>Tip</th><th>Doz</th><th>Kapsama</th></tr>
                    <tr><td><b>RotaTeq</b></td><td>Pentavalan</td><td>3 (2-4-6 ay)</td><td>G1, G2, G3, G4, G9, P[8]</td></tr>
                    <tr><td>Rotarix</td><td>Monovalan</td><td>2 (2-4 ay)</td><td>G1P[8] + çapraz koruma</td></tr>
                </table>
            `,
            alert: "Aşı canlıdır, ağır immünyetmezlikte (SCID) kontrendikedir. İlk doz mutlaka 14 hafta öncesinde verilmelidir.",
            relatedQuestions: [
                "<b>G ve P tipleri ne anlama gelir?</b> → Doğru cevap: G = VP7 (glikoprotein), P = VP4 (proteaz-sensitif protein), serotip belirleme",
                "<b>Rotavirüs aşısı neden canlıdır?</b> → Doğru cevap: İntestinal mukoza immünitesi (IgA) oluşturmak için canlı virüs gerekir",
                "<b>İntussusepsiyon riski ne kadardır?</b> → Doğru cevap: Çok düşük (1-2/100,000), eski aşıda (RotaShield) yüksekti, yeni aşılarda minimal",
                "<b>Aşı hangi yaş grubuna verilir?</b> → Doğru cevap: 6 hafta - 8 ay arası (ilk doz <14 hafta, son doz <8 ay)"
            ]
        }
    },
    {
        id: 91,
        category: "Viroloji",
        topic: "Respiratuar Sinsityal Virüs (RSV)",
        question: "RSV bronşioliti profilaksisi için kullanılan monoklonal antikor hangisidir?",
        correctAnswer: "Palivizumab (veya yeni seçenek: Nirsevimab)",
        details: {
            coreInfo: "<b>RSV Profilaksisi:</b> Palivizumab RSV F proteinine karşı monoklonal antikordur. Yüksek riskli bebeklerde (prematüre, kronik akciğer/kalp hastalığı) ağır RSV hastalığını %55 azaltır.",
            keyPoints: [
                "<b>Palivizumab:</b> Her ay 1 doz IM (RSV sezonu boyunca, 5 doz), F proteinine bağlanır.",
                "<b>Nirsevimab (Yeni):</b> Uzun etkili (tek doz, 5 ay koruma), 2023'te FDA onayı aldı.",
                "<b>Endikasyonlar:</b> <29 hafta prematüre, kronik akciğer hastalığı (BPD), konjenital kalp hastalığı.",
                "<b>Aşı:</b> Maternal RSV aşısı (gebelere, pasif koruma) geliştirilme aşamasında.",
                "<b>Tedavi:</b> Destekleyici (oksijen, sıvı), ribavirin artık kullanılmaz."
            ],
            table: `
                <table class="info-table">
                    <tr><th>İlaç</th><th>Tip</th><th>Doz</th><th>Koruma Süresi</th></tr>
                    <tr><td><b>Palivizumab</b></td><td>Monoklonal Ab</td><td>Aylık, 5 doz</td><td>1 ay/doz</td></tr>
                    <tr><td>Nirsevimab</td><td>Uzun etkili mAb</td><td>Tek doz IM</td><td>5 ay</td></tr>
                </table>
            `,
            alert: "Palivizumab tedavi değil profilaksidir. RSV hastalığı başladıktan sonra etkili değildir.",
            relatedQuestions: [
                "<b>RSV F proteini nedir?</b> → Doğru cevap: Füzyon proteini, virüsün hücreye girmesini sağlar (palivizumab hedefi)",
                "<b>Palivizumab kimler almalıdır?</b> → Doğru cevap: <29 hafta prematüre, BPD, konjenital kalp hastalığı (yüksek risk)",
                "<b>RSV sezonu ne zamandır?</b> → Doğru cevap: Kasım-Mart (kuzey yarımküre), her ay palivizumab verilir",
                "<b>Ribavirin neden artık kullanılmaz?</b> → Doğru cevap: Etkinlik kanıtı zayıf, toksik, pahalı (sadece immünyetmezlikte düşünülür)"
            ]
        }
    },
    {
        id: 92,
        category: "Viroloji",
        topic: "Varicella-Zoster Virüsü (VZV) Latent Enfeksiyonu",
        question: "Varicella (suçiçeği) sonrası VZV hangi dokularda latent kalır?",
        correctAnswer: "Dorsal root gangliyonları (duyusal gangliyonlar)",
        details: {
            coreInfo: "<b>VZV Latency:</b> Primer enfeksiyondan (suçiçeği) sonra virüs dorsal root ve kraniyal sinir gangliyonlarında latent kalır. Reaktivasyonda herpes zoster (zona) oluşur.",
            keyPoints: [
                "<b>Latent Doku:</b> Dorsal root gangliyonları (özellikle T1-L2, trigeminal).",
                "<b>Reaktivasyon:</b> İmmünsüpresyon, yaşlılık, stres → zona.",
                "<b>Zona Özellikleri:</b> Dermatomal dağılım (tek taraflı), ağrılı veziküler döküntü.",
                "<b>Postherpetik Nevralji (PHN):</b> Zona sonrası kronik ağrı (%10-15), yaşlılarda sık.",
                "<b>Aşı:</b> Varicella aşısı (çocuklara), Zoster aşısı (≥50 yaş, zona önleme)."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Enfeksiyon</th><th>Etken</th><th>Klinik</th><th>Dağılım</th></tr>
                    <tr><td><b>Primer (Suçiçeği)</b></td><td>VZV</td><td>Generalize veziküler döküntü</td><td>Tüm vücut</td></tr>
                    <tr><td>Reaktivasyon (Zona)</td><td>VZV (latent)</td><td>Dermatomal veziküler döküntü</td><td>Tek taraflı</td></tr>
                </table>
            `,
            pitfalls: "HSV sakral gangliyonlarda, VZV dorsal root gangliyonlarında latent kalır (farklı lokalizasyonlar).",
            relatedQuestions: [
                "<b>Postherpetik nevralji nedir?</b> → Doğru cevap: Zona sonrası >3 ay süren kronik nöropatik ağrı",
                "<b>Zona hangi dermatom en sık tutar?</b> → Doğru cevap: Torakal dermatomlar (T1-T12), özellikle göğüs/karın bölgesi",
                "<b>Zoster aşısı (Shingrix) nedir?</b> → Doğru cevap: Rekombinant gE protein + adjuvan, ≥50 yaş, zona riskini %90 azaltır",
                "<b>Ramsay Hunt sendromu nedir?</b> → Doğru cevap: VZV'nin genikulat gangliyonu tutması → fasial paralizi + kulak vezikülleri"
            ]
        }
    },
    {
        id: 93,
        category: "Viroloji",
        topic: "Parvovirus B19 (Erythema Infectiosum)",
        question: "Parvovirus B19 enfeksiyonunda 'aplastik kriz' hangi hastalarda görülür?",
        correctAnswer: "Kronik hemolitik anemi hastaları (orak hücreli anemi, talasemi, sferositoz)",
        details: {
            coreInfo: "<b>Parvovirus B19:</b> Eritroid öncül hücreleri enfekte eder (P antijeni reseptörü). Sağlıklı kişilerde beşinci hastalık (erythema infectiosum), kronik hemolitik anemide aplastik kriz, gebede hidrops fetalis yapar.",
            keyPoints: [
                "<b>Aplastik Kriz:</b> Eritroid serinin geçici durması → hemoglobin hızla düşer (sferositoz, orak hücreli anemi).",
                "<b>Beşinci Hastalık:</b> 'Tokat yanağı' (slapped cheek) raşı + retiküler döküntü (çocuklarda).",
                "<b>Hidrops Fetalis:</b> Gebelikte enfeksiyon (özellikle 2. trimester) → fetal anemi → kalp yetmezliği.",
                "<b>Kronik Anemi:</b> İmmünyetmezlikte persistan B19 → sürekli eritrosit yıkımı.",
                "<b>Tanı:</b> Seroloji (IgM/IgG) veya PCR (aplastik kriz, immünyetmezlik)."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Hasta Grubu</th><th>Klinik</th><th>Mekanizma</th></tr>
                    <tr><td>Sağlıklı Çocuk</td><td>Beşinci hastalık (tokat yanağı)</td><td>İmmün kompleks raşı</td></tr>
                    <tr><td><b>Kronik Hemolitik Anemi</b></td><td><b>Aplastik kriz</b></td><td>Eritropoez durması</td></tr>
                    <tr><td>Gebe</td><td>Hidrops fetalis</td><td>Fetal anemi</td></tr>
                    <tr><td>İmmünyetmezlik</td><td>Kronik anemi</td><td>Persistan enfeksiyon</td></tr>
                </table>
            `,
            alert: "Aplastik kriz hayatı tehdit eder, acil transfüzyon gerekebilir. Retikülositler <1% düşer.",
            relatedQuestions: [
                "<b>P antijeni nedir?</b> → Doğru cevap: Eritrosit yüzeyinde glikolipid, parvovirus B19 reseptörü (globozid)",
                "<b>Hidrops fetalis neden oluşur?</b> → Doğru cevap: Fetal eritrositlerin yıkımı → ağır anemi → kalp yetmezliği → ödem",
                "<b>Beşinci hastalık raşı ne zaman çıkar?</b> → Doğru cevap: Viremi bittikten sonra (immün kompleks raşı), artık bulaşıcı değildir",
                "<b>Hangi hastalarda aplastik kriz riski yüksektir?</b> → Doğru cevap: Orak hücreli anemi, talasemi, herediter sferositoz (kısa eritrosit ömrü)"
            ]
        }
    },
    {
        id: 94,
        category: "Viroloji",
        topic: "Kızamık (Measles) ve Subakut Sklerozan Panensefalit (SSPE)",
        question: "SSPE (Subakut Sklerozan Panensefalit) hangi virüsün geç komplikasyonudur?",
        correctAnswer: "Kızamık virüsü (Measles)",
        details: {
            coreInfo: "<b>SSPE:</b> Kızamık enfeksiyonundan 7-10 yıl sonra gelişen ölümcül nörodejeneratif hastalıktır. Virüs SSS'de persistan kalır ve yavaş ilerleyen ensefalit yapar.",
            keyPoints: [
                "<b>Sıklık:</b> 1/100,000 kızamık vakası, 2 yaş altında geçirenlerde risk daha yüksek.",
                "<b>Klinik:</b> Davranış değişikliği → miyoklonuslar → demans → koma → ölüm (2-3 yıl içinde).",
                "<b>Tanı:</b> BOS'ta kızamık antikorları yüksek (oligoklonal bantlar), EEG'de Radermecker kompleksleri.",
                "<b>Patoloji:</b> Beyinde defektif kızamık virüsü (M proteini eksik → zarfsız virüs yayılamaz).",
                "<b>Önleme:</b> KKK (kızamık-kırmızı-kabakulak) aşısı, SSPE riskini neredeyse sıfıra indirir."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Özellik</th><th>SSPE</th></tr>
                    <tr><td><b>İnkübasyon</b></td><td>7-10 yıl (kızamıktan sonra)</td></tr>
                    <tr><td>Etken</td><td>Defektif kızamık virüsü (M protein eksik)</td></tr>
                    <tr><td>Prognoz</td><td>Fatal (%100 ölüm, 2-3 yıl)</td></tr>
                    <tr><td>Önleme</td><td>KKK aşısı</td></tr>
                </table>
            `,
            pitfalls: "SSPE'de defektif virüs yayılamaz (M proteini yok), bu yüzden bulaşıcı değildir.",
            relatedQuestions: [
                "<b>M proteini neden önemlidir?</b> → Doğru cevap: Virüs partikülerinin zarflanmasında gerekli, eksik olursa virüs yayılamaz",
                "<b>Radermecker kompleksleri nedir?</b> → Doğru cevap: EEG'de SSPE'ye özgü periyodik yüksek voltajlı dalga patternleri",
                "<b>SSPE tedavisi var mıdır?</b> → Doğru cevap: Hayır, küratif tedavi yok (deneysel: intratekal interferon, ribavirin)",
                "<b>KKK aşısı neden SSPE'yi önler?</b> → Doğru cevap: Aşı suşu SSS'ye invaze olmaz, doğal kızamık virüsünden farklı"
            ]
        }
    },
    {
        id: 95,
        category: "Viroloji",
        topic: "Zika Virüsü ve Mikrosefali",
        question: "Zika virüsünün konjenital enfeksiyonunda en karakteristik bulgu nedir?",
        correctAnswer: "Mikrosefali (baş çevresinde belirgin azalma)",
        details: {
            coreInfo: "<b>Konjenital Zika Sendromu:</b> Gebelikte Zika enfeksiyonu (özellikle 1. trimester) → mikrosefali, beyin kalsifikasyonları, oküler anomaliler, kontraktürler. Aedes sivrisineği ile bulaşır.",
            keyPoints: [
                "<b>Mikrosefali:</b> Ciddi beyin gelişim bozukluğu, baş çevresi <2 SD.",
                "<b>Beyin Bulguları:</b> Kortikal atrofi, ventriküler genişleme, subkortikal kalsifikasyonlar.",
                "<b>Oküler Anomaliler:</b> Koryoretinal atrofi, optik sinir hipoplazisi.",
                "<b>Bulaş:</b> Aedes aegypti sivrisineği, cinsel temas, vertikal (anneden bebeğe).",
                "<b>Tanı:</b> Maternal/kordal Zika IgM + RT-PCR (erken gebelik), USG (mikrosefali)."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Bulgu</th><th>Sıklık</th><th>Özellik</th></tr>
                    <tr><td><b>Mikrosefali</b></td><td>%70-80</td><td>Ciddi beyin gelişim bozukluğu</td></tr>
                    <tr><td>Oküler Anomali</td><td>%30-40</td><td>Koryoretinal atrofi</td></tr>
                    <tr><td>Kontraktürler</td><td>%20-30</td><td>Artrogripozis</td></tr>
                </table>
            `,
            alert: "Zika enfeksiyonu gebelerde çoğu asemptomatiktir ama fetal risk çok yüksektir. Endemik bölgelerden dönenlerde test yapılmalı.",
            relatedQuestions: [
                "<b>Zika virüsü hangi familyaya aittir?</b> → Doğru cevap: Flaviviridae (dengue, sarı humma ile aynı)",
                "<b>Zika neden mikrosefali yapar?</b> → Doğru cevap: Nöral progenitör hücreleri enfekte eder, apoptoz ve nöral gelişimi durdurur",
                "<b>Zika tanısında serolojik çapraz reaksiyon neden problem?</b> → Doğru cevap: Dengue, sarı humma ile çapraz reaksiyon verir (aynı familya)",
                "<b>Gebelikte Zika şüphesinde ne yapılır?</b> → Doğru cevap: IgM + RT-PCR + seri USG (fetal mikrosefali takibi)"
            ]
        }
    },
    {
        id: 96,
        category: "Enfeksiyon Hastalıkları",
        topic: "Hantavirüs Tanısı",
        question: "Hemorajik ateş ve renal yetmezlik bulguları olan bir hastada Hantavirüs enfeksiyonu düşünülüyor. Hangi örnek türü ve test yöntemi tercih edilmelidir?",
        correctAnswer: "Akut fazda serum IgM ELISA + PCR (kan/idrar), konvalesan fazda IgG artışı (paired serum) - Hantavirüs RNA'sı eritrosit ve endotelde bulunur.",
        details: {
            coreInfo: "Hantavirüsler (Bunyaviridae) kemiricilerden insana aerosol yolla bulaşan zoonoz ajanlardır. Koreya'da HFRS (hemorajik ateş + renal sendrom), Amerika'da HPS (hantavirus pulmoner sendrom) yapar. Akut fazda IgM ELISA + PCR (kan/idrar), paired serumla IgG serokonversiyonu tanı koydurucu. Viremi kısa sürelidir ama viral RNA idrar ve solunum sekresyonlarında bulunabilir.",
            keyPoints: [
                "<b>Hantavirüs:</b> Bunyaviridae ailesi, segmented (-) RNA virüs, kemiricilerle bulaş.",
                "<b>HFRS (Hemorajik Ateş + Renal Sendrom):</b> Hantaan/Seoul virüsü, trombositopeni + akut böbrek yetmezliği.",
                "<b>HPS (Hantavirus Pulmoner Sendrom):</b> Sin Nombre virüsü, akut solunum yetmezliği + kardiyovasküler kollaps.",
                "<b>Tanı:</b> Akut fazda IgM ELISA (sensitif) + PCR (kan/idrar), paired serum IgG artışı (4 kat ↑).",
                "<b>Bulaş:</b> Aerosol (fare dışkısı/idrarı), insandan insana geçmez (HPS hariç nadir)."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Test</th><th>Timing</th><th>Yöntem</th></tr>
                    <tr><td><b>IgM ELISA</b></td><td>Akut faz (3-5. gün)</td><td>En hızlı tarama</td></tr>
                    <tr><td>PCR</td><td>İlk 7 gün</td><td>Kan/idrar/solunum örneği</td></tr>
                    <tr><td>IgG paired serum</td><td>Akut + konvalesan (14 gün)</td><td>4 kat artış tanısal</td></tr>
                </table>
            `,
            pitfalls: "IgM akut fazda negatif olabilir (3-5 günden önce). Paired serum alınmazsa tanı gecikmesi olur. PCR için idrar örneği kan kadar hassastır.",
            relatedQuestions: [
                "<b>Hantavirüs hangi familyaya aittir?</b> → Doğru cevap: Bunyaviridae (segmented RNA virüsü)",
                "<b>HFRS ve HPS arasındaki fark nedir?</b> → Doğru cevap: HFRS renal + hemorajik, HPS pulmoner + kardiyovasküler kollaps",
                "<b>Hantavirüs nasıl bulaşır?</b> → Doğru cevap: Kemiricilerden aerosol yolla (dışkı/idrar aerosolu), insandan insana geçmez",
                "<b>Hantavirüs tanısında paired serum ne demek?</b> → Doğru cevap: Akut + konvalesan (14 gün sonra) serum, IgG titresinde 4 kat artış tanısal"
            ]
        }
    },
    {
        id: 97,
        category: "Enfeksiyon Hastalıkları",
        topic: "CMV Serolojisi - Transplantasyon",
        question: "Böbrek nakli bekleyen bir hastada pre-transplant değerlendirmede CMV IgG pozitif, IgM negatif bulunuyor. Donör CMV IgG negatif. Bu durum transplantasyon açısından ne anlama gelir?",
        correctAnswer: "Alıcı CMV IgG(+)/IgM(-) = geçirilmiş enfeksiyon (latent CMV mevcut), Donör CMV IgG(-) = seronegative - R+/D- risk grubu (reaktivasyon + süperenfeksiyon riski düşük ama var) - Profilaksi genelde gerekmez ama monitörizasyon yapılır.",
        details: {
            coreInfo: "CMV transplantasyon risk stratifikasyonunda D/R (Donör/Recipient) seroloji kombinasyonu kullanılır. D+/R- = En yüksek risk (primer enfeksiyon), R+/D+ veya R+/D- = Orta risk (reaktivasyon), D-/R- = En düşük risk. Bu soruda R+/D- durumu: Alıcıda latent CMV var, donör negatif. Risk orta seviyede (reaktivasyon + minör süperenfeksiyon riski). Profilaksi genelde D+/R- için rezervedir, ama R+/D- olgularda pre-emptive terapi (viremide tedavi) veya monitörizasyon yapılır.",
            keyPoints: [
                "<b>R+/D-:</b> Alıcıda latent CMV var (IgG+), donör negatif. Reaktivasyon riski orta seviye.",
                "<b>D+/R-:</b> En yüksek risk grubu (primer enfeksiyon), profilaksi mutlaka gerekir (valgansiklovir).",
                "<b>R+/D+ veya R+/D-:</b> Orta risk, pre-emptive terapi veya monitörizasyon (CMV DNA PCR haftalık).",
                "<b>D-/R-:</b> En düşük risk grubu, rutin profilaksi gerekmez.",
                "<b>Pre-emptive Terapi:</b> CMV DNA PCR pozitifliğinde tedavi başlanır (hastalık öncesi)."
            ],
            table: `
                <table class="info-table">
                    <tr><th>D/R Durum</th><th>Risk</th><th>Yaklaşım</th></tr>
                    <tr><td><b>D+/R-</b></td><td>En yüksek</td><td>Profilaksi mutlaka (valgansiklovir 3-6 ay)</td></tr>
                    <tr><td><b>R+/D-</b></td><td>Orta</td><td>Monitörizasyon veya pre-emptive</td></tr>
                    <tr><td>R+/D+</td><td>Orta</td><td>Monitörizasyon veya pre-emptive</td></tr>
                    <tr><td>D-/R-</td><td>Düşük</td><td>Rutin takip yeterli</td></tr>
                </table>
            `,
            alert: "CMV reaktivasyonu transplant hastalarında en sık enfeksiyon nedenidir. D/R serolojisi mutlaka transplant öncesi değerlendirilmelidir.",
            relatedQuestions: [
                "<b>D+/R- durumunda neden en yüksek risk var?</b> → Doğru cevap: Alıcı CMV naif, donörden aktif virüs gelir, primer enfeksiyon + immünsüpresyon",
                "<b>Pre-emptive terapi ne demek?</b> → Doğru cevap: CMV DNA PCR pozitifliğinde (viremide) tedavi başlanır, hastalık beklenmez",
                "<b>CMV profilaksisinde hangi ilaç kullanılır?</b> → Doğru cevap: Valgansiklovir (oral) veya gansiklovir (IV), 3-6 ay süre",
                "<b>CMV DNA PCR hangi sıklıkla yapılır?</b> → Doğru cevap: Haftalık veya 2 haftada bir (ilk 3-6 ay), viremide pre-emptive tedavi"
            ]
        }
    },
    {
        id: 98,
        category: "Parazitoloji",
        topic: "Toxoplasma IgG Avidite - Gebelik",
        question: "Gebeliğinin 12. haftasında olan bir kadında Toxoplasma IgG ve IgM pozitif saptanıyor. Enfeksiyonun zamanlamasını belirlemek için hangi test yapılmalıdır?",
        correctAnswer: "Toxoplasma IgG avidite testi - Yüksek avidite (>60%) = enfeksiyon >4 ay önce (gebelik öncesi, fetal risk yok), düşük avidite (<30%) = akut/yakın enfeksiyon (gebelik sırasında, fetal risk var).",
        details: {
            coreInfo: "Toxoplasma IgG ve IgM birlikte pozitif ise enfeksiyonun akut mu geçirilmiş mi olduğunu belirlemek kritiktir (gebelikte fetal risk). IgG avidite testi antikor-antijen bağının gücünü ölçer. Akut enfeksiyonda IgG düşük aviditeli (zayıf bağ), kronik enfeksiyonda yüksek aviditeli (güçlü bağ). Yüksek avidite (>60%) = enfeksiyon en az 4 ay önce (gebelik öncesi, fetal risk minimal). Düşük avidite (<30%) = akut/yakın enfeksiyon (gebelik sırasında, fetal risk var, amniyosentez + PCR düşünülür).",
            keyPoints: [
                "<b>IgG Avidite:</b> Antikor-antijen bağının gücünü ölçer, enfeksiyonun zamanlamasını gösterir.",
                "<b>Yüksek Avidite (>60%):</b> Enfeksiyon >4 ay önce, gebelik öncesi, fetal risk minimal.",
                "<b>Düşük Avidite (<30%):</b> Akut/yakın enfeksiyon (<4 ay), gebelik sırasında, fetal risk var.",
                "<b>Orta Avidite (30-60%):</b> Belirsiz, 2-4 hafta sonra tekrar test + amniyosentez PCR.",
                "<b>Fetal Tanı:</b> Düşük avidite varsa amniyosentez (>18. hafta) + Toxoplasma PCR yapılır."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Avidite</th><th>Enfeksiyon Zamanı</th><th>Fetal Risk</th><th>Yaklaşım</th></tr>
                    <tr><td><b>Yüksek (>60%)</b></td><td>>4 ay önce</td><td>Minimal</td><td>Rutin takip</td></tr>
                    <tr><td>Orta (30-60%)</td><td>Belirsiz</td><td>Orta</td><td>2-4 hafta sonra tekrar + amniyosentez</td></tr>
                    <tr><td><b>Düşük (<30%)</b></td><td><4 ay (akut)</td><td>Yüksek</td><td>Amniyosentez PCR + spiramisin</td></tr>
                </table>
            `,
            pitfalls: "IgM tek başına pozitiflik akut enfeksiyon demek değildir (6-12 ay kalabilir). Avidite testi mutlaka yapılmalı. IgM negatif + IgG pozitif = geçirilmiş enfeksiyon (fetal risk yok).",
            relatedQuestions: [
                "<b>Toxoplasma IgM neden yanıltıcı olabilir?</b> → Doğru cevap: IgM 6-12 ay kalabilir, tek başına akut enfeksiyon göstermez",
                "<b>Gebelikte Toxoplasma tedavisi nedir?</b> → Doğru cevap: Spiramisin (fetusa geçişi azaltır), fetal enfeksiyon varsa pirimetamin + sulfadiazin",
                "<b>Amniyosentez PCR ne zaman yapılır?</b> → Doğru cevap: Düşük avidite + IgM pozitif varsa, >18. haftadan sonra",
                "<b>Toxoplasma konjenital geçiş riski hangi trimesterde en yüksek?</b> → Doğru cevap: 3. trimester (%70-80), ama hastalık şiddeti 1. trimesterde en ağır"
            ]
        }
    },
    {
        id: 99,
        category: "Hastane Enfeksiyonları",
        topic: "MRSA Enfeksiyon Kontrolü",
        question: "Yoğun bakımda MRSA kolonizasyonu saptanan bir hasta için hangi izolasyon önlemleri alınmalıdır?",
        correctAnswer: "Temas izolasyonu: Tek kişilik oda (veya kohort), önlük + eldiven (odaya girişte), el hijyeni (her temastan sonra), hasta malzemeleri ayrı, taburcu sonrası terminal temizlik + dezenfeksiyon.",
        details: {
            coreInfo: "MRSA (Metisiline dirençli Staphylococcus aureus) hastane enfeksiyonlarının en önemli nedenlerinden biridir. Temas yoluyla yayılır (eller, kontamine yüzeyler). Temas izolasyonu standart önlemlere ek olarak uygulanır: Tek kişilik oda veya kohort (aynı etkenli hastalar birlikte), odaya girişte önlük + eldiven, hasta ile temastan sonra el hijyeni (su + sabun veya alkol bazlı), hasta malzemeleri ayrı (stetoskop, tansiyon aleti), taburcu sonrası terminal temizlik + dezenfeksiyon (klor bazlı).",
            keyPoints: [
                "<b>Temas İzolasyonu:</b> MRSA, VRE, Clostridium difficile, Acinetobacter gibi temas yoluyla yayılan etkenler için.",
                "<b>Tek Kişilik Oda:</b> Mümkünse tek kişilik oda, değilse kohort (aynı etkenli hastalar birlikte).",
                "<b>Önlük + Eldiven:</b> Odaya girişte giyilir, odadan çıkışta çıkarılır (oda içinde kalır).",
                "<b>El Hijyeni:</b> Hasta ile temastan sonra mutlaka (su + sabun veya alkol bazlı), eldiven çıkarıldıktan sonra.",
                "<b>Hasta Malzemeleri:</b> Stetoskop, tansiyon aleti ayrı tutulur, paylaşılmaz, her kullanımda dezenfekte edilir."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Önlem</th><th>Uygulama</th><th>Amaç</th></tr>
                    <tr><td><b>Tek Kişilik Oda</b></td><td>Veya kohort</td><td>Temas riskini azaltır</td></tr>
                    <tr><td><b>Önlük + Eldiven</b></td><td>Odaya girişte</td><td>Kontaminasyonu önler</td></tr>
                    <tr><td><b>El Hijyeni</b></td><td>Her temastan sonra</td><td>Çapraz bulaşı önler</td></tr>
                    <tr><td>Terminal Temizlik</td><td>Taburcu sonrası</td><td>Çevre kontaminasyonunu giderir</td></tr>
                </table>
            `,
            alert: "MRSA burun, cilt, perine kolonizasyonu yapabilir. Aktif tarama (nasal sürüntü + PCR) yüksek riskli ünitelerde (YBÜ, yanık, diyaliz) önerilir.",
            relatedQuestions: [
                "<b>MRSA tarama kültürü nereden alınır?</b> → Doğru cevap: Nasal sürüntü (en sık kolonizasyon), ek olarak aksilla, perine",
                "<b>MRSA dekontaminasyonu nasıl yapılır?</b> → Doğru cevap: Mupirocin nasal pomad (5 gün) + klorheksidin banyosu (5 gün)",
                "<b>MRSA için hangi antibiyotikler kullanılır?</b> → Doğru cevap: Vankomisin (IV), linezolid, daptomisin, teikoplanin",
                "<b>Terminal temizlik ne demek?</b> → Doğru cevap: Hasta taburcu olduktan sonra oda + tüm yüzeyler klor bazlı dezenfektanla temizlenir"
            ]
        }
    },
    {
        id: 100,
        category: "Klinik Bakteriyoloji",
        topic: "Genital Akıntı Tanısı",
        question: "Genital ülser ve inguinal lenfadenopati ile başvuran bir hastada Gram boyamada Gram negatif kokobasiller görülüyor. Tanı için hangi kültür yöntemi kullanılmalıdır?",
        correctAnswer: "Haemophilus ducreyi şüphesi - Ülser tabanından sürüntü + zenginleştirilmiş kanlı agar (tavşan/at kanı + IsoVitaleX + vankomisin) 33°C CO₂'de 3-7 gün - 'Şankroid' (Chancroid) - Gram negatif kokobasil, 'okul balığı' dizilimi.",
        details: {
            coreInfo: "Haemophilus ducreyi şankroid (yumuşak şankr) etkenidir. Genital ülser (ağrılı, yumuşak, düzensiz kenarlı, pürülan taban) + inguinal lenfadenopati (ağrılı, fluktuasyon, bubo). Gram negatif kokobasil, 'okul balığı' (school of fish) dizilimi. Kültür zor: Ülser tabanından sürüntü + zenginleştirilmiş kanlı agar (tavşan/at kanı + IsoVitaleX + vankomisin) 33°C CO₂'de 3-7 gün. Duyarlılık %75-80. PCR daha hassas ama yaygın değil. Tedavi: Azitromisin (tek doz) veya seftriakson.",
            keyPoints: [
                "<b>Haemophilus ducreyi:</b> Gram negatif kokobasil, 'okul balığı' dizilimi, şankroid etkeni.",
                "<b>Şankroid:</b> Genital ülser (ağrılı, yumuşak, pürülan) + inguinal lenfadenopati (ağrılı bubo).",
                "<b>Kültür:</b> Zenginleştirilmiş kanlı agar (tavşan/at kanı + IsoVitaleX + vankomisin), 33°C CO₂, 3-7 gün.",
                "<b>Tanı Güçlüğü:</b> Kültür duyarlılığı %75-80, PCR daha hassas ama yaygın değil.",
                "<b>Ayırıcı Tanı:</b> Sifilis (ağrısız, sert şankr), Herpes (veziküller, ağrılı), LGV (derin lenfadenopati)."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Etken</th><th>Ülser</th><th>Lenfadenopati</th><th>Gram</th></tr>
                    <tr><td><b>H. ducreyi (Şankroid)</b></td><td>Ağrılı, yumuşak, pürülan</td><td>Ağrılı bubo</td><td>Gram (-) kokobasil</td></tr>
                    <tr><td>T. pallidum (Sifilis)</td><td>Ağrısız, sert, temiz</td><td>Ağrısız</td><td>Spiroket (Gram değil)</td></tr>
                    <tr><td>HSV (Herpes)</td><td>Veziküller, ağrılı</td><td>Hafif/yok</td><td>Virüs</td></tr>
                    <tr><td>C. trachomatis (LGV)</td><td>Geçici, küçük</td><td>Derin, matted</td><td>İntraselüler</td></tr>
                </table>
            `,
            pitfalls: "Kültür negatifliği şankroid dışlamaz (düşük duyarlılık). Klinik + mikroskopi yeterli olabilir. HIV ile birlikte görülme sıktır (ülser HIV geçişini artırır).",
            relatedQuestions: [
                "<b>Şankroid ile sifilis ülseri nasıl ayırt edilir?</b> → Doğru cevap: Şankroid ağrılı + yumuşak + pürülan, sifilis ağrısız + sert + temiz",
                "<b>Haemophilus ducreyi kültürü neden zordur?</b> → Doğru cevap: Çok seçici (zenginleştirilmiş besiyeri + CO₂ gerekir), duyarlılık %75-80",
                "<b>Şankroid tedavisi nedir?</b> → Doğru cevap: Azitromisin 1 g tek doz (veya seftriakson 250 mg IM)",
                "<b>Şankroid ile HIV ilişkisi nedir?</b> → Doğru cevap: Ülser HIV geçişini 10 kat artırır, HIV(+) hastalarda şankroid daha sık görülür"
            ]
        }
    },
    {
        id: 101,
        category: "Enfeksiyon Hastalıkları",
        topic: "Hepatit B Serolojisi - Bağışıklık",
        question: "Bir sağlık çalışanında Hepatit B aşısı sonrası kontrol yapılıyor. HBsAg negatif, Anti-HBs >10 mIU/mL, Anti-HBc negatif bulunuyor. Bu sonuçlar ne anlama gelir?",
        correctAnswer: "Aşı ile kazanılmış bağışıklık - HBsAg(-) = enfeksiyon yok, Anti-HBs(+) >10 mIU/mL = koruyucu antikor (aşı cevabı), Anti-HBc(-) = doğal enfeksiyon geçirilmemiş - Koruma sağlanmış, rapel gerekmez (ömür boyu koruma).",
        details: {
            coreInfo: "Hepatit B serolojisi bağışıklık durumunu, akut/kronik enfeksiyonu, aşı cevabını değerlendirir. Anti-HBs >10 mIU/mL koruyucudur (aşı veya geçirilmiş enfeksiyon). Anti-HBc varsa doğal enfeksiyon geçirilmiş, yoksa aşı cevabı. Bu soruda HBsAg(-) + Anti-HBs(+) + Anti-HBc(-) = aşı ile kazanılmış bağışıklık. Koruma ömür boyu sürer, rapel gerekmez (immün hafıza). Sağlık çalışanlarında aşı sonrası 1-2 ay sonra Anti-HBs kontrolü yapılır (>10 mIU/mL olmalı).",
            keyPoints: [
                "<b>Anti-HBs >10 mIU/mL:</b> Koruyucu antikor seviyesi (bağışıklık var).",
                "<b>Anti-HBc(-):</b> Doğal enfeksiyon geçirilmemiş, aşı cevabı.",
                "<b>Anti-HBc(+):</b> Doğal enfeksiyon geçirilmiş (geçmiş veya kronik).",
                "<b>Aşı Cevabı Kontrolü:</b> Aşı sonrası 1-2 ay sonra Anti-HBs ölçülür (sağlık çalışanları).",
                "<b>Rapel Gerekmez:</b> Anti-HBs >10 mIU/mL ise ömür boyu koruma (immün hafıza)."
            ],
            table: `
                <table class="info-table">
                    <tr><th>HBsAg</th><th>Anti-HBs</th><th>Anti-HBc</th><th>Yorum</th></tr>
                    <tr><td>-</td><td><b>>10 mIU/mL</b></td><td><b>-</b></td><td><b>Aşı cevabı (bağışık)</b></td></tr>
                    <tr><td>-</td><td>>10 mIU/mL</td><td>+</td><td>Geçirilmiş enfeksiyon (bağışık)</td></tr>
                    <tr><td>-</td><td><10 mIU/mL</td><td>-</td><td>Duyarlı (aşı gerekmez veya rapel)</td></tr>
                    <tr><td>+</td><td>-</td><td>+</td><td>Akut/Kronik enfeksiyon</td></tr>
                </table>
            `,
            alert: "Anti-HBs <10 mIU/mL ise koruma yetersizdir. Sağlık çalışanlarında rapel doz verilir (1 doz) ve 1 ay sonra Anti-HBs tekrar kontrol edilir.",
            relatedQuestions: [
                "<b>Anti-HBs negatif + Anti-HBc pozitif ne demek?</b> → Doğru cevap: Geçirilmiş enfeksiyon, bağışıklık kaybı (pencere veya kronik taşıyıcılık ayırıcı tanısı gerekir)",
                "<b>Hepatit B aşısı kaç doz yapılır?</b> → Doğru cevap: 3 doz (0, 1, 6. aylar), sağlık çalışanlarında 1-2 ay sonra Anti-HBs kontrolü",
                "<b>Anti-HBs <10 mIU/mL ise ne yapılır?</b> → Doğru cevap: Rapel doz (1 doz) verilir, 1 ay sonra Anti-HBs tekrar kontrol edilir",
                "<b>Anti-HBc IgM pozitif ne anlama gelir?</b> → Doğru cevap: Akut Hepatit B enfeksiyonu (son 6 ay), kronik alevlenmede de pozitif olabilir"
            ]
        }
    },
    {
        id: 102,
        category: "Enfeksiyon Hastalıkları",
        topic: "Hepatit C Serolojisi - Tanı",
        question: "Bir hastada Anti-HCV ELISA pozitif bulunuyor. Enfeksiyonun aktif olup olmadığını belirlemek için hangi test yapılmalıdır?",
        correctAnswer: "HCV RNA (PCR) testi - Anti-HCV pozitif = geçmiş veya aktif enfeksiyon (ayırt edemez), HCV RNA pozitif = aktif enfeksiyon (viremik, tedavi gerekir), HCV RNA negatif = geçirilmiş enfeksiyon (spontan veya tedavi ile iyileşmiş).",
        details: {
            coreInfo: "Anti-HCV pozitifliği geçmiş veya aktif Hepatit C enfeksiyonunu gösterir ama ayırt edemez. Aktif enfeksiyonu doğrulamak için HCV RNA (PCR) yapılmalıdır. HCV RNA pozitif = aktif enfeksiyon (viremik, tedavi gerekir), HCV RNA negatif = geçirilmiş enfeksiyon (spontan veya tedavi ile iyileşmiş, anti-HCV ömür boyu kalır). Akut HCV'de spontan iyileşme %15-25, kronikleşme %75-85. Kronik HCV'de siroz riski %20-30 (20-30 yıl), hepatosellüler karsinom riski artar.",
            keyPoints: [
                "<b>Anti-HCV Pozitif:</b> Geçmiş veya aktif enfeksiyon (ayırt edemez, ömür boyu kalır).",
                "<b>HCV RNA Pozitif:</b> Aktif enfeksiyon (viremik), tedavi endikasyonu var.",
                "<b>HCV RNA Negatif:</b> Geçirilmiş enfeksiyon (spontan/tedavi ile iyileşmiş), reenfeksiyon riski devam eder.",
                "<b>Pencere Dönemi:</b> Akut HCV'de ilk 4-12 hafta Anti-HCV negatif, HCV RNA pozitif olabilir.",
                "<b>Kronikleşme:</b> %75-85, siroz riski %20-30 (20-30 yıl), HCC riski artar."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Anti-HCV</th><th>HCV RNA</th><th>Yorum</th><th>Durum</th></tr>
                    <tr><td><b>+</b></td><td><b>+</b></td><td><b>Aktif enfeksiyon</b></td><td>Tedavi gerekir (DAA)</td></tr>
                    <tr><td>+</td><td>-</td><td>Geçirilmiş enfeksiyon</td><td>İyileşmiş, reenfeksiyon riski var</td></tr>
                    <tr><td>-</td><td>+</td><td>Pencere dönemi</td><td>Akut HCV (erken dönem)</td></tr>
                    <tr><td>-</td><td>-</td><td>Enfeksiyon yok</td><td>Duyarlı</td></tr>
                </table>
            `,
            pitfalls: "Anti-HCV pozitif = tedavi gerektirir algısı yanlış! HCV RNA mutlaka bakılmalı. Anti-HCV ömür boyu kalır (geçirilmiş enfeksiyonda da pozitif).",
            relatedQuestions: [
                "<b>HCV genotip tayini neden yapılır?</b> → Doğru cevap: Tedavi seçimi için (artık DAA ile genotip bağımsız tedaviler var ama bazı ilaçlar genotipe özel)",
                "<b>Akut HCV'de spontan iyileşme oranı nedir?</b> → Doğru cevap: %15-25, %75-85 kronikleşir",
                "<b>HCV tedavisi nedir?</b> → Doğru cevap: DAA (Direkt Antiviral Ajanlar) = sofosbuvir, ledipasvir, velpatasvir (8-12 hafta, %95-99 SVR)",
                "<b>HCV RNA negatifleşmesi ne zaman kontrol edilir?</b> → Doğru cevap: Tedavi bitiminden 12 hafta sonra (SVR12 = Sustained Virologic Response)"
            ]
        }
    },
    {
        id: 103,
        category: "Enfeksiyon Hastalıkları",
        topic: "HIV Tanı Algoritması",
        question: "HIV taramasında 4. kuşak ELISA (Ag/Ab combo) pozitif çıkan bir hastada hangi doğrulama testi yapılmalıdır?",
        correctAnswer: "HIV-1/2 ayrımı yapan immünblot veya line immunoassay (LIA) + HIV RNA (viral load) PCR - 4. kuşak ELISA p24 Ag + Anti-HIV Ab saptıyor (pencere 2-4 hafta), doğrulama testi HIV-1/HIV-2 ayırımı + viral load ile enfeksiyon konfirme edilir.",
        details: {
            coreInfo: "HIV tanı algoritması: 1) 4. kuşak ELISA (p24 Ag + Anti-HIV-1/2 Ab combo, pencere 2-4 hafta) → pozitifse, 2) Doğrulama testi: HIV-1/2 ayrımı yapan immünblot veya LIA (Line Immunoassay) → pozitifse, 3) HIV RNA (viral load) PCR ile enfeksiyon konfirme edilir. Eski 3. kuşak ELISA sadece antikor saptıyor (pencere 3-12 hafta). 4. kuşak hem p24 antijeni hem antikoru saptadığı için erken tanı sağlar. Western blot artık önerilmiyor (pahalı, yorumlaması zor).",
            keyPoints: [
                "<b>4. Kuşak ELISA:</b> p24 Ag + Anti-HIV-1/2 Ab combo, pencere dönemi 2-4 hafta (en erken tanı).",
                "<b>Doğrulama Testi:</b> HIV-1/2 ayrımı yapan immünblot veya LIA (Western blot artık önerilmiyor).",
                "<b>HIV RNA (Viral Load):</b> Enfeksiyonu konfirme eder, tedavi takibinde kullanılır.",
                "<b>3. Kuşak ELISA:</b> Sadece antikor saptıyor (pencere 3-12 hafta), artık 4. kuşak tercih edilir.",
                "<b>Pencere Dönemi:</b> 4. kuşak 2-4 hafta, 3. kuşak 3-12 hafta, NAT (PCR) 10-14 gün."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Test</th><th>Pencere Dönemi</th><th>Amaç</th></tr>
                    <tr><td><b>4. Kuşak ELISA (Ag/Ab)</b></td><td>2-4 hafta</td><td>Tarama (p24 + Ab)</td></tr>
                    <tr><td>HIV-1/2 İmmünblot/LIA</td><td>-</td><td>Doğrulama + HIV-1/2 ayırımı</td></tr>
                    <tr><td>HIV RNA (PCR)</td><td>10-14 gün</td><td>Erken tanı + viral load</td></tr>
                    <tr><td>Western Blot</td><td>-</td><td>Eski doğrulama (artık önerilmiyor)</td></tr>
                </table>
            `,
            alert: "Pencere döneminde 4. kuşak ELISA negatif olabilir. Yüksek risk varsa 2-4 hafta sonra tekrar test yapılmalı veya HIV RNA (PCR) ile erken tanı konulmalı.",
            relatedQuestions: [
                "<b>4. kuşak ELISA 3. kuşaktan nasıl farklıdır?</b> → Doğru cevap: 4. kuşak p24 antijeni de saptıyor (pencere 2-4 hafta), 3. kuşak sadece antikor (pencere 3-12 hafta)",
                "<b>Western blot neden artık önerilmiyor?</b> → Doğru cevap: Pahalı, yorumlaması zor (indeterminate sonuçlar), HIV-1/2 immünblot/LIA daha pratik",
                "<b>HIV RNA (viral load) hangi durumlarda kullanılır?</b> → Doğru cevap: Doğrulama, akut HIV tanısı (pencere dönemi), tedavi takibi",
                "<b>Akut HIV sendromu ne zaman görülür?</b> → Doğru cevap: Enfeksiyondan 2-4 hafta sonra (ateş, lenfadenopati, döküntü), p24 Ag pozitif ama Ab henüz negatif olabilir"
            ]
        }
    },
    {
        id: 104,
        category: "Mikoloji",
        topic: "Penicillium marneffei - HIV",
        question: "HIV pozitif bir hastada ciltte papüler lezyonlar ve ateş var. Kan kültüründe maya formu, 25°C'de miseliyal form (kırmızı pigment) üreyen bir mantar izole ediliyor. Tanı nedir?",
        correctAnswer: "Penicillium marneffei (Talaromyces marneffei) - Dimorfik mantar, 37°C maya (çoğalan maya hücreleri), 25°C miseliyal (kırmızı pigment), Güneydoğu Asya endemik, HIV(+) CD4<100 hastalarında dissemine enfeksiyon (cilt, akciğer, kemik iliği).",
        details: {
            coreInfo: "Penicillium marneffei (yeni adı Talaromyces marneffei) dimorfik mantardır. 37°C'de maya formu (çoğalan maya hücreleri = fission yeast), 25°C'de miseliyal form (kırmızı pigment üretir). Güneydoğu Asya endemik (Tayland, Vietnam, Çin). HIV(+) CD4<100 hastalarında dissemine enfeksiyon yapar (cilt papülleri, ateş, hepatosplenomegali, lenfadenopati, akciğer tutulumu). Tanı: Kan/kemik iliği/cilt biyopsisi kültürü, mikroskopi (çoğalan maya hücreleri). Tedavi: Amfoterisin B (indüksiyon) → itrakonazol (idame).",
            keyPoints: [
                "<b>Dimorfik Mantar:</b> 37°C maya formu (fission yeast), 25°C miseliyal form (kırmızı pigment).",
                "<b>Endemik Bölge:</b> Güneydoğu Asya (Tayland, Vietnam, Çin), HIV(+) hastalarında önemli fırsatçı enfeksiyon.",
                "<b>Klinik:</b> Cilt papülleri (merkezi umbilikuslu, molluscum contagiosum benzeri), ateş, hepatosplenomegali, lenfadenopati.",
                "<b>Tanı:</b> Kan/kemik iliği/cilt kültürü, mikroskopi (çoğalan maya hücreleri, septum ortasında duvar).",
                "<b>Tedavi:</b> Amfoterisin B (2 hafta indüksiyon) → itrakonazol (10 hafta idame) + ART (CD4 artışı)."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Özellik</th><th>37°C (Vücut)</th><th>25°C (Laboratuvar)</th></tr>
                    <tr><td><b>Form</b></td><td>Maya (fission yeast)</td><td>Miseliyal (hyphae)</td></tr>
                    <tr><td>Pigment</td><td>-</td><td><b>Kırmızı pigment</b></td></tr>
                    <tr><td>Üreme</td><td>Fission (çoğalma)</td><td>Konidia</td></tr>
                </table>
            `,
            pitfalls: "Cilt lezyonları molluscum contagiosum, kriptokokkoz, histoplazmoz ile karışabilir. Kültürde kırmızı pigment spesifiktir (agar kırmızı olur).",
            relatedQuestions: [
                "<b>Penicillium marneffei hangi hastalarda görülür?</b> → Doğru cevap: HIV(+) CD4<100 (Güneydoğu Asya), immünsüprese hastalar",
                "<b>Dimorfik mantarlar hangileridir?</b> → Doğru cevap: Histoplasma, Blastomyces, Coccidioides, Paracoccidioides, Penicillium marneffei, Sporothrix",
                "<b>Penicillium marneffei maya formu nasıl ürer?</b> → Doğru cevap: Fission (çoğalma) = septum ortasında duvar oluşur, hücre ikiye ayrılır",
                "<b>Penicillium marneffei tedavisi nedir?</b> → Doğru cevap: Amfoterisin B (2 hafta) → itrakonazol (10 hafta) + ART (CD4↑)"
            ]
        }
    },
    {
        id: 105,
        category: "Parazitoloji",
        topic: "Trichinella Tanısı",
        question: "Yaban domuzu eti yedikten sonra ateş, miyalji, periorbital ödem ve eozinofili gelişen bir hastada hangi parazit düşünülmeli ve tanı nasıl konur?",
        correctAnswer: "Trichinella spiralis - Yaban domuzu/domuz eti (çiğ/az pişmiş) → larvalar bağırsak duvarını geçip kas dokusuna yerleşir → miyozit (miyalji, periorbital ödem, eozinofili) - Tanı: Seroloji (ELISA, IgG >1:256), kas biyopsisi (kist içinde larva), yüksek CK.",
        details: {
            coreInfo: "Trichinella spiralis nematod (yuvarlak solucan), yaban domuzu/domuz eti (çiğ/az pişmiş) ile bulaşır. Larvalar bağırsak duvarını geçip kan yoluyla çizgili kas dokusuna yerleşir (diyafram, masseter, interkostal, göz kasları). Miyozit yapar: Ateş, miyalji, periorbital ödem (en tipik bulgu), eozinofili, yüksek CK. Tanı: Seroloji (ELISA, IgG >1:256, 3-4. haftadan sonra pozitifleşir), kas biyopsisi (kist içinde larva), yüksek CK + eozinofili klinik destekler. Tedavi: Albendazol/mebendazol (larva öldürür) + kortikosteroid (ağır miyozitte).",
            keyPoints: [
                "<b>Bulaş:</b> Yaban domuzu/domuz eti (çiğ/az pişmiş), larvalar kas dokusunda kist oluşturur.",
                "<b>Klinik:</b> Ateş, miyalji (özellikle çiğneme, solunum kasları), periorbital ödem (en tipik), subkonjonktival kanama, eozinofili.",
                "<b>Tanı:</b> Seroloji (ELISA, IgG >1:256, 3-4. hafta+), kas biyopsisi (kist içinde larva), yüksek CK.",
                "<b>Laboratuvar:</b> Eozinofili (>%10), yüksek CK (miyozit), yüksek IgE.",
                "<b>Tedavi:</b> Albendazol 400 mg 2x1 (8-14 gün) veya mebendazol + kortikosteroid (ağır miyozitte)."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Faz</th><th>Süre</th><th>Klinik</th><th>Tanı</th></tr>
                    <tr><td><b>Enterik Faz</b></td><td>1. hafta</td><td>Bulantı, ishal, karın ağrısı</td><td>Dışkıda larva (nadir)</td></tr>
                    <tr><td><b>Miyozit Fazi</b></td><td>2-8. hafta</td><td>Ateş, miyalji, periorbital ödem, eozinofili</td><td>Seroloji + CK↑</td></tr>
                    <tr><td>Kronik Faz</td><td>>8 hafta</td><td>Kas ağrısı devam eder</td><td>Kas biyopsisi (kist)</td></tr>
                </table>
            `,
            alert: "Periorbital ödem + miyalji + eozinofili = Trichinellosis patognomoniktir. Yaban domuzu eti öyküsü mutlaka sorgulanmalı.",
            relatedQuestions: [
                "<b>Trichinella larvası hangi kasları tercih eder?</b> → Doğru cevap: Diyafram, masseter, interkostal, göz kasları (en çok oksijen alan kaslar)",
                "<b>Trichinella tanısında seroloji ne zaman pozitifleşir?</b> → Doğru cevap: 3-4. haftadan sonra (IgG >1:256 tanısal), akut fazda negatif olabilir",
                "<b>Trichinella tedavisinde kortikosteroid neden verilir?</b> → Doğru cevap: Ağır miyozitte inflamasyonu azaltır (miyokardit, ensefalit varsa mutlaka)",
                "<b>Trichinella ile Toxoplasma miyoziti nasıl ayırt edilir?</b> → Doğru cevap: Trichinella periorbital ödem + yaban domuzu öyküsü, Toxoplasma lenfadenopati + kedi teması"
            ]
        }
    },
    {
        id: 106,
        category: "Enfeksiyon Hastalıkları",
        topic: "EBV İnfeksiyöz Mononükleoz",
        question: "Boğaz ağrısı, ateş ve lenfadenopati ile başvuran bir gençte atipik lenfositoz (%15) ve heterofil antikor testi pozitif bulunuyor. Tanı nedir ve heterofil antikor testi negatif olsaydı hangi testler yapılmalıydı?",
        correctAnswer: "İnfeksiyöz mononükleoz (EBV) - Heterofil antikor (Monospot, Paul-Bunnell) pozitif = IM tanısı (%80-90 duyarlılık) - Negatifse: EBV spesifik seroloji (VCA IgM, VCA IgG, EBNA IgG), EBV DNA PCR (immunsüprese hastalarda).",
        details: {
            coreInfo: "İnfeksiyöz mononükleoz (IM) EBV enfeksiyonunun klasik formudur. Boğaz ağrısı, ateş, lenfadenopati (posterior servikal), hepatosplenomegali, atipik lenfositoz (%10-20, Downey hücreleri). Heterofil antikor (Monospot, Paul-Bunnell) pozitif (%80-90 duyarlılık, 1. hafta %40, 2-3. hafta %80-90). Negatifse veya belirsizse: EBV spesifik seroloji yapılır. VCA IgM + VCA IgG + EBNA IgG(-) = akut IM. VCA IgG + EBNA IgG + VCA IgM(-) = geçirilmiş enfeksiyon. VCA IgM tek başına pozitiflik akut enfeksiyon gösterir.",
            keyPoints: [
                "<b>İnfeksiyöz Mononükleoz (IM):</b> EBV, boğaz ağrısı + ateş + lenfadenopati + atipik lenfositoz + hepatosplenomegali.",
                "<b>Heterofil Antikor (Monospot):</b> %80-90 duyarlılık (1. hafta %40, 2-3. hafta %80-90), spesifik değil (koyun eritrositlerine karşı Ab).",
                "<b>EBV Spesifik Seroloji:</b> VCA IgM + VCA IgG + EBNA IgG(-) = akut IM, VCA IgG + EBNA IgG = geçirilmiş enfeksiyon.",
                "<b>Komplikasyonlar:</b> Splenik rüptür (en ciddi), otoimmün hemolitik anemi, hepatit, nörolojik (Guillain-Barré, ensefalit).",
                "<b>Tedavi:</b> Destekleyici (istirahat, antipiretik), ampisilin/amoksisilin KONTRENDİKE (makülopapüler döküntü yapar)."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Test</th><th>Akut IM</th><th>Geçirilmiş Enfeksiyon</th><th>Reaktivasyon</th></tr>
                    <tr><td><b>VCA IgM</b></td><td>+</td><td>-</td><td>-/+</td></tr>
                    <tr><td><b>VCA IgG</b></td><td>+</td><td>+</td><td>+</td></tr>
                    <tr><td><b>EBNA IgG</b></td><td>-</td><td>+</td><td>+</td></tr>
                    <tr><td>Heterofil Antikor</td><td>+(%80-90)</td><td>-</td><td>-</td></tr>
                </table>
            `,
            alert: "Ampisilin/amoksisilin verilmemeli (IM'da %90-100 makülopapüler döküntü yapar). Splenik rüptür riski nedeniyle ağır aktiviteden kaçınılmalı (ilk 3 hafta).",
            relatedQuestions: [
                "<b>Heterofil antikor testi nedir?</b> → Doğru cevap: Monospot (Paul-Bunnell), koyun eritrositlerine karşı heterojen antikor, %80-90 duyarlılık",
                "<b>EBV VCA IgM negatif ama klinik IM ise ne yapılır?</b> → Doğru cevap: 2 hafta sonra tekrar test (serokonversiyon), CMV/Toxoplasma serolojisi (IM benzeri)",
                "<b>IM'da neden ampisilin döküntü yapar?</b> → Doğru cevap: EBV B hücreleri aktive eder, ampisilin haptene dönüşür, immün kompleks reaksiyonu (tip 3 aşırı duyarlılık)",
                "<b>IM'un en ciddi komplikasyonu nedir?</b> → Doğru cevap: Splenik rüptür (%0.1-0.5), ağır aktivite kısıtlanmalı (ilk 3 hafta)"
            ]
        }
    },
    {
        id: 107,
        category: "Parazitoloji",
        topic: "Pulmoner Amebiasis",
        question: "Karaciğer apsesi tedavisi alan bir hastada sağ akciğer bazalinde infiltrasyon ve plevral efüzyon gelişiyor. Plevral sıvıda 'çikolata rengi' görülüyor. Olası tanı nedir?",
        correctAnswer: "Pulmoner amebiasis (Entamoeba histolytica) - Karaciğer apsesinin direkt yayılımı (diyafram geçişi) → sağ akciğer bazal tutulumu + plevral efüzyon ('çikolata rengi' nekrotik debris) - Tanı: Plevral sıvı mikroskopi (trofozoitler nadir), seroloji (IHA >1:256), amip karaciğer apsesi öyküsü.",
        details: {
            coreInfo: "Pulmoner amebiasis Entamoeba histolytica'nın karaciğer apsesinden direkt yayılımı ile oluşur (diyafram geçişi). Sağ akciğer bazal tutulumu (karaciğer üstü lokalizasyon). Plevral efüzyon 'çikolata rengi' (nekrotik debris, hemorajik), bronkoplevral fistül gelişebilir (öksürükle çikolata renginde balgam). Tanı: Plevral sıvı mikroskopi (trofozoitler nadir, %10), seroloji (IHA >1:256, %95 duyarlılık), amip karaciğer apsesi öyküsü. Tedavi: Metronidazol (invaziv amebiasis) + paromomycin (lümen formu eradikasyonu).",
            keyPoints: [
                "<b>Yayılım:</b> Karaciğer apsesinden direkt yayılım (diyafram geçişi), sağ akciğer bazal tutulumu.",
                "<b>Plevral Efüzyon:</b> 'Çikolata rengi' (nekrotik debris + hemorajik), steril (bakteriyel olmayan).",
                "<b>Bronkoplevral Fistül:</b> Öksürükle çikolata renginde balgam (patognomonik ama nadir).",
                "<b>Tanı:</b> Seroloji (IHA >1:256, %95 duyarlılık), plevral sıvı mikroskopi (trofozoitler nadir), karaciğer apsesi öyküsü.",
                "<b>Tedavi:</b> Metronidazol 750 mg 3x1 (7-10 gün) + paromomycin 500 mg 3x1 (7 gün, lümen formu)."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Tutulum</th><th>Yayılım Yolu</th><th>Klinik</th></tr>
                    <tr><td><b>Pulmoner</b></td><td>Direkt (diyafram geçişi)</td><td>Sağ bazal infiltrat + plevral efüzyon</td></tr>
                    <tr><td>Perikardial</td><td>Direkt (perikart invazyonu)</td><td>Perikardit, tamponad</td></tr>
                    <tr><td>Beyin Absesi</td><td>Hematojen</td><td>Nadir, mortalite yüksek</td></tr>
                </table>
            `,
            pitfalls: "Plevral sıvıda trofozoitler nadir görülür (%10). Seroloji + karaciğer apsesi öyküsü tanı koydurucu. Bakteriyel ampiyem ile karışabilir (antibiyotik cevapsızlık amebiasis düşündürür).",
            relatedQuestions: [
                "<b>Amip karaciğer apsesi neden sağ lobda sık görülür?</b> → Doğru cevap: Portal venöz akım sağ loba daha fazla (süperior mezenterik ven → sağ portal ven)",
                "<b>Amip karaciğer apsesi aspirasyon endikasyonu nedir?</b> → Doğru cevap: Rüptür riski (>5 cm, sol lob, ince duvar), tanısal belirsizlik (piojenik apseyle ayırım)",
                "<b>Pulmoner amebiasis ile piojenik ampiyem nasıl ayırt edilir?</b> → Doğru cevap: Amebiasis çikolata rengi + steril (bakteriyel kültür negatif), ampiyem pürülan + bakteriyel kültür pozitif",
                "<b>Amebiasis tedavisinde neden paromomycin eklenir?</b> → Doğru cevap: Metronidazol invaziv formları öldürür, paromomycin lümen formlarını (reenfeksiyon önlenir)"
            ]
        }
    },
    {
        id: 108,
        category: "Enfeksiyon Hastalıkları",
        topic: "Hepatit D Serolojisi",
        question: "Kronik Hepatit B hastasında ani transaminaz artışı ve kötüleşme oluyor. Anti-HDV total pozitif, HDV RNA pozitif bulunuyor. Bu durum ne anlama gelir?",
        correctAnswer: "Hepatit D süperenfeksiyonu (kronik HBV üzerine HDV) - Anti-HDV total pozitif = geçmiş veya aktif HDV enfeksiyonu, HDV RNA pozitif = aktif replikasyon - Kronik HBV hastasında HDV süperenfeksiyonu %70-90 kronikleşir, hızlı siroz ve karaciğer yetmezliği riski yüksek.",
        details: {
            coreInfo: "Hepatit D virüsü (HDV) defektif RNA virüsü, replikasyon için HBsAg'ye ihtiyaç duyar (sadece HBV(+) hastalarda görülür). İki form: 1) Koenfeksiyon: HBV + HDV birlikte akut enfeksiyon (genelde kendiliğinden iyileşir), 2) Süperenfeksiyon: Kronik HBV üzerine HDV enfeksiyonu (%70-90 kronikleşir). Bu soruda kronik HBV hastasında Anti-HDV total + HDV RNA pozitif = aktif HDV süperenfeksiyonu. Hızlı siroz, dekompansasyon, HCC riski artar. Tedavi: Pegile interferon alfa (en etkili), tenofovir + entekavir (HBV replikasyonunu baskılar).",
            keyPoints: [
                "<b>HDV:</b> Defektif RNA virüs, HBsAg'ye ihtiyaç duyar (sadece HBV(+) hastalarda).",
                "<b>Koenfeksiyon:</b> HBV + HDV akut (genelde kendiliğinden iyileşir, %5 kronikleşir).",
                "<b>Süperenfeksiyon:</b> Kronik HBV + HDV (%70-90 kronikleşir, hızlı siroz riski).",
                "<b>Seroloji:</b> Anti-HDV IgM (akut/aktif), Anti-HDV total (geçmiş/aktif), HDV RNA (aktif replikasyon).",
                "<b>Tedavi:</b> Pegile interferon alfa (48-96 hafta), tenofovir + entekavir (HBV baskılama), karaciğer nakli (siroz/yetmezlik)."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Test</th><th>Koenfeksiyon (HBV+HDV akut)</th><th>Süperenfeksiyon (Kronik HBV + HDV)</th></tr>
                    <tr><td><b>Anti-HDV IgM</b></td><td>+ (geçici)</td><td>+ (yüksek titre, uzun süre)</td></tr>
                    <tr><td><b>Anti-HDV total</b></td><td>+ (geç pozitifleşir)</td><td>+ (erken, yüksek titre)</td></tr>
                    <tr><td><b>HDV RNA</b></td><td>+ (geçici)</td><td>+ (kalıcı)</td></tr>
                    <tr><td>HBsAg</td><td>+</td><td>+ (kronik)</td></tr>
                </table>
            `,
            alert: "Kronik HBV hastalarında ani transaminaz artışı ve kötüleşme HDV süperenfeksiyonunu düşündürmeli. HDV RNA + Anti-HDV serolojisi mutlaka bakılmalı.",
            relatedQuestions: [
                "<b>HDV neden sadece HBV(+) hastalarda görülür?</b> → Doğru cevap: HDV defektif virüstür, replikasyon için HBsAg'ye (zarf proteini) ihtiyaç duyar",
                "<b>HDV koenfeksiyonu ile süperenfeksiyon nasıl ayırt edilir?</b> → Doğru cevap: Koenfeksiyon Anti-HBc IgM pozitif (akut HBV), süperenfeksiyon Anti-HBc IgG pozitif (kronik HBV)",
                "<b>HDV tedavisinde neden interferon kullanılır?</b> → Doğru cevap: Pegile interferon alfa HDV replikasyonunu baskılar, nükleozid analoglar HDV'ye direkt etkisizdir",
                "<b>HDV hangi bölgelerde endemik?</b> → Doğru cevap: Akdeniz ülkeleri, Ortadoğu, Afrika, Güney Amerika (HBV prevalansı yüksek bölgeler)"
            ]
        }
    },
    {
        id: 109,
        category: "Enfeksiyon Hastalıkları",
        topic: "HSV-1 ve HSV-2 Ayrımı",
        question: "Genital ülser lezyonlarından alınan örnekte HSV PCR pozitif bulunuyor. HSV-1 ve HSV-2 ayrımı neden önemlidir ve hangi yöntemle yapılır?",
        correctAnswer: "HSV-1 ve HSV-2 ayrımı prognoz ve rekürrens sıklığı için önemli - HSV-2 genital rekürrensleri daha sık (%90 vs %40), HSV-1 orolabial rekürrensleri daha sık - Ayrım: Type-specific PCR (en hassas), type-specific seroloji (HSV-1 IgG, HSV-2 IgG), immünfloresan antikor testi.",
        details: {
            coreInfo: "HSV-1 ve HSV-2 ayrımı prognoz ve danışmanlık için kritiktir. HSV-2 genital enfeksiyonlarda rekürrens sıklığı çok daha yüksek (%90 vs %40). HSV-1 genital enfeksiyonlarda ilk atak şiddetli ama rekürrens nadir. Ayrım: 1) Type-specific PCR (en hassas, altın standart), 2) Type-specific seroloji (HSV-1 IgG, HSV-2 IgG, gG1/gG2 glikoproteinlerine karşı), 3) İmmünfloresan antikor testi. Kültürde type ayrımı zor (monoklonal antikor gerekir). Tedavi her iki tipin aynı (asiklovir, valasiklovir), ama danışmanlık farklıdır.",
            keyPoints: [
                "<b>HSV-1:</b> Orolabial yerleşim (dudak uçuğu), genital enfeksiyonlarda rekürrens nadir (%40).",
                "<b>HSV-2:</b> Genital yerleşim, rekürrens çok sık (%90, yılda 4-6 atak), asemptomatik shedding yüksek.",
                "<b>Type Ayrımı:</b> Type-specific PCR (altın standart), type-specific seroloji (gG1/gG2 IgG).",
                "<b>Prognoz:</b> HSV-2 genital rekürrensleri daha sık, süpresif tedavi gerekebilir (valasiklovir günlük).",
                "<b>Tedavi:</b> Her iki tip için aynı (asiklovir, valasiklovir, famciklovir), danışmanlık farklıdır."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Özellik</th><th>HSV-1 Genital</th><th>HSV-2 Genital</th></tr>
                    <tr><td><b>İlk Atak</b></td><td>Şiddetli</td><td>Şiddetli</td></tr>
                    <tr><td><b>Rekürrens Sıklığı</b></td><td>%40 (nadir)</td><td>%90 (yılda 4-6 atak)</td></tr>
                    <tr><td><b>Asemptomatik Shedding</b></td><td>Düşük</td><td>Yüksek (%10-20 günlerde)</td></tr>
                    <tr><td>Süpresif Tedavi</td><td>Genelde gerekmez</td><td>Sık gerekir</td></tr>
                </table>
            `,
            pitfalls: "Kültürde type ayrımı yapılamaz (monoklonal antikor gerekir). Type-specific PCR veya seroloji mutlaka yapılmalı. HSV-1 genital enfeksiyonlarda rekürrens nadir olduğu hastaya söylenmeli (gereksiz kaygı azalır).",
            relatedQuestions: [
                "<b>HSV-2 genital rekürrensler neden daha sık?</b> → Doğru cevap: Sakral ganglion (S2-S5) latent enfeksiyonu, reaktivasyon daha sık (stres, hormonal değişiklik, immünsüpresyon)",
                "<b>Asemptomatik shedding ne demek?</b> → Doğru cevap: Klinik belirti olmadan virüs salınımı (HSV-2'de %10-20 günlerde), cinsel partner bulaş riski",
                "<b>HSV süpresif tedavi ne zaman verilir?</b> → Doğru cevap: Yılda >6 atak, cinsel partner korunması, immünsüprese hastalar (valasiklovir 500 mg 1x1)",
                "<b>Type-specific seroloji ne zaman yapılır?</b> → Doğru cevap: Rekürrens öyküsü + PCR imkanı yok, partner taraması, asemptomatik taşıyıcılık araştırması"
            ]
        }
    },
    {
        id: 110,
        category: "Enfeksiyon Hastalıkları",
        topic: "İnfluenza Hızlı Antijen Testi",
        question: "Grip şüpheli bir hastada influenza hızlı antijen testi negatif çıkıyor. Bu sonuç influenzayı dışlar mı ve hangi durumlarda PCR yapılmalıdır?",
        correctAnswer: "Hayır, dışlamaz - Hızlı antijen testi duyarlılığı düşük (%50-70), özgüllüğü yüksek (%90-95) - Negatif sonuç influenzayı dışlamaz, yüksek klinik şüphe + hospitalizasyon/ağır hastalık + immünsüpresyon + epidemiyolojik veri varsa PCR (RT-PCR) mutlaka yapılmalı.",
        details: {
            coreInfo: "İnfluenza hızlı antijen testi (Rapid Influenza Diagnostic Test - RIDT) influenza A/B nükleoproteinini saptıyor. Duyarlılık düşük (%50-70), özgüllük yüksek (%90-95). Pozitif sonuç güvenilir (özgüllük yüksek) ama negatif sonuç influenzayı dışlamaz (duyarlılık düşük). PCR endikasyonları: 1) Ağır hastalık/hospitalizasyon (antiviral tedavi kararı), 2) İmmünsüprese hastalar, 3) Epidemiyolojik sürveyans, 4) Outbreak araştırması, 5) Hızlı test negatif ama klinik şüphe yüksek. PCR (RT-PCR) altın standart (duyarlılık >95%, özgüllük >99%), alt tip ayrımı yapar (H1N1, H3N2).",
            keyPoints: [
                "<b>Hızlı Antijen Testi (RIDT):</b> Duyarlılık %50-70, özgüllük %90-95, 10-15 dakika sonuç.",
                "<b>Pozitif Sonuç:</b> Güvenilir (özgüllük yüksek), influenza tanısı konfirme.",
                "<b>Negatif Sonuç:</b> İnfluenzayı dışlamaz (duyarlılık düşük), yüksek klinik şüphede PCR yapılmalı.",
                "<b>PCR Endikasyonları:</b> Ağır hastalık, hospitalizasyon, immünsüpresyon, epidemiyolojik sürveyans, outbreak.",
                "<b>PCR Avantajları:</b> Duyarlılık >95%, alt tip ayrımı (H1N1, H3N2, influenza B lineage), antiviral direnç tespiti."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Test</th><th>Duyarlılık</th><th>Özgüllük</th><th>Süre</th><th>Kullanım</th></tr>
                    <tr><td><b>Hızlı Antijen (RIDT)</b></td><td>%50-70</td><td>%90-95</td><td>10-15 dk</td><td>Poliklinik, hızlı tarama</td></tr>
                    <tr><td><b>PCR (RT-PCR)</b></td><td>>%95</td><td>>%99</td><td>2-4 saat</td><td>Ağır hastalık, epidemiyoloji</td></tr>
                    <tr><td>Viral Kültür</td><td>%60-80</td><td>%100</td><td>3-10 gün</td><td>Sürveyans, antiviral direnç</td></tr>
                </table>
            `,
            alert: "RIDT negatif + ağır hastalık/hospitalizasyon varsa PCR yapılmalı ve antiviral tedavi başlanmalı (oseltamivir). Tedavi ilk 48 saat içinde en etkilidir.",
            relatedQuestions: [
                "<b>İnfluenza hızlı test hangi mekanizma ile çalışır?</b> → Doğru cevap: İmmünokromatografik lateral flow assay (influenza A/B nükleoprotein antijeni saptıyor)",
                "<b>İnfluenza tedavisi ne zaman başlanmalı?</b> → Doğru cevap: İlk 48 saat içinde en etkili (oseltamivir 75 mg 2x1, 5 gün), ağır hastalıkta >48 saat sonra da verilir",
                "<b>İnfluenza PCR hangi örneklerden yapılır?</b> → Doğru cevap: Nazofaringeal sürüntü (en iyi), nasal aspirat, bronkoalveoler lavaj (entübe hastalar)",
                "<b>İnfluenza alt tip tayini neden önemli?</b> → Doğru cevap: Epidemiyolojik sürveyans, pandemik potansiyel (H1N1pdm09), antiviral direnç (H1N1 oseltamivir direnci)"
            ]
        }
    },
    {
        id: 111,
        category: "Enfeksiyon Hastalıkları",
        topic: "Hepatit A Türkiye Seroprevalansı",
        question: "Türkiye'de Hepatit A seroprevalansı hangi yaş grubunda en yüksektir ve aşılama stratejisi nasıl olmalıdır?",
        correctAnswer: "Türkiye orta endemik bölge - >30 yaş %90-95 Anti-HAV IgG pozitif (doğal bağışıklık), <15 yaş duyarlı (hijyen iyileşmesi) - Aşılama: 2 doz (0, 6-12 ay), çocuklar + duyarlı yetişkinler (sağlık çalışanları, kronik karaciğer hastalığı).",
        details: {
            coreInfo: "Türkiye Hepatit A açısından orta endemik bölgedir. >30 yaş grupta %90-95 Anti-HAV IgG pozitif (doğal enfeksiyon geçirilmiş, bağışık). Hijyen koşullarının iyileşmesi ile <15 yaş grupta seroprevalans düştü (%30-50), bu grup duyarlı hale geldi. Paradoks: Çocuklukta HAV genelde asemptomatik, yetişkinlikte fulminan hepatit riski artar (%0.1-0.3). Aşılama stratejisi: 1) Çocuklar (18-24 ay), 2) Duyarlı yetişkinler (Anti-HAV IgG negatif), 3) Risk grupları (sağlık çalışanları, kronik karaciğer hastalığı, seyahat edenler). Aşı 2 doz (0, 6-12 ay), ömür boyu koruma.",
            keyPoints: [
                "<b>Türkiye:</b> Orta endemik bölge, >30 yaş %90-95 bağışık, <15 yaş duyarlı (hijyen iyileşmesi).",
                "<b>Epidemiyolojik Paradoks:</b> Çocuklukta asemptomatik, yetişkinlikte fulminan hepatit riski ↑.",
                "<b>Aşılama Stratejisi:</b> 2 doz (0, 6-12 ay), çocuklar (18-24 ay) + duyarlı yetişkinler + risk grupları.",
                "<b>Risk Grupları:</b> Sağlık çalışanları, kronik karaciğer hastalığı, endemik bölgeye seyahat, erkek homoseksüeller.",
                "<b>Anti-HAV IgG Tarama:</b> Aşılama öncesi >30 yaş tarama önerilir (çoğu bağışık, gereksiz aşı önlenir)."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Yaş Grubu</th><th>Anti-HAV IgG Pozitiflik</th><th>Strateji</th></tr>
                    <tr><td><b>>30 yaş</b></td><td>%90-95</td><td>Tarama + negatifse aşı</td></tr>
                    <tr><td>15-30 yaş</td><td>%50-70</td><td>Tarama + negatifse aşı</td></tr>
                    <tr><td><b><15 yaş</b></td><td>%30-50</td><td>Aşı (18-24 ay)</td></tr>
                </table>
            `,
            pitfalls: ">30 yaş grubunda aşılama öncesi Anti-HAV IgG taraması maliyet-etkin (çoğu bağışık). Kronik karaciğer hastalarında HAV aşısı mutlaka yapılmalı (fulminan hepatit riski çok yüksek).",
            relatedQuestions: [
                "<b>Hepatit A çocuklarda neden genelde asemptomatik?</b> → Doğru cevap: İmmün sistem daha az reaktif, hepatosit hasarı az, fulminan hepatit riski düşük",
                "<b>Fulminan Hepatit A riski hangi gruplarda yüksek?</b> → Doğru cevap: >50 yaş, kronik karaciğer hastalığı (HBV, HCV), immünsüpresyon",
                "<b>Hepatit A aşısı kaç doz?</b> → Doğru cevap: 2 doz (0, 6-12 ay), ömür boyu koruma (aşı sonrası Anti-HAV IgG kontrol gerekmez)",
                "<b>Post-exposure profilaksisi ne zaman verilir?</b> → Doğru cevap: Temastan sonra 2 hafta içinde HAV aşısı (veya immünoglobulin, >40 yaş/kronik karaciğer hastalığı)"
            ]
        }
    },
    {
        id: 112,
        category: "Enfeksiyon Hastalıkları",
        topic: "HIV Direnç Testi",
        question: "Antiretroviral tedavi (ART) alan bir HIV hastasında viral load baskılanmıyor. Hangi test yapılmalı ve ne zaman yapılmalıdır?",
        correctAnswer: "HIV genotipik direnç testi (genotypic resistance testing) - ART altında viral load >1000 kopya/mL ise yapılır - Reverse transkriptaz (RT), protease (PR), integrase (INI) genlerindeki mutasyonları saptıyor → direnç profili belirlenir, tedavi değişikliği yapılır.",
        details: {
            coreInfo: "HIV genotipik direnç testi reverse transkriptaz (RT), protease (PR), integrase (INI) genlerindeki mutasyonları sekansla saptıyor. ART başarısızlığında (viral load >1000 kopya/mL, 2 ölçümde) yapılır. Direnç mutasyonları: 1) NRTI direnci (M184V, K65R, TAMs), 2) NNRTI direnci (K103N, Y181C), 3) PI direnci (I50V, V82A), 4) INI direnci (N155H, Q148H). Fenotipik direnç testi (phenotypic resistance testing) pahalı, kompleks mutasyonlarda kullanılır. Direnç testi viral load >1000 kopya/mL olmalı (düşük viremide sekans başarısız). Tedavi değişikliği direnç profiline göre yapılır.",
            keyPoints: [
                "<b>Genotipik Direnç Testi:</b> RT, PR, INI genlerindeki mutasyonları sekansla saptıyor (altın standart).",
                "<b>Endikasyon:</b> ART başarısızlığı (viral load >1000 kopya/mL, 2 ölçümde), tedavi öncesi (transmitted resistance).",
                "<b>Direnç Mutasyonları:</b> M184V (3TC/FTC), K103N (NNRTI), I50V (PI), N155H (INI).",
                "<b>Timing:</b> Viral load >1000 kopya/mL olmalı (düşük viremide sekans başarısız), ART kesilmeden önce yapılmalı.",
                "<b>Fenotipik Test:</b> Pahalı, kompleks mutasyonlarda kullanılır (salvage therapy)."
            ],
            table: `
                <table class="info-table">
                    <tr><th>İlaç Sınıfı</th><th>Örnek Mutasyon</th><th>Etkilenen İlaçlar</th></tr>
                    <tr><td><b>NRTI</b></td><td>M184V, K65R, TAMs</td><td>3TC, FTC, TDF, ABC</td></tr>
                    <tr><td><b>NNRTI</b></td><td>K103N, Y181C</td><td>EFV, NVP, RPV</td></tr>
                    <tr><td><b>PI</b></td><td>I50V, V82A</td><td>ATV, DRV, LPV</td></tr>
                    <tr><td><b>INI</b></td><td>N155H, Q148H</td><td>RAL, EVG, DTG</td></tr>
                </table>
            `,
            alert: "Direnç testi ART kesilmeden önce yapılmalı (wild-type virüs baskın hale gelir, mutantlar saptanamaz). Transmitted resistance için tedavi öncesi test önerilir.",
            relatedQuestions: [
                "<b>M184V mutasyonu hangi ilaca direnç yapar?</b> → Doğru cevap: 3TC (lamivudin), FTC (emtricitabine), viral fitness azalır (tedavi avantajı)",
                "<b>K103N mutasyonu hangi ilaca direnç yapar?</b> → Doğru cevap: Efavirenz (EFV), nevirapine (NVP), 1. kuşak NNRTI",
                "<b>Fenotipik direnç testi ne zaman kullanılır?</b> → Doğru cevap: Kompleks mutasyon paterni, salvage therapy, genotipik test yorumu zor",
                "<b>Transmitted resistance ne demek?</b> → Doğru cevap: Dirençli virüs suşu bulaşması (tedavi öncesi direnç), prevalans %10-15 (Batı ülkeleri)"
            ]
        }
    },
    {
        id: 113,
        category: "Enfeksiyon Hastalıkları",
        topic: "İnfluenza Hızlı Test - Sınırlamalar",
        question: "İnfluenza sezonunda polikliniklerde kullanılan hızlı antijen testlerinin duyarlılığını etkileyen faktörler nelerdir?",
        correctAnswer: "Duyarlılık faktörleri: 1) Hastalık süresi (ilk 3 gün en yüksek, sonra viral yük↓), 2) Örnek kalitesi (nazofaringeal sürüntü > nasal sürüntü), 3) Yaş (çocuklarda daha yüksek, viral yük↑), 4) Virüs tipi (Influenza A > Influenza B), 5) Test kalitesi/marka.",
        details: {
            coreInfo: "İnfluenza hızlı antijen testi (RIDT) duyarlılığı %50-70, birçok faktörden etkilenir. En önemli faktörler: 1) Hastalık süresi: İlk 3 gün viral yük en yüksek (duyarlılık %70-80), >5 gün viral yük düşer (duyarlılık %30-40). 2) Örnek kalitesi: Nazofaringeal sürüntü > nasal sürüntü (daha fazla virüs). 3) Yaş: Çocuklarda viral yük daha yüksek (duyarlılık %70-80), yetişkinlerde daha düşük (duyarlılık %50-60). 4) Virüs tipi: Influenza A duyarlılığı daha yüksek, Influenza B daha düşük. 5) Test kalitesi: Marka/model arası fark var. Bu nedenle negatif sonuç influenzayı dışlamaz.",
            keyPoints: [
                "<b>Hastalık Süresi:</b> İlk 3 gün en yüksek duyarlılık (%70-80), >5 gün düşer (%30-40).",
                "<b>Örnek Kalitesi:</b> Nazofaringeal sürüntü > nasal sürüntü (daha fazla virüs, epitele yakın).",
                "<b>Yaş:</b> Çocuklarda duyarlılık daha yüksek (%70-80, viral yük↑), yetişkinlerde düşük (%50-60).",
                "<b>Virüs Tipi:</b> Influenza A duyarlılığı daha yüksek, Influenza B daha düşük.",
                "<b>Negatif Sonuç:</b> İnfluenzayı dışlamaz, klinik şüphe yüksekse PCR yapılmalı."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Faktör</th><th>Duyarlılık Artışı</th><th>Duyarlılık Azalışı</th></tr>
                    <tr><td><b>Hastalık Süresi</b></td><td>İlk 3 gün</td><td>>5 gün</td></tr>
                    <tr><td><b>Örnek Tipi</b></td><td>Nazofaringeal sürüntü</td><td>Nasal sürüntü</td></tr>
                    <tr><td><b>Yaş</b></td><td>Çocuklar (<5 yaş)</td><td>Yetişkinler (>65 yaş)</td></tr>
                    <tr><td><b>Virüs Tipi</b></td><td>Influenza A</td><td>Influenza B</td></tr>
                </table>
            `,
            pitfalls: "Grip sezonunda RIDT negatif + klinik şüphe yüksek = grip kabul edilerek tedavi başlanabilir (oseltamivir). PCR imkanı varsa mutlaka yapılmalı.",
            relatedQuestions: [
                "<b>Neden çocuklarda RIDT duyarlılığı daha yüksek?</b> → Doğru cevap: Viral yük daha yüksek (replikasyon daha hızlı, immün yanıt daha geç)",
                "<b>Neden ilk 3 gün duyarlılık en yüksek?</b> → Doğru cevap: Viral yük pik yapar (10^6-10^8 kopya/mL), 5. günden sonra viral yük düşer",
                "<b>Nazofaringeal sürüntü neden daha iyi?</b> → Doğru cevap: Nazofarinks epiteli influenza replikasyonunun ana yeri, daha fazla virüs",
                "<b>RIDT negatif ama klinik şüphe yüksek, ne yapılır?</b> → Doğru cevap: Grip kabul edilerek oseltamivir başlanır, PCR imkanı varsa yapılır (özellikle hospitalizasyon/ağır hastalık)"
            ]
        }
    },
    {
        id: 114,
        category: "Enfeksiyon Hastalıkları",
        topic: "Norovirüs Gastroenteriti",
        question: "Bir okulda salgın şeklinde akut gastroenterit (kusma, ishal, 24-48 saat süre) başvuruları oluyor. Hangi viral ajan düşünülmeli ve tanı nasıl konur?",
        correctAnswer: "Norovirüs (Norwalk virüsü) - Caliciviridae, fekal-oral/aerosol bulaş, toplu yaşam salgınları (okul, gemi, hastane), kısa inkübasyon (12-48 saat), şiddetli kusma + ishal 24-48 saat - Tanı: RT-PCR (dışkı), ELISA (duyarlılık düşük), klinik + epidemiyolojik veri yeterli.",
        details: {
            coreInfo: "Norovirüs (Caliciviridae) viral gastroenteritlerin en sık nedenidir (%50). Toplu yaşam salgınları (okul, kreş, gemi, hastane, huzurevi). Çok bulaşıcı (10-100 virion enfekte eder), fekal-oral + aerosol yolla (kusma aerosolu). İnkübasyon 12-48 saat, ani başlangıç, şiddetli kusma + ishal, karın krampları, 24-48 saat sürer, kendiliğinden iyileşir. Tanı: RT-PCR (dışkı, altın standart, duyarlılık %95), ELISA (duyarlılık %50-70, epidemiyolojik sürveyans), klinik + epidemiyolojik veri (salgın ortamında test gerekmeyebilir). Tedavi destekleyici (hidratasyon), antibiyotik gereksiz.",
            keyPoints: [
                "<b>Norovirüs:</b> Caliciviridae, viral gastroenteritlerin %50'si, toplu yaşam salgınları.",
                "<b>Bulaş:</b> Fekal-oral + aerosol (kusma aerosolu), 10-100 virion enfekte eder (çok bulaşıcı).",
                "<b>Klinik:</b> İnkübasyon 12-48 saat, ani başlangıç, şiddetli kusma + ishal, 24-48 saat süre.",
                "<b>Tanı:</b> RT-PCR (dışkı, altın standart), ELISA (epidemiyolojik sürveyans), klinik + epidemiyolojik veri.",
                "<b>Kontrol:</b> El hijyeni, kontamine yüzey temizliği (klor bazlı), hasta izolasyonu, gıda güvenliği."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Özellik</th><th>Norovirüs</th><th>Rotavirüs</th></tr>
                    <tr><td><b>Yaş</b></td><td>Tüm yaşlar</td><td>Özellikle <5 yaş</td></tr>
                    <tr><td><b>Klinik</b></td><td>Şiddetli kusma + ishal</td><td>Sulu ishal (kusma daha az)</td></tr>
                    <tr><td><b>Süre</b></td><td>24-48 saat</td><td>5-7 gün</td></tr>
                    <tr><td><b>Salgın</b></td><td>Toplu yaşam (okul, gemi)</td><td>Sporadik (kreş, çocuklar)</td></tr>
                </table>
            `,
            alert: "Norovirüs salgınlarında el hijyeni + klor bazlı dezenfektan kritiktir (alkol bazlı dezenfektanlar etkisizdir). Hasta izolasyonu 48 saat (semptomlar geçtikten sonra).",
            relatedQuestions: [
                "<b>Neden Norovirüs çok bulaşıcıdır?</b> → Doğru cevap: Çok düşük enfeksiyöz doz (10-100 virion), aerosol yolla da bulaşır, çevrede uzun süre canlı kalır",
                "<b>Norovirüs ile Rotavirüs nasıl ayırt edilir?</b> → Doğru cevap: Norovirüs tüm yaşlar + salgın + kusma ağır, Rotavirüs <5 yaş + sulu ishal + sporadik",
                "<b>Norovirüs dezenfeksiyonu nasıl yapılır?</b> → Doğru cevap: Klor bazlı dezenfektan (5000 ppm sodyum hipoklorit), alkol bazlı etkisizdir",
                "<b>Norovirüs aşısı var mı?</b> → Doğru cevap: Hayır, antijenik varyasyon çok fazla (GI, GII genotipleri), ömür boyu bağışıklık gelişmez"
            ]
        }
    },
    {
        id: 115,
        category: "Enfeksiyon Hastalıkları",
        topic: "Rotavirüs Aşılaması",
        question: "Türkiye'de Rotavirüs aşısı kaç doz ve hangi yaşlarda uygulanır? İnvaginasyon riski nedir?",
        correctAnswer: "Rotavirüs aşısı 2 veya 3 doz (RotaTeq 3 doz: 2, 4, 6 ay; Rotarix 2 doz: 2, 4 ay) - İlk doz 6-14 hafta, son doz <8 ay (invaginasyon riski azaltmak için) - İnvaginasyon riski çok düşük (1:20,000-1:100,000), ilk 7 gün içinde.",
        details: {
            coreInfo: "Rotavirüs aşısı oral canlı aşıdır. İki tip: 1) RotaTeq (5 valanlı, 3 doz: 2, 4, 6 ay), 2) Rotarix (1 valanlı, 2 doz: 2, 4 ay). İlk doz 6-14 hafta arası (erken başlama), son doz <8 ay (invaginasyon riski azaltmak için). İnvaginasyon riski çok düşük (1:20,000-1:100,000), ilk 7 gün içinde görülür. Benefit/risk oranı çok yüksek (Rotavirüs gastroenteriti %30-50 azalır, hospitalizasyon %85-96 azalır). Türkiye'de ulusal aşı takvimine 2019'da eklendi (Rotarix, 2 doz: 2, 4 ay).",
            keyPoints: [
                "<b>Rotavirüs Aşıları:</b> RotaTeq (3 doz: 2, 4, 6 ay), Rotarix (2 doz: 2, 4 ay), oral canlı aşı.",
                "<b>Timing:</b> İlk doz 6-14 hafta (erken başlama), son doz <8 ay (invaginasyon riski azaltmak için).",
                "<b>İnvaginasyon Riski:</b> 1:20,000-1:100,000, ilk 7 gün içinde, benefit/risk oranı çok yüksek.",
                "<b>Etkililik:</b> Rotavirüs gastroenteriti %30-50 azalır, hospitalizasyon %85-96 azalır.",
                "<b>Türkiye:</b> Ulusal aşı takviminde (2019), Rotarix, 2 doz: 2, 4 ay."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Aşı</th><th>Tip</th><th>Doz</th><th>Timing</th></tr>
                    <tr><td><b>Rotarix</b></td><td>1 valanlı (G1P[8])</td><td>2 doz</td><td>2, 4 ay</td></tr>
                    <tr><td><b>RotaTeq</b></td><td>5 valanlı (G1-G4, P[8])</td><td>3 doz</td><td>2, 4, 6 ay</td></tr>
                </table>
            `,
            alert: "İlk doz >15 hafta ise aşı başlanmaz (invaginasyon riski artar). İmmünyetmezlik (SCID) kontrendikedir (canlı aşı). Hafif ishal normaldir.",
            relatedQuestions: [
                "<b>İnvaginasyon neden ilk 7 gün içinde görülür?</b> → Doğru cevap: Canlı aşı bağırsak epiteline yerleşir, lenfoid hiperplazi → geçici intussusepsiyon riski",
                "<b>Rotavirüs aşısı neden <8 ayda tamamlanmalı?</b> → Doğru cevap: >8 ay invaginasyon riski artar (fizyolojik olarak da artar), aşı riski ekler",
                "<b>İmmünyetmezlikte (SCID) neden kontrendikedir?</b> → Doğru cevap: Canlı aşı, dissemine Rotavirüs enfeksiyonu riski (ağır gastroenterit, viremi)",
                "<b>Rotavirüs aşısı hangi genotipleri kapsar?</b> → Doğru cevap: RotaTeq G1-G4 + P[8], Rotarix G1P[8] (çapraz koruma G2, G3, G9, G12)"
            ]
        }
    },
    {
        id: 116,
        category: "Enfeksiyon Hastalıkları",
        topic: "RSV Palivizumab Profilaksisi",
        question: "Prematüre doğan bir bebeğe (28 haftalık, şu an 2 aylık) RSV profilaksisi için Palivizumab verilecek. Dozlama ve endikasyonlar nelerdir?",
        correctAnswer: "Palivizumab (Synagis): Monoklonal antikor (RSV F proteinine karşı), 15 mg/kg IM, ayda 1 kez, RSV sezonunda (Kasım-Mart, 5 doz) - Endikasyon: <29 haftalık prematüre (<12 ay), bronkopulmoner displazi/konjenital kalp hastalığı (<24 ay), immünyetmezlik.",
        details: {
            coreInfo: "Palivizumab (Synagis) humanize monoklonal antikordur, RSV F proteinine (füzyon proteini) bağlanarak virüs girişini bloke eder. Profilaktiktir (tedavi edici değil). Dozlama: 15 mg/kg IM, ayda 1 kez, RSV sezonunda (Kasım-Mart, toplam 5 doz). Endikasyonlar: 1) <29 haftalık prematüre (<12 ay), 2) 29-32 haftalık prematüre + risk faktörü (kreş, kardeş, tütün dumanı), 3) Bronkopulmoner displazi (<24 ay), 4) Hemodinamik anlamlı konjenital kalp hastalığı (<24 ay), 5) İmmünyetmezlik. RSV hospitalizasyon riskini %55 azaltır. Nirsevimab yeni uzun etkili monoklonal antikor (tek doz, tüm bebeklere).",
            keyPoints: [
                "<b>Palivizumab (Synagis):</b> Monoklonal antikor (RSV F proteini), 15 mg/kg IM ayda 1 kez, RSV sezonu (5 doz).",
                "<b>Endikasyonlar:</b> <29 hafta prematüre (<12 ay), BPD/KKH (<24 ay), immünyetmezlik.",
                "<b>RSV Sezonu:</b> Kasım-Mart (Türkiye), ayda 1 doz (5 doz toplam).",
                "<b>Etkililik:</b> Hospitalizasyon riski %55 azalır, mortalite %39 azalır.",
                "<b>Nirsevimab:</b> Yeni uzun etkili monoklonal antikor (tek doz, tüm bebekler), FDA onaylı (2023)."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Endikasyon</th><th>Yaş Sınırı</th><th>Ek Koşul</th></tr>
                    <tr><td><b><29 hafta prematüre</b></td><td><12 ay</td><td>-</td></tr>
                    <tr><td>29-32 hafta prematüre</td><td><12 ay</td><td>Risk faktörü (kreş, kardeş, tütün)</td></tr>
                    <tr><td><b>Bronkopulmoner displazi</b></td><td><24 ay</td><td>RSV sezonu içinde</td></tr>
                    <tr><td><b>Konjenital kalp hastalığı</b></td><td><24 ay</td><td>Hemodinamik anlamlı</td></tr>
                </table>
            `,
            alert: "Palivizumab pahalıdır (her doz ~2000-3000$), endikasyonlar sıkı takip edilmeli. Nirsevimab tek doz olduğu için maliyet-etkilidir (2023 FDA onayı).",
            relatedQuestions: [
                "<b>Palivizumab tedavi edici mi profilaktik mi?</b> → Doğru cevap: Profilaktik (önleyici), RSV enfeksiyonu tedavisinde etkisizdir",
                "<b>Nirsevimab ile Palivizumab farkı nedir?</b> → Doğru cevap: Nirsevimab uzun etkili (tek doz, tüm sezon), Palivizumab kısa etkili (ayda 1 doz, 5 doz)",
                "<b>RSV hospitalizasyon riski hangi bebeklerde en yüksek?</b> → Doğru cevap: <6 ay, prematüre, BPD, konjenital kalp hastalığı, immünyetmezlik",
                "<b>RSV aşısı var mı?</b> → Doğru cevap: Evet, yeni maternal aşı (RSVpreF, Pfizer) gebelere (32-36. hafta), bebek korunur (2023 FDA onayı)"
            ]
        }
    },
    {
        id: 117,
        category: "Enfeksiyon Hastalıkları",
        topic: "VZV Latent Enfeksiyon",
        question: "Varicella-Zoster virüsü (VZV) primer enfeksiyondan sonra hangi anatomik bölgede latent kalır ve reaktivasyonun tetikleyici faktörleri nelerdir?",
        correctAnswer: "VZV dorsal kök ganglionu (spinal) ve trigeminal ganglionda latent kalır - Reaktivasyon tetikleyicileri: İleri yaş (>50), immünsüpresyon (HIV, organ nakli, kemoterap), travma, stres, UV maruziyeti - Herpes zoster (zona) gelişir (dermatom boyunca veziküler döküntü).",
        details: {
            coreInfo: "VZV primer enfeksiyondan sonra (varisella = suçiçeği) dorsal kök ganglionu (spinal) ve trigeminal ganglionda latent kalır. Reaktivasyon tetikleyicileri: 1) İleri yaş (>50, hücresel bağışıklık↓), 2) İmmünsüpresyon (HIV, organ nakli, kemoterap, kortikosteroid), 3) Travma/cerrahi, 4) Stres, 5) UV maruziyeti. Herpes zoster (zona) gelişir: Dermatom boyunca ağrı + veziküler döküntü (unilateral). Post-herpetik nevralji (PHN) en sık komplikasyon (%10-20, >50 yaş). Tedavi: Antiviral (asiklovir, valasiklovir) ilk 72 saat içinde, PHN için gabapentin/pregabalin. Aşı: Zoster aşısı (Shingrix, rekombinan) >50 yaş önerilir.",
            keyPoints: [
                "<b>Latent Yerleşim:</b> Dorsal kök ganglionu (spinal) + trigeminal ganglion (kraniyal).",
                "<b>Reaktivasyon Tetikleyicileri:</b> İleri yaş (>50), immünsüpresyon, travma, stres, UV.",
                "<b>Herpes Zoster (Zona):</b> Dermatom boyunca ağrı + veziküler döküntü (unilateral), 2-4 hafta sürer.",
                "<b>Komplikasyonlar:</b> Post-herpetik nevralji (PHN, %10-20), oftalmik zoster (göz tutulumu), Ramsay-Hunt sendromu (fasiyal paralizi).",
                "<b>Aşı:</b> Zoster aşısı (Shingrix, rekombinan, 2 doz) >50 yaş, %90 koruma, PHN riskini azaltır."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Komplikasyon</th><th>Sıklık</th><th>Risk Faktörü</th></tr>
                    <tr><td><b>Post-herpetik nevralji (PHN)</b></td><td>%10-20</td><td>>50 yaş, şiddetli ağrı</td></tr>
                    <tr><td>Oftalmik zoster</td><td>%10-15</td><td>V1 dermatom (trigeminal)</td></tr>
                    <tr><td>Ramsay-Hunt sendromu</td><td>%2-3</td><td>Geniculat ganglion (fasiyal + işitme)</td></tr>
                    <tr><td>Dissemine zoster</td><td>Nadir</td><td>İmmünsüpresyon (HIV, kemoterap)</td></tr>
                </table>
            `,
            pitfalls: "Antiviral tedavi ilk 72 saat içinde başlanmalı (PHN riskini azaltır). Oftalmik zoster (V1 dermatom) göz muayenesi mutlaka yapılmalı (keratit, üveit riski).",
            relatedQuestions: [
                "<b>Post-herpetik nevralji (PHN) nedir?</b> → Doğru cevap: Zoster döküntüsü iyileştikten sonra >3 ay devam eden nöropatik ağrı (%10-20, >50 yaş)",
                "<b>Ramsay-Hunt sendromu nedir?</b> → Doğru cevap: VZV geniculat ganglion tutulumu → fasiyal paralizi + kulak vezikülleri + işitme kaybı",
                "<b>Oftalmik zoster neden önemli?</b> → Doğru cevap: V1 dermatom (göz + alın), keratit + üveit + retinit riski, görme kaybı olabilir",
                "<b>Zoster aşısı (Shingrix) neden canlı aşı değil?</b> → Doğru cevap: Rekombinan aşı (VZV gE proteini), immünsüprese hastalarda güvenli, %90 koruma"
            ]
        }
    },
    {
        id: 118,
        category: "Enfeksiyon Hastalıkları",
        topic: "Parvovirus B19 Aplastik Kriz",
        question: "Orak hücreli anemi hastasında ani hemoglobin düşüşü ve retikülosit sayısı %0 bulunuyor. Hangi viral enfeksiyon düşünülmeli ve tanı nasıl konur?",
        correctAnswer: "Parvovirus B19 aplastik krizi - B19 eritroid progenitör hücreleri (P antijeni) enfekte eder → geçici aplazi, retikülosit %0, hemoglobin düşüşü - Tanı: Parvovirus B19 IgM (akut enfeksiyon), PCR (DNA), kemik iliği (dev pronormoblastlar).",
        details: {
            coreInfo: "Parvovirus B19 eritroid progenitör hücreleri (P antijeni reseptör) enfekte eder, eritropoezi durdurur. Normal bireylerde fark edilmez (RBC ömrü 120 gün), kronik hemolitik anemilerde (orak hücre, sferositoz, talasemi) ciddi aplastik kriz yapar (RBC ömrü kısalmış, retikülosit %0 → ani Hb düşüşü). Tanı: Parvovirus B19 IgM (akut enfeksiyon), PCR (DNA, kemik iliği/serum), kemik iliği aspirasyonu (dev pronormoblastlar, inklüzyonlar). Tedavi: Destek (transfüzyon), IVIg (immünsüprese hastalarda). Klinik: Geçici aplastik kriz (7-10 gün), hidrops fetalis (gebelerde), erythema infectiosum (5. hastalık, çocuklarda).",
            keyPoints: [
                "<b>Parvovirus B19:</b> Eritroid progenitör hücreleri (P antijeni) enfekte eder, eritropoezi durdurur.",
                "<b>Aplastik Kriz:</b> Kronik hemolitik anemilerde (orak hücre, sferositoz), retikülosit %0 + Hb düşüşü.",
                "<b>Tanı:</b> Parvovirus B19 IgM (akut), PCR (DNA), kemik iliği (dev pronormoblastlar).",
                "<b>Klinik Formlar:</b> Aplastik kriz, hidrops fetalis (fetal anemi), erythema infectiosum (5. hastalık), kronik anemi (immünsüprese).",
                "<b>Tedavi:</b> Destek (transfüzyon), IVIg (immünsüprese/hidrops fetalis)."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Klinik Form</th><th>Hasta Grubu</th><th>Patofizyoloji</th></tr>
                    <tr><td><b>Aplastik Kriz</b></td><td>Kronik hemolitik anemi</td><td>Geçici eritroid aplazi</td></tr>
                    <tr><td>Hidrops Fetalis</td><td>Gebe (seronegative)</td><td>Fetal anemi (kalp yetmezliği)</td></tr>
                    <tr><td>Erythema Infectiosum</td><td>Çocuklar (sağlıklı)</td><td>'Tokat yanaklı' döküntü</td></tr>
                    <tr><td>Kronik Anemi</td><td>İmmünsüprese (HIV, ALL)</td><td>Persistan eritroid aplazi</td></tr>
                </table>
            `,
            alert: "Parvovirus B19 aplastik krizinde retikülosit %0 tipiktir (geçici eritropoez durması). Transfüzyon ile destek, 7-10 gün sonra spontan iyileşir.",
            relatedQuestions: [
                "<b>Neden Parvovirus B19 eritroid hücreleri hedefler?</b> → Doğru cevap: Eritroid progenitörler P antijeni (globozid) eksprese eder, B19 reseptörü",
                "<b>Hidrops fetalis neden gelişir?</b> → Doğru cevap: Fetal eritropoez durur, ciddi anemi → yüksek debi kalp yetmezliği → ödem (hidrops)",
                "<b>Erythema infectiosum (5. hastalık) nedir?</b> → Doğru cevap: Çocuklarda 'tokat yanaklı' döküntü + dantel benzeri rash (kollar), benign, kendiliğinden iyileşir",
                "<b>Parvovirus B19 immünsüprese hastalarda neden kronik anemi yapar?</b> → Doğru cevap: IgM cevabı yetersiz, virüs elimine edilemez, persistan eritroid aplazi"
            ]
        }
    },
    {
        id: 119,
        category: "Enfeksiyon Hastalıkları",
        topic: "Kızamık SSPE",
        question: "Geçmişte kızamık geçirmiş bir çocukta yıllar sonra progresif nörolojik gerileme (davranış değişiklikleri, myoklonik jerkler, demans) başlıyor. Hangi komplikasyon düşünülmeli ve tanı nasıl konur?",
        correctAnswer: "SSPE (Subakut sklerozan panensefalit) - Kızamık virüsünün geç nörolojik komplikasyonu (5-10 yıl sonra), mutant virüs (M proteini defektif) SSS'de persistan → progresif ensefalit - Tanı: BOS'ta yüksek kızamık IgG (oligoklonal bantlar), EEG (periyodik kompleksler), MR (beyaz cevher lezyonları).",
        details: {
            coreInfo: "SSPE (Subakut sklerozan panensefalit) kızamık virüsünün geç, ölümcül nörolojik komplikasyonudur. Kızamık enfeksiyonundan 5-10 yıl sonra (ortalama 7 yıl) gelişir. Risk: <2 yaş kızamık geçirmek (1:10,000), aşısızlık. Patofizyoloji: Mutant kızamık virüsü (M proteini defektif → viral maturasyon bozuk) SSS'de persistan enfeksiyon, progresif demiyelinizasyon. Klinik: Faz 1 (davranış değişiklikleri, öğrenme güçlüğü), Faz 2 (myoklonik jerkler, ataksi), Faz 3 (rijidite, demans), Faz 4 (vejetatif durum, ölüm). Tanı: BOS yüksek kızamık IgG + oligoklonal bantlar, EEG (periyodik kompleksler = Radermecker kompleksleri), MR (beyaz cevher lezyonları). Tedavi: Destekleyici (antiviral etkisizdir), isoprinosine + interferon alfa (sınırlı fayda).",
            keyPoints: [
                "<b>SSPE:</b> Kızamık virüsünün geç nörolojik komplikasyonu (5-10 yıl sonra), mutant virüs (M proteini defektif).",
                "<b>Risk:</b> <2 yaş kızamık geçirmek (1:10,000), aşısızlık.",
                "<b>Klinik:</b> Progresif ensefalit (4 faz), davranış değişiklikleri → myoklonik jerkler → rijidite → ölüm.",
                "<b>Tanı:</b> BOS yüksek kızamık IgG + oligoklonal bantlar, EEG (periyodik kompleksler), MR (beyaz cevher).",
                "<b>Prognoz:</b> Ölümcül (ortalama 1-3 yıl içinde), tedavi destekleyici."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Faz</th><th>Klinik</th><th>Süre</th></tr>
                    <tr><td><b>Faz 1</b></td><td>Davranış değişiklikleri, öğrenme güçlüğü</td><td>Aylar</td></tr>
                    <tr><td><b>Faz 2</b></td><td>Myoklonik jerkler, ataksi, nöbetler</td><td>Haftalar-aylar</td></tr>
                    <tr><td><b>Faz 3</b></td><td>Rijidite, ekstrapiramidal bulgular, demans</td><td>Aylar</td></tr>
                    <tr><td><b>Faz 4</b></td><td>Vejetatif durum, koma, ölüm</td><td>Aylar-yıllar</td></tr>
                </table>
            `,
            alert: "SSPE kızamık aşısı ile önlenebilir (aşılanan çocuklarda risk çok düşük). Kızamık enfeksiyonu <2 yaş risk faktörüdür (SSS'de viral persistan ↑).",
            relatedQuestions: [
                "<b>SSPE neden kızamık aşısı ile önlenebilir?</b> → Doğru cevap: SSPE wild-type virüs persistan enfeksiyonundan kaynaklanır, aşı suşu SSPE yapmaz",
                "<b>EEG'de periyodik kompleksler (Radermecker) ne anlama gelir?</b> → Doğru cevap: Yüksek amplitüdlü, periyodik slow wave kompleksleri (4-14 saniye aralık), SSPE için patognomonik",
                "<b>BOS'ta oligoklonal bantlar neden görülür?</b> → Doğru cevap: İntratekal kızamık IgG üretimi, BBB içinde persistan virüs",
                "<b>SSPE hangi yaş grubunda daha sık görülür?</b> → Doğru cevap: Erkek çocuklar (erkek:kız 2:1), ortalama 10-15 yaş (kızamık 2 yaşından önce geçiren)"
            ]
        }
    },
    {
        id: 120,
        category: "Enfeksiyon Hastalıkları",
        topic: "Zika Mikrosefali Mekanizması",
        question: "Gebelikte Zika virüsü enfeksiyonunun neden mikrosefali yaptığı düşünülüyor ve hangi trimesterde risk en yüksektir?",
        correctAnswer: "Zika nöral progenitör hücreleri enfekte eder → apoptoz + proliferasyon durması + nörogenez bozukluğu → mikrosefali - 1. trimester en yüksek risk (%70-80), kritik nörogenez dönemi - Tanı: Maternal/kordal Zika IgM + RT-PCR, fetal USG (mikrosefali).",
        details: {
            coreInfo: "Zika virüsü (Flaviviridae) nörotropik virüstür, nöral progenitör hücreleri enfekte eder. Mekanizma: 1) Viral replikasyon nöral progenitör hücrelerde, 2) Apoptoz indüksiyonu (programlı hücre ölümü), 3) Hücre proliferasyonu durur, 4) Nörogenez (nöron üretimi) bozulur → mikrosefali, kortikal atrofi, kalsifikasyonlar. 1. trimester en yüksek risk (%70-80, kritik nörogenez dönemi = 3-7. haftalar). 2-3. trimester risk daha düşük (%5-10). Klinik: Ciddi mikrosefali (baş çevresi <2 SD), ventriküler genişleme, subkortikal kalsifikasyonlar, oküler anomaliler. Tanı: Maternal/kordal Zika IgM + RT-PCR, fetal USG (mikrosefali, beyin anomalileri). Tedavi: Destekleyici (erken müdahale programları).",
            keyPoints: [
                "<b>Mekanizma:</b> Zika nöral progenitör hücreleri enfekte eder → apoptoz + proliferasyon durması → mikrosefali.",
                "<b>1. Trimester:</b> En yüksek risk (%70-80), kritik nörogenez dönemi (3-7. haftalar).",
                "<b>2-3. Trimester:</b> Risk düşük (%5-10), nörogenez tamamlanmış, ama büyüme etkilenebilir.",
                "<b>Klinik:</b> Ciddi mikrosefali, kortikal atrofi, ventriküler genişleme, subkortikal kalsifikasyonlar, oküler anomaliler.",
                "<b>Tanı:</b> Maternal/kordal Zika IgM + RT-PCR, fetal USG (mikrosefali), amniyosentez PCR (gerekirse)."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Trimester</th><th>Mikrosefali Riski</th><th>Patofizyoloji</th></tr>
                    <tr><td><b>1. Trimester</b></td><td>%70-80</td><td>Kritik nörogenez (3-7. hafta), nöral progenitör apoptoz</td></tr>
                    <tr><td>2. Trimester</td><td>%5-10</td><td>Nörogenez tamamlanmış, ama büyüme etkilenebilir</td></tr>
                    <tr><td>3. Trimester</td><td>%5-10</td><td>Beyin büyümesi etkilenebilir, mikrosefali daha az</td></tr>
                </table>
            `,
            pitfalls: "Zika enfeksiyonu gebelerde %80 asemptomatiktir ama fetal risk yüksek. Endemik bölgelerden dönen gebelerde test yapılmalı (IgM + PCR). Serolojide dengue ile çapraz reaksiyon olabilir.",
            relatedQuestions: [
                "<b>Zika ile dengue serolojik çapraz reaksiyonu neden oluşur?</b> → Doğru cevap: Her ikisi de Flaviviridae, benzer epitoplar, IgM/IgG çapraz reaksiyon verir (PRNT gerekir)",
                "<b>Zika mikrosefalisini prenatal nasıl saptıyoruz?</b> → Doğru cevap: Fetal USG (18-20. hafta sonrası), baş çevresi <2 SD, ventriküler genişleme, kalsifikasyonlar",
                "<b>Gebelikte Zika şüphesinde ne yapılır?</b> → Doğru cevap: IgM + RT-PCR (serum/idrar), seri USG (fetal mikrosefali takibi), amniyosentez PCR (gerekirse)",
                "<b>Zika virüsü cinsel yolla da bulaşır mı?</b> → Doğru cevap: Evet, semende uzun süre kalır (6 ay), cinsel temas ile bulaş (erkek → kadın/erkek), gebe eşi olan erkekler korunma kullanmalı"
            ]
        }
    },
    {
        id: 121,
        category: "Hastane Enfeksiyonları",
        topic: "Hastane Enfeksiyonu Kaynakları",
        question: "Yoğun bakımda gelişen hastane enfeksiyonlarının en sık kaynağı nedir ve önleme stratejileri nelerdir?",
        correctAnswer: "En sık kaynaklar: 1) Endojen flora (hasta kendi mikroorganizmaları, %40-60), 2) Çapraz bulaş (sağlık personeli elleri, %20-40), 3) Çevre (kontamine yüzeyler, cihazlar, %10-20) - Önleme: El hijyeni (en etkili), invaziv girişim minimizasyonu, antibiyotik stewardship, izolasyon.",
        details: {
            coreInfo: "Hastane enfeksiyonları (Healthcare-Associated Infections - HAI) yoğun bakımda en sık görülür. En önemli kaynaklar: 1) Endojen flora: Hastanın kendi mikroorganizmaları (deri, bağırsak, solunum yolu), invaziv girişimlerle translokasyon (%40-60). 2) Çapraz bulaş: Sağlık personeli elleri ile hastadan hastaya (%20-40, en önlenebilir). 3) Çevre: Kontamine yüzeyler, tıbbi cihazlar, su sistemi (%10-20). Önleme stratejileri: 1) El hijyeni (WHO 5 Moment), 2) İnvaziv girişim minimizasyonu (kateter, mekanik ventilasyon süresi↓), 3) Antibiyotik stewardship (direnç↓), 4) İzolasyon önlemleri (MRSA, VRE, CPE), 5) Çevre hijyeni (terminal temizlik).",
            keyPoints: [
                "<b>Endojen Flora (%40-60):</b> Hastanın kendi mikroorganizmaları, invaziv girişimlerle translokasyon.",
                "<b>Çapraz Bulaş (%20-40):</b> Sağlık personeli elleri ile hastadan hastaya (en önlenebilir).",
                "<b>Çevre (%10-20):</b> Kontamine yüzeyler, tıbbi cihazlar, su sistemi.",
                "<b>El Hijyeni:</b> WHO 5 Moment (hasta öncesi, aseptik girişim öncesi, vücut sıvısı teması sonrası, hasta sonrası, hasta çevresi sonrası).",
                "<b>Invaziv Girişim Minimizasyonu:</b> Kateter/ventilasyon süresi↓, günlük kateter gerekliliği değerlendirmesi."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Kaynak</th><th>Örnek</th><th>Önleme</th></tr>
                    <tr><td><b>Endojen Flora (%40-60)</b></td><td>Bağırsak florası → bakteriyemi</td><td>Antibiyo­tik stewardship, selektif dekontaminasyon</td></tr>
                    <tr><td><b>Çapraz Bulaş (%20-40)</b></td><td>Sağlık personeli eli → MRSA</td><td>El hijyeni, eldiven, izolasyon</td></tr>
                    <tr><td><b>Çevre (%10-20)</b></td><td>Ventilatör → VAP</td><td>Cihaz dezenfeksiyonu, su sistemi</td></tr>
                </table>
            `,
            alert: "El hijyeni hastane enfeksiyonlarını %30-50 azaltır (en etkili önleme yöntemi). WHO 5 Moment kuralına uyum kritiktir.",
            relatedQuestions: [
                "<b>WHO 5 Moment el hijyeni nedir?</b> → Doğru cevap: 1) Hasta öncesi, 2) Aseptik girişim öncesi, 3) Vücut sıvısı teması sonrası, 4) Hasta sonrası, 5) Hasta çevresi sonrası",
                "<b>Çapraz bulaş nasıl önlenir?</b> → Doğru cevap: El hijyeni, eldiven kullanımı, izolasyon önlemleri (MRSA, VRE, CPE için temas izolasyonu)",
                "<b>Antibiyotik stewardship neden önemli?</b> → Doğru cevap: Gereksiz antibiyotik kullanımını azaltır, direnç gelişimini önler, C. difficile riskini azaltır",
                "<b>İnvaziv girişim minimizasyonu nasıl yapılır?</b> → Doğru cevap: Günlük kateter/ventilasyon gerekliliği değerlendirmesi, erken ekstübasyon, kateter çıkarma protokolleri"
            ]
        }
    },
    {
        id: 122,
        category: "Klinik Bakteriyoloji",
        topic: "MRSA Prevalansı ve Risk Faktörleri",
        question: "Türkiye'de MRSA prevalansı ve MRSA enfeksiyonu için risk faktörleri nelerdir?",
        correctAnswer: "Türkiye'de MRSA prevalansı %30-40 (S. aureus izolatlarında) - Risk faktörleri: Önceki hospitalizasyon, antibiyotik kullanımı (özellikle sefalosporin/fluorokinolon), YBÜ yatışı, invaziv girişimler (kateter, mekanik ventilasyon), kronik hastalıklar (diyaliz, DM), kolonizasyon (burun).",
        details: {
            coreInfo: "MRSA (Metisiline dirençli Staphylococcus aureus) Türkiye'de S. aureus izolatlarının %30-40'ını oluşturur (Avrupa ortalaması %20-25, ABD %15-20). Risk faktörleri: 1) Önceki hospitalizasyon (son 6 ay), 2) Antibiyotik kullanımı (özellikle sefalosporin, fluorokinolon), 3) YBÜ yatışı (>48 saat), 4) İnvaziv girişimler (santral venöz kateter, mekanik ventilasyon, cerrahi), 5) Kronik hastalıklar (diyaliz, diyabet, kronik yara), 6) MRSA kolonizasyonu (burun, %20-30 sağlık çalışanlarında). MRSA enfeksiyonları: Bakteriyemi, pnömoni, deri/yumuşak doku enfeksiyonları, cerrahi alan enfeksiyonları. Tedavi: Vankomisin (IV), linezolid, daptomisin, teikoplanin.",
            keyPoints: [
                "<b>Türkiye Prevalansı:</b> %30-40 (S. aureus izolatlarında), yüksek endemik.",
                "<b>Risk Faktörleri:</b> Hospitalizasyon, antibiyotik kullanımı, YBÜ, invaziv girişimler, kronik hastalıklar.",
                "<b>Kolonizasyon:</b> Burun (%20-30), aksilla, perine, kronik yaralar.",
                "<b>Aktif Tarama:</b> Nasal sürüntü + PCR (YBÜ, diyaliz, cerrahi hastalarında).",
                "<b>Tedavi:</b> Vankomisin (MIC ≤1 mg/L), linezolid (pnömoni), daptomisin (bakteriyemi), teikoplanin."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Risk Faktörü</th><th>OR (Odds Ratio)</th><th>Önleme</th></tr>
                    <tr><td><b>Önceki hospitalizasyon</b></td><td>3-5</td><td>Aktif tarama, dekontaminasyon</td></tr>
                    <tr><td><b>Antibiyotik kullanımı</b></td><td>5-10</td><td>Stewardship, uygun antibiyotik</td></tr>
                    <tr><td><b>YBÜ yatışı</b></td><td>10-20</td><td>Aktif tarama, izolasyon</td></tr>
                    <tr><td><b>İnvaziv girişimler</b></td><td>5-10</td><td>Aseptik teknik, kateter minimizasyonu</td></tr>
                </table>
            `,
            pitfalls: "MRSA prevalansı yüksek olduğu için ampirik tedavide vankomisin eklenmesi düşünülmelidir (ağır enfeksiyon, sepsis, YBÜ). Vankomisine dirençli MRSA (VRSA) Türkiye'de çok nadir.",
            relatedQuestions: [
                "<b>MRSA tarama kültürü hangi hastalarda yapılır?</b> → Doğru cevap: YBÜ hastaları, diyaliz hastaları, cerrahi hastalar, kontakt izolasyonu hastaları (nasal sürüntü + PCR)",
                "<b>MRSA dekontaminasyonu nasıl yapılır?</b> → Doğru cevap: Mupirocin nasal pomad 2x1 (5 gün) + klorheksidin banyosu (5 gün), 3 gün sonra kontrol kültürü",
                "<b>Vankomisin MIC >2 mg/L ise ne yapılır?</b> → Doğru cevap: Vankomisin etkisiz, linezolid (pnömoni), daptomisin (bakteriyemi), teikoplanin veya tigesiklin",
                "<b>Türkiye'de MRSA prevalansı neden yüksek?</b> → Doğru cevap: Antibiyotik kullanımı yüksek, enfeksiyon kontrol yetersiz, aktif tarama sınırlı, YBÜ yoğunluğu fazla"
            ]
        }
    },
    {
        id: 123,
        category: "Enfeksiyon Hastalıkları",
        topic: "Batı Nil Virüsü Nöroinfeksiyonu",
        question: "Yaz aylarında ateş, baş ağrısı ve ense sertliği ile başvuran bir hastada BOS'ta lenfositik pleyositoz bulunuyor. Hangi arboviral enfeksiyon düşünülmeli ve tanı nasıl konur?",
        correctAnswer: "Batı Nil Virüsü (West Nile Virus - WNV) - Flaviviridae, Culex sivrisineği, yaz-sonbahar, asemptomatik (%80) veya nöroinfeksiyon (menenjit, ensefalit, AFP) - Tanı: WNV IgM (serum/BOS), PCR (erken dönem), paired serum IgG artışı.",
        details: {
            coreInfo: "Batı Nil Virüsü (WNV, Flaviviridae) Culex sivrisinekleri ile bulaşan arboviral enfeksiyondur. Yaz-sonbahar mevsimi (sivrisinek aktivitesi). Rezervuar: Kuşlar. Klinik: %80 asemptomatik, %20 West Nile ateşi (grip benzeri), <%1 nöroinfeksiyon (menenjit, ensefalit, akut flaksid paralizi - AFP). BOS: Lenfositik pleyositoz (100-500 hücre/mm³), protein ↑, glukoz normal. Tanı: WNV IgM (serum/BOS, 8. günden sonra pozitif, 6-12 ay kalır), WNV PCR (erken dönem, duyarlılık düşük), paired serum IgG artışı (4 kat↑). Tedavi: Destekleyici (antiviral yok), IVIg deneysel. Türkiye'de endemik (özellikle Ege, Akdeniz, Trakya).",
            keyPoints: [
                "<b>WNV:</b> Flaviviridae, Culex sivrisineği, yaz-sonbahar, kuşlar rezervuar.",
                "<b>Klinik:</b> %80 asemptomatik, %20 West Nile ateşi, <%1 nöroinfeksiyon (menenjit, ensefalit, AFP).",
                "<b>BOS:</b> Lenfositik pleyositoz (100-500), protein ↑, glukoz normal (viral menenjit).",
                "<b>Tanı:</b> WNV IgM (serum/BOS, 8. gün+), PCR (erken dönem, düşük duyarlılık), paired serum IgG.",
                "<b>AFP (Akut Flaksid Paralizi):</b> Poliomyelit benzeri, ön boynuz motor nöronlar, asimetrik paralizi."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Klinik Form</th><th>Sıklık</th><th>Bulgular</th></tr>
                    <tr><td>Asemptomatik</td><td>%80</td><td>-</td></tr>
                    <tr><td><b>West Nile Ateşi</b></td><td>%20</td><td>Ateş, baş ağrısı, miyalji, lenfadenopati, döküntü</td></tr>
                    <tr><td><b>Nöroinfeksiyon</b></td><td><%1</td><td>Menenjit, ensefalit, AFP (polio-like)</td></tr>
                </table>
            `,
            alert: "WNV nöroinfeksiyonu >60 yaş ve immünsüprese hastalarda daha sık görülür (%10-15 mortalite). AFP gelişirse prognozu daha kötüdür (kalıcı sekelli).",
            relatedQuestions: [
                "<b>WNV ile diğer arboviral enfeksiyonlar nasıl ayırt edilir?</b> → Doğru cevap: WNV nöroinfeksiyon + AFP sık, dengue hemorajik bulgular, Zika mikrosefali (gebe), chikungunya artralji",
                "<b>Akut flaksid paralizi (AFP) neden oluşur?</b> → Doğru cevap: WNV ön boynuz motor nöronları enfekte eder (poliomyelit benzeri), asimetrik paralizi, refleks kaybı",
                "<b>WNV IgM ne zaman pozitifleşir?</b> → Doğru cevap: 8. günden sonra (serum/BOS), 6-12 ay kalır, paired serum gerekebilir",
                "<b>WNV tanısında neden PCR düşük duyarlılık?</b> → Doğru cevap: Viremi kısa sürelidir (3-7 gün), nöroinfeksiyonda BOS'ta virüs düzeyi düşük, IgM daha güvenilir"
            ]
        }
    },
    {
        id: 124,
        category: "Klinik Bakteriyoloji",
        topic: "Antibiyotik Direnç Mekanizmaları",
        question: "Aşağıdaki 'antibiyotik-direnç mekanizması' eşleştirmelerinden hangisi yanlıştır?",
        correctAnswer: "Teikoplanin-PBP'de değişiklik (YANLIŞ)",
        details: {
            coreInfo: "Antibiyotik direnç mekanizmaları: 1) Enzim inaktivasyonu (beta-laktamaz), 2) Hedef değişikliği (PBP, ribozom, DNA giraz), 3) Eflüks pompası, 4) Geçirgenlik azalması. Teikoplanin glikopeptid antibiyotiktir, direnci PBP değişikliği ile DEĞİL, D-Ala-D-Ala → D-Ala-D-Laktat (VanA/VanB) veya D-Ala-D-Ser (VanC) değişikliği ile gelişir. PBP değişikliği beta-laktam direncine neden olur (MRSA, PRSP).",
            keyPoints: [
                "<b>Sefoperazon:</b> Beta-laktam → Beta-laktamaz enzimi ile inaktive edilir (DOĞRU).",
                "<b>Azitromisin:</b> Makrolid → 23S rRNA metilasyonu (ermB geni) ile direnç (DOĞRU).",
                "<b>Siprofloksasin:</b> Kinolon → DNA giraz (gyrA) ve topoizomeraz IV (parC) mutasyonu ile direnç (DOĞRU).",
                "<b>Doksisiklin:</b> Tetrasiklin → TetA/TetB eflüks pompası ile direnç (DOĞRU).",
                "<b>Teikoplanin:</b> Glikopeptid → D-Ala-D-Ala → D-Ala-D-Laktat değişikliği (VanA/VanB), PBP DEĞİL (YANLIŞ)."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Antibiyotik Sınıfı</th><th>Direnç Mekanizması</th><th>Örnek</th></tr>
                    <tr><td>Beta-laktamlar</td><td>Beta-laktamaz, PBP değişikliği</td><td>MRSA (mecA), ESBL</td></tr>
                    <tr><td>Glikopeptidler</td><td>D-Ala-D-Ala → D-Ala-D-Laktat/Ser</td><td>VRE (VanA/B/C)</td></tr>
                    <tr><td>Makrolidler</td><td>23S rRNA metilasyonu</td><td>ermB geni</td></tr>
                    <tr><td>Kinolonlar</td><td>DNA giraz/topoizomeraz mutasyonu</td><td>gyrA, parC</td></tr>
                    <tr><td>Tetrasiklinler</td><td>Eflüks pompası</td><td>TetA, TetB</td></tr>
                </table>
            `,
            alert: "Teikoplanin ve vankomisin glikopeptidlerdir. Dirençleri PBP değişikliği ile OLMAZ, peptidoglikan sentezindeki hedef (D-Ala-D-Ala) değişikliği ile gelişir.",
            relatedQuestions: [
                "<b>MRSA'da beta-laktam direnci neden?</b> → Doğru cevap: mecA geni → PBP2a üretimi (beta-laktamlara düşük afinite)",
                "<b>VanA ve VanB direnci farkı nedir?</b> → Doğru cevap: VanA hem vankomisin hem teikoplaine dirençli, VanB sadece vankomisine dirençli",
                "<b>MLSB direnci nedir?</b> → Doğru cevap: Makrolid-Linkozamid-Streptogramin B direnci, ermB geni (23S rRNA metilasyonu)",
                "<b>Kinolon direncinde qnr geni nedir?</b> → Doğru cevap: Plazmid kaynaklı, DNA giraz ve topoizomeraz IV'ü kinolonlardan korur"
            ]
        }
    },
    {
        id: 125,
        category: "Klinik Bakteriyoloji",
        topic: "Pnömokok Duyarlılık Testi",
        question: "Disk difüzyon testinde oksasiline orta duyarlı bulunan bir pnömokok izolatı için bir sonraki aşamada ne yapılmalıdır?",
        correctAnswer: "Penisilin MİK değerine bakılmalı ve sonuca göre rapor edilmelidir",
        details: {
            coreInfo: "Streptococcus pneumoniae'de oksasilin disk testi penisilin duyarlılığını taramak için kullanılır (1 μg disk). Zon çapı ≥20 mm = duyarlı (penisilin duyarlı rapor edilir), <20 mm = dirençli/orta duyarlı (penisilin MİK ölçümü GEREKLİDİR). Oksasilin testi sadece tarama testidir, kesin sonuç penisilin MİK'e göre verilir. Menenjit için kırılma değerleri daha düşüktür (MİK ≤0.06 duyarlı), menenjit dışı enfeksiyonlar için ≤2 mg/L duyarlı.",
            keyPoints: [
                "<b>Oksasilin Disk Testi:</b> 1 μg disk, zon ≥20 mm = duyarlı, <20 mm = MİK gerekli (tarama testi).",
                "<b>Penisilin MİK Kırılma Değerleri (EUCAST):</b> Menenjit dışı: ≤0.06 duyarlı, 0.125-2 orta, ≥4 dirençli. Menenjit: ≤0.06 duyarlı, ≥0.12 dirençli.",
                "<b>Neden MİK Gerekli?</b> Oksasilin testi taramadır, kesin sonuç penisilin MİK ile verilir. Orta duyarlılık menenjit dışı enfeksiyonlarda yüksek doz penisilin ile tedavi edilebilir.",
                "<b>Alternatif Test:</b> Sefotaksim/Seftriakson diskine bakılabilir, zon ≥34 mm ise penisilin duyarlı kabul edilir.",
                "<b>Menenjitte Dikkat:</b> Menenjit olgularında penisilin MİK ≤0.06 olmalı, aksi halde vankomisin + seftriakson önerilir."
            ],
            alert: "Oksasilin diski sadece TARAMA testidir. Orta duyarlı/dirençli sonuçlarda mutlaka penisilin MİK ölçülmeli. Oksasilin MİK ölçümü GEREKSİZDİR (oksasilin pnömokokta tedavide kullanılmaz).",
            relatedQuestions: [
                "<b>PRSP nedir?</b> → Doğru cevap: Penisiline Dirençli Streptococcus Pneumoniae, PBP mutasyonu ile gelişir (mecA geni YOK)",
                "<b>Pnömokokta beta-laktam direnci mekanizması?</b> → Doğru cevap: PBP'lerde (PBP1a, PBP2b, PBP2x) mutasyon, beta-laktamaz ÜRETİMİ YOK",
                "<b>Menenjitte penisilin dirençli pnömok tedavisi?</b> → Doğru cevap: Vankomisin + seftriakson (yüksek doz), rifampisin eklenebilir",
                "<b>Pnömokokta makrolid direnci nedir?</b> → Doğru cevap: ermB geni (MLSB direnci, 23S rRNA metilasyonu) veya mefA/mefE (eflüks pompası)"
            ]
        }
    },
    {
        id: 126,
        category: "Klinik Bakteriyoloji",
        topic: "MRSA İndüklenebilir Klindamisin Direnci (D-Test)",
        question: "Ekzeması olan 12 yaşında bir erkek çocuğun yanağında gelişen sekonder enfeksiyonda MRSA izole ediliyor. Disk difüzyon testinde eritromisin dirençli, klindamisin duyarlı, ancak D-test pozitif bulunuyor. Bu sonuç nasıl raporlanmalıdır?",
        correctAnswer: "İndüklenebilir klindamisin direnci vardır, klindamisin ciddi olmayan deri ve yumuşak doku enfeksiyonlarının kısa-süreli tedavisinde kullanılabilir.",
        details: {
            coreInfo: "D-test (Double Disk Diffusion Test) indüklenebilir klindamisin direncini saptamak için yapılır. Eritromisin (15 μg) ve klindamisin (2 μg) diskleri 15-26 mm aralıkta yerleştirilir. Eritromisin dirençli + klindamisin duyarlı izolatlarda yapılır. D-test pozitif = klindamisin zonunda eritromisine bakan tarafta düzleşme (D şekli) → indüklenebilir MLSB direnci (ermA/ermC geni). D-test negatif = yapısal klindamisin duyarlılığı. İndüklenebilir direnç uzun süreli tedavide klindamisin başarısızlığına neden olabilir, kısa süreli tedavide (deri enfeksiyonları) kullanılabilir.",
            keyPoints: [
                "<b>D-Test Pozitif:</b> İndüklenebilir MLSB direnci (ermA/ermC), klindamisin zonunda eritromisine bakan tarafta düzleşme (D şekli).",
                "<b>D-Test Negatif:</b> Yapısal klindamisin duyarlılığı, eritromisin direnci eflüks pompası (msrA) veya fosforilasyon (mphC) ile.",
                "<b>Raporlama:</b> D-test pozitif → Eritromisin ve klindamisin dirençli VEYA klindamisin kısa süreli tedavide (≤7 gün) deri enfeksiyonlarında kullanılabilir notu ile duyarlı.",
                "<b>CLSI Önerisi:</b> D-test pozitif izolatlarda klindamisin 'dirençli' rapor edilir (uzun süreli tedavide başarısızlık riski).",
                "<b>EUCAST Önerisi:</b> D-test pozitif izolatlarda klindamisin 'duyarlı' ama kısa süreli tedavide kullanılması önerilir notu ile."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Durum</th><th>Eritromisin</th><th>Klindamisin</th><th>D-Test</th><th>Mekanizma</th></tr>
                    <tr><td>Yapısal MLSB direnci</td><td>Dirençli</td><td>Dirençli</td><td>Yapılmaz</td><td>ermA/C (konstitütif)</td></tr>
                    <tr><td><b>İndüklenebilir MLSB</b></td><td>Dirençli</td><td>Duyarlı</td><td><b>Pozitif</b></td><td>ermA/C (indüklenebilir)</td></tr>
                    <tr><td>Eflüks direnci</td><td>Dirençli</td><td>Duyarlı</td><td>Negatif</td><td>msrA (eflüks pompası)</td></tr>
                    <tr><td>Duyarlı</td><td>Duyarlı</td><td>Duyarlı</td><td>Yapılmaz</td><td>-</td></tr>
                </table>
            `,
            alert: "D-test pozitif izolatlarda klindamisin UZUN süreli tedavide (>7 gün) başarısızlık riski yüksektir (seçici baskı altında ermB ekspresyonu artar). Kısa süreli tedavide (deri enfeksiyonları) kullanılabilir.",
            relatedQuestions: [
                "<b>D-test ne zaman yapılır?</b> → Doğru cevap: Stafilokok/streptokok izolatında eritromisin dirençli + klindamisin duyarlı bulunduğunda",
                "<b>MLSB direnci nedir?</b> → Doğru cevap: Makrolid-Linkozamid-Streptogramin B direnci, ermA/B/C geni (23S rRNA metilasyonu)",
                "<b>D-test negatif ne anlama gelir?</b> → Doğru cevap: Yapısal klindamisin duyarlılığı, eritromisin direnci eflüks pompası (msrA) ile, klindamisin güvenle kullanılabilir",
                "<b>Konstitütif vs indüklenebilir MLSB farkı?</b> → Doğru cevap: Konstitütif = sürekli ekspresyon (erm konstitütif), indüklenebilir = makrolid varlığında ekspresyon artar"
            ]
        }
    },
    {
        id: 127,
        category: "Klinik Bakteriyoloji",
        topic: "Enterokok Vankomisin Direnci (VanC)",
        question: "Enterekoklarda intrensek vankomisin direncine neden olan gen hangisidir?",
        correctAnswer: "VAN C",
        details: {
            coreInfo: "Enterekok vankomisin direnci 3 ana tipe ayrılır: VanA (yüksek direnç, vankomisin + teikoplanin), VanB (orta direnç, sadece vankomisin), VanC (düşük direnç, intrensek, sadece vankomisin). VanC direnci Enterococcus gallinarum ve E. casseliflavus'da doğal olarak bulunur (kromozomal gen, D-Ala-D-Ser oluşumu). VanA ve VanB plazmid kaynaklı, yatay geçişle yayılır, hasta izolasyonu gerektirir. VanC intrensek olduğu için izolasyon GEREKLİ DEĞİLDİR.",
            keyPoints: [
                "<b>VanA:</b> Plazmid kaynaklı, vankomisin + teikoplanin dirençli, yüksek direnç (MİK >256 mg/L), hasta izolasyonu GEREKLİDİR.",
                "<b>VanB:</b> Plazmid kaynaklı, sadece vankomisin dirençli, orta direnç (MİK 16-256 mg/L), hasta izolasyonu GEREKLİDİR.",
                "<b>VanC:</b> Kromozomal (intrensek), E. gallinarum ve E. casseliflavus, düşük direnç (MİK 2-32 mg/L), hasta izolasyonu GEREKSİZDİR.",
                "<b>Mekanizma:</b> VanA/VanB: D-Ala-D-Ala → D-Ala-D-Laktat, VanC: D-Ala-D-Ala → D-Ala-D-Ser.",
                "<b>Tedavi:</b> VanA/VanB dirençli enterokokta linezolid, daptomisin, tigesiklin kullanılır."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Direnç Tipi</th><th>Gen Lokasyonu</th><th>Vankomisin MİK</th><th>Teikoplanin</th><th>İzolasyon</th></tr>
                    <tr><td>VanA</td><td>Plazmid</td><td>>256 mg/L</td><td>Dirençli</td><td>Gerekli</td></tr>
                    <tr><td>VanB</td><td>Plazmid</td><td>16-256 mg/L</td><td>Duyarlı</td><td>Gerekli</td></tr>
                    <tr><td><b>VanC</b></td><td><b>Kromozomal</b></td><td>2-32 mg/L</td><td>Duyarlı</td><td><b>Gereksiz</b></td></tr>
                </table>
            `,
            alert: "E. gallinarum ve E. casseliflavus'da VanC direnci doğaldır (intrensek), yatay geçiş riski YOK, hasta izolasyonu GEREKSİZDİR. Yanlışlıkla VRE olarak tanımlanabilir, tür düzeyinde tanımlama önemlidir.",
            relatedQuestions: [
                "<b>VRE nedir?</b> → Doğru cevap: Vancomycin-Resistant Enterococcus, genelde E. faecium (VanA/VanB), E. faecalis'te daha nadir",
                "<b>VanA ve VanB farkı nedir?</b> → Doğru cevap: VanA hem vankomisin hem teikoplaine dirençli, VanB sadece vankomisine dirençli (teikoplanin duyarlı)",
                "<b>VRE tedavisinde kullanılan antibiyotikler?</b> → Doğru cevap: Linezolid (ilk seçenek), daptomisin (bakteriyemi), tigesiklin (komplike karın içi enfeksiyonlar)",
                "<b>VRE taraması hangi hastalar için yapılır?</b> → Doğru cevap: YBÜ hastaları, hematoloji-onkoloji, transplant hastaları, VRE teması olan hastalar"
            ]
        }
    },
    {
        id: 128,
        category: "Klinik Bakteriyoloji",
        topic: "Enterokok İntrinsik Dirençleri",
        question: "Enterokok türleri aşağıdakilerden hangisine intrinsik olarak dirençlidir?",
        correctAnswer: "Sefalosporinler",
        details: {
            coreInfo: "Enterokoklar doğal olarak (intrinsek) birçok antibiyotiğe dirençlidir: 1) Sefalosporinler (tüm kuşaklar, PBP5 düşük afinite), 2) Trimetoprim-sulfametoksazol, 3) Aminoglikozidler (düşük düzey direnç, hücre içi penetrasyon zayıf), 4) Klindamisin, 5) Kinolonlar (bazı türlerde). Sefalosporin direnci en önemli intrinsek dirençtir (PBP5 nedeniyle), sefalosp orinler enterokokal enfeksiyonlarda ETKİSİZDİR. Tedavi: Ampisilin (E. faecalis), vankomisin (E. faecium), linezolid (VRE).",
            keyPoints: [
                "<b>Sefalosporinler:</b> Tüm kuşaklar (1., 2., 3., 4., 5. kuşak) enterokoklara ETKİSİZDİR (PBP5 düşük afinite).",
                "<b>Aminoglikozidler:</b> Düşük düzey intrinsek direnç (hücre içi penetrasyon zayıf), yüksek doz sinerjik tedavi gerekir (ampisilin + gentamisin).",
                "<b>Trimetoprim-Sulfametoksazol:</b> İntrinsek direnç (folik asit sentezinde alternatif yollar).",
                "<b>Klindamisin:</b> İntrinsek direnç (ribozom yapısı nedeniyle).",
                "<b>Duyarlı Antibiyotikler:</b> Ampisilin (E. faecalis), vankomisin (VanA/B negatif), linezolid, daptomisin, tigesiklin."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Antibiyotik Sınıfı</th><th>Enterokokta Durum</th><th>Mekanizma</th></tr>
                    <tr><td><b>Sefalosporinler</b></td><td><b>İntrinsik Dirençli</b></td><td>PBP5 düşük afinite</td></tr>
                    <tr><td>Trimetoprim-SMX</td><td>İntrinsik Dirençli</td><td>Alternatif folik asit yolları</td></tr>
                    <tr><td>Aminoglikozidler</td><td>Düşük düzey direnç</td><td>Zayıf hücre içi penetrasyon</td></tr>
                    <tr><td>Klindamisin</td><td>İntrinsik Dirençli</td><td>Ribozom yapısı</td></tr>
                    <tr><td>Ampisilin</td><td>Duyarlı (E. faecalis)</td><td>-</td></tr>
                    <tr><td>Vankomisin</td><td>Duyarlı (VanC hariç)</td><td>-</td></tr>
                </table>
            `,
            alert: "Sefalosporinler enterokokal enfeksiyonlarda (endokardit, UTI, bakteriyemi) ETKİSİZDİR. Sefalosp orin kullanan hastalarda enterokokal süperenfeksiyon riski artar (seçici baskı).",
            relatedQuestions: [
                "<b>Enterokok endokarditi tedavisi nedir?</b> → Doğru cevap: Ampisilin + gentamisin (E. faecalis), vankomisin + gentamisin (E. faecium veya ampisilin dirençli)",
                "<b>Neden enterokoklarda aminoglikozid sinerjisi gerekir?</b> → Doğru cevap: Aminoglikozid hücre içi penetrasyonu zayıf, hücre duvarı aktif antibiyotik (ampisilin/vankomisin) ile sinerjik etki sağlar",
                "<b>E. faecalis vs E. faecium farkı nedir?</b> → Doğru cevap: E. faecalis ampisiline duyarlı (çoğunlukla), E. faecium ampisiline dirençli ve VanA/VanB riski yüksek",
                "<b>VRE tedavisinde linezolid neden tercih edilir?</b> → Doğru cevap: Bakteriyostatik ama oral kullanım mümkün, doku penetrasyonu iyi, trombo sitopeni ve nöropati riski (uzun süreli kullanımda)"
            ]
        }
    },
    {
        id: 129,
        category: "Klinik Bakteriyoloji",
        topic: "Shigella vs E. coli Ayrımı",
        question: "Gastroenterit yakınması ile başvuran hastanın gaita kültüründe EMB agarda laktoz negatif koloniler oluşturan bakterilerin TSİ agarda laktoz (-) ve H2S (-) olduğu, oksidaz (-), üreaz (-) ve hareketsiz olduğu saptanmıştır. Shigella türleri olabileceği düşünülerek yapılan aglütinasyon testleri ile herhangi bir tipe karşı aglütinasyon vermemiştir. Bu durumda hangi bakteri için ek test yapılması düşünülmelidir?",
        correctAnswer: "Escherichia coli (enteroinvaziv E. coli - EIEC)",
        details: {
            coreInfo: "Shigella ve enteroinvaziv E. coli (EIEC) biyokimyasal olarak çok benzerdir: Laktoz (-), H2S (-), oksidaz (-), üreaz (-), hareketsiz (genelde). Shigella aglütinasyonu negatif ise EIEC düşünülmelidir. EIEC, Shigella'nın virülans plazmidini (invazyon plazmidi - ipaH geni) taşıyan E. coli'dir. Tanı: Serotipleme (EIEC O antijenleri), PCR (ipaH, stx genleri), invazyon testi (HeLa hücre). EIEC Shigella gibi dizanteriye neden olur (kanlı ishal, mukus, ateş).",
            keyPoints: [
                "<b>EIEC (Enteroinvaziv E. coli):</b> Shigella'nın virülans plazmidini taşıyan E. coli, dizanteri yapar (kanlı ishal, mukus, ateş).",
                "<b>Biyokimyasal Benzerlik:</b> Laktoz (-), hareketsiz, H2S (-), oksidaz (-), üreaz (-), Shigella'dan ayırt etmek zor.",
                "<b>Fark:</b> EIEC laktoz fermentasyonu yavaş pozitif olabilir (48 saat), dekarboksilaz testlerinde farklılık (Shigella lizin dekarboksilaz negatif).",
                "<b>Tanı:</b> Serotipleme (EIEC O antijenleri: O124, O143, O144, O152, O164, O167), PCR (ipaH geni), invazyon testi.",
                "<b>Tedavi:</b> Genelde self-limiting, ağır olgularda siprofloksasin veya azitromisin."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Özellik</th><th>Shigella</th><th>EIEC</th><th>EHEC (O157:H7)</th></tr>
                    <tr><td>Laktoz</td><td>Negatif</td><td>Yavaş pozitif</td><td>Pozitif</td></tr>
                    <tr><td>Hareket</td><td>Hareketsiz</td><td>Hareketsiz</td><td>Hareketli</td></tr>
                    <tr><td>Sorbitol</td><td>Pozitif</td><td>Pozitif</td><td><b>Negatif</b></td></tr>
                    <tr><td>Klinik</td><td>Dizanteri (kanlı ishal)</td><td>Dizanteri</td><td>Hemorajik kolit</td></tr>
                    <tr><td>Virülans</td><td>ipaH (invazyon)</td><td>ipaH (invazyon)</td><td>stx (Shiga toksin)</td></tr>
                </table>
            `,
            alert: "Shigella serotipleme negatif + dizanteri klinik bulguları varsa EIEC düşünülmelidir. EIEC nadir görülür (%1-2 akut ishal), endemik bölgeler: Güneydoğu Asya, Latin Amerika.",
            relatedQuestions: [
                "<b>Shigella türleri nelerdir?</b> → Doğru cevap: S. dysenteriae (Grup A, en ağır, Shiga toksin), S. flexneri (Grup B), S. boydii (Grup C), S. sonnei (Grup D, en hafif, gelişmiş ülkelerde)",
                "<b>EIEC vs EHEC farkı nedir?</b> → Doğru cevap: EIEC invazyon yapar (dizanteri), EHEC toksin yapar (hemorajik kolit + HUS), EHEC sorbitol negatif",
                "<b>Shigella neden çok az inokulum ile hastalık yapar?</b> → Doğru cevap: Aside dirençli (mide asidini geçer), çok düşük inokulum yeterli (10-100 bakteri), kişiden kişiye kolay bulaş",
                "<b>EIEC hangi O antijenlerinde bulunur?</b> → Doğru cevap: O124, O143, O144, O152, O164, O167 (en sık O124)"
            ]
        }
    },
    {
        id: 130,
        category: "Klinik Bakteriyoloji",
        topic: "Haemophilus ducreyi (Şankroid)",
        question: "Glans penisinde kenarları düzensiz, çökük tabanlı, ağrılı ülserler bulunan 32 yaşındaki erkek hastanın on gün kadar önce paralı seks yapan bir kadın ile prezervatifsiz olarak cinsel ilişkide bulunduğu öğrenilmiş, lezyon tabanından alınan örnekten hazırlanan preparatlarda balık sürüsü halinde çok sayıda küçük gram negatif kokobasiller tespit edilmiştir. En muhtemel etken mikroorganizma aşağıdakilerden hangisidir?",
        correctAnswer: "Haemophilus ducreyi",
        details: {
            coreInfo: "Haemophilus ducreyi şankroid (yumuşak şankr, chancroid) etkenidir. Genital ülser (ağrılı, yumuşak, çökük tabanlı, düzensiz kenarlı, pürülan taban) + inguinal lenfadenopati (ağrılı, fluktuasyon, 'bubo'). Gram negatif kokobasil, 'balık sürüsü' (school of fish) veya 'parmak izi' dizilimi karakteristiktir. Kültür zor: Zenginleştirilmiş çikolata agar + vankomisin (Mueller-Hinton agar + 1-2% hemoglobin + IsoVitaleX + vankomisin), 33-35°C, 5-10% CO₂, 3-7 gün. Duyarlılık %75-80.",
            keyPoints: [
                "<b>Şankroid (Chancroid):</b> Genital ülser (ağrılı, yumuşak, pürülan) + inguinal bubo (ağrılı lenfadenopati, %50 olguda).",
                "<b>Gram Boyama:</b> Gram negatif kokobasil, 'balık sürüsü' (school of fish) veya 'parmak izi' dizilimi (%50-80 duyarlılık).",
                "<b>Kültür:</b> Mueller-Hinton agar + hemoglobin + IsoVitaleX + vankomisin, 33-35°C, 5-10% CO₂, 3-7 gün (%75-80 duyarlılık).",
                "<b>PCR:</b> H. ducreyi DNA saptama, kültürden daha duyarlı ama yaygın değil.",
                "<b>Tedavi:</b> Azitromisin 1 g tek doz (PO) veya seftriakson 250 mg tek doz (IM), bubo aspirasyonu (cerrahi drenaj kontrendike)."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Özellik</th><th>Şankroid (H. ducreyi)</th><th>Sifiliz (T. pallidum)</th><th>Herpes (HSV)</th></tr>
                    <tr><td>Ülser</td><td>Ağrılı, yumuşak, pürülan</td><td>Ağrısız, sert, temiz</td><td>Ağrılı, veziküler</td></tr>
                    <tr><td>Sayı</td><td>Çoğul (%50-60)</td><td>Genelde tek</td><td>Çoğul</td></tr>
                    <tr><td>Lenfadenopati</td><td>Ağrılı bubo (%50)</td><td>Ağrısız (%80)</td><td>Bilateral tender</td></tr>
                    <tr><td>Tanı</td><td>Gram boyama, kültür, PCR</td><td>Karanlık alan, RPR/VDRL</td><td>PCR, kültür, Tzanck</td></tr>
                </table>
            `,
            alert: "H. ducreyi kültürü zor ve uzun sürer (3-7 gün), duyarlılık %75-80. Negatif kültür şankroidi DIŞLAMAZ. Klinik tanı + Gram boyama + tedaviye yanıt önemlidir.",
            relatedQuestions: [
                "<b>Şankroid vs sifiliz farkı nedir?</b> → Doğru cevap: Şankroid ağrılı + yumuşak + pürülan + bubo, sifiliz ağrısız + sert + temiz taban + ağrısız lenfadenopati",
                "<b>Neden bubo cerrahi olarak drene edilmez?</b> → Doğru cevap: Cerrahi drenaj yara iyileşmesini geciktirir ve skar bırakır, aspirasyon (iğne ile) tercih edilir",
                "<b>H. ducreyi neden zor ürer?</b> → Doğru cevap: Fastidious organizma, X faktör (hemin) ve özel besin gereksinimleri var, kontaminasyon riski yüksek",
                "<b>Şankroid endemik bölgeler nerelerdir?</b> → Doğru cevap: Afrika (özellikle Doğu ve Güney), Güneydoğu Asya, Latin Amerika, gelişmiş ülkelerde nadir"
            ]
        }
    },
    {
        id: 131,
        category: "Klinik Bakteriyoloji",
        topic: "Acinetobacter baumannii",
        question: "Gram boyamada gram negatif kokobasil şeklinde izlenen, zorunlu aerop, oksidaz negatif, nonfermentatif, hareketsiz bakteri aşağıdakilerden hangisidir?",
        correctAnswer: "Acinetobacter baumannii",
        details: {
            coreInfo: "Acinetobacter baumannii gram negatif kokobasil (kok benzeri kısa basil), zorunlu aerop, oksidaz NEGATİF (diğer nonfermentatiflerden farkı), nonfermentatif, hareketsiz. Hastane enfeksiyonlarının önemli etkeni (VAP, kateter enfeksiyonları, bakteriyemi, yara enfeksiyonu). Çoklu antibiyotik direnci sık (karbapenem dirençli Acinetobacter - CRAB). Kuru ortamlarda uzun süre yaşar (plastik, metal yüzeylerde aylar boyu). MacConkey agarda ürer (laktoz negatif), kanlı agarda gri-beyaz koloniler.",
            keyPoints: [
                "<b>Morfoloji:</b> Gram negatif kokobasil (kok benzeri kısa basil), çift veya kısa zincirler halinde.",
                "<b>Biyokimya:</b> Zorunlu aerop, oksidaz NEGATİF (önemli!), nonfermentatif, hareketsiz, katalaz pozitif.",
                "<b>Klinik Önemi:</b> Hastane enfeksiyonları (VAP, kateter enfeksiyonları, bakteriyemi), YBÜ'de önemli patojen.",
                "<b>Direnç:</b> Çoklu antibiyotik direnci sık (CRAB - Carbapenem-Resistant A. baumannii), OXA-23, OXA-24, OXA-58 karbapenemazmalar.",
                "<b>Tedavi:</b> CRAB için: Kolistin + tigesiklin/ampisilin-sulbaktam/karbapenem kombinasyonu, yeni ajanlar: cefiderokol."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Özellik</th><th>A. baumannii</th><th>Pseudomonas aeruginosa</th><th>Stenotrophomonas maltophilia</th></tr>
                    <tr><td>Oksidaz</td><td><b>Negatif</b></td><td>Pozitif</td><td>Negatif</td></tr>
                    <tr><td>Hareket</td><td>Hareketsiz</td><td>Hareketli</td><td>Hareketli</td></tr>
                    <tr><td>Morfoloji</td><td>Kokobasil</td><td>İnce basil</td><td>İnce basil</td></tr>
                    <tr><td>Pigment</td><td>Yok</td><td>Piyosiyanin (mavi-yeşil)</td><td>Yok</td></tr>
                    <tr><td>Direnç</td><td>CRAB (karbapenem)</td><td>Çoklu direnç</td><td>TMP-SMX duyarlı</td></tr>
                </table>
            `,
            alert: "Acinetobacter oksidaz NEGATİFtir, diğer nonfermentatif gram negatif basiller (Pseudomonas, Stenotrophomonas, Burkholderia) genelde oksidaz POZİTİFtir. Bu önemli ayırıcı özelliktir.",
            relatedQuestions: [
                "<b>CRAB nedir?</b> → Doğru cevap: Carbapenem-Resistant Acinetobacter Baumannii, OXA karbapenemazmalar (OXA-23 en sık), metallo-beta-laktamazlar (NDM)",
                "<b>Acinetobacter neden hastanede sık görülür?</b> → Doğru cevap: Kuru yüzeylerde uzun süre yaşar (plastik, metal, aylar boyu), invaziv cihazlarda kolonize olur, sağlık çalışanlarının ellerinde taşınır",
                "<b>VAP (Ventilatör İlişkili Pnömoni) en sık etkenleri?</b> → Doğru cevap: Pseudomonas aeruginosa, Acinetobacter baumannii, MRSA, Klebsiella pneumoniae",
                "<b>Kolistin neden CRAB için kullanılır?</b> → Doğru cevap: Eski polimiksin antibiyotiği, CRAB için genelde duyarlı ama nefrotoksik ve nörotoksik, son seçenek"
            ]
        }
    },
    {
        id: 132,
        category: "Pre-Analitik",
        topic: "İdrar Kültürü Örnek Alma",
        question: "Güvenilir bir idrar kültürü sonucu almak için, idrar örneğinin alınması/gönderilmesi aşamaları için doğru uygulama aşağıdakilerden hangisidir?",
        correctAnswer: "Tak-çıkar tipi düz sonda ile direkt mesaneden örnek almak",
        details: {
            coreInfo: "İdrar kültüründe en güvenilir yöntem suprapubik aspirasyon (mesaneden direkt alım, steril) veya tak-çıkar tipi düz sonda ile direkt mesaneden alımdır (üretral florayı bypass eder). Sonda torbasından örnek almak ASLA uygun değildir (biyofilm, durgun idrar, kontaminasyon). Orta akım idrar (clean-catch midstream urine) en pratik yöntemdir ama kontaminasyon riski vardır. İdrar oda sıcaklığında >2 saat bekletilmemelidir (bakteriler çoğalır, yalancı pozitif), 4°C'de 24 saat saklanabilir.",
            keyPoints: [
                "<b>En İyi Yöntem:</b> Suprapubik aspirasyon (mesaneden direkt, steril) veya tak-çıkar tipi düz sonda (üretral florayı bypass eder).",
                "<b>Orta Akım İdrar:</b> En pratik yöntem, ama kontaminasyon riski var (perineal flora), genital bölge temizliği önemli (su + sabun, antiseptik KULLANILMAZ).",
                "<b>Sonda Torbası:</b> ASLA örnek alınmaz (biyofilm, durgun idrar, bakteriler çoğalır, yalancı pozitif).",
                "<b>Saklama:</b> Oda sıcaklığında <2 saat, 4°C'de 24 saat (oda sıcaklığında >4 saat bakteriler çoğalır, yalancı pozitif).",
                "<b>Antiseptik Kullanımı:</b> Genital temizlikte benzalkonyum KLORİD (antiseptik) numuneye karışırsa bakterileri öldürür (yalancı negatif), su + sabun tercih edilir."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Yöntem</th><th>Avantaj</th><th>Dezavantaj</th><th>Kullanım</th></tr>
                    <tr><td><b>Suprapubik Aspirasyon</b></td><td>En güvenilir, steril</td><td>İnvaziv, teknik gerektirir</td><td>Bebek, zor olgular</td></tr>
                    <tr><td><b>Tak-Çıkar Sonda</b></td><td>Güvenilir, üretral flora bypass</td><td>İnvaziv</td><td>Kateterli hasta, zor olgular</td></tr>
                    <tr><td>Orta Akım</td><td>Pratik, non-invaziv</td><td>Kontaminasyon riski</td><td>Rutin kullanım</td></tr>
                    <tr><td>Sonda Torbası</td><td>-</td><td><b>ASLA KULLANILMAZ</b></td><td>-</td></tr>
                </table>
            `,
            alert: "Mesanede >1 saat beklememiş idrar alınması gerekir (sabah ilk idrar en iyi). Antiseptik (benzalkonyum klorid) numuneye karışırsa yalancı negatif olur. İdrar oda sıcaklığında >4 saat bekletilirse bakteriler çoğalır (yalancı pozitif).",
            relatedQuestions: [
                "<b>İdrar kültüründe anlamlı koloni sayısı nedir?</b> → Doğru cevap: Orta akım: ≥10⁵ CFU/mL, suprapubik aspirasyon: her sayı, tak-çıkar sonda: ≥10³ CFU/mL",
                "<b>İdrar kültüründe 2-3 farklı bakteri üremesi ne anlama gelir?</b> → Doğru cevap: Kontaminasyon (genital/perineal flora), tek dominant bakteri yoksa yeni örnek istenir",
                "<b>Asemptomatik bakteriüri ne zaman tedavi edilir?</b> → Doğru cevap: Gebelik, üriner cerrahi öncesi, nötropeni, renal transplant (diğer durumlarda tedavi GEREKSİZ)",
                "<b>İdrar kültüründe en sık üreyen bakteriler?</b> → Doğru cevap: E. coli (%70-80), Klebsiella, Proteus, Enterococcus, Staphylococcus saprophyticus (genç kadınlarda)"
            ]
        }
    },
    {
        id: 133,
        category: "Klinik Bakteriyoloji",
        topic: "Streptococcus pneumoniae Beta-Laktamaz",
        question: "Hangi bakteri beta-laktamaz salgılamaz?",
        correctAnswer: "Streptococcus pneumoniae",
        details: {
            coreInfo: "Streptococcus pneumoniae beta-laktamaz ÜRETİMİ YAPMAZ. Penisilin direnci PBP (Penicillin-Binding Protein) mutasyonları ile gelişir (PBP1a, PBP2b, PBP2x), beta-laktamazlar yoktur. Bu nedenle PRSP (Penisiline Dirençli S. Pneumoniae) beta-laktamaz inhibitörlerine (klavulanik asit, sulbaktam, tazobaktam) cevap vermez. Diğer bakteriler (Staphylococcus, Haemophilus, Moraxella, Gram negatif basiller, Bacteroides) beta-laktamaz üretir.",
            keyPoints: [
                "<b>S. pneumoniae:</b> Beta-laktamaz ÜRETİMİ YOK, penisilin direnci PBP mutasyonları ile (PRSP).",
                "<b>Beta-Laktamaz Üreten Bakteriler:</b> Staphylococcus aureus (penisilinaz), Haemophilus influenzae (TEM-1, %20-40), Moraxella catarrhalis (%90), E. coli (ESBL, AmpC), Bacteroides fragilis.",
                "<b>PRSP Mekanizması:</b> PBP1a, PBP2b, PBP2x mutasyonları → beta-laktamlara düşük afinite, beta-laktamaz inhibitörleri ETKİSİZ.",
                "<b>Tedavi:</b> PRSP için: Yüksek doz amoksisilin (meningit dışı), menenjitte vankomisin + seftriakson, moksifoksasin.",
                "<b>Diğer Streptokoklar:</b> S. pyogenes (Grup A), S. agalactiae (Grup B) de beta-laktamaz ÜRETİMİ YAPMAZ, penisilin duyarlılığı korunmuştur."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Bakteri</th><th>Beta-Laktamaz</th><th>Direnç Mekanizması</th><th>Tedavi</th></tr>
                    <tr><td><b>S. pneumoniae</b></td><td><b>Yok</b></td><td>PBP mutasyonu</td><td>Yüksek doz amoksisilin</td></tr>
                    <tr><td>S. aureus</td><td>Penisilinaz (%90)</td><td>Beta-laktamaz</td><td>Amoksisilin-klavulanat, MRSA→vankomisin</td></tr>
                    <tr><td>H. influenzae</td><td>TEM-1 (%20-40)</td><td>Beta-laktamaz</td><td>Amoksisilin-klavulanat, seftriakson</td></tr>
                    <tr><td>M. catarrhalis</td><td>BRO-1/BRO-2 (%90)</td><td>Beta-laktamaz</td><td>Amoksisilin-klavulanat, makrolidler</td></tr>
                    <tr><td>E. coli</td><td>ESBL, AmpC</td><td>Beta-laktamaz</td><td>Karbapenemler (ESBL)</td></tr>
                </table>
            `,
            alert: "S. pneumoniae beta-laktamaz ÜRETİMİ YAPMAZ ama penisilin direnci olabilir (PRSP). Beta-laktamaz inhibitörleri (amoksisilin-klavulanat) PRSP'de AVANTAJ SAĞLAMAZ (PBP mutasyonu mekanizma).",
            relatedQuestions: [
                "<b>PRSP nedir?</b> → Doğru cevap: Penisiline Dirençli Streptococcus Pneumoniae, PBP mutasyonları ile (PBP1a, PBP2b, PBP2x), beta-laktamaz YOK",
                "<b>Neden beta-laktamaz inhibitörleri PRSP'de etkisiz?</b> → Doğru cevap: PRSP'de direnç PBP mutasyonları ile, beta-laktamaz yok, inhibitörler PBP mutasyonunu etkilemez",
                "<b>Hangi bakteriler her zaman beta-laktamaz üretir?</b> → Doğru cevap: Moraxella catarrhalis (%90), Klebsiella pneumoniae (kromozomal SHV-1), Bacteroides fragilis",
                "<b>MRSA'da mecA geni nedir?</b> → Doğru cevap: PBP2a (değişmiş PBP) üretir, tüm beta-laktamlara dirençli (oksasilin, metisilin), vankomisin/linezolid/daptomisin duyarlı"
            ]
        }
    },
    {
        id: 134,
        category: "Klinik Bakteriyoloji",
        topic: "Bakteriyel Menenjit Tedavisi",
        question: "İki haftalık bebekten BOS örneğinde yapılan gram boyamada kısa gram negatif basiller görülmüştür. Hastaya empirik tedavi amaçlı hangi antibiyotikler kullanılmalıdır?",
        correctAnswer: "Ampisilin + Seftriakson (veya Sefotaksim) + Gentamisin",
        details: {
            coreInfo: "Yenidoğan (<3 ay) menenjitinde empirik tedavi GBS (Grup B Streptokok), E. coli, Listeria monocytogenes'i kapsamalıdır. Gram negatif basil (kısa) Listeria veya E. coli olabilir. AMPİSİLİN + SEFTRİAKSON (veya sefotaksim) + GENTAMİSİN kombinasyonu uygundur. Ampisilin Listeria'yı kapsar (3. kuşak sefalosporinler ETKİSİZ), seftriakson E. coli + diğer Gram negatifler için, gentamisin sinerjist etki. >3 ay bebeklerde seftriakson + vankomisin (PRSP + pnömokok + menenjit).",
            keyPoints: [
                "<b>Yenidoğan Menenjit Etkenleri:</b> GBS (S. agalactiae, %40-50), E. coli (K1 antijeni, %20-30), Listeria monocytogenes (%5-10).",
                "<b>Empirik Tedavi (<3 ay):</b> Ampisilin + seftriakson (veya sefotaksim) + gentamisin (Listeria + Gram negatifler + GBS).",
                "<b>Neden Ampisilin?</b> Listeria monocytogenes 3. kuşak sefalosporinlere dirençli, ampisilin gerekli.",
                "<b>>3 Ay Bebek Menenjiti:</b> S. pneumoniae (PRSP riski) + N. meningitidis + H. influenzae → Seftriakson + vankomisin.",
                "<b>Listeria Özellikleri:</b> Gram pozitif basil, beta hemoliz, katalaz pozitif, motil (25°C'de tambur dövüşü), CAMP pozitif."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Yaş Grubu</th><th>Etkenler</th><th>Empirik Tedavi</th><th>Tedavi Süresi</th></tr>
                    <tr><td><b><3 Ay</b></td><td>GBS, E. coli, Listeria</td><td>Ampisilin + seftriakson + gentamisin</td><td>14-21 gün</td></tr>
                    <tr><td>3 ay - 18 yaş</td><td>S. pneumoniae, N. meningitidis, H. influenzae</td><td>Seftriakson + vankomisin</td><td>7-14 gün</td></tr>
                    <tr><td>18-50 yaş</td><td>S. pneumoniae, N. meningitidis</td><td>Seftriakson + vankomisin</td><td>10-14 gün</td></tr>
                    <tr><td>>50 yaş</td><td>S. pneumoniae, Listeria, Gram negatifler</td><td>Ampisilin + seftriakson + vankomisin</td><td>14-21 gün</td></tr>
                </table>
            `,
            alert: "Listeria monocytogenes 3. kuşak sefalosporinlere dirençlidir. Yenidoğan ve >50 yaş menenjitinde AMPİSİLİN mutlaka eklenmelidir. Seftazidim menenjitte KULLANILMAZ (BOS penetrasyonu zayıf).",
            relatedQuestions: [
                "<b>Neden seftazidim menenjitte kullanılmaz?</b> → Doğru cevap: BOS penetrasyonu zayıf, Gram pozitifler için etkisiz (pnömokok, menengokoklar), seftriakson/sefotaksim tercih edilir",
                "<b>Listeria neden E. coli ile karıştırılabilir?</b> → Doğru cevap: BOS Gram boyamada kısa basil (kokobasil benzeri), ama Gram POZİTİF (E. coli negatif), motil (25°C'de), CAMP test pozitif",
                "<b>GBS (Grup B Streptokok) neden yenidoğanda menenjit yapar?</b> → Doğru cevap: Anne vajinal florasında, doğum sırasında kolonizasyon, erken (ilk 7 gün) ve geç (7 gün-3 ay) hastalık",
                "<b>E. coli K1 antijeni nedir?</b> → Doğru cevap: Polisakkarit kapsül, N. meningitidis Grup B ile aynı yapı, menenjit riski artar, antifagositik"
            ]
        }
    },
    {
        id: 135,
        category: "Klinik Bakteriyoloji",
        topic: "Grup B Streptokok (GBS) Tanısı",
        question: "Hangi test ile doğum yapacak gebelerde grup B streptokok taraması yapılmalıdır?",
        correctAnswer: "Vaginal + rektal sürüntü kültürü (selektif Granada agarda)",
        details: {
            coreInfo: "Grup B Streptokok (GBS - Streptococcus agalactiae) yenidoğan enfeksiyonlarının önemli nedenidir (erken sepsis, menenjit, pnömoni). Tüm gebelere 35-37. gebelik haftalarında vaginal + rektal sürüntü kültürü yapılır. Selektif Granada agar (pigment: turuncu-kırmızı koloniler) veya LIM broth (selektif zenginleştirme ortamı) kullanılır. CAMP test, lateks aglütinasyon, PCR da kullanılabilir. Kültür pozitifse intrapartum penisilin G proflaksisi yapılır.",
            keyPoints: [
                "<b>GBS Taraması:</b> 35-37. gebelik haftası, vaginal + rektal sürüntü (en yüksek duyarlılık), selektif Granada agar veya LIM broth.",
                "<b>Granada Agar:</b> Selektif ortam, GBS turuncu-kırmızı pigment üretir (hemoliz aktivitesinden), diğer streptokoklar beyaz.",
                "<b>CAMP Test:</b> S. aureus beta-hemolizini artar (ok başı hemoliz), GBS tanısı (grup A negatif, grup B pozitif).",
                "<b>İntrapartum Proflaksi:</b> GBS pozitif gebelere doğum sırasında IV penisilin G (5 milyon ünite yükleme, sonra 2.5 milyon ünite her 4 saatte) veya ampisilin.",
                "<b>GBS Hastalık Formları:</b> Erken (ilk 7 gün: sepsis, pnömoni), geç (7 gün-3 ay: menenjit)."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Test</th><th>Kullanım</th><th>Avantaj</th><th>Dezavantaj</th></tr>
                    <tr><td>Granada Agar</td><td>Selektif kültür</td><td>Pigment (turuncu-kırmızı), hızlı (%24 saat)</td><td>Maliyet</td></tr>
                    <tr><td>LIM Broth</td><td>Zenginleştirme</td><td>Düşük koloni sayısında duyarlı</td><td>Uzun (18-24 saat)</td></tr>
                    <tr><td>CAMP Test</td><td>Konfirmasyon</td><td>Spesifik (ok başı hemoliz)</td><td>Zaman alıcı</td></tr>
                    <tr><td>Lateks Aglütinasyon</td><td>Hızlı tanı</td><td>Hızlı (5-10 dk)</td><td>Düşük duyarlılık</td></tr>
                    <tr><td>PCR (GBS-Xpert)</td><td>Hızlı moleküler</td><td>1 saat, yüksek duyarlılık</td><td>Pahalı</td></tr>
                </table>
            `,
            alert: "GBS taraması 35-37. gebelik haftasında yapılmalıdır (çok erken yapılırsa kolonizasyon durumu değişebilir). Tarama YALNIZCA vajinal + rektal sürüntü ile yapılır, idrar kültürü YETERLI DEĞİLDİR.",
            relatedQuestions: [
                "<b>Neden rektal + vaginal birlikte alınır?</b> → Doğru cevap: GBS gastrointestinal trakttan vajinaya geçer, yalnızca vajinal alım duyarlılığı düşürür, rektal + vajinal kombinasyon en yüksek duyarlılık",
                "<b>GBS erken vs geç hastalık farkı?</b> → Doğru cevap: Erken (ilk 7 gün): sepsis, pnömoni, vertikal geçiş; geç (7 gün-3 ay): menenjit, çevre kaynaklı",
                "<b>Penisilin alerjisi olan gebe için GBS proflaksisi?</b> → Doğru cevap: Hafif alerji → sefazolin, anafilaksi riski → klindamisin (eğer duyarlı), vankomisin (dirençli/bilinmiyor)",
                "<b>GBS neden beta hemolitik streptokoktur?</b> → Doğru cevap: Grup B Streptococcus agalactiae, beta hemoliz (tam hemoliz), CAMP pozitif, hipurat hidrolizi pozitif, basitrasin dirençli"
            ]
        }
    },
    {
        id: 136,
        category: "Pre-Analitik",
        topic: "Kan Kültürü Uygulamaları",
        question: "Hangi mikroorganizmanın kan kültüründe üremesi her zaman klinik öneme sahiptir?",
        correctAnswer: "Staphylococcus aureus",
        details: {
            coreInfo: "Staphylococcus aureus kan kültüründe üremesi HER ZAMAN KLİNİK ÖNEMDEDİR (bakteriyemi, endokardit, osteomiyelit, metastatik enfeksiyonlar). Kontaminasyon olarak yorumlanamaz. Koagülaz negatif stafilokoklar (S. epidermidis), Corynebacterium, Bacillus (B. anthracis hariç), Propionibacterium acnes genelde kontaminasyon olarak kabul edilir (tek şişede, tekrarlanmayan üreme). S. aureus, Streptococcus pneumoniae, E. coli, S. agalactiae kan kültüründe üremesi HER ZAMAN PATOJENDİR.",
            keyPoints: [
                "<b>Her Zaman Patojen:</b> S. aureus, S. pneumoniae, E. coli, Klebsiella, Pseudomonas, S. agalactiae (GBS), N. meningitidis, Candida.",
                "<b>Kontaminasyon Olabilir:</b> Koagülaz negatif stafilokoklar (S. epidermidis), Corynebacterium (difteroidi), Bacillus (B. anthracis hariç), Propionibacterium acnes.",
                "<b>Kontaminasyon Kriterleri:</b> Tek şişede üreme, farklı organizmaların aynı şişede üremesi, cilt florasına ait organizma, klinik bulgularla uyumsuz.",
                "<b>Kan Kültürü Sayısı:</b> 2-3 set (her set: 1 aerobik + 1 anaerobik şişe), farklı damarlardan, 15-30 dakika arayla.",
                "<b>S. aureus Bakteriyemisi:</b> Endokardit ekarte edilmeli (TEE), osteomiyelit, metastatik abseler (beyin, karaciğer, böbrek), en az 14 gün tedavi."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Organizma</th><th>Kan Kültüründe Anlam</th><th>Klinik Durum</th></tr>
                    <tr><td><b>S. aureus</b></td><td>Her zaman patojen</td><td>Bakteriyemi, endokardit, osteomiyelit</td></tr>
                    <tr><td>S. epidermidis</td><td>Genelde kontaminasyon</td><td>Protez kapak, kateter enfeksiyonu (tekrarlayan üreme)</td></tr>
                    <tr><td>S. pneumoniae</td><td>Her zaman patojen</td><td>Pnömoni, menenjit, bakteriyemi</td></tr>
                    <tr><td>E. coli</td><td>Her zaman patojen</td><td>İYE, intraabdominal enfeksiyon, sepsis</td></tr>
                    <tr><td>Corynebacterium</td><td>Genelde kontaminasyon</td><td>C. jeikeium (kateter enfeksiyonu, nadir)</td></tr>
                    <tr><td>Bacillus</td><td>Genelde kontaminasyon</td><td>B. anthracis (şarbon, PAT OJEN)</td></tr>
                </table>
            `,
            alert: "Koagülaz negatif stafilokok (CoNS) üremesi kontaminasyon olabilir AMA tekrarlayan üreme (≥2 şişede) veya protez kapak/kateter varlığında PATOJEN olarak kabul edilir. S. aureus bakteriyemisinde komplikasyon riski yüksek (endokardit %10-30).",
            relatedQuestions: [
                "<b>Kan kültürü kontaminasyon oranı ne olmalıdır?</b> → Doğru cevap: <%3 (ideal <2%), yüksek oran gereksiz antibiyotik kullanımı ve maliyete yol açar",
                "<b>Neden kan kültürü ateş piki sırasında alınmaz?</b> → Doğru cevap: Bakteriyemi süreklidir, ateş piki beklenmeden alınır (antibiyotik öncesi en önemli), ateş piki beklemek tanıyı geciktirir",
                "<b>Kan kültürü ne kadar bekletilir?</b> → Doğru cevap: 5-7 gün (rutin bakteriler 2-3 gün, mayalar 3-5 gün, HACEK grubu 7 gün, Brucella 21-30 gün)",
                "<b>S. aureus bakteriyemisinde tedavi süresi?</b> → Doğru cevap: Basit bakteriyemi (komplikasyonsuz): 14 gün, endokardit: 4-6 hafta, osteomiyelit: 4-6 hafta (veya daha uzun)"
            ]
        }
    },
    {
        id: 137,
        category: "Pre-Analitik",
        topic: "Vibrio cholerae Transport",
        question: "Hangi bakteri için dışkı örnekleri Cary-Blair transport ortamında taşınır?",
        correctAnswer: "Vibrio cholerae",
        details: {
            coreInfo: "Vibrio cholerae ve diğer Vibrio türleri (V. parahaemolyticus, V. vulnificus) Cary-Blair transport ortamında taşınır. Cary-Blair: Yarı-katı, pH yüksek (8.4), bakterilerin çoğalmasını engellerken canlılığını korur, 5 güne kadar oda sıcaklığında saklanabilir. Vibrio türleri aside duyarlıdır, bu nedenle yüksek pH koruyucudur. Kampylobakter de Cary-Blair'de taşınır. Shigella, Salmonella için de uygundur (ama Selenit-F broth veya GN broth zenginleştirme için kullanılır).",
            keyPoints: [
                "<b>Cary-Blair Transport Ortamı:</b> Yarı-katı, pH 8.4 (alkali), tuz içerir, bakteriler çoğalmaz ama canlı kalır, oda sıcaklığında 5 güne kadar.",
                "<b>Kullanım:</b> Vibrio cholerae, Campylobacter, Shigella, Salmonella, E. coli (enterik patojenler).",
                "<b>Vibrio Özellikleri:</b> Gram negatif, virgül şeklinde (curved rod), hareketli (tek polar flagel), oksidaz pozitif, alkalin pH'da ürer (TCBS agar, pH 8.6).",
                "<b>Kültür:</b> TCBS agar (Thiosulfate-Citrate-Bile salts-Sucrose agar): selektif, V. cholerae sarı koloniler (sukroz pozitif), V. parahaemolyticus yeşil (sukroz negatif).",
                "<b>Alternatif Transport:</b> Alkali peptonlu su (pH 8.5-9.0, zenginleştirme ortamı), 6-8 saat sonra TCBS agara ekim."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Transport Ortamı</th><th>Kullanım</th><th>Özellikler</th></tr>
                    <tr><td><b>Cary-Blair</b></td><td>Vibrio, Campylobacter, Shigella, Salmonella</td><td>Yarı-katı, pH 8.4, 5 gün oda sıcaklığı</td></tr>
                    <tr><td>Alkali Peptonlu Su</td><td>Vibrio (zenginleştirme)</td><td>pH 8.5-9.0, 6-8 saat inkübasyondan sonra ekim</td></tr>
                    <tr><td>Selenit-F Broth</td><td>Salmonella, Shigella (zenginleştirme)</td><td>Selektif, E. coli'yi baskılar</td></tr>
                    <tr><td>Amies Transport</td><td>Genel amaçlı (boğaz, yara)</td><td>Nötral pH, kömürlü veya kömürsüz</td></tr>
                </table>
            `,
            alert: "Vibrio cholerae aside duyarlıdır, bu nedenle Cary-Blair'in yüksek pH'sı (8.4) koruyucudur. Gaita örnekleri oda sıcaklığında 2 saatten uzun bekletilmemelidir (Vibrio hızla ölür), Cary-Blair kullanılmazsa direkt ekime yapılmalıdır.",
            relatedQuestions: [
                "<b>TCBS agar nedir?</b> → Doğru cevap: Thiosulfate-Citrate-Bile salts-Sucrose agar, selektif, pH 8.6, V. cholerae sarı (sukroz +), V. parahaemolyticus yeşil (sukroz -)",
                "<b>Vibrio cholerae O1 vs O139 farkı?</b> → Doğru cevap: O1: Klasik ve El Tor biyotipi, kolera pandemileri, O139: 1992'de Asya'da ortaya çıktı, O1 antikorlarına karşı çapraz koruma yok",
                "<b>Kolera'nın pirinç suyu ishal mekanizması?</b> → Doğru cevap: Kolera toksini (CTX) → adenilat siklaz aktivasyonu → cAMP artışı → intestinal sekresyon (elektrolit + su), günde 20 litre ishal",
                "<b>Vibrio vulnificus neden yüksek mortalite riski taşır?</b> → Doğru cevap: Primer septisemi (deniz ürünleri, yara teması), karaciğer hastalığı/immünsüpresyon risk faktörü, %50 mortalite, fulminant seyir"
            ]
        }
    },
    {
        id: 138,
        category: "Klinik Bakteriyoloji",
        topic: "PYR Testi (L-Pyrrolidonyl Arylamidase)",
        question: "Aşağıdaki bakterilerden hangisi PYR testi pozitiftir?",
        correctAnswer: "Streptococcus pyogenes (Grup A Streptokok)",
        details: {
            coreInfo: "PYR testi (L-Pyrrolidonyl Arylamidase) Grup A Streptokok (S. pyogenes) ve Enterococcus'ların ayırt edilmesinde kullanılır. PYR pozitif: S. pyogenes (Grup A), Enterococcus spp. PYR negatif: Grup B (S. agalactiae), Grup C, Grup G streptokoklar, S. pneumoniae, viridans streptokoklar. PYR testi beta hemolitik streptokokların grup tayininde hızlı yöntemdir (5-15 dakika). Grup A Streptokok: Beta hemoliz + PYR pozitif + basitrasin duyarlı.",
            keyPoints: [
                "<b>PYR Pozitif:</b> Grup A Streptokok (S. pyogenes), Enterococcus spp., nadir olarak bazı Aerococcus ve Leuconostoc.",
                "<b>PYR Negatif:</b> Grup B (S. agalactiae), Grup C, Grup G, S. pneumoniae, viridans streptokoklar.",
                "<b>Grup A Streptokok Tanısı:</b> Beta hemoliz + PYR pozitif + basitrasin duyarlı (A disk) + lateks aglütinasyon.",
                "<b>Enterococcus Tanısı:</b> PYR pozitif + %6.5 NaCl'de üreme + safra eskulin pozitif + 45°C'de üreme.",
                "<b>PYR Mekanizması:</b> L-pyrrolidonyl-beta-naphthylamide substratı hidrolize eder, kırmızı renk (cinnabar red) oluşur."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Organizma</th><th>PYR</th><th>Basitrasin</th><th>CAMP</th><th>Hipurat</th></tr>
                    <tr><td><b>Grup A (S. pyogenes)</b></td><td><b>Pozitif</b></td><td>Duyarlı</td><td>Negatif</td><td>Negatif</td></tr>
                    <tr><td>Grup B (S. agalactiae)</td><td>Negatif</td><td>Dirençli</td><td>Pozitif</td><td>Pozitif</td></tr>
                    <tr><td>Enterococcus</td><td><b>Pozitif</b></td><td>Dirençli</td><td>Negatif</td><td>Değişken</td></tr>
                    <tr><td>S. pneumoniae</td><td>Negatif</td><td>-</td><td>Negatif</td><td>Negatif</td></tr>
                </table>
            `,
            alert: "PYR testi Grup A Streptokok için %95 duyarlılık, %99 özgüllük sağlar. Enterococcus da PYR pozitif olduğundan Grup A'dan ayrımda hemoliz paterni (Grup A beta, Enterococcus alfa/gamma) ve basitrasin duyarlılığı önemlidir.",
            relatedQuestions: [
                "<b>Basitrasin duyarlılığı hangi grubu gösterir?</b> → Doğru cevap: Grup A Streptokok (S. pyogenes) basitrasin duyarlı (A disk, ≥10 mm), diğer beta hemolitik streptokoklar dirençli",
                "<b>CAMP test hangi bakteride pozitiftir?</b> → Doğru cevap: Grup B Streptokok (S. agalactiae), S. aureus beta-hemolizini artar (ok başı hemoliz), Listeria da pozitif",
                "<b>Grup A Streptokok neden farenjit yapar?</b> → Doğru cevap: M proteini (antifagositik, serotipleme), streptolisin O ve S (hemoliz), streptokinaz, hyaluronidaz, eritrojenik toksin (skarlatina)",
                "<b>Enterococcus vs Grup D streptokok farkı?</b> → Doğru cevap: Enterococcus (E. faecalis, E. faecium) %6.5 NaCl'de ürer + PYR pozitif, Grup D (S. bovis, S. equinus) %6.5 NaCl'de ÜREMEZ + PYR negatif"
            ]
        }
    },
    {
        id: 139,
        category: "Klinik Bakteriyoloji",
        topic: "Staphylococcus aureus Penisilin Direnci",
        question: "Staphylococcus aureus'un penisiline direncinin en yaygın nedeni aşağıdakilerden hangisidir?",
        correctAnswer: "Beta-laktamaz (penisilinaz) üretimi",
        details: {
            coreInfo: "S. aureus izolatlarının %90-95'i beta-laktamaz (penisilinaz) üretir. Penisilinaz penisilin G ve ampisilin gibi beta-laktam antibiyotikleri hidrolize eder (beta-laktam halkasını kırar). Beta-laktamaz üretimi plazmid aracılıdır (blaZ geni). Tedavi: Beta-laktamaz dirençli penisiliner (oksasilin, nafsilin, metisilin) veya beta-laktamaz inhibitör kombinasyonları (amoksisilin-klavulanat). MRSA (Metisilin Dirençli S. aureus) farklı mekanizma: mecA geni (PBP2a), tüm beta-laktamlara dirençli.",
            keyPoints: [
                "<b>Beta-Laktamaz (Penisilinaz):</b> S. aureus'un %90-95'i üretir, penisilin G ve ampisilin etkisiz, blaZ geni (plazmid).",
                "<b>Penisilinaz Dirençli Penisiliner:</b> Oksasilin, nafsilin, metisilin (penisilinaza dirençli), MSSA (Metisilin Duyarlı S. aureus) için tercih.",
                "<b>Beta-Laktamaz İnhibitörleri:</b> Amoksisilin-klavulanat, ampisilin-sulbaktam, penisilinazı inhibe eder, MSSA için etkili.",
                "<b>MRSA:</b> mecA geni → PBP2a (değişmiş PBP), TÜM beta-laktamlara dirençli, vankomisin/linezolid/daptomisin.",
                "<b>Penisilin Duyarlı S. aureus:</b> %5-10 (nadir), penisilin G tercih edilir (en dar spektrum)."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Direnç Mekanizması</th><th>Etkilenen Antibiyotik</th><th>Gen</th><th>Tedavi</th></tr>
                    <tr><td>Beta-laktamaz (penisilinaz)</td><td>Penisilin G, ampisilin</td><td>blaZ (plazmid)</td><td>Oksasilin, amoksisilin-klavulanat</td></tr>
                    <tr><td>mecA (PBP2a)</td><td><b>TÜM beta-laktamlar</b></td><td>mecA (kromozomal)</td><td>Vankomisin, linezolid, daptomisin</td></tr>
                    <tr><td>vanA (VRE)</td><td>Vankomisin, teikoplanin</td><td>vanA (plazmid)</td><td>Linezolid, daptomisin</td></tr>
                </table>
            `,
            alert: "MRSA'da mecA geni (PBP2a) tüm beta-laktamlara direnç sağlar, bu nedenle beta-laktamaz inhibitörleri (amoksisilin-klavulanat) MRSA'da ETKİSİZDİR. Oksasilin diski (1 µg) MRSA taraması için kullanılır (≤10 mm MRSA).",
            relatedQuestions: [
                "<b>mecA geni nedir?</b> → Doğru cevap: PBP2a (değişmiş Penicillin-Binding Protein) kodlar, tüm beta-laktamlara düşük afinite, MRSA'nın direnç mekanizması",
                "<b>MSSA vs MRSA tedavi farkı?</b> → Doğru cevap: MSSA → oksasilin/nafsilin (en iyi), amoksisilin-klavulanat; MRSA → vankomisin, linezolid, daptomisin",
                "<b>Neden penisilin duyarlı S. aureus nadir?</b> → Doğru cevap: Beta-laktamaz üretimi plazmid aracılı, hızla yayılır, %90-95 izolat dirençli, penisilin duyarlı izolat bulunursa tercih edilir (en dar spektrum)",
                "<b>CA-MRSA (Community-Acquired MRSA) neden önemli?</b> → Doğru cevap: Hastane dışı MRSA enfeksiyonları, SCCmec tip IV (daha küçük, mobil), PVL (Panton-Valentin Lökosidin) toksin, cilt enfeksiyonları, nekrotizan pnömoni"
            ]
        }
    },
    {
        id: 140,
        category: "Klinik Bakteriyoloji",
        topic: "Salmonella Osteomiyelit",
        question: "Orak hücreli anemi hastalarında osteomiyelite en sık neden olan bakteri aşağıdakilerden hangisidir?",
        correctAnswer: "Salmonella türleri (S. typhimurium, S. enteritidis)",
        details: {
            coreInfo: "Orak hücreli anemi hastalarında osteomiyelit en sık Salmonella türleri (S. typhimurium, S. enteritidis) ile görülür (%75). Normal popülasyonda Staphylococcus aureus en sık osteomiyelit etkenidir (%80-90). Orak hücreli anemide kemik infarktı → iskemi → bakteri tutulumu kolaylaşır, Salmonella bağırsaktan geçer (asemptomatik taşıyıcılık veya gastroenterit) → bakteriyemi → kemik tutulumu. Uzun kemikler (femur, tibia) en sık etkilenir. Tedavi: Siprofloksasin veya seftriakson (4-6 hafta).",
            keyPoints: [
                "<b>Orak Hücreli Anemi + Osteomiyelit:</b> Salmonella türleri en sık etken (%75), S. typhimurium, S. enteritidis.",
                "<b>Normal Popülasyon Osteomiyelit:</b> Staphylococcus aureus (%80-90), travma/cerrahi sonrası, hematojen yayılım.",
                "<b>Mekanizma:</b> Orak hücreli anemide kemik infarktı → iskemi → Salmonella tutulumu (bağırsak florasından bakteriyemi).",
                "<b>Klinik:</b> Kemik ağrısı, ateş, şişlik, uzun kemikler (femur, tibia), multifokal olabilir.",
                "<b>Tedavi:</b> Siprofloksasin (oral/IV) veya seftriakson (IV), 4-6 hafta, cerrahi debridman (gerekirse)."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Risk Faktörü/Durum</th><th>En Sık Etken</th><th>İkinci Etken</th></tr>
                    <tr><td><b>Orak Hücreli Anemi</b></td><td>Salmonella spp.</td><td>S. aureus</td></tr>
                    <tr><td>Normal Popülasyon (hematojen)</td><td>S. aureus</td><td>Koagülaz negatif stafilokoklar</td></tr>
                    <tr><td>İV İlaç Kullanıcısı</td><td>S. aureus (MRSA)</td><td>Candida, Pseudomonas</td></tr>
                    <tr><td>Protez Eklem</td><td>Koagülaz negatif stafilokoklar</td><td>S. aureus</td></tr>
                    <tr><td>Ayak Osteomiyeliti (Diyabet)</td><td>Polimikrobiyal (anaerop + aerop)</td><td>S. aureus, Streptococcus</td></tr>
                    <tr><td>Vertebral Osteomiyelit</td><td>S. aureus</td><td>E. coli, Brucella (endemik)</td></tr>
                </table>
            `,
            alert: "Orak hücreli anemi hastalarında ateş + kemik ağrısı → Salmonella osteomiyeliti akla gelmelidir. Kan kültürü + kemik biyopsisi kültürü önemlidir. Salmonella osteomiyeliti genelde multifokal olabilir (birden fazla kemik tutulumu).",
            relatedQuestions: [
                "<b>Neden orak hücreli anemide Salmonella osteomiyeliti sık?</b> → Doğru cevap: Kemik infarktı → iskemi → ölü kemik dokusu → bakteri tutulumu, RES fonksiyon bozukluğu (aspleni), Salmonella'nın intraselüler yaşama yeteneği",
                "<b>Salmonella typhi vs non-typhoidal Salmonella farkı?</b> → Doğru cevap: S. typhi: Tifo ateşi (enterik ateş), insan rezervuarı, kan kültürü pozitif; Non-typhoidal (S. typhimurium, S. enteritidis): Gastroenterit, hayvan rezervuarı, gaita kültürü pozitif",
                "<b>Osteomiyelit tanısında altın standart?</b> → Doğru cevap: Kemik biyopsisi + kültür (en doğru), kan kültürü (%50 pozitif), görüntüleme (MRG en duyarlı, Tc-99m kemik sintigrafisi)",
                "<b>Pseudomonas osteomiyeliti hangi durumda görülür?</b> → Doğru cevap: Penetran travma (çivi yaralanması), IV ilaç kullanıcıları, diyabetik ayak enfeksiyonu, tedavi: antipsödomonal beta-laktam (piperasilin-tazobaktam, meropenem)"
            ]
        }
    },
    {
        id: 141,
        category: "Klinik Bakteriyoloji",
        topic: "Panton-Valentin Lökosidin (PVL)",
        question: "Panton-Valentin Lökosidin (PVL) toksini hangi bakteride bulunur ve ne tür enfeksiyonlara neden olur?",
        correctAnswer: "Staphylococcus aureus (CA-MRSA), cilt enfeksiyonları ve nekrotizan pnömoni",
        details: {
            coreInfo: "Panton-Valentin Lökosidin (PVL) Staphylococcus aureus'un ürediği sitotoksik bir toksindir. PVL lökositleri (nötrofiller, makrofajlar) ve doku hücrelerini lize eder (por oluşturma). CA-MRSA (Community-Acquired MRSA) izolatlarında sıktır (%70-90), HA-MRSA'da nadir. PVL pozitif S. aureus: Rekürren cilt enfeksiyonları (furonkül, karbonkül, apse), nekrotizan pnömoni (yüksek mortalite, hemoptizi, kavitasyon), nekrotizan fasiit. lukS-PV ve lukF-PV genleri kodlar (lizogenik faj ile taşınır).",
            keyPoints: [
                "<b>PVL (Panton-Valentin Lökosidin):</b> S. aureus toksini, lökosit ve doku lizi (por oluşturma), lukS-PV + lukF-PV genleri.",
                "<b>CA-MRSA:</b> PVL pozitif (%70-90), cilt enfeksiyonları (furonkül, apse), nekrotizan pnömoni, genç/sağlıklı bireylerde.",
                "<b>Nekrotizan Pnömoni:</b> Grip sonrası, hemoptizi, yüksek ateş, kavitasyon, hızlı progresyon, mortalite %50-75.",
                "<b>Rekürren Cilt Enfeksiyonları:</b> Furonkül, karbonkül, selülit, aile bireyleri arasında yayılım (temas, hijyen).",
                "<b>Tedavi:</b> CA-MRSA için: Klindamisin (cilt enfeksiyonları), vankomisin/linezolid (ağır enfeksiyonlar), klindamisin PVL toksin üretimini azaltır."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Özellik</th><th>CA-MRSA (PVL+)</th><th>HA-MRSA</th></tr>
                    <tr><td>PVL Pozitiflik</td><td>%70-90</td><td>%5-10</td></tr>
                    <tr><td>SCCmec Tip</td><td>Tip IV (küçük, mobil)</td><td>Tip I, II, III (büyük)</td></tr>
                    <tr><td>Klinik</td><td>Cilt enfeksiyonları, nekrotizan pnömoni</td><td>Bakteriyemi, kateter enfeksiyonu</td></tr>
                    <tr><td>Popülasyon</td><td>Genç, sağlıklı</td><td>Yaşlı, komorbidite</td></tr>
                    <tr><td>Tedavi</td><td>Klindamisin (cilt), vankomisin (ağır)</td><td>Vankomisin, linezolid</td></tr>
                </table>
            `,
            alert: "PVL pozitif S. aureus nekrotizan pnömoni mortalitesi yüksektir (%50-75), grip sonrası görülür (influenza → epitel hasarı → S. aureus invazyon). Rekürren cilt enfeksiyonlarında aile bireyleri de taranmalı (burun kolonizasyonu, mupirocin eradikasyon).",
            relatedQuestions: [
                "<b>CA-MRSA vs HA-MRSA farkı nedir?</b> → Doğru cevap: CA-MRSA: PVL+, SCCmec IV, cilt enfeksiyonları, genç/sağlıklı; HA-MRSA: PVL-, SCCmec I/II/III, bakteriyemi/kateter, yaşlı/komorbid",
                "<b>Neden klindamisin PVL pozitif enfeksiyonlarda tercih edilir?</b> → Doğru cevap: Klindamisin toksin üretimini inhibe eder (protein sentezini durdurur), PVL toksin azalır, doku hasarı azalır, cilt enfeksiyonlarında oral kullanım",
                "<b>PVL toksini nasıl lize eder?</b> → Doğru cevap: Por oluşturan toksin (pore-forming toxin), hücre membranında delikler açar, hücre lizi, nötrofil ve makrofaj ölümü, apse oluşumu",
                "<b>S. aureus nekrotizan pnömoni risk faktörleri?</b> → Doğru cevap: Grip (influenza) sonrası, PVL pozitif izolat, genç yaş (<50), altta yatan akciğer hastalığı yok, hemoptizi + kavitasyon + hızlı progresyon"
            ]
        }
    },
    {
        id: 142,
        category: "Klinik Bakteriyoloji",
        topic: "Campylobacter jejuni Kültürü",
        question: "Campylobacter jejuni için kültür yaparken hangi koşullar sağlanmalıdır?",
        correctAnswer: "42°C, mikroaerofilik ortam (%5 O₂, %10 CO₂, %85 N₂), selektif agar",
        details: {
            coreInfo: "Campylobacter jejuni akut gastroenterit etkeni (gelişmiş ülkelerde en sık bakteriyel ishal nedeni). Kültür: 42°C inkübasyonda (termofilik), mikroaerofilik ortam (%5 O₂, %10 CO₂, %85 N₂), selektif agar (Campy-BAP, Skirrow agar, Butzler agar: vankomisin, polimiksin B, trimetoprim içerir). Gram negatif, ince, spiral/S-şeklinde basil, hareketli (tek polar flagel), oksidaz pozitif. Kültür 48-72 saat, koloniler gri-pembe, müköz, yayılan.",
            keyPoints: [
                "<b>Kültür Koşulları:</b> 42°C (termofilik), mikroaerofilik (%5 O₂, %10 CO₂, %85 N₂), selektif agar (Campy-BAP, Skirrow, Butzler).",
                "<b>Morfoloji:</b> Gram negatif, ince, spiral/S-şeklinde basil, 'seagull' (martı kanadı) görünümü, hareketli (tek polar flagel).",
                "<b>Biyokimya:</b> Oksidaz pozitif, katalaz pozitif, hipurat hidrolizi pozitif (C. jejuni), indoksil asetat pozitif.",
                "<b>Klinik:</b> Akut gastroenterit (kanlı ishal, karın ağrısı, ateş), inkübasyonda 2-5 gün, self-limiting (7-10 gün).",
                "<b>Komplikasyonlar:</b> Guillain-Barré Sendromu (GBS, %0.1, otoimmün nöropati), reaktif artrit, bakteriyemi (nadir)."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Özellik</th><th>C. jejuni</th><th>C. coli</th><th>C. fetus</th></tr>
                    <tr><td>42°C'de Üreme</td><td>Pozitif</td><td>Pozitif</td><td>Negatif (37°C)</td></tr>
                    <tr><td>Hipurat Hidrolizi</td><td><b>Pozitif</b></td><td>Negatif</td><td>Negatif</td></tr>
                    <tr><td>Klinik</td><td>Gastroenterit (en sık)</td><td>Gastroenterit</td><td>Bakteriyemi (immünsüpresyon)</td></tr>
                    <tr><td>Rezervuar</td><td>Tavuk, kanatlılar</td><td>Domuz</td><td>Koyun, sığır</td></tr>
                </table>
            `,
            alert: "Campylobacter kültürü 42°C'de yapılır (termofilitik), bu sıcaklık diğer bakterilerin üremesini engeller ama Campylobacter'i seçer. Gaita örnekleri Cary-Blair transport ortamında taşınmalıdır (alkali pH koruyucu).",
            relatedQuestions: [
                "<b>Neden Campylobacter'de mikroaerofilik ortam gerekir?</b> → Doğru cevap: Campylobacter zorunlu mikroaerofildir, yüksek O₂ toksik (oksidatif stres), düşük O₂ gerekli (%5), mikroaerobik jar veya gaz paketi (CampyGen) kullanılır",
                "<b>Guillain-Barré Sendromu (GBS) neden Campylobacter sonrası görülür?</b> → Doğru cevap: Moleküler mimikri (Campylobacter lipooligosakkarit ile periferik sinir gangliosidleri arasında çapraz reaksiyon), otoantikor üretimi, nöron hasarı",
                "<b>Campylobacter tedavisi ne zaman gerekir?</b> → Doğru cevap: Self-limiting (çoğunlukla tedavi gerekmez), ağır/uzamış ishal, immünsüpresyon, bakteriyemi → azitromisin veya siprofloksasin (direnç artar)",
                "<b>C. jejuni vs C. fetus farkı?</b> → Doğru cevap: C. jejuni: 42°C, gastroenterit, hipurat +; C. fetus: 37°C (42°C'de ÜREMEZ), bakteriyemi (immünsüprese hastalar), hipurat -"
            ]
        }
    },
    {
        id: 143,
        category: "Klinik Bakteriyoloji",
        topic: "Listeria monocytogenes Özellikleri",
        question: "Listeria monocytogenes'in tanısında kullanılan özellikler hangileridir?",
        correctAnswer: "Gram pozitif basil, motil (25°C'de tambur dövüşü), beta hemoliz, CAMP pozitif",
        details: {
            coreInfo: "Listeria monocytogenes gram pozitif basil, fakültatif intraselüler patojen. Özellikler: Beta hemoliz (dar hemoliz zonu), motil (25°C'de 'tambur dövüşü' motilitesi, 37°C'de hareketsiz), katalaz pozitif, CAMP test pozitif (S. aureus beta-hemolizini artar, Grup B Streptokok'tan farklı yön), kanlı agarda küçük gri-beyaz koloniler. Risk grupları: Yenidoğan (<3 ay), gebeler, >60 yaş, immünsüpresyon. Klinik: Menenjit, septisemi, gastroenterit (febrile gastroenterit). Tedavi: Ampisilin + gentamisin (sinerjist).",
            keyPoints: [
                "<b>Morfoloji:</b> Gram pozitif kısa basil (kokobasil benzeri), tekli veya kısa zincirler, katalaz pozitif, oksidaz negatif.",
                "<b>Motilite:</b> 25°C'de motil ('tambur dövüşü' end-over-end tumbling), 37°C'de hareketsiz (önemli ayırıcı özellik).",
                "<b>CAMP Test:</b> Pozitif (S. aureus beta-hemolizini artar, ok başı hemoliz), GBS'den farklı yön (GBS yatay, Listeria dikey).",
                "<b>Beta Hemoliz:</b> Dar hemoliz zonu, kanlı agarda küçük gri-beyaz koloniler (Streptococcus'tan küçük).",
                "<b>Tedavi:</b> Ampisilin + gentamisin (sinerjist etki), 3. kuşak sefalosporinler ETKİSİZ (menenjit tedavisinde ampisilin mutlaka eklenmeli)."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Test</th><th>Listeria monocytogenes</th><th>Grup B Streptokok</th><th>Corynebacterium</th></tr>
                    <tr><td>Gram Boyama</td><td>Pozitif basil</td><td>Pozitif kok (zincir)</td><td>Pozitif basil</td></tr>
                    <tr><td>Katalaz</td><td>Pozitif</td><td>Negatif</td><td>Pozitif</td></tr>
                    <tr><td>Motilite (25°C)</td><td><b>Pozitif (tambur)</b></td><td>Negatif</td><td>Negatif</td></tr>
                    <tr><td>CAMP Test</td><td>Pozitif (dikey)</td><td>Pozitif (yatay)</td><td>Negatif</td></tr>
                    <tr><td>Beta Hemoliz</td><td>Pozitif (dar)</td><td>Pozitif (geniş)</td><td>Negatif</td></tr>
                </table>
            `,
            alert: "Listeria monocytogenes 3. kuşak sefalosporinlere dirençlidir. Yenidoğan ve >50 yaş menenjitinde empirik tedaviye AMPİSİLİN mutlaka eklenmelidir. Listeriozis gıda kaynaklıdır (süt ürünleri, hazır etler, 4°C'de ÜREYEBİLİR).",
            relatedQuestions: [
                "<b>Neden Listeria 4°C'de ürer?</b> → Doğru cevap: Psikrotrof bakteri (soğukta üreme), buzdolabında saklanan gıdalarda çoğalır (hazır yemekler, peynir, süt), pastörizasyon öldürür ama soğuk zincir kesilirse risk",
                "<b>Listeria menenjiti hangi yaş gruplarında görülür?</b> → Doğru cevap: Yenidoğan (<3 ay), >60 yaş, gebeler (3. trimester), immünsüpresyon (kanser, transplant, kortikosteroid)",
                "<b>CAMP test pozitifliği ne anlama gelir?</b> → Doğru cevap: S. aureus beta-hemolizini artıran toksin üretimi, Listeria ve GBS CAMP pozitif (ama farklı yönlerde: GBS yatay, Listeria dikey)",
                "<b>Listeria'nın intraselüler yaşama mekanizması?</b> → Doğru cevap: Listeriozin O (hücre lizi), InlA/InlB (invazyon), ActA (aktin polimerizasyonu → hücre içi hareket), hücre-hücre yayılımı (fagosizomu kırar)"
            ]
        }
    },
    {
        id: 144,
        category: "Pre-Analitik",
        topic: "Suprapubik Aspirasyon",
        question: "Hangi idrar örneği alma yöntemi kontaminasyon riskini en aza indirir?",
        correctAnswer: "Suprapubik aspirasyon",
        details: {
            coreInfo: "Suprapubik aspirasyon mesaneden direkt iğne ile idrar alımıdır. Üretral ve genital florayı tamamen bypass eder, bu nedenden en güvenilir yöntemdir. Her koloni sayısı anlamlıdır (≥1 CFU/mL bile değerlendirilir). Özellikle bebeklerde ve zor olgularda tercih edilir. İnvaziv bir işlemdir (iğne ile mesaneye girme).",
            keyPoints: [
                "<b>Suprapubik Aspirasyon:</b> Mesaneden direkt iğne ile alım, steril yöntem, kontaminasyon riski YOK.",
                "<b>Anlamlı Koloni Sayısı:</b> Her sayı anlamlı (≥1 CFU/mL), üretral flora olmadığı için yalancı pozitif yok.",
                "<b>Kullanım Alanları:</b> Bebekler (<2 yaş), tekrarlayan kontaminasyon, zor olgular, araştırma çalışmaları.",
                "<b>Dezavantajlar:</b> İnvaziv (iğne ile girme), teknik gerektirir, hasta uyumu gerekli (mesane dolu olmalı).",
                "<b>Alternatif Yöntemler:</b> Tak-çıkar sonda (≥10³ CFU/mL), orta akım idrar (≥10⁵ CFU/mL), her ikisi de kontaminasyon riski taşır."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Yöntem</th><th>Anlamlı Koloni Sayısı</th><th>Kontaminasyon Riski</th><th>Kullanım</th></tr>
                    <tr><td><b>Suprapubik Aspirasyon</b></td><td>≥1 CFU/mL (Her sayı)</td><td>YOK</td><td>Bebek, zor olgular</td></tr>
                    <tr><td>Tak-Çıkar Sonda</td><td>≥10³ CFU/mL</td><td>Düşük</td><td>Kateterli hasta</td></tr>
                    <tr><td>Orta Akım</td><td>≥10⁵ CFU/mL</td><td>Yüksek (%30)</td><td>Rutin</td></tr>
                    <tr><td>Sonda Torbası</td><td>-</td><td><b>KULLANILMAZ</b></td><td>-</td></tr>
                </table>
            `,
            alert: "Suprapubik aspirasyon en güvenilir yöntem olmasına rağmen invaziv olduğu için rutin kullanılmaz. Ancak bebeklerde ve tekrarlayan kontaminasyon durumlarında altın standarttır.",
            relatedQuestions: [
                "<b>Neden orta akım idrarda kontaminasyon riski yüksek?</b> → Doğru cevap: Üretral ve genital florayı (S. epidermidis, Lactobacillus, Corynebacterium) tamamen önleyemez, %20-30 kontaminasyon riski",
                "<b>İdrar kültüründe 2-3 farklı bakteri üremesi ne anlama gelir?</b> → Doğru cevap: Kontaminasyon (genital/perineal flora), tek dominant bakteri yoksa yeni örnek istenir",
                "<b>Bebeklerde neden suprapubik aspirasyon tercih edilir?</b> → Doğru cevap: Orta akım idrar alamaz (küçük yaş), kontaminasyon riski çok yüksek, kesin tanı gerekli",
                "<b>Kateterli hastada idrar kültürü nasıl alınır?</b> → Doğru cevap: Sonda torbasından ASLA alınmaz, kateter değiştirilip yeni takılan kateterden veya kateter portunu dezenfekte edip iğne ile alınır"
            ]
        }
    },
    {
        id: 145,
        category: "Klinik Bakteriyoloji",
        topic: "Üretral Akıntı Tanısı",
        question: "Üretral akıntısı olan erkek hastada Gram boyama ve kültürde ne beklenir?",
        correctAnswer: "Gram negatif diplokoklar (Neisseria gonorrhoeae), Thayer-Martin agar",
        details: {
            coreInfo: "Erkeklerde pürin üretral akıntı (gonokok üretrit) Neisseria gonorrhoeae'nin tipik bulgusudur. Gram boyamada lökosit içinde gram negatif diplokoklar (kahve çekirdeği şeklinde), kültür için Thayer-Martin agar (çikolata agar + vankomisin, kolistin, nistatin - VCN antibiyotikler diğer bakterileri ve mayaları baskılar). 35-37°C, 5-10% CO₂, 24-48 saat. Oksidaz pozitif, katalaz pozitif. Kadınlarda duyarlılık daha düşük (%50-70), NAAT (PCR) tercih edilir.",
            keyPoints: [
                "<b>Gram Boyama:</b> Lökosit içinde gram negatif diplokoklar (kahve çekirdeği), erkeklerde %95 duyarlılık, kadınlarda %50-70.",
                "<b>Kültür:</b> Thayer-Martin agar (çikolata agar + VCN: vankomisin, kolistin, nistatin), 5-10% CO₂, 24-48 saat.",
                "<b>Tanı:</b> Oksidaz pozitif, katalaz pozitif, gram negatif diplokok, glikoz fermente eder (maltoz, laktoz, sukroz NEGATİF).",
                "<b>NAAT (PCR):</b> En duyarlı yöntem (%95-99), kültürden daha iyi, kadınlarda tercih edilir, direnc testi YAPILAMAZ.",
                "<b>Tedavi:</b> Seftriakson 500 mg IM tek doz + azitromisin 1 g PO tek doz (Chlamydia ko-enfeksiyonu %30-50)."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Özellik</th><th>N. gonorrhoeae</th><th>N. meningitidis</th><th>Moraxella catarrhalis</th></tr>
                    <tr><td>Morfoloji</td><td>Gram negatif diplokok</td><td>Gram negatif diplokok</td><td>Gram negatif diplokok</td></tr>
                    <tr><td>Oksidaz</td><td>Pozitif</td><td>Pozitif</td><td>Pozitif</td></tr>
                    <tr><td>Glikoz</td><td>Pozitif</td><td>Pozitif</td><td>Negatif</td></tr>
                    <tr><td>Maltoz</td><td><b>Negatif</b></td><td><b>Pozitif</b></td><td>Negatif</td></tr>
                    <tr><td>Klinik</td><td>Üretrit, servisit</td><td>Menenjit, septisemi</td><td>Otitis, sinüzit</td></tr>
                </table>
            `,
            alert: "N. gonorrhoeae çok hassas bakteridir (hava, sıcaklık değişikliği, kuruma), örnek alındıktan sonra 15-30 dakika içinde ekime yapılmalıdır. Gecikme olursa transport ortamı (Stuart, Amies) kullanılmalıdır.",
            relatedQuestions: [
                "<b>Neden N. gonorrhoeae kültürü zor?</b> → Doğru cevap: Fastidious organizma (까다로운, özel besin gerekir), CO₂ gereksinimi, kuramaya duyarlı, hızla ölür, transport ortamı şart",
                "<b>Thayer-Martin agar neden selektiftir?</b> → Doğru cevap: VCN antibiyotikler (vankomisin: Gram pozitif, kolistin: Gram negatif basiller, nistatin: mayalar) diğer organizmaları baskılar, yalnızca Neisseria ürer",
                "<b>N. gonorrhoeae vs N. meningitidis farkı?</b> → Doğru cevap: Maltoz fermentasyonu: gonokok NEGATİF, menenjit POZİTİF; klinik: gonorek genital, menenjit menenjit/septisemi",
                "<b>Neden Chlamydia ko-enfeksiyonu tedavi edilir?</b> → Doğru cevap: %30-50 hastalarda Chlamydia trachomatis birlikte bulunur, Chlamydia asemptomatik olabilir, PID/infertilite riski, seftriakson Chlamydia'ya ETKİSİZ"
            ]
        }
    },
    {
        id: 146,
        category: "Klinik Bakteriyoloji",
        topic: "Leuconostoc vs VRE Ayrımı",
        question: "Vankomisin dirençli Enterococcus (VRE) ile Leuconostoc ayrımında hangi test kullanılır?",
        correctAnswer: "PYR testi (VRE pozitif, Leuconostoc negatif)",
        details: {
            coreInfo: "Leuconostoc intrinsik vankomisin dirençli bir Gram pozitif koktur (laktik asit bakterisi, probiyotik). VRE ile karıştırılabilir çünkü ikisi de vankomisin dirençli. PYR testi ayırıcı tanıda kullanılır: VRE (Enterococcus) PYR POZİTİF, Leuconostoc PYR NEGATİF. Leuconostoc nadir enfeksiyon etkenidir (%0.5-1), genelde kateter enfeksiyonları, immünsüprese hastalarda bakteriyemi. Tedavi: Penisilin, ampisilin, linezolid (vankomisin ETKİSİZ).",
            keyPoints: [
                "<b>PYR Testi:</b> Enterococcus (VRE) pozitif, Leuconostoc negatif (ayırıcı test).",
                "<b>Intrinsik Direnç:</b> Leuconostoc'ta vankomisin direnci doğaldır (vanC benzeri mekanizma), VRE'de edinsel (vanA, vanB).",
                "<b>Gram Boyama:</b> Her ikisi de Gram pozitif kok, zincir oluşturur (Streptococcus benzeri).",
                "<b>Katalaz:</b> Her ikisi de negatif (Streptococcus gibi).",
                "<b>Tedavi:</b> Leuconostoc → penisilin/ampisilin duyarlı, VRE → linezolid/daptomisin."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Özellik</th><th>VRE (Enterococcus)</th><th>Leuconostoc</th><th>Pediococcus</th></tr>
                    <tr><td>PYR Test</td><td><b>Pozitif</b></td><td><b>Negatif</b></td><td>Negatif</td></tr>
                    <tr><td>Vankomisin</td><td>Dirençli (vanA/B)</td><td>Dirençli (intrinsik)</td><td>Dirençli (intrinsik)</td></tr>
                    <tr><td>LAP Test</td><td>Pozitif</td><td>Negatif</td><td>Pozitif</td></tr>
                    <tr><td>Morfoloji</td><td>Kok, zincir/çift</td><td>Kok, zincir</td><td>Tetrad (4'lü grup)</td></tr>
                    <tr><td>Klinik Önemi</td><td>Yüksek (nozokomiyal)</td><td>Düşük (nadir)</td><td>Düşük (nadir)</td></tr>
                </table>
            `,
            alert: "Leuconostoc nadir görülür ama intrinsik vankomisin direnci nedeniyle VRE ile karıştırılabilir. PYR negatifliği Leuconostoc'u gösterir. Klinik önemi düşüktür, genelde kontaminasyon olarak yorumlanır (ama kateter enfeksiyonları olabilir).",
            relatedQuestions: [
                "<b>VRE'de vanA vs vanB farkı nedir?</b> → Doğru cevap: vanA: Vankomisin + teikoplanin dirençli, plazmid aracılı, yüksek direnç; vanB: Vankomisin dirençli, teikoplanin DUYARLI, kromozomal/plazmid",
                "<b>LAP testi nedir?</b> → Doğru cevap: Leucine Aminopeptidase, Enterococcus ve Pediococcus pozitif, Leuconostoc negatif (PYR ile birlikte ayırıcı tanıda kullanılır)",
                "<b>Neden Leuconostoc intrinsik vankomisin dirençli?</b> → Doğru cevap: Peptidoglikan sentezinde D-Ala-D-Laktat kullanır (D-Ala-D-Ala yerine), vankomisin D-Ala-D-Ala'ya bağlanır ama D-Ala-D-Laktat'a bağlanamaz",
                "<b>Pediococcus neden tetrad oluşturur?</b> → Doğru cevap: Hücre bölünmesi iki düzlemde olur, 4'lü grup (tetrad) oluşur, Leuconostoc ve Enterococcus zincir/çift oluşturur"
            ]
        }
    },
    {
        id: 147,
        category: "Klinik Bakteriyoloji",
        topic: "Pasteurella multocida",
        question: "Köpek veya kedi ısırığı sonrası hızla gelişen sellülit etkeni?",
        correctAnswer: "Pasteurella multocida",
        details: {
            coreInfo: "Pasteurella multocida kedi ve köpek ağız florasında bulunur (%50-90 kedi, %25-50 köpek). Isırık veya tırmalama sonrası 24 saat içinde (genelde 6-12 saat) hızla gelişen sellülit, ödem, ağrı, eritema. Gram negatif kokobasil, oksidaz pozitif, katalaz pozitif, hareketsiz. Kanlı agarda gri-beyaz koloniler, müköz. Tedavi: Amoksisilin-klavulanat (birinci seçenek), doksisiklin (penisilin alerjisi). Komplikasyonlar: Osteomiyelit, septik artrit, tenosinovit, bakteriyemi (nadir).",
            keyPoints: [
                "<b>P. multocida:</b> Kedi/köpek ısırığı sonrası hızla gelişen sellülit (<24 saat, genelde 6-12 saat).",
                "<b>Morfoloji:</b> Gram negatif kokobasil (kok benzeri kısa basil), bipolar boyama (iki uçta koyu, ortada açık).",
                "<b>Biyokimya:</b> Oksidaz pozitif, katalaz pozitif, hareketsiz, indol pozitif, üreaz negatif.",
                "<b>Tedavi:</b> Amoksisilin-klavulanat (birinci seçenek), doksisiklin, seftriakson, penisilin alerjisi → doksisiklin/moksifoksasin.",
                "<b>Proflaksi:</b> Yüksek riskli ısırıklarda (derin, el, immünsüpresyon) amoksisilin-klavulanat 3-5 gün."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Isırık Etkeni</th><th>Bakteri</th><th>Klinik</th><th>Tedavi</th></tr>
                    <tr><td><b>Kedi/Köpek</b></td><td>P. multocida</td><td>Hızlı sellülit (6-12 saat)</td><td>Amoksisilin-klavulanat</td></tr>
                    <tr><td>İnsan</td><td>Eikenella corrodens</td><td>Yavaş sellülit (1-2 gün)</td><td>Amoksisilin-klavulanat</td></tr>
                    <tr><td>Sıçan</td><td>Streptobacillus moniliformis</td><td>Rat-bite fever (ateş, döküntü)</td><td>Penisilin G</td></tr>
                    <tr><td>Domuz</td><td>Streptococcus suis</td><td>Menenjit, septisemi</td><td>Penisilin G</td></tr>
                </table>
            `,
            alert: "P. multocida enfeksiyonu ÇOK HIZLI gelişir (6-12 saat), bu hızlı başlangıç tipiktir. Geç başlayan sellülit (>24 saat) S. aureus veya Streptococcus pyogenes olabilir. Kedi ısırıkları köpekten daha risklidir (daha derin, daha sık P. multocida).",
            relatedQuestions: [
                "<b>Neden kedi ısırığı daha riskli?</b> → Doğru cevap: Kedi dişleri daha ince ve sivri, daha derin penetrasyon, P. multocida taşıyıcılığı daha yüksek (%50-90 vs %25-50 köpek), enfeksiyon riski %30-50",
                "<b>Eikenella corrodens nedir?</b> → Doğru cevap: İnsan ısırığı etkeni (clenched fist injury - yumruk atma), anaerop, oksidaz pozitif, çukur koloniler (pit), penisilin duyarlı",
                "<b>P. multocida osteomiyeliti hangi durumlarda görülür?</b> → Doğru cevap: Derin ısırık, el kemikleri, immünsüpresyon, geç tedavi, kronik seyir (haftalar-aylar), cerrahi debridman gerekebilir",
                "<b>Rat-bite fever (Sıçan ısırık ateşi) neden farklıdır?</b> → Doğru cevap: Streptobacillus moniliformis, ısırıktan 3-10 gün sonra ateş + döküntü + artralji (Haverhill fever), Penisilin G tedavi"
            ]
        }
    },
    {
        id: 148,
        category: "Klinik Bakteriyoloji",
        topic: "Yenidoğan Menenjiti",
        question: "Yenidoğan menenjitinde en sık görülen üç etken hangisidir?",
        correctAnswer: "Grup B Streptokok (GBS), E. coli (K1), Listeria monocytogenes",
        details: {
            coreInfo: "Yenidoğan (<3 ay) menenjitinin en sık üç etkeni: GBS (S. agalactiae, %40-50), E. coli K1 antijeni (%20-30), Listeria monocytogenes (%5-10). Anne vajinal florasından vertikal geçiş (GBS, E. coli) veya çevre kaynaklı (Listeria gıda kaynaklı). Empirik tedavi: Ampisilin + seftriakson (veya sefotaksim) + gentamisin. Ampisilin Listeria için gerekli (3. kuşak sefalosporinler ETKİSİZ).",
            keyPoints: [
                "<b>En Sık Üç Etken:</b> GBS (%40-50), E. coli K1 (%20-30), Listeria (%5-10).",
                "<b>GBS (S. agalactiae):</b> Anne vajinal florasında, doğum sırasında kolonizasyon, erken (0-7 gün) ve geç (7 gün-3 ay) hastalık.",
                "<b>E. coli K1 Antijeni:</b> Polisakkarit kapsül, N. meningitidis Grup B ile aynı yapı, menenjit riski artar, antifagositik.",
                "<b>Listeria monocytogenes:</b> Gıda kaynaklı (süt ürünleri, hazır etler), 3. kuşak sefalosporinlere dirençli, ampisilin gerekli.",
                "<b>Empirik Tedavi:</b> Ampisilin + seftriakson + gentamisin (14-21 gün tedavi süresi)."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Yaş Grubu</th><th>Etkenler</th><th>Kaynak</th><th>Empirik Tedavi</th></tr>
                    <tr><td><b><3 Ay</b></td><td>GBS, E. coli K1, Listeria</td><td>Anne vajinal flora, gıda</td><td>Ampisilin + seftriakson + gentamisin</td></tr>
                    <tr><td>3 ay - 18 yaş</td><td>S. pneumoniae, N. meningitidis</td><td>Nazofaringeal flora</td><td>Seftriakson + vankomisin</td></tr>
                    <tr><td>18-50 yaş</td><td>S. pneumoniae, N. meningitidis</td><td>Nazofaringeal flora</td><td>Seftriakson + vankomisin</td></tr>
                    <tr><td>>50 yaş</td><td>S. pneumoniae, Listeria, Gram negatif</td><td>Çevre, gıda</td><td>Ampisilin + seftriakson + vankomisin</td></tr>
                </table>
            `,
            alert: "Yenidoğan menenjitinde AMPİSİLİN mutlaka eklenmelidir (Listeria için). 3. kuşak sefalosporinler Listeria'ya ETKİSİZDİR. GBS intrapartum proflaksisi (penisilin G) ile erken GBS hastalığı %80 azalmıştır.",
            relatedQuestions: [
                "<b>Neden E. coli K1 antijeni menenjit riskini artar?</b> → Doğru cevap: K1 kapsülü antifagositik, kan-beyin bariyerini geçer, N. meningitidis Grup B ile aynı yapı (alfa-2,8-polisialik asit), otoantikor üretimi zayıf",
                "<b>GBS erken vs geç hastalık farkı?</b> → Doğru cevap: Erken (0-7 gün): Sepsis, pnömoni, vertikal geçiş (anne vajinal flora); Geç (7 gün-3 ay): Menenjit, çevre kaynaklı (anne veya başkaları)",
                "<b>Neden gentamisin yenidoğan menenjitinde eklenir?</b> → Doğru cevap: Ampisilin ile sinerjist etki (GBS ve Listeria için), Gram negatif basiller için (E. coli, Klebsiella), BOS penetrasyonu zayıf ama kan-beyin bariyeri inflamasyonla açılır",
                "<b>Listeria menenjiti neden >50 yaş ve yenidoğanda sık?</b> → Doğru cevap: Hücresel immünite zayıflığı (T hücre), Listeria intraselüler patojen (fagositlerde yaşar), gebe ve immünsüprese hastalarda da risk"
            ]
        }
    },
    {
        id: 149,
        category: "Pre-Analitik",
        topic: "İdrar Kültürü Değerlendirmesi",
        question: "İdrar kültüründe hangi durum anlamlı bakteriüri olarak kabul edilir?",
        correctAnswer: "Orta akım idrarda ≥10⁵ CFU/mL, tek bakteri türü, klinik semptomlar",
        details: {
            coreInfo: "Anlamlı bakteriüri tanımı örnek alma yöntemine göre değişir. Orta akım idrar: ≥10⁵ CFU/mL (tek bakteri türü), tak-çıkar sonda: ≥10³ CFU/mL, suprapubik aspirasyon: her sayı anlamlı (≥1 CFU/mL). 2-3 farklı bakteri üremesi kontaminasyon olarak yorumlanır. Asemptomatik bakteriüri (ASB) genelde tedavi edilmez (gebelik, üriner cerrahi öncesi, nötropeni hariç).",
            keyPoints: [
                "<b>Orta Akım İdrar:</b> ≥10⁵ CFU/mL, tek dominant bakteri, klinik semptomlar (dizüri, sıklık, aciliyet).",
                "<b>Tak-Çıkar Sonda:</b> ≥10³ CFU/mL (üretral florayı bypass eder, daha az bakteri yeterli).",
                "<b>Suprapubik Aspirasyon:</b> Her sayı anlamlı (≥1 CFU/mL), steril yöntem, kontaminasyon yok.",
                "<b>Kontaminasyon:</b> 2-3 farklı bakteri türü, düşük koloni sayısı (<10⁴ CFU/mL), cilt/genital flora (S. epidermidis, Lactobacillus, Corynebacterium).",
                "<b>Asemptomatik Bakteriüri (ASB):</b> ≥10⁵ CFU/mL ama semptom yok, genelde tedavi EDİLMEZ (gebelik, üriner cerrahi, nötropeni hariç)."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Örnek Alma Yöntemi</th><th>Anlamlı Koloni Sayısı</th><th>Kontaminasyon Riski</th></tr>
                    <tr><td>Orta Akım</td><td>≥10⁵ CFU/mL</td><td>Yüksek (%20-30)</td></tr>
                    <tr><td>Tak-Çıkar Sonda</td><td>≥10³ CFU/mL</td><td>Orta (%10-15)</td></tr>
                    <tr><td>Suprapubik Aspirasyon</td><td>≥1 CFU/mL (Her sayı)</td><td>Yok</td></tr>
                    <tr><td>Kateter (Mevcut)</td><td>≥10² CFU/mL</td><td>Düşük</td></tr>
                </table>
            `,
            alert: "İdrar kültüründe 10³-10⁴ CFU/mL arası üreme (<10⁵) semptomatik hastada anlamlı olabilir (özellikli genç kadınlarda sistit). 2-3 farklı bakteri üremesi kontaminasyon, yeni örnek istenir.",
            relatedQuestions: [
                "<b>Asemptomatik bakteriüri (ASB) ne zaman tedavi edilir?</b> → Doğru cevap: Gebelik (pyelonefrit riski), üriner cerrahi öncesi (bakteriyemi riski), nötropeni (enfeksiyon riski); diğer durumlarda tedavi GEREKSİZ (yaşlı, diyabetik, kateterli hasta)",
                "<b>Neden 2-3 farklı bakteri üremesi kontaminasyon?</b> → Doğru cevap: Gerçek IYE (İdrar Yolu Enfeksiyonu) tek dominant bakteri ile olur, çoklu bakteri genital/perineal flora kontaminasyonu, yeni örnek istenir",
                "<b>İdrar kültüründe en sık üreyen bakteriler?</b> → Doğru cevap: E. coli (%70-80), Klebsiella pneumoniae (%10-15), Proteus mirabilis (%5), Enterococcus (%5), Staphylococcus saprophyticus (genç kadınlarda %5-10)",
                "<b>Staphylococcus saprophyticus neden genç kadınlarda sık?</b> → Doğru cevap: Koagülaz negatif stafilokok, cinsel aktiviteyle ilişkili (bal ayı sistitit), novobiosin dirençli (S. epidermidis'ten farkı), genç kadınlarda ikinci sık neden"
            ]
        }
    },
    {
        id: 150,
        category: "Pre-Analitik",
        topic: "VRE (Vankomisin Dirençli Enterokok) Tarama",
        question: "VRE (Vankomisin Dirençli Enterokok) taraması için hangi örnek alınır?",
        correctAnswer: "Rektal sürüntü veya dışkı",
        details: {
            coreInfo: "VRE taraması gastrointestinal kolonizasyonu tespit etmek içindir. En yüksek duyarlılık rektal sürüntü veya dışkı ile sağlanır. VRE bağırsakta kolonize olur (antibiyotik baskısıyla), oradan hastane ortamında yayılır (el teması, çevre kontaminasyonu). Tarama örnekleri selektif kromojenik agara (CHROMagar VRE) veya Enterococcosel agara + vankomisin ekilir. Yüksek riskli hastalar: YBÜ, uzun hastane yatışı, geniş spektrumlu antibiyotik kullanımı, immünsüpresyon.",
            keyPoints: [
                "<b>Tarama Örneği:</b> Rektal sürüntü (en duyarlı) veya dışkı, VRE bağırsak florasında kolonize olur.",
                "<b>Selektif Besiyerleri:</b> CHROMagar VRE (kromojenik, renkli koloniler), Enterococcosel agar + vankomisin (6 µg/mL).",
                "<b>Yüksek Risk Faktörleri:</b> YBÜ yatışı, uzun hastane yatışı (>7 gün), geniş spektrumlu antibiyotik (vankomisin, 3. kuşak sefalosporinler), immünsüpresyon.",
                "<b>VRE Türleri:</b> E. faecium (vanA, vanB, en sık), E. faecalis (nadir, genelde vankomisin duyarlı).",
                "<b>Kontrol Önlemleri:</b> Temas izolasyonu, eldiven + önlük, el hijyeni, çevre temizliği (VRE yüzeylerde aylar boyu yaşar)."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Van Geni</th><th>Vankomisin</th><th>Teikoplanin</th><th>Aktarım</th><th>Sıklık</th></tr>
                    <tr><td><b>vanA</b></td><td>Dirençli (MIC >64)</td><td>Dirençli</td><td>Plazmid</td><td>En sık (%70)</td></tr>
                    <tr><td>vanB</td><td>Dirençli (MIC 4-1024)</td><td><b>Duyarlı</b></td><td>Plazmid/Kromozom</td><td>%20-30</td></tr>
                    <tr><td>vanC</td><td>Düşük direnç (MIC 2-32)</td><td>Duyarlı</td><td>Kromozom (intrinsik)</td><td>E. gallinarum/casseliflavus</td></tr>
                </table>
            `,
            alert: "VRE bağırsakta kolonize olur, rektal sürüntü veya dışkı ile taranır. İdrar veya yara kültüründe VRE üremesi kolonizasyon DEĞİL, enfeksiyon olabilir (klinik değerlendirme gerekli). VRE hastanede hızla yayılır (el teması, çevre kontaminasyonu).",
            relatedQuestions: [
                "<b>vanA vs vanB farkı nedir?</b> → Doğru cevap: vanA: Vankomisin + teikoplanin dirençli, plazmid aracılı, yüksek direnç; vanB: Vankomisin dirençli ama teikoplanin DUYARLI, değişken direnç seviyesi",
                "<b>Neden VRE hastanede hızla yayılır?</b> → Doğru cevap: Çevrede uzun süre yaşar (plastik, metal yüzeylerde aylar boyu), el temasıyla kolay bulaş, antibiyotik baskısıyla bağırsakta çoğalır, asemptomatik taşıyıcılık",
                "<b>VRE tedavisi nedir?</b> → Doğru cevap: Linezolid (bakteriyostatik, oral/IV, 10-14 gün), daptomisin (bakterisidal, IV, endokardit için), tigesiklin (karmaşık enfeksiyonlar), yeni ajanlar: dalbavancin, oritavancin",
                "<b>Neden vanC direnci önemli değil?</b> → Doğru cevap: Düşük direnç seviyesi (MIC 2-32), intrinsik (doğal), E. gallinarum ve E. casseliflavus'da (nadir türler), klinik önemi düşük, hastane epidemisi yapmaz"
            ]
        }
    },
    {
        id: 151,
        category: "Klinik Bakteriyoloji",
        topic: "Anaerop Bakteriler",
        question: "Hangi anaerop bakteri sporlıdır ve Clostridium ailesine aittir?",
        correctAnswer: "Clostridium difficile, Clostridium perfringens, Clostridium tetani, Clostridium botulinum",
        details: {
            coreInfo: "Clostridium türleri sporlı, Gram pozitif basil, zorunlu anaerop bakterilerdir. Sporlar çevrede uzun süre dayanıklıdır (yıllar boyu), ısıya, kimyasallara, kurumaya dirençli. C. difficile (antibiyotik ilişkili ishal, pseudomembranöz kolit), C. perfringens (gaz gangren, besin zehirlenmesi), C. tetani (tetanoz), C. botulinum (botulizm). Diğer anaeroplar (Bacteroides, Prevotella, Fusobacterium, Peptostreptococcus) spor oluşturmaz.",
            keyPoints: [
                "<b>Clostridium Türleri:</b> Sporlı, Gram pozitif basil, zorunlu anaerop, çevrede dayanıklı (sporlar).",
                "<b>C. difficile:</b> Antibiyotik ilişkili ishal, pseudomembranöz kolit, toksin A (enterotoksin) + toksin B (sitotoksin).",
                "<b>C. perfringens:</b> Gaz gangren (miyonekroz), alfa toksin (lecithinase), besin zehirlenmesi (tip A).",
                "<b>C. tetani:</b> Tetanoz (kasılma, trismus), tetanospazmin (nörotropik toksin), yara kontaminasyonu.",
                "<b>C. botulinum:</b> Botulizm (flaksid paralizi, infant botulizm, yara botulizm), botulinum toksini (en güçlü biyolojik toksin)."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Bakteri</th><th>Spor</th><th>Gram Boyama</th><th>Oksijen</th><th>Klinik</th></tr>
                    <tr><td><b>Clostridium spp.</b></td><td><b>Var</b></td><td>Pozitif basil</td><td>Zorunlu anaerop</td><td>C. diff, perfringens, tetani, botulinum</td></tr>
                    <tr><td>Bacteroides fragilis</td><td>Yok</td><td>Negatif basil</td><td>Zorunlu anaerop</td><td>İntraabdominal apse</td></tr>
                    <tr><td>Prevotella</td><td>Yok</td><td>Negatif basil</td><td>Zorunlu anaerop</td><td>Oral, genital enfeksiyonlar</td></tr>
                    <tr><td>Fusobacterium</td><td>Yok</td><td>Negatif basil</td><td>Zorunlu anaerop</td><td>Lemierre sendromu, farenjit</td></tr>
                    <tr><td>Peptostreptococcus</td><td>Yok</td><td>Pozitif kok</td><td>Zorunlu anaerop</td><td>Apse, polimikrobiyal enfeksiyonlar</td></tr>
                </table>
            `,
            alert: "Clostridium sporları 121°C'de 15 dakika otoklavla öldürülebilir. Alkol bazlı el dezenfektanları sporları ÖLDÜREMEZ, su + sabun gereklidir (C. difficile enfeksiyonlarında). C. difficile sporları çevrede aylar-yıllar boyunca yaşar.",
            relatedQuestions: [
                "<b>C. difficile tedavisi nedir?</b> → Doğru cevap: Hafif-orta: Vankomisin oral (125 mg 4x1, 10 gün) veya fidaksomisin; Ağır: Vankomisin oral + IV metronidazol; Rekürren: Fekal mikrobiota transplantasyonu (FMT), bezlotoksumab (monoklonal antikor)",
                "<b>Neden C. difficile enfeksiyonunda alkol bazlı el dezenfektanı etkisiz?</b> → Doğru cevap: Alkol sporları öldürmez, mekanik yıkama (su + sabun) sporları uzaklaştırır, C. difficile sporları çok dayanıklıdır",
                "<b>C. perfringens alfa toksini nedir?</b> → Doğru cevap: Lecithinase (fosfolipaz C), hücre membranı yıkımı, gaz gangren (miyonekroz), hızlı progresyon (saatler içinde), hemoliz, Nagler testi (antitoksinle nötralizasyon)",
                "<b>Tetanoz proflaksisi ne zaman yapılır?</b> → Doğru cevap: Kirli yara + aşı öyküsü yok/eksik → tetanoz immünglobulin (TIG) + tetanoz toksoid (Td), temiz yara + aşı eksik → sadece Td"
            ]
        }
    },
    {
        id: 152,
        category: "Klinik Bakteriyoloji",
        topic: "İntrinsik Antibiyotik Direnci",
        question: "Aşağıdaki bakterilerden hangisi intrinsik (doğal) olarak vankomisin dirençlidir?",
        correctAnswer: "Leuconostoc, Pediococcus, Lactobacillus",
        details: {
            coreInfo: "İntrinsik direnç bakterinin doğal özelliğidir (genetik, kromozomal), edinsel değildir. Leuconostoc, Pediococcus, Lactobacillus türleri peptidoglikan sentezinde D-Ala-D-Laktat kullanır (D-Ala-D-Ala yerine), vankomisin D-Ala-D-Laktat'a bağlanamaz. Diğer intrinsik dirençler: Klebsiella ampisilin dirençli, Pseudomonas sefalosporin dirençli, Enterococcus sefalosporin dirençli, Stenotrophomonas karbapenem dirençli.",
            keyPoints: [
                "<b>İntrinsik Direnç:</b> Doğal, kromozomal, tüm türde var, değişmez (Leuconostoc, Pediococcus, Lactobacillus → vankomisin).",
                "<b>Mekanizma:</b> D-Ala-D-Laktat kullanımı (D-Ala-D-Ala yerine), vankomisin bağlanamaz, hücre duvarı sentezi devam eder.",
                "<b>Klebsiella:</b> Ampisilin dirençli (kromozomal SHV-1 beta-laktamaz), amoksisilin-klavulanat duyarlı.",
                "<b>Enterococcus:</b> Sefalosporin dirençli (PBP'lere düşük afinite), aminoglikozid düşük seviye dirençli (monoterapi için).",
                "<b>Stenotrophomonas maltophilia:</b> Karbapenem dirençli (L1/L2 metallo-beta-laktamazlar), TMP-SMX duyarlı."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Bakteri</th><th>İntrinsik Direnç</th><th>Mekanizma</th><th>Alternatif Tedavi</th></tr>
                    <tr><td>Leuconostoc, Pediococcus, Lactobacillus</td><td>Vankomisin</td><td>D-Ala-D-Laktat kullanımı</td><td>Penisilin, ampisilin</td></tr>
                    <tr><td>Klebsiella pneumoniae</td><td>Ampisilin</td><td>Kromozomal SHV-1 beta-laktamaz</td><td>Amoksisilin-klavulanat, sefalosporin</td></tr>
                    <tr><td>Enterococcus</td><td>Sefalosporin (tümü)</td><td>PBP düşük afinite</td><td>Ampisilin, vankomisin</td></tr>
                    <tr><td>Pseudomonas aeruginosa</td><td>Çoğu beta-laktam</td><td>AmpC, efluks pompası, düşük permeabilite</td><td>Antipsödomonal (piperasilin-tazobaktam, meropenem)</td></tr>
                    <tr><td>Stenotrophomonas maltophilia</td><td>Karbapenem</td><td>L1/L2 metallo-beta-laktamaz</td><td>TMP-SMX, tigesiklin</td></tr>
                </table>
            `,
            alert: "İntrinsik direnç ANTİBİYOGRAMDA RAPORLANMAZ (zaten bilinir). Örneğin Enterococcus için seftriakson rapor edilmez çünkü her zaman dirençlidir. İntrinsik direnç epidemiyoloji için önemli değildir (tüm türde var).",
            relatedQuestions: [
                "<b>Edinsel direnç vs intrinsik direnç farkı?</b> → Doğru cevap: İntrinsik: Doğal, kromozomal, tüm türde var, değişmez; Edinsel: Mutasyon/gen transferi, plazmid/transpozon, bazı izolatlar, değişken, epidemiyolojik önemi var",
                "<b>Neden Klebsiella her zaman ampisilin dirençli?</b> → Doğru cevap: Kromozomal SHV-1 beta-laktamaz (tüm Klebsiella'da), ampisilin ve amoksisilin hidrolize eder, amoksisilin-klavulanat veya sefalosporin duyarlı",
                "<b>Enterococcus neden sefalosporin dirençli?</b> → Doğru cevap: PBP'lere düşük afinite (Penicillin-Binding Proteins), sefalosporinler bağlanamaz, penisilin veya ampisilin duyarlı (daha yüksek afinite)",
                "<b>Stenotrophomonas maltophilia neden karbapenem dirençli?</b> → Doğru cevap: L1 (metallo-beta-laktamaz) + L2 (serin beta-laktamaz), karbapenemi hidrolize eder, TMP-SMX duyarlı (birinci seçenek), tigesiklin alternatif"
            ]
        }
    },
    {
        id: 153,
        category: "Klinik Bakteriyoloji",
        topic: "İndüklenebilir Beta-Laktamaz",
        question: "Hangi bakterilerde indüklenebilir AmpC beta-laktamaz görülür?",
        correctAnswer: "Enterobacter, Citrobacter, Serratia, Morganella, Providencia (ESCPM grubu)",
        details: {
            coreInfo: "İndüklenebilir AmpC beta-laktamaz kromozomal, beta-laktam varlığında indüklenir (üretim artar). ESCPM grubu (Enterobacter, Serratia, Citrobacter, Providencia, Morganella) + Pseudomonas aeruginosa'da bulunur. 3. kuşak sefalosporin (seftriakson, seftazidim) kullanımında mutasyon ile stabil hiperüretim (derepresyon) gelişebilir → tedavi başarısızlığı. Karbapenem veya sefepim (4. kuşak) tercih edilir. AmpC beta-laktamazlar ESBL testlerinde negatiftir (klavulanik asit ile inhibe EDİLMEZ).",
            keyPoints: [
                "<b>İndüklenebilir AmpC:</b> Kromozomal, beta-laktam varlığında indüklenir, ESCPM grubu + Pseudomonas.",
                "<b>ESCPM Grubu:</b> Enterobacter, Serratia, Citrobacter, Providencia, Morganella (ACE-SPICE akronimi ile de bilinir).",
                "<b>İndüksiyon:</b> 3. kuşak sefalosporin kullanımında AmpC üretimi artar, mutasyon ile stabil hiperüretim (derepresyon) gelişir.",
                "<b>Tedavi Başarısızlığı:</b> Başlangıçta duyarlı, tedavi sırasında direnç gelişir (breakthrough bakteriyemi), karbapenem tercih edilir.",
                "<b>AmpC vs ESBL:</b> AmpC klavulanik asit ile inhibe EDİLMEZ, ESBL inhibe edilir; AmpC sefamisinleri (sefoksitin) hidrolize eder, ESBL etmez."
            ],
            table: `
                <table class="info-table">
                    <tr><th>Özellik</th><th>AmpC Beta-Laktamaz</th><th>ESBL</th></tr>
                    <tr><td>Lokalizasyon</td><td>Kromozomal (genelde)</td><td>Plazmid</td></tr>
                    <tr><td>İndüksiyon</td><td>Beta-laktam ile indüklenir</td><td>Konstitütif (sürekli)</td></tr>
                    <tr><td>Klavulanik Asit</td><td><b>İnhibe ETMEZ</b></td><td>İnhibe eder</td></tr>
                    <tr><td>Sefamisin (Sefoksitin)</td><td>Hidrolize eder</td><td>Hidrolize etmez (genelde)</td></tr>
                    <tr><td>Tedavi</td><td>Karbapenem, sefepim</td><td>Karbapenem</td></tr>
                    <tr><td>Bakteriler</td><td>ESCPM, Pseudomonas</td><td>E. coli, Klebsiella</td></tr>
                </table>
            `,
            alert: "3. kuşak sefalosporin (seftriakson, seftazidim) ESCPM grubunda KULLANILMAMALIDIR (indüksiyon riski, tedavi başarısızlığı). Karbapenem veya sefepim (4. kuşak, AmpC'ye stabil) tercih edilir. Piperasilin-tazobaktam AmpC için ETKİSİZDİR (tazobaktam AmpC'yi inhibe etmez).",
            relatedQuestions: [
                "<b>Neden 3. kuşak sefalosporin ESCPM grubunda kullanılmamalı?</b> → Doğru cevap: İndüklenebilir AmpC beta-laktamaz, 3. kuşak sefalosporin kullanımında üretim artar, mutasyon ile stabil hiperüretim, tedavi başarısızlığı (breakthrough bakteriyemi)",
                "<b>ACE-SPICE akronimi nedir?</b> → Doğru cevap: AmpC üreten bakteriler: Aeromonas, Citrobacter, Enterobacter, Serratia, Providencia, indüklenebilir, Citrobacter freundii, E. cloacae",
                "<b>Sefepim (4. kuşak) neden AmpC'ye dirençli?</b> → Doğru cevap: Zwitterion yapısı (hem pozitif hem negatif yük), AmpC'ye düşük afinite, hızla hücreye girer, AmpC'den önce PBP'ye bağlanır",
                "<b>AmpC'li bakteride amoksisilin-klavulanat neden etkisiz?</b> → Doğru cevap: Klavulanik asit AmpC'yi inhibe EDEMEZ (sadece serin beta-laktamazları inhibe eder, TEM, SHV), amoksisilin hidrolize olur, direnç devam eder"
            ]
        }
    }
];
