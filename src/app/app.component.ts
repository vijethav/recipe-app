import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  loadedFeature = 'recipe';

  ngOnInit() {
      firebase.initializeApp({
        apiKey: "AIzaSyDqilBhZP0yR216-BU324cIItU12Xa_HgA",
        authDomain: "ng-recipe-book-dc3b5.firebaseapp.com",
      });
  }
  onNavigate(feature: string){
    this.loadedFeature = feature;

  }


}
