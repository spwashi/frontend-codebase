type NavRoute = {
    href: string;
    title: string;
    children?: NavRoute[];
}

const homeRoute  = {
    id:    'home',
    href:  '/',
    title: 'Home',
};
const aboutRoute = {
    id:    'about',
    href:  '/about',
    title: 'About',
};


export const routes = {
    home:  homeRoute,
    about: aboutRoute,
};
