import oikyotaanImage from '$lib/assets/work-page/oikyotaan.png';
import mlClubImage from '$lib/assets/work-page/ml-club.png';
import gdscExploreImage from '$lib/assets/work-page/gdsc-explore.png';
import githubSearchImage from '$lib/assets/work-page/github-search.png';
import pomodoroImage from '$lib/assets/work-page/pomodoro.png';



const floatingCards = [
    {
        id: 1,
        generalClass: "card",
        cardNoClass: "card-1",
        projectName: "Portfolio",
        date: "May-2024",
        projectImage: oikyotaanImage,
        repoURL: "",
        URL: "",
        description: "",
        techStack: ['SvelteKit', 'Tailwind', 'Firebase']
    },
    {
        id: 2,
        generalClass: "card",
        cardNoClass: "card-2",
        projectName: "Oikyotaan'24",
        date: "March-2024",
        projectImage: oikyotaanImage,
        repoURL: "",
        URL: "",
        description: "Collaborated with a team of UI/UX Designers and Developers to build the official site of Oikyotaan 2024.",
        techStack: ['ReactJs', 'PostCSS', 'Javascript']
    },
    {
        id: 3,
        generalClass: "card",
        cardNoClass: "card-3",
        projectName: "ML Club",
        date: "May, 2024",
        projectImage: mlClubImage,
        repoURL: "",
        URL: "",
        description: "Designed and Developed the official website for Machine Learning Club NIT Silchar",
        techStack: ['SvelteKit', 'Tailwind', 'Firebase']
    },
    {
        id: 4,
        generalClass: "card",
        cardNoClass: "card-4",
        projectName: "GDSC Explore'24",
        date: "May, 2024",
        projectImage: gdscExploreImage,
        repoURL: "",
        URL: "",
        description: "Designed and Developed the official website for Machine Learning Club NIT Silchar",
        techStack: ['SvelteKit', 'Tailwind', 'Firebase']
    },
    {
        id: 5,
        generalClass: "card",
        cardNoClass: "card-5",
        projectName: "Github Search",
        date: "May, 2024",
        projectImage: githubSearchImage,
        repoURL: "",
        URL: "",
        description: "Designed and Developed the official website for Machine Learning Club NIT Silchar",
        techStack: ['SvelteKit', 'Tailwind', 'Firebase']
    },
    {
        id: 6,
        generalClass: "card",
        cardNoClass: "card-6",
        projectName: "Pomodoro",
        date: "May, 2024",
        projectImage: pomodoroImage,
        repoURL: "",
        URL: "",
        description: "Designed and developed a simple Pomodoro timer. Implemented a Dark-mode toggle using Tailwind.",
        techStack: ['SvelteKit', 'Tailwind', 'Firebase']
    }
];



export default floatingCards;