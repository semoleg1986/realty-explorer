import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_FAVS, REMOVE_FAVS } from '../graphql/mutations';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { toast } from 'react-hot-toast';

interface HeartButtonProps {
    listingId: string;
    isFavorite: boolean;
}

const HeartButton: React.FC<HeartButtonProps> = ({ listingId, isFavorite }) => {
    const [currentFavorite, setCurrentFavorite] = useState(isFavorite);

    const [addToFavorites] = useMutation(ADD_FAVS);
    const [removeFromFavorites] = useMutation(REMOVE_FAVS);

    const handleToggleFavorite = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation(); 
        try {
            if (currentFavorite) {
                await removeFromFavorites({
                    variables: {
                        id: listingId,
                    },
                });
                setCurrentFavorite(false); 
                toast.success('Removed from favorites');
            } else {
                await addToFavorites({
                    variables: {
                        id: listingId,
                    },
                });
                setCurrentFavorite(true);
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
                className={currentFavorite ? 'fill-rose-500' : 'fill-neutral-500/70'} // Используем currentFavorite для установки класса
            />
        </div>
    );
};

export default HeartButton;
