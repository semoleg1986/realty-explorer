'use client'

import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_FAVS, REMOVE_FAVS } from '../graphql/mutations';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { toast } from 'react-hot-toast';

interface HeartButtonProps {
    listingId: string;
}

const HeartButton: React.FC<HeartButtonProps> = ({ listingId }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const [addToFavorites] = useMutation(ADD_FAVS);
    const [removeFromFavorites] = useMutation(REMOVE_FAVS);

    const handleToggleFavorite = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation(); 
        try {
            if (isFavorite) {
                await removeFromFavorites({
                    variables: {
                        id: listingId,
                    },
                });
                setIsFavorite(false);
                toast.success('Removed from favorites');
            } else {
                await addToFavorites({
                    variables: {
                        id: listingId,
                    },
                });
                setIsFavorite(true);
                toast.success('Added to favorites');
            }
        } catch (error) {
            toast.error('Error toggling favorite');
        }
    };

    return (
        <div
            onClick={handleToggleFavorite}
            className="relative hover:opacity-80 transition cursor-pointer"
        >
            <AiOutlineHeart
                size={28}
                className="fill-white absolute -top-[2px] -right-[2px]"
            />
            <AiFillHeart
                size={24}
                className={isFavorite ? 'fill-rose-500' : 'fill-neutral-500/70'}
            />
        </div>
    );
};

export default HeartButton;
