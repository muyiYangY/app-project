import React from 'react'
import {useState} from 'react'
import './content.css'
import avator from '../../images/avator.jpg'
import {CommentOutlined, ShareAltOutlined, HeartOutlined, PictureOutlined} from '@ant-design/icons'
import { CommentModal } from './CommentModal'
import { useQuery, useMutation} from 'react-query'

export const CommentArea = () => {
  const commentList = [
    { 
      id: 1,
      userTitle: '2822012087@qq.com',
      text: '余家贫，耕植不足以自给。幼稚盈室，瓶无储粟，生死所资，未见其术',
      commentNum: 12,
      shareNum: 12,
      heartNum: 15,
    },
    {
      id: 2,
      userTitle: '2822012087@qq.com',
      text: ' خير مثلا من هذا القصص، من ناحية تجربة وتجربة',
      commentNum: 12,
      shareNum: 12,
      heartNum: 15,
    },
  ]
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
    <>
      {
        commentList.map((comments, index) => {
          return(
            <div className='boxCA' key={index}>
              <div className='leftCA'>
                <img className='img'></img>
              </div>
              <div className='rightCA'>
                <div className='one'>{comments.userTitle}</div>
                <div className='two'>{comments.text}</div>
                <div className='three'>
                  <img src={avator} className='img' ></img>
                </div>
                <div className='four'>
                  <span onClick={commentBtn}><CommentOutlined />{comments.commentNum}</span>
                  <span onClick={shareBtn}><ShareAltOutlined />{comments.shareNum}</span>
                  <span onClick={heartBtn}><HeartOutlined />{comments.heartNum}</span>
                </div>
              </div>
              <CommentModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} num={num}/>
            </div>
          )})
      }
    </>
    
    
  )
}
