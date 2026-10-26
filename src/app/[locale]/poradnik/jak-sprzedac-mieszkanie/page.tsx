import GuidePage, { guideMetadata } from '@/components/marketing/GuidePage';

type Props = { params: Promise<{ locale: string }> };
const HREF = '/poradnik/jak-sprzedac-mieszkanie' as const;

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return guideMetadata(HREF, locale);
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  return <GuidePage href={HREF} locale={locale} />;
}
