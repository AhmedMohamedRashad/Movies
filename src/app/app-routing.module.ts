import { MoviedetaillsComponent } from './moviedetaills/moviedetaills.component';
import { AuthGuard } from './auth.guard';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NetworkComponent } from './network/network.component';
import { PeopleComponent } from './people/people.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent},
  {path:'tv',canActivate:[AuthGuard],component:TvComponent},
  {path:'movies',canActivate:[AuthGuard],component:MoviesComponent},
  {path:'people',canActivate:[AuthGuard],component:PeopleComponent},
  {path:'about',canActivate:[AuthGuard],component:AboutComponent},
  {path:'network',canActivate:[AuthGuard],component:NetworkComponent},
  {path:'moviedetaills/:id',canActivate:[AuthGuard],component:MoviedetaillsComponent},
  {
    path:'settings',
    loadChildren:()=>import('./settings/settings.module').then(m => m.SettingsModule)},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
