import React, { useState } from "react";
import { Modal, Form, Input, Button } from "antd";

export default function ScheduleModal(props) {
  const { isModalVisible, setIsModalVisible, eventsArr, setEventsArr } = props;

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    const newEvent = {...values, date: "17/03/2022", type: "success"};
    console.log("Success:", values);
    setEventsArr([...eventsArr, newEvent]);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Modal
        title="Schedule a Meeting"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ type: "success" }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Event Title"
            name="content"
            rules={[{ required: true, message: "Please input an event title!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Details"
            name="details"
            rules={[{ required: true, message: "Please input this event's details!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
