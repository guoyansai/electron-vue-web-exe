module.exports = [
    path('/', 'index', '网站首页', '', { redirect: '/home.html' }, [
        path('/home.html', 'home', '网站主页'),
        path('/test/', 'test', '测试分类', '', { redirect: '/test/a1.html' }, [
            path('a1.html', 'test/a1', '测试A1'),
            path('a2.html', 'test/a2', '测试A2'),
        ]),
        path('/test/', 'test', '测试分类', '', { redirect: '/test/a1.html' }, [
            path('a1.html', 'test/a1', '测试A1'),
            path('a2.html', 'test/a2', '测试A2'),
        ]),
        path('/test/', 'test', '测试分类', '', { redirect: '/test/a1.html' }, [
            path('a1.html', 'test/a1', '测试A1'),
            path('a2.html', 'test/a2', '测试A2'),
        ]),
        path('/test/', 'test', '测试分类', '', { redirect: '/test/a1.html' }, [
            path('a1.html', 'test/a1', '测试A1'),
            path('a2.html', 'test/a2', '测试A2'),
        ]),
        path('/test/', 'test', '测试分类', '', { redirect: '/test/a1.html' }, [
            path('a1.html', 'test/a1', '测试A1'),
            path('a2.html', 'test/a2', '测试A2'),
        ]),
        path('/test/', 'test', '测试分类', '', { redirect: '/test/a1.html' }, [
            path('a1.html', 'test/a1', '测试A1'),
            path('a2.html', 'test/a2', '测试A2'),
        ]),
    ]),
    path('*', 'redirect', '跳转页', '', { redirect: '/' }),
];
//path(path定义路由路径, name挂在文件路径, title页面title, views = [router-view,router-view1], other = {redirect:'/home/index'}路由其他参数, children = []嵌套路由配置)
function path(path, name, title, des, other = {}, children = []) {
    return Object.assign({
        path: path,
        name: name,
        meta: {
            title: title,
            des: des,
        },
        component: (resolve) => require(['../views/' + name + '.vue'], resolve),
        children: children,
    }, other)
}