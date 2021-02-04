import React from 'react';
import { FormattedMessage } from 'react-intl';

const translate = (id) => <FormattedMessage if={id}/>

export default translate;