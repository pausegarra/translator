'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string; };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='flex flex-col justify-center items-center h-[74vh]'>
      <h2>Ha ocurrido un error no controlado</h2>
      <p>{error.message}</p>
      <span className="text-sm">Error digest: {error.digest}</span>
    </div>
  );
}