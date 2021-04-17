import { RouterState } from 'mobx-state-router';

const checkForUserSession = (fromState, toState, routerStore) => {
    if (JSON.parse(sessionStorage.getItem('person'))) {
        return Promise.resolve();
    }
    else {
        return Promise.reject(new RouterState('login'));
    }
}

export const routes = [
    {
        name: 'login',
        pattern: '/'
    },
    {
        name: 'register',
        pattern: '/register'
    },
    {
        name: 'dashboard',
        pattern: '/dashboard',
        beforeEnter: checkForUserSession
    },
    {
        name: 'supervision',
        pattern: '/supervision',
        beforeEnter: checkForUserSession
    },
    {
        name: 'createCategory',
        pattern: '/createCategory',
        beforeEnter: checkForUserSession
    },
    {
        name: 'addItem',
        pattern: '/addItem',
        beforeEnter: checkForUserSession
    },
    {
        name: 'myBackpack',
        pattern: '/myBackpack',
        beforeEnter: checkForUserSession
    },
    {
        name: 'virtualWarehouse',
        pattern: '/virtualWarehouse',
        beforeEnter: checkForUserSession
    },
    {
        name: 'editItem',
        pattern: '/editItem/:id',
        beforeEnter: checkForUserSession
    },
    {
        name: 'myProfile',
        pattern: '/myProfile',
        beforeEnter: checkForUserSession
    },
    {
        name: 'notFound',
        pattern: '/notFound'
    }
];