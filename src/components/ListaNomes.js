import React from 'react';

export function ListaNomes({nomes}) {
  return (
    <ul>
      {nomes.map((nomes, index) => (
        <li key={index}>{nomes}</li>
      ))}
    </ul>
  )
}