import { APP_ROUTES } from './enums';

export class Util {
    public static getPrefixedRoute(route: APP_ROUTES, module?: APP_ROUTES): string {
        return module ? '/' + module + '/' + route :  '/' + route;
    }
}