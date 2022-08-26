import React from 'react';
import { createRoot } from 'react-dom/client';
import NftApp from './components/NftApp';

import "./style/style.css"

const root = createRoot(document.getElementById('root'));
root.render(<NftApp/>);
