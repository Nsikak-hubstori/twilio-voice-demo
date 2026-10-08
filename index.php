<?php
header('Content-Type: text/xml');
echo '<?xml version="1.0" encoding="UTF-8"?>';
?>
<Response>
  <Say voice="alice">Welcome to Language People demo by Nsikak</Say>
  <Gather numDigits="1" timeout="10" action="/route.php" method="POST">
    <Say>For Spanish press 1, For French press 2, For Yoruba press 3, For English press 0</Say>
  </Gather>
  <Say>No input received. Goodbye</Say>
</Response>
