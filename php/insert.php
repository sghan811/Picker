<?php
	$con = mysqli_connect("localhost", "sghan811", "h3163324!", "sghan811");
	
	$id=$_COOKIE["id"];
	$pass=$_COOKIE["pass"];
	$email=$_COOKIE["email"];
	echo $pass;
	$statement = mysqli_prepare($con, "INSERT INTO PICKER VALUES(?, ?, ?);");
	mysqli_stmt_bind_param($statement, "sss", $id, $pass, $email);
	mysqli_stmt_execute($statement);
	$response = array();
	$response["success"]=true;
	json_encode($response);
	echo("<script>location.href='../html/inserted.html';</script>"); 
?>