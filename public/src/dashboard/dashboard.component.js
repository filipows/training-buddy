import {module} from '../app';


class DashboardController {
  constructor(){
    console.log('dupsss');
  }
}

module.component('dashboard', {
  template: `<h1 class="page-header">Dashboard </h1>`,  //<p>Hello, {{ $ctrl.user.name }} !</p>
  controller: DashboardController

});