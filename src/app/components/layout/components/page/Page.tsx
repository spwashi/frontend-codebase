import React from 'react';
import {Navigation} from '../navigation/Navigation';
import {mainNavigation} from '../../../../../.junction/routes/nav';


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
