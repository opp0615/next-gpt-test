import React from 'react';
import { Chapter } from './types';

interface ChaptersListProps {
  chapters: Chapter[];
}

const ChaptersList: React.FC<ChaptersListProps> = ({ chapters }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {chapters.map((chapter, index) => (
        <div key={index} className="flex items-center bg-white rounded-lg shadow-lg p-4">
          <img src={chapter.thumbnail} alt={chapter.title} className="h-16 w-16 object-cover rounded-lg" />
          <div className="ml-4 flex-1">
            <h3 className="font-medium text-lg">{chapter.title}</h3>
            <p className="text-gray-500 text-sm">{chapter.uploadedDate}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChaptersList;
