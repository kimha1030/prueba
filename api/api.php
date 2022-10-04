<?php

class Api
{
    public function getToken() {
        $url = "https://develop.datacrm.la/anieto/anietopruebatecnica/webservice.php?operation=getchallenge&username=prueba";
        $method = "GET";
        $response = $this->executeCurl($url, $method);
        return $response;
    }

    public function getSessionName($tokenString) {
        $url = "https://develop.datacrm.la/anieto/anietopruebatecnica/webservice.php";
        $method = "POST";
        $accessKey = md5($tokenString."3DlKwKDMqPsiiK0B");
        $postOptions = array(
            CURLOPT_POSTFIELDS => 'operation=login&username=prueba&accessKey='.$accessKey,
            CURLOPT_HTTPHEADER => array('Content-Type: application/x-www-form-urlencoded'),
        );
        $response = $this->executeCurl($url, $method, $postOptions);
        return $response;
    }

    public function getData($sessionName) {
        $url = "https://develop.datacrm.la/anieto/anietopruebatecnica/webservice.php?operation=query&sessionName=".$sessionName."&query=select%20*%20from%20Contacts;";
        $method = "GET";
        $response = $this->executeCurl($url, $method);
        return $response;
    }

    public function executeCurl($url, $method, $postOptions="") {
        $curl = curl_init();

        $options = array(
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => $method,
        );
        
        if ($method == "POST") {
            $joinOptions = $options + $postOptions;
            curl_setopt_array($curl, $joinOptions);
        } else {
            curl_setopt_array($curl, $options);
        }

        $response = curl_exec($curl);
        curl_close($curl);
        return json_decode($response,true);
    }
}
?>
