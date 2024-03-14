# tmux

[Github](https://github.com/tmux/tmux)

## 配置 ~/.tmux.conf

先放上一个最常用也是最基本的配置文件，如果有其他特别的需要，再到下面各个问题当中找到配置，自己配置到~/.tmux.conf当中

```bash
# 设置启动键从 Ctrl-b 变为`
set -g prefix `
bind ` send-prefix

#设置在vim copy模式下，按Enter键即可复制所选内容或者鼠标拖拽选定的内容也会复制所选的，再或者使用Ctrl-j也能将所选内容放到复制的缓存当中
bind -T copy-mode-vi Enter send-keys -X copy-pipe-and-cancel "xclip -i -f -selection primary | xclip -i -selection clipboard"
bind -T copy-mode-vi MouseDragEnd1Pane send-keys -X copy-pipe-and-cancel "xclip -i -f -selection primary | xclip -i -selection clipboard"
bind -T copy-mode-vi C-j send-keys -X copy-pipe-and-cancel "xclip -i -f -selection primary | xclip -i -selection clipboard"

# 定义在复制模式下，按下“v”字符开始选取待复制内容
bind-key -T copy-mode-vi v send-keys -X  begin-selection
bind-key -T copy-mode-vi y send-keys -X  copy-selection
bind p paste-buffer

bind-key k select-pane -U
bind-key j select-pane -D
bind-key h select-pane -L
bind-key l select-pane -R

set -g default-terminal 'screen-256color'
set -g history-limit 10000
set -g status-fg green
set -g status-bg black
set-option -g mouse on
setw -g mode-keys vi

bind - split-window -c "#{pane_current_path}"
bind | split-window -v "#{pane_current_path}"

```

## 常见问题

1. 设置window从1开始，而不是从1开始

```bash
set -g base-index 1
setw -g pane-base-index 1
 
```


#### CHANGES FROM 3.3a to 3.4
从 3.3a 到 3.4 的变化
* Add options keep-last and keep-group to destroy-unattached to keep the last
  session whether in a group.
* 添加选项 keep-last 和 keep-group 到 destroy-unattach 以保留最后一个会话是否在组中。
* Don't allow paste-buffer into dead panes.
* 不允许将缓冲区粘贴到死窗格中。
* Add -t to source-file.
* 将 -t 添加到源文件。
* Rewrite combined character handling to be more consistent and to support
  newer Unicode combined characters.
* 重写组合字符处理，使其更加一致并支持更新的 Unicode 组合字符。
* Add basic support for SIXEL if built with --enable-sixel.
* 如果使用 --enable-sixel 构建，则添加对 SIXEL 的基本支持。
* Add a session, pane and user mouse range types for the status line and add
  format variables for mouse_status_line and mouse_status_range so they can be
  associated with different commands in the key bindings.
* 为状态行添加会话、窗格和用户鼠标范围类型，并为 mouse_status_line 和 mouse_status_range 添加格式变量，以便它们可以与键绑定中的不同命令关联。
* Add flag (-o) to next-prompt/previous-prompt to go to OSC 133 command output.
* 将标志 (-o) 添加到下一个提示/上一个提示以转到 OSC 133 命令输出。
* Add options and flags for menu styles (menu-style, menu-border-style) similar
  to those existing for popups.
* 添加菜单样式（菜单样式、菜单边框样式）的选项和标志，类似于现有的弹出窗口。
* Add support for marking lines with a shell prompt based on the OSC 133 extension.
* 添加对基于 OSC 133 扩展的 shell 提示符标记行的支持。
* Check for libterminfo for NetBSD.
* 检查 NetBSD 的 libterminfo。
* Add "us" to styles for underscore colour.
* 将“us”添加到下划线颜色的样式中。
* Add flags (-c and -y) to change the confirm key and default behaviour of
  confirm-before.
* 添加标志（-c 和 -y）来更改确认键和确认之前的默认行为。
* Use ncurses' new tparm_s function (added in 6.4-20230424) instead of tparm so
  it does not object to string arguments in c apabilities it doesn't already
  know. Also ignore errors from tparm if using previous ncurses versions.
* 使用 ncurses 的新 tparm_s 函数（在 6.4-20230424 中添加）而不是 tparm，因此它不会反对它尚不知道的 c 功能中的字符串参数。如果使用以前的 ncurses 版本，也请忽略来自 tparm 的错误。
* Set default lock command to vlock on Linux if present at build time.
* 如果构建时存在，则在 Linux 上将默认锁定命令设置为 vlock。
* Discard mouse sequences that have the right form but actually are invalid.
* 丢弃具有正确形式但实际上无效的鼠标序列。
* Add support for spawning panes in separate cgroups with systemd and a
  configure flag (--disable-cgroups) to turn off.
* 使用 systemd 添加对在单独的 cgroup 中生成窗格的支持，并使用配置标志 (--disable-cgroups) 关闭。
* Add a format (pane_unseen_changes) to show if there are unseen changes while
  in a mode.
* 添加格式 (pane_unseen_changes) 以显示在某种模式下是否存在未见的更改。
* Remove old buffer when renaming rather than complaining.
* 重命名时删除旧缓冲区而不是抱怨。
* Add an L modifier like P, W, S to loop over clients.
* 添加 L 修饰符（如 P、W、S）以循环客户端。
* Add -f to list-clients like the other list commands.
* 像其他列表命令一样将 -f 添加到列表客户端。
* Extend display-message to work for control clients.
* 扩展显示消息以适用于控制客户端。
* Add a flag to display-menu to select the manu item selected when the menu is
  open.
* 在显示菜单中添加一个标志，以选择菜单打开时选择的菜单项。
* Have tmux recognise pasted text wrapped in bracket paste sequences, rather
  than only forwarding them to the program inside.
* 让 tmux 识别包裹在括号粘贴序列中的粘贴文本，而不是仅将它们转发到内部的程序。
* Have client return 1 if process is interrupted to an input pane.
* 如果进程被输入窗格中断，则让客户端返回 1。
* Query the client terminal for foreground and background colours and if OSC 10
  or 11 is received but no colour has been set inside tmux, return the colour
  from the first attached client.
* 查询客户端的前景色和背景色，如果收到 OSC 10 或 11，但 tmux 内尚未设置颜色，则返回第一个连接的客户端的颜色。
* Add send-keys -K to handle keys directly as if typed (so look up in key
  table).
* 添加 send-keys -K 来直接处理按键，就像键入一样（因此在按键表中查找）。
* Process escape sequences in show-buffer.
* 处理显示缓冲区中的转义序列。
* Add a -l flag to display-message to disable format expansion.
* 在显示消息中添加 -l 标志以禁用格式扩展。
* Add paste-buffer-deleted notification and fix name of paste-buffer-changed.
* 添加粘贴缓冲区删除通知并修复粘贴缓冲区更改的名称。
* Do not attempt to connect to the socket as a client if systemd is active.
* 如果 systemd 处于活动状态，请勿尝试作为客户端连接到套接字。
* Add scroll-top and scroll-bottom commands to scroll so cursor is at top or
  bottom.
* 添加scroll-top和scroll-bottom命令来滚动，使光标位于顶部或底部。
* Add a -T flag to capture-pane to stop at the last used cell instead of the
  full width. Restore the previous behaviour by making it default to off unless
  -J is used.
* 在捕获窗格中添加 -T 标志以停止在最后使用的单元格而不是全宽。除非使用 -J，否则将其默认设置为关闭以恢复以前的行为。
* Add message-line option to control where message and prompt go.
* 添加消息行选项来控制消息和提示的去向。
* Notification when a when a paste buffer is deleted.
* 删除粘贴缓冲区时发出通知。
* Add a Nobr terminfo(5) capability to tell tmux the terminal does not use bright
  colours for bold.
* 添加 Nobr terminfo(5) 功能来告诉 tmux 终端不使用明亮的颜色作为粗体。
* Change g and G to go to top and bottom in menus.
* 更改 g 和 G 以转到菜单的顶部和底部。
* Add a third state "all" to allow-passthrough to work even in invisible panes.
* 添加第三个状态“全部”，以允许直通即使在不可见的窗格中也能工作。
* Add support for OSC 8 hyperlinks.
* 添加对 OSC 8 超链接的支持。
* Store the time lines are scrolled into history and display in copy mode.
* 存储时间线滚动到历史记录并以复制模式显示。
* Add a %config-error reply to control mode for configuration file errors since
  reporting them in view mode is useless.
* 为配置文件错误添加一个%config-error回复到控制模式，因为在查看模式下报告这些错误是没有用的。
* A new feature flag (ignorefkeys) to ignore terminfo(5) function key
  definitions for rxvt.
* 一个新的功能标志 (ignorefkeys)，用于忽略 rxvt 的 terminfo(5) 功能键定义。
* Pass through first argument to OSC 52 (which clipboards to set) if the
  application provides it.
* 如果应用程序提供了第一个参数，则将其传递给 OSC 52（要设置的剪贴板）。
* Expand arguments to send-keys, capture-pane, split-window, join-pane where it
  makes sense to do so.
* 在有意义的地方将参数扩展为发送键、捕获窗格、分割窗口、连接窗格。
* Ignore named buffers when choosing a buffer if one is not specified by the user.
* 如果用户未指定缓冲区，则在选择缓冲区时忽略命名缓冲区。
CHANGES FROM 3.3 TO 3.3a
从 3.3 到 3.3a 的变化
* Do not crash when run-shell produces output from a config file.
* 当 run-shell 从配置文件生成输出时不要崩溃。
* Do not unintentionally turn off all mouse mode when button mode is also
  present.
* 当按钮模式也存在时，不要无意中关闭所有鼠标模式。
CHANGES FROM 3.2a TO 3.3
从 3.2a 到 3.3 的变化
* Add an ACL list for users connecting to the tmux socket. Users may be
  forbidden from attaching, forced to attach read-only, or allowed to attach
  read-write. A new command, server-access, configures the list. File system
  permissions must still be configured manually.
* 为连接到 tmux 套接字的用户添加 ACL 列表。可能会禁止用户附加、强制附加只读或允许附加读写。新命令 server-access 可配置该列表。文件系统权限仍必须手动配置。
* Emit window-layout-changed on swap-pane.
* 在交换窗格上发出窗口布局更改。
* Better error reporting when applying custom layouts.
* 应用自定义布局时更好的错误报告。
* Handle ANSI escape sequences in run-shell output.
* 处理运行 shell 输出中的 ANSI 转义序列。
* Add pane_start_path to match start_command.
* 添加pane_start_path以匹配start_command。
* Set PWD so shells have a hint about the real path.
* 设置 PWD，以便 shell 获得有关真实路径的提示。
* Do not allow pipe-pane on dead panes.
* 请勿将管道玻璃放在死玻璃上。
* Do not report mouse positions (incorrectly) above the maximum of 223 in
  normal mouse mode.
* 在正常鼠标模式下，请勿报告高于最大值 223 的鼠标位置（错误）。
* Add an option (default off) to control the passthrough escape sequence.
* 添加一个选项（默认关闭）来控制直通转义序列。
* Support more mouse buttons when the terminal sends them.
* 终端发送时支持更多鼠标按键。
* Add a window-resized hook which is fired when the window is actually resized
  which may be later than the client resize.
* 添加一个窗口调整大小钩子，当窗口实际调整大小时触发，这可能晚于客户端调整大小。
* Add next_session_id format with the next session ID.
* 添加 next_session_id 格式和下一个会话 ID。
* Add formats for client and server UID and user.
* 添加客户端和服务器 UID 以及用户的格式。
* Add argument to refresh-client -l to forward clipboard to a pane.
* 向refresh-client -l 添加参数以将剪贴板转发到窗格。
* Add remain-on-exit-format to set text shown when pane is dead.
* 添加 keep-on-exit-format 以设置窗格死机时显示的文本。
* With split-window -f use percentages of window size not pane size.
* 对于 split-window -f，使用窗口大小的百分比而不是窗格大小。
* Add an option (fill-character) to set the character used for unused areas of
  a client.
* 添加一个选项（fill-character）来设置客户端未使用区域使用的字符。
* Add an option (scroll-on-clear) to control if tmux scrolls into history on
  clear.
* 添加一个选项（scroll-on-clear）来控制 tmux 是否在清除时滚动到历史记录中。
* Add a capability for OSC 7 and use it similarly to how the title is set (and
  controlled by the same set-titles option).
* 添加 OSC 7 的功能，并以类似于标题设置的方式使用它（并由相同的 set-titles 选项控制）。
* Add support for systemd socket activation (where systemd creates the Unix
  domain socket for tmux rather than tmux creating it). Build with
  --enable-systemd.
* 添加对 systemd 套接字激活的支持（其中 systemd 为 tmux 创建 Unix 域套接字，而不是 tmux 创建它）。使用 --enable-systemd 构建。
* Add an option (pane-border-indicators) to select how the active pane is shown
  on the pane border (colour, arrows or both).
* 添加一个选项（窗格边框指示器）来选择活动窗格在窗格边框上的显示方式（颜色、箭头或两者）。
* Support underscore styles with capture-pane -e.
* 使用 capture-pane -e 支持下划线样式。
* Make pane-border-format a pane option rather than window.
* 使pane-border-format成为一个pane选项而不是window。
* Respond to OSC 4 queries
* 回复 OSC 4 查询
* Fix g/G keys in modes to do the same thing as copy mode (and vi).
* 修复模式中的 g/G 键，以执行与复制模式（和 vi）相同的操作。
* Bump the time terminals have to respond to device attributes queries to three
  seconds.
* 将终​​端响应设备属性查询的时间缩短至三秒。
* If automatic-rename is off, allow the rename escape sequence to set an empty
  name.
* 如果自动重命名关闭，则允许重命名转义序列设置空名称。
* Trim menu item text more intelligently.
* 更智能地修剪菜单项文本。
* Add cursor-style and cursor-colour options to set the default cursor style
  and colour.
* 添加光标样式和光标颜色选项以设置默认光标样式和颜色。
* Accept some useful and non-conflicting emacs keys in vi normal mode at the
  command prompt.
* 在命令提示符下的 vi 正常模式下接受一些有用且不冲突的 emacs 键。
* Add a format modifier (c) to force a colour to RGB.
* 添加格式修饰符 (c) 以强制颜色为 RGB。
* Add -s and -S to display-popup to set styles, -b to set lines and -T to set
  popup title. New popup-border-lines, popup-border-style and popup-style
  options set the defaults.
* 在显示弹出窗口中添加 -s 和 -S 以设置样式， -b 以设置行， -T 以设置弹出窗口标题。新的 popup-border-lines、popup-border-style 和 popup-style 选项设置默认值。
* Add -e flag to set an environment variable for a popup.
* 添加 -e 标志来设置弹出窗口的环境变量。
* Make send-keys without arguments send the key it is bound to (if bound to a
  key).
* 使不带参数的发送键发送它所绑定的键（如果绑定到一个键）。
* Try to leave terminal cursor at the right position even when tmux is drawing
  its own cursor or selection (such as at the command prompt and in choose
  mode) for people using screen readers and similar which can make use of it.
* 即使 tmux 正在绘制自己的光标或选择（例如在命令提示符和选择模式下），也请尝试将终端光标保留在正确的位置，以便使用屏幕阅读器和类似功能的用户可以使用它。
* Change so that {} is converted to tmux commands immediately when parsed. This
  means it must contain valid tmux commands. For commands which expand %% and
  %%%, this now only happens within string arguments. Use of nested aliases
  inside {} is now forbidden. Processing of commands given in quotes remains
  the same.
* 进行更改，以便在解析时立即将 {} 转换为 tmux 命令。这意味着它必须包含有效的 tmux 命令。对于扩展 %% 和 %%% 的命令，现在这只发生在字符串参数中。现在禁止在 {} 内使用嵌套别名。引号中给出的命令的处理保持不变。
* Disable evports on SunOS since they are broken.
* 在 SunOS 上禁用 evport，因为它们已损坏。
* Do not expand the file given with tmux -f so it can contain :s.
* 不要扩展 tmux -f 给出的文件，以便它可以包含 :s。
* Bump FORMAT_LOOP_LIMIT and add a log message when hit.
* 碰撞 FORMAT_LOOP_LIMIT 并在命中时添加日志消息。
* Add a terminal feature for the mouse (since FreeBSD termcap does not have kmous).
* 添加鼠标终端功能（因为 FreeBSD termcap 没有 km​​ous）。
* Forbid empty session names.
* 禁止空会话名称。
* Improve error reporting when the tmux /tmp directory cannot be created or
  used.
* 改进无法创建或使用 tmux /tmp 目录时的错误报告。
* Give #() commands a one second grace period where the output is empty before
  telling the user they aren't doing anything ("not ready").
* 在告诉用户他们没有做任何事情（“未准备好”）之前，给 #() 命令一个一秒的宽限期，其中输出为空。
* When building, pick default-terminal from the first of tmux-256color, tmux,
  screen-256color, screen that is available on the build system (--with-TERM
  can override).
* 构建时，从构建系统上可用的 tmux-256color、tmux、screen-256color、screen 中的第一个中选择默认终端（--with-TERM 可以覆盖）。
* Do not close popups on resize, instead adjust them to fit.
* 调整大小时不要关闭弹出窗口，而是调整它们以适应。
* Add a client-active hook.
* 添加客户端主动钩子。
* Make window-linked and window-unlinked window options.
* 制作窗口链接和窗口非链接的窗口选项。
* Do not configure on macOS without the user making a choice about utf8proc
  (either --enable-utf8proc or --disable-utf8proc).
* 如果用户没有选择 utf8proc（--enable-utf8proc 或 --disable-utf8proc），请勿在 macOS 上进行配置。
* Do not freeze output in panes when a popup is open, let them continue to
  redraw.
* 当弹出窗口打开时，不要冻结窗格中的输出，让它们继续重绘。
* Add pipe variants of the line copy commands.
* 添加行复制命令的管道变体。
* Change copy-line and copy-end-of-line not to cancel and add -and-cancel
  variants, like the other copy commands.
* 更改 copy-line 和 copy-end-of-line 不取消并添加 -and-cancel 变体，就像其他复制命令一样。
* Support the OSC palette-setting sequences in popups.
* 支持弹出窗口中的 OSC 调色板设置序列。
* Add a pane-colours array option to specify the defaults palette.
* 添加窗格颜色数组选项来指定默认调色板。
* Add support for Unicode zero-width joiner.
* 添加对 Unicode 零宽度连接符的支持。
* Make newline a style delimiter as well so they can cross multiple lines for
  readability in configuration files.
* 将换行符也设置为样式分隔符，以便它们可以跨多行以提高配置文件的可读性。
* Change focus to be driven by events rather than scanning panes so the
  ordering of in and out is consistent.
* 将焦点更改为由事件驱动，而不是由扫描窗格驱动，以便进出顺序保持一致。
* Add display-popup -B to open a popup without a border.
* 添加display-popup -B 以打开无边框的弹出窗口。
* Add a menu for popups that can be opened with button three outside the popup
  or on the left or top border. Resizing now only works on the right and bottom
  borders or when using Meta. The menu allows a popup to be closed, expanded to
  the full size of the client, centered in the client or changed into a pane.
* 为弹出窗口添加一个菜单，可以使用弹出窗口外部或左侧或顶部边框上的按钮 3 打开该菜单。现在调整大小仅适用于右边框和下边框或使用 Meta 时。该菜单允许关闭弹出窗口、扩展到客户端的完整大小、在客户端中居中或更改为窗格。
* Make command-prompt and confirm-before block by default (like run-shell). A
  new -b flags runs them in the background as before. Also set return code for
  confirm-before.
* 默认设置命令提示符和确认前块（如 run-shell）。新的 -b 标志像以前一样在后台运行它们。还要设置confirm-before的返回码。
* Change cursor style handling so tmux understands which sequences contain
  blinking and sets the flag appropriately, means that it works whether cnorm
  disables blinking or not. This now matches xterm's behaviour.
* 更改光标样式处理，以便 tmux 了解哪些序列包含闪烁并适当设置标志，这意味着无论 cnorm 是否禁用闪烁，它都可以工作。这现在与 xterm 的行为相匹配。
* More accurate vi(1) word navigation in copy mode and on the status line. This
  changes the meaning of the word-separators option: setting it to the empty
  string is equivalent to the previous behavior.
* 复制模式下和状态行上的 vi(1) 单词导航更加准确。这改变了单词分隔符选项的含义：将其设置为空字符串与之前的行为等效。
* Add -F for command-prompt and use it to fix "Rename" on the window menu.
* 添加 -F 命令提示符并用它来修复窗口菜单上的“重命名”。
* Add different command histories for different types of prompts ("command",
  "search" etc).
* 为不同类型的提示（“命令”、“搜索”等）添加不同的命令历史记录。

#### CHANGES FROM 3.2 TO 3.2a
从 3.2 到 3.2a 的变化
* Add an "always" value for the "extended-keys" option; if set then tmux will
  forward extended keys to applications even if they do not request them.
* 为“extended-keys”选项添加“always”值；如果设置，那么 tmux 会将扩展密钥转发给应用程序，即使它们不请求它们。
* Add a "mouse" terminal feature so tmux can enable the mouse on terminals
  where it is known to be supported even if terminfo(5) says otherwise.
* 添加“鼠标”终端功能，以便 tmux 可以在已知支持的终端上启用鼠标，即使 terminfo(5) 另有说明。
* Do not expand the filename given to -f so it can contain colons.
* 不要扩展给定 -f 的文件名，以便它可以包含冒号。
* Fixes for problems with extended keys and modifiers, scroll region,
  source-file, crosscompiling, format modifiers and other minor issues.
* 修复了扩展键和修饰符、滚动区域、源文件、交叉编译、格式修饰符和其他小问题的问题。

#### CHANGES FROM 3.1c TO 3.2
从 3.1c 到 3.2 的变化
* Add a flag to disable keys to close a message.
* 添加一个标志以禁用按键来关闭消息。
* Permit shortcut keys in buffer, client, tree modes to be configured with a
  format (-K flag to choose-buffer, choose-client, choose-tree).
* 允许缓冲区、客户端、树模式中的快捷键配置格式（-K 标志选择缓冲区、选择客户端、选择树）。
* Add a current_file format for the config file being parsed.
* 为正在解析的配置文件添加 current_file 格式。
* When display-message used in config file, show the message after the config
  file finishes.
* 当配置文件中使用display-message时，配置文件完成后显示消息。
* Add client-detached notification in control mode.
* 在控制模式下添加客户端分离通知。
* Improve performance of format evaluation.
* 提高格式评估的性能。
* Make jump command support UTF-8 in copy mode.
* 使跳转命令在复制模式下支持UTF-8。
* Support X11 colour names and other colour formats for OSC 10 and 11.
* 支持 OSC 10 和 11 的 X11 颜色名称和其他颜色格式。
* Add "pipe" variants of "copy-pipe" commands which do not copy.
* 添加不复制的“copy-pipe”命令的“pipe”变体。
* Include "focused" in client flags.
* 在客户端标志中包含“集中”。
* Send Unicode directional isolate characters around horizontal pane borders if
  the terminal supports UTF-8 and an extension terminfo(5) capability "Bidi" is
  present.
* 如果终端支持 UTF-8 并且存在扩展 terminfo(5) 功能“Bidi”，则在水平窗格边框周围发送 Unicode 定向隔离字符。
* Add a -S flag to new-window to make it select the existing window if one
  with the given name already exists rather than failing with an error.
* 向 new-window 添加一个 -S 标志，使其在给定名称的窗口已存在时选择现有窗口，而不是因错误而失败。
* Add a format modifier to check if a window or session name exists (N/w or
  N/s).
* 添加格式修饰符以检查窗口或会话名称是否存在（N/w 或 N/s）。
* Add compat clock_gettime for older macOS.
* 为旧版 macOS 添加兼容的clock_gettime。
* Add a no-detached choice to detach-on-destroy which detaches only if there
  are no other detached sessions to switch to.
* 为 detach-on-destroy 添加一个不分离的选项，只有在没有其他分离会话可以切换时才会分离。
* Add rectangle-on and rectangle-off copy mode commands.
* 添加矩形打开和矩形关闭复制模式命令。
* Change so that window_flags escapes # automatically. A new format
  window_raw_flags contains the old unescaped version.
* 更改以便 window_flags 自动转义。新格式 window_raw_flags 包含旧的未转义版本。
* Add -N flag to never start server even if command would normally do so.
* 添加 -N 标志以永远不启动服务器，即使命令通常会这样做。
* With incremental search, start empty and only repeat the previous search if
  the user tries to search again with an empty prompt.
* 使用增量搜索，从空开始，仅当用户尝试使用空提示再次搜索时才重复先前的搜索。
* Add a value for remain-on-exit that only keeps the pane if the program
  failed.
* 添加退出时保留的值，仅在程序失败时保留窗格。
* Add a -C flag to run-shell to use a tmux command rather than a shell command.
* 将 -C 标志添加到 run-shell 以使用 tmux 命令而不是 shell 命令。
* Do not list user options with show-hooks.
* 不要用 show-hooks 列出用户选项。
* Remove current match indicator in copy mode which can't work anymore since we
  only search the visible region.
* 删除复制模式下的当前匹配指示器，该指示器不再起作用，因为我们只搜索可见区域。
* Make synchronize-panes a pane option and add -U flag to set-option to unset
  an option on all panes.
* 使同步窗格成为窗格选项，并将 -U 标志添加到 set-option 以取消设置所有窗格上的选项。
* Make replacement of ##s consistent when drawing formats, whether followed by
  [ or not. Add a flag (e) to the q: format modifier to double up #s.
* 绘制格式时##的替换保持一致，无论后面是否带[。将标志 (e) 添加到 q: 格式修饰符以将 #s 加倍。
* Add -N flag to display-panes to ignore keys.
* 将 -N 标志添加到显示窗格以忽略按键。
* Change how escaping is processed for formats so that ## and # can be used in
  styles.
* 更改格式的转义处理方式，以便 ## 和 # 可以在样式中使用。
* Add a 'w' format modifier for string width.
* 为字符串宽度添加“w”格式修饰符。
* Add support for Haiku.
* 添加对俳句的支持。
* Expand menu and popup -x and -y as formats.
* 展开菜单并弹出 -x 和 -y 作为格式。
* Add numeric comparisons for formats.
* 添加格式的数字比较。
* Fire focus events even when the pane is in a mode.
* 即使窗格处于某种模式，也会触发焦点事件。
* Add -O flag to display-menu to not automatically close when all mouse buttons
  are released.
* 将 -O 标志添加到显示菜单，以便在释放所有鼠标按钮时不会自动关闭。
* Allow fnmatch(3) wildcards in update-environment.
* 允许在更新环境中使用 fnmatch(3) 通配符。
* Disable nested job expansion so that the result of #() is not expanded again.
* 禁用嵌套作业扩展，以便 #() 的结果不会再次扩展。
* Use the setal capability as well as (tmux's) Setulc.
* 使用 setal 功能以及（tmux 的）Setulc。
* Add -q flag to unbind-key to hide errors.
* 将 -q 标志添加到 unbind-key 以隐藏错误。
* Allow -N without a command to change or add a note to an existing key.
* 允许 -N 不带命令来更改现有键或向现有键添加注释。
* Add a -w flag to set- and load-buffer to send to clipboard using OSC 52.
* 添加 -w 标志来设置和加载缓冲区以使用 OSC 52 发送到剪贴板。
* Add -F to set-environment and source-file.
* 添加 -F 到设置环境和源文件。
* Allow colour to be spelt as color in various places.
* 允许颜色在不同的地方被拼写为颜色。
* Add n: modifier to get length of a format.
* 添加 n: 修饰符以获取格式的长度。
* Respond to OSC colour requests if a colour is available.
* 如果有可用颜色，请响应 OSC 颜色请求。
* Add a -d option to display-message to set delay.
* 在显示消息中添加 -d 选项以设置延迟。
* Add a way for control mode clients to subscribe to a format and be notified
  of changes rather than having to poll.
* 添加一种方法，让控制模式客户端订阅格式并收到更改通知，而不必进行轮询。
* Add some formats for search in copy mode (search_present, search_match).
* 添加一些复制模式下的搜索格式（search_present、search_match）。
* Do not wait on shutdown for commands started with run -b.
* 对于以 run -b 启动的命令，不要等待关闭。
* Add -b flags to insert a window before (like the existing -a for after) to
  break-pane, move-window, new-window.
* 添加 -b 标志以在之前插入一个窗口（就像现有的 -a 一样）到打破窗格、移动窗口、新窗口。
* Make paste -p the default for ].
* 将paste -p 设置为] 的默认值。
* Add support for pausing a pane when the output buffered for a control mode
  client gets too far behind. The pause-after flag with a time is set on the
  pane with refresh-client -f and a paused pane may be resumed with
  refresh-client -A.
* 添加对在控制模式客户端缓冲的输出落后太多时暂停窗格的支持。使用refresh-client -f 在窗格上设置带有时间的暂停后标志，并且可以使用refresh-client -A 恢复暂停的窗格。
* Allow strings in configuration files to span multiple lines - newlines and
  any leading whitespace are removed, as well as any following comments that
  couldn't be part of a format. This allows long formats or other strings to be
  annotated and indented.
* 允许配置文件中的字符串跨越多行 - 换行符和任何前导空格都将被删除，以及任何后续不能成为格式一部分的注释。这允许对长格式或其他字符串进行注释和缩进。
* Instead of using a custom parse function to process {} in configuration
  files, treat as a set of statements the same as outside {} and convert back
  to a string as the last step. This means the rules are consistent inside and
  outside {}, %if and friends work at the right time, and the final result
  isn't littered with unnecessary newlines.
* 不要使用自定义解析函数来处理配置文件中的 {}，而是将其视为与外部 {} 相同的一组语句，并在最后一步将其转换回字符串。这意味着 {} 内部和外部的规则是一致的，%if 和朋友在正确的时间工作，并且最终结果不会充斥着不必要的换行符。
* Add support for extended keys - both xterm(1)'s CSI 27 ~ sequence and the
  libtickit CSI u sequence are accepted; only the latter is output. tmux will
  only attempt to use these if the extended-keys option is on and it can detect
  that the terminal outside supports them (or is told it does with the
  "extkeys" terminal feature).
* 添加对扩展密钥的支持 - xterm(1) 的 CSI 27 ~ 序列和 libtickit CSI u 序列均被接受；仅输出后者。仅当扩展键选项打开并且它可以检测到外部终端支持它们（或者被告知它使用“extkeys”终端功能）时，tmux 才会尝试使用这些。
* Add an option to set the pane border lines style from a choice of single
  lines (ACS or UTF-8), double or heavy (UTF-8), simple (plain ASCII) or number
  (the pane numbers). Lines that won't work on a non-UTF-8 terminal are
  translated back into ACS when they are output.
* 添加一个选项来设置窗格边框线样式，可以选择单线（ACS 或 UTF-8）、双线或重线（UTF-8）、简单（纯 ASCII）或数字（窗格编号）。在非 UTF-8 终端上不起作用的行在输出时会被转换回 ACS。
* Make focus events update the latest client (like a key press).
* 使焦点事件更新到最新的客户端（如按键）。
* Store UTF-8 characters differently to reduce memory use.
* 以不同方式存储 UTF-8 字符以减少内存使用。
* Fix break-pane -n when only one pane in the window.
* 修复窗口中只有一个窗格时的“break-pane -n​​”问题。
* Instead of sending all data to control mode clients as fast as possible, add
  a limit of how much data will be sent to the client and try to use it for
  panes with some degree of fairness.
* 不要尽快将所有数据发送到控制模式客户端，而是添加发送到客户端的数据量限制，并尝试将其用于具有一定公平性的窗格。
* Add an active-pane client flag (set with attach-session -f, new-session -f
  or refresh-client -f). This allows a client to have an independent active
  pane for interactive use (the window client pane is still used for many
  things however).
* 添加活动窗格客户端标志（使用attach-session -f、new-session -f 或refresh-client -f 设置）。这允许客户端拥有一个独立的活动窗格以供交互使用（但是窗口客户端窗格仍然用于许多事情）。
* Add a mark to copy mode, this is set with the set-mark command (bound to X)
  and appears with the entire line shown using copy-mode-mark-style and the
  marked character in reverse. The jump-to-mark command (bound to M-x) swaps
  the mark and the cursor positions.
* 将标记添加到复制模式，这是使用 set-mark 命令设置的（绑定到 X），并使用 copy-mode-mark-style 和相反的标记字符显示整行。跳转到标记命令（绑定到 M-x）交换标记和光标位置。
* Add a -D flag to make the tmux server run in the foreground and not as a
  daemon.
* 添加 -D 标志以使 tmux 服务器在前台运行而不是作为守护进程运行。
* Do not loop forever in copy mode when search finds an empty match.
* 当搜索找到空匹配时，不要在复制模式下永远循环。
* Fix the next-matching-bracket logic when using vi(1) keys.
* 修复使用 vi(1) 键时的下一个匹配括号逻辑。
* Add a customize mode where options may be browsed and changed, includes
  adding a brief description of each option. Bound to C-b C by default.
* 添加自定义模式，可以浏览和更改选项，包括添加每个选项的简短说明。默认绑定到 C-b C。
* Change message log (C-b ~) so there is one for the server rather than one per
  client and it remains after detach, and make it useful by logging every
  command.
* 更改消息日志 (C-b ~)，以便服务器有一个消息日志，而不是每个客户端一个，并且在分离后仍然保留，并通过记录每个命令使其有用。
* Add M-+ and M-- to tree mode to expand and collapse all.
* 在树模式中添加M-+和M--以展开和折叠全部。
* Change the existing client flags for control mode to apply for any client,
  use the same mechanism for the read-only flag and add an ignore-size flag.
* 更改控制模式的现有客户端标志以适用于任何客户端，对只读标志使用相同的机制并添加忽略大小标志。
  refresh-client -F has become -f (-F stays for backwards compatibility) and
  attach-session and switch-client now have -f flags also. A new format
  client_flags lists the flags and is shown by list-clients by default.
 fresh-client -F 已变为 -f （-F 保留是为了向后兼容），并且 Attach-session 和 switch-client 现在也有 -f 标志。新格式 client_flags 列出了标​​志，默认情况下由 list-clients 显示。
  This separates the read-only flag from "ignore size" behaviour (new
  ignore-size) flag - both behaviours are useful in different circumstances.
 这将只读标志与“忽略大小”行为（新的忽略大小）标志分开 - 两种行为在不同的情况下都很有用。
  attach -r and switchc -r remain and set or toggle both flags together.
 Attach -r 和 switchc -r 保留并将两个标志设置或切换在一起。
* Store and restore cursor position when copy mode is resized.
* 当复制模式调整大小时存储和恢复光标位置。
* Export TERM_PROGRAM and TERM_PROGRAM_VERSION like various other terminals.
* 像其他各种终端一样导出 TERM_PROGRAM 和 TERM_PROGRAM_VERSION。
* Add formats for after hook command arguments: hook_arguments with all the
  arguments together; hook_argument_0, hook_argument_1 and so on with
  individual arguments; hook_flag_X if flag -X is present; hook_flag_X_0,
  hook_flag_X_1 and so on if -X appears multiple times.
* 添加 hook 命令参数后的格式：hook_arguments 以及所有参数； hook_argument_0、hook_argument_1 等带有单独的参数； hook_flag_X 如果标志 -X 存在；如果 -X 多次出现，则 hook_flag_X_0、hook_flag_X_1 等。
* Try to search the entire history first for up to 200 ms so a search count can
  be shown. If it takes too long, search the visible text only.
* 首先尝试搜索整个历史记录最多 200 毫秒，以便显示搜索计数。如果花费的时间太长，则仅搜索可见文本。
* Use VIS_CSTYLE for paste buffers also (show \012 as \n).
* 也将 VIS_CSTYLE 用于粘贴缓冲区（将 \012 显示为 \n）。
* Change default formats for tree mode, client mode and buffer mode to be more
  compact and remove some clutter.
* 更改树模式、客户端模式和缓冲区模式的默认格式，使其更加紧凑并消除一些混乱。
* Add a key (e) in buffer mode to open the buffer in an editor. The buffer
  contents is updated when the editor exits.
* 在缓冲区模式下添加一个键 (e) 以在编辑器中打开缓冲区。当编辑器退出时，缓冲区内容会更新。
* Add -e flag for new-session to set environment variables, like the same flag
  for new-window.
* 为 new-session 添加 -e 标志来设置环境变量，就像 new-window 的相同标志一样。
* Improve search match marking in copy mode. Two new options
  copy-mode-match-style and copy-mode-current-match-style to set the style for
  matches and for the current match respectively. Also a change so that if a
  copy key is pressed with no selection, the current match (if any) is copied.
* 改进复制模式下的搜索匹配标记。两个新选项 copy-mode-match-style 和 copy-mode-current-match-style 分别用于设置匹配和当前匹配的样式。还有一项更改是，如果在没有选择的情况下按下复制键，则会复制当前匹配项（如果有）。
* Sanitize session names like window names instead of forbidding invalid ones.
* 清理会话名称（如窗口名称），而不是禁止无效名称。
* Check if the clear terminfo(5) capability starts with CSI and if so then
  assume the terminal is VT100-like, rather than relying on the XT capability.
* 检查明确的 terminfo(5) 功能是否以 CSI 开头，如果是，则假设终端与 VT100 类似，而不是依赖 XT 功能。
* Improve command prompt tab completion and add menus both for strings and -t
  and -s (when used without a trailing space). command-prompt has additional
  flags for only completing a window (-W) and a target (-T), allowing C-b ' to
  only show windows and C-b . only targets.
* 改进命令提示符选项卡补全，并为字符串以及 -t 和 -s 添加菜单（当使用时不带尾随空格）。命令提示符具有仅完成窗口 (-W) 和目标 (-T) 的附加标志，允许 C-b ' 仅显示窗口和 C-b 。仅有目标。
* Change all the style options to string options so they can support formats.
  Change pane-active-border-style to use this to change the border colour when
  in a mode or with synchronize-panes on. This also implies a few minor changes
  to existing behaviour:
* 将所有样式选项更改为字符串选项，以便它们可以支持格式。更改pane-active-border-style，以在某种模式下或启用同步窗格时使用它来更改边框颜色。这也意味着对现有行为的一些细微改变：
  - set-option -a with a style option automatically inserts a comma between the
    old value and appended text.
 - set-option -a 带有样式选项会自动在旧值和附加文本之间插入逗号。
  - OSC 10 and 11 no longer set the window-style option, instead they store the
    colour internally in the pane data and it is used as the default when the
    option is evaluated.
 - OSC 10 和 11 不再设置窗口样式选项，而是将颜色内部存储在窗格数据中，并在评估选项时将其用作默认值。
  - status-fg and -bg now override status-style instead of the option values
    being changed.
 - status-fg 和 -bg 现在覆盖 status-style，而不是更改选项值。
* Add extension terminfo(5) capabilities for margins and focus reporting.
* 添加用于利润和焦点报告的扩展 terminfo(5) 功能。
* Try $XDG_CONFIG_HOME/tmux/tmux.conf as well as ~/.config/tmux/tmux.conf for
  configuration file (the search paths are in TMUX_CONF in Makefile.am).
* 尝试使用 $XDG_CONFIG_HOME/tmux/tmux.conf 以及 ~/.config/tmux/tmux.conf 作为配置文件（搜索路径位于 Makefile.am 中的 TMUX_CONF 中）。
* Remove the DSR 1337 iTerm2 extension and replace by the extended device
  attributes sequence (CSI > q) supported by more terminals.
* 删除DSR 1337 iTerm2扩展，替换为更多终端支持的扩展设备属性序列（CSI > q）。
* Add a -s flag to copy-mode to specify a different pane for the source
  content. This means it is possible to view two places in a pane's history at
  the same time in different panes, or view the history while still using the
  pane. Pressing r refreshes the content from the source pane.
* 将 -s 标志添加到复制模式，以为源内容指定不同的窗格。这意味着可以在不同的窗格中同时查看窗格历史记录中的两个位置，或者在仍然使用该窗格的同时查看历史记录。按 r 可刷新源窗格中的内容。
* Add an argument to list-commands to show only a single command.
* 向列表命令添加一个参数以仅显示单个命令。
* Change copy mode to make copy of the pane history so it does not need to
  freeze the pane.
* 更改复制模式以复制窗格历史记录，这样就不需要冻结窗格。
* Restore pane_current_path format from portable tmux on OpenBSD.
* 从 OpenBSD 上的便携式 tmux 恢复 pane_current_path 格式。
* Wait until the initial command sequence is done before sending a device
  attributes request and other bits that prompt a reply from the terminal. This
  means that stray replies are not left on the terminal if the command has
  attached and then immediately detached and tmux will not be around to receive
  them.
* 等待初始命令序列完成，然后再发送设备属性请求和提示终端回复的其他位。这意味着如果命令已附加然后立即分离，则杂散回复不会留在终端上，并且 tmux 将不会接收它们。
* Add a -f filter argument to the list commands like choose-tree.
* 将 -f 过滤器参数添加到列表命令（如选择树）中。
* Move specific hooks for panes to pane options and windows for window options
  rather than all hooks being session options. These hooks are now window options:
* 将窗格的特定挂钩移动到窗格选项，将窗口移动到窗口选项，而不是将所有挂钩移动到会话选项。这些钩子现在是窗口选项：
  window-layout-changed
  window-linked
  window-pane-changed
  window-renamed
  window-unlinked
 窗口布局更改窗口链接窗口窗格更改窗口重命名窗口未链接
  And these are now pane options:
 现在这些是窗格选项：
  pane-died
  pane-exited
  pane-focus-in
  pane-focus-out
  pane-mode-changed
  pane-set-clipboard
 窗格消失 窗格退出 窗格焦点进入窗格 焦点移出窗格模式 更改窗格 设置剪贴板
  Any existing configurations using these hooks on a session rather than
  globally (that is, set-hook or set-option without -g) may need to be changed.
 在会话上而不是全局使用这些挂钩的任何现有配置（即不带 -g 的 set-hook 或 set-option）可能需要更改。
* Show signal names when a process exits with remain-on-exit on platforms which
  have a way to get them.
* 在有办法获取信号的平台上，当进程以退出时保留状态退出时，显示信号名称。
* Start menu with top item selected if no mouse and use mode-style for the
  selected item.
* 如果没有鼠标，则选择顶部项目的开始菜单，并为所选项目使用模式样式。
* Add a copy-command option and change copy-pipe and friends to pipe to it if
  used without arguments, allows all the default copy key bindings to be
  changed to pipe with one option rather than needing to change each key
  binding individually.
* 添加一个复制命令选项，并更改复制管道和朋友在不带参数的情况下通过管道传输到它，允许将所有默认复制键绑定更改为使用一个选项进行管道传输，而不需要单独更改每个键绑定。
* Tidy up the terminal detection and feature code and add named sets of
  terminal features, each of which are defined in one place and map to a
  builtin set of terminfo(5) capabilities. Features can be specified based on
  TERM with a new terminal-features option or with the -T flag when running
  tmux. tmux will also detect a few common terminals from the DA and DSR
  responses.
* 整理终端检测和功能代码并添加命名的终端功能集，每个功能都在一个位置定义并映射到一组内置的 terminfo(5) 功能。可以使用新的终端功能选项或运行 tmux 时使用 -T 标志基于 TERM 指定功能。 tmux 还将从 DA 和 DSR 响应中检测一些公共终端。
  This is intended to make it easier to configure tmux's use of terminfo(5)
  even in the presence of outdated ncurses(3) or terminfo(5) databases or for
  features which do not yet have a terminfo(5) entry. Instead of having to grok
  terminfo(5) capability names and what they should be set to in the
  terminal-overrides option, the user can hopefully just give tmux a feature
  name and let it do the right thing.
 这是为了更轻松地配置 tmux 对 terminfo(5) 的使用，即使存在过时的 ncurses(3) 或 terminfo(5) 数据库或尚未具有 terminfo(5) 条目的功能。用户不必费劲去理解 terminfo(5) 功能名称以及它们应该在终端覆盖选项中设置的内容，而是希望只给 tmux 一个功能名称并让它做正确的事情。
  The terminal-overrides option remains both for backwards compatibility and to
  allow tweaks of individual capabilities.
 保留终端覆盖选项既是为了向后兼容，也是为了允许调整各个功能。
* Support mintty's application escape sequence (means tmux doesn't have to
  delay to wait for Escape, so no need to reduce escape-time when using
  mintty).
* 支持mintty的应用程序转义序列（意味着tmux不必延迟等待Escape，因此使用mintty时无需减少转义时间）。
* Change so main-pane-width and height can be given as a percentage.
* 进行更改，以便主窗格宽度和高度可以以百分比形式给出。
* Support for the iTerm2 synchronized updates feature (allows the terminal to
  avoid unnecessary drawing while output is still in progress).
* 支持iTerm2同步更新功能（允许终端在输出仍在进行时避免不必要的绘图）。
* Make the mouse_word and mouse_line formats work in copy mode and enable the
  default pane menu in copy mode.
* 使 mouse_word 和 mouse_line 格式在复制模式下工作，并在复制模式下启用默认窗格菜单。
* Add a -T flag to resize-pane to trim lines below the cursor, moving lines out
  of the history.
* 添加 -T 标志到调整大小窗格以修剪光标下方的行，将行移出历史记录。
* Add a way to mark environment variables as "hidden" so they can be used by
  tmux (for example in formats) but are not set in the environment for new
  panes. set-environment and show-environment have a new -h flag and there is a
  new %hidden statement for the configuration file.
* 添加一种将环境变量标记为“隐藏”的方法，以便 tmux 可以使用它们（例如在格式中），但不会在新窗格的环境中设置它们。 set-environment 和 show-environment 有一个新的 -h 标志，并且配置文件有一个新的 %hidden 语句。
* Change default position for display-menu -x and -y to centre rather than top
  left.
* 将显示菜单 -x 和 -y 的默认位置更改为居中而不是左上角。
* Add support for per-client transient popups, similar to menus but which are
  connected to an external command (like a pane). These are created with new
  command display-popup.
* 添加对每个客户端瞬时弹出窗口的支持，类似于菜单，但连接到外部命令（如窗格）。这些是使用新命令 display-popup 创建的。
* Change double and triple click bindings so that only one is fired (previously
  double click was fired on the way to triple click). Also add default double
  and triple click bindings to copy the word or line under the cursor and
  change the existing bindings in copy mode to do the same.
* 更改双击和三击绑定，以便仅触发其中一个（之前双击是在三击的过程中触发的）。还添加默认的双击和三次单击绑定来复制光标下的单词或行，并更改复制模式下的现有绑定以执行相同的操作。
* Add a default binding for button 2 to paste.
* 添加按钮 2 粘贴的默认绑定。
* Add -d flag to run-shell to delay before running the command and allow it to
  be used without a command so it just delays.
* 在 run-shell 中添加 -d 标志以在运行命令之前延迟，并允许在没有命令的情况下使用它，因此它只是延迟。
* Add C-g to cancel command prompt with vi keys as well as emacs, and q in
  command mode.
* 添加 C-g 取消 vi 键和 emacs 的命令提示符，以及命令模式下的 q。
* When the server socket is given with -S, create it with umask 177 instead of
  117 (because it may not be in a safe directory like the default directory in
  /tmp).
* 当使用 -S 给定服务器套接字时，使用 umask 177 而不是 117 创建它（因为它可能不像 /tmp 中的默认目录那样位于安全目录中）。
* Add a copy-mode -H flag to hide the position marker in the top right.
* 添加复制模式 -H 标志以隐藏右上角的位置标记。
* Add number operators for formats (+, -, *, / and m),
* 添加格式的数字运算符（+、-、*、/ 和 m），
CHANGED FROM 3.1b TO 3.1c
从 3.1b 更改为 3.1c
* Do not write after the end of the array and overwrite the stack when
  colon-separated SGR sequences contain empty arguments.
* 当冒号分隔的 SGR 序列包含空参数时，不要在数组末尾写入并覆盖堆栈。
CHANGES FROM 3.1a TO 3.1b
从 3.1a 到 3.1b 的变化
* Fix build on systems without sys/queue.h.
* 修复没有 sys/queue.h 的系统上的构建。
* Fix crash when allow-rename is on and an empty name is set.
* 修复允许重命名打开且设置空名称时的崩溃问题。

#### CHANGES FROM 3.1 TO 3.1a
从 3.1 到 3.1a 的变化
* Do not close stdout prematurely in control mode since it is needed to print
  exit messages. Prevents hanging when detaching with iTerm2.
* 不要在控制模式下过早关闭stdout，因为需要打印退出消息。防止与 iTerm2 分离时挂起。

#### CHANGES FROM 3.0a TO 3.1
从 3.0a 到 3.1 的变化
* Only search the visible part of the history when marking (highlighting)
  search terms. This is much faster than searching the whole history and solves
  problems with large histories. The count of matches shown is now the visible
  matches rather than all matches.
* 标记（突出显示）搜索词时仅搜索历史记录的可见部分。这比搜索整个历史要快得多，并且可以解决大历史的问题。显示的匹配项计数现在是可见匹配项，而不是所有匹配项。
* Search using regular expressions in copy mode. search-forward and
  search-backward use regular expressions by default; the incremental versions
  do not.
* 在复制模式下使用正则表达式进行搜索。 search-forward 和 search-backward 默认使用正则表达式；增量版本则不然。
* Turn off mouse mode 1003 as well as the rest when exiting.
* 退出时关闭鼠标模式1003以及其余模式。
* Add selection_active format for when the selection is present but not moving
  with the cursor.
* 添加选择活动格式，用于当选择存在但不随光标移动时。
* Fix dragging with modifier keys, so binding keys such as C-MouseDrag1Pane and
  C-MouseDragEnd1Pane now work.
* 修复了使用修饰键进行拖动的问题，因此 C-MouseDrag1Pane 和 C-MouseDragEnd1Pane 等绑定键现在可以使用。
* Add -a to list-keys to also list keys without notes with -N.
* 将 -a 添加到 list-keys 中，以便也列出不带有 -N 注释的键。
* Do not jump to next word end if already on a word end when selecting a word;
  fixes select-word with single character words and vi(1) keys.
* 选择单词时，如果已经在单词末尾，则不跳转到下一个单词末尾；修复了带有单字符单词和 vi(1) 键的选择单词。
* Fix top and bottom pane calculation with pane border status enabled.
* 修复启用窗格边框状态时的顶部和底部窗格计算。
* Add support for adding a note to a key binding (with bind-key -N) and use
  this to add descriptions to the default key bindings. A new -N flag to
  list-keys shows key bindings with notes. Change the default ? binding to use
  this to show a readable summary of keys. Also extend command-prompt to return
  the name of the key pressed and add a default binding (/) to show the note
  for the next key pressed.
* 添加对向键绑定添加注释的支持（使用bind-key -N），并使用它向默认键绑定添加描述。 list-keys 的新 -N 标志显示带有注释的键绑定。更改默认值？绑定以使用它来显示密钥的可读摘要。还可以扩展命令提示符以返回按下的键的名称，并添加默认绑定 (/) 以显示下一个按下的键的注释。
* Add support for the iTerm2 DSR 1337 sequence to get the terminal version.
* 添加对 iTerm2 DSR 1337 序列的支持以获取终端版本。
* Treat plausible but invalid keys (like C-BSpace) as literal like any other
  unrecognised string passed to send-keys.
* 将看似合理但无效的键（如 C-BSpace）视为文字，就像传递给发送键的任何其他无法识别的字符串一样。
* Detect iTerm2 and enable use of DECSLRM (much faster with horizontally split
  windows).
* 检测 iTerm2 并启用 DECSLRM（水平分割窗口速度更快）。
* Add -Z to default switch-client command in tree mode.
* 在树模式下将 -Z 添加到默认 switch-client 命令。
* Add ~ to quoted characters for %%%.
* 将 ~ 添加到 %%% 的引号字符中。
* Document client exit messages in the manual page.
* 在手册页中记录客户端退出消息。
* Do not let read-only clients limit the size, unless all clients are
  read-only.
* 不要让只读客户端限制大小，除非所有客户端都是只读的。
* Add a number of new formats to inspect what sessions and clients a window is
  present or active in.
* 添加许多新格式来检查窗口存在或处于活动状态的会话和客户端。
* Change file reading and writing to go through the client if necessary. This
  fixes commands like "tmux loadb /dev/fd/X". Also modify source-file to
  support "-" for standard input, like load-buffer and save-buffer.
* 如有必要，将文件读写更改为通过客户端。这修复了诸如“tmux loadb /dev/fd/X”之类的命令。还要修改源文件以支持标准输入的“-”，例如加载缓冲区和保存缓冲区。
* Add ~/.config/tmux/tmux.conf to the default search path for configuration
  files.
* 将 ~/.config/tmux/tmux.conf 添加到配置文件的默认搜索路径。
* Bump the escape sequence timeout to five seconds to allow for longer
  legitimate sequences.
* 将转义序列超时设置为五秒，以允许更长的合法序列。
* Make a best effort to set xpixel and ypixel for each pane and add formats for
  them.
* 尽力为每个窗格设置 xpixel 和 ypixel 并为其添加格式。
* Add push-default to status-left and status-right in status-format[0].
* 在status-format[0]中为status-left和status-right添加push-default。
* Do not clear search marks on cursor movement with vi(1) keys.
* 不要使用 vi(1) 键清除光标移动时的搜索标记。
* Add p format modifier for padding to width and allow multiple substitutions
  in a single format.
* 添加 p 格式修饰符以填充宽度并允许以单一格式进行多次替换。
* Add -f for full size to join-pane (like split-window).
* 添加 -f 以将全尺寸添加到连接窗格（如拆分窗口）。
* Do not use bright when emulating 256 colours on an 8 colour terminal because
  it is also bold on some terminals.
* 在 8 色终端上模拟 256 色时不要使用 Bright，因为它在某些终端上也是粗体。
* Make select-pane -P set window-active-style also to match previous behaviour.
* 使 select-pane -P 设置 window-active-style 也匹配以前的行为。
* Do not truncate list-keys output.
* 不要截断列表键输出。
* Turn automatic-rename back on if the \033k rename escape sequence is used
  with an empty name.
* 如果 \033k 重命名转义序列与空名称一起使用，则重新打开自动重命名。
* Add support for percentage sizes for resize-pane ("-x 10%"). Also change
  split-window and join-pane -l to accept similar percentages and deprecate the
  -p flag.
* 添加对调整大小窗格的百分比大小的支持（“-x 10%”）。还要更改 split-window 和 join-pane -l 以接受类似的百分比并弃用 -p 标志。
* Add -F flag to send-keys to expand formats in search-backward and forward
  copy mode commands and copy_cursor_word and copy_cursor_line formats for word
  and line at cursor in copy mode. Use for default # and * binding with vi(1)
  keys.
* 将 -F 标志添加到发送键以扩展向后和向前搜索复制模式命令中的格式以及复制模式下光标处的单词和行的 copy_cursor_word 和 copy_cursor_line 格式。用于默认 # 和 * 与 vi(1) 键的绑定。
* Add formats for word and line at cursor position in copy mode.
* 添加复制模式下光标处的字和行的格式。
* Add formats for cursor and selection position in copy mode.
* 添加复制模式下光标和选择位置的格式。
* Support all the forms of RGB colour strings in OSC sequences rather than
  requiring two digits.
* 支持 OSC 序列中所有形式的 RGB 颜色字符串，而不需要两位数。
* Limit lazy resize to panes in attached sessions only.
* 仅将延迟调整大小限制为附加会话中的窗格。
* Add an option to set the key sent by backspace for those whose system uses ^H
  rather than ^?.
* 添加一个选项，为系统使用 ^H 而不是 ^? 的系统设置退格键发送的键。
* Change new-session -A without a session name (that is, no -s option also) to
  attach to the best existing session like attach-session rather than a new
  one.
* 更改不带会话名称的 new-session -A（即也没有 -s 选项）以附加到最佳的现有会话，如 Attach-session，而不是新会话。
* Add a "latest" window-size option which tries to size windows based on the
  most recently used client. This is now the default.
* 添加“最新”窗口大小选项，尝试根据最近使用的客户端调整窗口大小。现在这是默认值。
* Add simple support for OSC 7 (result is available in the pane_path format).
* 添加对 OSC 7 的简单支持（结果以 pane_path 格式提供）。
* Add push-default and pop-default for styles which change the colours and
  attributes used for #[default]. These are used in status-format to restore
  the behaviour of window-status-style being the default for
  window-status-format.
* 为样式添加push-default 和pop-default，以更改用于#[default] 的颜色和属性。它们在状态格式中使用，以恢复窗口状态样式的行为作为窗口状态格式的默认行为。
* Add window_marked_flag.
* 添加window_marked_flag。
* Add cursor-down-and-cancel in copy mode.
* 复制模式下增加光标向下取消功能。
* Default to previous search string for search-forward and search-backward.
* 向前搜索和向后搜索时默认使用上一个搜索字符串。
* Add -Z flag to rotate-window, select-pane, swap-pane, switch-client to
  preserve zoomed state.
* 将 -Z 标志添加到旋转窗口、选择窗格、交换窗格、切换客户端以保留缩放状态。
* Add -N to capture-pane to preserve trailing spaces.
* 将 -N 添加到捕获窗格以保留尾随空格。
* Add reverse sorting in tree, client and buffer modes.
* 在树、客户端和缓冲区模式下添加反向排序。

#### CHANGES FROM 3.0 TO 3.0a
3.0 到 3.0a 的变化
* Do not require REG_STARTEND.
* 不需要 REG_STARTEND。
* Respawn panes or windows correctly if default-command is set.
* 如果设置了默认命令，则正确重生窗格或窗口。
* Add missing option for after-kill-pane hook.
* 添加缺少的 after-kill-pane 钩子选项。
* Fix for crash with a format variable that doesn't exist.
* 修复了因格式变量不存在而导致的崩溃问题。
* Do not truncate list-keys output on some platforms.
* 不要在某些平台上截断列表键输出。
* Do not crash when restoring a layout with only one pane.
* 恢复只有一个窗格的布局时不会崩溃。

#### CHANGES FROM 2.9 TO 3.0
从 2.9 到 3.0 的变化
* Workaround invalid layout strings generated by older tmux versions and add
  some additional sanity checks
* 解决旧 tmux 版本生成的无效布局字符串并添加一些额外的健全性检查
* xterm 348 now disables margins when resized, so send DECLRMM again after
  resize.
* xterm 348 现在在调整大小时禁用边距，因此调整大小后再次发送 DECLLRMM。
* Add support for the SD (scroll down) escape sequence.
* 添加对 SD（向下滚动）转义序列的支持。
* Expand arguments to C and s format modifiers to match the m modifier.
* 将参数扩展为 C 和 s 格式修饰符以匹配 m 修饰符。
* Add support for underscore colours (Setulc capability must be added with
  terminal-overrides as described in tmux(1)).
* 添加对下划线颜色的支持（必须使用终端覆盖添加 Setulc 功能，如 tmux(1) 中所述）。
* Add a "fill" style attribute for the fill colour of the drawing area (where
  appropriate).
* 为绘图区域的填充颜色添加“填充”样式属性（如果适用）。
* New -H flag to send-keys to send literal keys.
* 新的 -H 标志用于发送键来发送文字键。
* Format variables for pane mouse modes (mouse_utf8_flag and mouse_sgr_flag)
  and for origin mode (origin_flag).
* 窗格鼠标模式（mouse_utf8_flag 和 mouse_sgr_flag）和原始模式（origin_flag）的格式变量。
* Add -F to refresh-client for flags for control mode clients, only one flag
  (no-output) supported at the moment.
* 在刷新客户端中添加 -F 以获取控制模式客户端的标志，目前仅支持一个标志（无输出）。
* Add a few vi(1) keys for menus.
* 为菜单添加一些 vi(1) 键。
* Add pane options, set with set-option -p and displayed with show-options -p.
  Pane options inherit from window options (so every pane option is also
  a window option). The pane style is now configured by setting window-style
  and window-active-style in the pane options; select-pane -P and -g now change
  the option but are no longer documented.
* 添加窗格选项，使用 set-option -p 设置并使用 show-options -p 显示。窗格选项继承自窗口选项（因此每个窗格选项也是窗口选项）。现在通过在窗格选项中设置 window-style 和 window-active-style 来配置窗格样式； select-pane -P 和 -g 现在更改选项，但不再记录。
* Do not document set-window-option and show-window-options. set-option -w and
  show-options -w should be used instead.
* 不要记录 set-window-option 和 show-window-options。应改用 set-option -w 和 show-options -w。
* Add a -A flag to show-options to show parent options as well (they are marked
  with a *).
* 添加 -A 标志到 show-options 来显示父选项（它们用 * 标记）。
* Resize panes lazily - do not resize unless they are in an attached, active
  window.
* 延迟调整窗格大小 - 除非它们位于附加的活动窗口中，否则不要调整大小。
* Add regular expression support for the format search, match and substitute
  modifiers and make them able to ignore case. find-window now accepts -r to
  use regular expressions.
* 添加对格式搜索、匹配和替换修饰符的正则表达式支持，并使它们能够忽略大小写。 find-window 现在接受 -r 来使用正则表达式。
* Do not use $TMUX to find the session because for windows in multiple sessions
  it is wrong as often as it is right, and for windows in one session it is
  pointless. Instead use TMUX_PANE if it is present.
* 不要使用 $TMUX 来查找会话，因为对于多个会话中的窗口来说，它错误的次数与正确的次数一样多，而对于一个会话中的窗口来说，这是毫无意义的。相反，请使用 TMUX_PANE（如果存在）。
* Do not always resize the window back to its original size after applying a
  layout, keep it at the layout size until it must be resized (for example when
  attached and window-size is not manual).
* 应用布局后，不要总是将窗口大小调整回其原始大小，应将其保持在布局大小，直到必须调整大小为止（例如，当附加且窗口大小不是手动时）。
* Add new-session -X and attach-session -x to send SIGHUP to parent when
  detaching (like detach-client -P).
* 添加 new-session -X 和 Attach-session -x 以在分离时向父级发送 SIGHUP（如 detach-client -P）。
* Support for octal escapes in strings (such as \007) and improve list-keys
  output so it parses correctly if copied into a configuration file.
* 支持字符串中的八进制转义（例如 \007）并改进列表键输出，以便在复制到配置文件时可以正确解析。
* INCOMPATIBLE: Add a new {} syntax to the configuration file. This is a string
  similar to single quotes but also includes newlines and allows commands that
  take other commands as string arguments to be expressed more clearly and
  without additional escaping.
* 不兼容：向配置文件添加新的 {} 语法。这是一个类似于单引号的字符串，但也包含换行符，并允许将其他命令作为字符串参数的命令更清晰地表达，而无需额外转义。
  A literal { and } or a string containing { or } must now be escaped or
  quoted, for example '{' and '}' instead of { or }, or 'X#{foo}' instead of
  X#{foo}.
 文字 { 和 } 或包含 { 或 } 的字符串现在必须转义或加引号，例如用 '{' 和 '}' 代替 { 或 }，或者用 'X#{foo}' 代替 X#{foo}。
* New <, >, <= and >= comparison operators for formats.
* 新的 <、>、<= 和 >= 格式比较运算符。
* Improve escaping of special characters in list-keys output.
* 改进列表键输出中特殊字符的转义。
* INCOMPATIBLE: tmux's configuration parsing has changed to use yacc(1). There
  is one incompatible change: a \ on its own must be escaped or quoted as
  either \\ or '\' (the latter works on older tmux versions).
* 不兼容：tmux 的配​​置解析已更改为使用 yacc(1)。有一个不兼容的更改： \ 本身必须转义或引用为 \\ 或 '\' （后者适用于较旧的 tmux 版本）。
  Entirely the same parser is now used for parsing the configuration file
  and for string commands. This means that constructs previously only
  available in .tmux.conf, such as %if, can now be used in string commands
  (for example, those given to if-shell - not commands invoked from the
  shell, they are still parsed by the shell itself).
 现在使用完全相同的解析器来解析配置文件和字符串命令。这意味着以前仅在 .tmux.conf 中可用的构造（例如 %if）现在可以在字符串命令中使用（例如，那些提供给 if-shell 的命令 - 不是从 shell 调用的命令，它们仍然由 shell 解析）本身）。
* Add support for the overline attribute (SGR 53). The Smol capability is
  needed in terminal-overrides.
* 添加对上划线属性（SGR 53）的支持。终端覆盖需要 Smol 功能。
* Add the ability to create simple menus. Introduces new command
  display-menu. Default menus are bound to MouseDown3 on the status line;
  MouseDown3 or M-MouseDown3 on panes; MouseDown3 in tree, client and
  buffer modes; and C-b < and >.
* 添加创建简单菜单的功能。引入新命令显示菜单。默认菜单绑定到状态行上的MouseDown3；窗格上的 MouseDown3 或 M-MouseDown3；树、客户端和缓冲模式下的 MouseDown3；和 C-b < 和 >。
* Allow panes to be empty (no command). They can be created either by piping to
  split-window -I, or by passing an empty command ('') to split-window. Output
  can be sent to an existing empty window with display-message -I.
* 允许窗格为空（无命令）。它们可以通过管道到 split-window -I 或通过将空命令 ('') 传递到 split-window 来创建。可以使用 display-message -I 将输出发送到现有的空窗口。
* Add keys to jump between matching brackets (emacs C-M-f and C-M-b, vi %).
* 添加在匹配括号之间跳转的键（emacs C-M-f 和 C-M-b、vi %）。
* Add a -e flag to new-window, split-window, respawn-window, respawn-pane to
  pass environment variables into the newly created process.
* 向 new-window、split-window、respawn-window、respawn-pane 添加 -e 标志，以将环境变量传递到新创建的进程中。
* Hooks are now stored in the options tree as array options, allowing them to
  have multiple separate commands. set-hook and show-hooks remain but
  set-option and show-options can now also be used (show-options will only show
  hooks if given the -H flag). Hooks with multiple commands are run in index
  order.
* 钩子现在作为数组选项存储在选项树中，允许它们具有多个单独的命令。 set-hook 和 show-hooks 仍然存在，但现在也可以使用 set-option 和 show-options（如果给定 -H 标志，show-options 将仅显示挂钩）。具有多个命令的挂钩按索引顺序运行。
* Automatically scroll if dragging to create a selection with the mouse and the
  cursor reaches the top or bottom line.
* 如果用鼠标拖动创建选区且光标到达顶线或底线，则自动滚动。
* Add -no-clear variants of copy-selection and copy-pipe which do not clear the
  selection after copying. Make copy-pipe clear the selection by default to be
  consistent with copy-selection.
* 添加 copy-selection 和 copy-pipe 的 -no-clear 变体，它们在复制后不会清除选择。使copy-pipe默认清除选择以与copy-selection保持一致。
* Add an argument to copy commands to set the prefix for the buffer name, this
  (for example) allows buffers for different sessions to be named separately.
* 在复制命令中添加一个参数来设置缓冲区名称的前缀，这（例如）允许单独命名不同会话的缓冲区。
* Update session activity on focus event.
* 更新焦点事件的会话活动。
* Pass target from source-file into the config file parser so formats in %if
  and %endif have access to more useful variables.
* 将目标从源文件传递到配置文件解析器，以便 %if 和 %endif 中的格式可以访问更有用的变量。
* Add the ability to infer an option type (server, session, window) from its
  name to show-options (it was already present in set-option).
* 添加从名称推断选项类型（服务器、会话、窗口）的功能到 show-options（它已经存在于 set-option 中）。

#### CHANGES FROM 2.9 TO 2.9a
从 2.9 到 2.9a 的变化
* Fix bugs in select-pane and the main-horizontal and main-vertical layouts.
* 修复选择窗格以及主水平和主垂直布局中的错误。

CHANGES FROM 2.8 TO 2.9
从 2.8 到 2.9 的变化
* Attempt to preserve horizontal cursor position as well as vertical with
  reflow.
* 尝试在回流时保留水平光标位置以及垂直光标位置。
* Rewrite main-vertical and horizontal and change layouts to better handle the
  case where all panes won't fit into the window size, reduce problems with
  pane border status lines and fix other bugs mostly found by Thomas Sattler.
* 重写主垂直和水平并更改布局，以更好地处理所有窗格不适合窗口大小的情况，减少窗格边框状态行的问题并修复主要由 Thomas Sattler 发现的其他错误。
* Add format variables for the default formats in the various modes
  (tree_mode_format and so on) and add a -a flag to display-message to list
  variables with values.
* 为各种模式下的默认格式添加格式变量（tree_mode_format 等），并为显示消息添加 -a 标志以列出带有值的变量。
* Add a -v flag to display-message to show verbose messages as the format is
  parsed, this allows formats to be debugged
* 将 -v 标志添加到显示消息以在解析格式时显示详细消息，这允许调试格式
* Add support for HPA (\033[`).
* 添加对 HPA (\033[`) 的支持。
* Add support for origin mode (\033[?6h).
* 添加对原始模式的支持 (\033[?6h)。
* No longer clear history on RIS.
* 不再清除 RIS 上的历史记录。
* Extend the #[] style syntax and use that together with previous format
  changes to allow the status line to be entirely configured with a single
  option.
* 扩展 #[] 样式语法并将其与以前的格式更改一起使用，以允许使用单个选项完全配置状态行。
  Now that it is possible to configure their content, enable the existing code
  that lets the status line be multiple lines in height. The status option can
  now take a value of 2, 3, 4 or 5 (as well as the previous on or off) to
  configure more than one line. The new status-format array option configures
  the format of each line, the default just references the existing status-*
  options, although some of the more obscure status options may be eliminated
  in time.
 现在可以配置其内容，启用现有代码，使状态行的高度为多行。状态选项现在可以采用值 2、3、4 或 5（以及之前的打开或关闭）来配置多条线路。新的 status-format 数组选项配置每行的格式，默认仅引用现有的 status-* 选项，尽管一些更晦涩的状态选项可能会及时消除。
  Additions to the #[] syntax are: "align" to specify alignment (left, centre,
  right), "list" for the window list and "range" to configure ranges of text
  for the mouse bindings.
 #[] 语法的新增内容包括：“align”指定对齐方式（左、中、右），“list”表示窗口列表，“range”配置鼠标绑定的文本范围。
  The "align" keyword can also be used to specify alignment of entries in tree
  mode and the pane status lines.
“align”关键字还可用于指定树模式和窗格状态行中条目的对齐方式。
* Add E: and T: format modifiers to expand a format twice (useful to expand the
  value of an option).
* 添加 E: 和 T: 格式修饰符以将格式扩展两次（对于扩展选项的值很有用）。
* The individual -fg, -bg and -attr options have been removed; they
  were superseded by -style options in tmux 1.9.
* 单独的 -fg、-bg 和 -attr 选项已被删除；它们在 tmux 1.9 中被 -style 选项取代。
* Allow more than one mode to be opened in a pane. Modes are kept on a stack
  and retrieved if the same mode is entered again. Exiting the active mode goes
  back to the previous one.
* 允许在一个窗格中打开多种模式。模式保存在堆栈中，并在再次进入相同模式时检索。退出活动模式将返回到前一个模式。
* When showing command output in copy mode, call it view mode instead (affects
  pane_mode format).
* 在复制模式下显示命令输出时，将其称为查看模式（影响 pane_mode 格式）。
* Add -b to display-panes like run-shell.
* 将 -b 添加到显示窗格，如 run-shell。
* Handle UTF-8 in word-separators option.
* 在单词分隔符选项中处理 UTF-8。
* New "terminal" colour allowing options to use the terminal default colour
  rather than inheriting the default from a parent option.
* 新的“终端”颜色允许选项使用终端默认颜色，而不是从父选项继承默认颜色。
* Do not move the cursor in copy mode when the mouse wheel is used.
* 在复制模式下，使用鼠标滚轮时请勿移动光标。
* Use the same working directory rules for jobs as new windows rather than
  always starting in the user's home.
* 对作业使用与新窗口相同的工作目录规则，而不是始终从用户的家中启动。
* Allow panes to be one line or column in size.
* 允许窗格的大小为一行或一列。
* Go to last line when goto-line number is out of range in copy mode.
* 在复制模式下，当转到行号超出范围时，转到最后一行。
* Yank previously cut text if any with C-y in the command prompt, only use the
  buffer if no text has been cut.
* 在命令提示符下使用 C-y 来抽出之前剪切的文本（如果有），仅在没有剪切文本的情况下才使用缓冲区。
* Add q: format modifier to quote shell special characters.
* 添加 q: 格式修饰符来引用 shell 特殊字符。
* Add StatusLeft and StatusRight mouse locations (keys such as
  MouseDown1StatusLeft) for the status-left and status-right areas of the
  status line.
* 为状态行的状态左侧和状态右侧区域添加 StatusLeft 和 StatusRight 鼠标位置（例如 MouseDown1StatusLeft 等键）。
* Add -Z to find-window.
* 添加 -Z 到查找窗口。
* Support for windows larger than the client. This adds two new options,
  window-size and default-size, and a new command, resize-window. The
  force-width and force-height options and the session_width and session_height
  formats have been removed.
* 支持大于客户端的窗口。这添加了两个新选项，window-size 和 default-size，以及一个新命令 resize-window。 force-width 和force-height 选项以及session_width 和session_height 格式已被删除。
  The new window-size option tells tmux how to work out the size of windows:
  largest means it picks the size of the largest session, smallest the smallest
  session (similar to the old behaviour) and manual means that it does not
  automatically resize windows. aggressive-resize modifies the choice of
  session for largest and smallest as it did before.
新的窗口大小选项告诉 tmux 如何计算窗口的大小：最大意味着它选择最大会话的大小，最小意味着最小会话的大小（类似于旧行为），而手动意味着它不会自动调整窗口大小。 Aggressive-resize 像以前一样修改最大和最小会话的选择。
  If a window is in a session attached to a client that is too small, only part
  of the window is shown. tmux attempts to keep the cursor visible, so the part
  of the window displayed is changed as the cursor moves (with a small delay,
  to try and avoid excess redrawing when applications redraw status lines or
  similar that are not currently visible).
 如果窗口位于附加到太小的客户端的会话中，则仅显示窗口的一部分。 tmux 尝试保持光标可见，因此显示的窗口部分会随着光标移动而更改（有一点延迟，以避免当应用程序重绘当前不可见的状态行或类似内容时过度重绘）。
  Drawing windows which are larger than the client is not as efficient as those
  which fit, particularly when the cursor moves, so it is recommended to avoid
  using this on slow machines or networks (set window-size to smallest or
  manual).
 绘制比客户端大的窗口不如适合的窗口那么有效，特别是当光标移动时，因此建议避免在慢速计算机或网络上使用此功能（将窗口大小设置为最小或手动）。
  The resize-window command can be used to resize a window manually. If it is
  used, the window-size option is automatically set to manual for the window
  (undo this with "setw -u window-size"). resize-window works in a similar way
  to resize-pane (-U -D -L -R -x -y flags) but also has -a and -A flags. -a
  sets the window to the size of the smallest client (what it would be if
  window-size was smallest) and -A the largest.
 resize-window 命令可用于手动调整窗口大小。如果使用它，窗口大小选项将自动设置为手动窗口（使用“setw -u window-size”撤消此操作）。 resize-window 的工作方式与 resize-pane 类似（-U -D -L -R -x -y 标志），但也有 -a 和 -A 标志。 -a 将窗口设置为最小客户端的大小（如果 window-size 是最小的），-A 将窗口设置为最大。
  For the same behaviour as force-width or force-height, use resize-window -x
  or -y.
 对于与force-width或force-height相同的行为，请使用resize-window -x或-y。
  If the global window-size option is set to manual, the default-size option is
  used for new windows. If -x or -y is used with new-session, that sets the
  default-size option for the new session.
 如果全局窗口大小选项设置为手动，则默认大小选项将用于新窗口。如果 -x 或 -y 与 new-session 一起使用，则会为新会话设置默认大小选项。
  The maximum size of a window is 10000x10000. But expect applications to
  complain and higher memory use if making a window that big. The minimum size
  is the size required for the current layout including borders.
窗口的最大尺寸为 10000x10000。但如果将窗口设置得那么大，预计应用程序会抱怨并使用更高的内存。最小尺寸是当前布局（包括边框）所需的尺寸。
  The refresh-client command can be used to pan around a window, -U -D -L -R
  moves up, down, left or right and -c returns to automatic cursor
  tracking. The position is reset when the current window is changed.
 刷新客户端命令可用于平移窗口，-U -D -L -R 向上、向下、向左或向右移动，-c 返回自动光标跟踪。当当前窗口更改时，该位置会重置。
CHANGES FROM 2.7 TO 2.8
从 2.7 到 2.8 的变化
* Make display-panes block the client until a pane is chosen or it
  times out.
* 使显示窗格阻塞客户端，直到选择窗格或超时。
* Clear history on RIS like most other terminals do.
* 像大多数其他终端一样清除 RIS 上的历史记录。
* Add an "Any" key to run a command if a key is pressed that is not
  bound in the current key table.
* 添加“任意”键，以便在按下当前键表中未绑定的键时运行命令。
* Expand formats in load-buffer and save-buffer.
* 扩展加载缓冲区和保存缓冲区中的格式。
* Add a rectangle_toggle format.
* 添加矩形切换格式。
* Add set-hook -R to run a hook immediately.
* 添加 set-hook -R 以立即运行挂钩。
* Add README.ja. * 添加 README.ja。
* Add pane focus hooks.
* 添加窗格焦点挂钩。
* Allow any punctuation as separator for s/x/y not only /.
* 允许任何标点符号作为 s/x/y 的分隔符，而不仅仅是 /。
* Improve resizing with the mouse (fix resizing the wrong pane in some
  layouts, and allow resizing multiple panes at the same time).
* 改进鼠标调整大小（修复某些布局中调整错误窗格大小的问题，并允许同时调整多个窗格大小）。
* Allow , and } to be escaped in formats as #, and #}.
* 允许 , 和 } 以 # 和 #} 格式转义。
* Add KRB5CCNAME to update-environment.
* 将 KRB5CCNAME 添加到更新环境。
* Change meaning of -c to display-message so the client is used if it
  matches the session given to -t.
* 将 -c 的含义更改为显示消息，以便如果客户端与给定 -t 的会话匹配，则使用客户端。
* Fixes to : form of SGR.
* 修复：SGR 的形式。
* Add x and X to choose-tree to kill sessions, windows or panes.
* 将 x 和 X 添加到选择树以终止会话、窗口或窗格。
CHANGES FROM 2.6 TO 2.7
从 2.6 到 2.7 的变化
* Remove EVENT_* variables from environment on platforms where tmux uses them
  so they do not pass on to panes.
* 从 tmux 使用 EVENT_* 变量的平台上的环境中删除它们，这样它们就不会传递到窗格。
* Fixes for hooks at server exit.
* 修复了服务器出口处的挂钩。
* Remove SGR 10 (was equivalent to SGR 0 but no other terminal seems to do
  this).
* 删除 SGR 10（相当于 SGR 0，但似乎没有其他终端可以执行此操作）。
* Expand formats in window and session names.
* 扩展窗口和会话名称的格式。
* Add -Z flag to choose-tree, choose-client, choose-buffer to automatically
  zoom the pane when the mode is entered and unzoom when it exits, assuming the
  pane is not already zoomed. This is now part of the default key bindings.
* 将 -Z 标志添加到选择树、选择客户端、选择缓冲区，以在进入模式时自动缩放窗格，并在退出模式时取消缩放（假设窗格尚未缩放）。现在，这是默认键绑定的一部分。
* Add C-g to exit modes with emacs keys.
* 添加 C-g 以使用 emacs 键退出模式。
* Add exit-empty option to exit server if no sessions (defaults to on).
* 添加 exit-empty 选项以在没有会话时退出服务器（默认为打开）。
* Show if a filter is present in choose modes.
* 显示选择模式中是否存在过滤器。
* Add pipe-pane -I to to connect stdin of the child process.
* 添加pipe-pane -I 以连接子进程的stdin。
* Performance improvements for reflow.
* 回流焊性能改进。
* Use RGB terminfo(5) capability to detect RGB colour terminals (the existing
  Tc extension remains unchanged).
* 使用 RGB terminfo(5) 功能检测 RGB 颜色端子（现有 Tc 扩展保持不变）。
* Support for ISO colon-separated SGR sequences.
* 支持 ISO 冒号分隔的 SGR 序列。
* Add select-layout -E to spread panes out evenly (bound to E key).
* 添加 select-layout -E 以均匀展开窗格（绑定到 E 键）。
* Support wide characters properly when reflowing.
* 回流时正确支持宽字符。
* Pass PWD to new panes as a hint to shells, as well as calling chdir().
* 将 PWD 传递到新窗格作为 shell 的提示，以及调用 chdir()。
* Performance improvements for the various choose modes.
* 各种选择模式的性能改进。
* Only show first member of session groups in tree mode (-G flag to choose-tree
  to show all).
* 仅以树模式显示会话组的第一个成员（-G 标志选择树以显示全部）。
* Support %else in config files to match %if; from Brad Town in GitHub issue
  1071.
* 在配置文件中支持%else来匹配%if；来自 Brad Town 的 GitHub 第 1071 期。
* Fix "kind" terminfo(5) capability to be S-Down not S-Up.
* 将“kind”terminfo(5) 功能修复为 S-Down 而不是 S-Up。
* Add a box around the preview label in tree mode.
* 在树模式下的预览标签周围添加一个框。
* Show exit status and time in the remain-on-exit pane text; from Timo
  Boettcher in GitHub issue 1103.
* 在退出窗格文本中显示退出状态和时间；来自 Timo Boettcher，GitHub 问题 1103。
* Correctly use pane-base-index in tree mode.
* 在树模式下正确使用pane-base-index。
* Change the allow-rename option default to off.
* 将允许重命名选项默认更改为关闭。
* Support for xterm(1) title stack escape sequences (GitHub issue 1075 from
  Brad Town).
* 支持 xterm(1) 标题堆栈转义序列（来自 Brad Town 的 GitHub 问题 1075）。
* Correctly remove padding cells to fix a UTF-8 display problem (GitHub issue
  1090).
* 正确删除填充单元以修复 UTF-8 显示问题（GitHub 问题 1090）。

#### CHANGES FROM 2.5 TO 2.6, 05 October 2017
从 2.5 到 2.6 的变更，2017 年 10 月 5 日
* Add select-pane -T to set pane title.
* 添加 select-pane -T 设置窗格标题。
* Fix memory leak when lines with BCE are removed from history.
* 修复当带有 BCE 的行从历史记录中删除时的内存泄漏。
* Fix (again) the "prefer unattached" behaviour of attach-session.
*（再次）修复附加会话的“首选未附加”行为。
* Reorder how keys are checked to allow keys to be specified that have a
  leading escape. GitHub issue 1048.
* 重新排序键的检查方式，以允许指定具有前导转义符的键。 GitHub 问题 1048。
* Support REP escape sequence (\033[b).
* 支持 REP 转义序列 (\033[b)。
* Run alert hooks based on options rather than always, and allow further bells
  even if there is an existing bell.
* 根据选项而不是始终运行警报挂钩，并且即使存在现有铃声，也允许进一步的铃声。
* Add -d flag to display-panes to override display-panes-time.
* 将 -d 标志添加到显示窗格以覆盖显示窗格时间。
* Add selection_present format when in copy mode (allows key bindings that do
  something different if there is a selection).
* 在复制模式下添加selection_present 格式（允许在有选择的情况下执行不同操作的键绑定）。
* Add pane_at_left, pane_at_right, pane_at_top and pane_at_bottom formats.
* 添加pane_at_left、pane_at_right、pane_at_top 和pane_at_bottom 格式。
* Make bell, activity and silence alerting more consistent by: removing the
  bell-on-alert option; adding activity-action and silence-action options with
  the same possible values as the existing bell-action; adding a "both" value
  for the visual-bell, visual-activity and visual-silence options to trigger
  both a bell and a message.
* 通过以下方式使铃声、活动和静音警报更加一致：删除警报铃声选项；添加活动动作和静音动作选项，其可能值与现有的响铃动作相同；为视觉响铃、视觉活动和视觉静音选项添加“两者”值，以触发响铃和消息。
* Add a pane_pipe format to show if pipe-pane is active.
* 添加pane_pipe 格式以显示pipe-pane 是否处于活动状态。
* Block signals between forking and resetting signal handlers so that the
  libevent signal handler doesn't get called in the child and incorrectly write
  into the signal pipe that it still shares with the parent. GitHub issue 1001.
* 在分叉和重置信号处理程序之间阻止信号，以便 libevent 信号处理程序不会在子进程中被调用，也不会错误地写入仍与父进程共享的信号管道中。 GitHub 问题 1001。
* Allow punctuation in pane_current_command.
* 允许在pane_current_command 中使用标点符号。
* Add -c for respawn-pane and respawn-window.
* 为 respawn-pane 和 respawn-window 添加 -c。
* Wait for any remaining data to flush when a pane is closed while pipe-pane is
  in use.
* 当管道窗格正在使用时关闭窗格时，等待所有剩余数据刷新。
* Fix working out current client with no target. GitHub issue 995.
* 修复当前客户没有目标的问题。 GitHub 问题 995。
* Try to fallback to C.UTF-8 as well as en_US.UTF-8 when looking for a UTF-8
  locale.
* 在查找 UTF-8 语言环境时，尝试回退到 C.UTF-8 以及 en_US.UTF-8。
* Add user-keys option for user-defined key escape sequences (mapped to User0
  to User999 keys).
* 为用户定义的按键转义序列添加用户按键选项（映射到 User0 到 User999 键）。
* Add pane-set-clipboard hook.
* 添加窗格设置剪贴板挂钩。
* FAQ file has moved out of repository to online.
* 常见问题解答文件已从存储库移至在线。
* Fix problem with high CPU usage when a client dies unexpectedly. GitHub issue
  941.
* 修复客户端意外死机时CPU占用率高的问题。 GitHub 问题 941。
* Do a dance on OS X 10.10 and above to return tmux to the user namespace,
  allowing access to the clipboard.
* 在 OS X 10.10 及更高版本上进行舞蹈，将 tmux 返回到用户命名空间，从而允许访问剪贴板。
* Do not allow escape sequences which expect a specific terminator (APC, DSC,
  OSC) to wait for forever - use a small timeout. This reduces the chance of
  the pane locking up completely when sent garbage (cat /dev/random or
  similar).
* 不允许等待特定终止符（APC、DSC、OSC）的转义序列永远等待 - 使用较小的超时。这减少了发送垃圾（cat /dev/random 或类似）时窗格完全锁定的机会。
* Support SIGUSR2 to toggle logging on a running server, also generate the
  "out" log file with -vv not -vvvv.
* 支持 SIGUSR2 在正在运行的服务器上切换日志记录，还可以使用 -vv 而不是 -vvvv 生成“out”日志文件。
* Make set-clipboard a three state option: on (tmux both sends to outside
  terminal and accepts from applications inside); external (tmux sends outside
  but does not accept inside); and off.
* 使 set-clipboard 成为一个三状态选项：on（tmux 既发送到外部终端又从内部应用程序接受）；外部（tmux 向外部发送但不接受内部）；然后关闭。
* Fix OSC 4 palette setting for bright foreground colours. GitHub issue 954.
* 修复 OSC 4 调色板设置以获得明亮的前景色。 GitHub 问题 954。
* Use setrgbf and setrgbb terminfo(5) capabilities to set RGB colours, if they
  are available. (Tc is still supported as well.)
* 使用 setrgbf 和 setrgbb terminfo(5) 功能来设置 RGB 颜色（如果可用）。 （Tc 仍然受支持。）
* Fix redrawing panes when they are resized several times but end up with the
  size unchanged (for example, splitw/resizep -Z/breakp).
* 修复了多次调整大小但最终大小不变时的重绘窗格（例如 splitw/resizep -Z/breakp）。
* Major rewrite of choose mode. Now includes preview, sorting, searching and
  tagging; commands that can be executed directly from the mode (for example,
  to delete one or more buffers); and filtering in tree mode.
* 主要重写了选择模式。现在包括预览、排序、搜索和标记；可以直接从该模式执行的命令（例如，删除一个或多个缓冲区）；并以树模式进行过滤。
* choose-window and choose-session are now aliases of choose-tree (in the
  command-alias option).
* Choose-window 和 Choose-session 现在是 Choose-tree 的别名（在 command-alias 选项中）。
* Support OSC 10 and OSC 11 to set foreground and background colours.
* 支持OSC 10和OSC 11设置前景色和背景色。
* Check the U8 capability to determine whether to use UTF-8 line drawing
  characters for ACS.
* 检查U8能力以确定ACS是否使用UTF-8画线字符。
* Some missing notifications for layout changes.
* 一些布局更改缺少通知。
* Control mode clients now do not affect session sizes until they issue
  refresh-client -C. new-session -x and -y works with control clients even if
  the session is not detached.
* 控制模式客户端现在不会影响会话大小，直到它们发出刷新客户端 -C。即使会话未分离，new-session -x 和 -y 也可与控制客户端一起使用。
* All new sessions that are unattached (whether with -d or started with no
  terminal) are now created with size 80 x 24. Whether the status line is on or
  off does not affect the size of new sessions until they are attached.
* 所有未附加的新会话（无论是使用 -d 还是不使用终端启动）现在都以 80 x 24 的大小创建。无论状态行打开还是关闭都不会影响新会话的大小，直到附加它们为止。
* Expand formats in option names and add -F flag to expand them in option values.
* 扩展选项名称中的格式并添加 -F 标志以扩展选项值中的格式。
* Remember the search string for a pane even if copy mode is exited and entered
  again.
* 即使退出并再次进入复制模式，也要记住窗格的搜索字符串。
* Some further BCE fixes (scroll up, reverse index).
* 一些进一步的 BCE 修复（向上滚动、反向索引）。
* Improvements to how terminals are cleared (entirely or partially).
* 改进了终端的清除方式（全部或部分）。
