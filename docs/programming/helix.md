
Github repo: https://github.com/helix-editor/helix

Wiki


# [Migrating from Vim 从 Vim 迁移](https://docs.helix-editor.com/from-vim.html#migrating-from-vim)

Helix's editing model is strongly inspired from Vim and Kakoune, and a notable difference from Vim (and the most striking similarity to Kakoune) is that Helix follows the `selection → action` model. This means that whatever you are going to act on (a word, a paragraph, a line, etc.) is selected first and the action itself (delete, change, yank, etc.) comes second. A cursor is simply a single width selection.  
Helix 的编辑模型深受 Vim 和 Kakoune 的启发，与 Vim 的显着区别（以及与 Kakoune 最显着的相似之处）是 Helix 遵循 `selection → action` 模型。这意味着您要执行的任何操作（单词、段落、行等）都会首先被选择，然后才是操作本身（删除、更改、复制等）。光标只是一个单一宽度的选择。

See also Kakoune's [Migrating from Vim](https://github.com/mawww/kakoune/wiki/Migrating-from-Vim) and Helix's [Migrating from Vim](https://github.com/helix-editor/helix/wiki/Migrating-from-Vim).  
另请参阅 Kakoune 的从 Vim 迁移和 Helix 的从 Vim 迁移。以后才能操作。但是vim可以先按操作比如d | y，然后在再选择被操作的区域。

##### 如何删除从当前字符到行尾
- vim： D  或 df$
- hx: vgld 或 i + Ctrl-k 

### [Movement  移动](https://docs.helix-editor.com/keymap.html#movement)

> NOTE: Unlike Vim, `f`, `F`, `t` and `T` are not confined to the current line.  
> 注意：与 Vim 不同， `f` 、 `F` 、 `t` 和 `T` 不限于当前行。

| Key                  | Description                                                                                | Command                     |
| -------------------- | ------------------------------------------------------------------------------------------ | --------------------------- |
| `h`, `Left`          | Move left                                                                                  | `move_char_left`            |
| `j`, `Down`          | Move down                                                                                  | `move_visual_line_down`     |
| `k`, `Up`            | Move up                                                                                    | `move_visual_line_up`       |
| `l`, `Right`         | Move right                                                                                 | `move_char_right`           |
| `w`                  | Move next word start <br>移至下一个单词开始                                                         | `move_next_word_start`      |
| `b`                  | Move previous word start <br>移至上一个单词开头                                                     | `move_prev_word_start`      |
| `e`                  | Move next word end <br>移至下一个词尾                                                             | `move_next_word_end`        |
| `W`                  | Move next WORD start<br>移至下一个 WORD 开头                                                      | `move_next_long_word_start` |
| `B`                  | Move previous WORD start<br>移至上一个 WORD 开头                                                  | `move_prev_long_word_start` |
| `E`                  | Move next WORD end  <br>移动下一个 WORD 末尾                                                      | `move_next_long_word_end`   |
| `t`                  | Find 'till next char  <br>查找到下一个字符                                                         | `find_till_char`            |
| `f`                  | Find next char  <br>查找下一个字符                                                                | `find_next_char`            |
| `T`                  | Find 'till previous char <br>查找“直到上一个字符”                                                   | `till_prev_char`            |
| `F`                  | Find previous char 查找前一个字符                                                                 | `find_prev_char`            |
| `G`                  | Go to line number `<n>`  <br>转到行号 `<n>`                                                    | `goto_line`                 |
| `Alt-.`              | Repeat last motion (`f`, `t`, `m`, `[` or `]`)  <br>重复上一个动作（ `f` 、 `t` 、 `m` 、 `[` 或 `]` ） | `repeat_last_motion`        |
| `Home`               | Move to the start of the line  <br>移至行首                                                    | `goto_line_start`           |
| `End`                | Move to the end of the line  <br>移至到行尾                                                     | `goto_line_end`             |
| `Ctrl-b`, `PageUp`   | Move page up                                                                               | `page_up`                   |
| `Ctrl-f`, `PageDown` | Move page down  <br>向下移动页面                                                                 | `page_down`                 |
| `Ctrl-u`             | Move cursor and page half page up  <br>移动光标并向上翻页半页                                         | `page_cursor_half_up`       |
| `Ctrl-d`             | Move cursor and page half page down  <br>移动光标并向下翻页半页                                       | `page_cursor_half_down`     |
| `Ctrl-i`             | Jump forward on the jumplist  <br>在跳转列表上向前跳转                                               | `jump_forward`              |
| `Ctrl-o`             | Jump backward on the jumplist  <br>在跳转列表上向后跳转                                              | `jump_backward`             |
| `Ctrl-s`             | Save the current selection to the jumplist  <br>将当前选择保存到跳转列表                               | `save_selection`            |

### [Changes 变化](https://docs.helix-editor.com/keymap.html#changes)

| Key         | Description                                                                                 | Command                   |
| ----------- | ------------------------------------------------------------------------------------------- | ------------------------- |
| `r`         | Replace with a character 替换为一个字符                                                            | `replace`                 |
| `R`         | Replace with yanked text 替换为拉出的文本                                                           | `replace_with_yanked`     |
| `~`         | Switch case of the selected text  <br>切换所选文本的大小写                                            | `switch_case`             |
| `` ` ``     | Set the selected text to lower case  <br>将所选文本设置为小写                                         | `switch_to_lowercase`     |
| `` Alt-` `` | Set the selected text to upper case  <br>将所选文本设置为大写                                         | `switch_to_uppercase`     |
| `i`         | Insert before selection 在选择之前插入                                                             | `insert_mode`             |
| `a`         | Insert after selection (append)  <br>选择后插入（追加）                                              | `append_mode`             |
| `I`         | Insert at the start of the line  <br>在行首插入                                                  | `insert_at_line_start`    |
| `A`         | Insert at the end of the line  <br>在行尾插入                                                    | `insert_at_line_end`      |
| `o`         | Open new line below selection  <br>在选择下方打开新行                                                | `open_below`              |
| `O`         | Open new line above selection  <br>在选择上方打开新行                                                | `open_above`              |
| `.`         | Repeat last insert 重复上次插入                                                                   | N/A                       |
| `u`         | Undo change                                                                                 | `undo`                    |
| `U`         | Redo change                                                                                 | `redo`                    |
| `Alt-u`     | Move backward in history 历史倒退                                                               | `earlier`                 |
| `Alt-U`     | Move forward in history 在历史的长河中前进                                                           | `later`                   |
| `y`         | Yank selection 猛拉选择                                                                         | `yank`                    |
| `p`         | Paste after selection 选择后粘贴                                                                 | `paste_after`             |
| `P`         | Paste before selection 选择前粘贴                                                                | `paste_before`            |
| `"` `<reg>` | Select a register to yank to or paste from  <br>选择要从中复制或粘贴的寄存器                              | `select_register`         |
| `>`         | Indent selection 缩进选择                                                                       | `indent`                  |
| `<`         | Unindent selection 取消缩进选择                                                                   | `unindent`                |
| `=`         | Format selection (currently nonfunctional/disabled) (**LSP**)  <br>格式选择（当前不起作用/禁用）(LSP)     | `format_selections`       |
| `d`         | Delete selection 删除选择                                                                       | `delete_selection`        |
| `Alt-d`     | Delete selection, without yanking  <br>删除选择，无需猛拉                                            | `delete_selection_noyank` |
| `c`         | Change selection (delete and enter insert mode)  <br>更改选择（删除并进入插入模式）                        | `change_selection`        |
| `Alt-c`     | Change selection (delete and enter insert mode, without yanking)  <br>更改选择（删除并进入插入模式，无需猛拉）  | `change_selection_noyank` |
| `Ctrl-a`    | Increment object (number) under cursor  <br>增加光标下的对象（数字）                                    | `increment`               |
| `Ctrl-x`    | Decrement object (number) under cursor  <br>减少光标下的对象（数字）                                    | `decrement`               |
| `Q`         | Start/stop macro recording to the selected register (experimental)  <br>开始/停止宏录制到选定的寄存器（实验） | `record_macro`            |
| `q`         | Play back a recorded macro from the selected register (experimental)  <br>从所选寄存器回放录制的宏（实验）  | `replay_macro`            |

#### [Shell  壳](https://docs.helix-editor.com/keymap.html#shell)

|Key|Description|Command|
|---|---|---|
|`\|`|Pipe each selection through shell command, replacing with output  <br>通过 shell 命令管道每个选择，并替换为输出|`shell_pipe`|
|`Alt-\|`|Pipe each selection into shell command, ignoring output  <br>将每个选择通过管道传输到 shell 命令中，忽略输出|`shell_pipe_to`|
|`!`|Run shell command, inserting output before each selection  <br>运行 shell 命令，在每次选择之前插入输出|`shell_insert_output`|
|`Alt-!`|Run shell command, appending output after each selection  <br>运行 shell 命令，在每次选择后附加输出|`shell_append_output`|
|`$`|Pipe each selection into shell command, keep selections where command returned 0  <br>将每个选择通过管道传输到 shell 命令中，保留命令返回 0 的选择|`shell_keep_pipe`|

### [Selection manipulation  选择操作](https://docs.helix-editor.com/keymap.html#selection-manipulation)

| Key                  | Description                                                                            | Command                              |
| -------------------- | -------------------------------------------------------------------------------------- | ------------------------------------ |
| `s`                  | Select all regex matches inside selections  <br>选择选择范围内的所有正则表达式匹配项                     | `select_regex`                       |
| `S`                  | Split selection into sub selections on regex matches  <br>将选择拆分为正则表达式匹配的子选择            | `split_selection`                    |
| `Alt-s`              | Split selection on newlines  <br>在换行符上拆分选择                                             | `split_selection_on_newline`         |
| `Alt-minus`          | Merge selections 合并选择                                                                  | `merge_selections`                   |
| `Alt-_`              | Merge consecutive selections  <br>合并连续选择                                               | `merge_consecutive_selections`       |
| `&`                  | Align selection in columns  <br>对齐列中的选择                                                | `align_selections`                   |
| `_`                  | Trim whitespace from the selection  <br>修剪所选内容中的空白                                     | `trim_selections`                    |
| `;`                  | Collapse selection onto a single cursor  <br>将选择折叠到单个光标上                               | `collapse_selection`                 |
| `Alt-;`              | Flip selection cursor and anchor  <br>翻转选择光标和锚点                                        | `flip_selections`                    |
| `Alt-:`              | Ensures the selection is in forward direction  <br>确保选择是向前的                            | `ensure_selections_forward`          |
| `,`                  | Keep only the primary selection  <br>仅保留主要选择                                           | `keep_primary_selection`             |
| `Alt-,`              | Remove the primary selection  <br>删除主要选择                                               | `remove_primary_selection`           |
| `C`                  | Copy selection onto the next line (Add cursor below)  <br>将选择复制到下一行（在下面添加光标）           | `copy_selection_on_next_line`        |
| `Alt-C`              | Copy selection onto the previous line (Add cursor above)  <br>将所选内容复制到上一行（在上方添加光标）     | `copy_selection_on_prev_line`        |
| `(`                  | Rotate main selection backward  <br>向后旋转主​​选择                                          | `rotate_selections_backward`         |
| `)`                  | Rotate main selection forward  <br>向前旋转主选择                                             | `rotate_selections_forward`          |
| `Alt-(`              | Rotate selection contents backward  <br>向后旋转选择内容                                       | `rotate_selection_contents_backward` |
| `Alt-)`              | Rotate selection contents forward  <br>向前旋转选择内容                                        | `rotate_selection_contents_forward`  |
| `%`                  | Select entire file 选择整个文件                                                              | `select_all`                         |
| `x`                  | Select current line, if already selected, extend to next line  <br>选择当前行，如果已选择，则扩展到下一行 | `extend_line_below`                  |
| `X`                  | Extend selection to line bounds (line-wise selection)  <br>将选择范围扩展到行范围（逐行选择）           | `extend_to_line_bounds`              |
| `Alt-x`              | Shrink selection to line bounds (line-wise selection)  <br>将选择范围缩小到行范围（逐行选择）           | `shrink_to_line_bounds`              |
| `J`                  | Join lines inside selection  <br>在选择范围内连接线                                             | `join_selections`                    |
| `Alt-J`              | Join lines inside selection and select the inserted space  <br>连接所选内容内的线条并选择插入的空间      | `join_selections_space`              |
| `K`                  | Keep selections matching the regex  <br>保持选择与正则表达式匹配                                   | `keep_selections`                    |
| `Alt-K`              | Remove selections matching the regex  <br>删除与正则表达式匹配的选择                                | `remove_selections`                  |
| `Ctrl-c`             | Comment/uncomment the selections  <br>注释/取消注释选择                                        | `toggle_comments`                    |
| `Alt-o`, `Alt-up`    | Expand selection to parent syntax node (**TS**)  <br>将选择扩展到父语法节点 (TS)                  | `expand_selection`                   |
| `Alt-i`, `Alt-down`  | Shrink syntax tree object selection (**TS**)  <br>收缩语法树对象选择（TS）                        | `shrink_selection`                   |
| `Alt-p`, `Alt-left`  | Select previous sibling node in syntax tree (**TS**)  <br>选择语法树 (TS) 中的前一个同级节点·        | `select_prev_sibling`                |
| `Alt-n`, `Alt-right` | Select next sibling node in syntax tree (**TS**)  <br>选择语法树 (TS) 中的下一个同级节点             | `select_next_sibling`                |

### [Search  搜索](https://docs.helix-editor.com/keymap.html#search)

Search commands all operate on the `/` register by default. To use a different register, use `"<char>`.  
默认情况下，搜索命令都在 `/` 寄存器上运行。要使用不同的寄存器，请使用 `"<char>` 。

|Key|Description|Command|
|---|---|---|
|`/`|Search for regex pattern 搜索正则表达式模式|`search`|
|`?`|Search for previous pattern  <br>搜索之前的模式|`rsearch`|
|`n`|Select next search match 选择下一个搜索匹配项|`search_next`|
|`N`|Select previous search match  <br>选择上一个搜索匹配项|`search_prev`|
|`*`|Use current selection as the search pattern  <br>使用当前选择作为搜索模式|`search_selection`|

### [Minor modes  小调模式](https://docs.helix-editor.com/keymap.html#minor-modes)

These sub-modes are accessible from normal mode and typically switch back to normal mode after a command.  
这些子模式可从正常模式访问，并且通常在命令后切换回正常模式。

|Key|Description|Command|
|---|---|---|
|`v`|Enter [select (extend) mode](https://docs.helix-editor.com/keymap.html#select--extend-mode)  <br>进入选择（扩展）模式|`select_mode`|
|`g`|Enter [goto mode](https://docs.helix-editor.com/keymap.html#goto-mode) 进入跳转模式|N/A|
|`m`|Enter [match mode](https://docs.helix-editor.com/keymap.html#match-mode) 进入比赛模式|N/A|
|`:`|Enter command mode 进入命令模式|`command_mode`|
|`z`|Enter [view mode](https://docs.helix-editor.com/keymap.html#view-mode) 进入查看模式|N/A|
|`Z`|Enter sticky [view mode](https://docs.helix-editor.com/keymap.html#view-mode) 进入粘性视图模式|N/A|
|`Ctrl-w`|Enter [window mode](https://docs.helix-editor.com/keymap.html#window-mode) 进入窗口模式|N/A|
|`Space`|Enter [space mode](https://docs.helix-editor.com/keymap.html#space-mode) 进入空间模式|N/A|

These modes (except command mode) can be configured by [remapping keys](https://docs.helix-editor.com/remapping.html#minor-modes).  
这些模式（命令模式除外）可以通过重新映射键进行配置。

#### [View mode  查看模式](https://docs.helix-editor.com/keymap.html#view-mode)

Accessed by typing `z` in [normal mode](https://docs.helix-editor.com/keymap.html#normal-mode).  
在正常模式下输入 `z` 即可访问。

View mode is intended for scrolling and manipulating the view without changing the selection. The "sticky" variant of this mode (accessed by typing `Z` in normal mode) is persistent and can be exited using the escape key. This is useful when you're simply looking over text and not actively editing it.  
视图模式用于滚动和操作视图而不更改选择。此模式的“粘性”变体（通过在正常模式下键入 `Z` 访问）是持久的，可以使用退出键退出。当您只是查看文本而不是主动编辑它时，这非常有用。

|Key|Description|Command|
|---|---|---|
|`z`, `c`|Vertically center the line  <br>垂直居中线|`align_view_center`|
|`t`|Align the line to the top of the screen  <br>将线与屏幕顶部对齐|`align_view_top`|
|`b`|Align the line to the bottom of the screen  <br>将线与屏幕底部对齐|`align_view_bottom`|
|`m`|Align the line to the middle of the screen (horizontally)  <br>将线与屏幕中间对齐（水平）|`align_view_middle`|
|`j`, `down`|Scroll the view downwards  <br>向下滚动视图|`scroll_down`|
|`k`, `up`|Scroll the view upwards 向上滚动视图|`scroll_up`|
|`Ctrl-f`, `PageDown`|Move page down 向下移动页面|`page_down`|
|`Ctrl-b`, `PageUp`|Move page up|`page_up`|
|`Ctrl-u`|Move cursor and page half page up  <br>移动光标并向上翻页半页|`page_cursor_half_up`|
|`Ctrl-d`|Move cursor and page half page down  <br>移动光标并向下翻页半页|`page_cursor_half_down`|

#### [Goto mode  转到模式](https://docs.helix-editor.com/keymap.html#goto-mode)

Accessed by typing `g` in [normal mode](https://docs.helix-editor.com/keymap.html#normal-mode).  
在正常模式下输入 `g` 即可访问。

Jumps to various locations.  
跳转到不同的位置。

|Key|Description|Command|
|---|---|---|
|`g`|Go to line number `<n>` else start of file  <br>转到行号 `<n>` 否则文件开头|`goto_file_start`|
|`e`|Go to the end of the file  <br>转到文件末尾|`goto_last_line`|
|`f`|Go to files in the selections  <br>转到选择的文件|`goto_file`|
|`h`|Go to the start of the line  <br>转到该行的开头|`goto_line_start`|
|`l`|Go to the end of the line  <br>转到该行的末尾|`goto_line_end`|
|`s`|Go to first non-whitespace character of the line  <br>转到该行的第一个非空白字符|`goto_first_nonwhitespace`|
|`t`|Go to the top of the screen  <br>转到屏幕顶部|`goto_window_top`|
|`c`|Go to the middle of the screen  <br>转到屏幕中间|`goto_window_center`|
|`b`|Go to the bottom of the screen  <br>转到屏幕底部|`goto_window_bottom`|
|`d`|Go to definition (**LSP**) 转到定义 (LSP)|`goto_definition`|
|`y`|Go to type definition (**LSP**)  <br>转到类型定义 (LSP)|`goto_type_definition`|
|`r`|Go to references (**LSP**) 转到参考文献 (LSP)|`goto_reference`|
|`i`|Go to implementation (**LSP**)  <br>转到实施 (LSP)|`goto_implementation`|
|`a`|Go to the last accessed/alternate file  <br>转到上次访问/备用文件|`goto_last_accessed_file`|
|`m`|Go to the last modified/alternate file  <br>转到最后修改/备用文件|`goto_last_modified_file`|
|`n`|Go to next buffer 转到下一个缓冲区|`goto_next_buffer`|
|`p`|Go to previous buffer 转到上一个缓冲区|`goto_previous_buffer`|
|`.`|Go to last modification in current file  <br>转到当前文件的最后一次修改|`goto_last_modification`|
|`j`|Move down textual (instead of visual) line  <br>向下移动文本（而不是视觉）行|`move_line_down`|
|`k`|Move up textual (instead of visual) line  <br>向上移动文本（而不是视觉）行|`move_line_up`|
|`w`|Show labels at each word and select the word that belongs to the entered labels  <br>在每个单词处显示标签并选择属于输入标签的单词|`goto_word`|

#### [Match mode  比赛模式](https://docs.helix-editor.com/keymap.html#match-mode)

Accessed by typing `m` in [normal mode](https://docs.helix-editor.com/keymap.html#normal-mode).  
在正常模式下输入 `m` 即可访问。

See the relevant section in [Usage](https://docs.helix-editor.com/usage.html) for an explanation about [surround](https://docs.helix-editor.com/usage.html#surround) and [textobject](https://docs.helix-editor.com/usage.html#navigating-using-tree-sitter-textobjects) usage.  
有关环绕和文本对象用法的说明，请参阅用法中的相关部分。

|Key|Description|Command|
|---|---|---|
|`m`|Goto matching bracket (**TS**)  <br>转到匹配括号 (TS)|`match_brackets`|
|`s` `<char>`|Surround current selection with `<char>`  <br>用 `<char>` 包围当前选择|`surround_add`|
|`r` `<from><to>`|Replace surround character `<from>` with `<to>`  <br>将包围字符 `<from>` 替换为 `<to>`|`surround_replace`|
|`d` `<char>`|Delete surround character `<char>`  <br>删除环绕字符 `<char>`|`surround_delete`|
|`a` `<object>`|Select around textobject 选择文本对象周围|`select_textobject_around`|
|`i` `<object>`|Select inside textobject 选择内部文本对象|`select_textobject_inner`|

TODO: Mappings for selecting syntax nodes (a superset of `[`).  
TODO：用于选择语法节点的映射（ `[` 的超集）。

#### [Window mode  窗口模式](https://docs.helix-editor.com/keymap.html#window-mode)

Accessed by typing `Ctrl-w` in [normal mode](https://docs.helix-editor.com/keymap.html#normal-mode).  
在正常模式下输入 `Ctrl-w` 即可访问。

This layer is similar to Vim keybindings as Kakoune does not support windows.  
该层类似于 Vim 键绑定，因为 Kakoune 不支持 Windows。

|Key|Description|Command|
|---|---|---|
|`w`, `Ctrl-w`|Switch to next window 切换到下一个窗口|`rotate_view`|
|`v`, `Ctrl-v`|Vertical right split 垂直右分割|`vsplit`|
|`s`, `Ctrl-s`|Horizontal bottom split 水平底部剖分|`hsplit`|
|`f`|Go to files in the selections in horizontal splits  <br>转到水平分割的选择中的文件|`goto_file`|
|`F`|Go to files in the selections in vertical splits  <br>转到垂直分割的选择中的文件|`goto_file`|
|`h`, `Ctrl-h`, `Left`|Move to left split 移至左分割|`jump_view_left`|
|`j`, `Ctrl-j`, `Down`|Move to split below 移至下方拆分|`jump_view_down`|
|`k`, `Ctrl-k`, `Up`|Move to split above 移至上方拆分|`jump_view_up`|
|`l`, `Ctrl-l`, `Right`|Move to right split 移至右分割|`jump_view_right`|
|`q`, `Ctrl-q`|Close current window 关闭当前窗口|`wclose`|
|`o`, `Ctrl-o`|Only keep the current window, closing all the others  <br>只保留当前窗口，关闭所有其他窗口|`wonly`|
|`H`|Swap window to the left  <br>将窗口交换到左侧|`swap_view_left`|
|`J`|Swap window downwards 向下交换窗口|`swap_view_down`|
|`K`|Swap window upwards 向上交换窗口|`swap_view_up`|
|`L`|Swap window to the right  <br>将窗口向右交换|`swap_view_right`|

#### [Space mode  太空模式](https://docs.helix-editor.com/keymap.html#space-mode)

Accessed by typing `Space` in [normal mode](https://docs.helix-editor.com/keymap.html#normal-mode).  
在正常模式下输入 `Space` 即可访问。

This layer is a kludge of mappings, mostly pickers.  
这一层是一堆映射，主要是选择器。

|Key|Description|Command|
|---|---|---|
|`f`|Open file picker 打开文件选择器|`file_picker`|
|`F`|Open file picker at current working directory  <br>在当前工作目录中打开文件选择器|`file_picker_in_current_directory`|
|`b`|Open buffer picker 打开缓冲区选择器|`buffer_picker`|
|`j`|Open jumplist picker 打开跳转列表选择器|`jumplist_picker`|
|`g`|Debug (experimental) 调试（实验）|N/A|
|`k`|Show documentation for item under cursor in a [popup](https://docs.helix-editor.com/keymap.html#popup) (**LSP**)  <br>在弹出窗口中显示光标下项目的文档 (LSP)|`hover`|
|`s`|Open document symbol picker (**LSP**)  <br>打开文档符号选择器 (LSP)|`symbol_picker`|
|`S`|Open workspace symbol picker (**LSP**)  <br>打开工作区符号选择器 (LSP)|`workspace_symbol_picker`|
|`d`|Open document diagnostics picker (**LSP**)  <br>打开文档诊断选择器 (LSP)|`diagnostics_picker`|
|`D`|Open workspace diagnostics picker (**LSP**)  <br>开放工作区诊断选择器 (LSP)|`workspace_diagnostics_picker`|
|`r`|Rename symbol (**LSP**) 重命名符号 (LSP)|`rename_symbol`|
|`a`|Apply code action (**LSP**) 应用代码操作 (LSP)|`code_action`|
|`h`|Select symbol references (**LSP**)  <br>选择符号引用 (LSP)|`select_references_to_symbol_under_cursor`|
|`'`|Open last fuzzy picker 打开最后一个模糊选择器|`last_picker`|
|`w`|Enter [window mode](https://docs.helix-editor.com/keymap.html#window-mode) 进入窗口模式|N/A|
|`c`|Comment/uncomment selections  <br>评论/取消评论选择|`toggle_comments`|
|`C`|Block comment/uncomment selections  <br>阻止注释/取消注释选择|`toggle_block_comments`|
|`Alt-c`|Line comment/uncomment selections  <br>行注释/取消注释选择|`toggle_line_comments`|
|`p`|Paste system clipboard after selections  <br>选择后粘贴系统剪贴板|`paste_clipboard_after`|
|`P`|Paste system clipboard before selections  <br>在选择之前粘贴系统剪贴板|`paste_clipboard_before`|
|`y`|Yank selections to clipboard  <br>将所选内容复制到剪贴板|`yank_to_clipboard`|
|`Y`|Yank main selection to clipboard  <br>将主要选择复制到剪贴板|`yank_main_selection_to_clipboard`|
|`R`|Replace selections by clipboard contents  <br>用剪贴板内容替换选择内容|`replace_selections_with_clipboard`|
|`/`|Global search in workspace folder  <br>工作区文件夹中的全局搜索|`global_search`|
|`?`|Open command palette 打开命令面板|`command_palette`|

> 💡 Global search displays results in a fuzzy picker, use `Space + '` to bring it back up after opening a file.  
> 💡 全局搜索在模糊选择器中显示结果，打开文件后使用 `Space + '` 将其恢复。

##### [Popup  弹出窗口](https://docs.helix-editor.com/keymap.html#popup)

Displays documentation for item under cursor.  
显示光标下项目的文档。

|Key|Description|
|---|---|
|`Ctrl-u`|Scroll up|
|`Ctrl-d`|Scroll down|

#### [Unimpaired  未受损](https://docs.helix-editor.com/keymap.html#unimpaired)

These mappings are in the style of [vim-unimpaired](https://github.com/tpope/vim-unimpaired).  
这些映射是 vim-unimpaired 的风格。

|Key|Description|Command|
|---|---|---|
|`]d`|Go to next diagnostic (**LSP**)  <br>转到下一个诊断 (LSP)|`goto_next_diag`|
|`[d`|Go to previous diagnostic (**LSP**)  <br>转到上一个诊断 (LSP)|`goto_prev_diag`|
|`]D`|Go to last diagnostic in document (**LSP**)  <br>转到文档中的最后一个诊断 (LSP)|`goto_last_diag`|
|`[D`|Go to first diagnostic in document (**LSP**)  <br>转至文档中的第一个诊断 (LSP)|`goto_first_diag`|
|`]f`|Go to next function (**TS**)  <br>转到下一个功能 (TS)|`goto_next_function`|
|`[f`|Go to previous function (**TS**)  <br>转到上一个功能 (TS)|`goto_prev_function`|
|`]t`|Go to next type definition (**TS**)  <br>转到下一个类型定义 (TS)|`goto_next_class`|
|`[t`|Go to previous type definition (**TS**)  <br>转到上一个类型定义 (TS)|`goto_prev_class`|
|`]a`|Go to next argument/parameter (**TS**)  <br>转到下一个自变量/参数 (TS)|`goto_next_parameter`|
|`[a`|Go to previous argument/parameter (**TS**)  <br>转到上一个自变量/参数 (TS)|`goto_prev_parameter`|
|`]c`|Go to next comment (**TS**)  <br>转到下一条评论 (TS)|`goto_next_comment`|
|`[c`|Go to previous comment (**TS**)  <br>转到上一条评论 (TS)|`goto_prev_comment`|
|`]T`|Go to next test (**TS**)  <br>进入下一个测试（TS）|`goto_next_test`|
|`[T`|Go to previous test (**TS**)  <br>转到上一个测试 (TS)|`goto_prev_test`|
|`]p`|Go to next paragraph 转到下一段|`goto_next_paragraph`|
|`[p`|Go to previous paragraph 转到上一段|`goto_prev_paragraph`|
|`]g`|Go to next change 转到下一个更改|`goto_next_change`|
|`[g`|Go to previous change 转到上一个更改|`goto_prev_change`|
|`]G`|Go to last change 转到最后一次更改|`goto_last_change`|
|`[G`|Go to first change 转到第一个更改|`goto_first_change`|
|`]Space`|Add newline below 在下面添加换行符|`add_newline_below`|
|`[Space`|Add newline above 在上面添加换行符|`add_newline_above`|

## [Insert mode  插入模式](https://docs.helix-editor.com/keymap.html#insert-mode)

Accessed by typing `i` in [normal mode](https://docs.helix-editor.com/keymap.html#normal-mode).  
在正常模式下输入 `i` 即可访问。

Insert mode bindings are minimal by default. Helix is designed to be a modal editor, and this is reflected in the user experience and internal mechanics. Changes to the text are only saved for undos when escaping from insert mode to normal mode.  
默认情况下，插入模式绑定是最少的。 Helix 被设计为一个模态编辑器，这体现在用户体验和内部机制上。仅当从插入模式转义到正常模式时，才会保存对文本的更改以供撤消。

> 💡 New users are strongly encouraged to learn the modal editing paradigm to get the smoothest experience.  
> 💡 强烈鼓励新用户学习模态编辑范例以获得最流畅的体验。

|Key|Description|Command|
|---|---|---|
|`Escape`|Switch to normal mode 切换到正常模式|`normal_mode`|
|`Ctrl-s`|Commit undo checkpoint 提交撤消检查点|`commit_undo_checkpoint`|
|`Ctrl-x`|Autocomplete|`completion`|
|`Ctrl-r`|Insert a register content  <br>插入寄存器内容|`insert_register`|
|`Ctrl-w`, `Alt-Backspace`|Delete previous word 删除前一个单词|`delete_word_backward`|
|`Alt-d`, `Alt-Delete`|Delete next word 删除下一个单词|`delete_word_forward`|
|`Ctrl-u`|Delete to start of line  <br>删除到行首|`kill_to_line_start`|
|`Ctrl-k`|Delete to end of line  <br>删除到行尾|`kill_to_line_end`|
|`Ctrl-h`, `Backspace`, `Shift-Backspace`|Delete previous char 删除前一个字符|`delete_char_backward`|
|`Ctrl-d`, `Delete`|Delete next char 删除下一个字符|`delete_char_forward`|
|`Ctrl-j`, `Enter`|Insert new line 插入新行|`insert_newline`|

These keys are not recommended, but are included for new users less familiar with modal editors.  
不推荐使用这些键，但为不太熟悉模式编辑器的新用户提供了这些键。

|Key|Description|Command|
|---|---|---|
|`Up`|Move to previous line 移至上一行|`move_line_up`|
|`Down`|Move to next line 移至下一行|`move_line_down`|
|`Left`|Backward a char 向后一个字符|`move_char_left`|
|`Right`|Forward a char 转发一个字符|`move_char_right`|
|`PageUp`|Move one page up 向上移动一页|`page_up`|
|`PageDown`|Move one page down 向下移动一页|`page_down`|
|`Home`|Move to line start 移至行首|`goto_line_start`|
|`End`|Move to line end 移至行尾|`goto_line_end_newline`|

As you become more comfortable with modal editing, you may want to disable some insert mode bindings. You can do this by editing your `config.toml` file.  
当您对模式编辑越来越熟悉时，您可能需要禁用某些插入模式绑定。您可以通过编辑 `config.toml` 文件来完成此操作。

`[keys.insert] up = "no_op" down = "no_op" left = "no_op" right = "no_op" pageup = "no_op" pagedown = "no_op" home = "no_op" end = "no_op"`

## [Select / extend mode  
选择/扩展模式](https://docs.helix-editor.com/keymap.html#select--extend-mode)

Accessed by typing `v` in [normal mode](https://docs.helix-editor.com/keymap.html#normal-mode).  
在正常模式下输入 `v` 即可访问。

Select mode echoes Normal mode, but changes any movements to extend selections rather than replace them. Goto motions are also changed to extend, so that `vgl`, for example, extends the selection to the end of the line.  
选择模式与正常模式相呼应，但会更改任何移动以扩展选择而不是替换它们。转到动作也更改为扩展，例如 `vgl` 将选择范围扩展到行尾。

Search is also affected. By default, `n` and `N` will remove the current selection and select the next instance of the search term. Toggling this mode before pressing `n` or `N` makes it possible to keep the current selection. Toggling it on and off during your iterative searching allows you to selectively add search terms to your selections.  
搜索也受到影响。默认情况下， `n` 和 `N` 将删除当前选择并选择搜索词的下一个实例。在按 `n` 或 `N` 之前切换此模式可以保留当前选择。在迭代搜索过程中打开和关闭它可以让您有选择地将搜索词添加到您的选择中。

## [Picker  拾取器](https://docs.helix-editor.com/keymap.html#picker)

Keys to use within picker. Remapping currently not supported.  
在选择器中使用的键。目前不支持重新映射。

|Key|Description|
|---|---|
|`Shift-Tab`, `Up`, `Ctrl-p`|Previous entry 上一个条目|
|`Tab`, `Down`, `Ctrl-n`|Next entry|
|`PageUp`, `Ctrl-u`|Page up|
|`PageDown`, `Ctrl-d`|Page down|
|`Home`|Go to first entry 转到第一个条目|
|`End`|Go to last entry 转到最后一个条目|
|`Enter`|Open selected 打开选定的|
|`Alt-Enter`|Open selected in the background without closing the picker  <br>在后台打开所选内容而不关闭选择器|
|`Ctrl-s`|Open horizontally 水平打开|
|`Ctrl-v`|Open vertically 垂直打开|
|`Ctrl-t`|Toggle preview 切换预览|
|`Escape`, `Ctrl-c`|Close picker|

## [Prompt  迅速的](https://docs.helix-editor.com/keymap.html#prompt)

Keys to use within prompt, Remapping currently not supported.  
在提示中使用的按键，当前不支持重新映射。

|Key|Description|
|---|---|
|`Escape`, `Ctrl-c`|Close prompt|
|`Alt-b`, `Ctrl-Left`|Backward a word 倒退一个字|
|`Ctrl-b`, `Left`|Backward a char 向后一个字符|
|`Alt-f`, `Ctrl-Right`|Forward a word 转发一句话|
|`Ctrl-f`, `Right`|Forward a char 转发一个字符|
|`Ctrl-e`, `End`|Move prompt end 移动提示结束|
|`Ctrl-a`, `Home`|Move prompt start 移动提示开始|
|`Ctrl-w`, `Alt-Backspace`, `Ctrl-Backspace`|Delete previous word 删除前一个单词|
|`Alt-d`, `Alt-Delete`, `Ctrl-Delete`|Delete next word 删除下一个单词|
|`Ctrl-u`|Delete to start of line  <br>删除到行首|
|`Ctrl-k`|Delete to end of line  <br>删除到行尾|
|`Backspace`, `Ctrl-h`, `Shift-Backspace`|Delete previous char 删除前一个字符|
|`Delete`, `Ctrl-d`|Delete next char 删除下一个字符|
|`Ctrl-s`|Insert a word under doc cursor, may be changed to Ctrl-r Ctrl-w later  <br>在文档光标下插入一个单词，稍后可能会更改为 Ctrl-r Ctrl-w|
|`Ctrl-p`, `Up`|Select previous history 选择之前的历史记录|
|`Ctrl-n`, `Down`|Select next history 选择下一条历史记录|
|`Ctrl-r`|Insert the content of the register selected by following input char  <br>插入由以下输入字符选择的寄存器的内容|
|`Tab`|Select next completion item  <br>选择下一个完成项目|
|`BackTab`|Select previous completion item  <br>选择上一个完成项目|
|`Enter`|Open selected 打开选定的

# [Commands 命令](https://docs.helix-editor.com/commands.html#commands)

Command mode can be activated by pressing `:`. The built-in commands are:  
按 `:` 可以激活命令模式。内置命令是：

|Name|Description|
|---|---|
|`:quit`, `:q`|Close the current view. 关闭当前视图。|
|`:quit!`, `:q!`|Force close the current view, ignoring unsaved changes.  <br>强制关闭当前视图，忽略未保存的更改。|
|`:open`, `:o`|Open a file from disk into the current view.  <br>从磁盘打开文件到当前视图。|
|`:buffer-close`, `:bc`, `:bclose`|Close the current buffer.  <br>关闭当前缓冲区。|
|`:buffer-close!`, `:bc!`, `:bclose!`|Close the current buffer forcefully, ignoring unsaved changes.  <br>强行关闭当前缓冲区，忽略未保存的更改。|
|`:buffer-close-others`, `:bco`, `:bcloseother`|Close all buffers but the currently focused one.  <br>关闭除当前焦点缓冲区之外的所有缓冲区。|
|`:buffer-close-others!`, `:bco!`, `:bcloseother!`|Force close all buffers but the currently focused one.  <br>强制关闭除当前焦点缓冲区之外的所有缓冲区。|
|`:buffer-close-all`, `:bca`, `:bcloseall`|Close all buffers without quitting.  <br>关闭所有缓冲区而不退出。|
|`:buffer-close-all!`, `:bca!`, `:bcloseall!`|Force close all buffers ignoring unsaved changes without quitting.  <br>强制关闭所有缓冲区，忽略未保存的更改而不退出。|
|`:buffer-next`, `:bn`, `:bnext`|Goto next buffer. 转到下一个缓冲区。|
|`:buffer-previous`, `:bp`, `:bprev`|Goto previous buffer. 转到上一个缓冲区。|
|`:write`, `:w`|Write changes to disk. Accepts an optional path (:write some/path.txt)  <br>将更改写入磁盘。接受可选路径 (:write some/path.txt)|
|`:write!`, `:w!`|Force write changes to disk creating necessary subdirectories. Accepts an optional path (:write! some/path.txt)  <br>强制将更改写入磁盘，创建必要的子目录。接受可选路径 (:write!some/path.txt)|
|`:write-buffer-close`, `:wbc`|Write changes to disk and closes the buffer. Accepts an optional path (:write-buffer-close some/path.txt)  <br>将更改写入磁盘并关闭缓冲区。接受可选路径 (:write-buffer-close some/path.txt)|
|`:write-buffer-close!`, `:wbc!`|Force write changes to disk creating necessary subdirectories and closes the buffer. Accepts an optional path (:write-buffer-close! some/path.txt)  <br>强制将更改写入磁盘，创建必要的子目录并关闭缓冲区。接受可选路径 (:write-buffer-close!some/path.txt)|
|`:new`, `:n`|Create a new scratch buffer.  <br>创建一个新的暂存缓冲区。|
|`:format`, `:fmt`|Format the file using the LSP formatter.  <br>使用 LSP 格式化程序格式化文件。|
|`:indent-style`|Set the indentation style for editing. ('t' for tabs or 1-16 for number of spaces.)  <br>设置编辑时的缩进样式。 （“t”表示制表符，1-16 表示空格数。）|
|`:line-ending`|Set the document's default line ending. Options: crlf, lf.  <br>设置文档的默认行结尾。选项：crlf、lf。|
|`:earlier`, `:ear`|Jump back to an earlier point in edit history. Accepts a number of steps or a time span.  <br>跳回编辑历史记录中的较早点。接受多个步骤或一个时间跨度。|
|`:later`, `:lat`|Jump to a later point in edit history. Accepts a number of steps or a time span.  <br>跳转到编辑历史记录中的稍后一点。接受多个步骤或一个时间跨度。|
|`:write-quit`, `:wq`, `:x`|Write changes to disk and close the current view. Accepts an optional path (:wq some/path.txt)  <br>将更改写入磁盘并关闭当前视图。接受可选路径 (:wq some/path.txt)|
|`:write-quit!`, `:wq!`, `:x!`|Write changes to disk and close the current view forcefully. Accepts an optional path (:wq! some/path.txt)  <br>将更改写入磁盘并强制关闭当前视图。接受可选路径 (:wq!some/path.txt)|
|`:write-all`, `:wa`|Write changes from all buffers to disk.  <br>将所有缓冲区的更改写入磁盘。|
|`:write-all!`, `:wa!`|Forcefully write changes from all buffers to disk creating necessary subdirectories.  <br>将所有缓冲区中的更改强制写入磁盘，创建必要的子目录。|
|`:write-quit-all`, `:wqa`, `:xa`|Write changes from all buffers to disk and close all views.  <br>将所有缓冲区的更改写入磁盘并关闭所有视图。|
|`:write-quit-all!`, `:wqa!`, `:xa!`|Write changes from all buffers to disk and close all views forcefully (ignoring unsaved changes).  <br>将所有缓冲区中的更改写入磁盘并强制关闭所有视图（忽略未保存的更改）。|
|`:quit-all`, `:qa`|Close all views. 关闭所有视图。|
|`:quit-all!`, `:qa!`|Force close all views ignoring unsaved changes.  <br>强制关闭所有视图，忽略未保存的更改。|
|`:cquit`, `:cq`|Quit with exit code (default 1). Accepts an optional integer exit code (:cq 2).  <br>使用退出代码退出（默认为 1）。接受可选的整数退出代码 (:cq 2)。|
|`:cquit!`, `:cq!`|Force quit with exit code (default 1) ignoring unsaved changes. Accepts an optional integer exit code (:cq! 2).  <br>使用退出代码（默认为 1）强制退出，忽略未保存的更改。接受可选的整数退出代码 (:cq!2)。|
|`:theme`|Change the editor theme (show current theme if no name specified).  <br>更改编辑器主题（如果未指定名称，则显示当前主题）。|
|`:yank-join`|Yank joined selections. A separator can be provided as first argument. Default value is newline.  <br>Yank 加入了选拔。可以提供分隔符作为第一个参数。默认值为换行符。|
|`:clipboard-yank`|Yank main selection into system clipboard.  <br>将主要选择拖入系统剪贴板。|
|`:clipboard-yank-join`|Yank joined selections into system clipboard. A separator can be provided as first argument. Default value is newline.  <br>Yank 将选择内容加入到系统剪贴板中。可以提供分隔符作为第一个参数。默认值为换行符。|
|`:primary-clipboard-yank`|Yank main selection into system primary clipboard.  <br>将主要选择拖入系统主剪贴板。|
|`:primary-clipboard-yank-join`|Yank joined selections into system primary clipboard. A separator can be provided as first argument. Default value is newline.  <br>Yank 将选择内容加入到系统主剪贴板中。可以提供分隔符作为第一个参数。默认值为换行符。|
|`:clipboard-paste-after`|Paste system clipboard after selections.  <br>选择后粘贴系统剪贴板。|
|`:clipboard-paste-before`|Paste system clipboard before selections.  <br>在选择之前粘贴系统剪贴板。|
|`:clipboard-paste-replace`|Replace selections with content of system clipboard.  <br>将选择内容替换为系统剪贴板的内容。|
|`:primary-clipboard-paste-after`|Paste primary clipboard after selections.  <br>选择后粘贴主剪贴板。|
|`:primary-clipboard-paste-before`|Paste primary clipboard before selections.  <br>在选择之前粘贴主剪贴板。|
|`:primary-clipboard-paste-replace`|Replace selections with content of system primary clipboard.  <br>将选择内容替换为系统主剪贴板的内容。|
|`:show-clipboard-provider`|Show clipboard provider name in status bar.  <br>在状态栏中显示剪贴板提供程序名称。|
|`:change-current-directory`, `:cd`|Change the current working directory.  <br>更改当前工作目录。|
|`:show-directory`, `:pwd`|Show the current working directory.  <br>显示当前工作目录。|
|`:encoding`|Set encoding. Based on `https://encoding.spec.whatwg.org`.  <br>设置编码。基于 `https://encoding.spec.whatwg.org` 。|
|`:character-info`, `:char`|Get info about the character under the primary cursor.  <br>获取有关主光标下的字符的信息。|
|`:reload`, `:rl`|Discard changes and reload from the source file.  <br>放弃更改并从源文件重新加载。|
|`:reload-all`, `:rla`|Discard changes and reload all documents from the source files.  <br>放弃更改并从源文件重新加载所有文档。|
|`:update`, `:u`|Write changes only if the file has been modified.  <br>仅当文件已修改时才写入更改。|
|`:lsp-workspace-command`|Open workspace command picker  <br>打开工作区命令选择器|
|`:lsp-restart`|Restarts the language servers used by the current doc  <br>重新启动当前文档使用的语言服务器|
|`:lsp-stop`|Stops the language servers that are used by the current doc  <br>停止当前文档使用的语言服务器|
|`:tree-sitter-scopes`|Display tree sitter scopes, primarily for theming and development.  <br>显示树保姆范围，主要用于主题和开发。|
|`:tree-sitter-highlight-name`|Display name of tree-sitter highlight scope under the cursor.  <br>显示光标下树保姆突出显示范围的名称。|
|`:debug-start`, `:dbg`|Start a debug session from a given template with given parameters.  <br>使用给定参数从给定模板启动调试会话。|
|`:debug-remote`, `:dbg-tcp`|Connect to a debug adapter by TCP address and start a debugging session from a given template with given parameters.  <br>通过 TCP 地址连接到调试适配器，并使用给定参数从给定模板启动调试会话。|
|`:debug-eval`|Evaluate expression in current debug context.  <br>评估当前调试上下文中的表达式。|
|`:vsplit`, `:vs`|Open the file in a vertical split.  <br>以垂直分割方式打开文件。|
|`:vsplit-new`, `:vnew`|Open a scratch buffer in a vertical split.  <br>以垂直分割方式打开暂存缓冲区。|
|`:hsplit`, `:hs`, `:sp`|Open the file in a horizontal split.  <br>以水平分割方式打开文件。|
|`:hsplit-new`, `:hnew`|Open a scratch buffer in a horizontal split.  <br>以水平分割方式打开暂存缓冲区。|
|`:tutor`|Open the tutorial. 打开教程。|
|`:goto`, `:g`|Goto line number. 转到行号。|
|`:set-language`, `:lang`|Set the language of current buffer (show current language if no value specified).  <br>设置当前缓冲区的语言（如果未指定值则显示当前语言）。|
|`:set-option`, `:set`|Set a config option at runtime.  <br>在运行时设置配置选项。  <br>For example to disable smart case search, use `:set search.smart-case false`.  <br>例如，要禁用智能案例搜索，请使用 `:set search.smart-case false` 。|
|`:toggle-option`, `:toggle`|Toggle a boolean config option at runtime.  <br>在运行时切换布尔配置选项。  <br>For example to toggle smart case search, use `:toggle search.smart-case`.  <br>例如，要切换智能大小写搜索，请使用 `:toggle search.smart-case` 。|
|`:get-option`, `:get`|Get the current value of a config option.  <br>获取配置选项的当前值。|
|`:sort`|Sort ranges in selection.  <br>对选择范围进行排序。|
|`:rsort`|Sort ranges in selection in reverse order.  <br>以相反的顺序对选择中的范围进行排序。|
|`:reflow`|Hard-wrap the current selection of lines to a given width.  <br>将当前选择的行硬包装到给定宽度。|
|`:tree-sitter-subtree`, `:ts-subtree`|Display tree sitter subtree under cursor, primarily for debugging queries.  <br>在光标下显示树守护者子树，主要用于调试查询。|
|`:config-reload`|Refresh user config. 刷新用户配置。|
|`:config-open`|Open the user config.toml file.  <br>打开用户 config.toml 文件。|
|`:config-open-workspace`|Open the workspace config.toml file.  <br>打开工作区 config.toml 文件。|
|`:log-open`|Open the helix log file.  <br>打开螺旋日志文件。|
|`:insert-output`|Run shell command, inserting output before each selection.  <br>运行 shell 命令，在每个选择之前插入输出。|
|`:append-output`|Run shell command, appending output after each selection.  <br>运行 shell 命令，在每次选择后附加输出。|
|`:pipe`|Pipe each selection to the shell command.  <br>将每个选择通过管道传递给 shell 命令。|
|`:pipe-to`|Pipe each selection to the shell command, ignoring output.  <br>将每个选择通过管道传递给 shell 命令，忽略输出。|
|`:run-shell-command`, `:sh`|Run a shell command 运行外壳命令|
|`:reset-diff-change`, `:diffget`, `:diffg`|Reset the diff change at the cursor position.  <br>重置光标位置处的差异更改。|
|`:clear-register`|Clear given register. If no argument is provided, clear all registers.  <br>清除给定的寄存器。如果未提供参数，则清除所有寄存器。|
|`:redraw`|Clear and re-render the whole UI  <br>清除并重新渲染整个 UI|
|`:move`|Move the current buffer and its corresponding file to a different path  <br>将当前缓冲区及其对应的文件移动到不同的路径|
|`:yank-diagnostic`|Yank diagnostic(s) under primary cursor to register, or clipboard by default  <br>默认情况下，在主光标下提取诊断信息以进行注册或剪贴板|