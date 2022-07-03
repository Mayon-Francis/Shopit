const productList = [
    {
        name: 'Remi Note 10',
        price: '10000',
        actualPrice: '15000',
        image: 'assets/images/sale/RedmiNote10.jpg',
        images: [
            'assets/images/sale/RedmiNote10.jpg',
            'assets/images/sale/RedmiNote10_2.jpeg',
            'assets/images/sale/RedmiNote10_3.webp',
            'assets/images/sale/RedmiNote10.jpg',
            'assets/images/sale/RedmiNote10_2.jpeg',
            'assets/images/sale/RedmiNote10_3.webp',
            'assets/images/sale/RedmiNote10.jpg',
            'assets/images/sale/RedmiNote10_2.jpeg',
            'assets/images/sale/RedmiNote10_3.webp',
        ],
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit mauris sed sem laoreet consequat. Vivamus malesuada nisi ex. Ut odio diam, sollicitudin sit amet porta eget, tristique nec arcu. Aenean id leo a ligula porttitor convallis feugiat vel nulla. Pellentesque iaculis vestibulum felis quis malesuada. Vivamus nec volutpat justo, et lobortis ex. Nunc posuere magna id tellus consectetur, eu dictum mi tincidunt. Vivamus facilisis ligula nec iaculis convallis.',
        specifications: {
            ModelName : 'N200',
            WirelessCarrier : 'Unlocked',
            Memory : '4GB',
            OperatingSystem : 'OxygenOs',
            color : 'OceanBlue',
            Year : '2022',
        },
        pid: 'redmiNote10',
        category: ['smartphones','electronics'],
    },
    {
        name: 'Samsung M51',
        price: '10000',
        actualPrice: '15000',
        image: 'assets/images/sale/SamsungM51.jpeg',
        images: [
            'assets/images/sale/SamsungM51.jpeg',
            'assets/images/sale/SamsungM51_2.webp',
            'assets/images/sale/SamsungM51_3.jpg',
            'assets/images/sale/SamsungM51.jpeg',
            'assets/images/sale/SamsungM51_2.webp',
            'assets/images/sale/SamsungM51_3.jpg',
            'assets/images/sale/SamsungM51.jpeg',
            'assets/images/sale/SamsungM51_2.webp',
            'assets/images/sale/SamsungM51_3.jpg',
        ],
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit mauris sed sem laoreet consequat. Vivamus malesuada nisi ex. Ut odio diam, sollicitudin sit amet porta eget, tristique nec arcu. Aenean id leo a ligula porttitor convallis feugiat vel nulla. Pellentesque iaculis vestibulum felis quis malesuada. Vivamus nec volutpat justo, et lobortis ex. Nunc posuere magna id tellus consectetur, eu dictum mi tincidunt. Vivamus facilisis ligula nec iaculis convallis.',
        specifications: {
            ModelName : 'N200',
            WirelessCarrier : 'Unlocked',
            Memory : '4GB',
            OperatingSystem : 'OxygenOs',
            color : 'OceanBlue',
            Year : '2022',
        },
        pid: 'samsungM51',
        category: ['smartphones','electronics'],
    },
    {
        name: 'Champion classic T-Shirt',
        price: '2500',
        actualPrice: '7000',
        image: 'assets/images/sale/MensTShirt1.jpg',
        images: [
            'assets/images/sale/MensTShirt1.jpg',
            'assets/images/sale/MensTShirt1_2.webp',
            'assets/images/sale/MensTShirt1_3.webp',
            'assets/images/sale/MensTShirt1.jpg',
            'assets/images/sale/MensTShirt1_2.webp',
            'assets/images/sale/MensTShirt1_3.webp',
            'assets/images/sale/MensTShirt1.jpg',
            'assets/images/sale/MensTShirt1_2.webp',
            'assets/images/sale/MensTShirt1_3.webp',
        ],
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit mauris sed sem laoreet consequat. Vivamus malesuada nisi ex. Ut odio diam, sollicitudin sit amet porta eget, tristique nec arcu. Aenean id leo a ligula porttitor convallis feugiat vel nulla. Pellentesque iaculis vestibulum felis quis malesuada. Vivamus nec volutpat justo, et lobortis ex. Nunc posuere magna id tellus consectetur, eu dictum mi tincidunt. Vivamus facilisis ligula nec iaculis convallis.',
        specifications: {
            ModelName : 'N200',
            WirelessCarrier : 'Unlocked',
            Memory : '4GB',
            OperatingSystem : 'OxygenOs',
            color : 'OceanBlue',
            Year : '2022',
        },
        pid: 'classic123',
        category: ['mensclothing','mens','clothing', 'tshirt'],
    },
    {
        name: 'Levi TShirt',
        price: '4000',
        actualPrice: '8000',
        image: 'assets/images/sale/MensTShirt2.jpg',
        images: [
            'assets/images/sale/MensTShirt2.jpg',
            'assets/images/sale/MensTShirt1_2.webp',
            'assets/images/sale/MensTShirt1_3.webp',
            'assets/images/sale/MensTShirt1.jpg',
            'assets/images/sale/MensTShirt2.jpg',
            'assets/images/sale/MensTShirt1_3.webp',
            'assets/images/sale/MensTShirt1.jpg',
            'assets/images/sale/MensTShirt1_2.webp',
            'assets/images/sale/MensTShirt2.jpg',
        ],
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit mauris sed sem laoreet consequat. Vivamus malesuada nisi ex. Ut odio diam, sollicitudin sit amet porta eget, tristique nec arcu. Aenean id leo a ligula porttitor convallis feugiat vel nulla. Pellentesque iaculis vestibulum felis quis malesuada. Vivamus nec volutpat justo, et lobortis ex. Nunc posuere magna id tellus consectetur, eu dictum mi tincidunt. Vivamus facilisis ligula nec iaculis convallis.',
        specifications: {
            ModelName : 'N200',
            WirelessCarrier : 'Unlocked',
            Memory : '4GB',
            OperatingSystem : 'OxygenOs',
            color : 'OceanBlue',
            Year : '2022',
        },
        pid: 'levi123Abc',
        category: ['mensclothing','mens','clothing', 'tshirt'],
    },
    {
        name: 'Louis Philippe',
        price: '8000',
        actualPrice: '11500',
        image: 'assets/images/sale/MensTShirt3.jpg',
        images: [
            'assets/images/sale/MensTShirt3.jpg',
            'assets/images/sale/MensTShirt1_2.webp',
            'assets/images/sale/MensTShirt1_3.webp',
            'assets/images/sale/MensTShirt3.jpg',
            'assets/images/sale/MensTShirt1_2.webp',
            'assets/images/sale/MensTShirt1_3.webp',
            'assets/images/sale/MensTShirt3.jpg',
            'assets/images/sale/MensTShirt1_2.webp',
            'assets/images/sale/MensTShirt1_3.webp',
        ],
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit mauris sed sem laoreet consequat. Vivamus malesuada nisi ex. Ut odio diam, sollicitudin sit amet porta eget, tristique nec arcu. Aenean id leo a ligula porttitor convallis feugiat vel nulla. Pellentesque iaculis vestibulum felis quis malesuada. Vivamus nec volutpat justo, et lobortis ex. Nunc posuere magna id tellus consectetur, eu dictum mi tincidunt. Vivamus facilisis ligula nec iaculis convallis.',
        specifications: {
            ModelName : 'N200',
            WirelessCarrier : 'Unlocked',
            Memory : '4GB',
            OperatingSystem : 'OxygenOs',
            color : 'OceanBlue',
            Year : '2022',
        },
        pid: 'louisPhilippe2bc1m1vs',
        category: ['mensclothing','mens','clothing', 'tshirt'],
    },
    {
        name: 'Non Stick Cooking Pots',
        price: '1500',
        actualPrice: '3500',
        image: 'assets/images/sale/NonStick1.jpg',
        images: [
            'assets/images/sale/NonStick1.jpg',
            'assets/images/sale/NonStick2.jpg',
            'assets/images/sale/NonStick1.jpg',
            'assets/images/sale/NonStick3.jpg',
            'assets/images/sale/NonStick2.jpg',
            'assets/images/sale/NonStick1.jpg',
            'assets/images/sale/NonStick3.jpg',
            'assets/images/sale/NonStick2.jpg',
        ],
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit mauris sed sem laoreet consequat. Vivamus malesuada nisi ex. Ut odio diam, sollicitudin sit amet porta eget, tristique nec arcu. Aenean id leo a ligula porttitor convallis feugiat vel nulla. Pellentesque iaculis vestibulum felis quis malesuada. Vivamus nec volutpat justo, et lobortis ex. Nunc posuere magna id tellus consectetur, eu dictum mi tincidunt. Vivamus facilisis ligula nec iaculis convallis.',
        specifications: {
            ModelName : 'N200',
            WirelessCarrier : 'Unlocked',
            Memory : '4GB',
            OperatingSystem : 'OxygenOs',
            color : 'OceanBlue',
            Year : '2022',
        },
        pid: 'nonStick016nade',
        category: ['nonstick','cooking','pot', 'nonstickpot'],
    },
    {
        name: 'Cooking Pots Set of 3',
        price: '3000',
        actualPrice: '5000',
        image: 'assets/images/sale/NonStick2.jpg',
        images: [
            'assets/images/sale/NonStick1.jpg',
            'assets/images/sale/NonStick2.jpg',
            'assets/images/sale/NonStick1.jpg',
            'assets/images/sale/NonStick3.jpg',
            'assets/images/sale/NonStick2.jpg',
            'assets/images/sale/NonStick1.jpg',
            'assets/images/sale/NonStick3.jpg',
            'assets/images/sale/NonStick2.jpg',
        ],
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit mauris sed sem laoreet consequat. Vivamus malesuada nisi ex. Ut odio diam, sollicitudin sit amet porta eget, tristique nec arcu. Aenean id leo a ligula porttitor convallis feugiat vel nulla. Pellentesque iaculis vestibulum felis quis malesuada. Vivamus nec volutpat justo, et lobortis ex. Nunc posuere magna id tellus consectetur, eu dictum mi tincidunt. Vivamus facilisis ligula nec iaculis convallis.',
        specifications: {
            ModelName : 'N200',
            WirelessCarrier : 'Unlocked',
            Memory : '4GB',
            OperatingSystem : 'OxygenOs',
            color : 'OceanBlue',
            Year : '2022',
        },
        pid: 'nonStick42346na2323de',
        category: ['nonstick','cooking','pot', 'nonstickpot'],
    },
    {
        name: 'Non Stick Biriyani Pot',
        price: '400',
        actualPrice: '1500',
        image: 'assets/images/sale/NonStick3.jpg',
        images: [
            'assets/images/sale/NonStick1.jpg',
            'assets/images/sale/NonStick2.jpg',
            'assets/images/sale/NonStick1.jpg',
            'assets/images/sale/NonStick3.jpg',
            'assets/images/sale/NonStick2.jpg',
            'assets/images/sale/NonStick1.jpg',
            'assets/images/sale/NonStick3.jpg',
            'assets/images/sale/NonStick2.jpg',
        ],
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit mauris sed sem laoreet consequat. Vivamus malesuada nisi ex. Ut odio diam, sollicitudin sit amet porta eget, tristique nec arcu. Aenean id leo a ligula porttitor convallis feugiat vel nulla. Pellentesque iaculis vestibulum felis quis malesuada. Vivamus nec volutpat justo, et lobortis ex. Nunc posuere magna id tellus consectetur, eu dictum mi tincidunt. Vivamus facilisis ligula nec iaculis convallis.',
        specifications: {
            ModelName : 'N200',
            WirelessCarrier : 'Unlocked',
            Memory : '4GB',
            OperatingSystem : 'OxygenOs',
            color : 'OceanBlue',
            Year : '2022',
        },
        pid: 'nonStick628xfa2323de',
        category: ['nonstick','cooking','pot', 'nonstickpot'],
    },
]

function getMobileOffers() {
    const MobileProducts = productList.filter((elem)=>{
        return elem.category.includes('smartphones')
    })
    return MobileProducts.concat(MobileProducts).concat(MobileProducts);
}

function getMensClothingOffers() {
    const menClothing = productList.filter((elem)=>{
        return elem.category.includes('mensclothing')
    })
    return menClothing.concat(menClothing).concat(menClothing);
    
}
function getKitchenOffers() {
    const kitchenOffers = productList.filter((elem)=>{
        return elem.category.includes('nonstick')
    })
    return kitchenOffers.concat(kitchenOffers).concat(kitchenOffers);
}

function getProduct(pid) {
    const Product = productList.find((elem)=>{
        return elem.pid === pid
    })
    return Product;
}

export {
    getMobileOffers,
    getMensClothingOffers,
    getKitchenOffers,
    getProduct,
}