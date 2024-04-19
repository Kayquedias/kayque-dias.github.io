
import KayqueAvatar from "../../assets/images/kayque.png";

interface Props {
  size?: string;
}

export default function Avatar({ size = "w-[200px]" }: Props) {
  return (
    <div
      className={`border border-zinc-200 rounded-full overflow-hidden flex justify-center items-center relative ${size}`}
    >
      <img
        src={KayqueAvatar}
        alt="Isaac_Katongole_avatar"
        title="Kayque Dias | Fullstack Developer"
      />
    </div>
  );
}
