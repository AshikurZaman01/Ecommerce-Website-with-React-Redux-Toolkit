import { FaBoxOpen, FaCreditCard, FaHeadset, FaLock, FaShoppingCart, FaStar, FaTags } from "react-icons/fa";

export const Categories = [
    "Electronics",
    "Fashion",
    "Home & Kitchen",
    "Sports",
    "Beauty",
    "Toys & Games",
]



export const infoSection = [
    {
        icon: <FaShoppingCart className="text-3xl text-red-600" />,  // Shopping cart icon
        title: "Free Shipping",
        description: "Enjoy free shipping on all orders over $50."
    },
    {
        icon: <FaLock className="text-3xl text-red-600" />,  // Lock icon
        title: "Secure Payment",
        description: "We offer secure payment options to protect your information."
    },
    {
        icon: <FaBoxOpen className="text-3xl text-red-600" />,  // Package icon
        title: "Easy Returns",
        description: "Hassle-free returns within 30 days of purchase."
    },
    {
        icon: <FaHeadset className="text-3xl text-red-600" />,  // Headset icon
        title: "24/7 Support",
        description: "Our customer service team is available 24/7 to assist you."
    },
    {
        icon: <FaStar className="text-3xl text-red-600" />,  // Star icon
        title: "Quality Products",
        description: "We source only the highest quality products for our customers."
    }
];


export const categoryImages = [
    {
        image: "https://tse2.mm.bing.net/th?id=OIG3.d3axt.GnQrpmdk6QKySu&pid=ImgGn",
        name: "Men's Fashion"
    },
    {
        image: "https://tse3.mm.bing.net/th?id=OIG2.Db63vWDzF7EavsDt5jSy&pid=ImgGn",
        name: "Women's Fashion"
    },
    {
        image: "https://tse3.mm.bing.net/th?id=OIG2.XiJ99B0FZiQ4Gpm8NwL9&pid=ImgGn",
        name: "Kids Fashion"
    }
]

export const productsData = [
    {
        id: 1,
        name: "Shirt",
        image: "https://img.freepik.com/free-psd/stylish-blue-plaid-shirt-men-isolated-transparent-background_191095-23044.jpg?semt=ais_hybrid",
        price: "4.99",
        rating: 4.5,
        description: "Stylish blue plaid shirt for men.",
        category: "Clothing"
    },
    {
        id: 2,
        name: "Jeans",
        image: "https://img.freepik.com/free-photo/jeans_1203-8093.jpg?semt=ais_hybrid",
        price: "29.99",
        rating: 4.2,
        description: "Comfortable denim jeans for everyday wear.",
        category: "Clothing"
    },
    {
        id: 3,
        name: "Sneakers",
        image: "https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg?semt=ais_hybrid",
        price: "49.99",
        rating: 4.7,
        description: "Trendy sneakers for a casual look.",
        category: "Footwear"
    },
    {
        id: 4,
        name: "Hat",
        image: "https://img.freepik.com/free-photo/isolated-white-cap_125540-1024.jpg?semt=ais_hybrid",
        price: "12.99",
        rating: 4.0,
        description: "Stylish white cap for sunny days.",
        category: "Accessories"
    },
    {
        id: 5,
        name: "Jacket",
        image: "https://img.freepik.com/premium-photo/blue-leather-jacket-with-black-stripe-front_958541-6974.jpg?semt=ais_hybrid",
        price: "59.99",
        rating: 4.8,
        description: "Premium blue leather jacket.",
        category: "Outerwear"
    },
    {
        id: 6,
        name: "T-shirt",
        image: "https://img.freepik.com/free-vector/colorful-flat-rainbow-run-marathon-t-shirt_742173-14080.jpg?semt=ais_hybrid",
        price: "9.99",
        rating: 4.3,
        description: "Colorful T-shirt for marathon runners.",
        category: "Clothing"
    },
    {
        id: 7,
        name: "Shorts",
        image: "https://img.freepik.com/free-photo/blue-underpants-with-white-details_1203-1855.jpg?semt=ais_hybrid",
        price: "19.99",
        rating: 4.1,
        description: "Comfortable blue shorts for summer.",
        category: "Clothing"
    },
    {
        id: 8,
        name: "Socks",
        image: "https://img.freepik.com/free-photo/sock-isolated-white_1203-2367.jpg?semt=ais_hybrid",
        price: "5.99",
        rating: 4.6,
        description: "Soft and cozy socks.",
        category: "Accessories"
    },
    {
        id: 9,
        name: "Belt",
        image: "https://img.freepik.com/premium-photo/stylish-brown-leather-belt-carefully-arranged-neutral-background-fashion-display_406939-35502.jpg?semt=ais_hybrid",
        price: "14.99",
        rating: 4.4,
        description: "Stylish brown leather belt.",
        category: "Accessories"
    },
    {
        id: 10,
        name: "Scarf",
        image: "https://img.freepik.com/free-vector/3d-realistic-illustration-red-knitted-scarf-with-decorative-pattern-gold-fringe-isola_1441-1967.jpg?semt=ais_hybrid",
        price: "8.99",
        rating: 4.3,
        description: "Warm knitted scarf with decorative patterns.",
        category: "Accessories"
    }
];
