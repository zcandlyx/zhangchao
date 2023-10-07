/**
   * 获取本地图
   * @param name // 文件名 如 doc.png
   * @returns {*|string}
   */
export function getAssetsImages(name) {
  return new URL(`/src/assets/${name}`, import.meta.url).href;
}