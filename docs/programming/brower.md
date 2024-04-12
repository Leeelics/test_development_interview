
主要用来介绍浏览器的相关内容。
### Chrome Driver的下载地址

Chrom的版本在115及其以上到下面这个地址进行下载
https://googlechromelabs.github.io/chrome-for-testing/

## Chrome的 Headless模式

在进行浏览器的测试时，发现在115以上的chrome专门退出了叫做 chrome-headless-shell的一个可执行文件，类似于chrome driver后续想要深入的了解使用这个chrome-headless-shell能不能够有效的提高测试的速度。



# extension

## vimium

Github地址： 

### cheat sheet

操作Tab |	Manipulating tabs
``` bash
<a-s-c> gt K <a-v>
Go one tab right
<a-c> gT J	Go one tab left
g0	Go to the first N-th tab
g$	Go to the last N-th tab
t <a-t>	Create new tabs
yt	Duplicate current tab for N times
x	Close N tabs
X	Restore closed tabs
W	Move tab to next window
<a-p>	Pin or unpin N tabs
<a-m>	Mute or unmute current tab
^	Go to previously-visited tab on current window | 来回切换tab，适合频繁切换的两个窗口
<<	Move tab to the left
>>	Move tab to the right
``` 


# Debug

setTimeout(() => { debugger}, 2000) 可以有效的停止页面，捕捉悬浮和短暂下拉的是元素。