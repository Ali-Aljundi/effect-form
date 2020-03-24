import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'resizing',
                title    : 'Dashboard',
                type     : 'item',
                icon     : 'dashboard',
                url      : '/dashboard',
            },
            {
                id       : 'form',
                title    : 'Form',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'format_align_center',
                url      : '/form',
            },
         
            {
                id       : 'table',
                title    : 'table',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'format_align_center',
                url      : '/table',
            },
           

        ]
    }
];
