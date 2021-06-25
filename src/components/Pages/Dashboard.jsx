import { TopNavbar, BottomNavbar, CreateNote, ShowNotes } from "../index";
const Dashboard = () => {
  return (
    <div className="dashboard-Container">
      <TopNavbar />
      <CreateNote />
      <ShowNotes />
      <BottomNavbar />
    </div>
  );
};
export default Dashboard;
