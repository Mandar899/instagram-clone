function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="h-16 w-16 rounded-full border p-[2px]"
        src="https://pbs.twimg.com/profile_images/1447566459740196870/XXiimuyq_400x400.jpg"
        alt=""
      />

      <div className="flex-1 mx-4 ">
        <h2 className="font-bold tracking-tight">Mandar Manvi</h2>
        <h3 className="text-sm text-gray-400 tracking-tight">
          Welcome to Instagram
        </h3>
      </div>

      <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
    </div>
  );
}

export default MiniProfile;
