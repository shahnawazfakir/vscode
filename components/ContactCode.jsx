import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'Website',
    link: 'shahnawazfakirportofolio',
    href: 'https://shahnawazfakir.github.io/',
  },
  {
    social: 'Email',
    link: 'shahnawazfakir@gmail.com',
    href: 'mailto:shahnawazfakir@gmail.com',
  },
  {
    social: 'Github',
    link: 'shahnawazfakir',
    href: 'https://github.com/shahnawazfakir/',
  },
  {
    social: 'LinkedIn',
    link: 'shahnawazfakir',
    href: 'https://www.linkedin.com/in/shahnawazfakir/',
  },
  {
    social: 'Twitter',
    link: 'shahnawazfakir',
    href: 'https://www.twitter.com/shahnawazfakir/',
  },
  {
    social: 'Instagram',
    link: 'shahnawazzx',
    href: 'https://www.instagram.com/shahnawazzx/',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
