<?php

  $name = $_POST['name'];
  $text = $_POST['text'];  
  $date = gmdate("Y/m/d H:i:s");
  
  $dbhost = 'localhost';
  $dbname = 'arsbc';
  $dbuser = 'www-data';
  $dbpass = 'arsbc';
  
  $sql = "INSERT INTO Chat (Name, Text, Time)
    VALUES ('$name', '$text', '$date')
  ";
  
  try {
    $conn = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser,$dbpass);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $conn->exec($sql);
  } catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage() . "\n";
    exit();
  }
  
?>
