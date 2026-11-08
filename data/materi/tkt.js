/* ============================================================
   Materi TKT — Perkantoran, Kepegawaian, Pelayanan Publik,
   Good Governance, Kebijakan Publik
   ============================================================ */
window.UPKP_MATERI = window.UPKP_MATERI || {};

window.UPKP_MATERI.perkantoran = {
  id: "perkantoran",
  judul: "Manajemen Perkantoran",
  kelompok: "TKT",
  urutan: 5,
  ringkas: "Fungsi manajemen POAC, tata persuratan dan disposisi, kearsipan, teknologi kantor, rapat, serta K3 dan etika kerja.",
  estimasi: "26 menit",
  tujuan: [
    "Menjelaskan fungsi manajemen perkantoran dan membedakan perencanaan, pengorganisasian, pelaksanaan, serta pengawasan.",
    "Menguraikan alur surat masuk dan keluar, disposisi, laporan, serta perbedaan buku agenda dan buku ekspedisi.",
    "Memilih perangkat dan aplikasi kantor yang tepat untuk suatu pekerjaan administrasi.",
    "Menerapkan prinsip rapat efektif, K3 perkantoran, dan etika kerja dalam kasus nyata."
  ],
  sections: [
    {
      judul: "Manajemen perkantoran dan fungsi POAC",
      html: `
<p class="lead-in">Manajemen perkantoran adalah rangkaian kegiatan merencanakan, mengorganisasikan, mengarahkan, mengawasi, dan mengendalikan pekerjaan kantor agar informasi dan layanan administrasi tersedia tepat waktu, tepat mutu, dan tepat biaya.</p>
<h3>1. Lima fungsi yang harus melekat</h3>
<div class="tbl-wrap"><table>
<thead><tr><th>Fungsi</th><th>Inti kegiatan</th><th>Contoh di kantor</th></tr></thead>
<tbody>
<tr><td>Planning</td><td>Menetapkan tujuan, target, strategi, standar kerja, dan sumber daya.</td><td>Menyusun rencana kerja tahunan dan target layanan surat.</td></tr>
<tr><td>Organizing</td><td>Membagi tugas, menetapkan wewenang, dan menyusun koordinasi.</td><td>Menentukan siapa penerima surat, pencatat agenda, dan pengarsip.</td></tr>
<tr><td>Actuating / directing</td><td>Menggerakkan, membimbing, dan memotivasi pelaksana.</td><td>Mengarahkan staf saat rapat koordinasi pagi.</td></tr>
<tr><td>Controlling</td><td>Membandingkan rencana dan hasil, menemukan penyimpangan, lalu memperbaiki.</td><td>Memeriksa keterlambatan penyelesaian surat setiap pekan.</td></tr>
<tr><td>Evaluating</td><td>Menilai capaian dan pembelajaran untuk perbaikan berikutnya.</td><td>Mengevaluasi kepuasan pengguna layanan administrasi.</td></tr>
</tbody></table></div>
<p><strong>Pengawasan</strong> bukan sekadar mencari kesalahan. Pengawasan adalah proses pengamatan pelaksanaan seluruh kegiatan organisasi untuk menjamin agar pekerjaan berjalan sesuai rencana. Karena itu, pengawasan yang baik selalu memiliki <b>standar</b>, <b>alat ukur</b>, dan <b>tindak lanjut</b>.</p>
<div class="callout kunci"><span class="c-label">Kata kunci</span><p>Kegiatan administrasi memberi manfaat maksimal bila ada <b>program kerja</b>, <b>laporan</b>, dan <b>pengawasan</b>. Manajemen perkantoran = <b>merencanakan–mengorganisasikan–mengarahkan–mengawasi–mengendalikan</b>.</p></div>

<h3>2. Prinsip pembagian kerja dan delegasi</h3>
<ul>
<li><b>Delegasi</b> adalah pemberian sebagian tanggung jawab dan kewenangan kepada bawahan, bukan pelepasan tanggung jawab atasan.</li>
<li><b>Rentang kendali</b> adalah jumlah bawahan yang dapat dikelola secara efektif oleh seorang pimpinan.</li>
<li><b>Kesatuan komando</b> berarti seorang pegawai sebaiknya menerima perintah dari satu atasan langsung agar tidak terjadi tumpang tindih.</li>
<li><b>Koordinasi</b> menyelaraskan pekerjaan antarunit sehingga tidak ada pekerjaan yang tumpang tindih atau kosong.</li>
</ul>
<div class="callout jebakan"><span class="c-label">Jebakan</span><p>Soal sering menukar <b>actuating</b> dengan <b>organizing</b>. Membagi tugas dan menetapkan wewenang = organizing. Memberi arahan, mendampingi, dan memotivasi pelaksana = actuating/directing.</p></div>
`
    },
    {
      judul: "Tata persuratan dinas, disposisi, dan laporan",
      html: `
<h3>1. Jenis dan arah surat</h3>
<div class="tbl-wrap"><table>
<thead><tr><th>Jenis</th><th>Ciri</th><th>Contoh</th></tr></thead>
<tbody>
<tr><td>Surat dinas</td><td>Dibuat instansi untuk kepentingan kedinasan, memakai kop dan bahasa resmi.</td><td>Undangan rapat, permohonan narasumber.</td></tr>
<tr><td>Surat internal</td><td>Beredar di dalam organisasi.</td><td>Nota dinas, memo, surat tugas.</td></tr>
<tr><td>Surat eksternal</td><td>Dikirim kepada instansi atau pihak lain di luar organisasi.</td><td>Surat resmi kepada BKD atau kementerian.</td></tr>
<tr><td>Surat masuk</td><td>Diterima organisasi, perlu dicatat dan didisposisi.</td><td>Undangan dari gubernur.</td></tr>
<tr><td>Surat keluar</td><td>Dibuat organisasi untuk pihak lain, perlu dinomori dan diarsipkan.</td><td>Balasan permohonan data.</td></tr>
</tbody></table></div>

<h3>2. Alur surat masuk yang benar</h3>
<ol>
<li><b>Penerimaan</b> dan pemeriksaan kelengkapan surat.</li>
<li><b>Pencatatan</b> pada buku agenda atau sistem persuratan elektronik.</li>
<li><b>Penyampaian</b> kepada pimpinan atau pejabat yang berwenang.</li>
<li><b>Disposisi</b> dari pimpinan kepada unit/pelaksana.</li>
<li><b>Tindak lanjut</b> oleh pelaksana, disertai jawaban atau laporan.</li>
<li><b>Pengarsipan</b> surat beserta bukti tindak lanjut.</li>
</ol>
<p><strong>Disposisi</strong> adalah bahasa komunikasi dari pimpinan kepada bawahan berisi arahan, persetujuan, penolakan, atau permintaan tindak lanjut. <strong>Laporan</strong> adalah komunikasi dari bawahan kepada atasan mengenai pelaksanaan tugas. Keduanya berbeda arah.</p>
<div class="callout kunci"><span class="c-label">Hafalan cepat</span><p>Disposisi = <b>atas → bawah</b>. Laporan = <b>bawah → atas</b>. Buku agenda = mencatat surat masuk/keluar. Buku ekspedisi = mengantar/mengirim surat dan memperoleh tanda terima.</p></div>

<h3>3. Struktur dan bahasa surat dinas</h3>
<p>Bagian surat dinas: kepala surat, nomor, tanggal, lampiran, hal, alamat tujuan, salam pembuka, isi, penutup, tanda tangan, nama dan jabatan, serta tembusan. Bahasa surat harus <b>jelas, lugas, menarik, dan sopan</b>.</p>
<ul>
<li><b>a.n.</b> (atas nama) dipakai jika pejabat menandatangani untuk mengatasnamakan pejabat di atasnya, tetapi masih dalam lingkup kewenangannya.</li>
<li><b>u.b.</b> (untuk beliau) dipakai jika ada pelimpahan penuh kepada pejabat di bawahnya.</li>
<li>Tanggal surat diletakkan di bawah nomor surat atau di kanan atas, bukan di bawah kop surat.</li>
<li>Kata <i>hal</i> tidak perlu diikuti <i>perihal</i> karena maknanya sama.</li>
</ul>
<div class="callout contoh"><span class="c-label">Contoh HOTS</span><p>Sebuah surat undangan gubernur diterima staf tata usaha, tetapi pimpinan sedang dinas luar. Tindakan paling tepat: catat surat, sampaikan kepada pejabat pengganti/PLH sesuai kewenangan, minta disposisi, lalu tindak lanjuti tanpa menunggu pimpinan kembali. Surat tidak boleh dibiarkan menumpuk hanya karena pimpinan tidak di tempat.</p></div>
`
    },
    {
      judul: "Kearsipan, teknologi kantor, dan keamanan data",
      html: `
<h3>1. Kearsipan</h3>
<p>Arsip adalah rekaman kegiatan organisasi dalam berbagai bentuk dan media. Pengelolaan arsip bertujuan menjamin ketersediaan, keutuhan, keamanan, dan penyusutan yang tertib.</p>
<div class="tbl-wrap"><table>
<thead><tr><th>Klasifikasi</th><th>Makna</th><th>Contoh</th></tr></thead>
<tbody>
<tr><td>Arsip aktif</td><td>Masih sering dipakai untuk kegiatan sehari-hari.</td><td>Surat tugas pegawai yang masih berlaku.</td></tr>
<tr><td>Arsip inaktif</td><td>Frekuensi pemakaian menurun, disimpan untuk kepentingan hukum/audit.</td><td>Dokumen pengadaan tahun lalu.</td></tr>
<tr><td>Arsip vital</td><td>Mutlak diperlukan untuk kelangsungan organisasi.</td><td>Akta tanah, dokumen kepemilikan aset.</td></tr>
<tr><td>Arsip statis</td><td>Memiliki nilai historis dan diserahkan ke lembaga kearsipan.</td><td>Dokumen sejarah instansi.</td></tr>
</tbody></table></div>
<p>Sistem penyimpanan dapat <b>sentralisasi</b> (satu pusat arsip) atau <b>desentralisasi</b> (tersebar per unit). <b>Jadwal retensi arsip</b> menentukan berapa lama arsip disimpan sebelum dinilai dan dimusnahkan. Pemusnahan harus melalui penilaian, berita acara, dan tidak boleh menghilangkan arsip yang masih dalam sengketa/audit.</p>

<h3>2. Perangkat dan aplikasi kantor</h3>
<div class="tbl-wrap"><table>
<thead><tr><th>Kebutuhan</th><th>Perangkat/aplikasi yang tepat</th></tr></thead>
<tbody>
<tr><td>Mengetik dan menata naskah dinas</td><td>Microsoft Word atau pengolah kata sejenis.</td></tr>
<tr><td>Mengelola kas kecil dan laporan keuangan sederhana</td><td>Microsoft Excel atau pengolah angka.</td></tr>
<tr><td>Presentasi rapat</td><td>Microsoft PowerPoint atau aplikasi presentasi.</td></tr>
<tr><td>Rapat daring</td><td>Zoom, Google Meet, Microsoft Teams.</td></tr>
<tr><td>Persuratan elektronik</td><td>Sistem e-office/SRIKANDI atau aplikasi persuratan instansi.</td></tr>
<tr><td>Penyimpanan bersama</td><td>Drive instansi dengan hak akses dan cadangan (backup).</td></tr>
</tbody></table></div>
<p>Perangkat komputer minimal terdiri atas <b>CPU, monitor, keyboard, dan mouse</b>. Perangkat keras lain seperti printer, scanner, dan UPS bersifat pendukung. Keamanan data menuntut kata sandi kuat, pembaruan perangkat lunak, cadangan berkala, serta pembatasan hak akses sesuai kebutuhan jabatan.</p>
<div class="callout jebakan"><span class="c-label">Jebakan</span><p>Laporan keuangan kas kecil paling tepat dibuat dengan <b>Excel</b>, bukan Word. Word digunakan untuk naskah yang dominan teks. Menyimpan satu-satunya salinan dokumen penting hanya di flashdisk tanpa cadangan adalah praktik berisiko.</p></div>
`
    },
    {
      judul: "Rapat, K3 perkantoran, dan etika kerja",
      html: `
<h3>1. Rapat yang efektif</h3>
<p>Dokumen yang disiapkan <b>sebelum</b> rapat: undangan, agenda, dan bahan rapat. Saat rapat: daftar hadir, notulen, dan pencatatan keputusan. Setelah rapat: notulen disahkan, keputusan didistribusikan, dan tindak lanjut dipantau.</p>
<ul>
<li>Undangan memuat waktu, tempat, agenda, dan pihak yang diundang.</li>
<li>Agenda menjaga rapat tetap fokus dan mencegah pembahasan melebar.</li>
<li>Notulen mencatat pokok pembahasan, keputusan, dan penanggung jawab tindak lanjut.</li>
<li>Rapat tanpa agenda dan tanpa keputusan berisiko menjadi rapat yang tidak produktif.</li>
</ul>

<h3>2. Kesehatan dan keselamatan kerja (K3) kantor</h3>
<p>K3 perkantoran mencakup ketersediaan <b>air bersih</b>, ventilasi dan pencahayaan yang memadai, kebersihan ruang, ergonomi meja-kursi, jalur evakuasi yang jelas, serta alat pemadam api ringan (APAR). Kesehatan kerja juga mencakup pencegahan kelelahan, pengaturan waktu istirahat, dan pemeriksaan kesehatan berkala.</p>
<div class="def-grid">
<div class="def"><b>Ergonomi</b>Posisi duduk, tinggi meja, dan letak monitor disesuaikan agar mengurangi cedera otot dan kelelahan.</div>
<div class="def"><b>Kebersihan</b>Air bersih, sanitasi, dan pengelolaan sampah mencegah penyakit di lingkungan kerja.</div>
<div class="def"><b>Keamanan</b>Akses ruang, penguncian dokumen, dan pengawasan tamu melindungi aset serta informasi.</div>
<div class="def"><b>Etika</b>Ramah, sopan, tepat waktu, menjaga rahasia jabatan, dan tidak menyalahgunakan fasilitas kantor.</div>
</div>

<h3>3. Studi kasus terpadu</h3>
<div class="callout contoh"><span class="c-label">Kasus</span><p>Seorang staf menerima surat penawaran kerja sama melalui surel. Lampirannya berformat <i>.exe</i> dan pengirim meminta segera dibuka karena “penawaran berakhir hari ini”. Staf tersebut juga harus menyiapkan laporan kas kecil untuk rapat esok hari.</p></div>
<p><b>Analisis:</b> (1) jangan membuka lampiran <i>.exe</i>; verifikasi pengirim melalui kanal resmi; (2) teruskan ke unit TI/keamanan informasi; (3) laporan kas kecil disusun dengan Excel dan direviu atasan; (4) arsipkan surat dan bukti tindak lanjut. Tindakan ini menggabungkan keamanan informasi, manajemen perkantoran, dan etika kedinasan.</p>
<div class="callout kunci"><span class="c-label">Rumus menjawab</span><p>Baca peran Anda → tentukan kewenangan → pilih tindakan yang <b>tidak melampaui wewenang</b> tetapi <b>tidak membiarkan masalah</b> → pastikan ada pencatatan, koordinasi, dan tindak lanjut.</p></div>
`
    }
  ],
  ringkasan: [
    "Manajemen perkantoran = merencanakan, mengorganisasikan, mengarahkan, mengawasi, mengendalikan.",
    "Disposisi dari atasan ke bawahan; laporan dari bawahan ke atasan; buku ekspedisi untuk pengiriman surat.",
    "Surat eksternal dikirim ke pihak luar; surat dinas memakai kop dan bahasa resmi yang jelas, lugas, menarik, sopan.",
    "Excel untuk kas kecil dan laporan keuangan; Word untuk naskah teks; perangkat minimal CPU, monitor, keyboard, mouse.",
    "Dokumen rapat: undangan, agenda, bahan; hasil rapat: notulen dan daftar hadir.",
    "K3 kantor: air bersih, ventilasi, pencahayaan, ergonomi, APAR, kebersihan."
  ],
  dasarHukum: [
    "UU Nomor 43 Tahun 2009 tentang Kearsipan.",
    "Peraturan Pemerintah Nomor 28 Tahun 2012 tentang Pelaksanaan UU Kearsipan.",
    "Peraturan Menteri Pendayagunaan Aparatur Negara dan Reformasi Birokrasi tentang tata naskah dinas dan kearsipan.",
    "UU Nomor 1 Tahun 1970 tentang Keselamatan Kerja (konteks K3)."
  ]
};

window.UPKP_MATERI.kepegawaian = {
  id: "kepegawaian",
  judul: "Peraturan Kepegawaian",
  kelompok: "TKT",
  urutan: 6,
  ringkas: "Manajemen ASN, peta jabatan dan eselon, angka kredit, PLH–PJ–PLT, disiplin PP 94/2021, serta pemberhentian dan pensiun.",
  estimasi: "30 menit",
  tujuan: [
    "Membedakan PNS, PPPK, JPT Madya, JPT Pratama, Administrator, Pengawas, dan jabatan fungsional.",
    "Menjelaskan mekanisme kenaikan pangkat serta peran angka kredit dan penilaian kinerja.",
    "Membedakan PLH, PJ, dan PLT berdasarkan situasi, pengangkat, dan kewenangannya.",
    "Mengidentifikasi jenis hukuman disiplin dan alasan pemberhentian ASN."
  ],
  sections: [
    {
      judul: "Manajemen ASN dan peta jabatan",
      html: `
<p class="lead-in">Sejak berlakunya UU Nomor 20 Tahun 2023 tentang Aparatur Sipil Negara, istilah ASN mencakup <strong>PNS</strong> dan <strong>PPPK</strong>. Manajemen ASN berpedoman pada sistem merit: kualifikasi, kompetensi, dan kinerja diperlakukan secara adil dan transparan.</p>
<h3>1. Jenis jabatan</h3>
<div class="tbl-wrap"><table>
<thead><tr><th>Jabatan</th><th>Eselon/kelas</th><th>Contoh</th><th>Kata kunci</th></tr></thead>
<tbody>
<tr><td>JPT Madya</td><td>Eselon I</td><td>Sekretaris Daerah Provinsi; Sekjen/Dirjen/Deputi di kementerian/lembaga.</td><td>Pimpinan tinggi tingkat madya</td></tr>
<tr><td>JPT Pratama</td><td>Eselon II.a/II.b</td><td>Kepala Dinas, Kepala Badan, Sekretaris DPRD (Sekwan).</td><td>Pimpinan tinggi tingkat pratama</td></tr>
<tr><td>Administrator</td><td>Eselon III.a/III.b</td><td>Sekretaris Dinas, Kepala Bidang, Kepala Bagian.</td><td>Menkoordinasikan unit</td></tr>
<tr><td>Pengawas</td><td>Eselon IV.a/IV.b</td><td>Kepala Subbagian, Kepala Seksi.</td><td>Mengawasi pelaksana</td></tr>
<tr><td>Jabatan Fungsional</td><td>Jenjang sesuai JF</td><td>Auditor, perencana, dokter, guru, arsiparis.</td><td>Keahlian/keterampilan</td></tr>
<tr><td>Pelaksana</td><td>Eselon V (warisan lama)</td><td>Staf pelaksana.</td><td>Melaksanakan tugas teknis</td></tr>
</tbody></table></div>
<p><strong>Sekretaris DPRD</strong> (Sekwan) termasuk <b>JPT Pratama</b>. Di provinsi berkedudukan eselon II.a, sedangkan di kabupaten/kota eselon II.b. Sekwan mendukung tugas dan fungsi DPRD, bukan pejabat politik yang dipilih rakyat.</p>
<div class="callout kunci"><span class="c-label">Hafalan eselon</span><p>Kadis = II.b/JPT Pratama · Sekdis, Kabid, Kabag = III.a/Administrator · Kasubbag, Kasi = IV.a/Pengawas. Sekwan Provinsi = II.a; Sekwan Kab/Kota = II.b. JPT Madya = eselon I.</p></div>
<div class="callout jebakan"><span class="c-label">Jebakan</span><p>Gubernur, bupati, dan wali kota adalah <b>pejabat negara/kepala daerah</b>, bukan JPT. Pejabat yang dipilih rakyat tidak otomatis berstatus JPT. JPT adalah jabatan karier ASN yang diisi melalui seleksi.</p></div>

<h3>2. Hak dan kewajiban ASN</h3>
<ul>
<li>Kewajiban: setia pada Pancasila, UUD 1945, NKRI, dan pemerintah; menjaga rahasia jabatan; melayani publik; menjaga integritas.</li>
<li>Hak: gaji, tunjangan, cuti, jaminan sosial, pengembangan kompetensi, dan perlindungan hukum dalam menjalankan tugas.</li>
<li>ASN dilarang menjadi anggota partai politik, menggunakan atribut partai, atau berpihak kepada peserta pemilu.</li>
</ul>
`
    },
    {
      judul: "Pangkat, angka kredit, dan manajemen kinerja",
      html: `
<h3>1. Pangkat dan kenaikan pangkat</h3>
<p>Pangkat adalah kedudukan yang menunjukkan tingkat seseorang dalam jenjang kepangkatan. Kenaikan pangkat dapat bersifat <b>reguler</b>, <b>pilihan</b>, atau <b>istimewa</b>. Kenaikan pangkat reguler umumnya ditetapkan dua kali setahun, yaitu <b>1 April</b> dan <b>1 Oktober</b>.</p>
<div class="tbl-wrap"><table>
<thead><tr><th>Jenis</th><th>Dasar</th><th>Contoh</th></tr></thead>
<tbody>
<tr><td>Reguler</td><td>Memenuhi masa kepangkatan dan syarat administratif.</td><td>Dari III/a ke III/b setelah memenuhi masa dan syarat.</td></tr>
<tr><td>Pilihan</td><td>Prestasi kerja luar biasa, pendidikan, atau kebutuhan organisasi.</td><td>Pegawai berprestasi tinggi memperoleh kenaikan lebih cepat.</td></tr>
<tr><td>Istimewa</td><td>Kondisi tertentu sesuai peraturan, misalnya penyesuaian ijazah.</td><td>Penyesuaian angkatan/kelulusan.</td></tr>
</tbody></table></div>
<p><strong>Angka kredit</strong> adalah nilai dari butir kegiatan yang dilakukan pejabat fungsional. Ketika angka kredit yang dipersyaratkan <b>sudah terpenuhi</b> dan syarat lain lengkap, usulan kenaikan pangkat dapat diajukan. Angka kredit tidak berdiri sendiri: tetap ada syarat kinerja, disiplin, dan kelengkapan dokumen.</p>
<div class="callout kunci"><span class="c-label">Bocoran</span><p>Pertanyaan “kenaikan pangkat jika angka kredit sudah terpenuhi” menguji pemahaman bahwa pemenuhan angka kredit adalah <b>salah satu syarat utama</b>, bukan satu-satunya syarat. Usulan tetap melalui mekanisme instansi dan penetapan pejabat yang berwenang.</p></div>

<h3>2. Penilaian kinerja</h3>
<p>Penilaian kinerja PNS dilakukan melalui <b>Sasaran Kinerja Pegawai (SKP)</b> dan penilaian perilaku kerja. Hasilnya digunakan untuk pengembangan karier, tunjangan kinerja, promosi, mutasi, dan pembinaan. Sejak era SAKIP, kinerja organisasi diukur melalui indikator kinerja utama (IKU) dan laporan akuntabilitas kinerja.</p>
<div class="def-grid">
<div class="def"><b>SKP</b>Rencana kinerja tahunan yang memuat sasaran, indikator, dan target yang disepakati atasan–bawahan.</div>
<div class="def"><b>Perilaku kerja</b>Penilaian integritas, profesionalisme, orientasi pelayanan, komitmen, dan kerja sama.</div>
<div class="def"><b>Diklat</b>Pengembangan kompetensi minimal 20 jam pelajaran per tahun bagi ASN.</div>
<div class="def"><b>Mutasi</b>Perpindahan jabatan/unit untuk pengembangan karier atau kebutuhan organisasi.</div>
</div>
<div class="callout jebakan"><span class="c-label">Jebakan</span><p>Angka kredit digunakan terutama untuk <b>jabatan fungsional</b>, bukan untuk semua jabatan struktural. Kenaikan pangkat struktural lebih ditentukan oleh syarat kepangkatan, kinerja, dan formasi.</p></div>
`
    },
    {
      judul: "PLH, PJ, dan PLT: beda yang sering tertukar",
      html: `
<p>Ketiga istilah ini sama-sama berkaitan dengan pejabat yang menjalankan tugas, tetapi konteks dan kewenangannya berbeda.</p>
<div class="tbl-wrap"><table>
<thead><tr><th>Istilah</th><th>Kapan dipakai</th><th>Siapa yang mengangkat</th><th>Kewenangan</th></tr></thead>
<tbody>
<tr><td><b>PLH</b><br>Pelaksana Harian</td><td>Pejabat definitif berhalangan sementara (cuti, sakit, dinas luar) dan tidak ada pejabat pengganti definitif.</td><td>Atasan/pejabat yang berwenang sesuai jenjang.</td><td>Menjalankan tugas sehari-hari; tidak mengambil keputusan strategis yang mengubah kebijakan atau personel.</td></tr>
<tr><td><b>PLT</b><br>Pelaksana Tugas</td><td>Jabatan lowong atau pejabat definitif berhalangan sementara, tetapi tugas tetap harus berjalan.</td><td>Pejabat yang berwenang sesuai peraturan.</td><td>Menjalankan tugas jabatan sesuai pelimpahan; tetap dibatasi pada keputusan rutin/operasional.</td></tr>
<tr><td><b>PJ</b><br>Penjabat</td><td>Jabatan kepala daerah lowong atau masa jabatan berakhir dan belum ada kepala daerah definitif.</td><td>PJ Gubernur ditunjuk Presiden atas usul Mendagri; PJ Bupati/Wali Kota ditunjuk Mendagri atas usul Gubernur.</td><td>Menjalankan pemerintahan sampai kepala daerah definitif dilantik, dengan pembatasan tertentu.</td></tr>
</tbody></table></div>
<div class="callout kunci"><span class="c-label">Cara membedakan</span><p><b>PLH</b> = “harian”, mengisi kekosongan sementara untuk tugas rutin. <b>PLT</b> = “tugas”, menjalankan jabatan yang lowong/berhalangan. <b>PJ</b> = “penjabat”, mengisi jabatan kepala daerah sampai definitif terpilih. Semua tetap terikat pada kewenangan yang diberikan, bukan kewenangan penuh tanpa batas.</p></div>
<div class="callout contoh"><span class="c-label">Contoh HOTS</span><p>Gubernur cuti kampanye selama satu minggu. Sekretaris Daerah ditunjuk menjalankan tugas sehari-hari gubernur. Ia sebaiknya <b>tidak</b> mengambil kebijakan strategis baru atau melakukan mutasi jabatan, kecuali hal rutin yang mendesak dan sesuai pelimpahan. Fokusnya menjaga roda pemerintahan tetap berjalan.</p></div>
<div class="callout jebakan"><span class="c-label">Jebakan</span><p>Jangan menyebut Sekwan sebagai “PLT DPRD” atau “PJ DPRD”. Sekwan adalah jabatan struktural JPT Pratama yang mendukung DPRD. PLH/PJ/PLT adalah status penugasan sementara, bukan nama jabatan permanen.</p></div>
`
    },
    {
      judul: "Disiplin, pemberhentian, dan pensiun",
      html: `
<h3>1. Hukuman disiplin menurut PP 94/2021</h3>
<div class="tbl-wrap"><table>
<thead><tr><th>Tingkat</th><th>Jenis hukuman</th><th>Contoh pelanggaran</th></tr></thead>
<tbody>
<tr><td>Ringan</td><td>Teguran lisan; teguran tertulis; pernyataan tidak puas secara tertulis.</td><td>Tidak masuk kerja tanpa alasan sah 3 hari kumulatif dalam 1 tahun; menggunakan BMN tidak sebagaimana mestinya.</td></tr>
<tr><td>Sedang</td><td>Potongan tunjangan kinerja 25% selama 6, 9, atau 12 bulan.</td><td>Tidak masuk kerja tanpa alasan sah 11–20 hari dalam 1 tahun; pungutan di luar ketentuan.</td></tr>
<tr><td>Berat</td><td>Penurunan jabatan setingkat lebih rendah 12 bulan; pembebasan jabatan menjadi pelaksana 12 bulan; pemberhentian dengan hormat tidak atas permintaan sendiri; pemberhentian tidak dengan hormat.</td><td>Tidak masuk kerja 21–28 hari atau 10 hari kerja terus-menerus; menyalahgunakan wewenang; menerima hadiah terkait jabatan.</td></tr>
</tbody></table></div>
<p>Hukuman disiplin harus didahului pemeriksaan dan memberi kesempatan pembelaan. Berat ringannya pelanggaran mempertimbangkan dampak, kesengajaan, dan riwayat perilaku.</p>

<h3>2. Jenis pemberhentian</h3>
<div class="tbl-wrap"><table>
<thead><tr><th>Jenis</th><th>Makna</th><th>Contoh</th></tr></thead>
<tbody>
<tr><td>Atas permintaan sendiri</td><td>Pegawai mengajukan pengunduran diri.</td><td>Alasan pribadi, pindah pekerjaan.</td></tr>
<tr><td>Dengan hormat</td><td>Berhenti dengan penghargaan atas pengabdian.</td><td>Pensiun, meninggal dunia, mencapai batas usia.</td></tr>
<tr><td>Dengan hormat tidak atas permintaan sendiri</td><td>Diberhentikan dengan hormat, tetapi bukan karena pegawai meminta.</td><td>Tidak memenuhi syarat kesehatan/jabatan, penyederhanaan organisasi, atau pelanggaran tertentu yang tidak sampai pemberhentian tidak hormat.</td></tr>
<tr><td>Tidak dengan hormat</td><td>Diberhentikan karena pelanggaran berat.</td><td>Melakukan tindak pidana kejahatan jabatan, mangkir, atau pelanggaran disiplin berat tertentu.</td></tr>
</tbody></table></div>
<div class="callout kunci"><span class="c-label">Bocoran</span><p>“Pemberhentian dengan hormat tidak atas permintaan sendiri” sering muncul. Kuncinya: <b>tetap dengan hormat</b> (bukan pidana berat), tetapi <b>bukan karena pegawai mengajukan permohonan</b>. Contoh klasik: tidak memenuhi syarat jabatan atau efisiensi organisasi.</p></div>

<h3>3. Pensiun dan batas usia</h3>
<p>Batas usia pensiun PNS umumnya 58 tahun, sedangkan jabatan fungsional tertentu dapat lebih tinggi sesuai ketentuan (misalnya ahli madya 60 tahun dan ahli utama 65 tahun). Pensiun dapat pula karena alasan kesehatan, meninggal dunia, atau diberhentikan. Hak pensiun diberikan sesuai masa kerja dan ketentuan yang berlaku.</p>
<div class="callout contoh"><span class="c-label">Studi kasus</span><p>Seorang pejabat tidak masuk kerja 22 hari kumulatif tanpa alasan sah dalam satu tahun. Atasannya menilai pelanggaran berat. Langkah yang benar: lakukan pemeriksaan, beri kesempatan pembelaan, lalu ajukan hukuman disiplin sesuai PP 94/2021. Bukan langsung memberhentikan tanpa proses.</p></div>
`
    }
  ],
  ringkasan: [
    "ASN = PNS + PPPK; manajemen ASN berbasis sistem merit.",
    "JPT Madya eselon I; JPT Pratama II; Administrator III; Pengawas IV; JF sesuai jenjang.",
    "Sekwan = JPT Pratama; Provinsi II.a, Kabupaten/Kota II.b.",
    "Angka kredit adalah syarat penting kenaikan pangkat JF, bukan satu-satunya syarat.",
    "PLH = tugas harian; PLT = menjalankan jabatan lowong/berhalangan; PJ = mengisi jabatan kepala daerah.",
    "PP 94/2021: disiplin ringan, sedang (potong tukin), berat (turun jabatan s.d. pemberhentian).",
    "Pemberhentian dengan hormat tidak atas permintaan sendiri = diberhentikan dengan hormat, bukan karena mengajukan permohonan."
  ],
  dasarHukum: [
    "UU Nomor 20 Tahun 2023 tentang Aparatur Sipil Negara.",
    "Peraturan Pemerintah Nomor 94 Tahun 2021 tentang Disiplin Pegawai Negeri Sipil.",
    "Peraturan Pemerintah Nomor 11 Tahun 2017 tentang Manajemen PNS sebagaimana telah diubah.",
    "Peraturan BKN tentang kenaikan pangkat dan angka kredit jabatan fungsional."
  ]
};

window.UPKP_MATERI.pelayanan = {
  id: "pelayanan",
  judul: "Pelayanan Publik",
  kelompok: "TKT",
  urutan: 7,
  ringkas: "Asas dan ruang lingkup pelayanan publik, 14 komponen standar pelayanan, PTSP/MPP, kualitas layanan, serta pengaduan dan survei kepuasan.",
  estimasi: "28 menit",
  tujuan: [
    "Menjelaskan asas, jenis, dan penyelenggara pelayanan publik menurut UU 25/2009.",
    "Menyusun komponen standar pelayanan dan maklumat pelayanan.",
    "Membedakan PTSP, MPP, dan digitalisasi layanan beserta manfaat dan risikonya.",
    "Menganalisis kasus pelayanan dengan dimensi kualitas, pengaduan, dan kepuasan masyarakat."
  ],
  sections: [
    {
      judul: "Konsep, asas, dan ruang lingkup",
      html: `
<p class="lead-in">Pelayanan publik adalah kegiatan dalam rangka pemenuhan kebutuhan pelayanan sesuai peraturan perundang-undangan bagi setiap warga negara dan penduduk atas barang, jasa, dan/atau pelayanan administratif yang disediakan oleh penyelenggara pelayanan publik.</p>
<h3>1. Penyelenggara dan penerima layanan</h3>
<ul>
<li><b>Penyelenggara:</b> pemerintah pusat, pemerintah daerah, BUMN/BUMD, badan hukum publik, dan badan hukum privat yang diberi kewenangan.</li>
<li><b>Penerima layanan:</b> warga negara, penduduk, dan badan hukum yang berhak atas layanan.</li>
<li><b>Jenis layanan:</b> pelayanan barang, pelayanan jasa, dan pelayanan administratif (perizinan, rekomendasi, sertifikat, dan dokumen resmi).</li>
</ul>
<h3>2. Asas pelayanan publik</h3>
<div class="tbl-wrap"><table>
<thead><tr><th>Asas</th><th>Makna operasional</th></tr></thead>
<tbody>
<tr><td>Kepentingan umum</td><td>Layanan tidak boleh mengorbankan kepentingan masyarakat luas.</td></tr>
<tr><td>Kepastian hukum</td><td>Dasar hukum, prosedur, dan tarif jelas serta tidak berubah-ubah.</td></tr>
<tr><td>Kesamaan hak</td><td>Tidak diskriminatif; semua pemohon diperlakukan setara.</td></tr>
<tr><td>Keseimbangan hak dan kewajiban</td><td>Pemberi dan penerima layanan sama-sama memenuhi kewajibannya.</td></tr>
<tr><td>Keprofesionalan</td><td>Dilayani oleh petugas yang kompeten dan berintegritas.</td></tr>
<tr><td>Partisipatif</td><td>Masyarakat dapat memberi masukan dan mengawasi layanan.</td></tr>
<tr><td>Keterbukaan</td><td>Informasi prosedur, biaya, dan waktu dapat diakses.</td></tr>
<tr><td>Akuntabilitas</td><td>Layanan dapat dipertanggungjawabkan kepada publik.</td></tr>
<tr><td>Fasilitasi dan perlakuan khusus</td><td>Kelompok rentan dan penyandang disabilitas mendapat kemudahan.</td></tr>
<tr><td>Ketepatan waktu dan kecepatan</td><td>Layanan selesai sesuai janji waktu.</td></tr>
<tr><td>Kemudahan dan keterjangkauan</td><td>Lokasi, biaya, dan kanal layanan mudah dijangkau.</td></tr>
</tbody></table></div>
<div class="callout kunci"><span class="c-label">Kata kunci</span><p>Pelayanan publik yang baik = <b>jelas syaratnya, pasti waktunya, transparan biayanya, adil, dan dapat dipertanggungjawabkan</b>.</p></div>
<div class="callout jebakan"><span class="c-label">Jebakan</span><p>“Gratis” bukan berarti boleh meminta imbalan terselubung. Pejabat wajib menolak pemberian dalam bentuk apa pun jika layanan memang tidak dipungut biaya.</p></div>
`
    },
    {
      judul: "Standar pelayanan dan maklumat pelayanan",
      html: `
<h3>1. Empat belas komponen standar pelayanan</h3>
<p>Standar pelayanan adalah tolok ukur yang dipergunakan sebagai pedoman penyelenggaraan pelayanan dan acuan penilaian kualitas pelayanan. Komponennya diatur dalam UU 25/2009 dan peraturan pelaksanaannya.</p>
<div class="tbl-wrap"><table>
<thead><tr><th>No</th><th>Komponen</th><th>Pertanyaan kunci</th></tr></thead>
<tbody>
<tr><td>1</td><td>Dasar hukum</td><td>Peraturan apa yang menjadi dasar layanan?</td></tr>
<tr><td>2</td><td>Persyaratan</td><td>Dokumen apa yang harus disiapkan pemohon?</td></tr>
<tr><td>3</td><td>Sistem, mekanisme, dan prosedur</td><td>Bagaimana alur layanan dari awal sampai selesai?</td></tr>
<tr><td>4</td><td>Jangka waktu penyelesaian</td><td>Berapa hari layanan diselesaikan?</td></tr>
<tr><td>5</td><td>Biaya/tarif</td><td>Berapa biaya resmi dan dasar penetapannya?</td></tr>
<tr><td>6</td><td>Produk pelayanan</td><td>Dokumen/barang/jasa apa yang diterima pemohon?</td></tr>
<tr><td>7</td><td>Sarana, prasarana, dan fasilitas</td><td>Apakah ruang tunggu, loket, dan aksesibilitas memadai?</td></tr>
<tr><td>8</td><td>Kompetensi pelaksana</td><td>Apakah petugas memiliki kompetensi yang dipersyaratkan?</td></tr>
<tr><td>9</td><td>Pengawasan internal</td><td>Siapa yang mengawasi dan bagaimana mekanismenya?</td></tr>
<tr><td>10</td><td>Penanganan pengaduan, saran, dan masukan</td><td>Ke mana masyarakat mengadu dan berapa lama ditindaklanjuti?</td></tr>
<tr><td>11</td><td>Jumlah pelaksana</td><td>Apakah jumlah petugas memadai?</td></tr>
<tr><td>12</td><td>Jaminan pelayanan</td><td>Apakah ada jaminan layanan sesuai standar?</td></tr>
<tr><td>13</td><td>Jaminan keamanan dan keselamatan</td><td>Bagaimana perlindungan keselamatan pengguna layanan?</td></tr>
<tr><td>14</td><td>Evaluasi kinerja</td><td>Bagaimana capaian layanan diukur dan diperbaiki?</td></tr>
</tbody></table></div>
<h3>2. Maklumat pelayanan</h3>
<p>Maklumat pelayanan adalah pernyataan tertulis yang memuat janji penyelenggara untuk melaksanakan pelayanan sesuai standar pelayanan. Maklumat wajib dipublikasikan agar masyarakat mengetahui haknya. Maklumat berbeda dari SOP internal: SOP mengatur cara kerja petugas, sedangkan maklumat adalah janji kepada publik.</p>
<div class="callout contoh"><span class="c-label">Contoh</span><p>“Kami siap melayani penerbitan rekomendasi paling lambat 3 hari kerja, tanpa biaya, dengan syarat dokumen yang telah diumumkan. Bila tidak terpenuhi, silakan menyampaikan pengaduan melalui kanal resmi.” Kalimat ini mengandung janji waktu, biaya, syarat, dan kanal pengaduan.</p></div>
<div class="callout jebakan"><span class="c-label">Jebakan</span><p>Standar pelayanan tidak cukup hanya ditempel di dinding kantor. Ia harus <b>dipublikasikan</b> melalui media yang mudah diakses, termasuk laman resmi, dan <b>diterapkan</b> dalam praktik.</p></div>
`
    },
    {
      judul: "PTSP, MPP, dan digitalisasi layanan",
      html: `
<h3>1. Pelayanan Terpadu Satu Pintu (PTSP)</h3>
<p>PTSP adalah kegiatan penyelenggaraan pelayanan secara terintegrasi dalam satu kesatuan proses, mulai dari tahap permohonan sampai dengan tahap penyelesaian produk pelayanan melalui <b>satu pintu</b>. Tujuannya mengurangi titik temu yang berbelit, mempersingkat waktu, dan meningkatkan kepastian layanan.</p>
<ul>
<li>Pemohon cukup berhubungan dengan satu loket/kanal.</li>
<li>Dokumen diproses secara terintegrasi antarbidang, bukan dilempar dari loket ke loket.</li>
<li>Informasi syarat, biaya, dan waktu terpublikasi.</li>
<li>Ada pengendalian internal dan mekanisme pengaduan.</li>
</ul>
<h3>2. Mal Pelayanan Publik (MPP)</h3>
<p>MPP adalah tempat berlangsungnya pelayanan publik dari berbagai instansi (pusat, daerah, BUMN/BUMD, swasta) dalam satu lokasi. MPP memudahkan masyarakat karena dapat menyelesaikan beberapa layanan sekaligus. Kunci keberhasilannya bukan sekadar gedung megah, tetapi <b>integrasi proses, kompetensi petugas, dan kepastian waktu</b>.</p>
<h3>3. Digitalisasi layanan</h3>
<div class="tbl-wrap"><table>
<thead><tr><th>Peluang</th><th>Risiko yang harus dikelola</th></tr></thead>
<tbody>
<tr><td>Layanan 24 jam dan jarak jauh.</td><td>Kesenjangan akses bagi lansia dan daerah terpencil.</td></tr>
<tr><td>Pelacakan status permohonan.</td><td>Kebocoran data pribadi dan serangan siber.</td></tr>
<tr><td>Pengurangan kertas dan antrean.</td><td>Ketergantungan pada jaringan dan sistem yang belum stabil.</td></tr>
<tr><td>Integrasi data antarinstitusi.</td><td>Data ganda dan perbedaan standar data.</td></tr>
<tr><td>Tanda tangan elektronik dan arsip digital.</td><td>Validasi identitas dan keamanan dokumen.</td></tr>
</tbody></table></div>
<p>Digitalisasi yang baik selalu menyediakan <b>kanal alternatif</b> bagi kelompok rentan, <b>pendampingan</b>, dan <b>perlindungan data pribadi</b>. Teknologi adalah alat, bukan tujuan.</p>
<div class="callout contoh"><span class="c-label">Kasus HOTS</span><p>Seorang lansia datang ke MPP untuk mengurus izin usaha, tetapi seluruh proses kini dilakukan melalui aplikasi. Petugas terbaik tidak sekadar menyuruhnya “unduh aplikasi”, melainkan mendampingi, menyediakan jalur asistensi, dan memastikan data pribadinya tidak diminta melalui kanal tidak resmi.</p></div>
`
    },
    {
      judul: "Kualitas layanan, pengaduan, dan survei kepuasan",
      html: `
<h3>1. Lima dimensi kualitas layanan</h3>
<div class="tbl-wrap"><table>
<thead><tr><th>Dimensi</th><th>Makna</th><th>Contoh indikator</th></tr></thead>
<tbody>
<tr><td>Tangibles</td><td>Bukti fisik: fasilitas, ruang tunggu, kebersihan, media informasi.</td><td>Ruang tunggu bersih dan aksesibel.</td></tr>
<tr><td>Reliability</td><td>Keandalan: layanan konsisten dan sesuai janji.</td><td>Izin selesai tepat waktu.</td></tr>
<tr><td>Responsiveness</td><td>Daya tanggap terhadap kebutuhan dan keluhan.</td><td>Pengaduan dijawab dalam 1×24 jam.</td></tr>
<tr><td>Assurance</td><td>Jaminan kompetensi, sopan santun, dan keamanan.</td><td>Petugas kompeten dan tidak memungut biaya liar.</td></tr>
<tr><td>Empathy</td><td>Perhatian tulus, memahami kebutuhan khusus pengguna.</td><td>Pendampingan bagi penyandang disabilitas.</td></tr>
</tbody></table></div>
<h3>2. Survei Kepuasan Masyarakat (SKM)</h3>
<p>SKM mengukur persepsi pengguna layanan terhadap mutu pelayanan. Hasil SKM berupa nilai persepsi dan mutu layanan (A–D atau kategori sejenis), yang wajib ditindaklanjuti. SKM bukan sekadar laporan tahunan; ia harus menjadi dasar perbaikan.</p>
<h3>3. Pengaduan dan perlindungan</h3>
<ul>
<li>Kanal pengaduan harus jelas: kotak saran, laman, telepon, aplikasi, atau layanan SP4N-LAPOR.</li>
<li>Pengaduan dicatat, diverifikasi, ditindaklanjuti, dan dijawab dalam batas waktu.</li>
<li>Pelapor dilindungi dari pembalasan; identitas dapat dirahasiakan.</li>
<li>Pengaduan berulang yang tidak selesai dapat dieskalasi ke atasan, Inspektorat, atau Ombudsman.</li>
<li>Petugas dilarang meminta/menerima gratifikasi, pungutan liar, atau imbalan di luar ketentuan.</li>
</ul>
<div class="callout kunci"><span class="c-label">Rumus kasus</span><p>Jika soal menanyakan “tindakan paling tepat” dalam pelayanan: <b>layani sesuai standar → jelaskan prosedur → dampingi bila perlu → catat → eskalasi bila di luar kewenangan → jangan menyalahkan pengguna</b>.</p></div>
<div class="callout contoh"><span class="c-label">Studi kasus</span><p>Pemohon marah karena berkasnya kurang satu dokumen. Petugas yang baik tidak menolak mentah-mentah, tetapi menjelaskan kekurangan secara spesifik, memberikan daftar periksa, menawarkan kanal pengiriman susulan, dan mencatat interaksi. Jika pemohon tetap tidak melengkapi, layanan tidak dapat diproses — dan itu dijelaskan dengan sopan.</p></div>
`
    }
  ],
  ringkasan: [
    "UU 25/2009: pelayanan barang, jasa, dan administratif oleh pemerintah, BUMN/BUMD, dan badan hukum.",
    "Asas: kepentingan umum, kepastian hukum, kesamaan hak, profesional, partisipatif, keterbukaan, akuntabilitas, ketepatan waktu.",
    "Standar pelayanan memiliki 14 komponen; maklumat adalah janji tertulis kepada publik.",
    "PTSP = satu pintu terintegrasi; MPP = banyak layanan dalam satu lokasi.",
    "Kualitas layanan: tangibles, reliability, responsiveness, assurance, empathy.",
    "Pengaduan wajib ditindaklanjuti dan pelapor dilindungi; gratifikasi/pungli dilarang."
  ],
  dasarHukum: [
    "UU Nomor 25 Tahun 2009 tentang Pelayanan Publik.",
    "Peraturan Pemerintah Nomor 96 Tahun 2012 tentang Pelaksanaan UU Pelayanan Publik.",
    "Peraturan Menteri PANRB tentang Standar Pelayanan dan Survei Kepuasan Masyarakat.",
    "UU Nomor 37 Tahun 2008 tentang Ombudsman Republik Indonesia."
  ]
};

window.UPKP_MATERI["good-governance"] = {
  id: "good-governance",
  judul: "Good Governance",
  kelompok: "TKT",
  urutan: 8,
  ringkas: "Prinsip tata kelola pemerintahan yang baik, asas umum pemerintahan, akuntabilitas, pengawasan, keterbukaan informasi, dan integritas.",
  estimasi: "27 menit",
  tujuan: [
    "Menjelaskan prinsip good governance dan peran tiga pilar (negara, swasta, masyarakat).",
    "Menerapkan asas umum pemerintahan yang baik pada kasus layanan dan kebijakan.",
    "Membedakan akuntabilitas, pengawasan internal, dan pengawasan eksternal.",
    "Menghubungkan keterbukaan informasi, partisipasi publik, dan integritas antikorupsi."
  ],
  sections: [
    {
      judul: "Konsep dan prinsip good governance",
      html: `
<p class="lead-in">Good governance atau tata kelola pemerintahan yang baik adalah penyelenggaraan pemerintahan yang bersih, efektif, efisien, transparan, dan bertanggung jawab. Ia bukan hanya soal “pemerintah”, tetapi soal hubungan antara negara, swasta, dan masyarakat.</p>
<h3>1. Tiga pilar</h3>
<div class="def-grid">
<div class="def"><b>Negara/pemerintah</b>Membuat aturan, menyediakan layanan, dan mengelola sumber daya publik.</div>
<div class="def"><b>Swasta/dunia usaha</b>Menjalankan kegiatan ekonomi secara etis, taat hukum, dan bertanggung jawab sosial.</div>
<div class="def"><b>Masyarakat</b>Berpartisipasi, mengawasi, dan menyampaikan aspirasi secara konstruktif.</div>
<div class="def"><b>Sinergi</b>Ketiganya saling mengontrol dan bekerja sama, bukan saling meniadakan.</div>
</div>
<h3>2. Prinsip utama</h3>
<div class="tbl-wrap"><table>
<thead><tr><th>Prinsip</th><th>Makna</th><th>Contoh penerapan</th></tr></thead>
<tbody>
<tr><td>Partisipasi</td><td>Masyarakat terlibat dalam perumusan dan pengawasan kebijakan.</td><td>Musrenbang dan konsultasi publik.</td></tr>
<tr><td>Transparansi</td><td>Informasi publik tersedia dan mudah diakses.</td><td>Publikasi APBD dan standar layanan.</td></tr>
<tr><td>Akuntabilitas</td><td>Setiap tindakan dapat dipertanggungjawabkan.</td><td>Laporan kinerja dan audit.</td></tr>
<tr><td>Responsibilitas</td><td>Pemerintah responsif terhadap kebutuhan publik.</td><td>Kanal pengaduan yang cepat.</td></tr>
<tr><td>Supremasi hukum</td><td>Aturan diterapkan adil dan konsisten.</td><td>Penegakan hukum tanpa tebang pilih.</td></tr>
<tr><td>Kesetaraan/keadilan</td><td>Semua warga diperlakukan setara.</td><td>Layanan tanpa diskriminasi.</td></tr>
<tr><td>Efektivitas dan efisiensi</td><td>Sumber daya digunakan untuk hasil terbaik.</td><td>Anggaran berbasis kinerja.</td></tr>
<tr><td>Orientasi konsensus</td><td>Keputusan diambil melalui musyawarah.</td><td>Forum lintas sektor.</td></tr>
</tbody></table></div>
<div class="callout kunci"><span class="c-label">Kata kunci</span><p>Good governance = <b>transparan, akuntabel, partisipatif, responsif, adil, dan taat hukum</b>. Clean government lebih menekankan <b>bersih dari korupsi</b>; good governance lebih luas, mencakup cara kerja dan hasil pemerintahan.</p></div>
`
    },
    {
      judul: "Asas umum pemerintahan yang baik (AUPB)",
      html: `
<p>UU Nomor 30 Tahun 2014 tentang Administrasi Pemerintahan menetapkan asas-asas umum pemerintahan yang baik sebagai dasar penyelenggaraan administrasi pemerintahan.</p>
<div class="tbl-wrap"><table>
<thead><tr><th>Asas</th><th>Makna</th><th>Contoh pelanggaran</th></tr></thead>
<tbody>
<tr><td>Kepastian hukum</td><td>Aturan jelas, tidak ambigu, konsisten, dan dapat diakses.</td><td>Prosedur berubah-ubah tanpa pemberitahuan.</td></tr>
<tr><td>Kemanfaatan</td><td>Keputusan bermanfaat bagi kepentingan publik.</td><td>Membuat aplikasi yang justru menyulitkan warga.</td></tr>
<tr><td>Ketidakberpihakan</td><td>Tidak memihak kepentingan pribadi/golongan.</td><td>Memenangkan vendor yang memiliki hubungan keluarga.</td></tr>
<tr><td>Kecermatan</td><td>Keputusan didasari data dan pertimbangan yang teliti.</td><td>Mencabut izin tanpa verifikasi.</td></tr>
<tr><td>Tidak menyalahgunakan kewenangan</td><td>Wewenang digunakan sesuai tujuan pemberiannya.</td><td>Menggunakan jabatan untuk menekan pihak lain.</td></tr>
<tr><td>Keterbukaan</td><td>Proses dan informasi dapat diketahui publik.</td><td>Rapat perumusan aturan tertutup tanpa alasan.</td></tr>
<tr><td>Kepentingan umum</td><td>Kepentingan publik diutamakan.</td><td>Mengutamakan keuntungan pribadi dalam pengadaan.</td></tr>
<tr><td>Pelayanan yang baik</td><td>Melayani dengan cepat, tepat, dan ramah.</td><td>Menunda layanan karena alasan tidak jelas.</td></tr>
</tbody></table></div>
<div class="callout jebakan"><span class="c-label">Jebakan</span><p><b>Kepastian hukum</b> bukan berarti aturan tidak boleh berubah. Perubahan diperbolehkan melalui prosedur yang benar, diumumkan, dan diberi masa transisi. Yang dilarang adalah aturan yang ambigu, bertentangan, atau diterapkan secara tidak konsisten.</p></div>
<div class="callout contoh"><span class="c-label">Contoh HOTS</span><p>Seorang pejabat menerima hadiah dari pihak yang mengurus izin. Layanan tersebut sebenarnya gratis. Tindakan yang benar: menolak hadiah, menjelaskan bahwa layanan tidak dipungut biaya, mencatat penolakan, dan melaporkan ke unit pengendalian gratifikasi. Ini menggabungkan asas pelayanan yang baik, tidak menyalahgunakan kewenangan, dan integritas.</p></div>
`
    },
    {
      judul: "Akuntabilitas dan pengawasan",
      html: `
<h3>1. Jenis akuntabilitas</h3>
<div class="tbl-wrap"><table>
<thead><tr><th>Jenis</th><th>Fokus</th><th>Contoh</th></tr></thead>
<tbody>
<tr><td>Akuntabilitas vertikal</td><td>Pertanggungjawaban kepada atasan/lembaga yang lebih tinggi.</td><td>Laporan kinerja kepala dinas kepada gubernur.</td></tr>
<tr><td>Akuntabilitas horizontal</td><td>Pertanggungjawaban kepada lembaga sejajar/pengawas.</td><td>Pemerintah daerah kepada DPRD.</td></tr>
<tr><td>Akuntabilitas keuangan</td><td>Penggunaan anggaran sesuai peraturan.</td><td>Laporan keuangan dan opini BPK.</td></tr>
<tr><td>Akuntabilitas kinerja</td><td>Capaian indikator dan hasil pembangunan.</td><td>LAKIP/SAKIP.</td></tr>
<tr><td>Akuntabilitas hukum</td><td>Kepatuhan pada hukum dan HAM.</td><td>Keputusan tidak melanggar peraturan.</td></tr>
</tbody></table></div>
<h3>2. Pengawasan internal dan eksternal</h3>
<ul>
<li><b>Internal:</b> Inspektorat Provinsi/Kabupaten/Kota, BPKP, dan pengendalian intern pemerintah (SPIP). Fokusnya mencegah, mendeteksi, dan memperbaiki.</li>
<li><b>Eksternal:</b> BPK (pemeriksaan keuangan), DPR/DPRD (fungsi pengawasan), Ombudsman (maladministrasi), KPK (tindak pidana korupsi), dan masyarakat/pers.</li>
<li><b>SAKIP</b> menilai sistem akuntabilitas kinerja; <b>LAKIP</b> melaporkan capaian kinerja; <b>IKU</b> menjadi indikator utama.</li>
</ul>
<div class="callout jebakan"><span class="c-label">Jebakan</span><p>Opini BPK <b>WTP</b> (Wajar Tanpa Pengecualian) menilai kewajaran laporan keuangan, <b>bukan</b> jaminan bebas korupsi. Kasus korupsi bisa terjadi meskipun laporan keuangan WTP.</p></div>
<div class="callout kunci"><span class="c-label">Alur pengawasan</span><p>Temuan → rekomendasi → rencana tindak lanjut → pemantauan → penyelesaian. Pengawasan yang berhenti pada temuan tanpa tindak lanjut tidak memberi nilai perbaikan.</p></div>
`
    },
    {
      judul: "Keterbukaan, partisipasi, dan integritas",
      html: `
<h3>1. Keterbukaan informasi publik</h3>
<p>UU Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik memberi hak kepada masyarakat untuk memperoleh informasi publik. Badan publik wajib menyediakan informasi secara berkala, serta merta, dan atas permintaan. Namun ada informasi yang dikecualikan, misalnya yang berkaitan dengan rahasia negara, rahasia pribadi, atau proses penegakan hukum tertentu.</p>
<ul>
<li>Informasi berkala: profil, program, laporan keuangan, dan kinerja.</li>
<li>Informasi serta merta: informasi yang harus segera diumumkan karena menyangkut hajat hidup orang banyak.</li>
<li>Informasi atas permintaan: diajukan melalui mekanisme dan batas waktu yang ditentukan.</li>
</ul>
<h3>2. Partisipasi publik</h3>
<p>Partisipasi bukan sekadar hadir dalam rapat. Partisipasi yang bermakna mencakup akses informasi, kesempatan menyampaikan pendapat, dialog yang setara, dan umpan balik atas usulan. Musrenbang, konsultasi publik, dan uji publik rancangan peraturan adalah contoh kanalnya.</p>
<h3>3. Integritas dan antikorupsi</h3>
<div class="def-grid">
<div class="def"><b>Gratifikasi</b>Pemberian yang berkaitan dengan jabatan; wajib ditolak atau dilaporkan.</div>
<div class="def"><b>Konflik kepentingan</b>Situasi kepentingan pribadi memengaruhi keputusan publik; harus diungkap dan dihindari.</div>
<div class="def"><b>Whistleblowing</b>Pelaporan pelanggaran oleh pihak internal/eksternal dengan perlindungan pelapor.</div>
<div class="def"><b>BerAKHLAK</b>Berorientasi pelayanan, Akuntabel, Kompeten, Harmonis, Loyal, Adaptif, Kolaboratif.</div>
</div>
<div class="callout contoh"><span class="c-label">Studi kasus</span><p>Sebuah dinas akan mengadakan pengadaan. Salah satu anggota panitia memiliki saham pada perusahaan peserta. Tindakan yang benar: mengungkapkan konflik kepentingan, mundur dari panitia penilai, dan menyerahkan keputusan kepada panitia yang tidak memiliki benturan kepentingan. Sikap ini menjaga akuntabilitas dan kepercayaan publik.</p></div>
<div class="callout kunci"><span class="c-label">Rumus HOTS</span><p>Hadapi kasus integritas dengan urutan: <b>kenali benturan kepentingan → ungkapkan → hindari → catat/laporkan → pastikan keputusan tetap objektif</b>.</p></div>
`
    }
  ],
  ringkasan: [
    "Good governance = transparan, akuntabel, partisipatif, responsif, adil, taat hukum, efektif, dan efisien.",
    "Tiga pilar: negara, swasta, masyarakat; saling mengontrol dan bekerja sama.",
    "AUPB UU 30/2014: kepastian hukum, kemanfaatan, ketidakberpihakan, kecermatan, tidak menyalahgunakan kewenangan, keterbukaan, kepentingan umum, pelayanan baik.",
    "Akuntabilitas vertikal ke atasan; horizontal ke lembaga sejajar/pengawas.",
    "Pengawasan internal: Inspektorat/BPKP; eksternal: BPK, DPR/DPRD, Ombudsman, KPK, masyarakat.",
    "WTP bukan jaminan bebas korupsi; keterbukaan informasi diatur UU 14/2008."
  ],
  dasarHukum: [
    "UU Nomor 30 Tahun 2014 tentang Administrasi Pemerintahan.",
    "UU Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik.",
    "UU Nomor 28 Tahun 1999 tentang Penyelenggaraan Negara yang Bersih dan Bebas dari Korupsi, Kolusi, dan Nepotisme.",
    "UU Nomor 19 Tahun 2019 tentang Perubahan Kedua UU KPK.",
    "Peraturan Pemerintah Nomor 60 Tahun 2008 tentang Sistem Pengendalian Intern Pemerintah."
  ]
};

window.UPKP_MATERI.kebijakan = {
  id: "kebijakan",
  judul: "Kebijakan Publik",
  kelompok: "TKT",
  urutan: 9,
  ringkas: "Definisi dan bentuk kebijakan publik, siklus kebijakan, prinsip penyusunan, aktor, implementasi, serta evaluasi berbasis bukti.",
  estimasi: "26 menit",
  tujuan: [
    "Membedakan kebijakan publik formal-legal dan pernyataan pejabat publik.",
    "Menguraikan tahapan siklus kebijakan dari agenda setting hingga evaluasi.",
    "Menerapkan prinsip benar proses dan benar bahasa dalam penyusunan kebijakan.",
    "Menganalisis kegagalan implementasi dan memilih kriteria evaluasi yang tepat."
  ],
  sections: [
    {
      judul: "Definisi, bentuk, dan stratifikasi kebijakan",
      html: `
<p class="lead-in">Kebijakan publik adalah serangkaian tindakan yang dipilih pemerintah dan mempunyai pengaruh penting terhadap sejumlah besar orang. Kebijakan publik tidak selalu berbentuk undang-undang; ia dapat berupa peraturan, program, alokasi anggaran, atau pernyataan resmi pejabat.</p>
<h3>1. Dua bentuk utama</h3>
<div class="tbl-wrap"><table>
<thead><tr><th>Bentuk</th><th>Ciri</th><th>Contoh</th></tr></thead>
<tbody>
<tr><td>Peraturan yang terkodifikasi formal-legal</td><td>Tertulis, memiliki dasar hukum, mengikat, dan ada sanksi.</td><td>Peraturan Daerah, Peraturan Gubernur, Peraturan Bupati/Wali Kota.</td></tr>
<tr><td>Pernyataan pejabat publik di depan publik</td><td>Komitmen/kebijakan yang diumumkan, meskipun belum dituangkan dalam peraturan.</td><td>Pengumuman program prioritas atau instruksi gubernur dalam rapat.</td></tr>
</tbody></table></div>
<h3>2. Stratifikasi kebijakan</h3>
<div class="tbl-wrap"><table>
<thead><tr><th>Tingkat</th><th>Contoh</th><th>Cakupan</th></tr></thead>
<tbody>
<tr><td>Nasional</td><td>UU, PP, Perpres, Permen.</td><td>Berlaku seluruh Indonesia.</td></tr>
<tr><td>Provinsi</td><td>Perda Provinsi, Pergub.</td><td>Wilayah provinsi.</td></tr>
<tr><td>Kabupaten/Kota</td><td>Perda Kab/Kota, Perbup/Perwali.</td><td>Wilayah kabupaten/kota.</td></tr>
<tr><td>Lokal/instansi</td><td>Keputusan kepala dinas, SOP, surat edaran.</td><td>Lingkup unit/organisasi.</td></tr>
</tbody></table></div>
<p>Contoh stratifikasi tingkat pusat: Permen PANRB Nomor 6 Tahun 2024 mengatur pengadaan pegawai ASN yang terdiri atas PNS dan PPPK. Ruang lingkupnya nasional karena berlaku bagi seluruh instansi pemerintah.</p>
<div class="callout jebakan"><span class="c-label">Jebakan</span><p>Tidak semua keputusan pemerintah adalah kebijakan publik dalam arti luas. Keputusan yang hanya menyangkut satu orang dan tidak berdampak pada publik luas lebih tepat disebut keputusan administratif. Kebijakan publik harus memiliki <b>dampak pada sejumlah besar orang</b>.</p></div>
`
    },
    {
      judul: "Siklus kebijakan publik",
      html: `
<div class="tbl-wrap"><table>
<thead><tr><th>Tahap</th><th>Aktivitas utama</th><th>Keluaran</th></tr></thead>
<tbody>
<tr><td>1. Agenda setting</td><td>Mengidentifikasi masalah publik dan memilih yang masuk agenda pemerintah.</td><td>Daftar isu prioritas.</td></tr>
<tr><td>2. Formulasi</td><td>Merumuskan alternatif dan memilih opsi terbaik.</td><td>Rancangan kebijakan.</td></tr>
<tr><td>3. Adopsi/legitimasi</td><td>Pembahasan, persetujuan, dan penetapan oleh pejabat/lembaga berwenang.</td><td>Peraturan/keputusan yang sah.</td></tr>
<tr><td>4. Implementasi</td><td>Pelaksanaan oleh unit pelaksana, alokasi sumber daya, dan koordinasi.</td><td>Layanan/program berjalan.</td></tr>
<tr><td>5. Evaluasi</td><td>Menilai capaian, dampak, dan kendala.</td><td>Rekomendasi perbaikan.</td></tr>
<tr><td>6. Revisi/terminasi</td><td>Memperbaiki atau menghentikan kebijakan.</td><td>Kebijakan baru atau penghentian.</td></tr>
</tbody></table></div>
<p><strong>Alternatif kebijakan</strong> adalah pilihan yang tersedia bagi pembuat kebijakan untuk memecahkan masalah. <strong>Implementasi</strong> adalah proses pelaksanaan/penerapan kebijakan yang telah ditetapkan. <strong>Revisi kebijakan</strong> adalah perbaikan kebijakan tertentu karena kebutuhan publik atau antisipasi kondisi masa depan.</p>
<div class="callout kunci"><span class="c-label">Hafalan</span><p>Agenda → Formulasi → Adopsi → Implementasi → Evaluasi → Revisi. Soal sering menanyakan tahap ketika kebijakan <b>sudah ditetapkan tetapi belum berjalan</b>: itu implementasi. Ketika <b>belum ada keputusan</b> dan baru membahas masalah: formulasi/agenda setting.</p></div>
<div class="callout contoh"><span class="c-label">Contoh</span><p>Pemerintah daerah menemukan angka stunting tinggi (agenda setting), menyusun program gizi dan posyandu (formulasi), menetapkan Perbup (adopsi), melaksanakan di puskesmas/desa (implementasi), lalu mengukur penurunan stunting (evaluasi).</p></div>
`
    },
    {
      judul: "Prinsip penyusunan, aktor, dan implementasi",
      html: `
<h3>1. Prinsip penyusunan</h3>
<div class="def-grid">
<div class="def"><b>Benar proses</b>Transparan, dapat dipertanggungjawabkan, dan melibatkan pihak yang seharusnya terlibat.</div>
<div class="def"><b>Benar bahasa</b>Menggunakan Bahasa Indonesia yang baik dan benar; terjemahan tidak boleh menyimpang dari makna.</div>
<div class="def"><b>Berbasis bukti</b>Didukung data, kajian, dan naskah akademik yang memadai.</div>
<div class="def"><b>Dapat dilaksanakan</b>Mempertimbangkan kewenangan, anggaran, SDM, dan kondisi lapangan.</div>
</div>
<p><strong>Benar secara bahasa</strong> berarti setiap kebijakan publik di Indonesia wajib menggunakan Bahasa Indonesia yang baik dan benar, meskipun kebijakan itu hasil kerja sama dengan pihak asing. Jika perlu diterjemahkan ke bahasa asing atau daerah, terjemahan harus baik (dapat dipahami dalam satu makna) dan benar (tidak menyimpang dari logika bahasa).</p>
<h3>2. Aktor kebijakan</h3>
<ul>
<li><b>Aktor resmi:</b> eksekutif, legislatif, yudikatif, dan lembaga negara lain yang memiliki kewenangan.</li>
<li><b>Aktor tidak resmi:</b> kelompok kepentingan, organisasi masyarakat, akademisi, media, dan masyarakat sipil.</li>
<li><b>Street-level bureaucracy:</b> petugas garis depan yang menerjemahkan kebijakan menjadi tindakan nyata; perilaku mereka sangat memengaruhi hasil.</li>
</ul>
<h3>3. Faktor keberhasilan implementasi</h3>
<div class="tbl-wrap"><table>
<thead><tr><th>Faktor</th><th>Pertanyaan uji</th></tr></thead>
<tbody>
<tr><td>Komunikasi</td><td>Apakah kebijakan dipahami oleh pelaksana dan sasaran?</td></tr>
<tr><td>Sumber daya</td><td>Apakah anggaran, SDM, dan sarana cukup?</td></tr>
<tr><td>Disposisi/sikap pelaksana</td><td>Apakah pelaksana mendukung dan berkomitmen?</td></tr>
<tr><td>Struktur birokrasi</td><td>Apakah kewenangan dan koordinasi jelas?</td></tr>
<tr><td>Dukungan pemangku kepentingan</td><td>Apakah ada resistensi atau dukungan?</td></tr>
</tbody></table></div>
<div class="callout jebakan"><span class="c-label">Jebakan</span><p>Kebijakan yang baik secara substansi bisa gagal karena implementasi lemah. Jangan otomatis menyalahkan “masyarakat tidak paham”; periksa komunikasi, sumber daya, dan struktur pelaksana.</p></div>
`
    },
    {
      judul: "Evaluasi kebijakan dan studi kasus",
      html: `
<h3>1. Jenis dan kriteria evaluasi</h3>
<div class="tbl-wrap"><table>
<thead><tr><th>Jenis</th><th>Waktu</th><th>Fokus</th></tr></thead>
<tbody>
<tr><td>Evaluasi formatif</td><td>Selama proses</td><td>Memperbaiki desain dan pelaksanaan.</td></tr>
<tr><td>Evaluasi sumatif</td><td>Setelah selesai</td><td>Menilai hasil dan dampak secara keseluruhan.</td></tr>
</tbody></table></div>
<ul>
<li><b>Efektivitas:</b> apakah tujuan tercapai?</li>
<li><b>Efisiensi:</b> apakah sumber daya digunakan secara hemat?</li>
<li><b>Kecukupan:</b> apakah manfaat cukup memenuhi kebutuhan?</li>
<li><b>Pemerataan:</b> siapa yang memperoleh manfaat dan siapa yang tertinggal?</li>
<li><b>Responsivitas:</b> apakah kebijakan menjawab kebutuhan publik?</li>
<li><b>Ketepatan:</b> apakah kebijakan tepat sasaran dan tepat konteks?</li>
</ul>
<p>Indikator dibedakan menjadi <b>output</b> (keluaran langsung), <b>outcome</b> (hasil antara), dan <b>impact</b> (dampak jangka panjang).</p>
<div class="callout contoh"><span class="c-label">Studi kasus HOTS</span><p>Sebuah daerah meluncurkan aplikasi pengaduan. Setelah satu tahun, jumlah pengaduan yang masuk tinggi, tetapi yang selesai hanya 30%. Pemerintah ingin mengevaluasi. Indikator yang paling tepat bukan jumlah unduhan aplikasi (output), melainkan <b>persentase pengaduan yang ditindaklanjuti dan waktu penyelesaian</b> (outcome). Solusi perlu menyasar kapasitas petugas, alur eskalasi, dan akuntabilitas tindak lanjut.</p></div>
<div class="callout kunci"><span class="c-label">Rumus menjawab</span><p>Soal evaluasi biasanya meminta <b>indikator yang paling menggambarkan hasil</b>. Pilih outcome/impact, bukan aktivitas atau jumlah peserta. Lalu hubungkan dengan perbaikan proses.</p></div>
`
    }
  ],
  ringkasan: [
    "Kebijakan publik = tindakan pemerintah yang berdampak pada banyak orang.",
    "Bentuk: peraturan formal-legal dan pernyataan pejabat publik.",
    "Siklus: agenda setting → formulasi → adopsi → implementasi → evaluasi → revisi.",
    "Prinsip: benar proses (transparan, akuntabel, partisipatif) dan benar bahasa (Bahasa Indonesia yang baik dan benar).",
    "Implementasi dipengaruhi komunikasi, sumber daya, disposisi, dan struktur birokrasi.",
    "Evaluasi: formatif/sumatif; kriteria efektivitas, efisiensi, kecukupan, pemerataan, responsivitas, ketepatan."
  ],
  dasarHukum: [
    "UU Nomor 25 Tahun 2004 tentang Sistem Perencanaan Pembangunan Nasional.",
    "UU Nomor 12 Tahun 2011 tentang Pembentukan Peraturan Perundang-undangan sebagaimana telah diubah.",
    "UU Nomor 23 Tahun 2014 tentang Pemerintahan Daerah sebagaimana telah diubah.",
    "Peraturan Menteri PANRB Nomor 6 Tahun 2024 tentang Pengadaan Pegawai ASN (contoh kebijakan nasional)."
  ]
};
