{\rtf1\ansi\ansicpg1252\cocoartf2820
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 \
export default function json2html(data) \{\
  const columns = new Set(data.flatMap(Object.keys));\
  \
  let html = `<table data-user="alexjames89900@gmail.com">\\n  <thead>\\n    <tr>`;\
  columns.forEach(col => html += `<th>$\{col\}</th>`);\
  html += `</tr>\\n  </thead>\\n  <tbody>`;\
\
  data.forEach(row => \{\
    html += `\\n    <tr>`;\
    columns.forEach(col => html += `<td>$\{row[col] ?? ''\}</td>`);\
    html += `</tr>`;\
  \});\
\
  html += `\\n  </tbody>\\n</table>`;\
  return html;\
\}\
}