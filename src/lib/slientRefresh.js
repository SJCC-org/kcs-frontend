import axios from 'axios';
import { setCookie } from './cookie';

export async function slientRefresh(refresh) {
  try {
    const response = await axios.get(
      'https://api.kcs.zooneon.dev//users/tokens/refresh',
      { refresh },
    );

    setCookie('myRToken', response.data.data.refresh, {
      path: '/',
      secure: true,
      sameSite: 'none',
    });

    setCookie('myAToken', response.data.data.access, {
      path: '/',
      secure: true,
      sameSite: 'none',
    });

    return response.data.data.access;
  } catch (e) {
    console.log(e);
  }
}
