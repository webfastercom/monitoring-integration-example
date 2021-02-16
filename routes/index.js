const express = require('express');
const axios = require('axios');

const env = require('../env');

const router = express.Router();

// Start writing your integration here

router.get('/', async (req, res) => {
  return res.status(200).json({ message: env.message });
}) // route-end

// required setup route
router.get('/setup', (req, res) => {
  return res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Example setup</title>
  <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
</head>
<body>
  <div class="absolute inset-0 bg-gray-500 flex items-center justify-center text-white">
    <form action="${env.configEnpoint}" method="POST" class="flex flex-col">
      <label class="mb-4 text-4xl font-bold" for="message">What do you want to be returned?</label>
      <input class="rounded mb-4 px-3 py-1 text-gray-400" id="message" type="text">
      <input class="rounded mb-4 px-3 py-1 hover:bg-green-200 text-gray-500 cursor-pointer" type="submit" value="submit">
    </form>
  </div>
</body>
</html>`)
}) // route-end

module.exports = router;
