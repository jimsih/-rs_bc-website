<?php

  $name = $_POST['name'];
  $text = $_POST['text'];
  
  $file = fopen("forumMessages.json", "w") or die("Unable to open forumMessages file");
  
  fwrite($file, $text);
  fclose($file);

?>
