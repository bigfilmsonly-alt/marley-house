'use client';

import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useInAppBrowser } from '@/components/InAppBrowser';

export default function FooterLogos() {
  const pathname = usePathname();
  const { isOpen } = useInAppBrowser();

  // Only show logos on homepage AND when in-app browser is closed
  if (pathname !== '/' || isOpen) return null;

  return (
    <motion.div
      className="flex-shrink-0 pt-1 pb-0.5 bg-black relative z-[90]"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
    >
      <div className="flex items-center justify-center gap-4 mb-0.5 px-4">
        <img src="/brand/lion-gold-footer.png" alt="Lion Order" width="120" height="120" style={{ filter: 'brightness(1.4) drop-shadow(0 0 5px rgba(246,200,0,0.4))' }} />
        <img src="/brand/rastafari-lion-university.png" alt="Rastafari Lion Order University" width="130" height="130" style={{ filter: 'brightness(1.3) drop-shadow(0 0 5px rgba(246,200,0,0.4))' }} />
        <img src="/brand/lion-crest-clean.png" alt="Lion Order Crest" width="120" height="120" style={{ filter: 'brightness(1.4) drop-shadow(0 0 5px rgba(246,200,0,0.4))' }} />
      </div>
      <p style={{ color: '#F6C800', fontSize: '9px', letterSpacing: '0.4em', textTransform: 'uppercase', textAlign: 'center', fontWeight: 500, marginBottom: '2px' }}>
        Lion Order · Est. 2022
      </p>
      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '8px', letterSpacing: '0.25em', textTransform: 'uppercase', textAlign: 'center', fontWeight: 500 }}>
        One Love. One House. One Order.
      </p>
    </motion.div>
  );
}
