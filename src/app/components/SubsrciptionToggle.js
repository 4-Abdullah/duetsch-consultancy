
export default function SubscriptionToggle({subscriptionType,setSubscriptionType}) {

  return (
    <div className="border border-[#1F172E] bg-[#0D0A17] rounded-full p-2 flex items-center justify-between w-64">
      <button
        onClick={() => setSubscriptionType("monthly")}
        className={`cursor-pointer h-10  px-6 py-2
                    ${subscriptionType === "monthly" ? "scale-105 border border-r-2 border-t-[#C47BF7] border-b-violet-500 border-x-[#C47BF7] rounded-full shadow-md" : "bg-transparent"}`}
      >
        Monthly
      </button>
      <button
        onClick={() => setSubscriptionType("yearly")}
        className={`cursor-pointer h-10 rounded-full px-6 py-2  
                    ${subscriptionType === "yearly" ? "scale-105 border border-r-2 border-t-[#C47BF7] border-b-violet-500 border-x-[#C47BF7] rounded-full shadow-md" : "bg-transparent "}`}
      >
        Yearly
      </button>
    </div>
  );
}

