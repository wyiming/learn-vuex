import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import item from '@/components/item'
import auction from '@/components/auction'
import notice from '@/components/notice'
import mine from '@/components/mine'
import Hello from '@/components/Hello'
import World from '@/components/world'
import HelloChild from '@/components/HelloChild'
Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [{
            path: "/",
            redirect: "/Hello",
        },
        {
            path: "/Hello",
            name: "Hello",
            component: Hello,
            children: [{
                path: "/HelloChild",
                name: "HelloChild",
                component: HelloChild,
            }]
        }, {
            path: "/world",
            name: "World",
            component: World
        }, {
            path: "/index",
            name: "index",
            component: index
        }, {
            path: "/item",
            name: "item",
            component: item
        }, {
            path: "/auction",
            name: "auction",
            component: auction
        }, {
            path: "/notice",
            name: "notice",
            component: notice
        }, {
            path: "/mine",
            name: "mine",
            component: mine
        }
    ]
})
router.beforeEach() //指路由在每次切换的时候进行的操作
export default router
// 路由map  路由导航 路由视图
// 路由传参 嵌套路由
// 命名路由和命名视图
// 重定向