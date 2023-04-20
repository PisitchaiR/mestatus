import Meta from "@/components/Meta";
import { useEffect, useState } from "react";
import { FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";
import Link from "next/link";

const Home = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    // window.onbeforeunload = function () {
    //   return true;
    // };

    // return () => {
    //   window.onbeforeunload = null;
    // };
    onWindowLoad("Thun");
  }, []);

  const onWindowLoad = (myName: string) => {
    setName("");
    for (let i = 0; i < myName.length; i++) {
      setTimeout(() => {
        setName((name) => name + myName[i]);
      }, 300 * i);
    }
    setTimeout(() => {
      setShow(true);
    }, 400 * myName.length);
  };

  return (
    <>
      <Meta title="Thun" />
      <main className="w-screen h-screen bg-white flex justify-center items-center">
        <section className="p-5 flex flex-col gap-y-5">
          <p className="text-9xl">
            <span className="block md:inline-block">{"HI, I'm "}</span>
            <span>{name}</span>
            <span className={`border-black border-r-4 pr-5 h-20 text-white ${show ? "border-none" : "animate-ping"}`}></span>
          </p>
          <article className={`flex-col gap-y-5 hidden ${show && "show"}`}>
            <p className="text-3xl">contact</p>
            <div className="flex gap-x-5 text-5xl">
              <Link href="https://www.instagram.com/pisitchai_thun/">
                <FaInstagram />
              </Link>
              <Link href="https://www.facebook.com/mctplo.admplo/">
                <FaFacebook />
              </Link>
              <Link href="https://github.com/PisitchaiR">
                <FaGithub />
              </Link>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default Home;
