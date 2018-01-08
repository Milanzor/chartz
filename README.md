# chartz


##How to use

1. Clone or download the zip of this repo (https://github.com/Milanzor/chartz/archive/master.zip)
2. Create `public/chartoptions.js` (check `public/demo.chartoptions.js` for an example)
3. Put the `window.charts` definition down below in your `public/chartoptions.js`
4. Open  `public/index.html` in your Chrome
5. All done!
```
  window.charts = [
      // Taart 1
      {
          title: {
              text: "Voorbeeld 1"
          },
          series: [{
              name: "Aantal",
              data: [
                  ['A', 88.19],
                  ['B', 9.22],
                  ['C', 1.58],
                  ['D', 1.01]
              ]
          }],
      },
  
      // Taart 2
      {
          title: {
              text: "Voorbeeld 2"
          },
          series: [{
              name: "Aantal",
              data: [
                  ['A', 77.83],
                  ['B', 17.8],
                  ['C', 2.94],
                  ['D', 0.72],
              ]
          }],
      },
  ];
  ```


## Note

If `window.charts` is not defined, script will fallback to the loaded `demo.chartoptions.js` in the public folder and show a demo chart.
