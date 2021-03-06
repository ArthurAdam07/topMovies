import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PrincipalPage } from "../principal/principal";
import { SobrePage } from "../sobre/sobre";
import { SavePage } from "../save/save";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

onPrincipalPage(){
	this.navCtrl.push('PrincipalPage');
};

onSobrePage(){
	this.navCtrl.push('SobrePage');

};

add(){
	this.navCtrl.push(SavePage);
}

}
