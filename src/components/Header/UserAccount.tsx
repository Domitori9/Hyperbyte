import React from 'react';

interface UserAccountProps {
  username: string;
  avatarUrl?: string;
}

 
export default function UserAccount({ username, avatarUrl }: UserAccountProps) {
  return (
    <div className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-500/40 transition-colors duration-200 cursor-pointer">
      <div className="relative">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={username}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white font-semibold text-lg">
              {username.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
      </div>
      <div className="flex flex-col">
        <span className="font-medium text-white">{username}</span>
        <span className="text-sm text-gray-500">Online</span>
      </div>
    </div>
  );
}


