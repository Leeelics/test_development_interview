
## 配置github  ssh

在需要配置的机器上(Linux)生成ssh秘钥

ssh-keygen -t ed25519 -C "your_email@example.com"


## 应用场景

#### 1. **远程分支重新进行了 rebase 操作，本地分支如何操作能够跟远程分支保持一致**

要将本地分支与远程分支保持一致，可以执行以下步骤：

1. 确保你在本地分支上。
2. 执行 `git fetch` 命令，以确保你的本地仓库与远程仓库同步。
3. 如果你想要将本地分支重置到与远程分支一致，可以使用 `git reset --hard origin/your-branch-name` 命令。这将强制将你的本地分支重置为与远程分支相同的提交状态。确保你理解这个命令的影响，因为它会删除本地分支上的所有未提交更改。
5. 如果你想要保留本地分支上的更改，并且只是想将它们与远程分支同步，可以使用 `git rebase` 命令。例如，如果你在 `main` 分支上，可以执行 `git rebase origin/main` 来将本地 `main` 分支与远程 `main` 分支进行 rebase。这将会将你的本地提交应用到远程分支的最新提交上，并解决任何冲突。

总之，如果你想要将本地分支与远程分支保持一致，你需要先确保你的本地仓库是最新的，然后根据你的需求选择合适的命令进行操作。

#### 2.把本地的工程建立好后与github进行连接，并把mater分支合入到main分支，然后删除远程库的master分支

1. 与github远程仓库建立链接 
	git remote add origin [URL]

2. 把本地的 **master** 分支推到github上
>push -u orgin master

3. 如果推送失败的话，需要用下面这两条命令进行修复
> git config --global --unset http.proxy   
git config --global --unset https.proxy

4. 完成推送后，先从远程仓库获取main版本，并切换至**main**
> git pull   
git checkout main

5. 进行本地的**master**和**main**的融合
>git merge master

6. 融合了两个版本后，将main分支提交至远程仓库
> git push orgin main

7. 提交成功后，删除远程的**master**版本（这里先进行一下查看）
>git brance -a             # 查看所有的分支版本   
git remote orgin --delete master          #删除远程仓库的**master**分支

8. 查看确认删除后，删除本地master分支
> git brance -a   
> git brance -d master


处在git仓库下文件的4种状态
1. 本地文件git未追踪  
2. 本地修改
3. 本地修改并加入暂存区
4. 已经提交的commit




Rebase

git rebase 会删除掉


# Config

config 配置有system级别 global（用户级别） 和local（当前仓库）三个 设置先从system-》global-》local  底层配置会覆盖顶层配置 分别使用--system/global/local 可以定位到配置文件

```bash

# 查看系统config
git config --system --list

# 查看当前用户（global）配置

git config --global  --list

# 查看当前仓库配置信息

git config --local  --list
```

Git修改用户名和密码的命令包括两个方面：修改全局配置和修改某个仓库的配置。

1. 修改全局配置：
   git config –global user.name “your_new_username”
   git config –global user.email “your_new_email@example.com”
   运行上述命令，将会修改Git的全局配置，更改用户名和邮箱。

2. 修改某个仓库配置:
   进入到你想要修改的仓库目录，运行以下命令：
   git config user.name “your_new_username”
   git config user.email “your_new_email@example.com”
   这样就会覆盖该仓库的配置文件，设置新的用户名和邮箱。

## git使用https或http方式设置记住用户名和密码的方法

https方式每次都要输入密码，非常不爽

按照如下设置可只输入一次

记住密码（默认15分钟）：

git config --global credential.helper cache

自己定义时间（一小时后失效）：

git config credential.helper 'cache --timeout=3600'

永久存储密码：

git config --global credential.helper store

如果你的机器是和别人共用，则需要注意应该设置为logcal：

在git中，我们使用git config 命令用来配置git的配置文件，git配置级别主要有以下3类：

1、仓库级别 local 【优先级最高】

2、用户级别 global【优先级次之】

3、系统级别 system【优先级最低】

[git config配置 - fireporsche - 博客园](https://www.cnblogs.com/fireporsche/p/9359130.html "git config配置 - fireporsche - 博客园")


# Remote

```bash
git remote -v # 查看当前的remote

git remote remove origin #删除当前的origin

git remote add origin XXX.git  #添加一个新的origin地址，origin只是习惯性叫法，可以换成其他的
```

## git 从ssh切换至https 从https切换至ssh

1、从ssh切换至https   
git remote set-url origin(远程仓库名称) https://email/username/ProjectName.git   
   
2、从https切换至ssh   
git remote set-url origin git@email:username/ProjectName.git·
