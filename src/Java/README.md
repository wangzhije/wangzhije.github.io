# README

## 简介

Java 3 个体系

- JavaSE（J2SE）Java2 Platform Standard Edition，java 平台标准版
- JavaEE（J2EE）Java 2 Platform,Enterprise Edition，java 平台企业版
- JavaME（J2ME）Java 2 Platform Micro Edition，java 平台微型版

Java 语言特性

- 面向对象：类、接口等
- 解释型的：
- 动态的：
- 可移植的：
- 分布式：
- 多线程的：

## Java、JDK、JRE、JVM

## 开发环境

- 检查是否已安装
  - `java -version`
  - `java`
  - `javac`
- 安装 Java
  - 下载 JDK，地址[https://www.oracle.com/java/technologies/downloads/]()
  - 配置环境变量

开发工具

- Linux 系统、Mac OS 系统、Windows 95/98/2000/XP，WIN 7/8 系统。
- Java JDK 7、8……
- vscode 编辑器或者其他编辑器。
- IDE：Eclipse、 IntelliJ IDEA、NetBeans 等。

## 起步

```java
// HelloWorld.java
public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello World"); // 输出 Hello World
  }
}
```

- 编译 `javac HelloWorld.java`
  - 编码问题 `javac -encoding UTF-8 HelloWorld.java `
- 运行 `java HelloWorld ` ``

## 语言基础

语法

- 大小写敏感
- 类名：大驼峰命名
- 方法名：小驼峰命名
- 源文件：`.java` 源文件名必须与类名相同
- 主方法入口：`public static void main(String[] args)`

标识符：变量名、类名以及方法名等

- 所有的标识符都应该以字母（A-Z 或者 a-z）,美元符（$）、或者下划线（\_）开始
- 首字符之后可以是字母（A-Z 或者 a-z）,美元符（$）、下划线（\_）或数字的任何字符组合
- 关键字不能用作标识符
- 标识符是大小写敏感的
- 合法标识符举例：age、$salary、\_value、\_\_1_value
- 非法标识符举例：123abc、-salary

修饰符：修饰类中方法和属性

- 访问控制修饰符: `default, public , protected, private`
- 非访问控制修饰符: `final, abstract, static, synchronized`

变量

- 局部变量
- 类变量（静态变量）
- 成员变量（非静态变量）

关键字

- 访问控制
  - public:
  - private:
  - protect:
  - default:
- 类、方法和变量修饰符
  - abstract: 声明抽象
  - class: 类
  - extends: 扩充、继承
  - final: 最终值、不可改变的
  - implements: 实现（接口）
  - interface: 接口
  - native: 本地、原生方法（非 Java 实现）
  - new: 创建
  - static: 静态
  - strictfp: 严格浮点、精准浮点
  - synchronized: 线程、同步
  - transient: 短暂
  - volatile: 易失

注释规范

- 单行注释
- 多行注释

## 基本数据类型

8 种，内置数据类型

| 数据类型 | 默认值 |
| -------- | -----: |
| byte     |      0 |
| short    |      0 |
| int      |      0 |
| long     |     0L |
| float    |   0.0f |
| double   |   0.0d |
| boolean  |  false |
| char     |      0 |

## 引用数据类型

## 类型转换

## 栈内存 和 堆内存
