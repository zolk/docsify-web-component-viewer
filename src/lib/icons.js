/* Copyright (c) 2022 Kevin Zolkiewicz.
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

const customIcons = window.$docsify.componentViewer?.icons;

const { customResizer, customArrow, customWindow, customCustomize } =
  customIcons ?? [];

export const resizerIcon =
  customResizer ??
  `<svg aria-hidden="true" width="11" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M.586 3.414A2 2 0 1 0 3.414.586 2 2 0 0 0 .586 3.414ZM.586 9.414a2 2 0 1 0 2.828-2.828A2 2 0 0 0 .586 9.414ZM.586 15.414a2 2 0 1 0 2.828-2.828 2 2 0 0 0-2.828 2.828ZM7.586 3.414A2 2 0 1 0 10.414.586a2 2 0 0 0-2.828 2.828ZM7.586 9.414a2 2 0 1 0 2.828-2.828 2 2 0 0 0-2.828 2.828ZM7.586 15.414a2 2 0 1 0 2.828-2.828 2 2 0 0 0-2.828 2.828Z" fill="currentColor" />
   </svg>`;

export const arrowIcon =
  customArrow ??
  `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
   </svg>`;

export const windowIcon =
  customWindow ??
  `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
   </svg>`;

export const controlsIcon =
  customCustomize ??
  `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
   </svg>`;
