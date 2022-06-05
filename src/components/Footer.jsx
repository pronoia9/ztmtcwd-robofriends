import Div from '../utils/Div';

export default function Footer({ logo }) {
  return (
    <Div classNames={['rn-footer-area rn-section-gap section-separator', 'container', 'row', 'col-lg-12', 'footer-area text-center']}>
      <Div classNames={['logo']}>
        <a href='index.html'>
          <img src={logo} alt='logo' />
        </a>
      </Div>
      <p className='description mt--30'>
        © {new Date().getFullYear()}. All rights reserved by{' '}
        <a target='_blank' href='https://rainbowit.net/splash/html/inbio/#demo' rel='noreferrer'>
          Rainbow-Themes.
        </a>
      </p>
    </Div>
  );
}