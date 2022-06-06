import Div from '../../utils/Div';
import Card from './Card';

export default function Cards({ robots }) {
  return (
    <Div classNames={['row row--25 mt--10 mt_md--10 mt_sm--10']}>
      {robots.map((robot) => (
        <Card {...robot} key={robot.id} />
      ))}
    </Div>
  );
}