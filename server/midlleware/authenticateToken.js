// server/middleware/authenticateToken.js

const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  // Получение токена из заголовка запроса
  const token = req.headers['authorization'];

  if (token) {
    // Проверка и верификация токена
    jwt.verify(token, 'secret_key', (error, decoded) => {
      if (error) {
        return res.sendStatus(403); // Ошибка: токен не верифицирован
      }
      req.user = decoded; // Добавление информации о пользователе в объект запроса
      next(); // Переход к следующему обработчику
    });
  } else {
    res.sendStatus(401); // Ошибка: токен отсутствует
  }
}

module.exports = authenticateToken;
