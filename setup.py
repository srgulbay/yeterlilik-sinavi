import os

# --- AYARLAR ---
base_dir = "."  # Mevcut klasör
dirs = ["theme", "data"]

# --- 1. HTML İÇERİĞİ ---
html_content = """<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mikrobiyoloji Uzmanlık Yeterlilik | Asistan Modu</title>
    <link rel="stylesheet" href="theme/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="app-wrapper">
        <!-- Sidebar -->
        <aside class="sidebar">
            <div class="brand-section">
                <div class="logo">🧬</div>
                <div class="brand-text">
                    <h2>Tıbbi<br><span>Mikrobiyoloji</span></h2>
                </div>
            </div>
            
            <div class="menu-label">ÇALIŞMA MODÜLLERİ</div>
            <nav class="nav-menu">
                <button class="nav-item active" onclick="filterCategory('all')">Tüm Konular</button>
                <button class="nav-item" onclick="filterCategory('Genel Mikrobiyoloji')">Genel Mikrobiyoloji</button>
                <button class="nav-item" onclick="filterCategory('Sterilizasyon')">Sterilizasyon & Dezenfeksiyon</button>
                <button class="nav-item" onclick="filterCategory('Pre-Analitik')">Pre-Analitik (Kritik)</button>
                <button class="nav-item" onclick="filterCategory('Klinik Bakteriyoloji')">Klinik Bakteriyoloji</button>
                <button class="nav-item" onclick="filterCategory('Mikrobiyota')">Mikrobiyota</button>
            </nav>

            <div class="profile-section">
                <div class="profile-card">
                    <div class="avatar">UD</div>
                    <div class="user-info">
                        <div class="name">Uzman Doktor</div>
                        <div class="status">Sınav Hazırlığı</div>
                    </div>
                </div>
            </div>
        </aside>

        <!-- Main Content -->
        <main class="main-content">
            <header class="top-header">
                <div class="header-title">
                    <h1>Çalışma Paneli</h1>
                    <p id="active-filter-text">Tüm konular görüntüleniyor</p>
                </div>
                <div class="search-container">
                    <input type="text" id="searchInput" placeholder="Konu, soru veya anahtar kelime ara..." onkeyup="searchContent()">
                </div>
            </header>

            <div id="content-grid" class="cards-container">
                <!-- Kartlar JS ile buraya yüklenecek -->
            </div>
        </main>
    </div>

    <script src="data/enriched_content.js"></script>
    <script src="theme/app.js"></script>
</body>
</html>"""

# --- 2. CSS İÇERİĞİ ---
css_content = """:root {
    --primary: #3b82f6;
    --primary-light: #eff6ff;
    --text-main: #1e293b;
    --text-secondary: #64748b;
    --bg-body: #f1f5f9;
    --bg-white: #ffffff;
    --border: #e2e8f0;
    --accent-green: #10b981;
    --accent-red: #ef4444;
    --accent-orange: #f59e0b;
    --radius: 12px;
}

* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Inter', sans-serif; }
body { background-color: var(--bg-body); color: var(--text-main); height: 100vh; overflow: hidden; }
.app-wrapper { display: flex; height: 100%; }

/* Sidebar */
.sidebar { width: 280px; background: var(--bg-white); border-right: 1px solid var(--border); display: flex; flex-direction: column; padding: 2rem; flex-shrink: 0; }
.brand-section { display: flex; align-items: center; gap: 1rem; margin-bottom: 3rem; }
.logo { font-size: 2rem; background: var(--primary-light); width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; border-radius: 12px; }
.brand-text h2 { font-size: 1.1rem; font-weight: 700; }
.brand-text span { color: var(--primary); font-weight: 500; }
.menu-label { font-size: 0.75rem; font-weight: 700; color: var(--text-secondary); margin-bottom: 1rem; }
.nav-menu { display: flex; flex-direction: column; gap: 0.5rem; flex: 1; }
.nav-item { text-align: left; padding: 0.75rem 1rem; background: transparent; border: 1px solid transparent; border-radius: 10px; color: var(--text-secondary); font-weight: 500; cursor: pointer; transition: all 0.2s; }
.nav-item:hover { background: var(--bg-body); color: var(--text-main); }
.nav-item.active { background: var(--primary-light); color: var(--primary); font-weight: 600; }
.profile-section { border-top: 1px solid var(--border); padding-top: 1.5rem; }
.profile-card { display: flex; align-items: center; gap: 1rem; }
.avatar { width: 40px; height: 40px; background: var(--text-main); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 600; }
.user-info .name { font-size: 0.9rem; font-weight: 600; }
.user-info .status { font-size: 0.75rem; color: var(--text-secondary); }

/* Main Content */
.main-content { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
.top-header { background: var(--bg-white); padding: 1.5rem 2rem; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; }
.header-title h1 { font-size: 1.5rem; font-weight: 700; }
.search-container input { width: 300px; padding: 0.75rem 1rem; border: 1px solid var(--border); border-radius: 50px; outline: none; }
.search-container input:focus { border-color: var(--primary); box-shadow: 0 0 0 3px var(--primary-light); }
.cards-container { padding: 2rem; overflow-y: auto; display: grid; grid-template-columns: repeat(auto-fill, minmax(800px, 1fr)); gap: 1.5rem; align-content: start; }

/* Cards */
.card { background: var(--bg-white); border-radius: var(--radius); border: 1px solid var(--border); overflow: hidden; display: flex; flex-direction: column; }
.card-header { padding: 1.5rem; border-bottom: 1px solid var(--border); }
.badge { display: inline-block; padding: 0.25rem 0.75rem; background: var(--primary-light); color: var(--primary); font-size: 0.75rem; font-weight: 700; border-radius: 20px; margin-bottom: 0.75rem; }
.question { font-size: 1.1rem; font-weight: 600; color: var(--text-main); }
.card-body { padding: 1.5rem; display: flex; flex-direction: column; gap: 1.5rem; }
.answer-box { background: #f8fafc; border: 1px solid var(--border); padding: 1rem; border-radius: 8px; border-left: 4px solid var(--accent-green); }
.answer-label { font-size: 0.75rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase; display: block; margin-bottom: 0.25rem; }
.answer-text { font-weight: 600; color: var(--text-main); }
.analysis-title { font-size: 0.9rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--text-main); }
.core-info { color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6; margin-bottom: 1rem; }

/* Utilities */
.detail-list { background: #fff7ed; border-left: 4px solid var(--accent-orange); padding: 1rem; border-radius: 0 8px 8px 0; margin-bottom: 1rem; }
.detail-list ul { list-style-type: none; }
.detail-list li { margin-bottom: 0.5rem; font-size: 0.9rem; color: #9a3412; }
.detail-list li::before { content: "• "; color: var(--accent-orange); font-weight: bold; }
.comparison-table { width: 100%; border-collapse: collapse; font-size: 0.9rem; margin-top: 0.5rem; border: 1px solid var(--border); }
.comparison-table th { background: #f8fafc; padding: 0.75rem; text-align: left; border-bottom: 1px solid var(--border); font-weight: 600; color: var(--text-secondary); }
.comparison-table td { padding: 0.75rem; border-bottom: 1px solid var(--border); }
.alert-box { background: #fef2f2; border: 1px solid #fee2e2; padding: 0.75rem 1rem; border-radius: 8px; color: #991b1b; font-size: 0.9rem; display: flex; gap: 0.75rem; }
"""

# --- 3. VERİ İÇERİĞİ (MİKOLOJİ HARİÇ) ---
data_content = """const contentData = [
    {
        id: 1,
        category: "Genel Mikrobiyoloji",
        topic: "Lizojenik Konversiyon",
        question: "Aşağıdaki bakteri virülans faktörlerinden hangisinin sentezi doğrudan bakteriyofaja bağlıdır?",
        correctAnswer: "Corynebacterium diphtheriae toksini",
        details: {
            coreInfo: "<b>Lizojenik Konversiyon:</b> Bakteriyofajın (virüs) genomunu bakteri kromozomuna entegre etmesi (profaj) ve bakteriye yeni bir toksin geni kazandırmasıdır.",
            keyPoints: [
                "<b>C. diphtheriae:</b> Beta-fajı olmazsa toksin üretemez (Avirülan).",
                "<b>V. cholerae:</b> Kolera toksini (CTX fajı).",
                "<b>E. coli O157:H7:</b> Shiga-benzeri toksin.",
                "<b>S. pyogenes:</b> Kızıl toksini (Eritrojenik toksin)."
            ],
            pitfalls: "Antraks ve Tetanoz toksinleri faj kaynaklı değil, plazmid kaynaklıdır."
        }
    },
    {
        id: 2,
        category: "Sterilizasyon",
        topic: "Biyolojik İndikatörler",
        question: "Nemli ısı (Otoklav) için uygun biyolojik indikatör hangisidir?",
        correctAnswer: "Geobacillus stearothermophilus",
        details: {
            coreInfo: "Validasyon için, kullanılan yönteme 'en dirençli' olan spor seçilir.",
            table: `
                <table class="comparison-table">
                    <tr><th>Yöntem</th><th>İndikatör Spor</th><th>Neden?</th></tr>
                    <tr><td><b>Otoklav (Nemli Isı)</b></td><td><i>G. stearothermophilus</i></td><td>Yüksek ısıya en dirençli</td></tr>
                    <tr><td>Kuru Isı (Pastör)</td><td><i>B. atrophaeus (subtilis)</i></td><td>Kuru ısıya en dirençli</td></tr>
                    <tr><td>Etilen Oksit</td><td><i>B. atrophaeus (subtilis)</i></td><td>Gaza en dirençli</td></tr>
                </table>
            `
        }
    },
    {
        id: 3,
        category: "Sterilizasyon",
        topic: "Bowie-Dick Testi",
        question: "Bowie-Dick test paketi otoklava nasıl yerleştirilmelidir?",
        correctAnswer: "Boş otoklavın alt rafına, drenaj yakınına",
        details: {
            coreInfo: "Bu test steriliteyi değil, <b>hava tahliyesini (vakum başarısını)</b> ölçer. En zor koşul (Cold Spot) test edilir.",
            keyPoints: [
                "Sadece <b>Ön Vakumlu</b> otoklavlarda kullanılır.",
                "Her gün, <b>ilk kullanımdan önce</b>, otoklav <b>BOŞKEN</b> yapılır.",
                "Drenaj çevresi 'en soğuk' ve 'hava cebi' riskinin en yüksek olduğu yerdir."
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
            coreInfo: "Otoklavın mekanik performansını test ettiği için her gün ilk iş olarak yapılmalıdır.",
            alert: "İmplant yüklerinde kullanılan Biyolojik İndikatör ile karıştırma! BD testi makineyi, Bİ testi yükü kontrol eder."
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
                "<b>Zaman:</b> Oda ısısında 2 saati geçerse bakteri sayısı yapay olarak artar (Yalancı Pozitif).",
                "<b>Antiseptik:</b> Numuneye karışırsa bakteriyi öldürür (Yalancı Negatif)."
            ],
            alert: "Sonda torbasından örnek almak, mikrobiyolojideki en büyük 'kardinal' hatalardan biridir."
        }
    },
    {
        id: 7,
        category: "Mikrobiyota",
        topic: "Mikrobiyota Projeleri (Yanlış Yapılan)",
        question: "İnsan bağırsak gen kataloğunu ve fonksiyonel ilişkileri hedefleyen proje?",
        correctAnswer: "MetaHIT",
        details: {
            coreInfo: "<b>MetaHIT:</b> Metagenomics of the Human Intestinal Tract. Spesifik olarak <b>bağırsak</b> ve <b>gen kataloğu</b> odaklıdır.",
            pitfalls: "HMP (Human Microbiome Project) tüm vücut bölgelerine (5 bölge) bakan daha genel bir ABD projesidir."
        }
    },
    {
        id: 8,
        category: "Pre-Analitik",
        topic: "Tıbbi Atık & Bulaş (Yanlış Yapılan)",
        question: "Hangi sıvıyla kontamine materyal, kan yoksa dekontaminasyon gerektirmez?",
        correctAnswer: "İdrar",
        details: {
            coreInfo: "Standart Önlemler'e göre; Kan Yoluyla Bulaşan Patojenler (HIV, HBV, HCV) açısından riskli olmayan sıvılar: İdrar, Dışkı, Ter, Tükürük.",
            alert: "Bu kural sadece 'Kan Yoluyla Bulaş' içindir. İdrar yine de enfeksiyöz olabilir ama tıbbi atık prosedürü farklıdır."
        }
    },
    {
        id: 9,
        category: "Sterilizasyon",
        topic: "Endoskop Dezenfeksiyonu (Yanlış Yapılan)",
        question: "Endoskoplar için aktivasyon gerektirmeyen, stabil ve az korozif YDD ajanı?",
        correctAnswer: "Orto-fitalaldehit (OPA)",
        details: {
            coreInfo: "Glutaraldehitin yerini alan modern standarttır.",
            table: `
                <table class="comparison-table">
                    <tr><th>Özellik</th><th>Glutaraldehit</th><th>OPA</th></tr>
                    <tr><td>Aktivasyon</td><td>Gerekir (Karıştırılmalı)</td><td><b>Gerekmez (Hazır)</b></td></tr>
                    <tr><td>Protein Etkisi</td><td>Fikse eder (Yapıştırır)</td><td>Boyar (Gri Leke)</td></tr>
                    <tr><td>Hız</td><td>Yavaş</td><td>Hızlı</td></tr>
                </table>
            `
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
            alert: "Viral menenjit (PCR) için olsaydı buzda taşırdık. Bakteriyel için ASLA soğutulmaz."
        }
    },
    {
        id: 14,
        category: "Sterilizasyon",
        topic: "Toz Madde Sterilizasyonu (Yanlış Yapılan)",
        question: "Toz halindeki bir maddeyi hangi yöntemle sterilize edebilirsiniz?",
        correctAnswer: "Pastör Fırını (Kuru Isı)",
        details: {
            coreInfo: "Toz maddeler ıslanamaz. Bu nedenle buhar (Otoklav) kullanılamaz.",
            keyPoints: [
                "<b>Otoklav:</b> Sıvılar, besiyerleri, tekstil, metal.",
                "<b>Pastör Fırını:</b> Tozlar, yağlar (vazelin), cam eşyalar."
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
                "EHEC O157: Sorbitol (-) -> Renksiz Koloni"
            ]
        }
    },
    {
        id: 17,
        category: "Pre-Analitik",
        topic: "Kan Kültürü Hataları (Yanlış Yapılan)",
        question: "Kan kültürü örnek alma uygulamasında hangisi YANLIŞTIR?",
        correctAnswer: "Önerilen antikoagülan EDTA'dır (YANLIŞ)",
        details: {
            coreInfo: "Kan kültürü şişeleri <b>SPS (Sodyum Polianetol Sülfonat)</b> içerir. EDTA bakteriler için toksiktir.",
            alert: "Kanı önce mor kapaklı tüpe (EDTA) alıp sonra kültür şişesine aktarmak, bakterilerin ölmesine ve sonucun yanlış negatif çıkmasına neden olur."
        }
    },
    {
        id: 18,
        category: "Pre-Analitik",
        topic: "Dışkı Transportu (Yanlış Yapılan)",
        question: "Dışkı transportu için hangi besiyeri KULLANILMAZ?",
        correctAnswer: "Alkali Peptonlu Su",
        details: {
            coreInfo: "Soru 'Transport' (Taşıma) besiyerini soruyor. Alkali Peptonlu Su bir <b>Zenginleştirme</b> besiyeridir.",
            keyPoints: [
                "<b>Cary-Blair:</b> Dışkı taşıma için Altın Standarttır.",
                "<b>Alkali Peptonlu Su:</b> Vibrio cholerae'yi çoğaltmak (zenginleştirmek) için laboratuvarda kullanılır."
            ]
        }
    },
    {
        id: 20,
        category: "Pre-Analitik",
        topic: "Mantar Örneği Saklama (Yanlış Yapılan)",
        question: "Mantar şüpheli akciğer biyopsisi gecikecekse nerede saklanır?",
        correctAnswer: "Buzdolabında (+4°C) [Modülde cevap hatalı olabilir]",
        details: {
            coreInfo: "<b>Mantık:</b> Biyopsi steril değildir, bakteri içerir. Oda ısısında bakteriler hızla üreyip mantarı baskılar (Overgrowth).",
            keyPoints: [
                "<b>+4°C:</b> Bakterileri durdurur, mantarlar canlı kalır. Doğrusu budur.",
                "<b>Oda Isısı:</b> Bakteriyel kontaminasyon riski çok yüksektir.",
                "<b>Dondurma:</b> Mantar hiflerini parçalar. Yasaktır."
            ],
            alert: "Uzmanlık sınavında doğru cevap +4°C (Buzdolabı) olmalıdır."
        }
    },
    {
        id: 21,
        category: "Mikrobiyota",
        topic: "Alzheimer & Bakteri (Yanlış Yapılan)",
        question: "Oral mikrobiyota elemanı olup Alzheimer ile ilişkilendirilen?",
        correctAnswer: "Porphyromonas gingivalis",
        details: {
            coreInfo: "<b>Gingipain Hipotezi:</b> Periodontitis etkeni olan bu bakteri beyne geçerek amiloid plak oluşumunu tetikleyebilir.",
            keyPoints: [
                "Ağız-Beyin ekseninin en güçlü kanıtıdır.",
                "Kronik diş eti hastalığı Alzheimer risk faktörüdür."
            ]
        }
    },
    {
        id: 22,
        category: "Pre-Analitik",
        topic: "Su Analizi (Yanlış Yapılan)",
        question: "Su analizinde öncelikli uygulanan deklorasyon işleminde ne kullanılır?",
        correctAnswer: "Sodyum Tiyosülfat",
        details: {
            coreInfo: "Klorlu su (şebeke/havuz) alınırken klor nötralize edilmezse, numune laboratuvara gidene kadar bakteriler ölür.",
            keyPoints: [
                "Sonuç: <b>Yalancı Negatif</b> olur.",
                "Çözüm: Şişe içine önceden Sodyum Tiyosülfat konur."
            ]
        }
    }
];"""

# --- 4. JS MANTIĞI ---
js_content = """document.addEventListener('DOMContentLoaded', () => {
    renderCards(contentData);
    updateActiveButton('all');
});

function renderCards(data) {
    const container = document.getElementById('content-grid');
    container.innerHTML = '';

    if (data.length === 0) {
        container.innerHTML = '<p style="grid-column:1/-1; text-align:center; color:#64748b;">Aradığınız kriterlere uygun içerik bulunamadı.</p>';
        return;
    }

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        
        let extraContent = '';
        if (item.details.table) {
            extraContent += item.details.table;
        }
        
        let listContent = '';
        if (item.details.keyPoints) {
            listContent = '<div class="detail-list"><ul>' + 
                item.details.keyPoints.map(p => `<li>${p}</li>`).join('') + 
                '</ul></div>';
        }

        let alertContent = '';
        if (item.details.alert || item.details.pitfalls) {
            const text = item.details.alert || item.details.pitfalls;
            const icon = item.details.alert ? '⚠️' : '��';
            alertContent = `<div class="alert-box"><span class="alert-icon">${icon}</span><p>${text}</p></div>`;
        }

        card.innerHTML = `
            <div class="card-header">
                <span class="badge">${item.category}</span>
                <h3 class="question">${item.question}</h3>
            </div>
            <div class="card-body">
                <div class="answer-box">
                    <span class="answer-label">Doğru Cevap</span>
                    <span class="answer-text">${item.correctAnswer}</span>
                </div>
                <div class="analysis-box">
                    <div class="analysis-title">Uzman Analizi</div>
                    <div class="core-info">${item.details.coreInfo}</div>
                    ${listContent}
                    ${extraContent}
                    ${alertContent}
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function filterCategory(category) {
    updateActiveButton(category);
    const title = category === 'all' ? 'Tüm Konular' : category;
    document.getElementById('active-filter-text').innerText = `${title} görüntüleniyor`;

    if (category === 'all') {
        renderCards(contentData);
    } else {
        const filtered = contentData.filter(item => item.category.includes(category) || category.includes(item.category));
        renderCards(filtered);
    }
}

function updateActiveButton(category) {
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.remove('active');
        const btnText = btn.innerText;
        if (category === 'all' && btnText === 'Tüm Konular') btn.classList.add('active');
        else if (category !== 'all' && btnText.includes(category)) btn.classList.add('active');
    });
}

function searchContent() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    const filtered = contentData.filter(item => 
        item.question.toLowerCase().includes(term) || 
        item.topic.toLowerCase().includes(term) ||
        item.details.coreInfo.toLowerCase().includes(term)
    );
    renderCards(filtered);
}
"""

# --- DOSYA OLUŞTURMA ---
for d in dirs:
    os.makedirs(os.path.join(base_dir, d), exist_ok=True)

files = {
    "index.html": html_content,
    "theme/style.css": css_content,
    "data/enriched_content.js": data_content,
    "theme/app.js": js_content
}

for filename, content in files.items():
    with open(os.path.join(base_dir, filename), "w", encoding="utf-8") as f:
        f.write(content)
    print(f"✅ Oluşturuldu: {filename}")

print("\n🚀 KURULUM TAMAMLANDI! 'index.html' dosyasını tarayıcıda açabilirsiniz.")
