'use client';

import { useRef, useState } from 'react';

export default function AvatarUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [avatar, setAvatar] = useState('/ava.jpg'); // путь по умолчанию

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setAvatar(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative w-24 h-24">
      <img
        src={avatar}
        alt="Аватарка"
        className="w-full h-full object-cover rounded-full  border-3 border-gray-300"
      />
      <button
        onClick={() => fileInputRef.current?.click()}
        className="absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-600 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-white text-xs"
        title="Изменить"
      >
        ✎
      </button>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}