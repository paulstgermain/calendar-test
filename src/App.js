import React, { useState } from 'react';
import './styles/App.css';
import "antd/dist/antd.css";
import { Calendar, Modal } from 'antd';

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
      display: 'block', width: 700, padding: 30
    } }>
      <h4>ReactJS Ant-Design Calendar Component</h4>
      <Calendar monthCellRender={monthCellRender} onSelect={showModal} />
      <Modal title="Selected Date" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>{selectedDate ? selectedDate : 'Something went wrong.'}</p>
      </Modal>
    </div>
  );
}

export default App;
