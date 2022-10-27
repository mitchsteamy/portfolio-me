import { ProjectInfo } from "../typings";

export const fetchProjects = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjectInfo`);

    const data = await res.json();
    const projects: ProjectInfo[] = data.projects;

    return projects;
}