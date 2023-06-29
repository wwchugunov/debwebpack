const express = require('express');
const { pool } = require('../db/db.js');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  try {
    // Проверка имени пользователя и пароля в базе данных
    const query = 'SELECT * FROM users WHERE username = $1 AND password = $2';
    const values = [username, password];
    const result = await pool.query(query, values);
  
    if (result.rowCount > 0) {
      // Если авторизация прошла успешно, генерируем JWT-токен
      const token = jwt.sign({ username }, 'secret_key', { expiresIn: '10s' });
      console.log('Сгенерированный токен:', token);
      res.status(200).json({ message: 'Аутентификация прошла успешно', token });
    } else {
      res.status(401).json({ message: 'Неправильное имя пользователя или пароль' });
    }
  } catch (error) {
    console.error('Ошибка аутентификации:', error);
    res.status(500).json({ message: 'Внутренняя ошибка сервера' });
  }
});


router.post('/verify-token', (req, res) => {
  const { token } = req.body;

  if (token) {
    try {
      // Расшифровываем токен
      const decodedToken = jwt.verify(token, 'secret_key');
      console.log(decodedToken)

      // Проверяем необходимые данные в расшифрованном токене
      if (decodedToken.username) {
        // Токен валидный
        res.json({ valid: true });
      } else {
        // Недостаточно данных в токене
        res.json({ valid: false });
      }
    } catch (error) {
      // Ошибка при расшифровке токена
      res.json({ valid: false });
    }
  } else {
    // Токен отсутствует
    res.json({ valid: false });
  }
});





module.exports = router;
