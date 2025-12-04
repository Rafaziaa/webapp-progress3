1. WebApp mengirim permintaan ke endpoint n8n melalui webhook HTTP.
2. n8n menerima request tersebut dan menjalankan workflow.
3. Workflow n8n memproses data (contoh: query RAG, proses teks, panggil LLM).
4. Hasil pemrosesan dikembalikan oleh n8n ke WebApp melalui response HTTP.
5. WebApp menampilkan hasil akhir kepada pengguna.
