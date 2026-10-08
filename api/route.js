module.exports = (req, res) => {
  const digit = req.body?.Digits || '1';
  const map = { '1': '+15551234567', '2': '+15551234568', '3': '+2348012345678', '0': '+15551234560' };
  const num = map[digit] || map['0'];
  res.setHeader('Content-Type', 'text/xml');
  res.send(`<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say>Connecting you to interpreter. This call will be recorded for compliance</Say>
  <Dial record="true" recordingStatusCallback="/api/complete" timeout="20">
    <Number>${num}</Number>
  </Dial>
  <Say>No interpreter available. Leaving voicemail</Say>
  <Record maxLength="60" />
</Response>`);
}
