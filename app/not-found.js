'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '24px',
    }}>
      <h1 style={{
        fontSize: 'clamp(4rem, 10vw, 7rem)',
        fontWeight: 800,
        lineHeight: 1,
        margin: '0 0 16px',
        color: '#111',
      }}>
        404
      </h1>
      <p style={{
        fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
        color: '#555',
        margin: '0 0 32px',
        maxWidth: '480px',
      }}>
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Link
        href="/"
        style={{
          display: 'inline-block',
          padding: '12px 24px',
          backgroundColor: '#000',
          color: '#fff',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '14px',
        }}
      >
        Go back home
      </Link>
    </div>
  );
}