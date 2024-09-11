import presetWeapp from "unocss-preset-weapp"
import { extractorAttributify, transformerClass } from "unocss-preset-weapp/transformer"
import { defineConfig,Preset} from "unocss"

// 可以写属性会自动增加class,也可以写class
const prefix = "uno-"

// 使用泛型明确类型，指定 presetWeappAttributify 返回类型为 Preset<object>
const { presetWeappAttributify, transformerAttributify } = extractorAttributify({ classPrefix: prefix }) as { 
  presetWeappAttributify: () => Preset<object>, 
  transformerAttributify: () => any 
};

export default defineConfig({
  presets: [
    // 将 presetWeapp 返回类型强制转换为 Preset<object>
    presetWeapp({ prefix }) as Preset<object>,
    // 使用泛型明确类型的 presetWeappAttributify
    presetWeappAttributify()
  ],
  shortcuts: [
    {
      "uno-center": "uno-flex uno-justify-center uno-items-center"
    }
  ],
  transformers: [
    // 使用 transformerAttributify 和 transformerClass
    transformerAttributify(),
    transformerClass()
  ]
})