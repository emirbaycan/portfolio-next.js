import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import i18nextConfig from '../../../next-i18next.config'

export const getI18nPaths = () =>
  i18nextConfig.i18n.locales.map((lng) => ({
    params: {
      locale: lng
    }
  }))

export const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths()
})

export async function getI18nProps(ctx, ns = ['common']) {
  const locale = ctx?.params?.locale
  let props = {
    ...(await serverSideTranslations(locale, ns, null, ['en', 'tr']))
  }
  return props
}

export function makeStaticProps(ns = {}) {
  return async function getStaticProps(ctx) {
    return {
      props: await getI18nProps(ctx, ns)
    }
  }
}