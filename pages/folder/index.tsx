import { InferGetServerSidePropsType } from "next";
import { useEffect, useState } from "react";
import { PAGE_ROUTES } from "@/routes";
import Tabs from "@/components/common/Tabs";
import FolderControl from "@/components/folder/FolderControl";
import Layout from "@/components/folder/Layout";
import LinkCardListSection from "@/components/folder/LinkCardListSection";
import LinkFilter from "@/components/folder/LinkFilter";
import { useUserAction } from "@/hooks/user/use-user";
import { resolvers } from "@/resolvers/folder.resolver";
import { useRouter } from "next/router";
import { checkAuthenticated } from "@/utils/auth";

export const getServerSideProps = async () => {
  try {
    const { user, folderList } = await resolvers.resolveFolderPage();

    return { props: { user, folderList } };
  } catch (err) {
    return {
      redirect: {
        destination: PAGE_ROUTES.SIGNIN,
        permanent: false,
      },
    };
  }
};

export default function FolderPage({
  user,
  folderList,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!checkAuthenticated()) router.push(PAGE_ROUTES.SIGNIN);
  }, [router]);

  return (
    <Layout>
      <main className="flex flex-[1] flex-col items-center gap-[3.2rem] px-[3.2rem] py-[2rem] tablet:gap-[4rem] tablet:py-[4rem]">
        <LinkFilter
          search={search}
          setSearch={(search: string) => setSearch(search)}
        />
        <Tabs
          defaultID="전체"
          className="flex w-full max-w-[106rem] flex-[1] flex-col gap-[2.4rem]"
        >
          <Tabs.List className="flex w-full flex-wrap gap-[0.8rem]">
            <Tabs.Trigger
              id="전체"
              className="flex-shrink-0 rounded-[0.5rem] border-[0.1rem] border-u-primary px-[1rem] py-[0.6rem] text-[1.6rem] data-[on=true]:bg-u-primary data-[on=true]:text-u-white tablet:px-[1.2rem] tablet:py-[0.8rem]"
            >
              전체
            </Tabs.Trigger>
            {folderList.map((folder) => (
              <Tabs.Trigger
                key={folder.id}
                id={folder.name}
                className="flex-shrink-0 rounded-[0.5rem] border-[0.1rem] border-u-primary px-[1rem] py-[0.6rem] text-[1.6rem] data-[on=true]:bg-u-primary data-[on=true]:text-u-white tablet:px-[1.2rem] tablet:py-[0.8rem]"
              >
                {folder.name}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          <Tabs.Content id="전체" className="flex flex-col gap-[2.4rem]">
            <LinkCardListSection folder={{ name: "전체" }} search={search} />
          </Tabs.Content>
          {folderList.map((folder) => (
            <Tabs.Content
              key={folder.id}
              id={folder.name}
              className="flex flex-col gap-[2.4rem]"
            >
              <LinkCardListSection
                folder={{ id: folder.id, name: folder.name }}
                headerRightSection={<FolderControl />}
                search={search}
              />
            </Tabs.Content>
          ))}
        </Tabs>
        {/* <FolderFAB /> */}
      </main>
    </Layout>
  );
}
