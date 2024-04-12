# 基本概念

1. 什么是Docker?
2. 容器化与虚拟化的异同是什么？
3. Docker的三个重要组成部分都是什么？
4. 镜像与容器的区别是什么?
5. 容器的生命周期是什么？

# 常用的操作

## 构建镜像

要通过docker打包当前目录下的文件并创建一个可以在任意Ubuntu场景中运行的docker镜像，您可以按照以下步骤进行操作：

1. 在当前目录下创建一个名为 `Dockerfile`的文件，如果已存在则跳过此步骤。
2. 在 `Dockerfile`中添加以下内容：

```docker

FROM python:3.8
FROM ubuntu:20.04

# 更新源并安装依赖
RUN apt-get update && apt-get install -y software-properties-common
  

# 安装 Python 3.8
RUN add-apt-repository ppa:deadsnakes/ppa
RUN apt-get update && apt-get install -y python3.8

# 设置 PATH 环境变量包含 Python
ENV PATH="/usr/bin:${PATH}"
  
# 安装默认 JDK 版本(OpenJDK 11)
RUN apt-get install -y openjdk-11-jdk

# 配置 JAVA_HOME 环境变量

ENV JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64/

ENV PATH=$PATH:$JAVA_HOME/bin


# 安装一些常用软件工具
RUN apt-get install -y vim net-tools

# 设置工作目录
WORKDIR /workspace

# 暴露端口
EXPOSE 8080

COPY . /app

WORKDIR /app

RUN pip install -r requirements.txt

```

1. 打开终端，进入当前目录。
2. 运行以下命令以构建docker镜像：

```bash
docker build -t my-python-app .
```

这将会根据 `Dockerfile`中的指令构建一个名为 `my-python-app`的docker镜像。

1. 运行以下命令以在任意Ubuntu场景中运行docker容器：

```bash
docker run -it -u $(id -u):$(id -g) my-python-app
```

这将会在一个交互式终端中启动 `my-python-app`容器，并以当前用户的身份运行。
这样，您就可以通过docker打包当前目录下的文件，并在任意Ubuntu场景中运行这个docker容器了。在构建容器时，会自动安装 `requirements.txt`文件中指定的Python包，并且容器会以当前用户的身份运行。
如果需要更多关于docker和Selenium的信息，您可以访问以下链接：

## Docker Compose

当前的一个诉求是能够搭建一个比较大，且高效的的selenium grid网络，尽可能多的设置node节点，以便能够以更加快高效的方式进行部署环境，同时提供快速的测试验证环境。

1.采用的是docker compose的方式，能够快速的进行部署, 以下是一个范例。

```docker

# To execute this docker-compose yml file use `docker-compose -f docker-compose-v3-dev-channel.yml up`

# Add the `-d` flag at the end for detached execution

# To stop the execution, hit Ctrl+C, and then `docker-compose -f docker-compose-v3-dev-channel.yml down`

version: "3"

services:

	chrome:

		image: selenium/node-chrome:dev

		shm_size: 2gb

		depends_on:

			- selenium-hub

		environment:

			- SE_EVENT_BUS_HOST=selenium-hub

			- SE_EVENT_BUS_PUBLISH_PORT=4442

			- SE_EVENT_BUS_SUBSCRIBE_PORT=4443

  
edge:

image: selenium/node-edge:dev

shm_size: 2gb

depends_on:

- selenium-hub

environment:

- SE_EVENT_BUS_HOST=selenium-hub

- SE_EVENT_BUS_PUBLISH_PORT=4442

- SE_EVENT_BUS_SUBSCRIBE_PORT=4443


firefox:

image: selenium/node-firefox:dev

shm_size: 2gb

depends_on:

- selenium-hub

environment:

- SE_EVENT_BUS_HOST=selenium-hub

- SE_EVENT_BUS_PUBLISH_PORT=4442

- SE_EVENT_BUS_SUBSCRIBE_PORT=4443

  
selenium-hub:

image: selenium/hub:latest

container_name: selenium-hub

ports:

- "4442:4442"

- "4443:4443"

- "4444:4444"

```

### 启动网格

> **docker compose -f docker-compose-v3.yml up**

现在，如果我们想要扩展 chrome 服务并启动并运行另外 3 个实例，我们可以通过停止当前的 docker compose 会话并使用以下命令再次启动来实现：

```bash
docker compose -f docker-compose-v3.yml up --scale chrome=4
```

**--scale** 是将服务和镜像部署多次，如果想要在docker-compose.yaml 当中使用的话，可以在写成

```docker
    deploy:
      replicas: 2
```

### 停止网格

要停止网格，我们可以在命令提示符/终端中按 ctrl+c，它将立即停止容器。要停止并删除 `docker compose up` 创建的容器、网络、卷和映像，我们可以使用以下命令：

```bash
docker compose -f docker-compose-v3.yml down
```

如果是 **docker-compose**用法也是一样的。

```docker

autotest:
	build:
		context: .
		dockerfile: Dockerfile
	
	container_name: autotest
	
	# args:
	
		# username: $USER
		# userid: $UID
	# user: "${UID}:${GID}"
	
	ports:
		- "9506:9506"
		- "4500:4500"
	
	volumes:
		- ./:/app
	
	depends_on:
		- chrome
	
	environment:
		- UID=$(id -u)
		- GID=$(id -g)
		- BROWSER_NAME=chrome
		- BROWSER_VERSION=latest
		- BROWSER_HOST=chrome
		- BROWSER_PORT=4444
		- SELENIUM_HOST=selenium-hub
```


docker compose配置文件与docker 启动命名的对应写法速查表

| 指令         | Docker                                      | Docker Compose                                          |
| ---------- | ------------------------------------------- | ------------------------------------------------------- |
| 为容器命名      | container_name:                             | --name [name]                                           |
| 容器停止时，自动删除 | --rm                                        | deploy:<br>    - replicas: 0                            |
| 端口映射       | -p 5000:5000 -p 4500:4500                   | ports:<br>    - "5000:5000"<br>    - "4500:4500"        |
| 数据volume挂载 | -v $(pwd):/app -v $(pwd)/output:/app/output | volumes:<br>    - ./:/app<br>    - ./output:/app/output |
|            |                                             |                                                         |


#### 1.如果想要使用宿主机的用户权限来启动docker应该怎么做？
1. 



#### 参考项

1. [Chap-13: Scaling Services with Docker Compose: A Practical Guide](https://medium.com/@maheshwar.ramkrushna/chap-12-scaling-services-with-docker-compose-a-practical-guide-f79b16513360)
