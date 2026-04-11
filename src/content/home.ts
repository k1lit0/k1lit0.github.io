export const siteConfig = {
  navTitle: "YU的游泳池",
  footerTitle: "Fat Fish's Swimming Pool",
  copyright: "© 2024 Fat Fish's Swimming Pool. Aerated Editorial.",
  navLinks: [
    { text: "Home", href: "/" },
    { text: "Articles", href: "/articles" },
    { text: "Projects", href: "/projects" },
  ],
  footerLinks: [
    { text: "Bilibili", href: "#" },
    { text: "Github", href: "#" },
    { text: "Privacy", href: "#" },
  ]
};

export const heroContent = {
  tagline: "Personal Manifesto",
  headline: "Keep Swimming <br /> the pool.",
  descriptionEn: `"A pond fish does not resent the smallness of the pond—what it resents is forgetting how to stir waves within inches."`,
  descriptionZh: "「池鱼不恨池小——恨的是忘了怎么在方寸之间掀起波澜。」",
  imageUrl: "mouse.jpg",
  imageAlt: "my face",
  imageDataAlt: "Close-up of smooth river stones and raked sand in a Japanese zen garden with soft side lighting and warm lime-tinted shadows"
};

export const statsContent = {
  milestoneTag: "Next Milestone",
  milestoneDate: "鱼传尺素",
  milestoneDescEn: "The Great Autumn Migration: A 100km journey through the editorial landscape.",
  milestoneDescZh: "大秋季迁徙：一场穿越社论景观的百公里旅程。",
  statsTitle: "最 近 状 态",
  stats: [
    { value: "0", label: "已经臭了 /天" },
    { value: "0417", label: "生日" },
    { value: "APEX", label: "最近在玩" },
  ]
};

export const guestbookContent = {
  title: "The Burrows",
  subtitle: "Playful echoes from fellow travelers • 旅伴们的俏皮回响",
  messages: [
    {
      text: `"The texture of this journal feels like sun-warmed linen."`,
      author: "@haruki_m",
      avatarClass: "bg-primary-container",
      bubbleBaseClass: "bg-surface-container-lowest rounded-bl-none",
      containerMargin: "",
      isItalic: false
    },
    {
      text: "「在这里，我终于学会了如何安静地奔跑。」",
      author: "小林桑",
      avatarClass: "bg-tertiary-container",
      bubbleBaseClass: "bg-secondary-container/30 rounded-br-none",
      containerMargin: "mt-8",
      isItalic: false
    },
    {
      text: `"Is the mouse still running, or is the wheel spinning the world?"`,
      author: "Dreamer_99",
      avatarClass: "bg-secondary-fixed",
      bubbleBaseClass: "bg-surface-container-lowest rounded-tl-none",
      containerMargin: "",
      isItalic: true
    },
    {
      text: `"Minimalism is the ultimate sophistication. Keep going!"`,
      author: "Design_Critique",
      avatarClass: "bg-primary-fixed-dim",
      bubbleBaseClass: "bg-primary-container/10 rounded-tr-none",
      containerMargin: "mt-4",
      isItalic: false
    }
  ]
};
export const projectsContent = {
  title: "Projects",
  subtitle: "Things I've built",
  projects: [
    { title: "My Site", description: "A personal blog built with Astro & TailwindCSS v4.", github: "https://github.com/my-site" },
    { title: "Project Omega", description: "An experimental AI tool container.", github: "https://github.com/omega" }
  ]
};
