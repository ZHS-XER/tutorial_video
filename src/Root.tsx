import React from 'react';
import { Composition } from 'remotion';
import { FPS, tl } from '@engine/tokens';
import { TUTORIALS } from '../works/registry';
import { KbdDemo, KBD_DEMO_DUR } from '../lab/demos/KbdDemo';

// 每支教程 = registry 里一条记录 = 一个 Composition；id 就是教程 slug。
// 渲染：npm run render <slug>   预览：npm run dev
export const Root: React.FC = () => (
  <>
    {TUTORIALS.map((t) => (
      <Composition
        key={t.id}
        id={t.id}
        component={t.Main}
        durationInFrames={tl(t.totalTL)}
        fps={FPS}
        width={1920}
        height={1080}
        defaultProps={t.defaultProps ?? {}}
      />
    ))}
    {/* 组件样式总览（非教程） */}
    <Composition id="kbd-demo" component={KbdDemo} durationInFrames={KBD_DEMO_DUR} fps={FPS} width={1920} height={1080} />
  </>
);
