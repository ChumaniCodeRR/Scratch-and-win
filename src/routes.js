import React from 'react';
const BirthDayPage = React.lazy(() => import('./components/BirthDayPage'));
const ScratchOff = React.lazy(() => import('./components/ScratchOff'));

const routes = [
    { path: '/BirthDayPage', name: 'Birth Day Page', component: BirthDayPage },
    { path: '/ScratchOff', name: 'ScratchOff Page', component: ScratchOff}
];

export default routes;
