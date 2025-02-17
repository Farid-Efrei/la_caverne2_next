import { itemsLink } from "@/datas/itemsLink";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex items-center justify-between px-2 py-6 border-b-2 border-neutral-100 mb-6 ">
      Header
      <Link href="/">
        <h1 className="text-3xl">Next Caverne</h1>
      </Link>
      <div className="flex gap-2 text-xl">
        {itemsLink.map((item) => (
          <Link href={item.url} key={item.id}>
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
