import { Link } from "react-router-dom";

export default function PhonesList(props) {
  const { phonesList } = props;

  return (
    <div className="phones-list">
      {phonesList.map((phone) => {
        return (
          <li key={phone.id}>
            <Link to={`/phones/${phone.id}`}>
              {phone.name}
            </Link>
          </li>
        );
      })}
    </div>
  );
}
