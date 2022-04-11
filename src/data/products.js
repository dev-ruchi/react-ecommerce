const products = [
    {
        "id": 1,
        "name": "IPhone 13",
        "slug": "iphone-13",
        "price": 1200,
        "description": "Ea adipisicing cillum reprehenderit velit magna irure tempor commodo elit aliquip cillum fugiat sint. Fugiat mollit culpa consectetur qui reprehenderit commodo laborum.",
        "image": "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg",
        "offers": [
            "10% disount on HDFC credit card",
            "5% discount on Axis bank cards",
            "Exchange your old phone for upto $100"
        ]
    },
    {
        "id": 2,
        "name": "Samsung S22 Ultra",
        "slug": "samsung-s22-ultra",
        "price": 1500,
        "description": "Aliquip consectetur excepteur qui aliquip excepteur exercitation deserunt pariatur dolore fugiat ullamco sunt esse. Qui ad dolor sunt minim laboris consectetur aliquip ad do irure excepteur exercitation.",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s22-ultra-5g.jpg",
        "offers": []
    },
    {
        "id": 3,
        "name": "Speaker",
        "slug": "speaker",
        "price": 100,
        "description": "Occaecat dolor reprehenderit sunt tempor amet proident adipisicing quis nisi eu sunt proident. Officia aliqua minim fugiat est ad ut qui aute. Veniam consectetur dolor cupidatat minim elit aute aliquip quis laborum duis labore.",
        "image": "https://m.media-amazon.com/images/I/512syhuJD7L._SL1000_.jpg",
        "offers": []
    },
    {
        "id": 4,
        "name": "SanDisk Cruzer Blade",
        "slug": "sanDisk cruzer blade",
        "price": 369,
        "description": "Occaecat dolor reprehenderit sunt tempor amet proident adipisicing quis nisi eu sunt proident. Officia aliqua minim fugiat est ad ut qui aute. Veniam consectetur dolor cupidatat minim elit aute aliquip quis laborum duis labore.",
        "image": "https://m.media-amazon.com/images/I/61DjwgS4cbL._SX679_.jpg",
        "offers": []
    },
    {
        "id": 5,
        "name": "Noise Air Buds",
        "slug": "noise air buds",
        "price": 299,
        "description": "Occaecat dolor reprehenderit sunt tempor amet proident adipisicing quis nisi eu sunt proident. Officia aliqua minim fugiat est ad ut qui aute. Veniam consectetur dolor cupidatat minim elit aute aliquip quis laborum duis labore.",
        "image": "https://m.media-amazon.com/images/I/51IMKrvd3cL._SX522_.jpg",
        "offers": []
    },
    {
        "id": 6,
        "name": "Office Chair",
        "slug": "office chair",
        "price": 200,
        "description": "Occaecat dolor reprehenderit sunt tempor amet proident adipisicing quis nisi eu sunt proident. Officia aliqua minim fugiat est ad ut qui aute. Veniam consectetur dolor cupidatat minim elit aute aliquip quis laborum duis labore.",
        "image": "https://m.media-amazon.com/images/I/71sjjcwJ6cL._SY879_.jpg",
        "offers": []
    },
    {
        "id": 7,
        "name": "Wireless Keyboard ",
        "slug": "wireless keyboard",
        "price": 150,
        "description": "Occaecat dolor reprehenderit sunt tempor amet proident adipisicing quis nisi eu sunt proident. Officia aliqua minim fugiat est ad ut qui aute. Veniam consectetur dolor cupidatat minim elit aute aliquip quis laborum duis labore.",
        "image": "https://images-eu.ssl-images-amazon.com/images/I/41XQP3N-SdL._SX300_SY300_QL70_FMwebp_.jpg",
        "offers": []
    },
    {
        "id": 8,
        "name": "LAKMÉ 9 to 5 Foundation",
        "slug": "lakme 9 to 5 fonudation",
        "price": 100,
        "description": "Occaecat dolor reprehenderit sunt tempor amet proident adipisicing quis nisi eu sunt proident. Officia aliqua minim fugiat est ad ut qui aute. Veniam consectetur dolor cupidatat minim elit aute aliquip quis laborum duis labore.",
        "image": "https://m.media-amazon.com/images/I/51RuiH7IZzL._SX522_.jpg",
        "offers": []
    },
    {
        "id": 9,
        "name": "Creamy Matte Lipstick, 691 Rich Ruby",
        "slug": "creamy matte lipstick, 691 rich ruby",
        "price": 150,
        "description": "Occaecat dolor reprehenderit sunt tempor amet proident adipisicing quis nisi eu sunt proident. Officia aliqua minim fugiat est ad ut qui aute. Veniam consectetur dolor cupidatat minim elit aute aliquip quis laborum duis labore.",
        "image": "https://m.media-amazon.com/images/I/51vGPgCATJL._SX522_.jpg",
        "offers": []
    },
    {
        "id": 10,
        "name": "LAKMÉ 9to5 Primer + Gloss Nail Colour,",
        "slug": "lakme 9to5 primer + gloss nail colur",
        "price": 90,
        "description": "Occaecat dolor reprehenderit sunt tempor amet proident adipisicing quis nisi eu sunt proident. Officia aliqua minim fugiat est ad ut qui aute. Veniam consectetur dolor cupidatat minim elit aute aliquip quis laborum duis labore.",
        "image": "https://m.media-amazon.com/images/I/51y5sJtSlCS._SX522_.jpg",
        "offers": []
    },
    {
        "id": 11,
        "name": "Lakme Eyeconic Liquid Eye Liner",
        "slug": "lakme eyeconic liquid eye liner",
        "price": 120,
        "description": "Occaecat dolor reprehenderit sunt tempor amet proident adipisicing quis nisi eu sunt proident. Officia aliqua minim fugiat est ad ut qui aute. Veniam consectetur dolor cupidatat minim elit aute aliquip quis laborum duis labore.",
        "image": "https://m.media-amazon.com/images/I/51M2e+2n5VL._SX522_.jpg",
        "offers": []
    },
    {
        "id": 12,
        "name": "Lakme 9to5 Eye Color Eye Shadow",
        "slug": "lakme 9to5 eye color eye shadow",
        "price": 110,
        "description": "Occaecat dolor reprehenderit sunt tempor amet proident adipisicing quis nisi eu sunt proident. Officia aliqua minim fugiat est ad ut qui aute. Veniam consectetur dolor cupidatat minim elit aute aliquip quis laborum duis labore.",
        "image": "https://images-eu.ssl-images-amazon.com/images/I/41ryxTBPygL._SX300_SY300_QL70_FMwebp_.jpg",
        "offers": []
    },
    {
        "id": 13,
        "name": "Gaming Monitor",
        "slug": "gaming monitor",
        "price": 210,
        "description": "Occaecat dolor reprehenderit sunt tempor amet proident adipisicing quis nisi eu sunt proident. Officia aliqua minim fugiat est ad ut qui aute. Veniam consectetur dolor cupidatat minim elit aute aliquip quis laborum duis labore.",
        "image": "https://m.media-amazon.com/images/I/61ReawFyVvL._SX522_.jpg",
        "offers": []
    },
    {
        "id": 14,
        "name": "RPM Euro Games Laptop/PC Controller",
        "slug": "RPM euro games Laptop/PC controller",
        "price": 100,
        "description": "Occaecat dolor reprehenderit sunt tempor amet proident adipisicing quis nisi eu sunt proident. Officia aliqua minim fugiat est ad ut qui aute. Veniam consectetur dolor cupidatat minim elit aute aliquip quis laborum duis labore.",
        "image": "https://m.media-amazon.com/images/I/51TzieA2kpL._SX522_.jpg",
        "offers": []
    },
    {
        "id": 15,
        "name": "PC Repair Screwdriver Set,",
        "slug": "PC repair screwdriver set,",
        "price": 70,
        "description": "Occaecat dolor reprehenderit sunt tempor amet proident adipisicing quis nisi eu sunt proident. Officia aliqua minim fugiat est ad ut qui aute. Veniam consectetur dolor cupidatat minim elit aute aliquip quis laborum duis labore.",
        "image": "https://m.media-amazon.com/images/I/61AaaoFDv7L._SX522_.jpg",
        "offers": []
    },
    {
        "id": 16,
        "name": "Logitech M221 Wireless Mouse",
        "slug": "logitech M221 wireless mouse",
        "price": 65,
        "description": "Occaecat dolor reprehenderit sunt tempor amet proident adipisicing quis nisi eu sunt proident. Officia aliqua minim fugiat est ad ut qui aute. Veniam consectetur dolor cupidatat minim elit aute aliquip quis laborum duis labore.",
        "image": "https://m.media-amazon.com/images/I/61sskFEsc0L._SX522_.jpg",
        "offers": []
    },
    {
        "id": 17,
        "name": "Chocolate Peanut Butter",
        "slug": "chocolate peanut butter",
        "price": 60,
        "description": "Occaecat dolor reprehenderit sunt tempor amet proident adipisicing quis nisi eu sunt proident. Officia aliqua minim fugiat est ad ut qui aute. Veniam consectetur dolor cupidatat minim elit aute aliquip quis laborum duis labore.",
        "image": "https://m.media-amazon.com/images/I/81iMkZXy7iL._SX569_.jpg",
        "offers": []
    },
    {
        "id": 18,
        "name": "T-Shirt",
        "slug": "t-shirt",
        "price": 130,
        "description": "Occaecat dolor reprehenderit sunt tempor amet proident adipisicing quis nisi eu sunt proident. Officia aliqua minim fugiat est ad ut qui aute. Veniam consectetur dolor cupidatat minim elit aute aliquip quis laborum duis labore.",
        "image": "https://m.media-amazon.com/images/I/51Qa1+vujQL._UX679_.jpg",
        "offers": []
    },
    {
        "id": 19,
        "name": "Track Suit",
        "slug": "track suit",
        "price": 150,
        "description": "Occaecat dolor reprehenderit sunt tempor amet proident adipisicing quis nisi eu sunt proident. Officia aliqua minim fugiat est ad ut qui aute. Veniam consectetur dolor cupidatat minim elit aute aliquip quis laborum duis labore.",
        "image": "https://m.media-amazon.com/images/I/51hwJjsNgjL._UY741_.jpg",
        "offers": []
    },
    {
        "id": 20,
        "name": "OnePlus Nord CE 2 5G",
        "slug": "OnePlus Nord CE 2 5G",
        "price": 150,
        "description": "Occaecat dolor reprehenderit sunt tempor amet proident adipisicing quis nisi eu sunt proident. Officia aliqua minim fugiat est ad ut qui aute. Veniam consectetur dolor cupidatat minim elit aute aliquip quis laborum duis labore.",
        "image": "https://m.media-amazon.com/images/I/619n6kxuGsL._SX679_.jpg",
        "offers": []
    },
    {
        "id": 21,
        "name": "Alley Walk Women's Ballet Flat",
        "slug": "alley walk women's ballet flat",
        "price": 100,
        "description": "Occaecat dolor reprehenderit sunt tempor amet proident adipisicing quis nisi eu sunt proident. Officia aliqua minim fugiat est ad ut qui aute. Veniam consectetur dolor cupidatat minim elit aute aliquip quis laborum duis labore.",
        "image": "https://m.media-amazon.com/images/I/61FxbjAQfJL._SY695._SX._UX._SY._UY_.jpg",
        "offers": []
    },
]

export default products;