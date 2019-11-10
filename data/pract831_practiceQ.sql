-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 10, 2019 at 10:38 AM
-- Server version: 5.6.40-84.0-log
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pract831_practiceQ`
--

-- --------------------------------------------------------

--
-- Table structure for table `qSet`
--

CREATE TABLE `qSet` (
  `id` int(11) NOT NULL,
  `title` tinytext NOT NULL,
  `view` int(11) NOT NULL,
  `createdBy` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `qSet`
--

INSERT INTO `qSet` (`id`, `title`, `view`, `createdBy`) VALUES
(1, 'YC Interview', 167, 0),
(2, 'Generic Interview questions', 192, 0),
(81, 'Exams Christmast', 30, 41),
(82, 'Sia Questions', 13, 42),
(90, '', 0, 48),
(91, '', 0, 0),
(92, 'Google Interview', 25, 0),
(93, 'Grade 4 Math Word Problems', 12, 0),
(94, '', 0, 0),
(95, '', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `qId` int(11) NOT NULL,
  `qSetId` int(11) NOT NULL,
  `question` text NOT NULL,
  `time` int(11) NOT NULL DEFAULT '20'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`qId`, `qSetId`, `question`, `time`) VALUES
(1, 1, 'So what are you working on?', 15),
(2, 1, 'Have you raised funding?', 15),
(3, 1, 'What makes new users try you?', 15),
(4, 1, 'What competition do you fear most?\n\n', 15),
(5, 1, 'Whatâ€™s the worst thing that has happened?\n\n', 15),
(6, 1, 'Will you reincorporate as a US company?', 15),
(7, 1, 'Whatâ€™s an impressive thing you have done?', 15),
(8, 1, 'Where is the rocket science here?', 15),
(9, 1, 'Why did you pick this idea to work on?', 15),
(10, 1, 'Why do the reluctant users hold back?', 15),
(11, 1, 'Who would you hire or how would you add to your team?', 15),
(12, 1, 'What problems/hurdles are you anticipating?', 15),
(13, 2, 'Can you tell me a little about yourself?', 30),
(47, 2, 'How did you hear about the position?', 30),
(48, 81, 'Telle me sequence of pi', 15),
(49, 82, 'Poisson ou Poulet?', 15),
(53, 1, 'Who is the boss?', 15),
(54, 1, 'What is the next step with the product evolution?', 15),
(55, 1, 'What obstacles will you face and how will you overcome them?', 15),
(56, 1, 'Who needs what youâ€™re making?', 15),
(57, 1, 'How does your product work in more detail?', 15),
(58, 1, 'What are you going to do next?', 15),
(59, 1, 'What do you understand that others donâ€™t?', 15),
(60, 1, 'Where do new users come from?', 15),
(61, 1, 'How big an opportunity is there?', 15),
(62, 1, 'Six months from now, whatâ€™s going to be your biggest problem?', 15),
(63, 1, 'Whatâ€™s the funniest thing that has happened to you?', 15),
(64, 1, 'Tell us something surprising you have done?\n\n', 15),
(65, 1, 'Who are your competitors?\n\n', 15),
(66, 1, 'Whatâ€™s new about what you make?\n\n', 15),
(67, 1, 'How many users do you have?\n\n', 15),
(68, 1, 'Why isnâ€™t someone already doing this?\n\n', 15),
(69, 1, 'What are the top things users want?\n\n', 15),
(70, 1, 'What is your burn rate?\n\n', 15),
(71, 1, 'How do you know customers need what youâ€™re making?\n\n', 15),
(72, 1, 'What domain expertise do you have?\n\n', 15),
(73, 1, 'What, exactly, makes you different from existing options?\n\n', 15),
(74, 1, 'Whatâ€™s the conversion rate?\n\n', 15),
(75, 1, 'What systems have you hacked?\n\n', 15),
(76, 1, 'Who would use your product?\n\n', 15),
(77, 1, 'How will customers and/or users find out about you?\n\n', 15),
(78, 1, 'Why did your team get together?\n\n', 15),
(79, 1, 'In what ways are you resourceful?\n\n', 15),
(80, 1, 'What is your distribution strategy?\n\n', 15),
(81, 1, 'What has surprised you about user behaviour?\n\n', 15),
(82, 1, 'What part of your project are you going to build first?\n\n', 15),
(83, 1, 'What resistance will they have to trying you and how will you overcome it?\n\n', 15),
(84, 1, 'How are you understanding customer needs?\n\n', 15),
(85, 1, 'Whatâ€™s the biggest mistake you have made?\n\n', 15),
(86, 1, 'Who might become competitors?\n\n', 15),
(87, 1, 'What do you understand about your users?\n\n', 15),
(88, 1, 'What is your user growth rate?\n\n', 15),
(89, 1, 'What are the key things about your field that outsiders donâ€™t understand?', 15),
(90, 1, 'Who is going to be your first paying customer?\n\n', 15),
(91, 1, 'If your startup succeeds, what additional areas might you be able to expand into?\n\n', 15),
(92, 1, 'Who would be your next hire?\n\n', 15),
(93, 1, 'How do you know people want this?\n\n', 15),
(94, 1, 'Would you relocate to Silicon Valley?\n\n', 15),
(95, 1, 'What do you know about this space/product others donâ€™t know?\n\n', 15),
(96, 1, 'How much money could you make per year?\n\n', 15),
(97, 1, 'How long can you go before funding?\n\n', 15),
(98, 1, 'How will you make money?\n\n', 15),
(99, 1, 'Will your team stick at this?\n\n', 15),
(100, 1, 'How much does customer acquisition cost?\n\n', 15),
(101, 1, 'How did your team meet?\n\n', 15),
(102, 1, 'Who in your team does what?\n\n', 15),
(103, 1, 'How are you meeting customers?\n\n', 15),
(104, 1, 'How many users are paying?\n\n', 15),
(105, 1, 'How is your product different?\n\n', 15),
(106, 1, 'Are you open to changing your idea?\n\n', 15),
(107, 1, 'How do we know your team will stick together?\n\n', 15),
(108, 1, 'What is your growth like?\n\n', 15),
(109, 2, 'What do you know about the company?', 60),
(110, 2, 'Why do you want this job?', 15),
(111, 2, 'Why should we hire you?', 15),
(112, 2, 'What are your greatest professional strengths?', 15),
(113, 2, 'What do you consider to be your weaknesses?', 15),
(114, 2, 'What is your greatest professional achievement?', 15),
(115, 2, 'Where do you see yourself in five years?', 15),
(116, 2, 'What other companies are you interviewing with?', 15),
(117, 2, 'Why are you leaving your current job?\n\n', 15),
(118, 2, 'Why were you fired?', 15),
(119, 2, 'What are you looking for in a new position?', 15),
(120, 2, 'What type of work environment do you prefer?', 15),
(121, 2, 'How would your boss and co-workers describe you?', 15),
(122, 2, 'Why was there a gap in your employment?', 60),
(123, 2, 'Can you explain why you changed career paths?\n\n', 15),
(124, 2, 'How do you deal with pressure or stressful situations?', 60),
(125, 2, 'What would your first 30, 60, or 90 days look like in this role?', 60),
(126, 2, 'What are your salary requirements?', 15),
(127, 2, 'What do you like to do outside of work?', 15),
(128, 2, ' If you were an animal, which one would you want to be?', 15),
(129, 2, 'How many tennis balls can you fit into a limousine?', 15),
(130, 2, 'Are you planning on having children?', 15),
(131, 2, 'What do you think we could do better or differently?', 15),
(132, 2, 'Do you have any questions for us?', 15),
(133, 92, 'How many golf balls can fit in a school bus?', 15),
(134, 92, 'How much should you charge to wash all the windows in Seattle?\n', 15),
(135, 92, 'In a country in which people only want boys  every family continues to have children until they have a boy. If they have a girl, they have another child. If they have a boy, they stop. What is the proportion of boys to girls in the country?', 15),
(136, 92, 'How many piano tuners are there in the entire world?\n', 30),
(137, 92, 'Why are manhole covers round?', 15),
(138, 92, 'Design an evacuation plan for San Francisco', 45),
(139, 92, 'How many times a day does a clockâ€™s hands overlap?', 30),
(140, 92, 'Explain the significance of \"dead beef\"', 15),
(141, 92, 'A man pushed his car to a hotel and lost his fortune. What happened?\n', 15),
(142, 92, 'You need to check that your friend Bob has your correct phone number but you cannot ask him directly. You must write the question on a card which and give it to Eve who will take the card to Bob and return the answer to you. What must you write on the card, besides the question, to ensure Bob can encode the message so that Eve cannot read your phone number?\n', 15),
(143, 92, 'You have eight balls all of the same size 7 of them weigh the same, and one of them weighs slightly more. How can you find the ball that is heavier by using a balance and only two weighings?', 45),
(144, 92, 'You are given 2 eggs you have access to a 100-story building. Eggs can be very hard or very fragile means it may break if dropped from the first floor or may not even break if dropped from 100th floor. Both eggs are identical. You need to figure out the highest floor of a 100-story building an egg can be dropped without breaking. The question is how many drops you need to make. You are allowed to break 2 eggs in the process.', 45),
(145, 92, 'Explain a database in three sentences to your 8-year-old nephew.\n', 30),
(146, 92, 'You are shrunk to the height of a nickel and your mass is proportionally reduced so as to maintain your original density. You are then thrown into an empty glass blender. The blades will start moving in 60 seconds. What do you do?', 45),
(147, 93, 'John went to a garage sale to buy chairs. Each chair cost 25 dollars.\nHow much money did Marie spend for the 11 chairs she bought?', 45),
(148, 93, 'Lola can bike at a speed of 13 kilometers an hour. How far can she bike in\n32 hours?', 30),
(149, 93, 'Danny put his toys into boxes. He put 150 toys equally into five (5)\nboxes. How many toys did each box have?', 30),
(150, 93, 'Stella is 14 years old. His grandmother is 5 times as old as he is. How old is Stellaâ€™s grandmother?', 30),
(151, 93, 'Martin was walking in the garden and saw a flock of 4,162 birds flying. How\nmany total wings were in the flock?', 30),
(152, 93, 'Boris needs to read a 635 page book for school. He has already read\n147 pages. How many pages does he have left to read?', 30),
(153, 93, 'A young man is 18 cm taller than his sister. She is 173 cm tall.  The man is 59 cm taller than the horse.  How tall is the horse?', 30),
(154, 93, 'What is the smallest number you can make using all of these numbers? \n\n4  1  7  3  9', 30),
(155, 93, 'John played a total of 27 soccer games during the months of June, July and August.  He played 9 games in June and 10 in July. How many games did he played in August?', 60),
(156, 93, 'What must be added to 78 to make 100?', 45),
(157, 93, 'Find a set so that two of its numbers add up to 15.', 15),
(158, 93, 'How many legs do seven hares, six hens, and five kittens have?', 45);

-- --------------------------------------------------------

--
-- Table structure for table `token`
--

CREATE TABLE `token` (
  `userId` int(11) NOT NULL,
  `token` varchar(254) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `reset` tinyint(1) NOT NULL,
  `ext_token` varchar(254) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `token`
--

INSERT INTO `token` (`userId`, `token`, `timestamp`, `reset`, `ext_token`) VALUES
(16, '020205c40726fce93d0409630f6a6f14', '2016-11-13 21:21:30', 0, ''),
(13, '038587a72af8aa75273f634a0bf117f4', '2016-11-13 21:08:38', 0, ''),
(29, '0453b2c957998385836b10b4f87635c4', '2016-11-14 17:58:44', 0, ''),
(8, '0484952d5d3fea605581798e8add943a', '2016-11-12 13:08:58', 0, ''),
(35, '0cf707366933a0f0dbaa269ca597f470', '2016-11-24 21:54:55', 0, ''),
(29, '0ef0f04d47810233c06753200862d9b4', '2016-11-14 18:00:04', 0, ''),
(12, '1a55a6c8e351ae932755aa4e8ce26861', '2016-11-13 21:03:22', 0, ''),
(11, '27b0931b2fa1073d7780d69bf389db82', '2016-11-12 22:59:35', 0, ''),
(3, '2c2b17d2cb3d4d3ab150a719d8ad474e', '2016-11-10 21:58:36', 0, ''),
(9, '2e852bbe6d00fbbe26bcca6c752f5281', '2016-11-12 13:11:54', 0, ''),
(23, '304fc4c99d90d345e8bcbec6751e221e', '2016-11-13 21:37:02', 0, ''),
(25, '3617fbb5cfcea720b0f542f71664b502', '2016-11-13 21:39:56', 0, ''),
(29, '3a13fa813de53ff76d9d7ae22515272c', '2016-11-14 18:11:37', 0, ''),
(44, '3f599fbbe516a69e4307d0260c013131', '2016-12-13 21:51:03', 0, 'EAAE6M0B0LQ4BAMuFuuRcQXL9xzTeZCibAPEvDyYvCZCinVzp9bxOR7eC0aabZBsmJV8LrZAzYxPqeGh56ZAAqoauRsyySTt87jKnl7jrIxZBxZAaYoX26JEl3aPdWJzxOsmBoIzyw7tKssYjKoA1LrDPB0bA5qpg8HpmD9rXZAnP9gZDZD'),
(18, '4093d89de12591cc2805f34e2fb02400', '2016-11-13 21:28:59', 0, ''),
(35, '432db1ab21f8c337ce872904baae9179', '2016-11-28 16:29:48', 0, ''),
(24, '4a8a2491c8d6580a2a10512b8529e788', '2016-11-13 21:37:39', 0, ''),
(43, '4ed731743ee77830e810003a8916cac5', '2016-12-13 18:05:52', 0, 'EAAE6M0B0LQ4BADATYSRTBYqKe1rfhoIUFrQTVACeIDQda636IQSD7ZCIqjTkkaciIYSmRrRsgmZCGZBY8pUo8jKAWTPZCZBmZCfXBO9gQSZCT6KZAn73a5Xh5Cqr8m6KfZAeeXKmgnv1yWao5l8P7SYpdH9dax0uNg5u29v1rjatLTwZDZD'),
(21, '5635d6fec9c1bd79d0b5d12596be5921', '2016-11-13 21:33:40', 0, ''),
(22, '5a09054ba17c9374e7fe5e6d758fcd4b', '2016-11-13 21:36:38', 0, ''),
(40, '5d30d74a98bae8d52f8937f0b620be51', '2016-11-28 17:17:01', 1, ''),
(48, '60f8e564e812698192186a32744506e5', '2017-03-22 16:40:29', 0, ''),
(48, '6ad0b75e9d3526154670ccdbe9f5a85c', '2019-06-18 01:38:14', 0, 'EAAE6M0B0LQ4BAP4dfiaTr4fgzkbEZCvr6cyc2u2d6XQ2c7y9ZA6XUiPT2TbXiAQMvggLcPqnzuWAYD4SOseGkyAYWqVRPgU3yQ9m0A0ULU9GSW9GiVWQ2aELXZBPCbExCPCDmm0YizMzDL3AWfkrzvM5WpGRHNioQWRhD3fAdJvn2OU7OmwCrOLvwbQQB8c3MtoNOpe4QZDZD'),
(4, '6c75858835c70c0891a259ce237b63a7', '2016-11-10 22:01:27', 0, ''),
(7, '6e1d957edf36ce381462cd15d6bd10a1', '2016-11-12 01:40:17', 0, ''),
(5, '725c860a2ce207cf4acb117615796c54', '2016-11-12 01:34:07', 0, ''),
(20, '77a9a26ee3b071b50ecdae634ea38c5a', '2016-11-13 21:31:52', 0, ''),
(15, '87761afca477522fd7ee66cfc5088dbe', '2016-11-13 21:20:55', 0, ''),
(41, '881f47c00cefb814e105b87bc9e532fd', '2016-12-09 17:54:58', 0, 'EAAE6M0B0LQ4BAJFLZAulAGZAlHX6AVl141OKugNm0jXwsrFWq0p1ILs8Kb2f9jxZAqvgvTrqN7DyFqFKxmtDEycNFUz5ZCahObK4GWRirR7ya0OUaZADez6ejBZCzIa9uSdEB80WZAj8h1tTQvrxJJZBRi1yympWigubbXTT18fxTQZDZD'),
(26, '8ae7463efc6e86a49949e24cace4c969', '2016-11-14 13:23:13', 0, ''),
(17, '9a9f63046a60df4121a265d8b999519d', '2016-11-13 21:24:04', 0, ''),
(29, '9ea678acc689e3b7e4cf830e21a6ce71', '2016-11-16 03:26:17', 0, ''),
(29, 'a066a66f0d704489475ea20200e4ee34', '2016-11-14 17:20:17', 0, ''),
(41, 'a8a4c0a17980bfacbdf0bfc0ca931148', '2016-12-09 17:55:41', 0, 'EAAE6M0B0LQ4BAMoiKs8Xj4Sb1e1DJB8tvDar3DDnjEeAPHklaTszOa597Ofq2f4KdoMaLjYnoNVVGVqvWfL8wtD1e7VIiUIsWzWwD4f0VVHioqmhWAGBaJyjaYb8lOzxoDfAkDosbWy5WDf8YaSdGwN3OHEVKVzF3hkExgZDZD'),
(30, 'ad292c900ff78388a547e890b68d698c', '2016-11-16 03:31:22', 0, ''),
(10, 'b1299dd34bc4feb38d4a0c3c55b47a7c', '2016-11-12 22:56:43', 0, ''),
(19, 'c1c7b0c26fb806478c9c19f29e41eb60', '2016-11-13 21:29:23', 0, ''),
(45, 'c564b459ddd6a3f97bd2a42f80173276', '2016-12-13 21:55:53', 0, 'EAAE6M0B0LQ4BAF9IC1k4r0SCAR6Y9jWftlV1ZBGv8GhZB3p3OJZBOqZAH1bDNJz348ojbdTvScDDavSJuVOoZA5hh0iHzzRYrZBmE75Iv2VTqfy9cbMXSecp0QQWQDBJZCaPYbthVf27iYZBKO05wluHUphBimEYEhXwdEOuKcORTwZDZD'),
(29, 'c5837842dd6e4c339d7f38d7ff60f143', '2016-11-15 03:59:05', 0, ''),
(14, 'c621f35e39985c5e8e56a33f967a8123', '2016-11-13 21:09:51', 0, ''),
(47, 'cf36a496422e24d22b27cb92ec447fac', '2016-12-13 22:10:00', 0, 'EAAE6M0B0LQ4BADt0LgxhyuQdYkpyhHyI3UknTkHuYmJ0WPLViz7j7cvn4PJB3I2TtQ9DJjZAvSJPDAObNuBp7lTQjZCCCyjIzzAFGYu1p2O5ZB6ZBdzAt6CZAPiT4RqKeD5qdVmJv6AZCzAdMa4Cgf5jja9bOOvztMowmtkKrRbQZDZD'),
(46, 'dedfdf517e893055fcb1a26f8f75e6d6', '2016-12-13 22:06:54', 0, 'EAAE6M0B0LQ4BAB5CbZCZConL4Du1vAkmBvZBPdEr0i46wzLgYVryyXquN8dlB64FpneLVxnH4kyyAkT4yqDuNL90p4bRIYHJIPOFRPvvT2ZAqmQbhtpD3CWKW6mFaXdiglqDs4003VF2HPFbNlhTzzDvEnWqVCo9yfizzpzfNQZDZD'),
(28, 'dfbdcd36d1188689d96c14ddff4524fd', '2016-11-14 13:55:25', 0, ''),
(41, 'EAAE6M0B0LQ4BAISPFePWe1YlUDPjQHgWD4cnGIsHk1HCkZAN6HmlZBm7nAE9WkzigmuxNuZAD9vxqlGEj7ElNoE3lMZCm9X584SLCiZAH0CAd6ziFNu3zHZB97Oxy1JRCgzlZCtIETqRNH7DSO49TkCEZAOK0PWLyCjaeDGFRshMbAZDZD', '2016-12-09 17:46:10', 0, ''),
(29, 'ed521d748e118a6eade36e7e07101e02', '2016-11-14 17:57:06', 0, ''),
(48, 'f39ba80f3cf86aba2be96e50c71379fc', '2017-03-24 17:27:09', 0, 'EAAE6M0B0LQ4BAA2ehBBJOEBTluRO13ZB6m4XykyvIVZBg2DkWGZBIrGszZB2aePRYM0X6NXFTSgavu88LKiAP4QPDZAsFvuLiBdM0DW4ZCNkGgzC7VZB2ceSMJlHjqXnX85QDyUStdQZArdZASCZCz5gougsgeZBREokdDLmoIohEg1Kkk4BW0gZCdZC2g5Obmn2a4HEZD'),
(6, 'f7b67b02878cc3265c4bb23e59925077', '2016-11-12 01:35:15', 0, ''),
(33, 'f8bbb68b8d38a3aaf330a8c68ddbfa61', '2016-11-22 21:36:41', 0, ''),
(31, 'fd2511d6d70882a021aff7db07c810d9', '2016-11-16 03:32:27', 0, ''),
(29, 'fd9c564b5106df2b8eb7b19c23031800', '2016-11-14 17:59:01', 0, ''),
(27, 'ff62215f428c90a54fa85ebd5711cc1a', '2016-11-14 13:53:42', 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` char(254) NOT NULL,
  `password` char(254) NOT NULL,
  `username` char(20) NOT NULL,
  `avatar` text NOT NULL,
  `random` tinyint(1) NOT NULL DEFAULT '1',
  `infinit` tinyint(1) NOT NULL DEFAULT '1',
  `color` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `username`, `avatar`, `random`, `infinit`, `color`) VALUES
(1, 'a@a.com', '$2y$10$eWqWjkefnApd/ggAuAI/ROEpv7UrjNN7cQYx0F9OZZWO5ZNubvPru', 'a', '', 1, 0, 1),
(2, 'b@b.com', '$2y$10$eMagvacudvdXD7LOSmv.jeWc0PdbDg15rq40MVUqh8mi/ZHk023fe', 'b', '', 1, 0, 1),
(3, 'c@c.com', '$2y$10$LNwZXZNGxXylSWzz8DYLje6yFIRCJbDVHPYhwxyOMHcDnXLynes9O', 'c', '', 1, 0, 1),
(4, 'd@d.com', '$2y$10$LTnoeuhQSXRt1oT2SL2RPOlCTXJJ6aWTTssjUuK8VurmzupZMqrKG', 'd', '', 1, 0, 1),
(5, 'z@z.com', '$2y$10$/90lxDBghjoE12RUP5jzj.a5x6utqvpkSGMHKn.xQ.vqilRSvlCZS', 'z', '', 1, 1, 1),
(6, 'g@g.com', '$2y$10$3YD9SpMN2cs81q/cy7FFL.pwbWJHYMp6HAM8VmzJXVhcvqHQEGCEC', 'g', '', 1, 1, 1),
(7, 'v@g.com', '$2y$10$iSEIxiV4RoR8XjaX.CXRkuWbFhcAdPkYWnYmfu/t9oBUo/QOZcTM6', 'v', '', 1, 1, 1),
(8, 'g@gr.com', '$2y$10$2sJxgIhkUu0ot/D2KmBNAuXUT3vAm6n1./DViYBA7js5I/65wWBN.', 'gr', '', 1, 1, 1),
(9, '4@4.com', '$2y$10$mSkY/0q61Zav7aLNWQKRwOnEdoM0a6VykXm7xZokorj1yG27I2IPu', '4', '', 1, 1, 1),
(10, '4@4u.com', '$2y$10$7ckXTNfAXkhCAO9mWC587unuuWFGRllOIg4dEaBooWFtbw4rSLGfu', '6', '', 1, 1, 1),
(11, '4@47u.com', '$2y$10$cEyaSHf6HtHCZiqT8/pTUeYxJROJkuVQIn/UGkgWuWMEfFZR1Y5tO', '68', '', 1, 1, 1),
(12, '4@4du.com', '$2y$10$eYVXDDvK6.0QVNRnKsILmuYbhhljLD5qCeomoOKQ4rk09XqogtL4W', '68d', '', 1, 1, 1),
(13, '4@4d9.com', '$2y$10$Jp.5tr/eSUh.fhwWGnrGn..N1kEjJuGzzhDXZIAdrcbavgJVePT/6', '68d8', '', 1, 1, 1),
(14, '4@40d9.com', '$2y$10$sYZgVL8nYwl/sQsm2f1tD.V.M09Dugr/SCvOrcdOWuFNVGb5zx9Rq', '68d08', 'service/uploads/2c860fb81c60bfef8e4800ae1bfb919f.jpg', 1, 1, 1),
(15, 'afdsa@aga.com', '$2y$10$qT9T0b5dXOQ3P9qjGWcja.o8NNW8hoxWQgUsRnTstSXlkbm7r0xl.', 'adaf', 'service/uploads/6191690908db9b84d6849aca2223b9b4.jpg', 1, 1, 1),
(16, 'afdsa@adga.com', '$2y$10$6EzdKme5HMnYNHP6tpe34.H.Ht7imsJyqDeRuedg4aP24Dt.QMQoG', 'adafd', 'service/uploads/f09dae42bc04c31128e71eaae6aaa554.jpg', 1, 1, 1),
(17, 'df@df.com', '$2y$10$kHGeFfnP7aKgygUWFA4u.OesVx74ddMexgdE9HJmfy09VmcFTWGDq', 'fd', 'service/uploads/2af59f78bddfa07c1fef2638de7908c6.jpg', 1, 1, 1),
(18, 'dd@dd.com', '$2y$10$FB0OHM4kdtComQxJxk9C1OC7LSpkGteVM.E7V1GjSx63hzTvl.QoS', 'dafsdd', '', 1, 1, 1),
(19, 'dd@ddy.com', '$2y$10$JY707Z6FA5UUzbHg3/KUAe9vEGKNrHTOzGg.3S0/ReDkq0af9xFfK', 'dafsddy', 'service/uploads/d8b49cd693bfb32bfbaebe22a31e7e47.jpg', 1, 1, 1),
(20, 'qq@aa.com', '$2y$10$XvoHC6lVb7Zy0ighZ4nRh.JvgP0fo5bWTYMG1YY/fEhDKcAF2SY7K', 'qqqq', 'service/uploads/92da4f846122ec28e4f2ef613db6de8e.jpg', 1, 1, 1),
(21, 'hh@hh.com', '$2y$10$o/Mla.WZJvjLsQ6SGczFfukNSkn./nIFUkdMtgwl53WMvViL.JJ4a', 'hhh', 'service/uploads/80bf6045eda2371260a076a9d978b61a.jpg', 1, 1, 1),
(22, 'hh@hth.com', '$2y$10$NAlgAV5g7ESLBpBsEZEGxO9sLRUbU8BSF3ndTm2Pp2QE2OCJIbAI6', 'hhht', 'service/uploads/80ec97605437b231ba986118e17a864c.jpg', 1, 1, 1),
(23, 'hh@h4th.com', '$2y$10$Z1GzVosJoIZO5GtSpVIcQemHKPlpJ5X4XQMLpCFOFgabYXVwW.uGO', 'hhht4', 'service/uploads/3c16bc5ed103e5c9a0228268291b530d.jpg', 1, 1, 1),
(24, 'hh@h4thd.com', '$2y$10$lul2xAbo0y2dNr4ePJz0AuPr6IZUldZoNufdfEwpqJhJlBWrD9MKK', 'hhht4d', 'service/uploads/bf31561e585929f75d9631d590a95eb7.jpg', 1, 1, 1),
(25, '55@55.com', '$2y$10$eH5Ys9g5Ou7pnEX8E1jFeeYRXwBWntZE52ex.Bk3OsV4nM4f62Cc6', '55', 'service/uploads/c85f0eacc79fd78e347ae9b4c2b82164.jpg', 1, 1, 1),
(26, '55@55d.com', '$2y$10$crLF8B/2kGzAzfmmJDLf8.0vs9/M2SHM130TzmKOJj3Ys6L/eKsiu', '55d', '', 1, 1, 0),
(27, 'd@5.com', '$2y$10$tXZ8RhdH89gfmCP6xU9V/etz9mh4u/YKH86THdgIYiFBbx2Vk2fJW', 'd5', 'service/uploads/fa49eafcea429de96f449851de258403.jpg', 1, 1, 0),
(28, '62@6.com', '$2y$10$qEBuJ62fkVM9seh.ErJGw.xYHMdpnADKyMQGo0BRVxf7cngfm2OB6', '6543', 'service/uploads/a31110859867795335f23e7c5786f260.png', 1, 1, 0),
(29, '1@12.com', '$2y$10$bmTfy.acMYvy.xiK0fIboOQDdwQYWD0tI5wqc.sVG8h1WCIUfCZIO', '1', 'service/uploads/c177779a89d1777788676711edfed107.jpg', 1, 0, 0),
(30, '3@3.com', '$2y$10$lDGLoE3BYt2B8bh2jZ2kvuwk36w8akxa8b7zAv8RZxVLqT1lwQOKS', '3', '', 1, 1, 1),
(31, '35@8.com', '$2y$10$RoJGwbHXE9e8TADzblY.8eo2zFzY8nQnLBxxFFU7q2YumqnT2mMvK', '35', '', 1, 1, 1),
(32, '35fe@8ffe.com', '$2y$10$nOEdznWzEMcEFEkvHkVaj.6NQd.TguyCcQPTwaUmgZ5J919jo9NNG', '35fe', '', 1, 1, 1),
(33, '65@65.com', '$2y$10$jyBeG1QZxjyxVgCl4fMJK.fQiUUp2.BAW4.D92K2WYj6lBtzHvA.G', '65', '', 0, 0, 1),
(34, '656@656.com', '$2y$10$vKasACTKNESru3D/uZsryOwkXiQUVpcz4zjMJDDmZ01Q21DI9BAwK', '656', '', 0, 0, 1),
(35, '666@666.com', '$2y$10$MWDxdYOH4lG/YuJKiUkbvuURLcW.8A6QAJ2GwtgMfFKhFyeK12Uza', '666', 'service/uploads/0ab908977313efe54a333bf5be295a2d.jpg', 1, 1, 1),
(36, '7777@7777.com', '$2y$10$vBahf9ZLnOGFPPC4ALlquOapoCY9eJHWZz5p1j1bbBEpZZOdzQno6', '777', '', 1, 1, 1),
(37, '888@888.com', '$2y$10$WxHeIBC4KLX.YJLl8wJj2On04OUn9X.pmnEH4npHEzFPoiryE8Ssi', '888', '', 1, 1, 1),
(38, '999@999.com', '$2y$10$Xr5YGRTVR8j7rYpTYh8OZu4WXLoBxaHAzd42tF2MeKrKZtulCLSYG', '999', 'service/uploads/136ecf430c3746cda26812d12f75772f.jpg', 1, 1, 1),
(39, '1010@1010.com', '$2y$10$T9L2kYY1dFKl1XzlqsLXpu9PdppfCo6eNxMb1/bYERIM7dFOfywa.', '1010', 'service/uploads/19bc22e3308ff5ad9f3c3c1fa7b494fd.jpg', 1, 1, 1),
(40, 'abc@abc.com', '$2y$10$RG9CCsQgzMxBlj5gBoVFouoaW7GotJB4fpkE6TL6vaaDs2tr4wKmm', 'abc', '', 1, 1, 1),
(41, 'm.alaingauthier2@gmail.com', '$2y$10$I2duacog7U9TXfKg.1BwS.8cmvhnw205bPoR8tV7zrp08MNz65MA6', 'alain', 'service/uploads/286d458e92869fa483f2760ecff78ae3.jpg', 1, 1, 1),
(42, 'sia@sia.com', '$2y$10$gUDgYPHkTbKI3OcIsHZRDO5g5rQGpwObTQHrIanPknLh8iBB3XxMy', 'Sia', 'service/uploads/46e84ea431465f38e0e7b947f7d353d5.png', 1, 1, 1),
(48, 'm.alaingauthier@gmail.com', '$2y$10$K62ABRxBw2jWOGQ7Wb8Vhe8UquGLrqbBF1dmJwmDzvEpLO5.cjSPG', 'Alain Gauthier', 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/1012304_561280877247913_1975943239_n.jpg?oh=587f74b52fc7ceb6da19b968aae1fb14&oe=58F84843', 1, 1, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `qSet`
--
ALTER TABLE `qSet`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`qId`);

--
-- Indexes for table `token`
--
ALTER TABLE `token`
  ADD PRIMARY KEY (`token`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `qSet`
--
ALTER TABLE `qSet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;
--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `qId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=159;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
