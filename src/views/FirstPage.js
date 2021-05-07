import React from 'react';

const FirstPage = ({ selected }) => {
  return (
    <div className="container p-5">
      <h1>{selected}</h1>
      {/* <table>
        <thead>
          <tr>
            <th>Nama SKPD</th>
            <th>Nama Urusan</th>
            <th>Pagu</th>
          </tr>
        </thead>
        <tbody>
          {skpd.map((item, i) => (
            <tr key={i}>
              <td>{item.nama_skpd}</td>
              <td>{item.nama_urusan}</td>
              <td>{item.pagu}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default FirstPage;
