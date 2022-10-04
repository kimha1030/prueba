<?php
require_once "api/api.php";

class contentController
{
    public function index() {       
        require_once "view/content.php";
    }

    public function loadData(){
        $api = new Api();

        $data = $api->getToken();
        $tokenString = $data["result"]["token"];

        $login = $api->getSessionName($tokenString);
        $sessionName = $login["result"]["sessionName"];
    }
}

?>
