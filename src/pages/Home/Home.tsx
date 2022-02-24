/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import React, { useEffect, useState } from 'react';
import { Page } from '../../components/Page/Page';
import { useCounter } from '../../database/counter';
import { useCounter as useCounterRedux } from '../../store/counter';

export const Home = (): JSX.Element => {
  const { counter, handleDecrementClick, handleIncrementClick } = useCounter();
  const { counter: c, handleDecrementClick: hDC, handleIncrementClick: hIC } = useCounterRedux();
  const homeText = 'Home';

  const [uaClient, setUaClient] = useState<any>();

  async function teste() {
    const ai = await (window as any).UA;
    setUaClient(ai);
  }

  async function subscribe() {
    try {
      await uaClient.register();
      alert('Inscrito com sucesso')
    } catch (errorMsg) {
      console.log(errorMsg)
      alert(String(errorMsg))
    } 
  }

  // setTimeout(() => {
  //   console.log('ihaaa')
  //   console.log((window as any).UA);
  //   teste()
  // }, 3000)

  useEffect(() => {
    // console.log('ihe')

    if (!(window as any).UA) return;
    // console.log('iha')
    // console.log((window as any).UA);
    teste();
  }, [(window as any)?.UA]);

  useEffect(() => {
    console.log('uaClient', uaClient);
  }, [uaClient]);

  return (
    <Page description={homeText} keywords={homeText} title={homeText}>
      <p>Dexie Count (Persistent): {counter.count}</p>
      <p>Redux Count: {c.count}</p>
      <button
        onClick={() => {
          handleDecrementClick();
          hDC();
        }}
        type="button"
      >
        -
      </button>
      <button
        onClick={() => {
          handleIncrementClick();
          hIC();
        }}
        type="button"
      >
        +
      </button>
      <button onClick={subscribe} type="button">Aceitar notificação</button> 
    </Page>
  );
};
