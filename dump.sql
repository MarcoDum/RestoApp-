-- MySQL dump 10.13  Distrib 5.7.23, for Linux (x86_64)
--
-- Host: localhost    Database: my_db
-- ------------------------------------------------------
-- Server version	5.7.23-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `restaurants`
--

DROP TABLE IF EXISTS `restaurants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `restaurants` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(90) DEFAULT NULL,
  `address1` varchar(90) DEFAULT NULL,
  `address2` varchar(90) DEFAULT NULL,
  `area` varchar(90) DEFAULT NULL,
  `city` varchar(90) DEFAULT NULL,
  `mainCategory` varchar(90) DEFAULT NULL,
  `secondaryCategory` varchar(90) DEFAULT NULL,
  `editorial_rating` tinyint(4) DEFAULT NULL,
  `description` varchar(90) DEFAULT NULL,
  `annotation` text,
  `owner_annotation` text,
  `to_website` varchar(90) DEFAULT NULL,
  `image_url` varchar(90) DEFAULT NULL,
  `latitude` float DEFAULT NULL,
  `longitude` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `address1` (`address1`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurants`
--

LOCK TABLES `restaurants` WRITE;
/*!40000 ALTER TABLE `restaurants` DISABLE KEYS */;
/*!40000 ALTER TABLE `restaurants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(90) DEFAULT NULL,
  `password` varchar(90) DEFAULT NULL,
  `name` varchar(90) DEFAULT NULL,
  `lastname` varchar(90) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,NULL,NULL,NULL,NULL),(2,NULL,NULL,NULL,NULL),(3,NULL,NULL,NULL,NULL),(4,NULL,NULL,NULL,NULL),(5,NULL,NULL,NULL,NULL),(6,NULL,NULL,NULL,NULL),(7,NULL,NULL,NULL,NULL),(8,NULL,NULL,NULL,NULL),(9,NULL,NULL,NULL,NULL),(10,NULL,NULL,NULL,NULL),(11,NULL,NULL,NULL,NULL),(12,NULL,NULL,NULL,NULL),(13,NULL,NULL,NULL,NULL),(14,NULL,NULL,NULL,NULL),(15,NULL,NULL,NULL,NULL),(16,NULL,NULL,NULL,NULL),(17,NULL,NULL,NULL,NULL),(18,NULL,NULL,NULL,NULL),(19,NULL,NULL,NULL,NULL),(20,NULL,NULL,NULL,NULL),(21,NULL,NULL,NULL,NULL),(22,NULL,NULL,NULL,NULL),(23,NULL,NULL,NULL,NULL),(24,NULL,NULL,NULL,NULL),(25,NULL,NULL,NULL,NULL),(26,NULL,NULL,NULL,NULL),(27,NULL,NULL,NULL,NULL),(28,NULL,NULL,NULL,NULL),(29,NULL,NULL,NULL,NULL),(30,NULL,NULL,NULL,NULL),(31,NULL,NULL,NULL,NULL),(32,NULL,NULL,NULL,NULL),(33,NULL,NULL,NULL,NULL),(34,NULL,NULL,NULL,NULL),(35,NULL,NULL,NULL,NULL),(36,NULL,NULL,NULL,NULL),(37,NULL,NULL,NULL,NULL),(38,NULL,NULL,NULL,NULL),(39,NULL,NULL,NULL,NULL),(40,NULL,NULL,NULL,NULL),(41,NULL,NULL,NULL,NULL),(42,NULL,NULL,NULL,NULL),(43,NULL,NULL,NULL,NULL),(44,'nji@gfg.gh','azertyuiop','bob','obo'),(46,'qrz@po.gh','azertyuiop','lala','xkxk'),(47,'dsf@ky.ds','mmmmmmmmmmmmmm','mmmm','mmmmm'),(48,'dsdss@ky.ds','mmmmmmmmmmmmmm','mmmm','mmmmm'),(49,'sq@jklp.oj','yteydydydy','xxxxxxxxxx','dddddddddddd'),(50,'wij@kj.rs','qqqqqqqqqq','dfffffffff','aaaaaaaa'),(51,'lllll@ll.ll','lllllllllll','llllllllll','llllllllll'),(52,NULL,NULL,NULL,NULL),(54,NULL,NULL,NULL,NULL),(55,NULL,NULL,NULL,NULL),(56,NULL,NULL,NULL,NULL),(57,NULL,NULL,NULL,NULL),(58,'eeeeereeeeeeeee@gfg.gh','azertyuiop','bob','obo'),(59,'oopopopop@gfg.gh','azertyuiop','bob','obo'),(62,'aaa@gfg.gh','azertyuiop','bob','obo'),(64,'vvvvvvvvvv@gfg.gh','azertyuiop','bob','obo');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-09-20 10:38:53
