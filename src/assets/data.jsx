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