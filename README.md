# UPKP Tingkat 3 — Materi & CAT Tryout

Aplikasi web statis untuk persiapan **Ujian Penyesuaian Kualifikasi Pendidikan (UPKP) Tingkat 3** (D3–S3). Berisi 13 modul materi yang diperluas dari kisi-kisi resmi, field report, dan bocoran, ditambah **100 soal CAT Tryout**, **100 soal latihan per materi**, dan **Tryout HOTS rahasia (100 soal C4–C6 sesuai blueprint)** dengan pembahasan mendalam.

Seluruh aplikasi berjalan **offline** — tanpa server, tanpa build, tanpa CDN, dan tanpa koneksi internet.

---

## Cara Membuka

1. Buka folder proyek.
2. Klik dua kali `index.html`, atau buka dengan Chrome/Edge/Firefox.
3. Selesai. Tidak perlu `npm install`, server lokal, atau koneksi internet.

> Semua data (materi, soal, jawaban) dimuat dari file `.js` lokal melalui tag `<script>`, sehingga aplikasi tetap bekerja pada protokol `file://`.

---

## Fitur

### Pembelajaran
- **13 modul materi** terstruktur: TWK, TKT, TSI, TKP, dan modul pengayaan.
- Setiap modul memuat tujuan pembelajaran, estimasi waktu, uraian bertingkat, tabel rangkuman, callout "kunci/jebakan/contoh", ringkasan, dan dasar hukum.
- Pencarian materi dan filter berdasarkan kelompok ujian.
- Penanda **sudah dibaca** yang tersimpan otomatis per perangkat.
- Navigasi daftar isi (TOC) per bagian pada setiap modul.
- **Unduh materi (PDF)** — seluruh 13 modul digabung menjadi **satu berkas PDF** sekali klik, lengkap dengan sampul dan daftar modul bernomor halaman.

### Latihan & Tryout
- **Latihan per materi** untuk 12 materi teruji (di luar modul pengayaan).
- **CAT Tryout 100 soal / 90 menit** sesuai komposisi resmi.
- Soal berbasis stimulus dan kasus (HOTS/analisis/terapan), bukan sekadar hafalan.
- Timer berjalan otomatis, tidak dapat dijeda, dan **auto-submit** saat waktu habis.
- Navigasi bebas antar soal, penanda **ragu-ragu**, serta status terjawab pada navigator.
- **Autosave** setiap jawaban; sesi dapat dilanjutkan setelah halaman ditutup atau di-refresh.
- Tanpa pengurangan nilai: 1 poin per jawaban benar.
- **Unduh PDF soal + kunci** untuk **Latihan per Materi** (semua materi digabung jadi satu berkas) dan **CAT Tryout** — hanya soal dan kunci jawaban, tanpa pembahasan.

### Tryout HOTS (mode rahasia)
- **100 soal penalaran tingkat tinggi** murni dengan komposisi **sesuai blueprint resmi** (TWK 30, TKT 25, TSI 30, TKP 15): 34 soal C4 (Menganalisis), 34 soal C5 (Mengevaluasi), dan 32 soal C6 (Mencipta).
- Bukan hanya soal yang HOTS: **pilihan jawaban, pengecoh, dan pembahasan** juga menuntut penalaran tingkat tinggi.
- **Tanpa batas waktu** — kerjakan sesuai tempo sendiri.
- **Umpan balik langsung**: setiap jawaban langsung menampilkan benar/salah beserta penjelasan singkat (inti, alasan kunci, analisis tiap opsi, dasar konsep/hukum, jebakan, dan variasi soal).
- Jawaban terkunci setelah dipilih; jawaban tersimpan otomatis dan sesi dapat dilanjutkan.
- Hasil menampilkan **capaian per level kognitif (C4/C5/C6)**.
- **Terkunci secara bawaan.** Untuk membukanya, ketik kode rahasia **`karangmoncol`** di mana saja pada halaman aplikasi (bukan di dalam kolom isian). Status terbuka tersimpan otomatis di perangkat.

### Pembahasan
- Skor akhir dan rincian per kelompok/materi.
- **Mengapa kunci benar** dan **inti pembahasan** untuk setiap soal.
- **Analisis setiap opsi A–E** — alasan opsi benar dan alasan opsi lain keliru.
- Dasar hukum/konsep dan **jebakan soal**.
- **Variasi soal setara & pengembangan** untuk memperkirakan bentuk soal lain yang mungkin muncul.
- Filter review: semua / benar / salah / tidak dijawab.

### Progres & Pengaturan
- Riwayat percobaan (hingga 60 sesi) dengan tren skor dan penguasaan per materi.
- **Mode gelap** yang tersimpan otomatis.
- Pengurangan animasi (aksesibilitas).
- **Ekspor JSON** berisi pengaturan, progres baca, dan riwayat percobaan.
- **Unduh PDF materi** langsung dari halaman Pengaturan.
- Reset seluruh data lokal.

---

## Unduh Materi (PDF)

Tombol **Unduh PDF** tersedia di tiga tempat: header indeks materi, halaman detail modul, dan **Pengaturan → Unduh materi pembelajaran**.

Sekali klik, aplikasi menyusun **satu berkas PDF** (`Materi-UPKP-Tingkat-3.pdf`) berisi:

- **Sampul** dan **Daftar Modul** dengan nomor halaman asli.
- **Satu bagian per modul** (13 modul) dengan judul, ringkasan, tujuan belajar, tabel, callout kunci/jebakan/contoh, ringkasan, dan dasar hukum.
- Header berjalan (judul modul) dan footer bernomor halaman pada setiap halaman.

PDF ditulis sepenuhnya di dalam aplikasi (`assets/js/pdf.js`) — **tanpa library, tanpa CDN, dan tanpa koneksi internet** — sehingga tetap bekerja pada protokol `file://`.

---

## Unduh Soal + Kunci (PDF)

Selain materi, tersedia unduhan **soal beserta kunci jawaban** (tanpa pembahasan):

- **Latihan per Materi** → tombol **Unduh PDF** di header halaman *Latihan per Materi*. Menghasilkan `Latihan-Soal-per-Materi-UPKP-Tingkat-3.pdf` berisi seluruh 100 soal latihan dari 12 materi, dikelompokkan per kelompok ujian dan per materi.
- **CAT Tryout** → tombol **Unduh PDF Soal** di halaman briefing *CAT Tryout*. Menghasilkan `CAT-Tryout-UPKP-Tingkat-3.pdf` berisi 100 soal tryout dengan komposisi resmi.

Setiap berkas memuat **sampul**, **soal bernomor berurutan** (stimulus + pertanyaan + opsi A–E), dan bagian **Kunci Jawaban** di akhir dokumen. **Pembahasan tidak disertakan** sehingga cocok untuk latihan mandiri maupun cetak. Berkas disusun dengan penulis PDF yang sama (`assets/js/pdf.js`) sehingga tetap bekerja offline pada `file://`.

---

## Tryout HOTS Rahasia

Selain tryout dan latihan biasa, aplikasi menyimpan satu mode tersembunyi: **Tryout HOTS (Higher Order Thinking Skills)** berisi **100 soal** yang menuntut level kognitif tinggi, dengan komposisi **persis mengikuti blueprint resmi**.

- **Sebaran level:** 34 soal **C4 · Analisis**, 34 soal **C5 · Evaluasi**, dan 32 soal **C6 · Mencipta**.
- **Komposisi materi (sesuai blueprint):**

| Kelompok | Jumlah | Materi (HOTS) |
|---|---:|---|
| TWK | 30 | Pancasila 10, UUD 1945 10, Sejarah Indonesia 5, Bahasa Indonesia 5 |
| TKT | 25 | Peraturan Kepegawaian 10, Pelayanan Publik 5, Good Governance 5, Kebijakan Publik 5 |
| TSI | 30 | Renstra & Perencanaan 15, SOTK 15 |
| TKP | 15 | Bahasa Inggris 10, Literasi Digital 5 |
| **Total** | **100** | |
- **Cakupan:** seluruh 12 materi teruji (TWK, TKT, TSI, TKP) dengan jumlah butir per materi mengikuti blueprint di atas.
- **Bukan hanya soal yang HOTS** — opsi jawaban, pengecoh, dan seluruh pembahasan juga dirancang pada level penalaran tinggi.
- **Tanpa batas waktu** dan memberi **umpan balik langsung** benar/salah + penjelasan singkat setelah setiap soal dijawab.

### Cara Membuka

Ketik kode rahasia berikut di mana saja pada halaman aplikasi (pastikan fokus **tidak** berada di kolom pencarian/isian):

```
karangmoncol
```

Setelah kode dikenali, aplikasi otomatis membuka halaman **Tryout HOTS** dan menyimpan status terbuka di perangkat. Selama belum dibuka, rute `#/hots` menampilkan halaman terkunci.

> Karena seluruh logika berjalan di sisi klien, kode ini berfungsi sebagai penyaring, bukan pengamanan kriptografis.

---

## Blueprint Tryout

Komposisi mengikuti kisi-kisi resmi: **100 soal, 90 menit**.

| Kelompok | Nama | Jumlah | Materi |
|---|---|---:|---|
| TWK | Tes Wawasan Kebangsaan | 30 | Pancasila 10, UUD 1945 10, Sejarah Indonesia 5, Bahasa Indonesia 5 |
| TKT | Tes Kompetensi Teknis | 25 | Peraturan Kepegawaian 10, Pelayanan Publik 5, Good Governance 5, Kebijakan Publik 5 |
| TSI | Tes Substansi Instansi | 30 | Renstra & Perencanaan Pembangunan 15, SOTK 15 |
| TKP | Tes Kompetensi Penunjang | 15 | Bahasa Inggris 10, Literasi Digital 5 |
| **Total** | | **100** | |

Distribusi kunci jawaban tryout dan latihan masing-masing seimbang: **20 soal per opsi A–E**.

### Distribusi Latihan per Materi (100 soal)

Latihan memakai komposisi yang sama dengan blueprint resmi agar proporsi antar-materi konsisten dengan tryout.

| Kelompok | Jumlah | Materi |
|---|---:|---|
| TWK | 30 | Pancasila 10, UUD 1945 10, Sejarah 5, Bahasa Indonesia 5 |
| TKT | 25 | Peraturan Kepegawaian 10, Pelayanan Publik 5, Good Governance 5, Kebijakan Publik 5 |
| TSI | 30 | Renstra & Perencanaan Pembangunan 15, SOTK 15 |
| TKP | 15 | Bahasa Inggris 10, Literasi Digital 5 |
| **Total** | **100** | |

---

## Struktur Proyek

```
D:\www\UPKP\
├── index.html                  # Shell aplikasi + urutan pemuatan script
├── README.md
├── assets\
│   ├── css\
│   │   └── style.css           # Design system, layout, komponen, dark mode, responsif
│   └── js\
│       ├── store.js            # Persistensi localStorage (settings, progress, session, attempts)
│       ├── ui.js               # Helper UI: ikon, escape HTML, feedback soal, toast, modal
│       ├── materi.js           # Indeks materi, filter/pencarian, halaman detail + TOC
│       ├── pdf.js              # Penulis PDF mandiri: materi gabungan + soal & kunci (latihan/tryout)
│       ├── quiz.js             # Siklus sesi CAT, timer, autosave, navigasi, submit
│       ├── hasil.js            # Skor, review/pembahasan, riwayat & analitik
│       └── app.js              # Router hash, dashboard, halaman tryout, pengaturan, nav mobile
└── data\
    ├── materi\
    │   ├── twk.js              # Pancasila, UUD 1945, Sejarah, Bahasa Indonesia
    │   ├── tkt.js              # Kepegawaian, Pelayanan, Good Governance, Kebijakan
    │   ├── tsi.js              # Renstra, SOTK
    │   ├── tkp.js              # Bahasa Inggris, Literasi Digital
    │   └── pengayaan.js        # Modul pengayaan FR & bocoran
    └── soal\
        ├── tryout-a.js         # T001–T050
        ├── tryout-b.js         # T051–T100
        ├── latihan-a.js        # L001–L050 (selektif)
        ├── latihan-b.js        # L051–L119
        └── hots.js             # H001–H100 — Tryout HOTS rahasia (C4–C6, 100 soal)
```

### Rute Aplikasi

| Rute | Halaman |
|---|---|
| `#/` | Beranda / dashboard |
| `#/materi` | Indeks 13 modul materi |
| `#/materi/:id` | Detail modul + daftar isi |
| `#/latihan` | Pemilihan latihan per materi |
| `#/tryout` | Briefing CAT Tryout |
| `#/hots` | Briefing Tryout HOTS (terkunci hingga kode `karangmoncol` dimasukkan) |
| `#/sesi` | Sesi ujian aktif |
| `#/hasil/:id` | Hasil + review pembahasan |
| `#/riwayat` | Riwayat & analitik |
| `#/pengaturan` | Pengaturan, integritas data, ekspor/reset |

---

## Sumber Konten

Materi disusun dengan urutan prioritas berikut:

1. `JENIS DAN MATERI UPKP.png` — peta jenis dan materi ujian.
2. `MATERI UDIN DAN UPKP 2026.pdf` — materi utama.
3. `RINGKASAN MATERI FR UJIAN DINAS.pdf` — field report (FR).
4. `Kisi kisi Bocoran.docx` — bocoran kisi-kisi.
5. `KISI-KISI UPKP Tingkat 3.pdf` — dipakai untuk menutup celah materi yang belum tercakup.

Setiap poin kisi-kisi/bocoran diperluas melampaui daftar butirnya, dengan prioritas pada materi yang tersedia sebelum menambahkan asumsi. Konteks **Jawa Tengah** disertakan, diikuti penjelasan pada tingkat nasional.

---

## Penyimpanan Data (localStorage)

Semua data disimpan lokal di browser dengan namespace `upkp.v1.`:

| Key | Isi |
|---|---|
| `upkp.v1.settings` | Tema (`light`/`dark`), preferensi animasi, dan status kunci Tryout HOTS (`hotsUnlocked`) |
| `upkp.v1.progress` | Daftar materi yang sudah dibaca + materi terakhir |
| `upkp.v1.session` | Sesi ujian aktif (jawaban, indeks soal, flag, sisa waktu) |
| `upkp.v1.attempts` | Riwayat percobaan (maksimal 60) |

Catatan:
- Data **tidak** dikirim ke mana pun.
- Menghapus data situs/browser akan menghapus progres.
- Gunakan **Pengaturan → Ekspor JSON** untuk mencadangkan progres.
- Mode privat/incognito dapat membatasi persistensi.

---

## Catatan Pembaruan Regulasi

Materi telah disesuaikan dengan regulasi yang berlaku saat penyusunan (7 November 2026), antara lain:

- **UU Nomor 20 Tahun 2023** tentang Aparatur Sipil Negara — istilah ASN mencakup PNS dan PPPK; manajemen berbasis sistem merit.
- **PP Nomor 94 Tahun 2021** tentang Disiplin PNS — jenis dan tingkat hukuman disiplin.
- **Peraturan BKN Nomor 2 Tahun 2025** tentang Kenaikan Pangkat Reguler PNS.
- **Peraturan BKN Nomor 4 Tahun 2025** tentang Periodisasi Kenaikan Pangkat PNS — periode kenaikan pangkat 12 kali dalam setahun (tanggal 1 setiap bulan), mencabut Peraturan BKN 4/2023 yang hanya 6 periode.
- **Perda Provinsi Jawa Tengah Nomor 5 Tahun 2025** tentang Pembentukan dan Susunan Perangkat Daerah — induk SOTK, mencabut Perda 9/2016 dan Perda 5/2022.
- **Pergub Jawa Tengah Nomor 1–4 Tahun 2026**:
  - 1/2026 — SOTK Setda, Sekretariat DPRD, Inspektorat, dan Staf Ahli Gubernur.
  - 2/2026 — SOTK Dinas dan Badan.
  - 3/2026 — SOTK UPTD.
  - 4/2026 — SOTK Cabang Dinas.
- **Keppres Nomor 24 Tahun 2016** — Hari Lahir Pancasila (1 Juni).

Regulasi dapat berubah. **Verifikasi kembali** dasar hukum terbaru sebelum ujian, terutama peraturan daerah dan peraturan gubernur.

---

## Cara Memperbarui Konten

### Menambah/mengubah materi
Edit file di `data/materi/`. Setiap modul memakai struktur:

```js
window.UPKP_MATERI.namaModul = {
  id: "nama-modul",
  judul: "Judul Modul",
  kelompok: "TWK",            // TWK | TKT | TSI | TKP | PENGAYAAN
  urutan: 1,
  ringkas: "Ringkasan singkat.",
  estimasi: "28 menit",
  tujuan: ["..."],
  sections: [
    { judul: "Judul bagian", html: `<p>...</p>` }
  ],
  ringkasan: ["..."],
  dasarHukum: ["..."]
};
```

Modul baru juga harus didaftarkan sebagai `<script>` di `index.html` dan (bila perlu) pada konfigurasi kelompok di `assets/js/app.js`.

### Menambah/mengubah soal
Edit file di `data/soal/`. Struktur soal:

```js
{
  id: "T101",
  mode: "tryout",             // tryout | latihan | hots
  kelompok: "TWK",            // TWK | TKT | TSI | TKP
  materi: "pancasila",        // harus cocok dengan id materi
  tipe: "HOTS",
  stimulus: "Konteks/kasus...",
  pertanyaan: "Pertanyaan...",
  opsi: { A: "...", B: "...", C: "...", D: "...", E: "..." },
  kunci: "C",
  pembahasan: {
    inti: "...",
    benar: "...",
    opsi: { A: "...", B: "...", C: "Tepat. ...", D: "...", E: "..." },
    dasar: ["..."],
    jebakan: "..."
  },
  variasi: ["...", "..."]
}
```

Panduan singkat:
- `id` harus unik di seluruh bank soal.
- `materi` harus sama dengan `id` modul agar muncul di latihan materi tersebut.
- `pembahasan.opsi` wajib lengkap A–E; opsi kunci sebaiknya diawali "Tepat." agar konsisten.
- `variasi` minimal 2 butir agar fitur pengembangan soal tampil bermakna.

### Menambah file soal baru
Tambahkan baris `<script src="data/soal/namafile.js"></script>` di `index.html` **sebelum** `assets/js/quiz.js`.

---

## Batasan & Catatan

- Aplikasi ini **bukan aplikasi resmi BKN** dan tidak menjamin kelulusan.
- Soal disusun sebagai simulasi dan alat belajar, bukan reproduksi soal ujian resmi.
- Skor tryout bersifat latihan (1 poin per jawaban benar, tanpa nilai negatif), bukan formula penilaian resmi.
- Untuk pengalaman terbaik, gunakan Chrome/Edge versi terbaru.
- Data lokal bergantung pada browser; gunakan ekspor JSON secara berkala.

---

## Kredit

- **Konseptor & Pengembang:** Mohammad Lubna Kamal, A.Md.Kom.
- **Instansi:** RSUD dr. M. Ashari Pemalang

Aplikasi ini **bukan aplikasi resmi BKN** dan hanya merupakan karya individu untuk keperluan belajar mandiri.

---

## Lisensi & Penggunaan

Dibuat untuk keperluan belajar mandiri persiapan UPKP Tingkat 3. Silakan gunakan dan sesuaikan untuk kebutuhan pembelajaran internal.
