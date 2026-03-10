import { visit } from 'unist-util-visit';

/**
 * Remark plugin to convert video directives to embedded players
 * Supports syntax like:
 * ::youtube{id="9pP0pIgP2kE"}
 * ::bilibili{id="BV1sK4y1Z7KG"}
 */
export function remarkVideoEmbed() {
  return (tree) => {
    visit(tree, (node) => {
      // 处理 leafDirective (单行指令 ::youtube{})
      if (node.type === 'leafDirective' || node.type === 'containerDirective') {
        const { name, attributes } = node;

        // YouTube
        if (name === 'youtube' && attributes?.id) {
          const videoId = attributes.id;
          const data = node.data || (node.data = {});
          const html = `<div class="video-container"><iframe src="https://www.youtube.com/embed/${videoId}" title="YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;

          Object.assign(node, {
            type: 'html',
            value: html
          });
        }

        // Bilibili
        else if (name === 'bilibili' && attributes?.id) {
          const bvid = attributes.id;
          const html = `<div class="video-container"><iframe src="https://player.bilibili.com/player.html?bvid=${bvid}&high_quality=1" title="Bilibili video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;

          Object.assign(node, {
            type: 'html',
            value: html
          });
        }
      }
    });
  };
}
