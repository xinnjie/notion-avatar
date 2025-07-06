import { useTranslation } from 'next-i18next';

export default function Footer() {
  const { t } = useTranslation(`common`);

  return (
    <footer className="flex flex-col items-center pb-4">
      <div className="text-gray-500 mt-3 px-6 text-center">
        <a
          className="transition hover:underline"
          href="https://github.com/mayandev/notion-avatar"
        >
          Notion Avatar Maker
        </a>{' '}
        originally crafted by{' '}
        <a href="https://dribbble.com/phillzou" className="hover:underline">
          Phill Zou
        </a>
      </div>
      <div className="text-gray-500 mt-3 px-6 text-center">
        <a
          href="https://abstractlab.gumroad.com/l/noto-avatar"
          className="hover:underline"
        >
          &copy;{` ${t(`illustrations`)}`}
        </a>
        {t(`designedBy`)}
        <a href="https://x.com/felix12777" className="hover:underline">
          {` Felix Wong `}
        </a>
        {t(`underDesign`)}
        <a
          className="hover:underline"
          href="https://creativecommons.org/publicdomain/zero/1.0/"
        >
          {` CC0 `}
        </a>
        {t(`license`)}
      </div>
    </footer>
  );
}
