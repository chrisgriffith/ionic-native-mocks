# Ionic Native Mocks

Ionic Native Mocks are designed to be used as placeholders during development for the actual Ionic Native modules. Ionic Native is a curated set of wrappers for Cordova plugins that make adding any native functionality you need to your [Ionic](https://ionicframework.com/) mobile app easy.

Ionic Native wraps plugin callbacks in a Promise or Observable, providing a common interface for all plugins and making it easy to use plugins with Angular change detection.

Hwoever, once you integrate them into your Ionic applicaiton, testing and development often requires running in an emulator or on an actual device, slowing the process down.

These Ionic Native Mocks, allow you to use them in place of the actual Ionic Native module. They can be installed in via to methods. 
1) via npm. These mocks are prebuilt and are not easily customized.
2) via GitHub and manually added to your Ionic project. These versions can be customized with specific data that you might want, like a specific parsing of a QR code.

## Installation

Run following command to install Ionic Native in your project.
```bash
npm install @ionic-native-mocks/[plug-in] --save
```

You also need to install the Ionic Native package for each plugin you want to add. Please see the [Ionic Native documentation](https://ionicframework.com/docs/native/) for complete instructions on how to add and use the plugins.

## Documentation

For the full Ionic Native documentation, please visit [https://ionicframework.com/docs/native/](https://ionicframework.com/docs/native/).

### Basic Usage

To use a plugin, import and add the plugin provider to your `@NgModule`, and then inject it where you wish to use it.

```typescript
// app.module.ts
import { Camera } from '@ionic-native/camera';
import { CameraMock } from '@ionic-native-mocks/camera';
...

@NgModule({
  ...

  providers: [
    ...
    { provide: Camera, useClass: CameraMock }
    ...
  ]
  ...
})
export class AppModule { }
```

```typescript
import { Platform } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({ ... })
export class MyComponent {

  constructor(private camera: Camera, private platform: Platform) {

    platform.ready().then(() => {

      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }

      this.camera.getPicture(options).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64:
        console.log(imageData);
        let base64Image = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
        // Handle error
      });
    });
  }
}
```

## Mock Missing?
Let us know or submit a PR! We will be working to add in the rest of the Ionic Native collection over the coming days.

# Credits

Chris Griffith - [@chrisgriffith](https://github.com/chrisgriffith)

Leif Wells - [@leifwells](https://twitter.com/leifwells)
