import { Property } from "@/app/interfaces/Property.props"
import Heading from "../navbar/Heading"
import useCountries from "@/app/hooks/useCountries"
import Image from "next/image";
import HeartButton from "../HeartButton";
import { CATEGORIES } from "@/app/data/Categories";

const PropertyDetail:React.FC<{ property: Property }> = ({property}) => {

    const { getByValue } = useCountries();
    const location = getByValue(property.locationValue)
    return (
        <div className="max-w-screen-lg mx-auto">
            <div className="flex flex-col gap-6">
                <Heading
                    title={property.title}
                    subtitle={`${location?.region}, ${location?.label}`}
                />
                <div
                    className="w-full h-[60vh] overflow-hidden rounded-xl relative"
                >
                    <Image
                        alt="Image"
                        src={property.imageSrc}
                        fill
                        className="object-cover w-full"
                    />
                </div>
                <div className="col-span-4 flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
                            <div>
                                {property.roomCount} rooms
                            </div>
                            <div>
                                {property.bathroomCount} bathrooms
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="text-lg font-light text-neutral-500">
                        {property.description}
                    </div>
                    <hr />
                    <div
                        className="
                            p-4
                            flex
                            flex-row
                            items-center
                            justify-between
                            font-semibold
                            text-lg
                        "
                    >
                        <div>
                            Price
                        </div>
                        <div>
                            ${property.price}
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default PropertyDetail
