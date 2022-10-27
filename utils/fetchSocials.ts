import { SocialInfo } from "../typings";

export const fetchSocials = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocialInfo`);

    const data = await res.json();
    const socials: SocialInfo[] = data.socials;

    return socials;
}