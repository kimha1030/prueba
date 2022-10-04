<?php
require_once("./controller/contentController.php");

$content = new contentController();

if (!empty($_GET)) {
    $content->loadData();
} else {
    $content->index();
}
?>
