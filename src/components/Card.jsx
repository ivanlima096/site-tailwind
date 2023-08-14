import Single from "../assets/single.png"
import double from "../assets/double.png"
import triple from "../assets/triple.png"

export default function Card({ planImg, planName, planPrice, planSize, planBenefit, planPro }) {
  return (
    <div className="w-[90%] min-w-[250px] shadow-xl flex flex-col p-4 my-8 mx-auto rounded-lg hover:scale-105 duration-300">
      <img src={planImg} alt="single-version" className="w-20 mx-auto mt-[-3rem] bg-white" />
      <h2 className="text-2xl font-bold text-center py-8">{planName}</h2>
      <p className="text-center text-4xl font-bold">{planPrice}</p>
      <div className="text-center font-medium">
        <p className="py-2 border-b mx-8 mt-8">{planSize}</p>
        <p className="py-2 border-b mx-8">{planBenefit}</p>
        <p className="py-2 border-b mx-8">{planPro}</p>
      </div>
      <button className="bg-[#00DF9A] rounded-md font-medium w-[200px]  mx-auto my-6 px-6 py-3">Start Trial</button>
    </div>
  )
}