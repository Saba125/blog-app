interface UserItemProps {
  label: string;
}
const UserItem: React.FC<UserItemProps> = ({ label }) => {
  return (
    <div
      className="
         px-2
         py-3
         font-semibold
         transition
         hover:bg-neutral-100
        "
    >
      {label}
    </div>
  );
};

export default UserItem;
