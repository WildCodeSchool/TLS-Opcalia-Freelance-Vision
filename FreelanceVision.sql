-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 23, 2019 at 09:42 AM
-- Server version: 5.7.25-0ubuntu0.18.04.2
-- PHP Version: 7.2.15-0ubuntu0.18.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `FreelanceVision`
--

-- --------------------------------------------------------

--
-- Table structure for table `salariés`
--

CREATE TABLE `salariés` (
  `ID` int(50) NOT NULL,
  `Identifiant` varchar(50) NOT NULL,
  `Pass` varchar(50) DEFAULT NULL,
  `Nom` varchar(50) DEFAULT NULL,
  `Prenom` varchar(50) DEFAULT NULL,
  `eMail` varchar(50) NOT NULL,
  `userType` varchar(50) NOT NULL,
  `carteGrise` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `salariés`
--

INSERT INTO `salariés` (`ID`, `Identifiant`, `Pass`, `Nom`, `Prenom`, `eMail`, `userType`, `carteGrise`) VALUES
(3, 'Admin', '1234', 'Bourlon', 'Lyann', 'bourlon.lyann84@gmail.com', 'Admin', NULL),
(16, 'Tony', '1234', 'Stark', 'Tony', 'tonystark@gmail.com', 'Freelance', NULL),
(19, 'Marge', '1234', 'marge', 'simpson', 'marge@gmail.com', 'Employee', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `salariés`
--
ALTER TABLE `salariés`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `Identifiant` (`Identifiant`),
  ADD UNIQUE KEY `eMail` (`eMail`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `salariés`
--
ALTER TABLE `salariés`
  MODIFY `ID` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
