import { infoSection } from "../../../assets/data"
import Items from "./Items"

const InforSection = () => {
    return (
        <div className="bg-white  pb-8 pt-12 ">
            <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">

                {
                    infoSection.map((item, index) => <Items key={index} item={item}></Items>)
                }
            </div>
        </div>
    )
}

export default InforSection