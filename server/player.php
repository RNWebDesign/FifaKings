<?php

function getPlayers()
{
    // Create connection
    $conn = connect();
    $sql = "SELECT * FROM `user`";
    $result = $conn->query($sql);

    $jsonData = array();
    while ($array = $result->fetch_row()) {
        $obj = new Player($array[0], $array[1], $array[2], $array[3], $array[4], $array[5]);
        $jsonData[] = $obj;
    }
    return json_encode($jsonData);

}

function getPlayer($pid)
{
    // Create connection
    $conn = connect();
    $sql = "SELECT * FROM `user` WHERE id = " . toNull($pid,true) . "";
    $result = $conn->query($sql);

    $array = $result->fetch_row();
    $obj = new Player($array[0], $array[1], $array[2], $array[3], $array[4], $array[5]);

    return json_encode($obj);

}

?>