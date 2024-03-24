import dts from "bun-plugin-dts";

await Bun.build({
    entrypoints: ["./src/module.ts"],
    outdir: "./dist",
    minify: true,
    plugins: [dts()],
});
