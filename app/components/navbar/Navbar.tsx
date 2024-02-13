'use client'

import useCurrentUser from '@/app/actions/getCurrentUser'
import Container from '../Container'
import Categories from './Categories'
import Logo from './Logo'
import Search from './Search'
import UserMenu from './UserMenu'
import { Suspense } from 'react'

const Navbar = () => {
    const currentUser = useCurrentUser();

    return (
        <div className='fixed w-full bg-white z-10 shadow-sm'>
            <div
                className='
                    py-4
                    border-b-[1px]
                '
            >
                <Container>
                    <div
                        className='
                            flex
                            flex-row
                            items-center
                            justify-between
                            gap-3
                            md:gap-0
                        '
                    >
                        <Logo />
                        <Search />
                        <UserMenu currentUser = { currentUser }/>
                    </div>
                </Container>
            </div>
            <Suspense>
                <Categories />
            </Suspense>
        </div>
    )
    }

export default Navbar
