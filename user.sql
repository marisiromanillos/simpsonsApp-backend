-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 08, 2023 at 02:12 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `user`
--

-- --------------------------------------------------------

--
-- Table structure for table `characters`
--

CREATE TABLE `characters` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `name` varchar(331) NOT NULL,
  `quote` varchar(333) NOT NULL,
  `direction` varchar(64) NOT NULL,
  `image` varchar(302) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `characters`
--

INSERT INTO `characters` (`id`, `user_id`, `name`, `quote`, `direction`, `image`) VALUES
(1, 2, 'marisi', 'hello world', 'Left', NULL),
(2, 13, 'Roman', 'Hello!', 'Right', NULL),
(4, 13, 'Homer', 'Bye!', 'Right', NULL),
(5, 18, 'Homer', 'Bye!', 'Right', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tokens`
--

CREATE TABLE `tokens` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `token` varchar(128) NOT NULL,
  `entry_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tokens`
--

INSERT INTO `tokens` (`id`, `user_id`, `token`, `entry_date`) VALUES
(7, 13, 'KPqaK2!MIGcQjSlKg5Py6uQz-WglWuLbBiN7apcd_MekrWNYNODi!cEAdNwxDG6Go3ddSp4ATHEEPrEqErE6wpATxYFmUkzNZmyDgYST9-E6rF3KB89nWHuudKHVMwJ1', '2023-12-04 11:53:46'),
(8, 14, 'lylcj7e0JJfFUmCofFbSGMLk3DvWgctYAQFS1-UpKlP1y7otZIR!he-K-HmxQv3W8sVEftvuRcK37pNPqNNSeWZV0W_cgSxLJFMiUTNVTc0TVl4pCUlP!ulhj6t4xYMx', '2023-12-04 12:10:20'),
(9, 17, 'aObKYc1pB_nuNeIDT1qboDG0Hbeavrg51NaFM0N_O8Yndm4hI6ae1gDW4yZI-muBSxyfIi!KU!WgJFvZ0gY5Jgmf3H4RVFhga5l7T6F3Gb4dkEmejP25wgE-lhFVfbc2', '2023-12-07 11:08:34'),
(10, 18, 'JkX7qqm6WioxA-X8p7odn-PLQpcB66-GUGQe6vu9Zr1sTg-PepLEzw_ksISa!Si5BO5!uvqY7xTDu7eNGH7qbeVm_fcnnU8!BirTQ3mJYc-eNHzlvp0JCU6L6MU01NiJ', '2023-12-07 11:26:41'),
(11, 18, 'JqhaYR57X4RU-ebsHBnqvvpO5kuPqtpS51s2KaMP1O2uIYmqJHDb-m4bUA1lgjwFtM7A9rH9wGz6vMZUqFPMn6YmE6VtYwfh-SQKqCyaiK6npr2GjuNlxeCMLapqo!oq', '2023-12-07 11:37:10');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(332) NOT NULL,
  `password` varchar(256) NOT NULL,
  `entry_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `entry_date`) VALUES
(13, 'test@gmail.com', 'ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f', '2023-12-04 11:52:55'),
(14, 'marisi', 'ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f', '2023-12-04 12:10:03'),
(15, 'amelie', '7533c5425d58ce43f9165445293641bdf7d4a6f333c5ebdbc4d3ba0dff3013c9', '2023-12-05 12:02:34'),
(16, 'amelie@gmail', 'a65f591e7aeaaea49c54d54186e15cb52767d163cffe6cce57f046369942dc3c', '2023-12-05 12:04:15'),
(17, 'jon', 'cb16ae502ac6ec79596e8cd22292ef6ac16b9a57fc8b79d856e39da0bbbe05a3', '2023-12-07 11:07:30'),
(18, 'Russell', '52e058f8b38cce9972173cc0f92f9c35d84273bdd063f6360d9ff5d02f71e70a', '2023-12-07 11:26:14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `characters`
--
ALTER TABLE `characters`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tokens`
--
ALTER TABLE `tokens`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `characters`
--
ALTER TABLE `characters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tokens`
--
ALTER TABLE `tokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
