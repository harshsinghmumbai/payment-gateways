import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";
import { Button } from "./ui/button";

const Payment_Card = () => {
  return (
    <>
      <div className="w-full max-w-[450px] md:max-w-[300px] rounded-md border border-gray-500 mx-auto p-1.5">
        <Image
          src="https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.webp?s=612x612&w=is&k=20&c=34cybUQKjUr2-gsYOdzxlnez3VRBusIhozf5eKp11HI="
          alt="Not Available"
          className="h-[200px] w-full rounded-t-md object-cover cursor-pointer"
          priority
          width={100}
          height={100}
        />
        <div className="p-3">
          <h1 className="flex justify-center items-center text-lg font-semibold mb-3">
            Pizza Plazza
            <TbArrowUpRight className="h-4 w-4 ml-1" />
          </h1>
          <div className="flex justify-center">
            <Button className="px-6 tracking-wider"> 1 Rupees </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment_Card;
