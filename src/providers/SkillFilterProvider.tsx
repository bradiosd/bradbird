import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SkillFilterContextType {
  selectedSkills: string[];
  setSelectedSkills: (skills: string[]) => void;
  toggleSkill: (skill: string) => void;
  clearSkills: () => void;
  isSkillSelected: (skill: string) => boolean;
}

const SkillFilterContext = createContext<SkillFilterContextType | undefined>(undefined);

export const useSkillFilter = (): SkillFilterContextType => {
  const context = useContext(SkillFilterContext);
  if (!context) {
    throw new Error('useSkillFilter must be used within a SkillFilterProvider');
  }
  return context;
};

interface SkillFilterProviderProps {
  children: ReactNode;
}

export const SkillFilterProvider: React.FC<SkillFilterProviderProps> = ({ children }) => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  // Toggle a skill (add if not present, remove if present)
  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev =>
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  // Clear all selected skills
  const clearSkills = () => {
    setSelectedSkills([]);
  };

  // Check if a skill is selected
  const isSkillSelected = (skill: string) => {
    return selectedSkills.includes(skill);
  };

  return (
    <SkillFilterContext.Provider value={{
      selectedSkills,
      setSelectedSkills,
      toggleSkill,
      clearSkills,
      isSkillSelected
    }}>
      {children}
    </SkillFilterContext.Provider>
  );
}; 