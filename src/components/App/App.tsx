/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../store';
import { Layout } from '../Layout/Layout';
import { Routes } from '../Routes/Routes';

export const App = (): JSX.Element => {
  async function teste(){
    const ai = await (window as any).UA
    console.log(ai)
  }

  setTimeout(() => {
    console.log('ihaaa')
    console.log((window as any).UA);
    teste()
  }, 3000)

  useEffect(() => {
    console.log('ihe')

    if (!(window as any).UA) return;
    console.log('iha')
    console.log((window as any).UA);
    teste()
  }, [(window as any)?.UA]);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};
