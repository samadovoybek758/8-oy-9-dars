import { useEffect, useState } from "react";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import LineGraph from "./Linegarph";
import main from '../assets/Frame 878 (1).png'

function Main() {
  const [data, setData] = useState<Type[]>([]);

  type NumArray = number[];
  type Label = string[];
  interface Type3 {
    data:NumArray,
    labels: Label
  }

  interface Type {
    lineChart: Type3;
    overall: string;
    semicharts: type[];
    thanOthers: number;
  }

  interface type {
    color: string;
    label: string;
    percentage: number;
  }
  useEffect(() => {
    fetch("https://trello.vimlc.uz/knowlodge")
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        }
      })
      .then((data) => {
        setData([data]);
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="max-w-[1440px] pl-16 mt-6 pr-14 mx-auto bg-[#F7F7F7]">
      <div className="flex items-center mb-8 gap-[10px]">
        <div className="w-[13px] h-[43px] bg-[#0956AF] "></div>
        <h1 className="text-4xl font-semibold ">Билим тести</h1>
        <div className="w-[1050px] h-[4px] bg-[#DEE2E6]"></div>
      </div>
      <div className="flex flex-row justify-between items-center">
        {data.length > 0 &&
          data.map(function (value, index) {
            return (
              <div
                key={index}
                className="flex flex-row flex-wrap max-w-[644px] gap-6 "
              >
                <div className="w-[198px] flex flex-col justify-center items-center text-center">
                  <Gauge
                    value={value.semicharts[0].percentage}
                    startAngle={-90}
                    endAngle={90}
                    height={80}
                    width={160}
                    sx={{
                      [`& .${gaugeClasses.valueText}`]: {
                        fontSize: 20,
                        transform: "translate(0px, 0px)",
                      },
                      [`& .${gaugeClasses.valueArc}`]: {
                        fill: "#EF233C",
                      },
                    }}
                    text={({ value }) => `${value}%`}
                  />
                  <p className="text-[#495057]">{value.semicharts[0].label}</p>
                </div>

                <div className="w-[198px] flex flex-col justify-center items-center text-center">
                  <Gauge
                    value={value.semicharts[1].percentage}
                    startAngle={-90}
                    endAngle={90}
                    height={80}
                    width={160}
                    sx={{
                      [`& .${gaugeClasses.valueText}`]: {
                        fontSize: 20,
                        transform: "translate(0px, 0px)",
                      },
                      [`& .${gaugeClasses.valueArc}`]: {
                        fill: "#28A264",
                      },
                    }}
                    text={({ value }) => `${value}%`}
                  />
                  <p className="text-[#495057]">{value.semicharts[1].label}</p>
                </div>

                <div className="w-[198px] flex flex-col justify-center items-center text-center">
                  <Gauge
                    value={value.semicharts[2].percentage}
                    startAngle={-90}
                    endAngle={90}
                    height={80}
                    width={160}
                    sx={{
                      [`& .${gaugeClasses.valueText}`]: {
                        fontSize: 20,
                        transform: "translate(0px, 0px)",
                      },
                      [`& .${gaugeClasses.valueArc}`]: {
                        fill: "#28A264",
                      },
                    }}
                    text={({ value }) => `${value}%`}
                  />
                  <p className="text-[#495057]">{value.semicharts[2].label}</p>
                </div>

                <div className="w-[198px] flex flex-col justify-center items-center text-center">
                  <Gauge
                    value={value.semicharts[3].percentage}
                    startAngle={-90}
                    endAngle={90}
                    height={80}
                    width={160}
                    sx={{
                      [`& .${gaugeClasses.valueText}`]: {
                        fontSize: 20,
                        transform: "translate(0px, 0px)",
                      },
                      [`& .${gaugeClasses.valueArc}`]: {
                        fill: "#F8B324",
                      },
                    }}
                    text={({ value }) => `${value}%`}
                  />
                  <p className="text-[#495057]">{value.semicharts[3].label}</p>
                </div>

                <div className="w-[198px] flex flex-col justify-center items-center text-center">
                  <Gauge
                    value={value.semicharts[4].percentage}
                    startAngle={-90}
                    endAngle={90}
                    height={80}
                    width={160}
                    sx={{
                      [`& .${gaugeClasses.valueText}`]: {
                        fontSize: 20,
                        transform: "translate(0px, 0px)",
                      },
                      [`& .${gaugeClasses.valueArc}`]: {
                        fill: "#0956AF",
                      },
                    }}
                    text={({ value }) => `${value}%`}
                  />
                  <p className="text-[#495057]">{value.semicharts[4].label}</p>
                </div>

                <div className="w-[198px] flex flex-col justify-center items-center text-center">
                  <Gauge
                    value={value.semicharts[5].percentage}
                    startAngle={-90}
                    endAngle={90}
                    height={80}
                    width={160}
                    sx={{
                      [`& .${gaugeClasses.valueText}`]: {
                        fontSize: 20,
                        transform: "translate(0px, 0px)",
                      },
                      [`& .${gaugeClasses.valueArc}`]: {
                        fill: "#F8B324",
                      },
                    }}
                    text={({ value }) => `${value}%`}
                  />
                  <p className="text-[#495057]">{value.semicharts[5].label}</p>
                </div>
              </div>
            );
          })}

          <div>
            {
              data.length > 0 && data.map(function (value) {
                return ( 
                  <div>
                    <LineGraph data={value.lineChart.data} labels={value.lineChart.labels} ></LineGraph>
            <span className='text-[#0956AF] block mb-2 mt-6 text-5xl font-semibold'>{value.overall}</span>
            <div className='w-[333px]  h-[45px] bg-green-700 rounded-lg'></div>
                  </div>
                )
              })
            }
          </div>
          <img src={main} alt="" />
      </div>
    </div>
  );
}

export default Main;
