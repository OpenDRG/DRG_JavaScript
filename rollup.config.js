import terser from '@rollup/plugin-terser';

export default [{
    input: 'drg_group/chs_drg_11/GroupTest.js',
    output: [{
        file: 'bundle_chs_drg_11.js',
        format: 'es',
        inlineDynamicImports: true,
    },
    {
        file: 'bundle_chs_drg_11.min.js',
        format: 'es',
        inlineDynamicImports: true,
        plugins: [terser()]
    }]
},
{
    input: 'drg_group/suzhou_2022/GroupTest.js',
    output: [{
        file: 'bundle_suzhou_2022.js',
        format: 'es',
        inlineDynamicImports: true,
    },
    {
        file: 'bundle_suzhou_2022.min.js',
        format: 'es',
        inlineDynamicImports: true,
        plugins: [terser()]
    }]
},
{
    input: 'drg_group/taizhou_2022/GroupTest.js',
    output: [{
        file: 'bundle_taizhou_2022.js',
        format: 'es',
        inlineDynamicImports: true,
    },
    {
        file: 'bundle_taizhou_2022.min.js',
        format: 'es',
        inlineDynamicImports: true,
        plugins: [terser()]
    }]
},
{
    input: 'drg_group/wuxi_2022/GroupTest.js',
    output: [{
        file: 'bundle_wuxi_2022.js',
        format: 'es',
        inlineDynamicImports: true,
    },
    {
        file: 'bundle_wuxi_2022.min.js',
        format: 'es',
        inlineDynamicImports: true,
        plugins: [terser()]
    }]
},
{
    input: 'drg_group/wuhan_2022/GroupTest.js',
    output: [{
        file: 'bundle_wuhan_2022.js',
        format: 'es',
        inlineDynamicImports: true,
    },
    {
        file: 'bundle_wuhan_2022.min.js',
        format: 'es',
        inlineDynamicImports: true,
        plugins: [terser()]
    }]
},
{
    input: 'drg_group/beijing_2022/GroupTest.js',
    output: [{
        file: 'bundle_beijing_2022.js',
        format: 'es',
        inlineDynamicImports: true,
    },
    {
        file: 'bundle_beijing_2022.min.js',
        format: 'es',
        inlineDynamicImports: true,
        plugins: [terser()]
    }]
},
];