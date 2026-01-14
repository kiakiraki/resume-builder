import { defineConfig } from 'astro/config';

// GitHub Pagesにデプロイする場合、リポジトリ名に合わせてbaseを設定
// 例: https://username.github.io/resume-builder/ の場合 base: '/resume-builder/'
// カスタムドメインの場合は base: '/' のままでOK
export default defineConfig({
  output: 'static',
  site: 'https://example.github.io',
  base: '/resume-builder/',
});
