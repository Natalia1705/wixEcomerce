import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      <div className="h-full flex items-center justify-between ">
        {/*Mobile*/}
        <Link href="/">
          <div className="text-2xl tracking-wide">Covita</div>
        </Link>
        <Menu />
      </div>
      {/*Bigger screens*/}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/*left*/}
        <div className="w-1/3">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={24} height={24} />
            <div className="text-2xl tracking-wide">Covita</div>
          </Link>
        </div>
        {/*right*/}
        <div className="w-2/3"></div>
      </div>
    </div>
  );
};

export default Navbar;
