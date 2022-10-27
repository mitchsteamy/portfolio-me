import { SkillInfo } from "../typings";

export const fetchSkills = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkillsInfo`);

    const data = await res.json();
    const skills: SkillInfo[] = data.skills;

    return skills;
}