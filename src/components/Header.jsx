import PropTypes from 'prop-types'

const Header = ({ profile, loading }) => {

  return (
    <header className="flex min-h-[52px] fixed top-0 left-0 w-full bg-cyan-600 justify-between p-0 px-4">
      <h2 className="text-white text-2xl font-bold m-auto">帳務紀錄</h2>
      {!loading && profile ? (
        <img
          src={profile.pictureUrl}
          alt="User Profile"
          className="w-10 h-10 rounded-full my-auto"
        />
      ) : (
          <div className="w-10 h-10 rounded-full bg-gray-300 my-auto"></div>
      )}
    </header>
  );
};

Header.propTypes = {
  profile: PropTypes.shape({
    pictureUrl: PropTypes.string.isRequired,
  }),
  loading: PropTypes.bool.isRequired,
};

export default Header;