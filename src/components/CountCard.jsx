
const CountCard = ({ value = "50+", label = "Trusted Clients" }) => {
  return (
    <div className="group w-[176px] h-[160px] rounded-[26px] border border-[#9810FA] flex items-center justify-center relative bg-[#0B0B0F] overflow-hidden">
   
      <div className="absolute inset-0 rounded-[26px] bg-purple-600 opacity-20 blur-xl group-hover:opacity-40 transition duration-300"></div>

     
      <div className="relative w-[144px] h-[130px] rounded-[13px] border border-[#E0E0E0]/20 bg-[#111118] shadow-[0_0_12px_rgba(255,255,255,0.15)] flex flex-col items-center justify-center backdrop-blur-md">
        
  
        <h3 className="text-white text-[48px] leading-[20px] font-semibold font-['Roboto'] tracking-wide">
          {value}
        </h3>

      
<p className="mt-4 text-white text-[16px] leading-[20px] font-semibold font-['Roboto'] text-center">
  {label}
</p>

      </div>
    </div>
  );
};

export default CountCard;