import Logo from "./Logo"
import SearchBar from "./SearchBar"
import Cart from "./Cart"

const Navbar = () => {
    return (

        <nav className="bg-white shadow-md">
            <div className="container mx-auto  px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
                
                <div className="flex justify-center items-center">
                    <Logo></Logo>

                    <SearchBar></SearchBar>
                </div>

                <Cart></Cart>
            </div>
        </nav>

    )
}

export default Navbar