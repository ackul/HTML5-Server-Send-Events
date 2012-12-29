<!--Server Sent Event Server side code
	Achin Kulshrestha -->
<?php
If($_SERVER['HTTP_ORIGIN'] == 'http://10.252.241.81')
    {
header('Access-Control-Allow-Origin: http://10.252.240.222');
}
header("Content-Type: text/event-stream\n\n");
    echo "Event: server-time\n";
    echo "data: " . time() . "\n";
    flush();
?>