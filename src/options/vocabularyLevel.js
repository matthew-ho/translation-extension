// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let page = document.getElementById('buttonDiv');
const kButtonColors = ['#3aa757', '#f9bb2d', '#e8453c', '#3aa756', '#f9bb2c', '#e8453b'];
const kButtonTags = ['Easy(CH)', 'intermediate(CH)', 'advanced(CH)', 'Easy(FR)', 'intermediate(FR)', 'advanced(FR)'];

function constructOptions(kButtonColors, kButtonTags) {
  let i = 0;
  for (let item of kButtonColors) {
    let button = document.createElement('button');
    button.style.backgroundColor = item;
    button.textContent = kButtonTags[i];
    button.addEventListener('click', function() {
      chrome.storage.sync.set({color: item}, function() {
        console.log('difficulty is ' + item);
      })
    });
    page.appendChild(button);
    i++;
  }
}
constructOptions(kButtonColors, kButtonTags);
