<?php
header('Content-Type: text/xml');
$digit = $_POST['Digits'] ?? '1';
$map = ['1'=>'+15551234567','2'=>'+15551234568','3'=>'+2348012345678','0'=>'+15551234560'];
$num = $map[$digit] ?? $map['0'];
?>
<Response>
  <Say>Connecting you to interpreter now. Call will be recorded</Say>
  <Dial record="true" timeout="20"><Number><?= $num ?></Number></Dial>
  <Say>No interpreter available</Say>
</Response>
