import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

class CreateScreen extends Component {
  onFinish = (values) => {
    console.log('Success:', values);
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  render() {
    return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={this.onFinish}
      onFinishFailed={this.onFinishFailed}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input token name !' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: 'Please input token price (Ether) !' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    );
  }
}

export default CreateScreen;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
  flex : 1
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};