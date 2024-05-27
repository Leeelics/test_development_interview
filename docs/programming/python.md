
# Python

[并发](#test1)
1.线程与进程的区别
进程有自己独立的存储空间和调用栈

2.为什么说python没有真正的并发？

[迭代器和生成器](#aaa)
## Class
1. @staticmethod和@classmethod

Python其实有3个方法,即静态方法(staticmethod),类方法(classmethod)和实例方法,如下:

``` python
def foo(x):
    print "executing foo(%s)"%(x)

class A(object):
    def foo(self,x):
        print "executing foo(%s,%s)"%(self,x)

    @classmethod
    def class_foo(cls,x):
        print "executing class_foo(%s,%s)"%(cls,x)

    @staticmethod
    def static_foo(x):
        print "executing static_foo(%s)"%x

a=A()
  
```
这里先理解下函数参数里面的self和cls.这个self和cls是对类或者实例的绑定,对于一般的函数来说我们可以这么调用foo(x),这个函数就是最常用的,它的工作跟任何东西(类,实例)无关.对于实例方法,我们知道在类里每次定义方法的时候都需要绑定这个实例,就是foo(self, x),为什么要这么做呢?因为实例方法的调用离不开实例,我们需要把实例自己传给函数,调用的时候是这样的a.foo(x)(其实是foo(a, x)).类方法一样,只不过它传递的是类而不是实例,A.class_foo(x).注意这里的self和cls可以替换别的参数,但是python的约定是这俩,还是不要改的好.

对于静态方法其实和普通的方法一样,不需要对谁进行绑定,唯一的区别是调用的时候需要使用a.static_foo(x)或者A.static_foo(x)来调用.

| \       | 实例方法     | 类方法            | 静态方法            |
| ------- | -------- | -------------- | --------------- |
| a = A() | a.foo(x) | a.class_foo(x) | a.static_foo(x) |
| A       | 不可用      | A.class_foo(x) | A.static_foo(x) |

更多关于这个问题:
1. http://stackoverflow.com/questions/136097/what-is-the-difference-between-staticmethod-and-classmethod-in-python
2. https://realpython.com/blog/python/instance-class-and-static-methods-demystified/

## [9 迭代器和生成器](#aaa)

这个是stackoverflow里python排名第一的问题,值得一看: http://stackoverflow.com/questions/231767/what-does-the-yield-keyword-do-in-python
这是stackoverflow里python排名第一的问题，值得一看：http://stackoverflow.com/questions/231767/what-does-the-yield-keyword-do-in-python

这是中文版: http://taizilongxu.gitbooks.io/stackoverflow-about-python/content/1/README.html

这里有个关于生成器的创建问题面试官有考： 问： 将列表生成式中[]改成() 之后数据结构是否改变？ 答案：是，从列表变为生成器

``` python
L = [x*x for x in range(10)]
L
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
g = (x*x for x in range(10))
g
```
通过列表生成式，可以直接创建一个列表。但是，受到内存限制，列表容量肯定是有限的。而且，创建一个包含百万元素的列表，不仅是占用很大的内存空间，如：我们只需要访问前面的几个元素，后面大部分元素所占的空间都是浪费的。因此，没有必要创建完整的列表（节省大量内存空间）。在Python中，我们可以采用生成器：边循环，边计算的机制—>generator

# 10 *args and **kwargs
 用\*args和\**kwargs只是为了方便并没有强制使用它们.

当你不确定你的函数里将要传递多少参数时你可以用*args.例如,它可以传递任意数量的参数:

``` python
def print_everything(*args):
    for count, thing in enumerate(args):
        print '{0}. {1}'.format(count, thing)
    print_everything('apple', 'banana', 'cabbage')
   
```
输出内容：

0. apple
1. banana
2. cabbage

相似的,**kwargs允许你使用没有事先定义的参数名:

``` python
 def table_things(**kwargs):
     for name, value in kwargs.items():
         print '{0} = {1}'.format(name, value)

 table_things(apple = 'fruit', cabbage = 'vegetable')
cabbage = vegetable
apple = fruit
```
你也可以混着用.命名参数首先获得参数值然后所有的其他参数都传递给*args和**kwargs.命名参数在列表的最前端.例如:

def table_things(titlestring, **kwargs)
*args和**kwargs可以同时在函数的定义中,但是*args必须在**kwargs前面.

当调用函数时你也可以用*和**语法.例如:

``` python
def print_three_things(a, b, c):
    print 'a = {0}, b = {1}, c = {2}'.format(a,b,c)
mylist = ['aardvark', 'baboon', 'cat']
print_three_things(*mylist)

a = aardvark, b = baboon, c = cat
```
就像你看到的一样,它可以传递列表(或者元组)的每一项并把它们解包.注意必须与它们在函数里的参数相吻合.当然,你也可以在函数定义或者函数调用时用*.

1. http://stackoverflow.com/questions/3394835/args-and-kwargs


## <a id="test1">并发</a>

### 多线程的重要知识点和实际案例
### 重要知识点 
1. **GIL（全局解释器锁）** ：
- GIL 是 Python 解释器中的一个机制，它确保同一时刻只有一个线程执行 Python 字节码。这意味着在 CPU 密集型任务中，多线程并不能充分利用多核 CPU。 
2. **线程和进程的区别** ：
- 线程是进程内的执行单元，共享进程的内存空间，相比进程更轻量。进程是操作系统分配资源的基本单位，每个进程有独立的内存空间。 
3. **threading** ： 
- Python 中使用 `threading` 模块来创建和管理线程。它提供了线程的创建、启动、暂停、恢复等操作的接口。 
4. **线程同步与锁** ： 
- 多线程环境下，为了避免多个线程同时访问共享资源导致数据不一致或竞争条件，可以使用锁机制（如 `Lock`、`RLock`）进行线程同步。 
5. **线程间通信** ： 
- 可以使用队列（如 `Queue`）等线程安全的数据结构进行线程间的数据传递和通信。
### 示例说明

下面是一个简单的示例，展示了如何使用 `threading` 模块创建和启动多个线程：

```python
import threading
import time

# 定义一个简单的线程执行函数
def worker(num):
    print(f"Thread {num} started")
    time.sleep(2)  # 模拟任务执行
    print(f"Thread {num} finished")

# 创建并启动多个线程
threads = []
for i in range(5):
    thread = threading.Thread(target=worker, args=(i,))
    threads.append(thread)
    thread.start()

# 等待所有线程执行完毕
for thread in threads:
    thread.join()

print("All threads have finished")
```


在这个示例中： 
- `worker` 函数模拟了线程要执行的任务，每个线程会打印开始执行和完成执行的信息。 
- 在主线程中，通过循环创建了 5 个线程，每个线程都执行 `worker` 函数。 
- `thread.start()` 启动每个线程，使其开始执行任务。 
- `thread.join()` 等待每个线程执行完成。
- 最后输出提示所有线程都执行完毕。

需要注意的是，**在 Python 中的多线程并不适用于所有场景，特别是对于 CPU 密集型任务，建议使用多进程来实现真正的并行加速。但对于 I/O 密集型任务，多线程仍然可以提高效率，因为线程在等待 I/O 操作完成时可以释放 GIL，让其他线程执行。**


### 2. 多进程的考查知识点和具体应用案例

多进程是指在操作系统中同时运行多个进程的技术。每个进程拥有独立的内存空间和资源，彼此之间互不影响。Python 中的多进程模块 `multiprocessing` 可以实现多进程的创建、管理和通信，适用于并行计算和提高程序性能的场景。以下是关于多进程的考查知识点和具体应用案例：
### 考查知识点 
1. **进程的基本概念** ：
- 进程是操作系统分配资源的基本单位，每个进程都有独立的内存空间和运行环境。 
2. **多进程的优势** ：
- 多进程可以充分利用多核 CPU，并且进程之间互相独立，更加稳定和安全。 
3. ** 模块** ： 
- `multiprocessing` 模块提供了创建和管理进程的类和函数，可以实现并行计算和任务分发。 
4. **进程间通信** ： 
- 进程之间可以通过队列（`Queue`）、管道（`Pipe`）等方式进行数据交换和通信。 
5. **进程池** ： 
- `multiprocessing.Pool` 可以管理进程池，简化多进程任务的创建和管理。
### 具体应用案例 
1. **并行计算** ：
使用多进程可以加速 CPU 密集型的任务，例如图像处理、数值计算等。每个进程可以处理不同的数据块或任务，最后合并结果。

```python
import multiprocessing

def process_data(data_chunk):
    # 处理数据的函数
    return processed_result

if __name__ == "__main__":
    data = load_large_data()  # 加载大规模数据
    pool = multiprocessing.Pool()
    results = pool.map(process_data, data)
    pool.close()
    pool.join()
    # 合并处理结果
    final_result = combine_results(results)
``` 
2. **并行爬虫** ：
使用多进程可以加速网络爬虫的数据抓取过程，提高爬取效率和并发能力。

```python
import requests
import multiprocessing

def fetch_url(url):
    response = requests.get(url)
    return response.text

if __name__ == "__main__":
    urls = [...]  # 待爬取的网址列表
    pool = multiprocessing.Pool()
    results = pool.map(fetch_url, urls)
    pool.close()
    pool.join()
    # 处理爬取的数据
    process_results(results)
``` 
3. **并行任务处理** ：
使用多进程可以同时处理多个独立的任务，例如文件处理、数据清洗、批量计算等。

```python
import os
import multiprocessing

def process_file(file_path):
    # 处理单个文件的函数
    process_data(file_path)

if __name__ == "__main__":
    files = os.listdir("data_directory")
    pool = multiprocessing.Pool()
    pool.map(process_file, files)
    pool.close()
    pool.join()
    print("All files processed successfully.")
``` 
4. **分布式计算** ：
使用多进程可以实现分布式计算，将任务分发到多台计算机上进行并行处理，例如使用 `multiprocessing` 结合 `multiprocessing.Manager` 来实现分布式的队列、共享内存等功能。

以上是一些多进程在 Python 中的具体应用案例，通过合理使用多进程技术，可以有效提高程序的性能和效率，尤其适用于需要并行处理大量数据或任务的场景。在面试中，了解这些知识点并能结合实际案例进行讲解，可以展示对多进程编程的理解和应用能力。
