interface BrandLogoProps {
  background?: 'light' | 'dark';
}

const logos = {
  light: '/guatemalaoscuro@4x.png',
  dark: '/Recurso 15@4x.png',
};

export default function BrandLogo({ background = 'light' }: BrandLogoProps) {
  return <img src={logos[background]} alt="AccessOne Parking Guatemala" />;
}
