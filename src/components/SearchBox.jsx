import Div from '../utils/Div';

export default function SearchBox({ onInputChange }) {
  return (
    <Div classNames={['searchbox-container pa2 tc']}>
      <input className='search-box' type='search' placeholder='search robots' onChange={onInputChange} />
    </Div>
  );
}