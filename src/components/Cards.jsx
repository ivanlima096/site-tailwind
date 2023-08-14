import Single from "../assets/single.png"
import double from "../assets/double.png"
import triple from "../assets/triple.png"

import Card from "./Card"

export default function Cards() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <Card planImg={Single} planName={"Single User"} planPrice={"$149"} planSize={"500 GB Storage"} planBenefit={"1 Granted User"} planPro={"Send up to 2 GB"} />
        <Card planImg={double} planName={"Double User"} planPrice={"$149"} planSize={"500 GB Storage"} planBenefit={"1 Granted User"} planPro={"Send up to 2 GB"} />
        <Card planImg={triple} planName={"Triple User"} planPrice={"$149"} planSize={"500 GB Storage"} planBenefit={"1 Granted User"} planPro={"Send up to 2 GB"} />
      </div>
    </div>
  )
}