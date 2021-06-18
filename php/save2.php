<?php 
	$imagedata = base64_decode($_POST['img2']);
	$filename = $_POST['name'];
	$file = $_SERVER['DOCUMENT_ROOT'] . '/Picker/pic/'.$filename.'.png';
	$imageurl  = 'http://***.com/images/'.$filename.'.png';
	file_put_contents($file,$imagedata);
	echo $imageurl;
?>