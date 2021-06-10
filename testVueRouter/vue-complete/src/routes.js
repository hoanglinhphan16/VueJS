import Header from './components/layout/Header.vue'
import Home from './components/Home'

const User = resolve => {
    require.ensure(['./components/user/User'], () => {
        resolve(require('./components/user/User'))
    }, 'user')
}

const UserStart = resolve => {
    require.ensure(['./components/user/Index'], () => {
        resolve(require('./components/user/Index'))
    }, 'user')
}

const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail'], () => {
        resolve(require('./components/user/UserDetail'))
    }, 'user')
}

const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit'], () => {
        resolve(require('./components/user/UserEdit'))
    }, 'user')
}
import Error404 from './components/404'

export const routes = [
    { path: '/', name:'home', components: {
        default: Home,
        'Header' : Header,

    } },
    { 
    path: '/user',
    name:'user',
    component: User,
    children: [
    {
        path: '', name:'index', component: UserStart
    },
    {
        path: ':id', name:'userdetail', component: UserDetail, beforeEnter: (to, from, next) => {
            console.log('Action route Guards');
            next()
        }
    },
    {
        path: ':id/edit', name:'useredit', component: UserEdit
    }] 
    },
    {
        path: '/auth-redirect', redirect: { name: 'home'}
    },
    {
        path: '/404', name: 'error404', component: Error404
    },
    {
        path: '*', redirect: '/404'
    }
]