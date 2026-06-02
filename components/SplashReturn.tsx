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
      className="absolute top-3 left-3 z-40 opacity-50 hover:opacity-80 transition-opacity"
      aria-label="Return to welcome"
    >
      <Image
        src="/brand/lion-head-gold.png"
        alt="Lion Order"
        width={28}
        height={28}
      />
    </button>
  );
}
