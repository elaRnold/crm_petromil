import GroupData from "@/components/GroupDetails/GroupData";
import GroupInfo from "@/components/GroupDetails/GroupInfo";

const Group = () => {
  return (
    <main>
      <div className="min-w-[80rem] min-h-[34rem] p-[.1rem] bg-gray-100">
        <div className="flex flex-col min-h-[34rem] bg-white rounded-lg p-4 m-2">
          <GroupInfo/>
          <GroupData/>
        </div>
      </div>
    </main>
  );
};

export default Group;
