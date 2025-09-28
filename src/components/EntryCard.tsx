import React from 'react';
import { Smile, Meh, Frown, Zap, AlertCircle } from 'lucide-react';
import { JournalEntry } from '../types';
import { formatDate, getPreview } from '../utils/dateUtils';

interface EntryCardProps {
  entry: JournalEntry;
  onClick: (entry: JournalEntry) => void;
}

const moodIcons = {
  happy: { icon: Smile, color: 'text-green-500', bg: 'bg-green-50' },
  excited: { icon: Zap, color: 'text-yellow-500', bg: 'bg-yellow-50' },
  neutral: { icon: Meh, color: 'text-gray-500', bg: 'bg-gray-50' },
  anxious: { icon: AlertCircle, color: 'text-orange-500', bg: 'bg-orange-50' },
  sad: { icon: Frown, color: 'text-blue-500', bg: 'bg-blue-50' },
};

export function EntryCard({ entry, onClick }: EntryCardProps) {
  const moodData = entry.mood ? moodIcons[entry.mood as keyof typeof moodIcons] : null;
  const MoodIcon = moodData?.icon;

  return (
    <div
      onClick={() => onClick(entry)}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-200 flex-1 mr-3">
          {entry.title}
        </h3>
        {MoodIcon && (
          <div className={`p-2 rounded-full ${moodData.bg} flex-shrink-0`}>
            <MoodIcon size={16} className={moodData.color} />
          </div>
        )}
      </div>
      <p className="text-sm text-gray-500 mb-4 font-medium">{formatDate(entry.date)}</p>
      <p className="text-gray-600 leading-relaxed line-clamp-3">{getPreview(entry.content, 120)}</p>
    </div>
  );
}