import { Component } from '@angular/core';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  imgUrl = "https://www.youtube.com/watch?v=khai2qlbOno";
  constructor(private camera: Camera) {}

  takePhoto(){
    const options: CameraOptions = {
      quality: 80,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;

      alert(base64Image);
      this.imgUrl = base64Image;

     }, (err) => {
      // Handle error
      alert(err.message)
     });
  }

}
