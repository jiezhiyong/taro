import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { taroStorage } from '@/utils/taroStorage';

export interface UserProfile {
  nickname: string;
  themeColor: string;
  tags: string[];
}

interface UserState {
  profile: UserProfile;
  updateNickname: (nickname: string) => void;
  updateThemeColor: (color: string) => void;
  addTag: (tag: string) => void;
  removeTag: (tag: string) => void;
  resetProfile: () => void;
}

const initialProfile: UserProfile = {
  nickname: 'Taro Showcase',
  themeColor: 'var(--primary)',
  tags: ['Taro', 'React', 'Zustand', 'mini-program'],
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      profile: { ...initialProfile },
      updateNickname: (nickname) =>
        set((state) => ({
          profile: { ...state.profile, nickname },
        })),
      updateThemeColor: (themeColor) =>
        set((state) => ({
          profile: { ...state.profile, themeColor },
        })),
      addTag: (tag) =>
        set((state) => {
          if (state.profile.tags.includes(tag)) return {};
          return {
            profile: {
              ...state.profile,
              tags: [...state.profile.tags, tag],
            },
          };
        }),
      removeTag: (tag) =>
        set((state) => ({
          profile: {
            ...state.profile,
            tags: state.profile.tags.filter((t) => t !== tag),
          },
        })),
      resetProfile: () => set({ profile: { ...initialProfile } }),
    }),
    {
      name: 'taro-user-store',
      storage: createJSONStorage(() => taroStorage),
    },
  ),
);
