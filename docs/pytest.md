
# pytest 帮助文档详解

**pytest [options] [file_or_dir] [file_or_dir] [...]**

- 通用：
    - -k EXPRESSION         仅运行与给定子字符串表达式匹配的测试。表达式是一个Python可计算的表达式，其中所有名称都是子字符串，与测试名称及其父类匹配。例如：-k 'test_method or test_other' 匹配所有测试函数
    和名称包含 'test_method' 或 'test_other' 的类，而 -k 'not test_method' 匹配那些名称中不包含 'test_method' 的。-k 'not test_method and not test_other' 将消除匹配项。此外，关键字也匹配到
    在其 'extra_keyword_matches' 集中包含额外名称的类和函数，以及直接分配给它们名称的函数。匹配是不区分大小写的。
    - -m MARKEXPR           仅运行与给定标记表达式匹配的测试。例如：-m 'mark1 and not mark2'。
    --markers             显示标记（内置的，插件的和每个项目的）。
    - -x, --exitfirst       在第一个错误或失败的测试时立即退出
    - --fixtures, --funcargs
    显示可用的 fixture，按插件出现的顺序排序（带有前导 '_' 的 fixture 仅在 '-v' 时显示）
    - --fixtures-per-test   每个测试显示 fixture
    - --pdb 在错误或 KeyboardInterrupt 上启动交互式 Python 调试器
    - --pdbcls=modulename:classname
    指定一个自定义的交互式 Python 调试器，用于与 --pdb 一起使用。例如：--pdbcls=IPython.terminal.debugger:TerminalPdb
    - --trace   每次运行测试时立即中断
    - --capture=method      每个测试的捕获方法：其中之一 fd|sys|no|tee-sys
    - -s                    --capture=no 的快捷方式
    - --runxfail            报告 xfail 测试的结果，就像它们没有被标记一样
    - --lf, --last-failed   仅重新运行上次运行失败的测试（如果没有失败则全部运行）
    - --ff, --failed-first  运行所有测试，但首先运行最后的失败。这可能会重新排序测试，从而导致重复的 fixture 设置/拆除。
    - --nf, --new-first     首先运行来自新文件的测试，然后按文件 mtime 排序运行其余的测试
    - --cache-show=[CACHESHOW]
    显示缓存内容，不进行收集或测试。可选参数：glob（默认：'*'）。
    - --cache-clear         在测试运行开始时删除所有缓存内容
    - --lfnf={all,none}, --last-failed-no-failures={all,none}
    与 --lf 一起，确定在没有先前（已知）失败或未找到缓存的 lastfailed 数据时是否执行测试。all（默认）再次运行完整的测试套件。none 只发出关于没有已知失败的消息并
    成功退出。
    - --sw, --stepwise      在测试失败时退出，下次从最后一个失败的测试继续
    - --sw-skip, --stepwise-skip
    忽略第一个失败的测试，但在下一个失败的测试上停止。隐式启用 --stepwise。

- Allure
    - --allure-severities=SEVERITIES_SET
    严重性名称的逗号分隔列表。
    只运行这些严重性的测试。
    可能的值有：blocker, critical, normal, minor, trivial。
    - --allure-epics=EPICS_SET
    史诗名称的逗号分隔列表。
    运行至少有指定的功能标签之一的测试。
    - --allure-features=FEATURES_SET
    功能名称的逗号分隔列表。
    运行至少有指定的功能标签之一的测试。
    - --allure-stories=STORIES_SET
    故事名称的逗号分隔列表。
    运行至少有指定的故事标签之一的测试。
    - --allure-ids=IDS_SET ID 的逗号分隔列表。
    运行至少有指定的 id 标签之一的测试。
    - --allure-label=LABELS_SET 以 label_name=value1,value2 的格式运行标签列表。"运行至少有指定的标签之一的测试。
    - --allure-link-pattern=LINK_TYPE:LINK_PATTERN 链接类型的 Url 模式。允许在测试中使用短链接，如 'issue-1'。文本将使用 python str.format() 格式化为完整的 url。

- **Report：**
    - --durations=N         显示 N 个最慢的设置/测试持续时间（N=0 表示所有）
    - --durations-min=N     以秒为单位的最小持续时间，以包含在最慢列表中。默认：0.005。
    - -v, --verbose         增加详细程度
    - --no-header           禁用标题
    - --no-summary        禁用摘要
    - -q, --quiet               降低详细程度
    - --verbosity=VERBOSE   设置详细程度。默认：0。
    - -r chars                 显示由 chars 指定的额外测试摘要信息：(f)ailed, (E)rror, (s)kipped, (x)failed, (X)passed, (p)assed, (P)assed with output, (a)ll except passed (p/P), or (A)ll. (w)arnings 默认启用（参见 --disable-warnings），'N' 可用来重置
    列表。 (默认：'fE')。
    - --disable-warnings, --disable-pytest-warnings   禁用警告摘要
    - -l, --showlocals      在 traceback 中显示 locals（默认禁用）
    - --no-showlocals       在 traceback 中隐藏 locals（否定通过 addopts 传递的 --showlocals）
    - --tb=style            Traceback 打印模式（auto/long/short/line/native/no）
    - --show-capture={no,stdout,stderr,log,all} 控制如何在失败的测试上显示捕获的 stdout/stderr/log。默认：all。
    - --full-trace          不要剪切任何 traceback（默认是剪切）
    - --color=color         彩色终端输出（yes/no/auto）
    - --code-highlight={yes,no}
    是否应高亮显示代码（只有在也启用 --color 时才有效）。默认：yes。
    - --pastebin=mode       将 failed|all 信息发送到 [bpaste.net](http://bpaste.net/) pastebin 服务
    - --junit-xml=path      在给定路径创建 junit-xml 样式的报告文件
    - --junit-prefix=str    在 junit-xml 输出中把前缀添加到类名前
    - --old-summary         显示失败的测试而不是单行 traceback
    - --force-sugar         即使不在真正的终端中也强制 pytest-sugar 输出

- **pytest-warnings:**
    - -W PYTHONWARNINGS, --pythonwarnings=PYTHONWARNINGS   设置要报告的警告，参见 Python 自身的 -W 选项
    - --maxfail=num         在第一次 num 失败或错误后退出
    - --strict-config       在解析配置文件的 pytest 部分时遇到的任何警告都会引发错误
    - --strict-markers      在配置文件的 markers 部分中未注册的标记会引发错误
    - --strict              （已弃用） --strict-markers 的别名
    - -c FILE, --config-file=FILE 从 FILE 加载配置，而不是试图定位一个隐式的配置文件。
    - --continue-on-collection-errors 即使发生收集错误也强制执行测试
    - --rootdir=ROOTDIR     为测试定义根目录。可以是相对路径：'root_dir', './root_dir','root_dir/another_dir/'; 绝对路径：'/home/user/root_dir'; 带有变量的路径：'$HOME/root_dir'。

- **Collection:**
    - --collect-only, --co   仅收集测试，不执行它们
    - --pyargs              尝试将所有参数解释为 Python 包
    - --ignore=path         在收集过程中忽略路径（多次允许）
    - --ignore-glob=path    在收集过程中忽略路径模式（多次允许）
    - --deselect=nodeid_prefix 在收集过程中取消选择项目（通过节点 id 前缀）（多次允许）
    - --confcutdir=dir      仅加载与指定目录相关的 [conftest.py](http://conftest.py/) 文件
    - --noconftest          不加载任何 [conftest.py](http://conftest.py/) 文件
    - --keep-duplicates     保留重复的测试
    - --collect-in-virtualenv  不忽略本地虚拟环境目录中的测试
    - --import-mode={prepend,append,importlib} 在导入测试模块和 conftest 文件时，将其添加到 sys.path 的方式。默认：prepend。
    - --doctest-modules     在所有 .py 模块中运行 doctests
    - --doctest-report={none,cdiff,ndiff,udiff,only_first_failure} 选择 doctest 失败时的另一种输出格式
    - --doctest-glob=pat    Doctests 文件匹配模式，默认：test*.txt
    - --doctest-ignore-import-errors  忽略 doctest ImportErrors
    - --doctest-continue-on-failure
    对于给定的 doctest，在第一次失败后继续运行

- **测试会话调试和配置(test session debugging and configuration)**：
    - --basetemp=dir        用于此测试运行的基础临时目录。(警告：如果这个目录存在，它会被删除。)
    - -V, --version         显示 pytest 版本和关于插件的信息。给出两次时，还会显示关于插件的信息。
    - -h, --help            显示帮助消息和配置信息
    - -p name               预先加载给定的插件模块名称或入口点（多次允许）。要避免加载插件，使用 no: 前缀，例如 no:doctest。
    - --trace-config        跟踪 [conftest.py](http://conftest.py/) 文件的考虑因素
    - --debug=[DEBUG_FILE_NAME]
    在此日志文件中存储内部跟踪调试信息。此文件以 'w' 打开并因此被截断，因此需谨慎。默认：pytestdebug.log。
    - -o OVERRIDE_INI, --override-ini=OVERRIDE_INI
    以 "option=value" 样式覆盖 ini 选项，例如 -o xfail_strict=True -o cache_dir=cache。
    - --assert=MODE         控制断言调试工具。
        
        'plain' 不进行任何断言调试。
        
        'rewrite'（默认）在导入测试模块时重写断言语句，以提供断言表达式信息。
        
    - --setup-only          仅设置 fixture，不执行测试
    - --setup-show          在执行测试时显示 fixture 的设置
    - --setup-plan          显示将要执行的 fixture 和测试，但不执行任何内容
- Logging：
    - --log-level=LEVEL     要捕获/显示的消息级别。默认未设置，所以它取决于根/父日志处理程序的有效级别，默认是 "WARNING"。
    - --log-format=LOG_FORMAT                        日志模块使用的日志格式
    - --log-date-format=LOG_DATE_FORMAT     日志模块使用的日志日期格式
    --log-cli-level=LOG_CLI_LEVEL
- 测试报告:
    - --report=path         在指定路径创建html报告文件。
    - --title=path             pytest-testreport生成报告的标题
    - --tester=path          pytest-testreport生成报告的测试人员
    - --desc=path           pytest-testreport生成报告的描述
    - --template=path     pytest-testreport生成报告的模板
- 分布式和子进程测试:
    - -n numprocesses, --numprocesses=numprocesses
    '--dist=load --tx=NUM*popen'的快捷方式。使用'auto'，尝试检测物理CPU数量。使用'logical'，检测逻辑CPU数量。如果找不到物理CPU数量，则回退到逻辑数量。当与--pdb一起使用时，这将为0。
    - --maxprocesses=maxprocesses
    当使用--numprocesses=auto时，限制处理测试的工作人员的最大数量
    - --max-worker-restart=MAXWORKERRESTART
    最大可以重启的工作人员数量（如果设为零则禁用此功能）
    - --dist=distmode       设置分发测试到执行环境的模式。
        - each: 将每个测试发送到所有可用的环境。
        - load: 通过将任何待处理的测试发送到任何可用的环境来进行负载平衡。
        - loadscope: 通过将相同范围的待处理测试组发送到任何可用的环境来进行负载平
        - loadfile: 通过将按文件分组的测试发送到任何可用的环境来进行负载平衡。
        - loadgroup: 类似于load，但将标记为'xdist_group'的测试发送到同一工作人员
        - worksteal: 在任何工作人员用尽测试时，将测试套件分割到可用的环境，然后进行重新平衡。
        （默认）no: 在进程中运行测试，不进行分发。
        - --tx=xspec            添加一个测试执行环境。一些示例: --tx popen//python=python2.5 --tx socket=192.168.1.102:8888 --tx [ssh=user@codespeak.net](mailto:ssh%3Duser@codespeak.net)//chdir=testcache
        - -d                    负载平衡测试。 '--dist=load'的快捷方式
        - --rsyncdir=DIR        将目录添加到同步到远程tx节点的目录。
        - --rsyncignore=GLOB    当同步到远程tx节点时，添加忽略的表达式。
        - --testrunuid=TESTRUNUID
        提供一个在所有工作人员中共享的标识符作为'testrun_uid'固定装置的值，
        如果没有提供，'testrun_uid'在每次测试运行时都会填充一个新的唯一字符串。
        - --maxschedchunk=MAXSCHEDCHUNK
        在--dist=load中一步计划的最大测试数量。将其设置为1将迫使pytest一次发送一个测试到工作人员 - 对于少量的慢测试可能有用。较大的数字将允许调度程序向工作人员提交连续的测试块允许复用装置。如果未设置，则无限制。
        - -f, --looponfail      在子进程中运行测试，等待修改的文件并重新运行失败的测试集，直到所有的都通过。

- **重新运行失败的测试以消除脆弱的失败 re-run failing tests to eliminate flaky failures:**
    
    --only-rerun=ONLY_RERUN
    如果传递，只重新运行匹配提供的正则表达式的错误。多次传递此标志以累积匹配的正则表达式列表
    --reruns=RERUNS       重新运行失败的测试的次数。默认为0。
    --reruns-delay=RERUNS_DELAY
    在重新运行之间添加时间（秒）延迟。
    --rerun-except=RERUN_EXCEPT
    如果传递，除了匹配提供的正则表达式的错误，其他的都重新运行。多次传递此标志以累积匹配的正则表达式列表
    
- **Order:**
    - --indulgent-ordering  要求在其他排序之前应用pytest-order提供的排序顺序，允许其他排序具有优先级
    - --order-scope=ORDER_SCOPE
    定义用于排序的范围。可能的值有：'session'（默认），'module'和'class'。排序只在范围内进行。
    - --order-scope-level=ORDER_SCOPE_LEVEL
    定义给定的目录级别用作排序范围。不能与--order-scope一起使用。该值是一个数字，定义了用作排序范围的目录的层次索引，从0开始到会话范围。
    - --order-group-scope=ORDER_GROUP_SCOPE
    定义用于排序组的范围。可能的值有：'session'（默认），'module'和'class'。排序首先在组内进行，然后在组间进行。
    - --sparse-ordering     如果序数之间有间隙，它们将由无序的测试填充。
    - --order-dependencies  如果设置，pytest-dependency添加的依赖项将按需要排序。
    
- **asyncio:**
    - --asyncio-mode=MODE   'auto' - 插件自动处理所有异步函数
        - 'strict' - 自动处理禁用（如果需要测试不同的异步框架，例如在同一个项目中使用pytest-asyncio和pytest-trio，这将很有用）
- **报告:**
    - --alluredir=DIR       在指定的目录中生成Allure报告（可能不存在）
    - --clean-alluredir     如果存在，清理alluredir文件夹
    - --allure-no-capture   不将pytest捕获的日志/标准输出/标准错误附加到报告
    - --inversion=INVERSION  运行不在测试计划中的测试
- **自定义选项:**
    - --check-max-report=CHECK_MAX_REPORT   报告的最大失败次数
    - --check-max-fail=CHECK_MAX_FAIL                每个测试的最大失败次数
    - --check-max-tb=CHECK_MAX_TB                    每个测试的最大伪回溯数
    - --ignore-unknown-dependency                          忽略结果未知的依赖项
    - --confmark=CONFMARK                                   没有配置标记
    - --login_todo=LOGIN_TODO                              是否执行Chrome账号登录和XSim系统登录
    - --use_debug_address=USE_DEBUG_ADDRESS   是否使用已打开的浏览器

[pytest] 在找到的第一个pytest.ini|tox.ini|setup.cfg|pyproject.toml文件中的ini-options:

markers (linelist):   测试函数的标记
empty_parameter_set_mark (string):
空参数集的默认标记
norecursedirs (args): 避免递归的目录模式
testpaths (args):     在命令行上没有文件或目录时搜索测试的目录
filterwarnings (linelist):
每行指定warnings.filterwarnings的模式。在-W/--pythonwarnings之后处理。
usefixtures (args):   与此项目一起使用的默认装置列表
python_files (args):  Python测试模块发现的Glob样式文件模式
python_classes (args):
Python测试类发现的前缀或glob名称
python_functions (args):
Python测试函数和方法发现的前缀或glob名称
disable_test_id_escaping_and_forfeit_all_rights_to_community_support (bool):
禁用字符串转义非ASCII字符，可能会引发不希望的副作用（风险自负）
console_output_style (string):
控制台输出："classic"，或者带有额外的进度信息（"progress"（百分比）|"count"|"progress-even-when-capture-no"（即使capture=no也强制进行进度））
xfail_strict (bool):  当未明确给出时，xfail标记的strict参数的默认值（默认：False）
tmp_path_retention_count (string):
我们应该保留多少会话的tmp_path目录，根据tmp_path_retention_policy。
tmp_path_retention_policy (string):
控制tmp_path装置创建的目录的保留情况，基于测试结果。（all/failed/none）
enable_assertion_pass_hook (bool):
启用pytest_assertion_pass钩子。确保删除任何先前生成的pyc缓存文件。
junit_suite_name (string):
JUnit报告的测试套件名称
junit_logging (string):
将捕获的日志消息写入JUnit报告：no|log|system-out|system-err|out-err|all其中之一
junit_log_passing_tests (bool):
将通过测试的日志信息捕获到JUnit报告：
junit_duration_report (string):
报告的持续时间：total|call其中之一
junit_family (string):
发出XML的模式：legacy|xunit1|xunit2其中之一
doctest_optionflags (args):
doctests的选项标志
doctest_encoding (string):
doctest文件使用的编码
cache_dir (string):   缓存目录路径
log_level (string):   --log-level的默认值
log_format (string):  --log-format的默认值
log_date_format (string):
--log-date-format的默认值
log_cli (bool):       在测试运行期间启用日志显示（也称为"实时日志"）
log_cli_level (string):
--log-cli-level的默认值
log_cli_format (string):
--log-cli-format的默认值
log_cli_date_format (string):
--log-cli-date-format的默认值
log_file (string):    --log-file的默认值
log_file_level (string):
--log-file-level的默认值
log_file_format (string):
--log-file-format的默认值
log_file_date_format (string):
--log-file-date-format的默认值
log_auto_indent (string):
--log-auto-indent的默认值
pythonpath (paths):   添加路径到sys.path
faulthandler_timeout (string):
如果测试需要超过TIMEOUT秒才能完成，则转储所有线程的回溯
addopts (args):       额外的命令行选项
minversion (string):  最小需要的pytest版本
required_plugins (args):
必须存在的插件，pytest才能运行
automark_dependency (string):
自动将依赖性标记添加到所有测试
rsyncdirs (paths):    远程分布式测试的同步目录列表。
rsyncignore (paths):  忽略同步的glob样式路径列表。
looponfailroots (paths):
检查改变的目录。默认：当前目录。
reruns (string):      重新运行失败的测试的次数。默认为0。
reruns_delay (string):
在重新运行之间添加时间（秒）延迟。
asyncio_mode (string):
--asyncio-mode的默认值

环境变量:
PYTEST_ADDOPTS           额外的命令行选项
PYTEST_PLUGINS           启动时加载的逗号分隔的插件
PYTEST_DISABLE_PLUGIN_AUTOLOAD 设置为禁用插件自动加载
PYTEST_DEBUG             设置为启用pytest内部的调试跟踪

查看可用标记类型：pytest --markers
查看可用装置类型：pytest --fixtures
