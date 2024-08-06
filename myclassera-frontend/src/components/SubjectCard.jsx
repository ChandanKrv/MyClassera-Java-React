import { Link } from "react-router-dom";

const SubjectCard = ({ subject }) => {
  return (
    <div className="border border-gray-300 rounded p-4 m-2 w-60">
      <h2 className="text-xl font-bold">{subject.name}</h2>
      <p>{subject.description}</p>
      <Link
        to={`/subjects/${subject.id}`}
        className="text-blue-500 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
};

export default SubjectCard;
