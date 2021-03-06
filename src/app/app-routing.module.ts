import { UserBookListComponent } from './components/user-book-list.component';
import { HomeComponent } from './components/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookEditComponent } from "./components/book-edit.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: []
  },
  {
    path: ':name/books',
    component: UserBookListComponent
  },
  {
    path: 'books/:bookId',
    component: BookEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
