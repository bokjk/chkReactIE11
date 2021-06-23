import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, Redirect } from 'react-router-dom';

// loadable 코드스플리팅, 현재 페이지에 필요한 페이지만 로드 시킴
// const LogIn = loadable(() => import('@pages/Login'));
// const SignUp = loadable(() => import('@pages/SignUp'));
// const Workspace = loadable(() => import('@layouts/Workspace'));
// const Channel = loadable(() => import('@pages/Channel'));
// const DirectMessage = loadable(() => import('@pages/DirectMessage'));

const App = () => {
  return (
    <div>테스트10</div>
  );
};

export default App;