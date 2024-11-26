import { useEffect, useState } from "react";
import {
  GaugeContainer,
  GaugeReferenceArc,
  GaugeValueArc,
} from "@mui/x-charts/Gauge";

function Header() {
  const [UserData, setUserData] = useState<Type[]>([]);

  interface Type {
    address: string;
    birthday: string;
    candidate: string;
    firstName: string;
    height: string;
    imageUrl: string;
    index: number;
    lastName: string;
    position: string;
    weight: string;
  }

  useEffect(() => {
    fetch("https://trello.vimlc.uz/get-personal-info")
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        }
      })
      .then((data) => {
        setUserData([data]);
      })
      .catch((error) => {
        console.error("Xatolik:", error);
      });
  }, []);
  return (
    <div className="container max-w-[1440px] mx-auto mt-3 pt-10 px-[64px]">
      <div>
        {UserData.length > 0 &&
          UserData.map(function (value, index) {
            return (
              <div key={index} className="flex  justify-between">
                <div className="flex flex-row gap-8">
                  <img src={value.imageUrl} alt="" />
                  <div className="max-w-[396px] ">
                    <div>
                      <h1 className="text-[#212529] font-semibold text-[44px] m-0">
                        {value.firstName}
                      </h1>
                      <h1 className="text-[#212529] font-normal text-[44px] m-0">
                        {value.lastName}
                      </h1>
                    </div>
                    <div className="mt-[30px] mb-[38px]">
                      <div className="flex flex-row gap-4">
                        <span className="text-[#495057] text-xl">
                          Тугилган сана:
                        </span>
                        <span className="text-[#212529] text-xl">
                          {value.birthday}
                        </span>
                      </div>
                      <div className="flex flex-row gap-4">
                        <span className="text-[#495057] text-xl">
                          Тугилган жой:
                        </span>
                        <span className="text-[#212529] text-xl">
                          {value.address}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-row gap-3">
                      <div className="flex flex-col ">
                        <span className="text-[#000000] font-medium text-lg">
                          Буйи:
                        </span>
                        <span className="text-[#000000] font-medium text-lg">
                          {value.height}
                        </span>
                      </div>
                      <div className="flex flex-col ">
                        <span className="text-[#000000] font-medium text-lg">
                          Вазни:
                        </span>
                        <span className="text-[#000000] font-medium text-lg">
                          {value.weight}
                        </span>
                      </div>
                      <div className="flex flex-col ">
                        <span className="text-[#000000] font-medium text-lg">
                          Индекс:
                        </span>
                        <span className="text-[#000000] font-medium text-lg">
                          {value.index}
                        </span>
                      </div>
                      <div>
                      <GaugeContainer
                        width={70}
                        height={70}
                        startAngle={-110}
                        endAngle={110}
                        value={value.index}
                        sx={{
                          fill: "lightgray",
                        }}
                      >
                        <GaugeReferenceArc />
                        <GaugeValueArc />
                      </GaugeContainer>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between mt-[35px] ">
                  <div className="max-w-[420px] flex flex-col gap-3">
                    <div>
                      <span className="text-[#495057] text-xl font-normal">
                        Лавозими:
                      </span>
                      <p className="text-[#212529] text-xl leading-8">
                        {value.position}
                      </p>
                    </div>
                    <div>
                      <span className="text-[#495057] text-xl font-normal">
                        Номзод:
                      </span>
                      <p className="text-[#212529] text-xl leading-8">
                        {value.candidate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Header;
