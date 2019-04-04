/*
Navicat MySQL Data Transfer

Source Server         : 127.0.0.1
Source Server Version : 50720
Source Host           : localhost:3306
Source Database       : blog

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2019-04-04 15:32:22
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admin_menu
-- ----------------------------
DROP TABLE IF EXISTS `admin_menu`;
CREATE TABLE `admin_menu` (
  `icon` varchar(255) DEFAULT NULL,
  `title` varchar(256) DEFAULT NULL,
  `pathname` varchar(256) DEFAULT NULL,
  `id` varchar(256) NOT NULL,
  `leavel` int(11) DEFAULT '0',
  `parentId` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin_menu
-- ----------------------------
INSERT INTO `admin_menu` VALUES ('home', '首页', '/', '1554339479033186', '0', null);
INSERT INTO `admin_menu` VALUES ('appstore', '菜单管理', '/menu', '1554339531500067', '0', null);
INSERT INTO `admin_menu` VALUES ('file', '用户管理', '/user', '1554339589919753', '0', null);
INSERT INTO `admin_menu` VALUES ('file', '系统设置', '/setting', '1554344922048205', '0', null);
INSERT INTO `admin_menu` VALUES ('file', '权限设置', '/permission', '1554345015610314', '0', '1554344922048205');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `name` varchar(10) NOT NULL,
  `password` varchar(256) NOT NULL DEFAULT '',
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('lrs', '6');
