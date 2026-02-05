'use client';

import { useState, useEffect, useRef } from 'react';

interface LivePreviewProps {
  html: string;
  css: string;
  javascript?: string;
  height?: string;
}

export default function LivePreview({ html, css, javascript = '', height = '300px' }: LivePreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!iframeRef.current) return;

    const document = iframeRef.current.contentDocument;
    if (!document) return;

    setError(null);

    const content = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
      padding: 16px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    ${css}
  </style>
</head>
<body>
  ${html}
  <script>
    try {
      ${javascript}
    } catch (e) {
      console.error('Preview error:', e);
    }
  </script>
</body>
</html>
    `;

    try {
      document.open();
      document.write(content);
      document.close();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Preview error');
    }
  }, [html, css, javascript]);

  return (
    <div className="live-preview-container rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          Live Preview
        </span>
      </div>
      {error ? (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm">
          Error: {error}
        </div>
      ) : (
        <iframe
          ref={iframeRef}
          title="Live Preview"
          className="w-full bg-white"
          style={{ height }}
          sandbox="allow-scripts"
        />
      )}
    </div>
  );
}
