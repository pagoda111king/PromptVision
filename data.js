const promptData = [
    // Original 13
    {
        id: 1,
        category: "cinematic",
        categoryLabel: "好莱坞电影",
        title: "赛博朋克风格未来城市街道",
        image: "images/cyberpunk.png",
        prompt: "\"A futuristic cyberpunk city street raining neon lights, reflective wet ground, hyper realistic, cinematic lighting, 8k, Unreal Engine 5.\""
    },
    {
        id: 2,
        category: "cinematic",
        categoryLabel: "好莱坞电影",
        title: "科幻宇航员",
        image: "images/astronaut.png",
        prompt: "\"Cinematic shot of an astronaut looking at a glowing black hole, IMAX 70mm lens, highly detailed, dramatic lighting, interstellar style.\""
    },
    {
        id: 3,
        category: "darkfantasy",
        categoryLabel: "暗黑奇幻",
        title: "哥特式城堡骑士",
        image: "images/knight.png",
        prompt: "\"Epic dark fantasy knight standing before a massive gothic castle, glowing red eyes in the dark, cinematic chiaroscuro, highly detailed armor.\""
    },
    {
        id: 4,
        category: "anime",
        categoryLabel: "动漫",
        title: "日系动漫女孩与猫",
        image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
        prompt: "\"Studio Ghibli style, a young girl reading a book next to a giant fluffy cat in a sunlit room, highly detailed, warm anime lighting, masterpiece.\""
    },
    {
        id: 5,
        category: "pixar",
        categoryLabel: "3D皮克斯",
        title: "可爱怪兽宝宝",
        image: "images/monster.png",
        prompt: "\"Cute 3D Pixar style fluffy monster baby with big eyes, soft pastel colors, studio lighting, highly detailed 3D render, Octane render.\""
    },
    {
        id: 6,
        category: "chineseink",
        categoryLabel: "新中式水墨",
        title: "水墨画里的孤舟",
        image: "https://images.unsplash.com/photo-1577047321590-3490ea47f523?q=80&w=800&auto=format&fit=crop",
        prompt: "\"Traditional Chinese ink painting of a solitary boat on a misty river, distant mountains, elegant brushstrokes, wuxia aesthetic, highly detailed.\""
    },
    {
        id: 7,
        category: "macro",
        categoryLabel: "微距写实",
        title: "微距摄影叶片水滴",
        image: "https://images.unsplash.com/photo-1500673922987-e212871f1a51?q=80&w=800&auto=format&fit=crop",
        prompt: "\"Extreme macro photography of a crystal clear water drop on a bright green leaf, reflecting the forest behind, highly detailed, sharp focus.\""
    },
    {
        id: 8,
        category: "drama",
        categoryLabel: "网剧特效",
        title: "仙侠飞剑斗法",
        image: "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=800&auto=format&fit=crop",
        prompt: "\"Chinese xianxia drama style, a cultivator flying on a glowing blue sword through the clouds, magical energy trails, highly detailed CGI effect.\""
    },
    {
        id: 9,
        category: "cinematic",
        categoryLabel: "好莱坞电影 · 科幻",
        title: "黑客帝国风格特工 (The Matrix)",
        image: "images/matrix.png",
        prompt: "\"Cinematic shot of a cyberpunk hacker in a dark room illuminated by glowing green digital code rain, The Matrix movie style, black sunglasses, highly detailed, Unreal Engine 5, 8k resolution\""
    },
    {
        id: 10,
        category: "cinematic",
        categoryLabel: "好莱坞电影 · 废土",
        title: "疯狂的麦克斯废土战车 (Mad Max)",
        image: "images/madmax.png",
        prompt: "\"Epic cinematic shot of a heavily modified rusty muscle car speeding through a post-apocalyptic desert wasteland, massive dust storm, Mad Max Fury Road style, aggressive spike armor, hyper realistic, dramatic lighting\""
    },
    {
        id: 11,
        category: "cinematic",
        categoryLabel: "好莱坞电影 · 奇幻",
        title: "哈利波特魔法图书馆 (Harry Potter)",
        image: "images/magic.png",
        prompt: "\"Cinematic interior of an ancient magical library, a young wizard holding a glowing wand, floating books, Harry Potter movie style, magical blue and gold lighting, highly detailed gothic architecture\""
    },
    {
        id: 12,
        category: "anime",
        categoryLabel: "日本动画 · 唯美",
        title: "新海诚风格流星天空 (Makoto Shinkai)",
        image: "images/shinkai.png",
        prompt: "\"Breathtaking anime scenery of a young girl standing on a hill watching a massive glowing comet fall across a sunset sky, highly detailed beautiful clouds, Makoto Shinkai style, Your Name anime style, vibrant pastel colors, masterpiece\""
    },
    {
        id: 13,
        category: "anime",
        categoryLabel: "日本动画 · 治愈",
        title: "吉卜力风格奇幻森林 (Studio Ghibli)",
        image: "images/ghibli.png",
        prompt: "\"Studio Ghibli style watercolor illustration of a magical ancient forest with glowing blue spirits, a giant friendly fluffy creature sleeping under a massive mossy tree, Totoro style, lush green foliage, warm sunlight filtering through leaves\""
    },
    
    // NEW 30 ITEMS (7 Generated, 23 Placeholders)
    {
        id: 14,
        category: "conceptart",
        categoryLabel: "概念艺术 · 蒸汽朋克",
        title: "蒸汽朋克机械之城 (Steampunk)",
        image: "images/steampunk.png",
        prompt: "\"Epic steampunk city street, brass gears, steam-powered vehicles, Victorian architecture, golden hour lighting, hyper detailed, 8k resolution, cinematic composition\""
    },
    {
        id: 15,
        category: "pixar",
        categoryLabel: "黏土动画 · 定格",
        title: "黏土洞穴探险家 (Claymation)",
        image: "images/claymation.png",
        prompt: "\"Cute claymation style little adventurer exploring a clay cave, stop motion animation aesthetic, highly detailed plasticine textures, studio lighting, Aardman style\""
    },
    {
        id: 16,
        category: "chineseink",
        categoryLabel: "传统艺术 · 浮世绘",
        title: "富士山下武士 (Ukiyo-e)",
        image: "images/ukiyoe.png",
        prompt: "\"Ukiyo-e Japanese woodblock print of a samurai standing under a giant cherry blossom tree with Mount Fuji in the background, traditional Japanese art style, flat vibrant colors\""
    },
    {
        id: 17,
        category: "cyberpunk",
        categoryLabel: "复古未来 · 合成器波",
        title: "80年代霓虹赛道 (Synthwave)",
        image: "images/synthwave.png",
        prompt: "\"Synthwave retro 80s outrun style landscape, glowing wireframe mountains, neon pink grid floor, giant glowing orange sun, retrowave, highly detailed, vibrant neon colors\""
    },
    {
        id: 18,
        category: "macro",
        categoryLabel: "摄影 · 双重曝光",
        title: "狼与森林双重曝光 (Double Exposure)",
        image: "images/double_exposure.png",
        prompt: "\"Creative double exposure photography blending a silhouette of a majestic wolf howling with a dense pine forest at misty sunrise, true detective intro style, masterpiece, surreal\""
    },
    {
        id: 19,
        category: "conceptart",
        categoryLabel: "纸艺 · 折纸",
        title: "史诗级纸龙 (Origami)",
        image: "images/origami.png",
        prompt: "\"Beautiful origami art of a majestic dragon made of folded colorful paper, sitting on a paper mountain, highly detailed paper texture, studio macro lighting, 8k\""
    },
    {
        id: 20,
        category: "pixar",
        categoryLabel: "3D渲染 · 体素",
        title: "魔法浮空岛 (Voxel Art)",
        image: "images/voxel.png",
        prompt: "\"Voxel art of a cozy magical floating island with a small glowing wizard tower, isometric view, Minecraft style but highly detailed 3D rendering, Octane render, beautiful lighting\""
    },
    {
        id: 21,
        category: "cinematic",
        categoryLabel: "电影感 · 黑色电影",
        title: "霓虹黑色侦探 (Neon Noir)",
        image: "",
        prompt: "\"Neon noir cinematic shot of a detective in a trench coat standing in a dark rainy alleyway illuminated by a glowing red neon sign, high contrast, dramatic shadows, highly detailed\""
    },
    {
        id: 22,
        category: "macro",
        categoryLabel: "微距 · 生物发光",
        title: "发光毒蘑菇 (Bioluminescence)",
        image: "",
        prompt: "\"Extreme macro photography of glowing bioluminescent mushrooms in a dark magical forest, glowing blue and purple spores, highly detailed, sharp focus, ethereal lighting, bokeh\""
    },
    {
        id: 23,
        category: "conceptart",
        categoryLabel: "艺术 · 水彩",
        title: "雨中欧洲小镇 (Watercolor)",
        image: "",
        prompt: "\"Beautiful watercolor painting of a romantic European street cafe in the rain, loose brush strokes, vibrant colors bleeding, architectural sketch style, masterpiece\""
    },
    {
        id: 24,
        category: "anime",
        categoryLabel: "动画 · 赛博朋克",
        title: "赛博格少女 (Cyber Anime)",
        image: "",
        prompt: "\"90s anime style, gorgeous cyborg girl looking over a futuristic neon city from a balcony, highly detailed, Ghost in the Shell aesthetic, masterpiece\""
    },
    {
        id: 25,
        category: "cinematic",
        categoryLabel: "电影级 · 史诗奇幻",
        title: "指环王精灵之城 (Epic Fantasy)",
        image: "",
        prompt: "\"Epic cinematic establishing shot of a majestic elven city built into massive waterfalls, Lord of the Rings style, golden hour, highly detailed architecture, 8k, Unreal Engine 5\""
    },
    {
        id: 26,
        category: "darkfantasy",
        categoryLabel: "暗黑奇幻 · 魂系",
        title: "深渊骑士 (Souls-like)",
        image: "",
        prompt: "\"Dark fantasy souls-like boss, a giant rotting knight wielding a cursed flaming sword in a ruined cathedral, terrifying atmosphere, volumetric fog, hyper realistic\""
    },
    {
        id: 27,
        category: "conceptart",
        categoryLabel: "概念设计 · 异星风景",
        title: "异星奇异植物 (Alien Planet)",
        image: "",
        prompt: "\"Sci-fi concept art of an alien planet landscape, massive floating crystals, bizarre glowing flora, two moons in the sky, highly detailed, cinematic lighting\""
    },
    {
        id: 28,
        category: "pixar",
        categoryLabel: "3D皮克斯 · 机械",
        title: "呆萌生锈机器人 (Cute Robot)",
        image: "",
        prompt: "\"Cute 3D Pixar style rusty little robot holding a single glowing green plant, Wall-E aesthetic, soft studio lighting, highly detailed textures, masterpiece\""
    },
    {
        id: 29,
        category: "chineseink",
        categoryLabel: "新中式 · 工笔",
        title: "工笔画青花瓷与猫 (Gongbi)",
        image: "",
        prompt: "\"Traditional Chinese Gongbi style painting, a delicate white cat playing with a blue and white porcelain vase, highly detailed fine lines, elegant composition\""
    },
    {
        id: 30,
        category: "macro",
        categoryLabel: "美食摄影 · 商业",
        title: "爆浆芝士汉堡 (Food Photography)",
        image: "",
        prompt: "\"Commercial food photography of a juicy double cheeseburger, melted cheese dripping, flying ingredients, dark background, cinematic dramatic lighting, highly detailed\""
    },
    {
        id: 31,
        category: "drama",
        categoryLabel: "电视剧 · 宫廷",
        title: "清宫戏女主角 (Palace Drama)",
        image: "",
        prompt: "\"Chinese historical palace drama style, a beautiful queen in highly detailed embroidered silk robes standing in the forbidden city snowing, cinematic lighting, 8k\""
    },
    {
        id: 32,
        category: "cinematic",
        categoryLabel: "好莱坞 · 怪兽",
        title: "深海巨兽复苏 (Kaiju)",
        image: "",
        prompt: "\"Cinematic shot of a massive terrifying kaiju monster rising from the stormy ocean, lightning striking, Pacific Rim style, dramatic lighting, highly detailed, 8k\""
    },
    {
        id: 33,
        category: "conceptart",
        categoryLabel: "建筑 · 未来主义",
        title: "扎哈风格未来建筑 (Futurist)",
        image: "",
        prompt: "\"Architectural visualization of a futuristic Zaha Hadid style curved building covered in lush green plants, sunny day, hyper realistic, Octane render\""
    },
    {
        id: 34,
        category: "anime",
        categoryLabel: "插画 · 治愈系",
        title: "云端上的列车 (Healing)",
        image: "",
        prompt: "\"Beautiful magical anime illustration of a vintage steam train driving across a track made of clouds in a starry night sky, Ghibli inspired, highly detailed, masterpiece\""
    },
    {
        id: 35,
        category: "darkfantasy",
        categoryLabel: "奇幻 · 克苏鲁",
        title: "深海不可名状 (Cthulhu)",
        image: "",
        prompt: "\"Lovecraftian horror, a massive terrifying tentacled entity looming in the thick green fog over a Victorian fishing village, dark fantasy, highly detailed, unsettling atmosphere\""
    },
    {
        id: 36,
        category: "cyberpunk",
        categoryLabel: "赛博朋克 · 载具",
        title: "霓虹悬浮摩托 (Hoverbike)",
        image: "",
        prompt: "\"Cyberpunk hoverbike parked in a rainy neon alley, Akira style, highly detailed mechanical parts, wet reflective ground, cinematic lighting, 8k\""
    },
    {
        id: 37,
        category: "pixar",
        categoryLabel: "3D卡通 · 动物",
        title: "穿西装的狗 (Dapper Dog)",
        image: "",
        prompt: "\"3D cartoon rendering of a golden retriever wearing a tailored suit and tie, sipping coffee, Zootopia style, highly detailed fur, studio lighting, cute\""
    },
    {
        id: 38,
        category: "macro",
        categoryLabel: "微距 · 机械核心",
        title: "瑞士手表机芯 (Watch Macro)",
        image: "",
        prompt: "\"Extreme macro photography of the intricate gears inside a luxury Swiss watch, golden components, ruby bearings, highly detailed, sharp focus, cinematic lighting\""
    },
    {
        id: 39,
        category: "conceptart",
        categoryLabel: "低多边形 · 风景",
        title: "低多边形森林 (Low Poly)",
        image: "",
        prompt: "\"Beautiful low poly 3D landscape of a pine forest and a small cabin, flat shading, vibrant colors, sunset lighting, minimalist aesthetic, isometric view\""
    },
    {
        id: 40,
        category: "cinematic",
        categoryLabel: "电影感 · 战争",
        title: "二战史诗战役 (War Epic)",
        image: "",
        prompt: "\"Cinematic shot of soldiers storming a beach, explosions in the background, Saving Private Ryan style, gritty realistic texture, dramatic lighting, highly detailed\""
    },
    {
        id: 41,
        category: "chineseink",
        categoryLabel: "国风 · 赛博",
        title: "赛博道士 (Cyber Daoist)",
        image: "",
        prompt: "\"Cyberpunk traditional Chinese Daoist monk holding a glowing neon talisman, rainy futuristic temple, highly detailed, cinematic lighting, masterpiece\""
    },
    {
        id: 42,
        category: "anime",
        categoryLabel: "动漫 · 机甲",
        title: "巨型机甲整备 (Mecha)",
        image: "",
        prompt: "\"Gundam style anime illustration, a massive highly detailed mecha robot being repaired in a futuristic hangar, sparks flying, cinematic lighting, 8k\""
    },
    {
        id: 43,
        category: "conceptart",
        categoryLabel: "极简艺术 · 剪影",
        title: "山巅剑客剪影 (Silhouette)",
        image: "",
        prompt: "\"Minimalist vector art silhouette of a lone swordsman standing on a cliff against a massive red sun, dramatic contrast, elegant composition, masterpiece\""
    }
];
