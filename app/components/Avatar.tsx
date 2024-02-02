'use client'

import { IoPersonSharp } from "react-icons/io5";

const Avatar = () => {
  return (
    <div className="rounded-full border-1 border-gray-300">
      <div className="bg-gray-300 rounded-full p-1">
        <IoPersonSharp size={25} color="#fff"/>
      </div>
    </div>

  )
}

export default Avatar
