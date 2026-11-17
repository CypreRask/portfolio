import { useCallback, useEffect, useState } from 'react';
import type { CaseSlug, Lang } from '@/data/vitrineData';

const VALID_CASES: CaseSlug[] = ['noepora', 'humuscope', 'insect-vision'];

function readInitialLang(): Lang {
  if (typeof window === 'undefined') return 'fr';
  const urlLang = new URLSearchParams(window.location.search).get('lang');
  if (urlLang === 'fr' || urlLang === 'en') return urlLang;
  const stored = localStorage.getItem('portfolio.lang');
  if (stored === 'fr' || stored === 'en') return stored;
  return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'fr';
}

function readCaseFromLocation(): CaseSlug | null {
  if (typeof window === 'undefined') return null;
  const param = new URLSearchParams(window.location.search).get('case');
  if (param && VALID_CASES.includes(param as CaseSlug)) {
    return param as CaseSlug;
  }
  const hash = window.location.hash.replace(/^#\/?/, '');
  if (hash.startsWith('case/')) {
    const slug = hash.slice(5);
    if (VALID_CASES.includes(slug as CaseSlug)) return slug as CaseSlug;
  }
  return null;
}

export function usePortfolioState() {
  const [lang, setLangState] = useState<Lang>(readInitialLang);
  const [activeCase, setActiveCaseState] = useState<CaseSlug | null>(readCaseFromLocation);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'dark';
    const stored = localStorage.getItem('portfolio.theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem('portfolio.lang', lang);
  }, [lang]);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
    localStorage.setItem('portfolio.theme', theme);
  }, [theme]);

  useEffect(() => {
    const onPopState = () => {
      setActiveCaseState(readCaseFromLocation());
      const urlLang = new URLSearchParams(window.location.search).get('lang');
      if (urlLang === 'fr' || urlLang === 'en') setLangState(urlLang);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const syncUrl = useCallback((nextLang: Lang, nextCase: CaseSlug | null) => {
    const url = new URL(window.location.href);
    url.searchParams.set('lang', nextLang);
    if (nextCase) {
      url.searchParams.set('case', nextCase);
    } else {
      url.searchParams.delete('case');
    }
    if (url.hash.startsWith('#case/')) {
      url.hash = '';
    }
    window.history.pushState({}, '', url.toString());
  }, []);

  const setLang = useCallback(
    (nextLang: Lang) => {
      setLangState(nextLang);
      syncUrl(nextLang, activeCase);
    },
    [activeCase, syncUrl]
  );

  const openCase = useCallback(
    (slug: CaseSlug) => {
      setActiveCaseState(slug);
      syncUrl(lang, slug);
      window.scrollTo({ top: 0, behavior: 'auto' });
    },
    [lang, syncUrl]
  );

  const closeCase = useCallback(() => {
    setActiveCaseState(null);
    syncUrl(lang, null);
  }, [lang, syncUrl]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  return {
    lang,
    setLang,
    activeCase,
    openCase,
    closeCase,
    theme,
    toggleTheme,
  };
}
