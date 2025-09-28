import React from 'react';
import { ArrowLeft, Smile, Meh, Frown, Zap, AlertCircle } from 'lucide-react';
import { JournalEntry } from '../types';
import { formatDate } from '../utils/dateUtils';

interface EntryViewProps {
  entry: JournalEntry;
  onBack: () => void;
}

const moodIcons = {
  happy: { icon: Smile, color: 'text-green-500', bg: 'bg-green-50', label: 'Happy' },
  excited: { icon: Zap, color: 'text-yellow-500', bg: 'bg-yellow-50', label: 'Excited' },
  neutral: { icon: Meh, color: 'text-gray-500', bg: 'bg-gray-50', label: 'Neutral' },
  anxious: { icon: AlertCircle, color: 'text-orange-500', bg: 'bg-orange-50', label: 'Anxious' },
  sad: { icon: Frown, color: 'text-blue-500', bg: 'bg-blue-50', label: 'Sad' },
};

export function EntryView({ entry, onBack }: EntryViewProps) {
  const moodData = entry.mood ? moodIcons[entry.mood as keyof typeof moodIcons] : null;
  const MoodIcon = moodData?.icon;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 mb-8 text-sm font-medium transition-colors duration-200 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
          Back to entries
        </button>
        
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <h1 className="text-4xl font-light text-gray-800 mb-4 leading-tight">{entry.title}</h1>
            <p className="text-gray-500 font-medium">{formatDate(entry.date)}</p>
          </div>
          {MoodIcon && (
            <div className={`p-4 rounded-2xl ${moodData.bg} ml-6`}>
              <MoodIcon size={24} className={moodData.color} />
            </div>
          )}
        </div>
        
        {moodData && (
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700">
              Feeling {moodData.label.toLowerCase()}
            </span>
          </div>
        )}
        
        <div className="prose prose-lg prose-gray max-w-none">
          <div className="text-gray-700 leading-relaxed whitespace-pre-wrap text-lg">
            {entry.content}
          </div>
        </div>
      </div>
    </div>
  );
}