let oikyotaanImage = 'https://res.cloudinary.com/dyn3q57b8/image/upload/f_auto,q_auto/v1/My%20Portfolio%20(SvelteKit)%20May%202024/work-page/oikyotaan';
let mlClubImage = 'https://res.cloudinary.com/dyn3q57b8/image/upload/f_auto,q_auto/v1/My%20Portfolio%20(SvelteKit)%20May%202024/work-page/ML_Figma_Comp';
let gdscExploreImage = 'https://res.cloudinary.com/dyn3q57b8/image/upload/f_auto,q_auto/v1/My%20Portfolio%20(SvelteKit)%20May%202024/work-page/gdscexplore';
let githubSearchImage = 'https://res.cloudinary.com/dyn3q57b8/image/upload/f_auto,q_auto/v1/My%20Portfolio%20(SvelteKit)%20May%202024/work-page/githubsearch';
let pomodoroImage = 'https://res.cloudinary.com/dyn3q57b8/image/upload/f_auto,q_auto/v1/My%20Portfolio%20(SvelteKit)%20May%202024/work-page/pomodoro';
let portfolioImage = 'https://res.cloudinary.com/dyn3q57b8/image/upload/f_auto,q_auto/v1/My%20Portfolio%20(SvelteKit)%20May%202024/work-page/portfolio_new_comp'



const floatingCards = [
    {
        id: 1,
        generalClass: "card",
        cardNoClass: "card-1",
        projectName: "Portfolio",
        date: "May-2024",
        projectImage: portfolioImage,
        repoURL: "/",
        URL: "",
        description: "Designed and developed my portfolio website implementing motion design and a Firebase database.",
        techStack: ['SvelteKit', 'Tailwind', 'Firebase', 'GSAP']
    },
    {
        id: 2,
        generalClass: "card",
        cardNoClass: "card-2",
        projectName: "Oikyotaan'24",
        date: "March-2024",
        projectImage: oikyotaanImage,
        repoURL: "https://github.com/aryanh0911/oikyotaan-2024",
        URL: "",
        description: "Collaborated with a team of Developers and UI/UX Designers to build the official site of Oikyotaan 2024.",
        techStack: ['React', 'Sass', 'Javascript']
    },
    {
        id: 3,
        generalClass: "card",
        cardNoClass: "card-3",
        projectName: "ML Club",
        date: "May-2024",
        projectImage: mlClubImage,
        repoURL: "/",
        URL: "",
        description: "Designed and Developed the official website for Machine Learning Club NIT Silchar",
        techStack: ['SvelteKit', 'Tailwind', 'Firebase']
    },
    {
        id: 4,
        generalClass: "card",
        cardNoClass: "card-4",
        projectName: "GDSC Explore'24",
        date: "March-2024",
        projectImage: gdscExploreImage,
        repoURL: "https://github.com/aryanh0911/gdsc-explore-4.0",
        URL: "",
        description: "Collaborated with a team of Developers to build the official website of GDSC Explore 2024.",
        techStack: ['React', 'Sass', 'Javascript']
    },
    {
        id: 5,
        generalClass: "card",
        cardNoClass: "card-5",
        projectName: "Github Search",
        date: "Nov-2023",
        projectImage: githubSearchImage,
        repoURL: "https://github.com/aryanh0911/Github-Profile-Viewer",
        URL: "",
        description: "Built a little tool that provides user-details of a Github user.",
        techStack: ['Javascript', 'CSS', 'HTML']
    },
    {
        id: 6,
        generalClass: "card",
        cardNoClass: "card-6",
        projectName: "Pomodoro",
        date: "March-2024",
        projectImage: pomodoroImage,
        repoURL: "https://github.com/aryanh0911/Pomodoro-SvelteKit",
        URL: "",
        description: "Designed and developed a simple Pomodoro timer and implemented a Dark-mode toggle using Tailwind.",
        techStack: ['SvelteKit', 'Javascript', 'Tailwind']
    }
];



export default floatingCards;