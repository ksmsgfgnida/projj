const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Статический файловый сервер для статических файлов React приложения
app.use(express.static(path.join(__dirname, 'client', 'thr')));

// Маршрут для обработки всех запросов и отправки index.html
app.get('', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'thr', 'index.html'));
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
