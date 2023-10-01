export function calculateReadTime(articleText: string): number {
  if (!articleText) return 0;

  const wordsArray = articleText.split(" ");
  const wordCount = wordsArray.length;

  const wordsPerMinute = 200;
  return Math.ceil(wordCount / wordsPerMinute);
}
