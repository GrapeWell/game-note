/** 游戏配置：映射分类名称到 Banner 图片路径 */
export const gameConfig: Record<string, { banner: string }> = {
  '流放之路': {
    banner: '/images/banners/poe.jpg',
  },
};

/**
 * 获取游戏 Banner 图片路径。
 * 如果没有配置则返回 undefined，页面会展示渐变色占位。
 */
export function getGameBanner(game: string): string | undefined {
  return gameConfig[game]?.banner;
}
