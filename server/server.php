<?php
header('Access-Control-Allow-Origin: *');  

include 'models.php';
include 'team.php';
include 'player.php';
include 'user.php';

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

//Routing


$objData = json_decode($data);

switch ($_GET['method']) {
    //players
    case "getPlayers":
    echo getPlayers();
    break;
    case "getPlayer":
    echo getPlayer($objData->id);
    break;
    //users
    case "getUsers":
    echo getUsers();
    break;
    case "getUser":
    echo getUser($objData->id);
    break;
    //tournaments
    case "getTournaments":
    echo getTournaments();
    break;
    //teams
    case "getTeams":
    echo getTeams();
    break;
    case "addTeam":
    echo add($objData->team);
    break;
}


?>