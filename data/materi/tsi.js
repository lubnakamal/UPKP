/* ============================================================
   Materi TSI — Renstra & Perencanaan Pembangunan Daerah, SOTK
   ============================================================ */
window.UPKP_MATERI = window.UPKP_MATERI || {};

window.UPKP_MATERI.renstra = {
  id: "renstra",
  judul: "Renstra & Perencanaan Pembangunan Daerah",
  kelompok: "TSI",
  urutan: 10,
  ringkas: "Siklus RPJPD–RPJMD–RKPD, kedudukan Renstra dan Renja, Musrenbang, indikator kinerja, serta pengendalian dan evaluasi perencanaan.",
  estimasi: "32 menit",
  tujuan: [
    "Membedakan RPJPD, RPJMD, RKPD, Renstra PD, dan Renja PD beserta jangka waktu dan dasar hukumnya.",
    "Menjelaskan hubungan dokumen perencanaan pusat–daerah dan alur Musrenbang.",
    "Menyusun indikator kinerja yang tepat (output, outcome, impact) dan memahami evaluasi perencanaan.",
    "Menganalisis kasus ketidakkonsistenan antara Renstra, RKPD, dan APBD."
  ],
  sections: [
    {
      judul: "Kerangka perencanaan pembangunan nasional dan daerah",
      html: `
<p class="lead-in">Perencanaan adalah proses menentukan tindakan yang akan dilakukan pada masa depan secara tepat melalui urutan pilihan, dengan memperhitungkan sumber daya yang tersedia. Di Indonesia, perencanaan pembangunan diatur dalam UU Nomor 25 Tahun 2004 tentang Sistem Perencanaan Pembangunan Nasional (SPPN).</p>
<h3>1. Dokumen perencanaan dan jangka waktunya</h3>
<div class="tbl-wrap"><table>
<thead><tr><th>Dokumen</th><th>Tingkat</th><th>Jangka waktu</th><th>Ditetapkan dengan</th></tr></thead>
<tbody>
<tr><td>RPJP Nasional</td><td>Nasional</td><td>20 tahun</td><td>Undang-Undang</td></tr>
<tr><td>RPJM Nasional</td><td>Nasional</td><td>5 tahun</td><td>Peraturan Presiden</td></tr>
<tr><td>RKP</td><td>Nasional</td><td>1 tahun</td><td>Peraturan Presiden</td></tr>
<tr><td>RPJPD</td><td>Provinsi/Kab/Kota</td><td>20 tahun</td><td>Peraturan Daerah</td></tr>
<tr><td>RPJMD</td><td>Provinsi/Kab/Kota</td><td>5 tahun</td><td>Peraturan Daerah</td></tr>
<tr><td>RKPD</td><td>Provinsi/Kab/Kota</td><td>1 tahun</td><td>Peraturan Kepala Daerah</td></tr>
<tr><td>Renstra K/L dan Renstra PD</td><td>Kementerian/Lembaga; Perangkat Daerah</td><td>5 tahun</td><td>Peraturan Menteri/Perkada</td></tr>
<tr><td>Renja K/L dan Renja PD</td><td>Kementerian/Lembaga; Perangkat Daerah</td><td>1 tahun</td><td>Keputusan/Perkada</td></tr>
</tbody></table></div>
<p><strong>Renstra</strong> adalah rencana strategis perangkat daerah untuk periode lima tahun. <strong>Renja</strong> adalah rencana kerja tahunan yang menjadi penjabaran Renstra dan harus selaras dengan RKPD. Renstra tidak boleh berdiri sendiri: ia diturunkan dari RPJMD, sedangkan Renja diturunkan dari Renstra dan RKPD.</p>
<div class="callout kunci"><span class="c-label">Rantai konsistensi</span><p>RPJPD → RPJMD → RKPD → APBD. Di sisi perangkat daerah: RPJMD → Renstra PD → Renja PD → RKPD/APBD. Jika Renstra memuat program yang tidak ada di RKPD, program tersebut tidak otomatis mendapat anggaran.</p></div>

<h3>2. Pendekatan perencanaan</h3>
<div class="def-grid">
<div class="def"><b>Teknokratik</b>Disusun dengan metode dan data oleh perencana profesional.</div>
<div class="def"><b>Partisipatif</b>Melibatkan masyarakat dan pemangku kepentingan melalui Musrenbang.</div>
<div class="def"><b>Politik</b>Melibatkan proses politik, terutama penetapan prioritas oleh kepala daerah dan DPRD.</div>
<div class="def"><b>Bottom-up dan top-down</b>Menggabungkan usulan dari bawah dengan prioritas nasional/daerah.</div>
</div>
<div class="callout jebakan"><span class="c-label">Jebakan</span><p>RPJPD <b>tidak</b> disusun setiap lima tahun. RPJPD berlaku 20 tahun dan hanya dapat ditinjau kembali pada tahap tertentu. Yang disusun setiap lima tahun adalah <b>RPJMD</b>. Renstra juga lima tahun, tetapi milik perangkat daerah, bukan milik pemerintah daerah secara keseluruhan.</p></div>
`
    },
    {
      judul: "Siklus penyusunan dan Musrenbang",
      html: `
<h3>1. Urutan penyusunan RPJMD</h3>
<ol>
<li>Kepala daerah terpilih menyusun rancangan awal RPJMD dengan pendekatan teknokratik.</li>
<li>Penyusunan rancangan RPJMD melalui konsultasi publik dan melibatkan perangkat daerah.</li>
<li>Musrenbang RPJMD untuk menjaring aspirasi pemangku kepentingan.</li>
<li>Pembahasan dengan DPRD dan penetapan menjadi Perda.</li>
<li>Penjabaran ke Renstra PD, RKPD, dan dokumen anggaran.</li>
</ol>
<p>RPJMD memuat visi, misi, tujuan, sasaran, strategi, kebijakan, program, kegiatan, indikator, target, dan pendanaan. Renstra PD menjabarkan lebih teknis sesuai tugas dan fungsi perangkat daerah.</p>

<h3>2. Alur Musrenbang</h3>
<div class="tbl-wrap"><table>
<thead><tr><th>Tingkat</th><th>Forum</th><th>Keluaran</th></tr></thead>
<tbody>
<tr><td>Desa/Kelurahan</td><td>Musrenbangdes/Musrenbangkel</td><td>Rencana kegiatan desa/kelurahan.</td></tr>
<tr><td>Kecamatan</td><td>Musrenbang kecamatan</td><td>Usulan lintas desa dan prioritas kecamatan.</td></tr>
<tr><td>Kabupaten/Kota</td><td>Musrenbang kabupaten/kota</td><td>Prioritas pembangunan kabupaten/kota.</td></tr>
<tr><td>Provinsi</td><td>Musrenbang provinsi</td><td>Sinkronisasi prioritas kab/kota dengan provinsi.</td></tr>
<tr><td>Nasional</td><td>Musrenbang nasional</td><td>Prioritas nasional dan sinkronisasi antardaerah.</td></tr>
</tbody></table></div>
<p><strong>Musrenbangdes</strong> adalah forum musyawarah tahunan yang dilaksanakan secara partisipatif oleh para pemangku kepentingan desa untuk menyepakati rencana kegiatan di desa. Usulan yang tidak lolos di satu tingkat tidak otomatis hilang; dapat dieskalasi atau menjadi bahan perencanaan tahun berikutnya.</p>
<div class="callout kunci"><span class="c-label">Kata kunci</span><p>Musrenbang = <b>partisipasi</b>. Renstra = <b>5 tahun</b>. Renja = <b>1 tahun</b>. RKPD = <b>rencana tahunan daerah</b>. APBD = <b>wujud anggaran</b>. Dokumen perencanaan harus <b>konsisten dan berjenjang</b>.</p></div>

<h3>3. Sinkronisasi pusat–daerah</h3>
<p>Penyusunan RPJPD provinsi mengacu pada RPJP Nasional. RPJMD mengacu pada RPJPD dan RPJMN. RKPD mengacu pada RKPD provinsi (untuk kab/kota) dan RKP. Sinkronisasi bukan berarti menyalin; daerah menyesuaikan dengan kondisi, kewenangan, dan kapasitas fiskalnya.</p>
<div class="callout contoh"><span class="c-label">Contoh HOTS</span><p>Sebuah kabupaten mengusulkan program yang tidak ada dalam RPJMD, tetapi sangat dibutuhkan masyarakat. Langkah yang tepat bukan langsung memasukkan ke APBD tanpa dasar. Program tersebut perlu dibahas dalam mekanisme perubahan RPJMD/RKPD, diselaraskan dengan prioritas, dan didukung kajian serta anggaran. Perencanaan yang baik tetap memberi ruang penyesuaian melalui prosedur.</p></div>
`
    },
    {
      judul: "Indikator kinerja dan pengendalian",
      html: `
<h3>1. Membedakan output, outcome, dan impact</h3>
<div class="tbl-wrap"><table>
<thead><tr><th>Jenis</th><th>Makna</th><th>Contoh program pelatihan</th></tr></thead>
<tbody>
<tr><td>Input</td><td>Sumber daya yang digunakan.</td><td>Anggaran, trainer, ruang pelatihan.</td></tr>
<tr><td>Output</td><td>Keluaran langsung kegiatan.</td><td>Jumlah peserta yang dilatih.</td></tr>
<tr><td>Outcome</td><td>Hasil antara/manfaat.</td><td>Peningkatan kompetensi peserta.</td></tr>
<tr><td>Impact</td><td>Dampak jangka panjang.</td><td>Peningkatan produktivitas dan pendapatan.</td></tr>
</tbody></table></div>
<p>Indikator yang baik bersifat <b>spesifik, terukur, dapat dicapai, relevan, dan berbatas waktu</b> (SMART). Hindari indikator yang hanya mengukur aktivitas, seperti “jumlah rapat yang dilaksanakan”, jika tujuan yang ingin dicapai adalah perubahan perilaku atau kualitas layanan.</p>

<h3>2. Pengendalian dan evaluasi</h3>
<ul>
<li><b>Pengendalian</b> memastikan pelaksanaan rencana sesuai dengan dokumen dan target.</li>
<li><b>Evaluasi</b> menilai capaian, dampak, dan penyebab penyimpangan.</li>
<li><b>Evaluasi RPJMD</b> dilakukan pada pertengahan dan akhir periode; hasilnya menjadi dasar perbaikan.</li>
<li><b>Evaluasi RKPD</b> dilakukan untuk menilai kinerja tahunan dan menjadi masukan penyusunan RKPD berikutnya.</li>
<li>Evaluasi harus berbasis data, bukan opini; temuan harus ditindaklanjuti.</li>
</ul>
<div class="callout jebakan"><span class="c-label">Jebakan</span><p>Jumlah peserta, jumlah sosialisasi, dan jumlah dokumen adalah <b>output</b>, bukan outcome. Soal HOTS biasanya meminta indikator yang paling tepat untuk mengukur <b>keberhasilan kebijakan</b>, sehingga jawabannya cenderung pada perubahan kondisi (outcome/impact).</p></div>
<div class="callout contoh"><span class="c-label">Studi kasus</span><p>Program pelatihan kewirausahaan bagi pemuda menunjukkan 500 peserta lulus (output), tetapi hanya 80 yang benar-benar membuka usaha (outcome). Evaluasi yang baik tidak berhenti pada 500 peserta; ia menelusuri mengapa konversi ke wirausaha rendah: akses modal, pendampingan, atau pasar.</p></div>
`
    },
    {
      judul: "Isu strategis, SPM, dan praktik Jawa Tengah",
      html: `
<h3>1. Menemukan isu strategis</h3>
<p>Isu strategis adalah persoalan yang berdampak besar, bersifat jangka panjang, dan menjadi prioritas pembangunan. Isu dapat ditemukan melalui data (kemiskinan, pengangguran, stunting, IPM), aspirasi masyarakat, evaluasi program, dan analisis lingkungan strategis.</p>
<div class="tbl-wrap"><table>
<thead><tr><th>Bidang</th><th>Contoh isu strategis</th><th>Indikator yang relevan</th></tr></thead>
<tbody>
<tr><td>Ekonomi</td><td>Kewirausahaan mikro belum berkembang; ketimpangan antardaerah.</td><td>Pertumbuhan ekonomi, tingkat pengangguran, rasio gini.</td></tr>
<tr><td>Pendidikan</td><td>Angka partisipasi sekolah, kualitas pembelajaran, kesenjangan akses.</td><td>APK/APM, rata-rata lama sekolah, angka literasi.</td></tr>
<tr><td>Kesehatan</td><td>Stunting, akses layanan, penyakit menular/tidak menular.</td><td>Prevalensi stunting, cakupan imunisasi, UHC.</td></tr>
<tr><td>Lingkungan</td><td>Kerusakan lahan eks tambang, DAS, dan hutan.</td><td>Kualitas air, tutupan lahan, emisi.</td></tr>
<tr><td>Tata kelola</td><td>Kualitas layanan publik dan kapasitas administrasi.</td><td>Nilai SAKIP, SKM, indeks reformasi birokrasi.</td></tr>
</tbody></table></div>
<h3>2. Standar Pelayanan Minimal (SPM)</h3>
<p>SPM adalah ketentuan tentang jenis dan mutu pelayanan dasar yang merupakan urusan wajib daerah. SPM menjadi acuan dalam perencanaan dan penganggaran, bukan sekadar target administratif. Pemenuhan SPM harus tercermin dalam RKPD dan APBD.</p>
<h3>3. Konteks Jawa Tengah</h3>
<p>Pemerintah Provinsi Jawa Tengah menyusun dokumen perencanaan periodik: RPJPD untuk jangka panjang, RPJMD untuk periode kepala daerah, lalu RKPD setiap tahun. Bappeda berperan mengoordinasikan penyusunan dokumen, sementara perangkat daerah menyusun Renstra dan Renja sesuai tugasnya. Dalam praktik, isu lintas wilayah seperti banjir rob di pesisir, kemiskinan di daerah terpencil, konektivitas antarkabupaten, dan kualitas SDM menjadi perhatian yang perlu diterjemahkan ke program dan indikator.</p>
<div class="callout kunci"><span class="c-label">Rumus lengkap</span><p>Masalah → isu strategis → tujuan → sasaran → strategi → program → kegiatan → indikator → target → anggaran → pelaksanaan → evaluasi. Jika satu mata rantai putus, perencanaan menjadi dokumen tanpa dampak.</p></div>
<div class="callout contoh"><span class="c-label">Contoh soal HOTS</span><p>Sebuah daerah memiliki angka kemiskinan tinggi, tetapi alokasi program pemberdayaan justru menurun. Analisis yang tepat: terdapat inkonsistensi antara isu prioritas, dokumen perencanaan, dan anggaran. Perbaikan menyasar sinkronisasi RPJMD–RKPD–APBD serta monitoring indikator, bukan sekadar menambah sosialisasi.</p></div>
`
    }
  ],
  ringkasan: [
    "RPJPD 20 tahun; RPJMD 5 tahun; RKPD 1 tahun; Renstra PD 5 tahun; Renja PD 1 tahun.",
    "Rantai konsistensi: RPJPD → RPJMD → RKPD → APBD; RPJMD → Renstra PD → Renja PD.",
    "Musrenbang berjenjang dari desa/kelurahan hingga nasional; musrenbangdes adalah forum partisipatif desa.",
    "Pendekatan perencanaan: teknokratik, partisipatif, politik, bottom-up/top-down.",
    "Indikator: input, output, outcome, impact; gunakan indikator hasil, bukan hanya aktivitas.",
    "Pengendalian memastikan pelaksanaan sesuai rencana; evaluasi menilai capaian dan dampak."
  ],
  dasarHukum: [
    "UU Nomor 25 Tahun 2004 tentang Sistem Perencanaan Pembangunan Nasional.",
    "Peraturan Pemerintah Nomor 8 Tahun 2008 tentang Tahapan, Tata Cara Penyusunan, Pengendalian, dan Evaluasi Pelaksanaan Rencana Pembangunan Daerah.",
    "Peraturan Menteri Dalam Negeri Nomor 86 Tahun 2017 tentang Tata Cara Perencanaan Pembangunan Daerah.",
    "UU Nomor 23 Tahun 2014 tentang Pemerintahan Daerah sebagaimana telah diubah."
  ]
};

window.UPKP_MATERI.sotk = {
  id: "sotk",
  judul: "SOTK Pemerintah Provinsi",
  kelompok: "TSI",
  urutan: 11,
  ringkas: "Susunan organisasi dan tata kerja Pemprov Jawa Tengah: Perda 5/2025, Pergub 1–4/2026, beda Dinas–Badan–UPTD–Cabdin, eselon, dan kedudukan Gubernur.",
  estimasi: "30 menit",
  tujuan: [
    "Menjelaskan dasar hukum dan struktur SOTK Pemerintah Provinsi Jawa Tengah terbaru.",
    "Membedakan tugas Sekretariat Daerah, Sekretariat DPRD, Inspektorat, Dinas, Badan, UPTD, dan Cabang Dinas.",
    "Memetakan jabatan ke dalam JPT Madya, JPT Pratama, Administrator, dan Pengawas.",
    "Menjelaskan kedudukan Gubernur sebagai kepala daerah dan wakil pemerintah pusat."
  ],
  sections: [
    {
      judul: "Konsep SOTK dan dasar hukum Jawa Tengah",
      html: `
<p class="lead-in">SOTK adalah Susunan Organisasi dan Tata Kerja. SOTK menjelaskan kedudukan perangkat daerah, susunan organisasi, tugas dan fungsi, hubungan kerja, serta tata kerja antarunit. SOTK bukan sekadar bagan; ia menentukan siapa berwenang melakukan apa.</p>
<h3>1. Dasar hukum terbaru</h3>
<div class="tbl-wrap"><table>
<thead><tr><th>Regulasi</th><th>Materi pokok</th></tr></thead>
<tbody>
<tr><td>Perda Provinsi Jawa Tengah Nomor 5 Tahun 2025</td><td>Pembentukan dan Susunan Perangkat Daerah. Mencabut Perda 9/2016 dan Perda 5/2022.</td></tr>
<tr><td>Pergub Jawa Tengah Nomor 1 Tahun 2026</td><td>SOTK Sekretariat Daerah, Sekretariat DPRD, Inspektorat, dan Staf Ahli Gubernur.</td></tr>
<tr><td>Pergub Jawa Tengah Nomor 2 Tahun 2026</td><td>SOTK Dinas dan Badan.</td></tr>
<tr><td>Pergub Jawa Tengah Nomor 3 Tahun 2026</td><td>SOTK Unit Pelaksana Teknis Daerah (UPTD).</td></tr>
<tr><td>Pergub Jawa Tengah Nomor 4 Tahun 2026</td><td>SOTK Cabang Dinas.</td></tr>
</tbody></table></div>
<p>Keempat Pergub tersebut ditetapkan pada 5 Januari 2026 untuk mengatur struktur organisasi Pemprov Jawa Tengah berdasarkan Perda 5/2025.</p>
<div class="callout kunci"><span class="c-label">Rumus hafalan</span><p><b>1</b> = Setda, DPRD, Inspektorat, Staf Ahli · <b>2</b> = Dinas &amp; Badan · <b>3</b> = UPTD · <b>4</b> = Cabang Dinas. Induknya Perda 5/2025.</p></div>

<h3>2. Gambaran besar struktur</h3>
<div class="def-grid">
<div class="def"><b>Gubernur &amp; Wakil Gubernur</b>Memimpin penyelenggaraan pemerintahan daerah provinsi.</div>
<div class="def"><b>Sekretariat Daerah</b>Membantu Gubernur dalam koordinasi administratif dan penyusunan kebijakan.</div>
<div class="def"><b>Sekretariat DPRD</b>Mendukung tugas dan fungsi DPRD.</div>
<div class="def"><b>Inspektorat</b>Melaksanakan pengawasan internal.</div>
<div class="def"><b>Dinas</b>Melaksanakan urusan pemerintahan daerah.</div>
<div class="def"><b>Badan</b>Menunjang urusan pemerintahan tertentu.</div>
<div class="def"><b>Staf Ahli Gubernur</b>Memberikan telaahan/kajian kepada Gubernur; bukan perangkat daerah.</div>
<div class="def"><b>UPTD &amp; Cabang Dinas</b>Unit teknis operasional dan pelaksana sebagian tugas dinas di wilayah.</div>
</div>
<div class="callout jebakan"><span class="c-label">Jebakan</span><p><b>Staf Ahli Gubernur bukan perangkat daerah.</b> Ia adalah unsur pembantu Gubernur. Demikian pula Gubernur dan Wakil Gubernur bukan perangkat daerah; mereka adalah kepala dan wakil kepala daerah.</p></div>
`
    },
    {
      judul: "Setda, Sekwan, Inspektorat, Dinas, dan Badan",
      html: `
<div class="tbl-wrap"><table>
<thead><tr><th>Unsur</th><th>Tugas pokok</th><th>Kata kunci</th></tr></thead>
<tbody>
<tr><td>Sekretariat Daerah (Setda)</td><td>Membantu Gubernur menyusun kebijakan dan mengoordinasikan administrasi perangkat daerah serta pelayanan administratif.</td><td>Koordinasi + administrasi</td></tr>
<tr><td>Sekretariat DPRD (Sekwan)</td><td>Mendukung pelaksanaan tugas dan fungsi DPRD: administrasi kesekretariatan, keuangan, fasilitasi rapat, dan tenaga ahli.</td><td>Fasilitasi DPRD</td></tr>
<tr><td>Inspektorat</td><td>Melaksanakan pengawasan internal terhadap penyelenggaraan pemerintahan daerah: audit, reviu, evaluasi, pemantauan.</td><td>Pengawasan</td></tr>
<tr><td>Dinas</td><td>Melaksanakan urusan pemerintahan yang menjadi kewenangan daerah.</td><td>Pelaksana urusan</td></tr>
<tr><td>Badan</td><td>Menunjang urusan pemerintahan sesuai bidangnya.</td><td>Penunjang</td></tr>
<tr><td>Staf Ahli</td><td>Memberikan telaahan/kajian dan rekomendasi kepada Gubernur.</td><td>Kajian/nasihat</td></tr>
</tbody></table></div>
<h3>1. Setda vs Sekwan</h3>
<p>Setda melayani Gubernur dan koordinasi seluruh perangkat daerah. Sekwan melayani DPRD. Keduanya berbeda mitra kerja. Jika soal menyebut “dukungan administratif kepada DPRD”, jawabannya <b>Sekretariat DPRD</b>, bukan Setda.</p>
<h3>2. Dinas vs Badan</h3>
<p><b>Dinas</b> adalah pelaksana urusan pemerintahan (misalnya Pendidikan, Kesehatan, Perhubungan, Sosial). <b>Badan</b> adalah penunjang urusan pemerintahan (misalnya perencanaan, kepegawaian, keuangan, pendapatan, penelitian dan pengembangan). Perbedaan ini sering diuji dengan kalimat “pelaksana atau penunjang?”.</p>
<div class="callout kunci"><span class="c-label">Hafalan super cepat</span><p>Koordinasi administratif = Setda · Mendukung DPRD = Sekwan · Pengawasan internal = Inspektorat · Pelaksana urusan = Dinas · Penunjang urusan = Badan · Kajian Gubernur = Staf Ahli.</p></div>
<div class="callout jebakan"><span class="c-label">Jebakan</span><p>Bappeda adalah <b>Badan</b> (penunjang fungsi perencanaan), bukan Dinas. BKD adalah <b>Badan</b> yang menangani kepegawaian. Jangan menebak dari nama; lihat fungsi utamanya.</p></div>

<h3>3. Sekretaris DPRD termasuk jabatan apa?</h3>
<p>Sekwan adalah <b>JPT Pratama</b>. Di provinsi berkedudukan eselon <b>II.a</b>; di kabupaten/kota eselon <b>II.b</b>. Sekwan diangkat dan diberhentikan oleh kepala daerah sesuai ketentuan, dengan mekanisme yang melibatkan pimpinan DPRD sesuai jenjangnya — bukan diangkat oleh Ketua DPRD.</p>
`
    },
    {
      judul: "UPTD, Cabang Dinas, dan peta eselon",
      html: `
<h3>1. UPTD dan Cabang Dinas</h3>
<div class="tbl-wrap"><table>
<thead><tr><th>Unit</th><th>Fungsi</th><th>Dasar</th><th>Kata kunci</th></tr></thead>
<tbody>
<tr><td>UPTD</td><td>Melaksanakan kegiatan teknis operasional dan/atau teknis penunjang tertentu pada perangkat daerah.</td><td>Pergub 3/2026</td><td>Teknis operasional</td></tr>
<tr><td>Cabang Dinas</td><td>Melaksanakan sebagian tugas Dinas pada wilayah kerja tertentu.</td><td>Pergub 4/2026</td><td>Dinas di wilayah</td></tr>
</tbody></table></div>
<p>UPTD berada di bawah perangkat daerah dan melayani kegiatan teknis, misalnya laboratorium kesehatan atau balai pelatihan. Cabang Dinas merupakan perpanjangan Dinas di wilayah agar layanan lebih dekat kepada masyarakat. Keduanya bukan Dinas baru; keduanya menjalankan sebagian fungsi.</p>

<h3>2. Peta jabatan dan eselon</h3>
<div class="tbl-wrap"><table>
<thead><tr><th>Jabatan</th><th>Eselon/kelas</th><th>Contoh</th></tr></thead>
<tbody>
<tr><td>JPT Madya</td><td>Eselon I</td><td>Sekretaris Daerah Provinsi; pejabat setingkat eselon I.</td></tr>
<tr><td>JPT Pratama</td><td>II.a/II.b</td><td>Kepala Dinas, Kepala Badan, Sekwan.</td></tr>
<tr><td>Administrator</td><td>III.a/III.b</td><td>Sekretaris Dinas, Kepala Bidang, Kepala Bagian.</td></tr>
<tr><td>Pengawas</td><td>IV.a/IV.b</td><td>Kepala Subbagian, Kepala Seksi.</td></tr>
</tbody></table></div>
<div class="callout kunci"><span class="c-label">Bocoran eselon</span><p>Kadis = II.b/JPT Pratama · Sekdis = III.a/Administrator · Kabid = III.a · Kabag = III.a · Kasubbag = IV.a/Pengawas · Kasi = IV.a/Pengawas. Hafalkan pola ini karena sering muncul dalam soal pencocokan.</p></div>
<div class="callout jebakan"><span class="c-label">Jebakan</span><p>Jabatan yang dipilih rakyat — Gubernur, Bupati, Wali Kota, dan Kepala Desa — bukan JPT. JPT adalah jabatan karier ASN yang diisi melalui seleksi dan penetapan pejabat berwenang.</p></div>
`
    },
    {
      judul: "Kedudukan Gubernur dan hubungan pusat–daerah",
      html: `
<h3>1. Dua kedudukan Gubernur</h3>
<div class="tbl-wrap"><table>
<thead><tr><th>Kedudukan</th><th>Peran</th></tr></thead>
<tbody>
<tr><td>Kepala Daerah Provinsi</td><td>Memimpin penyelenggaraan pemerintahan daerah provinsi sebagai daerah otonom.</td></tr>
<tr><td>Wakil Pemerintah Pusat</td><td>Melaksanakan pembinaan dan pengawasan terhadap penyelenggaraan pemerintahan kabupaten/kota serta koordinasi pemerintahan di wilayah provinsi.</td></tr>
</tbody></table></div>
<p><strong>Rumus:</strong> GUBERNUR = KEPALA DAERAH + WAKIL PEMERINTAH PUSAT. Fungsi sebagai wakil pemerintah pusat: <b>BINA – AWASI – KOORDINASI</b>.</p>
<ul>
<li><b>Bina:</b> membina penyelenggaraan pemerintahan kabupaten/kota.</li>
<li><b>Awasi:</b> mengawasi penyelenggaraan pemerintahan kabupaten/kota.</li>
<li><b>Koordinasi:</b> mengoordinasikan penyelenggaraan pemerintahan di wilayah provinsi.</li>
</ul>

<h3>2. Desentralisasi, dekonsentrasi, dan tugas pembantuan</h3>
<div class="tbl-wrap"><table>
<thead><tr><th>Konsep</th><th>Makna</th><th>Contoh</th></tr></thead>
<tbody>
<tr><td>Sentralisasi</td><td>Kewenangan terpusat pada pemerintah pusat.</td><td>Kebijakan moneter nasional.</td></tr>
<tr><td>Desentralisasi</td><td>Pelimpahan kewenangan kepada daerah otonom.</td><td>Pengelolaan pendidikan dasar oleh kab/kota.</td></tr>
<tr><td>Dekonsentrasi</td><td>Pelimpahan wewenang pusat kepada gubernur sebagai wakil pemerintah pusat dan/atau perangkat pusat di daerah.</td><td>Gubernur menjalankan fungsi pembinaan kab/kota.</td></tr>
<tr><td>Tugas pembantuan</td><td>Penugasan dari pusat/daerah atasan kepada daerah/desa untuk melaksanakan tugas tertentu.</td><td>Daerah membantu program nasional dengan dukungan anggaran.</td></tr>
</tbody></table></div>
<p>Pemerintah Provinsi dipimpin Gubernur yang bertanggung jawab kepada Presiden melalui Menteri Dalam Negeri. Camat berkedudukan di bawah dan bertanggung jawab kepada Bupati/Wali Kota melalui Sekretaris Daerah.</p>
<div class="callout contoh"><span class="c-label">Studi kasus HOTS</span><p>Seorang bupati mengeluarkan kebijakan yang bertentangan dengan peraturan provinsi. Gubernur tidak dapat langsung membatalkan keputusan bupati seenaknya. Ia menjalankan fungsi pembinaan dan pengawasan, meminta klarifikasi, melakukan reviu sesuai kewenangan, dan menempuh mekanisme yang diatur hukum. Ini mencerminkan makna “wakil pemerintah pusat” tanpa melampaui batas.</p></div>
<div class="callout kunci"><span class="c-label">Kata kunci akhir</span><p>SOTK menjelaskan <b>siapa berwenang apa</b>. Dalam soal kasus, pilih unit yang paling dekat dengan fungsi: koordinasi → Setda; DPRD → Sekwan; pengawasan → Inspektorat; urusan teknis → Dinas; penunjang → Badan; operasional → UPTD; wilayah → Cabang Dinas.</p></div>
`
    }
  ],
  ringkasan: [
    "Perda Jateng 5/2025 adalah induk SOTK; Pergub 1/2026 Setda/DPRD/Inspektorat/Staf Ahli; 2/2026 Dinas & Badan; 3/2026 UPTD; 4/2026 Cabang Dinas.",
    "Setda = koordinasi administratif; Sekwan = fasilitasi DPRD; Inspektorat = pengawasan internal.",
    "Dinas = pelaksana urusan; Badan = penunjang; UPTD = teknis operasional; Cabdin = sebagian tugas Dinas di wilayah.",
    "Sekwan = JPT Pratama; Provinsi II.a, Kab/Kota II.b.",
    "Gubernur = kepala daerah + wakil pemerintah pusat; BINA–AWASI–KOORDINASI.",
    "Staf Ahli Gubernur memberikan kajian dan bukan perangkat daerah."
  ],
  dasarHukum: [
    "Perda Provinsi Jawa Tengah Nomor 5 Tahun 2025 tentang Pembentukan dan Susunan Perangkat Daerah.",
    "Pergub Jawa Tengah Nomor 1 Tahun 2026 tentang SOTK Setda, Sekretariat DPRD, Inspektorat, dan Staf Ahli.",
    "Pergub Jawa Tengah Nomor 2 Tahun 2026 tentang SOTK Dinas dan Badan.",
    "Pergub Jawa Tengah Nomor 3 Tahun 2026 tentang UPTD.",
    "Pergub Jawa Tengah Nomor 4 Tahun 2026 tentang Cabang Dinas.",
    "UU Nomor 23 Tahun 2014 tentang Pemerintahan Daerah sebagaimana telah diubah."
  ]
};
