const https = require('https');
const url = `https://api.darksky.net/forecast/869fc6e809ef43b96cc30725d2e115c4/40,-75?units=si`;
const request = https.request(url, (response) => {
  let data = '';
  response.on('data', (chunk) => {
    data = data + chunk.toString();
  });

  response.on('end', () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on('error', (error) => {
  console.log(error);
});

request.end();
