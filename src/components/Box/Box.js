import s from './Box.module.css';

export default function Box({ type }) {
  return <div className={s[type]}>Box</div>;
}
