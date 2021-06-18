<?php
	$con = mysqli_connect("localhost", "sghan811", "h3163324!", "sghan811");

	$id=$_COOKIE["lid"];
	$pass=$_COOKIE["lpass"];

	$statement = mysqli_prepare($con,"SELECT id,pass,email FROM USER WHERE id = ? and pass = ?;");
	mysqli_stmt_bind_param($statement, "ss", $id,$pass);
	mysqli_stmt_execute($statement);

	mysqli_stmt_store_result($statement);
	mysqli_stmt_bind_result($statement, $id, $pass, $email);

	$response = array();
	$response["success"]=false;
	echo("<script src='../js/login.js'></script>");
	echo("<script>load_cookie('$id','$pass');</script>");
	echo("<script>location.href = '../index.html';</script>");
?>
