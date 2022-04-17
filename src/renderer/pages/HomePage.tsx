import Split from 'react-split';
// import Prism from 'prismjs';
// import React from "react";
import PrismCode from "../components/PrismCode";
import Font from "../components/Font";

// const code = `
// const foo = 'foo';
// const bar = 'bar';
// console.log(foo + bar);
// `;

const JSCode = `const App = props => {
  return (
    <div>
      <h1> Prism JS </h1>
      <div>Awesome Syntax Highlighter</div>
    </div>
  );
};
`;

// const htmlCode = `
//     <div>
//       <h1> PrismJS Tutorial </h1>
//       <p class="hello">
//       Prism is a lightweight, extensible syntax highlighter, built with modern web standards in mind.
//       </p>
//     </div>
// `;

export default function HomePage() {

  // React.useEffect(() => {
  //   setTimeout(() => Prism.highlightAll(), 0);
  // }, []);

  // return (
  //   <div className="flex divide-x divide-gray-400 min-h-screen">
  //     <div className="w-1/4"></div>
  //     <div className="w-3/4 p-10 overflow-auto space-y-10">
  //
  //     </div>
  //   </div>
  // );

  return (
    <Split
      sizes={[30, 70]}
      minSize={250}
      maxSize={[320, Infinity]}
      gutterSize={3}
      snapOffset={0}
      className="flex h-screen"
    >
      <aside className="select-none overflow-auto bg-gainsboro dark:bg-eerie-black">
        <ul className="space-y-6">
          <li>
            <small className="uppercase px-2 py-4 text-[10px] font-medium text-black/30 dark:text-white/30">
              code theme
            </small>
            <div
              className="cursor-auto p-2 flex items-center active:bg-light-steel-blue/50 dark:active:bg-charcoal hover:transition">
              <div className="flex flex-col flex-1 leading-tight">
                <span className="text-sm text-black dark:text-white">Theme</span>
                <small className="text-black/50 dark:text-white/50 font-medium text-[10px]">One Light</small>
              </div>
              <div className="flex space-x-2 items-center">
                <div className="h-6 w-6 rounded ring ring-white/50 bg-transparent"></div>
                <i className="mdi mdi-chevron-right text-xl text-black/30 dark:text-white/30"></i>
              </div>
            </div>
          </li>
          <li>
            <Font/>
          </li>
          <li>
            <small className="uppercase text-gray-600 px-2 py-4 text-xs font-medium">
              Line Numbers
            </small>
            <ul>
              <li>
                <label htmlFor="toggle" className="cursor-auto px-2 py-1 flex items-center active:bg-gray-400/50 hover:transition space-x-2">
                  <div className="text-sm flex-1">Show Line Numbers</div>
                  <div className="relative">
                    <input type="checkbox" id="toggle" className="sr-only peer"/>
                    <div className="peer-checked:bg-blue-500 block bg-gray-400/50 w-11 h-6 rounded-full transition"></div>
                    <div className="text-transparent peer-checked:text-white peer-checked:bg-info-67c3d0 transform peer-checked:translate-x-full absolute left-0 top-0 m-0.5 bg-light-d4dade border border-white w-5 h-5 rounded-full transition shadow-md flex items-center justify-center">
                      <i className="mdi mdi-check"></i>
                    </div>
                  </div>
                </label>
              </li>
              <li>
                <div
                  className="cursor-auto px-2 py-1 flex items-center active:bg-gray-400/50 hover:transition">
                  <div className="text-sm flex-1">First Line Number</div>
                  <input type="text" value={1} className="text-xs font-medium w-16 bg-gray-400/50 rounded-md text-center outline-none p-1"/>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <small className="uppercase text-gray-600 px-2 py-4 text-xs font-medium">
              Background
            </small>
            <ul>
              <li>
                <div
                  className="cursor-auto px-2 py-1 flex flex-col active:bg-gray-400/50 hover:transition space-y-4">
                  <div className="text-sm flex-1">Background Style</div>
                  <div className="flex space-x-3">
                    <div className="cursor-pointer w-1/4 flex flex-col items-center">
                      <div className="w-full aspect-square bg-blue-500 rounded-md ring"></div>
                      <small>Solid</small>
                    </div>
                    <div className="cursor-pointer w-1/4 flex flex-col items-center">
                      <div className="w-full aspect-square bg-gradient-to-b from-indigo-500 to-blue-700 rounded-md"></div>
                      <small>Gradient</small>
                    </div>
                    <div className="cursor-pointer w-1/4 flex flex-col items-center">
                      <div className="w-full aspect-square bg-blue-500 rounded-md flex items-center justify-center">
                        <i className="mdi mdi-image-outline text-3xl text-blue-900"></i>
                      </div>
                      <small>Image</small>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="cursor-auto px-2 py-1 flex items-center active:bg-gray-400/50 hover:transition">
                  <div className="text-sm flex-1">Background Color</div>
                  <div className="flex space-x-1 items-center">
                    <div className="h-6 w-6 rounded bg-blue-800"></div>
                    <i className="mdi mdi-chevron-right opacity-25 text-xl"></i>
                  </div>
                </div>
              </li>
              <li>
                <label htmlFor="toggle2" className="cursor-auto px-2 py-1 flex items-center active:bg-gray-400/50 hover:transition space-x-2">
                  <div className="text-sm flex-1">Shadow</div>
                  <div className="relative">
                    <input type="checkbox" id="toggle2" className="sr-only peer"/>
                    <div className="peer-checked:bg-blue-500 block bg-gray-400/50 w-11 h-6 rounded-full transition"></div>
                    <div className="text-transparent peer-checked:text-white peer-checked:bg-info-67c3d0 transform peer-checked:translate-x-full absolute left-0 top-0 m-0.5 bg-light-d4dade border border-white w-5 h-5 rounded-full transition shadow-md flex items-center justify-center">
                      <i className="mdi mdi-check"></i>
                    </div>
                  </div>
                </label>
              </li>
              <li>
                <label htmlFor="toggle3" className="cursor-auto px-2 py-1 flex items-center active:bg-gray-400/50 hover:transition space-x-2">
                  <div className="text-sm flex-1">Watermark</div>
                  <div className="relative">
                    <input type="checkbox" id="toggle3" className="sr-only peer"/>
                    <div className="peer-checked:bg-blue-500 block bg-gray-400/50 w-11 h-6 rounded-full transition"></div>
                    <div className="text-transparent peer-checked:text-white peer-checked:bg-info-67c3d0 transform peer-checked:translate-x-full absolute left-0 top-0 m-0.5 bg-light-d4dade border border-white w-5 h-5 rounded-full transition shadow-md flex items-center justify-center">
                      <i className="mdi mdi-check"></i>
                    </div>
                  </div>
                </label>
              </li>
            </ul>
          </li>
          <li>
            <small className="uppercase text-gray-600 px-2 py-4 text-xs font-medium">
              Code Window
            </small>
            <ul>
              <li>
                <div
                  className="cursor-auto px-2 py-1 flex flex-col active:bg-gray-400/50 hover:transition space-y-4">
                  <div className="text-sm flex-1">Code Window Style</div>
                  <div className="flex space-x-5">
                    <div className="cursor-pointer w-1/2 flex flex-col items-center">
                      <div className="w-full h-16 rounded-md ring relative bg-gray-400">
                        <div
                          className="absolute bottom-0 right-0 bg-gray-500 rounded-tl-xl rounded-br-md h-14 w-11/12"></div>
                      </div>
                      <small>Solid</small>
                    </div>
                    <div className="cursor-pointer w-1/2 flex flex-col items-center">
                      <div className="w-full h-16 rounded-md relative bg-gray-400">
                        <div
                          className="absolute bottom-0 right-0 bg-gray-700 rounded-tl-xl rounded-br-md h-14 w-11/12"></div>
                      </div>
                      <small>Blur</small>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="cursor-auto px-2 py-1 flex items-center active:bg-gray-400/50 hover:transition">
                  <div className="text-sm flex-1">Window Buttons</div>
                  <div className="flex space-x-1 items-center">
                    <span className="text-gray-600 text-xs font-medium">X</span>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="cursor-auto px-2 py-1 flex items-center active:bg-gray-400/50 hover:transition">
                  <div className="text-sm flex-1">Fixed Width</div>
                  <div className="flex space-x-1 items-center">
                    <span className="text-gray-600 text-xs font-medium">X</span>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="cursor-auto px-2 py-1 flex items-center active:bg-gray-400/50 hover:transition">
                  <div className="text-sm flex-1">Code Width</div>
                  <div className="flex items-center space-x-2">
                    <small className="text-gray-600 font-medium">400pt</small>
                    <div
                      className="ring flex items-center bg-gray-400/50 rounded-md active:bg-gray-400 transition text-lg text-gray-700">
                      <button className="px-3">-</button>
                      <div className="h-3 border-l opacity-50"></div>
                      <button className="px-3">+</button>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="cursor-auto px-2 py-1 flex items-center active:bg-gray-400/50 hover:transition">
                  <div className="text-sm flex-1">Corner Radius</div>
                  <div className="flex items-center space-x-2">
                    <small className="text-gray-600 font-medium">8pt</small>
                    <div
                      className="flex items-center bg-gray-400/50 rounded-md active:bg-gray-400 transition text-lg text-gray-700">
                      <button className="px-3">-</button>
                      <div className="h-3 border-l opacity-50"></div>
                      <button className="px-3">+</button>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="cursor-auto px-2 py-1 flex items-center active:bg-gray-400/50 hover:transition">
                  <div className="text-sm flex-1">Margin</div>
                  <div className="flex items-center space-x-2">
                    <small className="text-gray-600 font-medium">40pt</small>
                    <div
                      className="flex items-center bg-gray-400/50 rounded-md active:bg-gray-400 transition text-lg text-gray-700">
                      <button className="px-3">-</button>
                      <div className="h-3 border-l opacity-50"></div>
                      <button className="px-3">+</button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
      <aside className="px-5 py-10">
        <PrismCode
          code={JSCode}
          language="js"
          plugins={['line-numbers']}
          className="rounded-md"
        />
        {/* <PrismCode */}
        {/*   code={htmlCode} */}
        {/*   language="html" */}
        {/*   plugins={["line-numbers"]} */}
        {/* /> */}
      </aside>
    </Split>
  );
}
