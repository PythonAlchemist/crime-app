import express from 'express';
import fetch from 'node-fetch';
require('dotenv').config({path:'.env'});
const app = express();

async function getPoints(req) {
  var resp = await fetch(process.env.PYTHON_ROUTE + `/crime-analytics/py-api/runPython`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  });
  let data = await resp.json();
  return {'data':data};
}

app.get('/crime-analytics/api/getData', async (req, res) => res.send(await getPoints(req)));

app.listen(process.env.PORT);
