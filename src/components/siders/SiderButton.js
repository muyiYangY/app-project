import React from 'react'
import { Button } from 'antd'
import { SearchOutlined, HomeOutlined, BellOutlined, MailOutlined, UnorderedListOutlined,
     BookOutlined, TeamOutlined, UserOutlined, BarsOutlined } from '@ant-design/icons'
import './Siders.css'

export const SiderButton = () => {
  return (
    <div className='box' >
        <Button className='button'>
            <span className='icon'><SearchOutlined /></span>
            主页
        </Button>
        <Button className='button'>
            <span className='icon'><HomeOutlined /></span>
            zhuye
        </Button>
        <Button className='button'>
            <span className='icon'><SearchOutlined /></span>
            探索
        </Button>
        <Button className='button'>
            <span className='icon'><BellOutlined /></span>
            通知
        </Button>
        <Button className='button'>
            <span className='icon'><MailOutlined /></span>
            私信
        </Button>
        <Button className='button'>
            <span className='icon'><UnorderedListOutlined /></span>
            列表
        </Button>
        <Button className='button'>
            <span className='icon'><BookOutlined /></span>
            书签
        </Button>
        <Button className='button'>
            <span className='icon'><TeamOutlined /></span>
            社群
        </Button>
        <Button className='button'>
            <span className='icon'><UserOutlined /></span>
            个人资料
        </Button>
        <Button className='button'>
            <span className='icon'><BarsOutlined /></span>
            更多
        </Button>
        <Button className='subbtn' type='primary'>
            发帖
        </Button>
    </div>
  )
}


