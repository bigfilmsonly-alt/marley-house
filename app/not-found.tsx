import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Page Not Found | The Marley Group',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <main
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
      style={{
        backgroundImage: "url('/brand/black-paper-bg.jpg')",
        backgroundSize: '200px auto',
        backgroundRepeat: 'repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* RM Logo */}
      <Image
        src="/brand/rm-logo-original.png"
        alt="RM Logo"
        width={160}
        height={160}
        className="mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] rm-logo-gold"
        priority
      />

      {/* 404 heading */}
      <h1 className="mb-3 font-serif text-6xl font-black tracking-tight text-black">
        404
      </h1>

      <p className="mb-8 max-w-md font-serif text-lg font-bold text-black/80">
        The page you are looking for does not exist or has been moved.
      </p>

      {/* CTA */}
      <Link
        href="/"
        className="inline-block rounded-sm bg-black px-8 py-3 text-sm font-bold uppercase tracking-widest text-[#EEC11E] transition-opacity hover:opacity-90"
      >
        Return Home
      </Link>

      {/* Signature */}
      <Image
        src="/brand/rohan-signature.png"
        alt="Rohan Marley Signature"
        width={200}
        height={60}
        className="mt-12 opacity-70 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]"
      />
    </main>
  );
}
