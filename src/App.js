import React, { useState } from 'react';
import './styles/App.css';
import "antd/dist/antd.css";
import { Calendar, Modal, Badge } from 'antd';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const showModal = (value) => {
    setSelectedDate(value.format("DD-MM-YYYY"));
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  }

  const handleCancel = () => {
    setIsModalVisible(false);
  }

  function getListData(value) {
    let listData;
    let dateValue = value.format("DD/MM/YYYY"); // you can parse value in every format you want
    switch (dateValue) {
      case "15/03/2022":
        listData = [
          { type: "warning", content: "This is warning event." },
          { type: "success", content: "This is usual event." }
        ];
        break;
      case "16/03/2022":
        listData = [
          { type: "error", content: "This is error event 1." },
          { type: "error", content: "This is error event 2." },
          { type: "error", content: "This is error event 3." }
        ];
        break;
      case "12/04/2022":
        listData = [
          { type: "success", content: "This is usual event1." },
          { type: "success", content: "This is usual event2." }
        ];
        break;
      default:
    }
    return listData || [];
  }

  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} onClick={ () => {
              console.log(item.content)
            } } />
          </li>
        ))}
      </ul>
    );
  }

  function getMonthData(value) {
    if (value.month() === 3) {
      return 1394;
    }
  }

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}


  return (
    <div style={ { 
      display: 'block', padding: 30
    } }>
      <h4>ReactJS Ant-Design Calendar Component</h4>
      <Calendar fullscreen={true} dateCellRender={dateCellRender} monthCellRender={monthCellRender} onSelect={showModal} />
      <Modal title="Selected Date" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>{selectedDate ? selectedDate : 'Something went wrong.'}</p>
      </Modal>
    </div>
  );
}

export default App;
