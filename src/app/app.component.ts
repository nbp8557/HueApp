import {Component} from '@angular/core';
import {LightingGroupsComponent} from './lighting-groups/lighting-groups.component';
import {FooterComponent} from './footer/footer.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';

@Component({
	moduleId: module.id,
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	directives: [LightingGroupsComponent,FooterComponent,NavBarComponent]
})
export class AppComponent {
	title = 'app works!';
}
