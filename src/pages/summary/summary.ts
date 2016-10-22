import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Feeds } from '../../providers/feeds';

@Component({
  selector: 'page-summary',
  templateUrl: 'summary.html',
  providers: [Feeds]
})

export class SummaryPage {
  feedRAW: any = [];
  feed: any = [];
  errorMessage: any;
  searchFor: string = "";


  constructor(public navCtrl: NavController, public feeds: Feeds) {
    this.feedRAW = feeds.load();
    this.feed = this.feedRAW;
    console.log("SUMMARY", this.feed);
  }

  onSearchInput(event) {
    var searchText = event.target.value;
    if (searchText == "" || searchText == undefined) {
      this.feed = this.feedRAW;
    } else {
      this.feed = [];
      for (var x = 0; x < this.feedRAW.length; x++) {
        if (this.feedRAW[x].title && searchText) {
          if (this.feedRAW[x].title.toLowerCase().indexOf(searchText.toLowerCase()) >= 0) {
            this.feed.push(this.feedRAW[x]);
          }
        } else if (this.feedRAW[x].description && searchText) {
          if (this.feedRAW[x].description.toLowerCase().indexOf(searchText.toLowerCase()) >= 0) {
            this.feed.push(this.feedRAW[x]);
          }
        }
      }
    }
  }

}
