const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware untuk request body menggunakan body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware untuk file static
app.use(express.static(path.join(__dirname, 'public')));

// Middleware untuk file upload
app.post('/upload', (req, res) => {
  // Proses upload file di sini
  // Contoh: menyimpan file yang diunggah ke sistem file server
  console.log(req.file); // Informasi tentang file yang diunggah
  res.send('File uploaded successfully');
});

// Middleware meng-handle CORS
app.use(cors());

// Contoh endpoint untuk API
app.get('/api/data', (req, res) => {
  // Logika untuk mengambil data dari server
  res.json({ message: 'Data from server' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
