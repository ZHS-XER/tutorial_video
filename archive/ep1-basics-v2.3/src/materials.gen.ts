// materials.gen.ts — journey.mjs snap 自动生成，勿手改
export type MatEl = { tag: string; text: string; testid?: string; x: number; y: number; w: number; h: number };
export type FlowHandle = { id: string | null; type: 'source' | 'target'; cx: number; cy: number };
export type FlowNode = { id: string | null; transform: string; x: number; y: number; w: number; h: number; selected: boolean; handles: FlowHandle[] };
export type FlowMeta = { viewport: string; nodes: FlowNode[]; edges: Array<{ id: string | null; d: string | null }> };
export type MatMeta = { pageW: number; pageH: number; els: MatEl[]; flow?: FlowMeta };
export const MATERIALS: Record<string, MatMeta> = {
  "ep1-s1-ctx": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "div",
        "text": "Image Loader Drop image here or click to upload Supports JPEG, PNG, WebP (max 10",
        "testid": "rf__node-LoadImage-71329618",
        "x": 480,
        "y": 160,
        "w": 280,
        "h": 222
      },
      {
        "tag": "button",
        "text": "",
        "x": 727,
        "y": 169,
        "w": 24,
        "h": 24
      },
      {
        "tag": "div",
        "text": "Untitled Node Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 480,
        "y": 520,
        "w": 280,
        "h": 164
      },
      {
        "tag": "button",
        "text": "",
        "x": 727,
        "y": 529,
        "w": 24,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 731,
        "y": 565,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 601,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 651,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 691,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run Selected",
        "x": 748,
        "y": 1022,
        "w": 130,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 878,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 416,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 476,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 512,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 548,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1455,
        "y": 967,
        "w": 44,
        "h": 44
      },
      {
        "tag": "button",
        "text": "",
        "x": 1487,
        "y": 963,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "1",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(0px, 0px) scale(1)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(480px, 160px)",
          "x": 480,
          "y": 160,
          "w": 280,
          "h": 222,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 777,
              "cy": 282
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(480px, 520px)",
          "x": 480,
          "y": 520,
          "w": 280,
          "h": 164,
          "selected": true,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 480,
              "cy": 624
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 777,
              "cy": 613
            }
          ]
        }
      ],
      "edges": []
    }
  },
  "ep1-s1-ctxmenu": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "div",
        "text": "Image Loader Drop image here or click to upload Supports JPEG, PNG, WebP (max 10",
        "testid": "rf__node-LoadImage-71329618",
        "x": 480,
        "y": 160,
        "w": 280,
        "h": 222
      },
      {
        "tag": "button",
        "text": "",
        "x": 727,
        "y": 169,
        "w": 24,
        "h": 24
      },
      {
        "tag": "div",
        "text": "Untitled Node Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 480,
        "y": 520,
        "w": 280,
        "h": 164
      },
      {
        "tag": "button",
        "text": "",
        "x": 727,
        "y": 529,
        "w": 24,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 731,
        "y": 565,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 601,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 651,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 691,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run Selected",
        "x": 748,
        "y": 1022,
        "w": 130,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 878,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 416,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 476,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 512,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 548,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1455,
        "y": 967,
        "w": 44,
        "h": 44
      },
      {
        "tag": "button",
        "text": "",
        "x": 1487,
        "y": 963,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "1",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "input",
        "text": "Search nodes...",
        "x": 954,
        "y": 208,
        "w": 159,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Upload",
        "x": 924,
        "y": 241,
        "w": 197,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Text",
        "x": 924,
        "y": 279,
        "w": 197,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Video models",
        "x": 924,
        "y": 317,
        "w": 197,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Image models",
        "x": 924,
        "y": 355,
        "w": 197,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Audio models",
        "x": 924,
        "y": 393,
        "w": 197,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Video tools",
        "x": 924,
        "y": 431,
        "w": 197,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Image tools",
        "x": 924,
        "y": 469,
        "w": 197,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Audio tools",
        "x": 924,
        "y": 507,
        "w": 197,
        "h": 36
      },
      {
        "tag": "button",
        "text": "LLM Models",
        "x": 924,
        "y": 545,
        "w": 197,
        "h": 36
      }
    ],
    "flow": {
      "viewport": "translate(0px, 0px) scale(1)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(480px, 160px)",
          "x": 480,
          "y": 160,
          "w": 280,
          "h": 222,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 777,
              "cy": 282
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(480px, 520px)",
          "x": 480,
          "y": 520,
          "w": 280,
          "h": 164,
          "selected": true,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 480,
              "cy": 624
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 777,
              "cy": 613
            }
          ]
        }
      ],
      "edges": []
    }
  },
  "ep1-s1-dbl": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "div",
        "text": "Image Loader Drop image here or click to upload Supports JPEG, PNG, WebP (max 10",
        "testid": "rf__node-LoadImage-71329618",
        "x": 480,
        "y": 160,
        "w": 280,
        "h": 222
      },
      {
        "tag": "button",
        "text": "",
        "x": 727,
        "y": 169,
        "w": 24,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 621,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 671,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 711,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run All",
        "x": 768,
        "y": 1022,
        "w": 89,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 857,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 455,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 514,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 550,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 586,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "input",
        "text": "Search nodes...",
        "x": 514,
        "y": 528,
        "w": 159,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Upload",
        "x": 484,
        "y": 561,
        "w": 197,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Text",
        "x": 484,
        "y": 599,
        "w": 197,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Video models",
        "x": 484,
        "y": 637,
        "w": 197,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Image models",
        "x": 484,
        "y": 675,
        "w": 197,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Audio models",
        "x": 484,
        "y": 713,
        "w": 197,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Video tools",
        "x": 484,
        "y": 751,
        "w": 197,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Image tools",
        "x": 484,
        "y": 789,
        "w": 197,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Audio tools",
        "x": 484,
        "y": 827,
        "w": 197,
        "h": 36
      },
      {
        "tag": "button",
        "text": "LLM Models",
        "x": 484,
        "y": 865,
        "w": 197,
        "h": 36
      }
    ],
    "flow": {
      "viewport": "translate(0px, 0px) scale(1)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(480px, 160px)",
          "x": 480,
          "y": 160,
          "w": 280,
          "h": 222,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 777,
              "cy": 282
            }
          ]
        }
      ],
      "edges": []
    }
  },
  "ep1-s1-empty": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Add media",
        "x": 352,
        "y": 511,
        "w": 135,
        "h": 44
      },
      {
        "tag": "button",
        "text": "Text",
        "x": 497,
        "y": 511,
        "w": 86,
        "h": 44
      },
      {
        "tag": "button",
        "text": "Video models",
        "x": 919,
        "y": 511,
        "w": 157,
        "h": 44
      },
      {
        "tag": "button",
        "text": "Image models",
        "x": 749,
        "y": 511,
        "w": 160,
        "h": 44
      },
      {
        "tag": "button",
        "text": "Video tools",
        "x": 919,
        "y": 565,
        "w": 157,
        "h": 44
      },
      {
        "tag": "button",
        "text": "Image tools",
        "x": 749,
        "y": 565,
        "w": 160,
        "h": 44
      },
      {
        "tag": "button",
        "text": "LLM models",
        "x": 593,
        "y": 511,
        "w": 146,
        "h": 44
      },
      {
        "tag": "button",
        "text": "",
        "x": 621,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 671,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 711,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run All",
        "x": 768,
        "y": 1022,
        "w": 89,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 857,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 455,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 514,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 550,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 586,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(0px, 0px) scale(1)",
      "nodes": [],
      "edges": []
    }
  },
  "ep1-s1-menu": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "label",
        "text": "Add a node",
        "x": 73,
        "y": 333,
        "w": 107,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 207,
        "y": 331,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 243,
        "y": 331,
        "w": 32,
        "h": 32
      },
      {
        "tag": "input",
        "text": "Search nodes...",
        "x": 81,
        "y": 371,
        "w": 186,
        "h": 34
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Add media",
        "x": 352,
        "y": 511,
        "w": 135,
        "h": 44
      },
      {
        "tag": "button",
        "text": "Text",
        "x": 497,
        "y": 511,
        "w": 86,
        "h": 44
      },
      {
        "tag": "button",
        "text": "Video models",
        "x": 919,
        "y": 511,
        "w": 157,
        "h": 44
      },
      {
        "tag": "button",
        "text": "Image models",
        "x": 749,
        "y": 511,
        "w": 160,
        "h": 44
      },
      {
        "tag": "button",
        "text": "Video tools",
        "x": 919,
        "y": 565,
        "w": 157,
        "h": 44
      },
      {
        "tag": "button",
        "text": "Image tools",
        "x": 749,
        "y": 565,
        "w": 160,
        "h": 44
      },
      {
        "tag": "button",
        "text": "LLM models",
        "x": 593,
        "y": 511,
        "w": 146,
        "h": 44
      },
      {
        "tag": "button",
        "text": "",
        "x": 621,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 671,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 711,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run All",
        "x": 768,
        "y": 1022,
        "w": 89,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 857,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 455,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 514,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 550,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 586,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(0px, 0px) scale(1)",
      "nodes": [],
      "edges": []
    }
  },
  "ep1-s1-node1": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "label",
        "text": "Add a node",
        "x": 73,
        "y": 333,
        "w": 107,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 327,
        "y": 331,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 363,
        "y": 331,
        "w": 32,
        "h": 32
      },
      {
        "tag": "input",
        "text": "Search nodes...",
        "x": 81,
        "y": 371,
        "w": 306,
        "h": 34
      },
      {
        "tag": "button",
        "text": "Image Loader",
        "x": 73,
        "y": 417,
        "w": 322,
        "h": 48
      },
      {
        "tag": "div",
        "text": "Image Loader Drop image here or click to upload Supports JPEG, PNG, WebP (max 10",
        "testid": "rf__node-LoadImage-71329618",
        "x": 480,
        "y": 160,
        "w": 280,
        "h": 222
      },
      {
        "tag": "button",
        "text": "",
        "x": 727,
        "y": 169,
        "w": 24,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 621,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 671,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 711,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run All",
        "x": 768,
        "y": 1022,
        "w": 89,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 857,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 455,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 514,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 550,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 586,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(0px, 0px) scale(1)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(480px, 160px)",
          "x": 480,
          "y": 160,
          "w": 280,
          "h": 222,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 777,
              "cy": 282
            }
          ]
        }
      ],
      "edges": []
    }
  },
  "ep1-s1-node2": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "div",
        "text": "Image Loader Drop image here or click to upload Supports JPEG, PNG, WebP (max 10",
        "testid": "rf__node-LoadImage-71329618",
        "x": 480,
        "y": 160,
        "w": 280,
        "h": 222
      },
      {
        "tag": "button",
        "text": "",
        "x": 727,
        "y": 169,
        "w": 24,
        "h": 24
      },
      {
        "tag": "div",
        "text": "Untitled Node Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 480,
        "y": 520,
        "w": 280,
        "h": 164
      },
      {
        "tag": "button",
        "text": "",
        "x": 727,
        "y": 529,
        "w": 24,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 731,
        "y": 565,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 601,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 651,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 691,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run Selected",
        "x": 748,
        "y": 1022,
        "w": 130,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 878,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 416,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 476,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 512,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 548,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1455,
        "y": 967,
        "w": 44,
        "h": 44
      },
      {
        "tag": "button",
        "text": "",
        "x": 1487,
        "y": 963,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "1",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(0px, 0px) scale(1)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(480px, 160px)",
          "x": 480,
          "y": 160,
          "w": 280,
          "h": 222,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 777,
              "cy": 282
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(480px, 520px)",
          "x": 480,
          "y": 520,
          "w": 280,
          "h": 164,
          "selected": true,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 480,
              "cy": 624
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 777,
              "cy": 613
            }
          ]
        }
      ],
      "edges": []
    }
  },
  "ep1-s1-node3": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "div",
        "text": "Image Loader Drop image here or click to upload Supports JPEG, PNG, WebP (max 10",
        "testid": "rf__node-LoadImage-71329618",
        "x": 480,
        "y": 160,
        "w": 280,
        "h": 222
      },
      {
        "tag": "button",
        "text": "",
        "x": 727,
        "y": 169,
        "w": 24,
        "h": 24
      },
      {
        "tag": "div",
        "text": "Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 480,
        "y": 520,
        "w": 280,
        "h": 164
      },
      {
        "tag": "button",
        "text": "",
        "x": 727,
        "y": 529,
        "w": 24,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 731,
        "y": 565,
        "w": 16,
        "h": 16
      },
      {
        "tag": "div",
        "text": "Seedance 2.5 Omni Reference 200 Reference videos 0/10 Reference images 0/30 Refe",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 920,
        "y": 200,
        "w": 280,
        "h": 529
      },
      {
        "tag": "button",
        "text": "Seedance 2.5 Omni Reference 200",
        "x": 929,
        "y": 209,
        "w": 234,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 1167,
        "y": 209,
        "w": 24,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 929,
        "y": 265,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 929,
        "y": 329,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 929,
        "y": 394,
        "w": 40,
        "h": 40
      },
      {
        "tag": "label",
        "text": "Prompt",
        "x": 929,
        "y": 444,
        "w": 42,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1175,
        "y": 444,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "16:9",
        "x": 929,
        "y": 588,
        "w": 82,
        "h": 32
      },
      {
        "tag": "button",
        "text": "5″",
        "x": 1019,
        "y": 588,
        "w": 82,
        "h": 32
      },
      {
        "tag": "button",
        "text": "720p",
        "x": 1109,
        "y": 588,
        "w": 82,
        "h": 32
      },
      {
        "tag": "label",
        "text": "Real Faces Mode · On",
        "x": 938,
        "y": 646,
        "w": 169,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1113,
        "y": 647,
        "w": 14,
        "h": 14
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1152,
        "y": 646,
        "w": 29,
        "h": 17
      },
      {
        "tag": "button",
        "text": "Run",
        "x": 929,
        "y": 688,
        "w": 68,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 997,
        "y": 688,
        "w": 24,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1159,
        "y": 688,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 621,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 671,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 711,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run All",
        "x": 768,
        "y": 1022,
        "w": 89,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 857,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 455,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 514,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 550,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 586,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(0px, 0px) scale(1)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(480px, 160px)",
          "x": 480,
          "y": 160,
          "w": 280,
          "h": 222,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 777,
              "cy": 282
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(480px, 520px)",
          "x": 480,
          "y": 520,
          "w": 280,
          "h": 164,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 480,
              "cy": 624
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 777,
              "cy": 613
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(920px, 200px)",
          "x": 920,
          "y": 200,
          "w": 280,
          "h": 529,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 920,
              "cy": 518
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 920,
              "cy": 349
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 920,
              "cy": 284
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 920,
              "cy": 413
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 1217,
              "cy": 476
            }
          ]
        }
      ],
      "edges": []
    }
  },
  "ep1-s1-search": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "label",
        "text": "Add a node",
        "x": 73,
        "y": 333,
        "w": 107,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 327,
        "y": 331,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 363,
        "y": 331,
        "w": 32,
        "h": 32
      },
      {
        "tag": "input",
        "text": "Search nodes...",
        "x": 81,
        "y": 371,
        "w": 306,
        "h": 34
      },
      {
        "tag": "button",
        "text": "Image Loader",
        "x": 73,
        "y": 417,
        "w": 322,
        "h": 48
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Add media",
        "x": 352,
        "y": 511,
        "w": 135,
        "h": 44
      },
      {
        "tag": "button",
        "text": "Text",
        "x": 497,
        "y": 511,
        "w": 86,
        "h": 44
      },
      {
        "tag": "button",
        "text": "Video models",
        "x": 919,
        "y": 511,
        "w": 157,
        "h": 44
      },
      {
        "tag": "button",
        "text": "Image models",
        "x": 749,
        "y": 511,
        "w": 160,
        "h": 44
      },
      {
        "tag": "button",
        "text": "Video tools",
        "x": 919,
        "y": 565,
        "w": 157,
        "h": 44
      },
      {
        "tag": "button",
        "text": "Image tools",
        "x": 749,
        "y": 565,
        "w": 160,
        "h": 44
      },
      {
        "tag": "button",
        "text": "LLM models",
        "x": 593,
        "y": 511,
        "w": 146,
        "h": 44
      },
      {
        "tag": "button",
        "text": "",
        "x": 621,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 671,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 711,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run All",
        "x": 768,
        "y": 1022,
        "w": 89,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 857,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 455,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 514,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 550,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 586,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(0px, 0px) scale(1)",
      "nodes": [],
      "edges": []
    }
  },
  "ep1-s1-search2": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "div",
        "text": "Image Loader Drop image here or click to upload Supports JPEG, PNG, WebP (max 10",
        "testid": "rf__node-LoadImage-71329618",
        "x": 480,
        "y": 160,
        "w": 280,
        "h": 222
      },
      {
        "tag": "button",
        "text": "",
        "x": 727,
        "y": 169,
        "w": 24,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 621,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 671,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 711,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run All",
        "x": 768,
        "y": 1022,
        "w": 89,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 857,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 455,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 514,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 550,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 586,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "input",
        "text": "Search nodes...",
        "x": 514,
        "y": 528,
        "w": 254,
        "h": 20
      },
      {
        "tag": "button",
        "text": "ElevenLabs v3 40/1k chars",
        "x": 480,
        "y": 557,
        "w": 300,
        "h": 48
      },
      {
        "tag": "button",
        "text": "Vidu Text to Video 5-110",
        "x": 480,
        "y": 605,
        "w": 300,
        "h": 48
      },
      {
        "tag": "button",
        "text": "Flux Kontext 10",
        "x": 480,
        "y": 653,
        "w": 300,
        "h": 48
      },
      {
        "tag": "button",
        "text": "Midjourney 20",
        "x": 480,
        "y": 701,
        "w": 300,
        "h": 48
      },
      {
        "tag": "button",
        "text": "Text",
        "x": 480,
        "y": 749,
        "w": 300,
        "h": 48
      },
      {
        "tag": "button",
        "text": "Gemini 3.1 Pro 2.4-4.8/1k tokens",
        "x": 480,
        "y": 797,
        "w": 300,
        "h": 48
      },
      {
        "tag": "button",
        "text": "Gemini 3 Flash 0.6-1.2/1k tokens",
        "x": 480,
        "y": 845,
        "w": 300,
        "h": 48
      },
      {
        "tag": "button",
        "text": "Table",
        "x": 480,
        "y": 893,
        "w": 300,
        "h": 48
      },
      {
        "tag": "button",
        "text": "Sticky Note",
        "x": 480,
        "y": 941,
        "w": 300,
        "h": 48
      }
    ],
    "flow": {
      "viewport": "translate(0px, 0px) scale(1)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(480px, 160px)",
          "x": 480,
          "y": 160,
          "w": 280,
          "h": 222,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 777,
              "cy": 282
            }
          ]
        }
      ],
      "edges": []
    }
  },
  "ep1-s1-search3": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "div",
        "text": "Image Loader Drop image here or click to upload Supports JPEG, PNG, WebP (max 10",
        "testid": "rf__node-LoadImage-71329618",
        "x": 480,
        "y": 160,
        "w": 280,
        "h": 222
      },
      {
        "tag": "button",
        "text": "",
        "x": 727,
        "y": 169,
        "w": 24,
        "h": 24
      },
      {
        "tag": "div",
        "text": "Untitled Node Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 480,
        "y": 520,
        "w": 280,
        "h": 164
      },
      {
        "tag": "button",
        "text": "",
        "x": 727,
        "y": 529,
        "w": 24,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 731,
        "y": 565,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 601,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 651,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 691,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run Selected",
        "x": 748,
        "y": 1022,
        "w": 130,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 878,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 416,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 476,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 512,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 548,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1455,
        "y": 967,
        "w": 44,
        "h": 44
      },
      {
        "tag": "button",
        "text": "",
        "x": 1487,
        "y": 963,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "1",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "input",
        "text": "Search nodes...",
        "x": 954,
        "y": 208,
        "w": 309,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Seedance 2.5 Omni Reference 40% off 80-3000",
        "x": 920,
        "y": 237,
        "w": 355,
        "h": 48
      },
      {
        "tag": "button",
        "text": "Seedance 2.5 40% off 80-3000",
        "x": 920,
        "y": 285,
        "w": 355,
        "h": 48
      },
      {
        "tag": "button",
        "text": "Seedance 2.5 Video Extend 80-3000",
        "x": 920,
        "y": 333,
        "w": 355,
        "h": 48
      },
      {
        "tag": "button",
        "text": "Seedance 2.0 Omni Reference 69% off 60-2250",
        "x": 920,
        "y": 381,
        "w": 355,
        "h": 48
      },
      {
        "tag": "button",
        "text": "Seedance 2.0 69% off 60-2250",
        "x": 920,
        "y": 429,
        "w": 355,
        "h": 48
      },
      {
        "tag": "button",
        "text": "Seedance 2.0 Video Extend 96-3600",
        "x": 920,
        "y": 477,
        "w": 355,
        "h": 48
      },
      {
        "tag": "button",
        "text": "Seedance 2.0 Mini 68% off 32-240",
        "x": 920,
        "y": 525,
        "w": 355,
        "h": 48
      },
      {
        "tag": "button",
        "text": "Seedance 1.5 20-120",
        "x": 920,
        "y": 573,
        "w": 355,
        "h": 48
      },
      {
        "tag": "button",
        "text": "Seedance 1.0 36-216",
        "x": 920,
        "y": 621,
        "w": 355,
        "h": 48
      }
    ],
    "flow": {
      "viewport": "translate(0px, 0px) scale(1)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(480px, 160px)",
          "x": 480,
          "y": 160,
          "w": 280,
          "h": 222,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 777,
              "cy": 282
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(480px, 520px)",
          "x": 480,
          "y": 520,
          "w": 280,
          "h": 164,
          "selected": true,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 480,
              "cy": 624
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 777,
              "cy": 613
            }
          ]
        }
      ],
      "edges": []
    }
  },
  "ep1-s1-submenu": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "label",
        "text": "Add a node",
        "x": 73,
        "y": 333,
        "w": 107,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 207,
        "y": 331,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 243,
        "y": 331,
        "w": 32,
        "h": 32
      },
      {
        "tag": "input",
        "text": "Search nodes...",
        "x": 81,
        "y": 371,
        "w": 186,
        "h": 34
      },
      {
        "tag": "button",
        "text": "Nano Banana 2 50% off 8-16",
        "x": 284,
        "y": 534,
        "w": 300,
        "h": 48
      },
      {
        "tag": "button",
        "text": "Nano Banana 2 Lite 50% off 4",
        "x": 284,
        "y": 582,
        "w": 300,
        "h": 48
      },
      {
        "tag": "button",
        "text": "Nano Banana Pro 67 - 100% off 0-25",
        "x": 284,
        "y": 630,
        "w": 300,
        "h": 48
      },
      {
        "tag": "button",
        "text": "Nano Banana 60 - 100% off 0-4",
        "x": 284,
        "y": 678,
        "w": 300,
        "h": 48
      },
      {
        "tag": "button",
        "text": "GPT Image 2 50% off 3-40",
        "x": 284,
        "y": 726,
        "w": 300,
        "h": 48
      },
      {
        "tag": "button",
        "text": "Grok Image 4-5",
        "x": 284,
        "y": 774,
        "w": 300,
        "h": 48
      },
      {
        "tag": "button",
        "text": "Seedream 5.0 Pro 9-18",
        "x": 284,
        "y": 822,
        "w": 300,
        "h": 48
      },
      {
        "tag": "button",
        "text": "Seedream 5.0 Lite 8",
        "x": 284,
        "y": 870,
        "w": 300,
        "h": 48
      },
      {
        "tag": "button",
        "text": "Seedream 4.0 5",
        "x": 284,
        "y": 918,
        "w": 300,
        "h": 48
      },
      {
        "tag": "button",
        "text": "Seedream 3.0 5",
        "x": 284,
        "y": 966,
        "w": 300,
        "h": 48
      },
      {
        "tag": "button",
        "text": "OpenAI Image 20",
        "x": 284,
        "y": 1014,
        "w": 300,
        "h": 48
      },
      {
        "tag": "button",
        "text": "Flux Kontext 10",
        "x": 284,
        "y": 1062,
        "w": 300,
        "h": 48
      },
      {
        "tag": "button",
        "text": "FLUX 2 2-14",
        "x": 284,
        "y": 1110,
        "w": 300,
        "h": 48
      },
      {
        "tag": "button",
        "text": "ImageGen 4 10",
        "x": 284,
        "y": 1158,
        "w": 300,
        "h": 48
      },
      {
        "tag": "button",
        "text": "Stable Diffusion v3.5 10",
        "x": 284,
        "y": 1206,
        "w": 300,
        "h": 48
      },
      {
        "tag": "button",
        "text": "Qwen Image 5",
        "x": 284,
        "y": 1254,
        "w": 300,
        "h": 48
      },
      {
        "tag": "button",
        "text": "Z-Image Turbo 3-6",
        "x": 284,
        "y": 1302,
        "w": 300,
        "h": 48
      },
      {
        "tag": "button",
        "text": "Midjourney 20",
        "x": 284,
        "y": 1350,
        "w": 300,
        "h": 48
      },
      {
        "tag": "button",
        "text": "Midjourney v8.1 10-15",
        "x": 284,
        "y": 1398,
        "w": 300,
        "h": 48
      },
      {
        "tag": "button",
        "text": "Midjourney v8.2 10-15",
        "x": 284,
        "y": 1446,
        "w": 300,
        "h": 48
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Add media",
        "x": 352,
        "y": 511,
        "w": 135,
        "h": 44
      },
      {
        "tag": "button",
        "text": "Text",
        "x": 497,
        "y": 511,
        "w": 86,
        "h": 44
      },
      {
        "tag": "button",
        "text": "Video models",
        "x": 919,
        "y": 511,
        "w": 157,
        "h": 44
      },
      {
        "tag": "button",
        "text": "Image models",
        "x": 749,
        "y": 511,
        "w": 160,
        "h": 44
      },
      {
        "tag": "button",
        "text": "Video tools",
        "x": 919,
        "y": 565,
        "w": 157,
        "h": 44
      },
      {
        "tag": "button",
        "text": "Image tools",
        "x": 749,
        "y": 565,
        "w": 160,
        "h": 44
      },
      {
        "tag": "button",
        "text": "LLM models",
        "x": 593,
        "y": 511,
        "w": 146,
        "h": 44
      },
      {
        "tag": "button",
        "text": "",
        "x": 621,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 671,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 711,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run All",
        "x": 768,
        "y": 1022,
        "w": 89,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 857,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 455,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 514,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 550,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 586,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(0px, 0px) scale(1)",
      "nodes": [],
      "edges": []
    }
  },
  "ep1-s2-deleted": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
        "x": 766,
        "y": 263,
        "w": 148,
        "h": 100
      },
      {
        "tag": "div",
        "text": "Image Loader Drop image here or click to upload Supports JPEG, PNG, WebP (max 10",
        "testid": "rf__node-LoadImage-71329618",
        "x": 480,
        "y": 160,
        "w": 280,
        "h": 222
      },
      {
        "tag": "button",
        "text": "",
        "x": 727,
        "y": 169,
        "w": 24,
        "h": 24
      },
      {
        "tag": "div",
        "text": "Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 480,
        "y": 520,
        "w": 280,
        "h": 164
      },
      {
        "tag": "button",
        "text": "",
        "x": 727,
        "y": 529,
        "w": 24,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 731,
        "y": 565,
        "w": 16,
        "h": 16
      },
      {
        "tag": "div",
        "text": "Seedance 2.5 Omni Reference 200 Reference videos 0/10 Reference images 1/30 Refe",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 920,
        "y": 200,
        "w": 280,
        "h": 529
      },
      {
        "tag": "button",
        "text": "Seedance 2.5 Omni Reference 200",
        "x": 929,
        "y": 209,
        "w": 234,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 1167,
        "y": 209,
        "w": 24,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 929,
        "y": 265,
        "w": 40,
        "h": 40
      },
      {
        "tag": "div",
        "text": "",
        "x": 929,
        "y": 329,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 973,
        "y": 329,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 929,
        "y": 394,
        "w": 40,
        "h": 40
      },
      {
        "tag": "label",
        "text": "Prompt",
        "x": 929,
        "y": 444,
        "w": 42,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1175,
        "y": 444,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "16:9",
        "x": 929,
        "y": 588,
        "w": 82,
        "h": 32
      },
      {
        "tag": "button",
        "text": "5″",
        "x": 1019,
        "y": 588,
        "w": 82,
        "h": 32
      },
      {
        "tag": "button",
        "text": "720p",
        "x": 1109,
        "y": 588,
        "w": 82,
        "h": 32
      },
      {
        "tag": "label",
        "text": "Real Faces Mode · On",
        "x": 938,
        "y": 646,
        "w": 169,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1113,
        "y": 647,
        "w": 14,
        "h": 14
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1152,
        "y": 646,
        "w": 29,
        "h": 17
      },
      {
        "tag": "button",
        "text": "Run",
        "x": 929,
        "y": 688,
        "w": 68,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 997,
        "y": 688,
        "w": 24,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1159,
        "y": 688,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 621,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 671,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 711,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run All",
        "x": 768,
        "y": 1022,
        "w": 89,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 857,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 455,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 514,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 550,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 586,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(0px, 0px) scale(1)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(480px, 160px)",
          "x": 480,
          "y": 160,
          "w": 280,
          "h": 222,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 760,
              "cy": 277
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(480px, 520px)",
          "x": 480,
          "y": 520,
          "w": 280,
          "h": 164,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 480,
              "cy": 624
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 777,
              "cy": 613
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(920px, 200px)",
          "x": 920,
          "y": 200,
          "w": 280,
          "h": 529,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 920,
              "cy": 518
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 920,
              "cy": 349
            },
            {
              "id": "edge-in-image_2",
              "type": "target",
              "cx": 920,
              "cy": 349
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 920,
              "cy": 284
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 920,
              "cy": 413
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 1217,
              "cy": 476
            }
          ]
        }
      ],
      "edges": [
        {
          "id": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
          "d": "M766,277 C840,277 840,348.6953125 914,348.6953125"
        }
      ]
    }
  },
  "ep1-s2-edge1": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
        "x": 766,
        "y": 263,
        "w": 148,
        "h": 100
      },
      {
        "tag": "div",
        "text": "Image Loader Drop image here or click to upload Supports JPEG, PNG, WebP (max 10",
        "testid": "rf__node-LoadImage-71329618",
        "x": 480,
        "y": 160,
        "w": 280,
        "h": 222
      },
      {
        "tag": "button",
        "text": "",
        "x": 727,
        "y": 169,
        "w": 24,
        "h": 24
      },
      {
        "tag": "div",
        "text": "Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 480,
        "y": 520,
        "w": 280,
        "h": 164
      },
      {
        "tag": "button",
        "text": "",
        "x": 727,
        "y": 529,
        "w": 24,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 731,
        "y": 565,
        "w": 16,
        "h": 16
      },
      {
        "tag": "div",
        "text": "Seedance 2.5 Omni Reference 200 Reference videos 0/10 Reference images 1/30 Refe",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 920,
        "y": 200,
        "w": 280,
        "h": 529
      },
      {
        "tag": "button",
        "text": "Seedance 2.5 Omni Reference 200",
        "x": 929,
        "y": 209,
        "w": 234,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 1167,
        "y": 209,
        "w": 24,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 929,
        "y": 265,
        "w": 40,
        "h": 40
      },
      {
        "tag": "div",
        "text": "",
        "x": 929,
        "y": 329,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 973,
        "y": 329,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 929,
        "y": 394,
        "w": 40,
        "h": 40
      },
      {
        "tag": "label",
        "text": "Prompt",
        "x": 929,
        "y": 444,
        "w": 42,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1175,
        "y": 444,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "16:9",
        "x": 929,
        "y": 588,
        "w": 82,
        "h": 32
      },
      {
        "tag": "button",
        "text": "5″",
        "x": 1019,
        "y": 588,
        "w": 82,
        "h": 32
      },
      {
        "tag": "button",
        "text": "720p",
        "x": 1109,
        "y": 588,
        "w": 82,
        "h": 32
      },
      {
        "tag": "label",
        "text": "Real Faces Mode · On",
        "x": 938,
        "y": 646,
        "w": 169,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1113,
        "y": 647,
        "w": 14,
        "h": 14
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1152,
        "y": 646,
        "w": 29,
        "h": 17
      },
      {
        "tag": "button",
        "text": "Run",
        "x": 929,
        "y": 688,
        "w": 68,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 997,
        "y": 688,
        "w": 24,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1159,
        "y": 688,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 621,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 671,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 711,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run All",
        "x": 768,
        "y": 1022,
        "w": 89,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 857,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 455,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 514,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 550,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 586,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(0px, 0px) scale(1)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(480px, 160px)",
          "x": 480,
          "y": 160,
          "w": 280,
          "h": 222,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 760,
              "cy": 277
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(480px, 520px)",
          "x": 480,
          "y": 520,
          "w": 280,
          "h": 164,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 480,
              "cy": 624
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 777,
              "cy": 613
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(920px, 200px)",
          "x": 920,
          "y": 200,
          "w": 280,
          "h": 529,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 920,
              "cy": 518
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 920,
              "cy": 349
            },
            {
              "id": "edge-in-image_2",
              "type": "target",
              "cx": 920,
              "cy": 349
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 920,
              "cy": 284
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 920,
              "cy": 413
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 1217,
              "cy": 476
            }
          ]
        }
      ],
      "edges": [
        {
          "id": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
          "d": "M766,277 C840,277 840,348.6953125 914,348.6953125"
        }
      ]
    }
  },
  "ep1-s2-edge2": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
        "x": 766,
        "y": 263,
        "w": 148,
        "h": 100
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
        "x": 766,
        "y": 525,
        "w": 148,
        "h": 97
      },
      {
        "tag": "div",
        "text": "Image Loader Drop image here or click to upload Supports JPEG, PNG, WebP (max 10",
        "testid": "rf__node-LoadImage-71329618",
        "x": 480,
        "y": 160,
        "w": 280,
        "h": 222
      },
      {
        "tag": "button",
        "text": "",
        "x": 727,
        "y": 169,
        "w": 24,
        "h": 24
      },
      {
        "tag": "div",
        "text": "Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 480,
        "y": 520,
        "w": 280,
        "h": 164
      },
      {
        "tag": "button",
        "text": "",
        "x": 727,
        "y": 529,
        "w": 24,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 731,
        "y": 565,
        "w": 16,
        "h": 16
      },
      {
        "tag": "div",
        "text": "Seedance 2.5 Omni Reference 200 Reference videos 0/10 Reference images 1/30 Refe",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 920,
        "y": 200,
        "w": 280,
        "h": 570
      },
      {
        "tag": "button",
        "text": "Seedance 2.5 Omni Reference 200",
        "x": 929,
        "y": 209,
        "w": 234,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 1167,
        "y": 209,
        "w": 24,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 929,
        "y": 265,
        "w": 40,
        "h": 40
      },
      {
        "tag": "div",
        "text": "",
        "x": 929,
        "y": 329,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 973,
        "y": 329,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 929,
        "y": 394,
        "w": 40,
        "h": 40
      },
      {
        "tag": "label",
        "text": "Prompt",
        "x": 929,
        "y": 444,
        "w": 42,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1175,
        "y": 444,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "16:9",
        "x": 929,
        "y": 629,
        "w": 82,
        "h": 32
      },
      {
        "tag": "button",
        "text": "5″",
        "x": 1019,
        "y": 629,
        "w": 82,
        "h": 32
      },
      {
        "tag": "button",
        "text": "720p",
        "x": 1109,
        "y": 629,
        "w": 82,
        "h": 32
      },
      {
        "tag": "label",
        "text": "Real Faces Mode · On",
        "x": 938,
        "y": 687,
        "w": 169,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1113,
        "y": 688,
        "w": 14,
        "h": 14
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1152,
        "y": 687,
        "w": 29,
        "h": 17
      },
      {
        "tag": "button",
        "text": "Run",
        "x": 929,
        "y": 729,
        "w": 68,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 997,
        "y": 729,
        "w": 24,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1159,
        "y": 729,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 621,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 671,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 711,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run All",
        "x": 768,
        "y": 1022,
        "w": 89,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 857,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 455,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 514,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 550,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 586,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(0px, 0px) scale(1)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(480px, 160px)",
          "x": 480,
          "y": 160,
          "w": 280,
          "h": 222,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 760,
              "cy": 277
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(480px, 520px)",
          "x": 480,
          "y": 520,
          "w": 280,
          "h": 164,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 480,
              "cy": 624
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 760,
              "cy": 608
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(920px, 200px)",
          "x": 920,
          "y": 200,
          "w": 280,
          "h": 570,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 920,
              "cy": 539
            },
            {
              "id": "edge-in-text_input-2",
              "type": "target",
              "cx": 920,
              "cy": 539
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 920,
              "cy": 349
            },
            {
              "id": "edge-in-image_2",
              "type": "target",
              "cx": 920,
              "cy": 349
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 920,
              "cy": 284
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 920,
              "cy": 413
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 1217,
              "cy": 496
            }
          ]
        }
      ],
      "edges": [
        {
          "id": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
          "d": "M766,277 C840,277 840,348.59375 914,348.59375"
        },
        {
          "id": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
          "d": "M766,608 C840,608 840,538.59375 914,538.59375"
        }
      ]
    }
  },
  "ep1-s2-edge2b": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
        "x": 766,
        "y": 263,
        "w": 148,
        "h": 100
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
        "x": 766,
        "y": 525,
        "w": 148,
        "h": 97
      },
      {
        "tag": "div",
        "text": "Image Loader Drop image here or click to upload Supports JPEG, PNG, WebP (max 10",
        "testid": "rf__node-LoadImage-71329618",
        "x": 480,
        "y": 160,
        "w": 280,
        "h": 222
      },
      {
        "tag": "button",
        "text": "",
        "x": 727,
        "y": 169,
        "w": 24,
        "h": 24
      },
      {
        "tag": "div",
        "text": "Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 480,
        "y": 520,
        "w": 280,
        "h": 164
      },
      {
        "tag": "button",
        "text": "",
        "x": 727,
        "y": 529,
        "w": 24,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 731,
        "y": 565,
        "w": 16,
        "h": 16
      },
      {
        "tag": "div",
        "text": "Seedance 2.5 Omni Reference 200 Reference videos 0/10 Reference images 1/30 Refe",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 920,
        "y": 200,
        "w": 280,
        "h": 570
      },
      {
        "tag": "button",
        "text": "Seedance 2.5 Omni Reference 200",
        "x": 929,
        "y": 209,
        "w": 234,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 1167,
        "y": 209,
        "w": 24,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 929,
        "y": 265,
        "w": 40,
        "h": 40
      },
      {
        "tag": "div",
        "text": "",
        "x": 929,
        "y": 329,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 973,
        "y": 329,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 929,
        "y": 394,
        "w": 40,
        "h": 40
      },
      {
        "tag": "label",
        "text": "Prompt",
        "x": 929,
        "y": 444,
        "w": 42,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1175,
        "y": 444,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "16:9",
        "x": 929,
        "y": 629,
        "w": 82,
        "h": 32
      },
      {
        "tag": "button",
        "text": "5″",
        "x": 1019,
        "y": 629,
        "w": 82,
        "h": 32
      },
      {
        "tag": "button",
        "text": "720p",
        "x": 1109,
        "y": 629,
        "w": 82,
        "h": 32
      },
      {
        "tag": "label",
        "text": "Real Faces Mode · On",
        "x": 938,
        "y": 687,
        "w": 169,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1113,
        "y": 688,
        "w": 14,
        "h": 14
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1152,
        "y": 687,
        "w": 29,
        "h": 17
      },
      {
        "tag": "button",
        "text": "Run",
        "x": 929,
        "y": 729,
        "w": 68,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 997,
        "y": 729,
        "w": 24,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1159,
        "y": 729,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 621,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 671,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 711,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run All",
        "x": 768,
        "y": 1022,
        "w": 89,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 857,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 455,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 514,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 550,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 586,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(0px, 0px) scale(1)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(480px, 160px)",
          "x": 480,
          "y": 160,
          "w": 280,
          "h": 222,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 760,
              "cy": 277
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(480px, 520px)",
          "x": 480,
          "y": 520,
          "w": 280,
          "h": 164,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 480,
              "cy": 624
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 760,
              "cy": 608
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(920px, 200px)",
          "x": 920,
          "y": 200,
          "w": 280,
          "h": 570,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 920,
              "cy": 539
            },
            {
              "id": "edge-in-text_input-2",
              "type": "target",
              "cx": 920,
              "cy": 539
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 920,
              "cy": 349
            },
            {
              "id": "edge-in-image_2",
              "type": "target",
              "cx": 920,
              "cy": 349
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 920,
              "cy": 284
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 920,
              "cy": 413
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 1217,
              "cy": 496
            }
          ]
        }
      ],
      "edges": [
        {
          "id": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
          "d": "M766,277 C840,277 840,348.59375 914,348.59375"
        },
        {
          "id": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
          "d": "M766,608 C840,608 840,538.59375 914,538.59375"
        }
      ]
    }
  },
  "ep1-s2-edgehover": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
        "x": 766,
        "y": 263,
        "w": 148,
        "h": 100
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
        "x": 766,
        "y": 525,
        "w": 148,
        "h": 97
      },
      {
        "tag": "button",
        "text": "",
        "x": 824,
        "y": 571,
        "w": 18,
        "h": 18
      },
      {
        "tag": "div",
        "text": "Image Loader Drop image here or click to upload Supports JPEG, PNG, WebP (max 10",
        "testid": "rf__node-LoadImage-71329618",
        "x": 480,
        "y": 160,
        "w": 280,
        "h": 222
      },
      {
        "tag": "button",
        "text": "",
        "x": 727,
        "y": 169,
        "w": 24,
        "h": 24
      },
      {
        "tag": "div",
        "text": "Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 480,
        "y": 520,
        "w": 280,
        "h": 164
      },
      {
        "tag": "button",
        "text": "",
        "x": 727,
        "y": 529,
        "w": 24,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 731,
        "y": 565,
        "w": 16,
        "h": 16
      },
      {
        "tag": "div",
        "text": "Seedance 2.5 Omni Reference 200 Reference videos 0/10 Reference images 1/30 Refe",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 920,
        "y": 200,
        "w": 280,
        "h": 570
      },
      {
        "tag": "button",
        "text": "Seedance 2.5 Omni Reference 200",
        "x": 929,
        "y": 209,
        "w": 234,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 1167,
        "y": 209,
        "w": 24,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 929,
        "y": 265,
        "w": 40,
        "h": 40
      },
      {
        "tag": "div",
        "text": "",
        "x": 929,
        "y": 329,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 973,
        "y": 329,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 929,
        "y": 394,
        "w": 40,
        "h": 40
      },
      {
        "tag": "label",
        "text": "Prompt",
        "x": 929,
        "y": 444,
        "w": 42,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1175,
        "y": 444,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "16:9",
        "x": 929,
        "y": 629,
        "w": 82,
        "h": 32
      },
      {
        "tag": "button",
        "text": "5″",
        "x": 1019,
        "y": 629,
        "w": 82,
        "h": 32
      },
      {
        "tag": "button",
        "text": "720p",
        "x": 1109,
        "y": 629,
        "w": 82,
        "h": 32
      },
      {
        "tag": "label",
        "text": "Real Faces Mode · On",
        "x": 938,
        "y": 687,
        "w": 169,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1113,
        "y": 688,
        "w": 14,
        "h": 14
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1152,
        "y": 687,
        "w": 29,
        "h": 17
      },
      {
        "tag": "button",
        "text": "Run",
        "x": 929,
        "y": 729,
        "w": 68,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 997,
        "y": 729,
        "w": 24,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1159,
        "y": 729,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 621,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 671,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 711,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run All",
        "x": 768,
        "y": 1022,
        "w": 89,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 857,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 455,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 514,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 550,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 586,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(0px, 0px) scale(1)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(480px, 160px)",
          "x": 480,
          "y": 160,
          "w": 280,
          "h": 222,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 760,
              "cy": 277
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(480px, 520px)",
          "x": 480,
          "y": 520,
          "w": 280,
          "h": 164,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 480,
              "cy": 624
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 760,
              "cy": 608
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(920px, 200px)",
          "x": 920,
          "y": 200,
          "w": 280,
          "h": 570,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 920,
              "cy": 539
            },
            {
              "id": "edge-in-text_input-2",
              "type": "target",
              "cx": 920,
              "cy": 539
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 920,
              "cy": 349
            },
            {
              "id": "edge-in-image_2",
              "type": "target",
              "cx": 920,
              "cy": 349
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 920,
              "cy": 284
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 920,
              "cy": 413
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 1217,
              "cy": 496
            }
          ]
        }
      ],
      "edges": [
        {
          "id": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
          "d": "M766,277 C840,277 840,348.59375 914,348.59375"
        },
        {
          "id": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
          "d": "M766,608 C840,608 840,538.59375 914,538.59375"
        }
      ]
    }
  },
  "ep1-s2-edgesel": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
        "x": 766,
        "y": 263,
        "w": 148,
        "h": 100
      },
      {
        "tag": "div",
        "text": "Image Loader Drop image here or click to upload Supports JPEG, PNG, WebP (max 10",
        "testid": "rf__node-LoadImage-71329618",
        "x": 480,
        "y": 160,
        "w": 280,
        "h": 222
      },
      {
        "tag": "button",
        "text": "",
        "x": 727,
        "y": 169,
        "w": 24,
        "h": 24
      },
      {
        "tag": "div",
        "text": "Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 480,
        "y": 520,
        "w": 280,
        "h": 164
      },
      {
        "tag": "button",
        "text": "",
        "x": 727,
        "y": 529,
        "w": 24,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 731,
        "y": 565,
        "w": 16,
        "h": 16
      },
      {
        "tag": "div",
        "text": "Seedance 2.5 Omni Reference 200 Reference videos 0/10 Reference images 1/30 Refe",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 920,
        "y": 200,
        "w": 280,
        "h": 529
      },
      {
        "tag": "button",
        "text": "Seedance 2.5 Omni Reference 200",
        "x": 929,
        "y": 209,
        "w": 234,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 1167,
        "y": 209,
        "w": 24,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 929,
        "y": 265,
        "w": 40,
        "h": 40
      },
      {
        "tag": "div",
        "text": "",
        "x": 929,
        "y": 329,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 973,
        "y": 329,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 929,
        "y": 394,
        "w": 40,
        "h": 40
      },
      {
        "tag": "label",
        "text": "Prompt",
        "x": 929,
        "y": 444,
        "w": 42,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1175,
        "y": 444,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "16:9",
        "x": 929,
        "y": 588,
        "w": 82,
        "h": 32
      },
      {
        "tag": "button",
        "text": "5″",
        "x": 1019,
        "y": 588,
        "w": 82,
        "h": 32
      },
      {
        "tag": "button",
        "text": "720p",
        "x": 1109,
        "y": 588,
        "w": 82,
        "h": 32
      },
      {
        "tag": "label",
        "text": "Real Faces Mode · On",
        "x": 938,
        "y": 646,
        "w": 169,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1113,
        "y": 647,
        "w": 14,
        "h": 14
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1152,
        "y": 646,
        "w": 29,
        "h": 17
      },
      {
        "tag": "button",
        "text": "Run",
        "x": 929,
        "y": 688,
        "w": 68,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 997,
        "y": 688,
        "w": 24,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1159,
        "y": 688,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 621,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 671,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 711,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run All",
        "x": 768,
        "y": 1022,
        "w": 89,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 857,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 455,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 514,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 550,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 586,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(0px, 0px) scale(1)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(480px, 160px)",
          "x": 480,
          "y": 160,
          "w": 280,
          "h": 222,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 760,
              "cy": 277
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(480px, 520px)",
          "x": 480,
          "y": 520,
          "w": 280,
          "h": 164,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 480,
              "cy": 624
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 777,
              "cy": 613
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(920px, 200px)",
          "x": 920,
          "y": 200,
          "w": 280,
          "h": 529,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 920,
              "cy": 518
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 920,
              "cy": 349
            },
            {
              "id": "edge-in-image_2",
              "type": "target",
              "cx": 920,
              "cy": 349
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 920,
              "cy": 284
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 920,
              "cy": 413
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 1217,
              "cy": 476
            }
          ]
        }
      ],
      "edges": [
        {
          "id": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
          "d": "M766,277 C840,277 840,348.6953125 914,348.6953125"
        }
      ]
    }
  },
  "ep1-s2-start": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "div",
        "text": "Image Loader Drop image here or click to upload Supports JPEG, PNG, WebP (max 10",
        "testid": "rf__node-LoadImage-71329618",
        "x": 480,
        "y": 160,
        "w": 280,
        "h": 222
      },
      {
        "tag": "button",
        "text": "",
        "x": 727,
        "y": 169,
        "w": 24,
        "h": 24
      },
      {
        "tag": "div",
        "text": "Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 480,
        "y": 520,
        "w": 280,
        "h": 164
      },
      {
        "tag": "button",
        "text": "",
        "x": 727,
        "y": 529,
        "w": 24,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 731,
        "y": 565,
        "w": 16,
        "h": 16
      },
      {
        "tag": "div",
        "text": "Seedance 2.5 Omni Reference 200 Reference videos 0/10 Reference images 0/30 Refe",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 920,
        "y": 200,
        "w": 280,
        "h": 529
      },
      {
        "tag": "button",
        "text": "Seedance 2.5 Omni Reference 200",
        "x": 929,
        "y": 209,
        "w": 234,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 1167,
        "y": 209,
        "w": 24,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 929,
        "y": 265,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 929,
        "y": 329,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 929,
        "y": 394,
        "w": 40,
        "h": 40
      },
      {
        "tag": "label",
        "text": "Prompt",
        "x": 929,
        "y": 444,
        "w": 42,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1175,
        "y": 444,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "16:9",
        "x": 929,
        "y": 588,
        "w": 82,
        "h": 32
      },
      {
        "tag": "button",
        "text": "5″",
        "x": 1019,
        "y": 588,
        "w": 82,
        "h": 32
      },
      {
        "tag": "button",
        "text": "720p",
        "x": 1109,
        "y": 588,
        "w": 82,
        "h": 32
      },
      {
        "tag": "label",
        "text": "Real Faces Mode · On",
        "x": 938,
        "y": 646,
        "w": 169,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1113,
        "y": 647,
        "w": 14,
        "h": 14
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1152,
        "y": 646,
        "w": 29,
        "h": 17
      },
      {
        "tag": "button",
        "text": "Run",
        "x": 929,
        "y": 688,
        "w": 68,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 997,
        "y": 688,
        "w": 24,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1159,
        "y": 688,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 621,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 671,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 711,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run All",
        "x": 768,
        "y": 1022,
        "w": 89,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 857,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 455,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 514,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 550,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 586,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(0px, 0px) scale(1)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(480px, 160px)",
          "x": 480,
          "y": 160,
          "w": 280,
          "h": 222,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 777,
              "cy": 282
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(480px, 520px)",
          "x": 480,
          "y": 520,
          "w": 280,
          "h": 164,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 480,
              "cy": 624
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 777,
              "cy": 613
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(920px, 200px)",
          "x": 920,
          "y": 200,
          "w": 280,
          "h": 529,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 920,
              "cy": 518
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 920,
              "cy": 349
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 920,
              "cy": 284
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 920,
              "cy": 413
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 1217,
              "cy": 476
            }
          ]
        }
      ],
      "edges": []
    }
  },
  "ep1-s3-allcollapsed": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
        "x": 766,
        "y": 171,
        "w": 148,
        "h": 68
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
        "x": 766,
        "y": 211,
        "w": 148,
        "h": 348
      },
      {
        "tag": "div",
        "text": "Image Loader",
        "testid": "rf__node-LoadImage-71329618",
        "x": 480,
        "y": 160,
        "w": 280,
        "h": 38
      },
      {
        "tag": "div",
        "text": "Text Prompt 0/10",
        "testid": "rf__node-Text-890d5e5c",
        "x": 480,
        "y": 520,
        "w": 280,
        "h": 38
      },
      {
        "tag": "div",
        "text": "Seedance 2.5 Omni Reference 200 Prompt 1/10 1 Image 1/30 1 Video 0/10 Audio 0/10",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 920,
        "y": 200,
        "w": 280,
        "h": 38
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 621,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 671,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 711,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run All",
        "x": 768,
        "y": 1022,
        "w": 89,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 857,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 455,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 514,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 550,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 586,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(0px, 0px) scale(1)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(480px, 160px)",
          "x": 480,
          "y": 160,
          "w": 280,
          "h": 38,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 760,
              "cy": 185
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(480px, 520px)",
          "x": 480,
          "y": 520,
          "w": 280,
          "h": 38,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 480,
              "cy": 545
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 760,
              "cy": 545
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(920px, 200px)",
          "x": 920,
          "y": 200,
          "w": 280,
          "h": 38,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-2",
              "type": "target",
              "cx": 920,
              "cy": 225
            },
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 920,
              "cy": 225
            },
            {
              "id": "edge-in-image_2",
              "type": "target",
              "cx": 920,
              "cy": 225
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 920,
              "cy": 225
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 920,
              "cy": 225
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 920,
              "cy": 225
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 1217,
              "cy": 230
            }
          ]
        }
      ],
      "edges": [
        {
          "id": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
          "d": "M766,184.75 C840,184.75 840,224.75 914,224.75"
        },
        {
          "id": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
          "d": "M766,544.75 C840,544.75 840,224.75 914,224.75"
        }
      ]
    }
  },
  "ep1-s3-allexpanded": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
        "x": 766,
        "y": 263,
        "w": 148,
        "h": 100
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
        "x": 766,
        "y": 525,
        "w": 148,
        "h": 97
      },
      {
        "tag": "div",
        "text": "Image Loader Drop image here or click to upload Supports JPEG, PNG, WebP (max 10",
        "testid": "rf__node-LoadImage-71329618",
        "x": 480,
        "y": 160,
        "w": 280,
        "h": 222
      },
      {
        "tag": "button",
        "text": "",
        "x": 727,
        "y": 169,
        "w": 24,
        "h": 24
      },
      {
        "tag": "div",
        "text": "Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 480,
        "y": 520,
        "w": 280,
        "h": 164
      },
      {
        "tag": "button",
        "text": "",
        "x": 727,
        "y": 529,
        "w": 24,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 731,
        "y": 565,
        "w": 16,
        "h": 16
      },
      {
        "tag": "div",
        "text": "Seedance 2.5 Omni Reference 200 Reference videos 0/10 Reference images 1/30 Refe",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 920,
        "y": 200,
        "w": 280,
        "h": 570
      },
      {
        "tag": "button",
        "text": "Seedance 2.5 Omni Reference 200",
        "x": 929,
        "y": 209,
        "w": 234,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 1167,
        "y": 209,
        "w": 24,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 929,
        "y": 265,
        "w": 40,
        "h": 40
      },
      {
        "tag": "div",
        "text": "",
        "x": 929,
        "y": 329,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 973,
        "y": 329,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 929,
        "y": 394,
        "w": 40,
        "h": 40
      },
      {
        "tag": "label",
        "text": "Prompt",
        "x": 929,
        "y": 444,
        "w": 42,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1175,
        "y": 444,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "16:9",
        "x": 929,
        "y": 629,
        "w": 82,
        "h": 32
      },
      {
        "tag": "button",
        "text": "5″",
        "x": 1019,
        "y": 629,
        "w": 82,
        "h": 32
      },
      {
        "tag": "button",
        "text": "720p",
        "x": 1109,
        "y": 629,
        "w": 82,
        "h": 32
      },
      {
        "tag": "label",
        "text": "Real Faces Mode · On",
        "x": 938,
        "y": 687,
        "w": 169,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1113,
        "y": 688,
        "w": 14,
        "h": 14
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1152,
        "y": 687,
        "w": 29,
        "h": 17
      },
      {
        "tag": "button",
        "text": "Run",
        "x": 929,
        "y": 729,
        "w": 68,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 997,
        "y": 729,
        "w": 24,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1159,
        "y": 729,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 621,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 671,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 711,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run All",
        "x": 768,
        "y": 1022,
        "w": 89,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 857,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 455,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 514,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 550,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 586,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(0px, 0px) scale(1)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(480px, 160px)",
          "x": 480,
          "y": 160,
          "w": 280,
          "h": 222,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 760,
              "cy": 277
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(480px, 520px)",
          "x": 480,
          "y": 520,
          "w": 280,
          "h": 164,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 480,
              "cy": 624
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 760,
              "cy": 608
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(920px, 200px)",
          "x": 920,
          "y": 200,
          "w": 280,
          "h": 570,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 920,
              "cy": 539
            },
            {
              "id": "edge-in-text_input-2",
              "type": "target",
              "cx": 920,
              "cy": 539
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 920,
              "cy": 349
            },
            {
              "id": "edge-in-image_2",
              "type": "target",
              "cx": 920,
              "cy": 349
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 920,
              "cy": 284
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 920,
              "cy": 413
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 1217,
              "cy": 496
            }
          ]
        }
      ],
      "edges": [
        {
          "id": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
          "d": "M766,277 C840,277 840,348.59375 914,348.59375"
        },
        {
          "id": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
          "d": "M766,608 C840,608 840,538.59375 914,538.59375"
        }
      ]
    }
  },
  "ep1-s3-autocollapse": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
        "x": 766,
        "y": 263,
        "w": 148,
        "h": 100
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
        "x": 766,
        "y": 525,
        "w": 148,
        "h": 97
      },
      {
        "tag": "div",
        "text": "Image Loader Drop image here or click to upload Supports JPEG, PNG, WebP (max 10",
        "testid": "rf__node-LoadImage-71329618",
        "x": 480,
        "y": 160,
        "w": 280,
        "h": 222
      },
      {
        "tag": "button",
        "text": "",
        "x": 727,
        "y": 169,
        "w": 24,
        "h": 24
      },
      {
        "tag": "div",
        "text": "Untitled Node Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 480,
        "y": 520,
        "w": 280,
        "h": 164
      },
      {
        "tag": "button",
        "text": "",
        "x": 727,
        "y": 529,
        "w": 24,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 731,
        "y": 565,
        "w": 16,
        "h": 16
      },
      {
        "tag": "div",
        "text": "Seedance 2.5 Omni Reference 200 Reference videos 0/10 Reference images 1/30 Refe",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 920,
        "y": 200,
        "w": 280,
        "h": 570
      },
      {
        "tag": "button",
        "text": "Seedance 2.5 Omni Reference 200",
        "x": 929,
        "y": 209,
        "w": 234,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 1167,
        "y": 209,
        "w": 24,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 929,
        "y": 265,
        "w": 40,
        "h": 40
      },
      {
        "tag": "div",
        "text": "",
        "x": 929,
        "y": 329,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 973,
        "y": 329,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 929,
        "y": 394,
        "w": 40,
        "h": 40
      },
      {
        "tag": "label",
        "text": "Prompt",
        "x": 929,
        "y": 444,
        "w": 42,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1175,
        "y": 444,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "16:9",
        "x": 929,
        "y": 629,
        "w": 82,
        "h": 32
      },
      {
        "tag": "button",
        "text": "5″",
        "x": 1019,
        "y": 629,
        "w": 82,
        "h": 32
      },
      {
        "tag": "button",
        "text": "720p",
        "x": 1109,
        "y": 629,
        "w": 82,
        "h": 32
      },
      {
        "tag": "label",
        "text": "Real Faces Mode · On",
        "x": 938,
        "y": 687,
        "w": 169,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1113,
        "y": 688,
        "w": 14,
        "h": 14
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1152,
        "y": 687,
        "w": 29,
        "h": 17
      },
      {
        "tag": "button",
        "text": "Run",
        "x": 929,
        "y": 729,
        "w": 68,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 997,
        "y": 729,
        "w": 24,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1159,
        "y": 729,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 601,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 651,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 691,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run Selected",
        "x": 748,
        "y": 1022,
        "w": 130,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 878,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 416,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 476,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 512,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 548,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1455,
        "y": 967,
        "w": 44,
        "h": 44
      },
      {
        "tag": "button",
        "text": "",
        "x": 1487,
        "y": 963,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "1",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(0px, 0px) scale(1)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(480px, 160px)",
          "x": 480,
          "y": 160,
          "w": 280,
          "h": 222,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 760,
              "cy": 277
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(480px, 520px)",
          "x": 480,
          "y": 520,
          "w": 280,
          "h": 164,
          "selected": true,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 480,
              "cy": 624
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 760,
              "cy": 608
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(920px, 200px)",
          "x": 920,
          "y": 200,
          "w": 280,
          "h": 570,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 920,
              "cy": 539
            },
            {
              "id": "edge-in-text_input-2",
              "type": "target",
              "cx": 920,
              "cy": 539
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 920,
              "cy": 349
            },
            {
              "id": "edge-in-image_2",
              "type": "target",
              "cx": 920,
              "cy": 349
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 920,
              "cy": 284
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 920,
              "cy": 413
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 1217,
              "cy": 496
            }
          ]
        }
      ],
      "edges": [
        {
          "id": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
          "d": "M766,277 C840,277 840,348.59375 914,348.59375"
        },
        {
          "id": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
          "d": "M766,608 C840,608 840,538.59375 914,538.59375"
        }
      ]
    }
  },
  "ep1-s3-collapsed1": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
        "x": 766,
        "y": 211,
        "w": 148,
        "h": 80
      },
      {
        "tag": "div",
        "text": "Image Loader Drop image here or click to upload Supports JPEG, PNG, WebP (max 10",
        "testid": "rf__node-LoadImage-71329618",
        "x": 480,
        "y": 160,
        "w": 280,
        "h": 222
      },
      {
        "tag": "button",
        "text": "",
        "x": 727,
        "y": 169,
        "w": 24,
        "h": 24
      },
      {
        "tag": "div",
        "text": "Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 480,
        "y": 520,
        "w": 280,
        "h": 164
      },
      {
        "tag": "button",
        "text": "",
        "x": 727,
        "y": 529,
        "w": 24,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 731,
        "y": 565,
        "w": 16,
        "h": 16
      },
      {
        "tag": "div",
        "text": "Untitled Node Seedance 2.5 Omni Reference 200 Prompt 1/10 1 Image 1/30 1 Video 0",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 920,
        "y": 200,
        "w": 280,
        "h": 38
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 601,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 651,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 691,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run Selected",
        "x": 748,
        "y": 1022,
        "w": 130,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 878,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 416,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 476,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 512,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 548,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1455,
        "y": 967,
        "w": 44,
        "h": 44
      },
      {
        "tag": "button",
        "text": "",
        "x": 1487,
        "y": 963,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "1",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(0px, 0px) scale(1)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(480px, 160px)",
          "x": 480,
          "y": 160,
          "w": 280,
          "h": 222,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 760,
              "cy": 277
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(480px, 520px)",
          "x": 480,
          "y": 520,
          "w": 280,
          "h": 164,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 480,
              "cy": 624
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 760,
              "cy": 608
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(920px, 200px)",
          "x": 920,
          "y": 200,
          "w": 280,
          "h": 38,
          "selected": true,
          "handles": [
            {
              "id": "edge-in-text_input-2",
              "type": "target",
              "cx": 920,
              "cy": 225
            },
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 920,
              "cy": 225
            },
            {
              "id": "edge-in-image_2",
              "type": "target",
              "cx": 920,
              "cy": 225
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 920,
              "cy": 225
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 920,
              "cy": 225
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 920,
              "cy": 225
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 1217,
              "cy": 230
            }
          ]
        }
      ],
      "edges": [
        {
          "id": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
          "d": "M766,277 C840,277 840,224.75 914,224.75"
        },
        {
          "id": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
          "d": "M766,608 C840,608 840,224.75 914,224.75"
        }
      ]
    }
  },
  "ep1-s3-collapsed2": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
        "x": 766,
        "y": 211,
        "w": 148,
        "h": 80
      },
      {
        "tag": "div",
        "text": "Image Loader Drop image here or click to upload Supports JPEG, PNG, WebP (max 10",
        "testid": "rf__node-LoadImage-71329618",
        "x": 480,
        "y": 160,
        "w": 280,
        "h": 222
      },
      {
        "tag": "button",
        "text": "",
        "x": 727,
        "y": 169,
        "w": 24,
        "h": 24
      },
      {
        "tag": "div",
        "text": "Untitled Node Text Prompt 0/10",
        "testid": "rf__node-Text-890d5e5c",
        "x": 480,
        "y": 520,
        "w": 280,
        "h": 38
      },
      {
        "tag": "div",
        "text": "Seedance 2.5 Omni Reference 200 Prompt 1/10 1 Image 1/30 1 Video 0/10 Audio 0/10",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 920,
        "y": 200,
        "w": 280,
        "h": 38
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 601,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 651,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 691,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run Selected",
        "x": 748,
        "y": 1022,
        "w": 130,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 878,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 416,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 476,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 512,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 548,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1455,
        "y": 967,
        "w": 44,
        "h": 44
      },
      {
        "tag": "button",
        "text": "",
        "x": 1487,
        "y": 963,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "1",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(0px, 0px) scale(1)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(480px, 160px)",
          "x": 480,
          "y": 160,
          "w": 280,
          "h": 222,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 760,
              "cy": 277
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(480px, 520px)",
          "x": 480,
          "y": 520,
          "w": 280,
          "h": 38,
          "selected": true,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 480,
              "cy": 545
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 760,
              "cy": 545
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(920px, 200px)",
          "x": 920,
          "y": 200,
          "w": 280,
          "h": 38,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-2",
              "type": "target",
              "cx": 920,
              "cy": 225
            },
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 920,
              "cy": 225
            },
            {
              "id": "edge-in-image_2",
              "type": "target",
              "cx": 920,
              "cy": 225
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 920,
              "cy": 225
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 920,
              "cy": 225
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 920,
              "cy": 225
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 1217,
              "cy": 230
            }
          ]
        }
      ],
      "edges": [
        {
          "id": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
          "d": "M766,277 C840,277 840,224.75 914,224.75"
        },
        {
          "id": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
          "d": "M766,544.75 C840,544.75 840,224.75 914,224.75"
        }
      ]
    }
  },
  "ep1-s3-ctx": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
        "x": 766,
        "y": 171,
        "w": 148,
        "h": 68
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
        "x": 766,
        "y": 211,
        "w": 148,
        "h": 348
      },
      {
        "tag": "div",
        "text": "Image Loader",
        "testid": "rf__node-LoadImage-71329618",
        "x": 480,
        "y": 160,
        "w": 280,
        "h": 38
      },
      {
        "tag": "div",
        "text": "Text Prompt 0/10",
        "testid": "rf__node-Text-890d5e5c",
        "x": 480,
        "y": 520,
        "w": 280,
        "h": 38
      },
      {
        "tag": "div",
        "text": "Seedance 2.5 Omni Reference 200 Prompt 1/10 1 Image 1/30 1 Video 0/10 Audio 0/10",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 920,
        "y": 200,
        "w": 280,
        "h": 38
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 621,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 671,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 711,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run All",
        "x": 768,
        "y": 1022,
        "w": 89,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 857,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 455,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 514,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 550,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 586,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(0px, 0px) scale(1)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(480px, 160px)",
          "x": 480,
          "y": 160,
          "w": 280,
          "h": 38,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 760,
              "cy": 185
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(480px, 520px)",
          "x": 480,
          "y": 520,
          "w": 280,
          "h": 38,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 480,
              "cy": 545
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 760,
              "cy": 545
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(920px, 200px)",
          "x": 920,
          "y": 200,
          "w": 280,
          "h": 38,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-2",
              "type": "target",
              "cx": 920,
              "cy": 225
            },
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 920,
              "cy": 225
            },
            {
              "id": "edge-in-image_2",
              "type": "target",
              "cx": 920,
              "cy": 225
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 920,
              "cy": 225
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 920,
              "cy": 225
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 920,
              "cy": 225
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 1217,
              "cy": 230
            }
          ]
        }
      ],
      "edges": [
        {
          "id": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
          "d": "M766,184.75 C840,184.75 840,224.75 914,224.75"
        },
        {
          "id": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
          "d": "M766,544.75 C840,544.75 840,224.75 914,224.75"
        }
      ]
    }
  },
  "ep1-s3-expanded2": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
        "x": 766,
        "y": 211,
        "w": 148,
        "h": 80
      },
      {
        "tag": "div",
        "text": "Image Loader Drop image here or click to upload Supports JPEG, PNG, WebP (max 10",
        "testid": "rf__node-LoadImage-71329618",
        "x": 480,
        "y": 160,
        "w": 280,
        "h": 222
      },
      {
        "tag": "button",
        "text": "",
        "x": 727,
        "y": 169,
        "w": 24,
        "h": 24
      },
      {
        "tag": "div",
        "text": "Untitled Node Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 480,
        "y": 520,
        "w": 280,
        "h": 164
      },
      {
        "tag": "button",
        "text": "",
        "x": 727,
        "y": 529,
        "w": 24,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 731,
        "y": 565,
        "w": 16,
        "h": 16
      },
      {
        "tag": "div",
        "text": "Seedance 2.5 Omni Reference 200 Prompt 1/10 1 Image 1/30 1 Video 0/10 Audio 0/10",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 920,
        "y": 200,
        "w": 280,
        "h": 38
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 601,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 651,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 691,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run Selected",
        "x": 748,
        "y": 1022,
        "w": 130,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 878,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 416,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 476,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 512,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 548,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1455,
        "y": 967,
        "w": 44,
        "h": 44
      },
      {
        "tag": "button",
        "text": "",
        "x": 1487,
        "y": 963,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "1",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(0px, 0px) scale(1)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(480px, 160px)",
          "x": 480,
          "y": 160,
          "w": 280,
          "h": 222,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 760,
              "cy": 277
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(480px, 520px)",
          "x": 480,
          "y": 520,
          "w": 280,
          "h": 164,
          "selected": true,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 480,
              "cy": 624
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 760,
              "cy": 608
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(920px, 200px)",
          "x": 920,
          "y": 200,
          "w": 280,
          "h": 38,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-2",
              "type": "target",
              "cx": 920,
              "cy": 225
            },
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 920,
              "cy": 225
            },
            {
              "id": "edge-in-image_2",
              "type": "target",
              "cx": 920,
              "cy": 225
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 920,
              "cy": 225
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 920,
              "cy": 225
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 920,
              "cy": 225
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 1217,
              "cy": 230
            }
          ]
        }
      ],
      "edges": [
        {
          "id": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
          "d": "M766,277 C840,277 840,224.75 914,224.75"
        },
        {
          "id": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
          "d": "M766,608 C840,608 840,224.75 914,224.75"
        }
      ]
    }
  },
  "ep1-s4-fit2": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
        "x": 854,
        "y": 381,
        "w": 148,
        "h": 100
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
        "x": 854,
        "y": 643,
        "w": 148,
        "h": 97
      },
      {
        "tag": "div",
        "text": "Untitled Node Image Loader Drop image here or click to upload Supports JPEG, PNG",
        "testid": "rf__node-LoadImage-71329618",
        "x": 568,
        "y": 278,
        "w": 280,
        "h": 222
      },
      {
        "tag": "button",
        "text": "",
        "x": 815,
        "y": 287,
        "w": 24,
        "h": 24
      },
      {
        "tag": "div",
        "text": "Untitled Node Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 568,
        "y": 638,
        "w": 280,
        "h": 164
      },
      {
        "tag": "button",
        "text": "",
        "x": 815,
        "y": 647,
        "w": 24,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 819,
        "y": 683,
        "w": 16,
        "h": 16
      },
      {
        "tag": "div",
        "text": "Seedance 2.5 Omni Reference 200 Reference videos 0/10 Reference images 1/30 Refe",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 1008,
        "y": 318,
        "w": 280,
        "h": 570
      },
      {
        "tag": "button",
        "text": "Seedance 2.5 Omni Reference 200",
        "x": 1017,
        "y": 327,
        "w": 234,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 1255,
        "y": 327,
        "w": 24,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 1017,
        "y": 383,
        "w": 40,
        "h": 40
      },
      {
        "tag": "div",
        "text": "",
        "x": 1017,
        "y": 447,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1061,
        "y": 447,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1017,
        "y": 512,
        "w": 40,
        "h": 40
      },
      {
        "tag": "label",
        "text": "Prompt",
        "x": 1017,
        "y": 562,
        "w": 42,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1263,
        "y": 562,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "16:9",
        "x": 1017,
        "y": 747,
        "w": 82,
        "h": 32
      },
      {
        "tag": "button",
        "text": "5″",
        "x": 1107,
        "y": 747,
        "w": 82,
        "h": 32
      },
      {
        "tag": "button",
        "text": "720p",
        "x": 1197,
        "y": 747,
        "w": 82,
        "h": 32
      },
      {
        "tag": "label",
        "text": "Real Faces Mode · On",
        "x": 1026,
        "y": 805,
        "w": 169,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1201,
        "y": 806,
        "w": 14,
        "h": 14
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1240,
        "y": 805,
        "w": 29,
        "h": 17
      },
      {
        "tag": "button",
        "text": "Run",
        "x": 1017,
        "y": 847,
        "w": 68,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1085,
        "y": 847,
        "w": 24,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1247,
        "y": 847,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 601,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 651,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 691,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run Selected",
        "x": 748,
        "y": 1022,
        "w": 130,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 878,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 416,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 476,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 512,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 548,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1455,
        "y": 967,
        "w": 44,
        "h": 44
      },
      {
        "tag": "button",
        "text": "",
        "x": 1487,
        "y": 963,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1505,
        "y": 967,
        "w": 44,
        "h": 44
      },
      {
        "tag": "button",
        "text": "",
        "x": 1537,
        "y": 963,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Run selected",
        "x": 389,
        "y": 827,
        "w": 135,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Save as Asset",
        "x": 528,
        "y": 827,
        "w": 142,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Group",
        "x": 674,
        "y": 827,
        "w": 89,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto Layout",
        "x": 767,
        "y": 827,
        "w": 128,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Add to Chat",
        "x": 899,
        "y": 827,
        "w": 127,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 864,
        "y": 532,
        "w": 16,
        "h": 16
      }
    ],
    "flow": {
      "viewport": "translate(88px, 118px) scale(1)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(480px, 160px)",
          "x": 568,
          "y": 278,
          "w": 280,
          "h": 222,
          "selected": true,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 848,
              "cy": 395
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(480px, 520px)",
          "x": 568,
          "y": 638,
          "w": 280,
          "h": 164,
          "selected": true,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 568,
              "cy": 742
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 848,
              "cy": 726
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(920px, 200px)",
          "x": 1008,
          "y": 318,
          "w": 280,
          "h": 570,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 1008,
              "cy": 657
            },
            {
              "id": "edge-in-text_input-2",
              "type": "target",
              "cx": 1008,
              "cy": 657
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 1008,
              "cy": 467
            },
            {
              "id": "edge-in-image_2",
              "type": "target",
              "cx": 1008,
              "cy": 467
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 1008,
              "cy": 402
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 1008,
              "cy": 531
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 1305,
              "cy": 614
            }
          ]
        }
      ],
      "edges": [
        {
          "id": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
          "d": "M766,277 C840,277 840,348.59375 914,348.59375"
        },
        {
          "id": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
          "d": "M766,608 C840,608 840,538.59375 914,538.59375"
        }
      ]
    }
  },
  "ep1-s4-fitall": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
        "x": 589,
        "y": 215,
        "w": 238,
        "h": 160
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
        "x": 589,
        "y": 636,
        "w": 238,
        "h": 157
      },
      {
        "tag": "div",
        "text": "Untitled Node Image Loader Drop image here or click to upload Supports JPEG, PNG",
        "testid": "rf__node-LoadImage-71329618",
        "x": 129,
        "y": 49,
        "w": 451,
        "h": 357
      },
      {
        "tag": "button",
        "text": "",
        "x": 526,
        "y": 64,
        "w": 39,
        "h": 39
      },
      {
        "tag": "div",
        "text": "Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 129,
        "y": 629,
        "w": 451,
        "h": 264
      },
      {
        "tag": "button",
        "text": "",
        "x": 526,
        "y": 643,
        "w": 39,
        "h": 39
      },
      {
        "tag": "button",
        "text": "",
        "x": 533,
        "y": 701,
        "w": 26,
        "h": 26
      },
      {
        "tag": "div",
        "text": "Seedance 2.5 Omni Reference 200 Reference videos 0/10 Reference images 1/30 Refe",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 837,
        "y": 113,
        "w": 451,
        "h": 918
      },
      {
        "tag": "button",
        "text": "Seedance 2.5 Omni Reference 200",
        "x": 851,
        "y": 128,
        "w": 377,
        "h": 39
      },
      {
        "tag": "button",
        "text": "",
        "x": 1234,
        "y": 128,
        "w": 39,
        "h": 39
      },
      {
        "tag": "button",
        "text": "",
        "x": 851,
        "y": 218,
        "w": 65,
        "h": 65
      },
      {
        "tag": "div",
        "text": "",
        "x": 851,
        "y": 322,
        "w": 65,
        "h": 65
      },
      {
        "tag": "button",
        "text": "",
        "x": 923,
        "y": 322,
        "w": 65,
        "h": 65
      },
      {
        "tag": "button",
        "text": "",
        "x": 851,
        "y": 425,
        "w": 65,
        "h": 65
      },
      {
        "tag": "label",
        "text": "Prompt",
        "x": 851,
        "y": 506,
        "w": 67,
        "h": 26
      },
      {
        "tag": "button",
        "text": "",
        "x": 1247,
        "y": 506,
        "w": 26,
        "h": 26
      },
      {
        "tag": "button",
        "text": "16:9",
        "x": 851,
        "y": 804,
        "w": 132,
        "h": 52
      },
      {
        "tag": "button",
        "text": "5″",
        "x": 996,
        "y": 804,
        "w": 132,
        "h": 52
      },
      {
        "tag": "button",
        "text": "720p",
        "x": 1141,
        "y": 804,
        "w": 132,
        "h": 52
      },
      {
        "tag": "label",
        "text": "Real Faces Mode · On",
        "x": 866,
        "y": 897,
        "w": 272,
        "h": 26
      },
      {
        "tag": "button",
        "text": "",
        "x": 1147,
        "y": 899,
        "w": 23,
        "h": 23
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1210,
        "y": 897,
        "w": 46,
        "h": 27
      },
      {
        "tag": "button",
        "text": "Run",
        "x": 851,
        "y": 965,
        "w": 110,
        "h": 52
      },
      {
        "tag": "button",
        "text": "",
        "x": 961,
        "y": 965,
        "w": 39,
        "h": 52
      },
      {
        "tag": "button",
        "text": "",
        "x": 1221,
        "y": 965,
        "w": 52,
        "h": 52
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 601,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 651,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 691,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run Selected",
        "x": 748,
        "y": 1022,
        "w": 130,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 878,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 416,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 476,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 512,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 548,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1455,
        "y": 967,
        "w": 44,
        "h": 44
      },
      {
        "tag": "button",
        "text": "",
        "x": 1487,
        "y": 963,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "1",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(-644.012px, -208.435px) scale(1.60954)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(480px, 160px)",
          "x": 129,
          "y": 49,
          "w": 451,
          "h": 357,
          "selected": true,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 579,
              "cy": 237
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(480px, 520px)",
          "x": 129,
          "y": 629,
          "w": 451,
          "h": 264,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 129,
              "cy": 796
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 579,
              "cy": 770
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(920px, 200px)",
          "x": 837,
          "y": 113,
          "w": 451,
          "h": 918,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 837,
              "cy": 658
            },
            {
              "id": "edge-in-text_input-2",
              "type": "target",
              "cx": 837,
              "cy": 658
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 837,
              "cy": 353
            },
            {
              "id": "edge-in-image_2",
              "type": "target",
              "cx": 837,
              "cy": 353
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 837,
              "cy": 249
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 837,
              "cy": 456
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 1315,
              "cy": 590
            }
          ]
        }
      ],
      "edges": [
        {
          "id": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
          "d": "M766,277 C840,277 840,348.59375 914,348.59375"
        },
        {
          "id": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
          "d": "M766,608 C840,608 840,538.59375 914,538.59375"
        }
      ]
    }
  },
  "ep1-s4-fitall2": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
        "x": 589,
        "y": 215,
        "w": 238,
        "h": 160
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
        "x": 589,
        "y": 636,
        "w": 238,
        "h": 157
      },
      {
        "tag": "div",
        "text": "Image Loader Drop image here or click to upload Supports JPEG, PNG, WebP (max 10",
        "testid": "rf__node-LoadImage-71329618",
        "x": 129,
        "y": 49,
        "w": 451,
        "h": 357
      },
      {
        "tag": "button",
        "text": "",
        "x": 526,
        "y": 64,
        "w": 39,
        "h": 39
      },
      {
        "tag": "div",
        "text": "Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 129,
        "y": 629,
        "w": 451,
        "h": 264
      },
      {
        "tag": "button",
        "text": "",
        "x": 526,
        "y": 643,
        "w": 39,
        "h": 39
      },
      {
        "tag": "button",
        "text": "",
        "x": 533,
        "y": 701,
        "w": 26,
        "h": 26
      },
      {
        "tag": "div",
        "text": "Seedance 2.5 Omni Reference 200 Reference videos 0/10 Reference images 1/30 Refe",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 837,
        "y": 113,
        "w": 451,
        "h": 918
      },
      {
        "tag": "button",
        "text": "Seedance 2.5 Omni Reference 200",
        "x": 851,
        "y": 128,
        "w": 377,
        "h": 39
      },
      {
        "tag": "button",
        "text": "",
        "x": 1234,
        "y": 128,
        "w": 39,
        "h": 39
      },
      {
        "tag": "button",
        "text": "",
        "x": 851,
        "y": 218,
        "w": 65,
        "h": 65
      },
      {
        "tag": "div",
        "text": "",
        "x": 851,
        "y": 322,
        "w": 65,
        "h": 65
      },
      {
        "tag": "button",
        "text": "",
        "x": 923,
        "y": 322,
        "w": 65,
        "h": 65
      },
      {
        "tag": "button",
        "text": "",
        "x": 851,
        "y": 425,
        "w": 65,
        "h": 65
      },
      {
        "tag": "label",
        "text": "Prompt",
        "x": 851,
        "y": 506,
        "w": 67,
        "h": 26
      },
      {
        "tag": "button",
        "text": "",
        "x": 1247,
        "y": 506,
        "w": 26,
        "h": 26
      },
      {
        "tag": "button",
        "text": "16:9",
        "x": 851,
        "y": 804,
        "w": 132,
        "h": 52
      },
      {
        "tag": "button",
        "text": "5″",
        "x": 996,
        "y": 804,
        "w": 132,
        "h": 52
      },
      {
        "tag": "button",
        "text": "720p",
        "x": 1141,
        "y": 804,
        "w": 132,
        "h": 52
      },
      {
        "tag": "label",
        "text": "Real Faces Mode · On",
        "x": 866,
        "y": 897,
        "w": 272,
        "h": 26
      },
      {
        "tag": "button",
        "text": "",
        "x": 1147,
        "y": 899,
        "w": 23,
        "h": 23
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1210,
        "y": 897,
        "w": 46,
        "h": 27
      },
      {
        "tag": "button",
        "text": "Run",
        "x": 851,
        "y": 965,
        "w": 110,
        "h": 52
      },
      {
        "tag": "button",
        "text": "",
        "x": 961,
        "y": 965,
        "w": 39,
        "h": 52
      },
      {
        "tag": "button",
        "text": "",
        "x": 1221,
        "y": 965,
        "w": 52,
        "h": 52
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 621,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 671,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 711,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run All",
        "x": 768,
        "y": 1022,
        "w": 89,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 857,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 455,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 514,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 550,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 586,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(-644.012px, -208.435px) scale(1.60954)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(480px, 160px)",
          "x": 129,
          "y": 49,
          "w": 451,
          "h": 357,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 579,
              "cy": 237
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(480px, 520px)",
          "x": 129,
          "y": 629,
          "w": 451,
          "h": 264,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 129,
              "cy": 796
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 579,
              "cy": 770
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(920px, 200px)",
          "x": 837,
          "y": 113,
          "w": 451,
          "h": 918,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 837,
              "cy": 658
            },
            {
              "id": "edge-in-text_input-2",
              "type": "target",
              "cx": 837,
              "cy": 658
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 837,
              "cy": 353
            },
            {
              "id": "edge-in-image_2",
              "type": "target",
              "cx": 837,
              "cy": 353
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 837,
              "cy": 249
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 837,
              "cy": 456
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 1315,
              "cy": 590
            }
          ]
        }
      ],
      "edges": [
        {
          "id": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
          "d": "M766,277 C840,277 840,348.59375 914,348.59375"
        },
        {
          "id": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
          "d": "M766,608 C840,608 840,538.59375 914,538.59375"
        }
      ]
    }
  },
  "ep1-s4-focus1": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
        "x": 883,
        "y": 530,
        "w": 178,
        "h": 120
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
        "x": 883,
        "y": 844,
        "w": 178,
        "h": 117
      },
      {
        "tag": "div",
        "text": "Untitled Node Image Loader Drop image here or click to upload Supports JPEG, PNG",
        "testid": "rf__node-LoadImage-71329618",
        "x": 540,
        "y": 407,
        "w": 336,
        "h": 266
      },
      {
        "tag": "button",
        "text": "",
        "x": 836,
        "y": 418,
        "w": 29,
        "h": 29
      },
      {
        "tag": "div",
        "text": "Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 540,
        "y": 839,
        "w": 336,
        "h": 197
      },
      {
        "tag": "button",
        "text": "",
        "x": 836,
        "y": 850,
        "w": 29,
        "h": 29
      },
      {
        "tag": "button",
        "text": "",
        "x": 841,
        "y": 893,
        "w": 19,
        "h": 19
      },
      {
        "tag": "div",
        "text": "Seedance 2.5 Omni Reference 200 Reference videos 0/10 Reference images 1/30 Refe",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 1068,
        "y": 455,
        "w": 336,
        "h": 684
      },
      {
        "tag": "button",
        "text": "Seedance 2.5 Omni Reference 200",
        "x": 1079,
        "y": 466,
        "w": 281,
        "h": 29
      },
      {
        "tag": "button",
        "text": "",
        "x": 1364,
        "y": 466,
        "w": 29,
        "h": 29
      },
      {
        "tag": "button",
        "text": "",
        "x": 1079,
        "y": 533,
        "w": 48,
        "h": 48
      },
      {
        "tag": "div",
        "text": "",
        "x": 1079,
        "y": 610,
        "w": 48,
        "h": 48
      },
      {
        "tag": "button",
        "text": "",
        "x": 1132,
        "y": 610,
        "w": 48,
        "h": 48
      },
      {
        "tag": "button",
        "text": "",
        "x": 1079,
        "y": 687,
        "w": 48,
        "h": 48
      },
      {
        "tag": "label",
        "text": "Prompt",
        "x": 1079,
        "y": 748,
        "w": 50,
        "h": 19
      },
      {
        "tag": "button",
        "text": "",
        "x": 1374,
        "y": 748,
        "w": 19,
        "h": 19
      },
      {
        "tag": "button",
        "text": "16:9",
        "x": 1079,
        "y": 969,
        "w": 98,
        "h": 38
      },
      {
        "tag": "button",
        "text": "5″",
        "x": 1187,
        "y": 969,
        "w": 98,
        "h": 38
      },
      {
        "tag": "button",
        "text": "720p",
        "x": 1295,
        "y": 969,
        "w": 98,
        "h": 38
      },
      {
        "tag": "label",
        "text": "Real Faces Mode · On",
        "x": 1090,
        "y": 1039,
        "w": 203,
        "h": 19
      },
      {
        "tag": "button",
        "text": "",
        "x": 1300,
        "y": 1040,
        "w": 17,
        "h": 17
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1346,
        "y": 1039,
        "w": 35,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Run",
        "x": 1079,
        "y": 1090,
        "w": 82,
        "h": 38
      },
      {
        "tag": "button",
        "text": "",
        "x": 1160,
        "y": 1090,
        "w": 29,
        "h": 38
      },
      {
        "tag": "button",
        "text": "",
        "x": 1355,
        "y": 1090,
        "w": 38,
        "h": 38
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 601,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 651,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 691,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run Selected",
        "x": 748,
        "y": 1022,
        "w": 130,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 878,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 416,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 476,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 512,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 548,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1455,
        "y": 967,
        "w": 44,
        "h": 44
      },
      {
        "tag": "button",
        "text": "",
        "x": 1487,
        "y": 963,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "1",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(-36px, 214.8px) scale(1.2)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(480px, 160px)",
          "x": 540,
          "y": 407,
          "w": 336,
          "h": 266,
          "selected": true,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 876,
              "cy": 547
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(480px, 520px)",
          "x": 540,
          "y": 839,
          "w": 336,
          "h": 197,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 540,
              "cy": 964
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 876,
              "cy": 944
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(920px, 200px)",
          "x": 1068,
          "y": 455,
          "w": 336,
          "h": 684,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 1068,
              "cy": 861
            },
            {
              "id": "edge-in-text_input-2",
              "type": "target",
              "cx": 1068,
              "cy": 861
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 1068,
              "cy": 633
            },
            {
              "id": "edge-in-image_2",
              "type": "target",
              "cx": 1068,
              "cy": 633
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 1068,
              "cy": 556
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 1068,
              "cy": 711
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 1424,
              "cy": 810
            }
          ]
        }
      ],
      "edges": [
        {
          "id": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
          "d": "M766,277 C840,277 840,348.59375 914,348.59375"
        },
        {
          "id": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
          "d": "M766,608 C840,608 840,538.59375 914,538.59375"
        }
      ]
    }
  },
  "ep1-s4-sel2": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
        "x": 589,
        "y": 215,
        "w": 238,
        "h": 160
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
        "x": 589,
        "y": 636,
        "w": 238,
        "h": 157
      },
      {
        "tag": "div",
        "text": "Untitled Node Image Loader Drop image here or click to upload Supports JPEG, PNG",
        "testid": "rf__node-LoadImage-71329618",
        "x": 129,
        "y": 49,
        "w": 451,
        "h": 357
      },
      {
        "tag": "button",
        "text": "",
        "x": 526,
        "y": 64,
        "w": 39,
        "h": 39
      },
      {
        "tag": "div",
        "text": "Untitled Node Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 129,
        "y": 629,
        "w": 451,
        "h": 264
      },
      {
        "tag": "button",
        "text": "",
        "x": 526,
        "y": 643,
        "w": 39,
        "h": 39
      },
      {
        "tag": "button",
        "text": "",
        "x": 533,
        "y": 701,
        "w": 26,
        "h": 26
      },
      {
        "tag": "div",
        "text": "Seedance 2.5 Omni Reference 200 Reference videos 0/10 Reference images 1/30 Refe",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 837,
        "y": 113,
        "w": 451,
        "h": 918
      },
      {
        "tag": "button",
        "text": "Seedance 2.5 Omni Reference 200",
        "x": 851,
        "y": 128,
        "w": 377,
        "h": 39
      },
      {
        "tag": "button",
        "text": "",
        "x": 1234,
        "y": 128,
        "w": 39,
        "h": 39
      },
      {
        "tag": "button",
        "text": "",
        "x": 851,
        "y": 218,
        "w": 65,
        "h": 65
      },
      {
        "tag": "div",
        "text": "",
        "x": 851,
        "y": 322,
        "w": 65,
        "h": 65
      },
      {
        "tag": "button",
        "text": "",
        "x": 923,
        "y": 322,
        "w": 65,
        "h": 65
      },
      {
        "tag": "button",
        "text": "",
        "x": 851,
        "y": 425,
        "w": 65,
        "h": 65
      },
      {
        "tag": "label",
        "text": "Prompt",
        "x": 851,
        "y": 506,
        "w": 67,
        "h": 26
      },
      {
        "tag": "button",
        "text": "",
        "x": 1247,
        "y": 506,
        "w": 26,
        "h": 26
      },
      {
        "tag": "button",
        "text": "16:9",
        "x": 851,
        "y": 804,
        "w": 132,
        "h": 52
      },
      {
        "tag": "button",
        "text": "5″",
        "x": 996,
        "y": 804,
        "w": 132,
        "h": 52
      },
      {
        "tag": "button",
        "text": "720p",
        "x": 1141,
        "y": 804,
        "w": 132,
        "h": 52
      },
      {
        "tag": "label",
        "text": "Real Faces Mode · On",
        "x": 866,
        "y": 897,
        "w": 272,
        "h": 26
      },
      {
        "tag": "button",
        "text": "",
        "x": 1147,
        "y": 899,
        "w": 23,
        "h": 23
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1210,
        "y": 897,
        "w": 46,
        "h": 27
      },
      {
        "tag": "button",
        "text": "Run",
        "x": 851,
        "y": 965,
        "w": 110,
        "h": 52
      },
      {
        "tag": "button",
        "text": "",
        "x": 961,
        "y": 965,
        "w": 39,
        "h": 52
      },
      {
        "tag": "button",
        "text": "",
        "x": 1221,
        "y": 965,
        "w": 52,
        "h": 52
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 601,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 651,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 691,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run Selected",
        "x": 748,
        "y": 1022,
        "w": 130,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 878,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 416,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 476,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 512,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 548,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1455,
        "y": 967,
        "w": 44,
        "h": 44
      },
      {
        "tag": "button",
        "text": "",
        "x": 1487,
        "y": 963,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1505,
        "y": 967,
        "w": 44,
        "h": 44
      },
      {
        "tag": "button",
        "text": "",
        "x": 1537,
        "y": 963,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Run selected",
        "x": 35,
        "y": 930,
        "w": 135,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Save as Asset",
        "x": 174,
        "y": 930,
        "w": 142,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Group",
        "x": 320,
        "y": 930,
        "w": 89,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto Layout",
        "x": 413,
        "y": 930,
        "w": 128,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Add to Chat",
        "x": 545,
        "y": 930,
        "w": 127,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 610,
        "y": 463,
        "w": 16,
        "h": 16
      }
    ],
    "flow": {
      "viewport": "translate(-644.012px, -208.435px) scale(1.60954)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(480px, 160px)",
          "x": 129,
          "y": 49,
          "w": 451,
          "h": 357,
          "selected": true,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 579,
              "cy": 237
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(480px, 520px)",
          "x": 129,
          "y": 629,
          "w": 451,
          "h": 264,
          "selected": true,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 129,
              "cy": 796
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 579,
              "cy": 770
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(920px, 200px)",
          "x": 837,
          "y": 113,
          "w": 451,
          "h": 918,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 837,
              "cy": 658
            },
            {
              "id": "edge-in-text_input-2",
              "type": "target",
              "cx": 837,
              "cy": 658
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 837,
              "cy": 353
            },
            {
              "id": "edge-in-image_2",
              "type": "target",
              "cx": 837,
              "cy": 353
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 837,
              "cy": 249
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 837,
              "cy": 456
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 1315,
              "cy": 590
            }
          ]
        }
      ],
      "edges": [
        {
          "id": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
          "d": "M766,277 C840,277 840,348.59375 914,348.59375"
        },
        {
          "id": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
          "d": "M766,608 C840,608 840,538.59375 914,538.59375"
        }
      ]
    }
  },
  "ep1-s4-start": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
        "x": 589,
        "y": 215,
        "w": 238,
        "h": 160
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
        "x": 589,
        "y": 636,
        "w": 238,
        "h": 157
      },
      {
        "tag": "div",
        "text": "Image Loader Drop image here or click to upload Supports JPEG, PNG, WebP (max 10",
        "testid": "rf__node-LoadImage-71329618",
        "x": 129,
        "y": 49,
        "w": 451,
        "h": 357
      },
      {
        "tag": "button",
        "text": "",
        "x": 526,
        "y": 64,
        "w": 39,
        "h": 39
      },
      {
        "tag": "div",
        "text": "Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 129,
        "y": 629,
        "w": 451,
        "h": 264
      },
      {
        "tag": "button",
        "text": "",
        "x": 526,
        "y": 643,
        "w": 39,
        "h": 39
      },
      {
        "tag": "button",
        "text": "",
        "x": 533,
        "y": 701,
        "w": 26,
        "h": 26
      },
      {
        "tag": "div",
        "text": "Seedance 2.5 Omni Reference 200 Reference videos 0/10 Reference images 1/30 Refe",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 837,
        "y": 113,
        "w": 451,
        "h": 918
      },
      {
        "tag": "button",
        "text": "Seedance 2.5 Omni Reference 200",
        "x": 851,
        "y": 128,
        "w": 377,
        "h": 39
      },
      {
        "tag": "button",
        "text": "",
        "x": 1234,
        "y": 128,
        "w": 39,
        "h": 39
      },
      {
        "tag": "button",
        "text": "",
        "x": 851,
        "y": 218,
        "w": 65,
        "h": 65
      },
      {
        "tag": "div",
        "text": "",
        "x": 851,
        "y": 322,
        "w": 65,
        "h": 65
      },
      {
        "tag": "button",
        "text": "",
        "x": 923,
        "y": 322,
        "w": 65,
        "h": 65
      },
      {
        "tag": "button",
        "text": "",
        "x": 851,
        "y": 425,
        "w": 65,
        "h": 65
      },
      {
        "tag": "label",
        "text": "Prompt",
        "x": 851,
        "y": 506,
        "w": 67,
        "h": 26
      },
      {
        "tag": "button",
        "text": "",
        "x": 1247,
        "y": 506,
        "w": 26,
        "h": 26
      },
      {
        "tag": "button",
        "text": "16:9",
        "x": 851,
        "y": 804,
        "w": 132,
        "h": 52
      },
      {
        "tag": "button",
        "text": "5″",
        "x": 996,
        "y": 804,
        "w": 132,
        "h": 52
      },
      {
        "tag": "button",
        "text": "720p",
        "x": 1141,
        "y": 804,
        "w": 132,
        "h": 52
      },
      {
        "tag": "label",
        "text": "Real Faces Mode · On",
        "x": 866,
        "y": 897,
        "w": 272,
        "h": 26
      },
      {
        "tag": "button",
        "text": "",
        "x": 1147,
        "y": 899,
        "w": 23,
        "h": 23
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1210,
        "y": 897,
        "w": 46,
        "h": 27
      },
      {
        "tag": "button",
        "text": "Run",
        "x": 851,
        "y": 965,
        "w": 110,
        "h": 52
      },
      {
        "tag": "button",
        "text": "",
        "x": 961,
        "y": 965,
        "w": 39,
        "h": 52
      },
      {
        "tag": "button",
        "text": "",
        "x": 1221,
        "y": 965,
        "w": 52,
        "h": 52
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 621,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 671,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 711,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run All",
        "x": 768,
        "y": 1022,
        "w": 89,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 857,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 455,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 514,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 550,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 586,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(-644.012px, -208.435px) scale(1.60954)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(480px, 160px)",
          "x": 129,
          "y": 49,
          "w": 451,
          "h": 357,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 579,
              "cy": 237
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(480px, 520px)",
          "x": 129,
          "y": 629,
          "w": 451,
          "h": 264,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 129,
              "cy": 796
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 579,
              "cy": 770
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(920px, 200px)",
          "x": 837,
          "y": 113,
          "w": 451,
          "h": 918,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 837,
              "cy": 658
            },
            {
              "id": "edge-in-text_input-2",
              "type": "target",
              "cx": 837,
              "cy": 658
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 837,
              "cy": 353
            },
            {
              "id": "edge-in-image_2",
              "type": "target",
              "cx": 837,
              "cy": 353
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 837,
              "cy": 249
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 837,
              "cy": 456
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 1315,
              "cy": 590
            }
          ]
        }
      ],
      "edges": [
        {
          "id": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
          "d": "M766,277 C840,277 840,348.59375 914,348.59375"
        },
        {
          "id": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
          "d": "M766,608 C840,608 840,538.59375 914,538.59375"
        }
      ]
    }
  },
  "ep1-s4b-fit2": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
        "x": 854,
        "y": 381,
        "w": 148,
        "h": 186
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
        "x": 854,
        "y": 479,
        "w": 148,
        "h": 261
      },
      {
        "tag": "div",
        "text": "Untitled Node Image Loader Drop image here or click to upload Supports JPEG, PNG",
        "testid": "rf__node-LoadImage-71329618",
        "x": 568,
        "y": 278,
        "w": 280,
        "h": 222
      },
      {
        "tag": "button",
        "text": "",
        "x": 815,
        "y": 287,
        "w": 24,
        "h": 24
      },
      {
        "tag": "div",
        "text": "Untitled Node Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 568,
        "y": 638,
        "w": 280,
        "h": 164
      },
      {
        "tag": "button",
        "text": "",
        "x": 815,
        "y": 647,
        "w": 24,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 819,
        "y": 683,
        "w": 16,
        "h": 16
      },
      {
        "tag": "div",
        "text": "Seedance 2.5 Omni Reference 200 Prompt 1 … Sources Image1 16:9 5″ 720p Real Face",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 1008,
        "y": 318,
        "w": 280,
        "h": 493
      },
      {
        "tag": "button",
        "text": "Seedance 2.5 Omni Reference 200",
        "x": 1017,
        "y": 327,
        "w": 234,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 1255,
        "y": 327,
        "w": 24,
        "h": 24
      },
      {
        "tag": "label",
        "text": "Prompt",
        "x": 1017,
        "y": 359,
        "w": 42,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1263,
        "y": 359,
        "w": 16,
        "h": 16
      },
      {
        "tag": "label",
        "text": "Sources",
        "x": 1017,
        "y": 544,
        "w": 47,
        "h": 16
      },
      {
        "tag": "div",
        "text": "Image1",
        "x": 1022,
        "y": 571,
        "w": 60,
        "h": 78
      },
      {
        "tag": "label",
        "text": "Image1",
        "x": 1022,
        "y": 633,
        "w": 60,
        "h": 16
      },
      {
        "tag": "button",
        "text": "16:9",
        "x": 1017,
        "y": 670,
        "w": 82,
        "h": 32
      },
      {
        "tag": "button",
        "text": "5″",
        "x": 1107,
        "y": 670,
        "w": 82,
        "h": 32
      },
      {
        "tag": "button",
        "text": "720p",
        "x": 1197,
        "y": 670,
        "w": 82,
        "h": 32
      },
      {
        "tag": "label",
        "text": "Real Faces Mode · On",
        "x": 1026,
        "y": 728,
        "w": 169,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1201,
        "y": 729,
        "w": 14,
        "h": 14
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1240,
        "y": 728,
        "w": 29,
        "h": 17
      },
      {
        "tag": "button",
        "text": "Run",
        "x": 1017,
        "y": 770,
        "w": 68,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1085,
        "y": 770,
        "w": 24,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1247,
        "y": 770,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1208,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "1,078",
        "x": 1288,
        "y": 12,
        "w": 76,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 601,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 651,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 691,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run Selected",
        "x": 748,
        "y": 1022,
        "w": 130,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 878,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 416,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 476,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 512,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 548,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1455,
        "y": 967,
        "w": 44,
        "h": 44
      },
      {
        "tag": "button",
        "text": "",
        "x": 1487,
        "y": 963,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1505,
        "y": 967,
        "w": 44,
        "h": 44
      },
      {
        "tag": "button",
        "text": "",
        "x": 1537,
        "y": 963,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Multi-Shot Video Sequence +1",
        "x": 1491,
        "y": 1027,
        "w": 206,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1705,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1815,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1919,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Run selected",
        "x": 389,
        "y": 826,
        "w": 135,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Save as Asset",
        "x": 527,
        "y": 826,
        "w": 142,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Group",
        "x": 673,
        "y": 826,
        "w": 89,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto Layout",
        "x": 766,
        "y": 826,
        "w": 128,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Add to Chat",
        "x": 899,
        "y": 826,
        "w": 127,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(88px, 118px) scale(1)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(480px, 160px)",
          "x": 568,
          "y": 278,
          "w": 280,
          "h": 222,
          "selected": true,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 848,
              "cy": 395
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(480px, 520px)",
          "x": 568,
          "y": 638,
          "w": 280,
          "h": 164,
          "selected": true,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 568,
              "cy": 726
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 848,
              "cy": 726
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(920px, 200px)",
          "x": 1008,
          "y": 318,
          "w": 280,
          "h": 493,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 1008,
              "cy": 493
            },
            {
              "id": "edge-in-text_input-2",
              "type": "target",
              "cx": 1008,
              "cy": 517
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 1008,
              "cy": 553
            },
            {
              "id": "edge-in-image_2",
              "type": "target",
              "cx": 1008,
              "cy": 585
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 1008,
              "cy": 641
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 1008,
              "cy": 697
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 1305,
              "cy": 576
            }
          ]
        }
      ],
      "edges": [
        {
          "id": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
          "d": "M766,277 C840,277 840,434.59375 914,434.59375"
        },
        {
          "id": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
          "d": "M766,608 C840,608 840,374.59375 914,374.59375"
        }
      ]
    }
  },
  "ep1-s4b-fitall": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
        "x": 576,
        "y": 248,
        "w": 265,
        "h": 332
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
        "x": 576,
        "y": 422,
        "w": 265,
        "h": 467
      },
      {
        "tag": "div",
        "text": "Image Loader Drop image here or click to upload Supports JPEG, PNG, WebP (max 10",
        "testid": "rf__node-LoadImage-71329618",
        "x": 64,
        "y": 64,
        "w": 501,
        "h": 397
      },
      {
        "tag": "button",
        "text": "",
        "x": 506,
        "y": 80,
        "w": 43,
        "h": 43
      },
      {
        "tag": "div",
        "text": "Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 64,
        "y": 707,
        "w": 501,
        "h": 293
      },
      {
        "tag": "button",
        "text": "",
        "x": 506,
        "y": 723,
        "w": 43,
        "h": 43
      },
      {
        "tag": "button",
        "text": "",
        "x": 513,
        "y": 788,
        "w": 29,
        "h": 29
      },
      {
        "tag": "div",
        "text": "Seedance 2.5 Omni Reference 200 Prompt 1 … Sources Image1 16:9 5″ 720p Real Face",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 851,
        "y": 135,
        "w": 501,
        "h": 882
      },
      {
        "tag": "button",
        "text": "Seedance 2.5 Omni Reference 200",
        "x": 867,
        "y": 151,
        "w": 418,
        "h": 43
      },
      {
        "tag": "button",
        "text": "",
        "x": 1293,
        "y": 151,
        "w": 43,
        "h": 43
      },
      {
        "tag": "label",
        "text": "Prompt",
        "x": 867,
        "y": 208,
        "w": 74,
        "h": 29
      },
      {
        "tag": "button",
        "text": "",
        "x": 1307,
        "y": 208,
        "w": 29,
        "h": 29
      },
      {
        "tag": "label",
        "text": "Sources",
        "x": 867,
        "y": 539,
        "w": 84,
        "h": 29
      },
      {
        "tag": "div",
        "text": "Image1",
        "x": 876,
        "y": 587,
        "w": 107,
        "h": 139
      },
      {
        "tag": "label",
        "text": "Image1",
        "x": 876,
        "y": 698,
        "w": 107,
        "h": 29
      },
      {
        "tag": "button",
        "text": "16:9",
        "x": 867,
        "y": 764,
        "w": 147,
        "h": 57
      },
      {
        "tag": "button",
        "text": "5″",
        "x": 1028,
        "y": 764,
        "w": 147,
        "h": 57
      },
      {
        "tag": "button",
        "text": "720p",
        "x": 1189,
        "y": 764,
        "w": 147,
        "h": 57
      },
      {
        "tag": "label",
        "text": "Real Faces Mode · On",
        "x": 883,
        "y": 868,
        "w": 302,
        "h": 29
      },
      {
        "tag": "button",
        "text": "",
        "x": 1196,
        "y": 870,
        "w": 25,
        "h": 25
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1265,
        "y": 868,
        "w": 51,
        "h": 30
      },
      {
        "tag": "button",
        "text": "Run",
        "x": 867,
        "y": 944,
        "w": 122,
        "h": 57
      },
      {
        "tag": "button",
        "text": "",
        "x": 989,
        "y": 944,
        "w": 43,
        "h": 57
      },
      {
        "tag": "button",
        "text": "",
        "x": 1278,
        "y": 944,
        "w": 57,
        "h": 57
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1208,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "1,078",
        "x": 1288,
        "y": 12,
        "w": 76,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 621,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 671,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 711,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run All",
        "x": 768,
        "y": 1022,
        "w": 89,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 857,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 455,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 514,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 550,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 586,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Multi-Shot Video Sequence +1",
        "x": 1491,
        "y": 1027,
        "w": 206,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1705,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1815,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 1919,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(-793.818px, -222.53px) scale(1.78788)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(480px, 160px)",
          "x": 64,
          "y": 64,
          "w": 501,
          "h": 397,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 565,
              "cy": 273
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(480px, 520px)",
          "x": 64,
          "y": 707,
          "w": 501,
          "h": 293,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 64,
              "cy": 865
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 565,
              "cy": 865
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(920px, 200px)",
          "x": 851,
          "y": 135,
          "w": 501,
          "h": 882,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 851,
              "cy": 447
            },
            {
              "id": "edge-in-text_input-2",
              "type": "target",
              "cx": 851,
              "cy": 490
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 851,
              "cy": 554
            },
            {
              "id": "edge-in-image_2",
              "type": "target",
              "cx": 851,
              "cy": 612
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 851,
              "cy": 712
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 851,
              "cy": 812
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 1382,
              "cy": 596
            }
          ]
        }
      ],
      "edges": [
        {
          "id": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
          "d": "M766,277 C840,277 840,434.59375 914,434.59375"
        },
        {
          "id": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
          "d": "M766,608 C840,608 840,374.59375 914,374.59375"
        }
      ]
    }
  },
  "ep1-s4b-focus1": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
        "x": 883,
        "y": 530,
        "w": 178,
        "h": 223
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
        "x": 883,
        "y": 648,
        "w": 178,
        "h": 314
      },
      {
        "tag": "div",
        "text": "Untitled Node Image Loader Drop image here or click to upload Supports JPEG, PNG",
        "testid": "rf__node-LoadImage-71329618",
        "x": 540,
        "y": 407,
        "w": 336,
        "h": 266
      },
      {
        "tag": "button",
        "text": "",
        "x": 836,
        "y": 418,
        "w": 29,
        "h": 29
      },
      {
        "tag": "div",
        "text": "Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 540,
        "y": 839,
        "w": 336,
        "h": 197
      },
      {
        "tag": "button",
        "text": "",
        "x": 836,
        "y": 850,
        "w": 29,
        "h": 29
      },
      {
        "tag": "button",
        "text": "",
        "x": 841,
        "y": 893,
        "w": 19,
        "h": 19
      },
      {
        "tag": "div",
        "text": "Seedance 2.5 Omni Reference 200 Prompt 1 … Sources Image1 16:9 5″ 720p Real Face",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 1068,
        "y": 455,
        "w": 336,
        "h": 592
      },
      {
        "tag": "button",
        "text": "Seedance 2.5 Omni Reference 200",
        "x": 1079,
        "y": 466,
        "w": 281,
        "h": 29
      },
      {
        "tag": "button",
        "text": "",
        "x": 1364,
        "y": 466,
        "w": 29,
        "h": 29
      },
      {
        "tag": "label",
        "text": "Prompt",
        "x": 1079,
        "y": 504,
        "w": 50,
        "h": 19
      },
      {
        "tag": "button",
        "text": "",
        "x": 1374,
        "y": 504,
        "w": 19,
        "h": 19
      },
      {
        "tag": "label",
        "text": "Sources",
        "x": 1079,
        "y": 726,
        "w": 56,
        "h": 19
      },
      {
        "tag": "div",
        "text": "Image1",
        "x": 1085,
        "y": 758,
        "w": 72,
        "h": 94
      },
      {
        "tag": "label",
        "text": "Image1",
        "x": 1085,
        "y": 833,
        "w": 72,
        "h": 19
      },
      {
        "tag": "button",
        "text": "16:9",
        "x": 1079,
        "y": 877,
        "w": 98,
        "h": 38
      },
      {
        "tag": "button",
        "text": "5″",
        "x": 1187,
        "y": 877,
        "w": 98,
        "h": 38
      },
      {
        "tag": "button",
        "text": "720p",
        "x": 1295,
        "y": 877,
        "w": 98,
        "h": 38
      },
      {
        "tag": "label",
        "text": "Real Faces Mode · On",
        "x": 1090,
        "y": 947,
        "w": 203,
        "h": 19
      },
      {
        "tag": "button",
        "text": "",
        "x": 1300,
        "y": 948,
        "w": 17,
        "h": 17
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1346,
        "y": 946,
        "w": 35,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Run",
        "x": 1079,
        "y": 997,
        "w": 82,
        "h": 38
      },
      {
        "tag": "button",
        "text": "",
        "x": 1160,
        "y": 997,
        "w": 29,
        "h": 38
      },
      {
        "tag": "button",
        "text": "",
        "x": 1355,
        "y": 997,
        "w": 38,
        "h": 38
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1208,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "1,078",
        "x": 1288,
        "y": 12,
        "w": 76,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 601,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 651,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 691,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run Selected",
        "x": 748,
        "y": 1022,
        "w": 130,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 878,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 416,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 476,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 512,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 548,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1455,
        "y": 967,
        "w": 44,
        "h": 44
      },
      {
        "tag": "button",
        "text": "",
        "x": 1487,
        "y": 963,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Multi-Shot Video Sequence +1",
        "x": 1491,
        "y": 1027,
        "w": 206,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1705,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1815,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "1",
        "x": 1919,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(-36px, 214.8px) scale(1.2)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(480px, 160px)",
          "x": 540,
          "y": 407,
          "w": 336,
          "h": 266,
          "selected": true,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 876,
              "cy": 547
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(480px, 520px)",
          "x": 540,
          "y": 839,
          "w": 336,
          "h": 197,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 540,
              "cy": 944
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 876,
              "cy": 944
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(920px, 200px)",
          "x": 1068,
          "y": 455,
          "w": 336,
          "h": 592,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 1068,
              "cy": 664
            },
            {
              "id": "edge-in-text_input-2",
              "type": "target",
              "cx": 1068,
              "cy": 693
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 1068,
              "cy": 736
            },
            {
              "id": "edge-in-image_2",
              "type": "target",
              "cx": 1068,
              "cy": 775
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 1068,
              "cy": 842
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 1068,
              "cy": 909
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 1424,
              "cy": 764
            }
          ]
        }
      ],
      "edges": [
        {
          "id": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
          "d": "M766,277 C840,277 840,434.59375 914,434.59375"
        },
        {
          "id": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
          "d": "M766,608 C840,608 840,374.59375 914,374.59375"
        }
      ]
    }
  },
  "ep1-s4b-sel2": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
        "x": 775,
        "y": 399,
        "w": 128,
        "h": 160
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
        "x": 775,
        "y": 483,
        "w": 128,
        "h": 225
      },
      {
        "tag": "div",
        "text": "Untitled Node Image Loader Drop image here or click to upload Supports JPEG, PNG",
        "testid": "rf__node-LoadImage-71329618",
        "x": 528,
        "y": 310,
        "w": 241,
        "h": 191
      },
      {
        "tag": "button",
        "text": "",
        "x": 741,
        "y": 318,
        "w": 21,
        "h": 21
      },
      {
        "tag": "div",
        "text": "Untitled Node Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 528,
        "y": 621,
        "w": 241,
        "h": 141
      },
      {
        "tag": "button",
        "text": "",
        "x": 741,
        "y": 628,
        "w": 21,
        "h": 21
      },
      {
        "tag": "button",
        "text": "",
        "x": 744,
        "y": 659,
        "w": 14,
        "h": 14
      },
      {
        "tag": "div",
        "text": "Seedance 2.5 Omni Reference 200 Prompt 1 … Sources Image1 16:9 5″ 720p Real Face",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 907,
        "y": 345,
        "w": 241,
        "h": 425
      },
      {
        "tag": "button",
        "text": "Seedance 2.5 Omni Reference 200",
        "x": 915,
        "y": 352,
        "w": 202,
        "h": 21
      },
      {
        "tag": "button",
        "text": "",
        "x": 1120,
        "y": 352,
        "w": 21,
        "h": 21
      },
      {
        "tag": "label",
        "text": "Prompt",
        "x": 915,
        "y": 380,
        "w": 36,
        "h": 14
      },
      {
        "tag": "button",
        "text": "",
        "x": 1127,
        "y": 380,
        "w": 14,
        "h": 14
      },
      {
        "tag": "label",
        "text": "Sources",
        "x": 915,
        "y": 539,
        "w": 41,
        "h": 14
      },
      {
        "tag": "div",
        "text": "Image1",
        "x": 920,
        "y": 563,
        "w": 52,
        "h": 67
      },
      {
        "tag": "label",
        "text": "Image1",
        "x": 920,
        "y": 616,
        "w": 52,
        "h": 14
      },
      {
        "tag": "button",
        "text": "16:9",
        "x": 915,
        "y": 648,
        "w": 71,
        "h": 28
      },
      {
        "tag": "button",
        "text": "5″",
        "x": 993,
        "y": 648,
        "w": 71,
        "h": 28
      },
      {
        "tag": "button",
        "text": "720p",
        "x": 1070,
        "y": 648,
        "w": 71,
        "h": 28
      },
      {
        "tag": "label",
        "text": "Real Faces Mode · On",
        "x": 923,
        "y": 698,
        "w": 146,
        "h": 14
      },
      {
        "tag": "button",
        "text": "",
        "x": 1074,
        "y": 699,
        "w": 12,
        "h": 12
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1107,
        "y": 698,
        "w": 25,
        "h": 14
      },
      {
        "tag": "button",
        "text": "Run",
        "x": 915,
        "y": 735,
        "w": 59,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 974,
        "y": 735,
        "w": 21,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1114,
        "y": 735,
        "w": 28,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1208,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "1,078",
        "x": 1288,
        "y": 12,
        "w": 76,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 601,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 651,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 691,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run Selected",
        "x": 748,
        "y": 1022,
        "w": 130,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 878,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 416,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 476,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 512,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 548,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1455,
        "y": 967,
        "w": 44,
        "h": 44
      },
      {
        "tag": "button",
        "text": "",
        "x": 1487,
        "y": 963,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1505,
        "y": 967,
        "w": 44,
        "h": 44
      },
      {
        "tag": "button",
        "text": "",
        "x": 1537,
        "y": 963,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Multi-Shot Video Sequence +1",
        "x": 1491,
        "y": 1027,
        "w": 206,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1705,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1815,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1919,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Run selected",
        "x": 330,
        "y": 784,
        "w": 135,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Save as Asset",
        "x": 469,
        "y": 784,
        "w": 142,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Group",
        "x": 615,
        "y": 784,
        "w": 89,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto Layout",
        "x": 708,
        "y": 784,
        "w": 128,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 720,
        "y": 827,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 756,
        "y": 827,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 792,
        "y": 827,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Add to Chat",
        "x": 840,
        "y": 784,
        "w": 127,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(114.216px, 172.267px) scale(0.86221)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(480px, 160px)",
          "x": 528,
          "y": 310,
          "w": 241,
          "h": 191,
          "selected": true,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 769,
              "cy": 411
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(480px, 520px)",
          "x": 528,
          "y": 621,
          "w": 241,
          "h": 141,
          "selected": true,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 528,
              "cy": 696
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 769,
              "cy": 696
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(920px, 200px)",
          "x": 907,
          "y": 345,
          "w": 241,
          "h": 425,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 907,
              "cy": 495
            },
            {
              "id": "edge-in-text_input-2",
              "type": "target",
              "cx": 907,
              "cy": 516
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 907,
              "cy": 547
            },
            {
              "id": "edge-in-image_2",
              "type": "target",
              "cx": 907,
              "cy": 575
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 907,
              "cy": 623
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 907,
              "cy": 671
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 1164,
              "cy": 567
            }
          ]
        }
      ],
      "edges": [
        {
          "id": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
          "d": "M766,277 C840,277 840,434.59375 914,434.59375"
        },
        {
          "id": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
          "d": "M766,608 C840,608 840,374.59375 914,374.59375"
        }
      ]
    }
  },
  "ep1-s4b-start": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
        "x": 775,
        "y": 399,
        "w": 128,
        "h": 160
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
        "x": 775,
        "y": 483,
        "w": 128,
        "h": 225
      },
      {
        "tag": "div",
        "text": "Image Loader Drop image here or click to upload Supports JPEG, PNG, WebP (max 10",
        "testid": "rf__node-LoadImage-71329618",
        "x": 528,
        "y": 310,
        "w": 241,
        "h": 191
      },
      {
        "tag": "button",
        "text": "",
        "x": 741,
        "y": 318,
        "w": 21,
        "h": 21
      },
      {
        "tag": "div",
        "text": "Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 528,
        "y": 621,
        "w": 241,
        "h": 141
      },
      {
        "tag": "button",
        "text": "",
        "x": 741,
        "y": 628,
        "w": 21,
        "h": 21
      },
      {
        "tag": "button",
        "text": "",
        "x": 744,
        "y": 659,
        "w": 14,
        "h": 14
      },
      {
        "tag": "div",
        "text": "Seedance 2.5 Omni Reference 200 Prompt 1 … Sources Image1 16:9 5″ 720p Real Face",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 907,
        "y": 345,
        "w": 241,
        "h": 425
      },
      {
        "tag": "button",
        "text": "Seedance 2.5 Omni Reference 200",
        "x": 915,
        "y": 352,
        "w": 202,
        "h": 21
      },
      {
        "tag": "button",
        "text": "",
        "x": 1120,
        "y": 352,
        "w": 21,
        "h": 21
      },
      {
        "tag": "label",
        "text": "Prompt",
        "x": 915,
        "y": 380,
        "w": 36,
        "h": 14
      },
      {
        "tag": "button",
        "text": "",
        "x": 1127,
        "y": 380,
        "w": 14,
        "h": 14
      },
      {
        "tag": "label",
        "text": "Sources",
        "x": 915,
        "y": 539,
        "w": 41,
        "h": 14
      },
      {
        "tag": "div",
        "text": "Image1",
        "x": 920,
        "y": 563,
        "w": 52,
        "h": 67
      },
      {
        "tag": "label",
        "text": "Image1",
        "x": 920,
        "y": 616,
        "w": 52,
        "h": 14
      },
      {
        "tag": "button",
        "text": "16:9",
        "x": 915,
        "y": 648,
        "w": 71,
        "h": 28
      },
      {
        "tag": "button",
        "text": "5″",
        "x": 993,
        "y": 648,
        "w": 71,
        "h": 28
      },
      {
        "tag": "button",
        "text": "720p",
        "x": 1070,
        "y": 648,
        "w": 71,
        "h": 28
      },
      {
        "tag": "label",
        "text": "Real Faces Mode · On",
        "x": 923,
        "y": 698,
        "w": 146,
        "h": 14
      },
      {
        "tag": "button",
        "text": "",
        "x": 1074,
        "y": 699,
        "w": 12,
        "h": 12
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1107,
        "y": 698,
        "w": 25,
        "h": 14
      },
      {
        "tag": "button",
        "text": "Run",
        "x": 915,
        "y": 735,
        "w": 59,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 974,
        "y": 735,
        "w": 21,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1114,
        "y": 735,
        "w": 28,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1208,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "1,078",
        "x": 1288,
        "y": 12,
        "w": 76,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 621,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 671,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 711,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run All",
        "x": 768,
        "y": 1022,
        "w": 89,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 857,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 455,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 514,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 550,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 586,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Multi-Shot Video Sequence +1",
        "x": 1491,
        "y": 1027,
        "w": 206,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1705,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1815,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 1919,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(114.216px, 172.267px) scale(0.86221)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(480px, 160px)",
          "x": 528,
          "y": 310,
          "w": 241,
          "h": 191,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 769,
              "cy": 411
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(480px, 520px)",
          "x": 528,
          "y": 621,
          "w": 241,
          "h": 141,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 528,
              "cy": 696
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 769,
              "cy": 696
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(920px, 200px)",
          "x": 907,
          "y": 345,
          "w": 241,
          "h": 425,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 907,
              "cy": 495
            },
            {
              "id": "edge-in-text_input-2",
              "type": "target",
              "cx": 907,
              "cy": 516
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 907,
              "cy": 547
            },
            {
              "id": "edge-in-image_2",
              "type": "target",
              "cx": 907,
              "cy": 575
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 907,
              "cy": 623
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 907,
              "cy": 671
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 1164,
              "cy": 567
            }
          ]
        }
      ],
      "edges": [
        {
          "id": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
          "d": "M766,277 C840,277 840,434.59375 914,434.59375"
        },
        {
          "id": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
          "d": "M766,608 C840,608 840,374.59375 914,374.59375"
        }
      ]
    }
  },
  "ep1-s5-arranged": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
        "x": 659,
        "y": 319,
        "w": 98,
        "h": 504
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
        "x": 659,
        "y": 388,
        "w": 98,
        "h": 247
      },
      {
        "tag": "div",
        "text": "Untitled Node Image Loader Drop image here or click to upload Supports JPEG, PNG",
        "testid": "rf__node-LoadImage-71329618",
        "x": 245,
        "y": 634,
        "w": 405,
        "h": 321
      },
      {
        "tag": "button",
        "text": "",
        "x": 602,
        "y": 647,
        "w": 35,
        "h": 35
      },
      {
        "tag": "div",
        "text": "Untitled Node Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 245,
        "y": 281,
        "w": 405,
        "h": 237
      },
      {
        "tag": "button",
        "text": "",
        "x": 602,
        "y": 294,
        "w": 35,
        "h": 35
      },
      {
        "tag": "button",
        "text": "",
        "x": 608,
        "y": 346,
        "w": 23,
        "h": 23
      },
      {
        "tag": "div",
        "text": "Untitled Node Seedance 2.5 Omni Reference 200 Reference videos 0/10 Reference im",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 766,
        "y": 125,
        "w": 405,
        "h": 825
      },
      {
        "tag": "button",
        "text": "Seedance 2.5 Omni Reference 200",
        "x": 779,
        "y": 138,
        "w": 339,
        "h": 35
      },
      {
        "tag": "button",
        "text": "",
        "x": 1123,
        "y": 138,
        "w": 35,
        "h": 35
      },
      {
        "tag": "button",
        "text": "",
        "x": 779,
        "y": 219,
        "w": 58,
        "h": 58
      },
      {
        "tag": "div",
        "text": "",
        "x": 779,
        "y": 312,
        "w": 58,
        "h": 58
      },
      {
        "tag": "button",
        "text": "",
        "x": 843,
        "y": 312,
        "w": 58,
        "h": 58
      },
      {
        "tag": "button",
        "text": "",
        "x": 779,
        "y": 405,
        "w": 58,
        "h": 58
      },
      {
        "tag": "label",
        "text": "Prompt",
        "x": 779,
        "y": 478,
        "w": 60,
        "h": 23
      },
      {
        "tag": "button",
        "text": "",
        "x": 1135,
        "y": 478,
        "w": 23,
        "h": 23
      },
      {
        "tag": "button",
        "text": "16:9",
        "x": 779,
        "y": 745,
        "w": 119,
        "h": 46
      },
      {
        "tag": "button",
        "text": "5″",
        "x": 909,
        "y": 745,
        "w": 119,
        "h": 46
      },
      {
        "tag": "button",
        "text": "720p",
        "x": 1039,
        "y": 745,
        "w": 119,
        "h": 46
      },
      {
        "tag": "label",
        "text": "Real Faces Mode · On",
        "x": 792,
        "y": 829,
        "w": 245,
        "h": 23
      },
      {
        "tag": "button",
        "text": "",
        "x": 1045,
        "y": 831,
        "w": 20,
        "h": 20
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1101,
        "y": 829,
        "w": 42,
        "h": 24
      },
      {
        "tag": "button",
        "text": "Run",
        "x": 779,
        "y": 891,
        "w": 99,
        "h": 46
      },
      {
        "tag": "button",
        "text": "",
        "x": 877,
        "y": 891,
        "w": 35,
        "h": 46
      },
      {
        "tag": "button",
        "text": "",
        "x": 1112,
        "y": 891,
        "w": 46,
        "h": 46
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 601,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 651,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 691,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run Selected",
        "x": 748,
        "y": 1022,
        "w": 130,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 878,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 416,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 476,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 512,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 548,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1455,
        "y": 967,
        "w": 44,
        "h": 44
      },
      {
        "tag": "button",
        "text": "",
        "x": 1487,
        "y": 963,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1505,
        "y": 967,
        "w": 44,
        "h": 44
      },
      {
        "tag": "button",
        "text": "",
        "x": 1537,
        "y": 963,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1555,
        "y": 967,
        "w": 44,
        "h": 44
      },
      {
        "tag": "button",
        "text": "",
        "x": 1587,
        "y": 963,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "3",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Run selected",
        "x": 390,
        "y": 990,
        "w": 135,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Save as Asset",
        "x": 529,
        "y": 990,
        "w": 142,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Group",
        "x": 674,
        "y": 990,
        "w": 89,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto Layout",
        "x": 767,
        "y": 990,
        "w": 128,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Add to Chat",
        "x": 900,
        "y": 990,
        "w": 127,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1199,
        "y": 532,
        "w": 16,
        "h": 16
      }
    ],
    "flow": {
      "viewport": "translate(-217.511px, -152.61px) scale(1.44736)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(319.446px, 543.538px)",
          "x": 245,
          "y": 634,
          "w": 405,
          "h": 321,
          "selected": true,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 650,
              "cy": 803
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(319.446px, 299.538px)",
          "x": 245,
          "y": 281,
          "w": 405,
          "h": 237,
          "selected": true,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 245,
              "cy": 431
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 650,
              "cy": 408
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(679.446px, 191.538px)",
          "x": 766,
          "y": 125,
          "w": 405,
          "h": 825,
          "selected": true,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 766,
              "cy": 615
            },
            {
              "id": "edge-in-text_input-2",
              "type": "target",
              "cx": 766,
              "cy": 615
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 766,
              "cy": 340
            },
            {
              "id": "edge-in-image_2",
              "type": "target",
              "cx": 766,
              "cy": 340
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 766,
              "cy": 246
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 766,
              "cy": 433
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 1196,
              "cy": 553
            }
          ]
        }
      ],
      "edges": [
        {
          "id": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
          "d": "M605.4455555555556,660.537962962963 C639.4455555555556,660.537962962963 639.4455555555556,340.131712962963 673.4455555555556,340.131712962963"
        },
        {
          "id": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
          "d": "M605.4455555555556,387.537962962963 C639.4455555555556,387.537962962963 639.4455555555556,530.131712962963 673.4455555555556,530.131712962963"
        }
      ]
    }
  },
  "ep1-s5-fit": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
        "x": 433,
        "y": 306,
        "w": 551,
        "h": 77
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
        "x": 896,
        "y": 268,
        "w": 88,
        "h": 359
      },
      {
        "tag": "div",
        "text": "Image Loader Drop image here or click to upload Supports JPEG, PNG, WebP (max 10",
        "testid": "rf__node-LoadImage-71329618",
        "x": 64,
        "y": 173,
        "w": 360,
        "h": 286
      },
      {
        "tag": "button",
        "text": "",
        "x": 382,
        "y": 185,
        "w": 31,
        "h": 31
      },
      {
        "tag": "div",
        "text": "Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 528,
        "y": 173,
        "w": 360,
        "h": 211
      },
      {
        "tag": "button",
        "text": "",
        "x": 846,
        "y": 185,
        "w": 31,
        "h": 31
      },
      {
        "tag": "button",
        "text": "",
        "x": 851,
        "y": 231,
        "w": 21,
        "h": 21
      },
      {
        "tag": "div",
        "text": "Seedance 2.5 Omni Reference 200 Reference videos 0/10 Reference images 1/30 Refe",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 991,
        "y": 173,
        "w": 360,
        "h": 734
      },
      {
        "tag": "button",
        "text": "Seedance 2.5 Omni Reference 200",
        "x": 1003,
        "y": 185,
        "w": 301,
        "h": 31
      },
      {
        "tag": "button",
        "text": "",
        "x": 1309,
        "y": 185,
        "w": 31,
        "h": 31
      },
      {
        "tag": "button",
        "text": "",
        "x": 1003,
        "y": 257,
        "w": 52,
        "h": 52
      },
      {
        "tag": "div",
        "text": "",
        "x": 1003,
        "y": 340,
        "w": 52,
        "h": 52
      },
      {
        "tag": "button",
        "text": "",
        "x": 1060,
        "y": 340,
        "w": 52,
        "h": 52
      },
      {
        "tag": "button",
        "text": "",
        "x": 1003,
        "y": 422,
        "w": 52,
        "h": 52
      },
      {
        "tag": "label",
        "text": "Prompt",
        "x": 1003,
        "y": 487,
        "w": 53,
        "h": 21
      },
      {
        "tag": "button",
        "text": "",
        "x": 1319,
        "y": 487,
        "w": 21,
        "h": 21
      },
      {
        "tag": "button",
        "text": "16:9",
        "x": 1003,
        "y": 725,
        "w": 106,
        "h": 41
      },
      {
        "tag": "button",
        "text": "5″",
        "x": 1119,
        "y": 725,
        "w": 106,
        "h": 41
      },
      {
        "tag": "button",
        "text": "720p",
        "x": 1234,
        "y": 725,
        "w": 106,
        "h": 41
      },
      {
        "tag": "label",
        "text": "Real Faces Mode · On",
        "x": 1014,
        "y": 800,
        "w": 218,
        "h": 21
      },
      {
        "tag": "button",
        "text": "",
        "x": 1240,
        "y": 801,
        "w": 18,
        "h": 18
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1289,
        "y": 800,
        "w": 37,
        "h": 21
      },
      {
        "tag": "button",
        "text": "Run",
        "x": 1003,
        "y": 854,
        "w": 88,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 1090,
        "y": 854,
        "w": 31,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 1299,
        "y": 854,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 621,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 671,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 711,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run All",
        "x": 768,
        "y": 1022,
        "w": 89,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 857,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 455,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 514,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 550,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 586,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(-346.85px, -73.4343px) scale(1.28727)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(319.446px, 191.538px)",
          "x": 64,
          "y": 173,
          "w": 360,
          "h": 286,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 425,
              "cy": 324
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(679.446px, 191.538px)",
          "x": 528,
          "y": 173,
          "w": 360,
          "h": 211,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 528,
              "cy": 307
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 888,
              "cy": 286
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(1039.45px, 191.538px)",
          "x": 991,
          "y": 173,
          "w": 360,
          "h": 734,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 991,
              "cy": 609
            },
            {
              "id": "edge-in-text_input-2",
              "type": "target",
              "cx": 991,
              "cy": 609
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 991,
              "cy": 364
            },
            {
              "id": "edge-in-image_2",
              "type": "target",
              "cx": 991,
              "cy": 364
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 991,
              "cy": 281
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 991,
              "cy": 447
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 1374,
              "cy": 554
            }
          ]
        }
      ],
      "edges": [
        {
          "id": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
          "d": "M605.4455555555556,308.537962962963 C819.4455555555555,308.537962962963 819.4455555555555,340.131712962963 1033.4455555555555,340.131712962963"
        },
        {
          "id": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
          "d": "M965.4455555555556,279.537962962963 C999.4455555555555,279.537962962963 999.4455555555555,530.131712962963 1033.4455555555555,530.131712962963"
        }
      ]
    }
  },
  "ep1-s5-horizontal": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
        "x": 475,
        "y": 342,
        "w": 466,
        "h": 65
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
        "x": 867,
        "y": 310,
        "w": 74,
        "h": 303
      },
      {
        "tag": "div",
        "text": "Image Loader Drop image here or click to upload Supports JPEG, PNG, WebP (max 10",
        "testid": "rf__node-LoadImage-71329618",
        "x": 163,
        "y": 230,
        "w": 305,
        "h": 242
      },
      {
        "tag": "button",
        "text": "",
        "x": 432,
        "y": 239,
        "w": 26,
        "h": 26
      },
      {
        "tag": "div",
        "text": "Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 556,
        "y": 230,
        "w": 305,
        "h": 179
      },
      {
        "tag": "button",
        "text": "",
        "x": 825,
        "y": 239,
        "w": 26,
        "h": 26
      },
      {
        "tag": "button",
        "text": "",
        "x": 829,
        "y": 279,
        "w": 17,
        "h": 17
      },
      {
        "tag": "div",
        "text": "Seedance 2.5 Omni Reference 200 Reference videos 0/10 Reference images 1/30 Refe",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 948,
        "y": 230,
        "w": 305,
        "h": 621
      },
      {
        "tag": "button",
        "text": "Seedance 2.5 Omni Reference 200",
        "x": 957,
        "y": 239,
        "w": 255,
        "h": 26
      },
      {
        "tag": "button",
        "text": "",
        "x": 1217,
        "y": 239,
        "w": 26,
        "h": 26
      },
      {
        "tag": "button",
        "text": "",
        "x": 957,
        "y": 300,
        "w": 44,
        "h": 44
      },
      {
        "tag": "div",
        "text": "",
        "x": 957,
        "y": 370,
        "w": 44,
        "h": 44
      },
      {
        "tag": "button",
        "text": "",
        "x": 1006,
        "y": 370,
        "w": 44,
        "h": 44
      },
      {
        "tag": "button",
        "text": "",
        "x": 957,
        "y": 441,
        "w": 44,
        "h": 44
      },
      {
        "tag": "label",
        "text": "Prompt",
        "x": 957,
        "y": 495,
        "w": 45,
        "h": 17
      },
      {
        "tag": "button",
        "text": "",
        "x": 1225,
        "y": 495,
        "w": 17,
        "h": 17
      },
      {
        "tag": "button",
        "text": "16:9",
        "x": 957,
        "y": 697,
        "w": 89,
        "h": 35
      },
      {
        "tag": "button",
        "text": "5″",
        "x": 1055,
        "y": 697,
        "w": 89,
        "h": 35
      },
      {
        "tag": "button",
        "text": "720p",
        "x": 1153,
        "y": 697,
        "w": 89,
        "h": 35
      },
      {
        "tag": "label",
        "text": "Real Faces Mode · On",
        "x": 967,
        "y": 760,
        "w": 184,
        "h": 17
      },
      {
        "tag": "button",
        "text": "",
        "x": 1158,
        "y": 761,
        "w": 15,
        "h": 15
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1200,
        "y": 760,
        "w": 31,
        "h": 18
      },
      {
        "tag": "button",
        "text": "Run",
        "x": 957,
        "y": 806,
        "w": 74,
        "h": 35
      },
      {
        "tag": "button",
        "text": "",
        "x": 1032,
        "y": 806,
        "w": 26,
        "h": 35
      },
      {
        "tag": "button",
        "text": "",
        "x": 1208,
        "y": 806,
        "w": 35,
        "h": 35
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 621,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 671,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 711,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run All",
        "x": 768,
        "y": 1022,
        "w": 89,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 857,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 455,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 514,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 550,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 586,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(-184.565px, 20.9402px) scale(1.08923)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(319.446px, 191.538px)",
          "x": 163,
          "y": 230,
          "w": 305,
          "h": 242,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 468,
              "cy": 357
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(679.446px, 191.538px)",
          "x": 556,
          "y": 230,
          "w": 305,
          "h": 179,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 556,
              "cy": 343
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 860,
              "cy": 325
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(1039.45px, 191.538px)",
          "x": 948,
          "y": 230,
          "w": 305,
          "h": 621,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 948,
              "cy": 598
            },
            {
              "id": "edge-in-text_input-2",
              "type": "target",
              "cx": 948,
              "cy": 598
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 948,
              "cy": 391
            },
            {
              "id": "edge-in-image_2",
              "type": "target",
              "cx": 948,
              "cy": 391
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 948,
              "cy": 321
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 948,
              "cy": 462
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 1271,
              "cy": 552
            }
          ]
        }
      ],
      "edges": [
        {
          "id": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
          "d": "M605.4455555555556,308.537962962963 C819.4455555555555,308.537962962963 819.4455555555555,340.131712962963 1033.4455555555555,340.131712962963"
        },
        {
          "id": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
          "d": "M965.4455555555556,279.537962962963 C999.4455555555555,279.537962962963 999.4455555555555,530.131712962963 1033.4455555555555,530.131712962963"
        }
      ]
    }
  },
  "ep1-s5-messy": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
        "x": 974,
        "y": 215,
        "w": 238,
        "h": 160
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
        "x": 329,
        "y": 636,
        "w": 884,
        "h": 339
      },
      {
        "tag": "div",
        "text": "Image Loader Drop image here or click to upload Supports JPEG, PNG, WebP (max 10",
        "testid": "rf__node-LoadImage-71329618",
        "x": 514,
        "y": 49,
        "w": 451,
        "h": 357
      },
      {
        "tag": "button",
        "text": "",
        "x": 912,
        "y": 64,
        "w": 39,
        "h": 39
      },
      {
        "tag": "div",
        "text": "Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": -131,
        "y": 811,
        "w": 451,
        "h": 264
      },
      {
        "tag": "button",
        "text": "",
        "x": 266,
        "y": 825,
        "w": 39,
        "h": 39
      },
      {
        "tag": "button",
        "text": "",
        "x": 273,
        "y": 883,
        "w": 26,
        "h": 26
      },
      {
        "tag": "div",
        "text": "Seedance 2.5 Omni Reference 200 Reference videos 0/10 Reference images 1/30 Refe",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 1222,
        "y": 113,
        "w": 451,
        "h": 918
      },
      {
        "tag": "button",
        "text": "Seedance 2.5 Omni Reference 200",
        "x": 1237,
        "y": 128,
        "w": 377,
        "h": 39
      },
      {
        "tag": "button",
        "text": "",
        "x": 1620,
        "y": 128,
        "w": 39,
        "h": 39
      },
      {
        "tag": "button",
        "text": "",
        "x": 1237,
        "y": 218,
        "w": 65,
        "h": 65
      },
      {
        "tag": "div",
        "text": "",
        "x": 1237,
        "y": 322,
        "w": 65,
        "h": 65
      },
      {
        "tag": "button",
        "text": "",
        "x": 1308,
        "y": 322,
        "w": 65,
        "h": 65
      },
      {
        "tag": "button",
        "text": "",
        "x": 1237,
        "y": 425,
        "w": 65,
        "h": 65
      },
      {
        "tag": "label",
        "text": "Prompt",
        "x": 1237,
        "y": 506,
        "w": 67,
        "h": 26
      },
      {
        "tag": "button",
        "text": "",
        "x": 1633,
        "y": 506,
        "w": 26,
        "h": 26
      },
      {
        "tag": "button",
        "text": "16:9",
        "x": 1237,
        "y": 804,
        "w": 132,
        "h": 52
      },
      {
        "tag": "button",
        "text": "5″",
        "x": 1382,
        "y": 804,
        "w": 132,
        "h": 52
      },
      {
        "tag": "button",
        "text": "720p",
        "x": 1527,
        "y": 804,
        "w": 132,
        "h": 52
      },
      {
        "tag": "label",
        "text": "Real Faces Mode · On",
        "x": 1251,
        "y": 897,
        "w": 272,
        "h": 26
      },
      {
        "tag": "button",
        "text": "",
        "x": 1533,
        "y": 899,
        "w": 23,
        "h": 23
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1595,
        "y": 897,
        "w": 46,
        "h": 27
      },
      {
        "tag": "button",
        "text": "Run",
        "x": 1237,
        "y": 965,
        "w": 110,
        "h": 52
      },
      {
        "tag": "button",
        "text": "",
        "x": 1346,
        "y": 965,
        "w": 39,
        "h": 52
      },
      {
        "tag": "button",
        "text": "",
        "x": 1607,
        "y": 965,
        "w": 52,
        "h": 52
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 621,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 671,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 711,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run All",
        "x": 768,
        "y": 1022,
        "w": 89,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 857,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 455,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 514,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 550,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 586,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(-258.412px, -208.435px) scale(1.60954)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(480px, 160px)",
          "x": 514,
          "y": 49,
          "w": 451,
          "h": 357,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 965,
              "cy": 237
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(78.8911px, 633.076px)",
          "x": -131,
          "y": 811,
          "w": 451,
          "h": 264,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": -131,
              "cy": 978
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 319,
              "cy": 952
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(920px, 200px)",
          "x": 1222,
          "y": 113,
          "w": 451,
          "h": 918,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 1222,
              "cy": 658
            },
            {
              "id": "edge-in-text_input-2",
              "type": "target",
              "cx": 1222,
              "cy": 658
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 1222,
              "cy": 353
            },
            {
              "id": "edge-in-image_2",
              "type": "target",
              "cx": 1222,
              "cy": 353
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 1222,
              "cy": 249
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 1222,
              "cy": 456
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 1700,
              "cy": 590
            }
          ]
        }
      ],
      "edges": [
        {
          "id": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
          "d": "M766,277 C840,277 840,348.59375 914,348.59375"
        },
        {
          "id": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
          "d": "M364.89111111111123,721.075925925926 C639.4455555555555,721.075925925926 639.4455555555556,538.59375 914,538.59375"
        }
      ]
    }
  },
  "ep1-s5-submenu": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
        "x": 659,
        "y": 319,
        "w": 98,
        "h": 504
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
        "x": 659,
        "y": 388,
        "w": 98,
        "h": 247
      },
      {
        "tag": "div",
        "text": "Untitled Node Image Loader Drop image here or click to upload Supports JPEG, PNG",
        "testid": "rf__node-LoadImage-71329618",
        "x": 245,
        "y": 634,
        "w": 405,
        "h": 321
      },
      {
        "tag": "button",
        "text": "",
        "x": 602,
        "y": 647,
        "w": 35,
        "h": 35
      },
      {
        "tag": "div",
        "text": "Untitled Node Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 245,
        "y": 281,
        "w": 405,
        "h": 237
      },
      {
        "tag": "button",
        "text": "",
        "x": 602,
        "y": 294,
        "w": 35,
        "h": 35
      },
      {
        "tag": "button",
        "text": "",
        "x": 608,
        "y": 346,
        "w": 23,
        "h": 23
      },
      {
        "tag": "div",
        "text": "Untitled Node Seedance 2.5 Omni Reference 200 Reference videos 0/10 Reference im",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 766,
        "y": 125,
        "w": 405,
        "h": 825
      },
      {
        "tag": "button",
        "text": "Seedance 2.5 Omni Reference 200",
        "x": 779,
        "y": 138,
        "w": 339,
        "h": 35
      },
      {
        "tag": "button",
        "text": "",
        "x": 1123,
        "y": 138,
        "w": 35,
        "h": 35
      },
      {
        "tag": "button",
        "text": "",
        "x": 779,
        "y": 219,
        "w": 58,
        "h": 58
      },
      {
        "tag": "div",
        "text": "",
        "x": 779,
        "y": 312,
        "w": 58,
        "h": 58
      },
      {
        "tag": "button",
        "text": "",
        "x": 843,
        "y": 312,
        "w": 58,
        "h": 58
      },
      {
        "tag": "button",
        "text": "",
        "x": 779,
        "y": 405,
        "w": 58,
        "h": 58
      },
      {
        "tag": "label",
        "text": "Prompt",
        "x": 779,
        "y": 478,
        "w": 60,
        "h": 23
      },
      {
        "tag": "button",
        "text": "",
        "x": 1135,
        "y": 478,
        "w": 23,
        "h": 23
      },
      {
        "tag": "button",
        "text": "16:9",
        "x": 779,
        "y": 745,
        "w": 119,
        "h": 46
      },
      {
        "tag": "button",
        "text": "5″",
        "x": 909,
        "y": 745,
        "w": 119,
        "h": 46
      },
      {
        "tag": "button",
        "text": "720p",
        "x": 1039,
        "y": 745,
        "w": 119,
        "h": 46
      },
      {
        "tag": "label",
        "text": "Real Faces Mode · On",
        "x": 792,
        "y": 829,
        "w": 245,
        "h": 23
      },
      {
        "tag": "button",
        "text": "",
        "x": 1045,
        "y": 831,
        "w": 20,
        "h": 20
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1101,
        "y": 829,
        "w": 42,
        "h": 24
      },
      {
        "tag": "button",
        "text": "Run",
        "x": 779,
        "y": 891,
        "w": 99,
        "h": 46
      },
      {
        "tag": "button",
        "text": "",
        "x": 877,
        "y": 891,
        "w": 35,
        "h": 46
      },
      {
        "tag": "button",
        "text": "",
        "x": 1112,
        "y": 891,
        "w": 46,
        "h": 46
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 601,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 651,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 691,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run Selected",
        "x": 748,
        "y": 1022,
        "w": 130,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 878,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 416,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 476,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 512,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 548,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1455,
        "y": 967,
        "w": 44,
        "h": 44
      },
      {
        "tag": "button",
        "text": "",
        "x": 1487,
        "y": 963,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1505,
        "y": 967,
        "w": 44,
        "h": 44
      },
      {
        "tag": "button",
        "text": "",
        "x": 1537,
        "y": 963,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1555,
        "y": 967,
        "w": 44,
        "h": 44
      },
      {
        "tag": "button",
        "text": "",
        "x": 1587,
        "y": 963,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "3",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(-217.511px, -152.61px) scale(1.44736)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(319.446px, 543.538px)",
          "x": 245,
          "y": 634,
          "w": 405,
          "h": 321,
          "selected": true,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 650,
              "cy": 803
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(319.446px, 299.538px)",
          "x": 245,
          "y": 281,
          "w": 405,
          "h": 237,
          "selected": true,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 245,
              "cy": 431
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 650,
              "cy": 408
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(679.446px, 191.538px)",
          "x": 766,
          "y": 125,
          "w": 405,
          "h": 825,
          "selected": true,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 766,
              "cy": 615
            },
            {
              "id": "edge-in-text_input-2",
              "type": "target",
              "cx": 766,
              "cy": 615
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 766,
              "cy": 340
            },
            {
              "id": "edge-in-image_2",
              "type": "target",
              "cx": 766,
              "cy": 340
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 766,
              "cy": 246
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 766,
              "cy": 433
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 1196,
              "cy": 553
            }
          ]
        }
      ],
      "edges": [
        {
          "id": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
          "d": "M605.4455555555556,660.537962962963 C639.4455555555556,660.537962962963 639.4455555555556,340.131712962963 673.4455555555556,340.131712962963"
        },
        {
          "id": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
          "d": "M605.4455555555556,387.537962962963 C639.4455555555556,387.537962962963 639.4455555555556,530.131712962963 673.4455555555556,530.131712962963"
        }
      ]
    }
  },
  "ep1-s5-vertical": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
        "x": 578,
        "y": 225,
        "w": 259,
        "h": 663
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
        "x": 578,
        "y": 366,
        "w": 259,
        "h": 318
      },
      {
        "tag": "div",
        "text": "Untitled Node Image Loader Drop image here or click to upload Supports JPEG, PNG",
        "testid": "rf__node-LoadImage-71329618",
        "x": 604,
        "y": 790,
        "w": 208,
        "h": 165
      },
      {
        "tag": "button",
        "text": "",
        "x": 788,
        "y": 797,
        "w": 18,
        "h": 18
      },
      {
        "tag": "div",
        "text": "Untitled Node Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 604,
        "y": 609,
        "w": 208,
        "h": 122
      },
      {
        "tag": "button",
        "text": "",
        "x": 788,
        "y": 615,
        "w": 18,
        "h": 18
      },
      {
        "tag": "button",
        "text": "",
        "x": 791,
        "y": 642,
        "w": 12,
        "h": 12
      },
      {
        "tag": "div",
        "text": "Untitled Node Seedance 2.5 Omni Reference 200 Reference videos 0/10 Reference im",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 604,
        "y": 125,
        "w": 208,
        "h": 424
      },
      {
        "tag": "button",
        "text": "Seedance 2.5 Omni Reference 200",
        "x": 610,
        "y": 131,
        "w": 174,
        "h": 18
      },
      {
        "tag": "button",
        "text": "",
        "x": 788,
        "y": 131,
        "w": 18,
        "h": 18
      },
      {
        "tag": "button",
        "text": "",
        "x": 610,
        "y": 173,
        "w": 30,
        "h": 30
      },
      {
        "tag": "div",
        "text": "",
        "x": 610,
        "y": 221,
        "w": 30,
        "h": 30
      },
      {
        "tag": "button",
        "text": "",
        "x": 643,
        "y": 221,
        "w": 30,
        "h": 30
      },
      {
        "tag": "button",
        "text": "",
        "x": 610,
        "y": 269,
        "w": 30,
        "h": 30
      },
      {
        "tag": "label",
        "text": "Prompt",
        "x": 610,
        "y": 306,
        "w": 31,
        "h": 12
      },
      {
        "tag": "button",
        "text": "",
        "x": 794,
        "y": 306,
        "w": 12,
        "h": 12
      },
      {
        "tag": "button",
        "text": "16:9",
        "x": 610,
        "y": 444,
        "w": 61,
        "h": 24
      },
      {
        "tag": "button",
        "text": "5″",
        "x": 677,
        "y": 444,
        "w": 61,
        "h": 24
      },
      {
        "tag": "button",
        "text": "720p",
        "x": 744,
        "y": 444,
        "w": 61,
        "h": 24
      },
      {
        "tag": "label",
        "text": "Real Faces Mode · On",
        "x": 617,
        "y": 487,
        "w": 126,
        "h": 12
      },
      {
        "tag": "button",
        "text": "",
        "x": 747,
        "y": 488,
        "w": 10,
        "h": 10
      },
      {
        "tag": "button",
        "text": "on",
        "x": 776,
        "y": 487,
        "w": 21,
        "h": 12
      },
      {
        "tag": "button",
        "text": "Run",
        "x": 610,
        "y": 519,
        "w": 51,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 661,
        "y": 519,
        "w": 18,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 782,
        "y": 519,
        "w": 24,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 601,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 651,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 691,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run Selected",
        "x": 748,
        "y": 1022,
        "w": 130,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 878,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 416,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 476,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 512,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 548,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1455,
        "y": 967,
        "w": 44,
        "h": 44
      },
      {
        "tag": "button",
        "text": "",
        "x": 1487,
        "y": 963,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1505,
        "y": 967,
        "w": 44,
        "h": 44
      },
      {
        "tag": "button",
        "text": "",
        "x": 1537,
        "y": 963,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1555,
        "y": 967,
        "w": 44,
        "h": 44
      },
      {
        "tag": "button",
        "text": "",
        "x": 1587,
        "y": 963,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "3",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(365.96px, -17.9736px) scale(0.744442)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(319.446px, 1085.54px)",
          "x": 604,
          "y": 790,
          "w": 208,
          "h": 165,
          "selected": true,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 812,
              "cy": 877
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(319.446px, 841.538px)",
          "x": 604,
          "y": 609,
          "w": 208,
          "h": 122,
          "selected": true,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 604,
              "cy": 686
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 812,
              "cy": 674
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(319.446px, 191.538px)",
          "x": 604,
          "y": 125,
          "w": 208,
          "h": 424,
          "selected": true,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 604,
              "cy": 377
            },
            {
              "id": "edge-in-text_input-2",
              "type": "target",
              "cx": 604,
              "cy": 377
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 604,
              "cy": 235
            },
            {
              "id": "edge-in-image_2",
              "type": "target",
              "cx": 604,
              "cy": 235
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 604,
              "cy": 187
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 604,
              "cy": 283
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 825,
              "cy": 345
            }
          ]
        }
      ],
      "edges": [
        {
          "id": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
          "d": "M605.4455555555556,1202.5379629629629 C712.2456023720248,1202.5379629629629 206.6455087390865,340.131712962963 313.44555555555564,340.131712962963"
        },
        {
          "id": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
          "d": "M605.4455555555556,929.537962962963 C712.2456023720248,929.537962962963 206.6455087390865,530.131712962963 313.44555555555564,530.131712962963"
        }
      ]
    }
  },
  "ep1-s6-assetspage": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1745,
        "y": 1020,
        "w": 151,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 1579,
        "y": 12,
        "w": 36,
        "h": 32
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1627,
        "y": 16,
        "w": 75,
        "h": 24
      },
      {
        "tag": "button",
        "text": "Upgrade",
        "x": 1706,
        "y": 16,
        "w": 70,
        "h": 24
      },
      {
        "tag": "button",
        "text": "Enrong Xie",
        "x": 1788,
        "y": 12,
        "w": 108,
        "h": 32
      },
      {
        "tag": "a",
        "text": "YouArt",
        "x": 14,
        "y": 16,
        "w": 97,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 189,
        "y": 16,
        "w": 36,
        "h": 36
      },
      {
        "tag": "a",
        "text": "Home",
        "x": 14,
        "y": 76,
        "w": 211,
        "h": 36
      },
      {
        "tag": "a",
        "text": "Workflow",
        "x": 14,
        "y": 116,
        "w": 211,
        "h": 36
      },
      {
        "tag": "a",
        "text": "Image",
        "x": 14,
        "y": 156,
        "w": 211,
        "h": 36
      },
      {
        "tag": "a",
        "text": "Video",
        "x": 14,
        "y": 196,
        "w": 211,
        "h": 36
      },
      {
        "tag": "a",
        "text": "Canvas",
        "x": 14,
        "y": 236,
        "w": 211,
        "h": 36
      },
      {
        "tag": "a",
        "text": "World",
        "x": 14,
        "y": 276,
        "w": 211,
        "h": 36
      },
      {
        "tag": "a",
        "text": "Logo Animation",
        "x": 14,
        "y": 316,
        "w": 211,
        "h": 36
      },
      {
        "tag": "a",
        "text": "AI UGC",
        "x": 14,
        "y": 356,
        "w": 211,
        "h": 36
      },
      {
        "tag": "a",
        "text": "MCP Server",
        "x": 14,
        "y": 396,
        "w": 211,
        "h": 36
      },
      {
        "tag": "a",
        "text": "Projects",
        "x": 14,
        "y": 449,
        "w": 211,
        "h": 36
      },
      {
        "tag": "a",
        "text": "Assets",
        "x": 14,
        "y": 489,
        "w": 211,
        "h": 36
      },
      {
        "tag": "a",
        "text": "Social accounts",
        "x": 14,
        "y": 529,
        "w": 211,
        "h": 36
      },
      {
        "tag": "a",
        "text": "Events",
        "x": 14,
        "y": 582,
        "w": 211,
        "h": 36
      },
      {
        "tag": "a",
        "text": "Release Note 9 9 new release notes",
        "x": 14,
        "y": 903,
        "w": 211,
        "h": 36
      },
      {
        "tag": "a",
        "text": "Join Discord",
        "x": 14,
        "y": 943,
        "w": 211,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Language English",
        "x": 14,
        "y": 996,
        "w": 211,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Theme Dark",
        "x": 14,
        "y": 1036,
        "w": 211,
        "h": 36
      },
      {
        "tag": "h1",
        "text": "Assets",
        "x": 480,
        "y": 80,
        "w": 1200,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Images",
        "x": 480,
        "y": 138,
        "w": 81,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Videos",
        "x": 569,
        "y": 138,
        "w": 78,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Audios",
        "x": 655,
        "y": 138,
        "w": 79,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Worlds",
        "x": 742,
        "y": 138,
        "w": 79,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Workflow Node Template",
        "x": 829,
        "y": 138,
        "w": 201,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Default",
        "x": 1536,
        "y": 136,
        "w": 144,
        "h": 36
      },
      {
        "tag": "h2",
        "text": "Today",
        "x": 480,
        "y": 196,
        "w": 1200,
        "h": 20
      },
      {
        "tag": "h2",
        "text": "Yesterday",
        "x": 480,
        "y": 577,
        "w": 1200,
        "h": 20
      },
      {
        "tag": "h2",
        "text": "Previous 7 Days",
        "x": 480,
        "y": 937,
        "w": 1200,
        "h": 20
      },
      {
        "tag": "h2",
        "text": "July 2026",
        "x": 480,
        "y": 1347,
        "w": 1200,
        "h": 20
      }
    ]
  },
  "ep1-s6-dropped": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
        "x": 433,
        "y": 306,
        "w": 551,
        "h": 77
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
        "x": 896,
        "y": 268,
        "w": 88,
        "h": 359
      },
      {
        "tag": "div",
        "text": "Image Loader Drop image here or click to upload Supports JPEG, PNG, WebP (max 10",
        "testid": "rf__node-LoadImage-71329618",
        "x": 64,
        "y": 173,
        "w": 360,
        "h": 286
      },
      {
        "tag": "button",
        "text": "",
        "x": 382,
        "y": 185,
        "w": 31,
        "h": 31
      },
      {
        "tag": "div",
        "text": "Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 528,
        "y": 173,
        "w": 360,
        "h": 211
      },
      {
        "tag": "button",
        "text": "",
        "x": 846,
        "y": 185,
        "w": 31,
        "h": 31
      },
      {
        "tag": "button",
        "text": "",
        "x": 851,
        "y": 231,
        "w": 21,
        "h": 21
      },
      {
        "tag": "div",
        "text": "Seedance 2.5 Omni Reference 200 Reference videos 0/10 Reference images 1/30 Refe",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 991,
        "y": 173,
        "w": 360,
        "h": 734
      },
      {
        "tag": "button",
        "text": "Seedance 2.5 Omni Reference 200",
        "x": 1003,
        "y": 185,
        "w": 301,
        "h": 31
      },
      {
        "tag": "button",
        "text": "",
        "x": 1309,
        "y": 185,
        "w": 31,
        "h": 31
      },
      {
        "tag": "button",
        "text": "",
        "x": 1003,
        "y": 257,
        "w": 52,
        "h": 52
      },
      {
        "tag": "div",
        "text": "",
        "x": 1003,
        "y": 340,
        "w": 52,
        "h": 52
      },
      {
        "tag": "button",
        "text": "",
        "x": 1060,
        "y": 340,
        "w": 52,
        "h": 52
      },
      {
        "tag": "button",
        "text": "",
        "x": 1003,
        "y": 422,
        "w": 52,
        "h": 52
      },
      {
        "tag": "label",
        "text": "Prompt",
        "x": 1003,
        "y": 487,
        "w": 53,
        "h": 21
      },
      {
        "tag": "button",
        "text": "",
        "x": 1319,
        "y": 487,
        "w": 21,
        "h": 21
      },
      {
        "tag": "button",
        "text": "16:9",
        "x": 1003,
        "y": 725,
        "w": 106,
        "h": 41
      },
      {
        "tag": "button",
        "text": "5″",
        "x": 1119,
        "y": 725,
        "w": 106,
        "h": 41
      },
      {
        "tag": "button",
        "text": "720p",
        "x": 1234,
        "y": 725,
        "w": 106,
        "h": 41
      },
      {
        "tag": "label",
        "text": "Real Faces Mode · On",
        "x": 1014,
        "y": 800,
        "w": 218,
        "h": 21
      },
      {
        "tag": "button",
        "text": "",
        "x": 1240,
        "y": 801,
        "w": 18,
        "h": 18
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1289,
        "y": 800,
        "w": 37,
        "h": 21
      },
      {
        "tag": "button",
        "text": "Run",
        "x": 1003,
        "y": 854,
        "w": 88,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 1090,
        "y": 854,
        "w": 31,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 1299,
        "y": 854,
        "w": 41,
        "h": 41
      },
      {
        "tag": "div",
        "text": "Image Loader",
        "testid": "rf__node-LoadImage-4c36e1ad",
        "x": 560,
        "y": 432,
        "w": 360,
        "h": 446
      },
      {
        "tag": "button",
        "text": "",
        "x": 499,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 546,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 592,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 639,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 685,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 731,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 789,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 835,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 893,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 940,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 621,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 671,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 711,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run All",
        "x": 768,
        "y": 1022,
        "w": 89,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 857,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 455,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 514,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 550,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 586,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(-346.276px, -74.0291px) scale(1.28727)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(319px, 192px)",
          "x": 64,
          "y": 173,
          "w": 360,
          "h": 286,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 425,
              "cy": 324
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(679px, 192px)",
          "x": 528,
          "y": 173,
          "w": 360,
          "h": 211,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 528,
              "cy": 307
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 888,
              "cy": 286
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(1039px, 192px)",
          "x": 991,
          "y": 173,
          "w": 360,
          "h": 734,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 991,
              "cy": 609
            },
            {
              "id": "edge-in-text_input-2",
              "type": "target",
              "cx": 991,
              "cy": 609
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 991,
              "cy": 364
            },
            {
              "id": "edge-in-image_2",
              "type": "target",
              "cx": 991,
              "cy": 364
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 991,
              "cy": 281
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 991,
              "cy": 447
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 1374,
              "cy": 554
            }
          ]
        },
        {
          "id": "LoadImage-4c36e1ad",
          "transform": "translate(704.028px, 393.282px)",
          "x": 560,
          "y": 432,
          "w": 360,
          "h": 446,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 942,
              "cy": 868
            }
          ]
        }
      ],
      "edges": [
        {
          "id": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
          "d": "M605.0005888718835,309.0002552564609 C819.0002894593244,309.0002552564609 819.0002894593244,340.59406952006475 1032.9999900467656,340.59406952006475"
        },
        {
          "id": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
          "d": "M965,280 C998.9999950233828,280 998.9999950233828,530.594447925042 1032.9999900467656,530.594447925042"
        }
      ]
    }
  },
  "ep1-s6-fit": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
        "x": 433,
        "y": 306,
        "w": 551,
        "h": 77
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
        "x": 896,
        "y": 268,
        "w": 88,
        "h": 359
      },
      {
        "tag": "div",
        "text": "Image Loader Drop image here or click to upload Supports JPEG, PNG, WebP (max 10",
        "testid": "rf__node-LoadImage-71329618",
        "x": 64,
        "y": 173,
        "w": 360,
        "h": 286
      },
      {
        "tag": "button",
        "text": "",
        "x": 382,
        "y": 185,
        "w": 31,
        "h": 31
      },
      {
        "tag": "div",
        "text": "Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 528,
        "y": 173,
        "w": 360,
        "h": 211
      },
      {
        "tag": "button",
        "text": "",
        "x": 846,
        "y": 185,
        "w": 31,
        "h": 31
      },
      {
        "tag": "button",
        "text": "",
        "x": 851,
        "y": 231,
        "w": 21,
        "h": 21
      },
      {
        "tag": "div",
        "text": "Seedance 2.5 Omni Reference 200 Reference videos 0/10 Reference images 1/30 Refe",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 991,
        "y": 173,
        "w": 360,
        "h": 734
      },
      {
        "tag": "button",
        "text": "Seedance 2.5 Omni Reference 200",
        "x": 1003,
        "y": 185,
        "w": 301,
        "h": 31
      },
      {
        "tag": "button",
        "text": "",
        "x": 1309,
        "y": 185,
        "w": 31,
        "h": 31
      },
      {
        "tag": "button",
        "text": "",
        "x": 1003,
        "y": 257,
        "w": 52,
        "h": 52
      },
      {
        "tag": "div",
        "text": "",
        "x": 1003,
        "y": 340,
        "w": 52,
        "h": 52
      },
      {
        "tag": "button",
        "text": "",
        "x": 1060,
        "y": 340,
        "w": 52,
        "h": 52
      },
      {
        "tag": "button",
        "text": "",
        "x": 1003,
        "y": 422,
        "w": 52,
        "h": 52
      },
      {
        "tag": "label",
        "text": "Prompt",
        "x": 1003,
        "y": 487,
        "w": 53,
        "h": 21
      },
      {
        "tag": "button",
        "text": "",
        "x": 1319,
        "y": 487,
        "w": 21,
        "h": 21
      },
      {
        "tag": "button",
        "text": "16:9",
        "x": 1003,
        "y": 725,
        "w": 106,
        "h": 41
      },
      {
        "tag": "button",
        "text": "5″",
        "x": 1119,
        "y": 725,
        "w": 106,
        "h": 41
      },
      {
        "tag": "button",
        "text": "720p",
        "x": 1234,
        "y": 725,
        "w": 106,
        "h": 41
      },
      {
        "tag": "label",
        "text": "Real Faces Mode · On",
        "x": 1014,
        "y": 800,
        "w": 218,
        "h": 21
      },
      {
        "tag": "button",
        "text": "",
        "x": 1240,
        "y": 801,
        "w": 18,
        "h": 18
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1289,
        "y": 800,
        "w": 37,
        "h": 21
      },
      {
        "tag": "button",
        "text": "Run",
        "x": 1003,
        "y": 854,
        "w": 88,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 1090,
        "y": 854,
        "w": 31,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 1299,
        "y": 854,
        "w": 41,
        "h": 41
      },
      {
        "tag": "div",
        "text": "Image Loader",
        "testid": "rf__node-LoadImage-4c36e1ad",
        "x": 560,
        "y": 432,
        "w": 360,
        "h": 446
      },
      {
        "tag": "button",
        "text": "",
        "x": 499,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 546,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 592,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 639,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 685,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 731,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 789,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 835,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 893,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 940,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 621,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 671,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 711,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run All",
        "x": 768,
        "y": 1022,
        "w": 89,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 857,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 455,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 514,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 550,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 586,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(-346.276px, -74.0291px) scale(1.28727)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(319px, 192px)",
          "x": 64,
          "y": 173,
          "w": 360,
          "h": 286,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 425,
              "cy": 324
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(679px, 192px)",
          "x": 528,
          "y": 173,
          "w": 360,
          "h": 211,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 528,
              "cy": 307
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 888,
              "cy": 286
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(1039px, 192px)",
          "x": 991,
          "y": 173,
          "w": 360,
          "h": 734,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 991,
              "cy": 609
            },
            {
              "id": "edge-in-text_input-2",
              "type": "target",
              "cx": 991,
              "cy": 609
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 991,
              "cy": 364
            },
            {
              "id": "edge-in-image_2",
              "type": "target",
              "cx": 991,
              "cy": 364
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 991,
              "cy": 281
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 991,
              "cy": 447
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 1374,
              "cy": 554
            }
          ]
        },
        {
          "id": "LoadImage-4c36e1ad",
          "transform": "translate(704.028px, 393.282px)",
          "x": 560,
          "y": 432,
          "w": 360,
          "h": 446,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 942,
              "cy": 868
            }
          ]
        }
      ],
      "edges": [
        {
          "id": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
          "d": "M605.0005888718835,309.0002552564609 C819.0002894593244,309.0002552564609 819.0002894593244,340.59406952006475 1032.9999900467656,340.59406952006475"
        },
        {
          "id": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
          "d": "M965,280 C998.9999950233828,280 998.9999950233828,530.594447925042 1032.9999900467656,530.594447925042"
        }
      ]
    }
  },
  "ep1-s6-panel": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "label",
        "text": "Media Assets",
        "x": 73,
        "y": 461,
        "w": 126,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 205,
        "y": 465,
        "w": 20,
        "h": 20
      },
      {
        "tag": "button",
        "text": "",
        "x": 467,
        "y": 459,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 503,
        "y": 459,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "All",
        "x": 85,
        "y": 511,
        "w": 43,
        "h": 35
      },
      {
        "tag": "button",
        "text": "Images",
        "x": 136,
        "y": 511,
        "w": 75,
        "h": 35
      },
      {
        "tag": "button",
        "text": "Videos",
        "x": 219,
        "y": 511,
        "w": 72,
        "h": 35
      },
      {
        "tag": "button",
        "text": "Audios",
        "x": 299,
        "y": 511,
        "w": 73,
        "h": 35
      },
      {
        "tag": "input",
        "text": "Search name, prompt, model",
        "x": 85,
        "y": 563,
        "w": 312,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Default",
        "x": 405,
        "y": 563,
        "w": 118,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 86,
        "y": 604,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 235,
        "y": 604,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 383,
        "y": 604,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 86,
        "y": 752,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 235,
        "y": 752,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 383,
        "y": 752,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 86,
        "y": 901,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 235,
        "y": 901,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 383,
        "y": 901,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 86,
        "y": 1050,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 235,
        "y": 1050,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 383,
        "y": 1050,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 86,
        "y": 1198,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 235,
        "y": 1198,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 383,
        "y": 1198,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 86,
        "y": 1347,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 235,
        "y": 1347,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 383,
        "y": 1347,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 86,
        "y": 1496,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 235,
        "y": 1496,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 383,
        "y": 1496,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 86,
        "y": 1644,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 235,
        "y": 1644,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 383,
        "y": 1644,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 86,
        "y": 1793,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 235,
        "y": 1793,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 383,
        "y": 1793,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 86,
        "y": 1942,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 235,
        "y": 1942,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 383,
        "y": 1942,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 86,
        "y": 2090,
        "w": 139,
        "h": 139
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
        "x": 433,
        "y": 306,
        "w": 551,
        "h": 77
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
        "x": 896,
        "y": 268,
        "w": 88,
        "h": 359
      },
      {
        "tag": "div",
        "text": "Image Loader Drop image here or click to upload Supports JPEG, PNG, WebP (max 10",
        "testid": "rf__node-LoadImage-71329618",
        "x": 64,
        "y": 173,
        "w": 360,
        "h": 286
      },
      {
        "tag": "button",
        "text": "",
        "x": 382,
        "y": 185,
        "w": 31,
        "h": 31
      },
      {
        "tag": "div",
        "text": "Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 528,
        "y": 173,
        "w": 360,
        "h": 211
      },
      {
        "tag": "button",
        "text": "",
        "x": 846,
        "y": 185,
        "w": 31,
        "h": 31
      },
      {
        "tag": "button",
        "text": "",
        "x": 851,
        "y": 231,
        "w": 21,
        "h": 21
      },
      {
        "tag": "div",
        "text": "Seedance 2.5 Omni Reference 200 Reference videos 0/10 Reference images 1/30 Refe",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 991,
        "y": 173,
        "w": 360,
        "h": 734
      },
      {
        "tag": "button",
        "text": "Seedance 2.5 Omni Reference 200",
        "x": 1003,
        "y": 185,
        "w": 301,
        "h": 31
      },
      {
        "tag": "button",
        "text": "",
        "x": 1309,
        "y": 185,
        "w": 31,
        "h": 31
      },
      {
        "tag": "button",
        "text": "",
        "x": 1003,
        "y": 257,
        "w": 52,
        "h": 52
      },
      {
        "tag": "div",
        "text": "",
        "x": 1003,
        "y": 340,
        "w": 52,
        "h": 52
      },
      {
        "tag": "button",
        "text": "",
        "x": 1060,
        "y": 340,
        "w": 52,
        "h": 52
      },
      {
        "tag": "button",
        "text": "",
        "x": 1003,
        "y": 422,
        "w": 52,
        "h": 52
      },
      {
        "tag": "label",
        "text": "Prompt",
        "x": 1003,
        "y": 487,
        "w": 53,
        "h": 21
      },
      {
        "tag": "button",
        "text": "",
        "x": 1319,
        "y": 487,
        "w": 21,
        "h": 21
      },
      {
        "tag": "button",
        "text": "16:9",
        "x": 1003,
        "y": 725,
        "w": 106,
        "h": 41
      },
      {
        "tag": "button",
        "text": "5″",
        "x": 1119,
        "y": 725,
        "w": 106,
        "h": 41
      },
      {
        "tag": "button",
        "text": "720p",
        "x": 1234,
        "y": 725,
        "w": 106,
        "h": 41
      },
      {
        "tag": "label",
        "text": "Real Faces Mode · On",
        "x": 1014,
        "y": 800,
        "w": 218,
        "h": 21
      },
      {
        "tag": "button",
        "text": "",
        "x": 1240,
        "y": 801,
        "w": 18,
        "h": 18
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1289,
        "y": 800,
        "w": 37,
        "h": 21
      },
      {
        "tag": "button",
        "text": "Run",
        "x": 1003,
        "y": 854,
        "w": 88,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 1090,
        "y": 854,
        "w": 31,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 1299,
        "y": 854,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 621,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 671,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 711,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run All",
        "x": 768,
        "y": 1022,
        "w": 89,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 857,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 455,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 514,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 550,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 586,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(-346.276px, -74.0291px) scale(1.28727)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(319px, 192px)",
          "x": 64,
          "y": 173,
          "w": 360,
          "h": 286,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 425,
              "cy": 324
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(679px, 192px)",
          "x": 528,
          "y": 173,
          "w": 360,
          "h": 211,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 528,
              "cy": 307
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 888,
              "cy": 286
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(1039px, 192px)",
          "x": 991,
          "y": 173,
          "w": 360,
          "h": 734,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 991,
              "cy": 609
            },
            {
              "id": "edge-in-text_input-2",
              "type": "target",
              "cx": 991,
              "cy": 609
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 991,
              "cy": 364
            },
            {
              "id": "edge-in-image_2",
              "type": "target",
              "cx": 991,
              "cy": 364
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 991,
              "cy": 281
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 991,
              "cy": 447
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 1374,
              "cy": 554
            }
          ]
        }
      ],
      "edges": [
        {
          "id": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
          "d": "M605.0005888718835,309.0002552564609 C819.0002894593244,309.0002552564609 819.0002894593244,340.59406952006475 1032.9999900467656,340.59406952006475"
        },
        {
          "id": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
          "d": "M965,280 C998.9999950233828,280 998.9999950233828,530.594447925042 1032.9999900467656,530.594447925042"
        }
      ]
    }
  },
  "ep1-s6-panelhover": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "label",
        "text": "Media Assets",
        "x": 73,
        "y": 461,
        "w": 126,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 205,
        "y": 465,
        "w": 20,
        "h": 20
      },
      {
        "tag": "button",
        "text": "",
        "x": 467,
        "y": 459,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 503,
        "y": 459,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "All",
        "x": 85,
        "y": 511,
        "w": 43,
        "h": 35
      },
      {
        "tag": "button",
        "text": "Images",
        "x": 136,
        "y": 511,
        "w": 75,
        "h": 35
      },
      {
        "tag": "button",
        "text": "Videos",
        "x": 219,
        "y": 511,
        "w": 72,
        "h": 35
      },
      {
        "tag": "button",
        "text": "Audios",
        "x": 299,
        "y": 511,
        "w": 73,
        "h": 35
      },
      {
        "tag": "input",
        "text": "Search name, prompt, model",
        "x": 85,
        "y": 563,
        "w": 312,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Default",
        "x": 405,
        "y": 563,
        "w": 118,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 86,
        "y": 604,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 235,
        "y": 604,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 383,
        "y": 604,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 86,
        "y": 752,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 235,
        "y": 752,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 383,
        "y": 752,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 86,
        "y": 901,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 235,
        "y": 901,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 383,
        "y": 901,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 86,
        "y": 1050,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 235,
        "y": 1050,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 383,
        "y": 1050,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 86,
        "y": 1198,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 235,
        "y": 1198,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 383,
        "y": 1198,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 86,
        "y": 1347,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 235,
        "y": 1347,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 383,
        "y": 1347,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 86,
        "y": 1496,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 235,
        "y": 1496,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 383,
        "y": 1496,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 86,
        "y": 1644,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 235,
        "y": 1644,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 383,
        "y": 1644,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 86,
        "y": 1793,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 235,
        "y": 1793,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 383,
        "y": 1793,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 86,
        "y": 1942,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 235,
        "y": 1942,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 383,
        "y": 1942,
        "w": 139,
        "h": 139
      },
      {
        "tag": "button",
        "text": "",
        "x": 86,
        "y": 2090,
        "w": 139,
        "h": 139
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
        "x": 433,
        "y": 306,
        "w": 551,
        "h": 77
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
        "x": 896,
        "y": 268,
        "w": 88,
        "h": 359
      },
      {
        "tag": "div",
        "text": "Image Loader Drop image here or click to upload Supports JPEG, PNG, WebP (max 10",
        "testid": "rf__node-LoadImage-71329618",
        "x": 64,
        "y": 173,
        "w": 360,
        "h": 286
      },
      {
        "tag": "button",
        "text": "",
        "x": 382,
        "y": 185,
        "w": 31,
        "h": 31
      },
      {
        "tag": "div",
        "text": "Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 528,
        "y": 173,
        "w": 360,
        "h": 211
      },
      {
        "tag": "button",
        "text": "",
        "x": 846,
        "y": 185,
        "w": 31,
        "h": 31
      },
      {
        "tag": "button",
        "text": "",
        "x": 851,
        "y": 231,
        "w": 21,
        "h": 21
      },
      {
        "tag": "div",
        "text": "Seedance 2.5 Omni Reference 200 Reference videos 0/10 Reference images 1/30 Refe",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 991,
        "y": 173,
        "w": 360,
        "h": 734
      },
      {
        "tag": "button",
        "text": "Seedance 2.5 Omni Reference 200",
        "x": 1003,
        "y": 185,
        "w": 301,
        "h": 31
      },
      {
        "tag": "button",
        "text": "",
        "x": 1309,
        "y": 185,
        "w": 31,
        "h": 31
      },
      {
        "tag": "button",
        "text": "",
        "x": 1003,
        "y": 257,
        "w": 52,
        "h": 52
      },
      {
        "tag": "div",
        "text": "",
        "x": 1003,
        "y": 340,
        "w": 52,
        "h": 52
      },
      {
        "tag": "button",
        "text": "",
        "x": 1060,
        "y": 340,
        "w": 52,
        "h": 52
      },
      {
        "tag": "button",
        "text": "",
        "x": 1003,
        "y": 422,
        "w": 52,
        "h": 52
      },
      {
        "tag": "label",
        "text": "Prompt",
        "x": 1003,
        "y": 487,
        "w": 53,
        "h": 21
      },
      {
        "tag": "button",
        "text": "",
        "x": 1319,
        "y": 487,
        "w": 21,
        "h": 21
      },
      {
        "tag": "button",
        "text": "16:9",
        "x": 1003,
        "y": 725,
        "w": 106,
        "h": 41
      },
      {
        "tag": "button",
        "text": "5″",
        "x": 1119,
        "y": 725,
        "w": 106,
        "h": 41
      },
      {
        "tag": "button",
        "text": "720p",
        "x": 1234,
        "y": 725,
        "w": 106,
        "h": 41
      },
      {
        "tag": "label",
        "text": "Real Faces Mode · On",
        "x": 1014,
        "y": 800,
        "w": 218,
        "h": 21
      },
      {
        "tag": "button",
        "text": "",
        "x": 1240,
        "y": 801,
        "w": 18,
        "h": 18
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1289,
        "y": 800,
        "w": 37,
        "h": 21
      },
      {
        "tag": "button",
        "text": "Run",
        "x": 1003,
        "y": 854,
        "w": 88,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 1090,
        "y": 854,
        "w": 31,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 1299,
        "y": 854,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 621,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 671,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 711,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run All",
        "x": 768,
        "y": 1022,
        "w": 89,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 857,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 455,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 514,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 550,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 586,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(-346.276px, -74.0291px) scale(1.28727)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(319px, 192px)",
          "x": 64,
          "y": 173,
          "w": 360,
          "h": 286,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 425,
              "cy": 324
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(679px, 192px)",
          "x": 528,
          "y": 173,
          "w": 360,
          "h": 211,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 528,
              "cy": 307
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 888,
              "cy": 286
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(1039px, 192px)",
          "x": 991,
          "y": 173,
          "w": 360,
          "h": 734,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 991,
              "cy": 609
            },
            {
              "id": "edge-in-text_input-2",
              "type": "target",
              "cx": 991,
              "cy": 609
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 991,
              "cy": 364
            },
            {
              "id": "edge-in-image_2",
              "type": "target",
              "cx": 991,
              "cy": 364
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 991,
              "cy": 281
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 991,
              "cy": 447
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 1374,
              "cy": 554
            }
          ]
        }
      ],
      "edges": [
        {
          "id": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
          "d": "M605.0005888718835,309.0002552564609 C819.0002894593244,309.0002552564609 819.0002894593244,340.59406952006475 1032.9999900467656,340.59406952006475"
        },
        {
          "id": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
          "d": "M965,280 C998.9999950233828,280 998.9999950233828,530.594447925042 1032.9999900467656,530.594447925042"
        }
      ]
    }
  },
  "ep1-s7-grid": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
        "x": 433,
        "y": 306,
        "w": 551,
        "h": 77
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
        "x": 896,
        "y": 268,
        "w": 88,
        "h": 359
      },
      {
        "tag": "div",
        "text": "Image Loader Drop image here or click to upload Supports JPEG, PNG, WebP (max 10",
        "testid": "rf__node-LoadImage-71329618",
        "x": 64,
        "y": 173,
        "w": 360,
        "h": 286
      },
      {
        "tag": "button",
        "text": "",
        "x": 382,
        "y": 185,
        "w": 31,
        "h": 31
      },
      {
        "tag": "div",
        "text": "Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 528,
        "y": 173,
        "w": 360,
        "h": 211
      },
      {
        "tag": "button",
        "text": "",
        "x": 846,
        "y": 185,
        "w": 31,
        "h": 31
      },
      {
        "tag": "button",
        "text": "",
        "x": 851,
        "y": 231,
        "w": 21,
        "h": 21
      },
      {
        "tag": "div",
        "text": "Seedance 2.5 Omni Reference 200 Reference videos 0/10 Reference images 1/30 Refe",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 991,
        "y": 173,
        "w": 360,
        "h": 734
      },
      {
        "tag": "button",
        "text": "Seedance 2.5 Omni Reference 200",
        "x": 1003,
        "y": 185,
        "w": 301,
        "h": 31
      },
      {
        "tag": "button",
        "text": "",
        "x": 1309,
        "y": 185,
        "w": 31,
        "h": 31
      },
      {
        "tag": "button",
        "text": "",
        "x": 1003,
        "y": 257,
        "w": 52,
        "h": 52
      },
      {
        "tag": "div",
        "text": "",
        "x": 1003,
        "y": 340,
        "w": 52,
        "h": 52
      },
      {
        "tag": "button",
        "text": "",
        "x": 1060,
        "y": 340,
        "w": 52,
        "h": 52
      },
      {
        "tag": "button",
        "text": "",
        "x": 1003,
        "y": 422,
        "w": 52,
        "h": 52
      },
      {
        "tag": "label",
        "text": "Prompt",
        "x": 1003,
        "y": 487,
        "w": 53,
        "h": 21
      },
      {
        "tag": "button",
        "text": "",
        "x": 1319,
        "y": 487,
        "w": 21,
        "h": 21
      },
      {
        "tag": "button",
        "text": "16:9",
        "x": 1003,
        "y": 725,
        "w": 106,
        "h": 41
      },
      {
        "tag": "button",
        "text": "5″",
        "x": 1119,
        "y": 725,
        "w": 106,
        "h": 41
      },
      {
        "tag": "button",
        "text": "720p",
        "x": 1234,
        "y": 725,
        "w": 106,
        "h": 41
      },
      {
        "tag": "label",
        "text": "Real Faces Mode · On",
        "x": 1014,
        "y": 800,
        "w": 218,
        "h": 21
      },
      {
        "tag": "button",
        "text": "",
        "x": 1240,
        "y": 801,
        "w": 18,
        "h": 18
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1289,
        "y": 800,
        "w": 37,
        "h": 21
      },
      {
        "tag": "button",
        "text": "Run",
        "x": 1003,
        "y": 854,
        "w": 88,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 1090,
        "y": 854,
        "w": 31,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 1299,
        "y": 854,
        "w": 41,
        "h": 41
      },
      {
        "tag": "div",
        "text": "Image Loader",
        "testid": "rf__node-LoadImage-4c36e1ad",
        "x": 560,
        "y": 432,
        "w": 360,
        "h": 446
      },
      {
        "tag": "button",
        "text": "",
        "x": 499,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 546,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 592,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 639,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 685,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 731,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 789,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 835,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 893,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 940,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 621,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 671,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 711,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run All",
        "x": 768,
        "y": 1022,
        "w": 89,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 857,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 455,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 514,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 550,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 586,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h1",
        "text": "Settings",
        "x": 465,
        "y": 71,
        "w": 192,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Profile",
        "x": 457,
        "y": 127,
        "w": 208,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Billing",
        "x": 457,
        "y": 163,
        "w": 208,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Preferences",
        "x": 457,
        "y": 199,
        "w": 208,
        "h": 32
      },
      {
        "tag": "a",
        "text": "MCP",
        "x": 457,
        "y": 235,
        "w": 208,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Teams",
        "x": 457,
        "y": 271,
        "w": 208,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 625,
        "y": 971,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h2",
        "text": "Preferences",
        "x": 690,
        "y": 73,
        "w": 101,
        "h": 28
      },
      {
        "tag": "label",
        "text": "Display Language",
        "x": 703,
        "y": 209,
        "w": 119,
        "h": 20
      },
      {
        "tag": "button",
        "text": "English",
        "x": 1250,
        "y": 201,
        "w": 192,
        "h": 36
      },
      {
        "tag": "button",
        "text": "PREVIEW Edit Hero_shot_2026-08-22-14-29-53_03_YouArt.png",
        "x": 703,
        "y": 331,
        "w": 739,
        "h": 59
      },
      {
        "tag": "button",
        "text": "Project ID",
        "x": 1369,
        "y": 448,
        "w": 73,
        "h": 16
      },
      {
        "tag": "label",
        "text": "Background Color",
        "x": 703,
        "y": 490,
        "w": 120,
        "h": 20
      },
      {
        "tag": "button",
        "text": "",
        "x": 1293,
        "y": 488,
        "w": 24,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 1323,
        "y": 488,
        "w": 24,
        "h": 24
      },
      {
        "tag": "label",
        "text": "",
        "x": 1368,
        "y": 488,
        "w": 24,
        "h": 24
      },
      {
        "tag": "input",
        "text": "#f8fafc",
        "x": 1369,
        "y": 489,
        "w": 22,
        "h": 22
      },
      {
        "tag": "label",
        "text": "Background Pattern",
        "x": 703,
        "y": 547,
        "w": 133,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Dots",
        "x": 1258,
        "y": 528,
        "w": 56,
        "h": 58
      },
      {
        "tag": "button",
        "text": "Grid",
        "x": 1322,
        "y": 528,
        "w": 56,
        "h": 58
      },
      {
        "tag": "button",
        "text": "None",
        "x": 1386,
        "y": 528,
        "w": 56,
        "h": 58
      },
      {
        "tag": "label",
        "text": "Show Run Button When Collapsed",
        "x": 703,
        "y": 692,
        "w": 229,
        "h": 20
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1410,
        "y": 701,
        "w": 32,
        "h": 18
      },
      {
        "tag": "label",
        "text": "Chat Panel Position",
        "x": 703,
        "y": 755,
        "w": 390,
        "h": 20
      },
      {
        "tag": "button",
        "text": "",
        "x": 1378,
        "y": 758,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1410,
        "y": 758,
        "w": 32,
        "h": 32
      },
      {
        "tag": "label",
        "text": "Auto-run",
        "x": 703,
        "y": 895,
        "w": 445,
        "h": 20
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1410,
        "y": 904,
        "w": 32,
        "h": 18
      },
      {
        "tag": "button",
        "text": "Close",
        "x": 1439,
        "y": 79,
        "w": 16,
        "h": 16
      }
    ],
    "flow": {
      "viewport": "translate(-346.276px, -74.0291px) scale(1.28727)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(319px, 192px)",
          "x": 64,
          "y": 173,
          "w": 360,
          "h": 286,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 425,
              "cy": 324
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(679px, 192px)",
          "x": 528,
          "y": 173,
          "w": 360,
          "h": 211,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 528,
              "cy": 307
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 888,
              "cy": 286
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(1039px, 192px)",
          "x": 991,
          "y": 173,
          "w": 360,
          "h": 734,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 991,
              "cy": 609
            },
            {
              "id": "edge-in-text_input-2",
              "type": "target",
              "cx": 991,
              "cy": 609
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 991,
              "cy": 364
            },
            {
              "id": "edge-in-image_2",
              "type": "target",
              "cx": 991,
              "cy": 364
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 991,
              "cy": 281
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 991,
              "cy": 447
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 1374,
              "cy": 554
            }
          ]
        },
        {
          "id": "LoadImage-4c36e1ad",
          "transform": "translate(704.028px, 393.282px)",
          "x": 560,
          "y": 432,
          "w": 360,
          "h": 446,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 942,
              "cy": 868
            }
          ]
        }
      ],
      "edges": [
        {
          "id": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
          "d": "M605.0005888718835,309.0002552564609 C819.0002894593244,309.0002552564609 819.0002894593244,340.59406952006475 1032.9999900467656,340.59406952006475"
        },
        {
          "id": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
          "d": "M965,280 C998.9999950233828,280 998.9999950233828,530.594447925042 1032.9999900467656,530.594447925042"
        }
      ]
    }
  },
  "ep1-s7-lighter": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
        "x": 433,
        "y": 306,
        "w": 551,
        "h": 77
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
        "x": 896,
        "y": 268,
        "w": 88,
        "h": 359
      },
      {
        "tag": "div",
        "text": "Image Loader Drop image here or click to upload Supports JPEG, PNG, WebP (max 10",
        "testid": "rf__node-LoadImage-71329618",
        "x": 64,
        "y": 173,
        "w": 360,
        "h": 286
      },
      {
        "tag": "button",
        "text": "",
        "x": 382,
        "y": 185,
        "w": 31,
        "h": 31
      },
      {
        "tag": "div",
        "text": "Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 528,
        "y": 173,
        "w": 360,
        "h": 211
      },
      {
        "tag": "button",
        "text": "",
        "x": 846,
        "y": 185,
        "w": 31,
        "h": 31
      },
      {
        "tag": "button",
        "text": "",
        "x": 851,
        "y": 231,
        "w": 21,
        "h": 21
      },
      {
        "tag": "div",
        "text": "Seedance 2.5 Omni Reference 200 Reference videos 0/10 Reference images 1/30 Refe",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 991,
        "y": 173,
        "w": 360,
        "h": 734
      },
      {
        "tag": "button",
        "text": "Seedance 2.5 Omni Reference 200",
        "x": 1003,
        "y": 185,
        "w": 301,
        "h": 31
      },
      {
        "tag": "button",
        "text": "",
        "x": 1309,
        "y": 185,
        "w": 31,
        "h": 31
      },
      {
        "tag": "button",
        "text": "",
        "x": 1003,
        "y": 257,
        "w": 52,
        "h": 52
      },
      {
        "tag": "div",
        "text": "",
        "x": 1003,
        "y": 340,
        "w": 52,
        "h": 52
      },
      {
        "tag": "button",
        "text": "",
        "x": 1060,
        "y": 340,
        "w": 52,
        "h": 52
      },
      {
        "tag": "button",
        "text": "",
        "x": 1003,
        "y": 422,
        "w": 52,
        "h": 52
      },
      {
        "tag": "label",
        "text": "Prompt",
        "x": 1003,
        "y": 487,
        "w": 53,
        "h": 21
      },
      {
        "tag": "button",
        "text": "",
        "x": 1319,
        "y": 487,
        "w": 21,
        "h": 21
      },
      {
        "tag": "button",
        "text": "16:9",
        "x": 1003,
        "y": 725,
        "w": 106,
        "h": 41
      },
      {
        "tag": "button",
        "text": "5″",
        "x": 1119,
        "y": 725,
        "w": 106,
        "h": 41
      },
      {
        "tag": "button",
        "text": "720p",
        "x": 1234,
        "y": 725,
        "w": 106,
        "h": 41
      },
      {
        "tag": "label",
        "text": "Real Faces Mode · On",
        "x": 1014,
        "y": 800,
        "w": 218,
        "h": 21
      },
      {
        "tag": "button",
        "text": "",
        "x": 1240,
        "y": 801,
        "w": 18,
        "h": 18
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1289,
        "y": 800,
        "w": 37,
        "h": 21
      },
      {
        "tag": "button",
        "text": "Run",
        "x": 1003,
        "y": 854,
        "w": 88,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 1090,
        "y": 854,
        "w": 31,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 1299,
        "y": 854,
        "w": 41,
        "h": 41
      },
      {
        "tag": "div",
        "text": "Image Loader",
        "testid": "rf__node-LoadImage-4c36e1ad",
        "x": 560,
        "y": 432,
        "w": 360,
        "h": 446
      },
      {
        "tag": "button",
        "text": "",
        "x": 499,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 546,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 592,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 639,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 685,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 731,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 789,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 835,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 893,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 940,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 621,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 671,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 711,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run All",
        "x": 768,
        "y": 1022,
        "w": 89,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 857,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 455,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 514,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 550,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 586,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h1",
        "text": "Settings",
        "x": 465,
        "y": 71,
        "w": 192,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Profile",
        "x": 457,
        "y": 127,
        "w": 208,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Billing",
        "x": 457,
        "y": 163,
        "w": 208,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Preferences",
        "x": 457,
        "y": 199,
        "w": 208,
        "h": 32
      },
      {
        "tag": "a",
        "text": "MCP",
        "x": 457,
        "y": 235,
        "w": 208,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Teams",
        "x": 457,
        "y": 271,
        "w": 208,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 625,
        "y": 971,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h2",
        "text": "Preferences",
        "x": 690,
        "y": 73,
        "w": 101,
        "h": 28
      },
      {
        "tag": "label",
        "text": "Display Language",
        "x": 703,
        "y": 209,
        "w": 119,
        "h": 20
      },
      {
        "tag": "button",
        "text": "English",
        "x": 1250,
        "y": 201,
        "w": 192,
        "h": 36
      },
      {
        "tag": "button",
        "text": "PREVIEW Edit Hero_shot_2026-08-22-14-29-53_03_YouArt.png",
        "x": 703,
        "y": 331,
        "w": 739,
        "h": 59
      },
      {
        "tag": "button",
        "text": "Project ID",
        "x": 1369,
        "y": 448,
        "w": 73,
        "h": 16
      },
      {
        "tag": "label",
        "text": "Background Color",
        "x": 703,
        "y": 490,
        "w": 120,
        "h": 20
      },
      {
        "tag": "button",
        "text": "",
        "x": 1293,
        "y": 488,
        "w": 24,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 1322,
        "y": 486,
        "w": 26,
        "h": 26
      },
      {
        "tag": "label",
        "text": "",
        "x": 1368,
        "y": 488,
        "w": 24,
        "h": 24
      },
      {
        "tag": "input",
        "text": "#f8fafc",
        "x": 1369,
        "y": 489,
        "w": 22,
        "h": 22
      },
      {
        "tag": "label",
        "text": "Background Pattern",
        "x": 703,
        "y": 547,
        "w": 133,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Dots",
        "x": 1258,
        "y": 528,
        "w": 56,
        "h": 58
      },
      {
        "tag": "button",
        "text": "Grid",
        "x": 1322,
        "y": 528,
        "w": 56,
        "h": 58
      },
      {
        "tag": "button",
        "text": "None",
        "x": 1386,
        "y": 528,
        "w": 56,
        "h": 58
      },
      {
        "tag": "label",
        "text": "Show Run Button When Collapsed",
        "x": 703,
        "y": 692,
        "w": 229,
        "h": 20
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1410,
        "y": 701,
        "w": 32,
        "h": 18
      },
      {
        "tag": "label",
        "text": "Chat Panel Position",
        "x": 703,
        "y": 755,
        "w": 390,
        "h": 20
      },
      {
        "tag": "button",
        "text": "",
        "x": 1378,
        "y": 758,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1410,
        "y": 758,
        "w": 32,
        "h": 32
      },
      {
        "tag": "label",
        "text": "Auto-run",
        "x": 703,
        "y": 895,
        "w": 445,
        "h": 20
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1410,
        "y": 904,
        "w": 32,
        "h": 18
      },
      {
        "tag": "button",
        "text": "Close",
        "x": 1439,
        "y": 79,
        "w": 16,
        "h": 16
      }
    ],
    "flow": {
      "viewport": "translate(-346.276px, -74.0291px) scale(1.28727)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(319px, 192px)",
          "x": 64,
          "y": 173,
          "w": 360,
          "h": 286,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 425,
              "cy": 324
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(679px, 192px)",
          "x": 528,
          "y": 173,
          "w": 360,
          "h": 211,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 528,
              "cy": 307
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 888,
              "cy": 286
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(1039px, 192px)",
          "x": 991,
          "y": 173,
          "w": 360,
          "h": 734,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 991,
              "cy": 609
            },
            {
              "id": "edge-in-text_input-2",
              "type": "target",
              "cx": 991,
              "cy": 609
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 991,
              "cy": 364
            },
            {
              "id": "edge-in-image_2",
              "type": "target",
              "cx": 991,
              "cy": 364
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 991,
              "cy": 281
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 991,
              "cy": 447
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 1374,
              "cy": 554
            }
          ]
        },
        {
          "id": "LoadImage-4c36e1ad",
          "transform": "translate(704.028px, 393.282px)",
          "x": 560,
          "y": 432,
          "w": 360,
          "h": 446,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 942,
              "cy": 868
            }
          ]
        }
      ],
      "edges": [
        {
          "id": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
          "d": "M605.0005888718835,309.0002552564609 C819.0002894593244,309.0002552564609 819.0002894593244,340.59406952006475 1032.9999900467656,340.59406952006475"
        },
        {
          "id": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
          "d": "M965,280 C998.9999950233828,280 998.9999950233828,530.594447925042 1032.9999900467656,530.594447925042"
        }
      ]
    }
  },
  "ep1-s7-prefs": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
        "x": 433,
        "y": 306,
        "w": 551,
        "h": 77
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
        "x": 896,
        "y": 268,
        "w": 88,
        "h": 359
      },
      {
        "tag": "div",
        "text": "Image Loader Drop image here or click to upload Supports JPEG, PNG, WebP (max 10",
        "testid": "rf__node-LoadImage-71329618",
        "x": 64,
        "y": 173,
        "w": 360,
        "h": 286
      },
      {
        "tag": "button",
        "text": "",
        "x": 382,
        "y": 185,
        "w": 31,
        "h": 31
      },
      {
        "tag": "div",
        "text": "Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 528,
        "y": 173,
        "w": 360,
        "h": 211
      },
      {
        "tag": "button",
        "text": "",
        "x": 846,
        "y": 185,
        "w": 31,
        "h": 31
      },
      {
        "tag": "button",
        "text": "",
        "x": 851,
        "y": 231,
        "w": 21,
        "h": 21
      },
      {
        "tag": "div",
        "text": "Seedance 2.5 Omni Reference 200 Reference videos 0/10 Reference images 1/30 Refe",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 991,
        "y": 173,
        "w": 360,
        "h": 734
      },
      {
        "tag": "button",
        "text": "Seedance 2.5 Omni Reference 200",
        "x": 1003,
        "y": 185,
        "w": 301,
        "h": 31
      },
      {
        "tag": "button",
        "text": "",
        "x": 1309,
        "y": 185,
        "w": 31,
        "h": 31
      },
      {
        "tag": "button",
        "text": "",
        "x": 1003,
        "y": 257,
        "w": 52,
        "h": 52
      },
      {
        "tag": "div",
        "text": "",
        "x": 1003,
        "y": 340,
        "w": 52,
        "h": 52
      },
      {
        "tag": "button",
        "text": "",
        "x": 1060,
        "y": 340,
        "w": 52,
        "h": 52
      },
      {
        "tag": "button",
        "text": "",
        "x": 1003,
        "y": 422,
        "w": 52,
        "h": 52
      },
      {
        "tag": "label",
        "text": "Prompt",
        "x": 1003,
        "y": 487,
        "w": 53,
        "h": 21
      },
      {
        "tag": "button",
        "text": "",
        "x": 1319,
        "y": 487,
        "w": 21,
        "h": 21
      },
      {
        "tag": "button",
        "text": "16:9",
        "x": 1003,
        "y": 725,
        "w": 106,
        "h": 41
      },
      {
        "tag": "button",
        "text": "5″",
        "x": 1119,
        "y": 725,
        "w": 106,
        "h": 41
      },
      {
        "tag": "button",
        "text": "720p",
        "x": 1234,
        "y": 725,
        "w": 106,
        "h": 41
      },
      {
        "tag": "label",
        "text": "Real Faces Mode · On",
        "x": 1014,
        "y": 800,
        "w": 218,
        "h": 21
      },
      {
        "tag": "button",
        "text": "",
        "x": 1240,
        "y": 801,
        "w": 18,
        "h": 18
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1289,
        "y": 800,
        "w": 37,
        "h": 21
      },
      {
        "tag": "button",
        "text": "Run",
        "x": 1003,
        "y": 854,
        "w": 88,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 1090,
        "y": 854,
        "w": 31,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 1299,
        "y": 854,
        "w": 41,
        "h": 41
      },
      {
        "tag": "div",
        "text": "Image Loader",
        "testid": "rf__node-LoadImage-4c36e1ad",
        "x": 560,
        "y": 432,
        "w": 360,
        "h": 446
      },
      {
        "tag": "button",
        "text": "",
        "x": 499,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 546,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 592,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 639,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 685,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 731,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 789,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 835,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 893,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 940,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 621,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 671,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 711,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run All",
        "x": 768,
        "y": 1022,
        "w": 89,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 857,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 455,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 514,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 550,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 586,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h1",
        "text": "Settings",
        "x": 465,
        "y": 71,
        "w": 192,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Profile",
        "x": 457,
        "y": 127,
        "w": 208,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Billing",
        "x": 457,
        "y": 163,
        "w": 208,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Preferences",
        "x": 457,
        "y": 199,
        "w": 208,
        "h": 32
      },
      {
        "tag": "a",
        "text": "MCP",
        "x": 457,
        "y": 235,
        "w": 208,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Teams",
        "x": 457,
        "y": 271,
        "w": 208,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 625,
        "y": 971,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h2",
        "text": "Preferences",
        "x": 690,
        "y": 73,
        "w": 101,
        "h": 28
      },
      {
        "tag": "label",
        "text": "Display Language",
        "x": 703,
        "y": 209,
        "w": 119,
        "h": 20
      },
      {
        "tag": "button",
        "text": "English",
        "x": 1250,
        "y": 201,
        "w": 192,
        "h": 36
      },
      {
        "tag": "button",
        "text": "PREVIEW Edit Hero_shot_2026-08-22-14-29-53_03_YouArt.png",
        "x": 703,
        "y": 331,
        "w": 739,
        "h": 59
      },
      {
        "tag": "button",
        "text": "Project ID",
        "x": 1369,
        "y": 448,
        "w": 73,
        "h": 16
      },
      {
        "tag": "label",
        "text": "Background Color",
        "x": 703,
        "y": 490,
        "w": 120,
        "h": 20
      },
      {
        "tag": "button",
        "text": "",
        "x": 1293,
        "y": 488,
        "w": 24,
        "h": 24
      },
      {
        "tag": "button",
        "text": "",
        "x": 1323,
        "y": 488,
        "w": 24,
        "h": 24
      },
      {
        "tag": "label",
        "text": "",
        "x": 1368,
        "y": 488,
        "w": 24,
        "h": 24
      },
      {
        "tag": "input",
        "text": "#f8fafc",
        "x": 1369,
        "y": 489,
        "w": 22,
        "h": 22
      },
      {
        "tag": "label",
        "text": "Background Pattern",
        "x": 703,
        "y": 547,
        "w": 133,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Dots",
        "x": 1258,
        "y": 528,
        "w": 56,
        "h": 58
      },
      {
        "tag": "button",
        "text": "Grid",
        "x": 1322,
        "y": 528,
        "w": 56,
        "h": 58
      },
      {
        "tag": "button",
        "text": "None",
        "x": 1386,
        "y": 528,
        "w": 56,
        "h": 58
      },
      {
        "tag": "label",
        "text": "Show Run Button When Collapsed",
        "x": 703,
        "y": 692,
        "w": 229,
        "h": 20
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1410,
        "y": 701,
        "w": 32,
        "h": 18
      },
      {
        "tag": "label",
        "text": "Chat Panel Position",
        "x": 703,
        "y": 755,
        "w": 390,
        "h": 20
      },
      {
        "tag": "button",
        "text": "",
        "x": 1378,
        "y": 758,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1410,
        "y": 758,
        "w": 32,
        "h": 32
      },
      {
        "tag": "label",
        "text": "Auto-run",
        "x": 703,
        "y": 895,
        "w": 445,
        "h": 20
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1410,
        "y": 904,
        "w": 32,
        "h": 18
      },
      {
        "tag": "button",
        "text": "Close",
        "x": 1439,
        "y": 79,
        "w": 16,
        "h": 16
      }
    ],
    "flow": {
      "viewport": "translate(-346.276px, -74.0291px) scale(1.28727)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(319px, 192px)",
          "x": 64,
          "y": 173,
          "w": 360,
          "h": 286,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 425,
              "cy": 324
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(679px, 192px)",
          "x": 528,
          "y": 173,
          "w": 360,
          "h": 211,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 528,
              "cy": 307
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 888,
              "cy": 286
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(1039px, 192px)",
          "x": 991,
          "y": 173,
          "w": 360,
          "h": 734,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 991,
              "cy": 609
            },
            {
              "id": "edge-in-text_input-2",
              "type": "target",
              "cx": 991,
              "cy": 609
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 991,
              "cy": 364
            },
            {
              "id": "edge-in-image_2",
              "type": "target",
              "cx": 991,
              "cy": 364
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 991,
              "cy": 281
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 991,
              "cy": 447
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 1374,
              "cy": 554
            }
          ]
        },
        {
          "id": "LoadImage-4c36e1ad",
          "transform": "translate(704.028px, 393.282px)",
          "x": 560,
          "y": 432,
          "w": 360,
          "h": 446,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 942,
              "cy": 868
            }
          ]
        }
      ],
      "edges": [
        {
          "id": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
          "d": "M605.0005888718835,309.0002552564609 C819.0002894593244,309.0002552564609 819.0002894593244,340.59406952006475 1032.9999900467656,340.59406952006475"
        },
        {
          "id": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
          "d": "M965,280 C998.9999950233828,280 998.9999950233828,530.594447925042 1032.9999900467656,530.594447925042"
        }
      ]
    }
  },
  "ep1-s7-restored": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
        "x": 433,
        "y": 306,
        "w": 551,
        "h": 77
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
        "x": 896,
        "y": 268,
        "w": 88,
        "h": 359
      },
      {
        "tag": "div",
        "text": "Image Loader Drop image here or click to upload Supports JPEG, PNG, WebP (max 10",
        "testid": "rf__node-LoadImage-71329618",
        "x": 64,
        "y": 173,
        "w": 360,
        "h": 286
      },
      {
        "tag": "button",
        "text": "",
        "x": 382,
        "y": 185,
        "w": 31,
        "h": 31
      },
      {
        "tag": "div",
        "text": "Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 528,
        "y": 173,
        "w": 360,
        "h": 211
      },
      {
        "tag": "button",
        "text": "",
        "x": 846,
        "y": 185,
        "w": 31,
        "h": 31
      },
      {
        "tag": "button",
        "text": "",
        "x": 851,
        "y": 231,
        "w": 21,
        "h": 21
      },
      {
        "tag": "div",
        "text": "Seedance 2.5 Omni Reference 200 Reference videos 0/10 Reference images 1/30 Refe",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 991,
        "y": 173,
        "w": 360,
        "h": 734
      },
      {
        "tag": "button",
        "text": "Seedance 2.5 Omni Reference 200",
        "x": 1003,
        "y": 185,
        "w": 301,
        "h": 31
      },
      {
        "tag": "button",
        "text": "",
        "x": 1309,
        "y": 185,
        "w": 31,
        "h": 31
      },
      {
        "tag": "button",
        "text": "",
        "x": 1003,
        "y": 257,
        "w": 52,
        "h": 52
      },
      {
        "tag": "div",
        "text": "",
        "x": 1003,
        "y": 340,
        "w": 52,
        "h": 52
      },
      {
        "tag": "button",
        "text": "",
        "x": 1060,
        "y": 340,
        "w": 52,
        "h": 52
      },
      {
        "tag": "button",
        "text": "",
        "x": 1003,
        "y": 422,
        "w": 52,
        "h": 52
      },
      {
        "tag": "label",
        "text": "Prompt",
        "x": 1003,
        "y": 487,
        "w": 53,
        "h": 21
      },
      {
        "tag": "button",
        "text": "",
        "x": 1319,
        "y": 487,
        "w": 21,
        "h": 21
      },
      {
        "tag": "button",
        "text": "16:9",
        "x": 1003,
        "y": 725,
        "w": 106,
        "h": 41
      },
      {
        "tag": "button",
        "text": "5″",
        "x": 1119,
        "y": 725,
        "w": 106,
        "h": 41
      },
      {
        "tag": "button",
        "text": "720p",
        "x": 1234,
        "y": 725,
        "w": 106,
        "h": 41
      },
      {
        "tag": "label",
        "text": "Real Faces Mode · On",
        "x": 1014,
        "y": 800,
        "w": 218,
        "h": 21
      },
      {
        "tag": "button",
        "text": "",
        "x": 1240,
        "y": 801,
        "w": 18,
        "h": 18
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1289,
        "y": 800,
        "w": 37,
        "h": 21
      },
      {
        "tag": "button",
        "text": "Run",
        "x": 1003,
        "y": 854,
        "w": 88,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 1090,
        "y": 854,
        "w": 31,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 1299,
        "y": 854,
        "w": 41,
        "h": 41
      },
      {
        "tag": "div",
        "text": "Image Loader",
        "testid": "rf__node-LoadImage-4c36e1ad",
        "x": 560,
        "y": 432,
        "w": 360,
        "h": 446
      },
      {
        "tag": "button",
        "text": "",
        "x": 499,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 546,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 592,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 639,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 685,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 731,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 789,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 835,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 893,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 940,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 621,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 671,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 711,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run All",
        "x": 768,
        "y": 1022,
        "w": 89,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 857,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 455,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 514,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 550,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 586,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(-346.276px, -74.0291px) scale(1.28727)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(319px, 192px)",
          "x": 64,
          "y": 173,
          "w": 360,
          "h": 286,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 425,
              "cy": 324
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(679px, 192px)",
          "x": 528,
          "y": 173,
          "w": 360,
          "h": 211,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 528,
              "cy": 307
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 888,
              "cy": 286
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(1039px, 192px)",
          "x": 991,
          "y": 173,
          "w": 360,
          "h": 734,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 991,
              "cy": 609
            },
            {
              "id": "edge-in-text_input-2",
              "type": "target",
              "cx": 991,
              "cy": 609
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 991,
              "cy": 364
            },
            {
              "id": "edge-in-image_2",
              "type": "target",
              "cx": 991,
              "cy": 364
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 991,
              "cy": 281
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 991,
              "cy": 447
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 1374,
              "cy": 554
            }
          ]
        },
        {
          "id": "LoadImage-4c36e1ad",
          "transform": "translate(704.028px, 393.282px)",
          "x": 560,
          "y": 432,
          "w": 360,
          "h": 446,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 942,
              "cy": 868
            }
          ]
        }
      ],
      "edges": [
        {
          "id": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
          "d": "M605.0005888718835,309.0002552564609 C819.0002894593244,309.0002552564609 819.0002894593244,340.59406952006475 1032.9999900467656,340.59406952006475"
        },
        {
          "id": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
          "d": "M965,280 C998.9999950233828,280 998.9999950233828,530.594447925042 1032.9999900467656,530.594447925042"
        }
      ]
    }
  },
  "ep1-s7-result": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
        "x": 433,
        "y": 306,
        "w": 551,
        "h": 77
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
        "x": 896,
        "y": 268,
        "w": 88,
        "h": 359
      },
      {
        "tag": "div",
        "text": "Image Loader Drop image here or click to upload Supports JPEG, PNG, WebP (max 10",
        "testid": "rf__node-LoadImage-71329618",
        "x": 64,
        "y": 173,
        "w": 360,
        "h": 286
      },
      {
        "tag": "button",
        "text": "",
        "x": 382,
        "y": 185,
        "w": 31,
        "h": 31
      },
      {
        "tag": "div",
        "text": "Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 528,
        "y": 173,
        "w": 360,
        "h": 211
      },
      {
        "tag": "button",
        "text": "",
        "x": 846,
        "y": 185,
        "w": 31,
        "h": 31
      },
      {
        "tag": "button",
        "text": "",
        "x": 851,
        "y": 231,
        "w": 21,
        "h": 21
      },
      {
        "tag": "div",
        "text": "Seedance 2.5 Omni Reference 200 Reference videos 0/10 Reference images 1/30 Refe",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 991,
        "y": 173,
        "w": 360,
        "h": 734
      },
      {
        "tag": "button",
        "text": "Seedance 2.5 Omni Reference 200",
        "x": 1003,
        "y": 185,
        "w": 301,
        "h": 31
      },
      {
        "tag": "button",
        "text": "",
        "x": 1309,
        "y": 185,
        "w": 31,
        "h": 31
      },
      {
        "tag": "button",
        "text": "",
        "x": 1003,
        "y": 257,
        "w": 52,
        "h": 52
      },
      {
        "tag": "div",
        "text": "",
        "x": 1003,
        "y": 340,
        "w": 52,
        "h": 52
      },
      {
        "tag": "button",
        "text": "",
        "x": 1060,
        "y": 340,
        "w": 52,
        "h": 52
      },
      {
        "tag": "button",
        "text": "",
        "x": 1003,
        "y": 422,
        "w": 52,
        "h": 52
      },
      {
        "tag": "label",
        "text": "Prompt",
        "x": 1003,
        "y": 487,
        "w": 53,
        "h": 21
      },
      {
        "tag": "button",
        "text": "",
        "x": 1319,
        "y": 487,
        "w": 21,
        "h": 21
      },
      {
        "tag": "button",
        "text": "16:9",
        "x": 1003,
        "y": 725,
        "w": 106,
        "h": 41
      },
      {
        "tag": "button",
        "text": "5″",
        "x": 1119,
        "y": 725,
        "w": 106,
        "h": 41
      },
      {
        "tag": "button",
        "text": "720p",
        "x": 1234,
        "y": 725,
        "w": 106,
        "h": 41
      },
      {
        "tag": "label",
        "text": "Real Faces Mode · On",
        "x": 1014,
        "y": 800,
        "w": 218,
        "h": 21
      },
      {
        "tag": "button",
        "text": "",
        "x": 1240,
        "y": 801,
        "w": 18,
        "h": 18
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1289,
        "y": 800,
        "w": 37,
        "h": 21
      },
      {
        "tag": "button",
        "text": "Run",
        "x": 1003,
        "y": 854,
        "w": 88,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 1090,
        "y": 854,
        "w": 31,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 1299,
        "y": 854,
        "w": 41,
        "h": 41
      },
      {
        "tag": "div",
        "text": "Image Loader",
        "testid": "rf__node-LoadImage-4c36e1ad",
        "x": 560,
        "y": 432,
        "w": 360,
        "h": 446
      },
      {
        "tag": "button",
        "text": "",
        "x": 499,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 546,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 592,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 639,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 685,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 731,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 789,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 835,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 893,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 940,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 621,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 671,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 711,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run All",
        "x": 768,
        "y": 1022,
        "w": 89,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 857,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 455,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 514,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 550,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 586,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ],
    "flow": {
      "viewport": "translate(-346.276px, -74.0291px) scale(1.28727)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(319px, 192px)",
          "x": 64,
          "y": 173,
          "w": 360,
          "h": 286,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 425,
              "cy": 324
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(679px, 192px)",
          "x": 528,
          "y": 173,
          "w": 360,
          "h": 211,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 528,
              "cy": 307
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 888,
              "cy": 286
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(1039px, 192px)",
          "x": 991,
          "y": 173,
          "w": 360,
          "h": 734,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 991,
              "cy": 609
            },
            {
              "id": "edge-in-text_input-2",
              "type": "target",
              "cx": 991,
              "cy": 609
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 991,
              "cy": 364
            },
            {
              "id": "edge-in-image_2",
              "type": "target",
              "cx": 991,
              "cy": 364
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 991,
              "cy": 281
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 991,
              "cy": 447
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 1374,
              "cy": 554
            }
          ]
        },
        {
          "id": "LoadImage-4c36e1ad",
          "transform": "translate(704.028px, 393.282px)",
          "x": 560,
          "y": 432,
          "w": 360,
          "h": 446,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 942,
              "cy": 868
            }
          ]
        }
      ],
      "edges": [
        {
          "id": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
          "d": "M605.0005888718835,309.0002552564609 C819.0002894593244,309.0002552564609 819.0002894593244,340.59406952006475 1032.9999900467656,340.59406952006475"
        },
        {
          "id": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
          "d": "M965,280 C998.9999950233828,280 998.9999950233828,530.594447925042 1032.9999900467656,530.594447925042"
        }
      ]
    }
  },
  "ep1-s7-settings": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
        "x": 433,
        "y": 306,
        "w": 551,
        "h": 77
      },
      {
        "tag": "g",
        "text": "",
        "testid": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
        "x": 896,
        "y": 268,
        "w": 88,
        "h": 359
      },
      {
        "tag": "div",
        "text": "Image Loader Drop image here or click to upload Supports JPEG, PNG, WebP (max 10",
        "testid": "rf__node-LoadImage-71329618",
        "x": 64,
        "y": 173,
        "w": 360,
        "h": 286
      },
      {
        "tag": "button",
        "text": "",
        "x": 382,
        "y": 185,
        "w": 31,
        "h": 31
      },
      {
        "tag": "div",
        "text": "Text",
        "testid": "rf__node-Text-890d5e5c",
        "x": 528,
        "y": 173,
        "w": 360,
        "h": 211
      },
      {
        "tag": "button",
        "text": "",
        "x": 846,
        "y": 185,
        "w": 31,
        "h": 31
      },
      {
        "tag": "button",
        "text": "",
        "x": 851,
        "y": 231,
        "w": 21,
        "h": 21
      },
      {
        "tag": "div",
        "text": "Seedance 2.5 Omni Reference 200 Reference videos 0/10 Reference images 1/30 Refe",
        "testid": "rf__node-SeedancePro25OmniReferenceGenerate-1e5a2a82",
        "x": 991,
        "y": 173,
        "w": 360,
        "h": 734
      },
      {
        "tag": "button",
        "text": "Seedance 2.5 Omni Reference 200",
        "x": 1003,
        "y": 185,
        "w": 301,
        "h": 31
      },
      {
        "tag": "button",
        "text": "",
        "x": 1309,
        "y": 185,
        "w": 31,
        "h": 31
      },
      {
        "tag": "button",
        "text": "",
        "x": 1003,
        "y": 257,
        "w": 52,
        "h": 52
      },
      {
        "tag": "div",
        "text": "",
        "x": 1003,
        "y": 340,
        "w": 52,
        "h": 52
      },
      {
        "tag": "button",
        "text": "",
        "x": 1060,
        "y": 340,
        "w": 52,
        "h": 52
      },
      {
        "tag": "button",
        "text": "",
        "x": 1003,
        "y": 422,
        "w": 52,
        "h": 52
      },
      {
        "tag": "label",
        "text": "Prompt",
        "x": 1003,
        "y": 487,
        "w": 53,
        "h": 21
      },
      {
        "tag": "button",
        "text": "",
        "x": 1319,
        "y": 487,
        "w": 21,
        "h": 21
      },
      {
        "tag": "button",
        "text": "16:9",
        "x": 1003,
        "y": 725,
        "w": 106,
        "h": 41
      },
      {
        "tag": "button",
        "text": "5″",
        "x": 1119,
        "y": 725,
        "w": 106,
        "h": 41
      },
      {
        "tag": "button",
        "text": "720p",
        "x": 1234,
        "y": 725,
        "w": 106,
        "h": 41
      },
      {
        "tag": "label",
        "text": "Real Faces Mode · On",
        "x": 1014,
        "y": 800,
        "w": 218,
        "h": 21
      },
      {
        "tag": "button",
        "text": "",
        "x": 1240,
        "y": 801,
        "w": 18,
        "h": 18
      },
      {
        "tag": "button",
        "text": "on",
        "x": 1289,
        "y": 800,
        "w": 37,
        "h": 21
      },
      {
        "tag": "button",
        "text": "Run",
        "x": 1003,
        "y": 854,
        "w": 88,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 1090,
        "y": 854,
        "w": 31,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 1299,
        "y": 854,
        "w": 41,
        "h": 41
      },
      {
        "tag": "div",
        "text": "Image Loader",
        "testid": "rf__node-LoadImage-4c36e1ad",
        "x": 560,
        "y": 432,
        "w": 360,
        "h": 446
      },
      {
        "tag": "button",
        "text": "",
        "x": 499,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 546,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 592,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 639,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 685,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 731,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 789,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 835,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 893,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 940,
        "y": 338,
        "w": 41,
        "h": 41
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 621,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 671,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 711,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run All",
        "x": 768,
        "y": 1022,
        "w": 89,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 857,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 455,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 514,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 550,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 586,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h1",
        "text": "Settings",
        "x": 465,
        "y": 71,
        "w": 192,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Profile",
        "x": 457,
        "y": 127,
        "w": 208,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Billing",
        "x": 457,
        "y": 163,
        "w": 208,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Preferences",
        "x": 457,
        "y": 199,
        "w": 208,
        "h": 32
      },
      {
        "tag": "a",
        "text": "MCP",
        "x": 457,
        "y": 235,
        "w": 208,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Teams",
        "x": 457,
        "y": 271,
        "w": 208,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 625,
        "y": 971,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h2",
        "text": "Profile",
        "x": 690,
        "y": 73,
        "w": 53,
        "h": 28
      },
      {
        "tag": "label",
        "text": "Avatar",
        "x": 703,
        "y": 161,
        "w": 739,
        "h": 14
      },
      {
        "tag": "button",
        "text": "",
        "x": 703,
        "y": 183,
        "w": 64,
        "h": 64
      },
      {
        "tag": "label",
        "text": "Display Name",
        "x": 703,
        "y": 267,
        "w": 362,
        "h": 14
      },
      {
        "tag": "input",
        "text": "Enrong Xie",
        "x": 703,
        "y": 289,
        "w": 362,
        "h": 36
      },
      {
        "tag": "label",
        "text": "Email",
        "x": 1081,
        "y": 268,
        "w": 36,
        "h": 14
      },
      {
        "tag": "input",
        "text": "enrong@youart.ai",
        "x": 1081,
        "y": 291,
        "w": 362,
        "h": 36
      },
      {
        "tag": "label",
        "text": "Creator page cover",
        "x": 703,
        "y": 347,
        "w": 739,
        "h": 14
      },
      {
        "tag": "button",
        "text": "None",
        "x": 706,
        "y": 377,
        "w": 54,
        "h": 29
      },
      {
        "tag": "button",
        "text": "Image",
        "x": 760,
        "y": 377,
        "w": 59,
        "h": 29
      },
      {
        "tag": "button",
        "text": "Video",
        "x": 819,
        "y": 377,
        "w": 57,
        "h": 29
      },
      {
        "tag": "button",
        "text": "Drop an image here, or click to upload JPG, PNG or WebP, up to 10MB.",
        "x": 703,
        "y": 421,
        "w": 370,
        "h": 123
      },
      {
        "tag": "label",
        "text": "Bio",
        "x": 703,
        "y": 602,
        "w": 739,
        "h": 14
      },
      {
        "tag": "textarea",
        "text": "Tell us about yourself...",
        "x": 703,
        "y": 624,
        "w": 739,
        "h": 64
      },
      {
        "tag": "label",
        "text": "Roles",
        "x": 703,
        "y": 708,
        "w": 37,
        "h": 19
      },
      {
        "tag": "input",
        "text": "e.g. Director, Animator (press Enter)",
        "x": 712,
        "y": 742,
        "w": 344,
        "h": 24
      },
      {
        "tag": "label",
        "text": "Tools",
        "x": 1081,
        "y": 708,
        "w": 36,
        "h": 19
      },
      {
        "tag": "input",
        "text": "e.g. Blender, Photoshop (press Enter)",
        "x": 1090,
        "y": 742,
        "w": 344,
        "h": 24
      },
      {
        "tag": "label",
        "text": "Social links",
        "x": 703,
        "y": 831,
        "w": 250,
        "h": 14
      },
      {
        "tag": "button",
        "text": "Add your first link",
        "x": 991,
        "y": 954,
        "w": 162,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Close",
        "x": 1439,
        "y": 79,
        "w": 16,
        "h": 16
      }
    ],
    "flow": {
      "viewport": "translate(-346.276px, -74.0291px) scale(1.28727)",
      "nodes": [
        {
          "id": "LoadImage-71329618",
          "transform": "translate(319px, 192px)",
          "x": 64,
          "y": 173,
          "w": 360,
          "h": 286,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 425,
              "cy": 324
            }
          ]
        },
        {
          "id": "Text-890d5e5c",
          "transform": "translate(679px, 192px)",
          "x": 528,
          "y": 173,
          "w": 360,
          "h": 211,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 528,
              "cy": 307
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 888,
              "cy": 286
            }
          ]
        },
        {
          "id": "SeedancePro25OmniReferenceGenerate-1e5a2a82",
          "transform": "translate(1039px, 192px)",
          "x": 991,
          "y": 173,
          "w": 360,
          "h": 734,
          "selected": false,
          "handles": [
            {
              "id": "edge-in-text_input-1",
              "type": "target",
              "cx": 991,
              "cy": 609
            },
            {
              "id": "edge-in-text_input-2",
              "type": "target",
              "cx": 991,
              "cy": 609
            },
            {
              "id": "edge-in-image_1",
              "type": "target",
              "cx": 991,
              "cy": 364
            },
            {
              "id": "edge-in-image_2",
              "type": "target",
              "cx": 991,
              "cy": 364
            },
            {
              "id": "edge-in-video_1",
              "type": "target",
              "cx": 991,
              "cy": 281
            },
            {
              "id": "edge-in-audio_1",
              "type": "target",
              "cx": 991,
              "cy": 447
            },
            {
              "id": "edge-out",
              "type": "source",
              "cx": 1374,
              "cy": 554
            }
          ]
        },
        {
          "id": "LoadImage-4c36e1ad",
          "transform": "translate(704.028px, 393.282px)",
          "x": 560,
          "y": 432,
          "w": 360,
          "h": 446,
          "selected": false,
          "handles": [
            {
              "id": "edge-out",
              "type": "source",
              "cx": 942,
              "cy": 868
            }
          ]
        }
      ],
      "edges": [
        {
          "id": "rf__edge-LoadImage-71329618-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-image_1",
          "d": "M605.0005888718835,309.0002552564609 C819.0002894593244,309.0002552564609 819.0002894593244,340.59406952006475 1032.9999900467656,340.59406952006475"
        },
        {
          "id": "rf__edge-Text-890d5e5c-edge-out_SeedancePro25OmniReferenceGenerate-1e5a2a82-edge-in-text_input-1",
          "d": "M965,280 C998.9999950233828,280 998.9999950233828,530.594447925042 1032.9999900467656,530.594447925042"
        }
      ]
    }
  },
  "option-duplicate-after": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "div",
        "text": "yanami Image Loader",
        "testid": "rf__node-LoadImage-95ee4cd5",
        "x": 240,
        "y": 136,
        "w": 280,
        "h": 347
      },
      {
        "tag": "button",
        "text": "",
        "x": 193,
        "y": 63,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 229,
        "y": 63,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 265,
        "y": 63,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 301,
        "y": 63,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 337,
        "y": 63,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 373,
        "y": 63,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 418,
        "y": 63,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 454,
        "y": 63,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 499,
        "y": 63,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 535,
        "y": 63,
        "w": 32,
        "h": 32
      },
      {
        "tag": "div",
        "text": "yanami Image Loader",
        "testid": "rf__node-LoadImage-fb514608",
        "x": 640,
        "y": 136,
        "w": 280,
        "h": 347
      },
      {
        "tag": "button",
        "text": "",
        "x": 593,
        "y": 63,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 629,
        "y": 63,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 665,
        "y": 63,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 701,
        "y": 63,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 737,
        "y": 63,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 773,
        "y": 63,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 818,
        "y": 63,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 854,
        "y": 63,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 899,
        "y": 63,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 935,
        "y": 63,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 601,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 651,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 691,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run Selected",
        "x": 748,
        "y": 1022,
        "w": 130,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 878,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 416,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 476,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 512,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 548,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1455,
        "y": 967,
        "w": 44,
        "h": 44
      },
      {
        "tag": "button",
        "text": "",
        "x": 1487,
        "y": 963,
        "w": 16,
        "h": 16
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "1",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ]
  },
  "option-duplicate-before": {
    "pageW": 1920,
    "pageH": 1080,
    "els": [
      {
        "tag": "button",
        "text": "Send feedback",
        "x": 1249,
        "y": 1020,
        "w": 149,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 456,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 509,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 549,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 18,
        "y": 589,
        "w": 36,
        "h": 36
      },
      {
        "tag": "div",
        "text": "yanami Image Loader",
        "testid": "rf__node-LoadImage-95ee4cd5",
        "x": 240,
        "y": 136,
        "w": 280,
        "h": 347
      },
      {
        "tag": "button",
        "text": "",
        "x": 193,
        "y": 63,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 229,
        "y": 63,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 265,
        "y": 63,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 301,
        "y": 63,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 337,
        "y": 63,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 373,
        "y": 63,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 418,
        "y": 63,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 454,
        "y": 63,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 499,
        "y": 63,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 535,
        "y": 63,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 16,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 48,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 80,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 112,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 144,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "a",
        "text": "",
        "x": 176,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 208,
        "y": 1032,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 252,
        "y": 1028,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 12,
        "y": 12,
        "w": 68,
        "h": 40
      },
      {
        "tag": "button",
        "text": "Share",
        "x": 1204,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "3,608",
        "x": 1285,
        "y": 12,
        "w": 79,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 1372,
        "y": 12,
        "w": 40,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 621,
        "y": 1024,
        "w": 46,
        "h": 36
      },
      {
        "tag": "button",
        "text": "New",
        "x": 671,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "",
        "x": 711,
        "y": 1024,
        "w": 36,
        "h": 36
      },
      {
        "tag": "button",
        "text": "Run All",
        "x": 768,
        "y": 1022,
        "w": 89,
        "h": 40
      },
      {
        "tag": "button",
        "text": "",
        "x": 857,
        "y": 1022,
        "w": 32,
        "h": 40
      },
      {
        "tag": "button",
        "text": "New Chat",
        "x": 1446,
        "y": 18,
        "w": 99,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1834,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1870,
        "y": 16,
        "w": 32,
        "h": 32
      },
      {
        "tag": "h3",
        "text": "Start a conversation",
        "x": 1482,
        "y": 455,
        "w": 384,
        "h": 20
      },
      {
        "tag": "button",
        "text": "Could you help me create a logo for my website ?",
        "x": 1522,
        "y": 514,
        "w": 304,
        "h": 28
      },
      {
        "tag": "button",
        "text": "I want to make a poster for my event",
        "x": 1559,
        "y": 550,
        "w": 230,
        "h": 28
      },
      {
        "tag": "button",
        "text": "Could you put my product into the model ?",
        "x": 1542,
        "y": 586,
        "w": 265,
        "h": 28
      },
      {
        "tag": "button",
        "text": "",
        "x": 1451,
        "y": 1027,
        "w": 32,
        "h": 32
      },
      {
        "tag": "button",
        "text": "2",
        "x": 1491,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Agent",
        "x": 1552,
        "y": 1027,
        "w": 102,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Auto-run",
        "x": 1662,
        "y": 1027,
        "w": 96,
        "h": 32
      },
      {
        "tag": "button",
        "text": "0",
        "x": 1766,
        "y": 1027,
        "w": 53,
        "h": 32
      },
      {
        "tag": "button",
        "text": "Thinking",
        "x": 1765,
        "y": 1027,
        "w": 94,
        "h": 32
      },
      {
        "tag": "button",
        "text": "",
        "x": 1865,
        "y": 1027,
        "w": 32,
        "h": 32
      }
    ]
  }
};
