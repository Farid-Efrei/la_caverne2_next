import Image from "next/image";

export default function Card({ character }) {
  const URL = "https://ducompagnon.fr/la-taverne/public/images/personnages/";

  return (
    <div
      className={`flex flex-col border-neutral-500 border-2 w-[250px] h-[400px] rounded-xl ${character.side_name} Shadow overflow-hidden `}
    >
      <div className="w-[250px] h-[250px] overflow-hidden ">
        <Image
          src={`${URL}${character.image}`}
          width={250}
          height={250}
          className="object-cover duration-300 hover:scale-110"
        />
      </div>
      Card
    </div>
  );
}
