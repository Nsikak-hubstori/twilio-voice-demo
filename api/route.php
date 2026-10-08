<?php
header('Content-Type: text/xml');
$digit = $_POST['Digits'] ?? '1';
echo '<?xml version="1.0"?><Response><Say>Connecting to interpreter, call will be recorded</Say><Dial record="true"><Number>+15551234567</Number></Dial></Response>';
