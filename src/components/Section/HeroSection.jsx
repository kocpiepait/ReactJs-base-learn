import { BsChevronDown } from "react-icons/bs";
import globoCrypto from "../../images/illustrations/globe.png";
import PrimaryButton from "../buttons/PrimaryButtons";
import SecondaryButton from "../buttons/SecondaryButton";
export default function HeroSection() {
  return (
    <section>
      <div className="container mx-auto grid grid-cols-2">
        <div className="flex items-center">
          <div>
            <p className="text-primary"> SIGN UP TODAY</p>
            <h1 className="text-6xl font-bold leading-normal ">The World`s</h1>
            <h1 className="text-6xl font-bold leading-normal">
              fastest Growing
            </h1>
            <h1 className="text-6xl font-bold leading-normal">
              Crypto Web App
            </h1>
            <div className="mt-4 mb-8">
              <p className="text-gray">
                Buy And Sell 200+ cryptocurrencies with 20+ flat currencies
                using
              </p>
              <p className="text-gray">
                bank transfer or your credit/debit card
              </p>
            </div>
            <div className="flex">
              <PrimaryButton className="mr-4">Get Started</PrimaryButton>
              <SecondaryButton>
                Download App <BsChevronDown className="inline ml-2" />
              </SecondaryButton>
            </div>
          </div>
        </div>
        <div>
          <img src={globoCrypto} alt="" />
        </div>
      </div>
    </section>
  );
}
