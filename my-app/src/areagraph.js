// src/components/area.rechart.js

import React from "react";
import { AreaChart, Area, YAxis, XAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';

class AreaRechartComponent extends React.Component {

    data = [
        {
            "name": "",
            "Companies": 0,
            "Individuals": 0
        },
        {
            "name": "Jun'19",
            "Companies": 1,
            "Individuals": 0
        },
        {
            "name": "",
            "Companies": 6,
            "Individuals": 6
        },
        {
            "name": "Jul'19",
            "Companies": 1,
            "Individuals": 9
        },
        {
            "name": "",
            "Companies": 3,
            "Individuals": 6
        },
        {
            "name": "Aug'19",
            "Companies": 7,
            "Individuals": 1
        },
        {
            "name": "",
            "Companies": 9,
            "Individuals": 4
        },
        {
            "name": "Sep'19",
            "Companies": 7,
            "Individuals": 1
        },
        {
            "name": "",
            "Companies": 5,
            "Individuals": 0
        },
        {
            "name": "Oct'19",
            "Companies": 6,
            "Individuals": 0
        },
        {
            "name": "",
            "Companies": 4,
            "Individuals": 0
        },
        {
            "name": "Nov'19",
            "Companies": 0,
            "Individuals": 0
        },
        {
            "name": "",
            "Companies": 0,
            "Individuals": 2
        },
        {
            "name": "Dec'19",
            "Companies": 6,
            "Individuals": 6
        },
        {
            "name": "",
            "Companies": 9,
            "Individuals": 9
        },
        {
            "name": "Jan'20",
            "Companies": 8,
            "Individuals": 11
        },
        {
            "name": "",
            "Companies": 6,
            "Individuals": 9
        },
        {
            "name": "Feb'20",
            "Companies": 3,
            "Individuals": 6
        }
    ]



    render() {
        return (
          <div style={{width: '730px', background: '#050711'}}>
            <div className="Graph-title">Individuals</div>
            <AreaChart width={730} height={200} data={this.data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1bfbe4" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#1bfbe4" stopOpacity={0.4} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#849FB4"/>
                <YAxis stroke="#849FB4"/>
                <Tooltip />
                <Area type="monotone" dataKey="Individuals" stroke="#050711" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
            <div className="Graph-title">Companies</div>
            <AreaChart width={730} height={200} data={this.data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ff56ee" stopOpacity={0.7} />
                        <stop offset="95%" stopColor="#ff56ee" stopOpacity={0.4} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#849FB4"/>
                <YAxis stroke="#849FB4"/>
                <Tooltip />
                <Area type="monotone" dataKey="Companies" stroke="#050711" fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>
          </div>
        )
    };
}

export default AreaRechartComponent;
