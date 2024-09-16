import Image from "next/image";

interface AvatarProps {
  user?: {
    image?: string;
    firstName?: string;
    lastName?: string;
  };
  size?: number;
}

const Avatar = ({ user }: AvatarProps) => {
  const renderView = () => {
    if (user?.image?.length) {
      return (
        <Image
          src={user?.image || ""}
          alt={`${user?.firstName} ${user?.lastName}`}
          className="rounded-full object-cover overflow-hidden"
          fill
        />
      );
    }
    return (
      <div className="flex items-center justify-center rounded-full bg-primary w-full h-full text-white border border-border">
        {user?.firstName?.charAt(0) || ""} {user?.lastName?.charAt(0) || ""}
      </div>
    );
  };
  return renderView();
};

export default Avatar;
