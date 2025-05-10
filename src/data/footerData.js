import { useTranslation } from 'react-i18next';

const useFooterData = () => {
    const { t } = useTranslation();

    const navlinks = [
        { name: t('footer.nav.about'), path: '/about' },
        { name: t('footer.nav.experience'), path: '/experience' },
        { name: t('footer.nav.projects'), path: '/projects' },
        { name: t('footer.nav.contact'), path: '/contact' }
    ];

    const data = {
        navlinks,
        copyright: t('footer.copyright'),
        builtWith: t('footer.builtWith')
    };

    return data;
};

export { useFooterData };