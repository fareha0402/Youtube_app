import React from 'react'
import Comment from './Comment'

const CommentsContainer = () => {
    const commentsData =[{
        name:'Fareha',
        text:'Comments section dummy text',
        replies:[]
    },
    {
        name:'Fareha',
        text:'Comments section dummy text',
        replies:[{
            name:'Fareha',
            text:'Comments section dummy text',
            replies:[]
        },
        {
            name:'Fareha',
            text:'Comments section dummy text',
            replies:[]
        },
        {
            name:'Fareha',
            text:'Comments section dummy text',
            replies:[]
        }]
    },
    {
        name:'Fareha',
        text:'Comments section dummy text',
        replies:[]
    },
    {
        name:'Fareha',
        text:'Comments section dummy text',
        replies:[{
            name:'Fareha',
            text:'Comments section dummy text',
            replies:[]
        },
        {
            name:'Fareha',
            text:'Comments section dummy text',
            replies:[]
        }]
    },
    {
        name:'Fareha',
        text:'Comments section dummy text',
        replies:[]
    }]
    const CommentList = ({comments}) =>{
        return (
            comments.map((comment,index)=>
            <div key={index}>
            <Comment  data={comment}></Comment>
            <div className='pl-5 border-l-black ml-5'>
                <Comment  data={comment.replies}></Comment>
            </div>
            </div>
        )
        )
    }
  return (
    <div className='m-3 p-4'><h1>Comments</h1>
    <CommentList comments={commentsData}></CommentList>
    </div>
  )
}

export default CommentsContainer