import React, { Component } from "react";
import Navbar from "../homepage/Navbar";
import Footer from "../homepage/Footer";
import { Form, Input, InputNumber, Button } from "antd";
import { Link } from "react-router-dom";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
export default class OrderPage extends Component {
  render() {
    const onFinish = (values) => {
      console.log(values);
    };
    return (
      <div>
        <Navbar />
        <h1 className="text-center mt-5 mb-5">Enter Your Details</h1>
        <div class="step-container col-8">
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={["user", "name"]}
              label="Name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "email"]}
              label="Email"
              rules={[{ type: "email" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name={["user", "website"]}
              label="Mobile No"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name={["user", "introduction"]} label="Address">
              <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                <Link to="/success">Submit</Link>
              </Button>
            </Form.Item>
          </Form>
        </div>
        <Footer />
      </div>
    );
  }
}
