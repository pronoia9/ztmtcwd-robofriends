/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Div from '../utils/Div';

export default function Card({ id, name = 'Name', username = 'Username', email = 'example@mail.com' }) {
  return (
    <Div classNames={['col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate', 'rn-portfolio', 'inner']}>
      <Div classNames={['thumbnail']}>
        <a href='javascript:void(0)'>
          <img src={`https://robohash.org/${id}?200x200`} alt={`${username}_photo`} />
        </a>
      </Div>
      <Div classNames={['content']}>
        <Div classNames={['category-info']}>
          <Div classNames={['category-list']}>
            <a href='javascript:void(0)'>{`@${username}`}</a>
          </Div>
          <Div classNames={['meta']}>
            <span>
              <a href='javascript:void(0)'>
                <i classNames='feather-heart'></i>
              </a>
              {id}
            </span>
          </Div>
        </Div>
        <p classNames='title'>
          <a href='javascript:void(0)'>{name}</a>
          <br /> 
          <a className='email' href='javascript:void(0)'>{email} <i classNames='feather-arrow-up-right'></i></a>
        </p>
      </Div>
    </Div>
  );
}