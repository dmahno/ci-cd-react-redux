import React from 'react';
import './BuildLogArea.scss';

function BuildLogArea({ main = '{main}' }) {
  return (
    <div className='build-log'>
      <div className='build-log__content'>
        <pre>
          <p>Starting type checking and linting service...</p>
          <p>Using 1 worker with 2048MB memory limit</p>
          <p>
            Hash:
            d54ed20309f352b3bda76cbbb6d272ed6afde438bd7a265eb08db3624c32dfc883a8c379c67f4de6
          </p>
          <p>Version: webpack 4.41.6</p>
          <p>Child</p>
          <p>&emsp;Hash: d54ed20309f352b3bda7</p>
          <p>&emsp;Time: 40364ms</p>
          <p>&emsp;Built at: 2020-02-23 16:04:54</p>
          <p>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;
            <strong>Asset</strong>&emsp;&ensp;<strong>Size</strong>&ensp;
            <strong>Chunks</strong>&emsp;&emsp;&emsp;&nbsp;
            <strong>Chunk Names</strong>
          </p>
          <p>
            &emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;0.bundle.static.css&ensp;1.31
            MiB&emsp;&ensp;&nbsp;0&ensp;[emitted]&ensp;vendors~main
          </p>
          <p>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;0.bundle.static.js&ensp;10.3
            MiB&emsp;&ensp;&nbsp;0&ensp;[emitted]&ensp;vendors~main
          </p>
          <p>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;bundle.static.css&ensp;48.6
            KiB&emsp;&ensp;&nbsp;1&ensp;[emitted]&ensp;main
          </p>
          <p>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;bundle.static.js&ensp;&nbsp;613
            KiB&emsp;&ensp;&nbsp;1&ensp;[emitted]&ensp;main
          </p>
          <p>
            &emsp;&emsp;&emsp;&nbsp;static/media/Cat.afa2191f.svg&ensp;9.83
            KiB&emsp;&emsp;&ensp;[emitted]&ensp;
          </p>
          <p>
            &emsp;static/media/illustration.a17c1b18.svg&ensp;14.8
            KiB&emsp;&emsp;&ensp;[emitted]&ensp;
          </p>
          <p>
            &emsp;&emsp;&nbsp;static/media/picture.eef6f3b8.svg&ensp;16.2
            KiB&emsp;&emsp;&ensp;[emitted]&ensp;
          </p>
          <p>
            &emsp;Entrypoint main = 0.bundle.static.css 0.bundle.static.js
            bundle.static.css bundle.static.js
          </p>
          <p>
            &emsp;[./node_modules/webpack/buildin/global.js]
            (webpack)/buildin/global.js 472 bytes {0} [built]
          </p>
          <p>&emsp;[./src/account/actions/index.ts] 2.46 KiB {1} [built]</p>
          <p>
            &emsp;[./src/account/api/lib/models/index.ts] 2.17 KiB {1} [built]
          </p>
          <p>
            &emsp;[./src/account/api/lib/models/mappers.ts] 21 KiB {1} [built]
          </p>
          <p>
            &emsp;[./src/account/api/lib/schoolaccountAPI.ts] 4.97 KiB {1}{' '}
            [built]
          </p>
          <p>
            &emsp;[./src/account/api/lib/schoolaccountAPIContext.ts] 1.73 KiB{' '}
            {1} [built]
          </p>
          <p>&emsp;[./src/account/epics/index.ts] 328 bytes {1} [built]</p>
          <p>&emsp;[./src/account/epics/pageData.ts] 834 bytes {1} [built]</p>
          <p>
            &emsp;[./src/account/epics/personalPage.ts] 2.29 KiB {1} [built]
          </p>
          <p>
            &emsp;[./src/account/epics/registrationForm.ts] 910 bytes {1}{' '}
            [built]
          </p>
          <p>&emsp;[./src/account/index.tsx] 561 bytes {1} [built]</p>
          <p>
            &emsp;[./src/account/reducers/githubRepos.ts] 837 bytes {1} [built]
          </p>
          <p>&emsp;[./src/account/reducers/index.ts] 1.83 KiB {1} [built]</p>
          <p>
            &emsp;[./src/account/reducers/serverError.ts] 526 bytes {1} [built]
          </p>
          <p>&emsp;[./src/account/store.ts] 1.05 KiB {1} [built]</p>
          <p>&emsp;&emsp;+ 1864 hidden modules</p>
          <p>Child</p>
          <p>&emsp;Hash: 6cbbb6d272ed6afde438</p>
          <p>&emsp;Time: 32877ms</p>
          <p>&emsp;Built at: 2020-02-23 16:04:47</p>
          <p>
            &emsp;&emsp;Asset&emsp;&ensp;Size&ensp;Chunks&emsp;&emsp;&emsp;&nbsp;Chunk
            Names
          </p>
          <p>
            &emsp;server.js&ensp;6.34 MiB&emsp;main&ensp;[emitted]&ensp;main
          </p>
          <p>&emsp;Entrypoint main = server.js</p>
          <p>&emsp;[./src/account/actions/index.ts] 2.46 KiB {main} [built]</p>
          <p>
            &emsp;[./src/account/api/lib/models/index.ts] 2.17 KiB {main}{' '}
            [built]
          </p>
          <p>
            &emsp;[./src/account/api/lib/models/mappers.ts] 21 KiB {main}{' '}
            [built]
          </p>
          <p>
            &emsp;[./src/account/api/lib/schoolaccountAPI.ts] 4.97 KiB {main}{' '}
            [built]
          </p>
          <p>
            &emsp;[./src/account/api/lib/schoolaccountAPIContext.ts] 1.73 KiB{' '}
            {main} [built]
          </p>
          <p>&emsp;[./src/account/epics/index.ts] 328 bytes {main} [built]</p>
          <p>
            &emsp;[./src/account/epics/pageData.ts] 834 bytes {main} [built]
          </p>
          <p>
            &emsp;[./src/account/epics/personalPage.ts] 2.29 KiB {main} [built]
          </p>
          <p>
            &emsp;[./src/account/epics/registrationForm.ts] 910 bytes {main}{' '}
            [built]
          </p>
          <p>&emsp;[./src/account/mappers/index.ts] 2.18 KiB {main} [built]</p>
          <p>
            &emsp;[./src/account/reducers/githubRepos.ts] 837 bytes {main}{' '}
            [built]
          </p>
          <p>&emsp;[./src/account/reducers/index.ts] 1.83 KiB {main} [built]</p>
          <p>
            &emsp;[./src/account/reducers/serverError.ts] 526 bytes {main}{' '}
            [built]
          </p>
          <p>&emsp;[./src/account/server.tsx] 1.62 KiB {main} [built]</p>
          <p>&emsp;[./src/account/store.ts] 1.05 KiB {main} [built]</p>
          <p>&emsp;&emsp;+ 1484 hidden modules</p>
        </pre>
      </div>
    </div>
  );
}

export default BuildLogArea;
