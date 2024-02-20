import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/', component: 'index' },
    { path: '/earn', component: 'earn' },
    { path: '/win', component: 'win' },
    { path: '/account', component: 'account' },
  ],
  npmClient: 'npm',
});
