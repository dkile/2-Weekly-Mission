import { InferGetServerSidePropsType } from "next";
import { useState } from "react";
import LinkFilter from "@/components/shared/LinkFilter";
import Layout from "@/components/shared/Layout";
import LinkCardList from "@/components/shared/LinkCardList";
import { resolvers } from "@/resolvers/shared.resolver";

export const getServerSideProps = async () => {
  const folder = await resolvers.resolveSharedPage();

  return { props: { folder } };
};

export default function Page({
  folder,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [search, setSearch] = useState("");

  return (
    <Layout folder={folder}>
      <main className="flex flex-col items-center gap-[3.2rem] px-[3.2rem] pb-[6rem] pt-[2rem] tablet:gap-[4rem] tablet:pb-[10rem] tablet:pt-[4rem]">
        <LinkFilter
          setSearch={(search: string) => setSearch(search)}
          search={search}
        />
        <section className="w-full max-w-[106rem]">
          <LinkCardList linkList={folder.links} search={search} />
        </section>
      </main>
    </Layout>
  );
}
