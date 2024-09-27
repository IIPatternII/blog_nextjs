import Layout from '../components/Layout';
import BasicMeta from '../components/meta/BasicMeta';
import OpenGraphMeta from '../components/meta/OpenGraphMeta';
import TwitterCardMeta from '../components/meta/TwitterCardMeta';
import { SocialList } from '../components/SocialList';

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={'/'} />
      <OpenGraphMeta url={'/'} />
      <TwitterCardMeta />
      <div className='container flex justify-center items-center px-6'>
        <div className='max-w-md'>
          <h1 className='md:text-5xl'>Hi, I'm Robertino Martinez</h1>
          <span className='inline-block mt-1 text-gray-500 font-ubuntuMono'>
            @_roberm_
          </span>
          <h2 className='before:hidden md:text-4xl'>
            Engineer and founder
          </h2>
          <SocialList />
        </div>
      </div>
    </Layout>
  );
}
