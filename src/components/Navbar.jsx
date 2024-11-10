import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';

function Navbar() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login'); // Redirect to the login page after logout
  };

  // Log user object to verify role
  console.log(user);

  // Helper function to render role-specific links
  const renderRoleLinks = () => {
    if (user?.role === 'admin') {
      // Links for Admin
      return (
        <>
          <Link to="/review-applications" className="text-gray-600 hover:text-gray-900">
            Review Applications
          </Link>
          <Link to="/impact" className="text-gray-600 hover:text-gray-900">Impact</Link>
        </>
      );
    } else if (user?.role === 'organization') {
      // Links for Environmental Organizations
      return (
        <>
          <Link to="/apply-organization" className="text-gray-600 hover:text-gray-900">
            Apply as Organization
          </Link>
          <Link to="/organization-profile" className="text-gray-600 hover:text-gray-900">
            Organization Profile
          </Link>
          <Link to="/manage-donations" className="text-gray-600 hover:text-gray-900">
            Manage Donations
          </Link>
          <Link to="/post-story" className="text-gray-600 hover:text-gray-900">
            Post a Story
          </Link>
          <Link to="/beneficiary-list" className="text-gray-600 hover:text-gray-900">
            Beneficiaries & Inventory
          </Link>
        </>
      );
    } else {
      // Links for Donors or General Users
      return (
        <>
          <Link to="/donate" className="text-gray-600 hover:text-gray-900">Donate to an Organization</Link>
          <Link to="/impact" className="text-gray-600 hover:text-gray-900">Impact</Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
          
        </>
      );
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-green-600 text-xl font-semibold">🌿 EcoGuard</span>
          </Link>
          <div className="flex items-center space-x-4">
            {renderRoleLinks()}
            {isAuthenticated ? (
              <>
                <span className="text-gray-600">Welcome, {user?.email}</span>
                <button
                  onClick={handleLogout}
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
