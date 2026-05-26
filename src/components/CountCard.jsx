
const CountCard = ({ value = "50+", label = "Trusted Clients" }) => {
  return (
    <div className="group w-[176px] h-[160px] rounded-[26px] border border-[#9810FA] flex items-center justify-center relative  ">
   
      <div className="absolute inset-0 rounded-[26px]  opacity-20 blur-xl group-hover:opacity-40 transition duration-300"></div>

     
<div className="relative w-[144px] h-[130px] rounded-[13px] border border-white/60 bg-transparent  flex flex-col items-center justify-center ">  
   <h3
  className="
    text-center
    font-['Roboto']
    text-[46px]
    leading-[20px]
    font-semibold
    text-white
  "
>
  {value}
</h3>

      
<p
  className="
    mt-8
    text-center
    font-['Roboto']
    text-[16px]
    leading-[20px]
    font-semibold
    text-white
  "
>
  {label}
</p>

      </div>
    </div>
  );
};

export default CountCard;