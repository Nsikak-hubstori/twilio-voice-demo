module.exports = (req, res) => {
  res.setHeader('Content-Type', 'text/xml');
  res.send(`<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="alice">Welcome to Language People demo by Nsikak Emmanuel</Say>
  <Gather numDigits="1" timeout="10" action="/api/route" method="POST">
    <Say>For Spanish press 1, For French press 2, For Yoruba press 3, For English press 0</Say>
  </Gather>
  <Say>We didn't receive input. Goodbye</Say>
</Response>`);
}
