import React from 'react';
import { Smile, Meh, Frown, Zap, AlertCircle } from 'lucide-react';

interface MoodSelectorProps {
  selectedMood: string;
  onMoodChange: (mood: string) => void;
}

const moods = [
  { value: 'happy', icon: Smile, color: 'text-green-500', bg: 'bg-green-100', label: 'Happy' },
  { value: 'excited', icon: Zap, color: 'text-yellow-500', bg: 'bg-yellow-100', label: 'Excited' },
  { value: 'neutral', icon: Meh, color: 'text-gray-500', bg: 'bg-gray-100', label: 'Neutral' },
  { value: 'anxious', icon: AlertCircle, color: 'text-orange-500', bg: 'bg-orange-100', label: 'Anxious' },
  { value: 'sad', icon: Frown, color: 'text-blue-500', bg: 'bg-blue-100', label: 'Sad' },
];

export function MoodSelector({ selectedMood, onMoodChange }: MoodSelectorProps) {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700">How are you feeling?</label>
      <div className="flex gap-2">
        {moods.map(({ value, icon: Icon, color, bg, label }) => (
          <button
            key={value}
            type="button"
            onClick={() => onMoodChange(value)}
            className={`p-3 rounded-xl border-2 transition-all duration-200 hover:scale-105 ${
              selectedMood === value
                ? `${bg} border-current ${color} shadow-md`
                : 'bg-white border-gray-200 text-gray-400 hover:border-gray-300'
            }`}
            title={label}
          >
            <Icon size={20} />
          </button>
        ))}
      </div>
    </div>
  );
}