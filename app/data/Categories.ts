import { TbBeach, TbPool } from "react-icons/tb";
import { MdOutlineVilla } from "react-icons/md";
import { LuMountainSnow } from "react-icons/lu";
import { GiBoatFishing, GiCaveEntrance, GiFamilyHouse, GiForestCamp, GiIsland } from "react-icons/gi";
import { IoDiamondOutline } from "react-icons/io5";

export const CATEGORIES = [
    {
      label: 'Beach',
      icon: TbBeach,
      description: 'The property is close to the beach.',
    },
    {
      label: 'Modern',
      icon: MdOutlineVilla,
      description: 'The property has a modern design and amenities.',
    },
    {
      label: 'Mountain',
      icon: LuMountainSnow,
      description: 'The property offers stunning mountain views.',
    },
    {
      label: 'Loft',
      icon: GiFamilyHouse,
      description: 'The property features a loft-style living space.',
    },
    {
        label: 'Pool',
        icon: TbPool,
        description: 'The property has a pool.',
    },
    {
        label: 'Island',
        icon: GiIsland,
        description: 'The property is on an island.',
    },
    {
        label: 'Lake',
        icon: GiBoatFishing,
        description: 'The property is on the lake.',
    },
    {
        label: 'Forest',
        icon: GiForestCamp,
        description: 'The property is on the forest.',
    },
    {
        label: 'Cave',
        icon: GiCaveEntrance,
        description: 'The property is in the cave.',
    },
    {
        label: 'Luxury',
        icon: IoDiamondOutline,
        description: 'The property features a luxurious.',
    }
  ];