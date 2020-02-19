import React, { FC } from 'react';
import { Modal, Spin, Button } from 'antd';
import { DataTableProvider } from 'providers/dataTable';
import { IndexTable } from 'components';

interface IModalProps {
    visible: boolean,
    onCancel?: () => void,
    onSelected?: (string) => void,
}

const ModalForm: FC<IModalProps> = ({ visible, onCancel, onSelected }) => {
    const loading = false;

    const handleSubmit = () => {
    };     

    const handleCancel = () => {
        onCancel();
    };

    const handleDblClick = (id) => {
        if (Boolean(onSelected))
            onSelected(id);
    };

    return (
        <Modal
            width="60%"
            visible={visible}
            title="Select User"
            okText="Add"
            onCancel={handleCancel}
            onOk={handleSubmit}
            confirmLoading={loading}
            footer={<Button onClick={handleCancel}>Cancel</Button>}
        >
            <Spin spinning={loading} tip="Please wait...">
                <DataTableProvider tableId="Persons_Picker" showStandardPagination={true} onDblClick={handleDblClick}>
                    <IndexTable id="Persons_Picker"/>
                </DataTableProvider>
            </Spin>
        </Modal>
    );
}
export default ModalForm;