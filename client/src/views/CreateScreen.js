import { Button, Form, Input } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { Component } from 'react';

class CreateScreen extends Component {
  state = {
    fileEvent: null,
  };
  
  handleChange = (e) => {
    this.setState({fileEvent: e.target.files[0]});
  }
  
  prepareForSend = (values) => {
    
    let fd = new FormData();
    
    for (const [key, value] of Object.entries(values)) {
        if (value !== undefined) fd.set(key, value)
        if (key === 'file' && value !== undefined) fd.set(key, this.state.fileEvent)
    }

    return fd
}

  onFinish = (values) => {
    let newVal = this.prepareForSend(values)
    console.log('newVal:', newVal);
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  render() {
    return (
      <Form {...layout} encType="multipart/form-data" name="basic" initialValues={{ remember: true }} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed} >
        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input token name !' }]} >
          <Input />
        </Form.Item>

        <Form.Item label="Price" name="price" rules={[{ required: true, message: 'Please input token price (Ether) !' }]} >
          <Input type="number" />
        </Form.Item>

        <Form.Item label="File" name="file" rules={[{ required: true, message: 'Please input token file (Ether) !' }]} >
          <Input type="file" onChange={this.handleChange} />
        </Form.Item>

        <Form.Item label="Description" name="description" rules={[{ required: true, message: 'Please input token description (Ether) !' }]} >
          <TextArea />
        </Form.Item>

        <Form.Item {...tailLayout}> 
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    );
  }
}

export default CreateScreen;

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
  },
  flex: 1
};
const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 8,
  },
};