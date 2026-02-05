import { MetadataRoute } from 'next';
import { lessons } from '@/data/lessons';
import { challenges } from '@/data/challenges';
import { exercises } from '@/data/exercises';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://learnfs.vercel.app';

  // Static pages
  const staticPages = [
    '',
    '/curriculum',
    '/practice',
    '/challenges',
    '/dashboard',
    '/premium',
    '/about',
    '/contact',
    '/terms',
    '/privacy',
    '/auth/login',
    '/auth/register',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Lesson pages
  const lessonPages = lessons.map((lesson) => ({
    url: `${baseUrl}/lesson/${lesson.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Challenge pages
  const challengePages = challenges.map((challenge) => ({
    url: `${baseUrl}/challenges/${challenge.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Exercise pages
  const exercisePages = exercises.map((exercise) => ({
    url: `${baseUrl}/practice/${exercise.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...lessonPages, ...challengePages, ...exercisePages];
}
