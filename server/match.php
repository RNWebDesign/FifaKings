<?php

function getMatches()
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


function getListMatches()
{
    // Create connection
    $conn = connect();
    $sql = "SELECT m.id as Id,u1.*,u2.*,t1.*,t2.*,m.home_score,m.away_score,m.admin_id,m.tournament_id,m.date,m.version,m.random
            FROM `match` m , `user` u1,`user` u2 , `team` t1,`team` t2, `match_team` mt1,`match_team` mt2
            WHERE u1.id = m.home_id
            AND u2.id = m.away_id
            AND mt1.match_id = m.id
            AND mt2.match_id = m.id
            AND mt1.user_id = m.home_id
            AND mt2.user_id = m.away_id
            AND t1.id = mt1.team_id
            AND t2.id = mt2.team_id";
    $result = $conn->query($sql);

    $jsonData = array();
    while ($array = $result->fetch_row()) {
        $homePlayer = new User($array[1], $array[2], $array[3], $array[4], 'undefined', $array[6]);
        $awayPlayer = new User($array[7], $array[8], $array[9], $array[10], 'undefined', $array[12]);
        $homeTeam = new Team($array[13], $array[14], $array[15], $array[16], $array[17], $array[18], $array[19], $array[20], $array[21]);
        $awayTeam = new Team($array[22], $array[23], $array[24], $array[25], $array[26], $array[27], $array[28], $array[29], $array[30]);
        $match = new ListMatch($array[0], $homePlayer,$homeTeam,$array[31],$awayPlayer,$awayTeam,$array[32],$array[33],$array[34],$array[35],$array[36],$array[37]);

        $jsonData[] = $match;
    }
    return json_encode($jsonData);
}

?>