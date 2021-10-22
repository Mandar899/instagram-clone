import { useEffect, useState } from "react";
import faker from "faker";

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold tracking-tight text-gray-400">
          Suggestions for you
        </h3>
        <button className="text-gray-600 font-semibold tracking-tight">
          See All
        </button>
      </div>

      {suggestions.map((profile) => (
        <div
          key={profile.id}
          className="flex items-center justify-between mt-3"
        >
          <img
            className="w-10 h-10 p-[2px] border rounded-full"
            src={profile.avatar}
            alt="profile avatar"
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm tracking-tight">
              {profile.username}
            </h2>
            <h3 className="text-xs text-gray-400 tracking-tight">
              Works at {profile.company.name}
            </h3>
          </div>
          <button className="text-xs font-bold text-blue-400">Follow</button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
