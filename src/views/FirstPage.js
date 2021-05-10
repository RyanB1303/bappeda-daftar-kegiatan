import React from 'react';

const FirstPage = ({ selected }) => {
  const nama_skpd = [...new Set(selected.map(item => item.nama_skpd))];
  return (
    <div className="container flex p-5 border border-black">
      <div className="justify-self-start p-5 max-w-sm border">
        <h4>Filter :</h4>
        <h1 className="center mt-5 p-5 text-sm border border-gray-800">
          {nama_skpd}
        </h1>
      </div>
      <table className="table justify-self-center">
        <thead>
          <tr>
            <th className="mx-5 p-5">Nama Sub Kegiatan</th>
            <th className="mx-5 p-5">Pagu</th>
          </tr>
        </thead>
        <tbody>
          {selected.map((item, i) => (
            <tr key={i}>
              <td className="mx-5 p-5">{item.nama_sub_giat}</td>
              <td className="mx-5 p-5">{item.pagu}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FirstPage;
