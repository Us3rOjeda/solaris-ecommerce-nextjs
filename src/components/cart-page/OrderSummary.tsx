import { useAppSelector } from "@/lib/hooks/useAppDispatch";

function OrderSummary() {
  const cart = useAppSelector((state) => state.cart);

  const totalPrice = cart.reduce(
    (acc, { price, quantity }) => acc + Number(price) * quantity,
    0
  );

  return (
    <aside className="p-4 xl:p-8 flex flex-col">
      <h1 className="italic text-xl tracking-widest w-full text-center mt-4 mb-8 xl:text-2xl">
        Order Summary
      </h1>
      <ul className="space-y-4">
        {cart.map(({ id, name, price, quantity }) => (
          <li key={id} className="relative p-4 border-b border-gray-200 xl:p-6">
            <div>
              <p className="font-semibold xl:text-lg">{name}</p>
              <p className="text-sm text-gray-500 xl:text-base">Price per unit: ${price}</p>
              <p className="text-sm text-gray-500 xl:text-base">
                Total for {quantity} units: ${(Number(price) * quantity).toFixed(2)}
              </p>
            </div>
            <span className="absolute w-full h-[2px] bg-black bottom-0 left-0"></span>
          </li>
        ))}
      </ul>
      <div className="flex flex-col items-center">
        <div className="mt-6 text-lg text-center font-bold xl:text-xl">
          <p>
            Total: <span className="text-xl text-green-600">${totalPrice.toFixed(2)}</span>
          </p>
        </div>
        <button
          className="btn-custom-no-absolute cursor-pointer items-center z-10 w-[230px] text-sm mt-6 flex justify-center text-white bg-black font-tight xl:w-[300px] xl:h-[40px] xl:text-base xl:bottom-4 tracking-wider transition-all hover:scale-97 ease-in-out duration-500"
        >
          COMPLETE THE PURCHASE
        </button>
      </div>
    </aside>
  );
}

export default OrderSummary;
