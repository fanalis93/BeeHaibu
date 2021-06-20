import React from 'react';
import axios from 'axios';

const data_temp = {
  labels: ['60', '50', '40', '30', '20', '10', '0'],
  datasets: [
    {
      data: [],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
  legend: ['Humidity'], // optional
};
const data_hum = {
  labels: ['60', '50', '40', '30', '20', '10', '0'],
  datasets: [
    {
      data: [],
      color: (opacity = 1) => `rgba(38, 99, 71, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
  legend: ['Temperature'], // optional
};

export default function useGetVisualizationData() {
  const [dataTemp, setDataTemp] = React.useState({ ...data_temp });
  const [dataHum, setDataHum] = React.useState({ ...data_hum });
  const [loading, setLoading] = React.useState(true);

  const isMounted = React.useRef(true);

  React.useEffect(() => {
    if (isMounted.current) {
      (async function () {
        const { data } = await axios.get(
          // 'https://sheetdb.io/api/v1/2htkwqlyek6fm',
          'https://sheetdb.io/api/v1/zqoqtlj4deio9',
        );
        const hum = data.map((d) => parseFloat(d?.Humidity));
        setDataTemp({
          ...dataTemp,
          datasets: [
            {
              ...dataTemp?.datasets[0],
              data: [...hum],
            },
          ],
        });

        const temp = data.map((d) => parseFloat(d?.Temperature));
        setDataHum({
          ...dataHum,
          datasets: [
            {
              ...dataHum?.datasets[0],
              data: [...temp],
            },
          ],
        });

        setLoading((b) => !b);
      })();
    }

    return () => {
      isMounted.current = false;
    };
  }, []);

  return [loading, dataTemp, dataHum];
}
