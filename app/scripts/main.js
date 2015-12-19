require.config({
  baseUrl: 'app',
  paths: {
    jquery: 'lib/jquery-2.1.3',
    json: 'lib/json',
    d3: 'lib/d3.min',
    'dagre-d3': 'lib/dagre-d3.min',
    text: 'lib/text',
    lettuce: 'lib/lettuce',
    'underscore': 'lib/underscore-min',
    'jquery.tooltipster': 'lib/jquery.tooltipster.min'
  },
  'shim': {
    'jquery.tooltipster': {
      deps: ['jquery']
    },
    'dagre-d3': {
      deps: ['d3']
    }
  }
});

require(['lib/knockout', 'scripts/render',
    'json!data/code.json',
    'json!data/frontend.json',
    'json!data/cd.json',
    'json!data/lang.json',
    'json!data/ml.json'
  ],
  function (ko, render,
            code,
            frontend,
            cd,
            lang,
            ml) {
    'use strict';

    render.renderPage(code, '#code');
    render.renderPage(frontend, '#frontend');
    render.renderPage(cd, '#cd');
    render.renderPage(lang, '#lang');
    render.renderPage(ml, '#ml');
  });