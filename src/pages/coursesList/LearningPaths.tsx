// LearningPathsTabs.tsx
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

import { Utensils, Activity, Heart } from 'lucide-react';
import { LearningPathKey, LearningPathsMap } from '@/types/CoursesType';
import CoursesGrid from './CourseGrid';

interface LearningPathsTabsProps {
  selectedPath: LearningPathKey;
  setSelectedPath: (path: LearningPathKey) => void;
  learningPaths: LearningPathsMap;
}

const LearningPathsTabs: React.FC<LearningPathsTabsProps> = ({ selectedPath, setSelectedPath, learningPaths }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50/70 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-gray-800">מסלולי הלמידה שלנו</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            בחר את המסלול המתאים לך והתחל את המסע שלך לבריאות טובה יותר
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs value={selectedPath} onValueChange={setSelectedPath} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg">
              {Object.entries(learningPaths).map(([key, path]) => {
                return (
                  <TabsTrigger
                    key={key}
                    value={key}
                    className="flex items-center gap-3 py-4 px-6 rounded-xl text-base font-semibold transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-400/10 data-[state=active]:to-violet-400/10 data-[state=active]:shadow-md"
                  >
                    {/* <IconComponent className="w-5 h-5" /> */}
                    <span className="hidden sm:inline">{path.title}</span>
                    <span className="sm:hidden">{path.title.split(' ')[1]}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {Object.entries(learningPaths).map(([key, path]) => (
              <TabsContent key={key} value={key} className="animate-fade-in">
                <div className="text-center mb-12">
                  <h3 className="text-4xl font-bold mb-4 text-gray-800">{path.title}</h3>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">{path.description}</p>
                </div>
                <CoursesGrid courses={path.courses} themeColor={path.color} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default LearningPathsTabs;
