-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Mar 30 Avril 2019 à 15:59
-- Version du serveur :  5.7.25-0ubuntu0.18.04.2
-- Version de PHP :  7.2.17-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `FreelanceVision`
--

-- --------------------------------------------------------

--
-- Structure de la table `CRA`
--

CREATE TABLE `CRA` (
  `userID` int(200) NOT NULL,
  `Date` varchar(200) NOT NULL,
  `tableCra` varchar(60000) NOT NULL,
  `somme` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `CRA`
--

INSERT INTO `CRA` (`userID`, `Date`, `tableCra`, `somme`) VALUES
(1, 'april 2019', 'ffsf', 0),
(1, 'April2019', '[{\"dayName\":\"Monday\",\"dayNumber\":\"01\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Tuesday\",\"dayNumber\":\"02\",\"comment\":\"\",\"rate\":\"0.5\"},{\"dayName\":\"Wednesday\",\"dayNumber\":\"03\",\"comment\":\"\",\"rate\":\"0.5\"},{\"dayName\":\"Thursday\",\"dayNumber\":\"04\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Friday\",\"dayNumber\":\"05\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Saturday\",\"dayNumber\":\"06\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Sunday\",\"dayNumber\":\"07\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Monday\",\"dayNumber\":\"08\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Tuesday\",\"dayNumber\":\"09\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Wednesday\",\"dayNumber\":\"10\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Thursday\",\"dayNumber\":\"11\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Friday\",\"dayNumber\":\"12\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Saturday\",\"dayNumber\":\"13\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Sunday\",\"dayNumber\":\"14\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Monday\",\"dayNumber\":\"15\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Tuesday\",\"dayNumber\":\"16\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Wednesday\",\"dayNumber\":\"17\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Thursday\",\"dayNumber\":\"18\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Friday\",\"dayNumber\":\"19\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Saturday\",\"dayNumber\":\"20\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Sunday\",\"dayNumber\":\"21\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Monday\",\"dayNumber\":\"22\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Tuesday\",\"dayNumber\":\"23\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Wednesday\",\"dayNumber\":\"24\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Thursday\",\"dayNumber\":\"25\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Friday\",\"dayNumber\":\"26\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Saturday\",\"dayNumber\":\"27\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Sunday\",\"dayNumber\":\"28\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Monday\",\"dayNumber\":\"29\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Tuesday\",\"dayNumber\":\"30\",\"comment\":\"\",\"rate\":\"\"}]', 1),
(1, 'June 2019', '[{\"dayName\":\"Saturday\",\"dayNumber\":\"01\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Sunday\",\"dayNumber\":\"02\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Monday\",\"dayNumber\":\"03\",\"comment\":\"\",\"rate\":\"0.5\"},{\"dayName\":\"Tuesday\",\"dayNumber\":\"04\",\"comment\":\"\",\"rate\":\"0.5\"},{\"dayName\":\"Wednesday\",\"dayNumber\":\"05\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Thursday\",\"dayNumber\":\"06\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Friday\",\"dayNumber\":\"07\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Saturday\",\"dayNumber\":\"08\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Sunday\",\"dayNumber\":\"09\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Monday\",\"dayNumber\":\"10\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Tuesday\",\"dayNumber\":\"11\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Wednesday\",\"dayNumber\":\"12\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Thursday\",\"dayNumber\":\"13\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Friday\",\"dayNumber\":\"14\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Saturday\",\"dayNumber\":\"15\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Sunday\",\"dayNumber\":\"16\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Monday\",\"dayNumber\":\"17\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Tuesday\",\"dayNumber\":\"18\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Wednesday\",\"dayNumber\":\"19\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Thursday\",\"dayNumber\":\"20\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Friday\",\"dayNumber\":\"21\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Saturday\",\"dayNumber\":\"22\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Sunday\",\"dayNumber\":\"23\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Monday\",\"dayNumber\":\"24\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Tuesday\",\"dayNumber\":\"25\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Wednesday\",\"dayNumber\":\"26\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Thursday\",\"dayNumber\":\"27\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Friday\",\"dayNumber\":\"28\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Saturday\",\"dayNumber\":\"29\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Sunday\",\"dayNumber\":\"30\",\"comment\":\"\",\"rate\":\"\"}]', 1),
(1, 'June 2019', '[{\"dayName\":\"Saturday\",\"dayNumber\":\"01\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Sunday\",\"dayNumber\":\"02\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Monday\",\"dayNumber\":\"03\",\"comment\":\"\",\"rate\":\"0.5\"},{\"dayName\":\"Tuesday\",\"dayNumber\":\"04\",\"comment\":\"\",\"rate\":\"0.5\"},{\"dayName\":\"Wednesday\",\"dayNumber\":\"05\",\"comment\":\"\",\"rate\":\"0.5\"},{\"dayName\":\"Thursday\",\"dayNumber\":\"06\",\"comment\":\"\",\"rate\":\"0.5\"},{\"dayName\":\"Friday\",\"dayNumber\":\"07\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Saturday\",\"dayNumber\":\"08\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Sunday\",\"dayNumber\":\"09\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Monday\",\"dayNumber\":\"10\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Tuesday\",\"dayNumber\":\"11\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Wednesday\",\"dayNumber\":\"12\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Thursday\",\"dayNumber\":\"13\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Friday\",\"dayNumber\":\"14\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Saturday\",\"dayNumber\":\"15\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Sunday\",\"dayNumber\":\"16\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Monday\",\"dayNumber\":\"17\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Tuesday\",\"dayNumber\":\"18\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Wednesday\",\"dayNumber\":\"19\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Thursday\",\"dayNumber\":\"20\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Friday\",\"dayNumber\":\"21\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Saturday\",\"dayNumber\":\"22\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Sunday\",\"dayNumber\":\"23\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Monday\",\"dayNumber\":\"24\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Tuesday\",\"dayNumber\":\"25\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Wednesday\",\"dayNumber\":\"26\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Thursday\",\"dayNumber\":\"27\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Friday\",\"dayNumber\":\"28\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Saturday\",\"dayNumber\":\"29\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Sunday\",\"dayNumber\":\"30\",\"comment\":\"\",\"rate\":\"\"}]', 2),
(1, 'June 2019', '[{\"dayName\":\"Saturday\",\"dayNumber\":\"01\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Sunday\",\"dayNumber\":\"02\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Monday\",\"dayNumber\":\"03\",\"comment\":\"\",\"rate\":\"0.5\"},{\"dayName\":\"Tuesday\",\"dayNumber\":\"04\",\"comment\":\"\",\"rate\":\"0.5\"},{\"dayName\":\"Wednesday\",\"dayNumber\":\"05\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Thursday\",\"dayNumber\":\"06\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Friday\",\"dayNumber\":\"07\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Saturday\",\"dayNumber\":\"08\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Sunday\",\"dayNumber\":\"09\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Monday\",\"dayNumber\":\"10\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Tuesday\",\"dayNumber\":\"11\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Wednesday\",\"dayNumber\":\"12\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Thursday\",\"dayNumber\":\"13\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Friday\",\"dayNumber\":\"14\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Saturday\",\"dayNumber\":\"15\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Sunday\",\"dayNumber\":\"16\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Monday\",\"dayNumber\":\"17\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Tuesday\",\"dayNumber\":\"18\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Wednesday\",\"dayNumber\":\"19\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Thursday\",\"dayNumber\":\"20\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Friday\",\"dayNumber\":\"21\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Saturday\",\"dayNumber\":\"22\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Sunday\",\"dayNumber\":\"23\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Monday\",\"dayNumber\":\"24\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Tuesday\",\"dayNumber\":\"25\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Wednesday\",\"dayNumber\":\"26\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Thursday\",\"dayNumber\":\"27\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Friday\",\"dayNumber\":\"28\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Saturday\",\"dayNumber\":\"29\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Sunday\",\"dayNumber\":\"30\",\"comment\":\"\",\"rate\":\"\"}]', 1),
(1, 'June 2019', '[{\"dayName\":\"Saturday\",\"dayNumber\":\"01\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Sunday\",\"dayNumber\":\"02\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Monday\",\"dayNumber\":\"03\",\"comment\":\"\",\"rate\":\"0.5\"},{\"dayName\":\"Tuesday\",\"dayNumber\":\"04\",\"comment\":\"\",\"rate\":\"0.5\"},{\"dayName\":\"Wednesday\",\"dayNumber\":\"05\",\"comment\":\"\",\"rate\":\"0.5\"},{\"dayName\":\"Thursday\",\"dayNumber\":\"06\",\"comment\":\"\",\"rate\":\"0.5\"},{\"dayName\":\"Friday\",\"dayNumber\":\"07\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Saturday\",\"dayNumber\":\"08\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Sunday\",\"dayNumber\":\"09\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Monday\",\"dayNumber\":\"10\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Tuesday\",\"dayNumber\":\"11\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Wednesday\",\"dayNumber\":\"12\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Thursday\",\"dayNumber\":\"13\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Friday\",\"dayNumber\":\"14\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Saturday\",\"dayNumber\":\"15\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Sunday\",\"dayNumber\":\"16\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Monday\",\"dayNumber\":\"17\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Tuesday\",\"dayNumber\":\"18\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Wednesday\",\"dayNumber\":\"19\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Thursday\",\"dayNumber\":\"20\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Friday\",\"dayNumber\":\"21\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Saturday\",\"dayNumber\":\"22\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Sunday\",\"dayNumber\":\"23\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Monday\",\"dayNumber\":\"24\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Tuesday\",\"dayNumber\":\"25\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Wednesday\",\"dayNumber\":\"26\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Thursday\",\"dayNumber\":\"27\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Friday\",\"dayNumber\":\"28\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Saturday\",\"dayNumber\":\"29\",\"comment\":\"\",\"rate\":\"\"},{\"dayName\":\"Sunday\",\"dayNumber\":\"30\",\"comment\":\"\",\"rate\":\"\"}]', 2);

-- --------------------------------------------------------

--
-- Structure de la table `justiFiles`
--

CREATE TABLE `justiFiles` (
  `userID` int(100) DEFAULT NULL,
  `Date` varchar(100) DEFAULT NULL,
  `Img` varchar(60000) DEFAULT NULL,
  `typeFile` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `justiFiles`
--

INSERT INTO `justiFiles` (`userID`, `Date`, `Img`, `typeFile`) VALUES
(2, 'QSFSF', 'qsdQds', 'profile'),
(NULL, 'April 2019', 'noteDeFrais', NULL),
(NULL, 'April 2019', NULL, 'noteDeFrais'),
(NULL, 'April 2019', '1556630323407-Capture d’écran de 2019-04-08 10-38-24.png', 'noteDeFrais'),
(1, 'April 2019', '1556630472820-Capture d’écran de 2019-04-08 10-38-24.png', 'noteDeFrais'),
(1, 'April 2019', '1556632427219-Page2.jpg', 'noteDeFrais'),
(1, 'April 2019', '1556632654768-Page2.jpg', 'profile');

-- --------------------------------------------------------

--
-- Structure de la table `noteDeFrais`
--

CREATE TABLE `noteDeFrais` (
  `userID` int(10) NOT NULL,
  `tableIndex` int(11) NOT NULL,
  `somme` int(10) DEFAULT NULL,
  `tableFrais` varchar(60000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `noteDeFrais`
--

INSERT INTO `noteDeFrais` (`userID`, `tableIndex`, `somme`, `tableFrais`) VALUES
(1, 1, NULL, '[{\"Client\":\"\",\"Description\":\"\",\"KM\":\"\",\"Deplacement\":\"\",\"Forfait\":\"\",\"Hotel\":\"\",\"Repas\":\"\",\"Divers\":\"\",\"Total\":0},{\"Client\":\"\",\"Description\":\"\",\"KM\":\"\",\"Deplacement\":\"\",\"Forfait\":\"\",\"Hotel\":\"\",\"Repas\":\"\",\"Divers\":\"\",\"Total\":0}]'),
(1, 2, NULL, '[{\"Client\":\"\",\"Description\":\"\",\"KM\":\"\",\"Deplacement\":\"\",\"Forfait\":\"\",\"Hotel\":\"123\",\"Repas\":\"12345\",\"Divers\":\"\",\"Total\":12468},{\"Client\":\"\",\"Description\":\"\",\"KM\":\"\",\"Deplacement\":\"\",\"Forfait\":\"\",\"Hotel\":\"1234\",\"Repas\":\"\",\"Divers\":\"\",\"Total\":1234}]'),
(1, 3, 13702, '[{\"Client\":\"\",\"Description\":\"\",\"KM\":\"\",\"Deplacement\":\"\",\"Forfait\":\"\",\"Hotel\":\"123\",\"Repas\":\"12345\",\"Divers\":\"\",\"Total\":12468},{\"Client\":\"\",\"Description\":\"\",\"KM\":\"\",\"Deplacement\":\"\",\"Forfait\":\"\",\"Hotel\":\"1234\",\"Repas\":\"\",\"Divers\":\"\",\"Total\":1234}]'),
(1, 4, 13702, '[{\"Client\":\"\",\"Description\":\"\",\"KM\":\"\",\"Deplacement\":\"\",\"Forfait\":\"\",\"Hotel\":\"123\",\"Repas\":\"12345\",\"Divers\":\"\",\"Total\":12468},{\"Client\":\"\",\"Description\":\"\",\"KM\":\"\",\"Deplacement\":\"\",\"Forfait\":\"\",\"Hotel\":\"1234\",\"Repas\":\"\",\"Divers\":\"\",\"Total\":1234},{\"Client\":\"\",\"Description\":\"\",\"KM\":\"\",\"Deplacement\":\"\",\"Forfait\":\"\",\"Hotel\":\"\",\"Repas\":\"\",\"Divers\":\"\",\"Total\":0}]'),
(1, 5, 13702, '[{\"Client\":\"\",\"Description\":\"\",\"KM\":\"\",\"Deplacement\":\"\",\"Forfait\":\"\",\"Hotel\":\"123\",\"Repas\":\"12345\",\"Divers\":\"\",\"Total\":12468},{\"Client\":\"\",\"Description\":\"\",\"KM\":\"\",\"Deplacement\":\"\",\"Forfait\":\"\",\"Hotel\":\"1234\",\"Repas\":\"\",\"Divers\":\"\",\"Total\":1234},{\"Client\":\"\",\"Description\":\"\",\"KM\":\"\",\"Deplacement\":\"\",\"Forfait\":\"\",\"Hotel\":\"\",\"Repas\":\"\",\"Divers\":\"\",\"Total\":0}]'),
(1, 6, 13702, '[{\"Client\":\"\",\"Description\":\"\",\"KM\":\"\",\"Deplacement\":\"\",\"Forfait\":\"\",\"Hotel\":\"123\",\"Repas\":\"12345\",\"Divers\":\"\",\"Total\":12468},{\"Client\":\"\",\"Description\":\"\",\"KM\":\"\",\"Deplacement\":\"\",\"Forfait\":\"\",\"Hotel\":\"1234\",\"Repas\":\"\",\"Divers\":\"\",\"Total\":1234}]'),
(1, 7, 13702, '[{\"Client\":\"\",\"Description\":\"\",\"KM\":\"\",\"Deplacement\":\"\",\"Forfait\":\"\",\"Hotel\":\"123\",\"Repas\":\"12345\",\"Divers\":\"\",\"Total\":12468},{\"Client\":\"\",\"Description\":\"\",\"KM\":\"\",\"Deplacement\":\"\",\"Forfait\":\"\",\"Hotel\":\"1234\",\"Repas\":\"\",\"Divers\":\"\",\"Total\":1234},{\"Client\":\"\",\"Description\":\"\",\"KM\":\"\",\"Deplacement\":\"\",\"Forfait\":\"\",\"Hotel\":\"\",\"Repas\":\"\",\"Divers\":\"\",\"Total\":0}]'),
(1, 8, 0, '[]'),
(1, 9, 0, '[]'),
(1, 10, 0, '[{\"Client\":\"\",\"Description\":\"\",\"KM\":\"\",\"Deplacement\":\"\",\"Forfait\":\"\",\"Hotel\":\"\",\"Repas\":\"\",\"Divers\":\"\",\"Total\":0}]'),
(1, 11, 0, '[{\"Client\":\"\",\"Description\":\"\",\"KM\":\"\",\"Deplacement\":\"\",\"Forfait\":\"\",\"Hotel\":\"\",\"Repas\":\"\",\"Divers\":\"\",\"Total\":0}]'),
(1, 12, 0, '[{\"Client\":\"\",\"Description\":\"\",\"KM\":\"\",\"Deplacement\":\"\",\"Forfait\":\"\",\"Hotel\":\"\",\"Repas\":\"\",\"Divers\":\"\",\"Total\":0,\"value\":\"07-05-2019\"},{\"Client\":\"\",\"Description\":\"\",\"KM\":\"\",\"Deplacement\":\"\",\"Forfait\":\"\",\"Hotel\":\"\",\"Repas\":\"\",\"Divers\":\"\",\"Total\":0}]'),
(1, 13, 0, '[{\"Client\":\"\",\"Description\":\"\",\"KM\":\"\",\"Deplacement\":\"\",\"Forfait\":\"\",\"Hotel\":\"\",\"Repas\":\"\",\"Divers\":\"\",\"Total\":0,\"value\":\"07-05-2019\"},{\"Client\":\"\",\"Description\":\"\",\"KM\":\"\",\"Deplacement\":\"\",\"Forfait\":\"\",\"Hotel\":\"\",\"Repas\":\"\",\"Divers\":\"\",\"Total\":0}]');

-- --------------------------------------------------------

--
-- Structure de la table `salariés`
--

CREATE TABLE `salariés` (
  `ID` int(10) NOT NULL,
  `Identifiant` varchar(50) NOT NULL,
  `Pass` varchar(50) DEFAULT NULL,
  `Nom` varchar(50) DEFAULT NULL,
  `Prenom` varchar(50) DEFAULT NULL,
  `Telephone` varchar(50) DEFAULT NULL,
  `eMail` varchar(50) DEFAULT NULL,
  `userType` varchar(10) DEFAULT NULL,
  `carteGrise` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `salariés`
--

INSERT INTO `salariés` (`ID`, `Identifiant`, `Pass`, `Nom`, `Prenom`, `Telephone`, `eMail`, `userType`, `carteGrise`) VALUES
(1, 'Digiox', '1234', 'Vernus', 'Jean', '0635151220', 'jVernus@wild.com', 'Employee', NULL),
(2, 'DobbyS', 'password', 'Deriot', 'Cindy', NULL, 'cindyDeriot@wild.com', 'Freelance', NULL),
(3, 'ClaireA', '1234', 'Artigues', 'Claire', NULL, ' claire.artigues@freelance-vision.com', 'Admin', NULL);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `CRA`
--
ALTER TABLE `CRA`
  ADD KEY `userID` (`userID`);

--
-- Index pour la table `justiFiles`
--
ALTER TABLE `justiFiles`
  ADD KEY `fk_justif` (`userID`);

--
-- Index pour la table `noteDeFrais`
--
ALTER TABLE `noteDeFrais`
  ADD PRIMARY KEY (`tableIndex`),
  ADD KEY `userID` (`userID`);

--
-- Index pour la table `salariés`
--
ALTER TABLE `salariés`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `Identifiant` (`Identifiant`),
  ADD UNIQUE KEY `E-Mail` (`eMail`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `noteDeFrais`
--
ALTER TABLE `noteDeFrais`
  MODIFY `tableIndex` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT pour la table `salariés`
--
ALTER TABLE `salariés`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `CRA`
--
ALTER TABLE `CRA`
  ADD CONSTRAINT `CRA_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `salariés` (`ID`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Contraintes pour la table `justiFiles`
--
ALTER TABLE `justiFiles`
  ADD CONSTRAINT `fk_justif` FOREIGN KEY (`userID`) REFERENCES `salariés` (`ID`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Contraintes pour la table `noteDeFrais`
--
ALTER TABLE `noteDeFrais`
  ADD CONSTRAINT `noteDeFrais_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `salariés` (`ID`) ON DELETE CASCADE ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
