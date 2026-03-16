import type { ImageMetadata } from 'astro';
import poeBanner from '../assets/images/banners/poe.jpg';
import poeCover from '../assets/images/games/poe.webp';
import poeLogo from '../assets/images/logos/poe.png';

/** 游戏配置：映射分类名称到 Banner / Cover / Logo 图片 */
const gameConfig: Record<string, { banner?: ImageMetadata; cover?: ImageMetadata; logo?: ImageMetadata }> = {
  '流放之路': {
    banner: poeBanner,
    cover: poeCover,
    logo: poeLogo,
  },
};

/**
 * 获取游戏 Banner 图片。
 * 如果没有配置则返回 undefined，页面会展示渐变色占位。
 */
export function getGameBanner(game: string): ImageMetadata | undefined {
  return gameConfig[game]?.banner;
}

/**
 * 获取游戏封面图。
 * 如果没有配置则返回 undefined，页面会展示 emoji 占位。
 */
export function getGameCover(game: string): ImageMetadata | undefined {
  return gameConfig[game]?.cover;
}

/**
 * 获取游戏 Logo 图片。
 * 如果没有配置则返回 undefined。
 */
export function getGameLogo(game: string): ImageMetadata | undefined {
  return gameConfig[game]?.logo;
}
