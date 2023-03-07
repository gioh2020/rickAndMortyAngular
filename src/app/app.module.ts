import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from './shared/components/header/header.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { EpisodesComponent } from './components/pages/episodes/episodes.component';
import { CharactersListComponent } from './components/pages/characters/characters-list/characters-list.component';

import { CharactersListModule } from './components/pages/characters/characters-list/characters-list.module';


const routes: Routes = [
  { path: '', redirectTo: 'character-list', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'episodes', component: EpisodesComponent},
  {
    path: 'character-list', component: CharactersListComponent
  },
  {
    path: 'character-details/:id',
    loadChildren: () => import('./components/pages/characters/characters-details/characters-details.module').then(m => m.CharactersDetailsModule)
  },
  // { path: 'about', loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule) },
  // { path: '**', loadChildren: () => import('./components/pages/notFound/not-found.module').then(m => m.NotFoundModule) },
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GraphQLModule,
    HttpClientModule,
    HeaderModule, 
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
