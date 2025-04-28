
const Profile = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="w-1/2 my-9">
        <div className="bg-white overflow-hidden shadow rounded-lg border">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              User Profile
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Authenticated successful :D
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;