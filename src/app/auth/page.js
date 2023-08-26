import React from "react";

function GetStarted() {
  return (
    <div className="overflow-hidden bg-white relative flex flex-col w-full items-end">
      <div className="w-[50%] h-[100%] bg-[#f4f7fe] absolute top-0 left-0 flex flex-col gap-5 items-start pl-48 py-10">
        <div className="flex flex-row gap-1 items-center mb-24 ml-[238px]">
          <img
            src="https://file.rendit.io/n/e0mLlC7uUsgyTOgViIbE.svg"
            className="min-h-0 min-w-0 w-6 shrink-0"
          />
          <div className="whitespace-nowrap text-sm font-['DM_Sans'] font-medium tracking-[-0.28] leading-[30px] text-[#333333] w-24">
            Back to cremp
          </div>
        </div>
        <div className="whitespace-nowrap text-3xl font-['DM_Sans'] font-medium text-[#333333] ml-[211px] w-[178px]">
          Get Started
        </div>
        <div className="whitespace-nowrap text-lg font-['DM_Sans'] font-medium leading-[21px] text-[#333333] w-[353px] mb-20 ml-32">
          Lorem Ipsum is simply dummy text of the
        </div>
        <div className="bg-white flex flex-row gap-8 w-1/2 h-32 shrink-0 items-center px-5 rounded-[20px]">
          <img
            src="https://file.rendit.io/n/9aWUB44rBU4QaeJ52VN6.svg"
            className="min-h-0 min-w-0 w-20 shrink-0"
          />
          <div className="flex flex-col gap-2 w-1/2">
            <div className="whitespace-nowrap text-lg font-['DM_Sans'] font-bold leading-[21px] text-[#84969f] w-24">
              I’m a buyer
            </div>
            <div className="whitespace-nowrap font-['DM_Sans'] leading-[18.7px] text-[#84969f]">
              Lorem Ipsum is simply dummy text of the
            </div>
          </div>
        </div>
        <div className="bg-white flex flex-row gap-8 w-1/2 h-32 shrink-0 items-center px-5 rounded-[20px]">
          <img
            src="https://file.rendit.io/n/m2CD9xVROi7N7fGWIK1e.svg"
            className="min-h-0 min-w-0 w-20 shrink-0"
          />
          <div className="flex flex-col gap-2 w-1/2">
            <div className="whitespace-nowrap text-lg font-['DM_Sans'] font-bold leading-[21px] text-[#84969f] w-24">
              I’m a Seller
            </div>
            <div className="whitespace-nowrap font-['DM_Sans'] leading-[18.7px] text-[#84969f]">
              Lorem Ipsum is simply dummy text of the
            </div>
          </div>
        </div>
        <div className="bg-[#84969f] flex flex-col justify-center pl-64 w-1/2 h-12 shrink-0 items-start mb-24 ml-1 rounded-lg">
          <div className="text-xl font-['DM_Sans'] font-medium text-white w-20">
            Continue
          </div>
        </div>
        <div className="flex flex-row ml-32 gap-1 items-center">
          <div className="whitespace-nowrap text-xl font-['DM_Sans'] font-medium text-[#333333] w-[269px]">
            Already have an account?
          </div>
          <div className="whitespace-nowrap text-xl font-['DM_Sans'] underline font-bold text-[#333333] w-16 shrink-0">
            Log in
          </div>
        </div>
      </div>
      <img
        src="https://file.rendit.io/n/8ciocNryoPEccXTvEMQS.svg"
        className="w-[50%] h-[100%] min-h-0 min-w-0 relative"
      />
    </div>
  );
}

export default GetStarted;
