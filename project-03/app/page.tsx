import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-[#FFF] min-h-screen flex justify-center items-center text-[#1E1E1E] py-[10px] px-[15px] w-full">
        <div className="flex w-full">
          {/* left part */}
          <div className="py-[75px] px-[108px] flex flex-col gap-[40px] border-s-black  w-full ">
            <div className="flex flex-col gap-[10px] max-w-[460px]">
              <h1 className="text-[30px] font-semibold">Checkout</h1>
              <p className="text-[14px] font-medium">
                To complete checkout, kindly fill out the forms for your payment
                using a valid credit card.
              </p>
            </div>
            <div className="py-[60px] px-[72px] flex justify-center items-center max-w-[490px]">
              <div className="p-[35px] flex flex-col justify-center gap-[20px] bg-[#334E75] rounded-[25px] text-[#E6E9EE]">
                <div>
                  <p className="text-[16px] font-semibold">Premium Plan</p>
                  <p className="text-[30px] font-bold">Individual</p>
                  <p className="text-[18px] font-bold">₱149 / month</p>
                </div>
                <div className="bg-[#E6E9EE] h-[1px] "></div>
                <div>
                  <ul className="list-disc ml-5 flex flex-col gap-[10px]">
                    <li className="text-[14px] font-semibold">
                      1 premium account
                    </li>
                    <li className="text-[14px] font-semibold">
                      Cancel anytime
                    </li>
                    <li className="text-[14px] font-semibold">
                      Subscribe or one-time payment
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* right part */}

          <div className="py-[40px] px-[50px] flex justify-center items-center gap-[40px]  w-full">
            <div className="flex flex-col py-0 px-[64px] items-center justify-center gap-[16px] rounded-[10px] border-[1px] border-s-[rgba(0, 0, 0, 0.50)] h-[700px] w-full">
              <div>
                <form className=" space-y-4 flex flex-col gap-[15px]">
                  <div>
                    <label className="text-[16px] font-semibold">
                      Card Holder Name
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full border border-gray-300 rounded-[6px] px-[20px] py-[8px] focus:outline-none focus:ring-2 "
                    />
                  </div>

                  <div>
                    <label className="text-[16px] font-semibold">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 "
                    />
                  </div>

                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <label className="text-[16px] font-semibold">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 "
                      />
                    </div>
                    <div className="flex-1">
                      <label className="text-[16px] font-semibold">CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="bg-[#000E23] border-[1px] w-full "></div>
              <div className="w-full flex flex-col gap-[15px]">
                <div className="flex justify-between w-full">
                  <p>Subtotal</p>
                  <p>₱149</p>
                </div>
                <div className="flex justify-between w-full">
                  <p>Convinience fee</p>
                  <p>₱15</p>
                </div>
              </div>
              <div className="bg-[#000E23] border-[1px] w-full "></div>
              <div className="w-full flex flex-col gap-[30px]">
                <div className="flex justify-between w-full">
                  <p>Total</p>
                  <p>₱164</p>
                </div>
                <button className="text-[#E6E9EE] text-[24px] font-bold rounded-[10px]  bg-[#334E75] px-[20px] py-[15px] w-full ">
                  Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
