import { FirebaseDynamicLinks } from '@ionic-native/firebase-dynamic-links';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

export interface IDynamicLink {
    matchType: 'Weak' | 'Strong';
    deepLink: string;
}

export class FirebaseDynamicLinksMocks extends FirebaseDynamicLinks {
   /**
     * Registers callback that is triggered on each dynamic link click.
     * @return {Observable<IDynamicLink>} Returns an observable
     */
    onDynamicLink(): Observable<IDynamicLink> {
        return Observable.create((observer: Observer<any>) => {
            let response: IDynamicLink;
            observer.next( response  );
            observer.complete();
        });
    };
}
