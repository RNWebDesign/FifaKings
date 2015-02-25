<?php
header('Access-Control-Allow-Origin: *');  

include 'models.php';

$data = file_get_contents("php://input");


function escape($input)
{
    if (!get_magic_quotes_gpc()) {
        $input = mysql_real_escape_string($input);
    }
    return $input;
}

function toNull($input, $quote)
{
    if ($input == "") {
        return "NULL";
    } else {
        if ($quote) {
            return "'" . $input . "'";
        } else {
            return $input;
        }
    }
}
function connect(){
    $servername = "localhost";
    $username = "deb38057_shop";
    $password = "rvshop";
    $dbname = "fifav2";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    return $conn;
}

function done()
{
    $_GET["id"];

    $servername = "localhost";
    $username = "deb38057_shop";
    $password = "rvshop";
    $dbname = "deb38057_shop";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "UPDATE listitem SET Done=1 WHERE Id=" . $_GET["id"];

    if ($conn->query($sql) === TRUE) {
        return true;
    } else {
        echo "Error updating record: " . $conn->error;
    }
}

function add($item)
{

    if (!isset($item->ShopId)) $item->ShopId = 1;

    // Create connection
    $conn = connect();

    if (isset($item->Quantity))
        $sql = "INSERT INTO listitem (ShopId,Description, Quantity) VALUES (" . $item->ShopId . "," . toNull($item->Description,true) . "," . toNull($item->Quantity,true) . ")";
    else
        $sql = "INSERT INTO listitem (ShopId,Description) VALUES (" . $item->ShopId . "," . toNull($item->Description,true) . ")";

    if ($conn->query($sql) === TRUE) {
        return true;
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}





function getPlayers()
{
    // Create connection
    $conn = connect();
// Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $sql = "SELECT * FROM `user`";
    $result = $conn->query($sql);

    $jsonData = array();
    while ($array = $result->fetch_row()) {
        $obj = new Player($array[0], $array[1], $array[2], $array[3], $array[4], $array[5]);
        $jsonData[] = $obj;
    }
    return json_encode($jsonData);

}

function getTournaments()
{
    // Create connection
    $conn = connect();
// Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $sql = "SELECT * FROM `tournament`";
    $result = $conn->query($sql);

    $jsonData = array();
    while ($array = $result->fetch_row()) {
        $obj = new Tournament($array[0], $array[1], $array[2], $array[3], $array[4], $array[5], $array[6], $array[7]);
        $jsonData[] = $obj;
    }
    return json_encode($jsonData);

}

function getTeams()
{
    // Create connection
    $conn = connect();
// Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $sql = "SELECT * FROM `team`";
    $result = $conn->query($sql);

    $jsonData = array();
    while ($array = $result->fetch_row()) {
        $obj = new Team($array[0], $array[1], $array[2], $array[3], $array[4], $array[5], $array[6], $array[7], $array[8]);
        $jsonData[] = $obj;
    }
    return json_encode($jsonData);

}

//Routing


$objData = json_decode($data);

switch ($_GET['method']) {
    case "getTeams":
    echo getTeams();
    break;
    case "getPlayers":
    echo getPlayers();
    break;
        case "getTournaments":
    echo getTournaments();
    break;
    case "add":
        //echo 'test';
        //echo $data;
        //print_r($objData->item);
    echo add($objData->item);
    break;
}


?>