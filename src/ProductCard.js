import React, { Component } from 'react'
import { Card, Avatar , Drawer, Button, } from 'antd';

const { Meta } = Card;

export default class ProductCard extends Component {
    render() {
        return (
            
                <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src={this.props.image}
        
      />
    }
    actions={[
      <Button type="primary">Buy Now</Button>,
      <Button type="primary">Add To Cart</Button>,
      
    ]}
  >
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title={this.props.title}
      description={this.props.description}
    />
  </Card>
            
        )
    }
}
