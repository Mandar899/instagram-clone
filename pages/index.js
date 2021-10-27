import { useSession } from "next-auth/react";
import Head from "next/head";
import { useEffect } from "react";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const { data: session } = useSession();

  // console.log(session);
  useEffect(() => {
    !session &&
      toast("Sign in to view posts.", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  }, []);

  return (
    <div className="bg-[#FAFAFA] h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Feed */}
      <Feed />

      {/* Modal */}
      <Modal />

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
