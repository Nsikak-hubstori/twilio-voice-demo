<?php
header('Content-Type: text/xml');
echo '<?xml version="1.0" encoding="UTF-8"?><Response><Say>Welcome to Language People demo by Nsikak</Say><Gather numDigits="1" action="/api/route.php" method="POST"><Say>For Spanish press 1, French 2, Yoruba 3, English 0</Say></Gather></Response>';
