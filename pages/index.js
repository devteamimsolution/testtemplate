
  import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import { IconContext } from 'react-icons';
import {
  FaUser,
  FaSignInAlt,
  FaHome,
  FaGift,
  FaTrophy,
  FaUsers,
  FaPlay,
  FaLine,
  FaDiceSix,
  FaUserFriends,
  FaPlayCircle
} from 'react-icons/fa';
import { request } from '../lib/datocms';
import useWindowDimensions from '../hook/viewPoint';
import { useState, useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperCore, { Autoplay } from 'swiper';
import { data } from 'autoprefixer';

SwiperCore.use([Autoplay]);

export async function getStaticProps( locale ) {
  const data = await cmsHook(locale);
  const dataCMS = data.index
  console.log("dataCMS: ", dataCMS);
  return {
    props: {
      dataCMS
    },
    revalidate: 10,
  };
}

const cmsHook = async() => {
  const data = request({
    query: `query MyQuery {
      index {
        title
        metaData
        logo {
          width
          height
          url
          title
          alt
        }
        swiper {
          title
          url
          width
          height
          alt
        }
        promotionswiper {
          title
          url
          width
          alt
          height
        }
      }
    }`,
  });
  return data
}

const WrapperNavbar = styled.div`
  background-color: #181818;
  padding: 2% 10% 1% 10%;

  @media (max-width: 768px) {
    padding: 2% 2% 1% 2%;
  }
`;

const pulse = keyframes`
  0% {
		transform: scale(1);
	}

	50% {
		transform: scale(1.2);
	}

	100% {
		transform: scale(1);
	}
`;

const WrapperLeftTop = styled.div`
  animation-name: ${pulse};
  animation-duration: 2s;
  animation-iteration-count: infinite;

  @media (max-width: 768px) {
    display: none;
  }
`;

const TextAnimation = styled.h1`
  text-align: center;
  color: #FF5200;
  font-size: 2vw;
  animation-name: ${pulse};
  animation-duration: 1s;
  animation-iteration-count: infinite;

  @media (max-width: 768px) {
    display: none;
  }
`;

const LeftTopNavText = styled.div`
  background: linear-gradient(to right, yellow 0%, red 50%, red 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.5vw;
  white-space: nowrap;
`;

const LeftTopNavBottom = styled.div`
  font-size: 0.9vw;
  white-space: nowrap;
`;

const WrapperLogo = styled.div`
  width: 40%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 50%;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;

const WrapperBtn = styled.div`
  @media (max-width: 768px) {
    margin-top: 10%;
  }
`;

const BlueBtn = styled.button`
  background-color: #017BFF;
  font-size: 1.2vw;
  padding: 5px 10px;
  width: 100%;
  white-space: nowrap;
  border: transparent;
  border-radius: 0.2rem;
  margin-right: 15px;
  font-weight: 100 !important;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const RedBtn = styled.button`
  background-color: #C90E03;
  font-size: 1.2vw;
  padding: 5px 10px;
  width: 100%;
  white-space: nowrap;
  border: transparent;
  border-radius: 0.2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const WrapperTools = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const BlankBtn = styled.button`
  background-color: transparent;
  border: transparent;
  font-size: 1.2vw;
  margin-right: 10px;
  white-space: nowrap;
  width: 7vw;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 10px;
    margin-right: 25px;
  }

  @media (max-width: 500px) {
    margin-right: 40px;
  }
`;

const Body = styled.div`
  padding: 5% 5% 0 5%;

  @media (max-width: 768px) {
    padding: 5% 0% 0 0%;
  }
`;

const WrapperSwipper = styled.div`
  padding: 0 5%;

  @media (max-width: 768px) {
    padding: 1%;
  }
`;

const SwipperImage = styled.div`
  text-align: center;
  margin: 0 auto;
`;

const SwipperImageSub = styled.div`
  text-align: center;
  margin: 0 auto;
  /* width: 70%; */
`;

const WrapperContent = styled.div`
  color: #000 !important;
  padding: 0 5%;

  @media (max-width: 768px) {
    padding: 1%;
  }
`;

const Content = styled.div`
  background-color: #fff;
  border-radius: 1rem 1rem 0rem 0rem;
`;

const InnerContent = styled.div`
  padding: 3% 3%;
`;

const WelcomeText = styled.div`
  font-family: 'NotoSansThai-Thin';
  font-size: 1vw;

  b {
    color: #FF5200;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const WrapperNavigationBtn = styled.div`
  cursor: pointer;
  text-align: center;
  position: relative;
`;

const MiddleText = styled.div`
  font-family: 'NotoSansThai-Thin';
  padding: 4%;
  color: #fff;
  background: rgb(0,0,0);
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(128,97,56,1) 50%, rgba(0,0,0,1) 100%);
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const WrapperBanner = styled.div`
  padding: 3%;
  background: rgb(143,143,143);
  background: linear-gradient(180deg, rgba(143,143,143,1) 0%, rgba(143,143,143,1) 50%, rgba(0,0,0,1) 100%);
`;

const Card = styled.div`
  border-color: #908E99;

  h3 {
    color: #fff;
    text-align: center;
    margin: 0;
    padding: 4%;
  }
`;

const CardTitle = styled.div`
  background-color: #000;
`;

const InnerBannerText = styled.div`
  background-color: #fff;
  height: 150px;
  overflow: hidden;
  overflow: scroll;
  padding: 2%;
  text-align: center;
  font-family: 'NotoSansThai-Thin';

  p {
    margin: 0;
    padding: 0;
  }
`;

const Banner = styled.div`
  width: 100%;
  background-color: #000;
`;

const WrapperBtnBanner = styled.div`
  background-color: transparent;
`;

const BannerBtn = styled.button`
  padding: 5%;
  background: #000;
  background: linear-gradient(30deg, rgba(0,0,0,1) 0%, rgba(171,164,59,1) 50%, rgba(0,0,0,1) 100%);
  width: 100%;
  border: transparent;
  cursor: pointer;

  &:hover {
    background: rgb(255,183,15);
    background: linear-gradient(30deg, rgba(255,183,15,1) 0%, rgba(255,45,4,1) 50%, rgba(0,0,0,1) 100%);
  }
`;

const WrapperProvider = styled.div`
  text-align: center;
`;

const FooterText = styled.div`
  font-family: 'NotoSansThai-Thin';
  color: #fff;
  text-align: center;

  span {
    color: #027BFF;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
  }
  }
`;

const CopyRight = styled.div`
  color: #fff;
  text-align: center;
  font-family: 'NotoSansThai-Thin';
`;

const Navigator = styled.div`
  position: sticky;
  bottom: 0;
  background-color: #181818;
  padding: 1% 10%;
  margin: 0 auto;
  font-family: 'NotoSansThai-Thin';

  div {
    color: #FF9900;
  }
`;

const WrapperPlay = styled.div`
  position: relative;
`;

const PlayBtn = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

export default function Home({ dataCMS }) {
  const { displayWidth } = useWindowDimensions();

  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(displayWidth)
  },[displayWidth])

  const takeRegis = () => {
    window.location.href = 'https://ambkub168.autosv.cloud/user/register';
  }

  const takeLogin = () => {
    window.location.href = 'https://ambkub168.autosv.cloud/user/login';
  }

  const lineConnect = () => {
    window.location.href = 'https://line.me/R/ti/p/@286qwbps';
  }
  return (
    <>
      <Head>
        <title>
          { dataCMS.title }
        </title>
        <meta
          name="description"
          content={dataCMS.metaData}
          key="desc"
        />
      </Head>
      <WrapperNavbar>
        <div className='flex justify-between'>
          <WrapperLeftTop>
            <LeftTopNavText>ศูนย์รวมเดิมพันครบวงจร</LeftTopNavText>
            <LeftTopNavBottom>มีเกมส์เดิมพันให้เลือกเล่นมากกว่า 40 ค่าย</LeftTopNavBottom>
          </WrapperLeftTop>
          <div>
            <WrapperLogo>
              <Image
                src={dataCMS.logo.url}
                alt={dataCMS.logo.alt}
                height={dataCMS.logo.height}
                width={dataCMS.logo.width}
                loading="lazy"
              />
            </WrapperLogo>
          </div>
          <div>
            <WrapperBtn className='flex'>
              <BlueBtn onClick={takeRegis}>
                <IconContext.Provider value={{ size: '1vw'}}>
                  <FaUser className='mr-1 md:hidden'/>
                </IconContext.Provider>
                <span>สมัครสมาชิก</span>
              </BlueBtn>
              <RedBtn onClick={takeLogin}>
                <IconContext.Provider value={{ size: '1vw' }}>
                  <FaSignInAlt className='mr-1 md:hidden'/>
                </IconContext.Provider>
                <span>เข้าสู่ระบบ</span>
              </RedBtn>
            </WrapperBtn>
          </div>
        </div>
        <WrapperTools className='mt-2'>
          <div className='grid grid-cols-3 gap-1'>
            <BlankBtn>
              <IconContext.Provider value={{ size: width >= 768 ? '10px' : '1vw' }}>
                <FaHome className='mr-1'/>
              </IconContext.Provider>
              <span>หน้าแรก</span>
            </BlankBtn>
            <BlankBtn onClick={takeLogin}>
              <IconContext.Provider value={{ size: width >= 768 ? '10px' : '1vw' }}>
                <FaGift className='mr-1'/>
              </IconContext.Provider>
              <span>โปรโมชั่น</span>
            </BlankBtn>
            <BlankBtn onClick={takeLogin}>
              <IconContext.Provider value={{ size: width >= 768 ? '10px' : '1vw' }}>
                <FaTrophy className='mr-1'/>
              </IconContext.Provider>
              <span>รางวัล</span>
            </BlankBtn>
          </div>
          <div className='grid grid-cols-3 gap-1'>
            <BlankBtn onClick={takeLogin}>
              <IconContext.Provider value={{ size: width >= 768 ? '10px' : '1vw' }}>
                <FaUsers className='mr-1'/>
              </IconContext.Provider>
              <span>แนะนำเพื่อน</span>
            </BlankBtn>
            <BlankBtn onClick={takeLogin}>
              <IconContext.Provider value={{ size: width >= 768 ? '10px' : '1vw' }}>
                <FaPlay className='mr-1'/>
              </IconContext.Provider>
              <span>แทงหวย</span>
            </BlankBtn>
            <BlankBtn onClick={lineConnect}>
              <IconContext.Provider value={{ size: width >= 768 ? '10px' : '1vw' }}>
                <FaLine className='mr-1'/>
              </IconContext.Provider>
              <span>ติดต่อเรา</span>
            </BlankBtn>
          </div>
        </WrapperTools>
      </WrapperNavbar>
      <Body>
        <WrapperSwipper>
          <Swiper
            loop={true}
            autoplay={{
                delay: 10000,
                disableOnInteraction: false
            }}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            navigation
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            { dataCMS && dataCMS.swiper.map((data, idx) =>
              <SwiperSlide key={idx}>
                <SwipperImage>
                  <Image
                    src={data.url}
                    alt={data.alt}
                    height={data.height}
                    width={data.width}
                    loading="lazy"
                  />
                </SwipperImage>
              </SwiperSlide>
            )}
          </Swiper>
        </WrapperSwipper>
        <WrapperContent>
          <Content>
            <InnerContent>
              <TextAnimation>
                ยินดีต้อนรับเข้าสู่เว็บไซต์ AMBKUB168.COM
              </TextAnimation>
              <WelcomeText>
                <p>
                  <b>
                    คาสิโนออนไลน์
                  </b>
                  แทงหวย หวยรัฐบาล หวยยี่กี หวยหุ้น หวยลาว หวยฮานอย สล็อตออนไลน์ เกมส์ยิงปลา เดิมพันกีฬา ครบวงจรที่นี่ที่เดียว เราคือเว็บพนันออนไลน์อันดับ 1 ของเอเซีย ด้วยระบบฝากถอนที่รวดเร็ว ปลอดภัย มั่นคง ทำให้ลูกค้าสามารถเล่นเดิมพันออนไลน์ได้อย่างต่อเนื่องตลอด 24 ชั่วโมง ให้ความรู้สึกเสมือนไปนั่งเล่นอยู่ที่คาสิโนต่างประเทศอย่างแน่นอน เรามีเกมส์เดิมพันหลากหลายให้เลือกเล่นครบทุกประเภท ไม่ว่าจะเป็น บาคาร่า รูเล็ต ไฮโล แทงบอล บาส ปิงปอง อีสปอร์ต สล็อต ยิงปลา ป๊อกเด้ง ปั้นแปะ น้ำเต้าปูปลา และเกมส์อื่นๆอีกมากมายที่มีให้เลือกเข้าไปเล่นโดยไม่ต้องมีการโยย้ายกระเป๋าเงินอีกต่อไป ยังไม่หมดเพียงเท่านี้เรายังมีโปรโมชั่นและกิจกรรมพิเศษให้ร่วมอยู่ตลอด ไม่ว่าจะเป็น กงล้อลุ้นทอง โบนัสเติมเงิน รางวัลพิเศษประจำเดือน เรายินดีให้บริการลูกค้าทุกท่านด้วยความใส่ใจจริง พร้อมให้ความช่วยเหลือตลอด 24 ชั่วโมง
                </p>
              </WelcomeText>
              <WrapperBtn className='flex'>
                <BlueBtn onClick={takeRegis}>
                  <IconContext.Provider value={{ size: '1vw'}}>
                    <FaUser className='mr-1 md:hidden'/>
                  </IconContext.Provider>
                  <span>สมัครสมาชิก</span>
                </BlueBtn>
                <RedBtn onClick={takeLogin}>
                  <IconContext.Provider value={{ size: '1vw' }}>
                    <FaSignInAlt className='mr-1 md:hidden'/>
                  </IconContext.Provider>
                  <span>เข้าสู่ระบบ</span>
                </RedBtn>
              </WrapperBtn>
              <div className='mt-3'>
                <Swiper
                  loop={true}
                  slidesPerView={5}
                  spaceBetween={30}
                  className="mySwiper"
                >
                  { dataCMS && dataCMS.promotionswiper.map((data, idx) =>
                    <SwiperSlide key={idx}>
                      <SwipperImageSub>
                        <Image
                          src={data.url}
                          alt={data.alt}
                          height={data.height}
                          width={data.width}
                          loading="lazy"
                        />
                      </SwipperImageSub>
                    </SwiperSlide>
                  )}
                </Swiper>
              </div>
            </InnerContent>
            <MiddleText>
              AMBKUB168 ศูนย์รวมเกมส์คาสิโนออนไลน์ครบวงจร สำหรับนักพนันที่กำลังมองหา แหล่งรวมเกมส์เดิมพันทุกรูปแบบเพื่อตอบสนองต่อความต้องการที่หลากหลายและเพิ่มความสนุกสนานให้กับเหล่านักเดิมพันมากขึ้น ไม่ว่าจะเป็น คาสิโนออนไลน์ บาคาร่า บาคาร่าสายฟ้า รูเล็ต ไฮโล ป๊อกเด้ง แบล็คแจ็ค แทงบอล เดิมพันกีฬา สล็อตออนไลน์ ยิงปลา และอื่นๆ เราได้รวมรวมมาให้เลือกเล่นแล้วทุกค่าย อาทิเช่นแบรนด์คาสิโนชั้นนำของโลกอย่าง SA Gaming , AE Sexy หรือ Sexy Gaming แบรนด์สล็อตชั้นนำของโลกอย่าง Joker Gaming , JILI และ PG Slot ยังไม่หมดเพียงเท่านี้เรายังมีแบรนด์อื่นๆให้เลือกเล่นกันอย่างจุใจไม่ว่าจะเป็น Evolution Gaming , WM Casino , Asia Gaming , AMB Poker , SkyWind Group , AE Gaming Slot ,Quickspin ,CQ9 และอื่นๆอีกมากมาย เราจะมีอัพเดทเข้ามาให้เล่นกันอย่าสม่ำเสมอ ด้วยระบบที่ทันสมัยที่สุดในขณะนี้ ฝากถอนเงินรวดเร็วเพียงไม่กี่วินาที ด้วยขั้นตอนที่แสนจะง่ายดาย ท่านสามารถเลือกเล่นได้ทุกแบรนด์ไม่ต้องโยกเงินให้เสียเวลา เริ่มรวยไปกับเราวันนี้เริ่มต้นฝากเงินเพียง 1 บาทเท่านั้น
            </MiddleText>
            <WrapperBanner>
              <div className='grid md:grid-cols-4 grid-cols-2 gap-2'>
                <Card>
                  <CardTitle>
                    <h3>คาสิโนออนไลน์</h3>
                  </CardTitle>
                  <Banner>
                    <Image
                      src={'https://www.datocms-assets.com/84477/1666881609-95qv226856.webp'}
                      alt={'คาสิโนออนไลน์'}
                      width={1250}
                      height={1042}
                    />
                  </Banner>
                  <InnerBannerText>
                    <p>
                      เรามีคาสิโนออนไลน์ให้ท่านเลือกเล่นหลากหลายแบรนด์ อาทิเช่น AE Sexy , SA Gaming , Evolution Gaming , WM Casino , AMB Poker โดยสามารถเลือกเล่นได้หลากหลายเกมส์ไม่ว่าจะเป็น บาคาร่า รูเล็ต ไฮโล บาคาร่าสายฟ้า และอื่นๆ
                    </p>
                  </InnerBannerText>
                  <WrapperBtnBanner>
                    <BannerBtn>คลิกสมัครสมาชิก</BannerBtn>
                  </WrapperBtnBanner>
                </Card>
                <Card>
                  <CardTitle>
                    <h3>สล็อต ยิงปลา</h3>
                  </CardTitle>
                  <Banner>
                    <Image
                      src={'https://www.datocms-assets.com/84477/1666881617-lkrb226854.webp'}
                      alt={'คาสิโนออนไลน์'}
                      width={1250}
                      height={1042}
                    />
                  </Banner>
                  <InnerBannerText>
                    <p>
                      เรามีเกมส์สล็อตและเกมส์ยิงปลาให้ท่านเลือกเล่นหลากหลายค่าย ไม่ว่าจะเป็น PGSLOT , JOKER , AE Gaming Slot , JILI, Quickspin, CQ9 และอื่นๆ ภาพสวย คมชัด เล่นสนุก แตกง่ายที่สุด เข้าเล่นง่ายๆไม่ต้องโยกเงินให้เสียเวลา
                    </p>
                  </InnerBannerText>
                  <WrapperBtnBanner>
                    <BannerBtn>คลิกสมัครสมาชิก</BannerBtn>
                  </WrapperBtnBanner>
                </Card>
                <Card>
                  <CardTitle>
                    <h3>แทงหวยออนไลน์</h3>
                  </CardTitle>
                  <Banner>
                    <Image
                      src={'https://www.datocms-assets.com/84477/1666881624-nxre226851.webp'}
                      alt={'คาสิโนออนไลน์'}
                      width={1250}
                      height={1042}
                    />
                  </Banner>
                  <InnerBannerText>
                    <p>
                      เรามีหวยให้เลือกมากมายหลากหลายให้เล่น ไม่ว่าจะเป็น หวยรัฐบาลไทย หวยอออมสิน หวยธ.ก.ส. หวยลาว หวยฮานอย หวยมาเลย์ หวยหุ้น หวยยี่กี หวยชุดเราก็มีให้เล่น จ่ายสูงสุด 900/90 เลขอั้นเลขดังรับหมด
                    </p>
                  </InnerBannerText>
                  <WrapperBtnBanner>
                    <BannerBtn>คลิกสมัครสมาชิก</BannerBtn>
                  </WrapperBtnBanner>
                </Card>
                <Card>
                  <CardTitle>
                    <h3>เดิมพันกีฬา</h3>
                  </CardTitle>
                  <Banner>
                    <Image
                      src={'https://www.datocms-assets.com/84477/1666881631-y50f226853.webp'}
                      alt={'คาสิโนออนไลน์'}
                      width={1250}
                      height={1042}
                    />
                  </Banner>
                  <InnerBannerText>
                    <p>
                      สำหรับคอกีฬา เราก็มีให้เลิอกเล่นหลายเกม โดยสามารถเลือกเล่นได้หลากหลายประเภทกีฬา ไม่ว่าจะเป็น แทงบอล บาสเก็ตบอล ปิงปอง อีสปอร์ต และกีฬาอื่นๆ มีให้เลิอกเล่นมากมายเว็บเดียวครบจบไม่ต้องไปที่อื่น
                    </p>
                  </InnerBannerText>
                  <WrapperBtnBanner>
                    <BannerBtn>คลิกสมัครสมาชิก</BannerBtn>
                  </WrapperBtnBanner>
                </Card>
              </div>
              <WrapperProvider className='mt-3'>
                <Image
                  alt={'provider'}
                  src={'https://www.datocms-assets.com/84477/1666884223-partner-logo1.webp'}
                  width={1140}
                  height={150}
                />
              </WrapperProvider>
              <FooterText>
                <p>
                  AMBKUB168.com <Link href={'/'}><span>คาสิโนออนไลน์</span></Link> แทงหวย หวยรัฐบาล หวยยี่กี หวยหุ้น หวยลาว หวยฮานอย สล็อตออนไลน์ เกมส์ยิงปลา เดิมพันกีฬา ครบวงจรที่นี่ที่เดียว สูตรบาคาร่า เทคนิคการเล่นบาคาร่า สเต็ปสด แทงบอลไม่มีขั้นต่ำ สูตรสล็อตฟรี สล็อตออนไลน์ฟรีเครดิตแจกฟรี ป๊อกเด้งออนไลน์ ป๊อกเด้งออนไลน์ ฟรีเครดิต เว็บเดียวจบครบทุกการเดิมพัน AMBKUB168.com ที่นี่ที่เดียวสามารถเดิมพัน คาสิโนออนไลน์ บาคาร่า สล็อต ยิงปลา กีฬา ได้ครบ ไม่ต้องโยกเงินให้เสียเวลาอีกต่อไป <Link href={'/'}><span>เล่นสล็อตออนไลน์</span></Link> ยิงปลา บนมือถือได้เงินจริง ไม่ต้องโหลดแอพ
                  <br/>
                  AMBKUB168.com เรามุ่งมั่นและมีความตั้งใจในการพัฒนาอย่างต่อเนื่องเพื่อให้ลูกค้าทุกท่านเพลิดเพลินไปกับการเดิมพันออนไลน์ บริการอย่างรวดเร็ว ปลอดภัย
                </p>
              </FooterText>
              <CopyRight>
                <p>© Copyright - AMBKUB168.COM</p>
              </CopyRight>
            </WrapperBanner>
          </Content>
        </WrapperContent>
      </Body>
      <Navigator>
        <div className='grid grid-cols-5 gap-2'>
          <WrapperNavigationBtn onClick={takeLogin}>
            <IconContext.Provider value={{ size: '15px', color: '#FF9900'}}>
              <FaGift/>
            </IconContext.Provider>
            <div>
              โปรโมชั่น
            </div>
          </WrapperNavigationBtn>
          <WrapperNavigationBtn onClick={takeRegis}>
            <IconContext.Provider value={{ size: '15px', color: '#FF9900'}}>
              <FaDiceSix/>
            </IconContext.Provider>
            <div>
              สมัครสมาชิก
            </div>
          </WrapperNavigationBtn>
          <WrapperNavigationBtn onClick={takeLogin}>
            <WrapperPlay>
              <PlayBtn>
                <IconContext.Provider value={{ size: '50px', color: '#FF9900'}}>
                  <FaPlayCircle/>
                </IconContext.Provider>
              </PlayBtn>
            </WrapperPlay>
            <IconContext.Provider value={{ size: '15px', color: 'transparent'}}>
              <FaDiceSix/>
            </IconContext.Provider>
            <div>
              เข้าเล่น
            </div>
          </WrapperNavigationBtn>
          <WrapperNavigationBtn onClick={takeLogin}>
            <IconContext.Provider value={{ size: '15px', color: '#FF9900'}}>
              <FaUserFriends/>
            </IconContext.Provider>
            <div>
              ชวนเพื่อน
            </div>
          </WrapperNavigationBtn>
          <WrapperNavigationBtn onClick={takeLogin}>
            <IconContext.Provider value={{ size: '15px', color: '#FF9900'}}>
              <FaLine/>
            </IconContext.Provider>
            <div>
              ติดต่อ
            </div>
          </WrapperNavigationBtn>
        </div>
      </Navigator>
    </>
  )
}