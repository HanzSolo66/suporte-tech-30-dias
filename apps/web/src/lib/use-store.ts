'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
  xp: number;
  level: number;
  streak: number;
  completedLessons: string[];
  badges: string[];
  lastStudyDate: string | null;
  
  addXP: (amount: number) => void;
  completeLesson: (lessonId: string) => void;
  addBadge: (badgeId: string) => void;
  updateStreak: () => void;
  resetProgress: () => void;
}

export const useStore = create<UserState>()(
  persist(
    (set, get) => ({
      xp: 0,
      level: 1,
      streak: 0,
      completedLessons: [],
      badges: [],
      lastStudyDate: null,

      addXP: (amount) => {
        const newXP = get().xp + amount;
        const newLevel = Math.floor(newXP / 100) + 1;
        set({ xp: newXP, level: newLevel });
      },

      completeLesson: (lessonId) => {
        const { completedLessons } = get();
        if (!completedLessons.includes(lessonId)) {
          set({ completedLessons: [...completedLessons, lessonId] });
          get().addXP(20); // 20 XP por aula concluída
        }
      },

      addBadge: (badgeId) => {
        const { badges } = get();
        if (!badges.includes(badgeId)) {
          set({ badges: [...badges, badgeId] });
        }
      },

      updateStreak: () => {
        const today = new Date().toISOString().split('T')[0];
        const lastDate = get().lastStudyDate;

        if (lastDate === today) return;

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];

        if (lastDate === yesterdayStr) {
          set({ streak: get().streak + 1, lastStudyDate: today });
        } else {
          set({ streak: 1, lastStudyDate: today });
        }
      },

      resetProgress: () => {
        set({
          xp: 0,
          level: 1,
          streak: 0,
          completedLessons: [],
          badges: [],
          lastStudyDate: null,
        });
      },
    }),
    {
      name: 'suporte-tech-storage',
    }
  )
);
