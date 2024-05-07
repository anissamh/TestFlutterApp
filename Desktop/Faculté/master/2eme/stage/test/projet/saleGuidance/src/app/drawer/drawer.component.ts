import {
   Component,
} from '@angular/core';
import { DrawerserService, List } from './drawerser.service';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css',
  
]
})
export class DrawerComponent {
  //@ViewChild(DxDrawerComponent, { static: false }) drawer: DxDrawerComponent | undefined;

  /*navigation: any[];
  paths:any;
  //text: string;
  isDrawerOpen = true;

  constructor(service: DrawerserService) {
   // this.text = service.getContent();
    this.navigation = service.getNavigationList();
    console.log(service.logPaths())
    this.paths=service.logPaths();
  }

  toolbarContent = [{
    widget: 'dxButton',
    location: 'before',
    options: {
      icon: 'menu',
      stylingMode: 'text',
      onClick: () => this.isDrawerOpen = !this.isDrawerOpen,
    },
  }];*/
  title = 'getting-started-with-drawer';
  navigation: any[] = [
      { id: 1, text: "Home", icon: "home", path: "home" },
      { id: 2, text: "Dashboard", icon: "chart", path: "dashboard" },
      { id: 3, text: "Pays", icon: "globe", path: "country" },
      { id: 4, text: "Entreprise", icon: "toolbox", path: "entreprise" }
  ];
  isDrawerOpen: boolean = true;
  buttonOptions: any = {
      icon: "menu",
      onClick: () => {
          this.isDrawerOpen = !this.isDrawerOpen;
      }
  }
  
}
