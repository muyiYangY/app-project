import React, { useState } from 'react'
import { Modal, Upload, Input } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import avator from '../../images/avator.jpg'

const { TextArea} = Input;

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export const CommentModal = ({isModalOpen, setIsModalOpen, num}) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([])
  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none',
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
  // textArea
  const [textArea, setTextArea] = useState('')
  const handleTextArea = (e) => {
    setTextArea(e.target.value)
    console.log(e.target.value);
  }

  const textinput = num < 1 ? '发布你的回复' : '有什么新鲜事'
  const text = '余家贫，耕植不足以自给。幼稚盈室，瓶无储粟，生生所资，未见其术'
  const handleOk = () => {
      setIsModalOpen(false)
    }
    const handleCancell = () => {
      setIsModalOpen(false)
    }
  return (
    
    <Modal title="评论" open={isModalOpen} onOk={handleOk} onCancel={handleCancell}>
          <div className='boxM'>
            <div className='leftM'>
              <img src={avator} className='img'></img>
              {/* <div className='upImg'><PictureOutlined /></div> */}
            </div>
            <div className='rightM'>
              <div className='one'>
                <TextArea rows={4} placeholder={textinput} onChange={handleTextArea}/>
              </div>
              <div className='two'>
                <Upload
                  action="url"
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={handlePreview}
                  onChange={handleChange}
                >
                  {fileList.length >= 8 ? null : uploadButton}
                </Upload>
                  <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                    <img
                      alt="example"
                      style={{
                        width: '100%',
                      }}
                      src={previewImage}
                    />
                  </Modal>
              </div>
            </div>
          </div>


    </Modal>
    
  )
}
