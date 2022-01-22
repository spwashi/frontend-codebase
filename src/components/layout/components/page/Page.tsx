import React from 'react';
import './page.scss';
import {Navigation} from '../navigation/Navigation';
import {mainNavigation} from '../../../../app/routes/mainNavigation';


interface PageProps {
    children?: any
}

export function Page({children}: PageProps) {
    return (
        <article>
            <header>
                <Navigation items={mainNavigation}/>
            </header>
            {children}
        </article>
    )
}
