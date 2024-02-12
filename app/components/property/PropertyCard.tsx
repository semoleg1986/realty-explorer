'use client'

import useCountries from "@/app/hooks/useCountries";
import { Property } from "@/app/interfaces/Property.props"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import HeartButton from "../HeartButton";

interface PropertyCardProps {
    data: Property;
    disabled: boolean;
    actionLabel?: string;
    actionId?: string;
    onAction?: (id:string) => void;
}

const PropertyCard:React.FC<PropertyCardProps> = (
    {
        data,
        actionLabel,
        actionId = '',
        onAction,
        disabled
    }
) => {
  const router = useRouter();
  const { getByValue } = useCountries();


  const location = getByValue(data.locationValue);
  const favoritesData = localStorage.getItem('favoriteIds');
  const favoriteIds = favoritesData ? JSON.parse(favoritesData) : [];
  const isFavorite = favoriteIds.includes(data.id);
  
  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>)=> {
      e.stopPropagation();

      if (disabled) {
        return;
      }

      onAction?.(actionId);
    }, [onAction, actionId, disabled]
  )

  return (
    <div
      onClick={() => router.push(`/properties/${data.id}`)} 
      className="
        col-span-1 cursor-pointer group
      "
    >
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
            aspect-square
            w-full
            relative
            overflow-hidden
            rounded-xl
          "
        >
          <Image
            fill
            alt="listing"
            src={data.imageSrc}
            className="
              object-cover
              h-full
              w-full
              group-hover:scale-110
              transition
            "
          />
          <div className="absolute top-3 right-3">
            <HeartButton 
              listingId={data.id}
              isFavorite={isFavorite} 
            />
          </div>
        </div>
        <div className="font-semibold-text-lg">
          {location?.region}, {location?.label}
        </div>
        <div className="font-light text-neutral-500">
          {data.category}
        </div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">
            $ {data.price}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard
