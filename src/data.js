
const blogs = [
    {
        id: "Lotus-001",
        title : "Lotus",
        img : "https://www.wallpaperflare.com/static/335/587/630/blooming-lotus-flower-selective-focus-photography-wallpaper.jpg",
        content : "Lotus-- The Aquatic flower blooming most beautifully from the deepest and thick mud. It is a perennially blooming flower with striking symmetry and colours. But, this delicate beauty is much more than just a flower. It is a flower of spirituality and meaning as old as time.Its leaves are circular and can be blue-green. Even though its flowers are very delicate, its stems are usually very rigid and have a lot of strength. The flowers are either white or yellow and have -at least – 20 petals each."  ,
        author : {
            name : "Sakshi Waghmare",
            avatar : "https://tse4.mm.bing.net/th?id=OIP.7j7I4R58monKsKV4sdIqrgAAAA&pid=Api&P=0&h=220"
        },
        date : "23-june-2024",
        categories : ["Lily","Hibiscus","Marigolr"],
    },

    {
        id: "Rose-002",
        title : "Rose",
        img : "https://tse3.mm.bing.net/th?id=OIP.UAKiww9ztl85UDLQ0apTUgHaE7&pid=Api&P=0&h=220",
        content : "A rose is a plant that is a member of the genus Rosa, which consists of some 100 species of perennial shrubs in the rose family. Many roses are cultivated for their beautiful flowers, which range in colour from white through various tones of yellow and pink to dark crimson and maroon.The Rosa genus is a part of the Rosaceae plant family. Roses are arguably the most popular flower in the world. Around the world their beauty is used to as a symbol of love, romance, friendship, sympathy and sorrow.", 
        author : {
            name : "Achal Chouke",
            avatar : "https://tse3.mm.bing.net/th?id=OIP.CdCBHghVSFo33i1WsW5zXwHaHa&pid=Api&P=0&h=220",
        },
        date : "8-june-2024",
        categories : ["Sunflower","Hibiscus","Lily"],
    },

    {
        id: "Hibiscus-003",
        title : "Hibiscus",
        img : "https://tse1.mm.bing.net/th?id=OIP.GzJGG2__7xVttVehk0kAjwHaFj&pid=Api&P=0&h=220",
        content : "Hibiscus, (genus Hibiscus), genus of numerous species of herbs, shrubs, and trees in the mallow family (Malvaceae) that are native to warm temperate and tropical regions. Several are cultivated as ornamentals for their showy flowers, and a number are useful as fibre plants.This beautiful flowering plant is native to tropical regions and requires a warm climate to flourish. It loves sunlight and can be found in abundance in countries such as Malaysia, Hawaii, and India.",
        author : {
            name : " Sahil Gupta",
            avatar : "https://tse4.mm.bing.net/th?id=OIP.2b9tJzdxhXaxk5Wn0GOC6wHaJQ&pid=Api&P=0&h=220"
        },
        date : "23-jul-2024",
        categories : ["Lotus","Sunflower","Marigold"],
    },

    {
        id: "Sunflower-004",
        title :  "Sunflower",
        img : "https://tse2.mm.bing.net/th?id=OIP.2jCSMOC93vj11KVnhodVPwHaEo&pid=Api&P=0&h=220",
        content : "Sunflower (Helianthus annuus) is a herbaceous annual plant belonging to the family Asteraceae. It is native primarily to North America. Some species are cultivated as ornamental plants used in floral decorations, vases, and bouquets, and some are grown for their edible seed and oil. As gardeners and nature lovers, we plant and gaze at sunflowers yearly without knowing their full stories. In this post, we’ll shine a light on amazing sunflower facts that are little-known or perhaps never known!",
        author : {
            name : "Dipali Sharma",
            avatar : "https://tse2.mm.bing.net/th?id=OIP.Z6vsAbyfrRU4Yk_tN2hXVgHaEo&pid=Api&P=0&h=220"
        },
        date : "18-May-2024",
        categories : ["Marigold","Rose","Lotus"],
    },
    {
        id: "Marigold-005",
        title : "Marogold",
        img : "https://tse4.mm.bing.net/th?id=OIP.7Pd5i8_7PFaQL6MseZpmxQHaEo&pid=Api&P=0&h=220",
        content : "Marigold flowers are a great addition to any garden. Use our guides down below to learn how to grow and care for marigolds in your own backyard. You’ll learn about the different kinds of marigolds, using them as companion plants, when they should be planted, what soil is best for them, and what the best growing conditions are.Marigolds are used for mass planting, edging, borders, cut flowers, and container plantings. Most varieties bloom from early summer until hard frost in late fall.",
        author : {
            name : "Harsh Patil",
            avatar : "https://tse3.mm.bing.net/th?id=OIP.BL0pMq-Nx1qrUc4JU0HQLgAAAA&pid=Api&P=0&h=220 "
        },
        date : "8-jul-2024",
        categories : ["Lotus","Lily","Sunflower"],
    },
    {
        id: "Lily-006",
        title : "Lily",
        img : "https://tse1.mm.bing.net/th?id=OIP.YDH7xl82e7lcowOd6y52RgHaFj&pid=Api&P=0&h=220",
        content : "The lily is a genus of flowering plant. There are many species of lilies, like trumpet lilies and tiger lilies. They are usually quite tall, and are perennials.Most lilies grow from a bulb, which in some species develops into a rhizome, which carries small bulbs.The Lily is a mesmerizing flower that has captivated people for centuries. Its delicate petals, vibrant colors, and intoxicating fragrance make it a beloved choice for gardeners and flower enthusiasts alike "  ,
        author : {
            name : "Om Sharma",
            avatar : "https://tse3.mm.bing.net/th?id=OIP.dE20_DKOpPXlsOWonKnPxwHaJQ&pid=Api&P=0&h=220"
        },
        date : "3-jul-2024",
        categories : ["Rose","Sunflower","Hibiscus"],
    },
    {
        id: "Dahlia-007",
        title : "Dahlia",
        img : "https://images.pexels.com/photos/35646/pexels-photo.jpg?cs=srgb&dl=close-up-dahlia-flower-35646.jpg&fm=jpg",
        content : "Dahlia is a genus of tuberous plants that are members of the Asteraceae family. The tubers are planted in the ground in late spring (around the month of May) and generally flower from July to the first autumn frosts. Dahlias are perfect for a border garden and make lovely cut flowers. Growing vegetables? Put a row of dahlias on the border, where they will not shade your edibles.dahlia leaves are known for their glossy, healthy sheen and vibrant colors. If you’re looking to add a splash of color to your garden, dahlias are a great choice. With their lush foliage and beautiful blooms, they are sure to be a hit with your guests.",
        author : {
            name : " Shivansh Thakur",
            avatar : "https://tse3.mm.bing.net/th?id=OIP.Sv6-7xF6SQU4RFukwmMRNQHaJQ&pid=Api&P=0&h=220"
        },
        date : "23-jul-2024",
        categories : ["Lotus","Sunflower","Marigold"],
    },
    {
        id: "Mogra-008",
        title : "Mogra",
        img : "https://i.ytimg.com/vi/tj0Tw-QCNOg/maxresdefault.jpg",
        content : "Mogra flower is a white-hued bloom having a strong fragrance which is often seen in clusters of three to twelve. Some mogra trees grow as single, double, or completely double blossoms. Mogra plants bloom during the rainy or warm months. However, flushes are also common at other times.These flowers are worn by many Indian women, especially during festivals and celebrations. Mogra is also commonly utilized at weddings and other religious events.Mogra tree has aphrodisiac properties. Its mystery scent acts as a ‘psychic key,’ increasing brain receptivity to energy vibrations, particularly those magnified by sacred mantra chanting.", 
        author : {
            name : "Priyanka Mehta",
            avatar : "https://tse4.explicit.bing.net/th?id=OIP.64X4uhKQt19MoJ2iumM3FgHaJQ&pid=Api&P=0&h=220",
        },
        date : "8-june-2024",
        categories : ["Sunflower","Hibiscus","Lily"],
    }
]



export default blogs 