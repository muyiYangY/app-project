import React from 'react'
import {useState} from 'react'
import './content.css'
import avator from '../../images/avator.jpg'
import {CommentOutlined, ShareAltOutlined, HeartOutlined, PictureOutlined} from '@ant-design/icons'
import { CommentModal } from './CommentModal'
import { useQuery, useMutation} from 'react-query'
import { toComments } from '../../api/commentUrl'

export const CommentArea = () => {
  // 载入网页
  const { isLoading, error, data} = useQuery('comment',
    () => toComments())
  console.log(data);

  let commentList = data
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

  const detailContent = () => {
    console.log(" click detailContent");
  }
  if(isLoading) {
    return<div>loading...</div>
  }
  if (error) return 'An error has occurred: ' + error.message
  return (
    <>
      {
        commentList.map((comments, index) => {
          return(
            <div className='boxCA' key={index}>
              {/* 头像部分 */}
              <div className='leftCA'>
                <img className='img'></img>
              </div>
              {/* content内容部分 */}
              <div className='rightCA'>
                {/* 用户名部分 */}
                <div className='one' >{comments.userTitle}</div>
                {/* 用户评论部分 */}
                <div className='two' onClick={detailContent}>{comments.text}</div>
                {/* 用户上传图片部分 */}
                <div className='three' onClick={detailContent}>
                  <img src={avator} className='img' ></img>
                </div>
                {/* 评论、分享、收藏部分 */}
                <div className='four'>
                  <span onClick={commentBtn}><CommentOutlined />{comments.commentNum}</span>
                  <span onClick={shareBtn}><ShareAltOutlined />{comments.shareNum}</span>
                  <span onClick={heartBtn}><HeartOutlined />{comments.heartNum}</span>
                </div>
              </div>
              {/* 评论模态框 */}
              <CommentModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} num={num}/>
            </div>
          )})
      }
    </>
    
    
  )
}
