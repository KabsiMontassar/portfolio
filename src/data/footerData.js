import { useTranslation } from 'react-i18next';

const useFooterData = () => {
    const { t } = useTranslation();

    const navlinks = [
        { name: t('footer.nav.about'), path: '/portfolio/about' },
        { name: t('footer.nav.experience'), path: '/portfolio/experience' },
        { name: t('footer.nav.projects'), path: '/portfolio/projects' },
        { name: t('footer.nav.contact'), path: '/portfolio/contact' }
    ];

    const data = {
        navlinks,
        copyright: t('footer.copyright'),
        builtWith: t('footer.builtWith')
    };

    return data;
};

export { useFooterData };