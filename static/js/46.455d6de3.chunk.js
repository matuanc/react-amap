(this["webpackJsonp@uiw/react-amap"]=this["webpackJsonp@uiw/react-amap"]||[]).push([[46],{1226:function(n,a,t){"use strict";t.r(a),a.default="Geolocation \u5b9a\u4f4d\n===\n\n\u9e70\u773c\u63a7\u4ef6\uff0c\u7528\u4e8e\u663e\u793a\u7f29\u7565\u5730\u56fe\uff0c\u663e\u793a\u4e8e\u5730\u56fe\u53f3\u4e0b\u89d2\uff0c\u53ef\u4ee5\u968f\u4e3b\u56fe\u7684\u89c6\u53e3\u53d8\u5316\u800c\u53d8\u5316\uff0c\u4e5f\u53ef\u4ee5\u914d\u7f6e\u6210\u56fa\u5b9a\u4f4d\u7f6e\u5b9e\u73b0\u7c7b\u4f3c\u4e8e\u5357\u6d77\u9644\u56fe\u7684\u6548\u679c\u3002\n\n```jsx\nimport { Geolocation } from '@uiw/react-amap';\n```\n\n### \u5730\u56fe\u5b9a\u4f4d\u63a7\u4ef6\n\n\x3c!--DemoStart,bgWhite--\x3e \n```jsx\nimport React, { useState, useRef } from 'react';\nimport { APILoader, Map, Geolocation } from '@uiw/react-amap';\n\nconst Example = () => {\n  const [data, setData] = useState();\n  return (\n    <>\n      <div style={{ width: '100%', height: '300px' }}>\n        <Map zoom={4}>\n          <Geolocation\n            // \u662f\u5426\u4f7f\u7528\u9ad8\u7cbe\u5ea6\u5b9a\u4f4d\uff0c\u9ed8\u8ba4:true\n            enableHighAccuracy={true}\n            // \u8d85\u8fc710\u79d2\u540e\u505c\u6b62\u5b9a\u4f4d\uff0c\u9ed8\u8ba4\uff1a5s\n            timeout={10000}\n            // \u5b9a\u4f4d\u6309\u94ae\u7684\u505c\u9760\u4f4d\u7f6e\n            buttonPosition=\"RB\"\n            // \u5b9a\u4f4d\u6309\u94ae\u4e0e\u8bbe\u7f6e\u7684\u505c\u9760\u4f4d\u7f6e\u7684\u504f\u79fb\u91cf\uff0c\u9ed8\u8ba4\uff1aPixel(10, 20)\n            buttonOffset={new AMap.Pixel(10, 20)}\n            // \u5b9a\u4f4d\u6210\u529f\u540e\u662f\u5426\u81ea\u52a8\u8c03\u6574\u5730\u56fe\u89c6\u91ce\u5230\u5b9a\u4f4d\u70b9\n            zoomToAccuracy={true}\n            onComplete={(data) => {\n              console.log('\u8fd4\u56de\u6570\u636e\uff1a', setData, data);\n              setData(data);\n            }}\n            onError={(data) => {\n              console.log('\u9519\u8bef\u8fd4\u56de\u6570\u636e\uff1a', data);\n              setData(data);\n            }}\n          />\n        </Map>\n        <pre style={{ padding: 10, marginTop: 10 }}>\n          {data ? JSON.stringify(data, null, 2) : '{\u6b63\u5728\u83b7\u53d6}'}\n        </pre>\n      </div>\n    </>\n  );\n}\n\nReactDOM.render((\n  <APILoader akay=\"a7a90e05a37d3f6bf76d4a9032fc9129\">\n    <Example />\n  </APILoader>\n), _mount_);\n```\n\x3c!--End--\x3e\n\n### \u53ea\u83b7\u53d6\u5b9a\u4f4d\u4fe1\u606f\n\n\x3c!--DemoStart,bgWhite--\x3e \n```jsx\nimport React, { useState, useRef } from 'react';\nimport { APILoader, Geolocation } from '@uiw/react-amap';\n\nconst Example = () => {\n  const [data, setData] = useState();\n  return (\n    <>\n      <div style={{ width: '100%' }}>\n        <Geolocation\n          // \u662f\u5426\u4f7f\u7528\u9ad8\u7cbe\u5ea6\u5b9a\u4f4d\uff0c\u9ed8\u8ba4:true\n          enableHighAccuracy={true}\n          // \u8d85\u8fc710\u79d2\u540e\u505c\u6b62\u5b9a\u4f4d\uff0c\u9ed8\u8ba4\uff1a5s\n          timeout={10000}\n          // \u5b9a\u4f4d\u6309\u94ae\u7684\u505c\u9760\u4f4d\u7f6e\n          buttonPosition=\"RB\"\n          // \u5b9a\u4f4d\u6309\u94ae\u4e0e\u8bbe\u7f6e\u7684\u505c\u9760\u4f4d\u7f6e\u7684\u504f\u79fb\u91cf\uff0c\u9ed8\u8ba4\uff1aPixel(10, 20)\n          buttonOffset={new AMap.Pixel(10, 20)}\n          // \u5b9a\u4f4d\u6210\u529f\u540e\u662f\u5426\u81ea\u52a8\u8c03\u6574\u5730\u56fe\u89c6\u91ce\u5230\u5b9a\u4f4d\u70b9\n          zoomToAccuracy={true}\n          onComplete={(data) => {\n            console.log('\u8fd4\u56de\u6570\u636e\uff1a', data);\n            setData(data);\n          }}\n          onError={(data) => {\n            console.log('\u9519\u8bef\u8fd4\u56de\u6570\u636e\uff1a', data);\n            setData(data);\n          }}\n        />\n        <pre style={{ padding: 10, marginTop: 10 }}>\n          {data ? JSON.stringify(data, null, 2) : '{\u6b63\u5728\u83b7\u53d6}'}\n        </pre>\n      </div>\n    </>\n  );\n}\n\nReactDOM.render((\n  <APILoader akay=\"a7a90e05a37d3f6bf76d4a9032fc9129\">\n    <Example />\n  </APILoader>\n), _mount_);\n```\n\x3c!--End--\x3e\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| type | \u83b7\u53d6 position: \"\u83b7\u53d6 \u7528\u6237\u7684\u7cbe\u786e\u4f4d\u7f6e\uff0c\u6709\u5931\u8d25\u51e0\u7387\" \u6216 cityInfo: \"\u6839\u636e\u7528\u6237 IP \u83b7\u53d6 \u7528\u6237\u6240\u5728\u57ce\u5e02\u4fe1\u606f\" | `position|cityInfo` | `position` |\n\n### \u4e8b\u4ef6\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b |\n| ---- | ---- | ---- |\n| onComplete | \u6570\u636e\u8bf7\u6c42\u5b8c\u6210\u65f6\u89e6\u53d1\u4e8b\u4ef6\u3002 | `(data: GeolocationLiveResult | GeolocationForecastResult): void;` |\n| onError | \u6570\u636e\u8bf7\u6c42\u9519\u8bef\u65f6\u89e6\u53d1\u4e8b\u4ef6\u3002 | `(err): void;` |"}}]);
//# sourceMappingURL=46.455d6de3.chunk.js.map