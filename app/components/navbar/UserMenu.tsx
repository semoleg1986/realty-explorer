'use client'

import {AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import { useCallback, useEffect, useRef, useState } from 'react';
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import useRentModal from '@/app/hooks/useRentModal';

interface UserMenuProps {
    currentUser?: string | null
}

const UserMenu: React.FC<UserMenuProps> = ({
    currentUser
}) => {
    const router = useRouter()
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const rentModal = useRentModal();

    const [isOpen, setIsOpen] = useState(false)
    const modalRef = useRef<HTMLDivElement>(null);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, [])
    const handleLogout = () => {
        toast.success('Logout succesful');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('email');
        localStorage.removeItem('favoriteIds');
        router.refresh();
        setIsOpen(false); 
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);


    const onRent = useCallback(() => {
        if (!currentUser){
            return  loginModal.onOpen();
        }
        setIsOpen(false);
        rentModal.onOpen();
        

    }, [currentUser, loginModal, rentModal])

    return (
        <div className='relative' ref={modalRef}>
        <div className='flex flex-row items-center gap-3'>
            <div
                onClick={onRent}
                className='
                    hidden
                    md:block
                    text-sm
                    font-semibold
                    py-3
                    px-4
                    rounded-full
                    hover:bg-neutral-100
                    transition
                    cursor-pointer
                '
            >
                {currentUser ? 'Add property' : 'Menu'}
            </div>
            <div
                onClick={(toggleOpen)}
                className='
                    p-4
                    md:py-1
                    md:px-2
                    border-[1px]
                    border-neutral-200
                    flex
                    flex-row
                    items-center
                    gap-3
                    rounded-full
                    cursor-pointer
                    hover:shadow-md
                    transition
                '
            >
                <AiOutlineMenu />
                <div className='hidden md:block'>
                    <Avatar />
                </div>
            </div>
        </div>
            {isOpen && (
                <div
                    className='
                        absolute
                        rounded-xl
                        shadow-md
                        w-[40vw]
                        md:w-3/4
                        bg-white
                        overflow-hidden
                        right-0
                        top-12
                        text-sm
                    '
                >
                    <div className='flex flex-col cursor-pointer'>
                        {currentUser ? (<>
                            <MenuItem 
                                onClick={() => {}}
                                label="My properties"
                            />
                            <MenuItem 
                                onClick={() => {}}
                                label="My favorites"
                            />
                            <MenuItem 
                                onClick={rentModal.onOpen}
                                label="Add property"
                            />
                            <hr/>
                            <MenuItem 
                                onClick={handleLogout}
                                label="Logout"
                            />
                        </>) : (<>
                            <MenuItem 
                                onClick={loginModal.onOpen}
                                label="Login"
                            />
                            <MenuItem 
                                onClick={registerModal.onOpen}
                                label="Sign up"
                            />
                        </>)}
                        
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserMenu
