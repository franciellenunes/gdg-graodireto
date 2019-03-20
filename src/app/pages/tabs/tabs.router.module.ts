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
        path: 'books',
        children: [
          {
            path: '',
            loadChildren: './books/books.module#BooksPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/books',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/books',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
