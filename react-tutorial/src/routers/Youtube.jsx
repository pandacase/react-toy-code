import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
import styles from "./youtube.module.css";

function Nav() {
  return (
    <div className={styles.topNav}>
      <Link to="/">HomePage</Link>
      <Link to="/dashboard">DashBoard</Link>
    </div>
  );
}

function Homepage() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/dashboard/Settings", {
      state: { message: "From HomePage" },
    });
  }
  return (
    <div>
      <div>This is Homepage</div>
      <button onClick={handleClick}>Goto Settings</button>
    </div>
  );
}

///////////////////////////////////////////////////////////

function Products() {
  const { id } = useParams();
  return <div>Product: {id}</div>;
}

///////////////////////////////////////////////////////////

function Dashboard() {
  return (
    <div>
      <div>This is Dashboard</div>
      <div className={styles.topNav}>
        <Link to="profile">Profile</Link>
        <Link to="settings">Settings</Link>
      </div>
      <Outlet />
    </div>
  );
}

function Profile() {
  return <dir>Profile Page</dir>;
}

function Settings() {
  const location = useLocation();
  const { message } = location.state || {};
  return (
    <div>
      <div>Settings Page {message}</div>
      <div className={styles.topNav}>
        <Link to="dev">Dev</Link>
        <Link to="ops">Ops</Link>
      </div>
      <Outlet />
    </div>
  );
}

function Dev() {
  return <div>Dev Settings</div>;
}

function Ops() {
  return <div>Ops Settings</div>;
}

///////////////////////////////////////////////////////////

function NotFound() {
  return <div>404 Not Found</div>;
}

export default function Youtube() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* Dynamic Router */}
        <Route
          path="/products/:id"
          element={<Products />}
        />
        {/* Nesting Router */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />}>
            <Route path="dev" element={<Dev />} />
            <Route path="ops" element={<Ops />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
