/**
 * Created by xulanshan on 17-7-22.
 */
//总体概述

var comment = '土家族是中华民族大家族里的重要成员' +
    '，主要分布在湘鄂渝黔边区，以武陵山和酉水河、清江为中心，' +
    '西抵乌江，东接松宜，北起乌山，南接澧沅，' +
    '在我国中部偏西南地区。其悠久的历史和奇特的文化，' +
    '渗透在民族生产生活的方方面面。先秦时期，土家族先民巴' +
    '人就活跃在历史舞台上。唐末五代，土家族作为一个民族共' +
    '同体形成后，得到迅速发展，他们在改造自然过程中创造了光' +
    '辉的民族文化。土家族“西兰卡普”深为汉族人民所喜爱，土家' +
    '族竹枝歌是竹枝词的直接源头，为中华民族文学百花园的一枝' +
    '奇挹。摆手舞、跳丧舞、哭嫁歌....丰富了中华民族文化的内' +
    '容。土家族“吊脚楼”，这种独特的别具风格的建筑也深得国际国内' +
    '建筑界的赞扬。' ;
//历史 (来源说法+ 文化发展形成经历时期）
var history1 = '土家族是具有悠久历史和深厚文化传统的民族其' +
    '历史渊源有不同的说法，有的认为土家族是生活在武陵地区的土' +
    '著人和古代巴人融合而成，有的认为土家族是以巴人为主，融合' +
    '了其他族群而形成，有的认为在隋唐时期，乌蛮进入武陵地区，' +
    '融合了土著人、巴人而逐渐形成。<br/><br/> 土家族自古以来就有稳定的生活空间，在这个空间' +
    '内部，土家族经过原始社会阶段，经历了封建羁縻州郡管辖下的封' +
    '建土司制度，经历了清雍正、乾隆年间的改土归流而由封建领主' +
    '经济转变为封建地主经济的阶段。' ;

//居住
var house ='土家族在居住上是“俱各寨居”，即以血缘村落为主' +
    '要形式修建房屋，然后形成寨子。寨子形成地点不一，但形成必须' +
    '具备的条件是：有水源，可开垦土地多且集中，另外，有足够乔木' +
    '林。所以寨子多依山傍水，而房屋建筑的修建，由于受汉人“左青龙' +
    '右白虎”观念影响，房屋修建选址讲究后山厚实、左右不虚的地形。' +
    '若达不到这种理想的地方，就载以竹木或配以厢房、猪牛圈、推磨' +
    '房等辅助建筑。房屋朝向避免面对白岩或险峻的山崖，如避不开就' +
    '在前面造林遮挡住。';

//耕种
var work = '耕作，其实是生产。土家族的生产活动以种植业为主，分' +
    '水田和旱地耕作，主要栽种稻谷、苞谷、苕、洋芋等农作物。耕作' +
    '涉及梨头、耙、枷当、锄头等生产工具（以下会有各个生产工具的' +
    '图片）。因不同季节耕种农作物不同，也存在不同的类似于习俗的' +
    '活动，比如：关冬水与烧土、送春、打场、赶仗等等。' ;

//舞蹈
var dance = '舞蹈主以摆手舞为主，摆手舞是土家族的一种古老的舞' +
    '蹈。酉水流域的土家人在每年正月都要鸣锣击鼓摆手祭土王，这个' +
    '习俗源于古时土民为拔除不祥，祈求风调雨顺，在正月间男女集体' +
    '歌舞祭拜。土司期间，土司为了娱乐，便下令村寨的土家妇女来为' +
    '他跳舞。清朝改土归流后，摆手舞发展为岁时节令祭祀与祭土司的' +
    '活动。清同治十年（1871年）《保靖县志》卷二载：“正月初间，' +
    '男女齐聚跳舞，拔除不祥，名曰‘摆手’，又谓之‘调年’。立秋之' +
    '并春秋社日亦如此。' ;

//音乐
var music = '木叶情歌是一种土家族人用木叶吹奏出来的音乐，是一首情歌，情歌表现青年男女对爱情的真诚和勇敢追求的精神。\
来源于重庆市酉阳土家族苗族自治县的一首民歌，也是土家摆手舞的伴奏。<br>\
木叶情歌以歌传情，是千百年来酉阳土家小伙向心上姑娘求爱的独特方式。\
在过去，青年男女相互倾慕，却不便启齿，又不喜欢媒婆搬弄是非，于是就把满腔的爱写在木叶上。<br>\
土家后生随手摘下树叶奏出的乐声，委婉脆亮，簧音袅袅，充满着浪漫的诗情画意。随着岁月的沉淀，\
慢慢地演变成酉阳的一门民间绝技.'; 
var lang = '土家族语属汉藏语系藏缅语族，其语支的归属至今尚未' +
     '确定，与彝语较接近，现在讲正宗土家语的主要分布在湘西一些偏' +
    '远山区的部分土家族人，而在渝东南地区则几乎都被汉化，只有极' +
    '少偏远地方有讲地道的土家语的。' ;
var music_type = {
    local_music: {
        name: '民间音乐',
        info: '民间歌曲 按土家族的传统习惯可分为山歌、薅草锣鼓、劳动号子、摇儿歌与儿歌、风俗歌等。'
             +' (1) 山歌分为土家语山歌和汉语山歌两种，在酉水流域以《木叶情歌》最为出名。 '
             +'（2）薅草锣鼓，又称挖土歌。这种类型主要流行在湘西各县与永顺和平地区。'
             +'（3）劳动号子，因土家人世居武陵山区和酉水、澧水两岸，拖木运料，撬岩抬石，行船驾舟等，在劳动生活中占有重要地位，因而行船号子、拖木号子、岩工号子最为流行。'
    },
    ins_music: {
        name: '器乐',
        info: ''
    }
} ;

//节日
var festival = '岁时节日是人类社会发展到一定阶段的产物。酉水' +
    '流域土家族在生产、生活过程中形成了丰富的民族节日：团年、忙' +
    '年等。' ;

//吃喝
var drinkAndEat = '吃，在土家族中，因时节、节日不同吃的也不同' +
    '，但也存在一些四季皆宜的小吃。比如过年吃刨汤，吃社饭等。（' +
    '图片在搜集）喝，在土家族中，常存在自家粮酒，比如，苞谷酒，' +
    '苦荞酒，米酒，醪糟，等等。渝东南山区居住的土家人以玉米、薯' +
    '类、芥麦、豆类为主食，平坝丘陵地区以稻米、玉米为主食，杂以' +
    '薯类。辅以豆类制品、蔬菜为主。只要一进入土家族聚居地，便可以' +
    '吃到团馓、绿豆粉、糯米包子、油茶汤、米豆腐、血豆腐、神豆腐' +
    '和浑浆豆花等名小吃。而渝东南最有特色的肉类食品是烟熏腊肉。' +
    '土家人喜欢“高粱酒”和“咂酒”。其中“咂酒”最有名，是用高粱、' +
    '糯米为原材料，在陶罐中发酵后，饮前加开水浸泡十分钟便可饮用' +
    '，其味甘冽清纯。' ;

//婚假
var marry = '婚嫁涉及礼仪习俗较多，女方需准备陪嫁，男方需要准备过礼等等。以图片形式一幅幅展开。' ;
var marryInfo = {
    red: '（1）“红喜”：土家族姑娘的婚嫁习俗“哭嫁”。哭嫁歌可以分为“开声”、“哭父母”、“哭哥嫂”、“哭兄妹”、“哭舅父舅母”、“哭众亲”、“哭祖宗”、“哭上轿”等等。',
    white: '（2）“白喜”：土家族自古以来就认为人死也是一喜事，称“白喜”。土家人认为：从人死到下葬之间主要过程有：送终、报丧、入棺、祭奠、送葬、下葬等。长者临终，一般都要请“道士”来办丧事。'
} ;

var language = '土家族语属汉藏语系藏缅语族，其语支的归属至今尚未确定，与彝语较接近，现在讲正宗土家语的主要分布在湘西一些偏远山区的部分土家族人，而在渝东南地区则几乎都被汉化，只有极少偏远地方有讲地道的土家语的。';

var specificInfo = {
    infoIndex: ['music','dance', 'history', 'girl', 'boy', 'map','eat', 'drink', 'house', 'marry', 'work', 'tatoo', 'communicate'] ,
    comment: comment,
    history: {
        info1: history1,
        pic: [],
        coords: null
    },
    house: {
        info1: house,
        pic: ['house1','house2','house3'],
        coords: [[80,219,300,100,'吊脚楼', '<h4>多依山就势而建，呈虎坐形，以“左青龙，右白虎”中间为堂屋，左右两边称为饶间，作居住、做饭之用。</h4>\
                    <h4>饶间以中柱为界分为两半，前面作火炕，后面作卧室。</h4>\
                    <h4>吊脚楼上有绕楼的曲廊，曲廊还配有栏杆。“前朱雀，后玄武”为最佳屋场，后来讲究朝向，或坐西向东，或坐东向西。</h4>']]
    },
    map: {
        info1: house,
        pic: [],
        coords: [[465,248,300,200,'渝东南', '<h4>渝东南位于武陵山的重庆市渝东南地区的酉秀黔彭石，是中国西部四川盆地东南部大娄山和武陵山两大山系交汇的盆缘山地，与渝鄂湘黔四省市结合相连，是重庆唯一集中连片、也是全国为数不多的以土家族和苗族为主的少数民族聚居区。</h4>\
                <h4>渝东南旅游资源丰富，名胜古迹众多。以秀丽的自然山水、独特的历史文化、浓郁的民族风情，逐渐发展成为全国知名的旅游热点地区。</h4>']]
    },
    work: {
        info1: work,
        pic: ['work1', 'work2', 'work3', 'work4'],
        coords: [[368,205,300,100, '工作', '犁，用于田地耕地所用']]

    },
    dance: {
        info1: dance,
        pic: ['dance2', 'dance3', 'dance5', 'dance6','dance7','dance8'],
        coords: [[81,300,100,100,'摆手舞', '<h4>摆手舞其身体动作主要取材于生产劳动、日常生活和战斗。有“单摆”、“双摆”、“回旋摆”等。在长期发展变化，在各地不完全相同，但其基本特点却是一致的，即顺拐、屈膝、颤动、下沉</h4>\
                    <h4>摆手舞反映土家人的生产生活。如狩猎舞表现狩猎活动和摹拟禽兽活动姿态。包括“赶猴子”、“拖野鸡尾巴”、“犀牛看月”、“磨鹰闪翅”、“跳蛤蟆”等十多个动作。</h4>'],
                    [566,150,'吊脚楼','土家族大都居住在山坡陡岭，由于这地势关系，住房多采用吊脚楼形式。在住宅两端立四根木柱，沿着山坡的走向搭成木架，在与正屋地面平齐的高度上搭横木，盖上木板，三面装半装台的板壁或木走廊，以草或杉皮作天盖，楼下四面皆空，可用作堆积肥料，也可以临时拴牲口，楼上一般是闺女儿做鞋、绣花或乘凉的地方。']]
    },
    marry: {
        info1: marry,
        pic: ['marry1','marry2','marry3','marry4'],
        coords: [[302,247,300,100,'婚礼庆祝','结婚时长辈所穿红色衣服'], 
                    [654,262,100,100, '礼物', '亲属会送上一些自己定制的结婚物品，通常为红色的棉被']]
    },

    eat: {
        info1: drinkAndEat,
        pic: ['eat1', 'eat2', 'eat3', 'eat4', 'eat5', 'eat6', 'eat7'],
        coords: [[436,164,200,200, '腊肉',
        '<h4>(1) 将猪肉分成三到五斤(或者更大)的块，便于入味和加工;</h4>\
         <h4>(2）把盐炒黄，加花椒，辣椒，桔皮炒出香味出锅；</h4>\
         <h4>（3）把肉用这些调好的佐料抹匀，放入盆中，将盆底的肉皮朝下肉朝上，面上层的肉皮朝上肉朝下排放整齐，每3~5天翻一次，10天后沥干水分挂到熏房中；</h4>\
         <h4>（4）用松柏枝加核桃壳、花生壳、桔子皮等柴草料进行烟熏烘烤，月余后待肉变棕红时即可。熏好的肉应该放在通风处，可保存两至三年不变质，名曰“腊肉”，也称“土家腊肉”。</h4>\
        土家腊肉色泽焦黄、肉质坚实、熏香浓郁、风味独特。']]

    },
    drink: {
        info1: drinkAndEat,
        pic: ['drink1', 'drink2'],
        coords: [[464,188,400,200,'酒' ,'<h4>酿酒基本原理和过程主要包括：酒精发酵、淀粉糖化、制曲、原料处理、蒸馏取酒、老熟陈酿、勾兑调味等。</h4><hr>']]
    },
    music: {
        info1: music,
        info2: music_type, 
        info3: '<video src="https://v.qq.com/x/page/v05053rid5r.html"></video>',
        pic: ['song1', 'song2', 'song3'],
        coords: [[170,217,100,100,'木叶' ,'<h4>优良的树种，通常采用桔、柚、杨、枫、冬青等无毒的树叶，叶片的结构匀称，正、背两面都应平整光滑，以柔韧适度、不老不嫩的叶子为佳。</h4>\
                    <h4>太嫩的叶子软，不易发音；老的叶子硬，音色不柔美。</h4>\
                    <h4>叶子的大小对吹奏也有很大关系，过大或太小的叶子既不便吹奏，发音也不集中。一般使用的叶片，以叶长5.5厘米、中间叶宽2.2厘米左右的比较适宜。叶子不耐吹用，一片叶子吹几次就会发软破烂，不能再用，所以吹奏时奏者需有多片树叶备用</h4>']]
    },

    boy: {
        info1: "成年男子头包青丝帕或青布，白布帕2．3至3米，包成人字形。\
                    老年男子常穿无领满襟短衣，捆腰带，压素色布条“琵琶襟”服，在短衣外面套黑布单褂，俗称“鸦鹊褂”。青年人多穿对襟衣，正中钉上七对、九对、十一对不等量的扣子，领高，袖小而长，袖口滚边。\
                    男裤是男子服饰的杰出代表。裤子不分老青壮，皆大脚大腰，一般为青布、蓝布作裤腿，缝上白布裤腰。\
                    从平面上看呈三角形，两裤脚及腰的尺寸接近，短而肥。\
                    镶蓝布条作裤头，裤腰由左向右折叠，以绳系紧，故称这种裤子为“左转弯”。抹围裙也是土家男子的习惯，尤其是三幅围裙。俗话说：“男围三幅裙，酒席场中不丢人。”这种围裙由三层重叠而成，一般为兰或白布料。三幅围裙，粗活、细活均可使用，既能起到挡风保暖、保持衣服整洁的作用，也可休息垫坐，或作抬扛垫肩，灵活方便。穿上它接待招呼客人，也落落大方、毫不俗气。土家地区流传的“三幅围裙白布腰，打得粗来进得朝，棉花织的家机布，人不求人一般高”，正是这三幅围裙的真实写照.\
                    夏天穿多耳麻草鞋，秋冬季的布鞋多为高鞋梁、青鞋面、白鞋底、满出边的布鞋，不穿袜子缠裹脚。多为自纺、自织、自染的土布，俗称“家机布”。",
        pic: ['man1','man2','man3','people'],
        coords: [[124,147,100,100,'头包','头包青丝帕或青布，白布帕2．3至3米，包成人字形。'],
                    [329,67,200,200,'衣服','老年男子常穿无领满襟短衣，捆腰带，压素色布条“琵琶襟”服，在短衣外面套黑布单褂，俗称“鸦鹊褂”。青年人多穿对襟衣，正中钉上七对、九对、十一对不等量的扣子，领高，袖小而长，袖口滚边。'],
                    [336,287,100,200,'裤子','男裤是男子服饰的杰出代表。裤子不分老青壮，皆大脚大腰，一般为青布、蓝布作裤腿，缝上白布裤腰。']]
    },                    
    girl:{
        info1: "男女老少皆穿无领滚边右衽开襟衣，衣边衣领会绣上花纹 ，绣工精彩，色彩艳丽，具有浓厚的民族特点。\
                    土家族妇女穿的是无领满襟衣。衣向左开襟。从上领到下摆到衣裙脚绣有一寸五宽的花边，衣袖各有一大二小三条花边，大花边一寸五宽，小花边有手指宽。\
                    袖大一尺二寸许,花边宽窄与衣袖相同，裤大约一尺五寸。\
                    另外，胸前外套围裙，俗称“妈裙”，围裙上为半圆形，下为三角形，从上半圆形及下脚也有一圈花边，宽约一寸。围裙胸前绣有花约五寸见方，围带即花带均为五彩丝线织成，一般二尺长，两头分别留有三寸未织的花缓。显示出土家妇女的心灵手巧。",
        pic: ['woman1', 'woman2','woman3', 'people'],
        coords: [[609,148,150,150,'衣服','无领满襟衣。衣向左开襟。从上领到下摆到衣裙脚绣有一寸五宽的花边，衣袖各有一大二小三条花边，大花边一寸五宽，小花边有手指宽。'],
                    [260,161,100,100,'妈裙','胸前外套围裙，俗称“妈裙”，围裙上为半圆形，下为三角形，从上半圆形及下脚也有一圈花边，宽约一寸。围裙胸前绣有花约五寸见方，围带即花带均为五彩丝线织成，一般二尺长，两头分别留有三寸未织的花缓']]
    },
    communicate: {
        info1: lang,
        pic: [],
        coords: null

    }
} ;

module.exports = specificInfo ;