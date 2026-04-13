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
    { text: "Bilibili", href: "https://space.bilibili.com/3493090687977985" },
    { text: "Github", href: "https://github.com/k1lit0" },
  ]
};

export const heroContent = {
  tagline: "Personal Manifesto",
  headline: "Keep Swimming <br /> the pool.",
  descriptionEn: `"A pond fish does not resent the smallness of the pond—what it resents is forgetting how to stir waves within inches."`,
  descriptionZh: "「池鱼不恨池小——恨的是忘了怎么在方寸之间掀起波澜。」",
  imageUrl: "/mouse.jpg",
  imageAlt: "my face",
  imageDataAlt: "躲在角落的阴暗鼠鼠也有凌云壮志，虽然它的梦想可能只是把水搅浑一点点。"
};

export const statsContent = {
  milestoneTag: "期待生活中的浪漫",
  milestoneDate: "鱼传尺素",
  milestoneDescEn: "Fish deliver the letter — a message folded into a fish’s belly, swimming across mountains and rivers, until it slips into your dream and quietly unfolds an entire galaxy.",
  milestoneDescZh: "鱼传尺素，就是把思念折进鱼的腹中，任它游过千山万水，直到游进你的梦里，悄悄展开一整片星河",
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
    { title: "My Site", description: "A personal blog built with Astro & TailwindCSS v4.", github: "#" },
    { title: "Project Omega", description: "An experimental AI tool container.", github: "#" }
  ]
};
