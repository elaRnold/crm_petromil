import ContractualInfo from "@/components/Cartera/ContractualInfo";
import CustomerDetails from "@/components/Cartera/CustomerDeatils";

const Cartera = () => {
  return (
    <main>
      <div className="flex min-w-[80rem] bg-gray-100 p-2">
        <ContractualInfo />
        <CustomerDetails />
      </div>
    </main>
  );
};

export default Cartera;
