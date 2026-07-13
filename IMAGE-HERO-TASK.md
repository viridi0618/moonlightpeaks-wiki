# Image Hero Task — Moonlight Peaks Wiki

**目标：** 给每个 guide 页的 Hero 区和首页的 GuideCard 卡片加上配图，来源是 Steam 社区截图。

**任务类型：** 前端框架改动 + 图片数据填充（两阶段）

---

## 阶段一：框架改动（先做）

### 1. `Guide` 类型加 `image` 字段

`src/data/guides.ts` 中的 `Guide` type 新加一个可选字段：

```ts
image?: string; // Steam CDN image URL, or undefined
```

### 2. `GuideCard` 组件加图片显示

`src/components/GuideCard.tsx` 的卡片在 eyebrow 标签上方加 `<img>`：
- 如果 `guide.image` 存在 → 显示图片（圆角、全宽、固定高度 200px、object-cover）
- 如果 `guide.image` 不存在 → 不显示，保持现有样式
- alt 用 guide.h1

布局参考（从上到下）：
```
[图片 200px]
[eyebrow]
[标题]
[简介2行]
[Read guide →]
```

### 3. `GuidePage` Hero 区用页面专属背景图（可选增强）

`src/components/GuidePage.tsx` 的 Hero 背景当前是写死的 `url('/moonlight-peaks-guide-hero.png')`。

如果 guide 有 `image`：
- 替换 Hero 背景为 `guide.image`（其他渐变 overlay 照常）
- 当前写死的 fallback 图保持不变作为默认 Hero 图

实现方式：
```tsx
const heroImage = guide.image ?? '/moonlight-peaks-guide-hero.png';
// 然后在 style 中用这个变量
```

### 4. SEO：如果 guide 有 image，更新 Schema.org

`GuidePage.tsx` 里的 `article.image` 当前是 `absoluteUrl(siteConfig.defaultSocialImage)`。

如果 `guide.image` 存在：
- `article.image` → `absoluteUrl(guide.image)`（用 CDN 链接，不需要 local）
- `og:image` / `twitter:image` 同样更新 → 在 `guide-metadata.ts` 里处理

---

## 阶段二：图片数据填充（在阶段一完成后）

### 图片来源

Steam 社区截图 CDN。格式：
```
https://shared.cloudflare.steamstatic.com/steamcommunity/public/images/items/{appId}/{hash}.jpg
https://shared.akamai.steamstatic.com/steam/apps/{appId}/ss_{hash}.jpg
```

Moonlight Peaks Steam App ID: `2209900`

### 收集方法

1. **用浏览器打开** Steam 社区截图页面：
   - `https://steamcommunity.com/app/2209900/screenshots/`
   - 或 Steam 商店截图区：`https://store.steampowered.com/app/2209900/Moonlight_Peaks/`

2. **浏览截图列表，用视觉识别匹配每页标题**：
   - 看到一张显示 farming 场面的截图 → 配给 beginner-guide 或 farming-guide
   - 看到一张显示 romance/dating 场景的截图 → 配给 romance-guide
   - 看到一张显示 witch 施法的截图 → 配给 spells-guide
   - 看到一张显示 fishing 的截图 → 配给 fishing-guide
   - 看到一张 display Switch/Nintendo 的截图 → 配给 switch
   - 等等

3. **右键图片 → 复制图片地址**，这就是 CDN 链接。填入对应的 `image` 字段。

### 匹配表（18 个 guide，根据标题找对应场景）

| slug | 标题 | 理想的图片内容 | 没有的话 |
|------|------|-------------|--------|
| `beginner-guide` | Moonlight Peaks Beginner Guide | 农场景、nighttime farming、玩家小屋 | 任意 gameplay 截图 |
| `romance-guide` | Moonlight Peaks Romance Guide | 两个角色互动/约会/心形 UI | 角色对话界面 |
| `switch` | Is Moonlight Peaks on Nintendo Switch? | Switch 手持模式画面 | 任意画面 |
| `ps5` | Is Moonlight Peaks on PS5? | 游戏画面（没有特定要求） | 任意画面 |
| `spells-guide` | Moonlight Peaks Spells Guide | 施法效果、wand/Aquaflux 画面 | 魔法/特效画面 |
| `money-guide` | How to Make Money in Moonlight Peaks | 商店界面、金币显示、售货界面 | 农作/交易场景 |
| `gift-guide` | Moonlight Peaks Gift Guide | 角色收礼物/心形/好感度界面 | 角色互动界面 |
| `farming-guide` | Moonlight Peaks Farming Guide | 大面积农作物、Keg/加工设施 | 农田画面 |
| `fishing-guide` | Moonlight Peaks Fishing Guide | 钓鱼界面/minigame | 水边场景 |
| `steam-deck` | Moonlight Peaks on Steam Deck | Steam Deck 上的画面（如有） | 任意画面 |
| `games-like-moonlight-peaks` | Games Like Moonlight Peaks | 游戏封面/主菜单/标题画面 | 任意画面 |
| `is-moonlight-peaks-worth-it` | Is Moonlight Peaks Worth It? | 游戏好评场景 | 任意画面 |
| `samael-romance` | Samael Romance Guide | Samael 角色特写/互动画面 | vampire 角色画面 |
| `treasure-hunt-clues` | Moonlight Peaks Treasure Hunt Clues | 藏宝图/寻宝界面 | 探索场景 |
| `fallen-tree` | Moonlight Peaks Fallen Tree Quest | 倒下的树/障碍物清理 | 探索场景 |
| `multiplayer` | Is Moonlight Peaks Multiplayer? | 游戏画面（无特殊要求） | 任意画面 |

4. **找不到对应场景的** → 随便选一张看起来不错的 Moonlight Peaks 截图。

### 填入数据

在 `src/data/guides.ts` 中，每个 guide 对象里加上 `image` 字段：

```ts
"beginner-guide": {
  slug: "beginner-guide",
  title: "...",
  image: "https://shared.cloudflare.steamstatic.com/steamcommunity/public/images/items/2209900/xxxxxxx.jpg",
  // ...
}
```

---

## 检查清单

- [ ] Guide type 加 `image?: string`
- [ ] GuideCard 渲染 guide.image（存在时）
- [ ] GuidePage Hero 用 guide.image 做背景（存在时）
- [ ] article Schema image 用 guide.image（存在时）
- [ ] og:image / twitter:image 用 guide.image（存在时）
- [ ] 18 个 guide 的 image 填充完毕
- [ ] Build 无 error
- [ ] 本地 dev 浏览确认卡片和图显示正常
- [ ] 推送到 GitHub main 分支
