import Div from '../../utils/Div';
import './SearchBox.scss';

export default function SearchBox({ onInputChange }) {
  return (
    <Div classNames={['contact-form-wrapper', 'introduce', 'rnt-contact-form rwt-dynamic-form row', 'col-lg-12', 'form-group']}>
      <input className='search-box' type='search' placeholder='search robots' onChange={onInputChange} />
    </Div>
  );
}