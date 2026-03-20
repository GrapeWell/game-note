export interface UsefulSiteLink {
  label: string;
  url: string;
  description?: string;
  badge?: string;
}

export interface UsefulSiteSection {
  title: string;
  description?: string;
  links: UsefulSiteLink[];
}

const defaultSections: UsefulSiteSection[] = [
  {
    title: '常用工具',
    description: '把常看的社区、Wiki、交易站统一放在本地配置里维护。',
    links: [
      {
        label: 'GitHub Trending',
        url: 'https://github.com/trending',
        description: '关注热门项目和工具。',
        badge: '开发',
      },
      {
        label: 'MDN Web Docs',
        url: 'https://developer.mozilla.org/',
        description: '查前端 API 和浏览器兼容性。',
        badge: '文档',
      },
    ],
  },
];

const gameSections: Record<string, UsefulSiteSection[]> = {
  流放之路: [
    {
      title: '常用工具站',
      description: '适合放刷图、配装、价格检索一类的高频站点。',
      links: [
        {
          label: '忍者网',
          url: 'https://poe.ninja/',
          description: '查 BD 热度、装备价格和赛季经济趋势。',
        },
        {
          label: 'PoeCharm',
          url: 'https://poedb.tw/cn/PoeCharm/',
          description: '技能树模拟器，支持离线使用和多版本切换。',
        },
        {
          label: '做装模拟器',
          url: 'https://poedb.top/sim.aspx/',
          description: '工艺模拟、词缀概率与做装规划。',
        },
      ],
    },
    {
      title: '资讯与资料',
      description: '补丁、社区讨论和资料索引。',
      links: [
        {
          label: '编年史',
          url: 'https://poedb.tw/cn',
          description: '技能、机制、地图和词缀资料库。',
        },
        {
          label: '交易集市',
          url: 'https://www.pathofexile.com/trade',
          description: '官方交易市场，适合直接检索装备。',
          badge: '国际服',
        },
        {
          label: '3.28 开荒BD汇总',
          url: 'https://docs.qq.com/sheet/DR0pReWRyVEVYeUtK?tab=BB08J2',
          description: '汇聚外国大神的开荒 BD，适合参考和学习。',
        },
      ],
    },
  ],
};

export function getUsefulSiteSections(game: string): UsefulSiteSection[] {
  return gameSections[game] ?? defaultSections;
}
