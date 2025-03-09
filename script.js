// 题目数据（假设有足够多的题目）
const questions = [
    // 地理题目 (1-15)
    {
        question: "日本的渔业方式有______、冲合渔业、沿岸渔业。",
        options: ["A. 横纲渔业", "B. 纲引渔业", "C. 地曳渔业", "D. 远洋渔业"],
        answer: "D"
    },
    {
        question: "至今仍有大量美军军事基地的地方是______。",
        options: ["A. 四国", "B. 硫黄岛", "C. 冲绳", "D. 北海道"],
        answer: "C"
    },
    {
        question: "______是仅次于北海道的第二大稻米产区。",
        options: ["A. 千叶县", "B. 熊本县", "C. 徳岛县", "D. 新潟县"],
        answer: "D"
    },
    {
        question: "过去被称为“虾夷地”的地方是______，曾是阿伊努民族的居住地。",
        options: ["A. 北海道", "B. 桦太", "C. 千岛", "D. 樺太"],
        answer: "A"
    },
    {
        question: "1995年1月17日清晨，大地震发生在______。",
        options: ["A. 阪神地区", "B. 关东地区", "C. 九州地区", "D. 北陆地区"],
        answer: "A"
    },
    {
        question: "日本的总人口约为1亿2千万人（1995年），居世界第______位。",
        options: ["A. 第0位", "B. 第8位", "C. 第11位", "D. 第13位"],
        answer: "B"
    },
    {
        question: "______的砂丘东西长16公里，南北宽24公里，是日本最大的砂丘。",
        options: ["A. 岛根", "B. 三重", "C. 鸟取", "D. 岩手"],
        answer: "C"
    },
    {
        question: "日本是一个多山的国家，国土的______是山地。",
        options: ["A. 四分之三", "B. 五分之四", "C. 五分之三", "D. 三分之二"],
        answer: "D"
    },
    {
        question: "由于大气污染，许多人患上了哮喘病，这种现象被称为______。",
        options: ["A. 前桥市", "B. 横滨市", "C. 水户市", "D. 四日市"],
        answer: "D"
    },
    {
        question: "日本第二大的平原是______。",
        options: ["A. 石狩平原", "B. 大阪平原", "C. 筑紫平原", "D. 仙台平原"],
        answer: "A"
    },
    {
        question: "中京工业地带的特色之一是______。",
        options: ["A. 钢铁工业", "B. 汽车工业", "C. 化学工业", "D. 精密工业"],
        answer: "B"
    },
    {
        question: "日本冬季受大陆方向的西北季风影响，______大量降下。",
        options: ["A. 梅雨", "B. 雪", "C. 霜", "D. 雨"],
        answer: "B"
    },
    {
        question: "日本的国土由本州、北海道、______、四国以及散布的约4000个岛屿组成。",
        options: ["A. 甲府", "B. 万座", "C. 九州", "D. 冲绳"],
        answer: "C"
    },
    {
        question: "日本除了北海道外，每个地方都有______一种动物栖息。",
        options: ["A. 猴子", "B. 鹤", "C. 棕熊", "D. 狼"],
        answer: "A"
    },
    {
        question: "______被称为高山地带，飞驒、木曾、赤石三山脉耸立其中。",
        options: ["A. 日本奥林匹斯", "B. 日本猛犸", "C. 日本绿洲", "D. 日本阿尔卑斯"],
        answer: "D"
    },

    // 社会题目 (16-55)
    {
        question: "生花作为招待客人的插花艺术，主要放置在______。",
        options: ["A. 厨房", "B. 洗碗台", "C. 天花板", "D. 壁龛"],
        answer: "D"
    },
    {
        question: "苹果主要种植在青森县和______等寒冷地区。",
        options: ["A. 山梨县", "B. 长野县", "C. 岐阜县", "D. 冈山县"],
        answer: "B"
    },
    {
        question: "正月时，日本人会享用独特的料理______来庆祝。",
        options: ["A. 御节料理", "B. 精进料理", "C. 怀石料理", "D. 本膳料理"],
        answer: "A"
    },
    {
        question: "天皇、皇族的生活和活动的皇室费用分为______、宫廷费、皇族费。",
        options: ["A. 大藏费", "B. 宫内费", "C. 内里费", "D. 内廷费"],
        answer: "D"
    },
    {
        question: "发行量最大的报社______成立于1874年。",
        options: ["A. 读卖新闻", "B. 每日新闻", "C. 朝日新闻", "D. 产经新闻"],
        answer: "A"
    },
    {
        question: "16世纪完成的______是日本最古老的戏剧，至今仍在演出。",
        options: ["A. 歌舞伎", "B. 文乐", "C. 能", "D. 狂言"],
        answer: "C"
    },
    {
        question: "日本的教育从小学到______是义务教育。",
        options: ["A. 中学", "B. 高中", "C. 小学", "D. 大学"],
        answer: "A"
    },
    {
        question: "日本的外交中，______的友好关系是最优先的。",
        options: ["A. 日中", "B. 日美", "C. 日俄", "D. 日韩"],
        answer: "B"
    },
    {
        question: "和服的正装通常会搭配______和袴。",
        options: ["A. 足袋", "B. 裸", "C. 羽织", "D. 夹"],
        answer: "C"
    },
    {
        question: "中日恢复邦交是在______年9月。",
        options: ["A. 1972年", "B. 1976年", "C. 1978年", "D. 1956年"],
        answer: "A"
    },
    {
        question: "现在的相扑比赛是在直径4.55米的______中，两位力士比拼技艺。",
        options: ["A. 土俵", "B. 土坛场", "C. 坛之浦", "D. 土间"],
        answer: "A"
    },
    {
        question: "日本的进口资源中，______的依赖度非常高。",
        options: ["A. 粘土", "B. 石灰石", "C. 石油", "D. 硫磺"],
        answer: "C"
    },
    {
        question: "______是日本最古老的文学作品。",
        options: ["A. 古事记", "B. 竹取物语", "C. 古今和歌集", "D. 土佐日记"],
        answer: "A"
    },
    {
        question: "1946年公布的现行日本国宪法于1947年______实施。",
        options: ["A. 11月3日", "B. 5月3日", "C. 6月1日", "D. 1月15日"],
        answer: "B"
    },
    {
        question: "______被誉为王朝文学的杰作，被视为日本文学的代表作。",
        options: ["A. 枕草子", "B. 源氏物语", "C. 古今和歌集", "D. 土佐日记"],
        answer: "B"
    },
    {
        question: "日本是农产品进口国，尤其是谷物的自给率仅为______左右。",
        options: ["A. 30%", "B. 10%", "C. 18%", "D. 25%"],
        answer: "A"
    },
    {
        question: "1989年1月，昭和天皇去世，皇太子______即位。",
        options: ["A. 文仁亲王", "B. 德仁亲王", "C. 明仁亲王", "D. 嘉仁亲王"],
        answer: "C"
    },
    {
        question: "在各种礼物中，最具日本特色的是______和岁暮。",
        options: ["A. 元旦", "B. 彼岸", "C. 中元", "D. 大安"],
        answer: "C"
    },
    {
        question: "______是黑潮和亲潮交汇的地方，暖流和寒流的鱼类资源丰富，是优良的渔场。",
        options: ["A. 对马海峡", "B. 三陆冲", "C. 北陆冲", "D. 鸣门海峡"],
        answer: "B"
    },
    {
        question: "被称为______的大众酒馆是日常生活中最常被利用的场所。",
        options: ["A. 赤炼瓦", "B. 赤屋顶", "C. 赤屋台", "D. 赤提灯"],
        answer: "D"
    },
    {
        question: "日本的国家象征是______。",
        options: ["A. 大将军", "B. 太政大臣", "C. 天皇", "D. 老中"],
        answer: "C"
    },
    {
        question: "室町时代，茶道艺术性提高，茶道成为茶汤，16世纪后半期由______完成。",
        options: ["A. 千利休", "B. 珠光", "C. 明智光秀", "D. 小堀远州"],
        answer: "A"
    },
    {
        question: "1970年代的两次______使日本经济进入稳定增长期。",
        options: ["A. 越南战争", "B. 石油危机", "C. 海湾战争", "D. 泡沫经济"],
        answer: "B"
    },
    {
        question: "______是日本固有的自然宗教，19世纪以后被当作国教。",
        options: ["A. 日莲宗", "B. 神道", "C. 修验道", "D. 净土真宗"],
        answer: "B"
    },
    {
        question: "社会保障制度的核心包括医疗保险、______、劳动灾害保险、养老金保险。",
        options: ["A. 收入保险", "B. 资产保险", "C. 储蓄保险", "D. 失业保险"],
        answer: "D"
    },
    {
        question: "______和夏目漱石被称为近代文学的两大巨匠。",
        options: ["A. 森鸥外", "B. 芥川龙之介", "C. 志贺直哉", "D. 泉镜花"],
        answer: "A"
    },
    {
        question: "______是日本文化的根基。",
        options: ["A. 飞鸟文化", "B. 绳文文化", "C. 贝冢文化", "D. 古坟文化"],
        answer: "B"
    },
    {
        question: "内阁为了分担业务，设立了由国务大臣领导的______个省。",
        options: ["A. 10", "B. 12", "C. 8", "D. 15"],
        answer: "B"
    },
    {
        question: "一日三餐的习惯始于______。",
        options: ["A. 奈良时代", "B. 镰仓时代", "C. 平安时代", "D. 室町时代"],
        answer: "D"
    },
    {
        question: "在人际关系中，最受重视的价值是______。",
        options: ["A. 耻", "B. 罪", "C. 和", "D. 寂"],
        answer: "C"
    },
    {
        question: "禅宗在12-13世纪由僧人______和道元传入日本。",
        options: ["A. 最澄", "B. 亲鸾", "C. 三扇", "D. 荣西"],
        answer: "D"
    },
    {
        question: "日本全国分为东京商圈和______两大商业圈。",
        options: ["A. 神户商圈", "B. 名古屋商圈", "C. 大阪商圈", "D. 川崎商圈"],
        answer: "C"
    },
    {
        question: "志贺直哉的长篇小说______获得了高度评价。",
        options: ["A. 明暗", "B. 暗夜行路", "C. 鹤戎", "D. 浮云"],
        answer: "B"
    },
    {
        question: "______和终身雇佣制度被认为是日本经营的重大特质。",
        options: ["A. 劳动组合", "B. 集议制", "C. 劳资协议", "D. 年功序列制度"],
        answer: "D"
    },
    {
        question: "1964年东京奥运会后，______成为奥运项目。",
        options: ["A. 弓道", "B. 柔道", "C. 空手道", "D. 剑道"],
        answer: "B"
    },
    {
        question: "神前婚礼中，新郎新娘之间有一个“______”的仪式。",
        options: ["A. 二二六度", "B. 七五三度", "C. 三三九度", "D. 五一五度"],
        answer: "C"
    },
    {
        question: "日本的国会由______和众议院组成。",
        options: ["A. 参议院", "B. 贵族院", "C. 元老院", "D. 众议院"],
        answer: "A"
    },
    {
        question: "日本的广播系统由公共广播局______和民间广播局（民放）并存。",
        options: ["A. NHK", "B. KDD", "C. JTB", "D. 民放"],
        answer: "A"
    },
    {
        question: "1994年，______成为日本第二位获得诺贝尔文学奖的作家。",
        options: ["A. 开高健", "B. 村上春树", "C. 渡边淳一", "D. 大江健三郎"],
        answer: "D"
    },
    {
        question: "______是江户时代的绘画，至今仍被广泛欣赏。",
        options: ["A. 大和绘", "B. 浮世绘", "C. 水墨画", "D. 屏风绘"],
        answer: "B"
    },

    // 历史题目 (56-76)
    {
        question: "日本通过______的胜利成为列强之一。",
        options: ["A. 日俄战争", "B. 日清战争", "C. 不平等条约的改正", "D. 大政奉还"],
        answer: "A"
    },
    {
        question: "昭和天皇在1946年发表了所谓的______，否定了自己的神格。",
        options: ["A. 玉音放送", "B. 关白宣言", "C. 人间宣言", "D. 生数送"],
        answer: "C"
    },
    {
        question: "日本的弥生文化持续到______左右。",
        options: ["A. 公元3世纪", "B. 公元前3世纪", "C. 公元6世纪", "D. 公元前6世纪"],
        answer: "A"
    },
    {
        question: "______使平氏的势力迅速扩张。",
        options: ["A. 清盛", "B. 义满", "C. 赖朝", "D. 时政"],
        answer: "A"
    },
    {
        question: "6世纪，______从朝鲜半岛的各国传入日本。",
        options: ["A. 儒教", "B. 净土教", "C. 真理教", "D. 佛教"],
        answer: "D"
    },
    {
        question: "芭蕉在日本各地旅行，创作了______等优秀的纪行文。",
        options: ["A. 奥之细道", "B. 道程", "C. 道标", "D. 道标"],
        answer: "A"
    },
    {
        question: "战国时代的开端是1467年发生的______。",
        options: ["A. 应仁之乱", "B. 岛原之乱", "C. 磐井之乱", "D. 戊辰之乱"],
        answer: "A"
    },
    {
        question: "邪马台国中有大人、______等身份秩序。",
        options: ["A. 下户", "B. 役人", "C. 奴仆", "D. 下户"],
        answer: "D"
    },
    {
        question: "法然宣扬专修念佛的教义，后来被尊为______的开祖。",
        options: ["A. 天台宗", "B. 净土宗", "C. 真言宗", "D. 时宗"],
        answer: "B"
    },
    {
        question: "______是现存最古老的汉诗集。",
        options: ["A. 万叶集", "B. 怀风藻", "C. 岁时记", "D. 古今和歌集"],
        answer: "B"
    },
    {
        question: "______主张茶与禅的统一，追求心灵的宁静，创造了侘茶。",
        options: ["A. 村田珠光", "B. 小林一茶", "C. 永井荷风", "D. 松尾芭蕉"],
        answer: "A"
    },
    {
        question: "明治时代，福泽谕吉等人创办了______等私立学校，形成了独特的学风。",
        options: ["A. 庆应义塾", "B. 同志社", "C. 适塾", "D. 明星"],
        answer: "A"
    },
    {
        question: "镰仓幕府的统治基础是将军与______之间的主从关系。",
        options: ["A. 公家", "B. 御家人", "C. 天皇", "D. 土民"],
        answer: "B"
    },
    {
        question: "新宪法的三大原则是______、和平主义、基本人权的尊重。",
        options: ["A. 三权分立", "B. 天皇主权", "C. 议会主权", "D. 主权在民"],
        answer: "D"
    },
    {
        question: "1941年12月，______爆发。",
        options: ["A. 甲午战争", "B. 戊申战争", "C. 太平洋战争", "D. 第二次世界大战"],
        answer: "C"
    },
    {
        question: "日本人口第三大的城市是______。",
        options: ["A. 仙台", "B. 大阪", "C. 名古屋", "D. 神户"],
        answer: "B"
    },
    {
        question: "岛根县的县厅位于______。",
        options: ["A. 松江市", "B. 高松市", "C. 松山市", "D. 甲府市"],
        answer: "A"
    },
    {
        question: "阪神大地震发生在______年1月17日。",
        options: ["A. 1992", "B. 1993", "C. 1994", "D. 1995"],
        answer: "D"
    },
    {
        question: "九州地区的政治、经济、文化中心是______市。",
        options: ["A. 长崎", "B. 熊本", "C. 九州", "D. 福冈"],
        answer: "D"
    },
    {
        question: "广岛和______在二战末期遭受了原子弹轰炸。",
        options: ["A. 宫崎", "B. 川崎", "C. 尾崎", "D. 长崎"],
        answer: "D"
    },

    // 自然災害・交通
    {
        question: "风灾和水灾是由______引起的自然灾害。",
        options: ["A. 地震", "B. 冷害", "C. 海啸", "D. 台风"],
        answer: "D"
    },
    {
        question: "日本代表性的造纸工业城市是______。",
        options: ["A. 苫小牧", "B. 旭川", "C. 小樽", "D. 函馆"],
        answer: "A"
    },
    {
        question: "千岁机场是______的空中门户。",
        options: ["A. 北海道", "B. 旭川", "C. 小樽", "D. 函馆"],
        answer: "A"
    },
    {
        question: "本州和______之间有青函隧道。",
        options: ["A. 四国", "B. 北海道", "C. 九州", "D. 冲绳"],
        answer: "B"
    },

    // 政治・憲法
    {
        question: "世界三大渔场之一位于______的近海。",
        options: ["A. 北海道", "B. 青森", "C. 濑户内海", "D. 能登半岛"],
        answer: "A"
    },
    {
        question: "日本国权的最高机关是______。",
        options: ["A. 内阁", "B. 国会", "C. 警视厅", "D. 法务省"],
        answer: "B"
    },
    {
        question: "日本的外交中，______的友好关系是最优先的。",
        options: ["A. 日中", "B. 日美", "C. 日俄", "D. 日韩"],
        answer: "B"
    },
    {
        question: "日本国宪法的三大基本原则是国民主权、______、和平主义。",
        options: ["A. 国民生活的提高", "B. 劳动条件的改善", "C. 经济的发展", "D. 基本人权的保障"],
        answer: "D"
    },

    // 歴史・文化
    {
        question: "1937年7月7日，日本发动了______，全面展开了侵略战争。",
        options: ["A. 满洲事变", "B. 上海事件", "C. 卢沟桥事变", "D. 南京大屠杀"],
        answer: "C"
    },
    {
        question: "歌舞伎舞台装置中有花道和______等独特的设计。",
        options: ["A. 镜台", "B. 旋转舞台", "C. 三棵松", "D. 乐屋"],
        answer: "B"
    },
    {
        question: "新感觉派运动的发起者是______。",
        options: ["A. 大江健三郎", "B. 川端康成", "C. 小林多喜二", "D. 森鸥外"],
        answer: "B"
    },
    {
        question: "佛教在奈良时代受到天皇家和有力氏族的支持，成为______的存在。",
        options: ["A. 国教", "B. 皇族宗教", "C. 贵族宗教", "D. 大众宗教"],
        answer: "A"
    },
    {
        question: "花道最大的流派是______。",
        options: ["A. 池坊", "B. 未生流", "C. 小原流", "D. 草月流"],
        answer: "A"
    },
    {
        question: "大相扑每年在东京举行______次。",
        options: ["A. 1", "B. 3", "C. 4", "D. 6"],
        answer: "B"
    },
    {
        question: "日本在______年首次制定了义务教育制度。",
        options: ["A. 1868", "B. 1872", "C. 1945", "D. 1946"],
        answer: "B"
    },

    // 社会・生活
    {
        question: "因利库路特公司献金丑闻引发国民不满而下台的首相是______。",
        options: ["A. 竹下登", "B. 宫泽喜一", "C. 大平正芳", "D. 桥本龙太郎"],
        answer: "A"
    },
    {
        question: "私立大学中最有名的是庆应大学和______大学。",
        options: ["A. 早稻田", "B. 一桥", "C. 同志社", "D. 上智"],
        answer: "A"
    },
    {
        question: "现代日本，______占全家庭的约60%。",
        options: ["A. 二世同堂家庭", "B. 母子家庭", "C. 父子家庭", "D. 核心家庭"],
        answer: "D"
    },
    {
        question: "日本成人式在______岁举行。",
        options: ["A. 18", "B. 20", "C. 22", "D. 23"],
        answer: "B"
    },
    {
        question: "与《源氏物语》齐名，被誉为日本文学最高杰作的是______。",
        options: ["A. 竹取物语", "B. 枕草子", "C. 平家物语", "D. 土佐日记"],
        answer: "B"
    },

    // 経済・統計
    {
        question: "1990年以后，日本的相亲结婚占______。",
        options: ["A. 15%", "B. 25%", "C. 30%", "D. 35%"],
        answer: "A"
    },
    {
        question: "日本的农用土地面积占国土的______%。",
        options: ["A. 12", "B. 13", "C. 14", "D. 15"],
        answer: "C"
    },
    {
        question: "日本于______年与48个国家签署了《旧金山和约》。",
        options: ["A. 1951", "B. 1957", "C. 1958", "D. 1959"],
        answer: "A"
    },

    // 文化・芸能
    {
        question: "人形剧的文乐，别称______。",
        options: ["A. 人形剧", "B. 人形净琉璃", "C. 净琉璃剧", "D. 狂言"],
        answer: "B"
    },
    {
        question: "平安时代贵族的住宅被称为______，具有浓郁的日本风格。",
        options: ["A. 寝殿造", "B. 书院造", "C. 数寄屋", "D. 寄木造"],
        answer: "A"
    },
    {
        question: "临济宗的开祖是______。",
        options: ["A. 亲鸾", "B. 空海", "C. 法然", "D. 荣西"],
        answer: "D"
    },
    {
        question: "军记物语的最高杰作是______。",
        options: ["A. 暗夜行路", "B. 舞姬", "C. 古今和歌集", "D. 平家物语"],
        answer: "D"
    },
    {
        question: "最早的敕撰和歌集《古今和歌集》由______等人编纂。",
        options: ["A. 藤原道长", "B. 小野小町", "C. 清少纳言", "D. 纪贯之"],
        answer: "D"
    },
    
    {
        question: "日本朝鮮半島接する。",
        options: ["A. 対馬海峡", "B. 宗谷海峡", "C. 宮古海峡", "D. 鳴門海峡"],
        answer: "A"
    },
    {
        question: "日本注1都、1道、2府、県に分计5扎(八面。",
        options: ["A. 41", "B.42", "C. 43", "D. 44"],
        answer: "C"
    },
    {
        question: "日本の行政区域の中で面積が一番広いのはどこですか？",
        options: ["A. 東京都", "B. 岩手県", "C. 北海道", "D. 大阪府"],
        answer: "C"
    },
    {
        question: "東京・大阪・名古屋の三大都市圏で人口集中が著しいのはどれですか？",
        options: ["A. 神戸", "B. 横浜", "C. 福岡", "D. 名古屋"],
        answer: "D"
    },
    {
        question: "日本の海岸にある砂丘で最大のものはどこですか？",
        options: ["A. 島根", "B. 鳥取", "C. 兵庫", "D. 広島"],
        answer: "B"
    },
    {
        question: "日本の森林が国土面積の約何パーセントを占めていますか？",
        options: ["A. 3分の1", "B. 2分の1", "C. 3分の2", "D. 4分の3"],
        answer: "C"
    },
    {
        question: "日本の茶道の大成者として知られる人物は誰ですか？",
        options: ["A. 表千家", "B. 千利休", "C. 空海", "D. 藤原行成"],
        answer: "B"
    },
    {
        question: "日本で最初の勅撰和歌集は何ですか？",
        options: ["A. 古事記", "B. 日本書紀", "C. 萬葉集", "D. 土佐日記"],
        answer: "C"
    },
    {
        question: "明治維新が起こった年は何年ですか？",
        options: ["A. 1867年", "B. 1868年", "C. 1869年", "D. 1870年"],
        answer: "B"
    },
    {
        question: "日本の最高裁判所長官は誰によって任命されますか？",
        options: ["A. 内閣", "B. 天皇", "C. 国会", "D. 宮内庁"],
        answer: "B"
    },
    {
        question: "日本で最も深い湖はどこですか？",
        options: ["A. 琵琶湖", "B. 田沢湖", "C. 摩周湖", "D. 十和田湖"],
        answer: "B"
    },
    {
        question: "日本の伝統的な結婚式の多くはどの形式ですか？",
        options: ["A. 仏前結婚式", "B. 神前結婚式", "C. 人前結婚式", "D. 教会結婚式"],
        answer: "B"
    },
    {
        question: "日本列島が大陸から切り離されたのはいつごろと考えられていますか？",
        options: ["A. 1万年前", "B. 10万年前", "C. 100万年前", "D. 1000万年前"],
        answer: "A"
    },
    {
        question: "大化の改新が行われたのは西暦何年ですか？",
        options: ["A. 645年", "B. 701年", "C. 794年", "D. 1192年"],
        answer: "A"
    },
    {
        question: "江戸幕府を開いたのは誰ですか？",
        options: ["A. 源頼朝", "B. 豊臣秀吉", "C. 徳川家康", "D. 足利尊氏"],
        answer: "C"
    },
    {
        question: "明治維新の年号は何ですか？",
        options: ["A. 昭和", "B. 大正", "C. 明治", "D. 平成"],
        answer: "C"
    },
    {
        question: "第二次世界大戦で日本が降伏したのは何年ですか？",
        options: ["A. 1943年", "B. 1944年", "C. 1945年", "D. 1946年"],
        answer: "C"
    },

    // 文档2 - 地理 (15题)
    {
        question: "日本国土の面積約万  $km^{2}下$ .",
        options: ["A.35", "B.36", "C.37", "D.38"],
        answer: "C" // [重点]
    },
    {
        question: "北海道の道庁所在地",
        options: ["A. 札幌", "B. 函館", "C. 小樽", "D. 稚内"],
        answer: "A" // [重点]
    },
    {
        question: "日本で人口密度が最も高い都道府県は？",
        options: ["A. 東京都", "B. 大阪府", "C. 神奈川県", "D. 愛知県"],
        answer: "A"
    },
    {
        question: "日本の三大都市圏で人口集中が著しいのはどれですか？",
        options: ["A. 神戸", "B. 横浜", "C. 福岡", "D. 名古屋"],
        answer: "D"
    },
    {
        question: "日本の海岸にある砂丘で最大のものはどこですか？",
        options: ["A. 島根", "B. 鳥取", "C. 兵庫", "D. 広島"],
        answer: "B" // [重点]
    },
    {
        question: "日本の森林が国土面積の約何パーセントを占めていますか？",
        options: ["A. 3分の1", "B. 2分の1", "C. 3分の2", "D. 4分の3"],
        answer: "C"
    },
    {
        question: "日本の茶道の大成者として知られる人物は誰ですか？",
        options: ["A. 表千家", "B. 千利休", "C. 空海", "D. 藤原行成"],
        answer: "B"
    },
    {
        question: "明治維新が起こった年は何年ですか？",
        options: ["A. 1867年", "B. 1868年", "C. 1869年", "D. 1870年"],
        answer: "B"
    },
    {
        question: "日本の最高裁判所長官は誰によって任命されますか？",
        options: ["A. 内閣", "B. 天皇", "C. 国会", "D. 宮内庁"],
        answer: "B"
    },
    {
        question: "日本で最も深い湖はどこですか？",
        options: ["A. 琵琶湖", "B. 田沢湖", "C. 摩周湖", "D. 十和田湖"],
        answer: "B"
    },
    {
        question: "日本の伝統的な結婚式の多くはどの形式ですか？",
        options: ["A. 仏前結婚式", "B. 神前結婚式", "C. 人前結婚式", "D. 教会結婚式"],
        answer: "B"
    },
    {
        question: "日本列島が大陸から切り離されたのはいつごろと考えられていますか？",
        options: ["A. 1万年前", "B. 10万年前", "C. 100万年前", "D. 1000万年前"],
        answer: "A"
    },
    {
        question: "大化の改新が行われたのは西暦何年ですか？",
        options: ["A. 645年", "B. 701年", "C. 794年", "D. 1192年"],
        answer: "A"
    },
    {
        question: "江戸幕府を開いたのは誰ですか？",
        options: ["A. 源頼朝", "B. 豊臣秀吉", "C. 徳川家康", "D. 足利尊氏"],
        answer: "C"
    },
    {
        question: "明治維新の年号は何ですか？",
        options: ["A. 昭和", "B. 大正", "C. 明治", "D. 平成"],
        answer: "C"
    },
    {
        question: "第二次世界大戦で日本が降伏したのは何年ですか？",
        options: ["A. 1943年", "B. 1944年", "C. 1945年", "D. 1946年"],
        answer: "C"
    },

    // 文档3 - 社会文化 (15题)
    {
        question: "日本の三権分立を担う機関は？",
        options: ["A. 議院", "B. 内閣", "C. 最高裁判所", "D. 検察庁"],
        answer: "B,C,D" // [重点]
    },
    {
        question: "日本の最高裁判所長官任命権者",
        options: ["A. 内閣", "B. 天皇", "C. 国会", "D. 宮内庁"],
        answer: "B" // [重点]
    },
    {
        question: "日本の国技とされるスポーツは？",
        options: ["A. 相撲", "B. 野球", "C. サッカー", "D. 柔道"],
        answer: "A"
    },
    {
        question: "日本の伝統的な結婚式の多くはどの形式ですか？",
        options: ["A. 仏前結婚式", "B. 神前結婚式", "C. 人前結婚式", "D. 教会結婚式"],
        answer: "B"
    },
    {
        question: "日本の人口密度が最も高い都道府県は？",
        options: ["A. 東京都", "B. 大阪府", "C. 神奈川県", "D. 愛知県"],
        answer: "A"
    },
    {
        question: "日本の三大都市圏で人口集中が著しいのはどれですか？",
        options: ["A. 神戸", "B. 横浜", "C. 福岡", "D. 名古屋"],
        answer: "D"
    },
    {
        question: "日本の海岸にある砂丘で最大のものはどこですか？",
        options: ["A. 島根", "B. 鳥取", "C. 兵庫", "D. 広島"],
        answer: "B" // [重点]
    },
    {
        question: "日本の森林が国土面積の約何パーセントを占めていますか？",
        options: ["A. 3分の1", "B. 2分の1", "C. 3分の2", "D. 4分の3"],
        answer: "C"
    },
    {
        question: "日本の茶道の大成者として知られる人物は誰ですか？",
        options: ["A. 表千家", "B. 千利休", "C. 空海", "D. 藤原行成"],
        answer: "B"
    },
    {
        question: "明治維新が起こった年は何年ですか？",
        options: ["A. 1867年", "B. 1868年", "C. 1869年", "D. 1870年"],
        answer: "B"
    },
    {
        question: "日本の最高裁判所長官は誰によって任命されますか？",
        options: ["A. 内閣", "B. 天皇", "C. 国会", "D. 宮内庁"],
        answer: "B"
    },
    {
        question: "日本で最も深い湖はどこですか？",
        options: ["A. 琵琶湖", "B. 田沢湖", "C. 摩周湖", "D. 十和田湖"],
        answer: "B"
    },
    {
        question: "日本の伝統的な結婚式の多くはどの形式ですか？",
        options: ["A. 仏前結婚式", "B. 神前結婚式", "C. 人前結婚式", "D. 教会結婚式"],
        answer: "B"
    },
    {
        question: "日本列島が大陸から切り離されたのはいつごろと考えられていますか？",
        options: ["A. 1万年前", "B. 10万年前", "C. 100万年前", "D. 1000万年前"],
        answer: "A"
    },
    {
        question: "大化の改新が行われたのは西暦何年ですか？",
        options: ["A. 645年", "B. 701年", "C. 794年", "D. 1192年"],
        answer: "A"
    },
    {
        question: "江戸幕府を開いたのは誰ですか？",
        options: ["A. 源頼朝", "B. 豊臣秀吉", "C. 徳川家康", "D. 足利尊氏"],
        answer: "C"
    },
    {
        question: "明治維新の年号は何ですか？",
        options: ["A. 昭和", "B. 大正", "C. 明治", "D. 平成"],
        answer: "C"
    },
    {
        question: "第二次世界大戦で日本が降伏したのは何年ですか？",
        options: ["A. 1943年", "B. 1944年", "C. 1945年", "D. 1946年"],
        answer: "C"
    },

    // 文档4 - 歴史 (15题)
    {
        question: "大化の改新が行われた年",
        options: ["A. 645年", "B. 701年", "C. 794年", "D. 1192年"],
        answer: "A" // [重点]
    },
    {
        question: "明治維新が起こった年",
        options: ["A. 1867年", "B. 1868年", "C. 1869年", "D. 1870年"],
        answer: "B" // [重点]
    },
    {
        question: "日本の三権分立を担う機関は？",
        options: ["A. 議院", "B. 内閣", "C. 最高裁判所", "D. 検察庁"],
        answer: "B,C,D" // [重点]
    },
    {
        question: "日本の最高裁判所長官任命権者",
        options: ["A. 内閣", "B. 天皇", "C. 国会", "D. 宮内庁"],
        answer: "B" // [重点]
    },
    {
        question: "日本の国技とされるスポーツは？",
        options: ["A. 相撲", "B. 野球", "C. サッカー", "D. 柔道"],
        answer: "A"
    },
    {
        question: "日本の伝統的な結婚式の多くはどの形式ですか？",
        options: ["A. 仏前結婚式", "B. 神前結婚式", "C. 人前結婚式", "D. 教会結婚式"],
        answer: "B"
    },
    {
        question: "日本の人口密度が最も高い都道府県は？",
        options: ["A. 東京都", "B. 大阪府", "C. 神奈川県", "D. 愛知県"],
        answer: "A"
    },
    {
        question: "日本の三大都市圏で人口集中が著しいのはどれですか？",
        options: ["A. 神戸", "B. 横浜", "C. 福岡", "D. 名古屋"],
        answer: "D"
    },
    {
        question: "日本の海岸にある砂丘で最大のものはどこですか？",
        options: ["A. 島根", "B. 鳥取", "C. 兵庫", "D. 広島"],
        answer: "B" // [重点]
    },
    {
        question: "日本の森林が国土面積の約何パーセントを占めていますか？",
        options: ["A. 3分の1", "B. 2分の1", "C. 3分の2", "D. 4分の3"],
        answer: "C"
    },
    {
        question: "日本の茶道の大成者として知られる人物は誰ですか？",
        options: ["A. 表千家", "B. 千利休", "C. 空海", "D. 藤原行成"],
        answer: "B"
    },
    {
        question: "明治維新が起こった年は何年ですか？",
        options: ["A. 1867年", "B. 1868年", "C. 1869年", "D. 1870年"],
        answer: "B"
    },
    {
        question: "日本の最高裁判所長官は誰によって任命されますか？",
        options: ["A. 内閣", "B. 天皇", "C. 国会", "D. 宮内庁"],
        answer: "B"
    },
    {
        question: "日本で最も深い湖はどこですか？",
        options: ["A. 琵琶湖", "B. 田沢湖", "C. 摩周湖", "D. 十和田湖"],
        answer: "B"
    },
    {
        question: "日本の伝統的な結婚式の多くはどの形式ですか？",
        options: ["A. 仏前結婚式", "B. 神前結婚式", "C. 人前結婚式", "D. 教会結婚式"],
        answer: "B"
    },
    {
        question: "日本列島が大陸から切り離されたのはいつごろと考えられていますか？",
        options: ["A. 1万年前", "B. 10万年前", "C. 100万年前", "D. 1000万年前"],
        answer: "A"
    },
    {
        question: "大化の改新が行われたのは西暦何年ですか？",
        options: ["A. 645年", "B. 701年", "C. 794年", "D. 1192年"],
        answer: "A"
    },
    {
        question: "江戸幕府を開いたのは誰ですか？",
        options: ["A. 源頼朝", "B. 豊臣秀吉", "C. 徳川家康", "D. 足利尊氏"],
        answer: "C"
    },
    {
        question: "明治維新の年号は何ですか？",
        options: ["A. 昭和", "B. 大正", "C. 明治", "D. 平成"],
        answer: "C"
    },
    {
        question: "第二次世界大戦で日本が降伏したのは何年ですか？",
        options: ["A. 1943年", "B. 1944年", "C. 1945年", "D. 1946年"],
        answer: "C"
    }
];


    // 更多题目...
    // 假设 questions 数组中有足够多的题目（至少 100 道）


    let currentQuestionIndex = 0;
    let score = 0;
    let correctCount = 0;
    let wrongCount = 0;
    let randomizedQuestions = [];
    let numberOfQuestions = 5; // 默认题目数量
    
    // 获取DOM元素
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const submitButton = document.getElementById('submit-btn');
    const nextButton = document.getElementById('next-btn');
    const prevButton = document.getElementById('prev-btn');
    const resultElement = document.getElementById('result');
    const scoreElement = document.getElementById('score');
    const statsElement = document.getElementById('stats');
    const restartButton = document.getElementById('restart-btn');
    const questionCountInput = document.getElementById('question-count');
    const startButton = document.getElementById('start-btn');
    const questionContainer = document.getElementById('question-container');
    const pagination = document.getElementById('pagination');
    const wrongAnswersContainer = document.createElement('div'); // 用于显示错题
    
    // 随机打乱题目数组并抽取指定数量的题目
    function shuffleQuestions() {
        if (questions.length < numberOfQuestions) {
            alert("题目数量不足，请添加更多题目！");
            return;
        }
        randomizedQuestions = questions.sort(() => Math.random() - 0.5).slice(0, numberOfQuestions);
    }
    
    // 加载题目
    function loadQuestion() {
        const currentQuestion = randomizedQuestions[currentQuestionIndex];
        questionElement.textContent = `问题${currentQuestionIndex + 1}：${currentQuestion.question}`;
        optionsElement.innerHTML = '';
        currentQuestion.options.forEach((option, index) => {
            const li = document.createElement('li');
            li.innerHTML = `<input type="radio" name="answer" value="${String.fromCharCode(65 + index)}"> ${option}`;
            optionsElement.appendChild(li);
        });
    
        // 监听选项选择事件
        const radioButtons = document.querySelectorAll('input[name="answer"]');
        radioButtons.forEach(radio => {
            radio.addEventListener('change', function() {
                checkAnswer(this.value);
            });
        });
    
        resultElement.textContent = '';
        submitButton.style.display = 'none'; // 不需要提交按钮
        prevButton.disabled = currentQuestionIndex === 0;
        nextButton.disabled = currentQuestionIndex === randomizedQuestions.length - 1;
    }
    
    // 检查答案
    function checkAnswer(userAnswer) {
        const currentQuestion = randomizedQuestions[currentQuestionIndex];
        const correctAnswer = currentQuestion.answer;
    
        if (userAnswer === correctAnswer) {
            resultElement.textContent = '回答正确！';
            resultElement.style.color = 'green';
            score += 2; // 每答对一题加10分
            correctCount++;
    
            // 自动跳转到下一题
            setTimeout(() => {
                if (currentQuestionIndex < randomizedQuestions.length - 1) {
                    currentQuestionIndex++;
                    loadQuestion();
                } else {
                    endQuiz();
                }
            }, 1000); // 1秒后跳转
        } else {
            resultElement.textContent = `回答错误！正确答案是：${currentQuestion.options[correctAnswer.charCodeAt(0) - 65]}`;
            resultElement.style.color = 'red';
            wrongCount++;
    
            // 记录错题
            wrongAnswers.push({
                question: currentQuestion.question,
                userAnswer: currentQuestion.options[userAnswer.charCodeAt(0) - 65], // 用户选择的答案内容
                correctAnswer: currentQuestion.options[correctAnswer.charCodeAt(0) - 65] // 正确答案内容
            });
        }
    
        // 更新分数和统计
        scoreElement.textContent = `分数：${score}`;
        statsElement.textContent = `正确：${correctCount}，错误：${wrongCount}`;
    
        // 禁用选项
        const radioButtons = document.querySelectorAll('input[name="answer"]');
        radioButtons.forEach(radio => {
            radio.disabled = true;
        });
    }
    
    // 下一题
    nextButton.addEventListener('click', function() {
        if (currentQuestionIndex < randomizedQuestions.length - 1) {
            currentQuestionIndex++;
            loadQuestion();
        }
    });
    
    // 上一题
    prevButton.addEventListener('click', function() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            loadQuestion();
        }
    });
    
    // 重新开始
    restartButton.addEventListener('click', function() {
        init();
    });
    
    // 显示错题
    function showWrongAnswers() {
        wrongAnswersContainer.innerHTML = '<h2>错题回顾</h2>';
        if (wrongAnswers.length === 0) {
            wrongAnswersContainer.innerHTML += '<p>没有错题！</p>';
        } else {
            wrongAnswers.forEach((wrong, index) => {
                wrongAnswersContainer.innerHTML += `
                    <div class="wrong-answer">
                        <p><strong>问题${index + 1}：</strong>${wrong.question}</p>
                        <p><strong>你的答案：</strong>${wrong.userAnswer}</p>
                        <p><strong>正确答案：</strong>${wrong.correctAnswer}</p>
                    </div>
                `;
            });
        }
        document.querySelector('.container').appendChild(wrongAnswersContainer);
    }
    
    // 初始化
    function init() {
        numberOfQuestions = parseInt(questionCountInput.value, 10);
        if (isNaN(numberOfQuestions) || numberOfQuestions < 1 || numberOfQuestions > 100) {
            alert("请输入有效的题目数量（1-100）！");
            return;
        }
        shuffleQuestions(); // 随机打乱题目
        currentQuestionIndex = 0;
        score = 0;
        correctCount = 0;
        wrongCount = 0;
        wrongAnswers = []; // 重置错题记录
        loadQuestion();
        scoreElement.textContent = `分数：${score}`;
        statsElement.textContent = `正确：${correctCount}，错误：${wrongCount}`;
        questionContainer.style.display = 'block';
        pagination.style.display = 'block';
        restartButton.style.display = 'inline-block';
        startButton.style.display = 'none';
        questionCountInput.style.display = 'none';
        wrongAnswersContainer.innerHTML = ''; // 清空错题显示
    }
    
    // 开始答题
    startButton.addEventListener('click', function() {
        init();
    });
    
    // 答题结束
    function endQuiz() {
        questionContainer.style.display = 'none';
        pagination.style.display = 'none';
        restartButton.style.display = 'inline-block';
        resultElement.textContent = `答题结束！最终得分：${score} 分`;
        showWrongAnswers(); // 显示错题
    }
