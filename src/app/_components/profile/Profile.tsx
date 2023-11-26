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
