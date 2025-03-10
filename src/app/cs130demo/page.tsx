import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CS130 Demo Redirect',
  description: 'Redirecting to YouTube video',
};

export default function CS130Demo() {
  redirect('https://youtu.be/XCFekDKuju0?feature=shared');
  
  // This won't be rendered, but is needed for TypeScript
  return null;
} 