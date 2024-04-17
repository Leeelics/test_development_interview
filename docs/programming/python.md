# Python

## 语言特性

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

| \        |  实例方法	|     类方法      |  	静态方法    |
| -------- | ---------- | --------------- | ------------- |
|  a = A() |	a.foo(x)	|  a.class_foo(x)	|a.static_foo(x)|
|    A     | 不可用   	|  A.class_foo(x)	|A.static_foo(x)|

更多关于这个问题:
1. http://stackoverflow.com/questions/136097/what-is-the-difference-between-staticmethod-and-classmethod-in-python
2. https://realpython.com/blog/python/instance-class-and-static-methods-demystified/

## 9 迭代器和生成器
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
