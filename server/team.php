<?php
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


function addTeam($item)
{

    // Create connection
    $conn = connect();

    $sql = "INSERT INTO `team` (name,locale,att,mid,def,quality,version) VALUES (" . toNull($item->name,true) . "," . toNull($item->locale,true) . "," . $item->att . "," . $item->mid . "," . $item->def . ",15)";

    if ($conn->query($sql) === TRUE) {
        return true;
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

?>