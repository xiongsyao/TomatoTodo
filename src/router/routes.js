export default  [

  {
    path: '',
    meta: {requiresAuth: true},
    component: solve => require(['@/pages/Home'], solve),
  },
  {
    path: '/home',
    meta: {requiresAuth: true},
    component: solve => require(['@/pages/Home'], solve)
  },
  {
    path: '/login',
    component: solve => require(['@/pages/Login'], solve)
  },
  {
    path: '*',
    redirect: '/home'
  }
];

