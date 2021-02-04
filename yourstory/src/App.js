import './App.css';
import  Routes  from './Routes/Routes';

import { I18nProvider , LOCALES } from './i18n'
import { FormattedMessage } from 'react-intl';
import translate from './i18n/translate'

function App() {
  return (
    <I18nProvider locale={LOCALES.GERMAN}>
    <div className="App">
      {/* <FormattedMessage id="hello"/> */}
      {translate("hello")}
      <Routes/>
    </div>
    </I18nProvider>
  );
}

export default App;
