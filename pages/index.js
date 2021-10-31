import moment from 'moment';
import { useState } from 'react';
import styles from '../styles/Home.module.css'

import styled from 'styled-components';
import {Bolt} from '@styled-icons/fa-solid/Bolt';
import {ArrowLeftShort} from '@styled-icons/bootstrap/ArrowLeftShort';
import {ArrowRightShort} from '@styled-icons/bootstrap/ArrowRightShort';
import {Offer} from '@styled-icons/boxicons-solid/Offer';


export default function Home() {

  const [date, setDate] = useState(moment());
  const [stars, showStars] = useState([3, 15]);
  const [colorCode, setColorCode] = useState({
    success: "#83C93E",
    successBackground: "#F6F9E8",
    warning: "#EF9A3E",
    warningBackground: "#FCEEDC"
  })
  const [data, setData] = useState([
    {
      date: 1,
      items: [
        {
          filled: true,
          value: "Studio",
          color: "success",
          left: 0
        },
        {
          filled: true,
          value: "1 BR",
          color: "success",
          left: 0
        },
        {
          filled: true,
          value: "2 BR",
          color: "success",
          left: 0
        },
        {
          filled: true,
          value: "HU",
          color: "warning",
          left: 0
        }
      ] 
    },
    {
      date: 2,
      items: [
        {
          filled: true,
          value: "1 BR",
          color: "success",
          left: 0
        }
      ] 
    },
    {
      date: 3,
      items: [
        {
          filled: true,
          value: "1 BR",
          color: "warning",
          left: 2
        },
        {
          filled: true,
          value: "HU",
          color: "success",
          left: 0
        }
      ] 
    },
    {
      date: 4,
      items: [
        {
          filled: true,
          value: "Studio",
          color: "warning",
          left: 0
        },
        {
          filled: true,
          value: "1 BR",
          color: "success",
          left: 0
        },
        {
          filled: true,
          value: "2 BR",
          color: "warning",
          left: 0
        },
        {
          filled: true,
          value: "HU",
          color: "warning",
          left: 0
        }
      ] 
    },
    {
      date: 5,
      items: [
        {
          filled: true,
          value: "1 BR",
          color: "warning",
          left: 0
        },
        {
          filled: true,
          value: "HU",
          color: "success",
          left: 0
        }
      ] 
    },
    {
      date: 6,
      items: [
        {
          filled: true,
          value: "Studio",
          color: "warning",
          left: 0
        },
        {
          filled: true,
          value: "1 BR",
          color: "success",
          left: 0
        }
      ] 
    },
    {
      date: 7,
      items: [
        {
          filled: true,
          value: "HU",
          color: "warning",
          left: 0
        },
        {
          filled: true,
          value: "1 BR",
          color: "success",
          left: 0
        }
      ] 
    },
    {
      date: 8,
      items: [
        {
          filled: false,
          value: "2 BR",
          color: "warning",
          left: 3
        },
        {
          filled: true,
          value: "HU",
          color: "warning",
          left: 0
        }
      ] 
    },
    {
      date: 9,
      items: [
        {
          filled: false,
          value: "Studio",
          color: "success",
          left: 0
        },
        {
          filled: true,
          value: "2 BR",
          color: "success",
          left: 2
        }
      ] 
    },
    {
      date: 10,
      items: [
        {
          filled: false,
          value: "HU",
          color: "warning",
          left: 0
        },
        {
          filled: true,
          value: "1 BR",
          color: "success",
          left: 0
        }
      ] 
    },
    {
      date: 11,
      items: [
        {
          filled: true,
          value: "HU",
          color: "warning",
          left: 0
        },
        {
          filled: true,
          value: "1 BR",
          color: "success",
          left: 0
        }
      ] 
    },
    {
      date: 12,
      items: [
        {
          filled: false,
          value: "2 BR",
          color: "warning",
          left: 0
        },
      ] 
    },
    {
      date: 13,
      items: [
        {
          filled: true,
          value: "Studio",
          color: "warning",
          left: 0
        },
        {
          filled: true,
          value: "1 BR",
          color: "success",
          left: 0
        },
        {
          filled: true,
          value: "2 BR",
          color: "warning",
          left: 0
        }
      ] 
    },
    {
      date: 14,
      items: [
        {
          filled: true,
          value: "1 BR",
          color: "warning",
          left: 0
        },
        {
          filled: true,
          value: "HU",
          color: "success",
          left: 0
        }
      ] 
    },
    {
      date: 15,
      items: [
        {
          filled: false,
          value: "1 BR",
          color: "warning",
          left: 0
        },
        {
          filled: true,
          value: "HU",
          color: "warning",
          left: 0
        }
      ] 
    },
    {
      date: 16,
      items: [
        {
          filled: false,
          value: "Studio",
          color: "warning",
          left: 0
        },
        {
          filled: true,
          value: "2 BR",
          color: "success",
          left: 0
        }
      ] 
    },
    {
      date: 17,
      items: [
        {
          filled: false,
          value: "HU",
          color: "warning",
          left: 0
        },
        {
          filled: true,
          value: "1 BR",
          color: "success",
          left: 0
        }
      ] 
    },
    {
      date: 18,
      items: [
        {
          filled: true,
          value: "HU",
          color: "warning",
          left: 0
        },
        {
          filled: true,
          value: "1 BR",
          color: "success",
          left: 0
        }
      ] 
    },
    {
      date: 19,
      items: [
        {
          filled: false,
          value: "2 BR",
          color: "warning",
          left: 0
        },
      ] 
    },
    {
      date: 20,
      items: [
        {
          filled: true,
          value: "1 BR",
          color: "success",
          left: 0
        }
      ] 
    },
    {
      date: 21,
      items: [
        {
          filled: true,
          value: "1 BR",
          color: "warning",
          left: 2
        },
        {
          filled: true,
          value: "HU",
          color: "success",
          left: 0
        }
      ] 
    },
    {
      date: 22,
      items: [
        {
          filled: true,
          value: "Studio",
          color: "warning",
          left: 0
        },
        {
          filled: true,
          value: "1 BR",
          color: "success",
          left: 0
        },
        {
          filled: true,
          value: "2 BR",
          color: "warning",
          left: 0
        },
        {
          filled: true,
          value: "HU",
          color: "warning",
          left: 0
        }
      ] 
    },
    {
      date: 23,
      items: [
        {
          filled: true,
          value: "1 BR",
          color: "warning",
          left: 0
        },
        {
          filled: true,
          value: "HU",
          color: "success",
          left: 0
        }
      ] 
    },
    {
      date: 24,
      items: [
        {
          filled: true,
          value: "Studio",
          color: "warning",
          left: 0
        },
        {
          filled: true,
          value: "1 BR",
          color: "success",
          left: 0
        }
      ] 
    },
    {
      date: 25,
      items: [
        {
          filled: true,
          value: "HU",
          color: "warning",
          left: 0
        },
        {
          filled: true,
          value: "1 BR",
          color: "success",
          left: 0
        }
      ] 
    },
    {
      date: 26,
      items: [
        {
          filled: false,
          value: "2 BR",
          color: "warning",
          left: 3
        },
        {
          filled: true,
          value: "HU",
          color: "warning",
          left: 0
        }
      ] 
    },
    {
      date: 27,
      items: [
        {
          filled: false,
          value: "Studio",
          color: "success",
          left: 0
        },
        {
          filled: true,
          value: "2 BR",
          color: "success",
          left: 2
        },
        {
          filled: true,
          value: "HU",
          color: "success",
          left: 0
        }
      ] 
    },
    {
      date: 28,
      items: [
        {
          filled: false,
          value: "HU",
          color: "warning",
          left: 0
        },
        {
          filled: true,
          value: "1 BR",
          color: "success",
          left: 0
        }
      ] 
    },
    {
      date: 29,
      items: [
        {
          filled: true,
          value: "HU",
          color: "warning",
          left: 0
        },
        {
          filled: true,
          value: "1 BR",
          color: "success",
          left: 0
        }
      ] 
    },
    {
      date: 30,
      items: [
        {
          filled: false,
          value: "2 BR",
          color: "warning",
          left: 0
        },
      ] 
    },
  ]);

  const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
 
const CalendarContainer = styled.div`
  width: 100%;
  max-width: 60vw;
  display: flex;
  flex-wrap: wrap;
`;

const PagingButton = styled.button`
  display: inline-block;
  background-color: white;
  color: #64D1EF;
  font-size: 24px;
  border: 2px solid #64D1EF;
  border-radius: 50px;
  width: 45px;
  height: 45px;
  margin: 12px;
  margin-top: 20px;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    background-color: #64D1EF;
    color: white;
  }
`;

const PagingButtonOne = styled.button`
  display: inline-block;
  background-color: white;
  color: #64D1EF;
  font-size: 24px;
  border: 2px solid #64D1EF;
  border-radius: 50px;
  width: 45px;
  height: 45px;
  margin: 12px;
  margin-top: 20px;
  margin-left: 50px;
  cursor: pointer;
  &:hover {
    background-color: #64D1EF;
    color: white;
  }
`;

const YellowBolt = styled(Bolt)`
color: #F6BB15;
width: 12px;
height: 20px;
margin-left: 10px;
`;

const OfferIcon = styled(Offer)`
  color: #F9C915;
  width: 40px;
  height: 40px;
`;

const RightArrow = styled(ArrowRightShort)`
color: #64D1EF;
&:hover {
  color: white;
}
`;

const LeftArrow = styled(ArrowLeftShort)`
color: #64D1EF;
&:hover {
  color: white;
}
`;

const Day = styled.div`
  box-sizing: border-box;
  font-size: 20px;
  width: ${ 100 / 7 }%;
  padding: 14px;
  background-color: 'white';
  color: #3993FD;
  border: 1px solid #F4F4F4;
  font-weight: bold;
`;

const DayHeader = styled(Day)`
  text-align: center;
  font-size: 16px;
  padding-top: 12px;
  height: 48px;
  color: #8A8A8A;
  text-align: left;
  font-weight: 500;
  border: 0px;
`;

const SingleLiner = styled.div`
  display: inline-flex;
  text-align: left;
  width: 60vw;
  justify-content: space-between;
`;

  const prevMonth = () => {
    setDate(date.subtract(1, 'month'))
  }
  
  const nextMonth = () => {
    setDate(date.add(1, 'month'))
  } 

  const createDaysOfMonth = (refDate) => {
    const dat = moment(refDate).endOf('month');
    const lastDate = dat.date();
    const firstWeekday = dat.startOf('month').day();
  
    const calendarDays = [];
  
    const today = moment();
   
    for (let w=0; w<firstWeekday; w++) {
      calendarDays.push(<Day key={Math.random()}/>); // empty days
    }
  
    for (let d=1; d<lastDate; d++) {
      calendarDays.push(
        <Day key={d} today={dat.date(d).isSame(today, 'day')}>
          {d.toString().length === 1 ? `0${d}` : d} 
          {stars.includes(d) && (<YellowBolt />)}
          <br />
          {
            data.map((item, index) => {
              if(item.date === d) {
                return (
                  <div key={index} style={{color: "black", fontSize: "12px", marginTop: "15px"}}>
                    {
                      item.items.length && item.items.map((x,i) => {
                        return (
                          <div style={{width: "100%", padding: "7px", color: colorCode[`${x.color}`], 
                            marginBottom: "5px", backgroundColor: x.filled ? colorCode[`${x.color}Background`] : 'white',
                            border: !x.filled ? `1px solid ${colorCode[x.color]}` : "", 
                            display: "flex", justifyContent: "space-between", borderRadius: "3px"}}>
                            <div style={{fontSize: "14px"}}>{x.value}</div>
                            {
                              x.left > 0 && (
                                <div style={{fontSize: "13px"}}>{x.left} Left</div>
                              )
                            }
                          </div>
                        )
                      }) 
                    }
                  </div>
                )
              }
            })
          }
        </Day>);
    }
  
    while (calendarDays.length % 7 !== 0) {
      calendarDays.push(<Day key={Math.random()}/>);
    }
  
    return calendarDays;
  }
 
  return (
      <CalendarWrapper>
        <br />
        <br />
        <br />
        <SingleLiner>
          <div style={{display: "inline-flex"}}>
            <h2 style={{color: "#2B2B2B", fontSize: "30px"}}>{date.format('MMM YYYY')}</h2>
            <PagingButtonOne onClick={prevMonth}><LeftArrow /></PagingButtonOne>
            <PagingButton onClick={nextMonth}><RightArrow /></PagingButton>
          </div>
          <div style={{padding: "10px", border: "1px dashed #F9C915", height: "62px", borderRadius: "6px", display: "flex", paddingLeft: "20px", paddingRight: "20px", marginTop: "10px"}}>
            <OfferIcon /> <span style={{color: "black", fontWeight: "bold", fontSize: "22px", paddingLeft: "8px", paddingTop: "7px"}}>View Season's offer</span>
          </div>
        </SingleLiner>
        <br /> 
        <br />
        <CalendarContainer>
          <DayHeader>Sun</DayHeader>
          <DayHeader>Mon</DayHeader>
          <DayHeader>Tue</DayHeader>
          <DayHeader>Wed</DayHeader>
          <DayHeader>Thu</DayHeader>
          <DayHeader>Fri</DayHeader>
          <DayHeader>Sat</DayHeader>
          {createDaysOfMonth(date)}
          <br />
          <br />
          <br />
        </CalendarContainer>
          <br />
      </CalendarWrapper>
  )
}
