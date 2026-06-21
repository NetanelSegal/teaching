import React from 'react';

export default function Error({ message }) {
  return (
    <div className="text-center text-red-500 font-semibold">{message}</div>
  );
}
