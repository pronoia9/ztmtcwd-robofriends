import Div from '../utils/Div';

export default function Footer() {
  return (
    <Div classNames={['rn-footer-area rn-section-gap section-separator', 'container', 'row', 'col-lg-12', 'footer-area text-center']}>
      <Div classNames={['logo']}>
        <a href='index.html'>
          <img src='assets/images/logo/logo-vertical.png' alt='logo' />
        </a>
      </Div>
      <p className='description mt--30'>
        © 2022. All rights reserved by{' '}
        <a target='_blank' href='https://themeforest.net/user/rainbow-themes/portfolio' rel='noreferrer'>
          Rainbow-Themes.
        </a>
      </p>
    </Div>
  );
}