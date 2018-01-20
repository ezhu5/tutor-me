import { Component } from '@angular/core';

import { SearchPage } from '../search/search';
import { MessagePage } from '../message/message';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SearchPage;
  tab2Root = MessagePage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
