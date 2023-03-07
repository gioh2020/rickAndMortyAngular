import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesModule } from './components/pages/episodes/episodes.module';
import { HomeModule } from './components/pages/home/home.module';
import { CharactersDetailsModule } from './components/pages/characters/characters-details/characters-details.module';
import { CharactersListModule } from './components/pages/characters/characters-list/characters-list.module';
import { HomeComponent } from './components/pages/home/home.component';



const routes: Routes = [
  { path: '', redirectTo: 'character-list', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'episodes', loadChildren: () => import('./components/pages/episodes/episodes.module').then(m => m.EpisodesModule) },
  {
    path: 'character-list',
    loadChildren: () => import('./components/pages/characters/characters-list/characters-list.module').then(m => m.CharactersListModule)
  },
  {
    path: 'character-details/:id',
    loadChildren: () => import('./components/pages/characters/characters-details/characters-details.module').then(m => m.CharactersDetailsModule)
  },
  // { path: 'about', loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule) },
  // { path: '**', loadChildren: () => import('./components/pages/notFound/not-found.module').then(m => m.NotFoundModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
    
    exports: [RouterModule]
})

export class AppRoutingModule { }
