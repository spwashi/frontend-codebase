import React from 'react';
import './page.scss';
import {Navigation} from '../navigation/Navigation';
import {navLinks} from '../../../../app/constants/navigation';


interface PageProps {
    children?: any
}

export function Page({children}: PageProps) {
    return (
        <article>
            <header>
                <Navigation items={navLinks}/>
            </header>
            {children}
        </article>
    )
}
