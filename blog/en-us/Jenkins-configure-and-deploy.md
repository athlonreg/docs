---
title: Jenkins配置部署
date: 2018-08-22 11:36:45
categories: 
- Linux
- 运维
keywords: 
- Jenkins
- 持续集成
description: Jenkins是一个开源的、提供友好操作界面的持续集成(CI)工具，起源于Hudson（Hudson是商用的），主要用于持续、自动的构建/测试软件项目、监控外部任务的运行。Jenkins用Java语言编写，可在Tomcat等流行的servlet容器中运行，也可独立运行。通常与版本管理工具(SCM)、构建工具结合使用；常用的版本管理系统有SVN、GIT，构建工具有Maven、Ant、Gradle。
tags:
- Jenkins
- 持续集成
photos:
- https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/bd/e3fd089257fe9caf4f4247f203d4bd.jpg
---

# <center>`Jenkins`配置部署</center>

## 简介


## 安装部署

以CentOS环境安装部署为例，详细介绍Jenkins安装部署整体过程和常用设置。

### 准备工作
#### 环境准备

如果使用Jenkins.war包的形式进行安装，需要提前准备以下环境。

##### Java环境准备
###### 去官网下载`JDK`：

[http://www.oracle.com/technetwork/java/javase/downloads/java-archive-javase8-2177648.html](http://www.oracle.com/technetwork/java/javase/downloads/java-archive-javase8-2177648.html)

![](https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/81/1b33b7e9dbe92a1515154d0193194f.jpg)

###### 安装

* 将下载得到的`jdk-8u161-linux-x64.rpm`包保存到`Linux`主机

```bash
# rpm -ivh jdk-8u161-linux-x64.rpm
```

![](https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/ad/4301bf0ab8d0d138ded7bc3709fd4a.jpg)

###### 环境变量

```bash
# vim ~/.bashrc
```

在文件的末尾添加以下行

```
export JAVA_HOME=/usr/java/jdk1.8.0_161
```

![](https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/49/6ac74e90a641e355b29b9c4d17deb9.jpg)

使环境配置生效
```bash
# source ~/.bashrc
```

###### 测试`Java`环境

```bash
# java -version
```

&emsp;&emsp;查看是否正常显示版本信息，若显示则安装成功

![](https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/2f/49c7d622b298ae690db3c13754c1b1.jpg)

##### Tomcat环境准备
###### 下载Tomcat

> 地址: http://mirrors.shu.edu.cn/apache/tomcat/tomcat-8/v8.5.32/bin/apache-tomcat-8.5.32.tar.gz

```bash
# wget http://mirrors.shu.edu.cn/apache/tomcat/tomcat-8/v8.5.32/bin/apache-tomcat-8.5.32.tar.gz
```

###### 安装Tomcat

```bash
# tar zxvf apache-tomcat-8.5.32.tar.gz
# mv apache-tomcat-8.5.32 /usr/local/
```

###### 配置Tomcat环境

```bash
# vim ~/.bashrc
```

在文件的末尾添加以下行

```
export CATALINA_BASE=/usr/local/apache-tomcat-8.5.32
```

![](https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/66/1656ee9280886c6c7de6057c8835cd.jpg)

使环境配置生效
```bash
# source ~/.bashrc
```

###### 启动Tomcat服务

```bash
# startup.sh
```

![](https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/f9/4e6e503aa6fe748959adfb182e3e1c.jpg)

###### 测试Tomcat

打开浏览器，在地址栏中输入http://IP:8080回车，如果看到Tomcat自带的一个JSP页面，说明你的Tomcat已搭建成功

![](https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/43/36596794bdf3af70f1ecd35f8c40a0.jpg)

### 安装部署
#### 下载war文件

```
# wget http://mirrors.jenkins.io/war-stable/latest/jenkins.war
```

#### 安装Jenkins

将下载后的war包放到/usr/local/apache-tomcat-8.5.32/webapps/目录下，启动tomcat即可， 或者用命令`java -jar jenkins.war`。

#### 测试

打开浏览器输入http://IP:8080/jenkins回车即可看到jenkin初始配置界面，按照提示进行设置。

![](https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/27/4f737ebea43eb34f747fb68a08b6fa.jpg)

### 常用设置



![](https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/b0/075e39aad15468d3eb9cc0f6bf37f7.jpg)

* SMTP服务器：为邮箱服务地址。
  * QQ: smtp.qq.com
  * 163: smtp.163.com

##### Job设置

在需要邮件通知的Job设置里面增加"构建后操作步骤" -> 选择E-mail Notification。

![](https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/82/3005620b29b6fc4b2c9e3ce729af8b.jpg)

![](https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/9e/a3153b262215e17561eb34674635e2.jpg)

![](https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/6d/dce01f6fa0a84d625f0eb55759c422.jpg)

##### 扩展插件设置


![](https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/18/0775061dcf193cc08da229cef10eda.jpg)

* SMTP server -- 设置SMTP服务器地址
* Default user E-mail suffix -- 设置用户默认邮件后缀
* Default Content Type -- 默认内容类型(Plain Text HTML)
* Default Subject -- 默认邮件主题
* Default Content -- 默认邮件内容，可以设置模板
* Default Triggers -- 触发器

* [ ] 全局配置

![](https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/69/3127442cf5a527b984d83738c31e6f.jpg)

* [ ] 项目配置

![](https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/71/133a454b2ee120f2b1df930b4ca9fe.jpg)

可以在“Advanced Settings”中针对该项目进行个性化的配置。可以针对该项目定义该项目通知的收件人列表、主题、内容、附件等。

![](https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/53/67346392186853caab6ee621418aa4.jpg)

#### 任务创建
##### 构建项目类型


![](https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/04/c97a32a6b1285a76a6edb8497a1cd3.jpg)

Jenkins 提供了六种类型的任务。


* Multibranch Pipeline(多分支流水线)




```python
print "Hello world"
```

在Linux下怎么执行这个测试用例，打开终端

```
[root@centos-7 ~]# cd
[root@centos-7 ~]# ll py_tests.py
-rw-r--r--. 1 root root 20 8月  16 16:07 py_tests.py
[root@centos-7 ~]# python py_tests.py
Hello world
[root@centos-7 ~]#
```

下面回到Jenkins的配置过程中

![](https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/ab/46e2f5d22700eb539eac4128e19c85.jpg)

添加项目的描述：Python 测试项目，打印Hello world。


![](https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/e0/dab0e9e3d049db8a84ee83f85582de.jpg)

选择`执行shell`选项，执行Linux shell命令。

![](https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/c6/ef1db64d383033d03b465af7f3771d.jpg)

如上图，输入你在 Linux 终端下所输的命令`python /root/py_tests.py`。 点击`保存`。

![](https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/8f/6c232d4632eb024fa2cadcf0fbfc13.jpg)

一个极简的，基于 Linux 系统的 Python 脚本测试持续集成项目就创建完成了。

#### 节点添加

Jenkins有个很强大的功能：分布式构建(在Jenkins的配置中叫做节点)，分布式构建能够让同一套代码在不同的环境(如：Windows和Linux系统)中编译、测试等。而且Jenkins构建的代码和产物最后自动拷贝到主节点。





![](https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/1e/067a4f7fa85272fa79f85208c937c0.jpg)

![](https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/eb/3eb8f07110c1e29abe65035fdc2b04.jpg)

![](https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/bb/e82fc1380ecf612e70e06bc156e17e.jpg)

&emsp;&emsp;节点名称：建议使用字母、数字或字母和数字的组合。最好见名知意。不建议使用标点符号和中文(中文命名没有问题，但Job中无法引用)。


* Name(名称)：节点名称



![](https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/35/d7416430314fd19e34a01ac59ff464.jpg)

##### 节点连接

以Launch slave agents via SSH为例，选择Manually trusted key Verification Strategy，然后点击最下面的保存。

Jenkins -> 系统管理 -> 系统设置，设置SSH Server

* Name: 这个可以随意写
* Hostname: 远程主机的IP地址
* Username: 远程主机登录的用户名
* Remote Directory: 远程目录

如图设置好信息后，点击下面的保存

![](https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/3f/b787c0c1b5bab76ad878fbb47542ad.jpg)

Jenkins -> 系统管理 -> 管理节点，点击刚刚配置好的节点，上线节点

![](https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/1d/1f61d958c23269f4fcc4a7ae295b0b.jpg)

回到节点列表后发现节点就已经成功上线了

![](https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/a4/346c91e15903e43bc6759a7c566502.jpg)

#### 角色权限

由于jenkins默认的权限管理体系不支持用户组或角色的配置，因此需要安装第三发插件来支持角色的配置，本文将使用Role Strategy Plugin，介绍页面：https://wiki.jenkins-ci.org/display/JENKINS/Role+Strategy+Plugin。


![](https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/89/a69327d3e04b1b57ff022132e9f5a5.jpg)

##### 配置权限

在系统管理页面点击Manage and Assign Roles进入角色管理页面

![](https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/90/a06f0b7e2eff8c0a9d81576497ff0c.jpg)

进入之后

![](https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/be/1bbe3e8858dbac44ac5a1fa2451883.jpg)

* 管理角色（Manage Roles）

![](https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/b8/ea91c0ea7091dca3faf3c86356da16.jpg)

;如上图，分别创建了admin、anonymous两个全局角色，Online Program、test两个项目角色。




![](https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/2e/6a8a273181a5357a4ca587a5c2ced9.jpg)

![](https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/60/d8fa2030fff834872c259f65720958.jpg)

&emsp;&emsp;点击新建使用者可以创建新用户，点击用户ID或名称都可以修改用户信息。

&emsp;&emsp;选择Assign Roles可以为用户分配所属角色，可以分配全局角色和项目角色。

![](https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/57/385c466d213dd9ead86034162d9029.jpg)

![](https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/93/ddef492ecd2995c5731ea8eb1e9ee1.jpg)

&emsp;&emsp;如上图，将不同的用户分别分配给不同的角色，这样用户就可以具有角色所拥有的权限。

### 运行与维护
#### Jenkins升级

* 说明：Jenkins迭代更新很频繁，一般1周更新一次，半年一个大版本。










| `--httpPort=$HTTP_PORT` | 用来设置jenkins运行时的web端口。  |
| --- | --- |
| `--httpsPort=$HTTP_PORT` | 表示使用https协议。 |
| ~~~~--httpListenAddress=$HTTP_HOST | 用来指定jenkins监听的ip范围，默认为所有的ip都可以访问此jenkins server。 |




以在jenkins的管理页面下的系统信息中，查看所有的jenkins的信息，例如jenkins的启动配置，所依赖的系统的环境变量，所安装的plugins。

#### Jenkins中执行batch和Python


![](https://raw.githubusercontent.com/athlonreg/BlogImages/master/Images/99/04a1d6c847be966e185435823bb110.jpg)

### Jenkins 整合 LDAP 以及 CAS 单点登录

参考另外一篇博客
[Jenkins 整合 LDAP 以及 CAS 单点登录](https://blog.iamzhl.top/Jenkins-integrate-with-ldap-and-CAS.html)