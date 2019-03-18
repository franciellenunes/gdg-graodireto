import { AboutPage } from './about/about.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: './about/about.module#AboutPageModule'
          }
        ]
      },
      {
        path: 'participants',
        children: [
          {
            path: '',
            loadChildren:
              './participants/participants.module#ParticipantsPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/participants',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/participants',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
