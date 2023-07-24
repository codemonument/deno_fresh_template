import { defineConfig, Preset } from "@twind/core";
import presetTailwind from "@twind/preset-tailwind";
import presetAutoprefix from "@twind/preset-autoprefix";
import presetContainerQueries from "@twind/preset-container-queries";
import presetTypography from "@twind/preset-typography";

export default {
  ...defineConfig({
    presets: [
      presetAutoprefix(),
      presetTailwind() as Preset,
      presetContainerQueries(),
      presetTypography(),
    ],
  }),
  selfURL: import.meta.url,
};
