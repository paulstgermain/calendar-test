import React, { useState } from 'react';
import { Modal } from 'antd';

export default function ScheduleModal(props) {
    const { isModalVisible, setIsModalVisible, eventsArr, setEventsArr } = props;

    const handleOk = () => {
        setIsModalVisible(false);
    }
    
    const handleCancel = () => {
        setIsModalVisible(false);
    }

    return (
        <>
            <Modal title="Schedule a Meeting" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Create Event Modal Here - Test</p>
            </Modal>
        </>
    )
}