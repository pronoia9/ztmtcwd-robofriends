import Div from '../utils/Div';

export default function Header() {
  return (
    <Div classNames={['row', 'col-lg-12', 'section-title text-center']}>
      <span classNames='subtitle'>A friendly search app for your Robofriends</span>
      <h2 classNames='title'>Robofriends</h2>
    </Div>
  );
}