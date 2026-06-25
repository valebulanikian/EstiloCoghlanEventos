import GoogleAnalytics from '@/components/common/GoogleAnalytics';

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GoogleAnalytics />
      {children}
    </>
  );
}