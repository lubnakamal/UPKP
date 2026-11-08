/* ============================================================
   Materi TKP — Bahasa Inggris, Literasi Digital
   ============================================================ */
window.UPKP_MATERI = window.UPKP_MATERI || {};

window.UPKP_MATERI.inggris = {
  id: "inggris",
  judul: "Bahasa Inggris",
  kelompok: "TKP",
  urutan: 11,
  ringkas: "Tenses, preposisi in/on/at, countable–uncountable, subject–verb agreement, comparative, passive voice, dan strategi reading teks pemerintahan.",
  estimasi: "30 menit",
  tujuan: [
    "Memilih tense yang tepat berdasarkan penanda waktu dan konteks kalimat.",
    "Menggunakan preposisi in, on, dan at secara tepat untuk waktu dan tempat.",
    "Membedakan much/many, few/little, serta countable dan uncountable noun.",
    "Menjawab soal reading comprehension tentang teks pemerintahan dan kebijakan."
  ],
  sections: [
    {
      judul: "Tenses: pola dan penanda waktu",
      html: `
<p class="lead-in">Soal grammar UPKP biasanya tidak meminta hafalan nama tense, tetapi memilih bentuk yang tepat berdasarkan konteks. Kuncinya: temukan <b>penanda waktu</b> dan <b>hubungan peristiwa</b>.</p>
<div class="tbl-wrap"><table>
<thead><tr><th>Tense</th><th>Rumus</th><th>Fungsi</th><th>Penanda waktu</th></tr></thead>
<tbody>
<tr><td>Simple Present</td><td>S + V1 (+s/es untuk he/she/it)</td><td>Kebiasaan, fakta, jadwal.</td><td>every day, usually, always, often, generally.</td></tr>
<tr><td>Present Continuous</td><td>S + am/is/are + V-ing</td><td>Sedang berlangsung sekarang.</td><td>now, at the moment, currently, today.</td></tr>
<tr><td>Simple Past</td><td>S + V2</td><td>Peristiwa selesai di masa lalu.</td><td>yesterday, last week, in 2024, ago.</td></tr>
<tr><td>Past Continuous</td><td>S + was/were + V-ing</td><td>Sedang berlangsung di masa lalu; latar peristiwa.</td><td>while, when, at 8 p.m. yesterday.</td></tr>
<tr><td>Present Perfect</td><td>S + have/has + V3</td><td>Peristiwa yang relevan dengan sekarang; pengalaman; hasil.</td><td>since, for, already, yet, ever, never, just.</td></tr>
<tr><td>Past Perfect</td><td>S + had + V3</td><td>Peristiwa yang selesai sebelum peristiwa lain di masa lalu.</td><td>before, after, by the time.</td></tr>
<tr><td>Simple Future</td><td>S + will + V1 / be going to + V1</td><td>Rencana, prediksi, janji.</td><td>tomorrow, next week, soon.</td></tr>
<tr><td>Future Perfect</td><td>S + will have + V3</td><td>Selesai sebelum waktu tertentu di masa depan.</td><td>by next year, by 2030.</td></tr>
</tbody></table></div>
<h3>Contoh dalam konteks pemerintahan</h3>
<ul>
<li>The government <b>issues</b> a new regulation every year. <i>(kebiasaan)</i></li>
<li>The committee <b>is preparing</b> the budget report now. <i>(sedang berlangsung)</i></li>
<li>The governor <b> inaugurated</b> the bridge last week. <i>(selesai)</i></li>
<li>Indonesia <b>has implemented</b> the policy since 2020. <i>(relevan dengan sekarang)</i></li>
<li>By the time the audit began, the office <b>had submitted</b> all documents. <i>(selesai lebih dulu)</i></li>
</ul>
<div class="callout jebakan"><span class="c-label">Jebakan</span><p><b>Since</b> biasanya menandai Present Perfect (<i>has worked here since 2020</i>), bukan Simple Present. <b>For</b> juga dapat menandai Present Perfect untuk durasi (<i>for five years</i>). Jika kalimat menyebut “now”, pilih Present Continuous.</p></div>
`
    },
    {
      judul: "Preposisi in, on, at, dan quantifiers",
      html: `
<h3>1. Preposisi waktu</h3>
<div class="tbl-wrap"><table>
<thead><tr><th>Preposisi</th><th>Dipakai untuk</th><th>Contoh</th></tr></thead>
<tbody>
<tr><td><b>at</b></td><td>Jam, titik waktu tertentu, momen.</td><td>at 8 a.m., at noon, at night, at the end of the meeting.</td></tr>
<tr><td><b>on</b></td><td>Hari, tanggal, hari besar.</td><td>on Monday, on 5 May 2026, on Independence Day.</td></tr>
<tr><td><b>in</b></td><td>Bulan, tahun, musim, periode panjang.</td><td>in May, in 2026, in winter, in the morning.</td></tr>
</tbody></table></div>
<h3>2. Preposisi tempat</h3>
<div class="tbl-wrap"><table>
<thead><tr><th>Preposisi</th><th>Makna</th><th>Contoh</th></tr></thead>
<tbody>
<tr><td><b>at</b></td><td>Titik/ lokasi spesifik.</td><td>at the door, at the bus stop, at the office entrance.</td></tr>
<tr><td><b>on</b></td><td>Permukaan.</td><td>on the table, on the wall, on the second floor.</td></tr>
<tr><td><b>in</b></td><td>Ruang tertutup/wilayah.</td><td>in the room, in Semarang, in Central Java.</td></tr>
</tbody></table></div>
<p><b>Ingat:</b> <i>in the morning</i>, tetapi <i>on Monday morning</i>; <i>at night</i>, tetapi <i>in the evening</i>.</p>

<h3>3. Countable dan uncountable</h3>
<div class="tbl-wrap"><table>
<thead><tr><th>Kata</th><th>Dipakai untuk</th><th>Contoh</th></tr></thead>
<tbody>
<tr><td><b>many</b></td><td>Countable plural</td><td>many employees, many reports.</td></tr>
<tr><td><b>much</b></td><td>Uncountable</td><td>much information, much time.</td></tr>
<tr><td><b>a few / few</b></td><td>Countable plural</td><td>a few documents; few applicants (hampir tidak ada).</td></tr>
<tr><td><b>a little / little</b></td><td>Uncountable</td><td>a little time; little progress (hampir tidak ada).</td></tr>
<tr><td><b>fewer</b></td><td>Countable plural</td><td>fewer errors.</td></tr>
<tr><td><b>less</b></td><td>Uncountable</td><td>less budget, less information.</td></tr>
</tbody></table></div>
<div class="callout jebakan"><span class="c-label">Jebakan</span><p><i>Information, advice, equipment, furniture, news, research, staff</i> umumnya <b>uncountable</b>. Jangan menulis “informations” atau “many informations”. Gunakan “a piece of information” atau “much information”.</p></div>
`
    },
    {
      judul: "Subject–verb agreement, pronoun, dan passive voice",
      html: `
<h3>1. Pola dasar to be dan have/do</h3>
<div class="tbl-wrap"><table>
<thead><tr><th>Subjek</th><th>to be</th><th>have/do</th><th>Contoh</th></tr></thead>
<tbody>
<tr><td>I</td><td>am</td><td>have/do</td><td>I am responsible; I have a report.</td></tr>
<tr><td>You, we, they</td><td>are</td><td>have/do</td><td>They are ready; we have finished.</td></tr>
<tr><td>He, she, it</td><td>is</td><td>has/does</td><td>She is here; he has submitted.</td></tr>
</tbody></table></div>
<h3>2. Aturan penting</h3>
<ul>
<li>Subjek tunggal + verb <b>-s/es</b> pada Simple Present: <i>The officer <b>checks</b> the documents.</i></li>
<li>Subjek jamak + verb dasar: <i>The officers <b>check</b> the documents.</i></li>
<li><b>Each/every</b> + noun tunggal + verb tunggal: <i>Every employee <b>must</b> attend.</i></li>
<li><b>The number of</b> + plural noun + verb tunggal: <i>The number of applicants <b>is</b> increasing.</i></li>
<li><b>A number of</b> + plural noun + verb jamak: <i>A number of applicants <b>are</b> waiting.</i></li>
<li><b>News</b> dianggap tunggal: <i>The news <b>is</b> surprising.</i></li>
</ul>
<h3>3. Passive voice</h3>
<div class="tbl-wrap"><table>
<thead><tr><th>Tense</th><th>Rumus pasif</th><th>Contoh</th></tr></thead>
<tbody>
<tr><td>Simple Present</td><td>am/is/are + V3</td><td>The report is submitted every month.</td></tr>
<tr><td>Simple Past</td><td>was/were + V3</td><td>The policy was announced yesterday.</td></tr>
<tr><td>Present Perfect</td><td>has/have been + V3</td><td>The data has been verified.</td></tr>
<tr><td>Future</td><td>will be + V3</td><td>The meeting will be held tomorrow.</td></tr>
<tr><td>Modal</td><td>modal + be + V3</td><td>The document must be signed.</td></tr>
</tbody></table></div>
<p>Teks pemerintahan sering memakai pasif karena pelaku tidak menjadi fokus: <i>“The budget <b>was approved</b> by the council.”</i> Jika soal menanyakan siapa pelakunya, cari frasa <b>by + agent</b>.</p>
<div class="callout contoh"><span class="c-label">Latihan cepat</span><p>“The new regulation ___ by the governor last week.” Pilihan tepat: <b>was signed</b> (pasif simple past), bukan “is signed” atau “has signed”.</p></div>
`
    },
    {
      judul: "Comparative, superlative, dan reading comprehension",
      html: `
<h3>1. Comparative dan superlative</h3>
<div class="tbl-wrap"><table>
<thead><tr><th>Jenis</th><th>Pola</th><th>Contoh</th></tr></thead>
<tbody>
<tr><td>Comparative</td><td>-er + than / more + adj + than</td><td>faster than; more efficient than.</td></tr>
<tr><td>Superlative</td><td>the -est / the most + adj</td><td>the fastest; the most effective.</td></tr>
<tr><td>Sama</td><td>as + adj + as</td><td>as important as.</td></tr>
</tbody></table></div>
<div class="tbl-wrap"><table>
<thead><tr><th>Adjective</th><th>Comparative</th><th>Superlative</th></tr></thead>
<tbody>
<tr><td>good</td><td>better</td><td>the best</td></tr>
<tr><td>bad</td><td>worse</td><td>the worst</td></tr>
<tr><td>far</td><td>farther/further</td><td>the farthest/furthest</td></tr>
<tr><td>little</td><td>less</td><td>the least</td></tr>
<tr><td>many/much</td><td>more</td><td>the most</td></tr>
<tr><td>few</td><td>fewer</td><td>the fewest</td></tr>
</tbody></table></div>
<p><b>Less</b> = kurang (uncountable); <b>fewer</b> = lebih sedikit (countable); <b>most</b> = paling banyak; <b>least</b> = paling sedikit.</p>

<h3>2. Strategi membaca teks pemerintahan</h3>
<ol>
<li><b>Baca pertanyaan lebih dulu</b> untuk menentukan informasi yang dicari.</li>
<li><b>Skimming</b> paragraf pertama dan kalimat topik setiap paragraf untuk menemukan ide pokok.</li>
<li><b>Scanning</b> angka, nama, tanggal, dan kata kunci untuk soal detail.</li>
<li>Untuk soal <b>inference</b>, pilih simpulan yang didukung teks, bukan opini pribadi.</li>
<li>Untuk soal <b>vocabulary</b>, gunakan konteks kalimat; jangan hanya mengandalkan arti kamus.</li>
<li>Waspadai pilihan yang terlalu ekstrem: <i>always, never, all, only</i>.</li>
</ol>
<h3>3. Kosakata pemerintahan yang sering muncul</h3>
<div class="tbl-wrap"><table>
<thead><tr><th>Kata</th><th>Arti dalam konteks</th></tr></thead>
<tbody>
<tr><td>budget</td><td>anggaran</td></tr>
<tr><td>revenue / expenditure</td><td>pendapatan / belanja</td></tr>
<tr><td>procurement / tender</td><td>pengadaan / lelang</td></tr>
<tr><td>subsidy</td><td>subsidi</td></tr>
<tr><td>accountability / transparency</td><td>akuntabilitas / keterbukaan</td></tr>
<tr><td>regulation / enforcement</td><td>peraturan / penegakan</td></tr>
<tr><td>stakeholder</td><td>pemangku kepentingan</td></tr>
<tr><td>sustainable development</td><td>pembangunan berkelanjutan</td></tr>
</tbody></table></div>
<div class="callout contoh"><span class="c-label">Contoh soal reading</span><p>“The local government increased the budget for public health because the number of stunting cases remained high. However, the program’s success depends on whether the funds reach the community health centers.” <b>Main idea:</b> anggaran kesehatan naik, tetapi keberhasilannya bergantung pada penyaluran dana ke puskesmas. <b>Inference:</b> kenaikan anggaran saja tidak menjamin penurunan stunting.</p></div>
<div class="callout kunci"><span class="c-label">Rumus menjawab grammar</span><p>Tentukan <b>waktu</b> → tentukan <b>subjek</b> → tentukan <b>jenis kata</b> (countable/uncountable) → baru pilih opsi. Jangan memilih berdasarkan bunyi yang paling familiar.</p></div>
`
    }
  ],
  ringkasan: [
    "Simple Present untuk kebiasaan/fakta; Present Continuous untuk sekarang; Simple Past untuk peristiwa selesai; Present Perfect untuk relevansi sekarang.",
    "at = jam/titik; on = hari/tanggal/permukaan; in = bulan/tahun/periode/ruang tertutup.",
    "many/few/fewer untuk countable; much/little/little/less untuk uncountable.",
    "He/she/it + is/has/does; they/we/you + are/have/do; each/every + verb tunggal.",
    "Passive: be + V3; modal + be + V3.",
    "Reading: cari ide pokok, detail, inference, dan makna kata dari konteks."
  ],
  dasarHukum: [
    "Kisi-kisi UPKP Tingkat 3: Bahasa Inggris (grammar, reading, countable/uncountable).",
    "Bocoran peserta: in/on/at, tenses, they/we + are, she/he + is.",
    "Ringkasan Materi FR: tabel grammar dan kosakata pemerintahan."
  ]
};

window.UPKP_MATERI.literasi = {
  id: "literasi",
  judul: "Literasi Digital",
  kelompok: "TKP",
  urutan: 12,
  ringkas: "Empat pilar literasi digital, etika dan jejak digital, keamanan siber, perlindungan data pribadi, serta 20 studi kasus HOTS.",
  estimasi: "30 menit",
  tujuan: [
    "Menjelaskan empat pilar literasi digital dan menerapkannya pada kasus nyata.",
    "Mengenali modus phishing, malware APK, ransomware, dan pencurian OTP.",
    "Menerapkan langkah verifikasi informasi dan etika bermedia sosial.",
    "Menghubungkan literasi digital dengan perlindungan data pribadi dan layanan publik."
  ],
  sections: [
    {
      judul: "Konsep dan empat pilar literasi digital",
      html: `
<p class="lead-in">Literasi digital adalah kemampuan untuk mengidentifikasi, memahami, menggunakan, dan mengevaluasi informasi yang ditemukan secara digital. Literasi digital bukan hanya kemampuan memakai aplikasi, tetapi juga kemampuan bersikap etis dan aman di ruang digital.</p>
<h3>1. Empat pilar</h3>
<div class="tbl-wrap"><table>
<thead><tr><th>Pilar</th><th>Makna</th><th>Contoh perilaku</th></tr></thead>
<tbody>
<tr><td>Digital skills</td><td>Keterampilan menggunakan perangkat, aplikasi, dan data.</td><td>Mengolah data dengan spreadsheet; mencari informasi secara efektif.</td></tr>
<tr><td>Digital culture</td><td>Nilai budaya, kebangsaan, dan kolaborasi di ruang digital.</td><td>Menggunakan bahasa Indonesia yang baik; menghargai keberagaman.</td></tr>
<tr><td>Digital ethics</td><td>Etika dan tanggung jawab dalam berinteraksi online.</td><td>Tidak menyebar hoaks; menghormati hak cipta; tidak membully.</td></tr>
<tr><td>Digital safety</td><td>Kemampuan melindungi diri, data, dan perangkat.</td><td>Kata sandi kuat; tidak membagikan OTP; waspada APK.</td></tr>
</tbody></table></div>
<p><b>Digital skills</b> menjawab “mampu”; <b>digital culture</b> menjawab “berbudaya”; <b>digital ethics</b> menjawab “beretika”; <b>digital safety</b> menjawab “aman”. Dalam soal HOTS, satu kasus bisa menyentuh beberapa pilar sekaligus — pilih pilar yang paling dominan.</p>
<div class="callout kunci"><span class="c-label">Kata kunci</span><p>Literasi digital = <b>identifikasi – pahami – gunakan – evaluasi</b> informasi digital. Bukan sekadar “bisa internet”.</p></div>

<h3>2. Dampak positif dan negatif</h3>
<div class="tbl-wrap"><table>
<thead><tr><th>Dampak positif</th><th>Risiko</th></tr></thead>
<tbody>
<tr><td>Akses pengetahuan tanpa batas; efisiensi layanan; kolaborasi jarak jauh.</td><td>Hoaks, penipuan, kecanduan, cyberbullying, kebocoran data.</td></tr>
<tr><td>Kemajuan kesehatan, pendidikan, dan ekonomi digital.</td><td>Kesenjangan digital dan hilangnya privasi.</td></tr>
</tbody></table></div>
<h3>3. Peran ASN</h3>
<ul>
<li>Menjadi teladan dalam beretika digital dan tidak menyebarkan informasi belum terverifikasi.</li>
<li>Menjaga kerahasiaan data instansi dan data pribadi masyarakat.</li>
<li>Menggunakan kanal resmi untuk menyampaikan informasi publik.</li>
<li>Tidak menggunakan akun pribadi untuk kepentingan kampanye atau menyerang pihak lain.</li>
</ul>
`
    },
    {
      judul: "Etika digital, hoaks, dan hak cipta",
      html: `
<h3>1. Verifikasi sebelum membagikan</h3>
<ol>
<li><b>Cek sumber:</b> apakah dari media resmi, lembaga, atau akun terverifikasi?</li>
<li><b>Cek tanggal:</b> informasi lama sering didaur ulang seolah-olah baru.</li>
<li><b>Cek foto/video:</b> gunakan penelusuran gambar untuk melihat konteks asli.</li>
<li><b>Cek silang:</b> bandingkan dengan sumber lain yang kredibel.</li>
<li><b>Cek logika:</b> waspadai judul provokatif, huruf kapital berlebihan, dan ajakan “sebarkan sebelum dihapus”.</li>
</ol>
<p><b>Saring sebelum sharing.</b> Menahan diri tidak membagikan informasi yang belum terverifikasi adalah bagian dari etika digital, bukan sikap pasif.</p>

<h3>2. Etika bermedia sosial</h3>
<div class="def-grid">
<div class="def"><b>Cyberbullying</b>Penggunaan teknologi digital untuk menghina, mengancam, atau melecehkan orang lain.</div>
<div class="def"><b>Ujaran kebencian</b>Serangan terhadap individu/kelompok berdasarkan identitas; dapat berimplikasi hukum.</div>
<div class="def"><b>Jejak digital</b>Rekam jejak aktivitas online yang sulit dihapus dan dapat memengaruhi reputasi.</div>
<div class="def"><b>Hak cipta</b>Karya orang lain tidak boleh didistribusikan sebagai milik sendiri tanpa izin.</div>
</div>
<p>Mendistribusikan karya asli orang lain dan mengakuinya sebagai milik pribadi merupakan pelanggaran hak cipta. Mengutip untuk kepentingan pendidikan tetap wajib menyebut sumber secara layak.</p>
<div class="callout jebakan"><span class="c-label">Jebakan</span><p>“Sudah viral” bukan bukti kebenaran. “Kata teman” bukan sumber yang dapat diverifikasi. “Sudah ada watermark” bukan jaminan konten asli. Selalu cek sumber primer.</p></div>
<div class="callout contoh"><span class="c-label">Studi kasus</span><p>Seorang ASN menerima pesan berantai tentang bencana di kotanya. Pesan itu disertai foto lama dari daerah lain. Tindakan tepat: tidak meneruskan pesan, memeriksa kanal resmi BPBD, dan jika terbukti hoaks, memberi tahu pengirim dengan sopan disertai tautan sumber resmi.</p></div>
`
    },
    {
      judul: "Keamanan digital: phishing, malware, dan OTP",
      html: `
<h3>1. Modus yang paling sering</h3>
<div class="tbl-wrap"><table>
<thead><tr><th>Modus</th><th>Ciri</th><th>Tindakan tepat</th></tr></thead>
<tbody>
<tr><td>Phishing</td><td>Link/laman mirip situs resmi, meminta NIK, password, atau OTP.</td><td>Jangan klik; akses situs resmi secara manual; cek domain.</td></tr>
<tr><td>Malware APK</td><td>File <i>.apk</i> dikirim via WhatsApp dengan nama menarik (undangan, paket, tilang).</td><td>Jangan instal; konfirmasi ke pengirim lewat kanal lain; laporkan.</td></tr>
<tr><td>Pencurian OTP</td><td>Penelepon mengaku bank/instansi dan meminta kode OTP.</td><td>OTP tidak pernah dibagikan kepada siapa pun.</td></tr>
<tr><td>Ransomware</td><td>File terkunci, muncul permintaan uang.</td><td>Putuskan koneksi, isolasi perangkat, lapor pengelola TI; jangan membayar.</td></tr>
<tr><td>Adware/highjack</td><td>Browser berubah sendiri, banyak iklan.</td><td>Hentikan aktivitas mencurigakan; pindai perangkat.</td></tr>
<tr><td>USB asing</td><td>Flashdisk tidak dikenal ditemukan di kantor.</td><td>Jangan langsung dicolok; serahkan ke unit TI.</td></tr>
</tbody></table></div>
<h3>2. Kebiasaan aman</h3>
<ul>
<li>Gunakan kata sandi panjang dan unik; aktifkan autentikasi dua faktor (2FA).</li>
<li>Perbarui sistem operasi dan aplikasi; gunakan perangkat lunak resmi.</li>
<li>Jangan login ke layanan penting melalui Wi-Fi publik tanpa perlindungan.</li>
<li>Cadangkan data penting secara berkala di lokasi terpisah.</li>
<li>Periksa izin aplikasi: aplikasi kalkulator tidak perlu akses SMS, kontak, atau mikrofon.</li>
<li>Kunci layar perangkat; jangan meninggalkan sesi login terbuka.</li>
</ul>
<div class="callout kunci"><span class="c-label">Rumus menghadapi insiden</span><p><b>Jangan panik → jangan klik/instal → putuskan koneksi bila perlu → amankan akun → laporkan → pulihkan data → evaluasi</b>.</p></div>
<div class="callout contoh"><span class="c-label">Studi kasus</span><p>Setelah menginstal APK undangan pernikahan, ponsel seorang pegawai mengirim SMS sendiri dan aplikasi meminta izin membaca SMS. Langkah tepat: putuskan internet, jangan memberikan izin, hapus aplikasi, pindai perangkat, hubungi bank/penyedia layanan jika ada transaksi mencurigakan, dan laporkan ke unit TI.</p></div>
`
    },
    {
      judul: "Data pribadi, jejak digital, dan layanan publik",
      html: `
<h3>1. Perlindungan data pribadi</h3>
<p>UU Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi mengatur hak subjek data dan kewajiban pengendali data. Data pribadi mencakup nama, NIK, alamat, nomor telepon, data kesehatan, biometrik, dan data keuangan. Data pribadi tidak boleh dikumpulkan atau disebarkan tanpa dasar yang sah.</p>
<div class="tbl-wrap"><table>
<thead><tr><th>Hak subjek data</th><th>Kewajiban pengendali data</th></tr></thead>
<tbody>
<tr><td>Mendapat informasi tentang pemrosesan.</td><td>Mendapatkan persetujuan yang sah.</td></tr>
<tr><td>Mengakses dan memperbaiki data.</td><td>Menjaga kerahasiaan dan keamanan data.</td></tr>
<tr><td>Menghapus/membatasi pemrosesan.</td><td>Memberi tahu kebocoran data sesuai ketentuan.</td></tr>
<tr><td>Menarik persetujuan.</td><td>Menunjuk petugas pelindungan data jika disyaratkan.</td></tr>
</tbody></table></div>
<h3>2. Jejak digital dan reputasi</h3>
<p>Setiap unggahan, komentar, dan interaksi meninggalkan jejak. Jejak digital dapat memengaruhi peluang karier, kepercayaan publik, dan keamanan pribadi. ASN perlu memisahkan akun pribadi dan kedinasan, menghindari unggahan yang membocorkan lokasi/aktivitas sensitif, serta berhati-hati dalam berkomentar atas kebijakan publik.</p>
<h3>3. Literasi digital dalam layanan publik</h3>
<ul>
<li>Gunakan kanal resmi dan tanda tangan elektronik yang terverifikasi.</li>
<li>Jangan meminta data pribadi warga melalui saluran tidak resmi.</li>
<li>Pastikan sistem memiliki kontrol akses dan jejak audit.</li>
<li>Sediakan pendampingan bagi kelompok rentan yang kurang familiar dengan teknologi.</li>
<li>Evaluasi risiko sebelum mengadopsi aplikasi baru.</li>
</ul>
<div class="callout contoh"><span class="c-label">Studi kasus HOTS</span><p>Sebuah dinas ingin mempercepat layanan dengan meminta warga mengirim foto KTP dan KK melalui grup WhatsApp. Tindakan yang tepat: menolak cara tersebut dan menyediakan kanal resmi yang aman. Data pribadi tidak boleh dikumpulkan melalui kanal yang tidak memiliki jaminan keamanan dan audit.</p></div>
<div class="callout kunci"><span class="c-label">Jembatan ke pilar</span><p>Kasus “mengirim KTP via WhatsApp” menyentuh <b>digital safety</b> dan <b>digital ethics</b>. Kasus “menyebar berita hoaks” menyentuh <b>digital ethics</b>. Kasus “tidak bisa menggunakan spreadsheet” menyentuh <b>digital skills</b>. Kasus “memahami keberagaman budaya di media sosial” menyentuh <b>digital culture</b>.</p></div>
`
    }
  ],
  ringkasan: [
    "Empat pilar: digital skills, digital culture, digital ethics, digital safety.",
    "Literasi digital = mengidentifikasi, memahami, menggunakan, dan mengevaluasi informasi digital.",
    "Hoaks: cek sumber, tanggal, foto, silang, dan logika; saring sebelum sharing.",
    "Modus umum: phishing, APK malware, pencurian OTP, ransomware, USB asing.",
    "OTP tidak boleh dibagikan; aktifkan 2FA; perbarui perangkat; cadangkan data.",
    "UU 27/2022 melindungi data pribadi; data warga tidak dikumpulkan lewat kanal tidak aman."
  ],
  dasarHukum: [
    "UU Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi.",
    "UU Nomor 19 Tahun 2016 tentang Perubahan UU Informasi dan Transaksi Elektronik.",
    "UU Nomor 28 Tahun 2014 tentang Hak Cipta.",
    "Kerangka literasi digital nasional: digital skills, digital culture, digital ethics, digital safety."
  ]
};
