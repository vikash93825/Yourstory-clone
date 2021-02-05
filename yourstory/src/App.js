import './App.css';
import React, {Suspense} from 'react'
import  Routes  from './Routes/Routes';

import { I18nProvider , LOCALES } from './i18n'
import { FormattedMessage } from 'react-intl';
import translate from './i18n/translate'

import './i18next'
import { useTranslation } from 'react-i18next';


function App() {
  

  return (
    <div>
      <nav>
        {/* <button onClick={()=>handleClick('en')}>ENGLISH</button>
        <button onClick={()=>handleClick('de')}>GERMAN</button>
        <button onClick={()=>handleClick('fr')}>FRENCH</button> */}
      </nav>
     {/* <I18nProvider locale={LOCALES.FRENCH}> */}
    <div className="App">
      {/* <FormattedMessage id="hello"/> */}
      {/* {translate("hello")} */}
      <Routes/>
    </div>
     {/* </I18nProvider> */}
    </div>
  );
}

export default App;
