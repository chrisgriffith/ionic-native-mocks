# Ionic Native Mocks

Ionic Native Mocks are designed to be used as placeholders during development for the actual Ionic Native modules. [Ionic Native](https://github.com/ionic-team/ionic-native) is a curated set of wrappers for [Apache Cordova](https://cordova.apache.org/) plugins that make adding any native functionality you need to your [Ionic](https://ionicframework.com/) mobile application easier.

Ionic Native wraps plugin callbacks in a Promise or Observable, providing a common interface for all plugins and making it easy to use plugins with Angular change detection.

However, once you integrate these plugins into your Ionic application, use of a device or emulator is required for development and testing which can slow your workflow.

## Installation

This project allows developers to use Ionic Native Mocks in place of the actual Ionic Native modules. They can be installed in via to methods. 
1) via npm: Installing these prebuilt mocks is easy but they are not easily customized.
2) via GitHub and manually added to your Ionic project: Installing this way means the mocks can be customized to return specific data, like a specific parsing of a QR code.

### Installation via npm

Run following command to install a Ionic Native Mock into your project.
```bash
npm install @ionic-native-mocks/[plug-in] --save
```

For instance, to install the camera mock:
```bash
npm install @ionic-native-mocks/camera --save
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
### Customization
To learn how to customize an Ionic Native Mock, see the guide at:  [https://chrisgriffith.wordpress.com/2017/08/21/customizing-ionic-native-mocks/](https://chrisgriffith.wordpress.com/2017/08/21/customizing-ionic-native-mocks/)
## Missing a mock? Found a problem?  
Let us know or submit a PR!

# Credits

Chris Griffith - [@chrisgriffith](https://github.com/chrisgriffith)

Leif Wells - [@leifwells](https://github.com/leifwells)
