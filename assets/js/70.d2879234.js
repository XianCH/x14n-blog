(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{949:function(a,t,s){"use strict";s.r(t);var e=s(2),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"springboot日志学习"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#springboot日志学习"}},[a._v("#")]),a._v(" springboot日志学习")]),a._v(" "),t("h2",{attrs:{id:"_1-日志内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-日志内容"}},[a._v("#")]),a._v(" 1，日志内容")]),a._v(" "),t("p",[a._v("（1）时间日期:精确到亳秒")]),a._v(" "),t("p",[a._v("（2）日志级别: ERROR, WARN, INFO, DEBUG or TRACE")]),a._v(" "),t("p",[a._v("（3）进程 ID")]),a._v(" "),t("p",[a._v("（4）分隔符: -标识实际日志的开始")]),a._v(" "),t("p",[a._v("（5）线程名:方括号括起来(可能会截断控制台输出)")]),a._v(" "),t("p",[a._v("（6）Logger 名:通常使用源代码的类名")]),a._v(" "),t("p",[a._v("（7）日志内容")]),a._v(" "),t("h2",{attrs:{id:"_2-日志依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-日志依赖"}},[a._v("#")]),a._v(" 2，日志依赖")]),a._v(" "),t("p",[a._v("在springboot中的默认日志框架是Logback，其他主流的日志框架它也支持，比如log4j或者log4j2用INFO级别输出到控制台。")]),a._v(" "),t("div",{staticClass:"language-maven extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("<dependency>\n<groupld>org.springframework. boot</groupld>\n<artifactld>spring- boot-starter-logging</artifactld>\n</dependency>\n")])])]),t("h2",{attrs:{id:"_3-日志级别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-日志级别"}},[a._v("#")]),a._v(" 3，日志级别")]),a._v(" "),t("ol",[t("li",[a._v("TRACE，DEBUG，INFO， WARN，ERROR，FATAL，0FF")])]),a._v(" "),t("p",[a._v("​\t从低到高分别为")]),a._v(" "),t("p",[a._v("TRACE < DEBUG < INFO < WARN < ERROR < FATAL< OFF。")]),a._v(" "),t("p",[a._v("注意：如果设置了某个日志级别，则等级比他低的就不能输出了")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("logging.level.root = INFO\n")])])]),t("h2",{attrs:{id:"_4-输出日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-输出日志"}},[a._v("#")]),a._v(" 4，输出日志")]),a._v(" "),t("p",[a._v("1，logging. file，设置文件，可以是绝对路径，也可以是相对路径。file就是指定日志文件，指定路径，指定文件名，可以是相对路径，也可以是绝对路径")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("logging.file = log/my.log (相对)\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("logging.file = /log/my.log(绝对)\n")])])]),t("p",[a._v("2，logging. path，以日志文件的路径，不需要名称，不需要文件名，设置目录，会在该目录下默认创建 spring. log 文件，并写入日志内容")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("logging.path = /var/log\n")])])]),t("h2",{attrs:{id:"_5-配置日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-配置日志"}},[a._v("#")]),a._v(" 5，配置日志")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("logging . level. root=WARn\n")])])]),t("p",[a._v("设置 root 级别是 warn")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("logging.level.org. springframework. web=DEBUG \n")])])]),t("p",[a._v("设置 org. springframework. web 级别输出 DEBUG 级别及以上")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("logging. file=e: \\\\springboot\\\\info. Log\n")])])]),t("p",[a._v("把日志信息写入日志文件，绝对路径，在 e 盘下springboot下写入日志文件，日志文件扩展名是 log，注意 info. Log 文件会自动生成，不需要事先创建")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("logging. pattern. console=%d {yyyy/MM/ dd-HH :mm:ss}\n")])])]),t("p",[a._v("如果想要指定日志的格式，默认在控制台显示日志，同时向文件中写入日志，这是配置控制台写入日志的格式")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("[%thread] %-5level %logger- %msg%n\nlogging. pattern. file=%d {yvyy/ MM/ dd-HH: mm}\n")])])]),t("p",[a._v("这是配置文件中日志的格式")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("[%thread] %-5level %logger- %msg%n\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);