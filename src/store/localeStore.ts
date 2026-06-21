import { create } from 'zustand';

type LocaleType = 'zh-CN' | 'en-US';

interface LocaleState {
  locale: LocaleType;
  setLocale: (locale: LocaleType) => void;
  toggleLocale: () => void;
}

export const useLocaleStore = create<LocaleState>((set) => ({
  locale: 'zh-CN',
  setLocale: (locale) => set({ locale }),
  toggleLocale: () =>
    set((state) => ({
      locale: state.locale === 'zh-CN' ? 'en-US' : 'zh-CN',
    })),
}));
