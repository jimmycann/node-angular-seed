import mainController from './main.controller';
import mainDirective from './main.directive';
import mainFactory from './main.factory';
import mainService from './main.service';
export default mainModule => {
    mainController();
    mainDirective();
    mainFactory();
    mainService();
};