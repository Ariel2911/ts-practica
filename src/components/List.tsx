import { Sub } from '../../types';
interface Props {
  subs: Array <Sub>
}
const List = ({subs}: Props) => (
  <ul>
    {subs.map((sub) => (
      <li key={sub.nick}>
        <img src={sub.avatar} alt={`avatar para ${sub.nick}`} />
        <h2>
          {sub.nick}(<small>{sub.subMonths}</small>)
        </h2>
        <p>{sub.description?.substring(0, 100)}</p>
      </li>
    ))}
  </ul>
);

export default List;