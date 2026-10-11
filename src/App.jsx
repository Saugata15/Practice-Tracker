import { useContext } from "react";
import Dashboard from "./components/Dashboard";
import MyStore from "./context/MyStore";
import QuestionForm from "./components/QuestionForm";

const App = () => {
  const { showForm } = useContext(MyStore);

  return (
    <div className="w-full min-h-screen px-5 md:px-10 lg:px-20 py-16">
      {showForm ? <QuestionForm /> : <Dashboard />}
    </div>
  );
};

export default App;
