const path = require('path')
const resolve  =(pathname) => path.resolve(__dirname,pathname)
const CracoLessPlugin = require('craco-less');
module.exports = {
    webpack: {
        alias:{
            '@':resolve("src"),
            "components":resolve("src/components"),
            'utils':resolve("src/utils"),
            '@mui/styled-engine': '@mui/styled-engine-sc'

        }
    },
    plugins: [
        {
          plugin: CracoLessPlugin,
          options: {
            lessLoaderOptions: {
              lessOptions: {
                modifyVars: { '@primary-color': '#1DA57A' },
                javascriptEnabled: false,
              },
            },
          },
        },
      ],
}