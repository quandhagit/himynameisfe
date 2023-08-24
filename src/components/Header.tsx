import Link from "next/link";

const Header: React.FC = () => {
  return (
    <nav className="p-4 flex justify-between items-center absolute">
      <div className="flex items-center gap-3">
        <Link className="quandha text-3xl font-bold mr-2" href={"/"}>
          QuanDHA
        </Link>
        <Link href={"/daily"}>Daily</Link>
      </div>
    </nav>
  );
};

export default Header;
