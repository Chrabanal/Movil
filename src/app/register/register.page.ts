import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavController } from '@ionic/angular';
import { User } from "../models/user.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user={} as User;


  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController

  ) { }

  ngOnInit() {
  }

async register(user:User){
  if(this.formValidation()){
    let loader = await this.loadingCtrl.create({
      message: "bienevido..."
    });
    await loader.present();

    try{
      const data = await this.afAuth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(data);

      this.navCtrl.navigateRoot('login');
    } catch(e:any){
      e.message="error al registrarse";
      let errorMessage = e.message || e.getLocalizedMessage();

      this.showToast(errorMessage);
    }
    
    await loader.dismiss();
  }
}

formValidation(){
  if(!this.user.email){
    this.showToast("introduce un email");
    return false;
  }
  if(!this.user.password){
    this.showToast("introduce una contraseña");
    return false;
  }
   return true;
 }


 showToast(message: string){
  this.toastCtrl.create({
    message: message,
    duration: 3000
  })
  .then(toastData => toastData.present());
}
}
