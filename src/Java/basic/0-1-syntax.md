# Java 语法

语法

- 大小写敏感
- 类名：大驼峰命名
- 方法名：小驼峰命名
- 源文件：`.java` 源文件名必须与类名相同
- 主方法入口：`public static void main(String[] args)`

标识符：变量名、类名以及方法名等

- 命名规则
  - 严格**区分大小写**，长度无限制
    - 英文、数字、\_、$
    - **数字不能开头**
  - 不能使用关键字，保留字；但能包含关键字和保留字
  - 不能包含空格
- 命名规范
  - 包名：小写字母
  - 类名，接口名：大驼峰 XxxYyyZyy
  - 变量名，方法名：小驼峰
  - 常量名：大写字母
- 合法标识符举例：`age`、`$salary`、`_value`、`__1_value`
- 非法标识符举例：`123abc`、`-salary`

变量

- 局部变量
- 类变量（静态变量）
- 成员变量（非静态变量）

注释规范

- 单行注释
  ```java
  //
  ```
- 多行注释
  ```Java
    /*
    */
  ```
- 文档注释
  ```Java
    /**
    @author
    @version
    */
  ```
- `javadoc [options] [packagenames] [sourcefilenames] [-subpackages pkg1:pkg2:...] [@argfiles]`
