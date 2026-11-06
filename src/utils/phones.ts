import { site } from '@data/site';

/**
 * Bazı reklam bölgelerinde müşterinin ilk gördüğü numara ikinci hat (0506 092 58 16) olur;
 * ana hat (0506 254 76 78) altında ikinci numara olarak kalır.
 */
const SECOND_LINE_FIRST = [
  /^\/hizmet-bolgeleri\/eryaman-elektrikci$/,
  /^\/eryaman-[a-z0-9-]+$/,
  /^\/hizmet-bolgeleri\/cankaya-elektrikci\/(cayyolu|umitkoy)-elektrikci$/,
];

export function phonesFor(pathname: string) {
  const p = pathname.replace(/\.html$/, '').replace(/\/+$/, '') || '/';
  const alt = SECOND_LINE_FIRST.some((r) => r.test(p));
  return alt
    ? { main: site.phone2, second: site.phone, alt: true }
    : { main: site.phone, second: site.phone2, alt: false };
}
