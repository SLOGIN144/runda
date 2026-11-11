import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { MyGames } from './pages/my-games/my-games';
import { GameEditor } from './pages/game-editor/game-editor';
import { Explore } from './pages/explore/explore';
import { Lobby } from './pages/lobby/lobby';
import { Play } from './pages/play/play';
import { RoundResult } from './pages/round-result/round-result';
import { Vote } from './pages/vote/vote';
import { Admin } from './pages/admin/admin';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'prijava', component: Login },
  { path: 'moje-igre', component: MyGames },
  { path: 'igra/:id/uredi', component: GameEditor },
  { path: 'raziskuj', component: Explore },
  { path: 'soba/:koda', component: Lobby },
  { path: 'soba/:koda/igra', component: Play },
  { path: 'soba/:koda/rezultat', component: RoundResult },
  { path: 'soba/:koda/glas', component: Vote },
  { path: 'admin', component: Admin },
  { path: '**', redirectTo: '' }
];