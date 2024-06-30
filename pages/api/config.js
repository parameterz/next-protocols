// app/api/config.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.resolve('./app/config.json');
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);

  res.status(200).json(data);
}
