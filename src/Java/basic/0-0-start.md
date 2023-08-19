# 起步

## 开发环境搭建

- 检查是否已安装
  - `java -version`
  - `java`
  - `javac`
- 下载安装 JDK，[下载地址](https://www.oracle.com/java/technologies/downloads/)
- 配置环境变量

## Java 程序 编写-编译-运行 过程

- 编写：`HelloWorld.java` 源文件
  - 要求 `public class` 的类名必须与源文件名相同
  - 可以有多个 `class`，但最多只能有一个 `public class`
  - 程序的入口是 `main` 方法
- 编译 `javac HelloWorld.java`
  - 编译 `.java` 源文件为 `.class` 字节码文件
  - 编码问题 `javac -encoding UTF-8 HelloWorld.java `
- 运行 `java HelloWorld `
  - 执行 `.class` 字节码文件

```java
// HelloWorld.java
public class HelloWorld {
  static void main(String [] args){
    System.out.println("Hello World");
  }
}
class test {}
```

### 编辑器

- IDEA
  - [IDEA 2022.1 破解](!./../IDEA/IDEA破解.md)
  - [IDEA 开发环境搭建](!./../IDEA/开发环境搭建.md)
