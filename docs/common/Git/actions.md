# Github Action

GitHubActions 是一个持续集成和持续交付的平台，它可以帮助你通过自动化的构建（包括编译、发布、自动化测试）来验证你的代码，从而尽快地发现集成错误。

Github 于 2019 年 11 月后对该功能全面开放，现在所有的 github 用户可以直接使用该功能。GitHub 提供 Linux、Windows 和 macOS 虚拟机来运行您的工作流程，或者您可以在自己的数据中心或云基础架构中托管自己的自托管运行器。

## Github Action 前置知识:

持续集成由很多操作组成，比如抓取代码、运行测试、登录远程服务器，发布到第三方服务等等。

GitHub 把这些操作就称为 actions。

### Github Action 基本概念

- workflow: 一个 workflow 就是一个完整的工作流过程，每个 workflow 包含一组 jobs 任务。
- job: jobs 任务包含一个或多个 job ，每个 job 包含一系列的 steps 步骤
- step: 每个 step 步骤可以执行指令或者使用一个 action 动作
- action: 每个 action 动作就是一个通用的基本单元

### Yaml

编写 GithubAction 的流程时，需要创建一个 workflow 工作流，workflow 必须存储在你的项目库根路径下的.github/workflows 目录中，每一个 workflow 对应一个具体的.yml 文件（或者 .yaml）。
yml 是 YAML（YAML Ain’t Markup Language）语言的文件，以数据为中心，比 properties、xml 等更适合做配置文件，主要有以下几个特点:

- 大小写敏感
- 使用缩进表示层级关系
- 缩进只能使用空格，不能用 TAB 字符
- 缩进的空格数量不重要，只要层级相同的元素左对齐即可
- `#` 表示注释
