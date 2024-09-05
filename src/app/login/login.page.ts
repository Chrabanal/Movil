import { Component, OnInit } from '@angular/core';
import { User } from "../models/user.model";
import { LoadingController,ToastController,NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user={} as User;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController   
  ){}

  ngOnInit() {}

  async login(user: User){ //funcion para registrar usuario    
    if(this.formValidation()){
      let loader = await this.loadingCtrl.create({
        message: "Espere un momento porfavor..."
      });
      await loader.present();
  
      try{
         await this.afAuth.signInWithEmailAndPassword(user.email, user.password).then(data => {
          console.log(data);
          
          this.navCtrl.navigateRoot('home');
         })
       
  
        
      } catch(e:any){
        e.message="Usuario no registrado o contraseña incorrecta";
        let errorMessage = e.message || e.getLocalizedMessage();
  
        this.showToast(errorMessage);
      }
      
      await loader.dismiss();
    }
  }
  
  formValidation(){
    if(!this.user.email){
      this.showToast("ingrese un Correo");
      return false;
    }
    if(!this.user.password){
      this.showToast("ingrese una contraseña");
      return false;
    }

     return true;
   }
  
  
   showToast(message: string){
    this.toastCtrl.create({
      message: message,
      duration: 3000 //tiempo de duracion del mensaje
    }).then(toastData => toastData.present());
  }



}

