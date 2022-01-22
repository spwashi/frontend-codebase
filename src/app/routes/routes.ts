type NavRoute = {
    href: string;
    title: string;
    children?: NavRoute[];
}

export const homeRoute    = {
    id:    'home',
    href:  '/',
    title: 'Home',
};
export const aboutRoute   = {
    id:    'about',
    href:  '/about',
    title: 'About',
};
export const museumRoute  = {
    id:    'museum',
    href:  '/museum',
    title: 'Museum',
};
export const standUpRoute = {
    id:    'standUp',
    href:  '/stand-up',
    title: 'Stand-up',
};
export const improvRoute  = {
    id:    'improv',
    href:  '/improv',
    title: 'Improv',
};
export const openMicRoute = {
    id:    'openMic',
    href:  '/open-mic',
    title: 'Open-mic',
};
export const showsRoute   = {
    id:       'shows',
    href:     '/shows',
    title:    'Shows',
    children: [
        {
            id:    'shows__improv',
            href:  '/shows/improv',
            title: 'Improv',
        },
        {
            id:    'shows__standUp',
            href:  '/shows/stand-up',
            title: 'Stand-up',
        },
    ],
};
export const eventsRoute  = {
    id:       'events',
    href:     '/events',
    title:    'Events',
    children: [
        {
            id:    'events__parties',
            href:  '/events/parties',
            title: 'Parties',
        },
        {
            id:    'events__schedule',
            href:  '/events/schedule',
            title: 'Schedule',
        },
        {
            id:    'events__calendar',
            href:  '/events/calendar',
            title: 'Calendar',
        },
    ],
};
export const teamRoute    = {
    id:    'team',
    href:  '/team',
    title: 'Team',
};

export const routes     = {
    home:    homeRoute,
    about:   aboutRoute,
    museum:  museumRoute,
    standUp: standUpRoute,
    openMic: openMicRoute,
    improv:  improvRoute,
    shows:   showsRoute,
    events:  eventsRoute,
    team:    teamRoute,
};
