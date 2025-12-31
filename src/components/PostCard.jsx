import React from 'react'
import appwriteService from '../appwrite/config'
import {Link} from 'react-router-dom'

function PostCard({post}) {
  const {$id, title, featuredImage} = post;
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
          {/* {console.log(appwriteService.getFilePreview(featuredImage))} */}
            {/* <div className='w-full justify-center mb-4'>
                {featuredImage && 
                  <img 
                    src={appwriteService.getFilePreview(featuredImage)} 
                    alt={title} 
                    className='rounded-xl' />
                }
            </div> */}
            <h1
            className='text-xl font-bold'
            >{title}</h1>
        </div>
    </Link>
  )
}

export default PostCard