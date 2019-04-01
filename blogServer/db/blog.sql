/*
Navicat MySQL Data Transfer

Source Server         : 127.0.0.1
Source Server Version : 50720
Source Host           : localhost:3306
Source Database       : blog

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2019-04-01 17:25:18
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
  `id` int(11) NOT NULL,
  `leavel` int(11) NOT NULL,
  `parentId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin_menu
-- ----------------------------
INSERT INTO `admin_menu` VALUES ('home', '首页', '/', '1', '0', null);
INSERT INTO `admin_menu` VALUES ('appstore', '菜单管理', '/menu', '2', '0', null);
INSERT INTO `admin_menu` VALUES ('file', '用户管理', '/user', '3', '0', null);
INSERT INTO `admin_menu` VALUES ('file', '系统设置', '/setting', '4', '0', null);
INSERT INTO `admin_menu` VALUES ('file', '权限设置', '/permission', '5', '1', '4');

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
