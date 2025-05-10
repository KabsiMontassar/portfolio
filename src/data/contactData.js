import { FiMail, FiPhone } from 'react-icons/fi'
import { RiMapPinLine } from 'react-icons/ri'
import { useTranslation } from 'react-i18next'

const useContactData = () => {
    const { t } = useTranslation();

    const contactMethods = [
        {
            icon: FiMail,
            title: t('contact.email'),
            value: 'kebsimontassar@gmail.com',
            action: 'kebsimontassar@gmail.com'
        },
        {
            icon: FiPhone,
            title: t('contact.phone'),
            value: '+216 281 153 435',
            action: '+216 281 153 435'
        },
        {
            icon: RiMapPinLine,
            title: t('contact.location'),
            value: 'Ariana, Tunisia',
            action: 'https://www.google.com/maps/place/Ariana'
        }
    ]

    const data = {
        contactTitle: t('contact.title'),
        getInTouch: t('contact.getInTouch'),
        letsConnect: t('contact.letsConnect'),
        connectDescription: t('contact.connectDescription'),
        followMe: t('contact.followMe'),
        emailTitle: t('contact.email'),
        phoneTitle: t('contact.phone'),
        locationTitle: t('contact.location'),
        nameLabel: t('contact.nameLabel'),
        namePlaceholder: t('contact.namePlaceholder'),
        emailLabel: t('contact.emailLabel'),
        emailPlaceholder: t('contact.emailPlaceholder'),
        subjectLabel: t('contact.subjectLabel'),
        subjectPlaceholder: t('contact.subjectPlaceholder'),
        messageLabel: t('contact.messageLabel'),
        messagePlaceholder: t('contact.messagePlaceholder'),
        sendButton: t('contact.sendButton'),
        messageSent: t('contact.messageSent'),
        thankYou: t('contact.thankYou'),
        contactMethods
    }

    return data;
}

export default useContactData;