import Image from "next/image";
import placeholder from "../../images/portrait_placeholder_optimized.png";

type AvatarImageProps = {
  avatarUrl: string | null | undefined;
  nickName: string | null | undefined;
};

export default function Avatar({ avatarUrl, nickName }: AvatarImageProps) {
  return (
    <Image
      className="avatar avatar-xl"
      loading="lazy"
      src={avatarUrl || placeholder}
      alt={`icon user ${nickName} in Neon Blog`}
      width="50"
      height="50"
    />
  );
}
