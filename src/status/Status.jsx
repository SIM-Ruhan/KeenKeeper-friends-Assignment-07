import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from "recharts"
import { TimelineContext } from '../timeline/TimelineContext';
const Status = () => {

  const { timeline } = useContext(TimelineContext);
    const callCount = timeline.filter(item => item.type === "call").length;
    const textCount = timeline.filter(item => item.type === "text").length;
    const videoCount = timeline.filter(item => item.type === "video").length;

    const data = [
        { name: "Calls", value: callCount, fill: "#05733C" },
        { name: "Texts", value: textCount, fill: "#A627F5" },
        { name: "Videos", value: videoCount, fill: "#16BB66"}
    ];
    return (
        <div className='my-10 shadow p-10 rounded-md container mx-auto'>
            <h1 className="text-xl text-[#244D3F] font-medium">By Interaction Type</h1>
          <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh',margin: "auto", aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        cornerRadius="10%"
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
     <Legend/>
     <Tooltip/>
    </PieChart>
        </div>
    );
};

export default Status;
