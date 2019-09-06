import express from 'express';
import fetch from 'node-fetch';
require('dotenv').config({path:'.env'});
const app = express();

async function provideAnswer(req) {
  var resp = await fetch(process.env.PYTHON_ROUTE + `/crime_analytics/API/runPython`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  });
  let data = await resp.json();
  return {'data':data};
}

app.get('/crime_analytics/getData', async (req, res) => res.send(await provideAnswer(req)));

app.listen(process.env.PORT);
