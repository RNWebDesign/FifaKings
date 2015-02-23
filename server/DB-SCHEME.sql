-- phpMyAdmin SQL Dump
-- version 4.3.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Gegenereerd op: 23 feb 2015 om 23:57
-- Serverversie: 5.5.40-MariaDB-cll-lve
-- PHP-versie: 5.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `deb38057n2_zulte`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `comment`
--

CREATE TABLE IF NOT EXISTS `comment` (
  `id` int(50) NOT NULL,
  `match_id` int(50) NOT NULL,
  `user_id` int(50) NOT NULL,
  `date` datetime NOT NULL,
  `comment` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `league`
--

CREATE TABLE IF NOT EXISTS `league` (
  `id` int(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `league`
--

INSERT INTO `league` (`id`, `name`, `password`) VALUES
(1, 'Test League Robin', 'test');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `match`
--

CREATE TABLE IF NOT EXISTS `match` (
  `id` int(50) NOT NULL,
  `home_id` int(50) NOT NULL,
  `home_score` int(5) NOT NULL,
  `away_id` int(50) NOT NULL,
  `away_score` int(5) NOT NULL,
  `admin_id` int(50) NOT NULL,
  `tournament_id` int(50) NOT NULL,
  `date` datetime NOT NULL,
  `version` int(11) NOT NULL,
  `random` bit(1) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `match`
--

INSERT INTO `match` (`id`, `home_id`, `home_score`, `away_id`, `away_score`, `admin_id`, `tournament_id`, `date`, `version`, `random`) VALUES
(1, 1, 2, 2, 3, 1, 1, '2014-10-10 00:00:00', 15, b'1'),
(2, 2, 1, 1, 1, 1, 1, '2014-10-24 00:00:00', 15, b'1'),
(3, 1, 3, 2, 5, 1, 2, '2014-10-11 00:00:00', 15, b'1'),
(4, 1, 3, 3, 1, 1, 2, '2014-10-10 00:00:00', 15, b'1'),
(5, 2, 0, 4, 1, 1, 2, '2014-10-10 00:00:00', 15, b'1');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `match_elo`
--

CREATE TABLE IF NOT EXISTS `match_elo` (
  `match_id` int(50) NOT NULL,
  `home_points` int(5) NOT NULL,
  `away_points` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `match_team`
--

CREATE TABLE IF NOT EXISTS `match_team` (
  `match_id` int(50) NOT NULL,
  `user_id` int(50) NOT NULL,
  `team_id` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `role`
--

CREATE TABLE IF NOT EXISTS `role` (
  `id` int(50) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `role`
--

INSERT INTO `role` (`id`, `name`) VALUES
(1, 'god'),
(2, 'jesus'),
(3, 'user');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `team`
--

CREATE TABLE IF NOT EXISTS `team` (
  `id` int(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `type` varchar(100) NOT NULL,
  `att` int(3) NOT NULL,
  `mid` int(3) NOT NULL,
  `def` int(3) NOT NULL,
  `quality` float NOT NULL,
  `version` int(11) NOT NULL,
  `abbreviation` varchar(5) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `team`
--

INSERT INTO `team` (`id`, `name`, `type`, `att`, `mid`, `def`, `quality`, `version`, `abbreviation`) VALUES
(1, 'FC Zegbroek', 'Belgium', 100, 100, 100, 4.5, 15, 'ZEG');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `tournament`
--

CREATE TABLE IF NOT EXISTS `tournament` (
  `id` int(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `host_id` int(50) NOT NULL,
  `date` datetime DEFAULT NULL,
  `closed` bit(1) NOT NULL DEFAULT b'0',
  `version` int(11) DEFAULT NULL,
  `league_id` int(50) NOT NULL,
  `elo` bit(1) NOT NULL DEFAULT b'0'
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `tournament`
--

INSERT INTO `tournament` (`id`, `name`, `host_id`, `date`, `closed`, `version`, `league_id`, `elo`) VALUES
(1, 'Test Cup', 1, '2014-10-10 00:00:00', b'0', 15, 1, b'0'),
(2, 'Second Cup', 1, '2014-10-17 00:00:00', b'0', 15, 1, b'0');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(50) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `last_login` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `user`
--

INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `password`, `last_login`) VALUES
(1, 'Robin', 'Verhulst', 'test@verhulst.be', 'test', '2014-10-20 17:00:00'),
(2, 'Frederik', 'Bouillon', 'test@verhulst.be', 'test', '2014-10-20 17:00:00'),
(3, 'Nielsen', 'Stassyns', 'test@verhulst.be', 'test', '2014-10-20 17:00:00'),
(4, 'Yinan', 'Ma', 'test@verhulst.be', 'test', '2014-10-20 17:00:00');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `user_league`
--

CREATE TABLE IF NOT EXISTS `user_league` (
  `user_id` int(50) NOT NULL,
  `league_id` int(50) NOT NULL,
  `role_id` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `user_league`
--

INSERT INTO `user_league` (`user_id`, `league_id`, `role_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(3, 1, 3);

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `league`
--
ALTER TABLE `league`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `match`
--
ALTER TABLE `match`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `tournament`
--
ALTER TABLE `tournament`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT voor een tabel `league`
--
ALTER TABLE `league`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT voor een tabel `match`
--
ALTER TABLE `match`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT voor een tabel `role`
--
ALTER TABLE `role`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT voor een tabel `team`
--
ALTER TABLE `team`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT voor een tabel `tournament`
--
ALTER TABLE `tournament`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT voor een tabel `user`
--
ALTER TABLE `user`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
