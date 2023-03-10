import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

export const NotFoundPage: React.FC = () => {
  return <main className="flex flex-col items-center justify-center">
    <h1>Not found :(</h1>
    <Link className="mt-4" to='/'>
      <Button className="" isOrange>Go to the main page</Button>
    </Link>
  </main>
};