import { PageInfo } from "../typings";

export const fetchPage = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);

    const data = await res.json();
    const page: PageInfo = data.page;

    return page;
}