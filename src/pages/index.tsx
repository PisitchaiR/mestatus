import Meta from "@/components/Meta";
import { useEffect, useState } from "react";
import { FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { FacebookFilled, GithubOutlined, InstagramOutlined } from "@ant-design/icons";
import { Button } from "antd";

const Home = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
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
      <main className="w-screen h-screen bg-[#0d131d] text-white flex justify-center items-center">
        <section className="p-5 flex flex-col gap-y-5">
          <h1 className="w-full text-9xl ">
            <span className="block md:inline-block">{"HI, I'm "}</span>
            <span>{name}</span>
            <span className={`border-white border-r-4 pr-5 h-20 text-white ${show ? "border-none" : "animate-ping"}`}></span>
          </h1>
          <article className={`flex-col gap-y-5 hidden ${show && "show"}`}>
            <p className="text-3xl">contact</p>
            <div className="flex-grow flex items-end justify-between pr-5">
              <div className="flex gap-x-5 text-5xl items-center">
                <Link href="https://www.instagram.com/pisitchai_thun/">
                  <InstagramOutlined />
                </Link>
                <Link href="https://www.facebook.com/mctplo.admplo/">
                  <FacebookFilled />
                </Link>
                <Link href="https://github.com/PisitchaiR">
                  <GithubOutlined />
                </Link>
              </div>
              {/* <Button size="large" type="default" href="/portfolio">
                Portfolio
              </Button> */}
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default Home;
