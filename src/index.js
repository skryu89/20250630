import React from 'react';
import ReactDOM from 'react-dom/client';  // React 18以降の新しい書き方
import App from './App';  // 自作のAppコンポーネントを読み込む

const root = ReactDOM.createRoot(document.getElementById('root'));  // public/index.htmlの<div id="root"></div>を指定
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
