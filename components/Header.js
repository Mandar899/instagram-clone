import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { useSession, signIn, signOut } from "next-auth/react";

function Header() {
  const { data: session } = useSession();
  // console.log(session);

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between bg-white max-w-6xl mx-5 lg:mx-auto cursor-pointer">
        {/* left - instagram logo */}
        <div className="relative w-24 hidden lg:inline-grid cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* center - search bar */}
        <div className="max-w-xs mx-auto">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* right - buttons */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn " />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />

          {session ? (
            <>
              <div className="relative navBtn">
                <img
                  className="navBtn"
                  src="/icons/messenger-line.svg"
                  alt="messenger"
                />
                <span className="absolute -top-1 -right-1 text-xs w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white">
                  3
                </span>
              </div>
              <PlusCircleIcon className="navBtn" />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />
              <img
                onClick={signOut}
                className="h-8 w-8 rounded-full cursor-pointer"
                src={session.user.image}
                alt="profile"
              />
            </>
          ) : (
            <button
              className="font-semibold text-blue-400 tracking-tight"
              onClick={signIn}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
