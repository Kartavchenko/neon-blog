import Image from "next/image";
import placeholder from "../../images/portrait_placeholder_optimized.png";

type AvatarImageProps = {
  avatarUrl: string | null | undefined;
  nickName: string | null | undefined;
  size?: string;
};

export default function Avatar({
  avatarUrl,
  nickName,
  size = "avatar-sm",
}: AvatarImageProps) {
  return (
    <Image
      className={`avatar ${size}`}
      loading="lazy"
      priority={false}
      src={avatarUrl || placeholder}
      alt={`icon user ${nickName} in Neon Blog`}
      width="50"
      height="50"
    />
  );
}
