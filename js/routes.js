import List from './pages/List.js';
import Ill from './pages/Impossible List.js'
import Leaderboard from './pages/Leaderboard.js';
import Roulette from './pages/Roulette.js';

export default [
    { path: '/', component: List },
    { path: '/ill', component: Ill },
    { path: '/leaderboard', component: Leaderboard },
    { path: '/roulette', component: Roulette },
];
