<?php

  $id = $_GET['id'];

  $dbhost = 'localhost';
  $dbname = 'arsbc';
  $dbuser = 'www-data';
  $dbpass = 'arsbc';
  
  $sql = "SELECT * FROM Chat 
         WHERE ID > '$id'";
  
  try {
    $conn = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser,$dbpass);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($result);
    
  } catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage() . "\n";
    exit();
  }
?>
