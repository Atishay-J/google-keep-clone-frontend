import { TopNavbar, BottomNavbar, CreateNote, ShowNotes } from "../index";
const Dashboard = () => {
  return (
    <div className="dashboard-Container">
      <TopNavbar />

      <h1>I am dashboard</h1>
      <CreateNote />
      <BottomNavbar />
      <ShowNotes />
    </div>
  );
};
export default Dashboard;
