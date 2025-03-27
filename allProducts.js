const allProducts = {
    men: [
        { id: 1, name: "Shirt", price: 799, image: "/Images/shirt2.jpeg", description: "Soft cotton shirt, perfect for casual or formal wear." },
        { id: 2, name: "Casual Shirt", price: 699, image: "/Images/shaheer.jpg", description: "Trendy and comfortable shirt for everyday style." },
        { id: 3, name: "Jeans", price: 1199, image: "/Images/jean1.jpeg", description: "Slim-fit denim jeans with a classic look and durable fabric." },
        { id: 4, name: "Trousers", price: 999, image: "/Images/trouser.jpeg", description: "Elegant formal trousers with a comfortable fit for office wear." },
        { id: 5, name: "Ethnic Men", price: 1499, image: "/Images/men-ethnic.jpg", description: "Mwn elegant and classic Ethnic Wear." },
        { id: 6, name: "Jacket", price: 1999, image: "/Images/jacket3.jpeg", description: "Warm and stylish winter jacket with a sleek design." },
        { id: 7, name: "Casual Shirt", price: 1199, image: "/Images/shirt4.jpeg", description: "Modern slim-fit casual shirt with breathable fabric." },
        { id: 8, name: "Trousers", price: 999, image: "/Images/trouser.jpeg", description: "Classic chinos offering both comfort and a stylish look." },
        { id: 9, name: "Sneakers", price: 1499, image: "/Images/shoess.jpeg", description: "Trendy sneakers with excellent grip and comfort." },
        { id: 10, name: "Hooded Jacket", price: 1999, image: "/Images/jacket2.jpeg", description: "Cozy hooded jacket for a perfect winter outfit." }
    ],
    women: [
        {id: 11, name: "Ethnic Women", price: 1799, image: "/Images/alia.jpg", description: "Elegant and timeless ethnic wear designed to bring out the rich cultural heritage of India. Perfect for festive occasions, weddings, and celebrations, our ethnic collection is crafted from premium-quality fabric with intricate embroidery and embellishments that add a touch of royalty to your look." },
        { id: 12, name: "Western", price: 499, image: "/Images/yami1.jpg", description: "Trendy and stylish western wear that blends comfort with fashion. Whether it's a casual outing or a party night, our western collection includes sleek designs, breathable fabrics, and flattering fits that make you stand out. Pair it with accessories to complete the modern look." },
        { id: 13, name: "Tops", price: 699, image: "/Images/yami.jpg", description: "Explore a variety of stylish tops, from casual to formal, crafted with high-quality fabric that ensures a perfect fit and superior comfort. Whether you prefer flowy designs, body-hugging styles, or elegant prints, our collection has something for every occasion." },
        { id: 14, name: "Kurtas and Suits", price: 999, image: "/Images/aditi2.png", description: "Graceful and sophisticated, our kurtas and suits collection is ideal for both everyday wear and special occasions. Designed with intricate embroidery, soft fabrics, and exquisite craftsmanship, these outfits offer the perfect blend of tradition and contemporary fashion." },
        { id: 15, name: "Trousers", price: 899, image: "/Images/women-trouser.jpeg", description: "A versatile collection of trousers perfect for both casual and formal occasions. Designed for maximum comfort and durability, our trousers come in a variety of styles, including slim-fit, straight-leg, and high-waisted, ensuring a flattering look for every body type." },
        { id: 16, name: "Jacket", price: 1399, image: "/Images/jacket.png", description: "Stay warm and stylish with our premium collection of jackets. Designed for all seasons, our jackets are made with high-quality fabrics, offering excellent insulation and a trendy look. Perfect for layering over any outfit, they are a must-have for fashion-forward individuals." },
        { id: 17, name: "Casual Shirt", price: 999, image: "/Images/women-shirt2.jpg", description: "Effortlessly stylish and comfortable, our casual shirts are designed for everyday wear. Made from breathable fabrics with modern prints and classic designs, these shirts are perfect for work, outings, or casual hangouts." },
        { id: 18, name: "Lehnga", price: 2999, image: "/Images/lehnga1.jpg", description: "Make a statement at weddings and festive occasions with our stunning lehenga collection. Crafted with luxurious fabrics, intricate embroidery, and vibrant colors, these lehengas exude elegance and charm, making you the center of attention." },
        { id: 19, name: "Kurti", price: 1099, image: "/Images/kurti1.jpg", description: "A perfect blend of comfort and style, our kurtis are ideal for both casual and festive wear. Featuring exquisite embroidery, elegant prints, and breathable fabrics, they pair effortlessly with leggings, palazzos, or skirts to create a sophisticated look." },
        { id: 20, name: "Hooded Jacket", price: 1199, image: "/Images/hood.jpg", description: "Beat the cold in style with our trendy hooded jackets. Made from durable, high-quality materials, these jackets provide superior warmth and a fashionable edge. Whether you’re heading outdoors or just looking for a stylish winter layer, this is the perfect choice." }
    ],
    kids: [
        { id: 21, name: "Ethnic Girls", price: 1799, image: "/Images/kid1.jpg", description: "Graceful ethnic kurta set for kids, perfect for festive occasions and family gatherings. Made with lightweight fabric and intricate embroidery, ensuring elegance and comfort at the same time." },
        { id: 22, name: "Western", price: 1499, image: "/Images/kid2.jpeg", description: "Elegant and stylish formal blazer sets for kids. Perfect for formal occasions, weddings, and family gatherings, this outfit ensures a sharp and classy look with premium fabric and a tailored fit." },
        { id: 23, name: "Jacket", price: 1699, image: "/Images/kid3.jpg", description: "Graceful ethnic Jacket set for kids, perfect for festive occasions and family gatherings. Made with lightweight fabric and intricate embroidery, ensuring elegance and comfort at the same time." },
        { id: 24, name: "Summer Special", price: 999, image: "/Images/kid4.jpeg", description: "Lightweight and breezy, our summer special dresses are designed to keep you cool and stylish in the heat. Made from breathable fabrics like cotton and linen, these dresses feature floral prints, pastel shades, and relaxed fits, making them a must-have for beach outings, vacations, and daily wear." },
        { id: 25, name: "Party Gown", price: 1499, image: "/Images/kid5.jpeg", description: "A charming frock dress designed for little princesses. Featuring soft fabric, cute embellishments, and a flowy silhouette, this dress is perfect for birthdays, parties, and special events." },
        { id: 26, name: "T-Shirt", price: 399, image: "/Images/kid6.jpeg", description: "Soft, breathable, and comfortable casual t-shirts for kids. Made from premium cotton, these tees keep your little ones cool and stylish all day long. Available in fun colors and playful prints that kids love!" },
        { id: 27, name: "Plazo Suit", price: 1299, image: "/Images/kid7.jpeg", description: "Elegant and stylish, the plazo suit is the perfect blend of tradition and modernity. Featuring a flowy palazzo pant paired with a beautifully embroidered kurta, this outfit ensures comfort and grace for festive events, weddings, and office wear." },
        { id: 28, name: "Ethnic Boys", price: 1999, image: "/Images/kid8.jpeg", description: "Graceful ethnic kurta set for kids, perfect for festive occasions and family gatherings. Made with lightweight fabric and intricate embroidery, ensuring elegance and comfort at the same time." },
        { id: 29, name: "Casual Wear", price: 899, image: "/Images/kidd9.jpg", description: "Stay comfortable and fashionable with our casual wear collection. Perfect for everyday outings, work-from-home setups, or relaxed weekends, these outfits are designed with soft fabrics, trendy cuts, and stylish patterns to keep you looking effortlessly chic." },
        { id: 30, name: "Shirt", price: 1199, image: "/Images/kid10.jpg", description: "Beat the cold in style with our trendy hooded jackets. Made from durable, high-quality materials, these jackets provide superior warmth and a fashionable edge. Whether you’re heading outdoors or just looking for a stylish winter layer, this is the perfect choice." }
    ],
    grocery: [
        { id: 31, name: "Maggi", price: 14, image: "/Images/maggi.jpeg", description: "Buy Maggi!" },
        { id: 32, name: "Milk", price: 40, image: "/Images/milk.jpg", description: "Cow Milk 1 liter" },
        { id: 33, name: "Bread", price: 60, image: "/Images/bread.jpg", description: "Buy Fresh Bread!" },
        { id: 34, name: "Peanut Butter", price: 259, image: "/Images/butter.jpg", description: "Peanut Butter" },
        { id: 35, name: "Chocolate", price: 120, image: "/Images/chocolate.jpg", description: "Perfect Chocolate" },
        { id: 36, name: "Yogurt", price: 50, image: "/Images/yogurt.jpg", description: "Buy Fresh Yogurt" },
        { id: 37, name: "Apples", price: 100, image: "/Images/apples.jpg", description: "Apples! 10 pieces" },
        { id: 38, name: "Eggs", price: 80, image: "/Images/eggs.jpg", description: "Eggs!" },
        { id: 39, name: "Bananas", price: 70, image: "/Images/banana.jpg", description: "Bananas 10 pieces" },
        { id: 40, name: "Orange Juice", price: 70, image: "/Images/orange-juice.jpg", description: "Fresh Orange Juice 500ml" }
    ],
    electronics: [
        { id: 41, name: "Earbuds", price: 1299, image: "/Images/Earbuds.jpg", description: "Buy Earbuds" },
        { id: 42, name: "Earphone Wired", price: 640, image: "/Images/wiredearphones.jpg", description: "Buy Earphone" },
        { id: 43, name: "SmartPhone", price: 26660, image: "/Images/Smartphone.jpg", description: "Buy Latest Smartphone" },
        { id: 44, name: "Washing Machine", price: 18259, image: "/Images/washingmachine.jpg", description: "Buy Multi Functional Washing Machine" },
        { id: 45, name: "Television", price: 20120, image: "/Images/Television.jpg", description: "Buy Television" },
        { id: 46, name: "Fridge", price: 29050, image: "/Images/Fridge.jpg", description: "Buy Fridge" },
        { id: 47, name: "Charger", price: 1100, image: "/Images/Charger.jpg", description: "Buy Charger" },
        { id: 48, name: "Laptop", price: 62080, image: "/Images/Laptop.jpg", description: "Buy Laptop" },
        { id: 49, name: "Headphone", price: 1170, image: "/Images/Headphone.jpg", description: "Buy Headphone" },
        { id: 50, name: "Gaming PC", price: 55070, image: "/Images/Gamingpc.jpg", description: "Buy Gaming PC" }
    ],
    footware: [
        { id: 51, name: "Formal Shoes", price: 1299, image: "/Images/Formalshoes.jpg", description: "Elegant black leather shoes with a polished finish, perfect for business meetings and formal occasions." },
        { id: 52, name: "Casual Sneakers", price: 1640, image: "/Images/Casual_Sneakers.jpg", description: "Trendy and comfortable sneakers with a breathable mesh design, ideal for everyday wear and casual outings." },
        { id: 53, name: "Hiking Boots", price: 3660, image: "/Images/Hiking_Boots.jpg", description: "Durable and rugged hiking boots with deep-tread soles for maximum grip, designed for outdoor adventures." },
        { id: 54, name: "Loafers", price: 1259, image: "/Images/Loafers.jpg", description: "Stylish slip-on loafers with a soft suede finish, providing both comfort and sophistication for semi-formal occasions." },
        { id: 55, name: "Sports Running Shoes", price: 3120, image: "/Images/Sports_Shoes.jpg", description: "Lightweight and flexible running shoes with cushioned soles, built for enhanced performance and long-distance comfort." },
        { id: 56, name: "High-Heeled Sandals", price: 29050, image: "/Images/High-Heeled_Sandals.jpg", description: "Elegant and stylish heeled sandals with a sleek strap design, perfect for parties and formal events." },
        { id: 57, name: "Ballet Flats", price: 1100, image: "/Images/Ballet_Flats.jpg", description: "Classic and comfortable ballet flats with a soft suede finish and a cute bow detail, ideal for everyday wear." },
        { id: 58, name: "Wedge Sandals", price: 62080, image: "/Images/Wedge_Sandals.jpg", description: "Trendy and comfy wedge sandals with a cork-textured sole, perfect for casual outings and summer wear." },
        { id: 59, name: "Ankle Boots", price: 1170, image: "/Images/Ankle_Boots.jpg", description: "Sleek and fashionable ankle boots with a leather finish and a side zipper, ideal for chilly weather and stylish looks." },
        { id: 60, name: "Slip-On Sneakers", price: 55070, image: "/Images/Slip-On_Sneakers.jpg", description: "Lightweight and breathable slip-on sneakers with a cushioned sole, designed for all-day comfort and effortless style." }
    ],
    beauty: [
        { id: 61, name: "Nivea Soft", price: 130, image: "/Images/nivea-soft.jpeg", description: "Light moisturising Cream." },
        { id: 62, name: "Nivea Butter", price: 260, image: "/Images/nivea-butter.jpg", description: "Nivea Cocoa Butter" },
        { id: 63, name: "Vaseline", price: 560, image: "/Images/vaseline.jpg", description: "Vaseline" },
        { id: 64, name: "Vaseline Lip Petroleum Jelly", price: 60, image: "/Images/lip-jelly.jpg", description: "Vaseline Lip Petroleum Jelly" },
        { id: 65, name: "Rare Beauty", price: 1120, image: "/Images/rare-beauty.jpg", description: "Rare Beauty Product" },
        { id: 66, name: "Sunscreen", price: 550, image: "/Images/aqualogica.jpg", description: "SPF 50 sunscreen" },
        { id: 67, name: "Dove Soap", price: 110, image: "/Images/dove.jpg", description: "Dove Bathing Bar 135g" },
        { id: 68, name: "L'oreal Paris", price: 799, image: "/Images/loreal.jpg", description: "L'oreal Paris Total Repair 5" },
        { id: 69, name: "Head & Shoulder Shampoo", price: 265, image: "/Images/headandshoulders.jpg", description: "Head & Shoulders 2 in 1 anti dandruff shampoo" },
        { id: 70, name: "Ponds Facewash", price: 236, image: "/Images/ponds.jpg", description: "Ponds Pimple Clear Facewash" }
    ],
    sports: [
        { id: 71, name: "Badminton Rackets", price: 830, image: "/Images/badminton.jpg", description: "Hulk Badminton Racket Set of 2 by STARTER - Badminton Rackets, Ideal for Indoor & Outdoor, Multi-Colour." },
        { id: 72, name: "Cricket Bat", price: 94260, image: "/Images/bat.jpg", description: "DAVID WARNER PLAYER EDITION BAT" },
        { id: 73, name: "Bicycle", price: 18560, image: "/Images/cycle2.jpg", description: "CHAMPION MAGNESIUM ALLOY 24 GEAR CYCLE." },
        { id: 74, name: "Carrom Board", price: 1660, image: "/Images/carrom.jpg", description: "KORNERS Carrom Board | Black Round Pocket 32 Inches Full Size | Black" },
        { id: 75, name: "Skating Shoes", price: 2120, image: "/Images/skating.jpg", description: "JD Fresh 4 Wheel Inline Skates Skating Shoes for Boys and Girls Age 10 to 14 Years." },
        { id: 76, name: "Basketball", price: 2550, image: "/Images/basketball.jpeg", description: "Nike Basketball" },
        { id: 77, name: "Shuttlecock", price: 50, image: "/Images/shuttle.jpg", description: "Shuttle Cock (1 piece)" },
        { id: 78, name: "Cricket Stump", price: 399, image: "/Images/stump.jpg", description: "Jaspo Revive (World Cup Edition) Premium Plastic Stumps Set." },
        { id: 79, name: "Tennis Ball", price: 1265, image: "/Images/tennisball.jpg", description: "Vermont Mini Green Tennis Balls [Stage 1] - 10 Ball Bucket" },
        { id: 80, name: "Boxing Gloves", price: 8236, image: "/Images/boxing.jpg", description: "FIVING Boxing Gloves for Men and Women - Suitable for Boxing, Kickboxing, MMA, Muay Thai." }
    ],
    bags: [
        { id: 81, name: "Women Handbag", price: 10830, image: "/Images/bag1.jpg", description: "Women's Purses and Handbags - Designer Top Handle Satchel Tote Bag." },
        { id: 82, name: "Women Embroidered Handbag", price: 8260, image: "/Images/bag2.jpg", description: "Embroidered Leather Handbag for Women - Stylish & Elegant." },
        { id: 83, name: "Leather Bag", price: 18560, image: "/Images/bag3.jpg", description: "Premium Leather Handbag - Perfect for Office & Casual Wear." },
        { id: 84, name: "Women Laptop Bag", price: 560, image: "/Images/bag4.jpg", description: "Brown Artilea Women's Leather Laptop Bag - Durable & Fashionable." },
        { id: 85, name: "Multipurpose Bag", price: 2120, image: "/Images/bag5.jpg", description: "Multipurpose Leather Handbag for Ladies - Shoulder Bag Style." },
        { id: 86, name: "Backpack", price: 750, image: "/Images/bag6.jpg", description: "Water-Resistant Laptop Backpack - Ideal for School & Office Use." },
        { id: 87, name: "Men's Backpack", price: 1150, image: "/Images/bag8.jpg", description: "Stylish Backpack for Men - Travel & Daily Use." },
        { id: 88, name: "Sling Bag", price: 899, image: "/Images/bag9.jpg", description: "Trendy Sling Bag for Men - Compact & Lightweight." },
        { id: 89, name: "Messenger Bag", price: 1265, image: "/Images/bag10.jpg", description: "Classic Messenger Bag for Men - Business & Casual Wear." },
        { id: 90, name: "Men's Handbag", price: 936, image: "/Images/bag12.jpeg", description: "Fashionable Men's Handbag - High-Quality Leather." }
    ]
  };
  
  export default allProducts;
  