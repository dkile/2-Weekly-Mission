import FolderControl from "@/components/folder/FolderControl";
import Layout from "@/components/folder/Layout";
import LinkCardListSection from "@/components/folder/LinkCardListSection";
import LinkFilter from "@/components/folder/LinkFilter";
import { useMyFolderListQuery } from "@/queries/use-folder-query";
import { PAGE_ROUTES } from "@/routes";
import { checkAuthenticated } from "@/utils/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Page() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const {
    query: { id: folderID },
  } = router;
  const { folderList } = useMyFolderListQuery();

  const currentFolder = folderList.find(
    (folder) => folder.id === Number(folderID),
  );

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
        <div className="flex w-full max-w-[106rem] flex-[1] flex-col gap-[2.4rem]">
          <nav className="flex w-full flex-wrap gap-[0.8rem]">
            <Link
              href={PAGE_ROUTES.FOLDER}
              className="flex-shrink-0 rounded-[0.5rem] border-[0.1rem] border-u-primary px-[1rem] py-[0.6rem] text-[1.6rem] data-[on=true]:bg-u-primary data-[on=true]:text-u-white tablet:px-[1.2rem] tablet:py-[0.8rem]"
            >
              전체
            </Link>
            {folderList.map((folder) => (
              <Link
                key={folder.id}
                href={`${PAGE_ROUTES.FOLDER}/${folder.id}`}
                data-on={Number(folderID) === folder.id}
                className="flex-shrink-0 rounded-[0.5rem] border-[0.1rem] border-u-primary px-[1rem] py-[0.6rem] text-[1.6rem] data-[on=true]:bg-u-primary data-[on=true]:text-u-white tablet:px-[1.2rem] tablet:py-[0.8rem]"
              >
                {folder.name}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-[2.4rem]">
            <LinkCardListSection
              folder={{
                id: currentFolder?.id,
                name: currentFolder?.name ?? "",
              }}
              headerRightSection={<FolderControl />}
              search={search}
            />
          </div>
        </div>
      </main>
    </Layout>
  );
}
