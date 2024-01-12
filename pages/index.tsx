import Layout from "@/components/landing/Layout";
import ServiceIntroCard from "@/components/landing/ServiceIntroCard";
import { ASSET_ROUTES } from "@/routes";

export default function Landing() {
  return (
    <Layout>
      <main>
        <ServiceIntroCard
          title={
            <>
              <span className="bg-gradient-orange-blue bg-clip-text text-transparent">
                원하는 링크
              </span>
              를
              <br className="hidden tablet:block" />
              저장하세요
            </>
          }
          description={
            <>
              나중에 읽고 싶은 글, 다시 보고 싶은 영상,
              <br className="hidden tablet:block" />
              사고 싶은 옷, 기억하고 싶은 모든 것을
              <br className="hidden tablet:block" />한 공간에 저장하세요.
            </>
          }
          thumbnail={`${ASSET_ROUTES.IMAGE}/content-img1`}
        />
        <ServiceIntroCard
          title={
            <>
              링크를 폴더로
              <br className="hidden tablet:block" />
              <span className="bg-gradient-blue-yellow bg-clip-text text-transparent">
                관리
              </span>
              하세요
            </>
          }
          description={
            <>
              나만의 폴더를 무제한으로 만들고
              <br className="hidden tablet:block" />
              다양하게 활용할 수 있습니다.
            </>
          }
          thumbnail={`${ASSET_ROUTES.IMAGE}/content-img2`}
        />
        <ServiceIntroCard
          title={
            <>
              저장한 링크를
              <br className="hidden tablet:block" />
              <span className="bg-gradient-blue-gray bg-clip-text text-transparent">
                공유
              </span>
              해 보세요
            </>
          }
          description={
            <>
              여러 링크를 폴더에 담고 공유할 수 있습니다.
              <br className="hidden tablet:block" />
              가족, 친구, 동료들에게 쉽고 빠르게 링크를
              <br className="hidden tablet:block" />
              공유해 보세요.
            </>
          }
          thumbnail={`${ASSET_ROUTES.IMAGE}/content-img3`}
        />
        <ServiceIntroCard
          title={
            <>
              저장한 링크를
              <br className="hidden tablet:block" />
              <span className="bg-gradient-red-blue bg-clip-text text-transparent">
                검색
              </span>
              해 보세요
            </>
          }
          description="중요한 정보들을 검색으로 쉽게 찾아보세요."
          thumbnail={`${ASSET_ROUTES.IMAGE}/content-img4`}
        />
      </main>
    </Layout>
  );
}
