import Div from '../utils/Div';

export default function Header() {
  return (
    <Div classNames={['row', 'col-lg-12', 'section-title text-center']}>
      <span className='subtitle'>A friendly search app for your Robofriends</span>
      <h2 className='title'>Robofriends</h2>
    </Div>
  );
}