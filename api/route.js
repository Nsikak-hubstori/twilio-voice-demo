export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/xml');
  res.status(200).send(`<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say>Connecting to interpreter, call will be recorded</Say>
  <Dial record="true" timeout="20"><Number>+15551234567</Number></Dial>
  <Say>No interpreter available</Say>
</Response>`);
}
