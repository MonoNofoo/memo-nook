import { FC } from 'react';
import Image from 'next/image';
import profileImage from '@public/images/my-icon.png';
import * as styles from '@src/app/_components/profile/Profile.css';

const Profile: FC = () => {
  return (
    <div className={styles.container}>
      <span className={styles.tape} />
      <div className={styles.showcaseWrap}>
        <div className={styles.showcase}>
          <Image
            src={profileImage}
            alt="プロフィール画像"
            className={styles.image}
          />
          <dl className={styles.list}>
            <dt className={styles.listTitle}>なまえ</dt>
            <dd className={styles.listData}>Mono Nofoo</dd>
            <dt className={styles.listTitle}>
              <svg
                width="12"
                viewBox="0 0 1200 1227"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                  fill="black"
                />
              </svg>
            </dt>
            <dd className={styles.listData}>
              <a href="https://twitter.com/mono_nofoo" target="_blank">
                @mono_nofoo
              </a>
            </dd>
            <dt className={styles.listTitle}>プロフィール</dt>
            <dd className={styles.listData}>
              フロントエンドエンジニア。Next.js 書いてます。
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Profile;
