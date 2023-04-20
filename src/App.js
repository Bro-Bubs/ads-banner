import React from 'react';
import './style.css';

export default function App() {
  const name = 'bubs';
  const data = [
    { url: 'https://tpc.googlesyndication.com/simgad/4923418296806901925' },
    {
      url: 'https://banner.khmer24.ws/www/delivery/ai.php?filename=03152023_1_bannercareful(970x250).jpg%20(2)&contenttype=jpeg',
    },
  ];

  const dataMap = (data) => {
    return data.map((res) => <img src={res.url} width="60%" />);
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {dataMap(data)}
    </div>
  );
}
