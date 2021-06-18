<?php
	$json = $_POST['json2'];
	file_put_contents("../json/data.json", json_encode($json));
?>