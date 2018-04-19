# 课程笔记

## 反馈

-  老师录得视频听得不大清楚希望注意一下.
- 希望老师可以把那个 具体的命令行啥的 写的再详细一点 另外就是那个廖学峰那个文档怎么看，里面好多文件夹，不知道打开哪一个？
- SVN有必要掌握吗
  + 会基本使用就可以了
- 希望老师明天再大概的过一遍， 每个单个知识点都觉得很简单，但是觉得很容易就忘了。 拜托了老师， 祝老师新的一年越长越帅。
-  开年第一天听课效率还不错,祝老师新年快乐
- svn服务器的文件是存在什么地方？

---

## 复习

---

## 知识点

- Git
- Github
- 项目阶段

---

## Git-bash 文件操作相关命令

- touch：创建文件
- cat：查看文件
- less：查看大文本文件
- vi：visual interface
  + Esc 退出到命令模式
  + i 进入插入模式
  + :q 退出vi
  + :w 保存编辑
  + :wq 保存并退出
  + :q! 强制退出不保存修改
  + vi 的所有操作基本全部是命令，这里掌握基本使用基于可以了
  + 有时候使用 git commit 进行提交的时候希望能多写几行提交日志，这时候可以省略 -m 参数进入 vi 编辑模式

## Git

### 参考资料



### 基本命令

- git init
- git status
- git add
- git commit
- git log

### 添加/删除文件

```bash
# 添加指定文件到暂存区
git add [file1] [file2] ...

# 添加指定目录到暂存区，包括子目录
git add [dir]

# 添加当前目录的所有文件到暂存区
git add .

# 删除工作区文件，并且将这次删除放入暂存区
git rm [file1] [file2] ...

# 停止追踪指定文件，但该文件会保留在工作区
git rm --cached [file]

# 改名文件，并且将这个改名放入暂存区
git mv [file-original] [file-renamed]
```

### 代码提交

```bash
# 提交暂存区到仓库区
git commit -m [message]

# 提交暂存区的指定文件到仓库区
git commit [file1] [file2] ... -m [message]

# 提交工作区自上次commit之后的变化，直接到仓库区
git commit -a

# 使用一次新的commit，替代上一次提交
# 如果代码没有任何新变化，则用来改写上一次commit的提交信息
git commit --amend -m [message]

# 重做上一次commit，并包括指定文件的新变化
git commit --amend [file1] [file2] ...
```

### 回退撤销

```bash
# 恢复暂存区的指定文件到工作区
git checkout [file]

# 恢复某个commit的指定文件到暂存区和工作区
git checkout [commit] [file]

# 恢复暂存区的所有文件到工作区
git checkout .

# 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变
git reset [file]

# 重置暂存区与工作区，与上一次commit保持一致
git reset --hard

# 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变
git reset [commit]

# 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致
git reset --hard [commit]

# 重置当前HEAD为指定commit，但保持暂存区和工作区不变
git reset --keep [commit]

# 新建一个commit，用来撤销指定commit
# 后者的所有变化都将被前者抵消，并且应用到当前分支
git revert [commit]

# 暂时将未提交的变化移除，稍后再移入
git stash
git stash pop
```

### 分支管理

默认在 git 的仓库中，会有个分支的原点：master

```bash
# 列出所有本地分支
git branch

# 基于当前分支新建一个分支，但依然停留在当前分支
git branch [branch-name]

# 基于当前分支新建一个分支，并切换到该分支
git checkout -b [branch]

# 切换到指定分支，并更新工作区
git checkout [branch-name]

# 切换到上一个分支，交替和上一个分支进行切换
git checkout -

# 合并指定分支到当前分支
git merge [branch]

# 删除分支
git branch -d [branch-name]
```

### 远程操作

```bash
# 下载一个远程仓库
$ git clone [url]

# 显示所有远程仓库
git remote -v

# 显示某个远程仓库的信息
git remote show [remote]

# 增加一个新的远程仓库，并命名
git remote add [shortname] [url]

# 取回远程仓库的变化，并与本地分支合并
git pull [remote] [branch]

# 上传本地指定分支到远程仓库
git push [remote] [branch]

# 强行推送当前分支到远程仓库，即使有冲突
git push [remote] --force
```

### Git 工作流程：分支策略

- [Git 工作流程](http://www.ruanyifeng.com/blog/2015/12/git-workflow.html)

#### Git Flow

#### Github Collabrators

这种方式公司团队项目使用居多

#### Github Flow

这种方式开源项目使用居多

- fork
- clone 到你的本地
- 在clone下来的项目中拉出一个新的分支
  + 修改的时候最好是基于 master 拉出一个修改的分支，例如这个分支是用来添加某个功能的
- 在新分支上开发或者修改完成之后，提交到本地仓库，然后 push 推到自己的账户中 fork 过来的仓库
- 最后，在 Github 上你 fork 过来的仓库界面中找到 New Pull Request 发起提交请求
- 对方就会在仓库的 Pull Requests 中收到你发起的提交请求
  + 然后双方就可以使用社会化交流方式进行沟通协作
  + 例如 Code Review 代码审查
- 最后对方审查通过没有问题之后，选择 Merge Request
- 到此，一个完整的 Github 工作流结束
- 这种方式开源项目更多一些（大家都不认识）

#### Gitlab flow

### Gitlab

对于第三方代码仓库托管服务有很多，其中 Github 最火，但是如果想要托管私有项目收费比较高，
而且在国内受限于网络环境影响，鲜少有公司使用。

也有的公司，例如京东、淘宝这种级别的公司，也不太常用别的第三方的托管服务。

Gitlab 是一个开源的类似于 Github 的一个系统，开源免费部署到自己的公司内容。

---

## 与 Github 进行多人协作

### Collaborators

### Pull Request

---

## Github Pages

Github Pages 提供了一个免费在线托管静态资源的服务，叫做：Github Pages。

使用方法如下：

1. 在个人的 Github 账户中创建一个仓库
2. 仓库名称必须为 `个人账户名称.github.io`
3. 往该仓库根目录中提交一个 `index.html` 文件
4. 然后就可以在地址栏输入 `个人账户名称.github.io` 地址，就可以看到 `index.html` 网页内容了

注意：上面创建的仓库名称必须是 `个人账户名称.github.io` ，否则无法访问

## Hexo

Hexo 是基于 Node.js 开发的一个静态博客生成器，提供本地实时预览及部署功能。
基本使用方式如下：

```bash
npm install -g hexo-cli
hexo init blog
cd blog

# 启动本地预览服务，默认是 127.0.0.1:4000
hexo server

# 新建文章
hexo new 文章标题
```

也可以参考 Hexo 官方文档：https://hexo.io/zh-cn/ , 里面有具体的使用方式。

### 自动发布 Hexo 搭建的静态博客

第一：先修改 `_config.yml` 配置文件，下面是一个示例：

```yml
deploy:
  type: git
  repo: https://heima04:heima123456@github.com/heima04/heima04.github.io.git
```

上面的配置选项中，一定要注意在 repo 中按照对应的格式加入 Github 用户名和密码。

第二：安装自动发布的插件：

```bash
npm install hexo-deployer-git --save
```

第三：使用命令一键进行发布：

```bash
hexo generate --deploy
# 或者
hexo deploy --generate
```

上面两条命令都可以，发布可能有延时，稍微等待即可。

## 目标

1. 能掌握 Git-Bash 中 touch、cat、less、vi 命令的基本使用
2. 能掌握 Git 中分支的基本操作（branch、checkout、merge）
3. 能概述 Git-Flow 工作流（Git-Flow 分支管理策略）
4. 能掌握 Github 中多人协同的两种协作方式（Collaborators 和 Pull Request）的基本操作流程
