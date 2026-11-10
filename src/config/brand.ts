import type { LandingBrandConfig, NavigationLink } from '@alunzadev/accessone-ui';

export const brand: LandingBrandConfig = {
  name: 'AccessOne Parking Guatemala',
  region: 'Guatemala',
  locale: 'es-GT',
  logos: {
    onLight: '/guatemalaoscuro@4x.png',
    onDark: '/Recurso 15@4x.png',
  },
};

export const navigation: readonly NavigationLink[] = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/factura', label: 'Obtén tu factura' },
  { href: '/contacto', label: 'Contacto' },
  { href: '/aviso-de-privacidad', label: 'Aviso de privacidad' },
];

