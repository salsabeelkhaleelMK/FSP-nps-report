import { lazy } from 'react';

// Lazy load pages for code splitting
export const AIAgentPage = lazy(() => import('./AIAgentPage'));
export const QuestionsPage = lazy(() => import('./QuestionsPage'));

