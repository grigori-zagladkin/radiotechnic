import Link from "next/link";
import { FC } from "react";
import logo from "@/assets/logo.svg";
import Image from "next/image";

interface ILink {
  link: string;
  label: string;
}

const Links: ILink[] = [
  {
    link: "/",
    label: "Главная",
  },
  {
    link: "/developments",
    label: "Разработки",
  },
  {
    link: "/competencies",
    label: "Компетенции",
  },
  {
    link: "/employees",
    label: "Сотрудники",
  },
];

const Header: FC = () => {
  return (
    <>
      <header className="w-full bg-header-bg py-[20px] hidden md:fixed top-0 left-0">
        <div className="root-container flex justify-between">
          <div className="flex gap-[10px] cursor-pointer">
            <div>
              <Image src={logo} alt="логотип" width={32} height={52} />
            </div>
            <div className="leading-[1.1] flex-col justify-between text-[15px] font-semibold">
              <div>институт</div>
              <div>радиотехнических</div>
              <div>систем</div>
            </div>
          </div>
          <nav className="flex">
            <ul className="flex text-[18px] font-medium gap-[80px] w-full justify-between items-center">
              {Links.map((item, idx) => (
                <Link href={item.link} className="hover:text-slate-300">
                  {item.label}
                </Link>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <header className="fixed top-0 left-0 md:hidden">
        <div></div>
        <div></div>
      </header>
    </>
  );
};

export default Header;
