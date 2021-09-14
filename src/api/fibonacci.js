const express = require('express');

const router = express.Router();

function fib(n) {
  if (n > 1) {
    return fib(n - 1) + fib(n - 2);
  }
  return n;
}

router.get('/boom', (req, res) => {
  res.send('Hola');
});

router.get('/calculate/:num', (req, res) => {
  const num = Number(req.params.num);

  if (typeof num !== 'number' || !Number.isNaN(num)) {
    return res
      .status(400)
      .json({ message: 'Please provide valid Integer for calculation' });
  }

  const f = fib(num);

  return res.json({ answer: f });
});

module.exports = router;
