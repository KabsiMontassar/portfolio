import { FiMail, FiPhone } from 'react-icons/fi'
import { RiMapPinLine } from 'react-icons/ri'
const contactMethods = [
    {
        icon: FiMail,
        title: 'Email',
        value: 'kebsimontassar@gmail.com',
        action: 'kebsimontassar@gmail.com'
    },
    {
        icon: FiPhone,
        title: 'Phone',
        value: '+216 281 153 435',
        action: '+216 281 153 435'
    },
    {
        icon: RiMapPinLine,
        title: 'Location',
        value: 'Ariana, Tunisia',
        action: 'https://www.google.com/maps/place/Ariana/@36.8689196,10.1291603,13z/data=!3m1!4b1!4m6!3m5!1s0x12e2cb4e31471bf3:0x65bc5efbce842198!8m2!3d36.8665367!4d10.1647233!16zL20vMGI0Znh0?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D'
    }
]



const data = {
    contactTitle: 'Get in Touch',
    getInTouch: 'Have a question or want to work together? Feel free to reach out!',
    letsConnect: "Let's Connect",
    connectDescription: 'Have a project in mind or want to discuss potential opportunities? Reach out through any of these channels.',
    followMe: 'Follow me',

    emailTitle: 'Email',
    phoneTitle: 'Phone',
    locationTitle: 'Location',

    nameLabel: 'Your Name',
    namePlaceholder: 'John Doe',
    emailLabel: 'Email Address',
    emailPlaceholder: 'john@example.com',
    subjectLabel: 'Subject',
    subjectPlaceholder: 'Project Inquiry',
    messageLabel: 'Message',
    messagePlaceholder: 'Tell me about your project...',
    sendButton: 'Send Message',

    messageSent: 'Message Sent',
    thankYou: 'Thank you for your message. I will get back to you soon!',
    contactMethods

}


export default data