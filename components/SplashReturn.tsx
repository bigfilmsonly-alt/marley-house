'use client';

import Image from 'next/image';

export default function SplashReturn() {
  function handleReturn() {
    sessionStorage.removeItem('marley-threshold');
    window.location.reload();
  }

  return (
    <button
      onClick={handleReturn}
      className="opacity-90 hover:opacity-100 transition-opacity"
      aria-label="Return to welcome"
    >
      <Image
        src="/brand/lion-head-new.jpg"
        alt="Lion Order"
        width={130}
        height={130}
        className="brightness-125"
      />
    </button>
  );
}
