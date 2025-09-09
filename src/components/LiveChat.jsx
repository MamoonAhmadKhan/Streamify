import React from 'react'
import ChatMessage from './ChatMessage'

const LiveChat = () => {
  return (
    <div className='w-full h-[450px] p-3 font-sans border border-black bg-slate-800 rounded-xl'>
        <h1 className='text-center p-2 bg-gray-700 rounded-2xl shadow'>LiveChat</h1>
        <ChatMessage name={"Mamoon"} message={"We wrap up our YouTube project"} />
        <ChatMessage name={"Mamoon"} message={"We wrap up our YouTube project"} />
        <ChatMessage name={"Mamoon"} message={"We wrap up our YouTube project"} />
        <ChatMessage name={"Mamoon"} message={"We wrap up our YouTube project"} />
                <ChatMessage name={"Mamoon"} message={"We wrap up our YouTube project"} />
        <ChatMessage name={"Mamoon"} message={"We wrap up our YouTube project"} />
        <ChatMessage name={"Mamoon"} message={"We wrap up our YouTube project"} />
        <ChatMessage name={"Mamoon"} message={"We wrap up our YouTube project"} />
        
    </div>
  )
}

export default LiveChat