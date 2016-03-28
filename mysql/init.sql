drop SCHEMA IF EXISTS docker;
create schema docker;
use docker;

CREATE TABLE `Category` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `Product` (
  `id` bigint(20) NOT NULL,
  `data` varchar(255) DEFAULT NULL,
  `category_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKexqqeaksnmmku5py194ywp140` (`category_id`),
  CONSTRAINT `FKexqqeaksnmmku5py194ywp140` FOREIGN KEY (`category_id`) REFERENCES `Category` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `docker`.`Category`
(`id`,
 `name`)
VALUES
  (1,'microsoft'),
  (2,'google'),
  (3,'apple');
INSERT INTO `docker`.`Product`
(`id`,
 `data`,
 `category_id`)
VALUES
  (1,'office 365',1),
  (2,'maps',2),
  (3,'street view',2),
  (4,'glass',2),
  (5,'apple pay',3);