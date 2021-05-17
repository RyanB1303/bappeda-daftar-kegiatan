import React, { createContext, useState, useEffect } from 'react';

const endPoint = 'response.json'; // TODO : Change with API
// const endPoint = '/v_bl/109'; // TODO : Change with API
export const GlobalContext = createContext();
// export const FirstPageContext = createContext(); // TODO : for refactor later
// TODO : refactor global data to be small bites state to share , eg . id_kegiatan, nama_kegiatan | don't take all the item !!!!!!!!!!
export const GlobalContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [wilayah, setWilayah] = useState();
  const [tahun, setTahun] = useState([]);
  const [error, setError] = useState({ message: '', isError: false });

  // initial data render
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endPoint).then(results => results.json());
        setData(response.data);
      } catch (error) {
        console.log('error Message : ', error);
        setError(prevState => ({
          message: 'Failed to get Data',
          isError: true
        }));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const tahunKegiatan = [...new Set(data.map(item => item.tahun))];
    setTahun(tahunKegiatan);
    const nama_wilayah = new Set(data.map(item => item.nama_wil));
    setWilayah(nama_wilayah);
  }, [data]);
  console.log('initial length : ', data.length);

  return (
    <GlobalContext.Provider value={{ data, error, tahun, wilayah }}>
      {children}
    </GlobalContext.Provider>
  );
};
