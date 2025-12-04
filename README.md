\# WebApp Progress 3 — Workflow 2 (Local WebApp → Webhook → n8n → OpenAI)



\## 📌 Deskripsi Proyek



Progress 3 ini membangun sebuah \*Workflow 2\* yang menghubungkan WebApp lokal dengan n8n melalui Webhook, lalu memproses pertanyaan menggunakan OpenAI.



Alur lengkap:



1\. \*\*User\*\* mengisi pertanyaan di WebApp lokal.

2\. WebApp mengirim data ke \*\*n8n Webhook URL\*\*.

3\. n8n memanggil \*\*OpenAI\*\* untuk memproses jawaban.

4\. Hasil OpenAI dikembalikan ke WebApp.

5\. WebApp menampilkan respon.



---



\## 📂 Struktur Project



```

progress\_3/

│── server.js

│── index.html

│── package.json

│── README.md

```



---



\## 🚀 Cara Menjalankan WebApp



\### 1. Install dependency



```

npm install

```



\### 2. Jalankan server



```

node server.js

```



Jika berhasil, akan muncul:



```

WebApp berjalan di http://localhost:3000

```



---



\## 🔗 Konfigurasi n8n Webhook



\### 1. Buat workflow baru → tambahkan node:



\* \*\*Webhook (Trigger)\*\*

\* \*\*OpenAI\*\*

\* \*\*Respond to Webhook\*\*



\### 2. Set Webhook node:



\* \*HTTP Method:\* POST

\* \*Path:\* contoh `/progress3`



Webhook URL Anda akan menjadi:



```

http://localhost:5678/webhook/progress3

```



\### 3. OpenAI Node



\* Model: GPT-4o mini / apa pun yg tersedia

\* Input: menyambung dari Webhook → `{{$json\["question"]}}`



\### 4. Respond to Webhook



\* Response: Text saja

\* Value: output dari OpenAI



---



\## 📸 Screenshot



\* \*\*Screenshot WebApp berjalan lokal\*\* (form + hasil response)

\* \*\*Screenshot Postman / Browser n8n Webhook test\*\*

\* \*\*Screenshot Workflow di n8n\*\*



\*(Tambahkan setelah file gambar diupload ke repo)\*



---



\## 🌐 Deploy ke Vercel



1\. Push project ini ke GitHub

2\. Buka \[https://vercel.com](https://vercel.com)

3\. Import repo WebApp

4\. Deploy (otomatis mendeteksi Node.js)



---



\## 📎 Link Pengumpulan



\* \*\*GitHub WebApp:\*\* \[https://github.com/Rafaziaa/webapp-progress3](https://github.com/Rafaziaa/webapp-progress3)

\* \*\*GitHub Workflow (export .json):\*\* \*(upload file nanti)\*



---



\## 📝 Penjelasan Alur Data



1\. User mengetik pertanyaan di WebApp.

2\. WebApp mengirim POST request ke n8n Webhook.

3\. n8n menerima pertanyaan \& mengirim ke OpenAI.

4\. OpenAI menghasilkan jawaban.

5\. n8n mengirim jawaban kembali ke WebApp.

6\. WebApp menampilkan hasil ke user.



---



\## ✔️ Status



\* WebApp: \*\*SELESAI\*\*

\* Workflow n8n: \*\*SELESAI\*\* (tinggal upload)

\* Pengumpulan: \*\*SIAP\*\*



---



Jika ingin saya tambahkan screenshot placeholder, workflow JSON, atau layout README lebih rapi tinggal bilang saja.





