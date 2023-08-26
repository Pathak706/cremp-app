import React from "react";

function Home() {
  return (
    <div className="overflow-hidden bg-[#f4f7fe] flex flex-row w-full items-end">
      <div className="overflow-hidden bg-white flex flex-col justify-between mb-[-72px] h-[1152px] items-center pt-12 pb-48">
        <div className="self-stretch flex flex-col gap-6 h-[468px] shrink-0 items-start">
          <img
            src="https://file.rendit.io/n/to3dcyU00pJaSt8KhhhB.svg"
            className="min-h-0 min-w-0 self-center mb-6"
          />
          <div className="border-solid border-[#f4f7fe] self-stretch mb-4 h-px shrink-0 border-t border-b-0 border-x-0" />
          <div className="self-stretch flex flex-row justify-between ml-8 items-center">
            <div className="flex flex-row gap-3 w-1/2 items-center">
              <img
                src="https://file.rendit.io/n/sbLly8p9w5oyInGMKSNg.svg"
                className="min-h-0 min-w-0 w-6 shrink-0"
              />
              <div className="font-['Poppins'] font-bold tracking-[-0.32] leading-[30px] text-[#84969f] w-24">
                Dashboard
              </div>
            </div>
            <div className="bg-[#84969f] w-1 shrink-0 h-8 rounded-[25px]" />
          </div>
          <div className="flex flex-row gap-3 items-center mb-1 ml-8">
            <img
              src="https://file.rendit.io/n/nSTr1OdzR4pEUOaFpQ36.svg"
              className="min-h-0 min-w-0 w-6 shrink-0"
            />
            <div className="font-['Poppins'] font-medium tracking-[-0.32] leading-[30px] text-[#84969f] w-16">
              Inquiries
            </div>
          </div>
          <div className="flex flex-row gap-2 w-3/5 items-center mb-1 ml-8">
            <img
              src="https://file.rendit.io/n/PEbsmDiSXNvAWtxwZ7Xk.svg"
              className="min-h-0 min-w-0 w-6 shrink-0"
            />
            <div className="whitespace-nowrap font-['Poppins'] font-medium tracking-[-0.32] leading-[30px] text-[#84969f] w-32">
              Ongoing Orders
            </div>
          </div>
          <div className="flex flex-row gap-3 w-3/5 items-center mb-1 ml-8">
            <img
              src="https://file.rendit.io/n/aW8aceNd7faX7DPK1rZI.svg"
              className="min-h-0 min-w-0 w-6 shrink-0"
            />
            <div className="whitespace-nowrap font-['Poppins'] font-medium tracking-[-0.32] leading-[30px] text-[#84969f] w-[145px]">
              Completed Orders
            </div>
          </div>
          <div className="flex flex-row gap-3 w-20 items-center mb-4 ml-8">
            <img
              src="https://file.rendit.io/n/M8sNPnPewhWJvxGuFoLX.svg"
              className="min-h-0 min-w-0 w-6 shrink-0"
            />
            <div className="font-['Poppins'] font-medium tracking-[-0.32] leading-[30px] text-[#84969f] w-3/5">
              Drafts
            </div>
          </div>
          <div className="bg-[url(https://file.rendit.io/n/AFCLpMV0GxXpBh3HMGds.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat self-stretch flex flex-col justify-center h-12 shrink-0 mx-6 px-8">
            <div className="text-center whitespace-nowrap text-xl font-['Poppins'] font-semibold tracking-[-0.4] text-white ml-px">
              Request for Quote
            </div>
          </div>
        </div>
        <img
          src="https://file.rendit.io/n/ZEPa3ZAeJr1URwEIsXcV.svg"
          className="min-h-0 min-w-0 w-10"
        />
      </div>
      <div className="flex flex-col mb-6 gap-5 w-[1630px]">
        <div className="flex flex-row justify-between items-center mb-1 mx-5">
          <div className="text-3xl font-['Poppins'] font-semibold tracking-[-0.56] leading-[42px] text-[#84969f] w-40 shrink-0">
            Categories
          </div>
          <div className="shadow-[14px_17px_40px_4px_rgba(112,_144,_176,_0.08)] bg-white flex flex-row gap-5 h-16 items-center pl-4 pr-3 py-2 rounded-[30px]">
            <div className="bg-[#f4f7fe] flex flex-row mr-1 gap-3 w-[373px] h-10 items-center px-5 rounded-[49px]">
              <img
                src="https://file.rendit.io/n/krfFyCNaGj80zJXvTOMr.svg"
                className="min-h-0 min-w-0 w-3 shrink-0"
              />
              <div className="text-sm font-['Poppins'] tracking-[-0.28] leading-[20px] text-[#8f9bba] w-12 shrink-0">
                Search
              </div>
            </div>
            <img
              src="https://file.rendit.io/n/4zhRjh17wTJC4o3frbR6.svg"
              className="min-h-0 min-w-0 w-6 shrink-0"
            />
            <img
              src="https://file.rendit.io/n/jX1rmTVX3ATCe7a7rZxj.svg"
              className="min-h-0 min-w-0 w-10 shrink-0"
            />
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center mb-0 mx-5">
          <div className="bg-white flex flex-row justify-center gap-3 h-16 items-center px-5 py-3 rounded-lg">
            <div className="bg-[url(https://file.rendit.io/n/5oWVGt7UnCA6VsoVd39e.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col w-10 shrink-0 h-10 items-center py-2">
              <img
                src="https://file.rendit.io/n/3vbN4lydLQOGr2XmTxYU.svg"
                className="min-h-0 min-w-0 w-6"
              />
            </div>
            <div className="text-sm font-['Poppins'] font-semibold tracking-[-0.29] leading-[23.3px] text-[#84969f] w-8 shrink-0">
              Steel
            </div>
          </div>
          <div className="bg-white flex flex-row justify-center gap-3 h-16 items-center pl-3 pr-2 py-3 rounded-lg">
            <img
              src="https://file.rendit.io/n/N47CVQ46u44rn1pnE2HP.svg"
              className="min-h-0 min-w-0 w-10 shrink-0"
            />
            <div className="text-sm font-['Poppins'] font-semibold tracking-[-0.29] leading-[23.3px] text-[#84969f] w-1/2">
              Cement
            </div>
          </div>
          <div className="bg-white flex flex-row justify-center gap-3 h-16 items-center pl-3 pr-2 py-3 rounded-lg">
            <div className="bg-[url(https://file.rendit.io/n/iOkHkiybNGxoiVHb4zej.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col w-10 shrink-0 h-10 items-center py-2">
              <img
                src="https://file.rendit.io/n/rqtrZYfThaR5iWga02Pu.svg"
                className="min-h-0 min-w-0 w-6"
              />
            </div>
            <div className="text-sm font-['Poppins'] font-semibold tracking-[-0.29] leading-[23.3px] text-[#84969f] w-3/5">
              Plumbing
            </div>
          </div>
          <div className="bg-white flex flex-row justify-center gap-3 h-16 items-center pl-3 pr-1 py-3 rounded-lg">
            <img
              src="https://file.rendit.io/n/Dsw9n38g8g19s2ZPv6Jn.svg"
              className="min-h-0 min-w-0 w-10 shrink-0"
            />
            <div className="text-sm font-['Poppins'] font-semibold tracking-[-0.29] leading-[23.3px] text-[#84969f] w-3/5">
              CP+Sanitary
            </div>
          </div>
          <div className="bg-white flex flex-row justify-center gap-3 h-16 items-center pl-5 pr-4 py-3 rounded-lg">
            <div className="bg-[url(https://file.rendit.io/n/m8fhZraKDbQr9nuitA0h.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col w-10 shrink-0 h-10 items-center py-2">
              <img
                src="https://file.rendit.io/n/J1whLbYqhhDIKAVxoGin.svg"
                className="min-h-0 min-w-0 w-6"
              />
            </div>
            <div className="text-sm font-['Poppins'] font-semibold tracking-[-0.29] leading-[23.3px] text-[#84969f] w-10 shrink-0">
              Doors
            </div>
          </div>
          <div className="bg-white flex flex-row justify-center gap-3 h-16 items-center pl-3 pr-4 py-3 rounded-lg">
            <div className="bg-[url(https://file.rendit.io/n/B7SDrYL7DNdBkovZGEjR.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col w-10 shrink-0 h-10 items-center py-2">
              <img
                src="https://file.rendit.io/n/woqLTw0WyjF6sWWVNgMp.svg"
                className="min-h-0 min-w-0 w-6"
              />
            </div>
            <div className="whitespace-nowrap text-sm font-['DM_Sans'] font-bold tracking-[-0.29] leading-[23.3px] text-[#84969f] w-3/5">
              AAA Blocks
            </div>
          </div>
          <div className="bg-white flex flex-row justify-center gap-3 h-16 items-center px-4 py-3 rounded-lg">
            <div className="bg-[url(https://file.rendit.io/n/Vmn2NAnKWG1dsKW5x9yf.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col w-10 shrink-0 h-10 items-center py-2">
              <img
                src="https://file.rendit.io/n/OVrAQtMHTcZLbEtWpXqW.svg"
                className="min-h-0 min-w-0 w-6"
              />
            </div>
            <div className="text-sm font-['DM_Sans'] font-bold tracking-[-0.29] leading-[23.3px] text-[#84969f] w-3/5">
              Chemicals
            </div>
          </div>
          <div className="bg-white flex flex-row justify-center gap-3 h-16 items-center px-5 py-3 rounded-lg">
            <div className="bg-[url(https://file.rendit.io/n/uTFuMMjxZyrsrfKi7F1A.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col w-10 shrink-0 h-10 items-center py-2">
              <img
                src="https://file.rendit.io/n/wLod8Q0RKZxyIrXbEOHY.svg"
                className="min-h-0 min-w-0 w-6"
              />
            </div>
            <div className="whitespace-nowrap text-sm font-['DM_Sans'] font-bold tracking-[-0.29] leading-[17.5px] text-[#84969f] w-3/5">
              Electrical <br />
              Materials
            </div>
          </div>
          <div className="bg-white flex flex-row justify-center gap-3 h-16 items-center px-4 py-3 rounded-lg">
            <div className="bg-[url(https://file.rendit.io/n/7ReKrZZN4wY1I9aZUAdd.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col w-10 shrink-0 h-10 items-center py-2">
              <img
                src="https://file.rendit.io/n/PBddk7uNWATg6SfFJMBO.svg"
                className="min-h-0 min-w-0 w-6"
              />
            </div>
            <div className="whitespace-nowrap text-sm font-['DM_Sans'] font-bold tracking-[-0.29] leading-[17.5px] text-[#84969f] w-12 shrink-0">
              Stones <br />& Tiles
            </div>
          </div>
          <div className="bg-white flex flex-row justify-center gap-3 h-16 items-center px-6 py-3 rounded-lg">
            <div className="bg-[url(https://file.rendit.io/n/tY4fQPY5roNx2szwI3dq.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col w-10 shrink-0 h-10 items-center py-2">
              <img
                src="https://file.rendit.io/n/sQgEhm9x2aqYlJwowtXS.svg"
                className="min-h-0 min-w-0 w-6"
              />
            </div>
            <div className="text-sm font-['DM_Sans'] font-bold tracking-[-0.29] leading-[23.3px] text-[#84969f] w-8 shrink-0">
              RMC
            </div>
          </div>
        </div>
        <img
          src="https://file.rendit.io/n/dXv7k7yCqsXnBzfNPbMY.svg"
          className="min-h-0 min-w-0 self-center"
        />
        <div className="flex flex-row gap-4 items-center mb-0 mx-5">
          <div className="flex flex-col gap-5 items-start">
            <div className="text-xl font-['Poppins'] font-semibold tracking-[0.22] text-[#84969f] w-24">
              Overview
            </div>
            <div className="bg-white self-stretch flex flex-col justify-center gap-5 items-start p-4 rounded-lg">
              <div className="bg-[#f4f7fe] flex flex-col justify-center w-12 h-12 shrink-0 items-center rounded-[26px]">
                <img
                  src="https://file.rendit.io/n/DEjt9F0ScK5W0GIA8NKq.svg"
                  className="min-h-0 min-w-0 w-5"
                />
              </div>
              <div className="flex flex-col justify-between gap-2 w-3/4">
                <div className="whitespace-nowrap text-sm font-['Poppins'] text-[#797979] self-start w-3/5">
                  Total revenue
                </div>
                <div className="text-3xl font-['Poppins'] tracking-[0.28] text-[#060606] mr-6">
                  $53,00989
                </div>
                <div className="flex flex-row gap-1 items-center">
                  <img
                    src="https://file.rendit.io/n/jvfGLDCDDtZ3b0WM92Z2.svg"
                    className="min-h-0 min-w-0 w-3 shrink-0"
                  />
                  <div className="text-xs font-['Poppins'] tracking-[0.2] leading-[12px] text-[#060606] w-40">
                    12% increase from last month
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white self-end flex flex-col justify-center gap-5 items-start p-4 rounded-lg">
            <div className="bg-[#f4f7fe] flex flex-col justify-center w-12 h-12 shrink-0 items-center rounded-[26px]">
              <img
                src="https://file.rendit.io/n/eWd7yWfrB2xr6xuLMT7g.svg"
                className="min-h-0 min-w-0 w-5"
              />
            </div>
            <div className="self-stretch flex flex-col justify-between mr-12 gap-2 items-start">
              <div className="text-sm font-['Poppins'] text-[#797979] w-12">
                Projects
              </div>
              <div className="whitespace-nowrap text-3xl font-['Poppins'] tracking-[0.28] text-[#060606] w-2/5">
                95 <div className="tracking-[0.64] contents">/100</div>
              </div>
              <div className="self-stretch flex flex-row gap-1 items-center">
                <img
                  src="https://file.rendit.io/n/RRAPHnDr0nZyT4ONx1XQ.svg"
                  className="min-h-0 min-w-0 w-3 shrink-0"
                />
                <div className="text-xs font-['Poppins'] tracking-[0.2] leading-[12px] text-[#060606] w-40">
                  10% decrease from last month
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white self-end flex flex-col justify-center gap-5 items-start p-4 rounded-lg">
            <div className="bg-[#f4f7fe] flex flex-col justify-center w-12 h-12 shrink-0 items-center rounded-[26px]">
              <img
                src="https://file.rendit.io/n/IZH7fdTfJi7s5exkXP3p.svg"
                className="min-h-0 min-w-0 w-5"
              />
            </div>
            <div className="flex flex-col justify-between mr-16 gap-2 w-40">
              <div className="whitespace-nowrap text-sm font-['Poppins'] text-[#797979] self-start w-1/2">
                Time spent
              </div>
              <div className="whitespace-nowrap text-3xl font-['Poppins'] tracking-[0.28] text-[#060606] mr-6">
                1022 <div className="tracking-[0.64] contents">/1300 Hrs</div>
              </div>
              <div className="flex flex-row gap-1 items-center">
                <img
                  src="https://file.rendit.io/n/uZktQozTCTG3JReQcQuc.svg"
                  className="min-h-0 min-w-0 w-3 shrink-0"
                />
                <div className="text-xs font-['Poppins'] tracking-[0.2] leading-[12px] text-[#060606] w-40">
                  8% increase from last month
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mr-1 gap-5 items-end">
            <div className="bg-white flex flex-row justify-center gap-3 w-[143px] h-8 shrink-0 items-center rounded-lg">
              <div className="whitespace-nowrap text-sm font-['Poppins'] tracking-[0.14] text-[#a3aed0] w-3/5">
                Last 30 days
              </div>
              <img
                src="https://file.rendit.io/n/mfiG8fpcIAtYteiSNsge.svg"
                className="min-h-0 min-w-0 w-3 shrink-0"
              />
            </div>
            <div className="bg-white self-stretch flex flex-col justify-center gap-5 items-start p-4 rounded-lg">
              <div className="bg-[#f4f7fe] flex flex-col justify-center w-12 h-12 shrink-0 items-center rounded-[26px]">
                <img
                  src="https://file.rendit.io/n/snvvU8eDPZ9qxyEXw690.svg"
                  className="min-h-0 min-w-0 w-5"
                />
              </div>
              <div className="flex flex-col justify-between gap-2 w-3/4 items-start">
                <div className="text-sm font-['Poppins'] text-[#797979] w-2/5">
                  Resources
                </div>
                <div className="whitespace-nowrap text-3xl font-['Poppins'] tracking-[0.28] text-[#060606] w-1/2">
                  101 <div className="tracking-[0.64] contents">/120</div>
                </div>
                <div className="self-stretch flex flex-row gap-1 items-center">
                  <img
                    src="https://file.rendit.io/n/uZktQozTCTG3JReQcQuc.svg"
                    className="min-h-0 min-w-0 w-3 shrink-0"
                  />
                  <div className="text-xs font-['Poppins'] tracking-[0.2] leading-[12px] text-[#060606] w-40">
                    2% increase from last month
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden bg-white flex flex-col justify-center p-5 rounded-[19.55555534362793px]">
            <div className="bg-[url(https://file.rendit.io/n/y5Z3tni09FuqsGq8Tb77.png)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col">
              <div className="bg-[linear-gradient(360deg,_#111c44_-32%,rgba(17,_28,_68,_0)_97%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col justify-center pl-[176px] h-[211px] shrink-0 items-start rounded-[19.55555534362793px]">
                <div className="text-3xl font-['DM_Sans'] font-bold tracking-[-0.55] leading-[41.1px] text-white w-12">
                  Ads
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-5 items-center mb-0 ml-5 mr-48">
          <div className="bg-white flex flex-col justify-center gap-6 w-3/5 pt-4 pb-6 px-2 rounded-lg">
            <div className="flex flex-row justify-between ml-2 items-center">
              <div className="whitespace-nowrap font-['Poppins'] font-medium tracking-[0.16] text-[#060606] w-[141px] shrink-0">
                Project summary
              </div>
              <div className="flex flex-row justify-between w-1/2 items-center">
                <div className="bg-white flex flex-row justify-center gap-2 h-8 items-center px-3 py-2 rounded-lg">
                  <div className="text-sm font-['Poppins'] tracking-[0.14] text-[#060606] w-2/3">
                    Project
                  </div>
                  <img
                    src="https://file.rendit.io/n/NmtulmMepqV42LtO65q2.svg"
                    className="min-h-0 min-w-0 w-3 shrink-0"
                  />
                </div>
                <div className="bg-white flex flex-row justify-center gap-2 w-2/5 h-8 items-center rounded-lg">
                  <div className="whitespace-nowrap text-sm font-['Poppins'] tracking-[0.14] text-[#060606] w-32">
                    Project manager
                  </div>
                  <img
                    src="https://file.rendit.io/n/15ByhuJUoDq1vRqfAp5C.svg"
                    className="min-h-0 min-w-0 w-3 shrink-0"
                  />
                </div>
                <div className="bg-white flex flex-row justify-center gap-2 w-24 shrink-0 h-8 items-center rounded-lg">
                  <div className="text-sm font-['Poppins'] tracking-[0.14] text-[#060606] w-1/2">
                    Status
                  </div>
                  <img
                    src="https://file.rendit.io/n/15ByhuJUoDq1vRqfAp5C.svg"
                    className="min-h-0 min-w-0 w-3 shrink-0"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 ml-2 mr-3">
              <div className="flex flex-row gap-6 items-center">
                <div className="text-sm font-['Poppins'] tracking-[0.14] text-[#060606] mr-[172px] w-10 shrink-0">
                  Name
                </div>
                <div className="whitespace-nowrap text-sm font-['Poppins'] tracking-[0.14] text-[#060606] w-32 shrink-0">
                  Project manager
                </div>
                <div className="whitespace-nowrap text-sm font-['Poppins'] tracking-[0.14] text-[#060606] mr-[115px] w-16 shrink-0">
                  Due date
                </div>
                <div className="text-sm font-['Poppins'] tracking-[0.14] text-[#060606] mr-16 w-12 shrink-0">
                  Status
                </div>
                <div className="text-sm font-['Poppins'] tracking-[0.14] text-[#060606] w-16 shrink-0">
                  Progress
                </div>
              </div>
              <img
                src="https://file.rendit.io/n/UNAIqy3yJ1yvbmui2MHg.svg"
                className="min-h-0 min-w-0 self-center"
              />
              <div className="flex flex-row gap-3 items-center mb-1 mr-4">
                <div className="whitespace-nowrap font-['Poppins'] text-[#060606] mr-6 w-[204px] shrink-0">
                  Nelsa web developement
                </div>
                <div className="whitespace-nowrap font-['Poppins'] text-[#060606] w-32 shrink-0">
                  Om prakash sao
                </div>
                <div className="whitespace-nowrap font-['Poppins'] text-[#060606] mr-24 w-24 shrink-0">
                  May 25, 2023
                </div>
                <div className="bg-[rgba(26,_147,_46,_0.18)] flex flex-col mr-12 w-20 shrink-0 h-6 px-2 py-1 rounded-[20px]">
                  <div className="text-xs font-['Poppins'] tracking-[0.12] text-[#1a932e]">
                    Completed
                  </div>
                </div>
                <div className="bg-[url(https://file.rendit.io/n/WldzOdxRqa3bO6LgrnPi.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col justify-center w-8 shrink-0 h-8 px-1">
                  <div className="text-center text-xs font-['Poppins'] tracking-[-0.18] leading-[10px] text-[#060606]">
                    100%
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-center mb-1 mr-4">
                <div className="whitespace-nowrap font-['Poppins'] text-[#060606] mr-16 w-40 shrink-0">
                  Datascale Building
                </div>
                <div className="whitespace-nowrap font-['Poppins'] text-[#060606] w-32 shrink-0">
                  Neilsan mando
                </div>
                <div className="whitespace-nowrap font-['Poppins'] text-[#060606] mr-20 w-24 shrink-0">
                  Jun 20, 2023
                </div>
                <div className="bg-[rgba(226,_177,_51,_0.18)] flex flex-col mr-12 w-16 shrink-0 h-6 px-2 py-1 rounded-[20px]">
                  <div className="text-xs font-['Poppins'] tracking-[0.12] text-[#dfa510]">
                    Delayed
                  </div>
                </div>
                <div className="bg-[url(https://file.rendit.io/n/tWhjWcKbeGNqBvKaKLO7.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col justify-center w-8 shrink-0 h-8 items-center">
                  <div className="text-center text-xs font-['Poppins'] tracking-[-0.18] leading-[10px] text-[#060606] w-3/5">
                    35%
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-8 items-center mb-1 mr-4">
                <div className="whitespace-nowrap font-['Poppins'] text-[#060606] mr-20 w-32 shrink-0">
                  Media channel{" "}
                </div>
                <div className="whitespace-nowrap font-['Poppins'] text-[#060606] w-[110px] shrink-0">
                  Tiruvelly priya
                </div>
                <div className="whitespace-nowrap font-['Poppins'] text-[#060606] mr-20 w-24 shrink-0">
                  July 13, 2023
                </div>
                <div className="bg-[rgba(238,_32,_28,_0.18)] flex flex-col mr-16 w-12 shrink-0 h-6 px-2 py-1 rounded-[20px]">
                  <div className="whitespace-nowrap text-xs font-['Poppins'] tracking-[0.12] text-[#ee201c]">
                    At risk
                  </div>
                </div>
                <div className="bg-[url(https://file.rendit.io/n/WRowrnBFbHFjCENnie8J.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col justify-center w-8 shrink-0 h-8 items-center">
                  <div className="text-center text-xs font-['Poppins'] tracking-[-0.18] leading-[10px] text-[#060606] w-3/5">
                    68%
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-8 items-center mb-1 mr-4">
                <div className="whitespace-nowrap font-['Poppins'] text-[#060606] mr-8 w-[176px] shrink-0">
                  Builder develpoement
                </div>
                <div className="whitespace-nowrap font-['Poppins'] text-[#060606] w-[117px] shrink-0">
                  Matte hannery
                </div>
                <div className="whitespace-nowrap font-['Poppins'] text-[#060606] mr-20 w-24 shrink-0">
                  Dec 20, 2023
                </div>
                <div className="bg-[rgba(26,_147,_46,_0.18)] flex flex-col mr-8 w-20 shrink-0 h-6 px-2 py-1 rounded-[20px]">
                  <div className="text-xs font-['Poppins'] tracking-[0.12] text-[#1a932e]">
                    Completed
                  </div>
                </div>
                <div className="bg-[url(https://file.rendit.io/n/yWsDOhtVhgaL47Lecav7.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col justify-center w-8 shrink-0 h-8 px-1">
                  <div className="text-center text-xs font-['Poppins'] tracking-[-0.18] leading-[10px] text-[#060606]">
                    100%
                  </div>
                </div>
              </div>
              <div className="flex flex-row mr-4 gap-10 items-center">
                <div className="whitespace-nowrap font-['Poppins'] text-[#060606] mr-5 w-[176px] shrink-0">
                  Builder developement
                </div>
                <div className="whitespace-nowrap font-['Poppins'] text-[#060606] w-24 shrink-0">
                  Sukumar rao
                </div>
                <div className="whitespace-nowrap font-['Poppins'] text-[#060606] mr-16 w-24 shrink-0">
                  Mar 15, 2024
                </div>
                <div className="bg-[rgba(230,_95,_43,_0.18)] flex flex-col mr-8 w-16 shrink-0 h-6 px-2 py-1 rounded-[20px]">
                  <div className="whitespace-nowrap text-xs font-['Poppins'] tracking-[0.12] text-[#e65f2b]">
                    On going
                  </div>
                </div>
                <div className="bg-[url(https://file.rendit.io/n/27YZnmAWnZ0D0PnuxHRi.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col justify-center w-8 shrink-0 h-8 items-center">
                  <div className="text-center text-xs font-['Poppins'] tracking-[-0.18] leading-[10px] text-[#060606] w-3/5">
                    50%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white flex flex-col gap-3 w-2/5 h-[349px] px-4 py-5 rounded-lg">
            <div className="whitespace-nowrap font-['Poppins'] tracking-[0.16] text-[#060606] self-start w-24 mb-4 ml-0">
              Today task
            </div>
            <div className="self-start flex flex-row ml-2 gap-2 w-2/3 items-center">
              <div className="text-sm font-['Poppins'] tracking-[0.14] text-[#060606] w-4 shrink-0">
                All
              </div>
              <div className="bg-[rgba(43,_92,_230,_0.1)] flex flex-col mr-6 w-4 shrink-0 items-center px-1 py-px rounded-lg">
                <div className="text-xs font-['Poppins'] tracking-[0.1] text-[#2b5ce6] w-full">
                  10
                </div>
              </div>
              <div className="text-center text-sm font-['Poppins'] tracking-[0.14] text-[#060606] mr-6 w-16 shrink-0">
                Important
              </div>
              <div className="text-sm font-['Poppins'] tracking-[0.14] text-[#060606] w-10 shrink-0">
                Notes
              </div>
              <div className="bg-[rgba(43,_92,_230,_0.1)] flex flex-col mr-6 w-4 shrink-0 px-1 py-px rounded-lg">
                <div className="text-xs font-['Poppins'] tracking-[0.1] text-[#2b5ce6]">
                  05
                </div>
              </div>
              <div className="text-sm font-['Poppins'] tracking-[0.14] text-[#060606] w-8 shrink-0">
                Links
              </div>
              <div className="bg-[rgba(43,_92,_230,_0.1)] flex flex-col w-4 shrink-0 items-center px-1 py-px rounded-lg">
                <div className="text-xs font-['Poppins'] tracking-[0.1] text-[#2b5ce6] w-full">
                  10
                </div>
              </div>
            </div>
            <div className="relative flex flex-col items-start mb-1 mx-0 px-0">
              <img
                src="https://file.rendit.io/n/yTtLFWh2D89l2BN4mE50.svg"
                className="w-[538px] h-px min-h-0 min-w-0 absolute top-0 left-0"
              />
              <img
                src="https://file.rendit.io/n/PTNDCh4Lhz5QXFG51ziy.svg"
                className="min-h-0 min-w-0 relative w-16"
              />
            </div>
            <div className="flex flex-row justify-between items-center mb-px ml-0 mr-3">
              <div className="flex flex-row gap-2 items-center">
                <img
                  src="https://file.rendit.io/n/ZXUh32n1ORCwrYmltalL.svg"
                  className="min-h-0 min-w-0 w-4 shrink-0"
                />
                <div className="whitespace-nowrap text-sm font-['Poppins'] text-[#060606] w-40">
                  Check cement quantity
                </div>
              </div>
              <div className="bg-[rgba(26,_147,_46,_0.18)] flex flex-col w-20 shrink-0 h-6 px-2 py-1 rounded-[20px]">
                <div className="text-xs font-['Poppins'] tracking-[0.12] text-[#1a932e]">
                  Approved
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center mb-px ml-0 mr-4">
              <div className="flex flex-row gap-2 items-center">
                <img
                  src="https://file.rendit.io/n/dz0NnXpjd8MMpP8U2prn.svg"
                  className="min-h-0 min-w-0 w-4 shrink-0"
                />
                <div className="whitespace-nowrap text-sm font-['Poppins'] text-[#060606] w-32">
                  New Delivery dates
                </div>
              </div>
              <div className="bg-[rgba(238,_32,_28,_0.18)] flex flex-col w-16 shrink-0 h-6 px-2 py-1 rounded-[20px]">
                <div className="whitespace-nowrap text-xs font-['Poppins'] tracking-[0.12] text-[#ee201c]">
                  In review
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center mb-px ml-0 mr-4">
              <div className="flex flex-row gap-2 items-center">
                <img
                  src="https://file.rendit.io/n/fiC5GxSoi9buib8Dld0f.svg"
                  className="min-h-0 min-w-0 w-4 shrink-0"
                />
                <div className="whitespace-nowrap text-sm font-['Poppins'] text-[#060606] w-32">
                  Request for quote
                </div>
              </div>
              <div className="bg-[rgba(238,_32,_28,_0.18)] flex flex-col w-16 shrink-0 h-6 px-2 py-1 rounded-[20px]">
                <div className="whitespace-nowrap text-xs font-['Poppins'] tracking-[0.12] text-[#ee201c]">
                  In review
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center mb-px mr-4">
              <div className="flex flex-row gap-2 items-center">
                <img
                  src="https://file.rendit.io/n/IU67K17cj9TDxtthNURf.svg"
                  className="min-h-0 min-w-0 w-5 shrink-0"
                />
                <div className="whitespace-nowrap text-sm font-['Poppins'] text-[#060606] w-[112px]">
                  Get new brands
                </div>
              </div>
              <div className="bg-[rgba(230,_95,_43,_0.18)] flex flex-col w-16 shrink-0 h-6 px-2 py-1 rounded-[20px]">
                <div className="whitespace-nowrap text-xs font-['Poppins'] tracking-[0.12] text-[#84969f]">
                  On going
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center ml-0 mr-3">
              <div className="flex flex-row gap-2 items-center">
                <img
                  src="https://file.rendit.io/n/RHCDddGU7eKlm1C5R7ew.svg"
                  className="min-h-0 min-w-0 w-4 shrink-0"
                />
                <div className="whitespace-nowrap text-sm font-['Poppins'] text-[#060606] w-32">
                  Deltamine project
                </div>
              </div>
              <div className="bg-[rgba(26,_147,_46,_0.18)] flex flex-col w-20 shrink-0 h-6 px-2 py-1 rounded-[20px]">
                <div className="text-xs font-['Poppins'] tracking-[0.12] text-[#1a932e]">
                  Approved
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-start flex flex-row ml-5 gap-5 w-1/2 items-center">
          <div className="bg-white flex flex-col gap-2 w-1/2 h-48 items-start p-4 rounded-lg">
            <div className="flex flex-row ml-px gap-3 items-center">
              <div className="bg-[#f4f7fe] flex flex-col justify-center w-12 shrink-0 h-12 items-center rounded-lg">
                <img
                  src="https://file.rendit.io/n/wVJNhNoWuUE2eddPYkiG.svg"
                  className="min-h-0 min-w-0 w-6"
                />
              </div>
              <div className="font-['Poppins'] font-medium tracking-[0.16] text-[#060606] w-2/5">
                News
              </div>
            </div>
            <div className="font-['Poppins'] text-[#060606] self-stretch ml-px">
              Indian Primary Steel Market Remains Unchanged, Secondary Sees
              Variations in July's Third Week
            </div>
          </div>
          <div className="bg-white flex flex-row justify-center pb-4 gap-3 w-1/2 items-center rounded-lg">
            <div className="flex flex-col gap-2 w-1/2 items-start mt-4 mb-1">
              <div className="flex flex-row gap-3 w-1/2 items-center">
                <div className="bg-[#f4f7fe] flex flex-col justify-center w-12 shrink-0 h-12 items-center rounded-lg">
                  <img
                    src="https://file.rendit.io/n/dV7Q1XROITPTf8xyU9UU.svg"
                    className="min-h-0 min-w-0 w-6"
                  />
                </div>
                <div className="font-['Poppins'] font-medium tracking-[0.16] text-[#060606] w-2/5">
                  News
                </div>
              </div>
              <div className="font-['Poppins'] text-[#060606] self-stretch">
                Indian Primary Steel Market Remains Unchanged, Secondary Sees
                Variations in July's Third Week
              </div>
            </div>
            <img
              src="https://file.rendit.io/n/KQdLJjk4lA7HbQywjC6X.png"
              className="min-h-0 min-w-0 self-end mb-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
