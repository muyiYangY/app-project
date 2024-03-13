import React from 'react'
import {useState} from 'react'
import './content.css'
import avator from '../../images/avator.jpg'
import {CommentOutlined, ShareAltOutlined, HeartOutlined, PictureOutlined} from '@ant-design/icons'
import { CommentModal } from './CommentModal'

export const CommentArea = () => {
  const userTitle = '2822012087@qq.com'
  const text = '余家贫，耕植不足以自给。幼稚盈室，瓶无储粟，生生所资，未见其术'
  const commentNum = 12
  const shareNum = 12
  const heartNum = 15
  let num = 0;
  const [isModalOpen, setIsModalOpen] = useState(false)
  const commentBtn = () => {
    console.log('comment submit');
    setIsModalOpen(true)
    num = 0
  }
  const shareBtn = () => {
    console.log('share submit');
  }
  const heartBtn = () => {
    console.log('heart submit');
  }
  return (
    <div className='boxCA'>
        <div className='leftCA'>
            <img className='img'></img>
        </div>
        <div className='rightCA'>
            <div className='one'>{userTitle}</div>
            <div className='two'>{text}</div>
            <div className='three'>
              <img src={avator} className='img' ></img>
            </div>
            <div className='four'>
              <span onClick={commentBtn}><CommentOutlined />{commentNum}</span>
              <span onClick={shareBtn}><ShareAltOutlined />{shareNum}</span>
              <span onClick={heartBtn}><HeartOutlined />{heartNum}</span>
            </div>
        </div>
        <CommentModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} num={num}/>
    </div>
  )
}
