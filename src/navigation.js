import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import store from 'store';
import { TEMPLATE_SCREEN_NAME } from 'constants/screens';
import TemplateScreen from 'screens/template-screen';

Navigation.registerComponentWithRedux(TEMPLATE_SCREEN_NAME, () => TemplateScreen, Provider, store);
