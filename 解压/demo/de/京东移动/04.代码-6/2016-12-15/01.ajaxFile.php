<?php
//	echo 'testInfo';
//	print_r($_POST);
	print_r($_FILES);
	
	/*
	 * Array ( [selectFile] => Array ( [name] => rem.png [type] => image/png [tmp_name] => C:\fox_folder\00.programs\wamp\tmp\php2268.tmp [error] => 0 [size] => 33398 ) )
	 * */
	// 移动上传的文件
	// 参数1 移动谁
	// 参数2 去哪里
	// Array ( [name] => rem.png [type] => image/png [tmp_name] => C:\fox_folder\00.programs\wamp\tmp\php2268.tmp [error] => 0 [size] => 33398 )
	$fileInfo = $_FILES['selectFile'];
	
	$fileName =$fileInfo['tmp_name'];
	$path = $fileInfo['name'];
	move_uploaded_file($fileName, $path) 
?>