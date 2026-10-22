import MarketingPage, {
  marketingMetadata,
} from '@/components/marketing/MarketingPage';
type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return marketingMetadata(locale, 'sellers');
}
export default async function Page({ params }: Props) {
  const { locale } = await params;
  return <MarketingPage locale={locale} audience="sellers" />;
}
