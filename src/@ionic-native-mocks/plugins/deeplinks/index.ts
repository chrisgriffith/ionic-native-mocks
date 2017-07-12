import { Deeplinks } from '@ionic-native/deeplinks';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

export interface DeeplinkMatch {
    /**
     * The route info for the matched route
     */
    $route: any;
    /**
     * Any arguments passed either through route parameters or GET parameters
     */
    $args: any;
    /**
     * The deeplink object processed from the plugin, along with any
     * any internal native data available as "extras" at the time
     * the route was matched (for example, Facebook sometimes adds extra data)
     */
    $link: any;
}

export class DeeplinksMocks extends Deeplinks {
    /**
     * Define a set of paths to match against incoming deeplinks.
     *
     * @param {paths} paths Define a set of paths to match against incoming deeplinks.
     * paths takes an object of the form { 'path': data }. If a deeplink
     * matches the path, the resulting path-data pair will be returned in the
     * promise result which you can then use to navigate in the app as you see fit.
     * @returns {Observable<DeeplinkMatch>} Returns an Observable that is called each time a deeplink comes through, and
     * errors if a deeplink comes through that does not match a given path.
     */
    route(paths: any): Observable<DeeplinkMatch> {
        let response: DeeplinkMatch;
        return Observable.create((observer: Observer<any>) => {
            observer.next(response);
            observer.complete();
        });
    };
    /**
     *
     * This is a convenience version of `route` that takes a reference to a NavController
     * from Ionic, or a custom class that conforms to this protocol:
     *
     * NavController.push = function(View, Params){}
     *
     * This handler will automatically navigate when a route matches. If you need finer-grained
     * control over the behavior of a matching deeplink, use the plain `route` method.
     *
     * @param {Nav} navController Define a set of paths to match against incoming deeplinks.
     * paths takes an object of the form { 'path': data }. If a deeplink
     * matches the path, the resulting path-data pair will be returned in the
     * promise result which you can then use to navigate in the app as you see fit.
     *
     * @param {Object} paths
     *
     * @returns {Observable<DeeplinkMatch>} Returns an Observable that resolves each time a deeplink comes through, and
     * errors if a deeplink comes through that does not match a given path.
     */
    routeWithNavController(navController: any, paths: any): Observable<DeeplinkMatch> {
        let response: DeeplinkMatch;
        return Observable.create((observer: Observer<any>) => {
            observer.next(response);
            observer.complete();
        });
    };
}
