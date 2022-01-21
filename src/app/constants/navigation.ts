export const navLinks = [
    {href: '/', title: 'Home'},
    {href: '/museum', title: 'Museum'},
    {
        href:     '/improv',
        title:    'Improv',
        children: [
            {href: '/improv/shows', title: 'Improv Shows'},
            {href: '/improv/classes', title: 'Improv Classes'},
        ],
    },
    {
        href:     '/stand-up',
        title:    'Stand-up',
        children: [
            {href: '/stand-up/shows', title: 'Stand-up Shows'},
            {href: '/stand-up/classes', title: 'Stand-up Classes'},
        ],
    },
    {href: '/team', title: 'Meet the team'},
    {
        href:     '/events',
        title:    'Events',
        children: [
            {href: '/events/book', title: 'Parties'},
            {href: '/events/calendar', title: 'Calendar'},
            {href: '/events/list', title: 'Schedule'},
        ],
    },
]
