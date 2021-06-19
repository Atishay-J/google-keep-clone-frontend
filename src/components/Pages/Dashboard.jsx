import { TopNavbar, BottomNavbar, CreateNote } from "../index";
const Dashboard = () => {
  return (
    <div className="dashboard-Container">
      <TopNavbar />

      <h1>I am dashboard</h1>
      <CreateNote />
      <BottomNavbar />
    </div>
  );
};
export default Dashboard;
