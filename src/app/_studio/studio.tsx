'use client';

import { MODE } from '@/lib/constants';
import {
  ExperienceRoot,
  useFetchBySlug,
} from '@contentful/experiences-sdk-react';
import '@lib/register-components';
import { createClient } from 'contentful';
import { Suspense } from 'react';

type StudioProps = {
  slug: string;
  locale?: string;
  mode: MODE;
};

const client = createClient({
  space: process.env.NEXT_PUBLIC_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN!,
  host: process.env.NEXT_PUBLIC_HOST,
});

const Studio = (props: StudioProps) => {
  const { slug, locale = 'en-US' } = props;

  const { experience, isLoading } = useFetchBySlug({
    client,
    slug,
    localeCode: locale,
    experienceTypeId: 'landingPage',
  });

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <Suspense fallback={<>ERROR!</>}>
      <ExperienceRoot locale={locale} experience={experience} />
    </Suspense>
  );
};

export default Studio;
