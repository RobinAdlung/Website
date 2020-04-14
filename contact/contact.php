<?php

if (isset($_POST['submit'])) {
	$name = $_POST['name'];
	$mailFrom = $_POST['email'];
	$message = $_POST['msg'];
	$subject = "Message from robinadlung.com";
	$mailTo = "robadlung@gmail.com";
	$headers = "From: ".$mailFrom;
	$txt = "You have an Email from ".$name.".\n\n".$message;
	
	
	
	mail($mailTo, $subject, $txt, $headers);
	header("Location: contact.html?emailsend")
}

?>