import Div from '../utils/Div';

export default function Header() {
  return (
    <Div classNames={['row', 'col-lg-12', 'section-title text-center']}>
      <span class='subtitle'>A friendly search app for your Robofriends</span>
      <h2 class='title'>Robofriends</h2>
    </Div>
  );
}