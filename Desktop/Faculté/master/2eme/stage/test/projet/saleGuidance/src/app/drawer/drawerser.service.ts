import { RouterModule, Routes } from '@angular/router';
import { Injectable } from '@angular/core';
export class List {
  id!: number;

  text!: string;
  path!: any;
  icon!: string;
}



const text = `
<h2>
    <b>Drawer Demo</b>
</h2>
<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Penatibus et magnis dis parturient. Eget dolor morbi non arcu risus. Tristique magna sit amet purus gravida quis blandit. Auctor urna nunc id cursus metus aliquam eleifend mi in. Tellus orci ac auctor augue mauris augue neque gravida. Nullam vehicula ipsum a arcu. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Cursus in hac habitasse platea dictumst. Egestas dui id ornare arcu. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p><p>Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Neque volutpat ac tincidunt vitae semper quis lectus. Sed sed risus pretium quam vulputate dignissim suspendisse in. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Amet cursus sit amet dictum sit amet justo donec enim. Vestibulum rhoncus est pellentesque elit ullamcorper. Id aliquet risus feugiat in ante metus dictum at.
</p>
`;
@Injectable({
  providedIn: 'root'
})
export class DrawerserService {
   navigation: any[] = [
    { id: 1, text: 'Home', icon: 'product',path:"home" },
    { id: 2, text: 'Dashboard', icon: 'money',path:"dashboard" },
    { id: 3, text: 'Client', icon: 'group',path:"home" },
    { id: 4, text: 'Entreprise', icon: 'card',path:"entreprise" },
    { id: 5, text: 'Pays', icon: 'chart' ,path:"country"},
  ];
  constructor() { }

  getNavigationList(): List[] {
    return this.navigation;
  }
  logPaths(): void {
    this.navigation.forEach(item => {
      console.log(item.path);
    });
  }
  /*getContent(): string {
    return text;
  }*/
}
